import logging
from functools import cache

from django.http import JsonResponse
from django.views.decorators.http import require_GET

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, Team
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle
from spoilr.core.models import (
    InteractionType,
    Minipuzzle,
    MinipuzzleSubmission,
    TeamInteraction,
)

logger = logging.getLogger(__name__)

SLUG = "a-trip-down-memory-lane"

# i=1 is a minipuzzle not an interaction
INTERACTIONS = {f"{SLUG}-{i}": f"{SLUG}_p{i}-answer" for i in range(2, 8)}


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    # only get the encryption key if the related interaction is accomplished
    team_interactions = TeamInteraction.objects.filter(
        team=team,
        interaction__interaction_type=InteractionType.PHYSICAL,
        interaction__slug__in=list(INTERACTIONS.keys()),
        accomplished=True,
    )
    keys = [INTERACTIONS[t.interaction.slug] for t in team_interactions]
    pin_found = False
    if find_minipuzzle_submission(team):
        pin_found = True
        keys.append(f"{SLUG}_p1-answer")
        keys.append(f"{SLUG}_answer-checker")
    if len(team_interactions) > 0:
        keys.append(f"{SLUG}_answer-checker")

    logger.info(keys)

    return {"cryptKeys": get_encryption_keys(keys), "p1done": pin_found}


def find_minipuzzle_submission(team):
    try:
        minipuzzle = Minipuzzle.objects.get(
            team=team, puzzle=get_puzzle(), ref=f"{SLUG}-p1"
        )
        submission = MinipuzzleSubmission.objects.get(
            team=team, puzzle=get_puzzle(), minipuzzle=minipuzzle, correct=True
        )
        return submission
    except (Minipuzzle.DoesNotExist, MinipuzzleSubmission.DoesNotExist):
        return None


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_GET
def found_pin_location(request: AuthedContextHttpRequestWithPuzzle):
    team = request.context.team

    # create a minipuzzle for this team (if needed), and immediately solve it (if needed)
    minipuzzle = Minipuzzle.objects.get_or_create(
        team=team,
        puzzle=get_puzzle(),
        ref=f"{SLUG}-p1",
        solved=True,
    )[0]
    MinipuzzleSubmission.objects.get_or_create(
        team=team,
        puzzle=get_puzzle(),
        minipuzzle=minipuzzle,
        raw_answer="CHECKTHEDROPPEDPINLOCATION",
        answer="CHECKTHEDROPPEDPINLOCATION",
        correct=True,
    )

    return JsonResponse({"message": "success"}, status=200)
