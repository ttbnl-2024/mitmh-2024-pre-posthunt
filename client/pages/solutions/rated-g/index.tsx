import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'rated-g';
const ANSWER = `MIRA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      From the title and header text, we recognize the Motion Picture
      Association of America (MPAA) which gives certificates of approval and
      assigns movie ratings. Looking up each of the MPAA certificate numbers and
      taking the word indicated in parentheses gives the following message:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Cert. #</th>
          <th>Movie</th>
          <th>Word #</th>
          <th>Word</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>13207</td>
          <td>LOVE AT FIRST BITE</td>
          <td>3</td>
          <td>FIRST</td>
        </tr>
        <tr>
          <td>5312</td>
          <td>IN NAME ONLY</td>
          <td>2</td>
          <td>NAME</td>
        </tr>
        <tr>
          <td>5797</td>
          <td>OF MICE AND MEN</td>
          <td>1</td>
          <td>OF</td>
        </tr>
        <tr>
          <td>20989</td>
          <td>THE OSCAR</td>
          <td>2</td>
          <td>OSCAR</td>
        </tr>
        <tr>
          <td>5630</td>
          <td>BOO RIBBON WINNER</td>
          <td>3</td>
          <td>WINNER</td>
        </tr>
        <tr>
          <td>21204</td>
          <td>A MAN FOR ALL SEASONS</td>
          <td>3</td>
          <td>FOR</td>
        </tr>
        <tr>
          <td>28596</td>
          <td>3 MEN AND A BABY</td>
          <td>1</td>
          <td>3</td>
        </tr>
        <tr>
          <td>19556</td>
          <td>THE 3 WORLDS OF GULLIVER</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>31597</td>
          <td>JENNIFER EIGHT</td>
          <td>2</td>
          <td>EIGHT</td>
        </tr>
        <tr>
          <td>32454</td>
          <td>8 SECONDS</td>
          <td>1</td>
          <td>8</td>
        </tr>
        <tr>
          <td>289</td>
          <td>6 DAY BIKE RIDER</td>
          <td>1</td>
          <td>6</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The movie corresponding to certificate number 33886 is MIGHTY APHRODITE,
      which leads us to our final answer: the first name of the Oscar winner,{' '}
      <Answerize>MIRA</Answerize> Sorvino.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
