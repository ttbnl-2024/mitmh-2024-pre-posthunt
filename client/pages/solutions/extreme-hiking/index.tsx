import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/extreme-hiking/0.png';

const SLUG = 'extreme-hiking';
const ANSWER = `PROFESSOR OAK`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Identification of the birds listed, along with flavortext, leads us to the
      golf theme of this puzzle. Examination of the map provided points us to
      the specific golf course, Augusta National, home of the Masters
      Tournament. The notes provided give directions to traversing the course
      one hole at a time, but not in the usual order from hole #1 to hole #18.
      Each of the holes on the course is named for a particular tree or
      flowering plant, and has a given number of shots (or strokes)
      representing par. Using the order as given and indexing into the tree
      name by the number of shots indicated (par plus or minus some number of
      strokes as indicated&mdash;on a golf scorecard, a circled score indicates
      a birdie), a message is revealed:{' '}
      <Monospace>ANSWER </Monospace>
      <Answerize>PROFESSOR OAK</Answerize>.
    </p>
    <Table className="my-4">
      <thead>
        <tr>
          <th>Hole #</th>
          <th>Adjustment Indicator</th>
          <th>Golf Term</th>
          <th>par</th>
          <th>Adjustment</th>
          <th>Index</th>
          <th>Tree/​Flowering Plant</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>
            <i>Stephanoaetus coronatus</i>
          </td>
          <td>EAGLE</td>
          <td>4</td>
          <td>MINUS 2</td>
          <td>2</td>
          <td>
            <Monospace>MAGNOLIA</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            <i>Bonasa umbellus</i>
          </td>
          <td>GROUSE</td>
          <td>3</td>
          <td>PLUS 3</td>
          <td>6</td>
          <td>
            <Monospace>GOLDEN BELL</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            <i>Buteo buteo</i>
          </td>
          <td>BUZZARD</td>
          <td>4</td>
          <td>PLUS 2</td>
          <td>6</td>
          <td>
            <Monospace>CHINESE FIR</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <i>Diomedea exulans</i>
          </td>
          <td>ALBATROSS</td>
          <td>4</td>
          <td>MINUS 3</td>
          <td>1</td>
          <td>
            <Monospace>WHITE DOGWOOD</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td></td>
          <td>PAR</td>
          <td>5</td>
          <td>EVEN</td>
          <td>5</td>
          <td>
            <Monospace>AZALEA</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <i>Centrocercus urophasianus</i>
          </td>
          <td>GROUSE</td>
          <td>3</td>
          <td>PLUS 3</td>
          <td>6</td>
          <td>
            <Monospace>FLOWERING CRABAPPLE</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <i>Hamirostra melanosternon</i>
          </td>
          <td>BUZZARD</td>
          <td>3</td>
          <td>PLUS 2</td>
          <td>5</td>
          <td>
            <Monospace>JUNIPER</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>
            <i>Aquila chrysaetos</i>
          </td>
          <td>EAGLE</td>
          <td>3</td>
          <td>MINUS 2</td>
          <td>1</td>
          <td>
            <Monospace>REDBUD</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>
            <i>Haliaeetus leucocephalus</i>
          </td>
          <td>EAGLE</td>
          <td>4</td>
          <td>MINUS 2</td>
          <td>2</td>
          <td>
            <Monospace>HOLLY</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            <i>Gymnogyps californianus</i>
          </td>
          <td>CONDOR</td>
          <td>5</td>
          <td>MINUS 4</td>
          <td>1</td>
          <td>
            <Monospace>FIRETHORN</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td>PAR</td>
          <td>4</td>
          <td>EVEN</td>
          <td>4</td>
          <td>
            <Monospace>CAMELLIA</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <i>Butastur indicus</i>
          </td>
          <td>BUZZARD</td>
          <td>4</td>
          <td>PLUS 2</td>
          <td>6</td>
          <td>
            <Monospace>PAMPAS</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            2 x <i>Buteo oreophilus</i>
          </td>
          <td>DOUBLE BUZZARD</td>
          <td>5</td>
          <td>PLUS 4</td>
          <td>9</td>
          <td>
            <Monospace>YELLOW JASMINE</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Circled</td>
          <td>BIRDIE</td>
          <td>4</td>
          <td>MINUS 1</td>
          <td>3</td>
          <td>
            <Monospace>FLOWERING PEACH</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Circled</td>
          <td>BIRDIE</td>
          <td>4</td>
          <td>MINUS 1</td>
          <td>3</td>
          <td>
            <Monospace>CAROLINA CHERRY</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td>PAR</td>
          <td>4</td>
          <td>EVEN</td>
          <td>4</td>
          <td>
            <Monospace>TEA OLIVE</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>17</td>
          <td>
            <i>Ictinaetus malaiensis</i>
          </td>
          <td>EAGLE</td>
          <td>4</td>
          <td>MINUS 2</td>
          <td>2</td>
          <td>
            <Monospace>NANDINA</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Circled</td>
          <td>BIRDIE</td>
          <td>5</td>
          <td>MINUS 1</td>
          <td>4</td>
          <td>
            <Monospace>PINK DOGWOOD</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <h2>Maps</h2>
    <p>
      A good source for an aerial view of the course with the holes labeled is:{' '}
      <a href="http://static.augusta.com/masters/course/mastersmap2019.pdf">
        http://static.augusta.com/masters/course/mastersmap2019.pdf
      </a>
    </p>
    <p>
      The map below has the holes labeled in the order to be{' '}
      <b>visited in the puzzle</b>. The number is roughly in the position of the
      tee, and the arrow goes to the approximate area of the hole. Note that the
      descriptions have us walking from one hole to the next tee, usually
      "off-trail", and then we're "on the trail" going from the tee to the
      hole.
    </p>
    <p>
      Compass directions and all elevation changes are approximations. Yardages
      given are the specific yardage for the particular hole.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      Topographic maps source:{' '}
      <a href="https://topobuilder.nationalmap.gov/">
        https://topobuilder.nationalmap.gov/
      </a>
    </p>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(4),
      td:nth-child(6),
      td:nth-child(8) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
