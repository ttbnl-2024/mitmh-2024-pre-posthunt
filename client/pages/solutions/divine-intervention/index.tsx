import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'divine-intervention';
const ANSWER = `AFFIED`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      First, we match the 14 listed deities to the prayers they are receiving.
      Some of the minor gods/goddesses have very specific domains, and will be
      easy to match, while others have broader domains and may be more
      difficult. Note that Roman deity names are used for Romans/Roman versions
      of names (#6 Ulysses, #11 Romulus, #13 Livia Drusilla, and #14 Julius
      Caesar), while Greek names are used for famous Greeks. The correct order
      is:
    </p>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Deity</th>
          <th>Domain</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Clue>HERA</Clue>
          </td>
          <td>Childbirth, motherhood</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <Clue>IOKE</Clue>
          </td>
          <td>Onslaught, battle-tumult, routing, and pursuit</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <Clue>DIONYSUS</Clue>
          </td>
          <td>Theatre</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <Clue>DEMETER</Clue>
          </td>
          <td>Harvest</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <Clue>EREBOS</Clue>
          </td>
          <td>Darkness</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <Clue>NEPTUNE</Clue>
          </td>
          <td>Seafaring</td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <Clue>ACHLYS</Clue>
          </td>
          <td>Poison</td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <Clue>NOMOS</Clue>
          </td>
          <td>The law</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <Clue>ARISTAEUS</Clue>
          </td>
          <td>Beekeepers/beekeeping</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <Clue>GERAS</Clue>
          </td>
          <td>Old age</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <Clue>ROMA</Clue>
          </td>
          <td>City of Rome</td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            <Clue>APOLLO</Clue>
          </td>
          <td>Plagues of mice</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            <Clue>MERCURY</Clue>
          </td>
          <td>Travellers</td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            <Clue>SOMNUS</Clue>
          </td>
          <td>Sleep</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The first letters of the deities spell <Clue>HIDDEN ANAGRAMS</Clue>,
      cluing the next step.
    </p>
    <p>
      These prayers could be offered to the deities in question, but they could
      also be offered to various saints of the Catholic Church, who are
      designated as either the patron saints of a particular subject, or an
      intercessor for a particular type of prayer. Saints are also clued in the
      flavortext ("...sometimeS AIN'T Simple…"); and in the later part of the
      puzzle by the Catholic canonical hours.
    </p>
    <p>
      Because there are often numerous saints whose patronage covers the same
      subject (for example, there are at least nine patron saints of farmers,
      three of beekeepers, etc.), the <Clue>HIDDEN ANAGRAMS</Clue> are used to
      help sort out which saint is which. Additionally, occasional clues to the
      saint's identity (in the form of other patronages they hold or other
      details about their lives) are included in each scenario.
    </p>
    <p>
      In all cases, we have used the saint's name as it first appears on their
      Wikipedia entry at time of writing (so, for example,{' '}
      <Clue>ALBINUS OF ANGERS</Clue> and not just <Clue>ALBINUS</Clue>).
    </p>
    <p>The hidden saint names are:</p>
    <Table>
      <thead>
        <tr>
          <th>Saint Name</th>
          <th>Saint Anagram</th>
          <th>Patron of/Intercessor for</th>
          <th>Additional Traits Referenced</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Clue>JULIANA OF NICOMEDIA</Clue>
          </td>
          <td>
            <Clue>FOLIO AMNIA JAUNDICE</Clue>
          </td>
          <td>Childbirth</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>JOAN OF ARC</Clue>
          </td>
          <td>
            <Clue>CON A JAR OF</Clue>
          </td>
          <td>Soldiers in battle</td>
          <td>Especially female soldiers</td>
        </tr>
        <tr>
          <td>
            <Clue>GENESIUS</Clue>
          </td>
          <td>
            <Clue>GENIUSES</Clue>
          </td>
          <td>Actors</td>
          <td>Specifically tragic actors (Sophocles wrote tragedy)</td>
        </tr>
        <tr>
          <td>
            <Clue>WALSTAN</Clue>
          </td>
          <td>
            <Clue>LAWN SAT</Clue>
          </td>
          <td>Farmers</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>GILES</Clue>
          </td>
          <td>
            <Clue>LEGS I</Clue>
          </td>
          <td>Against Fear of Darkness</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>ALBINUS OF ANGERS</Clue>
          </td>
          <td>
            <Clue>GONERS A BASINFUL</Clue>
          </td>
          <td>Against Pirate Attacks</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>BENEDICT OF NURSIA</Clue>
          </td>
          <td>
            <Clue>UNFAIR BODICE SENT</Clue>
          </td>
          <td>Against Poison</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>THOMAS MORE</Clue>
          </td>
          <td>
            <Clue>TEAM SHROOM</Clue>
          </td>
          <td>Lawyers</td>
          <td>Also difficult marriages</td>
        </tr>
        <tr>
          <td>
            <Clue>AMBROSE OF MILAN</Clue>
          </td>
          <td>
            <Clue>FRAIL MOONBEAMS</Clue>
          </td>
          <td>Beekeepers</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>ANTHONY OF PADUA</Clue>
          </td>
          <td>
            <Clue>UNHANDY OAF ATOP</Clue>
          </td>
          <td>The elderly</td>
          <td>Also those who are lost</td>
        </tr>
        <tr>
          <td>
            <Clue>MARTINA OF ROME</Clue>
          </td>
          <td>
            <Clue>FOR A MAIN METRO</Clue>
          </td>
          <td>The City of Rome</td>
          <td>Also nursing mothers</td>
        </tr>
        <tr>
          <td>
            <Clue>GERTRUDE OF NIVELLES</Clue>
          </td>
          <td>
            <Clue>REVELLERS INTO FUDGE</Clue>
          </td>
          <td>Against plagues of mice</td>
          <td>Especially field mice</td>
        </tr>
        <tr>
          <td>
            <Clue>CHRISTOPHER</Clue>
          </td>
          <td>
            <Clue>RICH PORT SHE</Clue>
          </td>
          <td>Travellers</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>DYMPHNA</Clue>
          </td>
          <td>
            <Clue>PAD HYMN</Clue>
          </td>
          <td>Against Insomnia</td>
          <td>Also sleep generally</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once the saint names have been correctly identified, the extraction
      mechanic from the times the prayers were received can be used. Each
      canonical hour roughly translates to a time of day on the 24-hour clock:
    </p>
    <ul>
      <li>Vigil (eighth hour of night: 2 a.m.)</li>
      <li>Matins (a later portion of Vigil, from 3 a.m. to dawn)</li>
      <li>Lauds (dawn; approximately 5 a.m., but varies seasonally)</li>
      <li>
        Prime (early morning, the first hour of daylight, approximately 6 a.m.)
      </li>
      <li>Terce (third hour, 9 a.m.)</li>
      <li>Sext (sixth hour, noon, 12 p.m.)</li>
      <li>Nones (ninth hour, 3 p.m./15:00)</li>
      <li>Vespers (sunset, approximately 6 p.m./18:00)</li>
      <li>
        Compline (end of the day before retiring, approximately 7 p.m./19:00)
      </li>
    </ul>
    <p>
      The times listed either correspond to these times (Terce = 9 AM = 9) or
      have had a number of letters removed to correspond with the number of
      hours prior to the canonical hour ( "Vespe" = Vespers (18:00) minus two
      letters (-2:00), or 16). We assign the prayer time to the saint in order,
      and extract by indexing:
    </p>
    <Table className="final-table">
      <thead>
        <tr>
          <th>Saint</th>
          <th>Prayers Received at</th>
          <th>Translation</th>
          <th>Time/Number</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Clue>JULIANA OF NICOMEDIA</Clue>
          </td>
          <td>Vespers</td>
          <td>Vespers</td>
          <td>18</td>
          <td>
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>JOAN OF ARC</Clue>
          </td>
          <td>Laud</td>
          <td>Lauds - 1</td>
          <td>4</td>
          <td>
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>GENESIUS</Clue>
          </td>
          <td>Lauds</td>
          <td>Lauds</td>
          <td>5</td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>WALSTAN</Clue>
          </td>
          <td>Vigi</td>
          <td>Vigil - 1</td>
          <td>1</td>
          <td>
            <Clue>W</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>GILES</Clue>
          </td>
          <td>Laud</td>
          <td>Lauds - 1</td>
          <td>4</td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ALBINUS OF ANGERS</Clue>
          </td>
          <td>None</td>
          <td>Nones - 1</td>
          <td>14</td>
          <td>
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>BENEDICT OF NURSIA</Clue>
          </td>
          <td>Prime</td>
          <td>Prime</td>
          <td>6</td>
          <td>
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>THOMAS MORE</Clue>
          </td>
          <td>Prime</td>
          <td>Prime</td>
          <td>6</td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>AMBROSE OF MILAN</Clue>
          </td>
          <td>Non</td>
          <td>Nones - 2</td>
          <td>13</td>
          <td>
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ANTHONY OF PADUA</Clue>
          </td>
          <td>Terce</td>
          <td>Terce</td>
          <td>9</td>
          <td>
            <Clue>F</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>MARTINA OF ROME</Clue>
          </td>
          <td>Terce</td>
          <td>Terce</td>
          <td>9</td>
          <td>
            <Clue>F</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>GERTRUDE OF NIVELLES</Clue>
          </td>
          <td>Sext</td>
          <td>Sext</td>
          <td>12</td>
          <td>
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>CHRISTOPHER</Clue>
          </td>
          <td>Se</td>
          <td>Sext - 2</td>
          <td>10</td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>DYMPHNA</Clue>
          </td>
          <td>Vigi</td>
          <td>Vigil - 1</td>
          <td>1</td>
          <td>
            <Clue>D</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Yielding <Clue>ANSWER IS </Clue> <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        Note that just filling in the unaltered canonical hours would be enough
        to yield <Clue>A?S???IS?FFI??</Clue>, which an astute team could likely
        intuit was <Clue>ANSWERIS?FFI??</Clue> offering an additional clue to
        how the extraction mechanic works.
      </p>
      <p>Likely pitfalls: </p>
      <ul>
        <li>
          Attempting to extract from the Greco-Roman deity names as opposed to
          saint names (mitigating factor: I have used the highest possible
          number for each extraction, some of which are higher numbers than the
          deities' names contain),
        </li>
        <li>
          Selecting incorrect saints or incorrect nomenclature of saints
          (mitigating factor: as above, certain saints' names do not contain
          enough letters without their "of [location]," several saints should be
          easy to identify along with their "hidden anagrams," which should get
          people looking for anagrams to verify their saint choices),
        </li>
        <li>
          Mistaking the canonical hours' names as their numbers, for example,
          Prime as 1 instead of 2, Terce as 3 instead of 9, Sext as 6 instead of
          12, Nones as 9 instead of 15 (mitigating factor: I have tried wherever
          possible to include the hours Vigil, Lauds, and Vespers, whose
          etymology is non-numeric).
        </li>
      </ul>
    </AuthorsNotes>
    <style jsx global>{`
      .final-table td:nth-child(4),
      .final-table td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
