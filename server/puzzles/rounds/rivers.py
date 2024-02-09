from typing import Any

from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle
from puzzles.rounds.utils import get_hashed_url

SLUGS = [
    "asphodel",
    "dont-know-much",
    "do-you-like-wordle",
    "greek-columns",
    "iv-guys",
    "non-crossword",
    "poetic-justice",
    "temporary-name",
    "the-laboratory",
    "two-outs-two-strikes-and",
    "why-the-romans-never-invented-logic-puzzles",
]


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    if puzzle:
        return

    # TODO: handle when there's no team
    team = request.context.team
    if not team:
        return

    unlocked = request.context.puzzle_unlocks
    unlocked_slugs = {p.slug for p in unlocked}
    # solved_slugs = {p.puzzle.slug for p in request.context.correct_puzzle_submissions}

    data["private"] = {"extraPuzzleData": {}}
    for slug in SLUGS:
        if slug not in unlocked_slugs:
            continue
        # Art request: always used unsolved hover
        hover_path = f"Rounds/rivers-of-the-dead/puzzles/{slug}/unsolved_hover.png"
        data["private"]["extraPuzzleData"][slug] = {
            "hoverUrl": get_hashed_url(hover_path),
        }
