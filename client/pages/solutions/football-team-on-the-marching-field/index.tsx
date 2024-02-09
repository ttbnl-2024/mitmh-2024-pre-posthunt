import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import footballGridSolution from 'assets/solutions/football-team-on-the-marching-field/football-grid-solution.png';
import image1 from 'assets/solutions/football-team-on-the-marching-field/set1.png';
import image2 from 'assets/solutions/football-team-on-the-marching-field/set2.png';
import image3 from 'assets/solutions/football-team-on-the-marching-field/set3.png';
import image4 from 'assets/solutions/football-team-on-the-marching-field/set4.png';
import image5 from 'assets/solutions/football-team-on-the-marching-field/set5.png';
import image6 from 'assets/solutions/football-team-on-the-marching-field/set6.png';
import image7 from 'assets/solutions/football-team-on-the-marching-field/set7.png';
import image8 from 'assets/solutions/football-team-on-the-marching-field/set8.png';
import image9 from 'assets/solutions/football-team-on-the-marching-field/set9.png';
import image10 from 'assets/solutions/football-team-on-the-marching-field/set10.png';
import image11 from 'assets/solutions/football-team-on-the-marching-field/set11.png';
import image12 from 'assets/solutions/football-team-on-the-marching-field/set12.png';
import image13 from 'assets/solutions/football-team-on-the-marching-field/set13.png';
import image14 from 'assets/solutions/football-team-on-the-marching-field/set14.png';

const SLUG = 'football-team-on-the-marching-field';
const ANSWER = `RUSHING YARDS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are given a set of 12 instrument players and their marching band drill
      sets.  These drill sets show their movements on the football field from
      set to set.  We can map their path along the football field, which we can
      figure out through various YouTube videos like this one:{' '}
      <a href="https://www.youtube.com/watch?v=GU89uOTgYNY">
        How to Read a Drill Sheet
      </a>.
    </p>
    <p>
      We will map the drill sets for each player (though we can really just
      focus on a single player between each set). Listening to the audio, we
      will hear when the football collides with a performer.
    </p>
    <p>
      The collisions happen on the following counts transitioning to each set.
      These moments are in the recording as an instrumental sound when the
      collision occurs.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Set #</th>
          <th>Performer</th>
          <th>Collision on Count #</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Set 2</td>
          <td>#7 (Oboe)</td>
          <td>15/16</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 3</td>
          <td>#11 (Trumpet)</td>
          <td>16</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 4</td>
          <td>#5 (Saxophne)</td>
          <td>16</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 5</td>
          <td>#1 (Clarinet)</td>
          <td>23</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 6</td>
          <td>#6 (Trombone)</td>
          <td>7/8</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 7</td>
          <td>#4 (Flute)</td>
          <td>1</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 8</td>
          <td>#11 (Trumpet)</td>
          <td>8</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 9</td>
          <td colSpan={3}>No Collision</td>
        </tr>
        <tr>
          <td>Set 10</td>
          <td>#5 (Saxophone)</td>
          <td>10</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 11</td>
          <td>#9 (Bass Drum)</td>
          <td>2</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 12</td>
          <td>#8 (Color Guard)</td>
          <td>4</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 13</td>
          <td>#11 (Trumpet)</td>
          <td>13</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Set 14</td>
          <td>#10 (Tuba)</td>
          <td>19</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The location that the player collides with the football will map onto the
      field with letters giving <Monospace>UARSHDSYINRG</Monospace>. Then we
      must read the collision points on the football field from top to bottom,
      left to right, to see the answer <Answerize>RUSHING YARDS.</Answerize>
    </p>
    <SheetableImage alt="" src={footballGridSolution} title="" />

    <p>Sets with collisions:</p>

    <SheetableImage alt="" src={image1} title="" />

    <SheetableImage alt="" src={image2} title="" className="pt-2" />
    <SheetableImage alt="" src={image3} title="" className="pt-2" />
    <SheetableImage alt="" src={image4} title="" className="pt-2" />
    <SheetableImage alt="" src={image5} title="" className="pt-2" />
    <SheetableImage alt="" src={image6} title="" className="pt-2" />
    <SheetableImage alt="" src={image7} title="" className="pt-2" />
    <SheetableImage alt="" src={image8} title="" className="pt-2" />
    <SheetableImage alt="" src={image9} title="" className="pt-2" />
    <SheetableImage alt="" src={image10} title="" className="pt-2" />
    <SheetableImage alt="" src={image11} title="" className="pt-2" />
    <SheetableImage alt="" src={image12} title="" className="pt-2" />
    <SheetableImage alt="" src={image13} title="" className="pt-2" />
    <SheetableImage alt="" src={image14} title="" className="pt-2" />
    <style jsx>{`
      th:nth-child(1),
      td:nth-child(1),
      th:nth-child(3),
      td:nth-child(3),
      th:nth-child(4),
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
