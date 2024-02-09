import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { Colors } from 'components/crossword';
import Grid from 'components/grid';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'angry';
const ANSWER = `REST`;

const gridData = [
  [' ', ' ', ' ', 'F', ' ', ' ', 'T', 'N', 'T', ' ', ' ', ' '],
  [' ', ' ', 'E', 'O', ' ', 'F', 'W', 'I', 'H', ' ', ' ', ' '],
  ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N', 'R', 'E', 'S', 'T'],
  ['I', 'N', 'E', 'R', 'W', 'V', ' ', 'E', 'E', 'I', 'E', 'E'],
  ['X', 'E', 'V', ' ', 'E', 'E', ' ', ' ', 'E', 'G', 'V', 'N'],
  [' ', ' ', 'E', ' ', 'L', ' ', ' ', ' ', ' ', 'H', 'E', ' '],
  [' ', ' ', 'N', ' ', 'V', ' ', ' ', ' ', ' ', 'T', 'N', ' '],
  [' ', ' ', ' ', ' ', 'E', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

const gridShading = gridData.map((row, i) =>
  row.map((cell) => (i === 2 ? Colors.C3 : cell === ' ' ? Colors.C7 : ''))
);

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see a group of 12 vertical lines of squares. Some are filled with
      letters, others are not; some letters overflow. The vertical squares and
      the letters in them make men's names, for the most part. (Two of the
      names, Eg and Leej, are not common.){' '}
    </p>
    <p>
      The 12 male names and the title of the puzzle put us in mind of the movie
      <i>12 Angry Men</i>, a Sidney Lumet-directed Oscar nominee from 1957.{' '}
    </p>
    <p>
      A little research on a movie site like IMDb reveals the actors associated
      with each jury number in the movie. The actors' names (except their last
      names) appear in the grid (until hitting a black square).
    </p>
    <p>The complete jury is as follows:</p>
    <ol>
      <li>Martin Balsam</li>
      <li>John Fiedler</li>
      <li>Lee J. Cobb</li>
      <li>E. G. Marshall</li>
      <li>Jack Klugman</li>
      <li>Edward Binns</li>
      <li>Jack Warden</li>
      <li>Henry Fonda</li>
      <li>Joseph Sweeney</li>
      <li>Ed Begley</li>
      <li>George Voskovec</li>
      <li>Robert Webber</li>
    </ol>
    <p>
      If we spell out the numbers and substitute them for the jurors' names
      (for instance, juror #6 is Edward Binns), we get the following:
    </p>
    <div style={{ textAlign: 'center' }}>
      <Grid
        // prettier-ignore
        data={gridData}
        shading={gridShading}
        className="inline-block"
      />
    </div>
    <p>
      The answer is <Answerize>{ANSWER}</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
