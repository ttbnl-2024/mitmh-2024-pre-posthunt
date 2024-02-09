import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/island-hopping/0.png';
import image1 from 'assets/solutions/island-hopping/1.png';
import image2 from 'assets/solutions/island-hopping/2.png';

const SLUG = 'island-hopping';
const ANSWER = `UPSILON AQUARII`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We first solve the Nurikabe.</p>
    <p>
      <SheetableImage
        alt="This image is the solution for the Nurikabe puzzle.  The solution depicts the nurikabe islands as shaded, rather than the surrounding water, for consistency with later steps of the solution, and how they are depicted."
        src={image0}
        title=""
      />
    </p>
    <p>
      Noting the term "criss-crossing" in the flavortext, and the list of words
      below the grid, we infer that we need to construct a criss-cross in the
      solved Nurikabe grid. In the absence of a proper criss-cross grid, we
      further infer that the numbers in parentheses behind each word must be
      relevant to placing the words in the grid.
    </p>
    <p>
      Examining the numbers in parentheses, we note that there are numbers
      higher than the largest island size, but that all numbers which are higher
      than the largest island size are multiples of one or more of the smaller
      island sizes above 1.
    </p>
    <p>
      If we consider single squares of the island to have the numerical value of
      their island's size, we can plausibly assign numerical values to every
      place where a word crosses an island. If we add the numerical values for
      each square where a word crosses multiple adjacent squares of an island,
      we can plausibly get the numbers which are higher than the highest island
      size. (So, for example, a word on the bottom row which reads from the
      Nurikabe 12 clue to the bottom right corner, would have numerical values
      of 1, 1, 24, and 25&mdash;the two 1s coming from the 1-sized islands, the 24
      coming from the two adjacent squares from the 12 island, and the 25 coming
      from the five adjacent squares from the 5 island.)
    </p>
    <p>
      Finding locations for each word using this information results in this
      completed grid:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      In the completed grid, some letters are located on Nurikabe clue
      squares&mdash;one letter for each clue number from 1 to 14. Reading these letters in
      numerical order spells the phrase <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <SheetableImage
        alt="a picture of the criss-cross solution with the squares where words cross Nurikabe clue numbers highlighted."
        src={image2}
        title=""
      />
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
