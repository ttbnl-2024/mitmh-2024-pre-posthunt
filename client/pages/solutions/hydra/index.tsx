import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'hydra';
const ANSWER = `HEAD TO HEAD BATTLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The "normal" feeder answers to this round are as follows:</p>
    <Table className="puzzles-table">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Other Scottish Play</td>
          <td>
            <Clue>BASOTHO</Clue>
          </td>
        </tr>
        <tr>
          <td>How to Quadruple Your Money in Hollywood</td>
          <td>
            <Clue>TENFOLD</Clue>
          </td>
        </tr>
        <tr>
          <td>Mausolea</td>
          <td>
            <Clue>ADVERB</Clue>
          </td>
        </tr>
        <tr>
          <td>Amykos' Briefs</td>
          <td>
            <Clue>OUTREACH</Clue>
          </td>
        </tr>
        <tr>
          <td>Isle of Misfit Puzzles</td>
          <td>
            <Clue>TERABYTE</Clue>
          </td>
        </tr>
        <tr>
          <td>Schrödinger's Maze</td>
          <td>
            <Clue>LIFEGUARD</Clue>
          </td>
        </tr>
        <tr>
          <td>Do I Hear a Waltz?</td>
          <td>
            <Clue>ALONE</Clue>
          </td>
        </tr>
        <tr>
          <td>Monsters</td>
          <td>
            <Clue>BEHIND YOU</Clue>
          </td>
        </tr>
        <tr>
          <td>Realize It</td>
          <td>
            <Clue>OVER</Clue>
          </td>
        </tr>
        <tr>
          <td>De Fence</td>
          <td>
            <Clue>HONOURABLE</Clue>
          </td>
        </tr>
        <tr>
          <td>Scan</td>
          <td>
            <Clue>THE LAST ONE</Clue>
          </td>
        </tr>
        <tr>
          <td>Sumantle</td>
          <td>
            <Clue>EXCLUSIVE</Clue>
          </td>
        </tr>
        <tr>
          <td>Until They Come Home</td>
          <td>
            <Clue>LABOR</Clue>
          </td>
        </tr>
        <tr>
          <td>The Champion</td>
          <td>
            <Clue>DIVINE</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      While these heads are typical puzzles, as we progress, we find that the
      number of heads is infinite, and after the above answers we start
      repeating a number of puzzle "types" (these are procedurally generated).
    </p>
    <p>The puzzle answers are organized on the round page as follows:</p>
    <ul>
      <li>
        Sublevel 1
        <ul>
          <li>
            <Clue>BASOTHO</Clue>
          </li>
          <li>
            <Clue>TENFOLD</Clue>
          </li>
        </ul>
      </li>
    </ul>

    <ul>
      <li>
        Sublevel 2
        <ul>
          <li>
            <Clue>ADVERB</Clue>
          </li>
          <li>
            <Clue>OUTREACH</Clue>
          </li>
          <li>
            <Clue>TERABYTE</Clue>
          </li>
          <li>
            <Clue>LIFEGUARD</Clue>
          </li>
        </ul>
      </li>
    </ul>

    <ul>
      <li>
        Sublevel 3
        <ul>
          <li>
            <Clue>ALONE</Clue>
          </li>
          <li>
            <Clue>BEHIND YOU</Clue>
          </li>
          <li>
            <Clue>OVER</Clue>
          </li>
          <li>
            <Clue>HONOURABLE</Clue>
          </li>
          <li>
            <Clue>THE LAST ONE</Clue>
          </li>
          <li>
            <Clue>EXCLUSIVE</Clue>
          </li>
          <li>
            <Clue>LABOR</Clue>
          </li>
          <li>
            <Clue>DIVINE</Clue>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      Our hydra is a binary tree. We realize that the "left" and "right" child
      answers are related to their parent node by the parent's "left" and
      "right" letters. For the first sublevel, the "left" answer starts and ends
      with the two leftmost letters of the previous answer, while the "right" answer
      starts and ends with the two rightmost letters of the previous answer.
    </p>
    <p>
      The third sublevel answers start with either the first letter or last
      letter of the answer on the level above; <Clue>ADVERB</Clue> opens up{' '}
      <Clue>ALONE</Clue> and <Clue>BEHIND YOU</Clue>, for instance.
    </p>
    <p>
      All of the third sublevel answers can be paired with the word "LEFT" if
      the word starts with the letter on the left side of the answer or "RIGHT"
      if the word starts with the letter on the right side of the answer. The
      "left" or "right" is on the left side of the word if it is on the left
      side of the original branching, and on the right side if it is on the
      right side of the original branching:
    </p>
    <ul>
      <li>
        <Clue>LEFT ALONE</Clue>
      </li>
      <li>
        <Clue>RIGHT BEHIND YOU</Clue>
      </li>
      <li>
        <Clue>LEFT OVER</Clue>
      </li>
      <li>
        <Clue>RIGHT HONOURABLE</Clue>
      </li>
      <li>
        <Clue>THE LAST ONE LEFT</Clue>
      </li>
      <li>
        <Clue>EXCLUSIVE RIGHT</Clue>
      </li>
      <li>
        <Clue>LABOR LEFT</Clue>
      </li>
      <li>
        <Clue>DIVINE RIGHT</Clue>
      </li>
    </ul>
    <p>
      All of the fourth level and beyond answers (the procedurally generated
      puzzles) have a total of exactly three L's and R's combined. For example,
      the fourth level answers may be:
    </p>
    <ul>
      <li>
        <Clue>BARREL OF MONKEYS</Clue> (RRL)
      </li>
      <li>
        <Clue>FALL FLAT</Clue> (LLL)
      </li>
      <li>
        <Clue>REAL LIFE</Clue> (RLL)
      </li>
      <li>
        <Clue>CAROL BURNETT</Clue> (RLR)
      </li>
    </ul>
    <p>
      We can traverse through the hydra heads by going left and right until we
      get to the third sublevel using these L's and R's:
    </p>
    <ul>
      <li>
        <Clue>RRL: LABOR</Clue>
      </li>
      <li>
        <Clue>LLL: ALONE</Clue>
      </li>
      <li>
        <Clue>RLL: THE LAST ONE</Clue>
      </li>
      <li>
        <Clue>RLR: EXCLUSIVE</Clue>
      </li>
    </ul>
    <p>
      The fourth level has 16 distinct proc-gen puzzles. When decoded this way,
      we find that we must engage in <Answerize>{ANSWER}</Answerize>. The fifth
      level has 32 distinct puzzles and answers, which when decoded in this way,
      yield the meta answer twice, and so on. (This approach to procedurally
      generating puzzles could have, in theory, allowed us go many levels deep,
      but in practice, we saved ourselves a lot of trouble by only adding an
      additional two levels beyond the first round of this type with the answer.)
    </p>
    <style jsx global>{`
      .puzzles-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
