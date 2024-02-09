import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'persephone';
const ANSWER = `PALM A GRANITE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The answers to the puzzles in this round are:</p>

    <Table>
      <tbody>
        <tr>
          <td>A Process of Elimination</td>
          <td>
            <Clue>TURNKEY SYSTEM</Clue>
          </td>
        </tr>
        <tr>
          <td>Augmented Raility</td>
          <td>
            <Clue>OVERBUDGET</Clue>
          </td>
        </tr>
        <tr>
          <td>Befouled Spellings</td>
          <td>
            <Clue>JAMES E SCRIPPS</Clue>
          </td>
        </tr>
        <tr>
          <td>Cedar Gardens</td>
          <td>
            <Clue>QUADRIPOLAR</Clue>
          </td>
        </tr>
        <tr>
          <td>Julia and Friends</td>
          <td>
            <Clue>I AM GROOT</Clue>
          </td>
        </tr>
        <tr>
          <td>Junky Logic</td>
          <td>
            <Clue>ORLANDO BLOOM</Clue>
          </td>
        </tr>
        <tr>
          <td>Marathon Block Pushing Game</td>
          <td>
            <Clue>I SEE DEAD PEOPLE</Clue>
          </td>
        </tr>
        <tr>
          <td>Maybe Not to Scale?</td>
          <td>
            <Clue>MIDDLE AFRICA</Clue>
          </td>
        </tr>
        <tr>
          <td>Najaf to…</td>
          <td>
            <Clue>TAKE A ROAD TRIP</Clue>
          </td>
        </tr>
        <tr>
          <td>Pestle and Mortar</td>
          <td>
            <Clue>HEROD AGRIPPA</Clue>
          </td>
        </tr>
        <tr>
          <td>T (Counts) for Two</td>
          <td>
            <Clue>THE GAZA STRIP</Clue>
          </td>
        </tr>
        <tr>
          <td>Von Schweetz's Big Question</td>
          <td>
            <Clue>FILM SCRIPTS</Clue>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      The flavor text hints at two six-month periods (the “summer months” and
      “winter months”) as well as hinting at the mobile game <i>Plants vs. Zombies</i>.
    </p>
    <p>
      Six of the puzzle titles have the three-letter month abbreviations for the
      spring and summer months (March through August) as hidden substrings at
      the start of the puzzle titles. The answers to these puzzles each contain
      a part of a plant as a hidden substring.
    </p>

    <Table>
      <tbody>
        <tr>
          <td>
            <b>Mar</b>athon Block Pushing Game
          </td>
          <td>
            <Clue>I [SEE D]EADPEOPLE</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>A Pr</b>ocess of Elimination
          </td>
          <td>
            <Clue>TURNKEY SY[STEM]</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>May</b>be Not to Scale?
          </td>
          <td>
            <Clue>MIDD[LE AF]RICA</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Jun</b>ky Logic
          </td>
          <td>
            <Clue>ORLANDO [BLOOM]</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Jul</b>ia and Friends
          </td>
          <td>
            <Clue>I AM G[ROOT]</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Aug</b>mented Raility
          </td>
          <td>
            <Clue>OVER[BUD]GET</Clue>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      Six of the puzzle titles have the three-letter month abbreviations for the
      fall and winter months (September through February) as hidden substrings
      reading backward in the puzzle titles. The answers to these puzzles each
      contain the letters RIP as a hidden substring:
    </p>

    <Table>
      <tbody>
        <tr>
          <td>
            <b>Pes</b>tle and Mortar
          </td>
          <td>
            <Clue>HEROD AG[RIP]PA</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>T (Co</b>unts) for Two
          </td>
          <td>
            <Clue>THE GAZA ST[RIP]</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Von</b> Schweetz's Big Question
          </td>
          <td>
            <Clue>FILM SC[RIP]TS</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Ced</b>ing Territory
          </td>
          <td>
            <Clue>QUAD[RIP]OLAR</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Naj</b>af to...
          </td>
          <td>
            <Clue>TAKE A ROAD T[RIP]</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <b>Bef</b>ouled Spellings
          </td>
          <td>
            <Clue>JAMES E SC[RIP]PS</Clue>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      If we lay out the plant answers in the provided grid, starting from the
      left and moving rightward, like plants in the <i>Plants vs. Zombies</i> game, and
      compressing the plant words into a single grid square (which is necessary
      for some of the answers to fit), in month order going down on the left (as
      indicated by the arrows), we get:
    </p>
    <Table className="font-mono text-center">
      <tbody>
        <tr>
          <td>I</td>
          <td>SEED</td>
          <td>E</td>
          <td>A</td>
          <td>D</td>
          <td>P</td>
          <td>E</td>
          <td>O</td>
          <td>P</td>
          <td>L</td>
          <td>E</td>
        </tr>
        <tr>
          <td>T</td>
          <td>U</td>
          <td>R</td>
          <td>N</td>
          <td>K</td>
          <td>E</td>
          <td>Y</td>
          <td>S</td>
          <td>Y</td>
          <td>STEM</td>
          <td></td>
        </tr>
        <tr>
          <td>M</td>
          <td>I</td>
          <td>D</td>
          <td>D</td>
          <td>LEAF</td>
          <td>R</td>
          <td>I</td>
          <td>C</td>
          <td>A</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>O</td>
          <td>R</td>
          <td>L</td>
          <td>A</td>
          <td>N</td>
          <td>D</td>
          <td>O</td>
          <td>BLOOM</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>I</td>
          <td>A</td>
          <td>M</td>
          <td>G</td>
          <td>ROOT</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>O</td>
          <td>V</td>
          <td>E</td>
          <td>R</td>
          <td>BUD</td>
          <td>G</td>
          <td>E</td>
          <td>T</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we lay out the zombie answers in the provided grid, starting from the
      right and moving leftward, like zombies in the <i>Plants vs. Zombies</i> game, and
      compressing the <Clue>RIP</Clue> substrings into a single grid square
      (which is necessary for some of the answers to fit), in month order going
      up (to preserve the seasonal cycle, and as indicated by the arrows) on the
      right, we get:
    </p>
    <Table className="font-mono text-center">
      <tbody>
        <tr>
          <td>S</td>
          <td>P</td>
          <td>RIP</td>
          <td>C</td>
          <td>S</td>
          <td>E</td>
          <td>S</td>
          <td>E</td>
          <td>M</td>
          <td>A</td>
          <td>J</td>
        </tr>
        <tr>
          <td>RIP</td>
          <td>T</td>
          <td>D</td>
          <td>A</td>
          <td>O</td>
          <td>R</td>
          <td>A</td>
          <td>E</td>
          <td>K</td>
          <td>A</td>
          <td>T</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>R</td>
          <td>A</td>
          <td>L</td>
          <td>O</td>
          <td>RIP</td>
          <td>D</td>
          <td>A</td>
          <td>U</td>
          <td>Q</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>S</td>
          <td>T</td>
          <td>RIP</td>
          <td>C</td>
          <td>S</td>
          <td>M</td>
          <td>L</td>
          <td>I</td>
          <td>F</td>
        </tr>
        <tr>
          <td></td>
          <td>RIP</td>
          <td>T</td>
          <td>S</td>
          <td>A</td>
          <td>Z</td>
          <td>A</td>
          <td>G</td>
          <td>E</td>
          <td>H</td>
          <td>T</td>
        </tr>
        <tr>
          <td></td>
          <td>A</td>
          <td>P</td>
          <td>RIP</td>
          <td>G</td>
          <td>A</td>
          <td>D</td>
          <td>O</td>
          <td>R</td>
          <td>E</td>
          <td>H</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The letters in the zombie answers which correspond to the plant words in
      the plant answers spell <Clue>PALM A G</Clue> in the direction of the
      arrows and the months, while the letters in the plant answers which
      correspond to the RIPs in the zombie answers spell <Clue>RANITE</Clue> in
      the direction of the arrows and the months.
    </p>
    <p>
      These combine for the answer <Answerize>PALM A GRANITE</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
