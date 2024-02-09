import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/the-best-it/0.png';

const SLUG = 'the-best-it';
const ANSWER = `MERIT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is clearly an MIT trivia puzzle. We fill in the blanks with the
      answers, and extract by using the first given number.
    </p>
    <Table className="mit-table">
      <thead>
        <tr>
          <th>Answer</th>
          <th>Why?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            GRAY H<u>O</u>
            USE
          </td>
          <td>
            <a href="https://news.mit.edu/2002/grays-0522">Gray House named</a>
          </td>
        </tr>
        <tr>
          <td>
            <u>T</u>
            IM
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            KORNBLUT
            <u>H</u>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <u>E</u>
            AST
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            WO
            <u>R</u>
            MS
          </td>
          <td>
            <a href="https://bigidea.nianet.org/past-competition-themes/2022-forum-results">
              BIG Idea Challenge: 2022 results
            </a>
          </td>
        </tr>
        <tr>
          <td>
            ENGINEER
            <u>S</u>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            RI
            <u>C</u>
            HARD FEYNMAN
          </td>
          <td>MIT Undergrad, 1965 Nobel Prize for work on quantum electrodynamics</td>
        </tr>
        <tr>
          <td>
            MASEE
            <u>H</u> HALL
          </td>
          <td>
            Maseeh and Simmons are both open after midnight, but Maseeh is
            self-proclaimed more "convenient"
            <SheetableImage alt="" src={image0} title="" />
          </td>
        </tr>
        <tr>
          <td>
            DANCE TILL Y<u>O</u>U DROP
          </td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Traditions_and_student_activities_at_MIT">
              Traditions and student activities at MIT
            </a>
          </td>
        </tr>
        <tr>
          <td>
            PIAN
            <u>O</u>
          </td>
          <td>Baker House Piano Drop</td>
        </tr>
        <tr>
          <td>
            SI
            <u>L</u>
            VER GRAY
          </td>
          <td>
            <a href="https://brand.mit.edu/color">MIT Brand Guide&mdash;Color</a>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading the indexed letters tell us we need the <Clue>OTHER SCHOOL</Clue>.
    </p>
    <p>
      This might be a good time to mention that TTBNL has many members
      affiliated with Caltech (California Institute of Technology).
    </p>
    <p>
      The flavortext references a famous Caltech prank, where Caltech students
      made t-shirts that said "MIT" on the front, and "because not everyone can
      go to Caltech" on the back.
    </p>
    <p>
      This puzzle seems like straightforward trivia about MIT, but actually,
      it's trivia about Caltech!
    </p>
    <p>
      Filling in the (unenumerated) answers for Caltech, and indexing with the
      second number yields:
    </p>
    <Table className="caltech-table">
      <thead>
        <tr>
          <th>Answer</th>
          <th>Why?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            BL
            <u>A</u>
            CKER HOVSE
          </td>
          <td>
            <a href="https://en.wikipedia.org/wiki/House_system_at_the_California_Institute_of_Technology">
              House system at the California Institute of Technology
            </a>
          </td>
        </tr>
        <tr>
          <td>
            BER
            <u>N</u>
            OULLI
          </td>
          <td>
            <a href="https://gocaltech.com/news/2023/5/22/general-caltech-beaver-name-revealed-at-sunday-ceremony.aspx">
              It's Bernoulli! Caltech Beaver Name Revealed
            </a>
          </td>
        </tr>
        <tr>
          <td>
            RO
            <u>S</u>
            ENBAUM
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <u>W</u>
            EST
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            LATTIC
            <u>E</u>
          </td>
          <td>
            <a href="https://bigidea.nianet.org/past-competition-themes/2022-forum-results">
              BIG Idea Challenge: 2022 results
            </a>{' '}
            <br />
            LATTICE won for Visionary Concept
          </td>
        </tr>
        <tr>
          <td>
            BEAVE
            <u>R</u>S
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            RICHARD FEYN
            <u>M</u>
            AN
          </td>
          <td>
            Caltech Professor of Theoretical Physics, 1965 Nobel Prize in
            Quantum Electrodynamics
          </td>
        </tr>
        <tr>
          <td>
            R<u>E</u>D DOOR
          </td>
          <td>
            <a href="https://dining.caltech.edu/#hours-of-operation-83f1b780-tab">
              Caltech Dining Services&mdash;Hours of Operation
            </a>
          </td>
        </tr>
        <tr>
          <td>
            INTE
            <u>R</u>
            HOUSE
          </td>
          <td>
            <a href="https://www.admissions.caltech.edu/why-caltech/student-life/traditions-pranks">
              Traditions & Pranks
            </a>
          </td>
        </tr>
        <tr>
          <td>
            PUMPK
            <u>I</u>N
          </td>
          <td>Dabney Hovse Pumpkin Drop</td>
        </tr>
        <tr>
          <td>
            WHI
            <u>T</u>E
          </td>
          <td>
            <a href="https://www.trucolor.net/portfolio/southern-california-intercollegiate-athletic-conference-1915-1916-through-present/#california-institute-of-technology">
              Southern California Intercollegiate Athletic Conference (1915&ndash;1916
              through present)
            </a>
            <br />
            White isn't the official secondary color, but it is for athletics,
            and it's in the logo, so… close enough?
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading the extracted letters gives <Clue>ANSWER</Clue>{' '}
      <Answerize>{ANSWER}</Answerize>&mdash;because of course, the best institute of
      technology is merit-based!
    </p>
    <style jsx global>{`
      .mit-table td:nth-child(1),
      .caltech-table td:nth-child(1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
