from functools import cache
from typing import Any

from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle, Round
from puzzles.rounds.utils import get_hashed_url


@cache
def get_round():
    return Round.objects.get(slug="yellowstone")


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    # Stands image is too large for a puzzle icon, so cropped and sending this part
    # as extra
    extraData = {"extraImage": get_hashed_url("Rounds/texas/other/stands_extra.png")}

    data["private"] = {}
    team = request.context.team
    if not team:
        data["private"] = extraData

    if any(puzzle.slug == "line-please" for puzzle in request.context.puzzle_unlocks):
        data["private"] = extraData
