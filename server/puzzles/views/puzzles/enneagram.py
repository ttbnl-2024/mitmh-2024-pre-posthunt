import re
from functools import cache, lru_cache
from typing import Any, TypedDict

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives import hashes, hmac
from django import forms
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import CustomPuzzleSubmission, Minipuzzle, Puzzle, Team
from puzzles.utils import get_encryption_keys
from puzzles.views.auth import validate_puzzle
from spoilr.utils import json

SLUG = "enneagram"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


@lru_cache(maxsize=256)
def get_minipuzzle(team: Team, num: int):
    return Minipuzzle.objects.get_or_create(
        team=team,
        puzzle=get_puzzle(),
        ref=f"{SLUG}-{num}",
    )[0]


class Enneagram(TypedDict):
    gram: str
    answerHashes: str


LEVELS: dict[int, list[Enneagram]] = {
    0: [
        {"gram": "ENTERNINE", "answerHashes": "3054793632687164"},
        {"gram": "UNOUTLAWS", "answerHashes": "6380970687050149"},
        {"gram": "FGHIJKMNO", "answerHashes": "1202040000283973"},
        {
            "gram": "EOFPEMDAS",
            "answerHashes": (
                "521757573110517,3431793617425888,1479719884986095,2021268988669551"
            ),
        },
        {"gram": "MORSEIOOI", "answerHashes": "495727821759409"},
        {"gram": "TTTTTTTTT", "answerHashes": "2875971728144420,5025513527537419"},
        {"gram": "MELAZARUS", "answerHashes": "8580726942322562"},
        {"gram": "NEONARGON", "answerHashes": "2720391370280757"},
        {"gram": "DISENACTS", "answerHashes": "2954711834906262"},
    ],
    5: [
        {"gram": "THEOOFMIT", "answerHashes": "1883372038149333"},
        {"gram": "DEATHLIFE", "answerHashes": "4775667719767311"},
        {"gram": "BOBBOTTOM", "answerHashes": "1835763245162734"},
        {"gram": "ENXXXPTED", "answerHashes": "3932562201983804"},
        {
            "gram": "IFROMMBTI",
            "answerHashes": (
                "5876552588798384,1354489719768540,2186062759406873,1596434870836875"
            ),
        },
        {"gram": "NASAWRECK", "answerHashes": "5469538316749247"},
        {"gram": "AGEBEAUTY", "answerHashes": "2383016932381425"},
        {"gram": "ORORZILCH", "answerHashes": "8045575072716587"},
        {"gram": "ALIFELIFE", "answerHashes": "3805664515454408"},
    ],
    11: [
        {"gram": "JOOOOHNAG", "answerHashes": "14463807839257"},
        {"gram": "TOOOJOOOY", "answerHashes": "155397658275904"},
        {"gram": "IXINNAILS", "answerHashes": "4028906006590499"},
        {"gram": "FORMERUDE", "answerHashes": "7499355584775304"},
        {"gram": "PATRIOTVS", "answerHashes": "990635307409844"},
        {"gram": "FTFTFTJAB", "answerHashes": "6669333420710264"},
        {"gram": "ASCIIZERO", "answerHashes": "8386006165763081"},
        {"gram": "HEMIBISON", "answerHashes": "2418508890974536"},
        {"gram": "MAIUTAHNE", "answerHashes": "2407264182302946"},
    ],
    19: [
        {"gram": "KNOWSAYER", "answerHashes": "7252707959262029"},
        {"gram": "MNNNNNNNN", "answerHashes": "4574757023219639"},
        {"gram": "ONICIALLY", "answerHashes": "2869907740455093"},
        {"gram": "BROGUYFEL", "answerHashes": "8174288214393783"},
        {"gram": "BULLINGER", "answerHashes": "2014206453359902"},
        {"gram": "WILLAROSE", "answerHashes": "4897802468275811,1527323308459303"},
        {"gram": "ISLAAAAND", "answerHashes": "8055056850688635"},
        {
            "gram": "APPENDING",
            "answerHashes": "3246720439226195,2290300619735448,1311259559070922",
        },
        {"gram": "IBMBACKUP", "answerHashes": "7453107205237689"},
    ],
    27: [
        {"gram": "HOTSTWICE", "answerHashes": "798735191990866"},
        {"gram": "UMGCSZINE", "answerHashes": "6836211889272502"},
        {"gram": "NIOITIIIF", "answerHashes": "6013530967578426"},
        {"gram": "DOOSENIOR", "answerHashes": "8278315340402153"},
        {"gram": "TNINEATPM", "answerHashes": "971412809888506"},
        {"gram": "INKYBOUND", "answerHashes": "699459639478352,6876062938697967"},
        {"gram": "AGAINNIRA", "answerHashes": "2248249161031441"},
        {"gram": "HURRXCANE", "answerHashes": "5770932660016651,6377978458951622"},
        {"gram": "TICCCKETS", "answerHashes": "6248344249079895"},
    ],
    34: [
        {"gram": "HUEYDEWEY", "answerHashes": "4060095280333763"},
        {"gram": "IONSIGERS", "answerHashes": "6661851101262506"},
        {"gram": "ADIEUGUNS", "answerHashes": "1426555337685717"},
        {"gram": "FWDEKLERK", "answerHashes": "8682405884424568"},
        {"gram": "DIEANDDIE", "answerHashes": "1504328043898129"},
        {"gram": "ENOSTHROT", "answerHashes": "4012503995244071"},
        {"gram": "OZPATHWAY", "answerHashes": "6068045742468099"},
        {"gram": "DRINKXSXS", "answerHashes": "744916126053216"},
        {"gram": "OFFTOLOGY", "answerHashes": "8315156558977037"},
    ],
    41: [
        {"gram": "CLUNUNDER", "answerHashes": "8740062744262083"},
        {"gram": "ASHAVINGD", "answerHashes": "6516541476093461"},
        {"gram": "NDFTHSTCK", "answerHashes": "2462622416025175"},
        {"gram": "TCELLTYPE", "answerHashes": "2132635160300261"},
        {"gram": "WYOYRYLYD", "answerHashes": "8297380165025676"},
        {
            "gram": "NATORANDJ",
            "answerHashes": (
                "4638693696391971,2687757851544212,4189498320209531,4293341846469211"
            ),
        },
        {"gram": "OLDBFSLBS", "answerHashes": "7070675448645996"},
        {"gram": "SALTELBAT", "answerHashes": "2635967962576470"},
        {"gram": "TNOTINOTE", "answerHashes": "3654739082573948"},
    ],
    48: [
        {"gram": "VIPERGANG", "answerHashes": "7169204339843246"},
        {"gram": "NANCYDREW", "answerHashes": "532102336264255"},
        {"gram": "UTTERINGS", "answerHashes": "3388689438998392"},
        {"gram": "GAMESNAME", "answerHashes": "3013565888521035"},
        {"gram": "TRANSLATO", "answerHashes": "5486830053971647"},
        {"gram": "MLISCROWS", "answerHashes": "183150571272746"},
        {"gram": "FROGSTIAS", "answerHashes": "4860170113541622,6247611432179597"},
        {"gram": "ADONILADO", "answerHashes": "7250338067386578"},
        {"gram": "LIONSBIAS", "answerHashes": "8182027937234803,5808422367791531"},
    ],
    55: [
        {"gram": "ALLOUTFAN", "answerHashes": "2951455407096167"},
        {"gram": "GENUINEAN", "answerHashes": "4315858197581246"},
        {"gram": "HEXFFFFOO", "answerHashes": "8524655650159696"},
        {"gram": "DDXXXCDBR", "answerHashes": "1583635675161204"},
        {"gram": "NININIPOP", "answerHashes": "6821462810430685"},
        {"gram": "COMPARIJR", "answerHashes": "5068017342520621"},
        {"gram": "SONNETCIX", "answerHashes": "2557774002508297"},
        {"gram": "LEVELNINE", "answerHashes": "7356151612920020"},
        {"gram": "ENTERTHIS", "answerHashes": "5944390844930630"},
    ],
}
LEVELS_LIST = [g for _, grams in LEVELS.items() for g in grams]
HMAC_KEY = b"\xc3\xd5\x93\xe3\x1b\xe37e\x93D\xc0\xe5.\xc8V\x9d\xec\xa6^_6\xdf\xbdix\n\xf9\x10\x93\xb5\x10v"

LEVEL_STARTS = {}
running = 1
for k, v in LEVELS.items():
    LEVEL_STARTS[k] = running
    running += len(v)


def compute_hash(answer: str, seed: int = 0):
    """Hash function copied from HTML, cyrb53"""

    def imul(a: int, b: int):
        return (a * b) & 0xFFFFFFFF

    salt = "mysteryHunt2024"
    answer = salt + answer

    h1 = 0xDEADBEEF ^ seed
    h2 = 0x41C6CE57 ^ seed

    for c in answer:
        ch = ord(c)
        h1 = imul(h1 ^ ch, 2654435761)
        h2 = imul(h2 ^ ch, 1597334677)

    h1 = imul(h1 ^ (h1 >> 16), 2246822507)
    h1 ^= imul(h2 ^ (h2 >> 13), 3266489909)
    h2 = imul(h2 ^ (h2 >> 16), 2246822507)
    h2 ^= imul(h1 ^ (h1 >> 13), 3266489909)

    return str(4294967296 * (2097151 & h2) + h1)


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


class GuessForm(forms.Form):
    guess = forms.CharField(required=True, min_length=0, max_length=1000)
    gramNum = forms.IntegerField(required=True, min_value=1, max_value=len(LEVELS_LIST))
    solved = forms.CharField(required=False)
    signature = forms.CharField(required=True)

    def clean(self):
        solved_s = self.cleaned_data.get("solved")
        solved = [int(n) for n in solved_s.split(",")] if solved_s else []
        signature = bytes.fromhex(self.cleaned_data.get("signature"))

        if not verify_data(solved, signature):
            msg = "Signature did not match digest"
            raise ValidationError(msg)


def get_initial_data(_request, team):
    mini = get_minipuzzle(team, 81)
    if mini.solved:
        return {
            "cryptKeys": get_encryption_keys(
                ["enneagram_finish", "enneagram_extracredit"]
            )
        }
    return {}


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    form = GuessForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)
    data = form.cleaned_data

    solved_s: str = data["solved"]

    solved = [int(n) for n in solved_s.split(",")] if solved_s else []
    gram_idx: int = data["gramNum"] - 1
    target_gram = LEVELS_LIST[gram_idx]

    raw_guess: str = data["guess"]
    raw_guess = raw_guess.lower()
    correct = False

    guess_hash = compute_hash(re.sub("[^a-z]", "", raw_guess))
    if guess_hash in target_gram["answerHashes"].split(","):
        correct = True

    # Sonnet CIX has a few versions. This handles common variants.
    if not correct and target_gram["gram"] == "SONNETCIX":
        sonnet_guess = re.sub("[^a-z ]", "", raw_guess)
        if (
            ("one" in sonnet_guess or "ohne" in sonnet_guess)
            and "in my nature" in sonnet_guess
            and "in it thou art my all" in sonnet_guess
        ):
            correct = True

    mini = get_minipuzzle(request.context.team, data["gramNum"])
    CustomPuzzleSubmission.increment(
        team=request.context.team,
        puzzle=get_puzzle(),
        minipuzzle=mini,
        raw_answer=raw_guess,
        correct=correct,
    )

    if correct:
        mini.solved = True
        mini.save()

    if not correct or data["gramNum"] in solved:
        return JsonResponse(
            {
                "data": {
                    "correct": correct,
                    "gramNum": data["gramNum"],
                    "solved": solved,
                    "signature": data["signature"],
                },
            }
        )

    solved.append(data["gramNum"])
    solved.sort()
    num_solved = len(solved)

    # Unlocked a new row
    new_level_data = {}
    if num_solved in LEVELS:
        new_level_data["grams"] = [
            {"gram": e["gram"], "num": LEVEL_STARTS[num_solved] + i, "solved": False}
            for i, e in enumerate(LEVELS[num_solved])
        ]

        # If we're not at the end, make the next set (+3) visible
        unlock_ats = list(LEVELS.keys())
        unlock_idx = unlock_ats.index(num_solved)
        if unlock_idx < len(unlock_ats) - 3:
            new_visible = unlock_ats[unlock_idx + 3]
            new_level_data["newVisibleUnlockAt"] = new_visible
            new_level_data["newNumVisible"] = len(LEVELS[new_visible])

    ret_data = {
        "data": {
            "correct": True,
            "gramNum": data["gramNum"],
            "solved": solved,
            "signature": sign_data(solved).hex(),
        }
    }
    if new_level_data:
        ret_data["data"]["newLevels"] = new_level_data

    if data["gramNum"] == 81:
        ret_data["cryptKeys"] = get_encryption_keys(
            ["enneagram_finish", "enneagram_extracredit"]
        )

    return JsonResponse(ret_data)
