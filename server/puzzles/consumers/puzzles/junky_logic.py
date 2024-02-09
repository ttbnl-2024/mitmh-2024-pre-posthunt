from functools import cache
from typing import TypedDict

import numpy as np

from puzzles.consumers import ClientConsumer
from puzzles.consumers.base import BasePuzzleHandler
from puzzles.models import Puzzle
from spoilr.core.models import User

SLUG = "junky-logic"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


ROWS = 12
COLS = 15

GRID = [
    "GIPFRHNQSEJLDSV",
    "LAMVAUCIOTEBROS",
    "CZMIGWUTBREYAOF",
    "KNRKIXJADSCOEUM",
    "DOICTAESRFLXNGL",
    "CPGROLOXDMRTENY",
    "LTAEOZASZGRMUCF",
    "RLKZBVUYNAFOACE",
    "ITPKOYQRSANEBEO",
    "JSAKEDQULNQYRFI",
    "LGWPSEUOIZAENOC",
    "ELRGBNSVXMTCDUW",
]


class Grid:
    def __init__(self, gridstr: str):
        self.grid = np.zeros((ROWS, COLS), dtype=int)
        for i in range(ROWS):
            for j in range(COLS):
                self.grid[i][j] = int(gridstr[COLS * i + j])

        self.regions = np.full((ROWS, COLS), -1, dtype=int)
        self.num_regions = 0
        self.region_list: list[list[int]] = []
        for i in range(ROWS):
            for j in range(COLS):
                if self.regions[i][j] == -1:
                    self.region_list.append([])
                    self.fill(i, j, self.grid[i][j], self.num_regions)
                    self.num_regions += 1

    # DFS
    def fill(self, r, c, v, color):
        self.regions[r][c] = color
        self.region_list[color].append((r, c))
        for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            r2, c2 = r + dx, c + dy
            if not self.in_grid(r2, c2):
                continue
            if self.regions[r2][c2] != -1:
                continue
            if self.grid[r2][c2] != v:
                continue
            self.fill(r2, c2, v, color)

    def in_grid(self, r, c):
        return 0 <= r < ROWS and 0 <= c < COLS


class Evaluator:
    def __init__(self):
        self.logic_functions = {
            c: getattr(self, c) for c in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }

    # helper functions
    def sees(self, grid, r, c):
        dists = self.see_dirs(grid, r, c)
        return sum(dists) + 1

    def see_dirs(
        self, grid, r, c
    ):  # returns list of distances it can see left, right, up, down
        color = grid.grid[r][c]
        ans = []
        for dx, dy in [(0, -1), (0, 1), (-1, 0), (1, 0)]:
            count = 0
            x = r + dx
            y = c + dy
            while grid.in_grid(x, y) and grid.grid[x][y] == color:
                x += dx
                y += dy
                count += 1
            ans.append(count)
        return tuple(ans)

    def in_shape_strict(self, grid, r, c, shape):
        k = len(shape)
        color = grid.grid[r][c]
        for j in range(k):
            px, py = shape[j]
            r2, c2 = r + px, c + py
            if not grid.in_grid(r2, c2) or grid.grid[r2][c2] != color:
                return False
        return True

    def in_shape(self, grid, r, c, shape):
        k = len(shape)
        for i in range(k):
            x, y = shape[i]
            shape2 = []
            for px, py in shape:
                shape2.append((px - x, py - y))
            if self.in_shape_strict(grid, r, c, shape2):
                return True
        return False

    # logic functions
    def A(self, grid, r, c):  # region doesn't touch border
        region = grid.regions[r][c]
        for c2 in [0, COLS - 1]:
            for i in range(ROWS):
                if grid.regions[i][c2] == region:
                    return False
        for r2 in [0, ROWS - 1]:
            for j in range(COLS):
                if grid.regions[r2][j] == region:
                    return False
        return True

    def B(self, grid, r, c):  # sees 4 vertically or horizontally
        dl, dr, du, dd = self.see_dirs(grid, r, c)
        return dl + dr == 3 or du + dd == 3

    def C(self, grid, r, c):  # sees border
        color = grid.grid[r][c]
        for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            x, y = r + dx, c + dy
            while grid.in_grid(x, y) and grid.grid[x][y] == color:
                x += dx
                y += dy
            if not grid.in_grid(x, y):
                return True

    def D(self, grid, r, c):  # diagonally adjacent cells shaded
        for dx in [-1, 1]:
            for dy in [-1, 1]:
                x, y = r + dx, c + dy
                if grid.in_grid(x, y) and grid.grid[x][y] == 0:
                    return False
        return True

    def E(self, grid, r, c):  # shaded
        return grid.grid[r][c] == 1

    def F(self, grid, r, c):  # all F in same region
        letter = GRID[r][c]
        region = grid.regions[r][c]
        for i in range(ROWS):
            for j in range(COLS):
                if GRID[i][j] == letter and grid.regions[i][j] != region:
                    return False
        return True

    def G(self, grid, r, c):  # in galaxy
        region = grid.regions[r][c]
        xs = [x for x, _ in grid.region_list[region]]
        xmin, xmax = min(xs), max(xs)
        ys = [y for _, y in grid.region_list[region]]
        ymin, ymax = min(ys), max(ys)
        for x, y in grid.region_list[region]:
            if grid.regions[xmin + xmax - x][ymin + ymax - y] != region:
                return False
        return True

    def H(self, grid, r, c):  # even shaded in row
        count = 0
        for j in range(COLS):
            if grid.grid[r][j] == 1:
                count += 1
        return count % 2 == 0

    def I(self, grid, r, c):  # not in 1x3  # noqa: E743
        return not self.in_shape(
            grid, r, c, [(0, 0), (1, 0), (2, 0)]
        ) and not self.in_shape(grid, r, c, [(0, 0), (0, 1), (0, 2)])

    def J(self, grid, r, c):  # in the bend of J-tetromino
        shapes = [[(0, 0), (-1, 0), (0, 1), (0, 2)]]
        shapes.append([(y, -x) for x, y in shapes[0]])
        shapes.append([(-x, -y) for x, y in shapes[0]])
        shapes.append([(-y, x) for x, y in shapes[0]])
        return any(self.in_shape_strict(grid, r, c, shape) for shape in shapes)

    def K(self, grid, r, c):  # bottom left of checkerboard 2x2
        if r == 0 or c == COLS - 1:
            return False
        color = grid.grid[r][c]
        if grid.grid[r - 1][c] == color:
            return False
        if grid.grid[r - 1][c + 1] != color:
            return False
        if grid.grid[r][c + 1] == color:
            return False
        return True

    def L(self, grid, r, c):  # region touches border
        return not self.A(grid, r, c)

    def M(self, grid, r, c):  # sees exactly 4:
        return self.sees(grid, r, c) == 4

    def N(self, grid, r, c):  # exactly 2 in region
        letter = GRID[r][c]
        region = grid.regions[r][c]
        count = 0
        for x, y in grid.region_list[region]:
            if GRID[x][y] == letter:
                count += 1
        return count == 2

    def O(self, grid, r, c):  # not singleton  # noqa: E743
        return len(grid.region_list[grid.regions[r][c]]) > 1

    def P(self, grid, r, c):  # 5 shaded in 3x3
        count = 0
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                x, y = r + dx, c + dy
                if grid.in_grid(x, y) and grid.grid[x][y] == 1:
                    count += 1
        return count == 5

    def Q(self, grid, r, c):  # no shaded 2x2 globally
        for i in range(ROWS - 1):
            for j in range(COLS - 1):
                xys = [(i, j), (i + 1, j), (i, j + 1), (i + 1, j + 1)]
                if all(grid.grid[x][y] == 1 for x, y in xys):
                    return False
        return True

    def R(self, grid, r, c):  # odd shaded in row
        count = 0
        for j in range(COLS):
            if grid.grid[r][j] == 1:
                count += 1
        return count % 2 == 1

    def S(self, grid, r, c):  # exactly 1 nbr same shading
        count = 0
        color = grid.grid[r][c]
        nbrs = [(r, c + 1), (r + 1, c), (r, c - 1), (r - 1, c)]
        for x, y in nbrs:
            if grid.in_grid(x, y) and grid.grid[x][y] == color:
                count += 1
        return count == 1

    def T(self, grid, r, c):  # exactly 3 shaded among nbrs + self
        count = 0
        if grid.grid[r][c] == 1:
            count += 1
        nbrs = [(r, c + 1), (r + 1, c), (r, c - 1), (r - 1, c)]
        for x, y in nbrs:
            if grid.in_grid(x, y) and grid.grid[x][y] == 1:
                count += 1
        return count == 3

    def U(self, grid, r, c):  # unshaded and right shaded
        if c == COLS - 1:
            return False
        return grid.grid[r][c] == 0 and grid.grid[r][c + 1] == 1

    def V(self, grid, r, c):  # exactly 2 nbrs same shading
        count = 0
        color = grid.grid[r][c]
        nbrs = [(r, c + 1), (r + 1, c), (r, c - 1), (r - 1, c)]
        for x, y in nbrs:
            if grid.in_grid(x, y) and grid.grid[x][y] == color:
                count += 1
        return count == 2

    def W(self, grid, r, c):  # exactly 2 unshaded nbrs
        count = 0
        nbrs = [(r, c + 1), (r + 1, c), (r, c - 1), (r - 1, c)]
        for x, y in nbrs:
            if grid.in_grid(x, y) and grid.grid[x][y] == 0:
                count += 1
        return count == 2

    def X(self, grid, r, c):  # singleton region
        return not self.O(grid, r, c)

    def Y(self, grid, r, c):  # sees same up/down
        _, _, du, dd = self.see_dirs(grid, r, c)
        return du == dd

    def Z(self, grid, r, c):  # no unshaded 2x2 globally
        for i in range(ROWS - 1):
            for j in range(COLS - 1):
                xys = [(i, j), (i + 1, j), (i, j + 1), (i + 1, j + 1)]
                if all(grid.grid[x][y] == 0 for x, y in xys):
                    return False
        return True

    def query(self, s):
        if len(s) != ROWS * COLS:
            return "Error: bad dimensions"
        if any(c not in "01" for c in s):
            return "Error: contents not 0 or 1"

        shade_grid = Grid(s)
        ans = []
        for x in range(ROWS):
            for y in range(COLS):
                letter = GRID[x][y]
                if self.logic_functions[letter](shade_grid, x, y):
                    ans.append("1")
                else:
                    ans.append("0")
        return "".join(ans)


EVALUATOR = Evaluator()


class InputData(TypedDict):
    shading: str


class JunkyLogicHandler(BasePuzzleHandler):
    @staticmethod
    def process_data(user: User, uuid: str, data: InputData, **kwargs) -> None:
        """Callback when JSON data is received from the client."""
        result = EVALUATOR.query(data["shading"])

        group = ClientConsumer.get_uuid_group(id=user.team_id, uuid=uuid)
        if result.startswith("Error"):
            ClientConsumer.send_event(
                group, SLUG, {"shading": data["shading"], "error": result}
            )
        else:
            ClientConsumer.send_event(
                group, SLUG, {"shading": data["shading"], "answer": result}
            )

    # We do nothing in these two methods, since we're communicating with
    # only one client, but they have to be defined because abstract
    @staticmethod
    def connect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user connects."""
        return

    @staticmethod
    def disconnect(user: User, uuid: str, slug: str | None = None) -> None:
        """Callback when a user disconnects."""
        return
