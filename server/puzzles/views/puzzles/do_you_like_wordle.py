import logging
import random
from collections import Counter
from enum import Enum
from functools import cache
from typing import Any

from cryptography.exceptions import InvalidSignature
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes, hmac
from django import forms
from django.forms.utils import ErrorDict, ErrorList
from django.http import JsonResponse
from django_ratelimit.decorators import ratelimit

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Puzzle, Team
from puzzles.views.auth import validate_puzzle
from spoilr.utils import json
from tph.utils import load_file

logger = logging.getLogger(__name__)

SLUG = "do-you-like-wordle"

FERNET = Fernet(b"8x3zwllios54-konVHOlfTec7mA30GSCvyOpXNce7PE=")
HMAC_KEY = b"\xf1\xf5\x05\xd9bd\x1d\xf0\x85hd\x1d$R\xef\x13*uz\x0f\xbd\x9d\x0e\x91\\\xc0\x0b0\xdf$\x06P"

NUM_ANSWERS = 2313
MESSAGE = "BRINGHQXSMALLTOKENOFTEAMSEMOJI"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


def sign_data(data: Any) -> bytes:
    h = hmac.HMAC(HMAC_KEY, hashes.SHA256())
    h.update(json.dumps(data).encode("utf-8"))
    return h.finalize()


def verify_data(data: Any, signature: bytes) -> bool:
    h = hmac.HMAC(HMAC_KEY, hashes.SHA256())
    h.update(json.dumps(data).encode("utf-8"))
    try:
        h.verify(signature)
        return True
    except InvalidSignature:
        return False


GREEN = "G"
BLUE = "B"
YELLOW = "Y"
RED = "R"
ERROR = "RRRRR"
SPACE = " "
BLANK = "     "
DONE = "!!!!!"
CORRECT = "GGGGG"

GUESS_LENGTH = 30
NUM_GAMES = 30
NUM_GUESSES = 6


class GuessForm(forms.Form):
    guesses = forms.CharField(
        required=True, min_length=GUESS_LENGTH, max_length=GUESS_LENGTH, strip=False
    )
    encWords = forms.CharField(required=True, min_length=150)
    signature = forms.CharField(required=True, min_length=64, max_length=64)

    def clean(self):
        cleaned_data = super().clean()
        enc_words: str = cleaned_data.get("encWords")
        if enc_words is None:
            return
        signature: str = cleaned_data.get("signature")
        if signature is None:
            return
        byte_signature = bytes.fromhex(signature)
        if not verify_data(enc_words, byte_signature):
            msg = "Signature did not match digest"
            raise forms.ValidationError(msg)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    wordlist = load_file("data", base_module="puzzles").joinpath(SLUG, "answers.txt")

    selected = set(random.sample(list(range(NUM_ANSWERS)), NUM_GAMES))
    words = []
    with wordlist.open() as f:
        for i, line in enumerate(f):
            if i in selected:
                words.append(line.strip().upper())
    random.shuffle(words)
    # logger.error("words: %s", words)

    enc_words = FERNET.encrypt(",".join(words).encode("utf-8")).hex()
    signature = sign_data(enc_words).hex()

    return enc_words, signature


def validWord(word):
    answerlist = load_file("data", base_module="puzzles").joinpath(SLUG, "allowed.txt")

    with answerlist.open() as answerFile:
        for line in answerFile:
            if line.strip().upper() == word:
                break
        else:
            allowlist = load_file("data", base_module="puzzles").joinpath(
                SLUG, "answers.txt"
            )
            with allowlist.open() as allowFile:
                for line in allowFile:
                    if line.strip().upper() == word:
                        break
                else:
                    return False
    return True


def process_guess(guess: str, answerStr: str):
    result = list(BLANK)
    answer = list(answerStr)

    if not validWord(guess):
        return ERROR

    for i, c in enumerate(guess):
        if c == answer[i]:
            answer[i] = ""
            result[i] = GREEN

    for i, c in enumerate(guess):
        if c in answer and result[i] != GREEN:
            idx = answer.index(c)
            answer[idx] = ""
            result[i] = YELLOW

    return "".join(result)


def process_answer(guesses: str, answer: str, letter: str):
    gameState = []
    isError = False
    isCorrect = False
    isBlank = False
    topCell = SPACE

    for i in range(NUM_GUESSES):
        if isError or isCorrect:
            gameState.append(DONE)
            continue

        guess = guesses[i * 5 : i * 5 + 5]
        if SPACE in guess:
            isBlank = True

        if isBlank:
            gameState.append(BLANK)
            continue

        state = process_guess(guess, answer)
        if state == CORRECT:
            isCorrect = True
            topCell = BLUE if letter in guesses[0 : i * 5 + 5] else GREEN
        if state == ERROR:
            isError = True
            topCell = RED

        gameState.append("".join(state))

    return "".join(gameState), topCell


def process_guesses(guesses: str, answers: str):
    top_bar = [SPACE] * NUM_GAMES
    game_states = []

    for i in range(NUM_GAMES):
        # logger.error(
        #     "process_guesses: guesses=[%s], answer=[%s], letter=[%s]",
        #     guesses,
        #     answers[i],
        #     MESSAGE[i],
        # )

        game_state, top_cell = process_answer(guesses, answers[i], MESSAGE[i])
        game_states.append(game_state)
        top_bar[i] = top_cell
    #        logger.error("=> game_state=[%s], top_cell=[%s]", game_state, top_cell)

    return "".join(top_bar), "".join(game_states)


# Note that this is vulnerable to replay attacks, but I don't care enough to
# handle that, though, since I'd need some form of session token, or
# timestamp verification.
@validate_puzzle(require_team=True, allow_after_hunt=True)
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = GuessForm(request.POST)
    if not form.is_valid():
        # logger.error("Invalid guess form: %s", form.errors)
        return JsonResponse({"form_errors": form.errors}, status=400)

    guesses: str = form.cleaned_data["guesses"]
    plain_words: list[str] = (
        FERNET.decrypt(bytes.fromhex(form.cleaned_data["encWords"]))
        .decode("utf-8")
        .split(",")
    )

    top_bar, game_states = process_guesses(guesses, plain_words)

    return JsonResponse(
        {
            "data": {
                "topBar": top_bar,
                "gameStates": game_states,
            }
        }
    )


@validate_puzzle(require_team=True, allow_after_hunt=True)
@ratelimit(key="user_or_ip", rate="1/s")
def new_game(request: AuthedContextHttpRequestWithPuzzle):
    encWords, signature = get_initial_data(request, request.context.team)
    return JsonResponse({"encWords": encWords, "signature": signature})
