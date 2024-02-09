import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/cheerful-rulers-kingdom/0.png';
import image1 from 'assets/solutions/cheerful-rulers-kingdom/1.png';
import image2 from 'assets/solutions/cheerful-rulers-kingdom/2.png';
import image3 from 'assets/solutions/cheerful-rulers-kingdom/3.png';
import image4 from 'assets/solutions/cheerful-rulers-kingdom/4.png';
import image5 from 'assets/solutions/cheerful-rulers-kingdom/5.png';
import image6 from 'assets/solutions/cheerful-rulers-kingdom/6.png';
import image7 from 'assets/solutions/cheerful-rulers-kingdom/7.png';
import image8 from 'assets/solutions/cheerful-rulers-kingdom/8.png';
import image9 from 'assets/solutions/cheerful-rulers-kingdom/9.png';
import image10 from 'assets/solutions/cheerful-rulers-kingdom/10.png';
import image11 from 'assets/solutions/cheerful-rulers-kingdom/11.png';
import image12 from 'assets/solutions/cheerful-rulers-kingdom/12.png';
import image13 from 'assets/solutions/cheerful-rulers-kingdom/13.png';
import image14 from 'assets/solutions/cheerful-rulers-kingdom/14.png';
import image15 from 'assets/solutions/cheerful-rulers-kingdom/15.png';
import image16 from 'assets/solutions/cheerful-rulers-kingdom/16.png';

const SLUG = 'cheerful-rulers-kingdom';
const ANSWER = `SUGARED`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <h3>Location Puzzle: Preparing the Dough</h3>
    <p>
      This puzzle consists of 16 sets of alphabetized letters. Each set is a
      letterbank for the name of a playable character (ignoring any instance of
      "Cookie") in Cookie Run Kingdom, plus an extra letter.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Letterbank</th>
          <th>Character Name</th>
          <th>Extra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>AÄCDEHKLRSWZ</Monospace>
          </td>
          <td>
            <Monospace>SCHWARZWÄLDER</Monospace>
          </td>
          <td className="text-center">
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BEHIR</Monospace>
          </td>
          <td>
            <Monospace>HERB Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ACDNOV</Monospace>
          </td>
          <td>
            <Monospace>AVOCADO Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ACGINPRTV</Monospace>
          </td>
          <td>
            <Monospace>CAPTAIN CAVIAR Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AGIKMNOTU</Monospace>
          </td>
          <td>
            <Monospace>KOUIGN-AMANN Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AELOT</Monospace>
          </td>
          <td>
            <Monospace>LATTE Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ABDGNOPRS</Monospace>
          </td>
          <td>
            <Monospace>SNAPDRAGON Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>EGILMTUWYZ</Monospace>
          </td>
          <td>
            <Monospace>TWIZZLY GUMMY Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ABEHKNORST</Monospace>
          </td>
          <td>
            <Monospace>SORBET SHARK Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AINO</Monospace>
          </td>
          <td>
            <Monospace>ONION Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AEGLMN</Monospace>
          </td>
          <td>
            <Monospace>ANGEL Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AEIKLMWY</Monospace>
          </td>
          <td>
            <Monospace>MILKY WAY Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ABCDIKLNRS</Monospace>
          </td>
          <td>
            <Monospace>BLACK RAISIN Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ALPRSTY</Monospace>
          </td>
          <td>
            <Monospace>PASTRY Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AEFIRSTY</Monospace>
          </td>
          <td>
            <Monospace>SEA FAIRY Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>GHILMNORT</Monospace>
          </td>
          <td>
            <Monospace>MOONLIGHT Cookie</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The unused letters spell out <Monospace>KINGTOBENAMEDLTR</Monospace>.
      Searching for this string in the Hollyberry server in Cookie Run Kingdom
      reveals it to be an existing kingdom, which can then be visited. Doing so
      reveals the kingdom layout necessary to solve the rest of the subpuzzles{' '}
      and metapuzzle.
    </p>
    <h3>Pure Vanilla's Puzzle: Pyrrhic Victory</h3>
    <p>This subpuzzle comprises six areas near the kingdom's train station. </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      The flavortext details how Pure Vanilla "discovered" a new method of
      winning MIT Mystery Hunt during April Fools 2022&mdash;in that event in CRK,
      he became the Pure Vanilla <b>Coin</b>. Each fenced-off area contains
      decors cluing the theme of a past MIT Mystery Hunt, along with a line of
      flowers showing the enumeration of that hunt's "coin". A number of these
      flowers are distinct from the rest&mdash;the corresponding letters are to be
      extracted and sorted by the sequence below all the areas.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Decor Description/Explanation</th>
          <th>MITMH Year</th>
          <th>Coin Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Pewpew Arcade theme: An arcade typically contains video games, which
            was the 2011 theme.
          </td>
          <td className="text-center">2011</td>
          <td>
            <Monospace>CO</Monospace>
            <b>
              <u>
                <Monospace>M</Monospace>
              </u>
            </b>
            <Monospace>PAN</Monospace>
            <b>
              <u>
                <Monospace>I</Monospace>
              </u>
            </b>
            <Monospace>ON </Monospace>
            <b>
              <u>
                <Monospace>C</Monospace>
              </u>
            </b>
            <Monospace>UBE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Airship landmark, water tiles: The airship is vaguely steampunk, the
            water tiles clue a deep sea. Both of these match 2015.
          </td>
          <td className="text-center">2015</td>
          <td>
            <Monospace>L</Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>DEST</Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>NE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Christmas/Halloween decor: 2019's kickoff featured Jack Skellington
            and Santa Claus, and its first meta involved both Christmas and
            Halloween Town.
          </td>
          <td className="text-center">2019</td>
          <td>
            <Monospace>MA</Monospace>
            <b>
              <u>
                <Monospace>NH</Monospace>
              </u>
            </b>
            <Monospace>OLE </Monospace>
            <b>
              <u>
                <Monospace>C</Monospace>
              </u>
            </b>
            <Monospace>OVER</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Carnival theme: The balloon vendor and merry-go-round both appeared
            in 2020.
          </td>
          <td className="text-center">2020</td>
          <td>
            <Monospace>PRESSED PE</Monospace>
            <b>
              <u>
                <Monospace>NN</Monospace>
              </u>
            </b>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Puppet theater, concert hall: Clues musical theater, the theme of
            2012.
          </td>
          <td className="text-center">2012</td>
          <td>
            <Monospace>T</Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>NY </Monospace>
            <b>
              <u>
                <Monospace>A</Monospace>
              </u>
            </b>
            <Monospace>WARD</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Assorted decor: The decor in the back is loosely associated with a
            fighter, cleric, and wizard. The front decor clues D&amp;D. This was
            2017's theme
          </td>
          <td className="text-center">2017</td>
          <td>
            <b>
              <u>
                <Monospace>T</Monospace>
              </u>
            </b>
            <Monospace>WO S</Monospace>
            <b>
              <u>
                <Monospace>I</Monospace>
              </u>
            </b>
            <Monospace>DED D</Monospace>
            <b>
              <u>
                <Monospace>I</Monospace>
              </u>
            </b>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Monospace>A COIN COMIN' IN HOT</Monospace>.
    </p>
    <h3>Hollyberry's Puzzle: Housing Brawls</h3>
    <p>
      This subpuzzle uses the 16 playable characters identified in the location
      puzzle, as well as the Cookie House/Mansion designs. Each of eight house
      designs is accompanied by a clue to one of the eight classes in CRK&mdash;each
      class is associated with exactly two of the playable characters from the
      location puzzle.
    </p>
    <Table>
      <thead>
        <tr>
          <th>House Style</th>
          <th>Clue</th>
          <th>Class</th>
          <th>Character 1</th>
          <th>Character 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bg-[#d9ead3]">Matcha</td>
          <td>Long-distance</td>
          <td>Ranged</td>
          <td>Pastry</td>
          <td>Twizzly Gummy</td>
        </tr>
        <tr>
          <td className="bg-[#d5a6bd]">Bear Jelly</td>
          <td>Bolster</td>
          <td>Support</td>
          <td>Onion</td>
          <td>Snapdragon</td>
        </tr>
        <tr>
          <td className="bg-[#fff2cc]">Vanilla</td>
          <td>___ attorney</td>
          <td>Defense</td>
          <td>Avocado</td>
          <td>Kouign-amann</td>
        </tr>
        <tr>
          <td>Holiday</td>
          <td>Mending</td>
          <td>Healing</td>
          <td>Herb</td>
          <td>Angel</td>
        </tr>
        <tr>
          <td className="bg-[#cccccc]">Dark Cacao</td>
          <td>Surprise attack</td>
          <td>Ambush</td>
          <td>Black Raisin</td>
          <td>Sorbet Shark</td>
        </tr>
        <tr>
          <td className="bg-[#cfe2f3]">Cupola Choco</td>
          <td>B-17, e.g.</td>
          <td>Bomber</td>
          <td>Sea Fairy</td>
          <td>Captain Caviar</td>
        </tr>
        <tr>
          <td className="bg-[#a4c2f4]">Starlight</td>
          <td>The M of ILM</td>
          <td>Magic</td>
          <td>Moonlight</td>
          <td>Latte</td>
        </tr>
        <tr>
          <td className="bg-[#dd7e6b]">Dragon</td>
          <td>Ask for payment</td>
          <td>Charge</td>
          <td>Schwarzwälder</td>
          <td>Milky Way</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The kingdom includes a 4x4 grid comprising one house and one mansion of
      each style:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      As instructed, we identify the skills of each character of one class
      (ignoring those granted by magic candies or crystal jams), then assign the
      mansion to the character with the longer skill name. The two bomber-class
      characters have skill names of equal length, but Sea Fairy's has the
      longer first word (Soaring &gt; Black), so she gets the mansion per the
      tiebreaker condition.{' '}
    </p>
    <p>
      After the brawls, the characters are assigned to houses (H)/mansions (M)
      as follows:
    </p>
    <Table>
      <tbody>
        <tr>
          <td className="bg-[#fff2cc]">Kouign-Amann</td>
          <td className="bg-[#dd7e6b]">Milky Way</td>
          <td className="bg-[#cccccc]">Sorbet Shark</td>
          <td className="bg-[#d5a6bd]">Onion</td>
        </tr>
        <tr>
          <td className="bg-[#a4c2f4]">Latte</td>
          <td className="bg-[#dd7e6b]">Schwarzwälder</td>
          <td className="bg-[#a4c2f4]">Moonlight</td>
          <td className="bg-[#d9ead3]">Pastry</td>
        </tr>
        <tr>
          <td className="bg-[#cfe2f3]">Captain Caviar</td>
          <td className="bg-[#cccccc]">Black Raisin</td>
          <td className="bg-[#cfe2f3]">Sea Fairy</td>
          <td className="bg-[#d9ead3]">Twizzly Gummy</td>
        </tr>
        <tr>
          <td>Herb</td>
          <td>Angel</td>
          <td className="bg-[#fff2cc]">Avocado</td>
          <td className="bg-[#d5a6bd]">Snapdragon</td>
        </tr>
        <tr>
          <td className="!border-none py-2"></td>
          <td className="!border-none"></td>
          <td className="!border-none"></td>
          <td className="!border-none"></td>
        </tr>
        <tr>
          <td className="bg-[#fff2cc]">
            <Monospace>PALADIN'S WAY</Monospace> (H, 1)
          </td>
          <td className="bg-[#dd7e6b]">
            <Monospace>SUGARCLOUD EXPRESS</Monospace> (M, 4)
          </td>
          <td className="bg-[#cccccc]">
            <Monospace>SHARK SPLASH</Monospace> (H, 4)
          </td>
          <td className="bg-[#d5a6bd]">
            <Monospace>UNSTOPPABLE TEARS</Monospace> (M, 4)
          </td>
        </tr>
        <tr>
          <td className="bg-[#a4c2f4]">
            <Monospace>CARE FOR A LATTE?</Monospace> (H, 5)
          </td>
          <td className="bg-[#dd7e6b]">
            <Monospace>CHOCO CHIP HAMMER</Monospace> (H, 8)
          </td>
          <td className="bg-[#a4c2f4]">
            <Monospace>DREAM OF THE NIGHT SKY</Monospace> (M, 2, 3)
          </td>
          <td className="bg-[#d9ead3]">
            <Monospace>BATTLE PRAYER</Monospace> (M, 7)
          </td>
        </tr>
        <tr>
          <td className="bg-[#cfe2f3]">
            <Monospace>BLACK SHARK TORPEDO</Monospace> (H, 3)
          </td>
          <td className="bg-[#cccccc]">
            <Monospace>SHADOW WATCHER</Monospace> (M, 13)
          </td>
          <td className="bg-[#cfe2f3]">
            <Monospace>SOARING COMPASSION</Monospace> (M, 4)
          </td>
          <td className="bg-[#d9ead3]">
            <Monospace>TWIZZLY BEAM</Monospace> (H, 7)
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SUNNY GARDEN</Monospace> (H, 1)
          </td>
          <td>
            <Monospace>CELESTIAL LIGHT</Monospace> (M, 8)
          </td>
          <td className="bg-[#fff2cc]">
            <Monospace>BATTLE SMITHING</Monospace> (M, 1, 6)
          </td>
          <td className="bg-[#d5a6bd]">
            <Monospace>ARCANE BLOSSOM</Monospace> (H, 2)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Indexing into the skill names using the grid of numbers provided in the
      puzzle sheet yields the answer{' '}
      <Monospace>PART FIRE, PARRY SABER</Monospace>.
    </p>
    <h3>Dark Cacao's Puzzle: Doing Chores</h3>
    <p>
      This subpuzzle involves 18 goods production buildings located near the
      kingdom's Tree of Wishes (The Jampie Diner at the bottom right is not used
      in this subpuzzle).
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" />
    </p>
    <p>Adjacent to each building are two sets of decor: </p>
    <ol>
      <li>
        The brazier and flowers at the front indicate a good produced by that
        building.
      </li>
      <li>
        The number of lanterns on the right-hand side are an index into that
        good's name.
      </li>
    </ol>
    <p>
      The following table lists the production buildings with all possible goods
      they can make. The goods highlighted in green are indicated by the
      braziers, while the rest are represented by flowers. The red letter in
      each highlighted good is indicated by the lanterns.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Production Building</th>
          <th>Possible Goods</th>
          <th>Lv</th>
          <th>Indicated Good</th>
          <th>Ind</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Carpentry Shop</td>
          <td className="text-center">4</td>
          <td className="text-center">3</td>
          <td>
            <Monospace>CUCKOO CLOCK</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Flower Shop</td>
          <td className="text-center">6</td>
          <td className="text-center">4</td>
          <td>
            <Monospace>LOLLIPOP FLOWER BASKET</Monospace>
          </td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bakery</td>
          <td className="text-center">6</td>
          <td className="text-center">3</td>
          <td>
            <Monospace>GINKGO FOCACCIA</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Carpentry Shop</td>
          <td className="text-center">4</td>
          <td className="text-center">2</td>
          <td>
            <Monospace>ACORN LAMP</Monospace>
          </td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Maison du Cake</td>
          <td className="text-center">3</td>
          <td className="text-center">1</td>
          <td>
            <Monospace>SPOOKY MUFFIN</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Artisan's Workshop</td>
          <td className="text-center">4</td>
          <td className="text-center">4</td>
          <td>
            <Monospace>COLORFUL BOWL</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jammery</td>
          <td className="text-center">5</td>
          <td className="text-center">3</td>
          <td>
            <Monospace>TOFFEE JAM</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dairy Factory</td>
          <td className="text-center">3</td>
          <td className="text-center">2</td>
          <td>
            <Monospace>BUTTER</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Flower Shop</td>
          <td className="text-center">6</td>
          <td className="text-center">2</td>
          <td>
            <Monospace>HAPPY PLANTER</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bakery</td>
          <td className="text-center">6</td>
          <td className="text-center">6</td>
          <td>
            <Monospace>GOLDEN CROISSANT</Monospace>
          </td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Smithy</td>
          <td className="text-center">7</td>
          <td className="text-center">1</td>
          <td>
            <Monospace>ROBUST AXE</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Latte Cafe</td>
          <td className="text-center">3</td>
          <td className="text-center">1</td>
          <td>
            <Monospace>JELLYBEAN LATTE</Monospace>
          </td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jammery</td>
          <td className="text-center">5</td>
          <td className="text-center">5</td>
          <td>
            <Monospace>SPARKLEBERRY JAM</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Toy Store</td>
          <td className="text-center">3</td>
          <td className="text-center">3</td>
          <td>
            <Monospace>PITAYA DRAGON TOY</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Barrel Inn</td>
          <td className="text-center">3</td>
          <td className="text-center">2</td>
          <td>
            <Monospace>REDBERRY JUICE</Monospace>
          </td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jampie Diner</td>
          <td className="text-center">6</td>
          <td className="text-center">1</td>
          <td>
            <Monospace>HOT JELLY STEW</Monospace>
          </td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dairy Factory</td>
          <td className="text-center">3</td>
          <td className="text-center">1</td>
          <td>
            <Monospace>CREAM</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jewelry Salon</td>
          <td className="text-center">3</td>
          <td className="text-center">2</td>
          <td>
            <Monospace>RUBYBERRY BROOCH</Monospace>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The extracted letters are the subpuzzle answer{' '}
      <Monospace>CONCOCT THE BEST BEER</Monospace>.
    </p>
    <h3>Golden Cheese's Puzzle: Gnome Codes</h3>
    <p>
      Strewn about the kingdom are four sets of sugar gnomes adjacent to large
      collections of decorations.{' '}
    </p>
    <p>
      <SheetableImage alt="" src={image3} title="" />
    </p>
    <p>[Semaphore from lampposts and acorns]</p>
    <p>
      <SheetableImage alt="" src={image4} title="" />
    </p>
    <p>
      [Morse from floor tiles, binary from flowering shrubs, braille from olive
      skewers/flowers]
    </p>
    <p>
      The gnomes mimic the four panels of the notorious loss.jpg comic,
      providing an ordering. In this order, each block of decorations decodes to
      the following meme sayings, with highlighted letters indicated by distinct
      decor:
    </p>
    <ol>
      <li>
        <b>
          <u>
            <Monospace>D</Monospace>
          </u>
        </b>
        <Monospace>O </Monospace>
        <b>
          <u>
            <Monospace>A</Monospace>
          </u>
        </b>
        <Monospace> BA</Monospace>
        <b>
          <u>
            <Monospace>R</Monospace>
          </u>
        </b>
        <Monospace>REL ROL</Monospace>
        <b>
          <u>
            <Monospace>L</Monospace>
          </u>
        </b>{' '}
        (braille, highlighted by flowers)
      </li>
      <li>
        <b>
          <u>
            <Monospace>A</Monospace>
          </u>
        </b>
        <Monospace>LL Y</Monospace>
        <b>
          <u>
            <Monospace>O</Monospace>
          </u>
        </b>
        <Monospace>U</Monospace>
        <b>
          <u>
            <Monospace>R</Monospace>
          </u>
        </b>
        <Monospace> BAS</Monospace>
        <b>
          <u>
            <Monospace>E</Monospace>
          </u>
        </b>{' '}
        (semaphore, highlighted by blue lamps)
      </li>
      <li>
        <b>
          <u>
            <Monospace>N</Monospace>
          </u>
        </b>
        <Monospace>OCLIP</Monospace>
        <b>
          <u>
            <Monospace>P</Monospace>
          </u>
        </b>
        <Monospace>E</Monospace>
        <b>
          <u>
            <Monospace>D</Monospace>
          </u>
        </b>
        <Monospace> INTO TH</Monospace>
        <b>
          <u>
            <Monospace>E</Monospace>
          </u>
        </b>
        <Monospace> BACKROO</Monospace>
        <b>
          <u>
            <Monospace>M</Monospace>
          </u>
        </b>
        <Monospace>S</Monospace> (binary, highlighted by shrubs with red
        flowers)
      </li>
      <li>
        <Monospace>BY TALO</Monospace>
        <b>
          <u>
            <Monospace>S</Monospace>
          </u>
        </b>
        <Monospace> THI</Monospace>
        <b>
          <u>
            <Monospace>S</Monospace>
          </u>
        </b>
        <Monospace> CA</Monospace>
        <b>
          <u>
            <Monospace>N</Monospace>
          </u>
        </b>
        <b>
          <Monospace>'</Monospace>
        </b>
        <Monospace>T BE HA</Monospace>
        <b>
          <u>
            <Monospace>P</Monospace>
          </u>
        </b>
        <Monospace>PEN</Monospace>
        <b>
          <u>
            <Monospace>I</Monospace>
          </u>
        </b>
        <Monospace>NG</Monospace> (morse, highlighted by lampposts)
      </li>
    </ol>
    <Table>
      <tbody>
        <tr>
          <td className="text-center">
            |<br />
            <SheetableImage alt="" src={image5} title="" className="mx-auto" />
            01-D 06-A 12-R 10-L
          </td>
          <td className="text-center">
            | ╷
            <SheetableImage alt="" src={image6} title="" className="mx-auto" />
            02-A 13-O 17-R 09-E
          </td>
        </tr>
        <tr>
          <td className="text-center">
            | |
            <SheetableImage alt="" src={image7} title="" className="mx-auto" />
            07-N 11-P 05-D 16-E 03-M
          </td>
          <td className="text-center">
            | _
            <SheetableImage alt="" src={image8} title="" className="mx-auto" />
            14-S 18-S 04-N 15-P 08-I
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      {' '}
      Extracting the highlighted letters and completing the acrostic as above
      yields the answer <Monospace>DAMN DANIEL PROSPERS</Monospace>.
    </p>
    <h3>White Lily's Metapuzzle: A Half-Baked Scheme</h3>
    <p>
      On submitting 3 of 4 subpuzzles, we unlock the metapuzzle. The first part
      of the metapuzzle provides four sets of blanks matching the enumerations
      of the puzzle answers, each with a dividing line splitting them into two
      halves. Next to each split set of blanks is two more sets of blanks with
      labels 1&ndash;14. The second part is an acrostic puzzle, except the clues are
      clearly incomplete.
    </p>
    <p>
      The flavortext describes the first set of blanks as the result of "White
      Lily's failed attempts at preparing the dough of a ‘perfect cookie’ by
      fusing the properties of two other cookies," linking back to the location
      puzzle and its mechanism. Each half of the puzzle answers shares the same
      letterbank as another CRK cookie.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
          <th>Bank 1</th>
          <th>Bank 2</th>
          <th>Cookie 1</th>
          <th>Cookie 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pyrrhic Victory</td>
          <td>
            <Monospace>A CO|IN COMIN' IN HOT</Monospace>
          </td>
          <td>
            <Monospace>ACO</Monospace>
          </td>
          <td>
            <Monospace>CHIMNOT</Monospace>
          </td>
          <td>
            <Monospace>COCOA</Monospace>
          </td>
          <td>
            <Monospace>MINT/CHOCO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Housing Brawls</td>
          <td>
            <Monospace>PART FI|RE, PARRY SABER</Monospace>
          </td>
          <td>
            <Monospace>AFIPRT</Monospace>
          </td>
          <td>
            <Monospace>ABEPRSY</Monospace>
          </td>
          <td>
            <Monospace>PARFAIT</Monospace>
          </td>
          <td>
            <Monospace>RASPBERRY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Doing Chores</td>
          <td>
            <Monospace>CONCOCT|THE BEST BEER</Monospace>
          </td>
          <td>
            <Monospace>CNOT</Monospace>
          </td>
          <td>
            <Monospace>BEHRST</Monospace>
          </td>
          <td>
            <Monospace>COTTON</Monospace>
          </td>
          <td>
            <Monospace>SHERBET</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gnome Codes</td>
          <td>
            <Monospace>DAMN DANIEL|PROSPERS</Monospace>
          </td>
          <td>
            <Monospace>ADEILMN</Monospace>
          </td>
          <td>
            <Monospace>EOPRS</Monospace>
          </td>
          <td>
            <Monospace>MADELEINE</Monospace>
          </td>
          <td>
            <Monospace>ESPRESSO</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      These eight cookie names fit into the pairs of blanks next to the puzzle
      answer blanks in the "Failed experiments" table:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>A CO|IN COMIN' IN HOT</Monospace>
          </td>
          <td>
            <Monospace>C O </Monospace>
            <b>
              <Monospace>11-C</Monospace>
            </b>
            <Monospace> O A | M </Monospace>
            <b>
              <Monospace>7-I</Monospace>
            </b>
            <Monospace> N T C </Monospace>
            <b>
              <Monospace>5-H</Monospace>
            </b>
            <Monospace> O C O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PART FI|RE, PARRY SABER</Monospace>
          </td>
          <td>
            <Monospace>P A </Monospace>
            <b>
              <Monospace>8-R</Monospace>
            </b>
            <Monospace> F A I </Monospace>
            <b>
              <Monospace>4-T</Monospace>
            </b>
            <Monospace> | </Monospace>
            <b>
              <Monospace>13-R</Monospace>
            </b>
            <Monospace> A S P B </Monospace>
            <b>
              <Monospace>6-E</Monospace>
            </b>
            <Monospace> R R Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CONCOCT|THE BEST BEER</Monospace>
          </td>
          <td>
            <Monospace>C O T T </Monospace>
            <b>
              <Monospace>12-O</Monospace>
            </b>
            <Monospace> N | </Monospace>
            <b>
              <Monospace>1-S</Monospace>
            </b>
            <Monospace> H </Monospace>
            <b>
              <Monospace>10-E</Monospace>
            </b>
            <Monospace> R B E T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DAMN DANIEL|PROSPERS</Monospace>
          </td>
          <td>
            <Monospace>M A </Monospace>
            <b>
              <Monospace>9-D</Monospace>
            </b>
            <Monospace> E L </Monospace>
            <b>
              <Monospace>2-E</Monospace>
            </b>
            <Monospace> I N E | </Monospace>
            <b>
              <Monospace>3-E</Monospace>
            </b>
            <Monospace> S P R E S </Monospace>
            <b>
              <Monospace>14-S</Monospace>
            </b>
            <Monospace> O</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Extracting letters from the numbered blanks and sorting yields an
      instruction: <Monospace>SEE THEIR DECORS</Monospace>. This commences a
      "runaround" in the kingdom to gather the missing halves of the acrostic
      clues for the Trait research schematics.
    </p>
    <p>
      In CRK, there exist "cookie decors" that play unique animations when
      specific cookies are dropped into them. The kingdom contains exactly one
      cookie decor for each of the eight identified cookies. A summary of the
      cookie decors/locations, acrostic clues, and solving walkthroughs for each
      clue follows. Images of each cookie decor are shown at the end.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Cookie</th>
          <th>Cookie Decor</th>
          <th>Numbering</th>
          <th>Acrostic Clue</th>
          <th>Decor location and walkthrough</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cocoa</td>
          <td>Snowflakes &amp; Cocoa Cafe</td>
          <td>33 26 20</td>
          <td>-1</td>
          <td>
            Located in the area cluing MITMH 2019. In MITMH 2018, the coin was a
            Core Memory <Monospace>ORB</Monospace>.
          </td>
        </tr>
        <tr>
          <td>Mint Choco</td>
          <td>Mint Choco Cookie's Concert Hall</td>
          <td>44 30 48 32 07 39 15 27 09</td>
          <td>+4, where?</td>
          <td>
            Located in the area cluing MITMH 2012. The golden coin for MITMH
            2016 was located inside the <Monospace>ALCHEMIST</Monospace>{' '}
            sculpture.
          </td>
        </tr>
        <tr>
          <td>Parfait</td>
          <td>Multitopping☆ Street Stage</td>
          <td>28 17 18 22 01 34 23 43 10</td>
          <td>Last word</td>
          <td>
            Located next to an Almond St. 8 Phone Booth, which is Almond's
            decor. Almond's skill is the "Almond{' '}
            <Monospace>HANDCUFFS</Monospace>".
          </td>
        </tr>
        <tr>
          <td>Raspberry</td>
          <td>Berry Tea Party</td>
          <td>04 13 40 14</td>
          <td>First word</td>
          <td>
            Located next to an Excavation Tent, which is Eclair's decor.
            Eclair's skill is named "<Monospace>BOOK</Monospace> of History".
          </td>
        </tr>
        <tr>
          <td>Cotton</td>
          <td>Snow Blossom Hill</td>
          <td>11 31 02 25 19</td>
          <td>First word</td>
          <td>
            Located next to a Toy Store with its first good denoted. That good
            is the <Monospace>CLOUD</Monospace> Pillow.
          </td>
        </tr>
        <tr>
          <td>Sherbet</td>
          <td>Lantern Tree</td>
          <td>36 47 06 38 46</td>
          <td>Building's last word</td>
          <td>
            Located next to a Jampie <Monospace>DINER</Monospace>.
          </td>
        </tr>
        <tr>
          <td>Madeleine</td>
          <td>Madeleine Cookie's Altar</td>
          <td>35 12 41 21 / 45 24 03 08</td>
          <td>EXORBITANTLY</td>
          <td>
            Located next to a 6x8 grid of decors. The clue is parsable as "
            <Monospace>EXOR BITANTLY</Monospace>". Encode{' '}
            <Monospace>BITANTLY</Monospace> in braille,{' '}
            <Monospace>XOR</Monospace> with the decor's grid, then decode for
            answer <Monospace>NOVA BOMB</Monospace>.
          </td>
        </tr>
        <tr>
          <td>Espresso</td>
          <td>Brewing Laboratory</td>
          <td>29 16 37 05 42</td>
          <td>EXORCISMS</td>
          <td>
            Located next to a 5x5 grid of decors. The clue is parsable as "
            <Monospace>EXOR CISMS</Monospace>". Encode{' '}
            <Monospace>CISMS</Monospace> in 5-bit binary,{' '}
            <Monospace>XOR</Monospace> with the 5x5 grid next to the decor, then
            decode for answer <Monospace>EERIE</Monospace>.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Filling in the acrostic yields <Monospace>COMBINE BTS </Monospace>
      <Monospace>COOKIE</Monospace>
      <Monospace> AND BAD FOUR'S HELLHOUND. REMOVE FABRIC</Monospace>. This is a
      clue to a final combination of two cookies, in the context of CRK's
      "Braver Together!" event.
    </p>
    <p>
      HellHound is the B.A.D. 4 stage name of <Monospace>RED VELVET</Monospace>{' '}
      Cookie&mdash;removing the fabric (<Monospace>VELVET</Monospace>) yields{' '}
      <Monospace>RED</Monospace>. The only BTS Cookie that combines with RED to
      make a valid word is <Monospace>SUGA</Monospace> Cookie, forming the final
      answer to the whole puzzle set, and a trait of the perfect cookie White
      Lily is searching for:{' '}
      <b>
        <Monospace>SUGARED</Monospace>
      </b>
      .
    </p>
    <h2>Appendix</h2>
    <p>
      <SheetableImage alt="" src={image9} title="" />
      <SheetableImage alt="" src={image10} title="" />
    </p>
    <p>
      [Snowflakes &amp; Cocoa Cafe and Mint Choco Cookie's Concert Hall&mdash;used
      in clues PV1 and PV2]
    </p>
    <p>
      <SheetableImage alt="" src={image11} title="" />
      <SheetableImage alt="" src={image12} title="" />
    </p>
    <p>
      [Multitopping☆ Street Stage and Berry Tea Party&mdash;used in clues HB1 and
      HB2]
    </p>
    <p>
      <SheetableImage alt="" src={image13} title="" />
      <SheetableImage alt="" src={image14} title="" />
    </p>
    <p>[Snow Blossom Hill and Lantern Tree&mdash;used in clues DC1 and DC2]</p>
    <p>
      <SheetableImage alt="" src={image15} title="" />
      <SheetableImage alt="" src={image16} title="" />
    </p>
    <p>
      [Madeleine Cookie's Altar and Brewing Laboratory&mdash;used in clues GC1 and
      GC2]
    </p>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
