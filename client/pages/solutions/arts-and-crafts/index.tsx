import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/arts-and-crafts/0.png';
import image1 from 'assets/solutions/arts-and-crafts/1.png';
import image2 from 'assets/solutions/arts-and-crafts/2.png';
import image3 from 'assets/solutions/arts-and-crafts/3.png';
import image4 from 'assets/solutions/arts-and-crafts/4.png';
import image5 from 'assets/solutions/arts-and-crafts/5.png';
import image6 from 'assets/solutions/arts-and-crafts/6.png';
import image7 from 'assets/solutions/arts-and-crafts/7.png';
import image8 from 'assets/solutions/arts-and-crafts/8.png';
import image9 from 'assets/solutions/arts-and-crafts/9.png';
import image10 from 'assets/solutions/arts-and-crafts/10.png';
import image11 from 'assets/solutions/arts-and-crafts/11.png';
import image12 from 'assets/solutions/arts-and-crafts/12.png';
import image13 from 'assets/solutions/arts-and-crafts/13.png';
import image14 from 'assets/solutions/arts-and-crafts/14.png';
import image15 from 'assets/solutions/arts-and-crafts/15.png';
import image16 from 'assets/solutions/arts-and-crafts/16.png';
import image17 from 'assets/solutions/arts-and-crafts/17.png';
import image18 from 'assets/solutions/arts-and-crafts/18.png';
import image19 from 'assets/solutions/arts-and-crafts/19.png';

const SLUG = 'arts-and-crafts';
const ANSWER = `GAMEMODE CREATIVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are given a list of 26 strings of numbers, and a list of 23 strings of
      numbers. Each of the 5 grids has size 26x23. The first step is solving a
      nonogram, and the strings of numbers correspond to nonogram clues for the
      rows and columns. The rows go top to bottom; the columns left to right. To
      convert to a nonogram clue, we would have to add numbers separated by ∧ or
      ∨ (and split them later). For example, row 5 in the table is "2∧13∧2 1
      1∨2", which translates to the nonogram clue "17 1 3".
    </p>
    <p>
      After solving the nonogram, draw borders to separate each contiguous block
      in a row or column, indicated by ∧ or ∨. Here's what the nonogram solution
      looks like:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      We have drawn a blue line for the ∧ separator, and a red line for the ∨
      separator.
    </p>
    <p>
      Observe that if we overlay each of the 5 grids onto the nonogram solution,
      each image lies on a shaded cell.
    </p>
    <p>
      What we have now is an origami net (clued by the flavor text "neatly
      folded papers"). The blue lines (corresponding to ∧) are mountain folds,
      while the red lines (corresponding to ∨) are valley folds. Folding the
      origami (all folds are right angled) gives a 3D structure:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      (Note that the structure is not orthogonally connected, but it is
      diagonally connected)
    </p>
    <p>
      Now we look at the images in the grids. The flavor "Steve" and "Crafts"
      are cluing Minecraft, and the images in each cell are objects in Minecraft
      related to redstone. The main use of redstone is to create logical
      circuits and contraptions.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Minecraft object</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SheetableImage alt="" src={image2} title="" />
          </td>
          <td>Redstone dust</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image3} title="" />
          </td>
          <td>Redstone torch</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image4} title="" />
          </td>
          <td>Lever</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image5} title="" />
          </td>
          <td>Redstone lamp</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image6} title="" />
          </td>
          <td>Redstone repeater</td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we overlay each grid with the origami and fold it, we get a redstone
      contraption which can be built in Minecraft. For example, here is what the
      4th grid looks like in Minecraft:
    </p>
    <p>
      <SheetableImage alt="" src={image7} title="" />
    </p>
    <p>Some remarks on building the contraption:</p>
    <ul>
      <li>
        Whenever we see an image of a dust, torch, lever or repeater, place it
        on the block it is on. Be aware of the orientations of the repeaters.
      </li>
      <li>
        Whenever we see an image of a lamp, the block it is on is the lamp
        itself.
      </li>
      <li>
        Dusts, torches and the top and bottom sides of the lamp are all facing
        in the same direction in the folded origami (up right in the Minecraft
        screenshot). This serves as a check.
      </li>
      <li>
        Some grids have an image of a redstone dust on top of a lamp (see image
        above).
      </li>
    </ul>
    <p>
      Each of the 5 contraptions has 4 levers in a row and one lamp. The lamp
      turns on/off depending on the states of the levers. Record the state of
      the lamp for all 16 possible states of the levers, for each contraption,
      in the order of the states of the levers in binary.
    </p>
    <Table>
      <tbody>
        <tr>
          <th>Levers</th>
          <th>Grid 1</th>
          <th>Grid 2</th>
          <th>Grid 3</th>
          <th>Grid 4</th>
          <th>Grid 5</th>
          <th>Extraction</th>
        </tr>
        <tr>
          <td>0000</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>0001</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>0010</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>0011</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>0100</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>0101</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>0110</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>0111</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1000</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>1001</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>1010</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1011</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>1100</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1101</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>1110</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>1111</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Read the 5-bit results of each row, convert to a number via binary (clued
      by the flavor text "bits"), then to a letter, to extract the answer{' '}
      <Answerize>GAMEMODE CREATIVE</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        The puzzle is technically solvable without a paid version of Minecraft.
        There are free redstone simulators available online (e.g.,{' '}
        <a href="https://mordritch.com/mc_rss/">
          https://mordritch.com/mc_rss/
        </a>
        ), which are able to emulate the redstone contraptions required for this
        puzzle. However, the above implementation does not include redstone
        lamps. But one can replace the lamp by an ordinary block, and look at
        the redstone/redstone torch directly above it to determine if the lamp
        would light up.
      </p>
    </AuthorsNotes>
    <Appendix>
      <p>
        Here we describe the solution to the nonogram. We first convert it into
        a pure nonogram by combining the numbers separated by ∧ or ∨. This gives
        the following nonogram.
      </p>
      <p>
        <SheetableImage alt="" src={image8} title="" />
      </p>
      <ul>
        <li>Column 6 is entirely shaded.</li>
        <li>We can shade 17 cells in the last row.</li>
        <li>We can do the same for rows 3 and 4.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image9} title="" />
      </p>
      <ul>
        <li>Rows 5-7 are entirely forced.</li>
        <li>Row 8 is partially forced.</li>
        <li>Columns 9 and 12 are partially forced.</li>
      </ul>
      <p>
        <SheetableImage alt="" src={image10} title="" />
      </p>
      <ul>
        <li>
          Keep going using standard nonogram deductions. The following images
          show the progress one would make.
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image11} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image12} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image13} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image14} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image15} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image16} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image17} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image18} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={image19} title="" />
      </p>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
