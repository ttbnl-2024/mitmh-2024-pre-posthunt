import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'job-center';
const ANSWER = `EIDOLON`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We must match each actor with a job they portrayed in a well-known film.
      The film titles fit in the blanks at the bottom. Indexing and reading in
      the blanks' order yields <Monospace>ANSWER IS EIDOLON</Monospace>,
      indicating the final answer <Answerize>EIDOLON</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Actor</th>
          <th>Job</th>
          <th>Movie</th>
          <th>Extracted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tom Hanks</td>
          <td>School Bus Driver</td>
          <td>
            <Monospace>BACHELOR PARTY</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Emilio Estevez</td>
          <td>Garbage Man</td>
          <td>
            <Monospace>MEN AT WORK</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bob Hoskins</td>
          <td>Plumber</td>
          <td>
            <Monospace>SUPER MARIO BROS.</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Matt Damon</td>
          <td>Janitor</td>
          <td>
            <Monospace>GOOD WILL HUNTING</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Keanu Reeves</td>
          <td>Boat Cleaner</td>
          <td>
            <Monospace>THE REPLACEMENTS</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Kurt Russell</td>
          <td>Carpenter</td>
          <td>
            <Monospace>OVERBOARD</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bryan Cranston</td>
          <td>Mechanic</td>
          <td>
            <Monospace>DRIVE</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>George Clooney</td>
          <td>Fisherman</td>
          <td>
            <Monospace>THE PERFECT STORM</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Sylvester Stallone</td>
          <td>Truck Driver</td>
          <td>
            <Monospace>OVER THE TOP</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Robin Williams</td>
          <td>Car Salesman</td>
          <td>
            <Monospace>CADILLAC MAN</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Kevin Costner</td>
          <td>Farmer</td>
          <td>
            <Monospace>FIELD OF DREAMS</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>John Goodman</td>
          <td>Exterminator</td>
          <td>
            <Monospace>ARACHNOPHOBIA</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Robert Carlyle</td>
          <td>Steelworker</td>
          <td>
            <Monospace>THE FULL MONTY</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Steve Buscemi</td>
          <td>Geologist</td>
          <td>
            <Monospace>ARMAGEDDON</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Daniel Day-Lewis</td>
          <td>Butcher</td>
          <td>
            <Monospace>GANGS OF NEW YORK</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
