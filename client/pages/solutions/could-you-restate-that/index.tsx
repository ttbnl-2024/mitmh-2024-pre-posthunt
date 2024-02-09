import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'could-you-restate-that';
const ANSWER = `GRAND OLD FLAG`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are given some question-marked enumerations next to some responses that
      suggest the speaker had not been very clear and should restate things.
      Using the enumerations and the meanings in those responses, we can
      reconstruct the literal, if questionably grammatical, questions using the
      provided word bank. The reconstructed phrases are actually Anguished
      English, a somewhat loose type of phonetic wordplay puzzle.
    </p>
    <p>
      Each anguished phrase can also be read (anguishedly) as the last name of
      the loser of a US presidential election (clued by the flavortext
      completion "It's not whether you win or lose"); and one or two anguished
      state nicknames. This lets us reorder by election year, and look at the
      total number of electoral votes earned by the candidate in those states.
    </p>
    <p>
      (People that lost in multiple years only earned electoral votes from those
      states in one year; Dewey lost in 2 consecutive elections but earned the
      same number of votes from the same states.)
    </p>
    <p>
      Finally, with the elections ordered, and applying electoral votes
      additively for those phrases containing two states, the number associated
      with each is a letter of the alphabet from 1 to 26, yielding a phrase that
      involves some other election losers who had won some electoral votes in
      other elections not used in the puzzle:{' '}
      <Clue>GORE AND DOLE DEAF LAG</Clue>.
    </p>
    <p>
      That phrase parses to the final enumeration, and the rejoinder confirms
      (in meaning and placement) that this will lead us to the final answer.
      Reading this phrase as a final Anguished English phrase will yield the
      final puzzle answer: <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <Table className="table-1">
        <thead>
          <tr>
            <th>Enum</th>
            <th>Rejoinder</th>
            <th>Question</th>
            <th>State Nickname(s), Election Losers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 5 4 3?</td>
            <td>
              That's a shame; even unfriendly sea dogs deserve commercial
              representation.
            </td>
            <td>AD DUMPS QUAY CUR?</td>
            <td>Adams [J], Quaker</td>
          </tr>
          <tr>
            <td>4 3 3 6?</td>
            <td>
              It did not compel us, but remedies WERE the primary issue we
              discussed.
            </td>
            <td>ALOE HAD YOU CAUCUS?</td>
            <td>Aloha, Dukakis</td>
          </tr>
          <tr>
            <td>3 4?</td>
            <td>You might call it that; it's where they keep their combs.</td>
            <td>BEE FORT?</td>
            <td>Beef, Ford</td>
          </tr>
          <tr>
            <td>5 5 3 5 3?</td>
            <td>
              For several reasons, yes. She's an uptown girl, and she is way
              more interested in highbrow dad jokes.
            </td>
            <td>CORNY HICK'S SON BORED HER?</td>
            <td>Corn, Nixon, Border</td>
          </tr>
          <tr>
            <td>6 3 4?</td>
            <td>No, silly - Allison married Liz, not that boy.</td>
            <td>DAVEY'S BOO LEON?</td>
            <td>Davis, Bullion</td>
          </tr>
          <tr>
            <td>2 2 3?</td>
            <td>
              Well, I did suggest our being "courteous", but not like that…
            </td>
            <td>DO WE SUE?</td>
            <td>Dewey, Sioux</td>
          </tr>
          <tr>
            <td>6 4 4, 6 4 6?</td>
            <td>Whoa! Do you really hate that Jedi's mullet that much?</td>
            <td>FIERCE STAB LUKE, HARASS HAIR REASON?</td>
            <td>First, Bluegrass, Harrison</td>
          </tr>
          <tr>
            <td>7 4 5, 5 3 3?</td>
            <td>
              Correct - despite eschewing communal weight training, they got
              their costumed housemates sick.
            </td>
            <td>FURRIES TONE ALONE. START ILL DEN?</td>
            <td>Freestone, Lone Star, Tilden</td>
          </tr>
          <tr>
            <td>2 6 5?</td>
            <td>
              Figuratively speaking, if the next part of the puzzle causes you
              much anguish, you might try that.
            </td>
            <td>GO FERRET WORDS?</td>
            <td>Gopher, Edwards</td>
          </tr>
          <tr>
            <td>4 5 3?</td>
            <td>OK, but when it's sunny, let 'er rip.</td>
            <td>GRAY DELAY GAS?</td>
            <td>Great Lake, Cass</td>
          </tr>
          <tr>
            <td>4, 5 4?</td>
            <td>Absolutely - winter icons are no lie.</td>
            <td>JACK, SANTA REAL?</td>
            <td>Jackson, Tar Heel</td>
          </tr>
          <tr>
            <td>2, 7 3 6 4 4 4?</td>
            <td>I hope not, son! Emanuel shouldn't attack any fried foods.</td>
            <td>MA, CANNOLI AND CHURRO WILL RAHM KNEE?</td>
            <td>Magnolia, Natural, Romney</td>
          </tr>
          <tr>
            <td>4 3, 5?</td>
            <td>Well, I can't rob the Union Pacific by myself, now can I?</td>
            <td>MORE MEN, BUTCH?</td>
            <td>Mormon, Bush [GHW]</td>
          </tr>
          <tr>
            <td>3, 6 4?</td>
            <td>
              Non merci, I prefer plants that are sweet but not insanely spicy.
            </td>
            <td>OUI, ATOMIC CANE?</td>
            <td>Wheat, McCain</td>
          </tr>
          <tr>
            <td>3 4, 5 5, 8?</td>
            <td>I do; no matter which you pull, all those estheticians die.</td>
            <td>SPA DEAD, EQUAL LEVER, AGREEING?</td>
            <td>Spotted Eagle, Evergreen</td>
          </tr>
          <tr>
            <td>4 3 6?</td>
            <td>No, just ears, as it is said.</td>
            <td>WALL HAS SPEECH?</td>
            <td>Wallace [WH], Peach</td>
          </tr>
          <tr>
            <td>4 3 5: 3 3?</td>
            <td>
              I suppose that perfume smells a bit fishy, but it's 100% herbal, I
              assure you.
            </td>
            <td>WE'VE HER SCENT: ANY EEL?</td>
            <td>Weaver, Centennial</td>
          </tr>
          <tr>
            <td>3 4, 4?</td>
            <td>
              You don't need an aficionado to tell you which end of that rhino
              is which.
            </td>
            <td>ZOO NERD, RUMP?</td>
            <td>Sooner, Trump</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table className="table-2">
        <thead>
          <tr>
            <th>State Nickname(s)</th>
            <th>Election Loser</th>
            <th>Year</th>
            <th>State</th>
            <th>Electoral Votes Won</th>
            <th>A1Z26</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quaker</td>
            <td>Adams [J]</td>
            <td>1800</td>
            <td>PA</td>
            <td>7</td>
            <td>G</td>
          </tr>
          <tr>
            <td>Tar Heel</td>
            <td>Jackson</td>
            <td>1824</td>
            <td>NC</td>
            <td>15</td>
            <td>O</td>
          </tr>
          <tr>
            <td>Bluegrass, First</td>
            <td>Harrison [WH]</td>
            <td>1836</td>
            <td>KY + DE</td>
            <td>12 + 6 = 18</td>
            <td>R</td>
          </tr>
          <tr>
            <td>Great Lake</td>
            <td>Cass</td>
            <td>1848</td>
            <td>MI</td>
            <td>5</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Bullion</td>
            <td>Davis</td>
            <td>1872</td>
            <td>MO</td>
            <td>1</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Lone Star, Freestone</td>
            <td>Tilden</td>
            <td>1876</td>
            <td>TX + CT</td>
            <td>8 + 6 = 14</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Centennial</td>
            <td>Weaver</td>
            <td>1892</td>
            <td>CO</td>
            <td>4</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Sioux</td>
            <td>Dewey</td>
            <td>1944 &amp; 1948</td>
            <td>ND</td>
            <td>4</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Corn, Border</td>
            <td>Nixon</td>
            <td>1960</td>
            <td>IA + ME</td>
            <td>10 + 5 = 15</td>
            <td>O</td>
          </tr>
          <tr>
            <td>Peach</td>
            <td>Wallace</td>
            <td>1968</td>
            <td>GA</td>
            <td>12</td>
            <td>L</td>
          </tr>
          <tr>
            <td>Beef</td>
            <td>Ford</td>
            <td>1976</td>
            <td>NE</td>
            <td>5</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Aloha</td>
            <td>Dukakis</td>
            <td>1988</td>
            <td>HI</td>
            <td>4</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Mormon</td>
            <td>Bush [GHW]</td>
            <td>1992</td>
            <td>UT</td>
            <td>5</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Gopher</td>
            <td>Edwards</td>
            <td>2004</td>
            <td>MN</td>
            <td>1</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Wheat</td>
            <td>McCain</td>
            <td>2008</td>
            <td>KS</td>
            <td>6</td>
            <td>F</td>
          </tr>
          <tr>
            <td>Magnolia, Natural</td>
            <td>Romney</td>
            <td>2012</td>
            <td>MS + AR</td>
            <td>6 + 6 = 12</td>
            <td>L</td>
          </tr>
          <tr>
            <td>Evergreen</td>
            <td>Spotted Eagle</td>
            <td>2016</td>
            <td>WA</td>
            <td>1</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Sooner</td>
            <td>Trump</td>
            <td>2020</td>
            <td>OK</td>
            <td>7</td>
            <td>G</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      .table-1 td:nth-child(1) {
        text-align: center;
      }
      .table-2 th:nth-child(3),
      .table-2 td:nth-child(3),
      .table-2 td:nth-child(n + 5) {
        text-align: center;
      }
      .table-2 td:nth-child(6) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
