import base64
import os
from collections import defaultdict
from collections.abc import Callable, Mapping
from typing import Any, TypedDict

from django.db.models import (
    F,
)
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.http import require_GET, require_POST

from puzzles.context import (
    AuthedContextHttpRequestWithPuzzle,
    ContextHttpRequest,
    ContextHttpRequestWithPuzzle,
)
from puzzles.forms import RequestHintForm
from puzzles.messaging import (
    dispatch_event_used_alert,
)
from puzzles.models import (
    ExtraUnlock,
    GuessData,
    Puzzle,
    PuzzleAccess,
    Team,
    build_guess_data,
)
from puzzles.rounds.utils import (
    ROUND_DIRECTORY,
    SKIP_ROUNDS,
    get_hashed_url,
    get_round_data,
    get_round_puzzles,
    get_superround_urls,
)
from puzzles.utils import HintVisibility, get_encryption_keys, hint_availability
from puzzles.views.auth import restrict_access, validate_puzzle
from puzzles.views.hints import maybe_create_hint
from puzzles.views.puzzles import (
    a_trip_down_memory_lane,
    appease_the_minotaur,
    cheerful_rulers_kingdom,
    do_you_like_wordle,
    end_of_an_era,
    enneagram,
    gaia,
    herc_u_lease,
    hydra_gen,
    marathon_block_pushing_game,
    sumantle,
    temporary_name,
    three_really_good_boys,
    von_schweetzs_big_question,
)
from puzzles.views.story import story_card_data
from puzzles.views.submissions import (
    get_allowed_a3_free_puzzles,
    get_allowed_free_puzzles,
    get_ratelimit,
    submit_answer,
)
from spoilr.core.api.hunt import is_site_solutions_published
from spoilr.core.models import Interaction, InteractionType, TeamInteraction
from spoilr.hints.models import CannedHint, Hint
from spoilr.updates.models import HQUpdate
from spoilr.utils import generate_url, json

FORCE_VIRTUAL_UNLOCK = False


def virtual_unlock_initial_data(
    slug: str, virtual_delay_mins: int, module_name: str | None = None
):
    """A shared tool that can be used to check if a virtual puzzle should be unlocked."""
    if module_name is None:
        module_name = slug

    def virtual_unlock_time(request: ContextHttpRequestWithPuzzle, team: Team):
        # Force all puzzles to be unlocked
        if FORCE_VIRTUAL_UNLOCK:
            return {"unlockTime": 0, "cryptKeys": get_encryption_keys([module_name])}

        # Convert delay to seconds
        delay = virtual_delay_mins * 60
        access = PuzzleAccess.objects.filter(team=team, puzzle__slug=slug).first()
        if access:
            # Check if overridden in admin
            if request.context.puzzle.override_virtual_unlocked:
                time_left_s = 0
            else:
                time_open = timezone.now() - access.timestamp
                time_left_s = max(0, delay - time_open.total_seconds())
        elif team.is_internal:
            # This case should only happen in the admin/internal team case where
            # a PuzzleAccess doesn't exist. For real teams, the auth code will prevent
            # this case from being reached.
            time_left_s = 0
        else:
            time_left_s = delay

        data: dict[str, Any] = {"unlockTime": time_left_s}
        if time_left_s == 0:
            data["cryptKeys"] = get_encryption_keys([module_name])

        return data

    return virtual_unlock_time


# A map from slug to function getting data to pass on page load
# Function should be (request, team) => dict (or other json convertible object)
# FIXME: Add initial data here
PUZZLE_SPECIFIC_PRIVATE_INITIAL_DATA: Mapping[str, Callable] = {
    "a-trip-down-memory-lane": a_trip_down_memory_lane.get_initial_data,
    "appease-the-minotaur": appease_the_minotaur.get_initial_data,
    "badges": virtual_unlock_initial_data("badges", 180, module_name="badges_virtual"),
    "cheerful-rulers-kingdom": cheerful_rulers_kingdom.get_initial_data,
    "do-you-like-wordle": do_you_like_wordle.get_initial_data,
    "enneagram": enneagram.get_initial_data,
    "gaia": gaia.get_initial_data,
    "herc-u-lease": herc_u_lease.get_initial_data,
    "marathon-block-pushing-game": marathon_block_pushing_game.get_initial_data,
    "sumantle": sumantle.get_initial_data,
    "temporary-name": temporary_name.get_initial_data,
    "three-really-good-boys": three_really_good_boys.get_initial_data,
    "von-schweetzs-big-question": von_schweetzs_big_question.get_initial_data,
    "we-are-the-champions": virtual_unlock_initial_data(
        "we-are-the-champions", 180, module_name="we-are-the-champions_virtual"
    ),
}

for i in range(1, 113):
    PUZZLE_SPECIFIC_PRIVATE_INITIAL_DATA[f"hydra-head-{i}"] = hydra_gen.get_initial_data


# A map from interaction-slug to function checking if the interaction is unlocked
# FIXME: Add interaction unlocks here
PUZZLE_SPECIFIC_INTERACTION_UNLOCKS: Mapping[str, Callable] = {}


PUZZLE_SPECIFIC_SOLVE_CALLBACKS: Mapping[str, Callable[[Team], None]] = {}


PUZZLE_SPECIFIC_PSEUDO_CALLBACKS: Mapping[str, Callable[[str, Team], None]] = {
    "cheerful-rulers-kingdom": cheerful_rulers_kingdom.on_pseudo,
}


@require_GET
def get_rounds(request: ContextHttpRequest):
    """Fetches all rounds to show on the landing page."""
    team = request.context.team
    if not team:
        return JsonResponse({"rounds": []})

    if request.context.hunt_has_started or request.context.hunt_has_almost_started:
        # Trigger unlocks on landing page visits
        # Even before hunt starts, pre-unlock puzzles with deep 0 to stagger db load
        _ = request.context.puzzle_unlocks
    if not request.context.hunt_has_started:
        return JsonResponse({"rounds": []})

    rounds = team.unlocked_rounds()
    round_data = [
        get_round_data(request, puzzle_round, team, images=("wordmark_small",))
        for puzzle_round in rounds
        if puzzle_round.slug not in SKIP_ROUNDS
    ]
    act = 1

    return JsonResponse(
        {
            "bg": get_superround_urls(act),
            "rounds": [
                {
                    **puzzle_round,
                    "wordmark": puzzle_round["wordmark_small"],
                }
                for puzzle_round in round_data
            ],
        }
    )


@require_GET
def underworld_rounds(request: ContextHttpRequest):
    """Fetches underworld rounds for the landing page."""
    team = request.context.team
    if not team:
        return JsonResponse({"rounds": []})

    if request.context.hunt_has_started or request.context.hunt_has_almost_started:
        # Trigger unlocks on landing page visits
        # Even before hunt starts, pre-unlock puzzles with deep 0 to stagger db load
        _ = request.context.puzzle_unlocks
    if not request.context.hunt_has_started:
        return JsonResponse({"rounds": []})

    rounds = team.unlocked_rounds()
    underworld_slugs = [
        "the-throne-room",
        "rivers-of-the-dead",
        "the-underworld-court",
        "the-hole-in-the-ceiling-of-hades",
        "escaping-the-underworld",
    ]
    round_data = [
        get_round_data(request, puzzle_round, team, images=("underworld_marker",))
        for puzzle_round in rounds
        if puzzle_round.slug in underworld_slugs
    ]

    return JsonResponse(
        {
            "bg": get_hashed_url(os.path.join("Misc", "underworld_bg.png")),
            "rounds": [
                {
                    **puzzle_round,
                    "wordmark": puzzle_round["underworld_marker"],
                }
                for puzzle_round in round_data
            ],
            "herculeaseImage": get_hashed_url(
                os.path.join("Misc", "underworld_herc-u-lease.png")
            ),
            "oracleImage": get_hashed_url(
                os.path.join("Misc", "underworld_oracle.png")
            ),
        }
    )


@require_GET
def overworld_rounds(request: ContextHttpRequest):
    """Fetches overworld rounds."""
    team = request.context.team
    if not team:
        return JsonResponse({"rounds": []})

    overworld_slugs = {
        "oahu": ("aphrodites-plutonic-affection-connection", "rgb(201, 218, 255)"),
        "las-vegas": ("shade-of-wealth", "#ffffff"),
        "yellowstone": ("medusas-lair", "rgb(232, 238, 231)"),
        "sedona": ("the-shala-of-thermopylae", "rgb(177, 128, 215)"),
        "minneapolis-st-paul": ("gemini", "#000000"),
        "mississippi-river": ("scylla-and-charybdis", "rgb(240, 240, 240)"),
        "texas": ("appease-the-minotaur", "rgb(255, 211, 123)"),
        "everglades": ("hydra", "rgb(188, 253, 215)"),
        "hell": ("a-rift-in-hades", "#ffffff"),
        "nyc": ("scheduling-conflicts", "rgb(224, 214, 203)"),
        "olympic": ("gaia", "#232038"),
        "nashville": ("a-night-at-the-opera", "rgb(255, 251, 232)"),
        "newport": ("persephone", "#cfcfcf"),
        "road-trip-redux": ("road-trip-redux", "#ffffff"),
    }
    rounds = team.unlocked_rounds()
    solved = {ps.puzzle.slug for ps in request.context.correct_puzzle_submissions}

    round_data = [
        get_round_data(request, puzzle_round, team)
        for puzzle_round in rounds
        if puzzle_round.slug in overworld_slugs
    ]

    if not round_data:
        return JsonResponse({}, status=404)

    return JsonResponse(
        {
            "bg": get_hashed_url(os.path.join("Misc", "overworld_bg.png")),
            "rounds": [
                {
                    **puzzle_round,
                    "bgColor": overworld_slugs.get(
                        puzzle_round["slug"], (None, "#ffffff")
                    )[1],
                    "done": (
                        overworld_slugs.get(puzzle_round["slug"], (None, ""))[0]
                        in solved
                    ),
                }
                for puzzle_round in round_data
            ],
            "capstone": {
                "slug": "road-trip-redux",
                "name": "Road Trip Redux",
            },
        }
    )


@require_GET
def puzzles_by_round(request: ContextHttpRequest, round_slug: str | None = None):
    """Fetches puzzle data to show on the puzzle list or map page."""
    if not request.context.hunt_has_started:
        return JsonResponse({"puzzles": {}, "rounds": None})

    round_data = get_round_puzzles(request, round_slug)
    if not round_data:
        return JsonResponse({}, status=404)

    return JsonResponse(round_data)


@require_GET
def get_puzzles_team_api(request: ContextHttpRequest):
    """
    Public api for team scripts to fetch the puzzle list
    """
    team = request.context.team
    if not team:
        logged_out_data = {"error": "must be logged in"}
        return JsonResponse(logged_out_data, status=401)

    if not request.context.hunt_has_started:
        # Let teams see an example for prehunt
        clean_data = [
            {
                "name": "Sample Puzzle Name",
                "round": "Sample Round Name",
                "url": generate_url("hunt", "/puzzles/fake-url-this-is-not-a-puzzle"),
                "isMeta": False,
                "answer": None,
            }
        ]
    else:
        data = get_round_puzzles(request)
        clean_data = [
            {
                "name": puzzle["name"],
                "round": data["rounds"][round_slug]["name"],
                "url": puzzle["url"],
                "isMeta": puzzle["isMeta"],
                "answer": puzzle["answer"],
            }
            for round_slug, puzzles in data.get("puzzles", {}).items()
            for puzzle in puzzles
        ]
    # NB: Browsers patched the vulnerability allowed by safe=False in 2012
    # https://docs.djangoproject.com/en/4.0/ref/request-response/#jsonresponse-objects
    return JsonResponse(clean_data, safe=False)


def _get_hints(puzzle: Puzzle, team: Team):
    if puzzle.canonical_puzzle:
        puzzle = puzzle.canonical_puzzle
        if puzzle.canonical_puzzle:
            msg = f"Canonical puzzle chain longer than 2: {puzzle.slug}"
            raise RuntimeError(msg)
    return Hint.objects.filter(team=team, puzzle=puzzle).order_by("timestamp")


def hint_data(puzzle: Puzzle, team: Team):
    threads: dict[int, dict] = defaultdict(
        lambda: {"hints": []}
    )  # keyed by original_request_id
    for hint in _get_hints(puzzle, team):
        if hint.is_request and hint.root_ancestor_request_id is None:
            threads[hint.original_request_id]["threadId"] = hint.pk
            threads[hint.original_request_id]["status"] = hint.status
        threads[hint.original_request_id]["hints"].append(
            {
                "isRequest": hint.is_request,
                "requiresResponse": hint.requires_response,
                "content": hint.text_content,
                "submitTime": hint.timestamp,
            }
        )
    return list(threads.values())


def _get_errata(puzzle: Puzzle):
    if puzzle.canonical_puzzle:
        puzzle = puzzle.canonical_puzzle
        if puzzle.canonical_puzzle:
            msg = f"Canonical puzzle chain longer than 2: {puzzle.slug}"
            raise RuntimeError(msg)
    return [
        err.render_data()
        for err in HQUpdate.objects.filter(puzzle=puzzle, published=True).order_by(
            "creation_time"
        )
    ]


def _get_canned_hints(puzzle: Puzzle):
    if puzzle.canonical_puzzle:
        puzzle = puzzle.canonical_puzzle
        if puzzle.canonical_puzzle:
            msg = f"Canonical puzzle chain longer than 2: {puzzle.slug}"
            raise RuntimeError(msg)
    return [
        {"keywords": canned.keywords, "content": canned.content}
        for canned in CannedHint.objects.filter(puzzle=puzzle).order_by("order")
    ]


def get_puzzle_interaction_data(
    request: AuthedContextHttpRequestWithPuzzle,
    puzzle: Puzzle,
    team: Team,
    guesses: list[GuessData],
):
    interactions = puzzle.interaction_set.filter(
        interaction_type=InteractionType.PHYSICAL
    )

    def interaction_to_interaction_data(interaction: Interaction):
        if interaction.required_pseudoanswer:
            # Check if any correct submissions match the pseudoanswer
            normalized_pseudoanswer = puzzle.normalize_answer(
                interaction.required_pseudoanswer.answer
            )
            if not any(
                guess.get("pseudo", False) and guess["guess"] == normalized_pseudoanswer
                for guess in guesses
            ):
                return None

        interaction_data = {
            "puzzleSlug": puzzle.slug,
            "interactionSlug": interaction.slug,
            "instructions": interaction.instructions,
        }

        # this ensures that each team can only do an interaction once
        team_interaction = TeamInteraction.objects.filter(
            team=team, interaction=interaction
        ).first()
        if team_interaction:
            interaction_data["comments"] = team_interaction.request_comments
            interaction_data["accomplished"] = team_interaction.accomplished
        elif interaction.unlocks_with_puzzle:
            pass
        elif get_unlocked := PUZZLE_SPECIFIC_INTERACTION_UNLOCKS.get(interaction.slug):
            if not get_unlocked(request, team):
                return None
        else:
            # Team does not have access to interaction yet
            return None

        if get_data := PUZZLE_SPECIFIC_PRIVATE_INITIAL_DATA.get(puzzle.slug):
            # hack for designating infinite puzzles
            if getattr(get_data, "is_infinite", False):
                # the infinite private puzzle data is nonempty when the puzzle is
                # visible (due to needing to pass cryptKeys).
                # NB: this makes a couple extra function calls but they are all cached anyways
                if not get_data(request, team):
                    # should not have access to the puzzle yet
                    return None

        return interaction_data

    return list(
        filter(
            lambda idata: idata is not None,
            map(interaction_to_interaction_data, interactions),
        )
    )


def get_puzzle_data(
    request: AuthedContextHttpRequestWithPuzzle, puzzle: Puzzle, team: Team
):
    """Helper method to retrieve puzzle specific data."""
    solution_link_visible = (
        request.context.hunt_is_over and is_site_solutions_published()
    ) or request.context.is_staff

    errata = _get_errata(puzzle)
    is_solved = bool(request.context.puzzle_answer)
    hint_visibility, hint_reason = hint_availability(request, puzzle, team)
    story_state = request.context.story_state

    # Look up art assets from superround
    puzzle_round = puzzle.round.superround or puzzle.round

    guesses = [
        build_guess_data(submission)
        for submission in request.context.puzzle_submissions
    ]

    data = {
        "name": puzzle.name,
        "slug": puzzle.slug,
        # FIXME: inject url if multiple kinds (eg /events/slug and /puzzles/slug)
        "url": puzzle.url,
        "hintsUrl": (
            puzzle.get_hints_url(story_state)
            if hint_visibility.value >= HintVisibility.CAN_VIEW.value
            else None
        ),
        "round": get_round_data(request, puzzle_round.tph_round, team, puzzle=puzzle),
        "isSolved": is_solved,
        "guesses": guesses,
        "solutionLinkVisible": solution_link_visible,
        "rateLimit": get_ratelimit(puzzle, team) if team else None,
        "canViewHints": hint_visibility.value >= HintVisibility.CAN_VIEW.value,
        "canAskForHints": hint_visibility is HintVisibility.CAN_REQUEST,
        "hintReason": hint_reason,
        "hintThreads": hint_data(puzzle, team),
        "errata": errata,
    }

    # Don't leak solution-only fields before they are visible
    if solution_link_visible:
        data["solutionData"] = {
            "authors": puzzle.main_credits,
            "additionalCreds": puzzle.other_credits,
        }

    # Show story cards for solved puzzles only
    if is_solved:
        story_card = puzzle.story_cards.first()
        if story_card:
            data["storycard"] = story_card_data(story_card)

    if team and (team.is_prerelease_testsolver or team.is_internal):
        data["puzzleUrl"] = puzzle.testsolve_url

    interactions = []
    if team:
        # Add interaction for physical puzzles, unless hunt is over
        interactions = get_puzzle_interaction_data(request, puzzle, team, guesses)

    if request.context.hunt_is_over:
        data["answerB64Encoded"] = base64.b64encode(
            puzzle.normalized_answer.encode("utf-8")
        ).decode("utf-8")

        data["partialMessagesB64Encoded"] = [
            [
                base64.b64encode(
                    puzzle.normalize_answer(message.answer).encode("utf-8")
                ).decode("utf-8"),
                base64.b64encode(message.response.encode("utf-8")).decode("utf-8"),
            ]
            for message in puzzle.pseudoanswer_set.all()
        ]

        if interactions:
            data["interactions"] = [
                {"slug": interaction["interactionSlug"], "ended": True}
                for interaction in interactions
            ]
        data["cannedB64Encoded"] = base64.b64encode(
            json.dumps(_get_canned_hints(puzzle)).encode()
        ).decode()
    elif interactions:
        data["interactions"] = interactions

    if team and puzzle.slug in PUZZLE_SPECIFIC_PRIVATE_INITIAL_DATA:
        data["private"] = PUZZLE_SPECIFIC_PRIVATE_INITIAL_DATA[puzzle.slug](
            request, team
        )
    return data


@validate_puzzle(require_team=True, allow_after_hunt=True)
def puzzle_data(request: AuthedContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    team = request.context.team
    return JsonResponse(get_puzzle_data(request, puzzle, team))


@require_POST
@validate_puzzle(require_team=True)
@restrict_access(after_hunt_end=False)
def solve(request: AuthedContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    team = request.context.team

    guess_data, status, error_msg, ratelimit_data = submit_answer(
        puzzle,
        team,
        request.POST.get("answer", ""),
        request.context.guesses_remaining,
        request.context.puzzle_submissions,
        request.context.now,
    )

    all_guesses: list[GuessData] = (
        (
            [] if guess_data is None else [guess_data]
        )  # just pass the latest guess for public teams
        if team.is_public
        # This includes the latest guess, if it was legitimate
        else [
            build_guess_data(submission)
            for submission in team.puzzle_submissions(puzzle)
        ]
    )

    data = {
        "form_errors": {"__all__": error_msg},
        "guesses": all_guesses,
        "ratelimit_data": ratelimit_data,
    }

    interaction = get_puzzle_interaction_data(request, puzzle, team, all_guesses)
    if interaction:
        data["interaction"] = interaction

    return JsonResponse(data, status=status)


@require_GET
def get_puzzles_for_free_answers(request: ContextHttpRequest):
    if not request.context.team:
        return JsonResponse({}, status=404)

    puzzles_by_round = defaultdict(list)
    for puzzle in get_allowed_free_puzzles(request):
        puzzles_by_round[puzzle.round.name].append(
            {
                "slug": puzzle.slug,
                "name": puzzle.name,
            }
        )

    normal, _, existing_uses, _, _ = request.context._internal_num_event_rewards
    return JsonResponse(
        {
            "currency": normal,
            "rounds": puzzles_by_round,
            "used": existing_uses,
        }
    )


@require_GET
def get_rounds_for_free_unlock(request: ContextHttpRequest):
    if not request.context.team:
        return JsonResponse({}, status=404)

    team = request.context.team
    # Do not directly send all_display_name to client, that would leak names of rounds.
    locked_puzzles, dk_display_name, all_display_name = team.compute_next_event_unlocks(
        request.context.deep
    )

    # Insert order matches round order.
    rounds = []
    for deep_key in locked_puzzles:
        if len(locked_puzzles[deep_key]) == 0:
            continue
        # Return deep key as the value of the form - this is only readable if you
        # inspect source code, and since this is only for rounds already unlocked,
        # it doesn't seem worth more effort to hide it.
        rounds.append({"name": dk_display_name[deep_key], "slug": deep_key})

    class ExistingUses(TypedDict):
        name: str
        count: int

    existing_uses: list[ExistingUses] = []
    for eu in ExtraUnlock.objects.filter(team=team).order_by("deep_key"):
        existing_uses.append({"name": all_display_name[eu.deep_key], "count": eu.count})
    # Alpha by round name. Too lazy to do it in round order.
    existing_uses.sort(key=lambda d: d["name"])
    return JsonResponse(
        {
            "currency": request.context.num_event_rewards,
            "rounds": rounds,
            "used": existing_uses,
        }
    )


@require_POST
@validate_puzzle(require_team=True)
def free_answer(request: ContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    team = request.context.team
    if not team:
        return JsonResponse(
            {"message": "You must be logged in to request a free answer."}, status=401
        )

    if puzzle.is_meta:
        return JsonResponse(
            {"message": "You cannot use a free answer on a meta."}, status=400
        )

    allowed_slugs = {puzzle.slug for puzzle in get_allowed_free_puzzles(request)}
    if puzzle.slug not in allowed_slugs:
        return JsonResponse(
            {"message": "You cannot use a free answer on this puzzle."}, status=400
        )

    if request.context.num_event_rewards <= 0:
        return JsonResponse(
            {"message": "You do not have enough event rewards."}, status=400
        )

    answer = puzzle.normalized_answer
    submit_answer(
        puzzle,
        team,
        guess=answer,
        submission_time=request.context.now,
        used_free_answer=True,
    )

    dispatch_event_used_alert(f"{team} used a free answer on {puzzle}")
    # Unlock immediately
    _ = request.context.puzzle_unlocks
    return JsonResponse({"message": "Free answer used!", "answer": answer})


@require_POST
def free_unlock(request, slug):
    # This isn't enabled for 2024. Not deleting the function because we *might*
    # need it?
    return JsonResponse({"message": "You're not allowed to do this."}, status=400)

    team = request.context.team
    if not team:
        return JsonResponse(
            {"message": "You must be logged in to unlock a new puzzle."}, status=401
        )
    if request.context.num_event_rewards <= 0:
        return JsonResponse(
            {"message": "You do not have enough event rewards."}, status=400
        )
    locked_puzzles, dk_display_name, all_display_name = team.compute_next_event_unlocks(
        request.context.deep
    )
    if slug not in locked_puzzles:
        return JsonResponse(
            {"message": "You cannot use an unlock on this round."}, status=400
        )

    # Unlock logic itself occurs in unlock_puzzles() function.
    ExtraUnlock.increment(team, slug)
    dispatch_event_used_alert(f"{team} used a free unlock on {slug}")
    # Unlock immediately
    _ = request.context.puzzle_unlocks
    return JsonResponse(
        {"message": f"Puzzle unlocked in {all_display_name[slug]}!"},
    )


@require_GET
def get_puzzles_for_free_a3_answers(request):
    if not request.context.team:
        return JsonResponse({}, status=404)

    puzzles_by_round = defaultdict(list)
    for puzzle in get_allowed_a3_free_puzzles(request):
        puzzle_round = puzzle.round.superround or puzzle.round
        puzzles_by_round[puzzle_round.name].append(
            {
                "slug": puzzle.slug,
                "name": puzzle.name,
            }
        )

    _, a3, _, existing_a3_uses, _ = request.context._internal_num_event_rewards
    return JsonResponse(
        {
            "currency": a3,
            "rounds": puzzles_by_round,
            "used": existing_a3_uses,
        }
    )


@require_POST
@validate_puzzle(require_team=True)
def free_a3_answer(request: AuthedContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    team = request.context.team
    if not team:
        return JsonResponse(
            {"message": "You must be logged in to request a free answer."}, status=401
        )

    if puzzle.is_meta:
        return JsonResponse(
            {"message": "You cannot use a free answer on a meta."}, status=400
        )

    allowed_slugs = {puzzle.slug for puzzle in get_allowed_a3_free_puzzles(request)}
    if puzzle.slug not in allowed_slugs:
        return JsonResponse(
            {"message": "You cannot use a free answer on this puzzle."}, status=400
        )

    if request.context.num_a3_event_rewards <= 0:
        return JsonResponse(
            {"message": "You do not have enough event rewards."}, status=400
        )

    answer = puzzle.normalized_answer
    submit_answer(
        puzzle,
        team,
        guess=answer,
        submission_time=request.context.now,
        used_free_answer=True,
    )
    dispatch_event_used_alert(f"{team} used a free Act 3 answer on {puzzle}")
    # Unlock immediately
    _ = request.context.puzzle_unlocks
    return JsonResponse(
        {"message": "Free answer used! See puzzle page for answer.", "answer": answer}
    )


@require_POST
@validate_puzzle(require_team=True)
@restrict_access()
def update_position(request: AuthedContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    # Save with 1 decimal place because we shouldn't need > 1 in 1000 precision.
    if "x" in request.POST:
        puzzle.icon_x = round(float(request.POST["x"]), 1)
    if "y" in request.POST:
        puzzle.icon_y = round(float(request.POST["y"]), 1)
    if "w" in request.POST:
        puzzle.icon_size = round(float(request.POST["w"]), 1)
    puzzle.save()
    return JsonResponse({})


@require_POST
@validate_puzzle(require_team=True)
@restrict_access(after_hunt_end=False)
def request_hint(request: AuthedContextHttpRequestWithPuzzle):
    puzzle = request.context.puzzle
    team = request.context.team

    form = RequestHintForm(team, request.POST)
    if not form.is_valid():
        return JsonResponse({"reply": "Invalid hint request."}, status=400)

    thread_id = form.cleaned_data["thread_id"]
    text_content = form.cleaned_data["text_content"]
    notify_emails = form.cleaned_data["notify_emails"]

    status, msg = maybe_create_hint(
        request, puzzle, team, text_content, thread_id, notify_emails
    )

    return JsonResponse(
        {"reply": msg, "hintThreads": hint_data(puzzle, team)}, status=status
    )


@require_POST
@restrict_access(after_hunt_end=False)
def opt_into_time_unlock(request: AuthedContextHttpRequestWithPuzzle):
    team = request.context.team
    team.is_being_time_unlocked = True
    team.save()
    return JsonResponse({})
