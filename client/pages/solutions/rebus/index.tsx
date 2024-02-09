import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { X, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'rebus';
const ANSWER = `AIR`;

const grids = [
  [
    [X, 1, 2, 3, 4],
    [X, 5, _, _, _],
    [6, _, _, _, _],
    [7, _, _, _, X],
    [8, _, _, _, X],
  ],

  [
    [X, 1, 2, 3, 4],
    [X, 5, _, _, _],
    [6, _, _, _, _],
    [7, _, _, _, X],
    [8, _, _, _, X],
  ],

  [
    [1, 2, 3, X, X],
    [4, _, _, 5, X],
    [6, _, _, _, 7],
    [X, 8, _, _, _],
    [X, X, 9, _, _],
  ],

  [
    [1, 2, 3, 4, X],
    [5, _, _, _, X],
    [6, _, _, _, 7],
    [X, 8, _, _, _],
    [X, 9, _, _, _],
  ],

  [
    [X, X, 1, 2, 3],
    [X, 4, _, _, _],
    [5, _, _, _, _],
    [6, _, _, _, X],
    [7, _, _, X, X],
  ],
  [
    [X, X, 1, 2, 3],
    [X, 4, _, _, _],
    [5, _, _, _, _],
    [6, _, _, _, X],
    [7, _, _, X, X],
  ],
];

const fills = [
  [
    [_, 'LAN', 'GUA', '4', 'GE'],
    [_, 'D', 'N', 'C', 'E'],
    ['H', 'I', 'G', 'H', 'S'],
    ['A', 'N', 'Y', 'A', _],
    ['A', 'G', 'I', 'N', _],
  ],

  [
    [_, 'I', 'G', 'E', 'T'],
    [_, 'P', 'O', 'N', 'S'],
    ['S', 'H', 'O', 'C', 'K'],
    ['NO', 'ON', 'GO', 'OD', _],
    ['T', 'E', 'L', 'E', _],
  ],

  [
    ['A', 'S', 'T', _, _],
    ['S', 'M', 'O', 'G', _],
    ['POT', 'OO', 'OO', 'OO', 'OO'],
    [_, 'T', 'L', 'D', 'R'],
    [_, _, 'D', 'S', 'T'],
  ],

  [
    ['O', 'B', 'O', 'E', _],
    ['VA', '', 'DE', 'RS', _],
    ['L', 'I', 'S', 'A', 'S'],
    [_, 'N', 'S', 'T', 'U'],
    [_, 'G', 'A', 'Z', 'E'],
  ],

  [
    [_, _, 'SYM', 'PH', 'ON'],
    [_, 'O', 'B', 'O', 'L'],
    ['A', 'P', 'O', 'N', 'Y'],
    ['P', 'E', 'L', 'E', _],
    ['E', 'N', 'S', _, _],
  ],

  [
    [_, _, 'S', 'TA', 'B'],
    [_, 'S', 'C', 'HW', 'A'],
    ['M', 'U', 'R', 'MU', 'R'],
    ['A', 'V', 'A', 'ST', _],
    ['C', 'A', 'P', _, _],
  ],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle presents us with six small crossword grids. In each of these,
      one of the clues is "?". When we try to solve the grid, we'll realize
      some words don't seem to fit in the grid.
    </p>
    <p>
      The title "Rebus" is hinting at what we should do: Some cells should be
      filled with multiple (or 0) letters, which are rebuses in crosswords. The
      solutions to the grids are as follows:
    </p>
    <Crossword data={grids[0]} fill={fills[0]} />
    <Crossword data={grids[1]} fill={fills[1]} />
    <Crossword data={grids[2]} fill={fills[2]} />
    <Crossword data={grids[3]} fill={fills[3]} />
    <Crossword data={grids[4]} fill={fills[4]} />
    <Crossword data={grids[5]} fill={fills[5]} />
    <p>
      The answers corresponding to the blanked clues are composed entirely of
      rebus cells. The clues don't make sense at first glance, though. This is
      where the second meaning of the puzzle comes in: "Rebus" can also refer to
      a picture puzzle involving letters and words which portrays a common
      phrase.
    </p>
    <p>
      For example, for Puzzle 6: the rebus entry <Clue>TAHWMUST</Clue>, written
      vertically in the grid, can be interpreted as the word <Clue>WHAT</Clue>{' '}
      going upwards and <Clue>MUST</Clue> going downwards. The answer to the
      rebus puzzle is the common phrase <Clue>WHAT GOES UP MUST COME DOWN</Clue>
      , which fits in the blanks of the clue.
    </p>
    <p>The six rebus answers are:</p>
    <ol className="rebuses">
      <li>
        LANGUA4GE → FOR
        <b>
          <u>EI</u>
        </b>
        GN LANGUAGE <span className="normal">(four in language)</span>
      </li>
      <li>
        NOONGOOD → GOOD AFTE
        <b>
          <u>R</u>
        </b>
        NOO
        <b>
          <u>N</u>
        </b>
      </li>
      <li>
        POTOOOOOOOO → POT
        <b>
          <u>A</u>
        </b>
        TOE
        <b>
          <u>S</u>
        </b>{' '}
        <span className="normal">(pot eight O's)</span>
      </li>
      <li>
        VA DERS →{' '}
        <b>
          <u>S</u>
        </b>
        PACE{' '}
        <b>
          <u>I</u>
        </b>
        NVADERS
      </li>
      <li>
        SYMPHON → UNF
        <b>
          <u>I</u>
        </b>
        NISHED SYMPHON
        <b>
          <u>Y</u>
        </b>
      </li>
      <li>
        TAHWMUST → W
        <b>
          <u>H</u>
        </b>
        AT GOES UP MUST COME{' '}
        <b>
          <u>D</u>
        </b>
        OWN
      </li>
    </ol>
    <p>
      Extracting the letters from blanks with numbers gives the cluephrase{' '}
      <Clue>HAIRY INSIDES</Clue>. This can be interpreted as the answer to
      another rebus: the "insides" of the word <Clue>HAIRY</Clue> are{' '}
      <Answerize>{ANSWER}</Answerize>, the final answer to the puzzle.
    </p>
    <style jsx global>{`
      .crossword {
        margin-top: 1em;
        margin-bottom: 1em;
      }
      .rebuses {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .normal {
        font-family: var(--serif-font), ui-serif, Georgia, Cambria,
          'Times New Roman', Times, serif;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
