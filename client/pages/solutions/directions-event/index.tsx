import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'directions-event';
const ANSWER = `OMEGA PHONE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The final event of the Mystery Hunt is a game of "Nero Says", where we are
      tasked with surviving a series of increasingly difficulty "Simon Says"
      challenges, without getting eliminated.
    </p>
    <p>
      Once players are eliminated, they are handed a "Worksheet of the Fallen"
      that reveals the real answer to the puzzle is hidden in the challenges.
    </p>
    <Table className="table-1">
      <tbody>
        <tr>
          <td>#</td>
          <td>Question</td>
          <td>Answer</td>
          <td>Explanation</td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            What television show was Nero referencing after blurting out a
            string of rapid-fire instructions?
          </td>
          <td>GILMORE GIRLS</td>
          <td>
            "Fast patter, like that one television show from the 2000s…no, not{' '}
            <i>West Wing</i>, the other one - the one with the hottie at the
            coffee shop and the nice woman who narrated the audiobook of{' '}
            <i>One Italian Summer</i>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            What was written on the note my assistant taped onto my back at the
            start of this little game of ours?
          </td>
          <td>NOTHING</td>
          <td>
            A note with the word "Nothing" on it is handed to a player who held
            a note for the longest in a previous phase
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            What type of puzzle will give you the answer to this Worksheet?
          </td>
          <td>ACROSTIC</td>
          <td>This answer is reinforcement for the mechanism of extraction</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Nero complained that someone should have been better at listening.
            Who was that?
          </td>
          <td>ORPHEUS</td>
          <td>
            "If only that poor boy from the Broadway musical had been as
            careful. Wait for this, wait for that, Wait for Me to say the
            command maybe!"
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            What phrase do you unlock if everyone fails after the first command?
          </td>
          <td>EASTER EGG</td>
          <td>
            After receiving the Worksheet of the Fallen instructions, if no one
            raises their right hands at the first instruction they will learn
            that "you've uncovered my game's little Easter Egg".
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>What was the fourth word of the day?</td>
          <td>OSCAR</td>
          <td>
            Identified through the opening monologue at the beginning of every
            loop
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            What letter did you spell out by correctly guessing whether you
            would move to the right or stay still?
          </td>
          <td>H (01000)</td>
          <td>
            A series of five commands ask players to either stay still, or move
            to the right. Treating staying still as 0 and moving as 1, that
            spells out the letter "H"
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            How do you spell the word for the vertical groove between your nose
            and mouth? You know, the one you should have pointed to, earlier.
          </td>
          <td>PHILTRUM</td>
          <td>One of the commands asks players to point to their philtrum.</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            When Nero reminded you that commands can't be chained together, they
            told you to treat their words like a…
          </td>
          <td>MAGICAL SPELL</td>
          <td>
            "Treat my words like a Magical Spell, if that makes it any easier
            for you."
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            Nero provided you with a series of "save states" to help{' '}
            <i>record</i> your progress. What musical commonality did those save
            states share?
          </td>
          <td>EVERMORE</td>
          <td>
            The three "save state" phrases that allow players to skip forward in
            the time loop are "Long Story Short", "Tolerate It", and
            "Closure".These are all songs off Taylor Swift's <i>Evermore</i>{' '}
            album, as clued by "record" your progress.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      For almost every aspect of this puzzle, the "Nero Says" challenge operates
      in a time loop, repeating the same questions with every new instance. One
      of the few exceptions to that is the opening dialogue, which gives a
      unique word of the day (starting at ROMEO and cycling through the NATO
      alphabet backwards), and instructions on swapping that read:
    </p>
    <ul>
      <li>"You should swap the first and fourth"</li>
      <li>"You should swa the second and ninth"</li>
      <li>"You should swap the third and fifth"</li>
      <li>"You should swap the sixth and eighth"</li>
    </ul>
    <br />
    <Table className="table-2">
      <tbody>
        <tr>
          <td>Original #</td>
          <td>New #</td>
          <td>Answer</td>
          <td>First Letter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>1</td>
          <td>ORPHEUS</td>
          <td>O</td>
        </tr>
        <tr>
          <td>9</td>
          <td>2</td>
          <td>MAGICAL SPELL</td>
          <td>M</td>
        </tr>
        <tr>
          <td>5</td>
          <td>3</td>
          <td>EASTER EGG</td>
          <td>E</td>
        </tr>
        <tr>
          <td>1</td>
          <td>4</td>
          <td>GILMORE GIRLS</td>
          <td>G</td>
        </tr>
        <tr>
          <td>3</td>
          <td>5</td>
          <td>ACROSTIC</td>
          <td>A</td>
        </tr>
        <tr>
          <td>8</td>
          <td>6</td>
          <td>PHILTRUM</td>
          <td>P</td>
        </tr>
        <tr>
          <td>7</td>
          <td>7</td>
          <td>H</td>
          <td>H</td>
        </tr>
        <tr>
          <td>6</td>
          <td>8</td>
          <td>OSCAR</td>
          <td>O</td>
        </tr>
        <tr>
          <td>2</td>
          <td>9</td>
          <td>NOTHING</td>
          <td>N</td>
        </tr>
        <tr>
          <td>10</td>
          <td>10</td>
          <td>EVERMORE</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Making those swaps to the Worksheet of the Fallen after collecting all the
      answers gives the final answer, <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <b>Acknowledgements:</b> This puzzle draws inspiration from Dimension 20's{' '}
      <i>Game Changer</i>, which played a similar game for groups of three called{' '}
      <i>
        <a href="https://www.youtube.com/watch?v=vT-zZsjwZKk">Sam Says</a>
      </i>
      .
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(1),
      .table-2 td:nth-child(-n + 2),
      .table-2 td:nth-child(4) {
        text-align: center;
      }
      .table-1 td:nth-child(3),
      .table-2 td:nth-child(n + 3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
