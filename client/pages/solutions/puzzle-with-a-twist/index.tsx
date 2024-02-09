import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image3 from 'assets/solutions/puzzle-with-a-twist/3.png';
import image4 from 'assets/solutions/puzzle-with-a-twist/4.png';
import image5 from 'assets/solutions/puzzle-with-a-twist/5.png';
import image6 from 'assets/solutions/puzzle-with-a-twist/6.png';
import image7 from 'assets/solutions/puzzle-with-a-twist/7.png';
import image8 from 'assets/solutions/puzzle-with-a-twist/8.png';
import image9 from 'assets/solutions/puzzle-with-a-twist/9.png';
import image10 from 'assets/solutions/puzzle-with-a-twist/10.png';
import image11 from 'assets/solutions/puzzle-with-a-twist/11.png';
import image12 from 'assets/solutions/puzzle-with-a-twist/12.png';
import image13 from 'assets/solutions/puzzle-with-a-twist/13.png';
import image14 from 'assets/solutions/puzzle-with-a-twist/14.png';
import image15 from 'assets/solutions/puzzle-with-a-twist/15.png';
import image16 from 'assets/solutions/puzzle-with-a-twist/16.png';
import image17 from 'assets/solutions/puzzle-with-a-twist/17.png';
import image18 from 'assets/solutions/puzzle-with-a-twist/18.png';
import image19 from 'assets/solutions/puzzle-with-a-twist/19.png';
import image20 from 'assets/solutions/puzzle-with-a-twist/20.png';
import image21 from 'assets/solutions/puzzle-with-a-twist/21.png';
import image22 from 'assets/solutions/puzzle-with-a-twist/22.png';
import image23 from 'assets/solutions/puzzle-with-a-twist/23.png';
import image24 from 'assets/solutions/puzzle-with-a-twist/24.png';
import image25 from 'assets/solutions/puzzle-with-a-twist/25.png';
import image26 from 'assets/solutions/puzzle-with-a-twist/26.png';
import image27 from 'assets/solutions/puzzle-with-a-twist/27.png';
import image28 from 'assets/solutions/puzzle-with-a-twist/28.png';

const SLUG = 'puzzle-with-a-twist';
const ANSWER = `HARVEST`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax inline={true}>
        <p>
          When opening this puzzle we are presented with a number of 3x3 grids
          with colored squares and numbers in various orientations. Based on the
          formatting of the puzzle, we can deduce that each row of grids should
          be considered separately. Some observations can be made about the
          grids:
        </p>
        <ul>
          <li>The color of each cell is determined by the number.</li>
          <li>Each number from 1 to 6 appears exactly 9 times.</li>
          <li>
            The centers of each 3x3 are the numbers 1 to 6 oriented upwards in
            order. (It should be clear that the 6s are 6s and not 9s from these
            observations)
          </li>
        </ul>
        <p>
          The colors and 6 3x3 grids suggest that these are faces of a 3x3x3
          Rubik's Cube. Furthermore, since we have numbers with specific
          orientations in addition to just the colors we know that we want to
          use a 3x3x3 supercube. On a supercube, the centers have a given
          orientation (this is not true on a standard Rubik's Cube). For
          example, it is not just enough to put the yellow pieces on the same
          side. We also need to make sure that all the numbers are oriented the
          same way.
        </p>
        <p>
          After assembling the cubes, solve the cubes. However, only the first
          cube in the example is solvable, the rest are impossible! For example,
          in the second example, the cube is solvable except for a center cell
          rotated by 90°. The value of the first cube in the puzzle is 0,
          while the rest are nonzero. This suggests that the values encode the
          type of "parity error" of the cube. We call this the{' '}
          <i>error value</i>. Such situations may arise in a normal Rubik's cube
          play, when the cuber accidentally <i>twists</i> a corner piece, making
          the cube unsolvable without twisting it back.
        </p>
        <ul>
          <li>
            In example 1, the cube is solvable, and has value 0. (See the
            section below for details on how to assemble each cube and solve
            them)
          </li>
          <li>
            In example 2, the cube can be solved up to a center rotated by 90°
            (in any direction), and has value 1. Note that if the center of a
            solvable cube is rotated by 180°, the cube is solvable again.
          </li>
          <li>
            In example 3, the cube can be solved up to a flipped edge, and has
            value 2. Note that if 2 different edges of a solvable cube are
            flipped, the cube is solvable again.
          </li>
          <li>
            In example 4, the cube can be solved up to a corner rotated by 120°
            clockwise, and has value 4. Note that if we twist 3 (not
            necessarily different) corners of a solvable cube by 120°
            clockwise, the cube is solvable again.
          </li>
          <li>
            In example 5, the cube can be solved up to 2 swapped edges (without
            flipping), and has value 12. Note that if we perform 2 pairs of edge
            swaps on a solvable cube, the cube is solvable again.
          </li>
          <li>
            In example 6, the cube can be solved up to a flipped edge, 2 swapped
            corners, and a corner rotated by 120° anticlockwise, and has value
            23.
          </li>
        </ul>
        <p>
          From the examples, we can see that the error value is a number from 0
          to 23, encoded using a mix of binary and ternary. There are 4
          different types of parity errors: rotated center, flipped edge,
          rotated corner, and swapped edges. Every type of error can be obtained
          by some combination of these 4 errors. In example 6, the error value
          23 = 1 + 2 + 2*4 + 12, and indeed, the error in that example is
          equivalent to rotating a center by 90°, flipping an edge, rotating
          a corner by 120° clockwise twice (or, equivalently, rotating by 120°
          anticlockwise), and swapping 2 edges. Note that swapped 2 corners is
          equivalent to rotated center + swapped 2 edges.
        </p>
        <p>Here is a summary of the types of errors and their error values.</p>
        <ul>
          <li>1: rotated center by 90° (in any direction)</li>
          <li>2: flipped edge</li>
          <li>4: corner rotated by 120° clockwise</li>
          <li>8: corner rotated by 120° anticlockwise (or 240° clockwise)</li>
          <li>12: swapped 2 edges, without flipping</li>
        </ul>
        <p>
          Swapped 2 corners is equivalent to rotated center + swapped 2 edges.
        </p>
        <p>
          Now for each set of grids in the "Exercises" section, assemble each
          set into a plausible supercube, solve it and compute its error values.
          The values for the exercises are shown in the table below.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Error value</th>
              <th>A1Z26</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">8</td>
              <td className="text-center">
                <Monospace>H</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td className="text-center">1</td>
              <td className="text-center">
                <Monospace>A</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td className="text-center">18</td>
              <td className="text-center">
                <Monospace>R</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td className="text-center">22</td>
              <td className="text-center">
                <Monospace>V</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">5</td>
              <td className="text-center">5</td>
              <td className="text-center">
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">6</td>
              <td className="text-center">19</td>
              <td className="text-center">
                <Monospace>S</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">7</td>
              <td className="text-center">20</td>
              <td className="text-center">
                <Monospace>T</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          The answer is <Answerize>{ANSWER}</Answerize>.
        </p>
        <AuthorsNotes>
          <p>
            The error values and parity errors can be precisely explained with
            some group theory. Let <CtCMath math="G" /> be the group of all
            plausible states of the supercube, if we are allowed to dismantle
            and reassemble the pieces, and let <CtCMath math="H" /> be the
            subgroup of all solvable states. Then <CtCMath math="H" /> is a
            normal subgroup of <CtCMath math="G" />, and <CtCMath math="G/H" />{' '}
            is isomorphic to the group{' '}
            <CtCMath math="\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}" />
            . The 4 generators of this quotient group are the 4 basic parity
            errors described above (technically this group can be generated by 3
            elements, but the cube errors are less natural here). We can map{' '}
            <CtCMath math="G/H" />
            to a number from 0 to 23, via the map{' '}
            <CtCMath math="(a, b, c, d) \rightarrow a + 2b +4c + 12d" /> (where{' '}
            <CtCMath math="a, b, d\in \{0, 1\}, c \in \{0, 1, 2\}" />
            ), which is precisely the error value.
          </p>
          <p>
            In the original version of the puzzle, the colors of the faces are
            arbitrarily arranged, unlike a standard Rubik's cube. However, this
            was too hard for the testsolvers, so it was nerfed to have the
            colors arranged like a standard Rubik's cube. Nevertheless, each
            cube can still be solved without the assumption of the standard
            arrangement, and in exactly the same way described in the appendix.
          </p>
        </AuthorsNotes>
        <Appendix>
          <p>
            In this section, we describe how to assemble the faces to form a
            valid net. For each set of grids, we will refer to the 3x3 grids as
            Face 1 thru 6. In particular, the center of Face n is the number n,
            oriented upwards.{' '}
          </p>
          <p>
            Here's an observation that helps with assembling the scrambled
            supercubes. Consider any cube edge in a plausible supercube. Call
            the three cells along one side of the edge A, B, C; and the three
            cells along the other side D, E, F so that A is adjacent to D, B to
            E, and C to F.
          </p>
          <p>
            <SheetableImage alt="" src={image3} title="" className="mx-auto" />
          </p>
          <p>
            A/D, B/E, and C/F are each on the same cubelet&mdash;their orientation
            with respect to each other cannot be changed without peeling the
            face stickers. Therefore, A/B/C can have the same number and same
            orientation as each other if and only if the respective D/E/F have
            the same number and same orientation as each other. (Why? Consider
            the solved cube without any parity errors and the three cell pairs
            across a cube edge (so that a cell pair is on the same cubelet). The
            three cells on each side of the edge all have the same number and
            orientation. Parity errors only affect the position and rotation of
            a cubelet, not the orientation of its stickers relative to each
            other!)
          </p>
          <p>
            In Example 1 Face 3's right edge, because none of A/B/C share number
            and orientation (A and C share number, but not orientation), they
            must be matched to an edge that also does not have any of D/E/F
            sharing number and orientation. The only such edge is Face 6's right
            edge.
          </p>
          <p>
            There are many online resources for solving a Rubik's cube, e.g.,{' '}
            <a href="https://rubikscu.be/">https://rubikscu.be/</a> for a
            step-by-step guide and an automatic solver. This site even tells us
            the parity error! Unfortunately, there are not many online resources
            for solving a supercube. However, one could forget the orientations
            and solve it like a normal Rubik's cube, then count the number of
            rotations of each face to determine the orientation of the center
            cells.
          </p>
          <h3>Example 1</h3>
          <p>
            The right side of Face 3 must be attached to the right side of Face
            6 (as explained above). The top side of Face 2 must attach to the
            left side of Face 6, since those are the only 2 edges where the
            middle cell is different (it has pattern A/B/A). This connection
            implies that the bottom of number 1 connects to the left side of
            number 6. Hence, the bottom of Face 3 is attached to the top side of
            Face 1. The bottom of Face 6 attaches to a clean edge (has the
            pattern A/A/A), and the only such edge left is the bottom of Face 4.
            Here is what the assembled cube looks like:
          </p>
          <p>
            <SheetableImage alt="" src={image4} title="" className="mx-auto" />
          </p>
          <p>
            This cube is solvable in 3 moves. Treat the center face (Face 2) as
            the front face, then in{' '}
            <a href="http://www.rubiksplace.com/move-notations/">
              Rubik's Cube move notation
            </a>
            , this is solved by: U' R F. The final state is:
          </p>
          <p>
            <SheetableImage alt="" src={image5} title="" className="mx-auto" />
          </p>
          <p>The cube is solvable, so has error value 0.</p>
          <h3>Example 2</h3>
          <p>
            The only edges with 3 different cells are: top side of Face 1, right
            side of Face 4, left and right side of Face 3. These must be
            attached in pairs, and in any case, Face 1 must be opposite Face 4.
            Hence the top side of Face 1 cannot attach to the right side of Face
            3 (otherwise 1 and 4 are adjacent), so must attach to the left side
            of Face 3, then the right side of Face 4 must attach to the right
            side of Face 3. The right side of number 3 is attached to the right
            side of number 4, so the left side of Face 4 attaches to the top
            side of Face 2. Continuing, we get the assembled cube:
          </p>
          <p>
            <SheetableImage alt="" src={image6} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image7} title="" className="mx-auto" />
          </p>
          <p>The parity error is a rotated center, which has error value 1.</p>
          <h3>Example 3</h3>
          <p>
            The right side of Face 4 must attach to the top side of Face 6. The
            top side of number 2 attaches to the right side of number 4, so the
            bottom side of Face 6 must attach to the bottom side of Face 1. The
            rest of the faces can be deduced by similar logic. The assembled
            cube is:
          </p>
          <p>
            <SheetableImage alt="" src={image8} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image9} title="" className="mx-auto" />
          </p>
          <p>An edge is flipped, and it has error value 2.</p>
          <h3>Example 4</h3>
          <p>
            The only edges with different cells (pattern A/B/C) are the right
            side of Face 4, the right side of Face 2, and the top and right side
            of Face 6. The right side of Face 2 must attach to the right side of
            Face 6, and the right side of Face 4 must attach to the top side of
            Face 6, so that the patterns of the connecting edges of Face 2 and
            Face 4 match. The assembled cube is:
          </p>
          <p>
            <SheetableImage alt="" src={image10} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image11} title="" className="mx-auto" />
          </p>
          <p>
            There is a corner twisted by 120° clockwise, and has error value 4.
          </p>
          <h3>Example 5</h3>
          <p>
            The right side of Face 2 must attach to the bottom side of Face 5
            (pattern A/B/A). The assembled cube is:
          </p>
          <p>
            <SheetableImage alt="" src={image12} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image13} title="" className="mx-auto" />
          </p>
          <p>There is a pair of swapped edges, and has error value 12.</p>
          <h3>Example 6</h3>
          <p>
            Look for edges with patterns A/A/B or A/B/B. The assembled cube is:
          </p>
          <p>
            <SheetableImage alt="" src={image14} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image15} title="" className="mx-auto" />
          </p>
          <p>
            The parity error is a rotated center, a flipped edge, a corner
            rotated by 120° anticlockwise, and a pair of swapped edges, and has
            error value 23 = 1 + 2 + 2*4 + 12.
          </p>
          <h3>Exercise 1</h3>
          <p>Look for edges with pattern A/B/C. The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image16} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image17} title="" className="mx-auto" />
          </p>
          <p>
            This has a corner rotated 120° anticlockwise. The error value is
            2*4 = 8.
          </p>
          <h3>Exercise 2</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image18} title="" className="mx-auto" />
          </p>
          <p>
            We can compute the error value directly from this. There are 2
            flipped edges (which makes them solvable), 3 center 90° rotations, 3
            corner 120° anticlockwise rotations. The error value is just 1
            (from the center rotation).
          </p>
          <h3>Exercise 3</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image19} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image20} title="" className="mx-auto" />
          </p>
          <p>
            This has a flipped edge, a pair of swapped edges, and a corner
            rotated 120° clockwise. The error value is 2 + 12 + 4 = 18.
          </p>
          <h3>Exercise 4</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image21} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image22} title="" className="mx-auto" />
          </p>
          <p>
            This has a flipped edge, a pair of swapped edges, and a corner
            rotated by 120° anticlockwise. The error value is 2 + 12 + 2*4 =
            22.
          </p>
          <h3>Exercise 5</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image23} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image24} title="" className="mx-auto" />
          </p>
          <p>
            This has a rotated center and a corner rotated by 120° clockwise.
            The error value is 1 + 4 = 5.
          </p>
          <h3>Exercise 6</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image25} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image26} title="" className="mx-auto" />
          </p>
          <p>
            This has a flipped edge, a pair of swapped corners, and a corner
            rotated by 120° clockwise. The error value is 2 + 1 + 12 + 4 = 19.
          </p>
          <h3>Exercise 7</h3>
          <p>The assembled cube is:</p>
          <p>
            <SheetableImage alt="" src={image27} title="" className="mx-auto" />
          </p>
          <p>This can be partially solved into:</p>
          <p>
            <SheetableImage alt="" src={image28} title="" className="mx-auto" />
          </p>
          <p>
            This has a pair of swapped edges and a corner rotated by 120°
            anticlockwise. The error value is 12 + 2*4 = 20.
          </p>
        </Appendix>
      </MathJax>
    </MathJaxContext>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
