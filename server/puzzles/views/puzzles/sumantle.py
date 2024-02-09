from datetime import datetime, timedelta
from functools import cache
from typing import TypedDict, cast

import joblib
from django import forms
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.consumers import ClientConsumer
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, Team
from puzzles.models.interactive_cache import PuzzleStateCacheManager
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle
from tph.utils import load_file

SLUG = "sumantle"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


ANSWERS = [
    "EAGER",
    "AWAITED",
    "PLANNING",
    "RESEARCH",
    "EPHEMERAL",
    "MOMENTARY",
    "MIRROR",
    "WISDOM",
    "UNUSUAL",
    "CHANGE",
    "ARCHITECTURE",
    "CREATIVE",
    "AUCTION",
    "PREMIUM",
    "ACCESS",
    "REFERRAL",
    "ANTICIPATED",
    "PROJECT",
    "FLEETING",
    "REFLECTION",
    "DIFFERENT",
    "DESIGN",
    "PRICE",
    "CODE",
    "UPCOMING",
    "GLIMPSE",
    "UNIQUE",
    "DISCOUNT",
    "PEEK",
    "OFFER",
    "EXCLUSIVE",
]
PREREQS: dict[int, list[int]] = {x: [] for x in range(17)} | {
    x + 16: [2 * x, 2 * x + 1] for x in range(15)
}

SCORE_DICTS: list[dict[str, int]] = []
if not settings.SKIP_LARGE_DEPENDENCIES:
    with (
        load_file("data", base_module="puzzles")
        .joinpath(SLUG, "scores_lzma.jbl")
        .open("rb") as f
    ):
        SCORE_DICTS = joblib.load(f)


class SumantleTeamState(TypedDict):
    wordsSolved: list[str]


def state_cache_manager(team_id: int, **kwargs):
    return PuzzleStateCacheManager(
        team_id=team_id,
        puzzle_id=get_puzzle().id,
        initial_data={
            "wordsSolved": [""] * len(ANSWERS),
        },
        **kwargs,
    )


def get_state(team: Team) -> SumantleTeamState:
    with state_cache_manager(team.id, lock=False) as cm:
        return cast(SumantleTeamState, cm.get_or_create())


class SumantleGuessForm(forms.Form):
    guess1 = forms.CharField(max_length=30, required=False)
    guess0 = forms.CharField(max_length=30, required=False)
    guess2 = forms.CharField(max_length=30, required=False)
    guess3 = forms.CharField(max_length=30, required=False)
    guess4 = forms.CharField(max_length=30, required=False)
    guess5 = forms.CharField(max_length=30, required=False)
    guess6 = forms.CharField(max_length=30, required=False)
    guess7 = forms.CharField(max_length=30, required=False)
    guess8 = forms.CharField(max_length=30, required=False)
    guess9 = forms.CharField(max_length=30, required=False)
    guess10 = forms.CharField(max_length=30, required=False)
    guess11 = forms.CharField(max_length=30, required=False)
    guess12 = forms.CharField(max_length=30, required=False)
    guess13 = forms.CharField(max_length=30, required=False)
    guess14 = forms.CharField(max_length=30, required=False)
    guess15 = forms.CharField(max_length=30, required=False)
    guess16 = forms.CharField(max_length=30, required=False)
    guess17 = forms.CharField(max_length=30, required=False)
    guess18 = forms.CharField(max_length=30, required=False)
    guess19 = forms.CharField(max_length=30, required=False)
    guess20 = forms.CharField(max_length=30, required=False)
    guess21 = forms.CharField(max_length=30, required=False)
    guess22 = forms.CharField(max_length=30, required=False)
    guess23 = forms.CharField(max_length=30, required=False)
    guess24 = forms.CharField(max_length=30, required=False)
    guess25 = forms.CharField(max_length=30, required=False)
    guess26 = forms.CharField(max_length=30, required=False)
    guess27 = forms.CharField(max_length=30, required=False)
    guess28 = forms.CharField(max_length=30, required=False)
    guess29 = forms.CharField(max_length=30, required=False)
    guess30 = forms.CharField(max_length=30, required=False)

    def clean(self):
        non_words = []
        for i in range(len(ANSWERS)):
            g = f"guess{i}"
            if (
                g in self.cleaned_data
                and self.cleaned_data[g].strip()
                and self.cleaned_data[g].lower().strip() not in SCORE_DICTS[0]
            ):
                non_words.append(self.cleaned_data[g])
        if non_words:
            msg = f"Invalid words: {non_words}"
            raise forms.ValidationError(msg)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    state = get_state(request.context.team)
    return {"wordsSolved": state["wordsSolved"]}


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = SumantleGuessForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    state = get_state(request.context.team)
    data = form.cleaned_data

    for i in range(len(ANSWERS)):
        if not data[f"guess{i}"] or not PREREQS[i]:
            continue
        if not all(state["wordsSolved"][j] for j in PREREQS[i]):
            return JsonResponse({"error": "Don't try to bypass :("})

    resp = {
        "scores": [-1] * len(ANSWERS),
        "wordsSolved": state["wordsSolved"],
    }

    dirty = False
    for i in range(len(ANSWERS)):
        if state["wordsSolved"][i]:
            resp["scores"][i] = 1
            continue

        word: str = data[f"guess{i}"].lower().strip()
        if not word:
            continue
        score = SCORE_DICTS[i][word]
        resp["scores"][i] = score

        # 1 is word exactly
        if score == 1:
            state["wordsSolved"][i] = word
            dirty = True

    if dirty:
        group = ClientConsumer.get_puzzle_group(id=request.context.team.id, slug=SLUG)
        ClientConsumer.send_event(group, SLUG, {"wordsSolved": state["wordsSolved"]})

        with state_cache_manager(request.context.team.id) as cm:
            cm.set(state)

    return JsonResponse({"data": resp})
