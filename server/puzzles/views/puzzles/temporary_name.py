from datetime import datetime, timedelta
from functools import cache
from typing import TypedDict, cast

from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.consumers import ClientConsumer
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, Team
from puzzles.models.interactive_cache import PuzzleStateCacheManager
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle

SLUG = "temporary-name"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


class TempNameState(TypedDict):
    part2: bool
    timeout: str


def state_cache_manager(team_id: int, **kwargs):
    return PuzzleStateCacheManager(
        team_id=team_id,
        puzzle_id=get_puzzle().id,
        initial_data={
            "part2": False,
            "timeout": "",
        },
        **kwargs,
    )


def get_state(team: Team) -> TempNameState:
    with state_cache_manager(team.id, lock=False) as cm:
        return cast(TempNameState, cm.get_or_create())


CORRECT_ANSWERS = [
    "BAZAAR",
    "WHO CAME IN 4TH",
    "OUST",
    "START",
    "SATISFACTION",
    "AFTERBIRTH",
    "TABLE SETTING",
    "HEARTH",
    "OFFICE SPACE",
]

CHOICES = list(zip(CORRECT_ANSWERS, CORRECT_ANSWERS))
CRYPT_KEY = ["temporary-name_table"]


class TempNameForm(forms.Form):
    bizarre = forms.ChoiceField(choices=CHOICES, required=False)
    perferdefedofor = forms.ChoiceField(choices=CHOICES, required=False)
    cousteau = forms.ChoiceField(choices=CHOICES, required=False)
    seriously = forms.ChoiceField(choices=CHOICES, required=False)
    iAlso = forms.ChoiceField(choices=CHOICES, required=False)
    prem = forms.ChoiceField(choices=CHOICES, required=False)
    lambdaBeta = forms.ChoiceField(choices=CHOICES, required=False)
    honcho = forms.ChoiceField(choices=CHOICES, required=False)
    stapler = forms.ChoiceField(choices=CHOICES, required=False)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    state = get_state(team)
    data = {}
    if state["part2"]:
        data["part2"] = True
        data["correctAnswers"] = CORRECT_ANSWERS
        data["cryptKeys"] = get_encryption_keys(CRYPT_KEY)
    elif state["timeout"]:
        timeout_end = datetime.fromisoformat(state["timeout"])
        seconds_wait = max((timeout_end - request.context.now).total_seconds(), 0)
        if seconds_wait:
            data["secondsToWait"] = seconds_wait
    else:
        data["secondsToWait"] = 0
    return data


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    state = get_state(request.context.team)

    if state["part2"]:
        return JsonResponse(
            {"error": "You're already done with this part!"}, status=400
        )

    if state["timeout"]:
        timeout_end = datetime.fromisoformat(state["timeout"])
        if timeout_end > request.context.now:
            # Timed out! Deny, no cache update
            return JsonResponse(
                {
                    "error": "You are timed out!",
                    "secondsToWait": (
                        timeout_end - request.context.now
                    ).total_seconds(),
                },
                status=400,
            )

    form = TempNameForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    data = form.cleaned_data
    guessed = [
        data.get("bizarre", ""),
        data.get("perferdefedofor", ""),
        data.get("cousteau", ""),
        data.get("seriously", ""),
        data.get("iAlso", ""),
        data.get("prem", ""),
        data.get("lambdaBeta", ""),
        data.get("honcho", ""),
        data.get("stapler", ""),
    ]
    incorrect = sum(g != c for g, c in zip(guessed, CORRECT_ANSWERS))

    # TODO: custom puzzle submission
    group = ClientConsumer.get_puzzle_group(id=request.context.team.id, slug=SLUG)
    if incorrect == 0:
        with state_cache_manager(request.context.team.id) as cm:
            state = cast(TempNameState, cm.get_or_create())
            state["part2"] = True
            state["timeout"] = ""
            cm.set(state)
        crypt_keys = get_encryption_keys(CRYPT_KEY)
        payload = {
            "part2": True,
            "correctAnswers": CORRECT_ANSWERS,
        }
        ClientConsumer.send_event(
            group,
            SLUG,
            payload,
            crypt_keys=crypt_keys,
        )
        return JsonResponse({"data": payload, "cryptKeys": crypt_keys})
    else:
        with state_cache_manager(request.context.team.id) as cm:
            state = cast(TempNameState, cm.get_or_create())
            seconds_to_wait = 60 * incorrect
            timeout_end = request.context.now + timedelta(seconds=seconds_to_wait)
            state["timeout"] = timeout_end.isoformat()
            cm.set(state)
        payload = {"secondsToWait": seconds_to_wait}
        ClientConsumer.send_event(group, SLUG, payload)
        return JsonResponse({"data": payload})
