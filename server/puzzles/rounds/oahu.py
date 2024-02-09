from functools import cache
from typing import Any

from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle, PuzzleSubmission, Round, Team
from puzzles.rounds.utils import get_image_urls


@cache
def get_round():
    return Round.objects.get(slug="oahu")


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    team = request.context.team
    if not team:
        return

    is_solved = any(
        ps.puzzle.slug == "aphrodites-plutonic-affection-connection"
        for ps in request.context.correct_puzzle_submissions
    )

    if is_solved:
        images = get_image_urls(request, get_round(), ["sparkles"])
        data["private"] = {"sparkles": images["sparkles"]}
