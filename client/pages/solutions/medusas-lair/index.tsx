import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { Colors, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/medusas-lair/0.png';
import image1 from 'assets/solutions/medusas-lair/1.png';

const SLUG = 'medusas-lair';
const ANSWER = `GORGON TRAIL`;

const q = '?';
const gridData = [
  [_, _, q, q, q, _, _, q, q, q, '4', q, q, '6'],
  [_, _, q, q, _, '5', q, q, '1'],
  [_, _, q, q, _, '8', q, q, q, q, '10', q, q],
  [_, _, q, _, q, _, q, '11', q, _, q, q, '3', q, q, '9'],
  [_, q, _, q, q, q, '7', q, _, _, 2, q],
];

const gridFill = [
  ['A', _, 'A', 'A', 'C', _, _, 'O', 'M', 'H', 'G', 'L', 'U', 'N'],
  ['B', _, 'D', 'E', _, 'O', 'F', 'F', 'G'],
  ['C', _, 'A', 'N', _, 'R', 'O', 'G', 'I', 'N', 'I', 'S', 'F'],
  ['D', _, 'D', _, 'V', _, 'L', 'L', 'E', _, 'I', 'A', 'R', 'V', 'S', 'A'],
  ['E', 'B', _, 'E', 'I', 'E', 'T', 'S', _, _, 'O', 'H'],
];

const gridShade = gridData.map((row) =>
  row.map((cell) => (cell !== _ && cell !== q ? Colors.C3 : ''))
);

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The answers for this meta are:</p>
    <Table className="answers-table">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A Routine Cryptic</td>
          <td>ABTEST</td>
        </tr>
        <tr>
          <td>Arts and Crafts</td>
          <td>GAMEMODECREATIVE</td>
        </tr>
        <tr>
          <td>Greek Girl Squad</td>
          <td>FATESTAYNIGHT</td>
        </tr>
        <tr>
          <td>Moving Day</td>
          <td>ANDOR</td>
        </tr>
        <tr>
          <td>The 10,000 Commit Git Repository</td>
          <td>ACDC</td>
        </tr>
        <tr>
          <td>This Space Intentionally Left... Well, You Know</td>
          <td>DEVNULL</td>
        </tr>
        <tr>
          <td>Transcendental Algebra</td>
          <td>SHENZHENIO</td>
        </tr>
        <tr>
          <td>Turing Tar-pit</td>
          <td>FACEOFF</td>
        </tr>
      </tbody>
    </Table>

    <p>Or, if we're not in puzzlehunt spreadsheet mode:</p>
    <ul>
      <li>
        <Monospace>A/B TEST</Monospace>
      </li>
      <li>
        <Monospace>/GAMEMODE CREATIVE</Monospace>
      </li>
      <li>
        <Monospace>FATE/STAY NIGHT</Monospace>
      </li>
      <li>
        <Monospace>AND/OR</Monospace>
      </li>
      <li>
        <Monospace>AC/DC</Monospace>
      </li>
      <li>
        <Monospace>/DEV/NULL</Monospace>
      </li>
      <li>
        <Monospace>SHENZHEN I/O</Monospace>
      </li>
      <li>
        <Monospace>FACE/OFF</Monospace>
      </li>
    </ul>

    <p>
      Including the slashes but not spaces, these answers snake uniquely into
      the grid:
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto w-full md:w-[420px]"
      />
    </p>
    <p>
      Now, Perseus peers into Medusa's lair. Hold up: it's dangerous to look
      directly at Medusa. But if we remember the myth, it's OK to look at her
      through a mirror.
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image1}
        title=""
        className="mx-auto w-full md:w-[500px]"
      />
    </p>
    <p>
      We can find the starting locations A-E of the paths using the patterns of
      letters and blanks that they must see.
    </p>
    <Crossword data={gridData} fill={gridFill} shading={gridShade} />

    <p>
      Reading the letters Perseus saw in numerical order spells{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        This puzzle was inspired by an MIT Mystery Hunt prediction game, which
        included predicting whether or not there'll be a "Meta based on
        characteristics of the answer string normally ignored by
        standardization, such as letter casing or non-alphabetic characters." As
        of writing this, 50% of respondents are guessing Yes for this year, and
        the other 50% are wrong.
      </p>
      <p>
        If you're involved in the prediction game, here's an idea: write a
        puzzle that makes deciding the correct answer to a question as
        contentious as possible.
      </p>
      <p>
        I wanted to use the meta answer <Clue>HAIR TODAY GORGONE TOMORROW</Clue>
        , but the letter <Clue>W</Clue> was too good for this world.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .answers-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .crossword {
        outline: none !important;
      }
      .crossword td:nth-child(1) {
        border: none !important;
      }
      .crossword td:nth-child(2) {
        border-left: 3px solid black !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
