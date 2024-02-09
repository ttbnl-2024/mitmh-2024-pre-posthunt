import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-terrible-morning/0.png';

const SLUG = 'a-terrible-morning';
const ANSWER = `SCISSORS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a description of somebody's really bad morning. The
      narrator keeps encountering totally different and unusual objects instead
      of the regular household objects they need.
    </p>
    <p>
      There is also a pretty substantial word search. We start looking for words
      and quickly discover some fairly uncommon words that are reminiscent of
      our vaguely described "wrong" objects. We go on searching and noting the
      words. Once the word search is complete, the letters remaining in the grid
      give the following message:{' '}
      <b>
        You are on the right track! Now complete the wrong item titles. Next,
        see how two wrongs by only one digit come together to correct the
        "series of unfortunate invents." Message completed. Over.
      </b>
    </p>
    <p>
      This leads us to the idea that we need to put together the titles of
      granted U.S. patents for the various items in our story.
    </p>
    <p>
      Indeed, it turns out that each one of the wrong objects is a mashup of two
      different inventions, each having a U.S. patent with a number that differs
      in just one digit. All patents are in the public domain and can be looked
      up by title in, for example, Google Patents (
      <a href="https://patents.google.com/advanced">
        https://patents.google.com/advanced
      </a>
      ), Free Patents Online (
      <a href="http://www.freepatentsonline.com">
        http://www.freepatentsonline.com
      </a>
      ), or in the USPTO database.
    </p>
    <p>
      The next step is to observe that there is another patent, with a number
      that is exactly between the two patents for the "wrong objects", that was
      granted for the correct invention. Some trial and error in looking up
      patent numbers allows us to complete the list of the correct patents for
      the correct inventions.
    </p>
    <p>
      For example, the first incorrect contraption in our story is a fluid
      container with a condition-responsive controller instead of a digital
      alarm clock. We first put together the correct patent titles for the two
      wrong patents, which are "structure for transporting and storing flowable
      materials" and "condition-responsive control circuit." When we search in
      Google Patents, we discover a pair, U.S. 3,634,699 and U.S. 3,638,699,
      with those titles which differ by exactly 1 digit, in this case in the
      1000s place (the control circuit patent has a 4 and the liquid storage
      patent has a 8). Moreover, the patent with the number with a 6 in that
      same place, U.S. 3,636,699, is the "correct" patent for a digital alarm
      clock. We note the correct digit we needed&mdash;a 6 in the 1000s place. Each
      set works the same way, each time giving us a correct digit in a different
      position.
    </p>
    <p>
      For the final step we collect the correct digits, order them by their
      place values, and get one final number: the patent number US{' '}
      <b>6,176,866</b> for <Answerize>SCISSORS</Answerize>, which is exactly
      what our narrator needed for the new sewing project.
    </p>
    <Appendix>
      <h3>Inventions</h3>
      <Table className="my-2">
        <thead>
          <tr>
            <th>Incorrect Invention 1</th>
            <th>Incorrect Patent No. 1</th>
            <th>Incorrect Invention 2</th>
            <th>Incorrect Patent No. 2</th>
            <th>Correct Invention</th>
            <th>Correct Patent No.</th>
            <th>Correct Digit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rotary compressor apparatus</td>
            <td>
              <b>4</b>,708,599
            </td>
            <td>Soil compacting device having an air-cooled battery</td>
            <td>
              <b>8</b>,708,599
            </td>
            <td>Coffee maker</td>
            <td>
              <b>6</b>,708,599
            </td>
            <td>
              <b>6</b>
            </td>
          </tr>
          <tr>
            <td>Filling apparatus for high-altitude balloons</td>
            <td>
              9,<b>0</b>27,877
            </td>
            <td>
              Ceramic nanocomposite material and method of manufacturing thereof
            </td>
            <td>
              9,<b>2</b>27,877
            </td>
            <td>Refrigerator</td>
            <td>
              9,<b>1</b>27,877
            </td>
            <td>
              <b>1</b>
            </td>
          </tr>
          <tr>
            <td>Tank mounting structure</td>
            <td>
              3,8<b>5</b>7,576
            </td>
            <td>Production of sheet material for use as gaskets</td>
            <td>
              3,8<b>9</b>7,576
            </td>
            <td>Toilet paper roll</td>
            <td>
              3,8<b>7</b>7,576
            </td>
            <td>
              <b>7</b>
            </td>
          </tr>
          <tr>
            <td>Condition-responsive control circuit</td>
            <td>
              3,63<b>4</b>,699
            </td>
            <td>Structure for transporting and storing flowable materials</td>
            <td>
              3,63<b>8</b>,699
            </td>
            <td>Digital alarm clock</td>
            <td>
              3,63<b>6</b>,699
            </td>
            <td>
              <b>6</b>
            </td>
          </tr>
          <tr>
            <td>Noise and burglar preventive door and window apparatus</td>
            <td>
              4,791,<b>7</b>62
            </td>
            <td>Fluid valve with protected valve closing seal</td>
            <td>
              4,791,<b>9</b>62
            </td>
            <td>Electric toaster</td>
            <td>
              4,791,<b>8</b>62
            </td>
            <td>
              <b>8</b>
            </td>
          </tr>
          <tr>
            <td>Portable bureau</td>
            <td>
              11,5<b>5</b>1
            </td>
            <td>Improvement in sewing machines</td>
            <td>
              11,5<b>7</b>1
            </td>
            <td>Folding umbrella</td>
            <td>
              11,5<b>6</b>1
            </td>
            <td>
              <b>6</b>
            </td>
          </tr>
          <tr>
            <td>Vibrating hair brush</td>
            <td>
              7,917,98<b>3</b>
            </td>
            <td>Mop system, wringer device and mop</td>
            <td>
              7,917,98<b>9</b>
            </td>
            <td>Toothbrush</td>
            <td>
              7,917,98<b>6</b>
            </td>
            <td>
              <b>6</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Filled Wordsearch</h3>
      <p>
        <SheetableImage
          className="mx-auto w-[80%]"
          alt=""
          src={image0}
          title=""
        />
      </p>
      <h3>Word List</h3>
      <Table className="mt-2">
        <tbody>
          <tr>
            <td>altitude</td>
            <td>device having</td>
            <td>of sheet material</td>
          </tr>
          <tr>
            <td>an air cooled</td>
            <td>door and</td>
            <td>portable</td>
          </tr>
          <tr>
            <td>and mop</td>
            <td>filling</td>
            <td>preventive</td>
          </tr>
          <tr>
            <td>and storing</td>
            <td>flowable</td>
            <td>production</td>
          </tr>
          <tr>
            <td>apparatus</td>
            <td>fluid valve</td>
            <td>responsive</td>
          </tr>
          <tr>
            <td>apparatus</td>
            <td>for high</td>
            <td>rotary</td>
          </tr>
          <tr>
            <td>apparatus</td>
            <td>for use as gaskets</td>
            <td>soil compacting</td>
          </tr>
          <tr>
            <td>balloons</td>
            <td>hair</td>
            <td>structure</td>
          </tr>
          <tr>
            <td>battery</td>
            <td>improvement</td>
            <td>structure for</td>
          </tr>
          <tr>
            <td>brush</td>
            <td>in sewing</td>
            <td>tank</td>
          </tr>
          <tr>
            <td>bureau</td>
            <td>machines</td>
            <td>transporting</td>
          </tr>
          <tr>
            <td>burglar</td>
            <td>material and method</td>
            <td>valve closing seal</td>
          </tr>
          <tr>
            <td>ceramic nanocomposite</td>
            <td>materials</td>
            <td>vibrating</td>
          </tr>
          <tr>
            <td>circuit</td>
            <td>mop system</td>
            <td>window</td>
          </tr>
          <tr>
            <td>compressor</td>
            <td>mounting</td>
            <td>with protected</td>
          </tr>
          <tr>
            <td>condition</td>
            <td>noise and</td>
            <td>wringer device</td>
          </tr>
          <tr>
            <td>control</td>
            <td>of manufacturing thereof</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
