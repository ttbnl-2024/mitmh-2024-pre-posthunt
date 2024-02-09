import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'circus-circus';
const ANSWER = `PLOVER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle is about the keywords section of /dev/joe's MIT Mystery Hunt
      Index website. The first Venn diagram clues this, and the fact that there
      is a hidden web link on the page (click "web tricks" in the first Venn
      diagram) that leads us to the{' '}
      <a href="https://devjoe.appspot.com/huntindex/index/keywords.html">
        keywords page
      </a>
      .
    </p>
    <p>
      We can find Circus Circus on the website, despite it being from the
      current hunt, and see it has 3 keywords: Mystery Hunts of the Past, Venn
      diagrams, and web tricks. In the Venn diagram on the puzzle, M is Mystery
      Hunts of the Past and Ring N represents the Nth keyword in the
      alphabetically ordered list (so 2165 is{' '}
      <a href="https://devjoe.appspot.com/huntindex/keyword/venndiagrams">
        Venn diagrams
      </a>{' '}
      as the 2165th keyword).
    </p>
    <p>
      The next step is to identify Z. This is a puzzle that is in Rings 636 (
      <a href="https://devjoe.appspot.com/huntindex/keyword/emoji">emoji</a>)
      and 1765 (
      <a href="https://devjoe.appspot.com/huntindex/keyword/runaroundsandphotoidentificationofmit">
        runarounds (and photo identification of MIT)
      </a>
      ), but not Ring 1221 (
      <a href="https://devjoe.appspot.com/huntindex/keyword/maps">maps</a>).
      This is uniquely identifiable as{' '}
      <a href="https://devjoe.appspot.com/huntindex/puzzle/mit2020r0817">
        Roadtrip (MH20)
      </a>
      . This also allows us to solve for F as 146, and Ring F corresponds to the
      keyword "authors".
    </p>
    <p>
      The next two diagrams show us "This year's theme" (
      <a href="https://devjoe.appspot.com/huntindex/keyword/greekmythology">
        Greek Mythology
      </a>
      ) with 8 puzzles (y's), and Ring M (as above), with 24 puzzles (x's).
    </p>
    <p>
      Finally, we see a Venn diagram where we use F as a function on an
      arbitrary puzzle from each category. Ring F was the keyword "authors", so
      applying it as a function yields the authors of the referenced puzzle.
      We're looking for a person who has been both an author for a Mystery Hunt
      puzzle with keywords "Mystery Hunts of the Past" and "Greek Mythology".
      There are two people that satisfy the constraints: Dan Katz and Corey
      Plover. The intersection of all three rings contains cats ("Katz"), so the
      only other person that can be in the intersection of the first two rings,
      but not the third, is <Answerize>{ANSWER}</Answerize>, the puzzle answer.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
