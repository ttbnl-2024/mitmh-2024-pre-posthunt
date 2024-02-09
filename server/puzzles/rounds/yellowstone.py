from functools import cache
from typing import Any

from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle, PuzzleSubmission, Round, Team
from puzzles.rounds.utils import get_image_urls

PUZZLES = {
    "medusas-lair": "m",
    "greek-girl-squad": "a",
    "moving-day": "b",
    "this-space-intentionally-left-well-you-know": "c",
    "turing-tar-pit": "d",
    "the-10000-commit-git-repository": "e",
    "transcendental-algebra": "f",
    "arts-and-crafts": "g",
    "a-routine-cryptic": "h",
}


@cache
def get_round():
    return Round.objects.get(slug="yellowstone")


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    team = request.context.team
    if not team:
        # Send numbered items only -- all others are under puzzles
        data["items"] = get_image_urls(
            request, get_round(), [f"items/item-{x}" for x in range(1, 8)]
        )
        return

    items = set(PUZZLES.values()) | {str(x) for x in range(1, 8)}
    for puzzle in request.context.puzzle_unlocks:
        if puzzle.slug in PUZZLES:
            items.discard(PUZZLES[puzzle.slug])

    data["private"] = {
        "itemImages": list(
            get_image_urls(
                request, get_round(), [f"items/item-{x}" for x in items]
            ).values()
        )
    }
