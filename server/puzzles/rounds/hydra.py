import random
from typing import Any, NotRequired, TypedDict

from puzzles.assets import get_hashed_url
from puzzles.context import ContextHttpRequest
from puzzles.models import Puzzle, PuzzleSubmission

IN_ORDER_MAP = [
    "hydra-meta-ignore",
    # 1
    "the-other-scottish-play",
    "how-to-quadruple-your-money-in-hollywood",
    # 2
    "mausolea",
    "amykos-briefs",
    "isle-of-misfit-puzzles",
    "schrodingers-maze",
    # 3
    "do-i-hear-a-waltz",
    "monsters",
    "realize-it",
    "de-fence",
    "scan",
    "sumantle",
    "until-they-come-home",
    "the-champion",
]

for i in range(112):
    IN_ORDER_MAP.append(f"hydra-head-{i+1}")


class TreeNode(TypedDict):
    slug: str
    children: NotRequired[list["TreeNode | None"]]


# Rely on unlocks (not solves) to handle admin, internal, and broken DEEP
def build_tree(nodeIndex: int, unlocked: set[str]) -> tuple[TreeNode | None, int]:
    if nodeIndex >= len(IN_ORDER_MAP) or IN_ORDER_MAP[nodeIndex] not in unlocked:
        return None, 0

    left_child, left_tot = build_tree(nodeIndex * 2 + 1, unlocked)
    right_child, right_tot = build_tree(nodeIndex * 2 + 2, unlocked)

    ret: TreeNode = {
        "slug": IN_ORDER_MAP[nodeIndex],
    }
    if left_child or right_child:
        ret["children"] = [left_child, right_child]

    return ret, left_tot + right_tot + 1


SNEKS = [get_hashed_url(f"Rounds/everglades/other/snek{i+1}.png") for i in range(6)]


def custom_round_data(
    request: ContextHttpRequest, data: dict[str, Any], puzzle: Puzzle | None
) -> None:
    # Tree data only needs to be populated on round page
    if puzzle:
        return

    team = request.context.team
    if not team:
        # TODO: figure out when this happens and handle properly
        return

    unlocked = request.context.puzzle_unlocks
    unlocked_slugs = {p.slug for p in unlocked}
    left_1, left_tot = build_tree(1, unlocked_slugs)
    right_1, right_tot = build_tree(2, unlocked_slugs)
    layer_1 = [
        left_1,
        right_1,
    ]

    hydra_unlocks = left_tot + right_tot

    if "hydra" in unlocked_slugs:
        data["private"] = {"metaSlug": "hydra", "children": layer_1}
        hydra_unlocks += 1
    else:
        data["private"] = {"children": layer_1}

    meta_solved = any(
        ps.puzzle.slug == "hydra" for ps in request.context.correct_puzzle_submissions
    )

    if meta_solved:
        data["roundart"] = get_hashed_url("Rounds/everglades/other/roundart_solved.png")
    else:
        data["private"]["sneks"] = [  # type: ignore
            {
                "iconSize": 21,
                "position": [random.uniform(10.489, 89.491), random.uniform(0, 76.626)],
                "iconURL": random.choice(SNEKS),
            }
            for i in range(hydra_unlocks)
        ]
