import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'dear-diary';
const ANSWER = `PINKY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see diary entries which look like they've been written by different
      characters. Some describe troubles, some seem quite happy, but who are
      they? They all turn out to be fictional rodents, specifically mice or
      rats. Each diary provides clues as to the identity of the author. Also, we
      notice an acrostic formed by the first letters of the diary entries which
      gives <Clue>FIND HIDDEN NUMBER</Clue>. Indeed, each entry also has a
      hidden number. We find the identity of the author and index by the hidden
      number.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Diary Entry No.</th>
          <th>Author</th>
          <th>Source</th>
          <th>Hidden Number</th>
          <th>Indexed Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Scabbers</td>
          <td>Harry Potter series</td>
          <td>4</td>
          <td className="font-mono">B</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Algernon</td>
          <td>
            <i>Flowers for Algernon</i>
          </td>
          <td>2</td>
          <td className="font-mono">L</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Angelina Mouseling</td>
          <td>
            <i>Angelina Ballerina</i>
          </td>
          <td>1</td>
          <td className="font-mono">A</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Templeton</td>
          <td>
            <i>Charlotte's Web</i>
          </td>
          <td>9</td>
          <td className="font-mono">N</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mickey Mouse</td>
          <td>Disney</td>
          <td>4</td>
          <td className="font-mono">K</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Maisy</td>
          <td>
            <i>Maisy</i>
          </td>
          <td>2</td>
          <td className="font-mono">A</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Speedy Gonzales</td>
          <td>
            <i>Looney Tunes</i>
          </td>
          <td>9</td>
          <td className="font-mono">N</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Dormouse</td>
          <td>
            <i>Alice in Wonderland</i>
          </td>
          <td>1</td>
          <td className="font-mono">D</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Gadget Hackwrench</td>
          <td>
            <i>Chip 'n Dale: Rescue Rangers</i>
          </td>
          <td>6</td>
          <td className="font-mono">T</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Reepicheep</td>
          <td>
            <i>The Chronicles of Narnia</i>
          </td>
          <td>7</td>
          <td className="font-mono">H</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Remy</td>
          <td>
            <i>Ratatouille</i>
          </td>
          <td>2</td>
          <td className="font-mono">E</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Basil of Baker Street</td>
          <td>
            <i>Basil of Baker Street</i>
          </td>
          <td>1</td>
          <td className="font-mono">B</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Jerry</td>
          <td>
            <i>Tom &amp; Jerry</i>
          </td>
          <td>3</td>
          <td className="font-mono">R</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Despereaux</td>
          <td>
            <i>The Tale of Despereaux</i>
          </td>
          <td>8</td>
          <td className="font-mono">A</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Mrs. Frisby</td>
          <td>
            <i>Mrs. Frisby and the Rats of NIMH</i>
          </td>
          <td>6</td>
          <td className="font-mono">I</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Minnie Mouse</td>
          <td>Disney</td>
          <td>4</td>
          <td className="font-mono">N</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Extracting gives <Clue>BLANK AND THE BRAIN</Clue>, cluing the final answer{' '}
      <Answerize>PINKY</Answerize>.
    </p>
    <style jsx>{`
      th:nth-child(1),
      td:nth-child(1),
      th:nth-child(4),
      td:nth-child(4),
      th:nth-child(5),
      td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
