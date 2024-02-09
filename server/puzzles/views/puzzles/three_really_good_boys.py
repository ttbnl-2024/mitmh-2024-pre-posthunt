from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import PuzzleSubmission, Team
from puzzles.utils import get_encryption_keys

FEEDERS = [
    "annual-international-fictionary-night",
    "boosted",
    "corporate-change",
    "deep-conspiracy",
    "extreme-hiking",
    "family-tree",
]


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    subs = PuzzleSubmission.objects.filter(
        team=team, status="correct", puzzle__slug__in=FEEDERS
    ).select_related("puzzle")
    solved = []
    keys = []
    for subm in subs:
        solved.append(subm.puzzle.slug)
        keys.append(f"three-really-good-boys_{subm.puzzle.slug[0]}")

    return {"cryptKeys": get_encryption_keys(keys), "solvedSlugs": solved}
