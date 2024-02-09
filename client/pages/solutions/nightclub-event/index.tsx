import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/nightclub-event/0.png';

const SLUG = 'nightclub-event';
const ANSWER = `PORT AUTHORITY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The first Event of the Mystery Hunt is the <b>Ambrosia Heist</b> - framed
      as a Nightclub event, we are invited to Kresge Auditorium for a "Nightclub
      Event".
    </p>
    <p>
      Upon arriving, a bouncer at the door informs us that our Mystery Hunt
      badges aren't enough to gain admission into the Olympus Nightclub.
      Luckily, a guide approaches and explains that they know a way to sneak
      into the event, passing out "Nightclub Entry" flyers before leading us to
      a back entrance to Kresge.
    </p>
    <p>
      Once inside, we are taken to a room with Friendship Bracelet assembly
      stations, and instructed to create one of three VIP wristbands needed to
      gain admission:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Wristband #</th>
          <th>Encryption Method</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5-Bit Binary</td>
          <td>
            <Clue>VENI</Clue>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Morse Code</td>
          <td>
            <Clue>VIDI</Clue>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Letter Rotation Cipher</td>
          <td>
            <Clue>VINO</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      After constructing the wristbands, we are encouraged to test the
      encryption by solving each others' bands before presenting a set of three
      to the bouncer in the room and voicing the password. Admittance is still
      rejected, as the bouncer explains, "that was yesterday's password."
      Nightclub Entry cards are stamped with the rejection notice.
    </p>
    <p>
      The guide then suggests we can gain admission by learning the right dance
      moves to gain access to the club through the speakeasy entrance. We are
      divided into groups and handed signs with arrows and instructions written
      on them, and select a team member from each group to play a human-powered
      version of Dance Dance Revolution to replicate a series of dance moves.
    </p>
    <p>
      Upon successful completion, we are let into the nightclub, but only
      receive access to the dance hall. Nightclub Entry cards are stamped with
      the rejection notice.
    </p>
    <p>
      Upon entering the next room, we are approached by a staffer confusing us
      for applicants to play as the House Band, and are tasked with performing a
      song from a selection using comedic instruments like cat keyboards, dog
      guitars, and kazoos.
    </p>
    <p>
      Finally, we gain admission into the club and earn a glass of ambrosia
      (soda from Harmony Springs Soda) at the bar in the lobby, and receive our
      final stamp.
    </p>
    <p>
      With the stamp collection complete, a message is now legible spread across
      all three stamps reading <Clue>UV ON BACK</Clue>.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      Turning the Nightclub Entry card over and borrowing one of the UV lights
      from event attendees reveals the answer to this round,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(2n + 1) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
