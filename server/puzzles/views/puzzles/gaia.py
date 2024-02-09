from typing import Any

from puzzles.assets import get_hashed_url
from puzzles.consumers.puzzles import gaia
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import PuzzleSubmission, Team

FEEDERS = {
    "a-terrible-morning": 46,
    "enneagram": 26,
    "icarus-away": 24,
    "jigsaw-sudoku": 69,
    "oil-paintings": 50,
    "transylvanian-math": 39,
}
META_ROUNDART = get_hashed_url("Rounds/olympic/other/roundart-meta-unlocked.png")


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    state = gaia.get_team_state(team.id)

    data: dict[str, Any] = {
        "info": {},
        "bg": META_ROUNDART,
    }

    # TODO: does our request type have this info greedily?
    # May be worth checking into to avoid another query...
    subs = PuzzleSubmission.objects.filter(
        team=team, status="correct", puzzle__slug__in=list(FEEDERS.keys())
    ).select_related("puzzle")
    for subm in subs:
        data["info"][subm.puzzle.slug] = FEEDERS[subm.puzzle.slug]

    if state.get("done", False):
        data["solution"] = gaia.OutputData(
            result=gaia.SUCCESS_MESSAGE,
            paths=[
                [
                    "transylvanian-math",
                    "enneagram",
                    "icarus-away",
                    "gaia",
                    "oil-paintings",
                ],
                ["icarus-away", "a-terrible-morning"],
            ],
            positions={
                slug: {"ra": p[0], "dec": p[1]} for slug, p in gaia.star_goals.items()
            },
        )

    return data
