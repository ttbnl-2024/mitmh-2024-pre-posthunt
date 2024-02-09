import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'cedar-gardens';
const ANSWER = `QUADRIPOLAR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We have 11 images of trees with drawings carved into them, and a final
      image with various trees on the plot. We realize that each of the drawings
      symbolizes a rollercoaster in the US in alphabetical order. From the
      flavortext, we need to take height into account, and sort them by height,
      shortest to tallest. Reversing the order doesn't affect solvability. Each
      rollercoaster is in a different theme park in a different state.
    </p>
    <p>In the order of the drawings, we have:</p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Roller Coaster</th>
          <th>Park</th>
          <th>State</th>
          <th>Height (in ft)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>APOLLO'S CHARIOT</td>
          <td>Busch Gardens Williamsburg</td>
          <td>Virginia</td>
          <td>170</td>
        </tr>
        <tr>
          <td>CANDYMONIUM</td>
          <td>Hersheypark</td>
          <td>Pennsylvania</td>
          <td>210</td>
        </tr>
        <tr>
          <td>COBRA'S CURSE</td>
          <td>Busch Gardens Florida</td>
          <td>Florida</td>
          <td>70</td>
        </tr>
        <tr>
          <td>COLOSSUS THE FIRE DRAGON</td>
          <td>Lagoon Amusement Park</td>
          <td>Utah</td>
          <td>85</td>
        </tr>
        <tr>
          <td>IRON RATTLER</td>
          <td>Six Flags Fiesta Texas</td>
          <td>Texas</td>
          <td>179</td>
        </tr>
        <tr>
          <td>MILLENNIUM FORCE</td>
          <td>Cedar Point</td>
          <td>Ohio</td>
          <td>310</td>
        </tr>
        <tr>
          <td>QUICKSILVER MINE EXPRESS</td>
          <td>Gilroy Gardens</td>
          <td>California</td>
          <td>38</td>
        </tr>
        <tr>
          <td>RAGING BULL</td>
          <td>Six Flags Great America</td>
          <td>Illinois</td>
          <td>202</td>
        </tr>
        <tr>
          <td>SHIVERING TIMBERS</td>
          <td>Michigan's Adventure</td>
          <td>Michigan</td>
          <td>122</td>
        </tr>
        <tr>
          <td>STEAMIN' DEMON</td>
          <td>Six Flags Great Escape and Hurricane Harbor</td>
          <td>New York</td>
          <td>95</td>
        </tr>
        <tr>
          <td>THUNDERHEAD</td>
          <td>Dollywood</td>
          <td>Tennessee</td>
          <td>100.4</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each of the states has some number of its state trees represented in the
      final image. Using the number of state trees shown, the solver indexes
      into the names of the rollercoasters sorted in alphabetical order to give
      the answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Rollercoaster</th>
          <th>State</th>
          <th>State tree</th>
          <th>Number of Trees in Image</th>
          <th>Letter Indexing into Coaster</th>
          <th>Height (ft)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>QUICKSILVER MINE EXPRESS</td>
          <td>California</td>
          <td>Redwood</td>
          <td>1</td>
          <td>Q</td>
          <td>38</td>
        </tr>
        <tr>
          <td>COBRA'S CURSE</td>
          <td>Florida</td>
          <td>Sabal palm</td>
          <td>8</td>
          <td>U</td>
          <td>40</td>
        </tr>
        <tr>
          <td>COLOSSUS THE FIRE DRAGON</td>
          <td>Utah</td>
          <td>Quaking aspen</td>
          <td>18</td>
          <td>A</td>
          <td>85</td>
        </tr>
        <tr>
          <td>STEAMIN' DEMON</td>
          <td>New York</td>
          <td>Sugar maple</td>
          <td>8</td>
          <td>D</td>
          <td>95</td>
        </tr>
        <tr>
          <td>THUNDERHEAD</td>
          <td>Tennessee</td>
          <td>Tulip tree</td>
          <td>7</td>
          <td>R</td>
          <td>100.4</td>
        </tr>
        <tr>
          <td>SHIVERING TIMBERS</td>
          <td>Michigan</td>
          <td>Eastern white pine</td>
          <td>3</td>
          <td>I</td>
          <td>122</td>
        </tr>
        <tr>
          <td>APOLLO'S CHARIOT</td>
          <td>Virginia</td>
          <td>Flowering dogwood</td>
          <td>2</td>
          <td>P</td>
          <td>170</td>
        </tr>
        <tr>
          <td>IRON RATTLER</td>
          <td>Texas</td>
          <td>Pecan</td>
          <td>3</td>
          <td>O</td>
          <td>179</td>
        </tr>
        <tr>
          <td>RAGING BULL</td>
          <td>Illinois</td>
          <td>White oak</td>
          <td>9</td>
          <td>L</td>
          <td>202</td>
        </tr>
        <tr>
          <td>CANDYMONIUM</td>
          <td>Pennsylvania</td>
          <td>Eastern hemlock</td>
          <td>2</td>
          <td>A</td>
          <td>210</td>
        </tr>
        <tr>
          <td>MILLENNIUM FORCE</td>
          <td>Ohio</td>
          <td>Ohio buckeye</td>
          <td>13</td>
          <td>R</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>
    <Attributions>
      <p>All tree carving images are original creations.</p>
      <p>State trees:</p>
      <ul>
        <li>
          California:{' '}
          <a href="https://www.parks.ca.gov/?page_id=1146">Redwood</a>, fair use
        </li>
        <li>
          Florida:{' '}
          <a href="https://en.wikipedia.org/wiki/File:Sabal_sp._Lisa.jpg">
            Sabal palm
          </a>
          , used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0
          </a>
        </li>
        <li>
          Utah:{' '}
          <a href="https://www.naturehills.com/aspen-quaking">Quaking aspen</a>,
          fair use
        </li>
        <li>
          New York:{' '}
          <a href="https://www.mehrabyannursery.com/shop/shade-trees/sugar-maple-tree/">
            Sugar maple
          </a>
          , fair use
        </li>
        <li>
          Tennessee:{' '}
          <a href="https://www.flickr.com/photos/catvet4/6757522925">
            Tulip tree
          </a>
          , fair use
        </li>
        <li>
          Michigan:{' '}
          <a href="https://www.hortmag.com/plants/eastern-white-pine">
            Eastern white pine
          </a>
          , used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            CC BY-SA 2.0
          </a>
        </li>
        <li>
          Virginia:{' '}
          <a href="https://circlecitytrees.com/trees/white-dogwood">
            Flowering dogwood
          </a>
          , fair use
        </li>
        <li>
          Texas:{' '}
          <a href="https://trees-of-texas.fandom.com/wiki/Pecan?file=Pecan_tree.png">
            Pecan
          </a>
          , fair use
        </li>
        <li>
          Illinois:{' '}
          <a href="https://en.wikipedia.org/wiki/Quercus_alba#/media/File:Keeler_Oak_Tree_-_distance_photo,_May_2013.jpg">
            White oak
          </a>
          , used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0
          </a>
        </li>
        <li>
          Pennsylvania:{' '}
          <a href="https://www.inaturalist.org/guide_taxa/552074">
            Eastern hemlock
          </a>
          , fair use{' '}
        </li>
        <li>
          Ohio:{' '}
          <a href="https://ohiodnr.gov/discover-and-learn/plants-trees/broad-leaf-trees/ohio-buckeye-aesculus-glabra">
            Ohio buckeye
          </a>
          , fair use
        </li>
      </ul>
    </Attributions>
    <style jsx global>{`
      .table-1 td:nth-child(1),
      .table-2 td:nth-child(4n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-2 td:nth-child(4),
      .table-2 td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
