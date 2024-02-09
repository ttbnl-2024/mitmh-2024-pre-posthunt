from functools import cache

from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Minipuzzle, Puzzle, Team
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle

SLUG = "von-schweetzs-big-question"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


# We can't invalidate the cached mini on solve (https://bugs.python.org/issue28178)
# So don't cache.
def get_table_mini(team: Team):
    return Minipuzzle.objects.get_or_create(
        team=team,
        puzzle=get_puzzle(),
        ref="princess-table",
    )[0]


def get_racer_mini(team: Team):
    return Minipuzzle.objects.get_or_create(
        team=team,
        puzzle=get_puzzle(),
        ref="racers",
    )[0]


GOAL_TABLE = [8, 9, 7, 12, 4, 11, 6, 2, 10]
RACER_KEY = "von-schweetz_racers"
LAST_TABLE_KEY = "von-schweetz_last_table"
Q_ROW_KEY = "von-schweetz_q_row"


class TableForm(forms.Form):
    # yeah whatever
    n1 = forms.IntegerField(min_value=1)
    n2 = forms.IntegerField(min_value=1)
    n3 = forms.IntegerField(min_value=1)
    n4 = forms.IntegerField(min_value=1)
    n5 = forms.IntegerField(min_value=1)
    n6 = forms.IntegerField(min_value=1)
    n7 = forms.IntegerField(min_value=1)
    n8 = forms.IntegerField(min_value=1)
    n9 = forms.IntegerField(min_value=1)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    enc_keys = []
    data = {}
    if get_table_mini(team).solved:
        enc_keys.append(RACER_KEY)
        data["inputs"] = ",".join(str(x) for x in GOAL_TABLE)
        data["tableMessage"] = "Correct! The puzzle has been updated."
        data["hasStep2"] = True

        # The puzzle only has one pseudo
        if get_racer_mini(team).solved or any(
            sub.pseudo for sub in request.context.puzzle_submissions
        ):
            enc_keys.append(LAST_TABLE_KEY)
            enc_keys.append(Q_ROW_KEY)
            data["hasStep3"] = True

    return data | {"cryptKeys": get_encryption_keys(enc_keys)}


@validate_puzzle(require_team=True, allow_after_hunt=True)
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = TableForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)
    data = form.cleaned_data

    submitted = [data[f"n{i}"] for i in range(1, 10)]
    correct = submitted == GOAL_TABLE

    table_mini = get_table_mini(request.context.team)
    table_message = "Incorrect."
    CustomPuzzleSubmission.increment(
        team=request.context.team,
        puzzle=get_puzzle(),
        minipuzzle=get_table_mini(request.context.team),
        raw_answer=",".join(str(x) for x in submitted),
        correct=correct,
    )

    data = {}

    if correct:
        table_mini.solved = True
        table_mini.solved_time = request.context.now
        table_mini.save()
        data["cryptKeys"] = get_encryption_keys([RACER_KEY])
        table_message = "Correct! The puzzle has been updated."

    return JsonResponse(
        data | {"data": {"correct": correct, "tableMessage": table_message}}
    )


class RacerForm(forms.Form):
    text = forms.CharField()


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def racer_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = RacerForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    data = {}

    # Table mini is a prereq
    table_mini = get_table_mini(request.context.team)
    if not table_mini.solved:
        return JsonResponse(data)

    racer_mini = get_racer_mini(request.context.team)
    norm_answer = get_puzzle().normalize_answer(form.cleaned_data.get("text", ""))
    print(norm_answer)
    if norm_answer == "ROYALPALACE" and not racer_mini.solved:
        racer_mini.solved = True
        racer_mini.solved_time = request.context.now
        racer_mini.save()
        data |= {"cryptKeys": get_encryption_keys([LAST_TABLE_KEY, Q_ROW_KEY])}
        data["data"] = {"correct": True}

    return JsonResponse(data)
