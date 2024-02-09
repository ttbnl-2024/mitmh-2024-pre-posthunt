import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'judges-of-the-underworld';
const ANSWER = `WREST THE CASE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This meta uses the following puzzles:</p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A Divine Comeowdy</td>
          <td>
            <Monospace>CUTLERY</Monospace>
          </td>
        </tr>
        <tr>
          <td>A King's Best Friend</td>
          <td>
            <Monospace>GRAHAM CRACKER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Steam Library</td>
          <td>
            <Monospace>JAWBONE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Football Team on the Marching Field</td>
          <td>
            <Monospace>RUSHING YARDS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Roguelikes with a K</td>
          <td>
            <Monospace>STRONTIUM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Second Helpings</td>
          <td>
            <Monospace>SURGERY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cubo</td>
          <td>
            <Monospace>TAFEL EQUATION</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dating Stars</td>
          <td>
            <Monospace>TANSY MUSTARD</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Badges Badges Badges Badges Badges Badges Badges Badges Badges
          </td>
          <td>
            <Monospace>THE MASK</Monospace>
          </td>
        </tr>
        <tr>
          <td>Marathon</td>
          <td>
            <Monospace>TOE DRAG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Transformations</td>
          <td>
            <Monospace>TRIER</Monospace>
          </td>
        </tr>
        <tr>
          <td>What a Mesh!</td>
          <td>
            <Monospace>WARRANTIES</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each of the answers contain at their start the last name of a present or
      former United States Supreme Court justice with one letter changed. In
      order of the justice's appointment:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Justice</th>
          <th>Appointed</th>
          <th>Answer</th>
          <th>Justice Letter</th>
          <th>Answer Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>John JAY</Monospace>
          </td>
          <td>1789</td>
          <td>
            <Monospace>JAWBONE</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>William CUSHING</Monospace>
          </td>
          <td>1790</td>
          <td>
            <Monospace>RUSHING YARDS</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Thomas TODD</Monospace>
          </td>
          <td>1807</td>
          <td>
            <Monospace>TOE DRAG</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Roger B. TANEY</Monospace>
          </td>
          <td>1836</td>
          <td>
            <Monospace>TANSY MUSTARD</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Robert C. GRIER</Monospace>
          </td>
          <td>1846</td>
          <td>
            <Monospace>TRIER</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>William STRONG</Monospace>
          </td>
          <td>1870</td>
          <td>
            <Monospace>STRONTIUM</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Horace GRAY</Monospace>
          </td>
          <td>1882</td>
          <td>
            <Monospace>GRAHAM CRACKER</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>William H. TAFT</Monospace>
          </td>
          <td>1921</td>
          <td>
            <Monospace>TAFEL EQUATION</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Pierce BUTLER</Monospace>
          </td>
          <td>1923</td>
          <td>
            <Monospace>CUTLERY</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Earl WARREN</Monospace>
          </td>
          <td>1953</td>
          <td>
            <Monospace>WARRANTIES</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Warren BURGER</Monospace>
          </td>
          <td>1969</td>
          <td>
            <Monospace>SURGERY</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>Clarence THOMAS</Monospace>
          </td>
          <td>1991</td>
          <td>
            <Monospace>THE MASK</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      To ensure things go our way, we need to{' '}
      <Answerize>WREST THE CASE</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
