import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'streams-of-numbers';
const ANSWER = `METRIC`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We can find items of a particular ordered set in each list. Thus, we can
      convert each list into a stream of numbers:
    </p>
    <Table>
      <thead>
        <tr>
          <th>List</th>
          <th>Numbered Set</th>
          <th>Number Stream</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            October, November, April, February, November, January, August,
            February, May
          </td>
          <td>months</td>
          <td>
            <Monospace>10 11 4 2 11 1 8 2 5</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            John Tyler, James Buchanan, Martin Van Buren, George Washington,
            Joseph R. Biden Jr., James K. Polk, James Monroe, George Washington,
            George H.W. Bush, Donald Trump, William J. Clinton, James Monroe
          </td>
          <td>US presidents</td>
          <td>
            <Monospace>10 15 8 1 46 11 5 1 41 45 42 5</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Apple Jacks, Exercise, Emoji Sports, 2014, Alternative Literature,
            Supported Features
          </td>
          <td><i>xkcd</i> comic numbers</td>
          <td>
            <Monospace>38 189 1920 1311 971 619</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Aeronautics and Astronautics, Physics, Mechanical Engineering,
            Chemistry, Civil and Environmental Engineering, Brain and Cognitive
            Sciences, Brain and Cognitive Sciences, Materials Science and
            Engineering, Civil and Environmental Engineering, Brain and
            Cognitive Sciences
          </td>
          <td>MIT courses</td>
          <td>
            <Monospace>16 8 2 5 1 9 9 3 1 9</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            hydrogen, rhodium, sulfur, calcium, helium, flerovium, uranium,
            nihonium
          </td>
          <td>periodic table</td>
          <td>
            <Monospace>1 45 16 20 2 114 92 113</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The number streams can be concatenated and reparsed into numbers 1-26.
      These numbers when decoded using A1Z26 form another member of the numbered
      set:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Number Stream Reparsed</th>
          <th>A1Z26 Decode</th>
          <th>Numbered Set</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>10 1 14 21 1 18 25</Monospace>
          </td>
          <td>JANUARY</td>
          <td>months</td>
          <td>
            <Monospace>1</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>10 15 8 14 6 11 5 14 14 5 4 25</Monospace>
          </td>
          <td>JOHN F KENNEDY</td>
          <td>US presidents</td>
          <td>
            <Monospace>35</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>3 8 18 9 19 20 13 1 19 7 16 19</Monospace>
          </td>
          <td>CHRISTMAS GPS</td>
          <td><i>xkcd</i> comic numbers</td>
          <td>
            <Monospace>201</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>16 8 25 19 9 3 19</Monospace>
          </td>
          <td>PHYSICS</td>
          <td>MIT courses</td>
          <td>
            <Monospace>8</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>14 5 16 20 21 14 9 21 13</Monospace>
          </td>
          <td>NEPTUNIUM</td>
          <td>periodic table</td>
          <td>
            <Monospace>93</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can again reparse <Clue>1 35 201 8 93</Clue> into the A1Z26 sequence{' '}
      <Clue>13 5 20 18 9 3</Clue>, which decodes into the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
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
