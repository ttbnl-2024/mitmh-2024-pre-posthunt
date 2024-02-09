import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/jigsaw-sudoku/0.png';
import image1 from 'assets/solutions/jigsaw-sudoku/1.png';
import image2 from 'assets/solutions/jigsaw-sudoku/2.png';
import image3 from 'assets/solutions/jigsaw-sudoku/3.png';
import image4 from 'assets/solutions/jigsaw-sudoku/4.png';
import image5 from 'assets/solutions/jigsaw-sudoku/5.png';
import image6 from 'assets/solutions/jigsaw-sudoku/6.png';
import image7 from 'assets/solutions/jigsaw-sudoku/7.png';
import image8 from 'assets/solutions/jigsaw-sudoku/8.png';
import image9 from 'assets/solutions/jigsaw-sudoku/9.png';
import image10 from 'assets/solutions/jigsaw-sudoku/10.png';
import image11 from 'assets/solutions/jigsaw-sudoku/11.png';
import image12 from 'assets/solutions/jigsaw-sudoku/12.png';
import image13 from 'assets/solutions/jigsaw-sudoku/13.png';
import image14 from 'assets/solutions/jigsaw-sudoku/14.png';
import image15 from 'assets/solutions/jigsaw-sudoku/15.png';
import image16 from 'assets/solutions/jigsaw-sudoku/16.png';

const SLUG = 'jigsaw-sudoku';
const ANSWER = `INTERCONNECTION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The pieces as given have enough squares to make 8 sudoku. However, we must
      duplicate 8 pieces to construct 9 sudoku. The duplicated pieces make a
      chain where each consecutive sudoku shares a piece (though the pieces are
      filled differently in each sudoku). After solving all sudoku, we realize
      that each pair contains suspiciously many overlapping numbers. Shading
      these numbers gives letters in{' '}
      <a href="https://fakoo.de/en/fakoo.html">Fakoo</a> that spell{' '}
      <Answerize>INTERCONNECTION</Answerize>.
    </p>
    <Appendix>
      <p>
        Putting assembled grids directly into a sudoku solver won't completely
        solve these due to the additional constraint that each piece contains a
        digit at least once, but no more than twice. While a sudoku solver can
        fully perform other deductions, we provide some in-between logic here
        that a sudoku solver cannot. Deductions are labeled with rows A&ndash;I and
        columns 1&ndash;9.
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image0} title="" />
      </p>
      <ul>
        <li>
          Squares that must be the same: B4 and C1, B1 and D2, F2 and G1, H4 and
          I3, F4/5 and H/I6
        </li>
        <li>D2 is 8 since the purple has no other location that can be 8</li>
        <li>Only 1 in pink at I3, therefore H4 is also 1</li>
        <li>
          Only 3 in orange is at F8, followed by only 4 in the orange at E4
        </li>
        <li>C1 and B4 only share a 9 so both must be 9</li>
        <li>
          Removing items from F4/5 and H/I6 that aren't shared, we discover that
          F5 must be 9 and F4 must be 6
        </li>
        <li>F2 and G1 only share a 5 so both must be 5</li>
        <li>
          Since orange has 10 squares, there can only be a single digit used
          more than once, which is fulfilled by 8, so remove 7 from G7. This
          solves for B7
        </li>
        <li>6 must be in orange column 7, so remove 6 from D7</li>
        <li>This leaves only a single 6 in the red at D9</li>
        <li>Only 5 left in orange is at H8</li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image1} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image2} title="" />
      </p>
      <ul>
        <li>
          There is a single 1 in the orange at E3 followed by a single 3 in
          orange at G3
        </li>
        <li>
          Since orange is exactly 9 cells, remove any remaining 4 and 7 which
          leaves a single 4 in column 4 at I4 followed by a single 7 at B4
        </li>
        <li>
          E7 and G9, must be the same number and the only overlapping number is
          8
        </li>
        <li>
          There is only a single 7 and 9 left in purple at E8 and G5
          respectively
        </li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image3} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image4} title="" />
      </p>
      <ul>
        <li>
          Since there are two 7 in the purple, we can remove the remaining 7 at
          E8 leaving a single 7 in box 6 at F8
        </li>
        <li>
          There is only a single 3 and 8 in the brown at D5 and B6 respectively
        </li>
        <li>
          There is only a single 5 left in the purple at F6 and a single 1 left
          in the green at H5
        </li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image5} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image6} title="" />
      </p>
      <ul>
        <li>
          Since there are two 8 in the purple, two 5 and 7 in the grey, and two
          2 in the light blue, we can remove any remaining of those numbers from
          those colors
        </li>
        <li>
          These removals result in a single 8 in box 7 at I1, a single 2 in box
          2 at A5, and a single 5 in box 9 at H9
        </li>
        <li>
          There's only one 5 left in the blue at A4, one 7 left in the light
          blue at B5, one 2 left in the green at G9
        </li>
        <li>
          Now there's only a single 9 in the blue and a single 6 in the tan at
          A3 and H3 respectively
        </li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image7} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image8} title="" />
      </p>
      <ul>
        <li>
          Only 2 in yellow is at C3 and 9 in yellow is at E1 followed by only 4
          in the yellow at C4
        </li>
        <li>
          There are two 7 in the blue, so remove any remaining 7. This leaves a
          single 7 in box 9 at I9
        </li>
        <li>Only 4 in orange is at F9</li>
        <li>Only 6 in blue is at E7</li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image9} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image10} title="" />
      </p>
      <ul>
        <li>
          2 shows up twice in the orange so remove all other 2 from orange; this
          leaves a single 2 in box 3 at C7
        </li>
        <li>There is only a single 8 in the salmon at B6</li>
        <li>
          1/7 must be in G9/H9, remove all other 1/7 from column 9 and box 9
        </li>
        <li>There is a single 1 in box 3 at C8</li>
        <li>There is only a single 3 in tan at H5</li>
        <li>There is only a single 1 in the pink at D6</li>
        <li>
          There must be another 6 in the purple in box 5, remove remaining 6 in
          the purple in other boxes
        </li>
        <li>
          Since there are two 1 in tan, all other numbers can only show up once,
          remove 9 from G4 and G6
        </li>
        <li>There is only a single 4 in pink at D4</li>
        <li>There is only a single 5 in green at B1</li>
        <li>
          There is only a single 2 in light blue at D1, then only a single 9 in
          light blue at F5
        </li>
        <li>There is only a single 5 in the light blue at F2</li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image11} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image12} title="" />
      </p>
      <ul>
        <li>
          Only 5 left in the red is at H6 and only 7 left in the red is at I1
        </li>
        <li>
          This leaves the only 1 followed by last number, 2, in the red at H1
          and G6 respectively
        </li>
        <li>
          Since there are two 1 in the light turquoise, remove 1 from the rest
          of the turquoise which leaves the only 1 in box 4 at E3
        </li>
        <li>The only 4 in turquoise is in D5</li>
        <li>
          Removing any remaining 7 and 8 from the dark turquoise leaves the only
          8 in box 5 in column 4. Thus we can remove the 8 from G4 leaving just
          a 4.
        </li>
        <li>The only 7 left in the orange is at C5</li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image13} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image14} title="" />
      </p>
      <ul>
        <li>
          Remove all 7 and 8 from dark green; only single 7 in box 5 at E5, only
          single 8 in box 5 at E6
        </li>
        <li>Remove all 2 and 5 from pink</li>
        <li>
          G2 and F6 must be the same number. Only single common number here is 4
        </li>
        <li>Can solve all of pink here like a normal 1&ndash;9 box</li>
        <li>Single 4 left in orange at B7</li>
        <li>Single 4 left in blue at C4</li>
        <li>Single 8 left in blue at B2</li>
      </ul>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image15} title="" />
      </p>
      <p>
        <SheetableImage className="mx-auto" alt="" src={image16} title="" />
      </p>
      <ul>
        <li>
          Remove all remaining 9 in turquoise, 1 and 9 in orange, and 2, 5, and
          8 in green as these pieces are exactly size 9.
        </li>
        <li>Single 9 left in box 4 at E5</li>
        <li>Single 9 left in row 1 at A1</li>
        <li>
          3 in column 9 must be in the purple so remove 3 from the rest of
          column 9, in column 2 must be in the turquoise, so remove from the
          rest of column 2 and box 4.
        </li>
        <li>A2 and B9 must have the same number so both must be 6</li>
        <li>Single 1 left in the red at H1</li>
        <li>
          1 and 3 onlhy show up in turquise at D2 and F2, remove all other
          numbers, 2, 6, and 8 must be in D1, E3, and F1 leaving 4 and 7 in D3
          and F3. Remove 4 and 7 from the rest of column 3
        </li>
        <li>Single 4 left in box 1 at B2</li>
        <li>4 and 6 must be in the green in row 3, so C4 is 8</li>
        <li>Only 1 in yellow is at G8</li>
        <li>Only 7 is red is at F3</li>
        <li>Only 7 in blue is at D9</li>
      </ul>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
