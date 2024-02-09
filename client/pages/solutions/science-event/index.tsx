import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'science-event';
const ANSWER = `MITE EYE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Circe's Potions Event takes teams to Circe's island for an "alchemical"
      chemistry experiment, using natural litmus tests like turmeric, red
      cabbage, and beets to identify the pH levels of a series of mystery
      chemicals, given fanciful ingredient names.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>pH Level</th>
          <th>Potion Name</th>
          <th>Letter Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>Mummy Rot Antidote</td>
          <td>M</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Veritaserum</td>
          <td>I</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Philter of the Phantom</td>
          <td>T</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Oracle's Extract</td>
          <td>E</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Water</td>
          <td>(n/a)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Strangler</td>
          <td>E</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Red Chomby Morphing Potion</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Superior Petri's Philter</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Sorting by acidity and indexing into the Potion Name by pH level yields
      the final answer, <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(2n + 1) {
        text-align: center;
      }
      .table-1 td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
