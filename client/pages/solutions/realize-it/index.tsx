import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/realize-it/0.png';
import image1 from 'assets/solutions/realize-it/1.png';
import image2 from 'assets/solutions/realize-it/2.png';
import image3 from 'assets/solutions/realize-it/3.png';
import image4 from 'assets/solutions/realize-it/4.png';
import image5 from 'assets/solutions/realize-it/5.png';
import image6 from 'assets/solutions/realize-it/6.png';
import image7 from 'assets/solutions/realize-it/7.png';
import image8 from 'assets/solutions/realize-it/8.png';
import image9 from 'assets/solutions/realize-it/9.png';
import image10 from 'assets/solutions/realize-it/10.png';
import image11 from 'assets/solutions/realize-it/11.png';
import image12 from 'assets/solutions/realize-it/12.png';
import image13 from 'assets/solutions/realize-it/13.png';
import image14 from 'assets/solutions/realize-it/14.png';
import image15 from 'assets/solutions/realize-it/15.png';
import image16 from 'assets/solutions/realize-it/16.png';
import image17 from 'assets/solutions/realize-it/17.png';
import image18 from 'assets/solutions/realize-it/18.png';
import image19 from 'assets/solutions/realize-it/19.png';
import image20 from 'assets/solutions/realize-it/20.png';
import image21 from 'assets/solutions/realize-it/21.png';
import image22 from 'assets/solutions/realize-it/22.png';
import image23 from 'assets/solutions/realize-it/23.png';
import image24 from 'assets/solutions/realize-it/24.png';
import image25 from 'assets/solutions/realize-it/25.png';

const SLUG = 'realize-it';
const ANSWER = `OVER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is a logic puzzle, but the rules have the words all jumbled up. By
      rearranging the words, we get the actual rules:
    </p>
    <ul>
      <li>
        <u>Fill each cell</u> with <u>a number</u>.
      </li>
      <li>
        Each <u>row, besides the first</u> row, <u>is a kind</u>{' '}
        <u>of permutation</u> of the <u>previous row</u>.
      </li>
      <li>
        The <u>last row is the reverse of the</u> first row.
      </li>
      <li>
        <u>If the</u> number x appears before <u>the number y</u> in rows i{' '}
        <u>and j</u>, then <u>x also appears before</u> y in any{' '}
        <u>row between i and j</u>.
      </li>
    </ul>
    <p>
      The jumbling is given by reversing each underlined block of words. Thus,
      the "kind of permutation" in the second rule is referring to permutations
      obtained by reversing one or more disjoint blocks.
    </p>
    <p>This logic puzzle has a unique solution (see appendix for details):</p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto w-full md:w-2/3"
      />
    </p>
    <p>
      Take the sum of the numbers in each cage, modulus by the number in the top
      left corner of each cage, we get the numbers (in order top to bottom, left
      to right):
    </p>
    <p>
      <Clue>1, 12, 12, 15, 23, 1, 2, 12, 5, 19, 5, 17, 21, 5, 14, 3, 5</Clue>.
    </p>
    <p>
      Converting via A1Z26, we get the phrase <Clue>ALLOWABLE SEQUENCE</Clue>.
    </p>
    <p>
      Allowable sequences are abstract generalizations of point configurations
      on a plane. See{' '}
      <a href="https://www.ams.org/publicoutreach/feature-column/fcarc-oriented5">
        https://www.ams.org/publicoutreach/feature-column/fcarc-oriented5
      </a>{' '}
      for a brief introduction. The entire grid itself is an allowable sequence.
      Every arrangement of points on a plane gives rise to an allowable
      sequence. However, not all allowable sequences arise in this way. In the
      academic literature, an allowable sequence is said to be <i>realizable</i>{' '}
      if it does arise in this way for some point configuration. Hence, to
      "realize" an allowable sequence is to reconstruct a point configuration
      that gives rise to that allowable sequence.{' '}
    </p>
    <p>
      Realize this allowable sequence, as clued by the title. This is only
      unique up to affine transformations, but the square given in the puzzle
      fixes the orientation and makes it unique. Some observations to help with
      realizing the allowable sequence:
    </p>
    <ul>
      <li>
        Numbers that are part of a "flip" (a reversing block) correspond to
        collinear points, and are in that order.
      </li>
      <li>Multiple flips in a single step correspond to parallel lines.</li>
    </ul>
    <p>
      <SheetableImage
        alt=""
        src={image1}
        title=""
        className="mx-auto  w-full md:w-1/2"
      />
    </p>
    <p>
      There are cages with 4 different numbers: 27, 29, 31, 32. Each cage
      consists of numbers which are part of a single flip, hence they correspond
      to a set of collinear points. Connect these collinear points with a line
      segment. Look at the segments for each of the 4 types of cages, which
      gives the following pictures, in order of increasing cage numbers.
    </p>
    <p className="text-center">
      <SheetableImage
        alt=""
        src={image2}
        title=""
        className="mx-auto w-full md:w-1/2"
      />
      The 27-cages
      <br />
      <br />
    </p>

    <p className="text-center">
      <SheetableImage
        alt=""
        src={image3}
        title=""
        className="mx-auto w-full md:w-1/2"
      />
      The 29-cages
      <br />
      <br />
    </p>
    <p className="text-center">
      <SheetableImage
        alt=""
        src={image4}
        title=""
        className="mx-auto w-full md:w-1/2"
      />
      The 31-cages
      <br />
      <br />
    </p>
    <p className="text-center">
      <SheetableImage
        alt=""
        src={image5}
        title=""
        className="mx-auto w-full md:w-1/2"
      />
      The 32-cages
      <br />
      <br />
    </p>
    <p>
      They draw the letters <Answerize>{ANSWER}</Answerize>, the answer to this
      puzzle.
    </p>
    <Appendix>
      <p>
        We describe the solution for the logic puzzle. Here are the rules of the
        logic puzzle again:
      </p>
      <ul>
        <li>Fill each cell with a number.</li>
        <li>
          Each row, besides the first row, is obtained from the previous row by
          flipping one or more disjoint blocks.
        </li>
        <li>The last row is the reverse of the first row.</li>
        <li>
          If the number x appears before the number y in rows i and j, then x
          also appears before y in any row between i and j.
        </li>
      </ul>
      <p>
        The last 2 rules imply the following: for any pair of numbers x and y,
        if we look at their relative positions from the first row to the last,
        they are swapped exactly once. The cages are irrelevant here. The
        numbers are also irrelevant, so we shall replace them with the letters
        A-L. Here is the simplified puzzle (the choice of letters doesn't
        matter, but the choice made here will be convenient later on):
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image6}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        Using the fact that the last row is the reverse of the first, and the
        type of permutations involved, we can fill in some letters.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image7}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        Cells A9 to A15 must be all L. Similarly for cells L2 to L8. We will
        also use small letters to denote cells with identical letters.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image8}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>In this logic puzzle, we can make the following kind of deductions:</p>
      <p>
        <SheetableImage
          alt=""
          src={image9}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>We draw lines to indicate identical letters.</p>
      <p>
        <SheetableImage
          alt=""
          src={image10}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        C4 is b, then B5 is F. H is not e, and e can only be in column J in row
        4.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image11}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        In row 6, H can only be in column K. The letters in cells C8 and D8 must
        be between F and L and have never been swapped with them before row 8.
        They could only be x and y.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image12}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>L cannot swap with y between rows 2 and 3. So I2 must be H.</p>
      <p>
        <SheetableImage
          alt=""
          src={image13}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        If D = x, then D needs to reach C6 from row 3. After some trial and
        error, this proved impossible. Hence D = c. Then F3 is x.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image14}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        A in row 4 can only be in columns D, E or F. If D4 is A, then we get d =
        E, x = G, b = B but also y = E, a contradiction.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image15}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        If E4 is A, then we can deduce that x = E, d = G, but also y = G, a
        contradiction.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image16}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>Thus, F4 is A. </p>
      <p>
        <SheetableImage
          alt=""
          src={image17}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        B can only be b or e, but B = e is impossible. So, B = b, and G = x.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image18}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>K can only be e, and the final letter is y = I.</p>
      <p>
        <SheetableImage
          alt=""
          src={image19}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        The only possible candidates for the cells I8 and J8 are (A,D), (B,E) or
        (B,D). If I8 is B, then there is a flip of size 5 between rows 7 and 8
        in columns E-I, which leads to a contradiction. So I8 is A and J8 is D.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image20}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        A and D cannot swap in rows 4 and 5, so G4 is I. The rest of the top
        half follows.
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image21}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>
        Now we see that our choice of letters result in the first row being A-L.
        Hence, every flip must be of letters in increasing order. More
        deductions later,
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image22}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>More deductions later,</p>
      <p>
        <SheetableImage
          alt=""
          src={image23}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>More deductions later,</p>
      <p>
        <SheetableImage
          alt=""
          src={image24}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
      <p>Finally, the solved grid.</p>
      <p>
        <SheetableImage
          alt=""
          src={image25}
          title=""
          className="mx-auto w-full md:w-2/3"
        />
      </p>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
