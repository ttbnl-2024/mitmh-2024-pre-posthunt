import random
from collections import Counter
from functools import cache

from django import forms
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle
from puzzles.utils import json
from puzzles.views.auth import validate_puzzle

SLUG = "triangles"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


RULES = [
    "You must use only official sourcebooks published by TSR (3)",
    "You can build a halfling PC (5)",
    (
        "The Player's Handbook you will use either was released the year that a"
        " Grammy-winning artist was born and named an album after, or was the latest"
        " version when the previously mentioned album was released (2)"
    ),
    (
        'You can use a monster you found in the "Monstrous Compendium", an official'
        " release from the publisher, but you can only choose one from Volumes 1, 2, or"
        " 3 (2)"
    ),
    (
        "You can use rules only from the first three core Advanced D&D rulebooks"
        " published by TSR and the first three core Dungeons and Dragons rulebooks"
        " published by WotC (2)"
    ),
    "You cannot build a tiefling PC using rules from the Player's Handbook (4)",
    'You can build a cleric PC that can "Channel Divinity" (1)',
    (
        "You will not face Demons, because there are no creatures named Demons in the"
        " Monster Manual (1)"
    ),
    'You can use the "D20 System" (1)',
    (
        'You can use a rules variant found in "Unearthed Arcana", an official hardcover'
        " release from the publisher (2)"
    ),
    "You can build a dragonborn PC using rules from the Player's Handbook (1)",
    (
        "Your PCs can face Asmodeus, a devil whose statistics can be found in a"
        " hardcover sourcebook (2)"
    ),
    (
        "You can build a PC half-orc who has no penalty to Intelligence using the races"
        " listed in the character creation section of the Player's Handbook (2)"
    ),
    "You can reference a Player's Handbook with Gary Gygax's name on the cover (1)",
    "Your PCs cannot include any first-level bards: they are against the rules (1)",
    (
        'Your PCs can take a level in a "prestige class", of which over 200 have been'
        " published in the System Reference Document, the first such document ever"
        " released for D&D (1)"
    ),
    "You can use a 20-sided die (5)",
    (
        'You can use a revised Player\'s Handbook: it has the word "revised" or ".5" on'
        " the cover (2)"
    ),
    'You can use rules for "Advantage" and "Disadvantage" (1)',
    (
        'Your clerics and paladins can worship a deity from "Deities & Demigods", an'
        " official release from the publisher that mentions Cthulhu (1)"
    ),
]
POOL = Counter({r: i + 1 for i, r in enumerate(RULES)})
EXPLODED = list(POOL.elements())


class TrianglesForm(forms.Form):
    jsonData = forms.CharField(required=True)

    def clean_jsonData(self):
        try:
            data = json.loads(self.cleaned_data.get("jsonData", ""))
        except Exception as e:
            msg = "Malformed JSON"
            raise forms.ValidationError(msg) from e

        if not isinstance(data, dict):
            msg = "Bad data"
            raise forms.ValidationError(msg)

        for k, v in data.items():
            if k not in RULES:
                msg = "Bad data"
                raise forms.ValidationError(msg)
            if not isinstance(v, int):
                msg = "Bad data"
                raise forms.ValidationError(msg)
            if v < 0 or v > POOL[k]:
                msg = "Bad data"
                raise forms.ValidationError(msg)
        return data


@validate_puzzle(require_team=True, allow_after_hunt=True)
@require_POST
def click(request: AuthedContextHttpRequestWithPuzzle):
    form = TrianglesForm(request.POST)
    if not form.is_valid():
        return JsonResponse({"form_errors": form.errors}, status=400)

    theirCounter = Counter(form.cleaned_data["jsonData"])
    remaining = Counter(POOL)
    remaining.subtract(theirCounter)

    if remaining.total() > 0:
        return JsonResponse(
            {"data": {"rule": random.choice(list(remaining.elements()))}}
        )

    return JsonResponse({"data": {"rule": random.choice(EXPLODED)}})
