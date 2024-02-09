import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'road-trip-redux';
const ANSWER = `GET MY SHADE TOGETHER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We know we have gathered 18 shades of Pluto as we completed the Hunt so
      far.
    </p>
    <p>
      Three of these (the shades of GUIDE, BLINDNESS and CONDUCTION) were
      rewards for completing the Underworld, and a fourth (FIRE) was also given
      underground.
    </p>
    <p>
      Thus, we conclude that the stacked road sign represents Underworld metas.
      The other road signs are places in the USA where we received another
      shade.
    </p>
    <p>
      (The Shades are shown down the right side and bottom of the map, ordered
      alphabetically.)
    </p>
    <p>
      The signs along the route, in order of travel, have numbers corresponding
      to a note in the glove box:
    </p>
    <ul>
      <li>TEA OLIVE hole number</li>
      <li>REX STOUT's entree price</li>
      <li>Letters in BEVERLY's flower</li>
      <li>ENCHANT: ? Across</li>
      <li>INLAWS</li>
      <li>RADIATES.PILES.CORDED steps north</li>
      <li>UTC for the AQUACULTURIST's crime: _PM</li>
      <li>BRIXEN W's problem number</li>
      <li>Assassin ORIGINS index</li>
      <li>Events throughout the weekend</li>
      <li>One less than the number of OBELISK FACES</li>
      <li>JUDY COLLINS season</li>
      <li>AD DUMPS QUAY CUR electoral votes</li>
      <li>Cut off one head and this many come back...</li>
      <li>Bandmates in NO FRIENDS</li>
      <li>AR CREAM in original picture order, with some other chains</li>
      <li>HELEN's corner spaces in Azul</li>
      <li>NANA VISITOR's Venn diagram number,</li>
    </ul>
    <p>
      Each of the uppercase words refers to a key word in a puzzle from hunt,
      but as we start piecing this together, the list isn't completely random.
      With the exception of two clues, there's one puzzle per round, and the two
      clues without a capitalized word refer to entire round mechanics instead
      of a specific puzzle.
    </p>
    <p>
      If we've been taking digital notes, finding these keywords should be
      fairly easy to do with ctrl-F
    </p>
    <p>Here's the breakdown by round:</p>
    <Table>
      <thead>
        <tr>
          <th>Round</th>
          <th>Clue</th>
          <th>Puzzle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cerberus</td>
          <td>TEA OLIVE hole number</td>
          <td>Extreme Hiking</td>
        </tr>
        <tr>
          <td>Judges</td>
          <td>REX STOUT's entree price</td>
          <td>Second Helpings</td>
        </tr>
        <tr>
          <td>Charon</td>
          <td>Letters in BEVERLY's flower</td>
          <td>Asphodel</td>
        </tr>
        <tr>
          <td>YELLOWSTONE , WY</td>
          <td>ENCHANT: ? Across</td>
          <td>A Routine Cryptic</td>
        </tr>
        <tr>
          <td>OLYMPIA PARK, WA</td>
          <td>INLAWS</td>
          <td>ENNEAGRAM</td>
        </tr>
        <tr>
          <td>MISSISSIPPI R.</td>
          <td>RADIATES.PILES.CORDED steps north</td>
          <td>Follow the Directions</td>
        </tr>
        <tr>
          <td>NASHVILLE, TN</td>
          <td>UTC for the AQUACULTURIST's crime: _PM</td>
          <td>Where on Earth Is Carmina Suntigre?</td>
        </tr>
        <tr>
          <td>MINNEAPOLIS/ST PAUL</td>
          <td>BRIXEN W's problem number</td>
          <td>Inaugural Funky Stickperson Contest</td>
        </tr>
        <tr>
          <td>NEW YORK, NY</td>
          <td>Assassin ORIGINS index</td>
          <td>Intelligence Collection</td>
        </tr>
        <tr>
          <td>PHILADELPHIA, PA</td>
          <td>Events throughout the weekend</td>
          <td>(round mechanic)</td>
        </tr>
        <tr>
          <td>HELL, MI</td>
          <td>One less than the number of OBELISK FACES</td>
          <td>Text Adventure</td>
        </tr>
        <tr>
          <td>NEWPORT RI</td>
          <td>JUDY COLLINS season</td>
          <td>Julia and Friends</td>
        </tr>
        <tr>
          <td>TEXAS</td>
          <td>AD DUMPS QUAY CUR electoral votes</td>
          <td>Could You Restate That?</td>
        </tr>
        <tr>
          <td>EVERGLADES, FL</td>
          <td>Cut off one head and this many come back...</td>
          <td>(round mechanic)</td>
        </tr>
        <tr>
          <td>SEDONA, AZ</td>
          <td>Bandmates in NO FRIENDS</td>
          <td>Composing Compositions</td>
        </tr>
        <tr>
          <td>LAS VEGAS, NV</td>
          <td>AR CREAM in original picture order, with some other chains</td>
          <td>Planet Hollywood</td>
        </tr>
        <tr>
          <td>Hera</td>
          <td>HELEN's corner spaces in Azul</td>
          <td>New Rules</td>
        </tr>
        <tr>
          <td>HAWAI'I</td>
          <td>NANA VISITOR's Venn diagram number,</td>
          <td>Spacing Out</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can then notice the order matches the locations on the map. Trial and
      error (after noting that only two Underworld clues have 7 letters!) gives
      us the order for the four underworld shades as well.
    </p>
    <p>Figuring out the associated numbers gives a precise list.</p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th colSpan={2}>Stop on Route</th>
          <th>Shade</th>
          <th>Number</th>
          <th>Index by number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CERBERUS</td>
          <td>GUIDE</td>
          <td>1</td>
          <td>G</td>
        </tr>
        <tr>
          <td>2</td>
          <td>JUDGES</td>
          <td>BLINDNESS</td>
          <td>7</td>
          <td>E</td>
        </tr>
        <tr>
          <td>3</td>
          <td>CHARON</td>
          <td>CONDUCTION</td>
          <td>7</td>
          <td>T</td>
        </tr>
        <tr>
          <td>4</td>
          <td>YELLOWSTONE , WY</td>
          <td>CONCEALMENT</td>
          <td>8</td>
          <td>M</td>
        </tr>
        <tr>
          <td>5</td>
          <td>OLYMPIA PARK, WA</td>
          <td>MYSTERY</td>
          <td>2</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>6</td>
          <td>MISSISSIPPI RIVER</td>
          <td>DARKNESS</td>
          <td>8</td>
          <td>S</td>
        </tr>
        <tr>
          <td>7</td>
          <td>NASHVILLE, TN</td>
          <td>TRUTH</td>
          <td>5</td>
          <td>H</td>
        </tr>
        <tr>
          <td>8</td>
          <td>MINNEAPOLIS/ST PAUL</td>
          <td>GRACE</td>
          <td>3</td>
          <td>A</td>
        </tr>
        <tr>
          <td>9</td>
          <td>NEW YORK, NY</td>
          <td>DEATH</td>
          <td>1</td>
          <td>D</td>
        </tr>
        <tr>
          <td>10</td>
          <td>PHILADELPHIA, PA</td>
          <td>MINERALS</td>
          <td>4</td>
          <td>E</td>
        </tr>
        <tr>
          <td>11</td>
          <td>HELL, MI</td>
          <td>NOURISHMENT</td>
          <td>11</td>
          <td>T</td>
        </tr>
        <tr>
          <td>12</td>
          <td>NEWPORT, RI</td>
          <td>LOVE</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>13</td>
          <td>TEXAS</td>
          <td>BINDING</td>
          <td>7</td>
          <td>G</td>
        </tr>
        <tr>
          <td>14</td>
          <td>EVERGLADES, FL</td>
          <td>REANIMATION</td>
          <td>2</td>
          <td>E</td>
        </tr>
        <tr>
          <td>15</td>
          <td>SEDONA, AZ</td>
          <td>REST</td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td>16</td>
          <td>LAS VEGAS, NV</td>
          <td>WEALTH</td>
          <td>6</td>
          <td>H</td>
        </tr>
        <tr>
          <td>17</td>
          <td>HERA</td>
          <td>FIRE</td>
          <td>4</td>
          <td>E</td>
        </tr>
        <tr>
          <td>18</td>
          <td>OAHU, HI</td>
          <td>ATTRACTION</td>
          <td>4</td>
          <td>R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      And so, the final answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .extract-table td:nth-child(1),
      .extract-table td:nth-child(n + 4) {
        text-align: center;
      }
      .extract-table td:nth-child(2n + 3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
