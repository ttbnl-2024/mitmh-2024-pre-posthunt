import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'its-easy-cutie';
const ANSWER = `PYKNIC`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>First, we figure out some of the clues below:</p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Woo (5)</td>
          <td>
            <Monospace>COURT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Louse egg (3)</td>
          <td>
            <Monospace>NIT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tiny (6)</td>
          <td>
            <Monospace>LITTLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Soothing ointment (4)</td>
          <td>
            <Monospace>BALM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cap (3)</td>
          <td>
            <Monospace>LID</Monospace>
          </td>
        </tr>
        <tr>
          <td>In all (5)</td>
          <td>
            <Monospace>TOTAL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Fire or rear (3)</td>
          <td>
            <Monospace>CAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Stick one's bottom lip out (4)</td>
          <td>
            <Monospace>POUT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Thick or stupid (5)</td>
          <td>
            <Monospace>DENSE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Interlock or the fabric of a net (4)</td>
          <td>
            <Monospace>MESH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Weed whacker (6)</td>
          <td>
            <Monospace>SICKLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Regarded (3)</td>
          <td>
            <Monospace>SAW</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Next, we use the title (EZ, QT) to realize we can add a letter sound to
      the beginning of all of these words to make new ones.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue Answer</th>
          <th>New Word</th>
          <th>Letter Added</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>COURT</Monospace>
          </td>
          <td>
            <Monospace>ESCORT</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>NIT</Monospace>
          </td>
          <td>
            <Monospace>UNIT</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LITTLE</Monospace>
          </td>
          <td>
            <Monospace>BELITTLE</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BALM</Monospace>
          </td>
          <td>
            <Monospace>EMBALM</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LID</Monospace>
          </td>
          <td>
            <Monospace>EYELID</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TOTAL</Monospace>
          </td>
          <td>
            <Monospace>TEETOTAL</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CAN</Monospace>
          </td>
          <td>
            <Monospace>PECAN</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>POUT</Monospace>
          </td>
          <td>
            <Monospace>WIPEOUT</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DENSE</Monospace>
          </td>
          <td>
            <Monospace>CADENCE</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MESH</Monospace>
          </td>
          <td>
            <Monospace>ENMESH</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SICKLE</Monospace>
          </td>
          <td>
            <Monospace>ICICLE</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SAW</Monospace>
          </td>
          <td>
            <Monospace>SEESAW</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This spells out: <Monospace>SUBMIT PYKNIC</Monospace>, so the answer is{' '}
      <Answerize>PYKNIC</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
