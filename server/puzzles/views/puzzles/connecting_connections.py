from functools import cache

from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, Team
from puzzles.models.interactive_cache import PuzzleStateCacheManager
from puzzles.utils import json
from puzzles.views.auth import validate_puzzle

SLUG = "connecting-connections"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


CATEGORIES = [
    [
        ["SHAKESPEARE CHARACTERS", [2, 3, 8, 12]],
        ["WORDS CONTAINING EXCLAMATIONS", [1, 4, 10, 15]],
        ["RHYMES WITH FELLOW", [0, 9, 13, 14]],
        ["BOARD GAMES ON 8x8 GRIDS", [5, 6, 7, 11]],
    ],
    [
        ["SYNONYMS FOR AVERAGE", [2, 4, 8, 13]],
        ["SIZES", [3, 5, 9, 14]],
        ["TOWN OF SALEM ROLES", [0, 10, 11, 12]],
        ["SPIRITUAL PROFESSIONS", [1, 6, 7, 15]],
    ],
    [
        ["MARSUPIALS", [4, 5, 8, 9]],
        ["_____ COURT", [0, 1, 6, 13]],
        ["ENEMIES OF SPIDER-MAN", [2, 3, 10, 11]],
        ["CHESS DEFENSES", [7, 12, 14, 15]],
    ],
    [
        ["ONOMATOPOEIA", [3, 5, 6, 11]],
        ["CANDY BARS", [2, 7, 9, 14]],
        ["_____ FITNESS", [0, 4, 8, 15]],
        ["WORDS CONTAINING RUNNING TERMS", [1, 10, 12, 13]],
    ],
    [
        ["ASTRONOMY OBJECTS", [6, 9, 10, 13]],
        ["LORDS", [1, 2, 8, 15]],
        ["SHAPES", [0, 3, 4, 12]],
        ['WORDS WHEN "K" IS ADDED TO THE END', [5, 7, 11, 14]],
    ],
    [
        ["ENDS WITH ENDEARING FAMILY TERM", [3, 4, 6, 8]],
        ["OLD TESTAMENT BOOKS", [9, 10, 11, 12]],
        ["SYNONYMS FOR BEGINNING", [0, 1, 2, 7]],
        ["HYUNDAI CARS", [5, 13, 14, 15]],
    ],
    [
        ["SYNONYMS FOR PUNCH", [3, 4, 10, 13]],
        ["COFFEE ADD-INS", [5, 8, 11, 12]],
        ["SHADES OF WHITE", [2, 6, 7, 9]],
        ["CALIFORNIA FOUNDED FOOD CHAINS", [0, 1, 14, 15]],
    ],
    [
        ["ROYAL TITLES", [3, 5, 6, 8]],
        ["CARD NUMBERS", [0, 9, 10, 11]],
        ["TRIPLE VOWELS", [7, 12, 13, 14]],
        ["DRAG ____", [1, 2, 4, 15]],
    ],
    [
        ['ONE LETTER OFF "RACE"', [4, 5, 10, 11]],
        ["___OFF", [7, 9, 12, 15]],
        ["WORDS CONTAINING ONLY NOTES", [0, 1, 2, 13]],
        ["ENDS WITH AN LGBT+ TERM", [3, 6, 8, 14]],
    ],
    [
        ["WORDS CONTAINING GLUTEI MAXIMI", [0, 8, 12, 14]],
        ["INSTRUMENTS", [2, 7, 10, 15]],
        ["ANIMAL NOISES", [1, 4, 5, 9]],
        ["VINES", [3, 6, 11, 13]],
    ],
    [
        ["CYLINDRICAL OBJECTS", [0, 5, 12, 13]],
        ["BOUNDARY", [1, 8, 11, 14]],
        ["NATIONALITIES", [2, 3, 7, 9]],
        ["_____ POSITION", [4, 6, 10, 15]],
    ],
    [
        ["PARTS OF A STORY", [3, 5, 7, 11]],
        ["HOCKEY VERBS", [1, 8, 9, 14]],
        ["BLUES TRAVELER SONGS", [2, 6, 10, 13]],
        ["FIRST WORDS OF TRIPLETS", [0, 4, 12, 15]],
    ],
    [
        ["CS:GO MAPS", [6, 7, 12, 13]],
        ["VEHICLES", [3, 4, 8, 15]],
        ["SYNONYMS FOR FOCUS", [0, 1, 11, 14]],
        ["5-LETTER PARTIAL ANAGRAMS OF PAINTER", [2, 5, 9, 10]],
    ],
    [
        ["DISNEY TITULAR CHARACTERS", [0, 1, 3, 4]],
        ["PSEUDONYMS", [2, 5, 7, 14]],
        ["WORDS WHEN SPELLED BACKWARDS", [6, 9, 12, 15]],
        ["CAPCOM ARCADE GAMES", [8, 10, 11, 13]],
    ],
    [
        ["VAMPIRE MOVIES", [5, 9, 10, 11]],
        ["TIMES OF DAY", [2, 12, 13, 15]],
        ["FIRST WORDS OF LEGEND OF ZELDA GAMES", [1, 3, 4, 6]],
        ["____ ZONE", [0, 7, 8, 14]],
    ],
    [
        ["HETERONYMS", [5, 8, 9, 15]],
        ["WOOD ____", [1, 3, 13, 14]],
        ["SYNONYMS FOR BREEZE", [0, 6, 7, 11]],
        ['CONTAINS "IN"', [2, 4, 10, 12]],
    ],
]


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def make_guess(request: AuthedContextHttpRequestWithPuzzle):
    index_str = request.POST.get("index", "-1")
    square1_str = request.POST.get("square1", "-1")
    square2_str = request.POST.get("square2", "-1")
    square3_str = request.POST.get("square3", "-1")
    square4_str = request.POST.get("square4", "-1")
    index = int(index_str)
    square1 = int(square1_str)
    square2 = int(square2_str)
    square3 = int(square3_str)
    square4 = int(square4_str)
    if index < 0 or index >= len(CATEGORIES):
        return JsonResponse({"error": "Invalid category index"})
    if square1 < 0 or square1 >= 16:
        return JsonResponse({"error": "Invalid square index"})
    if square2 < 0 or square2 >= 16:
        return JsonResponse({"error": "Invalid square index"})
    if square3 < 0 or square3 >= 16:
        return JsonResponse({"error": "Invalid square index"})
    if square4 < 0 or square4 >= 16:
        return JsonResponse({"error": "Invalid square index"})

    category = CATEGORIES[index]
    answer = ["", ""]
    for i in range(len(category)):
        if (
            square1 == category[i][1][0]
            and square2 == category[i][1][1]
            and square3 == category[i][1][2]
            and square4 == category[i][1][3]
        ):
            answer[0] = category[i][0]
            answer[1] = str(i)
            break

    resp = {"category": answer}

    return JsonResponse({"data": resp})
