import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'building-blocks';
const ANSWER = `MANY-SIDED DIE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of labeled squares and a list of
      symbols. The squares can be cut apart and assembled as a edge-to-face
      assembly puzzle so that the property described on the edge of a piece
      matches the face word of the piece that is adjacent along that edge
      (previous editions of this puzzle type in Mystery Hunt include 2016's{' '}
      <a href="http://puzzles.mit.edu/2016/puzzle/lost_skull/">Lost Skull</a>{' '}
      and 2018's{' '}
      <a href="https://puzzles.mit.edu/2018/full/puzzle/message_in_a_bottle.html">
        Message in a Bottle
      </a>
      ).
    </p>
    <p>
      As suggested by the title and flavor text, we can assemble the pieces into
      8 cubes each using 6 squares. 9 squares have a numbered arrow on them. On
      the cubes, these numbered arrows in order point at the faces that read{' '}
      <Clue>PRISON</Clue>, <Clue>AWAY</Clue>, <Clue>IMPAIRMENT</Clue>,{' '}
      <Clue>REGARD</Clue>, <Clue>FLAT</Clue>, <Clue>AWAY</Clue>,{' '}
      <Clue>COVER</Clue>, <Clue>ENTER</Clue>, <Clue>SPY</Clue>. The first
      letters of these spell <Clue>PAIR FACES</Clue>.
    </p>
    <p>
      In order to assemble the 8 cubes into one final figure, we have to
      investigate the specific words that are on the faces. In fact, every word
      can be paired with one of the other words to form a clue for a word that
      forms a word or phrase when paired with the word <Clue>FACE</Clue> (e.g.,{' '}
      <Clue>TROPICAL TREE</Clue> is <Clue>PALM</Clue>). This suggests that in
      our final figure, the 8 cubes can be arranged such that each such pair is
      overlapping to form one final face in the final figure. These twenty-four
      faces and the way they are arranged on the cubes suggest that the final
      shape being constructed is in fact a tesseract.
    </p>
    <p>
      Each of the 16 lists at the bottom can be matched to one of the 16
      vertices after alphabetizing (as suggested by the A&rarr;Z) the six face
      words that meet at that vertex. We can match these by noting for each FACE
      word or phrase whether the <Clue>FACE</Clue> (represented by the asterisk)
      appears at the start or the end of the word or phrase. So for example, in
      the constructed tesseract, one vertex is at the intersection of{' '}
      <Clue>LIFT</Clue>, <Clue>LONG</Clue>, <Clue>LOSE</Clue>,{' '}
      <Clue>PAINT</Clue>, <Clue>SMILEY</Clue>, and <Clue>TYPE</Clue>; this can
      be matched with{' '}
      <Clue>
        <span className="whitespace-nowrap">*_, _*, _*, *_, 3*, _*</span>
      </Clue>{' '}
      since the matched phrases are <Clue>FACELIFT</Clue>,{' '}
      <Clue>LONG FACE</Clue>, <Clue>LOSE FACE</Clue>, <Clue>FACE PAINT</Clue>,{' '}
      <Clue>SMILEY FACE</Clue>, and <Clue>TYPEFACE</Clue>. We can use the number
      to index a specific letter from the numbered word <Clue>SMILEY</Clue> to
      get an <Clue>I</Clue>.
    </p>
    <p>
      Starting at the vertex pointed at with the arrow, we can form a path
      traveling along edges visiting all 16 vertices that spells out{' '}
      <Clue>IT IS MANY-SIDED DIE</Clue> so the answer is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <Table className="table-1">
        <thead>
          <tr>
            <th>
              <Clue>FACE</Clue> word
            </th>
            <th>Clue word 1</th>
            <th>Clue word 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ABOUT</td>
            <td>NOT</td>
            <td>EXACTLY</td>
          </tr>
          <tr>
            <td>BLINDNESS</td>
            <td>VISUAL</td>
            <td>IMPAIRMENT</td>
          </tr>
          <tr>
            <td>BOOK</td>
            <td>MAKE</td>
            <td>RESERVATIONS</td>
          </tr>
          <tr>
            <td>CAM</td>
            <td>QUARTERBACK</td>
            <td>NEWTON</td>
          </tr>
          <tr>
            <td>CLIFF</td>
            <td>CHEERS</td>
            <td>MAILMAN</td>
          </tr>
          <tr>
            <td>CREAM</td>
            <td>ECLAIR</td>
            <td>FILLING</td>
          </tr>
          <tr>
            <td>DOWN</td>
            <td>GOOSE</td>
            <td>FEATHERS</td>
          </tr>
          <tr>
            <td>GUARD</td>
            <td>PRISON</td>
            <td>EMPLOYEE</td>
          </tr>
          <tr>
            <td>LIFT</td>
            <td>BRITISH</td>
            <td>ELEVATOR</td>
          </tr>
          <tr>
            <td>LONG</td>
            <td>KINGFISH</td>
            <td>HUEY</td>
          </tr>
          <tr>
            <td>LOSE</td>
            <td>GET</td>
            <td>DEFEATED</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>COMMENCE</td>
            <td>BUSINESS</td>
          </tr>
          <tr>
            <td>PAINT</td>
            <td>COVER</td>
            <td>CANVASES</td>
          </tr>
          <tr>
            <td>PALM</td>
            <td>TROPICAL</td>
            <td>TREE</td>
          </tr>
          <tr>
            <td>PLANT</td>
            <td>GARDEN</td>
            <td>ITEM</td>
          </tr>
          <tr>
            <td>PLATE</td>
            <td>FLAT</td>
            <td>DISH</td>
          </tr>
          <tr>
            <td>POKER</td>
            <td>FIREPLACE</td>
            <td>ROD</td>
          </tr>
          <tr>
            <td>ROCK</td>
            <td>PLYMOUTH</td>
            <td>LANDMARK</td>
          </tr>
          <tr>
            <td>SAVE</td>
            <td>SQUIRREL</td>
            <td>AWAY</td>
          </tr>
          <tr>
            <td>SCAR</td>
            <td>SURGERY</td>
            <td>SOUVENIR</td>
          </tr>
          <tr>
            <td>SMILEY</td>
            <td>LE CARRE</td>
            <td>SPY</td>
          </tr>
          <tr>
            <td>STRAIGHT</td>
            <td>WITHOUT</td>
            <td>DEVIATION</td>
          </tr>
          <tr>
            <td>TYPE</td>
            <td>ENTER</td>
            <td>DATA</td>
          </tr>
          <tr>
            <td>VALUE</td>
            <td>REGARD</td>
            <td>HIGHLY</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table className="table-2 table-fixed ">
        <thead>
          <tr>
            <th colSpan={6}>Alphabetized Sequence</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*1,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>DOWN</td>
            <td>LIFT</td>
            <td>LONG</td>
            <td>PAINT</td>
            <td>PLATE</td>
            <td>POKER</td>
            <td>D</td>
          </tr>
          <tr>
            <td>*5,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_</td>
            <td></td>
          </tr>
          <tr>
            <td>BLINDNESS</td>
            <td>CREAM</td>
            <td>DOWN</td>
            <td>LIFT</td>
            <td>OPEN</td>
            <td>PLATE</td>
            <td>D</td>
          </tr>
          <tr>
            <td>5*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>ABOUT</td>
            <td>BOOK</td>
            <td>LOSE</td>
            <td>PAINT</td>
            <td>SCAR</td>
            <td>SMILEY</td>
            <td>T</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>_*,</td>
            <td>*4,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_</td>
            <td></td>
          </tr>
          <tr>
            <td>CAM</td>
            <td>LONG</td>
            <td>PLANT</td>
            <td>PLATE</td>
            <td>POKER</td>
            <td>VALUE</td>
            <td>N</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>_*,</td>
            <td>_*,</td>
            <td>1*,</td>
            <td>_*,</td>
            <td>*_</td>
            <td></td>
          </tr>
          <tr>
            <td>BLINDNESS</td>
            <td>CLIFF</td>
            <td>ROCK</td>
            <td>SAVE</td>
            <td>TYPE</td>
            <td>VALUE</td>
            <td>S</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>*2,</td>
            <td>_*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>BLINDNESS</td>
            <td>CLIFF</td>
            <td>CREAM</td>
            <td>LIFT</td>
            <td>SMILEY</td>
            <td>TYPE</td>
            <td>I</td>
          </tr>
          <tr>
            <td>_*,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>*3,</td>
            <td>*_,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>ABOUT</td>
            <td>BOOK</td>
            <td>DOWN</td>
            <td>PAINT</td>
            <td>PALM</td>
            <td>POKER</td>
            <td>I</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*4,</td>
            <td>_*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>CAM</td>
            <td>GUARD</td>
            <td>OPEN</td>
            <td>PALM</td>
            <td>ROCK</td>
            <td>STRAIGHT</td>
            <td>M</td>
          </tr>
          <tr>
            <td>_*,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>*5,</td>
            <td>_*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>ABOUT</td>
            <td>CLIFF</td>
            <td>CREAM</td>
            <td>GUARD</td>
            <td>SCAR</td>
            <td>SMILEY</td>
            <td>D</td>
          </tr>
          <tr>
            <td>_*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>_*,</td>
            <td>1*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>CLIFF</td>
            <td>GUARD</td>
            <td>ROCK</td>
            <td>SAVE</td>
            <td>SCAR</td>
            <td>STRAIGHT</td>
            <td>S</td>
          </tr>
          <tr>
            <td>_*,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>2*,</td>
            <td>*_</td>
            <td></td>
          </tr>
          <tr>
            <td>LONG</td>
            <td>LOSE</td>
            <td>PLANT</td>
            <td>SAVE</td>
            <td>TYPE</td>
            <td>VALUE</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>_*,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>3*,</td>
            <td>*_</td>
            <td></td>
          </tr>
          <tr>
            <td>ABOUT</td>
            <td>CREAM</td>
            <td>DOWN</td>
            <td>GUARD</td>
            <td>OPEN</td>
            <td>PALM</td>
            <td>E</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>_*,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>3*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>LIFT</td>
            <td>LONG</td>
            <td>LOSE</td>
            <td>PAINT</td>
            <td>SMILEY</td>
            <td>TYPE</td>
            <td>I</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>*_,</td>
            <td>4*,</td>
            <td>_*</td>
            <td></td>
          </tr>
          <tr>
            <td>BOOK</td>
            <td>CAM</td>
            <td>PALM</td>
            <td>PLANT</td>
            <td>POKER</td>
            <td>STRAIGHT</td>
            <td>E</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>*2</td>
            <td></td>
          </tr>
          <tr>
            <td>BLINDNESS</td>
            <td>CAM</td>
            <td>OPEN</td>
            <td>PLATE</td>
            <td>ROCK</td>
            <td>VALUE</td>
            <td>A</td>
          </tr>
          <tr>
            <td>*_,</td>
            <td>_*,</td>
            <td>*_,</td>
            <td>_*,</td>
            <td>_*,</td>
            <td>5*</td>
            <td></td>
          </tr>
          <tr>
            <td>BOOK</td>
            <td>LOSE</td>
            <td>PLANT</td>
            <td>SAVE</td>
            <td>SCAR</td>
            <td>STRAIGHT</td>
            <td>I</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      .table-1 td:nth-child(1),
      .table-2 td {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-2 td {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
