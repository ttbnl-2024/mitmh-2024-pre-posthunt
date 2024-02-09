from typing import Any

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle

META_ROUNDART = get_hashed_url("Rounds/olympic/other/roundart-meta-unlocked.png")


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    if puzzle:
        return

    team = request.context.team
    if not team:
        data["roundart"] = META_ROUNDART
        return

    for p in request.context.puzzle_unlocks:
        if p.slug == "gaia":
            data["roundart"] = META_ROUNDART
            return
