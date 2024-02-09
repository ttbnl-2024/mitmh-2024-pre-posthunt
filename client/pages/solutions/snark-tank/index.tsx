import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'snark-tank';
const ANSWER = `PRODUCT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We can start by identifying the product names from the videos or
      transcripts. We realize that these are actual <i>Shark Tank</i> products with one
      letter changed in their names, and the products are in alphabetical order:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Video product name</th>
          <th>Actual <i>Shark Tank</i> product name</th>
          <th>Changed letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            50 STATE CAPITALS DE<u>S</u>K
          </td>
          <td>
            50 STATE CAPITALS DE<u>C</u>K
          </td>
          <td>S</td>
        </tr>
        <tr>
          <td>
            CHIL<u>D</u> SODA
          </td>
          <td>
            CHIL<u>L</u> SODA
          </td>
          <td>D</td>
        </tr>
        <tr>
          <td>
            JONES SC<u>E</u>NES
          </td>
          <td>
            JONES SC<u>O</u>NES
          </td>
          <td>E</td>
        </tr>
        <tr>
          <td>
            LI<u>P</u> HANDLERS
          </td>
          <td>
            LI<u>T</u> HANDLERS
          </td>
          <td>P</td>
        </tr>
        <tr>
          <td>
            M<u>I</u>D RABBIT
          </td>
          <td>
            M<u>A</u>D RABBIT
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            MI<u>T</u> BIKINI
          </td>
          <td>
            MI<u>X</u> BIKINI
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            <u>N</u>UDE ROBE
          </td>
          <td>
            <u>D</u>UDE ROBE
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>
            ONE <u>H</u>OLE SHOES
          </td>
          <td>
            ONE <u>S</u>OLE SHOES
          </td>
          <td>H</td>
        </tr>
        <tr>
          <td>
            PI<u>T</u> WINE
          </td>
          <td>
            PI<u>E</u> WINE
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            RAPID <u>P</u>OPE
          </td>
          <td>
            RAPID <u>R</u>OPE
          </td>
          <td>P</td>
        </tr>
        <tr>
          <td>
            TIPSY ELV<u>I</u>S
          </td>
          <td>
            TIPSY ELV<u>E</u>S
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            TOILET TI<u>G</u>ER
          </td>
          <td>
            TOILET TI<u>M</u>ER
          </td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>
    <p>
      For each product, each Snark is either in or out. We treat the ins as 1
      and outs as 0 to get unique binary numbers with values from 1 to 12. The
      changed letters, ordered by the numbers, spell out a clue{' '}
      <Clue>IT'S THE P IN GDP</Clue>, for the final answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Number</th>
          <th>Product</th>
          <th>Changed letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            00001<sub>2</sub> = 1
          </td>
          <td>
            TIPSY ELV<u>I</u>S
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            00010<sub>2</sub> = 2
          </td>
          <td>
            MI<u>T</u> BIKINI
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            00011<sub>2</sub> = 3
          </td>
          <td>
            50 STATE CAPITALS DE<u>S</u>K
          </td>
          <td>S</td>
        </tr>
        <tr>
          <td>
            00100<sub>2</sub> = 4
          </td>
          <td>
            PI<u>T</u> WINE
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            00101<sub>2</sub> = 5
          </td>
          <td>
            ONE <u>H</u>OLE SHOES
          </td>
          <td>H</td>
        </tr>
        <tr>
          <td>
            00110<sub>2</sub> = 6
          </td>
          <td>
            JONES SC<u>E</u>NES
          </td>
          <td>E</td>
        </tr>
        <tr>
          <td>
            00111<sub>2</sub> = 7
          </td>
          <td>
            RAPID <u>P</u>OPE
          </td>
          <td>P</td>
        </tr>
        <tr>
          <td>
            01000<sub>2</sub> = 8
          </td>
          <td>
            M<u>I</u>D RABBIT
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            01001<sub>2</sub> = 9
          </td>
          <td>
            <u>N</u>UDE ROBE
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>
            01010<sub>2</sub> = 10
          </td>
          <td>
            TOILET TI<u>G</u>ER
          </td>
          <td>G</td>
        </tr>
        <tr>
          <td>
            01011<sub>2</sub> = 11
          </td>
          <td>
            CHIL<u>D</u> SODA
          </td>
          <td>D</td>
        </tr>
        <tr>
          <td>
            01100<sub>2</sub> = 12
          </td>
          <td>
            LI<u>P</u> HANDLERS
          </td>
          <td>P</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .table-1 td,
      .table-2 td {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-1 td:nth-child(3),
      .table-2 td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
