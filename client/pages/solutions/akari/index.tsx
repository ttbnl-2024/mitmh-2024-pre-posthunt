import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/akari/0.png';

const SLUG = 'akari';
const ANSWER = `ADONIS, CRAWLY, CRUNCHY, SCORE, WATER, WONDER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The Akari puzzle follows standard rules and has this unique solution:</p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      The clue letters in the spaces that get lights spell{' '}
      <Monospace>THE MISSING PRODUCT IN REACTION TEN</Monospace>. We can find
      reactions in the Chemistry puzzle, and the product clued here is{' '}
      <Answerize>WATER</Answerize>.
    </p>
    <p>
      One extraction from the Matchmaker is{' '}
      <Monospace>
        SHIFT BY 18 1 6 18 7 12 8 5 7 13 12 3 5 16 10 15 26 25 13 2 4 18 11 26
        20 3 17 7 8 11
      </Monospace>
      . This applies to the phrase above, Caesar-shifting it into{' '}
      <Monospace>LIKE PEANUT BUTTER THAT ISNT CREAMY</Monospace>, giving the
      answer <Answerize>CRUNCHY</Answerize>.
    </p>
    <p>
      The flavor text contains the phrase{' '}
      <Monospace>ANCHOR LOST HOMBRES</Monospace> which fits on the blanks in
      Blanks and extracts the answer <Answerize>SCORE</Answerize>.
    </p>
    <p>
      When we overlay the Akari solution on the Word Search grid, the spaces
      with lights land on letters that spell{' '}
      <Monospace>A BUG CREEPY HYPHEN THIS SIX LETTERS</Monospace>. That gives
      the answer <Answerize>CRAWLY</Answerize>.
    </p>
    <p>
      We can also overlay the Akari lights onto the Crossword grid. The ones
      that don't hit black squares spell{' '}
      <Monospace>THE MORTAL CONSORT OF APHRODITE</Monospace> which gives the
      answer <Answerize>ADONIS</Answerize>.
    </p>
    <p>
      In the Text Adventure, after solving the Towers of Hanoi puzzle, we find
      three numbered pillars with lights on each face which resemble the 1, 2, 3
      pillars in the center of this diagram. By lighting up the lights to match
      the solution to this puzzle, we get the answer{' '}
      <Answerize>WONDER</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
