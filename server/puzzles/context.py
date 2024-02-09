# Roughly speaking, this module is most important for implementing "global
# variables" that are available in every template with the Django feature of
# "context processors". But it also does some stuff with caching computed
# properties of teams (the caching is only within a single request (?)). See
# https://docs.djangoproject.com/en/3.1/ref/templates/api/#using-requestcontext
import collections
import datetime
import logging
from functools import cached_property
from typing import TYPE_CHECKING, Any, Union, cast

from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils import timezone

from puzzles import models
from puzzles.hunt_config import (
    DONE_SLUG,
    HUNT_ORGANIZERS,
    HUNT_TITLE,
)
from puzzles.models.story import StateEnum
from puzzles.shortcuts import get_shortcuts
from spoilr.core.api.hunt import get_site_launch_time, is_site_closed, is_site_over
from spoilr.updates.models import HQUpdate

if TYPE_CHECKING:
    from spoilr.core.models import User as UserType

User = get_user_model()
logger = logging.getLogger(__name__)


def context_middleware(get_response):
    def middleware(request):
        request.context = Context(request)
        return get_response(request)

    return middleware


class ContextHttpRequest(HttpRequest):
    context: "Context"


# A context processor takes a request and returns a dictionary of (key: value)s
# to merge into the request's context.
def context_processor(request: ContextHttpRequest) -> dict[str, Any]:
    def thunk(name: str) -> Any:
        return lambda: getattr(request.context, name)

    return {
        name: thunk(name)
        for name, typ in type(request.context).__dict__.items()
        if type(typ) == cached_property
    }


# This object is a request-scoped cache containing data calculated for the
# current request. As a motivating example: showing current DEEP in the top
# bar and rendering the puzzles page both need the list of puzzles the current
# team has solved. This object ensures it only needs to be computed once,
# without explicitly having to pass it around from one place to the other.
# The properties here are accessible both from views and from templates. If
# you're adding something with complicated logic, prefer to put most of it in
# a model method and just leave a stub call here.


class Context:
    def __init__(self, request: HttpRequest):
        self.request = request

    # In theory, `BaseContext` properties are things that make sense if all the info
    # you have is an optional team (e.g. you don't know about a specific puzzle, or
    # a user who might not be specified by the team). (But TODO(gph): this setup
    # may currently be overengineered.))

    @cached_property
    def hunt_title(self) -> str:
        return HUNT_TITLE

    @cached_property
    def hunt_organizers(self) -> str:
        return HUNT_ORGANIZERS

    @cached_property
    def now(self) -> datetime.datetime:
        return timezone.now()

    @cached_property
    def start_time(self) -> datetime.datetime:
        return (
            get_site_launch_time() - self.team.start_offset
            if self.team
            else get_site_launch_time()
        )

    @cached_property
    def hint_time(self) -> datetime.datetime:
        return self.start_time

    # XXX do NOT name this the same as a field on the actual Team model or
    # you'll silently be unable to update that field because you'll be writing
    # to this instead of the actual model field!
    @cached_property
    def hunt_is_prereleased(self) -> bool:
        return bool(
            self.team and (self.team.is_prerelease_testsolver or self.team.is_internal)
        )

    @cached_property
    def hunt_has_started(self) -> bool:
        return self.hunt_is_prereleased or self.now >= self.start_time

    @cached_property
    def hunt_has_almost_started(self) -> bool:
        return (
            self.hunt_is_prereleased
            or self.start_time - self.now < datetime.timedelta(hours=1)
        )

    @cached_property
    def hunt_is_over(self) -> bool:
        return is_site_over()

    @cached_property
    def hunt_is_closed(self) -> bool:
        return is_site_closed()

    @cached_property
    def correct_puzzle_submissions(self) -> list[models.PuzzleSubmission]:
        if not self.team:
            return []

        return self.team.correct_puzzle_submissions()

    @cached_property
    def deep(self) -> dict[str, int]:
        if not self.team:
            # TODO handle end-of-hunt.
            return collections.defaultdict(lambda: -1)
        return self.team.compute_deep(self.correct_puzzle_submissions)

    # In theory, `Context` properties are things that don't make sense if all the
    # info you have is a team. They might make sense for a specific Django request
    # that specifies a puzzle.

    @cached_property
    def is_superuser(self) -> bool:
        return self.request.user.is_superuser

    @cached_property
    def is_staff(self) -> bool:
        return self.request.user.is_staff

    @cached_property
    def team(self) -> models.Team | None:
        # user is a spoilr User. Its team field is the spoilr Team. To get the tph
        # Team, follow the 1:1 created implicitly by Django's concrete inheritance.
        if not self.request.user or self.request.user.is_anonymous:
            return None
        self.request = cast(AuthedContextHttpRequest, self.request)

        spoilr_team = self.request.user.team
        if not spoilr_team:
            return None

        return spoilr_team.team

    @cached_property
    def site(self) -> str | None:
        """One of None, 'hunt', 'registration'"""
        from tph.utils import get_site

        return get_site(self.request)

    @cached_property
    def story_state(self) -> StateEnum:
        if settings.IS_POSTHUNT:
            return StateEnum.STORY_COMPLETE

        if self.team:
            return self.team.story_state

        return StateEnum.DEFAULT

    @cached_property
    def _internal_num_event_rewards(
        self,
    ) -> tuple[int, int, list[str], list[str], int]:
        # Logic similar to intro hints - returns normal + strong events and expects client to
        # handle displaying the diff.
        if not self.team:
            return 0, 0, [], [], 0
        return self.team.compute_internal_num_event_rewards()

    @cached_property
    def num_event_rewards(self) -> int:
        normal, _, _, _, _ = self._internal_num_event_rewards
        return normal

    @cached_property
    def num_a3_event_rewards(self) -> int:
        _, a3, _, _, _ = self._internal_num_event_rewards
        return a3

    @cached_property
    def num_event_rewards_per_puzzle(self) -> int:
        _, _, _, _, x = self._internal_num_event_rewards
        return x

    @cached_property
    def shortcuts(self):
        return tuple(get_shortcuts(self))

    @cached_property
    def puzzle_unlocks(self) -> list[models.Puzzle]:
        """May unlock new puzzles or advance story state as a side effect."""
        if not self.team:
            return []

        return self.team.unlock_puzzles(self.deep)

    def is_unlocked(self, slug: str) -> tuple[bool, models.Puzzle | None]:
        # Only checks for puzzle unlocks
        puzzle = None
        if (
            self.hunt_has_started
            or self.is_superuser
            or self.is_staff
            or (self.team and self.team.is_internal)
        ):
            if settings.SERVER_ENVIRONMENT == "test_branch":
                from puzzles.debug import load_puzzle_from_branch_fixture

                # Dynamically load puzzle from branch fixture
                # TODO: Currently the request will fail if the fixture
                # conflicts with unique constraints. Determine if we want
                # to handle this differently.
                load_puzzle_from_branch_fixture(self.request, slug)
            for _puzzle in self.puzzle_unlocks:
                if _puzzle.slug == slug:
                    puzzle = _puzzle
                    break
        if puzzle is None and settings.IS_PYODIDE:
            # On static site, unlock on first request.
            if self.team is not None:
                puzzle = models.Puzzle.objects.filter(slug=slug).first()
                if puzzle is not None:
                    models.PuzzleAccess.objects.get_or_create(
                        team=self.team, puzzle=puzzle
                    )
        return puzzle is not None, puzzle

    def is_minipuzzle_unlocked(self, slug: str, minipuzzle: str) -> bool:
        """Whether minipuzzle is unlocked given slug is unlocked"""
        # TODO: Add mapping for minipuzzles?
        return True

    @cached_property
    def is_hunt_complete(self) -> bool:
        team = self.team
        return (
            self.is_superuser
            or self.is_staff
            or bool(
                team
                and models.PuzzleSubmission.objects.filter(
                    team_id=team.id, puzzle__slug=DONE_SLUG, status="correct"
                ).exists()
            )
        )

    @cached_property
    def errata(self) -> list[HQUpdate.HQUpdateData]:
        """Errata for all unlocked puzzles."""
        errata_models = (
            HQUpdate.objects.filter(puzzle__in=self.puzzle_unlocks)
            .select_related("puzzle")
            .order_by("creation_time")
        )
        return [err.render_data() for err in errata_models]

    @cached_property
    def all_puzzles(self) -> tuple[models.Puzzle, ...]:
        return tuple(models.Puzzle.objects.prefetch_related("metas").order_by("deep"))

    @cached_property
    def puzzle(self) -> Union["models.Puzzle", None]:
        return None  # set by validate_puzzle

    @cached_property
    def puzzle_answer(self) -> str | None:
        """Returns the puzzle answer only if it's solved."""
        if self.team and self.puzzle:
            return self.team.puzzle_answer(self.puzzle, self.puzzle_submissions)
        return None

    @cached_property
    def guesses_remaining(self) -> int:
        if not self.team or not self.puzzle:
            return 0
        return self.team.guesses_remaining(self.puzzle, self.puzzle_submissions)

    @cached_property
    def puzzle_submissions(self) -> list["models.PuzzleSubmission"]:
        if not (self.team and self.puzzle):
            return []
        return self.team.puzzle_submissions(self.puzzle)


# This is ugly, but Python doesn't support protocol intersections
# It's all typing anyway, so it should be easy to clean up later


class AuthedContext(Context):
    team: models.Team


class AuthedContextHttpRequest(HttpRequest):
    user: "UserType"
    context: AuthedContext


class ContextWithPuzzle(Context):
    puzzle: "models.Puzzle"


class ContextHttpRequestWithPuzzle(HttpRequest):
    context: ContextWithPuzzle


class AuthedContextWithPuzzle(AuthedContext):
    puzzle: "models.Puzzle"


class AuthedContextHttpRequestWithPuzzle(AuthedContextHttpRequest):
    context: AuthedContextWithPuzzle
