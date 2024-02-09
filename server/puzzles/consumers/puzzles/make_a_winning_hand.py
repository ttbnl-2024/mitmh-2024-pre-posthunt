import copy
import itertools
import logging
from dataclasses import dataclass, field
from typing import Generator, Iterable, Iterator, NamedTuple, TypedDict

from unidecode import unidecode

from puzzles.consumers import ClientConsumer
from puzzles.consumers.base import BasePuzzleHandler
from spoilr.core.models import User

SLUG = "make-a-winning-hand"

logger = logging.getLogger(__name__)

# do not warn for "ambiguous marks"
# ruff: noqa: RUF001

##############
# Game Logic #
##############

NUM_CARDS = 27
COLORS = ("red", "green", "blue")
ANCHORS = [0, 2, 6, 18]


class Card(NamedTuple):
    name: str = ""
    num: int = 0
    author_num: int = 0
    trits: tuple[int, int, int] = (0, 0, 0)

    def __str__(self):
        return self.name


def invert(d: dict[int, int]) -> dict[int, int]:
    return {v: k for k, v in d.items()}


# region Precompute sets

base3_rpad0 = [
    "000",
    "001",
    "002",
    "010",
    "011",
    "012",
    "020",
    "021",
    "022",
    "100",
    "101",
    "102",
    "110",
    "111",
    "112",
    "120",
    "121",
    "122",
    "200",
    "201",
    "202",
    "210",
    "211",
    "212",
    "220",
    "221",
    "222",
]

sets = {
    frozenset(
        {
            i,
            j,
            int(
                "".join(
                    [
                        str((3 - sum(x)) % 3)
                        for x in zip(
                            map(int, base3_rpad0[i]),
                            map(int, base3_rpad0[j]),
                        )
                    ]
                ),
                3,
            ),
        }
    )
    for i in range(NUM_CARDS)
    for j in range(NUM_CARDS)
    if i != j
}
set_completions: dict[int, dict[int, int]] = {}
for i in range(NUM_CARDS):
    set_completions[i] = {}
    for j in range(NUM_CARDS):
        if i == j:
            continue
        for s in sets:
            if i in s and j in s:
                set_completions[i][j] = next(iter(s - {i, j}))

# endregion

# region Cards

refstring = """Raphael (0,0,0)
Yohanan ben Zakkai (0,0,1)
Shmuley Boteach (0,0,2)
Jesus Christ (0,1,0)
St. Telesphorus (0,1,1)
Sviatoslav Shevchuk (0,1,2)
Uzair (0,2,0)
Al-Mansur (0,2,1)
Ahmed el-Tayeb (0,2,2)
Moriah (1,0,0)
Worms Synagogue (1,0,1)
Congregation Shaare Zion (1,0,2)
Mount of Temptation (1,1,0)
Church of the Nativity (1,1,1)
Cathedral of the Assumption (1,1,2)
Mecca (1,2,0)
Ibrahimi Mosque (1,2,1)
Süleymaniye Mosque (1,2,2)
Passover (2,0,0)
Karbanot (2,0,1)
Still Life with Guelder Roses (2,0,2)
St. Peter's Bones (2,1,0)
Saint Rosalia's Bones (2,1,1)
The Tongue of St. Anthony of Padua (2,1,2)
Hırka-i Şerif (2,2,0)
The Ardabil Carpet (2,2,1)
The Crocodiles of Manghopir (2,2,2)"""

# This list is never changed
CARDS: list[Card] = [Card()] * NUM_CARDS
CARDS_BY_NORM_NAME: dict[str, Card] = {}

for j in refstring.split("\n"):
    end = list(map(int, j.split("(")[1].split(")")[0].split(",")))
    idx = 9 * end[0] + 3 * end[1] + end[2]
    name = j.split(" (")[0]
    CARDS[idx] = Card(
        name=name,
        num=idx,
        author_num=idx + 1,
        trits=(end[0], end[1], end[2]),
    )
    CARDS_BY_NORM_NAME[unidecode(name)] = CARDS[idx]

# endregion

# region Instructions


def instructions():
    return f"""
You see a haphazard bundle of cards sprawled out on the table in front of you. A wizened old man sits on the other side of the table. “Would you like to play a game?” he asks."

“We’ll take turns picking cards from the pile. For example, you’ll take {CARDS[1]}, and I’ll take {CARDS[0]}. Now you can take {CARDS[3]} and and I’ll take {CARDS[2]}. And you’ll take {CARDS[5]} and I’ll grab {CARDS[4]}. Got it? Then take {CARDS[18]} and I’ll take {CARDS[15]} to start the game!”

"""


# endregion

# region Representation of and solving the game


class IntGameState(NamedTuple):
    # Sets would be more accurate, but cause divergent behavior
    # from the reference implementation
    p0: list[int]
    """Human player"""

    p1: list[int]
    """CPU player"""


@dataclass
class ExtGameState:
    game_num: int = 0
    text: str = ""
    available_cards: list[str] = field(default_factory=list)
    user_won: bool | None = None
    error: int | None = None
    first_time: bool = False


@dataclass
class GameState:
    int_game_state: IntGameState
    ext_game_state: ExtGameState


class SolveData(NamedTuple):
    turn: int
    count: int
    end_states: list[IntGameState]


def solve(
    game_state: IntGameState,
    curr_risks: set[int],
    opp_risks: set[int],
    used_cards: set[int],
    turn: int,
    depth: int,
) -> SolveData:
    """Run minimax for anti-set -- returns possible ending hands."""
    curr_hand = game_state[turn]
    mincount = NUM_CARDS * 2
    maxcount = -1
    paths: list[IntGameState] = []
    pathsmax: list[IntGameState] = []
    done = True
    for i in range(NUM_CARDS):
        # Can't play this card
        if i in used_cards or i in curr_risks:
            continue
        done = False

        # Account for new liabilities given the candidate card
        curr_risks_new = set(curr_risks)
        for j in curr_hand:
            risk = set_completions[i][j]
            if risk != -1 and risk not in used_cards:
                curr_risks_new.add(risk)

        new_state = IntGameState(
            p0=game_state.p0 + ([i] if turn == 0 else []),
            p1=game_state.p1 + ([i] if turn == 1 else []),
        )
        data = solve(
            new_state,
            opp_risks - {i},
            curr_risks_new,
            used_cards | {i},
            (turn + 1) % 2,
            depth + 1,
        )

        # do not lint for nested else/if
        # ruff: noqa: PLR5501
        if data.turn == turn:
            if data.count < mincount:
                _, mincount, paths = data
            elif data.count == mincount:
                for s in data.end_states:
                    if s not in paths:
                        paths.append(s)
        else:
            if data.count > maxcount:
                _, maxcount, pathsmax = data
            elif data.count == maxcount:
                for s in data.end_states:
                    if s not in pathsmax:
                        pathsmax.append(s)

    # No cards could be taken, game over!
    if done:
        return SolveData((turn + 1) % 2, depth, [game_state])

    if mincount == NUM_CARDS * 2:
        return SolveData((turn + 1) % 2, maxcount, pathsmax)
    else:
        return SolveData(turn, mincount, paths)


def pick_card(
    solution: SolveData,
    game_state: IntGameState,
):
    target_hand = solution.end_states[0][1]

    # Find a card we have yet to take to reach an arbitrary target
    for card in target_hand:
        if card not in game_state[1]:
            return card

    # Can't pick a card
    return -1


# endregion

# region Game loop


def card_strs(ids: Iterable[int], sort=True) -> list[str]:
    res = (str(CARDS[i]) for i in ids)
    if sort:
        return sorted(res)
    return list(res)


def risks_for_hand(hand: Iterable[int]) -> dict[int, tuple[int, int]]:
    return {set_completions[i][j]: (i, j) for i, j in itertools.combinations(hand, 2)}


# endregion

##############
# Game Infra #
##############


class InputData(TypedDict):
    input: str


class Game:
    def __init__(self, group: str):
        self.group = group
        self.is_over = False
        self.queued_inputs = []
        self.connections = 1
        self.start_game(1, first_time=True)

    def send(self, ext_game_state: ExtGameState):
        ClientConsumer.send_event(
            self.group,
            SLUG,
            {
                "text": ext_game_state.text,
                "available_cards": ext_game_state.available_cards,
                "error": ext_game_state.error,
                "first_time": ext_game_state.first_time,
            },
        )

    def receive(self, input: str):
        logger.info(f"received {input}")
        self.queued_inputs = [
            unidecode(s.strip()) for s in input.replace(",", "\n").split("\n")
        ]
        self.process_next_game_state()

    def process_next_game_state(self, input=None):
        if self.is_over:
            return

        try:
            if len(self.queued_inputs) == 0:
                game_state = next(self.game_generator)
                self.send(game_state.ext_game_state)
            else:
                while len(self.queued_inputs) > 0:
                    game_state = self.game_generator.send(self.queued_inputs.pop(0))
                    self.send(game_state.ext_game_state)

        except StopIteration as e:
            # the game has stopped for some reason.
            game_state = e.value
            logger.info(game_state.ext_game_state)
            ext_game_state = game_state.ext_game_state

            if ext_game_state.error is not None:
                # error state. send error and halt
                self.send(ext_game_state)
                self.is_over = True
                return

            # flush the state before starting next game
            # since start_game will clear out all the fields
            self.send(ext_game_state)
            self.queued_inputs = []
            if ext_game_state.user_won is False:
                # user lost; restart at last stage
                self.start_game(ext_game_state.game_num)

            elif ext_game_state.game_num < 3:
                # user won game; next game
                self.start_game(ext_game_state.game_num + 1)
            else:
                # user won every game!
                self.is_over = True

    # the generator for playing the game
    def play_game(
        self, game_start: GameState, lost_cards: set[int]
    ) -> Generator[GameState, str, GameState]:
        game_state = copy.deepcopy(game_start.int_game_state)
        ext_game_state = game_start.ext_game_state
        game_num = ext_game_state.game_num

        def print_gs(text=""):
            ext_game_state.text = ext_game_state.text + text + "\n"

        used_cards = lost_cards | set(game_state.p0) | set(game_state.p1)
        avail_cards = set(range(27)) - used_cards
        p0_risks = risks_for_hand(game_state.p0)

        turn = 0

        while True:
            print_gs("The cards left are:")
            print_gs("\n".join(card_strs(avail_cards)) + "\n")
            print_gs()
            ext_game_state.available_cards = card_strs(avail_cards)

            print_gs("The old man's cards are:")
            print_gs("\n".join(card_strs(game_state.p1)))
            print_gs()

            print_gs("Your cards are:")
            print_gs("\n".join(card_strs(game_state.p0)))
            print_gs()

            print_gs("Okay, what card do you choose? ")

            p0_card = yield GameState(
                int_game_state=game_state, ext_game_state=ext_game_state
            )
            ext_game_state = ExtGameState(game_num, "", [])

            print_gs(f"\nYOU> {p0_card}\n")
            if p0_card not in CARDS_BY_NORM_NAME:
                print_gs(
                    "Sorry, you appear to have played incomprehensibly. Please try"
                    " again."
                )
                print_gs()
                continue

            p0_card_num = CARDS_BY_NORM_NAME[p0_card].num
            if p0_card_num in used_cards:
                print_gs(
                    "Sorry, you appear to have taken a card already taken. Please try"
                    " again."
                )
                print_gs()
                continue

            # Human player loss
            if p0_card_num in p0_risks:
                loss_set = card_strs([p0_card_num, *p0_risks[p0_card_num]])
                print_gs(
                    f"Unfortunately, you've lost, as {loss_set[0]}, {loss_set[1]}, and"
                    f" {loss_set[2]} don't go together at all."
                )
                print_gs()
                print_gs("Shall we start from the beginning of the game?")
                print_gs()
                ext_game_state.user_won = False

                # stop the generator
                return GameState(
                    int_game_state=game_state, ext_game_state=ext_game_state
                )

            game_state.p0.append(p0_card_num)
            used_cards.add(p0_card_num)
            avail_cards.discard(p0_card_num)
            p0_risks = risks_for_hand(game_state.p0)

            # p0=7 -> p1=13: Hardcode move required for end state narrowing in game 1
            # p0!=7 -> p1=7: This is the optimal move for game 0 if the user plays sub-optimally
            if game_num == 1 and turn == 0:
                p1_card_num = 13 if p0_card_num == 7 else 7
            else:
                solution = solve(
                    game_state,
                    set(risks_for_hand(game_state.p1).keys()),
                    set(risks_for_hand(game_state.p0).keys()),
                    used_cards,
                    turn=1,
                    depth=0,
                )

                # if game_num == 3:
                #     w = False
                #     for e in solution.end_states:
                #         if set(e.p0) == {0, 2, 9, 11, 15, 17, 25, 26}:
                #             w = True
                #     if not w and solution.end_states:
                #         print_gs("NOOOO!")
                p1_card_num = pick_card(solution, game_state)

            if p1_card_num == -1:
                print_gs("Well darn, I think I've lost!")
                print_gs()
                ext_game_state.user_won = True
                break

            game_state.p1.append(p1_card_num)
            used_cards.add(p1_card_num)
            avail_cards.discard(p1_card_num)
            print_gs(
                f"An interesting choice. I think I'll go for {CARDS[p1_card_num]!s}"
            )
            print_gs()
            turn += 1

        # at this point the game is won. check results
        all_game_state = GameState(
            int_game_state=game_state, ext_game_state=ext_game_state
        )
        self.check_game_win(all_game_state)
        return all_game_state

    def start_game(self, game_num, first_time=False):
        if game_num == 1:
            GAME_START = GameState(
                int_game_state=IntGameState(
                    p0=[1, 3, 5, 18],
                    p1=[0, 2, 4, 15],
                ),
                ext_game_state=ExtGameState(
                    game_num=1,
                    text=instructions() if first_time else "",
                    first_time=first_time,
                ),
            )
            LOST_CARDS = set()
        elif game_num == 2:
            GAME_START = GameState(
                int_game_state=IntGameState(
                    p0=[self.g1_map[x] for x in (9, 10, 15, 16)],
                    p1=[self.g1_map[x] for x in (2, 11, 13, 14)],
                ),
                ext_game_state=ExtGameState(game_num=2),
            )
            LOST_CARDS = self.g1_gone
        elif game_num == 3:
            if self.g2_type == 0:
                GAME_START = GameState(
                    int_game_state=IntGameState(
                        p0=[self.g1_map[x] for x in (1, 20, 22)],
                        p1=[self.g1_map[x] for x in (7, 9, 14)],
                    ),
                    ext_game_state=ExtGameState(game_num=3),
                )
            else:
                GAME_START = GameState(
                    int_game_state=IntGameState(
                        p0=[self.g1_map[x] for x in (0, 2, 26)],
                        p1=[self.g1_map[x] for x in (1, 8, 21)],
                    ),
                    ext_game_state=ExtGameState(game_num=3),
                )
            LOST_CARDS = self.g1_gone | self.g2_gone
        else:
            return

        self.game_generator = self.play_game(GAME_START, LOST_CARDS)
        self.process_next_game_state()

    def check_game_win(self, game_state: GameState):
        def print_gs(text=""):
            game_state.ext_game_state.text = (
                game_state.ext_game_state.text + text + "\n"
            )

        if game_state.ext_game_state.game_num == 1:
            g1_p0_hand = set(game_state.int_game_state.p0)
            G1_P0_TARGET = {1, 3, 5, 7, 12, 18, 19, 24, 25}
            IDENTITY = {i: i for i in range(NUM_CARDS)}
            G1_ROT = {
                0: 0,
                1: 3,
                2: 6,
                3: 1,
                4: 4,
                5: 7,
                6: 2,
                7: 5,
                8: 8,
                9: 9,
                10: 12,
                11: 15,
                12: 10,
                13: 13,
                14: 16,
                15: 11,
                16: 14,
                17: 17,
                18: 18,
                19: 21,
                20: 24,
                21: 19,
                22: 22,
                23: 25,
                24: 20,
                25: 23,
                26: 26,
            }
            G1_EXTRACT = [7, 18, 1, 25]
            if g1_p0_hand == G1_P0_TARGET:
                self.g1_map = IDENTITY
            elif g1_p0_hand == {G1_ROT[x] for x in G1_P0_TARGET}:
                self.g1_map = G1_ROT
            elif g1_p0_hand == len(G1_P0_TARGET):
                print_gs("SOMETHING IS WRONG")
                print_gs("Please restart the game and report the bug to the HQ.")
                game_state.ext_game_state.error = 2
                return
            else:
                print_gs(
                    "Oh, I'm sorry! I appear to have made a mistake - I should not have"
                    " lost so quickly. Please, let's play again. [Please restart the"
                    " game and report the issue to HQ]"
                )
                game_state.ext_game_state.error = 3
                return
            self.g1_inv = invert(self.g1_map)
            g1_extract = [self.g1_map[x] for x in G1_EXTRACT]
            self.g1_gone = g1_p0_hand - set(g1_extract)
            print_gs(
                "Well done! Care to play again? This time, let's take away"
                f" {', '.join(card_strs(self.g1_gone))}. [This leaves"
                f" {', '.join(card_strs(g1_extract, sort=False))} in front of you.]"
            )
            print_gs()

            g1_anchors = [self.g1_inv[x] for x in ANCHORS]
            print_gs(
                'As the old man fiddles with the cards, you can see "0,0,0" scrawled'
                f" on the back of {CARDS[g1_anchors[0]]!s}, and the backings of"
                f' {", ".join(card_strs(g1_anchors[1:][::-1], sort=False))} have'
                f' peeled, respectively showing vibrant {", ".join(COLORS)} designs.'
            )
            print_gs()
            print_gs(
                "You play along, taking cards until you get to the following position."
            )
            print_gs()
            print_gs()

        elif game_state.ext_game_state.game_num == 2:
            G2_P0_T1 = {self.g1_map[x] for x in [1, 4, 6, 8, 9, 10, 15, 16, 18]}
            G2_P0_T2 = {self.g1_map[x] for x in [6, 9, 10, 15, 16, 18, 20, 22, 25]}
            G2_T1_ROT = {
                0: 20,
                1: 23,
                2: 26,
                3: 11,
                4: 14,
                5: 17,
                6: 2,
                7: 5,
                8: 8,
                9: 19,
                10: 22,
                11: 25,
                12: 10,
                13: 13,
                14: 16,
                15: 1,
                16: 4,
                17: 7,
                18: 18,
                19: 21,
                20: 24,
                21: 9,
                22: 12,
                23: 15,
                24: 0,
                25: 3,
                26: 6,
            }
            G2_T2_ROT = {
                0: 0,
                1: 3,
                2: 6,
                3: 9,
                4: 12,
                5: 15,
                6: 18,
                7: 21,
                8: 24,
                9: 1,
                10: 4,
                11: 7,
                12: 10,
                13: 13,
                14: 16,
                15: 19,
                16: 22,
                17: 25,
                18: 2,
                19: 5,
                20: 8,
                21: 11,
                22: 14,
                23: 17,
                24: 20,
                25: 23,
                26: 26,
            }
            g2_p0_hand = set(game_state.int_game_state.p0)
            # print(g2_p0_hand)
            if g2_p0_hand == G2_P0_T1:
                g2_inv = invert(G2_T1_ROT)
                self.g2_type = 0
                g2_extract = [1, 15, 9]
            elif g2_p0_hand == G2_P0_T2:
                g2_inv = invert(G2_T2_ROT)
                self.g2_type = 1
                g2_extract = [25, 9, 15]
            elif len(g2_p0_hand) == len(G2_P0_T1) or len(g2_p0_hand) == len(G2_P0_T2):
                print_gs("SOMETHING IS WRONG")
                print_gs("Please restart the game and report the bug to the HQ.")
                game_state.ext_game_state.error = 4
                return
            else:
                print_gs(
                    "Oh, I'm sorry! I appear to have made a mistake - I should not have"
                    " lost so quickly. Please, let's play again. [Please restart the"
                    " game and report the issue to HQ.]"
                )
                game_state.ext_game_state.error = 5
                return

            g2_extract = [self.g1_map[x] for x in g2_extract]
            self.g2_gone = g2_p0_hand - set(g2_extract)
            print_gs(
                "Well done! Care to play again? This time, let's take away"
                f" {', '.join(card_strs(self.g2_gone))}. [This leaves"
                f" {', '.join(card_strs(g2_extract, sort=False))} in front of you.]"
            )
            print_gs()

            g2_anchors = [self.g1_inv[g2_inv[x]] for x in ANCHORS]
            print_gs(
                'As the old man fiddles with the cards, you can see "0,0,0" scrawled'
                f" on the back of {CARDS[g2_anchors[0]]!s}, and the backings of"
                f' {", ".join(card_strs(g2_anchors[1:][::-1], sort=False))} have'
                f' peeled, respectively showing vibrant {", ".join(COLORS)} designs.'
            )
            print_gs()
            print_gs(
                "You play along, taking cards until you get to the following position."
            )
            print_gs()
            print_gs()

        elif game_state.ext_game_state.game_num == 3:
            # G3_P0_T1 = {self.g1_map[x] for x in [1, 11, 14, 15, 20, 22, 25, 26]}
            # G3_P0_T2 = {self.g1_map[x] for x in [0, 2, 9, 11, 15, 17, 25, 26]}
            G3_T1_ROT = {
                0: 20,
                1: 23,
                2: 26,
                3: 11,
                4: 14,
                5: 17,
                6: 2,
                7: 5,
                8: 8,
                9: 19,
                10: 22,
                11: 25,
                12: 10,
                13: 13,
                14: 16,
                15: 1,
                16: 4,
                17: 7,
                18: 18,
                19: 21,
                20: 24,
                21: 9,
                22: 12,
                23: 15,
                24: 0,
                25: 3,
                26: 6,
            }
            G3_T2_ROT = {
                0: 18,
                1: 19,
                2: 20,
                3: 9,
                4: 10,
                5: 11,
                6: 0,
                7: 1,
                8: 2,
                9: 21,
                10: 22,
                11: 23,
                12: 12,
                13: 13,
                14: 14,
                15: 3,
                16: 4,
                17: 5,
                18: 24,
                19: 25,
                20: 26,
                21: 15,
                22: 16,
                23: 17,
                24: 6,
                25: 7,
                26: 8,
            }
            if self.g2_type == 0:
                g3_inv = invert(G3_T1_ROT)
                g3_extract = [0, 7, 9]
            else:
                g3_inv = invert(G3_T2_ROT)
                g3_extract = [2, 17, 1]

            g3_extract = [self.g1_map[x] for x in g3_extract]
            print_gs(
                "Well done! At this point, I think I'll take my leave. [He packs up"
                " his cards. The last cards on the table are "
                f" {', '.join(card_strs(g3_extract, sort=False))}.]"
            )
            print_gs()

            g3_anchors = [self.g1_inv[g3_inv[x]] for x in ANCHORS]
            print_gs(
                'As the old man fiddles with the cards, you can see "0,0,0" scrawled'
                f" on the back of {CARDS[g3_anchors[0]]!s}, and the backings of"
                f' {", ".join(card_strs(g3_anchors[1:][::-1], sort=False))} have'
                f' peeled, respectively showing vibrant {", ".join(COLORS)} designs.'
            )
            print_gs()


#####################
# WebSocket handler #
#####################

GAME_INSTANCES = dict[str, Game]()


class WinningHandHandler(BasePuzzleHandler):
    @staticmethod
    def process_data(user: User, uuid: str, data: InputData, **kwargs) -> None:
        """Callback when JSON data is received from the client."""

        group = ClientConsumer.get_uuid_group(id=user.team_id, uuid=uuid)
        if group is None:
            return
        if data["input"] == "RESET":
            GAME_INSTANCES[group] = Game(group)
            logger.debug(f"{group} has reset the state")
        else:
            GAME_INSTANCES[group].receive(data["input"])
            logger.debug(f"sending update to {group}")

    @staticmethod
    def connect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user connects."""

        group = ClientConsumer.get_uuid_group(id=user.team_id, uuid=uuid)
        if group is None:
            return
        logger.debug(f"{group} connected")
        if group not in GAME_INSTANCES:
            logger.debug("creating new game instance")
            GAME_INSTANCES[group] = Game(group)
        else:
            GAME_INSTANCES[group].connections += 1

    @staticmethod
    def disconnect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user disconnects."""

        group = ClientConsumer.get_uuid_group(id=user.team_id, uuid=uuid)
        if group is None:
            return
        logger.debug(f"{group} disconnected")
        if group in GAME_INSTANCES:
            GAME_INSTANCES[group].connections -= 1
        if GAME_INSTANCES[group].connections == 0:
            del GAME_INSTANCES[group]
