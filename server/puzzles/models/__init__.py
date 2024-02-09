import collections
import datetime
import logging
import math
from itertools import groupby
from typing import TYPE_CHECKING, NotRequired, TypedDict
from uuid import uuid4

from django import forms
from django.db import models
from django.db.models import Exists, F, OuterRef, Q, Sum
from django.utils import timezone

import spoilr.core.models
import spoilr.hints.models
from puzzles.hunt_config import (
    DEEP_PER_ROUND,
    DEEP_PER_SLUG,
    DONE_SLUG,
    EVENTS_ROUND_SLUG,
    MAX_GUESSES_PER_PUZZLE,
    UNLIMITED_GUESSES,
)
from puzzles.messaging import dispatch_victory_alert, send_mail_wrapper
from spoilr.core.api.events import (
    get_num_extra_a3_event_rewards,
    get_num_extra_event_rewards,
)
from spoilr.core.api.hunt import get_site_end_time, release_puzzle, release_round
from spoilr.utils import generate_url

from .utils import SlugManager, SlugModel

if TYPE_CHECKING:
    from .hydra import HydraPuzzle
    from .story import StateEnum


logger = logging.getLogger(__name__)

# a mapping of puzzle slugs to additional unlocking conditions
# that are not captured in their yaml files
# tuple elements:
#  - str: deep key
#  - int: deep needed
#  - bool: True if both regular unlock condition and special unlock
#    condition need to be fulfilled (AND condition); False if OR
SPECIAL_PUZZLE_UNLOCKS: dict[str, tuple[str, int, bool]] = {
    # Rebus and Streams of Numbers unlock at xx underworld deep
    # (specified in their yaml files) OR 3 underworld meta solves
    "rebus": ("underworld-escape", 3, False),
    "streams-of-numbers": ("underworld-escape", 3, False),
    # Hera meta unlocks at yy overworld deep (specified in its
    # yaml file) AND 42 fish solves
    "the-myriad-gamut-of-hera": ("hera-meta", 42, True),
}


def random_uuid() -> str:
    return uuid4().hex


class Round(spoilr.core.models.Round):
    # this just renames the parent_link for the multi-table inheritance
    spoilr_round = models.OneToOneField(
        spoilr.core.models.Round,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
        related_name="tph_round",
    )

    # Position is offset from top and left (%) and is defined in percentage of
    # overall act canvas.
    x = models.FloatField(default=0)
    y = models.FloatField(default=0)
    w = models.FloatField(default=0)
    z = models.IntegerField(default=0)

    text_overlay = models.BooleanField(default=False)
    autoresize = models.BooleanField(default=True)

    # used in team-visible notifications involving this round
    emoji = models.CharField(max_length=500, blank=True)


class PuzzleManager(SlugManager["Puzzle"]):
    def get_queryset(self, *args, **kwargs):
        # Prefetches the round and event status automatically.
        return (
            super()
            .get_queryset(*args, **kwargs)
            .select_related("round__superround", "event")
        )

    def unlocked_by_team(self, team):
        """Returns a queryset of puzzles that have been unlocked by a given team."""
        if team.is_internal:
            return self.get_queryset()

        return self.filter(
            Exists(PuzzleAccess.objects.filter(team=team, puzzle=OuterRef("pk")))
        )


class Puzzle(spoilr.core.models.Puzzle, SlugModel):
    """A single puzzle in the puzzlehunt."""

    objects = PuzzleManager()

    # this just renames the parent_link for the multi-table inheritance
    spoilr_puzzle = models.OneToOneField(
        spoilr.core.models.Puzzle,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
        related_name="tph_puzzle",
    )

    canonical_puzzle = models.ForeignKey(
        "self", on_delete=models.SET_NULL, null=True, blank=True
    )

    # progress threshold to unlock this puzzle
    deep = models.IntegerField(verbose_name="DEEP threshold")
    # key to use for checking deep. Defaults to round slug
    deep_key = models.CharField(
        max_length=500, verbose_name="DEEP key", null=True, blank=True
    )

    override_hint_unlocked = models.BooleanField(
        default=False,
        help_text=(
            "If true, overrides this puzzle to release hints regardless of solve count"
        ),
    )

    override_virtual_unlocked = models.BooleanField(
        default=False,
        help_text=(
            "If true, overrides this puzzle to release the virtual version regardless"
            " of time since unlock"
        ),
    )

    # Icon position is offset from center (%) and is defined in percentage of
    # overall round canvas.
    icon_x = models.FloatField(default=0)
    icon_y = models.FloatField(default=0)
    icon_size = models.FloatField(default=0)
    icon_ratio = models.FloatField(default=1)
    text_x = models.FloatField(default=0)
    text_y = models.FloatField(default=0)
    z_index = models.IntegerField(default=0)

    solved_x = models.FloatField(null=True, blank=True)
    solved_y = models.FloatField(null=True, blank=True)
    solved_size = models.FloatField(null=True, blank=True)
    solved_text_x = models.FloatField(null=True, blank=True)
    solved_text_y = models.FloatField(null=True, blank=True)

    # used in Discord integrations involving this puzzle
    emoji = models.CharField(max_length=500, default=":question:")

    # URL for testsolving in the absence of postprod (make sure this is empty before releasing!)
    testsolve_url = models.CharField(max_length=500, blank=True)

    hydra_puzzle_id: int | None
    hydra_puzzle: "HydraPuzzle"

    @property
    def short_name(self):
        ret = []
        last_alpha = False
        for c in self.name:
            if c.isalpha():
                if not last_alpha:
                    ret.append(c)
                last_alpha = True
            elif c != "'":
                if c != " ":
                    ret.append(c)
                last_alpha = False
        s = "".join(ret)
        if len(s) > 7:
            return s[:6] + "…"
        if len(s) == 1:
            return self.name[:3]
        else:
            return s

    @property
    def url(self):
        if hasattr(self, "event"):
            url = f"/events/{self.slug}"
        if hasattr(self, "hydra_puzzle"):
            # Stripped prefix for nice dynamic url in nextjs
            url = f"/puzzles/hydra-head/{self.slug.removeprefix('hydra-head-')}"
        else:
            url = f"/puzzles/{self.slug}"

        return generate_url("hunt", url)

    @property
    def hints_url(self):
        url = f"/hints/{self.slug}"
        return generate_url("hunt", url)

    def get_url(self, story_state: "StateEnum") -> str:
        return self.url

    def get_hints_url(self, story_state: "StateEnum") -> str:
        return self.hints_url

    def get_round_slug(self) -> str:
        return (self.round.superround or self.round).slug

    def on_solved(self, team: "Team") -> None:
        from puzzles.rounds import CUSTOM_ROUND_SOLVE_CALLBACKS
        from puzzles.views.puzzles import PUZZLE_SPECIFIC_SOLVE_CALLBACKS

        if self.round.slug in CUSTOM_ROUND_SOLVE_CALLBACKS:
            CUSTOM_ROUND_SOLVE_CALLBACKS[self.round.slug](self.slug, team)

        if self.slug in PUZZLE_SPECIFIC_SOLVE_CALLBACKS:
            PUZZLE_SPECIFIC_SOLVE_CALLBACKS[self.slug](team)

    def on_pseudo(self, pseudo: str, team: "Team") -> None:
        from puzzles.views.puzzles import PUZZLE_SPECIFIC_PSEUDO_CALLBACKS

        if self.slug in PUZZLE_SPECIFIC_PSEUDO_CALLBACKS:
            PUZZLE_SPECIFIC_PSEUDO_CALLBACKS[self.slug](pseudo, team)


class Team(spoilr.core.models.Team):
    # Overrides the get_queryset in SpoilrTeamManager
    objects = models.Manager()  # type: ignore

    # this just renames the parent_link for the multi-table inheritance
    spoilr_team = models.OneToOneField(
        spoilr.core.models.Team,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
    )

    # How much earlier this team should start, for early-testing teams
    # Be careful with this!
    start_offset = models.DurationField(default=datetime.timedelta)

    # Number of additional hints to award the team, on top of the 2 per day
    total_hints_awarded = models.IntegerField(default=0)

    # Number of free answers allowed to be used on non-metas.
    # Also includes free unlocks for MH-2023.
    total_free_answers_awarded = models.IntegerField(default=0)

    # Number of free answers usable on any non-meta answer, including A3 feeders,
    # but not A3 metas.
    total_a3_free_answers_awarded = models.IntegerField(default=0)

    # opted into time unlocks?
    is_being_time_unlocked = models.BooleanField(default=False)

    # Last solve time
    last_solve_time = models.DateTimeField(null=True, blank=True)

    # If true, team will have access to puzzles before the hunt starts
    is_prerelease_testsolver = models.BooleanField(default=False)

    # If true, team will not be visible to the public
    is_hidden = models.BooleanField(default=False)

    def team_url(self):
        return generate_url("hunt", f"/team/{self.slug}")

    @property
    def story_state(self) -> "StateEnum":
        from .story import StoryState  # Avoid circular import

        return StoryState.get_state(self)

    # This is an expensive function. Use context to cache where available.
    def puzzle_submissions(self, puzzle: Puzzle) -> list["PuzzleSubmission"]:
        return list(
            PuzzleSubmission.objects.filter(
                team=self,
                puzzle=puzzle,
            )
        )

    # This is a helper function to get the QuerySet of just correct puzzle
    # submissions. It exists in the context cache and should only be used by
    # functions without access to a context.
    def correct_puzzle_submissions(self) -> list["PuzzleSubmission"]:
        return list(
            PuzzleSubmission.objects.filter(team=self, status="correct")
            .select_related(
                "puzzle",
                "puzzle__round",
                "puzzle__round__tph_round",
                "puzzle__tph_puzzle__hydra_puzzle",
            )
            .order_by("timestamp")
        )

    def completed_story_sessions(self):
        """Returns set of storycard slugs for which this team has completed an interaction."""
        from .interactive import Session

        slugs = set()
        for session in Session.objects.filter(
            team=self, storycard__isnull=False, is_complete=True
        ).select_related("storycard"):
            # mypy can't narrow based on storycard__isnull (yet?)
            slugs.add(session.storycard.slug)  # type: ignore
        return slugs

    def compute_min_deep(self) -> dict[str, int]:
        round_deep: dict[str, int] = collections.defaultdict(lambda: 0)
        # Deep from time unlocks
        for deep_floor in DeepFloor.objects.filter(
            Q(team=None) | Q(team=self), enabled=True
        ):
            round_deep[deep_floor.deep_key] = max(
                deep_floor.min_deep, round_deep[deep_floor.deep_key]
            )
        return round_deep

    def compute_internal_num_event_rewards(
        self,
    ) -> tuple[int, int, list[str], list[str], int]:
        # Called by context, lives in team for easier use by spoilr code.

        # TWEAK THIS NUMBER TO GRANT MORE FREE ANSWERS PER EVENT.
        # BE WARE THAT YOU CAN'T REDUCE IT ONCE INCREASED.
        FREE_ANSWERS_PER_EVENT = 1

        correct_subs = self.correct_puzzle_submissions()
        events_solved = len(
            [
                sub
                for sub in correct_subs
                if sub.puzzle.round.slug == EVENTS_ROUND_SLUG
                and sub.puzzle.slug != "nightclub-event"
            ]
        )
        weak_event_solved = len(
            [sub for sub in correct_subs if sub.puzzle.slug == "nightclub-event"]
        )

        # 2024: *Weak* rewards, only usable for underworld puzzles
        num_total = (
            FREE_ANSWERS_PER_EVENT * weak_event_solved
            + get_num_extra_event_rewards()
            + self.total_free_answers_awarded
        )
        # 2024: *strong* rewards, usable anywhere
        num_a3_total = (
            2 * events_solved
            + get_num_extra_a3_event_rewards()
            + self.total_a3_free_answers_awarded
        )

        # Iterate over free unlocks - only usable by regular rewards.
        free_unlocks = 0
        for eu in ExtraUnlock.objects.filter(team=self):
            free_unlocks += eu.count
        num_total -= free_unlocks
        # Iterate over free non-A3 answers.
        # Some of these may be from A3 rewards. Only deduct those if needed
        # there's a way to do this without the for loop - I am not going to figure it out when I'm tired.
        used_reg = []
        used_a3 = []

        OVERWORLD_ACT = 2
        for sub in correct_subs:
            if sub.used_free_answer:
                # Deduct from weakest reward
                if sub.puzzle.round.act < OVERWORLD_ACT and num_total > 0:
                    num_total -= 1
                    used_reg.append(sub.puzzle.name)
                else:
                    num_a3_total -= 1
                    used_a3.append(sub.puzzle.name)
        return num_total, num_a3_total, used_reg, used_a3, FREE_ANSWERS_PER_EVENT

    # Prefer using the context implementation when possible, since that is cached.
    def compute_deep(
        self, correct_puzzle_subs: list["PuzzleSubmission"]
    ) -> dict[str, int]:
        round_deep: dict[str, int] = collections.defaultdict(lambda: 0)

        has_overworld = any(r.act == 2 for r in self.unlocked_rounds())

        procgen_base_ids = {22, 406, 713}
        for submission in correct_puzzle_subs:
            if submission.puzzle.slug in DEEP_PER_SLUG:
                # Only count one instance of each procgen
                skip_global = False
                if hasattr(submission.puzzle.tph_puzzle, "hydra_puzzle"):
                    skip_global = (
                        submission.puzzle.tph_puzzle.hydra_puzzle.puzzle_type
                        not in procgen_base_ids
                    )
                    procgen_base_ids.discard(
                        submission.puzzle.tph_puzzle.hydra_puzzle.puzzle_type
                    )

                for k, v in DEEP_PER_SLUG[submission.puzzle.slug].items():
                    if skip_global and not (k.startswith(("hydra-L", "hydra-R"))):
                        continue
                    round_deep[k] += v
            # Round should always defined, but do a None check regardless since
            # if this errors it breaks every page.
            elif (
                submission.puzzle.round
                and submission.puzzle.round.slug in DEEP_PER_ROUND
            ):
                # Prevent pre-breakout teams from unlocking overworld through hera solves
                # But do still unlock hera meta? IDK
                if (
                    submission.puzzle.round.slug == "the-hole-in-the-ceiling-of-hades"
                    and not has_overworld
                ):
                    # In case we time-release this too.
                    round_deep["hera-meta"] += 1
                for k, v in DEEP_PER_ROUND[submission.puzzle.round.slug].items():
                    round_deep[k] += v
            else:
                logger.warning(
                    f"Puzzle {submission.puzzle.slug} did not have slug or round called"
                    " out in hunt_config"
                )
                round_deep[submission.puzzle.round.slug] += 100

        # Check for completed story interactions.
        for story_slug in self.completed_story_sessions():
            if story_slug in DEEP_PER_SLUG:
                for k, v in DEEP_PER_SLUG[story_slug].items():
                    round_deep[k] += v

        if self.is_being_time_unlocked:
            minimum_deep = self.compute_min_deep()
            for k, v in minimum_deep.items():
                round_deep[k] = max(round_deep[k], v)
        return round_deep

    def puzzle_answer(
        self, puzzle: Puzzle, puzzle_submissions: list["PuzzleSubmission"] | None = None
    ) -> str | None:
        if puzzle_submissions is None:
            puzzle_submissions = self.puzzle_submissions(puzzle)
        assert all(
            submission.puzzle_id == puzzle.id for submission in puzzle_submissions
        )
        return (
            puzzle.answer
            if any(submission.correct for submission in puzzle_submissions)
            else None
        )

    def guesses_remaining(
        self, puzzle: Puzzle, puzzle_submissions: list["PuzzleSubmission"] | None = None
    ) -> int:
        if UNLIMITED_GUESSES:
            return 999999

        if puzzle_submissions is None:
            puzzle_submissions = self.puzzle_submissions(puzzle)
        assert all(
            submission.puzzle_id == puzzle.id for submission in puzzle_submissions
        )
        wrong_guesses = sum(
            1 for submission in puzzle_submissions if not submission.correct
        )
        extra_guess_grant = ExtraGuessGrant.objects.filter(
            team_id=self.id, puzzle=puzzle
        ).first()  # will be model or None
        extra_guesses = extra_guess_grant.extra_guesses if extra_guess_grant else 0
        return MAX_GUESSES_PER_PUZZLE + extra_guesses - wrong_guesses

    def unlocked_rounds(self):
        """Returns all available rounds that have been unlocked."""
        rounds = spoilr.core.models.Round.objects
        if not (self.is_internal or self.is_public):
            # self.rounds is a field on the spoilr team that is many-to-many through
            # the RoundAccess model.
            rounds = self.rounds  # type: ignore
        return rounds.order_by("order").select_related(
            "tph_round", "superround", "superround__tph_round"
        )

    def unlock_story_cards(self, deep):
        """Unlocks and returns all available story cards to a team."""
        from .story import StoryCard, StoryCardAccess

        # Public access and internal teams should see all story cards
        if self.is_internal or self.is_public:
            return StoryCard.objects.order_by("order")

        # Special for 2024
        # if all four events are solved, unlock the philadelphia shade
        philadelphia_slugs = [
            "philadelphia-header",
            "philadelphia-shade-b",
            "philadelphia-shade",
        ]
        unlocked_philadelphia_stories = StoryCardAccess.objects.filter(
            team=self, story_card__slug__in=philadelphia_slugs
        ).first()
        if not unlocked_philadelphia_stories:
            event_puzzle_slugs = [
                "science-event",
                "relay-event",
                "nightclub-event",
                "directions-event",
            ]
            solved_events = len(  # de-duping, not really necessary
                {
                    submission.puzzle.slug
                    for submission in self.correct_puzzle_submissions()
                    if submission.puzzle.slug in event_puzzle_slugs
                }
            )
            if solved_events == 4:
                for slug in philadelphia_slugs:
                    StoryCardAccess.objects.get_or_create(
                        team=self,
                        story_card=StoryCard.objects.get(slug=slug),
                    )

        # TODO: Unlock story cards by deep
        return [
            access.story_card
            for access in StoryCardAccess.objects.filter(team=self)
            .select_related("story_card")
            .select_related("story_card__puzzle")
            .select_related("story_card__puzzle__round")
            .order_by("story_card__order")
        ]

    def unlock_puzzles(self, deep):
        """Unlocks available puzzles to this team."""
        # Internal users should see all puzzles.
        if self.is_internal or self.is_public:
            return list(
                Puzzle.objects.all().select_related(
                    "round",
                    "round__tph_round",
                    "round__superround",
                    "round__superround__tph_round",
                    "event",
                    "hydra_puzzle",
                )
            )

        # Otherwise, iterate through what the team can access.
        puzzles = []
        unlocked_ids = set()
        for access in self.puzzleaccess_set.all().select_related(
            "puzzle__tph_puzzle__round",
            "puzzle__tph_puzzle__round__tph_round",
            "puzzle__tph_puzzle__round__superround",
            "puzzle__tph_puzzle__round__superround__tph_round",
            "puzzle__tph_puzzle__event",
            "puzzle__tph_puzzle__hydra_puzzle",
        ):
            puzzle = access.puzzle.tph_puzzle
            puzzles.append(puzzle)
            unlocked_ids.add(puzzle.id)
        unlocked_round_slugs = set()
        for round in self.unlocked_rounds():
            unlocked_round_slugs.add(round.slug)

        # Round order must be 1st because later code relies on insertion order
        # of the puzzles dict.
        # Deep_key then deep is done such that for a given key, we see all unlocked
        # puzzles then locked ones in order of round progress - this is needed for
        # event unlocks to work.
        # Slug is included because it enforces a consistent ordering in the case of
        # deep ties, which is needed for event unlock functionality.
        all_puzzles = Puzzle.objects.order_by(
            "round__order", "deep_key", "deep", "slug"
        )
        extra_unlocks = collections.defaultdict(int)
        for eu in ExtraUnlock.objects.filter(team=self):
            extra_unlocks[eu.deep_key] = eu.count
        extra_count: dict[str, int] = collections.defaultdict(int)
        # Consider if we put in work to let us stop checking early - would need to order
        # by (deep_key, deep) but requires resolving deep_key for everything and may not
        # be as flexible.
        for round_slug, puzzles_by_round in groupby(
            all_puzzles, lambda p: p.round.slug
        ):
            for puzzle in puzzles_by_round:
                deep_key = puzzle.deep_key or round_slug
                # keep puzzle locked if its require deep (puzzle.deep) exceeds the deep supplied by the
                # deep key (deep[deep_key]) or time-based unlock
                keep_locked_condition = puzzle.deep > max(
                    deep[deep_key], deep.get("all", -math.inf)
                )

                # check for special deep
                if puzzle.slug in SPECIAL_PUZZLE_UNLOCKS:
                    # exactly one special unlock condition per puzzle
                    special_deep_key, special_deep, special_condition_and = (
                        SPECIAL_PUZZLE_UNLOCKS[puzzle.slug]
                    )
                    special_keep_locked_condition = (
                        special_deep > deep[special_deep_key]
                    )

                    # De Morgan's Law in action
                    if special_condition_and is True:
                        # puzzle is unlocked = regular deep is unlocked AND special deep is unlocked
                        # puzzle is locked   = !(regular deep is unlocked AND special deep is unlocked)
                        # puzzle is locked   = (!regular deep is unlocked) OR (!special deep is unlocked)
                        # puzzle is locked   = regular deep is locked OR special deep is locked
                        keep_locked_condition = (
                            keep_locked_condition or special_keep_locked_condition
                        )
                    else:
                        # puzzle is unlocked = regular deep is unlocked OR special deep is unlocked
                        # puzzle is locked   = !(regular deep is unlocked OR special deep is unlocked)
                        # puzzle is locked   = (!regular deep is unlocked) AND (!special deep is unlocked)
                        # puzzle is locked   = regular deep is locked AND special deep is locked
                        keep_locked_condition = (
                            keep_locked_condition and special_keep_locked_condition
                        )

                if keep_locked_condition:
                    # Let first N puzzles proceed to unlocking code.
                    extra_count[deep_key] += 1
                    if extra_count[deep_key] > extra_unlocks[deep_key]:
                        continue

                if puzzle.id not in unlocked_ids:
                    release_puzzle(self, puzzle)
                    puzzles.append(puzzle)
                if round_slug not in unlocked_round_slugs:
                    release_round(self, puzzle.round)
                    unlocked_round_slugs.add(round_slug)

        return puzzles

    def compute_next_event_unlocks(
        self, deep: dict[str, int]
    ) -> tuple[dict[str, list[Puzzle]], dict[str, str], dict[str, str]]:
        """Generate a list of puzzles that might be the next event unlock.
        This is computed based on deep, ignoring any PuzzleAccess objects,
        such that the first N are always the puzzles that event unlocks
        should trigger.

        As an implication it means that we should always do time unlocks
        based on deep or event unlocks.
        """
        from puzzles.rounds.utils import SKIP_ROUNDS

        # Only allowed to use an event unlock if we have already unlocked
        # that round. Be permissive first then filter it down later.
        # (This code assumes a RoundAccess won't be created until we've unlocked
        # at least 1 puzzle in that round.)
        eligible_rounds = set()
        for round in self.unlocked_rounds():
            eligible_rounds.add(round.slug)
            if round.superround:
                eligible_rounds.add(round.superround.slug)
        rounds_to_exclude = {
            *SKIP_ROUNDS,
        }
        eligible_rounds = eligible_rounds - rounds_to_exclude
        # Iterate through all puzzles by deep_key then deep to guarantee list is
        # sorted order, with slug to get a consistent order if there are ties.
        #
        # Potential puzzles = puzzles that are not already unlocked by deep which
        #  could be unlocked by an event unlock. This needs to be based on deep
        #  rather than PuzzleAccess.
        potential_puzzles = (
            Puzzle.objects.select_related("round")
            .filter(round__slug__in=eligible_rounds, is_meta=False)
            .order_by("round__order", "deep_key", "deep", "slug")
        )
        locked_puzzles: dict[str, list[Puzzle]] = collections.defaultdict(list)
        dk_display_name: dict[str, str] = {}
        all_display_name: dict[str, str] = {}
        for puzzle in potential_puzzles:
            deep_key = puzzle.deep_key or puzzle.round.slug
            if not (
                deep_key == puzzle.round.slug
                or (
                    puzzle.round.superround and deep_key == puzzle.round.superround.slug
                )
            ):
                # Weird deep_key, ignore it.
                continue
            # Bad copy-paste for speed. May not need to be implemented this way?
            # Always populate all keys for display names
            # need to be able to display round name if they have used an unlock in a round,
            # and now have nothing left in that round.
            if deep_key != puzzle.round.slug and puzzle.round.superround:
                # This case can only occur if superround.
                all_display_name[deep_key] = puzzle.round.superround.name
            else:
                all_display_name[deep_key] = puzzle.round.name
            if puzzle.deep > deep[deep_key]:
                if deep_key != puzzle.round.slug and puzzle.round.superround:
                    # This case can only occur if superround.
                    dk_display_name[deep_key] = puzzle.round.superround.name
                else:
                    dk_display_name[deep_key] = puzzle.round.name
                locked_puzzles[deep_key].append(puzzle)
        # These checks shouldn't be necessary if we set up puzzle fixtures
        # correctly, but we set them here anyways.
        # If a team has used N extra unlocks, the locked-puzzles list will have N puzzles,
        # we need to filter the list appropriately.
        # It is important to not check this against PuzzleUnlock objects to enforce the
        # invariant of "deep + N extra"
        extra_unlocks = collections.defaultdict(int)
        for eu in ExtraUnlock.objects.filter(team=self):
            extra_unlocks[eu.deep_key] = eu.count
        unlocked_all = [
            dk for dk in locked_puzzles if len(locked_puzzles[dk]) <= extra_unlocks[dk]
        ]
        for bad_dk in unlocked_all:
            del locked_puzzles[bad_dk]
            del dk_display_name[bad_dk]
        return locked_puzzles, dk_display_name, all_display_name


class PuzzleAccess(spoilr.core.models.PuzzleAccess):
    """
    Represents a team having access to a puzzle (and when that occurred)
    Equivalent to PuzzleAccess in spoilr.
    """

    # Overrides the get_queryset in SpoilrPuzzleAccessManager
    objects = models.Manager()  # type: ignore

    class Meta:
        proxy = True


class PuzzleSubmission(spoilr.core.models.PuzzleSubmission):
    """
    Represents a team making a solve attempt on a puzzle (right or wrong).
    Extends PuzzleSubmission in spoilr.
    """

    # this just renames the parent_link for the multi-table inheritance
    spoilr_submission = models.OneToOneField(
        spoilr.core.models.PuzzleSubmission,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
        related_name="tph_puzzlesubmission",
    )

    used_free_answer = models.BooleanField()

    def __str__(self):
        return "{} -> {}: {}, {}".format(
            self.team,
            self.puzzle,
            self.answer,
            "correct" if self.correct else "wrong",
        )


class GuessData(TypedDict):
    timestamp: str
    guess: str
    response: str
    isCorrect: bool
    partial: NotRequired[bool]
    pseudo: NotRequired[bool]
    puzzle: NotRequired[str]


def build_guess_data(answer_submission: PuzzleSubmission) -> GuessData:
    """Returns serialized data for a particular answer submission."""

    if answer_submission.correct:
        message = "Correct!"
    elif answer_submission.pseudo:
        message = answer_submission.response
    elif answer_submission.partial:
        message = "This is one correct answer!"
    else:
        message = "Incorrect"

    return {
        "timestamp": str(answer_submission.timestamp or timezone.now()),
        "guess": answer_submission.answer,
        "response": message,
        "isCorrect": answer_submission.correct,
        "partial": answer_submission.partial,
        "pseudo": answer_submission.pseudo,
    }


class Minipuzzle(spoilr.core.models.Minipuzzle):
    SINGLETON_REF = "singleton"

    @classmethod
    def singleton(cls, team: Team, puzzle: Puzzle) -> "Minipuzzle":
        """Create or get the singleton minipuzzle for this team on a given puzzle"""
        obj, _ = cls.objects.get_or_create(
            team=team,
            puzzle=puzzle,
            ref=cls.SINGLETON_REF,
        )
        return obj

    class Meta:
        proxy = True


class CustomPuzzleSubmission(spoilr.core.models.MinipuzzleSubmission):
    """Represents a team entering an intermediary submission to an interactive puzzle."""

    # this just renames the parent_link for the multi-table inheritance
    minipuzzle_submission = models.OneToOneField(
        spoilr.core.models.MinipuzzleSubmission,
        on_delete=models.CASCADE,
        parent_link=True,
        primary_key=True,
    )

    count = models.PositiveIntegerField(default=1)

    def __str__(self):
        return (
            f"{self.team} -> {self.puzzle} ({self.minipuzzle}):"
            f" {self.raw_answer} ({self.count})"
        )

    @classmethod
    def increment(
        cls,
        team: Team,
        puzzle: Puzzle,
        raw_answer: str,
        minipuzzle: Minipuzzle | None = None,
        correct=False,
    ) -> None:
        # If it doesn't exist, create a new submission with count 1.
        minipuzzle = minipuzzle or Minipuzzle.singleton(team, puzzle)
        _, created = cls.objects.get_or_create(
            team=team,
            puzzle=puzzle,
            minipuzzle=minipuzzle,
            raw_answer=raw_answer,
            defaults={
                "count": 1,
                "correct": correct,
            },
        )
        # If it already exists, update it to current count + 1.
        if not created:
            cls.objects.filter(
                team=team, puzzle=puzzle, minipuzzle=minipuzzle, raw_answer=raw_answer
            ).update(count=F("count") + 1)

    @classmethod
    def histogram(cls, puzzle: Puzzle):
        return (
            cls.objects.filter(puzzle=puzzle, timestamp__lt=get_site_end_time())
            .values("raw_answer")
            .annotate(counts=Sum("count"))
        )

    @classmethod
    def histogram_by_minipuzzle(cls, puzzle: Puzzle):
        return (
            cls.objects.filter(puzzle=puzzle, timestamp__lt=get_site_end_time())
            .values("raw_answer", "minipuzzle")
            .annotate(counts=Sum("count"))
        )

    @classmethod
    def histogram_by_team(cls, puzzle: Puzzle):
        return (
            cls.objects.filter(puzzle=puzzle, timestamp__lt=get_site_end_time())
            .values("raw_answer", "team")
            .annotate(counts=Sum("count"))
        )


# Sends a Discord alert, we'll construct the finisher emails manually.
def handle_victory(submission: PuzzleSubmission) -> None:
    if submission.correct and submission.puzzle.slug == DONE_SLUG:
        team = submission.team
        emails = team.all_emails
        dispatch_victory_alert(
            "Team **%s** has finished the clickaround!" % team
            + "\n**Emails:** "
            + ", ".join(emails)
        )


class ExtraGuessGrant(models.Model):
    """Extra guesses granted to a particular team."""

    NO_RESPONSE = "NR"
    GRANTED = "GR"

    STATUSES = {
        NO_RESPONSE: "No response",
        GRANTED: "Granted",
    }

    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    puzzle = models.ForeignKey(Puzzle, on_delete=models.CASCADE)
    status = models.CharField(
        choices=tuple(STATUSES.items()), default=NO_RESPONSE, max_length=3
    )

    extra_guesses = models.IntegerField(default=20)

    id: int

    def __str__(self):
        return "%s has %d extra guesses for puzzle %s" % (
            self.team,
            self.extra_guesses,
            self.puzzle,
        )

    def granted_discord_message(self):
        return (
            f"{self.team} was granted {self.extra_guesses} guesses on"
            f" {self.puzzle.emoji} {self.puzzle}"
        )

    def requested_discord_message(self):
        hint_answer_url = generate_url(
            "internal", f"/internal/extraguessgrant/{self.id}"
        )
        return (
            f"{self.team} is rate-limited on"
            f" {self.puzzle.tph_puzzle.emoji} {self.puzzle} and requested more guesses."
            " You may view past guesses and approve or deny the request"
            f" here:\n<{hint_answer_url}>\nReact to this Discord message when done."
        )

    class Meta:
        unique_together = ("team", "puzzle")


class RatingField(models.PositiveSmallIntegerField):
    """Represents a single numeric rating (either fun or difficulty) of a puzzle."""

    def __init__(self, max_rating, adjective, **kwargs):
        self.max_rating = max_rating
        self.adjective = adjective
        super().__init__(**kwargs)

    def formfield(self, **kwargs):
        choices = [(i, i) for i in range(1, self.max_rating + 1)]
        return super().formfield(
            **{
                "min_value": 1,
                "max_value": self.max_rating,
                "widget": forms.RadioSelect(
                    choices=choices,
                    attrs={"adjective": self.adjective},
                ),
                **kwargs,
            }
        )

    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        kwargs["max_rating"] = self.max_rating
        kwargs["adjective"] = self.adjective
        return name, path, args, kwargs


class Survey(models.Model):
    """A rating given by a team to a puzzle after solving it."""

    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    puzzle = models.ForeignKey(Puzzle, on_delete=models.CASCADE)

    fun = RatingField(6, "fun")
    difficulty = RatingField(6, "hard")
    comments = models.TextField(blank=True, verbose_name="Anything else:")

    def __str__(self):
        return f"{self.puzzle}: {self.team}"

    class Meta:
        unique_together = ("team", "puzzle")

    @classmethod
    def fields(cls):
        return [
            field for field in cls._meta.get_fields() if isinstance(field, RatingField)
        ]


class Feedback(models.Model):
    """A rating given by a team to a puzzle after solving it."""

    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    puzzle = models.ForeignKey(Puzzle, on_delete=models.CASCADE)

    comments = models.TextField(blank=True)

    def __str__(self):
        return f"{self.puzzle}: {self.team}"


class DeepFloor(models.Model):
    """Minimum deep to make it easier to locally unlock rounds."""

    team = models.ForeignKey(
        Team,
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        help_text=(
            "The team to create a time unlock for, leaving it blank will apply it to"
            " all teams."
        ),
    )
    # A team may not want time unlocks, allows for self-serve.
    enabled = models.BooleanField(default=False)
    # Used in URL emailed to team, expected to be randomly generated.
    # Unlike the team state, this is entirely controlled by the server rather than
    # the browser, so we can generate it
    uuid = models.CharField(default=random_uuid, max_length=64)
    # This is not unique for (team, deep_key) to handle the case where a team may
    # accept a time unlock the 1st time and reject it the 2nd - this is easier to
    # manage if we assume multiple instances can exist and we resolve it later.
    deep_key = models.CharField(max_length=500, verbose_name="DEEP key")
    min_deep = models.IntegerField(verbose_name="min DEEP")
    timestamp = models.DateTimeField(auto_now_add=True)


class ExtraUnlock(models.Model):
    """Tracks where a team has used event unlocks."""

    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
    )
    deep_key = models.CharField(max_length=500, verbose_name="DEEP key")
    # Same key can be used multiple times.
    count = models.PositiveIntegerField(default=1)

    @classmethod
    def increment(
        cls,
        team: Team,
        deep_key: str,
    ) -> None:
        # If it doesn't exist, create a new ExtraUnlock with count 1.
        _, created = cls.objects.get_or_create(
            team=team,
            deep_key=deep_key,
            defaults={
                "count": 1,
            },
        )
        # If it already exists, update it to current count + 1.
        if not created:
            cls.objects.filter(
                team=team,
                deep_key=deep_key,
            ).update(count=F("count") + 1)

    class Meta:
        unique_together = ("team", "deep_key")
