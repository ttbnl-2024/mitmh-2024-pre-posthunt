import random
from functools import cache

from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.consumers import ClientConsumer
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Puzzle
from puzzles.views.auth import validate_puzzle
from tph.utils import load_file

SLUG = "mandalay-bay"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


# The only state we will track is number of spins, because it will be funny to look at later
DATA: dict[str, tuple[bytes, int]] = {
    "A": (b"\xf0\x9f\xa5\x88", 1),
    "B": (b"\xf0\x9f\xab\x90", 3),
    "C": (b"\xf0\x9f\x92\x8d", 3),
    "D": (b"\xe2\x99\xa6\xef\xb8\x8f", 2),
    "E": (b"7\xef\xb8\x8f", 1),
    "F": (b"\xf0\x9f\xaa\x85", 4),
    "G": (b"\xf0\x9f\xaa\x99", 2),
    "H": (b"\xe2\x99\xa5\xef\xb8\x8f", 4),
    "I": (b"\xf0\x9f\x83\x8f", 1),
    "J": (b"\xf0\x9f\xa5\xa5", 8),
    "K": (b"\xf0\x9f\x8d\x92", 5),
    "L": (b"\xf0\x9f\x94\x94", 1),
    "M": (b"\xf0\x9f\x92\x8e", 3),
    "N": (b"\xf0\x9f\x8d\x8b", 1),
    "O": (b"\xf0\x9f\x92\xb0", 1),
    "P": (b"\xf0\x9f\x8d\x8e", 3),
    "Q": (b"\xf0\x9f\x92\xb5", 10),
    "R": (b"\xf0\x9f\x8d\x8c", 1),
    "S": (b"\xe2\x99\xa0\xef\xb8\x8f", 1),
    "T": (b"\xe2\x98\x84\xef\xb8\x8f", 1),
    "U": (b"\xf0\x9f\x91\x91", 1),
    "V": (b"\xf0\x9f\x8d\x87", 4),
    "W": (b"\xe2\x99\xa3\xef\xb8\x8f", 4),
    "X": (b"\xf0\x9f\x8d\x80", 8),
    "Y": (b"\xf0\x9f\x8d\x93", 4),
    "Z": (b"\xf0\x9f\xa5\x87", 10),
}


# TODO: consider websocket.
# For HTTP: simpler, we are not stateful
# For WS: fewer connections established


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def spin_handler(request: AuthedContextHttpRequestWithPuzzle):
    reels = (
        random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZSS"),
        random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZUU"),
        random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZNN"),
    )

    byte_emojis: list[bytes]
    scores: list[int]
    byte_emojis, scores = zip(*[DATA[r] for r in reels], strict=True)  # type: ignore
    correct = True
    rolled = "".join(reels)
    if rolled == "SUN":
        byte_emojis = [b"\xe2\xac\x9c"] * 3
        message = (
            "Jackpot! The slot machine lights up in a blinding light and you avert your"
            " eyes. It's so bright that you can't even see the symbols."
        )
    else:
        wordlist = load_file("data", base_module="puzzles").joinpath(SLUG, "words.txt")
        with wordlist.open() as f:
            for word in f.readlines():
                if word.strip().upper() == rolled:
                    message = f"You win! Payout: ${sum(scores)}"
                    break
            else:
                message = "You lose!"
                correct = False

    CustomPuzzleSubmission.increment(
        team=request.context.team,
        puzzle=get_puzzle(),
        raw_answer="SPIN",
        correct=correct,
    )

    return JsonResponse(
        {
            "data": {
                "emojis": [e.decode("utf-8") for e in byte_emojis],
                "message": message,
            }
        }
    )
