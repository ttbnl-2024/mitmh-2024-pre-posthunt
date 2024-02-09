import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'what-a-mesh';
const ANSWER = `WARRANTIES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The given clues can be paired up, then cut into two pieces. We then swap
      pieces between pairs to produce new clues.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue 1</th>
          <th>Clue 2</th>
          <th>Fixed 1</th>
          <th>Fixed 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sky god // that might be big and bad</td>
          <td>Mammal // described by ancient Californians</td>
          <td>Sky god described by ancient Californians</td>
          <td>Mammal that might be big and bad</td>
        </tr>
        <tr>
          <td>Caribbean musical style practiced by // diamond miners</td>
          <td>White companion of // Atilla the Hun</td>
          <td>Caribbean musical style practiced by Atilla the Hun</td>
          <td>White companion of diamond miners</td>
        </tr>
        <tr>
          <td>Well-known // fluke</td>
          <td>Sometimes parasitic, it might be a // warning</td>
          <td>Well-known warning</td>
          <td>Sometimes parasitic, it might be a fluke</td>
        </tr>
        <tr>
          <td>Shapeshifting creature // stylized with punctuation</td>
          <td>Moulin Rouge singer // thought to kidnap children</td>
          <td>Shapeshifting creature thought to kidnap children</td>
          <td>Moulin Rouge singer stylized with punctuation</td>
        </tr>
        <tr>
          <td>Primeval goddess of // Super Mario</td>
          <td>Fiery object found in // the sea</td>
          <td>Primeval goddess of the sea</td>
          <td>Fiery object found in Super Mario</td>
        </tr>
        <tr>
          <td>Pacifist animal featured in // Penny Lane</td>
          <td>Start of reverse side of // '30s children's classic</td>
          <td>Pacifist animal featured in '30s children's classic</td>
          <td>Start of reverse side of Penny Lane</td>
        </tr>
        <tr>
          <td>Jötunn father of // Pearl</td>
          <td>Controversial Nobel Prize winner known as // mischief-maker</td>
          <td>Jötunn father of mischief-maker</td>
          <td>Controversial Nobel Prize winner known as Pearl</td>
        </tr>
        <tr>
          <td>Hero of Norse myth about // Scotland</td>
          <td>
            Politician best known as a strong advocate for // flood survival
          </td>
          <td>Hero of Norse myth about flood survival</td>
          <td>Politician best known as a strong advocate for Scotland</td>
        </tr>
        <tr>
          <td>Half-brother found in // a maze</td>
          <td>Material farmers use to construct // the zodiac</td>
          <td>Half-brother found in the zodiac</td>
          <td>Material farmers use to construct a maze</td>
        </tr>
        <tr>
          <td>Greek female spirit of // game collection</td>
          <td>
            Person who might be known for their // friendliness and kindness
          </td>
          <td>Greek female spirit of friendliness and kindness</td>
          <td>Person who might be known for their game collection</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The fixed clues can now be solved. For each pair, one answer is the name
      of a natural satellite in our solar system and the other is the name given
      to the first full moon in a month:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue 1</th>
          <th>Natural Satellite</th>
          <th>Clue 2</th>
          <th>Full Moon</th>
          <th>Month</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sky god described by ancient Californians</td>
          <td>
            <b>
              <Monospace>W</Monospace>
            </b>
            <Monospace>EYWOT</Monospace>
          </td>
          <td>Mammal that might be big and bad</td>
          <td>WOLF</td>
          <td>January</td>
        </tr>
        <tr>
          <td>Caribbean musical style practiced by Atilla the Hun</td>
          <td>
            <Monospace>C</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>LYPSO</Monospace>
          </td>
          <td>White companion of diamond miners</td>
          <td>SNOW</td>
          <td>February</td>
        </tr>
        <tr>
          <td>Well-known warning</td>
          <td>
            <Monospace>MI</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>ANDA</Monospace>
          </td>
          <td>Sometimes parasitic, it might be a fluke</td>
          <td>WORM</td>
          <td>March</td>
        </tr>
        <tr>
          <td>Shapeshifting creature thought to kidnap children</td>
          <td>
            <Monospace>IJI</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>AQ</Monospace>
          </td>
          <td>Moulin Rouge singer stylized with punctuation</td>
          <td>PINK</td>
          <td>April</td>
        </tr>
        <tr>
          <td>Primeval goddess of the sea</td>
          <td>
            <Monospace>THAL</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>SSA</Monospace>
          </td>
          <td>Fiery object found in Super Mario</td>
          <td>FLOWER</td>
          <td>May</td>
        </tr>
        <tr>
          <td>Pacifist animal featured in '30s children's classic</td>
          <td>
            <Monospace>FERDI</Monospace>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>AND</Monospace>
          </td>
          <td>Start of reverse side of Penny Lane</td>
          <td>STRAWBERRY</td>
          <td>June</td>
        </tr>
        <tr>
          <td>Jötunn father of mischief-maker</td>
          <td>
            <Monospace>FARBAU</Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>I</Monospace>
          </td>
          <td>Controversial Nobel Prize winner known as Pearl</td>
          <td>BUCK</td>
          <td>July</td>
        </tr>
        <tr>
          <td>Hero of Norse myth about flood survival</td>
          <td>
            <Monospace>BERGELM</Monospace>
            <b>
              <Monospace>I</Monospace>
            </b>
            <Monospace>R</Monospace>
          </td>
          <td>Politician best known as a strong advocate for Scotland</td>
          <td>STURGEON</td>
          <td>August</td>
        </tr>
        <tr>
          <td>Half-brother found in the zodiac</td>
          <td>
            <Monospace>POLYDEUC</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>S</Monospace>
          </td>
          <td>Material farmers use to construct a maze</td>
          <td>CORN</td>
          <td>September</td>
        </tr>
        <tr>
          <td>Greek female spirit of friendliness and kindness</td>
          <td>
            <Monospace>PHILOPHRO</Monospace>
            <b>
              <Monospace>S</Monospace>
            </b>
            <Monospace>YNE</Monospace>
          </td>
          <td>Person who might be known for their game collection</td>
          <td>HUNTER</td>
          <td>October</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking the nth letter of the answer corresponding to the nth month of the
      year, ordered by month (i.e., diagonalizing), produces the answer{' '}
      <Answerize>WARRANTIES</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
