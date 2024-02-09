from typing import Any

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle, PuzzleSubmission

SLUGS = [
    "a-rift-in-hades",
    "akari",
    "blanks",
    "chemistry",
    "crossword",
    "matchmaker",
    "text-adventure",
    "word-search",
]


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    if puzzle:
        return
    team = request.context.team
    if not team:
        # TODO: figure out when this happens and handle properly,
        # but no need until after hunt
        return

    solved = {ps.puzzle.slug for ps in request.context.correct_puzzle_submissions}
    # Have to make the query -- it's not in the context
    partial = set(
        PuzzleSubmission.objects.filter(
            status="partial", team=team, puzzle__slug__in=SLUGS
        ).values_list("puzzle__slug", flat=True)
    )

    data["private"] = {"imageUrls": {}}

    for slug in SLUGS:
        if slug in solved:
            data["private"]["imageUrls"][slug] = {
                "solved": get_hashed_url(f"Rounds/hell/puzzles/{slug}/solved.gif")
            }
        elif slug in partial:
            data["private"]["imageUrls"][slug] = {
                "unsolved": get_hashed_url(f"Rounds/hell/puzzles/{slug}/partial.gif")
            }
