from functools import cache
from typing import TypedDict, cast

from puzzles.consumers import ClientConsumer
from puzzles.consumers.base import BasePuzzleHandler
from puzzles.models import Puzzle
from puzzles.models.interactive_cache import (
    PuzzleStateCacheManager,
)
from spoilr.core.models import User

SLUG = "gaia"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


WIDTH: float = 1000
HEIGHT: float = 666
RA_LEFT: float = 1142500000
RA_RIGHT: float = RA_LEFT - 120000000
DEC_TOP: float = 120000000
DEC_BOT: float = DEC_TOP - 80000000
THRESHOLD: float = 4000000

SUCCESS_MESSAGE: str = (
    'Gaia claps excitedly. "You did it!", as she looks at the result from left to right'
    " along the top, then down. While she seems happy, this is still just Greek to you."
)

# (ra, dec) of the goal positions
star_goals: dict[str, tuple[float, float]] = {
    "jigsaw-sudoku": (1085046431, 84954054.9),
    "icarus-away": (1062012148, 82691116),
    "enneagram": (1067930588, 84442544),
    "oil-paintings": (1044231436, 83766608),
    "a-terrible-morning": (1069383729, 57327863),
    "transylvanian-math": (1090064253, 91090000),
}


class Star(TypedDict):
    name: str
    x: float
    y: float


class InputData(TypedDict):
    stars: list[Star]


class OutputData(TypedDict):
    result: str
    paths: list[list[str]]
    positions: dict[str, dict[str, float]]


class GoalCalculator:
    @staticmethod
    def calculate(stars: list[Star]):
        seen_stars = 0
        for star in stars:
            if star["name"] not in star_goals:
                return None
            goal = star_goals[star["name"]]
            if (
                abs(GoalCalculator.x_to_ra(star["x"]) - goal[0]) > THRESHOLD
                or abs(GoalCalculator.y_to_dec(star["y"]) - goal[1]) > THRESHOLD
            ):
                return None
            seen_stars = seen_stars + 1
        if seen_stars < 6:
            return None

        # success!
        return OutputData(
            result=SUCCESS_MESSAGE,
            paths=[
                [
                    "transylvanian-math",
                    "enneagram",
                    "icarus-away",
                    "gaia",
                    "oil-paintings",
                ],
                ["icarus-away", "a-terrible-morning"],
            ],
            positions={
                slug: {"ra": p[0], "dec": p[1]} for slug, p in star_goals.items()
            },
        )

    @staticmethod
    def y_to_dec(y: float):
        return DEC_TOP - (y * (DEC_TOP - DEC_BOT) / HEIGHT)

    @staticmethod
    def x_to_ra(x: float):
        return RA_LEFT - (x * (RA_LEFT - RA_RIGHT) / WIDTH)


GOAL_CALCULATOR = GoalCalculator()


class GaiaTeamState(TypedDict):
    done: bool


def team_state_cache_manager(team_id: int, **kwargs):
    return PuzzleStateCacheManager(
        team_id=team_id,
        puzzle_id=get_puzzle().id,
        initial_data={
            "done": False,
        },
        **kwargs,
    )


def get_team_state(team_id: int):
    with team_state_cache_manager(team_id, lock=False) as cm:
        return cast(GaiaTeamState, cm.get_or_create())


class GaiaHandler(BasePuzzleHandler):
    @staticmethod
    def process_data(user: User, uuid: str, data: InputData, **kwargs):
        """Callback when JSON data is received from the client."""
        result = GOAL_CALCULATOR.calculate(data["stars"])
        if result:
            with team_state_cache_manager(user.team_id) as cm:
                cm.set({"done": True})
            group = ClientConsumer.get_uuid_group(id=user.team_id, uuid=uuid)
            ClientConsumer.send_event(group, SLUG, result)

    # We do nothing in these two methods, since we're communicating with
    # only one client, but they have to be defined because abstract
    @staticmethod
    def connect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user connects."""

    @staticmethod
    def disconnect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user disconnects."""
        return
