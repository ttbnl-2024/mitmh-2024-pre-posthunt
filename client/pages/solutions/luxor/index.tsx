import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'luxor';
const ANSWER = `KETCHUP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We're presented with two multi-course menus from what look like fine
      dining establishments. The flavor text tells us that these menus are
      prepared by the "head cooks" for a "seasonal battle." We discover that
      these are hints that we need to look at the television show{' '}
      <i>Top Chef</i> and specifically the "Restaurant Wars" episode that takes
      place once every season.
    </p>
    <p>
      If we look up the "Restaurant Wars" episode for each season, we notice that
      each of the items from the menus matches a dish prepared by a team of
      chefs during one of the episodes, with one word changed from the original
      menu item. If we take the first letter of those changed items, we get the
      phrase <Monospace>LOOK ELSEWHERE</Monospace>, a hint that the extraction
      does not involve those words themselves.
    </p>
    <p>
      In each iteration of "Restaurant Wars", the competing teams create a named
      restaurant. If we record those restaurant names and use the number of the
      changed word from the menu item to index into them, we can extract two
      words from the two menus: <Monospace>ANSWER KETCHUP</Monospace>. The
      answer to this puzzle is the fanciest ingredient:{' '}
      <Answerize>KETCHUP</Answerize>.
    </p>
    <h3>Menu 1</h3>
    <Table className="my-2">
      <thead>
        <tr>
          <th>Course </th>
          <th>Original Menu Dish</th>
          <th>Top Chef Season</th>
          <th>Restaurant Name</th>
          <th>Changed Word Index</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Amuse-bouche</td>
          <td>
            Beet-Cured Hamachi with Avocado Mousse, Osetra Caviar and Celery{' '}
            <b>Lime</b> Emulsion
          </td>
          <td>13</td>
          <td>
            <Monospace>DISTRICT LA</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Appetizer</td>
          <td>
            Chickpea Cake with Seared <b>Scallop</b>, Masala Tomato Sauce &amp;
            Arugula Salad
          </td>
          <td>5</td>
          <td>
            <Monospace>SAHANA</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>1st Course</td>
          <td>
            Asparagus and <b>Six-Minute</b> Egg
          </td>
          <td>6</td>
          <td>
            <Monospace>MISSION</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Second Course</td>
          <td>
            Pan-Roasted <b>Halibut</b>, Fennel Marmalade &amp; Tomato-Fennel
            Emulsion
          </td>
          <td>7</td>
          <td>
            <Monospace>TWENTY ONE 21</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Third Course</td>
          <td>
            <b>Ricotta</b> Gnudi, Braised Oxtail Ragout, Arugula &amp; Lemon
            Zest
          </td>
          <td>8</td>
          <td>
            <Monospace>ETCH</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Fourth Course</td>
          <td>
            <b>Tiramisu</b> My Way - Rice Flour Cake with Mascarpone &amp;
            Plantain Cream
          </td>
          <td>1</td>
          <td>
            <Monospace>ROOT</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <h3>Menu 2</h3>
    <Table className="my-2">
      <thead>
        <tr>
          <th>Course </th>
          <th>Original Menu Dish</th>
          <th>Top Chef Season</th>
          <th>Restaurant Name</th>
          <th>Changed Word Index</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Drink</td>
          <td>
            <b>Matcha</b> Limonada
          </td>
          <td>18</td>
          <td>
            <Monospace>KOKOSON</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>Amuse-bouche</td>
          <td>
            Vegetable Roll with Mushrooms, <b>Carrots</b>, Cabbage &amp; Sweet
            Chili Sauce
          </td>
          <td>5</td>
          <td>
            <Monospace>SUNSET LOUNGE</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Appetizer</td>
          <td>
            Marinated Beets with Pickled <b>Cauliflower</b>, Baby Greens &amp;
            Shaved Garrotxa
          </td>
          <td>13</td>
          <td>
            <Monospace>PALATE</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>First Course</td>
          <td>
            Barbecue Coffee <b>Chicken</b> Wing
          </td>
          <td>2</td>
          <td>
            <Monospace>M.E.C.</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Second Course</td>
          <td>
            <b>Grilled</b> Halibut with Spanish Chorizo, Fennel &amp; Sherry
            Salad
          </td>
          <td>9</td>
          <td>
            <Monospace>HALF BUSHEL</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Adobo</td>
          <td>
            <b>Pork</b> Belly with Mung Bean Purée &amp; Pea Shoots Salad
          </td>
          <td>10</td>
          <td>
            <Monospace>URBANO</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Third Course</td>
          <td>
            Buttermilk English <b>Biscuit</b> Cobbler, Apples, Mixed Berries
            &amp; Cardamom Cream
          </td>
          <td>12</td>
          <td>
            <Monospace>4 PIGS</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      th:nth-child(3),
      td:nth-child(3),
      th:nth-child(5),
      td:nth-child(5),
      th:nth-child(6),
      td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
