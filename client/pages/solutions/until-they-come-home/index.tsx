import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'until-they-come-home';
const ANSWER = `LABOR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of photos with black rectangular outlines
      over part of the photos and a list of numbered distinguishing marks.
    </p>
    <p>
      The title and flavor text and photos of Boston all suggest that these are
      the locations used for cows in Cowparade 2023, a public art exhibit that
      Boston hosted for the second time after initially hosting it in 2006. The
      black outlines indicate the location that the cow was at when the cow was
      on site.
    </p>
    <p>
      The distinguishing marks on the list are things that can be found on the
      artwork for the eleven cows whose locations are clued by the photos. Each
      cow has two such distinguishing marks; one on each side. After identifying
      this matching, we can use the numbers to index into the names of the cows
      to give the message <Clue>GERYON'S WAS THE TENTH THIS</Clue>. Geryon's
      herd of cattle was Hercules' tenth labor, so the answer is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Cow</th>
          <th>Feature</th>
          <th>Number</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>Great "Moo"sterpieces</td>
          <td>Partially obscured red square adjacent to yellow rectangle</td>
          <td>1</td>
          <td>G</td>
        </tr>
        <tr>
          <td>Yellow pumpkin</td>
          <td>3</td>
          <td>E</td>
        </tr>
        <tr>
          <td rowSpan={2}>A Great Day at Fenway</td>
          <td>Red 8 next to a red 27</td>
          <td>3</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Red K next to a grey CANCER</td>
          <td>9</td>
          <td>Y</td>
        </tr>
        <tr>
          <td rowSpan={2}>Moo-Moo Boston</td>
          <td>Box of tea</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>White whale tail next to a white lighthouse</td>
          <td>12</td>
          <td>N</td>
        </tr>
        <tr>
          <td rowSpan={2}>Newbury Street Cow</td>
          <td>Cupcake with pink frosting</td>
          <td>8</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Open tube of lipstick</td>
          <td>16</td>
          <td>W</td>
        </tr>
        <tr>
          <td rowSpan={2}>Umbrella Man Pop Art Landscape Cow</td>
          <td>Person in blue jacket and white pants</td>
          <td>8</td>
          <td>A</td>
        </tr>
        <tr>
          <td>House with blue and teal walls and three windows</td>
          <td>22</td>
          <td>S</td>
        </tr>
        <tr>
          <td rowSpan={2}>Lucky the Cow</td>
          <td>Larry Bird in a home uniform</td>
          <td>6</td>
          <td>T</td>
        </tr>
        <tr>
          <td>White 6 on a black circle</td>
          <td>7</td>
          <td>H</td>
        </tr>
        <tr>
          <td rowSpan={2}>The Udder Depths</td>
          <td>Mast with six horizontal spars in front of a moon</td>
          <td>3</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Dark lighthouse on land sloping up to the left</td>
          <td>12</td>
          <td>T</td>
        </tr>
        <tr>
          <td rowSpan={2}>Moodern Art</td>
          <td>Marilyn Monroe</td>
          <td>5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Yayoi Kusama</td>
          <td>7</td>
          <td>N</td>
        </tr>
        <tr>
          <td rowSpan={2}>Cattle of the Sun</td>
          <td>Ship with six oars</td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Merman holding a trident</td>
          <td>10</td>
          <td>H</td>
        </tr>
        <tr>
          <td rowSpan={2}>Boston Urban Sketcher Cow</td>
          <td>Lime-colored tower</td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Large baby head in front of a tree</td>
          <td>17</td>
          <td>H</td>
        </tr>
        <tr>
          <td rowSpan={2}>Miss Moosachusetts</td>
          <td>Black whale tail</td>
          <td>2</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Stained glass globe</td>
          <td>3</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .extract-table td:nth-last-child(4) {
        text-transform: uppercase;
      }
      .extract-table td:nth-child(3n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .extract-table td:nth-last-child(-n + 2) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
