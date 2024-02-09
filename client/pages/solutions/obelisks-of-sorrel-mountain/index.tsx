import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image1 from 'assets/solutions/obelisks-of-sorrel-mountain/map-extract.png';
import image0 from 'assets/solutions/obelisks-of-sorrel-mountain/map-soln.png';

const SLUG = 'obelisks-of-sorrel-mountain';
const ANSWER = `ALPINE MUGWORT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      This puzzle is displayed as a bad knock-off of a Cones of Dunshire grid,
      with tiles displaying shoddy knock-off art drawing on the popular National
      Parks arts project,{' '}
      <b><a href="https://www.instagram.com/subparparks/">SubPar Parks</a></b>&mdash;an
      Instagram account{' '}
      <a href="https://ambersharedesign.com/">created by Amber Share</a> that
      mashes up actual negative reviews of National Parks with artful depictions
      of those parks. The art in this puzzle draws heavily on Share's work,
      creating a "sub-par knockoff" of the original.
    </p>
    <p>
      ... making this a Sub-Par <i>Parks and Recreation</i> puzzle featuring sub-par
      recreations of National Parks that received sub-par reviews.
    </p>
    <p>
      This puzzle involves three steps to solve. All steps save for the
      extraction itself can be completed in any order. These steps are listed in
      the following order to allow for a more streamlined solution document.
    </p>
    <ul>
      <li>
        <b>TV Show Puzzling</b>: Identify <i>Parks and Recreation</i> episodes by
        iconic scenes described on the grid to find out which episode is
        associated with which tile. This provides <i>placement rules;</i>
      </li>
      <li>
        <b>SubPar Parks Puzzling</b>: Match up SubPar Parks imagery and text
        with <i>Parks and Recreation</i> episodes. Indexing into the omitted SubPar
        Parks text by <i>Parks and Recreation</i> text gives a letter. This provides{' '}
        <i>extract letters</i>; and
      </li>
      <li>
        <b>Trail Blazing</b>: Follow the trail blaze symbols on the grid for a
        path through the grid. This provides <i>ordering on the extract</i>.
      </li>
    </ul>
    <p>
      The Obelisks of Sorrel Mountain grid contains references to 19 different
      episodes of <i>Parks and Recreation</i>, referencing notable moments and
      quotes from the popular television series. For instance, "A Great Pyramid
      for Property Rights" references Ron Swanson's Pyramid of Greatness (
      <a href="https://www.youtube.com/watch?v=P0m-6I2BpXA">
        introduced in the episode{' '}
      </a>
      <a href="https://www.youtube.com/watch?v=P0m-6I2BpXA">
        "Go Big or Go Home"
      </a>
      ), while "Glucotrol Buddies" is how Jerry Gergich refers to his
      relationship with the diabetic mini-horse Li'l Sebastian{' '}
      <a href="https://youtu.be/BGg3tcLyRuU?t=137">in </a>
      <a href="https://youtu.be/BGg3tcLyRuU?t=137">Harvest Festival</a>
      .
    </p>
    <p>
      <SheetableImage
        alt="Grid of 19 hexagonal tiles with clues for Parks and Recreation episodes and their corresponding episodes labeled"
        src={image0}
        title=""
      />
    </p>
    <p>
      After completing the hexagonal grid, we notice that each episode title is
      featured on a tile, paired with a negative review of the location.
    </p>
    <p>
      Searching for the added text should reveal that the tiles are sub-par
      recreations of Amber Share's SubPar parks art. After correctly identifying
      each of the 19 SubPar Parks posts, we notice the park tiles were listed in
      alphabetical order, reinforcing that this was the right connection to
      make.
    </p>
    <p>
      The Sorrel Mountain grid indicates where to place each tile, and then
      indexing into the replaced text with the episode number gives a letter for
      extraction: so, for "Fluoride" (season 6 / episode 8),{' '}
      <Monospace>THEVIEWS</Monospace> was the replaced text, and the 8th letter
      of that gives the letter <Monospace>S</Monospace>. To reinforce that this
      is the correct extraction method, the four tiles that are explicitly
      indexing into words that contain the word <Monospace>MOUNTAIN</Monospace>{' '}
      are marked with a mountain symbol on the grid.
    </p>
    <p>
      The final step involves "blazing a trail", using the scuff marks on the
      various tiles as{' '}
      <a href="https://hikingandfishing.com/trail-blazes-signs-markers/">
        "trail blaze" marks
      </a>{' '}
      frequently used to navigate National Parks. A single mark means "go
      straight", while additional blazes indicate turning right, left, and even
      the beginning and end of the path.
    </p>
    <p>
      The blazes are placed on the edge of each hexagon to help with
      orientation&mdash;if we approach the blazes "head-on" from the tile's center, there are
      only three directions to go&mdash;straight, slightly to the right, or slightly
      to the left.
    </p>
    <p>
      <SheetableImage
        alt="Grid of 19 hexagonal tiles with ordering for the final extract using hiking trail blazes"
        src={image1}
        title=""
      />
    </p>
    <p>
      Following the path from "Start" to "End" using the trail markers gives{' '}
      <Monospace>ANSWER ALPINE MUGWORT</Monospace>, making{' '}
      <b>
        <Monospace>ALPINE MUGWORT</Monospace>
      </b>{' '}
      the final solution.
    </p>
    <p>
      Below is a grid of the full extract path&mdash;and while it is not necessary
      for the solve, it's worth noting that the trail we just blazed goes from
      Coast to Coast, following National Parks across the country from East to
      West based on their longitude (the grid's meandering path also goes from
      East to West).
    </p>
    <Table>
      <thead>
        <tr>
          <th>Nat'l Park</th>
          <th>SubPar Parks Text (Top / Bottom)</th>
          <th>Ep Name</th>
          <th>Ep #</th>
          <th>Replaced Text</th>
          <th>Indexed</th>
          <th>Grid Clue</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B-PqTA4Ffmc/">Shenandoah</a>
          </td>
          <td>Not a Lot to Offer / Unless You Want to Hike</td>
          <td>Boys' Club</td>
          <td>4</td>
          <td>
            <Monospace>NOT A LOT TO OFFER</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>Underage Drinking is the Pits</td>
          <td>78.4535</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CrBovH5LNy4/">Biscayne</a>
          </td>
          <td>Phone Signal / Is Impossible</td>
          <td>The Camel</td>
          <td>9</td>
          <td>
            <Monospace>PHONE SIGNAL</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>Home of the Diversity Express</td>
          <td>80.2083</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CtewafsLwFl/">
              New River Gorge
            </a>
          </td>
          <td>Mist Obscured / The Views</td>
          <td>Fluoride</td>
          <td>8</td>
          <td>
            <Monospace>THE VIEWS</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Who's Ready for TDazzle</td>
          <td>81.0531</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CM0QVv0Hudw/">Gulf Islands</a>
          </td>
          <td>Water Wasn't / Overly Pretty</td>
          <td>End of the World</td>
          <td>6</td>
          <td>
            <Monospace>WATER WASNT</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>No Presidential Faces at the Grand Canyon?</td>
          <td>88.7911</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CDCbIfeH6W1/?hl=en">
              Voyageurs
            </a>
          </td>
          <td>There Was No One / Except Us</td>
          <td>Go Big or Go Home</td>
          <td>1</td>
          <td>
            <Monospace>EXCEPT US</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>A Great Pyramid for Property Rights</td>
          <td>92.8458</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B-KPdYegcxI/">Big Bend</a>
          </td>
          <td>It Rained on Me / In the Friggin' Desert</td>
          <td>Beauty Pageant</td>
          <td>3</td>
          <td>
            <Monospace>IT RAINED ON ME</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>It Has That Naomi Wolf Factor</td>
          <td>103.2502</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B_7kNj7A_IT/">
              Great Sand Dunes
            </a>
          </td>
          <td>It's Just a Big Mountain / Of Sand</td>
          <td>Partridge</td>
          <td>17</td>
          <td>
            <b>
              <Monospace>ITS JUST A BIG MOUNTAIN</Monospace>
            </b>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>A Sled is a Stupid Mascot</td>
          <td>105.5931</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B8eQ483nc0G/">Yellowstone</a>
          </td>
          <td>Save Yourself Some Money / Boil Some Water at Home</td>
          <td>Two Funerals</td>
          <td>11</td>
          <td>
            <Monospace>SAVE YOURSELF SOME MONEY</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>Warehouse Raves Filled with Eurotrash</td>
          <td>110.5885</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B8jXTwGno6x/">Zion</a>
          </td>
          <td>Scenery is Distant / And Impersonal</td>
          <td>Rock Show</td>
          <td>6</td>
          <td>
            <Monospace>AND IMPERSONAL</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>Boarding the Scarecrow Boat</td>
          <td>113.0263</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CB6HJ5nhWdb/">Great Basin</a>
          </td>
          <td>Little More Than a Cave and A / Mountain</td>
          <td>Harvest Festival</td>
          <td>7</td>
          <td>
            <b>
              <Monospace>MOUNTAIN</Monospace>
            </b>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Glucotrol Buddies</td>
          <td>114.2634</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B7D_lg5n9w6/">Death Valley</a>
          </td>
          <td>Ugliest / Place I've Ever Seen</td>
          <td>New Slogan</td>
          <td>16</td>
          <td>
            <Monospace>PLACE IVE EVER SEEN</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>When Your Here Than Your Home</td>
          <td>117.0794</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B7WDQbMpGSt/">Sequoia</a>
          </td>
          <td>There Are Bugs / And they will bite you on your face</td>
          <td>Sweetums</td>
          <td>15</td>
          <td>
            <Monospace>AND THEY WILL BITE YOUR FACE</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>The Turf 'N Turf Special</td>
          <td>118.5658</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B76ODJ-HoaQ/">Yosemite</a>
          </td>
          <td>Trees Block View / And There are Too Many Gray Rocks</td>
          <td>The Wall</td>
          <td>15</td>
          <td>
            <Monospace>AND THERE ARE TOO MANY GRAY ROCKS</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>Such a Great Day for Bees</td>
          <td>119.5383</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CjQjiRxLBq4/">
              North Cascades
            </a>
          </td>
          <td>Too Many Mountains / Trees, Snow, Etc.</td>
          <td>Two Parties</td>
          <td>10</td>
          <td>
            <b>
              <Monospace>TOO MANY MOUNTAINS</Monospace>
            </b>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>Chiseled Aromasphere</td>
          <td>121.2985</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B9UOR37jbM5/">Crater Lake</a>
          </td>
          <td>Just Something to Look At / And Leave</td>
          <td>Emergency Response</td>
          <td>13</td>
          <td>
            <Monospace>JUST SOMETHING TO LOOK AT</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>Careening to Bummer-Town</td>
          <td>122.1279</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B8wJXeQnlKn/">Olympic</a>
          </td>
          <td>No Wow / Factor</td>
          <td>The Reporter</td>
          <td>3</td>
          <td>
            <Monospace>NO WOW</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>More Likely Than Unicorns and Talking Monkeys</td>
          <td>123.6044</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CCeORxglJLr/">
              Wrangell-St. Elias
            </a>
          </td>
          <td>Black Bears / Roaming About</td>
          <td>Hunting Trip</td>
          <td>10</td>
          <td>
            <Monospace>ROAMING ABOUT</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>Boola Boola Boola!</td>
          <td>142.9857</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/B99h8NRHFcr/">Denali</a>
          </td>
          <td>Barren Wasteland of / Tundra</td>
          <td>Sex Education</td>
          <td>4</td>
          <td>
            <Monospace>BARREN WASTELAND OF</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Jump on That Caboose</td>
          <td>151.1926</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/p/CBQfmzxlC0q/">
              Gates of the Arctic
            </a>
          </td>
          <td>Mountains / Not Nearly Tall Enough</td>
          <td>The Banquet</td>
          <td>5</td>
          <td>
            <b>
              <Monospace>MOUNTAINS</Monospace>
            </b>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>Sassy But Powerful Dynamic</td>
          <td>153.3241</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      th:nth-child(4),
      td:nth-child(4),
      td:nth-child(6),
      td:nth-child(8) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
