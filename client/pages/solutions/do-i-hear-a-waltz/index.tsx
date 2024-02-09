import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'do-i-hear-a-waltz';
const ANSWER = `ALONE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The MP3s are in alphabetical order by song, ignoring articles. The songs
      are each from a different Sondheim musical (which the title helps clue):
    </p>
    <Table>
      <thead>
        <tr>
          <th>Song</th>
          <th>Musical</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Comedy Tonight</td>
          <td>A Funny Thing Happened on the Way to the Forum</td>
        </tr>
        <tr>
          <td>Finishing the Hat</td>
          <td>Sunday in the Park with George</td>
        </tr>
        <tr>
          <td>Getting Married Today</td>
          <td>Company</td>
        </tr>
        <tr>
          <td>Good Thing Going</td>
          <td>Merrily We Roll Along</td>
        </tr>
        <tr>
          <td>I'm Still Here</td>
          <td>Follies</td>
        </tr>
        <tr>
          <td>Johanna</td>
          <td>Sweeney Todd</td>
        </tr>
        <tr>
          <td>Loving You</td>
          <td>Passion</td>
        </tr>
        <tr>
          <td>A Parade in Town</td>
          <td>Anyone Can Whistle</td>
        </tr>
        <tr>
          <td>Pretty Lady</td>
          <td>Pacific Overtures</td>
        </tr>
        <tr>
          <td>Send in the Clowns</td>
          <td>A Little Night Music</td>
        </tr>
        <tr>
          <td>Unworthy of Your Love</td>
          <td>Assassins</td>
        </tr>
      </tbody>
    </Table>

    <p>Next, solve the cryptic clues:</p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cat's sound? Cat's sound, for some reason (7)</td>
          <td>PURPOSE</td>
          <td>PURR + PUSS homonym</td>
        </tr>
        <tr>
          <td>"Day on the weekend is (yuck!) low grade" ...happy? (9)</td>
          <td>SATISFIED</td>
          <td>SAT + IS + FIE + D</td>
        </tr>
        <tr>
          <td>Develop my spinning wheel on two-person trip? (9)</td>
          <td>HONEYMOON</td>
          <td>HONE + YM (rev) + O + ON</td>
        </tr>
        <tr>
          <td>Guess is not reinterpreted over good ideas (11) </td>
          <td>SUGGESTIONS</td>
          <td>SU(G)ESTIONS (GUESS IS NOT anag.)</td>
        </tr>
        <tr>
          <td>Lead’s dialogue is front page news! (9)</td>
          <td>HEADLINES</td>
          <td>HEAD + LINES</td>
        </tr>
        <tr>
          <td>Non-waterproof coating for tent is significant (10)</td>
          <td>POTENTOUS</td>
          <td>POR(TENT)OUS</td>
        </tr>
        <tr>
          <td>Primary accounts describe beheaded noble lots and lots (9)</td>
          <td>MOUNTAINS</td>
          <td>M(cOUNT)AINS</td>
        </tr>
        <tr>
          <td>Soft, quick utterance is entirely timely, to start with (5)</td>
          <td>QUIET</td>
          <td>(initials)</td>
        </tr>
        <tr>
          <td>
            Strange devotee with a quirk taking a test contrarily in Alabama
            (11)
          </td>
          <td>FANTASTICAL</td>
          <td>FAN + TIC with SAT backwards inside, AL</td>
        </tr>
        <tr>
          <td>"Threads", say, travel OK! (7)</td>
          <td>APPROVE</td>
          <td>APP + ROVE</td>
        </tr>
        <tr>
          <td>Trying to obtain information hiding in ending (9)</td>
          <td>FINISHING</td>
          <td>F(IN)ISHING</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The cryptic clue answers are all words that appear in the lyrics of the
      above songs. Match the answers to the MP3s. Notice that the songs all cut
      off in weird spots. This alerts us to the fact that we should use the
      number of notes in each MP3 to index into the word. Finally, reorder the
      letters, sorting chronologically by the year they premiered to get{' '}
      <Clue>NO ONE IS THIS</Clue>. This is a reference to a song title from
      "Into the Woods". The answer is the blank: <Answerize>ALONE</Answerize>.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Year</th>
          <th>Musical</th>
          <th>Song</th>
          <th>Lyric</th>
          <th># Notes</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1962</td>
          <td>A Funny Thing Happened on the Way to the Forum</td>
          <td>Comedy Tonight</td>
          <td>PORTENTOUS</td>
          <td>6</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>1964</td>
          <td>Anyone Can Whistle</td>
          <td>A Parade in Town</td>
          <td>SUGGESTIONS</td>
          <td>9</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>1970</td>
          <td>Company</td>
          <td>Getting Married Today</td>
          <td>HONEYMOON</td>
          <td>8</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>1971</td>
          <td>Follies</td>
          <td>I’m Still Here</td>
          <td>HEADLINES</td>
          <td>7</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>1973</td>
          <td>A Little Night Music</td>
          <td>Send in the Clowns</td>
          <td>APPROVE</td>
          <td>7</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1976</td>
          <td>Pacific Overtures</td>
          <td>Pretty Lady</td>
          <td>FANTASTICAL</td>
          <td>8</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>1979</td>
          <td>Sweeney Todd</td>
          <td>Johanna</td>
          <td>SATISFIED</td>
          <td>5</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>1981</td>
          <td>Merrily We Roll Along</td>
          <td>Good Thing Going</td>
          <td>QUIET</td>
          <td>5</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1984</td>
          <td>Sunday in the Park with George</td>
          <td>Finishing the Hat</td>
          <td>FINISHING</td>
          <td>6</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>1991</td>
          <td>Assassins</td>
          <td>Unworthy of Your Love</td>
          <td>MOUNTAINS</td>
          <td>7</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>1994</td>
          <td>Passion</td>
          <td>Loving You</td>
          <td>PURPOSE</td>
          <td>6</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      #extraction td:nth-child(1),
      #extraction th:nth-child(5),
      #extraction td:nth-child(5),
      #extraction td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
