import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-rift-in-hades/0.png';
import image1 from 'assets/solutions/a-rift-in-hades/1.png';

const SLUG = 'a-rift-in-hades';
const ANSWER = `BEAR CLAW N ORDER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      In this round, we get answers from every possible pair of puzzles (21
      pairs), where both members of a pair are required to find the answer.
      Fully solving a puzzle by submitting all 6 answers to its answer checker
      reveals its hidden color.
    </p>
    <p>Here are the answers in several formats:</p>
    <h3>Answers by Pairs</h3>
    <Table className="my-2">
      <thead>
        <tr>
          <th>Puzzle 1</th>
          <th>Puzzle 2</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Akari</td>
          <td>Blanks</td>
          <td>
            <Monospace>SCORE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Akari</td>
          <td>Chemistry</td>
          <td>
            <Monospace>WATER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Akari</td>
          <td>Crossword</td>
          <td>
            <Monospace>ADONIS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Akari</td>
          <td>Matchmaker</td>
          <td>
            <Monospace>CRUNCHY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Akari</td>
          <td>Text Adventure</td>
          <td>
            <Monospace>WONDER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Akari</td>
          <td>Word Search</td>
          <td>
            <Monospace>CRAWLY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blanks</td>
          <td>Chemistry</td>
          <td>
            <Monospace>IDEAL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blanks</td>
          <td>Crossword</td>
          <td>
            <Monospace>CRONE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blanks</td>
          <td>Matchmaker</td>
          <td>
            <Monospace>CHLOE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blanks</td>
          <td>Text Adventure</td>
          <td>
            <Monospace>WANDS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blanks</td>
          <td>Word Search</td>
          <td>
            <Monospace>ADORN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>Crossword</td>
          <td>
            <Monospace>BENZOYL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>Matchmaker</td>
          <td>
            <Monospace>CARBONYL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>Text Adventure</td>
          <td>
            <Monospace>TWAIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chemistry</td>
          <td>Word Search</td>
          <td>
            <Monospace>OXALATE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Crossword</td>
          <td>Matchmaker</td>
          <td>
            <Monospace>BRACKET</Monospace>
          </td>
        </tr>
        <tr>
          <td>Crossword</td>
          <td>Text Adventure</td>
          <td>
            <Monospace>BARGING</Monospace>
          </td>
        </tr>
        <tr>
          <td>Crossword</td>
          <td>Word Search</td>
          <td>
            <Monospace>BEAMER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Matchmaker</td>
          <td>Text Adventure</td>
          <td>
            <Monospace>WHINER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Matchmaker</td>
          <td>Word Search</td>
          <td>
            <Monospace>DANDER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Text Adventure</td>
          <td>Word Search</td>
          <td>
            <Monospace>STOWED</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <h3>Answers by Puzzle</h3>
    <ul className="my-2">
      <li>
        Akari (Violet):{' '}
        <Monospace>ADONIS, CRAWLY, CRUNCHY, SCORE, WATER, WONDER</Monospace>
      </li>
      <li>
        Blanks (Red):{' '}
        <Monospace>ADORN, CHLOE, CRONE, IDEAL, SCORE, WANDS</Monospace>
      </li>
      <li>
        Chemistry (Indigo):{' '}
        <Monospace>IDEAL, TWAIN, BENZOYL, OXALATE, CARBONYL, WATER</Monospace>
      </li>
      <li>
        Crossword (Yellow):{' '}
        <Monospace>ADONIS, BARGING, BEAMER, BENZOYL, BRACKET, CRONE</Monospace>
      </li>
      <li>
        Matchmaker (Blue):{' '}
        <Monospace>CHLOE, WHINER, BRACKET, DANDER, CARBONYL, CRUNCHY</Monospace>
      </li>
      <li>
        Text Adventure (Orange):{' '}
        <Monospace>WANDS, BARGING, STOWED, WHINER, TWAIN, WONDER</Monospace>
      </li>
      <li>
        Word Search (Green):{' '}
        <Monospace>ADORN, BEAMER, CRAWLY, DANDER, OXALATE, STOWED</Monospace>
      </li>
    </ul>
    <h3>Answers as Grid</h3>
    <Table className="my-2">
      <thead>
        <tr>
          <th>Orange</th>
          <th>Yellow</th>
          <th>Green</th>
          <th>Blue</th>
          <th>Indigo</th>
          <th>Violet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>WANDS</Monospace>
          </td>
          <td>
            <Monospace>CRONE</Monospace>
          </td>
          <td>
            <Monospace>ADORN</Monospace>
          </td>
          <td>
            <Monospace>CHLOE</Monospace>
          </td>
          <td>
            <Monospace>IDEAL</Monospace>
          </td>
          <td>
            <Monospace>SCORE</Monospace>
          </td>
          <td>
            <b>Red</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Monospace>BARGING</Monospace>
          </td>
          <td>
            <Monospace>STOWED</Monospace>
          </td>
          <td>
            <Monospace>WHINER</Monospace>
          </td>
          <td>
            <Monospace>TWAIN</Monospace>
          </td>
          <td>
            <Monospace>WONDER</Monospace>
          </td>
          <td>
            <b>Orange</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <Monospace>BEAMER</Monospace>
          </td>
          <td>
            <Monospace>BRACKET</Monospace>
          </td>
          <td>
            <Monospace>BENZOYL</Monospace>
          </td>
          <td>
            <Monospace>ADONIS</Monospace>
          </td>
          <td>
            <b>Yellow</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Monospace>DANDER</Monospace>
          </td>
          <td>
            <Monospace>OXALATE</Monospace>
          </td>
          <td>
            <Monospace>CRAWLY</Monospace>
          </td>
          <td>
            <b>Green</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Monospace>CARBONYL</Monospace>
          </td>
          <td>
            <Monospace>CRUNCHY</Monospace>
          </td>
          <td>
            <b>Blue</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Monospace>WATER</Monospace>
          </td>
          <td>
            <b>Indigo</b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The diagram, the reference to a doughnut, the unusual relationship of each
      pair of puzzles having a common answer, and the fact that each of seven
      regions borders every other one (not possible on a plane or sphere) leads
      us to the idea that the diagram represents the seven-colored torus, where
      a minimal map of seven regions, each of which touch all the others, is
      possible. The puzzle shown can form such a seven-colored torus if the
      bands continue on the other side with the same curvature, and "turnover"
      suggests to identify what this over side looks like:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      Since each puzzle represents one of the map regions, and each answer is
      associated with two of the seven puzzles, the answers match the edges.
      With that done, the next logical step is to go to the vertices. The phrase
      "find common ground" from the meta clues what needs to be done here: For
      each trio of answers which meet at a vertex there is exactly one letter
      which appears in all three answers. We write these letters at the vertices
      and read around the ring. This diagram shows both the feeder answers and
      the vertex letters:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      The answer, <Answerize>BEAR CLAW N ORDER</Answerize>, explains how Pluto
      was using heavy-handed law enforcement to keep the peace, and is a pun on
      "law and order" and on "bear claw" (a type of pastry similar to a
      doughnut).
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
