import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'rhyme-thyme';
const ANSWER = `STRIFE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      After solving the clues, we realize that the groups point to alphabetized
      lists of words which not only rhyme, but have their endings spelled the
      same. The flavortext and enumeration indicate that there is a word missing
      from each group.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Words</th>
          <th>Missing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CHUTE, CUTE, (5), JUTE, LUTE, MUTE</td>
          <td>
            <Monospace>FLUTE</Monospace>
          </td>
        </tr>
        <tr>
          <td>BAGGER, (6), JAGGER, NAGGER, STAGGER, SWAGGER</td>
          <td>
            <Monospace>DAGGER</Monospace>
          </td>
        </tr>
        <tr>
          <td>AGREEING, (5), FLEEING, FREEING, KNEEING, SEEING</td>
          <td>
            <Monospace>BEING</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            (9), ASTOUNDING, COMPOUNDING, CONFOUNDING, RESOUNDING, SURROUNDING
          </td>
          <td>
            <Monospace>ABOUNDING</Monospace>
          </td>
        </tr>
        <tr>
          <td>BLOUSE, GROUSE, HOUSE, LOUSE, MOUSE, (6)</td>
          <td>
            <Monospace>SPOUSE</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each of those words is synonymous with a member of a final group of words,
      which also has a single missing word.
    </p>
    <ul className="list-none">
      <li>
        <Monospace>FLUTE = FIFE</Monospace>
      </li>
      <li>
        <Monospace>DAGGER = KNIFE</Monospace>
      </li>
      <li>
        <Monospace>BEING = LIFE</Monospace>
      </li>
      <li>
        <Monospace>ABOUNDING = RIFE</Monospace>
      </li>
      <li>
        <Monospace>SPOUSE = WIFE</Monospace>
      </li>
    </ul>
    <p>
      The missing word is the puzzle’s answer,{' '}
      <b>
        <Monospace>STRIFE</Monospace>
      </b>
      .
    </p>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
