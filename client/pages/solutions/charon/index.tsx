import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'charon';
const ANSWER = `ESTATE SAILS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This meta uses the following answers:</p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Asphodel</td>
          <td>
            <Clue>LET IT SNOW</Clue>
          </td>
        </tr>
        <tr>
          <td>Do You Like Wordle?</td>
          <td>
            <Clue>GUTTURALS</Clue>
          </td>
        </tr>
        <tr>
          <td>Don't Know Much</td>
          <td>
            <Clue>TRAY CLOTH</Clue>
          </td>
        </tr>
        <tr>
          <td>GREEK COLUMNS</td>
          <td>
            <Clue>AESTHETIC</Clue>
          </td>
        </tr>
        <tr>
          <td>IV Guys</td>
          <td>
            <Clue>DRESSCOAT</Clue>
          </td>
        </tr>
        <tr>
          <td>Non-crossword</td>
          <td>
            <Clue>ARTILLERY</Clue>
          </td>
        </tr>
        <tr>
          <td>Poetic Justice</td>
          <td>
            <Clue>PLUTOCRAT</Clue>
          </td>
        </tr>
        <tr>
          <td>temporary name</td>
          <td>
            <Clue>RUSTY NAIL</Clue>
          </td>
        </tr>
        <tr>
          <td>The Laboratory</td>
          <td>
            <Clue>TELEGRAPH</Clue>
          </td>
        </tr>
        <tr>
          <td>Two Outs, Two Strikes, and...</td>
          <td>
            <Clue>DISTICHAL</Clue>
          </td>
        </tr>
        <tr>
          <td>Why The Romans Never Invented Logic Puzzles</td>
          <td>
            <Clue>RELAXANTS</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answers are all 9 letters long. The flavortext refers to the
      Phlegethon, one of the rivers of the underworld. We can arrange our
      answers to form the other 4 rivers: the Lethe, the Cocytus, the Styx, and
      the Acheron. These rivers are connected end to end and flow from the top
      water icon to the bottom water icon. Looking at the left bank and reading
      down, we see the answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Clue>T</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>E</Clue>
            </b>
          </td>
          <td className="bg-[#c9daf8]">
            <Clue>L</Clue>
          </td>
          <td className="bg-[#c9daf8]">
            <Clue>E</Clue>
          </td>
          <td>
            <Clue>G</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>P</Clue>
          </td>
          <td>
            <Clue>H</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>E</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>S</Clue>
            </b>
          </td>
          <td className="bg-[#c9daf8]">
            <Clue>T</Clue>
          </td>
          <td className="bg-[#c9daf8]">
            <Clue>H</Clue>
          </td>
          <td className="bg-[#c9daf8]">
            <Clue>E</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
          <td>
            <Clue>C</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>P</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
          <td>
            <Clue>U</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>T</Clue>
            </b>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>O</Clue>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>C</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>A</Clue>
            </b>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>Y</Clue>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>C</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>H</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>G</Clue>
          </td>
          <td>
            <Clue>U</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>T</Clue>
            </b>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>T</Clue>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>U</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>D</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>E</Clue>
            </b>
          </td>
          <td className="bg-[#a2c4c9]">
            <Clue>S</Clue>
          </td>
          <td className="bg-[#00ffff]">
            <Clue>S</Clue>
          </td>
          <td>
            <Clue>C</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>U</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>S</Clue>
            </b>
          </td>
          <td className="bg-[#a2c4c9]">
            <Clue>T</Clue>
          </td>
          <td className="bg-[#a2c4c9]">
            <Clue>Y</Clue>
          </td>
          <td>
            <Clue>N</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>E</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>A</Clue>
            </b>
          </td>
          <td className="bg-[#a2c4c9]">
            <Clue>X</Clue>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>N</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>D</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
          <td>
            <Clue>S</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>I</Clue>
            </b>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>C</Clue>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>H</Clue>
          </td>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>A</Clue>
          </td>
          <td>
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
          <td>
            <Clue>L</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>L</Clue>
            </b>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>E</Clue>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>R</Clue>
          </td>
          <td>
            <Clue>Y</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>L</Clue>
          </td>
          <td>
            <Clue>E</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
          <td>
            <Clue>T</Clue>
          </td>
          <td className="bg-[#00ff00]">
            <b>
              <Clue>S</Clue>
            </b>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>N</Clue>
          </td>
          <td className="bg-[#cfe2f3]">
            <Clue>O</Clue>
          </td>
          <td>
            <Clue>W</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
