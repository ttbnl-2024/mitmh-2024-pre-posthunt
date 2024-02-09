import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'shade-of-wealth';
const ANSWER = `RAPPEL TO RAMPARTS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    {/* TODO: unify metapuzzle list of used puzzles*/}
    <p>This metapuzzle uses the following puzzles:</p>
    <Table className="puzzles-table">
      <thead>
        <tr>
          <th>Puzzle Title (and Casino)</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Casino Royale</td>
          <td>DISTILLER</td>
        </tr>
        <tr>
          <td>Circus Circus</td>
          <td>PLOVER</td>
        </tr>
        <tr>
          <td>Encore</td>
          <td>TOWROPE</td>
        </tr>
        <tr>
          <td>Excalibur</td>
          <td>AURICLE</td>
        </tr>
        <tr>
          <td>Flamingo</td>
          <td>RANI</td>
        </tr>
        <tr>
          <td>Harrah's</td>
          <td>LORILET</td>
        </tr>
        <tr>
          <td>The Linq</td>
          <td>EGRET</td>
        </tr>
        <tr>
          <td>Luxor</td>
          <td>KETCHUP</td>
        </tr>
        <tr>
          <td>Mandalay Bay</td>
          <td>SUN</td>
        </tr>
        <tr>
          <td>MGM Grand</td>
          <td>MANDIBLE</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>MOTOWN</td>
        </tr>
        <tr>
          <td>Planet Hollywood</td>
          <td>PINDO</td>
        </tr>
        <tr>
          <td>Sahara</td>
          <td>NAGARA</td>
        </tr>
        <tr>
          <td>The Strat</td>
          <td>MERMAN</td>
        </tr>
        <tr>
          <td>Venetian</td>
          <td>POULT</td>
        </tr>
        <tr>
          <td>Wynn</td>
          <td>HERRING</td>
        </tr>
      </tbody>
    </Table>

    <p>
      We should notice (with help from the word "strip" in the flavor text) the
      puzzle titles are all the names of casinos on the Las Vegas Strip, and are
      presented in alphabetical order. This suggests a reordering by location on
      the Las Vegas Strip, as shown in the table below.
    </p>

    <p>
      We look up the given date December 9, 2019, with "doodle" (or look through
      the archive of Google Doodles) to find the{' '}
      <a href="https://www.google.com/doodles/celebrating-loteria">
        Google Doodle version of the Mexican bingo-like game Lotería
      </a>
      .
    </p>
    <p>
      We match each answer by association to the name of one of the Lotería
      cards from the Google Doodle. The fact that each answer is the same length
      as the Lotería card name (without article) indicates to look for letters
      in the answer which match the letter in the same place in the card name,
      and finding one in each confirms it. We extract these letters in Strip
      order (north to south) to spell the answer.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Casino</th>
          <th>Answer</th>
          <th>Card</th>
          <th>Meaning</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Strat</td>
          <td>
            ME
            <u>R</u>
            MAN
          </td>
          <td>
            SI
            <u>R</u>
            ENA
          </td>
          <td>mermaid</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Sahara</td>
          <td>
            N<u>A</u>
            GARA
          </td>
          <td>
            T<u>A</u>
            MBOR
          </td>
          <td>drum</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Circus Circus</td>
          <td>
            <u>P</u>
            LOVER
          </td>
          <td>
            <u>P</u>
            AJARO
          </td>
          <td>bird</td>
          <td>P</td>
        </tr>
        <tr>
          <td>Encore</td>
          <td>
            TOWRO
            <u>P</u>E
          </td>
          <td>
            CHALU
            <u>P</u>A
          </td>
          <td>canoe</td>
          <td>P</td>
        </tr>
        <tr>
          <td>Wynn</td>
          <td>
            H<u>E</u>
            RRING
          </td>
          <td>
            P<u>E</u>
            SCADO
          </td>
          <td>fish</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Venetian</td>
          <td>
            POU
            <u>L</u>T
          </td>
          <td>
            GAL
            <u>L</u>O
          </td>
          <td>rooster</td>
          <td>L</td>
        </tr>
        <tr>
          <td>Casino Royale</td>
          <td>
            DIS
            <u>T</u>
            ILLER
          </td>
          <td>
            CAN
            <u>T</u>
            ARITO
          </td>
          <td>water pitcher</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Harrah's</td>
          <td>
            L<u>O</u>
            RILET
          </td>
          <td>
            C<u>O</u>
            TORRO
          </td>
          <td>parrot</td>
          <td>O</td>
        </tr>
        <tr>
          <td>The Linq</td>
          <td>
            EG
            <u>R</u>
            ET
          </td>
          <td>
            GA
            <u>R</u>
            ZA
          </td>
          <td>heron</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Flamingo</td>
          <td>
            R<u>A</u>
            NI
          </td>
          <td>
            D<u>A</u>
            MA
          </td>
          <td>lady</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>
            <u>M</u>
            OTOWN
          </td>
          <td>
            <u>M</u>
            USICO
          </td>
          <td>musician</td>
          <td>M</td>
        </tr>
        <tr>
          <td>Planet Hollywood</td>
          <td>
            <u>P</u>
            INDO
          </td>
          <td>
            <u>P</u>
            ALMA
          </td>
          <td>palm tree</td>
          <td>P</td>
        </tr>
        <tr>
          <td>MGM Grand</td>
          <td>
            M<u>A</u>
            NDIBLE
          </td>
          <td>
            C<u>A</u>
            LAVERA
          </td>
          <td>skull</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Excalibur</td>
          <td>
            AU
            <u>R</u>
            ICLE
          </td>
          <td>
            CO
            <u>R</u>
            AZON
          </td>
          <td>heart</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Luxor</td>
          <td>
            KE
            <u>T</u>
            CHUP
          </td>
          <td>
            BO
            <u>T</u>
            ELLA
          </td>
          <td>bottle</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Mandalay Bay</td>
          <td>
            <u>S</u>
            UN
          </td>
          <td>
            <u>S</u>
            OL
          </td>
          <td>sun</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Some answers can match more than one Lotería card; for example,{' '}
      <Clue>EGRET</Clue> could also match <Clue>PAJARO</Clue> (a generic bird).
      But in these cases only one is the correct length.
    </p>
    <p>
      The answer is <Answerize>{ANSWER}</Answerize>, a pun on RAM PARTS, since
      we would expect to find a statue of the golden-wooled winged ram
      Chrysomallos at the Golden Fleece Casino.
    </p>
    <AuthorsNotes>
      <p>
        Growing up in South Texas, I experienced some elements of Mexican
        culture, including Lotería, and I've long thought it was great subject
        matter for a puzzle. However, the original 19th century card set
        includes some images and terms not acceptable by modern standards, so I
        chose to reference the cleansed version Google presented. All the cards
        actually used are in the original game, so if you happen to be using
        that list, the puzzle still works.
      </p>
    </AuthorsNotes>

    <style jsx global>{`
      .puzzles-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .solution-table td:nth-child(2),
      .solution-table td:nth-child(3),
      .solution-table td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
