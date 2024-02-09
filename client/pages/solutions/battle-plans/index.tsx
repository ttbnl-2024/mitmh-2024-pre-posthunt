import { FC } from 'react';

import { Colors } from 'components/crossword';
import Grid from 'components/grid';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'battle-plans';
const ANSWER = `DEMOPOLIS CHALK`;

const _: '' = '';

// prettier-ignore
const grid1 = [
  [   _,   _, '7',   _, '4', '2', '4',   _, '4', '5', '1',],
  [ '4',   _,   _,'OM',   _,'NA','UT','IC','AL',   _,   _,],
  [   _,   _,'TH',   _,   _,   _,   _,'WS',   _,   _,'SI',],
  [ '3','FA',   _,   _,   _,   _,'RE',   _,   _,   _,'DE',],
  [   _,   _,   _,   _,   _,'GC',   _,   _,   _,   _,'RE',],
  [ '4',   _,   _,   _,'IN',   _,'GA',   _,   _,   _,'AL',],
  [ '2',   _,   _,'AR',   _,   _,'NG',   _,   _,   _,'TI',],
  [   _,   _,'AF',   _,   _,   _,'PL',   _,   _,   _,'ME',],
  [   _,'SE',   _,   _,   _,   _,'AN',   _,   _,   _,   _,],
  [ '1',   _,   _,   _,   _,   _,'KS',   _,   _,   _,   _,],
  [ '6',   _,   _,   _,   _,   _,   _,'ST','EA','ME','RS',],
];
// prettier-ignore
const waters1: [number, number][] = [[1, 10], [3, 10], [4, 4], [8, 5], [9, 2], [10, 2]];

// x, y, answer, direction (true = across, false = down)
const ships1: [number, number, string, boolean][] = [
  [1, 2, 'TETHERED', false],
  [1, 4, 'TUNA', true],
  [1, 8, 'ALTARS', false],
  [3, 6, 'REIN', false],
  [5, 4, 'INCH', false],
  [5, 8, 'REVEAL', true],
  [6, 2, 'CHAFFS', false],
  [7, 9, 'OVERCOME', false],
  [8, 6, 'ANEW', true],
  [10, 3, 'ABSOLUTIST', true],
];
// prettier-ignore
const submarines1: [number, number][] = [[2, 10], [3, 4], [6, 6], [8, 4], [10, 1]];

// prettier-ignore
const grid2 = [
  [   _, '1', '5',   _,   _, '3', '1', '4', '3',   _,   _,],
  [   _,   _,   _,   _,'ND',   _,   _,   _,   _,'AC',   _,],
  [ '0',   _,   _,'LA',   _,   _,   _,   _,   _,'CU',   _,],
  [ '7',   _,'IN',   _,'TO',   _,   _,'CR',   _,'SE',   _,],
  [   _,'MA',   _,   _,'UG',   _,   _,'EW',   _,   _,   _,],
  [   _,   _,   _,   _,'HA',   _,   _,'MA',   _,'SH',   _,],
  [ '0',   _,   _,   _,'SN',   _,   _,'TE',   _,'IP',   _,],
  [ '7',   _,'NO',   _,'AI',   _,   _,   _,   _,'PI',   _,],
  [ '0',   _,'ON',   _,'LS',   _,'PI',   _,   _,'NG',   _,],
  [ '6',   _,'TI',   _,   _,   _,   _,'RA',   _,'LA',   _,],
  [ '1',   _,'DE',   _,   _,   _,   _,   _,'CY','NE',   _,],
];
// prettier-ignore
const waters2: [number, number][] = [[1, 10], [3, 3], [9, 5]];

const ships2: [number, number, string, boolean][] = [
  [1, 3, 'CONDENSATE', true],
  [3, 2, 'INJECT', false],
  [3, 4, 'TOGA', true],
  [3, 7, 'CREASERS', true],
  [5, 8, 'MUSH', true],
  [7, 2, 'NONDAIRY', true],
  [7, 8, 'PIPITS', true],
  [9, 1, 'POTION', true],
  [9, 7, 'RANT', false],
  [9, 9, 'LAUD', true],
];
// prettier-ignore
const submarines2: [number, number][] = [[1, 1], [1, 9], [5, 4], [5, 6], [10, 5]];

// prettier-ignore
const grid3 = [
  [   _,   _, '0', '6', '1', '4',   _, '1', '1', '7',   _,],
  [ '7',   _,   _,'ON',   _,   _,   _,'SE',   _,   _,   _,],
  [ '1',   _,'LM',   _,   _,   _,   _,   _,'AL',   _,   _,],
  [   _,'SA',   _,   _,'CO',   _,   _,   _,   _,'AN',   _,],
  [ '1',   _,   _,   _,   _,'NS',   _,   _,   _,   _,'ES',],
  [ '4',   _,   _,'AT',   _,   _,'TA',   _,   _,   _,   _,],
  [ '4','SO',   _,   _,'LA',   _,   _,'NT',   _,   _,   _,],
  [ '1','CK',   _,   _,   _,'NT',   _,   _,'IN',   _,   _,],
  [   _,'EY',   _,   _,   _,   _,'IC',   _,   _,'OP',   _,],
  [   _,'ES',   _,'AD','RI','AT','IC',   _,   _,   _,'LE',],
  [   _,   _,   _,   _,   _,   _,   _,   _,   _,   _,   _,],
];
// prettier-ignore
const waters3: [number, number][] = [[1, 10], [3, 7], [5, 4], [5, 8], [5, 10], [10, 9]];

const ships3: [number, number, string, boolean][] = [
  [1, 1, 'SAMOSA', false],
  [1, 3, 'ONLY', true],
  [1, 6, 'DESERTER', true],
  [3, 5, 'GUNSLING', false],
  [3, 9, 'ANKH', true],
  [5, 1, 'PESO', false],
  [5, 3, 'ATOM', false],
  [5, 9, 'INTERLOPED', false],
  [8, 3, 'CRADLE', false],
  [8, 6, 'ICICLE', false],
];

//prettier-ignore
const submarines3: [number, number][] = [[3, 3], [4, 7], [6, 7], [8, 1], [10, 1]];

type Cell = number | string | React.ReactNode;
const dataToGrid = (
  inData: Cell[][],
  waters: [number, number][],
  ships: [number, number, string, boolean][]
): {
  data: Cell[][];
  shading: (Colors | '')[][];
} => {
  const g = Colors.C9;
  const data = inData.map((row) => row.map((cell) => cell));
  // prettier-ignore
  const shading: (Colors|'')[][] = [
    [_, g, g, g, g, g, g, g, g, g, g],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
  ];
  // waters
  for (const water of waters) {
    shading[water[0]][water[1]] = Colors.C5;
  }
  // ships
  for (const ship of ships) {
    for (let i = 0; i < ship[2].length / 2; i++) {
      const letters = ship[2][2 * i] + ship[2][2 * i + 1];
      const row = ship[0] + (ship[3] ? 0 : i);
      const col = ship[1] + (ship[3] ? i : 0);
      if (data[row][col] !== _) {
        shading[row][col] = Colors.C3;
      } else {
        shading[row][col] = Colors.C4;
      }
      data[row][col] = letters;
    }
  }
  return { data, shading };
};

const dataToGridWithSubmarines = (
  data: Cell[][],
  waters: [number, number][],
  ships: [number, number, string, boolean][],
  submarines: [number, number][]
): {
  data: Cell[][];
  shading?: (Colors | '')[][];
} => {
  const { data: d, shading: s } = dataToGrid(data, waters, ships);
  for (const submarine of submarines) {
    s[submarine[0]][submarine[1]] = Colors.C2;
  }
  return { data: d, shading: s };
};

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Upon opening the puzzle, we note that both the presentation and the
      instructional text are consistent with the provided diagrams being some
      form of Battleships logic puzzle. In particular, we observe that if ship
      segments consist of two letters (which is consistent with the
      words/phrases already visible in the grid) then each fleet is relatively
      consistent with the Battleships logic puzzles popularized in GAMES
      magazine and elsewhere, If this is a Battleships puzzle, it appears that
      we will not be placing submarines (single-square ships) as part of the
      solve at this point; they are not given. We note, however, that there is
      an asterisk where they would normally be, however.
    </p>
    <p>
      We also note from the instructions that some part of each ship <u>must</u>{' '}
      be covered by something. In this case the most obvious thing which could
      cover one or more segments of a ship is one or more of the letter pairs
      already in the grid. Cross-checking this against the grid, we note that
      there are places where this could produce new words, such as the{' '}
      <Clue>ME</Clue> in the grid covering the <Clue>AT</Clue> segment of{' '}
      <Clue>OVERCOAT</Clue> to become <Clue>OVERCOME</Clue>.
    </p>
    <p>
      For the first grid presented, using both regular battleship logic and the
      need to cover ship segments to create new words, we are able to complete
      the grid as follows. Ships' uncovered segments are marked in{' '}
      <span style={{ backgroundColor: Colors.C4 }}>green</span>, while covered
      segments are marked in{' '}
      <span style={{ backgroundColor: Colors.C3 }}>yellow</span>.
    </p>
    <Grid className="puzzle-grid" {...dataToGrid(grid1, waters1, ships1)} />
    <p>
      There is no obvious way to extract from this&mdash;neither the covering
      bigrams, nor the ones they cover, produce anything sensible. However, we
      have not accounted for the possibility of submarines yet.
    </p>
    <p>
      If we try to place submarines in this grid using standard placement rules,
      we discover that it is possible to place exactly five of them (which
      follows the 1-2-3-4 progression of the other ship sizes.) The submarines
      are marked below in{' '}
      <span style={{ backgroundColor: Colors.C2 }}>orange</span>.
    </p>
    <Grid
      className="puzzle-grid"
      {...dataToGridWithSubmarines(grid1, waters1, ships1, submarines1)}
    />
    <p>
      We note that two of the submarines are located on pairs of given bigrams,
      and, when read top-to-bottom, they spell <Clue>SING</Clue>. This looks
      promising enough for us to apply it to the other grids, which solve as
      follows:
    </p>
    <Grid
      className="puzzle-grid"
      {...dataToGridWithSubmarines(grid2, waters2, ships2, submarines2)}
    />
    <br />
    <Grid
      className="puzzle-grid"
      {...dataToGridWithSubmarines(grid3, waters3, ships3, submarines3)}
    />
    <p>
      The extracted instruction is <Clue>SING A CHANTEY</Clue>. When submitted,
      teams will be asked for a recording of someone on their team singing a sea
      chantey.
    </p>
    <p>
      Upon submitting their sea chantey recording, teams will be given the
      answer to this puzzle, which is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .puzzle-grid table {
        margin-left: auto;
        margin-right: auto;
      }
      .puzzle-grid td {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        font-size: 125%;
        height: 35px !important;
        width: 35px !important;
      }
      .puzzle-grid table tr:nth-child(1) td:nth-child(1) {
        border: none;
      }
      .puzzle-grid table tr:nth-child(n + 2) td:nth-child(10n + 1) {
        border-right: 3px solid black;
      }
      // do not combine these two rules and use all border-bottom
      .puzzle-grid table tr:nth-child(11) td:nth-child(n + 2) {
        border-bottom: 3px solid black;
      }
      .puzzle-grid table tr:nth-child(2) td:nth-child(n + 2) {
        border-top: 3px solid black;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
