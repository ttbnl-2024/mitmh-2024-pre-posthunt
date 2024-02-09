import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'sumantle';
const ANSWER = `EXCLUSIVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle is an iterated game of Semantle. Each of the leaves is a
      separate (hard) Semantle puzzle. The nodes that are not leaves are
      "Sumantle" puzzles, which look for words that are semantically similar to
      both of the constituent leaves. The root of the tree is the puzzle answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table>
      <tbody>
        <tr>
          <td>EAGER</td>
          <td rowSpan={2}>ANTICIPATED</td>
          <td rowSpan={4}>UPCOMING</td>
          <td rowSpan={8}>PEEK</td>
          <td rowSpan={16}>EXCLUSIVE</td>
        </tr>
        <tr>
          <td>AWAITED</td>
        </tr>
        <tr>
          <td>PLANNING</td>
          <td rowSpan={2}>PROJECT</td>
        </tr>
        <tr>
          <td>RESEARCH</td>
        </tr>
        <tr>
          <td>EPHEMERAL</td>
          <td rowSpan={2}>FLEETING</td>
          <td rowSpan={4}>GLIMPSE</td>
        </tr>
        <tr>
          <td>MOMENTARY</td>
        </tr>
        <tr>
          <td>MIRROR</td>
          <td rowSpan={2}>REFLECTION</td>
        </tr>
        <tr>
          <td>WISDOM</td>
        </tr>
        <tr>
          <td>UNUSUAL</td>
          <td rowSpan={2}>DIFFERENT</td>
          <td rowSpan={4}>UNIQUE</td>
          <td rowSpan={8}>OFFER</td>
        </tr>
        <tr>
          <td>CHANGE</td>
        </tr>
        <tr>
          <td>ARCHITECTURE</td>
          <td rowSpan={2}>DESIGN</td>
        </tr>
        <tr>
          <td>CREATIVE</td>
        </tr>
        <tr>
          <td>AUCTION</td>
          <td rowSpan={2}>PRICE</td>
          <td rowSpan={4}>DISCOUNT</td>
        </tr>
        <tr>
          <td>PREMIUM</td>
        </tr>
        <tr>
          <td>ACCESS</td>
          <td rowSpan={2}>CODE</td>
        </tr>
        <tr>
          <td>REFERRAL</td>
        </tr>
      </tbody>
    </Table>
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
