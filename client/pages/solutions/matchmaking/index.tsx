import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'matchmaking';
const ANSWER = `DIGIT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      Each crossword style clue in one column leads to a first name (in
      alphabetical order); each clue in the other column leads to a last name
      (given in puzzle order). Paired together, these lead to 5 fictional
      archaeologists. Ordering by the right column and indexing reveals the
      answer <b>DIG IT</b>.
    </p>
    <p>Clues matched correctly leads to:</p>
    <Table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Archaeologist</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A U.S. STATE WHOSE FLOWER IS THE PEONY</td>
          <td>A FIXATION (3)</td>
          <td>INDIANA JONES</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>A MISSING AVIATRIX</td>
          <td>A "DUCKY" MEMPHIS HOTEL (5)</td>
          <td>AMELIA PEABODY</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>A "NOTORIOUS" SUPREME COURT JUSTICE</td>
          <td>A "BELTED" SCOTTISH CATTLE BREED (5)</td>
          <td>RUTH GALLOWAY</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>A TIGER PUPPET</td>
          <td>A PRESIDENT KNOWN AS "OLD HICKORY" (4)</td>
          <td>DANIEL JACKSON</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>A "SUPER" MOTHER</td>
          <td>A SMALL RENTED FARM (9)</td>
          <td>LARA CROFT</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
