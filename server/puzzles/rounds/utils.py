import os
from collections import Counter, defaultdict
from typing import TYPE_CHECKING, Any, NotRequired, TypedDict

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.hunt_config import (
    EVENTS_ROUND_SLUG,
    META_META_SLUGS,
    SCAVENGER_HUNT_ROUND_SLUG,
    UNDERWORLD_RUNAROUND_ROUND_SLUG,
)

if TYPE_CHECKING:
    import spoilr.core.models as spoilr_models
    from puzzles.models import Puzzle, Round

ROUND_DIRECTORY = "Rounds/"
SKIP_ROUNDS = {
    EVENTS_ROUND_SLUG,
    UNDERWORLD_RUNAROUND_ROUND_SLUG,
    SCAVENGER_HUNT_ROUND_SLUG,
}
SOLVE_SOUNDS_DIRECTORY = "Solve Sounds"


def get_round_emoji(puzzle_round: "spoilr_models.Round") -> str:
    if puzzle_round.tph_round.emoji:
        return puzzle_round.tph_round.emoji
    if puzzle_round.superround:
        return puzzle_round.superround.tph_round.emoji
    return ""


def get_solve_sound(puzzle_round: "spoilr_models.Round") -> str | None:
    return get_hashed_url(
        os.path.join(
            SOLVE_SOUNDS_DIRECTORY,
            f"{(puzzle_round.superround or puzzle_round).slug}.mp3",
        )
    )


def rounds_by_act(all_rounds, skip_acts=None):
    """Merges subrounds into flattened list, and returns list of rounds by act."""
    acts: list[list["spoilr_models.Round"]] = []
    # Assumes rounds are sorted by act.
    for puzzle_round in all_rounds:
        # Filter out subrounds
        if puzzle_round.superround_id:
            continue
        # Filter out events.
        if puzzle_round.slug in SKIP_ROUNDS:
            continue
        # Filter out skipped acts
        if skip_acts and puzzle_round.act in skip_acts:
            continue
        # At this point it's required that we will 100% add whatever round we
        # are iterating, to guarantee each act-list is non-empty after each
        # for-loop iteration.
        if not acts or acts[-1][-1].act != puzzle_round.act:
            acts.append([])
        acts[-1].append(puzzle_round)
    return acts


def get_round_data(
    request, puzzle_round: "spoilr_models.Round", team, puzzle=None, images=None
):
    """Helper method to retrieve round specific metadata."""
    from puzzles.rounds import CUSTOM_ROUND_DATA

    round_images = get_image_urls(request, puzzle_round, images=images)

    data = {
        "act": puzzle_round.act,
        "slug": puzzle_round.slug,
        "name": puzzle_round.name,
        "url": puzzle_round.url,
    }
    if puzzle_round.superround:
        # For subrounds, don't leak the subround this puzzle is in.
        data["slug"] = puzzle_round.superround.slug
        data["name"] = puzzle_round.superround.name
        data["url"] = puzzle_round.superround.url

    if puzzle:
        # Only send the minimal assets needed on a puzzle page.
        data["wordmark"] = round_images["wordmark"]
        data["header"] = round_images["header"]
        data["background"] = round_images["background"]
        data["favicon"] = round_images["favicon"]
    else:
        for image_type, url in round_images.items():
            data[image_type] = url
        data["position"] = {
            "x": puzzle_round.tph_round.x,
            "y": puzzle_round.tph_round.y,
            "w": puzzle_round.tph_round.w,
            "z": puzzle_round.tph_round.z,
        }
        data["textOverlay"] = puzzle_round.tph_round.text_overlay
        data["autoresize"] = puzzle_round.tph_round.autoresize

    if puzzle_round.slug in CUSTOM_ROUND_DATA:
        CUSTOM_ROUND_DATA[puzzle_round.slug](request, data, puzzle)
    return data


def get_icons(request, puzzle: "Puzzle", unlock):
    # Build a dict of what properties the puzzle has, then use that to filter.
    # Return a list of icons we want to retrieve.
    # Not all puzzles are guaranteed to have puzzle.solved_icon.name defined.
    solved = "answer" in unlock
    icons = {}
    puzzle_round = puzzle.round.superround or puzzle.round
    puzzle_dir = get_round_images(puzzle_round, "puzzles", puzzle.slug)
    default_icon_path = os.path.join(puzzle_dir, "default.png")
    solved_icon_path = os.path.join(puzzle_dir, "solved.png")
    unsolved_icon_path = os.path.join(puzzle_dir, "unsolved.png")

    if request.context.hunt_is_over and request.context.team is None:
        # Retrieve all icons.
        icons["solved"] = solved_icon_path
        icons["unsolved"] = unsolved_icon_path
    elif solved:
        icons["solved"] = solved_icon_path
    else:
        icons["unsolved"] = unsolved_icon_path

    # Only include icons with defined URLs
    return {
        k: get_hashed_url(image_url) or get_hashed_url(default_icon_path)
        for k, image_url in icons.items()
    }


def alphanumeric_name(name: str) -> str:
    return "".join(c for c in name.lower() if c.isalnum())


def default_round_sort_key(unlock):
    # Group by metameta, then capstone, then meta, then alpha
    puzzle = unlock["puzzle"]
    is_metameta = puzzle.slug in META_META_SLUGS
    # False < True in Python, some need to be inverted.
    return (
        not is_metameta,
        not puzzle.is_meta,
        alphanumeric_name(puzzle.name),
        puzzle.deep,
    )


def get_round_puzzles(request: ContextHttpRequest, round_slug: str | None = None):
    """
    Helper method to fetch round data and unlocked puzzles for a round page,
    or the all puzzles page (if no round_slug is passed).
    """
    team = request.context.team
    rounds: dict[str, spoilr_models.Round] = {}
    if not team:
        return rounds

    if round_slug:
        unlocked_rounds = team.unlocked_rounds()
        try:
            puzzle_round = next(
                round_ for round_ in unlocked_rounds if round_.slug == round_slug
            )
        except StopIteration:
            return {}

        rounds[puzzle_round.slug] = puzzle_round

    solved = {
        submission.puzzle_id: submission.answer
        for submission in team.puzzlesubmission_set.filter(status="correct").all()
    }
    hints = Counter(team.hint_set.values_list("puzzle_id", flat=True))

    class Unlock(TypedDict):
        puzzle: "Puzzle"
        answer: NotRequired[str]
        hints: NotRequired[int]

    unlocks: list[Unlock] = [
        {"puzzle": puzzle} for puzzle in request.context.puzzle_unlocks
    ]
    for data in unlocks:
        puzzle_id = data["puzzle"].id
        if puzzle_id in solved:
            data["answer"] = solved[puzzle_id]
        if puzzle_id in hints:
            data["hints"] = hints[puzzle_id]

    puzzles_map = defaultdict(list)

    def sort_key(unlock):
        # Group by round (or superround), then the round's internal sort key.
        puzzle: Puzzle = unlock["puzzle"]
        puzzle_round = puzzle.round.superround or puzzle.round
        return (puzzle_round.order, default_round_sort_key(unlock))

    # This relies on Python 3.7+ behavior that a dictionary's iter order matches
    # the insertion order.
    puzzle_unlocks = sorted(unlocks, key=sort_key)
    for unlock in puzzle_unlocks:
        puzzle = unlock["puzzle"]
        puzzle_round_slug = puzzle.round.slug
        # Skip puzzles in the events round.
        if puzzle_round_slug == EVENTS_ROUND_SLUG:
            continue
        # Skip puzzles in the underworld runaround round.
        if puzzle_round_slug == UNDERWORLD_RUNAROUND_ROUND_SLUG:
            continue
        if puzzle_round_slug == SCAVENGER_HUNT_ROUND_SLUG:
            continue
        if round_slug:
            # Skip puzzles if they aren't in the specified round.
            if puzzle_round_slug != round_slug:
                superround = puzzle.round.superround
                if not superround or superround.slug != round_slug:
                    continue
        else:
            # For rounds with superrounds, just return one giant list
            superround = puzzle.round.superround or puzzle.round
            puzzle_round_slug = superround.slug
            if puzzle_round_slug not in rounds:
                rounds[puzzle_round_slug] = superround

        puzzle_data = {
            "name": puzzle.name,
            "slug": puzzle.slug,
            "isMeta": puzzle.is_meta,
            "iconURLs": get_icons(request, puzzle, unlock),
            "iconSize": puzzle.icon_size,
            "position": [puzzle.icon_x, puzzle.icon_y],
            "zIndex": puzzle.z_index,
            "textPosition": [puzzle.text_x, puzzle.text_y],
            "answer": unlock.get("answer"),
            # FIXME: inject url if multiple kinds (eg /events/slug and /puzzles/slug)
            "url": puzzle.url,
        }

        if "answer" in unlock:
            if all(
                v is not None
                for v in [puzzle.solved_size, puzzle.solved_x, puzzle.solved_y]
            ):
                puzzle_data["iconSize"] = puzzle.solved_size
                puzzle_data["position"] = [puzzle.solved_x, puzzle.solved_y]
            if all(v is not None for v in [puzzle.solved_text_x, puzzle.solved_text_y]):
                puzzle_data["textPosition"] = [
                    puzzle.solved_text_x,
                    puzzle.solved_text_y,
                ]

        puzzles_map[puzzle_round_slug].append(puzzle_data)

    # If no puzzles have been unlocked, return 404.
    if not puzzles_map:
        return {}

    return {
        "theme": request.context.site,
        "puzzles": puzzles_map,
        "rounds": {
            slug: get_round_data(request, puzzle_round, team)
            for slug, puzzle_round in rounds.items()
        },
    }


def get_superround_urls(act, image_type=None):
    image = "map.png"
    return get_hashed_url(os.path.join(ROUND_DIRECTORY, "maps", image))


def get_round_images(puzzle_round: "spoilr_models.Round", *subdirectories):
    return os.path.join(ROUND_DIRECTORY, puzzle_round.slug, *subdirectories)


def get_image_urls(
    request, puzzle_round: "spoilr_models.Round", images: list[str] | None = None
) -> dict[str, str | None]:
    if not images:
        images = ["header", "footer", "wordmark", "background", "roundart", "favicon"]

    round_dir = get_round_images(puzzle_round, "other")
    image_map = {
        image_type: get_hashed_url(os.path.join(round_dir, f"{image_type}.png"))
        for image_type in images
    }
    return image_map
