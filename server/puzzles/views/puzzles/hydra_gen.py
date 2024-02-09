from typing import Any, TypedDict

from puzzles.assets import get_hashed_url
from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Team
from puzzles.utils import get_encryption_keys
from tph.utils import json, load_file


class HydraInstanceData(TypedDict):
    baseId: int
    data: Any


with (
    load_file("data", base_module="puzzles")
    .joinpath("hydra-gen", "hydra_data.json")
    .open() as f
):
    HYDRA_DATA: dict[str, HydraInstanceData] = json.load(f)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    slug = request.context.puzzle.slug
    hydra_head_num = slug.removeprefix("hydra-head-")
    hydra_data = HYDRA_DATA[hydra_head_num]

    data = {"data": hydra_data["data"], "number": hydra_head_num}
    match hydra_data["baseId"]:
        case 22:
            data["type"] = "infinity-book"
            data["cryptKeys"] = get_encryption_keys(["infinity-book"])
        case 406:
            data["type"] = "5050-matchups"
            data["cryptKeys"] = get_encryption_keys(["5050"])
        case 713:
            data["type"] = "reflections"
            data["data"] = get_hashed_url(f"Puzzles/reflections/{data['data']}")
            data["cryptKeys"] = get_encryption_keys(["reflections"])

    return data
