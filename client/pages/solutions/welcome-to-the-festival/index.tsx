import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/welcome-to-the-festival/0.png';
import image1 from 'assets/solutions/welcome-to-the-festival/1.png';
import image2 from 'assets/solutions/welcome-to-the-festival/2.png';
import image3 from 'assets/solutions/welcome-to-the-festival/3.png';
import image4 from 'assets/solutions/welcome-to-the-festival/4.png';
import image5 from 'assets/solutions/welcome-to-the-festival/5.png';
import image6 from 'assets/solutions/welcome-to-the-festival/6.png';
import image7 from 'assets/solutions/welcome-to-the-festival/7.png';
import image8 from 'assets/solutions/welcome-to-the-festival/8.png';

const SLUG = 'welcome-to-the-festival';
const ANSWER = `BEGINNING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Searching keywords reveals that each set of locations can be matched to a
      specific Renaissance festival's grounds. Tracing the path described on a
      map reveals a letter. As clued by "a path through history", reordering the
      letters by the founding date of the festival from earliest to latest gets
      the word <Answerize>BEGINNING</Answerize>.
    </p>

    <Table>
      <thead>
        <tr>
          <th>Original Order</th>
          <th>Ren. Fest.</th>
          <th>Est.</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>Minnesota</td>
          <td>1971</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Bristol</td>
          <td>1972</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Texas</td>
          <td>1974</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Colorado</td>
          <td>1975</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Scarborough</td>
          <td>1981</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Georgia</td>
          <td>1985</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Ohio</td>
          <td>1990</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Carolina</td>
          <td>1994</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Oklahoma</td>
          <td>1995</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>

    <Appendix>
      <ol className="space-y-4">
        <li>
          Colorado Renaissance Festival. Est. 1975
          <SheetableImage alt="" src={image0} title="" />
        </li>
        <li>
          Scarborough Renaissance Festival. Est. 1981
          <SheetableImage alt="" src={image1} title="" />
        </li>
        <li>
          Texas Renaissance Festival. Est. 1974
          <SheetableImage alt="" src={image2} title="" className="mx-auto" />
        </li>
        <li>
          Oklahoma Renaissance Festival. Est. 1995
          <SheetableImage alt="" src={image3} title="" className="mx-auto" />
        </li>
        <li>
          Minnesota Renaissance Festival. Est. 1971
          <SheetableImage alt="" src={image4} title="" />
        </li>
        <li>
          Bristol Renaissance Faire. Est. 1972
          <SheetableImage alt="" src={image5} title="" />
        </li>
        <li>
          Georgia Renaissance Festival. Est. 1985
          <SheetableImage alt="" src={image6} title="" />
        </li>
        <li>
          Ohio Renaissance Festival. Est. 1990
          <SheetableImage alt="" src={image7} title="" />
        </li>
        <li>
          Carolina Renaissance Festival. Est. 1994
          <SheetableImage alt="" src={image8} title="" />
        </li>
      </ol>
    </Appendix>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(3), 
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
