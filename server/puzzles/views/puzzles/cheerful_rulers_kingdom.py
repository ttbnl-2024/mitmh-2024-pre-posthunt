from functools import cache
from typing import Any

from puzzles.consumers import ClientConsumer
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, PuzzleSubmission, Team
from puzzles.utils import get_encryption_keys
from spoilr.core.models import PuzzleSubmissionStatusType

SLUG = "cheerful-rulers-kingdom"

# TODO: post-solve guessbox handler

LOCATION_PSEUDO = "KINGTOBENAMEDLTR"
SUBPUZZLE_PSEUDOS = [
    "ACOINCOMININHOT",
    "PARTFIREPARRYSABER",
    "DAMNDANIELPROSPERS",
    "CONCOCTTHEBESTBEER",
]

MAIN_EVENT_KEY = "cheerful-rulers-kingdom_main-event"
META_KEY = "cheerful-rulers-kingdom_meta"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    subs = request.context.puzzle_submissions

    data: dict[str, Any] = {"cryptKeys": {}}

    main_count = 0
    for sub in subs:
        print(sub)
        if (
            sub.status == PuzzleSubmissionStatusType.PSEUDO
            and sub.answer == LOCATION_PSEUDO
        ):
            data["cryptKeys"] |= get_encryption_keys([MAIN_EVENT_KEY])
            data["locationSolved"] = True
        elif (
            sub.status == PuzzleSubmissionStatusType.PSEUDO
            and sub.answer in SUBPUZZLE_PSEUDOS
        ):
            main_count += 1

    if main_count >= 3:
        data["cryptKeys"] |= get_encryption_keys([META_KEY])
        data["metaUnlocked"] = True

    return data


def on_pseudo(pseudo: str, team: Team):
    group = ClientConsumer.get_puzzle_group(id=team.id, slug=SLUG)

    if pseudo == LOCATION_PSEUDO:
        ClientConsumer.send_event(
            group,
            SLUG,
            {"locationSolved": True},
            crypt_keys=get_encryption_keys([MAIN_EVENT_KEY]),
        )

    # No context here unfortunately, but this is a rare call.
    if (
        PuzzleSubmission.objects.filter(
            team=team,
            status=PuzzleSubmissionStatusType.PSEUDO,
            answer__in=SUBPUZZLE_PSEUDOS,
        ).count()
        == 3
    ):
        ClientConsumer.send_event(
            group,
            SLUG,
            {"metaUnlocked": True},
            crypt_keys=get_encryption_keys([META_KEY]),
        )
