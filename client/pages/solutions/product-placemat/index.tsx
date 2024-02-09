import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/product-placemat/0.png';
import image1 from 'assets/solutions/product-placemat/1.png';
import image2 from 'assets/solutions/product-placemat/2.png';
import image3 from 'assets/solutions/product-placemat/3.png';
import image4 from 'assets/solutions/product-placemat/4.png';
import image5 from 'assets/solutions/product-placemat/5.png';
import image6 from 'assets/solutions/product-placemat/6.png';
import image7 from 'assets/solutions/product-placemat/7.png';

const SLUG = 'product-placemat';
const ANSWER = `MODICUM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with seven pairs of snacks from a variety of brands. Many
      of them have references to some sort of food group on their packaging,
      like both brands of fruit snacks and the veggie straws. Combined with the
      reference to "your plate," we should consider what{' '}
      <a href="https://www.myplate.gov/">MyPlate</a> categories these items
      could fall into in a world with a slightly more permissive USDA. Foods
      should be grouped by the food-related words on their packaging, according
      to the MyPlate group (e.g., "vegetable" in the root-vegetable chips) or a
      description of the food (like "peanut butter" and "cookies" in the Oreos).
    </p>
    <Table>
      <thead>
        <tr>
          <th>Food 1</th>
          <th>Packaging Keywords</th>
          <th>MyPlate Profile</th>
          <th>Food 2</th>
          <th>Packaging Keywords</th>
          <th>MyPlate Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peanut Butter-flavored Oreos</td>
          <td>Peanut butter, cookies</td>
          <td>Grain/Protein</td>
          <td>Roasted seaweed</td>
          <td>Seaweed</td>
          <td>Vegetable</td>
        </tr>
        <tr>
          <td>Welch's-brand fruit snacks</td>
          <td>Fruit</td>
          <td>Fruit</td>
          <td>Mott's-brand fruit snacks</td>
          <td>Fruit, veggie</td>
          <td>Fruit/Vegetable </td>
        </tr>
        <tr>
          <td>Fig newtons</td>
          <td>Fig, fruit, whole grain, cookie</td>
          <td>Fruit/Grain</td>
          <td>Plant-based protein sticks</td>
          <td>Protein, peppers</td>
          <td>Protein/Vegetable</td>
        </tr>
        <tr>
          <td>Banana-flavored KitKat</td>
          <td>Banana</td>
          <td>Fruit</td>
          <td>Kale chips</td>
          <td>Kale</td>
          <td>Vegetable</td>
        </tr>
        <tr>
          <td>Pineapple-flavored Hi-Chew</td>
          <td>Fruit, Pineapple</td>
          <td>Fruit</td>
          <td>Baked green pea snacks</td>
          <td>Pea, protein</td>
          <td>Protein/Vegetable</td>
        </tr>
        <tr>
          <td>Fruit Roll-Ups</td>
          <td>Fruit, strawberry</td>
          <td>Fruit</td>
          <td>Rice Krispie treats</td>
          <td>Rice</td>
          <td>Grain</td>
        </tr>
        <tr>
          <td>Chicken and waffles-flavored chips</td>
          <td>Chicken, waffles, tapioca starch</td>
          <td>Grain/Protein</td>
          <td>Root vegetable chips</td>
          <td>Vegetable</td>
          <td>Vegetable</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Arranging these food groups on the current USDA MyPlate diagram, we may
      extract semaphore positions. In fact, the foods are ordered within each
      set by their position relative to the northwest direction, moving
      clockwise. Note that this requires interpreting snacks with two adjacent
      food groups as representing the semaphore direction between them. Here is
      an example for the first pairing:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      Repeating for the other pairs of snacks, we can extract the final answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table>
      <style jsx>{`
        td:first-child {
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th>Pairing</th>
          <th>Profile 1</th>
          <th>Profile 2</th>
          <th>Directions</th>
          <th>Semaphore</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Grain/Protein</td>
          <td>Vegetable</td>
          <td>E, SW</td>
          <td className="text-center">
            <SheetableImage alt="" src={image1} title="" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fruit</td>
          <td>Fruit/Vegetable </td>
          <td>NW, W</td>
          <td className="text-center">
            <SheetableImage alt="" src={image2} title="" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Fruit/Grain</td>
          <td>Protein/Vegetable</td>
          <td>N, S</td>
          <td className="text-center">
            <SheetableImage alt="" src={image3} title="" />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Fruit</td>
          <td>Vegetable</td>
          <td>NW, SW</td>
          <td className="text-center">
            <SheetableImage alt="" src={image4} title="" />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Fruit</td>
          <td>Protein/Vegetable</td>
          <td>NW, S</td>
          <td className="text-center">
            <SheetableImage alt="" src={image5} title="" />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Fruit</td>
          <td>Grain</td>
          <td>NW, NE</td>
          <td className="text-center">
            <SheetableImage alt="" src={image6} title="" />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Grain/Protein</td>
          <td>Vegetable</td>
          <td>E, SW</td>
          <td className="text-center">
            <SheetableImage alt="" src={image7} title="" />
          </td>
        </tr>
      </tbody>
    </Table>
    <AuthorsNotes>
      <p>
        Nathaniel: Our original concept here was to make something rooted in the
        process of cooking—a hobby I picked up in 2020 and have been salivating
        to write a puzzle about ever since. This certainly isn't that (go solve
        Redacted Recipes or something if you're interested), but we settled on
        MyPlate. None of our other snacks were as flagrant as the oreos, but
        until someone commercializes carrot-flavored ice cream, this is what
        we've got.
      </p>
      <p>
        Unfortunately, TTBNL and MIT Puzzle Club were not compensated for the
        inclusion of these items in our hunt. If any megacorporations would like
        to change that, please hit me up on Venmo.
      </p>
    </AuthorsNotes>
    <Attributions>
      <ul>
        <li>
          MyPlate diagram: <a href="https://myplate.gov">myplate.gov</a>, used
          under fair use.
        </li>
        <li>
          Semaphore diagrams:{' '}
          <a href="https://en.wikipedia.org/wiki/Flag_semaphore">Wikipedia</a>,
          used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0
          </a>.
        </li>
        <li>
          All product images used under fair use:
          <ul>
            <li>
              <a href="https://www.oreo.com/peanut-butter-creme">
                Peanut Butter-flavored Oreos
              </a>
            </li>
            <li>
              <a href="https://gimmeseaweed.com/products/sea-salt-seaweed">
                Gimme Roasted Seaweed Snacks
              </a>
            </li>
            <li>
              <a href="https://welchsfruitsnacks.com/products/mixed-fruit/">
                Welch's Mixed Fruit Fruit Snacks
              </a>
            </li>
            <li>
              <a href="https://www.motts.com/products/fruit-snacks/motts-fruit-snacks-fruit-flavored-snacks-assorted-fruit">
                Mott's Assorted Fruit
              </a>
            </li>
            <li>
              <a href="https://www.snackworks.com/products/newtons-soft-fruit-chewy-fig-cookies-10-oz/">
                Fig Newtons
              </a>
            </li>
            <li>
              <a href="https://iwonorganics.com/collections/protein-stix/products/spicy-sweet-peppers-protein-stix">
                IWon Organics Protein Stix
              </a>
            </li>
            <li>
              <a href="https://www.tokyobanana.jp/language/en/products/5.html">
                Tokyo Banana KitKat
              </a>
            </li>
            <li>
              <a href="https://rhythmfoods.com/products/original-kale-chips-4-pack">
                Rhythm Organic Kale Chips
              </a>
            </li>
            <li>
              <a href="https://www.walmart.com/ip/Hi-Chew-Stick-Pineapple-Chewy-Fruit-Candy-1-76-Oz-Pack-of-3/172310261">
                Hi-Chew Pineapple
              </a>
            </li>
            <li>
              <a href="https://www.target.com/p/harvest-snaps-green-pea-snack-crisps-caesar-3-3oz/-/A-26390108">
                Calbee Harvest Snaps
              </a>
            </li>
            <li>
              <a href="https://www.foodservicedirect.com/fruit-roll-ups-strawberry-sensation-5-ounce-10-per-case-22983070.html">
                Fruit Roll-Ups
              </a>
            </li>
            <li>
              <a href="https://www.costcobusinessdelivery.com/kelloggs-rice-krispies-treats%2C-original%2C-0.78-oz%2C-60-ct.product.100320982.html">
                Rice Krispies Treats
              </a>
            </li>
            <li>
              <a href="https://www.wildebrands.com/products/chicken-waffles">
                Wilde Protein Chips Chicken & Waffles
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com/TERRA-Original-Chips-Salt-Pack/dp/B000EQYSLC">
                Terra Original Sea Salt
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
