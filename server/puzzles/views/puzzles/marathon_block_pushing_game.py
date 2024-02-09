from functools import cache
from typing import Any, TypedDict

import numpy as np
from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Minipuzzle, Puzzle, Team
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle
from spoilr.core.models import PuzzleSubmissionStatusType

SLUG = "marathon-block-pushing-game"
ROWS = 20
COLS = 20


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    subs = request.context.puzzle_submissions

    data: dict[str, Any] = {}

    if any(ps.status == PuzzleSubmissionStatusType.PSEUDO for ps in subs):
        data["sokoban"] = True
        data["cryptKeys"] = get_encryption_keys(["marathon-block-pushing-game_sokoban"])

    return data


def validate_input(submission):
    valid_chars = ".#PO*"
    unique_chars = "PO*"
    lines = [line.strip() for line in submission.split("\n")]
    if len(lines) < 20:
        return "Error: not enough rows", None
    char_counter = {}
    for c in unique_chars:
        char_counter[c] = 0
    for i in range(ROWS):
        line = lines[i]
        if len(line) != COLS:
            return "Error: not 20x20", None
        for c in line:
            if c not in valid_chars:
                return "Error: invalid character", None
            if c in unique_chars:
                char_counter[c] += 1
    for c in unique_chars:
        if char_counter[c] != 1:
            return f"Error: must have exactly one '{c}'", None

    return None, lines


class Evaluator:
    def __init__(self, grid):
        self.grid = grid
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == "P":
                    self.p = np.array([i, j])
                elif grid[i][j] == "O":
                    self.t = np.array([i, j])
                elif grid[i][j] == "*":
                    self.b = np.array([i, j])

    def in_grid(self, pos):
        x = pos[0]
        y = pos[1]
        return 0 <= x < ROWS and 0 <= y < COLS

    def is_win(self, state):
        _, b = state
        return b[0] == self.t[0] and b[1] == self.t[1]

    def state_num(self, state):
        p, b = state
        return p[0] + ROWS * p[1] + COLS * ROWS * b[0] + COLS * ROWS * ROWS * b[1]

    def move_state(self, state, dir):
        p, b = state
        newp = p + dir
        if not self.in_grid(newp) or self.grid[newp[0]][newp[1]] == "#":
            return None
        if np.any(newp != b):
            return newp, b
        newb = b + dir
        if not self.in_grid(newb) or self.grid[newb[0]][newb[1]] == "#":
            return None
        return newp, newb

    def solve(self):
        visited = [False] * (ROWS**2 * COLS**2)
        moves = 0
        states = [(self.p, self.b)]
        won = False
        dirs = [
            np.array([0, 1]),
            np.array([1, 0]),
            np.array([0, -1]),
            np.array([-1, 0]),
        ]
        while not won and len(states) > 0:
            states2 = []
            for state in states:
                snum = self.state_num(state)
                if not visited[snum]:
                    visited[snum] = True
                    for dir in dirs:
                        state2 = self.move_state(state, dir)
                        if state2 is not None:
                            states2.append(state2)
                            if self.is_win(state2):
                                won = True
            moves += 1
            states = states2

        if won:
            return moves
        else:
            return None


class SokobanForm(forms.Form):
    grid = forms.CharField(required=True)

    def clean(self):
        grid = self.cleaned_data["grid"]
        error, lines = validate_input(grid)
        if error:
            raise forms.ValidationError(error)
        self.cleaned_data["lines"] = lines


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def check_sokoban(request: AuthedContextHttpRequestWithPuzzle):
    form = SokobanForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    grid = form.cleaned_data["lines"]
    evaluator = Evaluator(grid)
    moves = evaluator.solve()

    CUTOFF = 1000
    correct = False
    message = ""
    if moves is None:
        message = "Sokoban unsolvable."
    elif moves < CUTOFF:
        message = f"Solvable in {moves} moves. This is trivial!"
    elif moves >= CUTOFF:
        correct = True
        message = (
            f"Solvable in {moves} moves. Congrats! If you watched people try to do this"
            " Sokoban for real, you might think 'I SEE DEAD PEOPLE'."
        )

    CustomPuzzleSubmission.increment(
        team=request.context.team,
        puzzle=get_puzzle(),
        raw_answer="\n".join(grid),
        correct=correct,
    )

    return JsonResponse({"data": {"message": message}})
