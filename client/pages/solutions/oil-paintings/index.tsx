import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/oil-paintings/0.png';
import image1 from 'assets/solutions/oil-paintings/1.png';

const SLUG = 'oil-paintings';
const ANSWER = `BOSTON CELTICS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of strips with color images on the front
      and a grid of lines with letters on them on the back. On closer
      inspection, we realize that the color images are portions of eight famous
      oil paintings:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Leonardo Da Vinci (<i>Mona Lisa</i>, 1503-1519)</td>
        </tr>
        <tr>
          <td>
            Artemesia Gentileschi (<i>Self-Portrait as the Allegory of Painting</i>,
            1638-1639)
          </td>
        </tr>
        <tr>
          <td>Rembrandt van Rijn (<i>The Night Watch</i>, 1642)</td>
        </tr>
        <tr>
          <td>James Whistler (<i>Symphony in White, No. 1</i>, 1862)</td>
        </tr>
        <tr>
          <td>Dante Gabriel Rossetti (<i>Lady Lilith</i>, 1868)</td>
        </tr>
        <tr>
          <td>Vincent Van Gogh (<i>Green Wheat Field with Cypress</i>, 1889)</td>
        </tr>
        <tr>
          <td>Edgar Degas (<i>Combing the Hair</i>, 1895)</td>
        </tr>
        <tr>
          <td>Claude Monet (<i>Bridge Over a Pond of Water Lilies</i>, 1899)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We get to assembling! Once the paintings are assembled correctly, we
      notice that there are cleverly concealed animal images present that are
      not in the actual paintings themselves:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Painting</th>
          <th>Date</th>
          <th>Animal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Leonardo Da Vinci (<i>Mona Lisa</i>, 1503-1519)</td>
          <td>1503</td>
          <td>BEAR</td>
        </tr>
        <tr>
          <td>
            Artemesia Gentileschi (<i>Self-Portrait as the Allegory of Painting</i>,
            1638-1639)
          </td>
          <td>1638</td>
          <td>CHAMELEON</td>
        </tr>
        <tr>
          <td>Rembrandt van Rijn (<i>The Night Watch</i>, 1642)</td>
          <td>1642</td>
          <td>CHEETAH</td>
        </tr>
        <tr>
          <td>James Whistler (<i>Symphony in White, No. 1</i>, 1862)</td>
          <td>1862</td>
          <td>DRAGON</td>
        </tr>
        <tr>
          <td>Dante Gabriel Rossetti (<i>Lady Lilith</i>, 1868)</td>
          <td>1868</td>
          <td>SCORPION</td>
        </tr>
        <tr>
          <td>Vincent Van Gogh (<i>Green Wheat Field with Cypress</i>, 1889)</td>
          <td>1889</td>
          <td>SHARK</td>
        </tr>
        <tr>
          <td>Edgar Degas (<i>Combing the Hair</i>, 1895)</td>
          <td>1895</td>
          <td>VIPER</td>
        </tr>
        <tr>
          <td>Claude Monet (<i>Bridge Over a Pond of Water Lilies</i>, 1899)</td>
          <td>1899</td>
          <td>WOLF</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Next we flip the paintings over to examine the reverses. Each row of
      letters consists of a word repeated over and over. The first thing we
      notice is that the top row of letters spells a message across all eight
      paintings:{' '}
      <Monospace>
        FIFTY TWO THEMATIC WORDS ALONG PATTERN ZONE DIVISIONS
      </Monospace>
      . We also notice that there are a lot of words in these grids that are
      associated with various types of oils. In fact, there are 52 of these
      "thematic words":
    </p>
    <Table>
      <thead>
        <tr>
          <th>Cooking</th>
          <th>Health/Skincare</th>
          <th>Petroleum</th>
          <th>Misc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SUNFLOWER</td>
          <td>CASTOR</td>
          <td>MOTOR</td>
          <td>MIDNIGHT</td>
        </tr>
        <tr>
          <td>SAFFLOWER</td>
          <td>COD LIVER</td>
          <td>CRUDE</td>
          <td>FURNITURE</td>
        </tr>
        <tr>
          <td>AVOCADO</td>
          <td>ESSENTIAL</td>
          <td>SYNTHETIC</td>
          <td>LAMP</td>
        </tr>
        <tr>
          <td>PEANUT</td>
          <td>TANNING</td>
          <td>HIGH MILEAGE</td>
          <td>WHALE</td>
        </tr>
        <tr>
          <td>CORN</td>
          <td>BEARD</td>
          <td>OFFSHORE</td>
          <td>MINERAL</td>
        </tr>
        <tr>
          <td>CANOLA</td>
          <td>TEA TREE</td>
          <td>SHALE</td>
          <td>SNAKE</td>
        </tr>
        <tr>
          <td>FISH</td>
          <td>JOJOBA</td>
          <td>REFINED</td>
          <td>BOILING</td>
        </tr>
        <tr>
          <td>GRAPESEED</td>
          <td>MARULA</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ALMOND</td>
          <td>VITAMIN E</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>WALNUT</td>
          <td>ARGAN</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>SOYBEAN</td>
          <td>EUCALYPTUS</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>COTTONSEED</td>
          <td>MASSAGE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>VEGETABLE</td>
          <td>HOT</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>COCONUT</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>CHILI</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>SESAME</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>PALM (KERNEL)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>CLOVE</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ORANGE</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LEMON</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ROSEMARY</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LINSEED</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>OLIVE</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>COOKING</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>FRY</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>PEPPERMINT</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Given this, we Google our list of animals along with the term "OIL," and
      an early hit is{' '}
      <a href="https://www.pba.com/player-resources/oil-patterns">
        a list of "Oil Patterns"
      </a>{' '}
      from the Professional Bowlers' Association. Not only do these eight animal
      patterns match exactly the animals in our paintings, but they also have
      specific lines at certain intervals along the 60' bowling alley to mark
      the division between zones in the pattern. Wait a minute: 60'? Our puzzles
      are 20 tiles high, with three lines to a tile: that means each line on the
      back of our puzzle could correspond to one foot on a bowling alley!
    </p>
    <p>
      Sure enough, we discover that on each painting with an animal, most of the
      lines that match the salient foot measurements for the oil pattern
      involving that animal contain a type of oil… with the exception of one
      line for each pattern. These lines instead contain the following words:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Animal</th>
          <th>Row</th>
          <th>Word</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BEAR</td>
          <td>12</td>
          <td>US</td>
        </tr>
        <tr>
          <td>CHAMELEON</td>
          <td>39</td>
          <td>ABLE</td>
        </tr>
        <tr>
          <td>CHEETAH</td>
          <td>32</td>
          <td>SQUARE</td>
        </tr>
        <tr>
          <td>DRAGON</td>
          <td>20</td>
          <td>SHAVES</td>
        </tr>
        <tr>
          <td>SCORPION</td>
          <td>38</td>
          <td>TRIKE</td>
        </tr>
        <tr>
          <td>SHARK</td>
          <td>6</td>
          <td>SON</td>
        </tr>
        <tr>
          <td>VIPER</td>
          <td>20</td>
          <td>THERE</td>
        </tr>
        <tr>
          <td>WOLF</td>
          <td>25</td>
          <td>VERSE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Strung together, those words give the following message:{' '}
      <Monospace>USABLE SQUARES HAVE STRIKES ON THE REVERSE</Monospace>. We
      remember that in bowling notation, a strike is an X, and when we have
      identified all of those tiles, we see that they comprise, on their own, a
      single, ninth, complete painting.{' '}
    </p>
    <p>We assemble them (keeping them in position) to create: </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      A strange enough picture, but that round part in the corner looks an awful
      lot like a basketball, and when we google basketball team logos, we
      realize this is the logo of the <Answerize>{ANSWER}</Answerize>, which is
      the answer.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(3) {
        background-color: #d9ead3;
      }
      .table-2 td:nth-child(2) {
        text-align: center;
      }
      .table-2 td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
