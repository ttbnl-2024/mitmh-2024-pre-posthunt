import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'boosted';
const ANSWER = `THE CABALLEROS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see two lists of words. If we treat these lists as crossword-style
      clues, we notice that the left column produces an alphabetical list of
      answers. Solving the right column produces a list of answers that are the
      same as the left answers (in some order), except with one letter removed
      from each answer. When we rearrange the list by the order of the answers
      on the right, we note that the removed letters spell out{' '}
      <Monospace>THEM CRAB ALLY ZEROS</Monospace>.
    </p>
    <p>
      The positions at which the extra letters are removed in each word are
      consistent: <Monospace>THEM</Monospace> (4),{' '}
      <Monospace>CRAB</Monospace> (2), <Monospace>ALLY</Monospace> (4),{' '}
      <Monospace>ZEROS</Monospace> (1). This clues to remove the corresponding
      letters from those positions for each word:{' '}
      <Monospace>THE(M) C(R)AB ALL(Y) (Z)EROS</Monospace>. Following the (3 10)
      enumeration at the bottom, we can read this as the answer{' '}
      <b>
        <Monospace>THE CABALLEROS</Monospace>
      </b>
      . The title confirms this by being a word associated with cowboys, while
      also indicating the idea of removal.
    </p>
    <Appendix>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Left Clue</th>
            <th>Answer</th>
            <th>Right Clue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Human</td>
            <td>
              <Monospace>MOR(T)AL</Monospace>
            </td>
            <td>Ethical</td>
          </tr>
          <tr>
            <td>Specialty</td>
            <td>
              <Monospace>NIC(H)E</Monospace>
            </td>
            <td>Pleasant</td>
          </tr>
          <tr>
            <td>Serene</td>
            <td>
              <Monospace>QUI(E)T</Monospace>
            </td>
            <td>Stop</td>
          </tr>
          <tr>
            <td>Coral</td>
            <td>
              <Monospace>SAL(M)ON</Monospace>
            </td>
            <td>Parlor</td>
          </tr>
          <tr>
            <td>Tally</td>
            <td>
              <Monospace>S(C)ORE</Monospace>
            </td>
            <td>Achy</td>
          </tr>
          <tr>
            <td>Criminal</td>
            <td>
              <Monospace>C(R)OOK</Monospace>
            </td>
            <td>Prepare</td>
          </tr>
          <tr>
            <td>Hangout</td>
            <td>
              <Monospace>H(A)UNT</Monospace>
            </td>
            <td>Search</td>
          </tr>
          <tr>
            <td>Tolerate</td>
            <td>
              <Monospace>A(B)IDE</Monospace>
            </td>
            <td>Assistant</td>
          </tr>
          <tr>
            <td>Spinning</td>
            <td>
              <Monospace>ROT(A)TING</Monospace>
            </td>
            <td>Decaying</td>
          </tr>
          <tr>
            <td>Tone</td>
            <td>
              <Monospace>INF(L)ECTION</Monospace>
            </td>
            <td>Contamination</td>
          </tr>
          <tr>
            <td>Fisher</td>
            <td>
              <Monospace>ANG(L)ER</Monospace>
            </td>
            <td>Rage</td>
          </tr>
          <tr>
            <td>Aping</td>
            <td>
              <Monospace>COP(Y)ING</Monospace>
            </td>
            <td>Dealing</td>
          </tr>
          <tr>
            <td>Eccentric</td>
            <td>
              <Monospace>(Z)ANY</Monospace>
            </td>
            <td>Whichever</td>
          </tr>
          <tr>
            <td>Watches</td>
            <td>
              <Monospace>(E)YES</Monospace>
            </td>
            <td>Affirmative</td>
          </tr>
          <tr>
            <td>Uprising</td>
            <td>
              <Monospace>(R)EVOLUTION</Monospace>
            </td>
            <td>Development</td>
          </tr>
          <tr>
            <td>Squeal</td>
            <td>
              <Monospace>(O)INK</Monospace>
            </td>
            <td>Sign</td>
          </tr>
          <tr>
            <td>Run</td>
            <td>
              <Monospace>(S)PRINT</Monospace>
            </td>
            <td>Publish</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
