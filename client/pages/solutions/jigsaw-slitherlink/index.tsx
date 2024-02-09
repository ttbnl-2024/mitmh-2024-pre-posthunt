import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC, useState } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import CtCMath from 'components/copy_math';
import InfoIcon from 'components/info_icon';
import Modal from 'components/modal';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image1 from 'assets/solutions/jigsaw-slitherlink/1.png';
import image2 from 'assets/solutions/jigsaw-slitherlink/2.png';
import image3 from 'assets/solutions/jigsaw-slitherlink/3.png';
import image4 from 'assets/solutions/jigsaw-slitherlink/4.png';
import image5 from 'assets/solutions/jigsaw-slitherlink/5.png';
import image6 from 'assets/solutions/jigsaw-slitherlink/6.png';
import image7 from 'assets/solutions/jigsaw-slitherlink/7.png';
import image8 from 'assets/solutions/jigsaw-slitherlink/8.png';
import image10 from 'assets/solutions/jigsaw-slitherlink/10.png';
import image11 from 'assets/solutions/jigsaw-slitherlink/11.png';
import image12 from 'assets/solutions/jigsaw-slitherlink/12.png';
import image13 from 'assets/solutions/jigsaw-slitherlink/13.png';
import image17 from 'assets/solutions/jigsaw-slitherlink/17.png';
import image18 from 'assets/solutions/jigsaw-slitherlink/18.png';
import image19 from 'assets/solutions/jigsaw-slitherlink/19.png';
import image21 from 'assets/solutions/jigsaw-slitherlink/21.png';
import image22 from 'assets/solutions/jigsaw-slitherlink/22.png';
import image24 from 'assets/solutions/jigsaw-slitherlink/24.png';
import image26 from 'assets/solutions/jigsaw-slitherlink/26.png';
import image30 from 'assets/solutions/jigsaw-slitherlink/30.png';
import image31 from 'assets/solutions/jigsaw-slitherlink/31.png';
import image33 from 'assets/solutions/jigsaw-slitherlink/33.png';
import image40 from 'assets/solutions/jigsaw-slitherlink/40.png';
import image42 from 'assets/solutions/jigsaw-slitherlink/42.png';
import image43 from 'assets/solutions/jigsaw-slitherlink/43.png';
import image46 from 'assets/solutions/jigsaw-slitherlink/46.png';
import image47 from 'assets/solutions/jigsaw-slitherlink/47.png';
import image49 from 'assets/solutions/jigsaw-slitherlink/49.png';

const SLUG = 'jigsaw-slitherlink';
const ANSWER = `CHRIS WEDGE`;

const ModalImage = ({ image, maxWidth = '2/3' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <img
        alt=""
        src={image}
        title=""
        className={`w-full md:w-${maxWidth} mx-auto cursor-pointer`}
        onClick={() => void setModalOpen(true)}
      />
      <Modal onRequestClose={() => void setModalOpen(false)} isOpen={modalOpen}>
        <img alt="" src={image} title="" className="modal-image" />
      </Modal>
    </>
  );
};

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax inline={true}>
        <InfoIcon>Click on each image to expand it.</InfoIcon>
        <p>
          We are given an 8x12 grid, and a folder named "NO ROTATING" containing
          140 square jigsaw pieces. The first idea is to fit the pieces onto the
          grid without rotating (ignoring for now the fact that we are given way
          more pieces than 8x12), then solve it as a Slitherlink. However, this
          is impossible for the following reasons.
        </p>
        <ul>
          <li>There are non-integral numbers in the pieces.</li>
          <li>Some stubs cannot be matched.</li>
          <li>There is a "diamond" piece.</li>
        </ul>
        <p>
          Upon further inspection, every stub can be matched, although the
          corresponding opposite stub may be of different size. There are also
          many pieces with the same stubs. We conclude that we are allowed to
          scale the pieces and reuse them. The way the pieces are designed, this
          actually forces us to use some pieces infinitely many times in a
          fractal-like manner!
        </p>
        <p>
          We know the rules of Slitherlink: draw a non-self-intersecting loop
          along the edges of the grid such that each number in a square
          indicates how much of its perimeter is part of the loop. Generalizing
          this to fractal Slitherlink can be tricky (what happens to the loop at
          a limit point?). We shall precisely define the rules of{' '}
          <i>fractal Slitherlink</i>, in the most natural way that makes the
          puzzle solvable.
        </p>
        <ol>
          <li>
            Tile the grid with countably many squares, each of which is a
            non-degenerate (has positive side length) scaled copy of one of the
            given pieces. The stubs of the pieces must fit. Tiling means:
            <ol style={{ listStyleType: 'lower-alpha' }}>
              <li>
                The closure of the union of the squares is the entire grid.
                Here, "closure" is in the topological sense.
              </li>
              <li>
                The interiors of the squares are disjoint. Here, "interior" is
                in the topological sense.
              </li>
            </ol>
          </li>

          <li>
            Draw a simple continuous non-self-intersecting loop C within the
            grid, not passing through the inside of any square. More precisely:
            <ol className="list-[lower-alpha]">
              <li>
                C is a Jordan curve, i.e. the image of an continuous map{' '}
                <CtCMath math={'f : [0,1] \\to \\mathbb{R}^2'} /> that is
                injective other than <CtCMath math={'f(0) = f(1)'} />.
              </li>
              <li>C does not intersect the interior of any square.</li>
            </ol>
          </li>

          <li>
            The number n on any square indicates how much of its perimeter is
            part of C. More precisely, if the square has side length L and
            boundary B, then <CtCMath math={'\\frac{\\mu(B \\cap C)}{L} = n'} />
            , where μ is the 1-dimensional Lebesgue measure, i.e., it measures
            length, in a very general way.
          </li>
        </ol>
        <p>
          For rules 2 and 3, the stubs are ignored, and replaced by straight
          lines. One consequence of these rules which does not happen in finite
          Slitherlink is that not all points of the loop have to lie on the
          border of some square, as we will see in several parts of this puzzle.
          By making the loop a Jordan curve (as opposed to simply made of
          straight line segments), we allow the loop to take complex
          fractal-looking shapes, which is necessary for this puzzle.
        </p>
        <p>
          140 pieces might seem like a lot of busy work. However, pieces
          belonging to the same region generally have similar stubs and are
          already grouped together in the ordering, which should make assembling
          the jigsaw less tiresome. The pieces are able to uniquely (not
          exactly, see appendix) tile the grid, shown below. The numbers
          represent the piece number (piece 0 is the given one in the grid).
        </p>
        <p>
          <ModalImage image={image1} />
        </p>
        <p>
          Here is a picture with the Slitherlink numbers, and stubs flattened
          out.
        </p>
        <p>
          <ModalImage image={image2} />
        </p>
        <p>Here is the solution to the Slitherlink.</p>
        <p>
          <ModalImage image={image3} />
        </p>
        <p>
          For extraction, we compute the area inside the loop for each indicated
          1-wide row/column. Since our loop is a Jordan curve, by the{' '}
          <a href="https://en.wikipedia.org/wiki/Jordan_curve_theorem">
            Jordan curve theorem
          </a>
          , the "inside" of the loop is well-defined. Furthermore, the inside is
          an open set, hence is measurable. The areas are shown in the table
          below, sorted by area.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Arrow</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Column 6</td>
              <td>1.0317</td>
            </tr>
            <tr>
              <td>Column 1</td>
              <td>2.0831</td>
            </tr>
            <tr>
              <td>Column 5</td>
              <td>3.1846</td>
            </tr>
            <tr>
              <td>Row 1</td>
              <td>4.0909</td>
            </tr>
            <tr>
              <td>Column 9</td>
              <td>5.1909</td>
            </tr>
            <tr>
              <td>Row 5</td>
              <td>6.2317</td>
            </tr>
            <tr>
              <td>Column 11</td>
              <td>7.0516</td>
            </tr>
            <tr>
              <td>Row 2</td>
              <td>8.0417</td>
            </tr>
            <tr>
              <td>Row 8</td>
              <td>9.0714</td>
            </tr>
            <tr>
              <td>Row 7</td>
              <td>10.0506</td>
            </tr>
          </tbody>
        </Table>
        <p>
          The last line "X.XX" in the puzzle is telling us to look at the areas
          up to 2 decimal places. Notice that the integer parts are the numbers
          1 to 10, and the next two digits after the decimal point (with or
          without rounding) form a number between 1 and 26. Convert them via
          A1Z26 to spell the answer <Answerize>{ANSWER}</Answerize>.
        </p>
        <Appendix>
          <p>
            We shall isolate several regions of the grid to elaborate on them.
          </p>
          <p>
            <ModalImage image={image4} />
          </p>
          <h3>Region A</h3>
          <p>These are the pieces used in this region.</p>
          <p>
            <ModalImage image={image5} />
          </p>
          <p>
            It's best to describe this region recursively, using regions A and
            A'. Region A can be defined recursively as shown below.
          </p>
          <p>
            <ModalImage image={image6} />
          </p>
          <p>
            Region A' is the mirror of A, but can also be defined recursively as
            shown.
          </p>
          <p>
            <ModalImage image={image7} />
          </p>
          <p>
            All squares in this region are essentially 0, so the Slitherlink
            solution is to weave through the fractal cracks.
          </p>
          <p>
            <ModalImage image={image8} />
          </p>
          <p>
            To compute the area, note that in the recurrence, the two copies of
            the region A' have opposite interior, so the regions A' contribute{' '}
            <CtCMath math="(1/8)^2" /> to the loop interior. If the area of the
            loop interior within region A is p, then from the recurrence we have
            the relation{' '}
            <CtCMath
              math="p = (5/8)^2 + (1/8)^2 + 2(3/8)^2 p + 2(1/8)^2 p"
              display
            />
            Solving gives <CtCMath math="p = 13/22" />, or 0.5909.
          </p>
          <h3>Region B</h3>
          <p>
            <ModalImage image={image10} />
          </p>
          <p>
            This region is made of 4 right-isosceles triangle fractals, together
            with the diamond piece at the center. The Slitherlink solution is
            shown below.
          </p>
          <p>
            <ModalImage image={image11} />
          </p>
          <p>
            Remark: tiling this region is not unique, since we could have used
            multiple copies of the diamond piece to tile the diamond. However,
            using multiple pieces will likely make the Slitherlink impossible to
            solve. It can be proven that the Slitherlink is impossible if we use
            more than one (but finitely many) diamonds. It remains an open
            problem to decide if a Slitherlink solution is possible using
            infinitely many diamonds.
          </p>
          <h3>Region C</h3>
          <p>
            <ModalImage image={image12} />
          </p>
          <p>
            There are multiple Slitherlink solutions to this region in
            isolation. Below is one such solution.
          </p>
          <p>
            <ModalImage image={image13} />
          </p>
          <p>
            The uniqueness comes from knowing the number of the cell to the left
            of this region. Suppose we know that x of the left edge has to be
            part of the loop. The squares touching the left edge have side
            lengths 1/2, 1/4, 1/8, etc. Thus we obtain a unique solution, by
            writing x in binary, which forces which parts of the left edge to be
            part of the loop.
          </p>
          <p>
            This region appears twice in the grid. The first one is near the top
            left corner, and the number on the left edge is essentially 0. The
            area outside the loop within this region is{' '}
            <CtCMath
              math="(1/2)^2 + (1/4)^2 + (1/8)^2 + \ldots = 1/3"
              display
            />
            Thus the area of the interior of the loop within this region is 2/3.
          </p>
          <p>
            The second appearance is near the center, and the number on the left
            edge is essentially <CtCMath math="2 - e^{1/5}" />. This number in
            binary is 0.1100011101... Invert it to get 0.0011100010..., then the
            area outside the loop within this region can be computed as{' '}
            <CtCMath
              math="4^{-3} + 4^{-4} + 4^{-5} + 4^{-9} + \ldots = 0.0205\ldots"
              display
            />{' '}
            Thus, the area of the interior of the loop within this region is
            0.9795. There is no nice closed form for this, but an approximation
            up to 2 decimal places is sufficient for this puzzle.
          </p>
          <h3>Region D</h3>
          <p>
            <ModalImage image={image17} />
          </p>
          <p>
            This region only has 21 pieces. The pieces all have the unique
            property that the edges are partially raised, which should make
            finding these pieces and identifying the boundary of edges easier.
            The fact that all of them are squares, together with the fact that
            the entire region is also a square, uniquely determines the side
            lengths of each square. Alternatively, this configuration of squares
            may seem familiar. It is the configuration using the least number of
            distinct squares to{' '}
            <a href="https://en.wikipedia.org/wiki/Squaring_the_square">
              square the square
            </a>
            .{' '}
          </p>
          <p>
            <ModalImage image={image18} />
          </p>
          <p>The Slitherlink solution is as shown.</p>
          <p>
            <ModalImage image={image19} />
          </p>
          <p>
            The area of the interior of the loop within this region is{' '}
            <CtCMath
              math="\frac{50^2 + 35^2 + 29^2 + 4^2 + 37^2 + 16^2 + 9^2 + 7^2 + 2^2 + 24^2 + 6^2 + 19^2}{112^2} \approx 0.5831"
              display
            />
          </p>
          <h3>Region E</h3>
          <p>
            <ModalImage image={image21} />
          </p>
          <p>
            The <CtCMath math="(1/3)\times (1/3)" /> regions in the top-left and
            bottom-left corners are copies of the entire region. The Slitherlink
            is solvable once we know that the left edge is 0 (it is not known if
            other solutions exist without this assumption). The solution is as
            shown.
          </p>
          <p>
            <ModalImage image={image22} />
          </p>
          <p>
            Although this path may seem to hit the left edge many times
            (uncountably many, in fact!), the intersection with the left edge
            has measure 0. This intersection is actually the{' '}
            <a href="https://en.wikipedia.org/wiki/Cantor_set">Cantor set</a>.{' '}
          </p>
          <p>
            If the area inside the loop within this region is p, then we have
            the relation <CtCMath math="p = 2/3 + (2/9)p" />. Solving gives{' '}
            <CtCMath math="p=6/7" />.
          </p>
          <h3>Region F</h3>
          <p>
            <ModalImage image={image24} />
          </p>
          <p>
            This region also does not have a unique tiling - for example, the
            left edges of pieces 103 and 124 are the same, allowing us to use
            either, and continue tiling to the right. For any possible tiling,
            the Slitherlink solution goes from the top left corner to some point
            on the right edge, and where it ends up depends on whether we used
            pieces 103 or 124 at each step. However, the number on the square to
            the right of this region tells us where we must end up, which
            results in a unique tiling and solution. This region is essentially
            "binary searching" towards the right edge. The number we are trying
            to binary search to in this puzzle is <CtCMath math="2\pi - 6" />,
            where the height of the region is 1/2.
          </p>
          <p>
            <ModalImage image={image26} />
          </p>
          <p>
            In the puzzle, this region appears as{' '}
            <CtCMath math="(1/4)\times(1/2)" />. We write{' '}
            <CtCMath math="\pi - 3" /> in binary, which is 0.001001000011... The
            area can be seen as made of (countably many) rectangles of shape{' '}
            <CtCMath math="2^{-k} \times 2^{-k+1}" /> whenever there is a 1 in
            the k-th position of the binary string. The area of the interior of
            the loop within this region is{' '}
            <CtCMath
              math="2\cdot 4^{-3} + 2\cdot 4^{-6} + 2 \cdot 4^{-11} + 2 \cdot 4^{-12} + \ldots = 0.0317"
              display
            />
          </p>
          <p>
            The regions directly below F are the same shape, with every square
            0.
          </p>
          <h3>Region G</h3>
          <p>
            <ModalImage image={image30} />
          </p>
          <p>
            This region is made up of 8 squares, and a copy of itself in the
            center. To solve the Slitherlink, we require the information that
            the 2 sides at the top right corner cannot both be part of the loop,
            and some info about the left edge. The solution is shown.
          </p>
          <p>
            <ModalImage image={image31} />
          </p>
          <p>
            This region is <CtCMath math="2\times 2" />. We need to compute the
            area for the left column and the top row. If the area of the
            interior of the loop within the left column is p, then we have the
            relation <CtCMath math="p = 14/9 + (1/9)(2 - p)" />. Solving gives{' '}
            <CtCMath math="p=1.6" />. Similarly, we can compute the area for the
            top row to be 1.2.
          </p>
          <h3>Region H</h3>
          <p>
            <ModalImage image={image33} />
          </p>
          <p>
            This region does not have a unique tiling - pieces 85 and 106 are
            identical, with numbers 0 and 1 respectively. The Slitherlink forces
            the tiling to be unique if we know the number on the top edge. If
            the number is x, then to obtain the Slitherlink solution, we write
            1-x in "base phi". Meaning, we write 1-x as a sum of some of the
            numbers <CtCMath math="\phi^{-2}, \phi^{-3}, \phi^{-4}, \ldots" />,
            where <CtCMath math="\phi = \frac{\sqrt{5}+1}{2}" /> is the golden
            ratio. There is not a unique way to do this, however, since for
            example <CtCMath math="\phi^{-2} = \phi^{-3} + \phi^{-4}" />. But
            the Slitherlink constraint prevents us from using two consecutive
            powers of <CtCMath math="\phi" />. Every positive real number not
            expressible as a finite sum of powers of <CtCMath math="\phi" /> can
            be uniquely written as an infinite sum of distinct powers of{' '}
            <CtCMath math="\phi" />, without using consecutive powers (proof
            left as an exercise to the reader). This gives us a unique tiling
            and Slitherlink solution. For this puzzle, the number we are trying
            to write in base <CtCMath math="\phi" /> is 0.5, and the Slitherlink
            solution is essentially the identity{' '}
            <CtCMath
              math="0.5 = \phi^{-2} + \phi^{-5} + \phi^{-8} + \phi^{-11} + \ldots"
              display
            />
          </p>
          <p>
            <ModalImage image={image40} />
          </p>
          <p>
            The area of the interior of the loop within this region is{' '}
            <CtCMath
              math="\phi^{-4} + \phi^{-10} + \phi^{-16} + \ldots = 0.1545."
              display
            />
          </p>
          <h3>Region I</h3>
          <p>
            <ModalImage image={image42} />
          </p>
          <p>
            This is a Fibonacci spiral (or golden spiral). It can be seen as
            made of 4 squares and a copy of itself. The Slitherlink solution is
            as shown.
          </p>
          <p>
            <ModalImage image={image43} />
          </p>
          <p>
            The squares have side lengths{' '}
            <CtCMath math="\phi^{-1}, \phi^{-2}, \phi^{-3}, \ldots" /> If the
            area of the interior of the loop within this region is p, then we
            have the relation{' '}
            <CtCMath
              math="p = \phi^{-2} + \phi^{-4} + \phi^{-8} +  \phi^{-8}(\phi^{-1} - p)"
              display
            />
            Solving gives <CtCMath math="p = 0.5506" />.
          </p>
          <h3>Region J</h3>
          <p>
            <ModalImage image={image46} />
          </p>
          <p>
            The top left and bottom right <CtCMath math="(1/3)\times (1/3)" />{' '}
            squares are copies of itself. The Slitherlink solution is as shown.
          </p>
          <p>
            <ModalImage image={image47} />
          </p>
          <p>
            If the area of the interior of the loop within this region is p,
            then we have the relation <CtCMath math="p = 4/9 + (2/9)p" />.
            Solving gives <CtCMath math="p = 4/7" />.
          </p>
        </Appendix>
        <AuthorsNotes>
          <p>
            There exists a closed subset of [0,1] with positive measure, but
            does not contain any interval. This is done by taking the segment
            [0,1], removing the middle 1/3, then for the 2 remaining segments,
            remove the middle 1/9, then for the 4 remaining segments, remove the
            middle 1/27 etc, where we keep removing an amount that decreases
            sufficiently fast at each step. I wanted to incorporate this idea
            into the puzzle, but it seems difficult to make pieces that force
            you to remove decreasing amounts for each segment. So instead, you
            have Region E, where you repeatedly remove the middle 1/3, leaving a
            set of measure 0.
          </p>
          <p>
            There exists a Jordan curve with a{' '}
            <a href="https://en.wikipedia.org/wiki/Osgood_curve">
              positive area
            </a>
            . This means the area inside the curve and the area outside the
            curve don't necessarily add up to the area of the whole grid. This
            could make extraction ambiguous, whether to count the area of the
            curve itself or not. However, in this puzzle, the curve has area 0
            so there is no ambiguity. Making a jigsaw Slitherlink with a
            positive curve area is also hard, if even possible.
          </p>
          <p>We posed an open problem in Region B. Here it is formally.</p>
          <div className="conjecture">
            <h3>Conjecture 1</h3>
            There is no non-trivial way of tiling a unit square with (possibly
            infinitely many) number-3 squares, together with a Slitherlink path
            from the bottom left to the top left corner.
          </div>
          <p>
            By "trivial" we mean tiling it with a single number-3 square. It can
            be shown that the conjecture is true if we only allow finitely many
            squares. This conjecture is the only obstacle for proving that this
            puzzle has a unique solution.
          </p>
          <p>
            Here is another related problem: can you make a rectangular
            Slitherlink puzzle containing finitely many squares, each of which
            has the number 3? The answer is yes: just a 1x2 rectangle with 2
            squares. But there are more interesting constructions:
          </p>
          <p>
            <ModalImage image={image49} />
          </p>
          <div className="conjecture">
            <h3>Conjecture 2</h3>
            The above two are the only rectangular Slitherlink puzzles (up to
            rotations and reflections) containing finitely many squares, each of
            which has the number 3.
          </div>
          <p>
            Bonus problems: what about using infinitely many squares? What about
            using different numbers?
          </p>
          <p>
            Another problem I haven't thought much about, but there is probably
            a construction.
          </p>
          <div className="conjecture">
            <h3>Conjecture 3</h3>
            There exists a rectangular Slitherlink puzzle where every square has
            a non-integral number.
          </div>
        </AuthorsNotes>
        <Attributions>
          <p>
            Squaring the square:{' '}
            <a href="https://en.wikipedia.org/wiki/Squaring_the_square#/media/File:Smallest_perfect_squared_squares.svg">
              Wikipedia
            </a>
            , used under{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            .
          </p>
          <p>All other images are original.</p>
        </Attributions>

        <style jsx global>{`
          .modal-image {
            max-width: 90vw !important;
            max-height: 90vh !important;
          }
          .conjecture {
            border: 2px solid gray;
            border-radius: 10px;
            padding: 10px;
          }
        `}</style>
      </MathJax>
    </MathJaxContext>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
