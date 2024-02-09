import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'take-two';
const ANSWER = `DENSITY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>Each clue has 3 parts:</p>
    <ul>
      <li>The first and second parts are clued together as a word;</li>
      <li>The second part is clued alongside something meaning "double";</li>
      <li>The second and third parts are clued together as a word.</li>
    </ul>
    <p>
      The first and third parts are the same, and are not necessarily a word on
      their own, and all 3 parts together do not necessarily make a word. The
      enumerations given alongside the clue are for the lengths of each part and
      the two words formed.
    </p>
    <p>
      For example, the given clue at the top, "Goneril's dad doubles a corncob,
      remains a member of the nobility" can be answered as Goneril's dad ={' '}
      <Clue>LEAR</Clue>, doubles a corn cob = <Clue>EAR EAR</Clue>, member of
      the nobility = <Clue>EARL</Clue>, which we would enter in the blanks as{' '}
      <Clue>L(EAR)L</Clue>.
    </p>
    <Table className="answers-table">
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frankfurt citizen needs two guys for feeding animals.</td>
          <td>GER(MAN)GER</td>
        </tr>
        <tr>
          <td>Family trending twice with tattoos.</td>
          <td>K(IN)K</td>
        </tr>
        <tr>
          <td>
            Cheese for the two beavers' work, and Agatha Christie, for example.
          </td>
          <td>E(DAM)E</td>
        </tr>
        <tr>
          <td>Two-part paired commercial URL, informally.</td>
          <td>DY(AD)DY</td>
        </tr>
        <tr>
          <td>Grey Spanish tea for two, but can I charge it?</td>
          <td>SLA(TE)SLA</td>
        </tr>
        <tr>
          <td>Ancient instrument as regards (again) trust.</td>
          <td>LY(RE)LY</td>
        </tr>

        <tr style={{ borderTop: '2px solid black' }}>
          <td>James Olmos needs two foster children to be kept safe.</td>
          <td>ED(WARD)ED</td>
        </tr>
        <tr>
          <td>Friday villain's twin boys hook up with barbarian woman.</td>
          <td>JA(SON)JA</td>
        </tr>
        <tr>
          <td>Can concerning couple get a new loan, shortly?</td>
          <td>FI(RE)FI</td>
        </tr>
        <tr>
          <td>
            On horseback, a pair of financial services companies star opposite
            Humphrey.
          </td>
          <td>RID(ING)RID</td>
        </tr>
        <tr>
          <td>Rent doubles. No worries. Back to the drawing board!</td>
          <td>L(EASE)L</td>
        </tr>

        <tr style={{ borderTop: '2px solid black' }}>
          <td>Travel document, one pair, and a rental car.</td>
          <td>VIS(A)VIS</td>
        </tr>
        <tr>
          <td>Three, make that two Spanish rivers go mad.</td>
          <td>T(RIO)T</td>
        </tr>
        <tr>
          <td>
            How tall are the twins together at sixteen? Second to last in a
            class of nine.
          </td>
          <td>H(EIGHT)H</td>
        </tr>

        <tr style={{ borderTop: '2px solid black' }}>
          <td>Whisper to a friend: "There are two in March. Plans!"</td>
          <td>AS(IDE)AS</td>
        </tr>
        <tr>
          <td>Holding money for two birds. The Black ones rock!</td>
          <td>ES(CROW)ES</td>
        </tr>
        <tr>
          <td>Can't move a couple of Friars? Put them to bed!</td>
          <td>S(TUCK)S</td>
        </tr>
        <tr>
          <td>Sticker doubles ten decibels, often before Donna.</td>
          <td>LA(BEL)LA</td>
        </tr>
        <tr>
          <td>Gem and two friends start the birthplace of silicon valley.</td>
          <td>O(PAL)O</td>
        </tr>
        <tr>
          <td>
            Before my children and you, a short couple dashes to join the army.
          </td>
          <td>LIST(EN)LIST</td>
        </tr>
      </tbody>
    </Table>
    <p>
      When entered into the blanks, the shaded middle squares spell{' '}
      <Clue>MIDDLE WORDS ARE DOUBLE</Clue>, confirming our answers and method of
      entry. The numbered squares, when entered in the spaces below the puzzle,
      form the cluephrase <Clue>ARCHIMEDES EUREKA DISCOVERY</Clue>, with an
      answer 7 letters long. This clues the final answer:{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .answers-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
