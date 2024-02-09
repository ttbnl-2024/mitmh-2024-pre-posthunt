from typing import Any

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle

ART_GROUPS = [
    (
        get_hashed_url("Rounds/nashville/other/roundart-r1.png"),
        {
            "where-on-earth-is-carmina-suntigre",
            "revolting-developments",
            "split-the-difference",
            "subplutonean-ihtfp-blues",
            "modern-architecture",
            "sorry-not-sorry",
            "field-of-clovers",
        },
    ),
    (get_hashed_url("Rounds/nashville/other/roundart-r1-meta.png"), {"mercury"}),
    (
        get_hashed_url("Rounds/nashville/other/roundart-r2.png"),
        {
            "another-one-bites-the-dust",
            "we-are-the-champions",
            "body-language",
            "the-show-must-go-on",
            "machines",
            "good-company",
            "under-pressure",
        },
    ),
    (get_hashed_url("Rounds/nashville/other/roundart-r2-meta.png"), {"duet"}),
    (
        get_hashed_url("Rounds/nashville/other/roundart-metameta.png"),
        {
            "a-night-at-the-opera",
        },
    ),
]

PUZZLE_ORDER = [
    # Metas first!
    "mercury",
    "duet",
    "a-night-at-the-opera",
    # All feeders sorted by slug, which is accurate enough.
    *sorted(
        [
            "where-on-earth-is-carmina-suntigre",
            "revolting-developments",
            "split-the-difference",
            "subplutonean-ihtfp-blues",
            "modern-architecture",
            "sorry-not-sorry",
            "field-of-clovers",
            "another-one-bites-the-dust",
            "we-are-the-champions",
            "good-company",
            "the-show-must-go-on",
            "machines",
            "body-language",
            "under-pressure",
        ]
    ),
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

    unlocked = request.context.puzzle_unlocks
    unlocked_slugs = {p.slug for p in unlocked}

    # Necessary slugs, extra roundart, etc.
    data["private"] = {"artGroups": []}
    for roundart, slugs in ART_GROUPS:
        # Need to preserve given order
        unlocked_in_group = [s for s in unlocked_slugs if s in slugs]
        if not unlocked_in_group:
            break
        data["private"]["artGroups"].append(
            {"roundart": roundart, "slugs": unlocked_in_group}
        )

    data["private"]["allPuzzles"] = []
    for slug in PUZZLE_ORDER:
        if slug in unlocked_slugs:
            data["private"]["allPuzzles"].append(slug)
