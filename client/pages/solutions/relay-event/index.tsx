import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/relay-event/0.png';

const SLUG = 'relay-event';
const ANSWER = `CAT AS TROPHY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The Puzzlympics Event consists of two phases: a Relay Race competition
      that challenges teams of four players to complete a series of physical and
      mental challenges as quickly and accurately as possible, and a
      cheerleading lesson on how to properly support teams for the final round
      of competition.
    </p>
    <p>
      For the Relay Race, physical challenges for the individual "runners" are
      themed around the stages of human life, while mental challenges for the
      group are themed around the history of communication.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Challenge</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physical Challenge - Crawling</td>
          <td>
            The first relay race "runner" crawls down and back, moving forward
            using arms and legs.
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Nonverbal</td>
          <td>
            The first group challenge has each competitor take a number from an
            envelope. The team must then sort themselves from lowest to highest
            number without talking. Once in the correct order, the letters on the
            back of the paper spells out the answer.
          </td>
        </tr>
        <tr>
          <td>Physical Challenge - Skipping</td>
          <td>
            The second relay race "runner" skips down and back, hopping on one
            foot before switching to using the other leg.
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Drawing</td>
          <td>
            The second group challenge has each team line up. The member at the
            back of the line takes a piece of paper from the envelope, and
            traces the picture on the back or hand of the person in front of
            them. The team member at the front of the line circles the word that
            matches the object that was drawn.
          </td>
        </tr>
        <tr>
          <td>Physical Challenge - Power Walking</td>
          <td>
            The third relay race "runner" power walks down and back, making sure
            at least one foot is on the ground at all times.
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Speaking</td>
          <td>
            The final group challenge has each competitor take a word from an
            envelope. The four words, when spoken in the right order, make a
            bigger word. The team writes down that word before proceeding to the
            final lap.
          </td>
        </tr>
        <tr>
          <td>Physical Challenge - Inching</td>
          <td>
            The fourth relay race "runner" inches forward by making sure that
            for every step, the heel of the front foot touches the toe of the
            back foot.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      During the qualifying rounds, the top 3 teams in each group qualify for
      the finals. These are the mental challenges presented during those rounds.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Qualifying Round Challenge</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mental Challenge - Nonverbal</td>
          <td>
            4 - L<br />8 - I<br />
            13 - V<br />
            16 - E<br />
            <br />
            <Clue>LIVE</Clue>
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Drawing</td>
          <td>
            <Clue>STAR</Clue>
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Speaking</td>
          <td>
            Ad
            <br />
            Mini
            <br />
            Stray
            <br />
            Shun
            <br />
            <br />
            <Clue>ADMINISTRATION</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The final round goes through similar puzzle types, with different answers:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Qualifying Round Challenge</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mental Challenge - Nonverbal</td>
          <td>
            7 - M<br />
            10 - A<br />
            17 - P<br />
            18 - S<br />
            <br />
            <Clue>MAPS</Clue>
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Drawing</td>
          <td>
            <Clue>CAT</Clue>
          </td>
        </tr>
        <tr>
          <td>Mental Challenge - Speaking</td>
          <td>
            Ah
            <br />
            Pasta
            <br />
            Row
            <br />
            Fee
            <br />
            <br />
            <Clue>APOSTROPHE</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      During the cheerleading round, teams learned three cheers that provide
      instructions on how to extract an answer from those Qualifying Round
      answers:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Cheerleading Cheer</th>
          <th>Extraction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            CHEER 1 - First We Picture Victory, Draw Upon the Word You See!
          </td>
          <td>
            Drawing Round - what object was drawn
            <br />
            <br />
            <Clue>CAT</Clue>
          </td>
        </tr>
        <tr>
          <td>
            CHEER 2 - Count On Us to See You Through, Even Letters Show You
            Too/Two
          </td>
          <td>
            Nonverbal Round - take the even letters / numbers from the answer
            <br />
            <br />
            <Clue>AS</Clue>
          </td>
        </tr>
        <tr>
          <td>
            CHEER 3 - Sound It Out on Their Behalf, You Can Win the Second Half!
          </td>
          <td>
            Speaking Round - take the second half of the answer, when sounded
            out (i.e., the last two syllables, as spoken) <br />
            <br />
            <Clue>TROPHY</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Paired with the enumeration on the sheet, this gives the Event's answer as{' '}
      <Answerize>{ANSWER}</Answerize> - the answer for the round, as well as the
      prize for the winning teams.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
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
