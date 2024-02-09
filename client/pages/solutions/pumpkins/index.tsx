import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'pumpkins';
const ANSWER = `ATUM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each pumpkin clues a phrase that starts with either{' '}
      <Monospace>JACK</Monospace> or <Monospace>JACKIE</Monospace>. We take the
      letter immediately after the <Monospace>JACK</Monospace> /{' '}
      <Monospace>JACKIE</Monospace> (which is in alphabetical order).
    </p>
    <Table>
      <thead>
        <tr>
          <th>Answer</th>
          <th>Extract</th>
          <th>Positions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>JACKALOPE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>5, 15</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKIE CHAN</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>1, 9</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKIE EVANCHO</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>13</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKIE GLEASON</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>4</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKKNIFE</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
          <td>10</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACK NICHOLSON</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>6</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACK O LANTERN</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>2, 8, 11</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKPOT</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>12</td>
        </tr>
        <tr>
          <td>
            <Monospace>JACKIE ROBINSON</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>3, 7, 14</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Using the numbers at the top as the positions for each letter, we get the
      cluephrase <Monospace>CORGAN ROCK OPERA</Monospace>, which leads to an
      answer with enumeration (4). The Smashing Pumpkins with frontman Billy
      Corgan created an album called <i>Atum: A Rock Opera in Three Acts</i>, giving{' '}
      <Answerize>ATUM</Answerize> as our final answer.
    </p>
    <style jsx global>{`
        td:nth-child(2),
        td:nth-child(3) {
          text-align: center;
        }
      `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
