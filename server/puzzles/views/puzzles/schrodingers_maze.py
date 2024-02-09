from functools import cache
from typing import TypedDict

import numpy as np
from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Minipuzzle, Puzzle, Team
from puzzles.views.auth import validate_puzzle
from tph.utils import load_file

SLUG = "schrodingers-maze"

ROWS = 5
COLS = 5

SECRET_WORDS = [
    "BUTTERFLY",
    "RESUSCITATION",
    "STARFISH",
    "LIGHTHOUSE",
    "SWIMMING",
    "TRUNKS",
    "FLOAT",
    "SHARK",
    "SEAWEED",
]

"""
5x5 mazes, read top to bottom, left to right
. = empty
Y = you
G = goal
S = water (it was originally a skull)
W = wall
"""
SECRET_MAZES = [
    "...W........S..G.S....S.Y",
    "...S..SY.SGSW....S.......",
    ".....YWS..S.W.....G..S...",
    ".GWW...W....WYWW.S.W.W..W",
    ".......S...YSG...S....S..",
    ".....GSSS.S..SSSSSYS..SSS",
    "..S....SY..SS.WW..S.G....",
    "...Y...SS.WWS.W.G........",
    "Y......S....S..........G.",
]

Maze = list[list[str]]


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


class SingleResult(TypedDict):
    correct: bool
    message: str


class Response(TypedDict):
    selfResult: str
    wordsResult: list[SingleResult]
    mazesResult: list[SingleResult]


class Evaluator:
    def __init__(self):
        self.dirs: list[tuple[int, int]] = [
            (1, 0),
            (1, -1),
            (0, -1),
            (-1, -1),
            (-1, 0),
            (-1, 1),
            (0, 1),
            (1, 1),
        ]
        self.letter_dirs: dict[str, tuple[int, int]] = {
            "A": (0, 1),
            "B": (0, 2),
            "C": (0, 3),
            "D": (0, 4),
            "E": (0, 5),
            "F": (0, 6),
            "G": (0, 7),
            "H": (1, 2),
            "I": (1, 3),
            "J": (4, 6),
            "K": (1, 4),
            "L": (1, 5),
            "M": (1, 6),
            "N": (1, 7),
            "O": (2, 3),
            "P": (2, 4),
            "Q": (2, 5),
            "R": (2, 6),
            "S": (2, 7),
            "T": (3, 4),
            "U": (3, 5),
            "V": (4, 7),
            "W": (5, 6),
            "X": (5, 7),
            "Y": (3, 6),
            "Z": (6, 7),
        }
        self.mazes = [self.make_maze_array(mazestr) for mazestr in SECRET_MAZES]

    def in_grid(self, x: int, y: int) -> bool:
        return 0 <= x < ROWS and 0 <= y < COLS

    def get_maze_position(self, maze: Maze) -> tuple[int, int]:
        for i in range(ROWS):
            for j in range(COLS):
                if maze[i][j] == "Y":
                    return i, j
        msg = f"Maze missing player!:\n{maze}"
        raise RuntimeError(msg)

    def compare_mazes(self, maze1: Maze, maze2: Maze) -> bool:
        for i in range(ROWS):
            for j in range(COLS):
                if maze1[i][j] != maze2[i][j]:
                    return False
        return True

    def make_maze_array(self, mazestr: str) -> Maze:
        arr = [[""] * COLS for _ in range(ROWS)]
        for i in range(ROWS):
            for j in range(COLS):
                arr[i][j] = mazestr[5 * i + j]
        return arr

    def step_maze(
        self, maze: Maze, pos_counts: np.ndarray, moves: list[tuple[int, int]]
    ) -> np.ndarray:
        new_counts = np.zeros((ROWS, COLS), dtype=int)
        for move in moves:
            for i in range(ROWS):
                for j in range(COLS):
                    if pos_counts[i][j] > 0:
                        grid_char = maze[i][j]
                        if grid_char in ("S", "G"):
                            new_counts[i][j] += pos_counts[i][j]
                            continue
                        i2 = i + move[0]
                        j2 = j + move[1]
                        if not self.in_grid(i2, j2):
                            new_counts[i][j] += pos_counts[i][j]
                            continue
                        if maze[i2][j2] == "W":
                            new_counts[i][j] += pos_counts[i][j]
                        else:
                            new_counts[i2][j2] += pos_counts[i][j]
        return new_counts

    def make_fraction(self, numer: int, denom: int) -> str:
        g = np.gcd(numer, denom)
        n = numer // g
        d = denom // g
        if n == 0:
            return "0"
        if d == 1:
            return str(n)
        return f"{n}/{d}"

    def run_maze(self, maze: Maze, word: str) -> str:
        word_len = len(word)
        pos_counts = np.zeros((ROWS, COLS), dtype=int)
        posx, posy = self.get_maze_position(maze)
        pos_counts[posx][posy] = 1
        for i in range(word_len):
            moves = [self.dirs[d] for d in self.letter_dirs[word[i]]]
            pos_counts = self.step_maze(maze, pos_counts, moves)

        total = 1 << word_len
        counts = [0, 0, 0]
        for i in range(ROWS):
            for j in range(COLS):
                grid_char = maze[i][j]
                count = pos_counts[i][j]
                if grid_char == "S":
                    counts[2] += count
                elif grid_char == "G":
                    counts[1] += count
                else:
                    counts[0] += count
        result = (
            f"ALIVE: {self.make_fraction(counts[0], total)}, FINISHED:"
            f" {self.make_fraction(counts[1], total)}, DROWNED:"
            f" {self.make_fraction(counts[2], total)}"
        )
        return result

    def query(self, mazestr: str, input_word: str) -> Response:
        input_maze = self.make_maze_array(mazestr)

        words_result: list[SingleResult] = [
            {"message": self.run_maze(input_maze, word), "correct": word == input_word}
            for word in SECRET_WORDS
        ]
        mazes_result: list[SingleResult] = [
            {
                "message": self.run_maze(maze, input_word),
                "correct": self.compare_mazes(maze, input_maze),
            }
            for maze in self.mazes
        ]
        self_result = self.run_maze(input_maze, input_word)

        return {
            "selfResult": self_result,
            "wordsResult": words_result,
            "mazesResult": mazes_result,
        }


EVALUATOR = Evaluator()


class GuessForm(forms.Form):
    word = forms.CharField(required=True)
    maze = forms.CharField(required=True, min_length=25, max_length=25)

    def clean_word(self):
        word = self.cleaned_data["word"].upper()
        wordlist = load_file("data", base_module="puzzles").joinpath(
            SLUG, "wordlist.txt"
        )

        if not word:
            msg = "Error: please input a word"
            raise forms.ValidationError(msg)

        if len(word) > 30:
            msg = "Error: word must be at most 30 letters"
            raise forms.ValidationError(msg)

        for c in word:
            if ord(c) < 65 or ord(c) > 90:
                msg = "Error: word must only contain letters"
                raise forms.ValidationError(msg)

        with wordlist.open() as f:
            for line in f:
                if line.strip().upper() == word:
                    break
            else:
                msg = "Error: not a word"
                raise forms.ValidationError(msg)

        return word

    def clean_maze(self):
        maze = self.cleaned_data["maze"]
        if len(maze) != ROWS * COLS:
            msg = "Not 5x5"
            raise forms.ValidationError(msg)
        if any(c not in ".YGSW" for c in maze):
            msg = "Contains unexpected characters"
            raise forms.ValidationError(msg)
        if maze.count("Y") != 1:
            msg = "Error: must have exactly one player"
            raise forms.ValidationError(msg)
        return maze


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = GuessForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    data = form.cleaned_data
    return JsonResponse({"data": EVALUATOR.query(data["maze"], data["word"])})
