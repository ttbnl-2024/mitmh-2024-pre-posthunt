import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'greek-verse';
const ANSWER = `DACTYLIC`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see two poems. One (on the left) clues Greek people, places and things
      in a fairly straightforward way. The right side poem hides the same words.
      Between the two poems are a number of "Additional Followers".
    </p>
    <p>
      To extract, we apply "Additional Followers", and take that many letters
      past the hidden word on the right. For example, ZEUS is the "God-King of
      Hellas" in the first line of the second stanza of the left-side poem. He
      is hidden in the second-to-last line of the second stanza of the
      right-side poem, and 2 letters after his name is an <Clue>N</Clue>.
    </p>
    <Table noBorder={true} className="puzzle-table">
      <thead>
        <tr>
          <th>
            YOUR TEAM AWAITS
            <br />
            THEIR ASSIGNMENTS
          </th>
          <th colSpan={2}>
            (Additional
            <br />
            Followers)
          </th>
          <th>LABORS TO BE PERFORMED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eros as named later, (CUPID)</td>
          <td>3</td>
          <td>T</td>
          <td>
            To b<b>E CHO</b>s<u>E</u>n by the maharani:
          </td>
        </tr>
        <tr>
          <td>Maze navigator, (THESEUS)</td>
          <td>7</td>
          <td>H</td>
          <td>
            Be t<b>HE BE</b>st b<u>E</u>atboxer, beyond a doubt,
          </td>
        </tr>
        <tr>
          <td>Repeatable vocals, (ECHO)</td>
          <td>2</td>
          <td>E</td>
          <td>
            Hit a walk-off <b>HOME R</b>un fa<u>C</u>ing Shohei Ohtani
          </td>
        </tr>
        <tr>
          <td>Born wisdom-rich. (ATHENA)</td>
          <td>0</td>
          <td>A</td>
          <td>
            Style the hair of Medus<b>A, THEN </b>
            <b>
              <u>A</u>
            </b>
            sk her out.
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>God-King of Hellas, (ZEUS)</td>
          <td>2</td>
          <td>N</td>
          <td>
            Find a los<b>T ROY</b>al e<u>W</u>er of ancient brass,
          </td>
        </tr>
        <tr>
          <td>His Wife, ever-jealous, (HERA)</td>
          <td>6</td>
          <td>S</td>
          <td>
            Eat at <b>A RES</b>taurant w<u>I</u>th Ogden Nash,
          </td>
        </tr>
        <tr>
          <td>IIlium, to locals, (TROY)</td>
          <td>4</td>
          <td>W</td>
          <td>
            Fly to In<b>DIA NA</b>ke<u>D</u>, and go first class,
          </td>
        </tr>
        <tr>
          <td>Cup-bearer, (HEBE)</td>
          <td>4</td>
          <td>E</td>
          <td>
            Construct a ma<b>ZE US</b>i<u>N</u>g
          </td>
        </tr>
        <tr>
          <td className="text-right">Witch. (MEDEA)</td>
          <td>1</td>
          <td>R</td>
          <td className="text-right">
            et<b>HER A</b>nd tra<u>S</u>h.
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            Eat Italian ice from a Grecian <b>CUP</b>,
          </td>
        </tr>
        <tr>
          <td>Romanesque huntress (DIANA)</td>
          <td>3</td>
          <td>D</td>
          <td>
            <b>ID</b>en<u>T</u>ify a remnant of waxy wings,
          </td>
        </tr>
        <tr>
          <td>Such beauty wondrous, (HELEN)</td>
          <td>4</td>
          <td>A</td>
          <td>
            Meet a bro na<b>MED EA</b>
            <u>R</u>l and his wife and pup,
          </td>
        </tr>
        <tr>
          <td>Odyssey reciter, (HOMER)</td>
          <td>5</td>
          <td>C</td>
          <td>
            Give t<b>HE LEN</b>gth <u>A</u>nd the width
          </td>
        </tr>
        <tr>
          <td>Goat god with flutes. (PAN)</td>
          <td>4</td>
          <td>T</td>
          <td className="text-right">
            of <b>THESE US</b>eless t<u>H</u>ings.
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Shoes made him fleeter, (HERMES)</td>
          <td>9</td>
          <td>Y</td>
          <td>
            Get ra<b>CE RES</b>u<u>L</u>ts from a Spartan bookie,
          </td>
        </tr>
        <tr>
          <td>Rome's pleased Demeter, (CERES)</td>
          <td>2</td>
          <td>L</td>
          <td>
            Send anot<b>HER MES</b>sage to sa<u>Y</u> shalom;
          </td>
        </tr>
        <tr>
          <td>Hot-headed fighter, (ARES)</td>
          <td>9</td>
          <td>I</td>
          <td>
            Then it's u<b>P AN</b>d ou<u>T</u>- adios, rookie,
          </td>
        </tr>
        <tr>
          <td>Thick book of routes. (ATLAS)</td>
          <td>8</td>
          <td>C</td>
          <td>
            Work's done <b>AT LAS</b>t. Time to <u>C</u>ome home.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We extract <Clue>THE ANSWER </Clue>
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .puzzle-table th,
      .puzzle-table td {
        padding: 0.5em 1em;
      }
      .puzzle-table td:nth-child(2) {
        text-align: right;
      }
      .puzzle-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
