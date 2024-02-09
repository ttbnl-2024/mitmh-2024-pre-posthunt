import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'inaugural-funky-stickperson-contest';
const ANSWER = `SENDER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      By searching the title's acronym, we find that there is a sports governing
      body called the <b>I</b>nternational <b>F</b>ederation of <b>S</b>ports{' '}
      <b>C</b>limbing, which held 6 Climbing <b>World Cups</b> in <b>2023</b>{' '}
      for the <b>B</b>ouldering discipline. Each cup held a men's and women's
      division in each city, giving 12 distinct finals for 12 videos. (We
      exclude Bern as a World Championship, not a World Cup.)
    </p>
    <p>
      The stick figure in each video first moves its arms to form a semaphore
      letter, giving the cluephrase <Monospace>RESISTOR SUMS</Monospace>. The
      remainder of each video depicts the stick figure "climbing" one of the
      IFSC problems in a bouldering World Cup finals. Identifying a couple
      videos (e.g., 6 as W1 in Innsbruck's finals is a common break-in thanks to
      the distinctive starting dyno), along with the flavor that "all locations"
      are given, clues us into the fact that the videos are given in
      alphabetical order by city, with the men's first. This limits the number
      of climbs that we have to watch to identify the remaining videos.
    </p>
    <p>
      Once we have identified the problem for each video, we then use the red
      circle that appears along with the cluephrase{' '}
      <Monospace>RESISTOR SUMS</Monospace> by taking the color of the circled
      hold, and converting it to a resistor value. Summing the resistor values
      in each group of videos and reading as A1Z26 gives the answer{' '}
      <b>
        <Monospace>SENDER</Monospace>
      </b>
      .
    </p>
    <Table>
      <thead>
        <tr>
          <th>Semaphore</th>
          <th>Comp</th>
          <th>Problem</th>
          <th>Reference Climb</th>
          <th>Circled Hold Color</th>
          <th>Resistor Value</th>
          <th>Sum</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Brixen M</td>
          <td>M4</td>
          <td>
            <a href="https://www.youtube.com/live/iJ-FNcl6nbo?feature=share&amp;t=6428">
              Link
            </a>
          </td>
          <td>Grey</td>
          <td>8</td>
          <td rowSpan={3}>19</td>
          <td rowSpan={3}>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>Brixen W</td>
          <td>W3</td>
          <td>
            <a href="https://www.youtube.com/live/NJxLLzfduG4?feature=share&amp;t=4244">
              Link
            </a>
          </td>
          <td>Purple</td>
          <td>7</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            Hachioji M
            <sup>
              <a href="#ftnt1">[1]</a>
            </sup>
          </td>
          <td>M3</td>
          <td>
            <a href="https://www.youtube.com/live/JX_-Ab7-IPY?feature=share&amp;t=4446">
              Link
            </a>
          </td>
          <td>Yellow</td>
          <td>4</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Hachioji W</td>
          <td>W4</td>
          <td>
            <a href="https://www.youtube.com/live/eNR77KOXi20?feature=share&amp;t=6346">
              Link
            </a>
          </td>
          <td>Black</td>
          <td>0</td>
          <td rowSpan={2}>5</td>
          <td rowSpan={2}>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Innsbruck M</td>
          <td>W3</td>
          <td>
            <a href="https://www.youtube.com/live/zt8OZx7qS8o?feature=share&amp;t=5459">
              Link
            </a>
          </td>
          <td>Green</td>
          <td>5</td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>Innsbruck W</td>
          <td>W1</td>
          <td>
            <a href="https://www.youtube.com/live/GniLH6sXlXc?feature=share&amp;t=1393">
              Link
            </a>
          </td>
          <td>White</td>
          <td>9</td>
          <td rowSpan={2}>14</td>
          <td rowSpan={2}>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>Prague M</td>
          <td>M3</td>
          <td>
            <a href="https://www.youtube.com/live/DkMHSYzeflQ?feature=share&amp;t=4508">
              Link
            </a>
          </td>
          <td>Green</td>
          <td>5</td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Prague W</td>
          <td>W2</td>
          <td>
            <a href="https://www.youtube.com/live/HDT6sOLeB0I?feature=share&amp;t=2037">
              Link
            </a>
          </td>
          <td>Yellow</td>
          <td>4</td>
          <td>4</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Salt Lake City M</td>
          <td>M2</td>
          <td>
            <a href="https://www.youtube.com/live/BoMLaSywonc?feature=share&amp;t=3336">
              Link
            </a>
          </td>
          <td>Orange</td>
          <td>3</td>
          <td rowSpan={2}>5</td>
          <td rowSpan={2}>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>Salt Lake City W</td>
          <td>W3</td>
          <td>
            <a href="https://www.youtube.com/live/MU2RQo273TY?feature=share&amp;t=3769">
              Link
            </a>
          </td>
          <td>Red</td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>Seoul M</td>
          <td>M1</td>
          <td>
            <a href="https://www.youtube.com/live/4ZfaojD52K4?feature=share&amp;t=4314">
              Link
            </a>
          </td>
          <td>White</td>
          <td>9</td>
          <td rowSpan={2}>18</td>
          <td rowSpan={2}>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            Seoul W
            <sup>
              <a href="#ftnt2">[2]</a>
            </sup>
          </td>
          <td>W2</td>
          <td>
            <a href="https://www.youtube.com/live/4ZfaojD52K4?feature=share&amp;t=3380">
              Link
            </a>
          </td>
          <td>White</td>
          <td>9</td>
        </tr>
      </tbody>
    </Table>
    <div>
      <p>
        <a href="#ftnt_ref1">[1]</a> This problem had no tops. The video cuts a
        bit early, and a prior version had the stick figure fall at the end.
      </p>
    </div>
    <div>
      <p>
        <a href="#ftnt_ref2">[2]</a> Due to rain, Seoul held their semifinals as
        finals, and put both men and women on at the same time. 8 people
        competing for camera attention meant that many problems don't have the
        entire top by one person filmed, though the "expected" beta for W2 can
        be pieced together from multiple people.
      </p>
    </div>
    <style jsx>{`
      td:nth-child(1),
      td:nth-child(3),
      th:nth-child(4),
      td:nth-child(4),
      th:nth-child(6),
      td:nth-child(6),
      td:nth-child(7),
      td:nth-child(8) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
