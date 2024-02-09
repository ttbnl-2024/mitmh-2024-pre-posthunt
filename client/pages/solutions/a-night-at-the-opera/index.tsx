import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-night-at-the-opera/0.png';

const SLUG = 'a-night-at-the-opera';
const ANSWER = `A LOCAL ARIA NETWORK`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The following puzzles are used for this meta:</p>

    <Table className="puzzles-table">
      <tbody>
        <tr>
          <td>Where on Earth Is Carmina Suntigre?</td>
          <td>BAHAMIAN</td>
        </tr>
        <tr>
          <td>Revolting Developments</td>
          <td>BALIO TOWERS</td>
        </tr>
        <tr>
          <td>Another One Bites The Dust</td>
          <td>BENEDICT XVI</td>
        </tr>
        <tr>
          <td>We Are the Champions</td>
          <td>BRADLEY WIGGINS</td>
        </tr>
        <tr>
          <td>Split the Difference</td>
          <td>CLAUDE BERRI</td>
        </tr>
        <tr>
          <td>Heaven for Everyone</td>
          <td>DEMOCRACY</td>
        </tr>
        <tr>
          <td>Subplutonean IHTFP Blues</td>
          <td>EDOUARD ROCHE</td>
        </tr>
        <tr>
          <td>The Show Must Go On</td>
          <td>ELVIS</td>
        </tr>
        <tr>
          <td>Modern Architecture</td>
          <td>FLAMEN DIALIS</td>
        </tr>
        <tr>
          <td>Machines</td>
          <td>GEN Z</td>
        </tr>
        <tr>
          <td>Sorry Not Sorry</td>
          <td>HALIMEDE</td>
        </tr>
        <tr>
          <td>Field of Clovers</td>
          <td>WAR CASTLE FOUR-PACK</td>
        </tr>
        <tr>
          <td>Body Language</td>
          <td>WHIRLAWAY</td>
        </tr>
        <tr>
          <td>Under Pressure</td>
          <td>WILLIAM LAMBERTON</td>
        </tr>
        <tr>
          <td>Mercury (Meta 1)</td>
          <td>CALL HIM FREDDIE</td>
        </tr>
        <tr>
          <td>Duet (Meta 2)</td>
          <td>A NIGHT AT THE OPERA</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The flavortext and setup refer to the chess game played between Paul
      Morphy and Duke Karl of Brunswick/Count Isouard. The 16 answers words, 14
      from individual puzzles and two metas, can each be associated with one of
      Morphy's chess pieces:
    </p>
    <ul>
      <li>
        King: <Clue>ELVIS</Clue>
      </li>
      <li>
        Queen: <Clue>CALL HIM FREDDIE</Clue>
      </li>
      <li>
        Bishops (starting on B and W squares): <Clue>BENEDICT XVI</Clue>,{' '}
        <Clue>WILLIAM LAMBERTON</Clue>
      </li>
      <li>
        Knights (starting on B and W squares): <Clue>BRADLEY WIGGINS</Clue>,{' '}
        <Clue>WHIRLAWAY</Clue>
      </li>
      <li>
        Rooks (castles; starting on B and W squares): <Clue>BALIO TOWERS</Clue>,{' '}
        <Clue>WAR CASTLE FOUR-PACK</Clue>
      </li>
      <li>
        Pawns (begin with A through H):
        <ul>
          <li>
            <Clue>A NIGHT AT THE OPERA</Clue>
          </li>
          <li>
            <Clue>BAHAMIAN</Clue>
          </li>
          <li>
            <Clue>CLAUDE BERRI</Clue>
          </li>
          <li>
            <Clue>DEMOCRACY</Clue>
          </li>
          <li>
            <Clue>EDOUARD ROCHE</Clue>
          </li>
          <li>
            <Clue>FLAMEN DIALIS</Clue>
          </li>
          <li>
            <Clue>GEN Z</Clue>
          </li>
          <li>
            <Clue>HALIMEDE</Clue>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      The 17 clues refer to the position after each of Morphy's moves, from the
      point of view of the piece that moved, and produce an index that can be
      used to pull a letter out of the piece that was moved. For example, the
      first move is 1. e4, so the piece that moves is the e pawn (
      <Monospace>EDOUARD ROCHE</Monospace>):
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>The given clue then resolves as:</p>
    <p>
      (Vertical distance from me to Another One Bites the Dust) [e4 to f1, so 3]
      + (Horizontal Distance from The Show Must Go On to We Are the Champions)
      [e1 to g1, so 2] = 3 + 2 = 5.
    </p>
    <p>Taking the 17 indices yields:</p>
    <Table className="moves-table">
      <thead>
        <tr>
          <th>Answer</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EDOUARD ROCHE</td>
          <td>5</td>
          <td>A</td>
        </tr>
        <tr>
          <td>BRADLEY WIGGINS</td>
          <td>5</td>
          <td>L</td>
        </tr>
        <tr>
          <td>DEMOCRACY</td>
          <td>4</td>
          <td>O</td>
        </tr>
        <tr>
          <td>DEMOCRACY</td>
          <td>5</td>
          <td>C</td>
        </tr>
        <tr>
          <td>CALL HIM FREDDIE</td>
          <td>2</td>
          <td>A</td>
        </tr>
        <tr>
          <td>WILLIAM LAMBERTON</td>
          <td>8</td>
          <td>L</td>
        </tr>
        <tr>
          <td>CALL HIM FREDDIE</td>
          <td>2</td>
          <td>A</td>
        </tr>
        <tr>
          <td>WHIRLAWAY</td>
          <td>4</td>
          <td>R</td>
        </tr>
        <tr>
          <td>BENEDICT XVI</td>
          <td>6</td>
          <td>I</td>
        </tr>
        <tr>
          <td>WHIRLAWAY</td>
          <td>6</td>
          <td>A</td>
        </tr>
        <tr>
          <td>WILLIAM LAMBERTON</td>
          <td>16</td>
          <td>N</td>
        </tr>
        <tr>
          <td>ELVIS</td>
          <td>1</td>
          <td>E</td>
        </tr>
        <tr>
          <td>BALIO TOWERS</td>
          <td>6</td>
          <td>T</td>
        </tr>
        <tr>
          <td>WAR CASTLE FOUR-PACK</td>
          <td>1</td>
          <td>W</td>
        </tr>
        <tr>
          <td>WILLIAM LAMBERTON</td>
          <td>15</td>
          <td>O</td>
        </tr>
        <tr>
          <td>CALL HIM FREDDIE</td>
          <td>9</td>
          <td>R</td>
        </tr>
        <tr>
          <td>WAR CASTLE FOUR-PACK</td>
          <td>17</td>
          <td>K</td>
        </tr>
      </tbody>
    </Table>
    <p>
      What Mercury needs to reconnect with the other musical gods is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .puzzles-table td:nth-child(2),
      .moves-table td:nth-child(2n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .moves-table td:nth-child(n + 2) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
