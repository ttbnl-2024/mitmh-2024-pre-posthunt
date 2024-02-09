import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'dont-know-much';
const ANSWER = `TRAY CLOTH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle's title can be completed with the word, "History," and together
      with the first word of the flavor text, "Mark," plus a subsequent mention
      of "signs," as well as the numerous references to "On this site..." or
      "Near this spot..." throughout the puzzle itself, historical markers are
      strongly clued. The remainder of the flavor text, "the significance of its
      supposedly-noteworthy anecdote is: Hardly Meriting Diminutive Brainspace."
      suggests that we are looking for markers commemorating events of dubious
      historical significance.
    </p>
    <p>
      Indeed, the text of the puzzle's 19 anecdotes seem to be very strange. We
      can search for these stories online but would find no exact matches.
      However, some of the names in the anecdotes seem oddly specific, and some
      of the wording suggests that specific terms are being deliberately
      circumvented.
    </p>
    <p>
      We soon realize that each anecdote is a misinterpretation of the title of
      an actual historical marker that we can find online (for which the site
      hmdb.org&mdash;clued by the text "Hardly Meriting Diminutive Brainspace"&mdash;is
      invaluable). These are clued (as well as confirmed) by context clues and
      certain names and phrases from the anecdotes:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Marker Title / Link</th>
          <th>Quoted words/phrases</th>
          <th>Clues</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=98224">Accidental Oil Well</a>
          </td>
          <td>
            Weston, Newcastle, an old Maytag washing machine, died in 2005 at
            the age of 90
          </td>
          <td>drill bore, "black gold,"</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=154675">Battery Weed</a>
          </td>
          <td>Wadsworth, Richmond</td>
          <td>dandelions, thistles, electricity, AAs</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=214406">
              Bentonville Anti-Horse Thief Society
            </a>
          </td>
          <td>vigilante group, trustees nominated a captain</td>
          <td>
            midsize Arkansas metropolitan area, synonyms for Thief, types of
            horses
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=101082">
              Comic Cowboys of Mobile, The
            </a>
          </td>
          <td>
            Levi, Malice, the devastation of outrageous humor, masters of the
            art of caricature
          </td>
          <td>
            city on the Gulf, Tuesday in February or early March (only possible
            dates of Mardi Gras), Jester/clowns, chaps/spurs/ranch hands =
            cowboys, funny=comic
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=147718">
              Discovery of Cement
            </a>
          </td>
          <td>Bruce, Bruceville</td>
          <td>smithy, powdery substance mixing with water</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=151993">Flooded With Runs</a>
          </td>
          <td>ballpark, 1982, World Series</td>
          <td>
            racing to the restroom, intestinal distress, overflow, disgusting
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=215109">Gas Boom, The</a>
          </td>
          <td>Grant, Upland, Muncie, system of street lights</td>
          <td>explosion, heard, bloating, wind</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=96838">
              Great Indian Panhandle Scare of 1891, The
            </a>
          </td>
          <td>Texas, Claude (city), Armstrong (county)</td>
          <td>
            Southeast Asian cuisine/tikka masala = Indian food, oblique
            references to the handle of the pan, synonyms for Scare and Great,
            reference to a year
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=164801">
              Hunting Party Gone Wrong
            </a>
          </td>
          <td>
            Bradley, James, John, Paulding, a few miles downriver from this
            location, large cottonwood tree, crow, wrap(ped) in a blanket
          </td>
          <td>synonyms for Hunting Party, mistakes</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=174846">
              Iron Letters on the Church
            </a>
          </td>
          <td>Colonial Dames, hip roof</td>
          <td>
            Cain Hated Gable clues church, heated domestic implements clues
            iron, shapes that spell something clues letters
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=116092">
              Lost Whiskey of Raymond, The
            </a>
          </td>
          <td>
            Ray, Harry, owners of the local saloon, have searched for almost 150
            years
          </td>
          <td>Jack Daniels = whiskey, missing = lost</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=98202">
              Ms. Baker: Monkeynaut
            </a>
          </td>
          <td>a 300-mile altitude, on May 28, recovered unharmed</td>
          <td>
            slightly-misspelled Barker = Baker, macaque and marmoset = monkey
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=198131">
              Sad Monkey Railroad, The
            </a>
          </td>
          <td>
            Bailey, Grear, Burtz, Neblett, canyon, under a contract with the
            [state] Parks and Wildlife Department
          </td>
          <td>synonyms for railroad, monkey, and sad</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=116142">Sleep Interrupted</a>
          </td>
          <td>
            Baker, Hilgard, Billings, August 17th, 3:08 AM, she raced away,
            falling exhausted back into bed
          </td>
          <td>"sleep" specifically unmentioned</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=135372">
              Squirrel Hunters, The
            </a>
          </td>
          <td>
            Minutemen responded to the call to defend their homes in 1776, Tod,
            Cincinnati, 1,300, Brown County
          </td>
          <td>synonyms for squirrel, hunters/hunting</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=140427">State Seal Stolen</a>
          </td>
          <td>Fogarty, Capit[a]l</td>
          <td>
            landlocked location, "state" unmentioned, white bass (official fish
            of OK), synonyms for and descriptions of seals
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=119146">Stinky Stuff, The</a>
          </td>
          <td>
            Frederick, Carroll, Mountain City, prevailing northwesterly winds
          </td>
          <td>"That Noxious Substance" = the stinky stuff</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=62177">Tulip Disaster</a>
          </td>
          <td>Piney Point, William, converted lighthouse, Inigoes (city)</td>
          <td>Flaming Parrots = tulip varietal, calamity = disaster</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=123401">Woodstock</a>
          </td>
          <td>
            Eliot Rock, Ebenezer, Morris, John, Frizzel, Peter, Aspinwall, 1636
          </td>
          <td>
            Puritan = New England, descriptions mimicking Woodstock (1969)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We note that the titles of the markers are in alphabetical order (ignoring
      "the"). Having the titles means we can move on to extraction. We notice
      that, although there may be several numbers expressed numerically in each
      anecdote, there is always a single number expressed in writing, however,
      they are nonconsecutive with numerous repeats, signaling they are not an
      ordering mechanic but an indexing mechanic. Additionally, each of these
      events occurs in a very specific year, and the earliest and latest years
      (1636 and 1982, respectively) are given. This tells us to make note of the
      numbers and order the events by date:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1636</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=123401">Woodstock</a>
          </td>
          <td>38</td>
        </tr>
        <tr>
          <td>1699</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=174846">
              Iron Letters on the Church
            </a>
          </td>
          <td>12</td>
        </tr>
        <tr>
          <td>1818</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=147718">
              Discovery of Cement
            </a>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>1820</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=119146">Stinky Stuff, The</a>
          </td>
          <td>6</td>
        </tr>
        <tr>
          <td>1847</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=154675">Battery Weed</a>
          </td>
          <td>6</td>
        </tr>
        <tr>
          <td>1853</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=214406">
              Bentonville Anti-Horse Thief Society
            </a>
          </td>
          <td>9</td>
        </tr>
        <tr>
          <td>1862</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=135372">
              Squirrel Hunters, The
            </a>
          </td>
          <td>17</td>
        </tr>
        <tr>
          <td>1864</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=62177">Tulip Disaster</a>
          </td>
          <td>26</td>
        </tr>
        <tr>
          <td>1869</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=116092">
              Lost Whiskey of Raymond, The
            </a>
          </td>
          <td>6</td>
        </tr>
        <tr>
          <td>1876</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=164801">
              Hunting Party Gone Wrong
            </a>
          </td>
          <td>35</td>
        </tr>
        <tr>
          <td>1884</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=101082">
              Comic Cowboys of Mobile, The
            </a>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>1888</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=215109">Gas Boom, The</a>
          </td>
          <td>31</td>
        </tr>
        <tr>
          <td>1891</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=96838">
              Great Indian Panhandle Scare of 1891, The
            </a>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>1910</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=140427">State Seal Stolen</a>
          </td>
          <td>51</td>
        </tr>
        <tr>
          <td>1953</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=198131">
              Sad Monkey Railroad, The
            </a>
          </td>
          <td>5</td>
        </tr>
        <tr>
          <td>1959</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=98202">
              Ms. Baker: Monkeynaut
            </a>
          </td>
          <td>14</td>
        </tr>
        <tr>
          <td>1959</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=116142">Sleep Interrupted</a>
          </td>
          <td>8</td>
        </tr>
        <tr>
          <td>1966</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=98224">Accidental Oil Well</a>
          </td>
          <td>14</td>
        </tr>
        <tr>
          <td>1982</td>
          <td>
            <a href="https://www.hmdb.org/m.asp?m=151993">Flooded With Runs</a>
          </td>
          <td>33</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Using the number given as an index into the words (inscriptions) of the
      markers (not including the title)&mdash;as clued by "Mark my words" in the
      flavortext&mdash;we find that the first two give us <Clue>FIRST LETTERS</Clue>, so
      we proceed to take the first letters of the next several words:
    </p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Index</th>
          <th>Word</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1636</td>
          <td>Woodstock</td>
          <td>38</td>
          <td>FIRST</td>
          <td>FIRST</td>
        </tr>
        <tr>
          <td>1699</td>
          <td>Iron Letters on the Church</td>
          <td>12</td>
          <td>LETTERS</td>
          <td>LETTERS</td>
        </tr>
        <tr>
          <td>1818</td>
          <td>Discovery of Cement</td>
          <td>1</td>
          <td>AT</td>
          <td>A</td>
        </tr>
        <tr>
          <td>1820</td>
          <td>Stinky Stuff, The</td>
          <td>6</td>
          <td>NORTHWESTERLY</td>
          <td>N</td>
        </tr>
        <tr>
          <td>1847</td>
          <td>Battery Weed</td>
          <td>6</td>
          <td>STRUCTURE</td>
          <td>S</td>
        </tr>
        <tr>
          <td>1853</td>
          <td>Bentonville Anti-Horse Thief Society</td>
          <td>9</td>
          <td>WAS</td>
          <td>W</td>
        </tr>
        <tr>
          <td>1862</td>
          <td>Squirrel Hunters, The</td>
          <td>17</td>
          <td>EAST</td>
          <td>E</td>
        </tr>
        <tr>
          <td>1864</td>
          <td>Tulip Disaster</td>
          <td>26</td>
          <td>REPAIR</td>
          <td>R</td>
        </tr>
        <tr>
          <td>1869</td>
          <td>Lost Whiskey of Raymond, The</td>
          <td>6</td>
          <td>IN</td>
          <td>I</td>
        </tr>
        <tr>
          <td>1876</td>
          <td>Hunting Party Gone Wrong</td>
          <td>35</td>
          <td>SIDE</td>
          <td>S</td>
        </tr>
        <tr>
          <td>1884</td>
          <td>Comic Cowboys of Mobile, The</td>
          <td>1</td>
          <td>THIS</td>
          <td>T</td>
        </tr>
        <tr>
          <td>1888</td>
          <td>Gas Boom, The</td>
          <td>31</td>
          <td>RAPID</td>
          <td>R</td>
        </tr>
        <tr>
          <td>1891</td>
          <td>Great Indian Panhandle Scare of 1891, The</td>
          <td>1</td>
          <td>ALTHOUGH</td>
          <td>A</td>
        </tr>
        <tr>
          <td>1910</td>
          <td>State Seal Stolen</td>
          <td>51</td>
          <td>YEARS</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>1953</td>
          <td>Sad Monkey Railroad, The</td>
          <td>5</td>
          <td>CANYON</td>
          <td>C</td>
        </tr>
        <tr>
          <td>1959</td>
          <td>Ms. Baker: Monkeynaut</td>
          <td>14</td>
          <td>LAUNCHED</td>
          <td>L</td>
        </tr>
        <tr>
          <td>1959</td>
          <td>Sleep Interrupted</td>
          <td>8</td>
          <td>ON</td>
          <td>O</td>
        </tr>
        <tr>
          <td>1966</td>
          <td>Accidental Oil Well</td>
          <td>14</td>
          <td>THE</td>
          <td>T</td>
        </tr>
        <tr>
          <td>1982</td>
          <td>Flooded With Runs</td>
          <td>33</td>
          <td>HITS</td>
          <td>H</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This gives us the phrase: <Clue>ANSWER IS </Clue>
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .table-2 td:nth-child(2n + 1),
      .table-3 td:nth-child(-2n + 5) {
        text-align: center;
      }
      .table-3 td:nth-child(n + 4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
