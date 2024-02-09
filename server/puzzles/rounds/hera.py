from typing import Any

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle

SLUG_TO_TEAM = {
    "the-myriad-gamut-of-hera": "",
    "shalom": "Team 3734",
    "turning-aesops-tables-a-new-translation": "iloveiloveegg",
    "what-is-the-moon-made-of": "Stumped and Furious",
    "name-that-tune": "Plane Tickets are Expensive",
    "crossed-fingers-memo-puzzle": "\ud83d\udc7e Astro Cats \ud83d\udc7e",
    "snark-tank": "Up Late",
    "cards": "The \u03b1-betical Order",
    "streams-of-numbers": "Control Group",
    "dont-feed-the-trolls": "\u26ce UNICODE EQUIVALENCE",
    "pumpkins": "Luigi's Death Stare",
    "rated-g": (
        "\u2708\ufe0f\u2708\ufe0f\u2708\ufe0f Galactic Trendsetters"
        " \u2708\ufe0f\u2708\ufe0f\u2708\ufe0f"
    ),
    "new-rules": "Vantablack",
    "job-center": "Sufficiently Large N",
    "a-triangular-space": "Super Team Awesome",
    "cupids-guide-to-building-long-distance-relationships": "Veni Vidi Wiki",
    "rebus": "\u7a20\u73af\u82b3\u70c3",
    "oil-prices": "I'm not a planet either",
    "take-two": "Palindrome",
    "spore-prints": "The Mathemagicians",
    "mosaic": "HighFive",
    "welcome-to-the-festival": "Corvus Ailurus Mus",
    "greek-verse": "Lardcakes",
    "rhyme-thyme": "Nope",
    "product-placemat": "madness",
    "angry": "dootdootdootdootdoot",
    "proof-it": "Literally Animal Farm",
    "a-block-party": "Sleipnir's Wranglers",
    "return-to-sender": "Arcane Puzzlers \ud83e\udde9",
    "i-write-these-words-in-stele": "ManateeM",
    "bringing-down-the-house": "Door Game Community",
    "meet-me-in-st-louis": "PanGalactic Goose Syndicate",
    "what-comes-next": "Big Game Hunters",
    "reverse": "Raucous Raucous Rhinos",
    "connecting-connections": "NullPointerException",
    "speaker-check": "The Providence Planetary Stations",
    "green-logic": "Setec Astronomy",
    "do-you-measure-up": "The TSBI Hive",
    "its-easy-cutie": "Don't Worry Be Happy",
    "safe-mode": "Mister Ragers' Neighborhood",
    "matchmaking": "Crystal Maiden",
    "back-to-square-one": "the GAFUCONE",
    "show-of-hands": "Relatively Theoretical Constructs",
    "dear-diary": "The Builders' Guild",
    "ancient-mystery": "Om Nom Nom Nom",
    "deposit-at-the-word-bank": "Purple Hays",
    "whats-the-pointillism": "Lowellites",
    "deep-deep-trouble": "teammate",
    "the-best-it": "Space Needle in a Haystack",
    "peak-tv": "Magic & Interstellar Travels",
    "youre-the-only-one": "Les Gaulois",
}
SECTIONS = [
    sorted(x)
    for x in [
        ["the-myriad-gamut-of-hera"],
        [
            "shalom",
            "turning-aesops-tables-a-new-translation",
            "what-is-the-moon-made-of",
            "name-that-tune",
            "crossed-fingers-memo-puzzle",
            "snark-tank",
            "cards",
            "streams-of-numbers",
            "dont-feed-the-trolls",
            "pumpkins",
        ],
        [
            "rated-g",
            "new-rules",
            "job-center",
            "a-triangular-space",
            "cupids-guide-to-building-long-distance-relationships",
            "rebus",
            "oil-prices",
            "take-two",
            "spore-prints",
            "mosaic",
        ],
        [
            "welcome-to-the-festival",
            "greek-verse",
            "rhyme-thyme",
            "product-placemat",
            "angry",
            "proof-it",
            "a-block-party",
            "return-to-sender",
            "i-write-these-words-in-stele",
            "bringing-down-the-house",
        ],
        [
            "meet-me-in-st-louis",
            "what-comes-next",
            "reverse",
            "connecting-connections",
            "speaker-check",
            "green-logic",
            "do-you-measure-up",
            "its-easy-cutie",
            "safe-mode",
            "matchmaking",
        ],
        [
            "back-to-square-one",
            "show-of-hands",
            "dear-diary",
            "ancient-mystery",
            "deposit-at-the-word-bank",
            "whats-the-pointillism",
            "deep-deep-trouble",
            "the-best-it",
            "peak-tv",
            "youre-the-only-one",
        ],
    ]
]


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    if puzzle:
        return
    team = request.context.team
    if not team:
        # TODO: figure out when this happens and handle properly,
        # but no need until after hunt
        return

    unlocked_slugs = {
        p.slug for p in request.context.puzzle_unlocks if p.slug in SLUG_TO_TEAM
    }
    solved_slugs = {
        p.puzzle.slug
        for p in request.context.correct_puzzle_submissions
        if p.puzzle.slug in SLUG_TO_TEAM
    }

    data["private"] = {
        "artGroups": [],
        "teamInfo": {},
    }
    for i, group in enumerate(SECTIONS):
        group_slugs = []
        for slug in group:
            if slug not in unlocked_slugs:
                continue
            group_slugs.append(slug)
            if slug in solved_slugs:
                data["private"]["teamInfo"][slug] = SLUG_TO_TEAM[slug]
        data["private"]["artGroups"].append(
            {
                "roundart": get_hashed_url(
                    f"Rounds/the-hole-in-the-ceiling-of-hades/other/roundart-{i}.png"
                ),
                "slugs": group_slugs,
            }
        )
