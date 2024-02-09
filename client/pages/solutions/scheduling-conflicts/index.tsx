import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'scheduling-conflicts';
const ANSWER = `DEITING APP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => {
  return (
    <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
      <p>This metapuzzle uses the following answers:</p>
      <Table className="answers-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A More 6 &cup; 28 &cup; 496 &cup; …</td>
            <td>VOTE</td>
          </tr>
          <tr>
            <td>Cheerful Ruler's Kingdom</td>
            <td>SUGARED</td>
          </tr>
          <tr>
            <td>Game to Be Themed Later</td>
            <td>PAINTED EGG</td>
          </tr>
          <tr>
            <td>Intelligence Collection</td>
            <td>TUITION</td>
          </tr>
          <tr>
            <td>Musical Scores</td>
            <td>STEPHEN</td>
          </tr>
          <tr>
            <td>Puzzle with a Twist</td>
            <td>HARVEST</td>
          </tr>
          <tr>
            <td>Queen Marchesa to g4</td>
            <td>JOYFUL SPIRITS</td>
          </tr>
          <tr>
            <td>The Chromosome of a Highly Colored Fish's Eye</td>
            <td>MAILE VINES</td>
          </tr>
          <tr>
            <td>Time for a Drink!</td>
            <td>MATURATION</td>
          </tr>
          <tr>
            <td>Toy Chest</td>
            <td>TEDDY</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Each time a puzzle is solved, a drawing of a visiting cultural icon is
        unlocked on the round page. We notice that each date written in Janus's
        notebook belongs to a cultural calendar that could be used by one of the
        characters on the puzzle page. The dates themselves provide a reference
        point to each respective calendar by aligning with the starting date of
        the 2024 Mystery Hunt (January 12). Ordering by the dates given on the
        puzzle page,
      </p>
      <Table className="text-center dates-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Calendar</th>
            <th>Icon</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chaos 12 3190</td>
            <td>Discordian / Erisian</td>
            <td>Eris</td>
            <td>TEDDY</td>
          </tr>
          <tr>
            <td>01.12.2024</td>
            <td>American Gregorian</td>
            <td>Uncle Sam</td>
            <td>HARVEST</td>
          </tr>
          <tr>
            <td>Koki 2684 Mutsuki 12</td>
            <td>Traditional Japanese</td>
            <td>Datsue-ba</td>
            <td>MATURATION</td>
          </tr>
          <tr>
            <td>21 Onwa Ede Ajana 1024</td>
            <td>Igbo</td>
            <td>Ekwensu</td>
            <td>VOTE</td>
          </tr>
          <tr>
            <td>Hilo Ka'elo 2024</td>
            <td>Hawaiian Lunar</td>
            <td>Maui</td>
            <td>MAILE VINES</td>
          </tr>
          <tr>
            <td>1402 Dei 22</td>
            <td>Persian / Iranian / Solar Hijri</td>
            <td>Arash</td>
            <td>TUITION</td>
          </tr>
          <tr>
            <td>Aelius Antoninus 1889 Shemu Pachons 30</td>
            <td>Ancient Egyptian</td>
            <td>Wadjet</td>
            <td>PAINTED EGG</td>
          </tr>
          <tr>
            <td>30 Jumada Al-Thani 1445</td>
            <td>Islamic / Lunar Hijri</td>
            <td>Nuh</td>
            <td>SUGARED</td>
          </tr>
          <tr>
            <td>13 Quiahuitl Mazatl / 1 Toxcatl 12 Tecpatl</td>
            <td>Aztec / Xiuhpōhualli / Tōnalpōhualli</td>
            <td>Yacatecuhtli</td>
            <td>JOYFUL SPIRITS</td>
          </tr>
          <tr>
            <td>12.01.2024</td>
            <td>English Gregorian</td>
            <td>King Arthur</td>
            <td>STEPHEN</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Each feeder answer clues the starting date of a holiday or festival from
        the culture associated with the respective cultural icon. This is hinted
        at by "traditional holidays" and "the start of their vacations" in the
        flavor text. We also realize that each calendar system has a different
        definition of a week, clued by "more days in a week". The feeder answers
        have the same number of letters as the number of days of the week in
        their corresponding cultural calendar.
      </p>
      <p>
        If we look at the cultural icons in their order on the round page, the
        first letters read <Clue>NUM WEEKDAY</Clue>. Translating the dates of
        the clued holidays (in 2024) into the cultural calendars gives us a
        weekday. Since the answers are the same lengths as the cultures' weeks,
        we take the corresponding letter from the answer.
      </p>
      <p>
        For example, Eris is a figure from Discordian mythology. The Discordian
        calendar has 5 days in a week. The answer <Clue>TEDDY</Clue> has five
        letters. <Clue>TEDDY</Clue> also clues the holiday Teddy Bear Day which
        falls on the fourth day of the Discordian week in 2024. The fourth
        letter of <Clue>TEDDY</Clue> is <Clue>D</Clue>.
      </p>
      <p>
        This yields the solution to the icons' scheduling issues: a{' '}
        <Answerize>{ANSWER}</Answerize>.
      </p>
      <Table className="calendars-table text-center">
        <thead>
          <tr>
            <th>Calendar</th>
            <th>Answer</th>
            <th>Holiday</th>
            <th>2024 Date</th>
            <th>Weekday</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discordian / Erisian</td>
            <td>
              TED
              <u>D</u>Y
            </td>
            <td>Teddy Bear Day</td>
            <td>35 Bureaucracy</td>
            <td>4/5</td>
            <td>D</td>
          </tr>
          <tr>
            <td>American Gregorian</td>
            <td>
              HARV
              <u>E</u>
              ST
            </td>
            <td>Thanksgiving</td>
            <td>November 28</td>
            <td>5/7</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Traditional Japanese</td>
            <td>
              MATURAT
              <u>I</u>
              ON
            </td>
            <td>Coming of Age Day</td>
            <td>January 8</td>
            <td>8/10</td>
            <td>I</td>
          </tr>
          <tr>
            <td>Igbo</td>
            <td>
              VO
              <u>T</u>E
            </td>
            <td>Democracy Day</td>
            <td>June 12</td>
            <td>3/4</td>
            <td>T</td>
          </tr>
          <tr>
            <td>Hawaiian Lunar</td>
            <td>
              MA
              <u>I</u>
              LE VINES
            </td>
            <td>Lei Day</td>
            <td>May 1</td>
            <td>3/10</td>
            <td>I</td>
          </tr>
          <tr>
            <td>Persian / Iranian / Solar Hijri</td>
            <td>
              TUITIO
              <u>N</u>
            </td>
            <td>Student Day</td>
            <td>Azar 16</td>
            <td>7/7</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Ancient Egyptian</td>
            <td>
              PAINTED EG
              <u>G</u>
            </td>
            <td>Sham Ennessim</td>
            <td>Akhet Thoth 20</td>
            <td>10/10</td>
            <td>G</td>
          </tr>
          <tr>
            <td>Islamic / Lunar Hijri</td>
            <td>
              SUG
              <u>A</u>
              RED
            </td>
            <td>Eid al-Fitr</td>
            <td>Shawwal 1</td>
            <td>4/7</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Aztec / Xiuhpōhualli / Tōnalpōhualli</td>
            <td>
              JOYFUL S<u>P</u>
              IRITS
            </td>
            <td>Day of the Dead / Dia De Los Muertos</td>
            <td>8 Acatl Miquiztli / 10 Cuauhuitlehua</td>
            <td>8/13</td>
            <td>P</td>
          </tr>
          <tr>
            <td>English Gregorian</td>
            <td>
              STE
              <u>P</u>
              HEN
            </td>
            <td>Boxing Day / St. Stephen's Day</td>
            <td>December 26</td>
            <td>4/7</td>
            <td>P</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <AuthorsNotes>
        <p>
          To clarify a questionable entry, Boxing Day, also known as St.
          Stephen's Day, was the second entry to use the Gregorian calendar.
          This day also happens to fall on a Thursday in 2024, however, the
          official British week begins on a Monday, whereas the American week
          begins on a Sunday. This results in Thursday becoming the fourth
          weekday.
        </p>
        <p>
          The Islamic week is a notable point of interest as well. While many
          modern Muslim countries now begin their week on a Saturday, this is
          only a recent change. The week used to coincide with the Jewish and
          Christian week, with Muslims praying on a Friday at noon and resting
          on the Sabbath (Saturday). As such, Sunday was given the Arabic name
          al-Ahad meaning "the first" and was considered the beginning of the
          new week. After the Jewish / Muslim conflict began, the decision was
          made to shift the Islamic weekend a day backward to dissociate the two
          religions. As this puzzle has more of a focus on the traditional
          aspects of the calendars, we decided accordingly to use the convention
          where al-Ahad is the appropriately named first day and take al-Arba`a'
          as the fourth day of the week.
        </p>
        <p>
          Several interesting and fun calendars which were considered for this
          puzzle but ultimately rejected and replaced in testing instances due
          to inherent ambiguities, or an apparent lack of readily available
          information include:
        </p>
        <ul>
          <li>The Zoroastrian Calendar</li>
          <li>The Dungeons and Dragons Greyhawk Calendar</li>
          <li>The Chinese Lunar Calendar</li>
          <li>French Republican Calendar</li>
        </ul>
      </AuthorsNotes>
      <style jsx global>{`
        .answers-table td:nth-child(2),
        .dates-table td:nth-child(4),
        .calendars-table td:nth-child(2),
        .calendars-table td:nth-child(6) {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </Solution>
  );
};

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
