import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/junky-logic/0.png';
import image2 from 'assets/solutions/junky-logic/2.png';
import image3 from 'assets/solutions/junky-logic/3.png';
import image4 from 'assets/solutions/junky-logic/4.png';
import image5 from 'assets/solutions/junky-logic/5.png';
import image6 from 'assets/solutions/junky-logic/6.png';
import image7 from 'assets/solutions/junky-logic/7.png';
import image8 from 'assets/solutions/junky-logic/8.png';
import image9 from 'assets/solutions/junky-logic/9.png';
import image10 from 'assets/solutions/junky-logic/10.png';
import image11 from 'assets/solutions/junky-logic/11.png';
import image12 from 'assets/solutions/junky-logic/12.png';
import image13 from 'assets/solutions/junky-logic/13.png';
import image14 from 'assets/solutions/junky-logic/14.png';
import image15 from 'assets/solutions/junky-logic/15.png';
import image16 from 'assets/solutions/junky-logic/16.png';
import image17 from 'assets/solutions/junky-logic/17.png';
import image18 from 'assets/solutions/junky-logic/18.png';
import image19 from 'assets/solutions/junky-logic/19.png';
import image20 from 'assets/solutions/junky-logic/20.png';
import image21 from 'assets/solutions/junky-logic/21.png';
import image22 from 'assets/solutions/junky-logic/22.png';

const SLUG = 'junky-logic';
const ANSWER = `ORLANDO BLOOM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      In this interactive puzzle, each cell can be "correct" or "wrong",
      depending on how the grid is shaded. The rule for each cell is determined
      by its letter. By playing around with the grid, we can uncover these
      rules.
    </p>
    <Table>
      <style jsx>
        {`
          td:first-child {
            text-align: center;
          }
        `}
      </style>
      <thead>
        <tr>
          <th>Letter</th>
          <th>Rule (regions are orthogonally connected components)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>Region doesn't touch the border</td>
        </tr>
        <tr>
          <td>B</td>
          <td>Sees exactly 4 cells horizontally or 4 cells vertically</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Sees the border</td>
        </tr>
        <tr>
          <td>D</td>
          <td>All diagonally adjacent cells are shaded</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Shaded</td>
        </tr>
        <tr>
          <td>F</td>
          <td>All F's are in the same region</td>
        </tr>
        <tr>
          <td>G</td>
          <td>Region is rotationally symmetric</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Even number of shaded in row</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Not in a 1x3</td>
        </tr>
        <tr>
          <td>J</td>
          <td>In the bend of a J-tetromino</td>
        </tr>
        <tr>
          <td>K</td>
          <td>Bottom left cell of a 2x2 checkerboard</td>
        </tr>
        <tr>
          <td>L</td>
          <td>Region touches the border</td>
        </tr>
        <tr>
          <td>M</td>
          <td>Sees exactly 4 cells</td>
        </tr>
        <tr>
          <td>N</td>
          <td>Exactly 2 N's in region</td>
        </tr>
        <tr>
          <td>O</td>
          <td>Not a singleton region</td>
        </tr>
        <tr>
          <td>P</td>
          <td>Exactly 5 shaded cells in 3x3 neighborhood</td>
        </tr>
        <tr>
          <td>Q</td>
          <td>No shaded 2x2 globally</td>
        </tr>
        <tr>
          <td>R</td>
          <td>Odd number of shaded in row</td>
        </tr>
        <tr>
          <td>S</td>
          <td>Exactly 1 neighbor with same shading as itself</td>
        </tr>
        <tr>
          <td>T</td>
          <td>Exactly 3 shaded among neighbors and itself</td>
        </tr>
        <tr>
          <td>U</td>
          <td>Unshaded and cell to the right shaded</td>
        </tr>
        <tr>
          <td>V</td>
          <td>Exactly 2 neighbors with same shading as itself</td>
        </tr>
        <tr>
          <td>W</td>
          <td>Exactly 2 neighbors unshaded</td>
        </tr>
        <tr>
          <td>X</td>
          <td>In a singleton region</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>Sees same distance up and down</td>
        </tr>
        <tr>
          <td>Z</td>
          <td>No unshaded 2x2 globally</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can see that with these rules, it is impossible to make all the cells
      correct, e.g., in the first row, there is an H and a R, whose rules
      directly contradict each other. Instead, according to the flavor text, our
      aim is to make exactly one error in each row.
    </p>
    <p>The completed grid is shown below (walkthrough below).</p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      Taking the letters from the wrong cells, we get the first clue phrase{' '}
      <Monospace>HAMMING CODES</Monospace>.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/Hamming_code">Hamming codes</a> is
      a family of error correcting codes of length 2<sup>r</sup> - 1. Read each
      row as a 15-bit string, treating unshaded/shaded as 0/1. Each row can be
      corrected to a valid Hamming code by flipping one bit. The correction bits
      are shown below.
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" />
    </p>
    <p>
      This gives the second clue phrase <Monospace>NOW IN REVERSE</Monospace>.
      Now we take each row, reverse it and apply the Hamming code correction
      again (then reverse it back), e.g., in the first row, the reverse string
      is 001011101111<u>0</u>10, where the underlined bit is where we should
      correct the bit. The correction bits are shown below.
    </p>
    <p>
      <SheetableImage alt="" src={image3} title="" />
    </p>
    <p>
      This gives the third clue phrase <Monospace>PARITY MATRIX</Monospace>.
      This is referring to the{' '}
      <a href="https://en.wikipedia.org/wiki/Parity-check_matrix">
        parity-check matrix
      </a>
      , a way to describe linear codes, for which the Hamming code is an
      example. More precisely, for a parity-check matrix H, the set of valid
      codewords are all x satisfying Hx = 0.
    </p>
    <p>
      Treat the entire grid as a parity-check matrix, then correct each row into
      a valid codeword. This can be done by flipping exactly one bit in each
      row. The correction bits are shown below.
    </p>
    <p>
      <SheetableImage alt="" src={image4} title="" />
    </p>
    <p>
      This gives the fourth clue phrase <Monospace>IV CELLS BELOW</Monospace>.
      Look at the cells 4 steps below these, where going past the bottom row
      loops back to the top. This spells the final answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <SheetableImage alt="" src={image5} title="" />
    </p>
    <p>
      <i>Remark</i>: Treating unshaded/shaded as 1/0 instead of 0/1 does not
      change the solution at all. This is possible for Hamming codes because
      111111111111111 is a valid code, and is possible for our parity matrix
      code because each row has an odd number of shaded cells, and 15 is odd.
    </p>
    <Appendix>
      <p>
        In the first row, H and R contradict each other. Hence, one of them is
        wrong, and all other letters in that row are correct. In particular, the
        Q is correct. In row 7, there are 2 Zs, which are both wrong or both
        correct. Hence, they are both correct. So globally, we must have no 2x2
        shaded or unshaded areas.
      </p>
      <ul>
        <li>
          The P in r1c3 implies that the 4 cells r1c2, r2c2, r1c4, r2c4 are
          shaded.{' '}
        </li>
        <li>Thus r2c2 is wrong, and all others in row 2 are correct. </li>
        <li>The E's in rows 1 and 2 are shaded. </li>
        <li>The D in r1c13 implies that r2c12 and r2c14 are shaded. </li>
        <li>
          The V in r1c15 implies that r1c14, r1c15 and r2c15 are all unshaded.{' '}
        </li>
        <li>The S's imply that the region is completed.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image6} title="" />
      </p>
      <ul>
        <li>The J-piece in row 1 can only go sideways and shaded.</li>
        <li>The A and U in r2c5, r2c6 are unshaded. r2c7 is shaded.</li>
        <li>A cannot touch the border, so r1c5 and r1c6 are shaded.</li>
        <li>
          I in r1c2 cannot be in a 1x3, so r1c3 is unshaded and r3c2 is
          unshaded.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image7} title="" />
      </p>
      <ul>
        <li>
          If the M in r3c3 is right, it must be unshaded. But then r3c4 is
          wrong. So one of r3c3 and r3c4 is wrong.
        </li>
        <li>The C in r2c7 can only see the border upwards.</li>
        <li>
          One of r12c14 and r12c15 is right; either way gives r12c14 unshaded.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image8} title="" />
      </p>
      <ul>
        <li>We claim that one of r4c14 and r4c15 is wrong. </li>
        <ul>
          <li>If they were both right, r7c15 is wrong.</li>
          <li>But then, r7c14 is also wrong.</li>
        </ul>
      </ul>
      <p>
        <SheetableImage alt="" src={image9} title="" />
      </p>
      <ul>
        <li>Now one of r4c14 and r4c15 is wrong.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image10} title="" />
      </p>
      <ul>
        <li>Now r3c3 is wrong, and is shaded.</li>
        <li>
          The K, E, D in r10c4-6 cannot be all correct, so one of them is wrong.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image11} title="" />
      </p>
      <ul>
        <li>We claim that one of r5c3, r5c4 is wrong.</li>
        <ul>
          <li>
            If they are both correct, the C must see the border downwards.{' '}
          </li>
          <li>
            Seeing through a shaded or unshaded region both lead to a
            contradiction.
          </li>
        </ul>
      </ul>
      <p>
        <SheetableImage alt="" src={image12} title="" />
      </p>
      <ul>
        <li>The N in r1c7 must find another N, so r3c9 is shaded.</li>
        <li>
          All F's must be correct and be in the same region. In particular, they
          are shaded.
        </li>
        <li>
          The C in r7c14 (if correct) can only see the border to the right.
        </li>
        <li>The U in r7c13 and C imply that r7c14 is shaded.</li>
        <li>
          If E in r6c13 is right, then the N in r6c14 is in an isolated region,
          so is wrong. So either r6c13 or r6c14 is wrong.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image13} title="" />
      </p>
      <ul>
        <li>The R in r3 implies r3c14 is shaded.</li>
        <li>r4c15 is wrong, so r4c14 is correct.</li>
        <li>
          The G is r7c10 is wrong: there is no way the giant shaded region is
          symmetric.
        </li>
        <li>r8c14 and r8c15 cannot both be correct.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image14} title="" />
      </p>
      <ul>
        <li>The D in r10c6 is wrong:</li>
        <ul>
          <li>If it is correct, then r11c7 and r9c4 are wrong.</li>
          <li>The N in r4c2 cannot find another N.</li>
        </ul>
      </ul>
      <p>
        <SheetableImage alt="" src={image15} title="" />
      </p>
      <ul>
        <li>r9c4 and r9c5 cannot both be correct.</li>
        <ul>
          <li>
            Otherwise, r8c5, r7c5 are shaded, r7c6 and r9c6 are unshaded, then
            r8c6 is wrong.
          </li>
        </ul>
      </ul>
      <p>
        <SheetableImage alt="" src={image16} title="" />
      </p>
      <ul>
        <li>
          The N in r8c9 is shaded, otherwise r9c10 is shaded then N's region is
          isolated with no other N's.
        </li>
        <li>The N's region must escape via r9c7.</li>
        <li>
          No new N's can connect to the F region, so r9c11 and r6c14 are
          unshaded.
        </li>
        <li>
          If the N in r6c14 is correct, it must find another N in a rotationally
          symmetric region, which is impossible.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image17} title="" />
      </p>
      <ul>
        <li>
          If the G in r6c3 is shaded, the N in r4c2 must be in a rotationally
          symmetric region, which is impossible.
        </li>
        <li>Now r5c3 is wrong.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image18} title="" />
      </p>
      <ul>
        <li>
          The N in r4c2 must still find another N, via the bottleneck at r9c6.
        </li>
        <li>Now r9c5 and r11c6 are wrong.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image19} title="" />
      </p>
      <ul>
        <li>
          By counting the parity of the number of N's, the N in r12c6 is
          correct.
        </li>
        <li>
          The only way for that N to find another N is via a shaded region
          through the S in r12c7. So r12c7 is wrong. We now have all the wrong
          cells.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image20} title="" />
      </p>
      <ul>
        <li>The X in row 12 is in an isolated region.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image21} title="" />
      </p>
      <ul>
        <li>The completed grid.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image22} title="" />
      </p>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
