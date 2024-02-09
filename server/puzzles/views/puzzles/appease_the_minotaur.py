from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import PuzzleSubmission, Team
from puzzles.utils import get_encryption_keys

FEEDERS = [
    "the-farm",
    "could-you-restate-that",
    "line-please",
    "io",
    "spoiler-alert",
    "itineratum-de-urbes-universum",
    "halloween-tv-guide",
    "a-trip-down-memory-lane",
]


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    solved = PuzzleSubmission.objects.filter(
        team=team, status="correct", puzzle__slug__in=FEEDERS
    ).count()
    keys = [f"appease-the-minotaur_{i}" for i in range(min(solved, 7))]

    return {"cryptKeys": get_encryption_keys(keys), "numSolved": solved}
