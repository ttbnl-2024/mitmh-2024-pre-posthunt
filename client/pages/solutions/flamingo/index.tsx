import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image1 from 'assets/solutions/flamingo/1.png';
import image2 from 'assets/solutions/flamingo/2.png';
import image3 from 'assets/solutions/flamingo/3.png';
import image4 from 'assets/solutions/flamingo/4.png';
import image5 from 'assets/solutions/flamingo/5.png';
import image6 from 'assets/solutions/flamingo/6.png';
import image7 from 'assets/solutions/flamingo/7.png';
import image8 from 'assets/solutions/flamingo/8.png';
import image9 from 'assets/solutions/flamingo/9.png';
import image10 from 'assets/solutions/flamingo/10.png';
import image11 from 'assets/solutions/flamingo/11.png';
import image12 from 'assets/solutions/flamingo/12.png';
import image13 from 'assets/solutions/flamingo/13.png';
import image14 from 'assets/solutions/flamingo/14.png';
import image15 from 'assets/solutions/flamingo/15.png';
import image16 from 'assets/solutions/flamingo/16.png';
import image17 from 'assets/solutions/flamingo/17.png';
import image18 from 'assets/solutions/flamingo/18.png';
import image19 from 'assets/solutions/flamingo/19.png';
import image20 from 'assets/solutions/flamingo/20.png';
import image21 from 'assets/solutions/flamingo/21.png';
import image22 from 'assets/solutions/flamingo/22.png';
import image23 from 'assets/solutions/flamingo/23.png';
import image24 from 'assets/solutions/flamingo/24.png';
import image25 from 'assets/solutions/flamingo/25.png';
import image26 from 'assets/solutions/flamingo/26.png';
import image27 from 'assets/solutions/flamingo/27.png';
import image28 from 'assets/solutions/flamingo/28.png';
import image29 from 'assets/solutions/flamingo/29.png';
import soln from 'assets/solutions/flamingo/soln.png';

const SLUG = 'flamingo';
const ANSWER = `RANI`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>Each face of the cube net is a different logic puzzle genre:</p>
    <ul>
      <li>Top: Futoshiki</li>
      <li>Leftmost: KenKen</li>
      <li>Middle: Skyscrapers</li>
      <li>Middle right: Arithmetic Square</li>
      <li>Far right: Kropki</li>
      <li>Bottom: No genre, but global Sudoku constraint</li>
    </ul>
    <p>
      As we work on the puzzle, we quickly find that some clues don't make
      sense: in the KenKen, 195 factors to 5 * 39 and 181 is prime.
      Additionally, the given E in the top square and the 4x4 grids hints at the
      fact that we are working in hexadecimal (base 16).
    </p>
    <p>
      <SheetableImage alt="" src={soln} title="" />
    </p>
    <p>
      After solving the logic puzzle, we have 4 sets of 6 letters and numbers
      shaded with four different colors. These are the hex codes for different
      colors:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Shade</th>
          <th>Hex Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gray</td>
          <td>BC8F8F</td>
          <td>
            <Monospace>ROSY BROWN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Light pink</td>
          <td>FAEBD7</td>
          <td>
            <Monospace>ANTIQUE WHITE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Middle Pink</td>
          <td>FFDEAD</td>
          <td>
            <Monospace>NAVAJO WHITE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bright Pink</td>
          <td>4B0082</td>
          <td>
            <Monospace>INDIGO</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The order is based on the colors of a flamingo from a chick to fully
      colored. Chicks start out gray and become their signature pink color based
      on their diet. Taking the first letter of each color in order yields the
      answer <Answerize>RANI</Answerize>.
    </p>

    <Appendix>
      <p>
        All logic puzzles have multiple ways to approach them, so the following
        is a possible solution path for the logic.
      </p>
      <p>
        (Author: I realized at the end of writing all this and making pictures
        that I did all of this without giving myself the given E at the
        beginning. Buuuuut I'm too lazy to go back and remake all those
        pictures... So your process should be a little simpler for having it
        from the start!)
      </p>
      <h3>KenKen</h3>
      <ol>
        <li>
          Once we determine that the math is in base 16, the KenKen can easily
          be split into sets of numbers:
          <ul>
            <li>195x = 3*3*3*3*5 which can only be organized as 1*3*9*15</li>
            <li>181x = 5*7*11</li>
            <li>5÷ = A/2</li>
            <li>3÷ = C/4</li>
            <li>29+ = 0+6+8+D+E</li>
          </ul>
          <SheetableImage src={image1} className="mx-auto" />
        </li>
      </ol>
      <h3>Kropki</h3>
      <ol start={2}>
        <li>
          The string of 4 numbers connected by black dots can only be 1, 2, 4, 8
          followed by either a 7 or 9 if it's next to 8 or 0 if it's next to 1.
          <SheetableImage src={image2} className="mx-auto" />
        </li>
        <li>
          The string of 4 numbers connected by white dots can then only fall
          among 9&ndash;F. The two black dots attached to this string force those to
          be 3, 6, C. The consecutive number next to 6 must be 5 or 7. Both being
          odd means the following must be A or E. This makes the 4 consecutive
          numbers either A&ndash;D counterclockwise or B&ndash;E clockwise.
          <SheetableImage src={image3} className="mx-auto" />
        </li>
        <li>
          Due to the A/2 on the KenKen, A&ndash;D is impossible. Then, since E is used
          on the left corner, then 5 and A must be attached to the 6, followed
          by 9 as B has already been used.
          <SheetableImage src={image4} className="mx-auto" />
        </li>
        <li>
          This forces the 1, 2, 4, 8 to go counter clockwise as 8 cannot be next
          to 9 due to the negative rule in Kropki.
          <SheetableImage src={image5} className="mx-auto" />
        </li>
        <li>
          As we look all the way across the row to the KenKen, we see that the
          location of the 7 in the Kropki determines the location of the 7 in
          the KenKen and the location of the 4 in the Kropki determines the
          location of the 4 and C in the KenKen. We can also remove various
          other candidates in each spot.
          <SheetableImage src={image6} className="mx-auto" />
        </li>
      </ol>
      <h3>Arithmetic Square</h3>
      <ol start={7}>
        <li>
          The “und.” implies we are dividing by 0. Since any number times 0 is
          0, the spot to the right of the 0 must be 2. (This also forces the
          location of the 1, 2, 4, 8, 7 in the Kropki if we missed the negative
          rule).
          <SheetableImage src={image7} className="mx-auto" />
        </li>
        <li>
          The top row of the arithmetic square is 7*17, which forces the last
          box in the top row to be 7. (This could have also been determined by
          the E in the Kropki or used to help solve the corner of the Kropki.)
          The second column of the arithmetic square is 5*13, so the position to
          the left of the 0 must be either 5 or D. The KenKen must have a 5 in
          that bottom row though, forcing it to be D.
          <SheetableImage src={image8} className="mx-auto" />
        </li>
        <li>
          The last column is pretty constrained as we need a (multiple of 7) - ?
          - 2 = 51. This only leaves 7*8-3-2 or 7*9-A-2. The latter conflicts
          with the A in the Kropki.
          <SheetableImage src={image9} className="mx-auto" />
        </li>
        <li>
          If we look all around the cube, we see that placing this 3 also forces
          the location of the 3 on the KenKen side.
          <SheetableImage src={image10} className="mx-auto" />
        </li>
        <li>
          The second row in the Arithmetic square must now be ?*?/?/8=5 leaving
          4*A or A*4/1 all other options have included numbers already in use in
          that square. 4 must come first as the first number needs to be a
          divisor for the top left corner (or we can use the location of the 4
          in the KenKen to determine that it's 4*A).
          <SheetableImage src={image11} className="mx-auto" />
        </li>
        <li>
          This forces the top left corner to be C as it is the only multiple of
          4 remaining that hasn't been used in the square. Since all other
          divisors of 12 are already in use, then 6 must fall to the right of C,
          and an F completes the math in the row. This also places the remaining
          0 and F in the Kropki.
          <SheetableImage src={image12} className="mx-auto" />
        </li>
        <li>
          B completes the math in column 2 and of 5, 9, and E, 5 and E completes
          the math for column 1, leaving 9 to fill the remaining spot.
          <SheetableImage src={image13} className="mx-auto" />
        </li>
      </ol>

      <h3>KenKen</h3>
      <ol start={14}>
        <li>
          Once again we can remove candidates from various spots in the KenKen.
          Removing reading across, we can solve 6 in the bottom right corner and
          1 in the first column and clean up those boxes.
          <SheetableImage src={image14} className="mx-auto" />
        </li>
        <li>
          Reading around the cube, we can solve 2, A, 0, and E.
          <SheetableImage src={image15} className="mx-auto" />
        </li>
      </ol>

      <h3>Skyscraper</h3>
      <ol start={16}>
        <li>
          From the white dot on the edge of the Kropki, we can fill in an A on
          the Futoshiki side.
          <SheetableImage src={image16} className="mx-auto" />
        </li>
        <li>
          At this time, it is useful to fill out the remaining candidates that
          the skyscraper can have. Note that the Kropki side flips backwards as
          it goes underneath the cube so the left most side of the Kropki gets
          rid of numbers from the right most side of the skyscraper.
          <SheetableImage src={image17} className="mx-auto" />
        </li>
        <li>
          It is now easy to deduce the bottom row of the Skyscraper as the first
          spot must be the tallest and the last spot must be second tallest. It
          is also trivial to solve the A on the Sudoku side.
          <SheetableImage src={image18} className="mx-auto" />
        </li>
        <li>
          B cannot be on either end of the second row, which forces it into the
          second spot. The last spot cannot be 2 or we would see too many towers
          from that side, so it must be the 9.
          <SheetableImage src={image19} className="mx-auto" />
        </li>
        <li>
          Because we need to see 2 towers from the left side, we can remove E
          from Row 2 column 1 and D from row 1 column 1. And since we only want
          to see 1 tower looking down column 3, we can remove D and E from Row 3
          leaving the only E in the skyscraper at Row 3 column 2. This also
          forces Row 1 column 2 to be D or we would see more than 2 towers
          looking down that column.
          <SheetableImage src={image20} className="mx-auto" />
        </li>
        <li>
          This subsequently solves the 8 and D in the KenKen.
          <SheetableImage src={image21} className="mx-auto" />
        </li>
        <li>
          So we can see three towers from the right, it is apparent that 5 must
          be in row 1 column 3, which also solves the rest column 3.
          <SheetableImage src={image22} className="mx-auto" />
        </li>
        <li>
          To ensure we see no more than 3 towers in column 1, row 2 column 1
          must be 6.
          <SheetableImage src={image23} className="mx-auto" />
        </li>
      </ol>
      <h3>Futoshiki/Sudoku</h3>
      <ol>
        <li>
          At this point, filling out the possible candidates in both the
          Futoshiki and the Sudoku isn't too terrible. (Hopefully I don't have a
          mistake in this one!)
          <SheetableImage src={image24} className="mx-auto" />
        </li>
        <li>
          Following Futoshiki logic up and down, we get most of the 6 string
          section.
          <SheetableImage src={image25} className="mx-auto" />
        </li>
        <li>
          On inspection, we can also see that there is only one F left on this
          side.
          <SheetableImage src={image26} className="mx-auto" />
        </li>
        <li>
          Removing candidates solves the Skyscraper and a few spots in the
          Sudoku.
          <SheetableImage src={image27} className="mx-auto" />
        </li>
        <li>
          We can remove all 2 and 3 from the first column as they are a pointed
          pair and solve the 8s that results. Similarly, we can remove the
          pointed pair of 3 and 5 from the last column and circling around.
          <SheetableImage src={image28} className="mx-auto" />
        </li>
        <li>
          Futoshiki logic and the negative rule in Kropki allows us to solve the
          5 in the Futoshiki, which leads to a chain of solves as the KenKen is
          now complete and we have a single B left on the sudoku face.
          <SheetableImage src={image29} className="mx-auto" />
        </li>
      </ol>
      <p>
        (This is where I realized I did all this without the given E &gt;.&gt;)
        SO now we remember that we had this E all along and with the 4/6 pointed
        pair in the last line, everything gets solved :D
      </p>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
