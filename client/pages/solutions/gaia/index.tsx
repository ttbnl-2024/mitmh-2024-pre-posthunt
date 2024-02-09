import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import solved from 'assets/solutions/gaia/solved.png';
import unsolved from 'assets/solutions/gaia/unsolved.png';

const SLUG = 'gaia';
const ANSWER = `BENEPHACTOR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      As each puzzle is solved, the meta reveals extra information. The answers
      to the puzzles in this round, along with revealed information are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
          <th>
            Extra Info
            <br />
            (appears in meta when solved)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A Terrible Morning</td>
          <td>SCISSORS</td>
          <td>= 46</td>
        </tr>
        <tr>
          <td>ENNEAGRAM</td>
          <td>TENNESSEE</td>
          <td>= 26</td>
        </tr>
        <tr>
          <td>Icarus Away!</td>
          <td>BEER BOTTLE</td>
          <td>= 24</td>
        </tr>
        <tr>
          <td>Jigsaw Sudoku</td>
          <td>INTERCONNECTION</td>
          <td>= 69</td>
        </tr>
        <tr>
          <td>Oil Paintings</td>
          <td>BOSTON CELTICS</td>
          <td>= 50</td>
        </tr>
        <tr>
          <td>Transylvanian Math</td>
          <td>COBBLESTONES</td>
          <td>= 39</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answers are letter banked from the 10 letters <Clue>BCEILNORST</Clue>,
      and the numbers given with the answers can be solved as a{' '}
      <a href="https://www.logic-puzzles.ropeko.ch/php/db/puzzle.php?id=393">
        letter weights
      </a>{' '}
      puzzle for the digits 0&ndash;9. We can uniquely assign each letter to a
      distinct digit so that the letters in each answer sum up to the given
      number:
    </p>
    <Table className="table-2">
      <tbody>
        <tr>
          <td>T</td>
          <td>E</td>
          <td>O</td>
          <td>B</td>
          <td>L</td>
          <td>S</td>
          <td>N</td>
          <td>C</td>
          <td>I</td>
          <td>R</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Then, we can replace the letters in the given 19-letter strings with
      digits to get 19 digit numbers. These numbers are source IDs from the Gaia
      satellite data releases (specifically DR3), accessible in the{' '}
      <a href="https://gea.esac.esa.int/archive/">Gaia archive / </a>
      <a href="https://gea.esac.esa.int/archive/">catalogue</a>. As clued by the
      flavortext, one piece of data that Gaia collects is the proper motion of
      celestial objects, or how fast they move across Earth's sky.
    </p>
    <SheetableImage src={unsolved} />
    <p>
      The feeder puzzles are presented as the brightest stars in the
      constellation Vulpecula ("little fox"), with the metapuzzle being Alpha
      Vulpecula (Anser). We can apply the{' '}
      <b>proper motion of the Gaia objects</b> to the <b>Vulpecula stars</b> to
      see where they will be 10 million years in the future
      <sup>
        <a href="#fn1" id="ref1">
          [1]
        </a>
      </sup>
      . The alpha star does not have a shift and is used as a fixed reference
      point.{' '}
    </p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Vul Star</th>
          <th>Decrypted Source ID</th>
          <th>
            Gaia PM RA
            <br />
            (mas/yr)
          </th>
          <th>
            Gaia PM Dec
            <br />
            (mas/yr)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A Terrible Morning</td>
          <td>15 Vulpeculae</td>
          <td>4322794217318927360</td>
          <td>-1.1607</td>
          <td>-4.2585</td>
        </tr>
        <tr>
          <td>ENNEAGRAM</td>
          <td>1 Vulpeculae</td>
          <td>4658061082565925248</td>
          <td>2.7335</td>
          <td>0.7437</td>
        </tr>
        <tr>
          <td>Icarus Away!</td>
          <td>23 Vulpeculae</td>
          <td>5881204344548506368</td>
          <td>-3.1880</td>
          <td>-1.7440</td>
        </tr>
        <tr>
          <td>Jigsaw Sudoku</td>
          <td>HD 192685 / HR 7739</td>
          <td>5992320611741122944</td>
          <td>-0.8692</td>
          <td>-0.7177</td>
        </tr>
        <tr>
          <td>Oil Paintings</td>
          <td>13 Vulpeculae</td>
          <td>3438207224090928640</td>
          <td>-2.9884</td>
          <td>-0.2920</td>
        </tr>
        <tr>
          <td>Transylvanian Math</td>
          <td>31 Vulpeculae</td>
          <td>2233433949413843968</td>
          <td>-3.6851</td>
          <td>-0.6459</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We provide an example computation table that uses Wikipedia data for
      Vulpecula locations. The future position assumes an approximately constant
      proper motion over 10 million years. The locations do not have to be
      exact. (The coordinates in the bottom left are the RA and Dec of the
      cursor on the canvas in milliarcseconds.)
    </p>
    <Table className="table-4">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Vul Star</th>
          <th>Vul RA</th>
          <th>Vul Dec</th>
          <th>
            Gaia PM RA
            <br />
            (mas/yr)
          </th>
          <th>
            Gaia PM Dec
            <br />
            (mas/yr)
          </th>
          <th>Future RA</th>
          <th>Future Dec</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(Gaia)</td>
          <td>Anser</td>
          <td>
            19<sup>h</sup> 28<sup>m</sup> 42.33<sup>s</sup> = 1051834949 mas
          </td>
          <td>+24° 39′ 53.7″ = 88793661 mas</td>
          <td>0</td>
          <td>0</td>
          <td>1051834949 mas</td>
          <td>88793661 mas</td>
        </tr>
        <tr>
          <td>A Terrible Morning</td>
          <td>15 Vulpeculae</td>
          <td>
            20<sup>h</sup> 01<sup>m</sup> 06.01<sup>s</sup> = 1080990729 mas
          </td>
          <td>+27° 45′ 12.8″ = 99912863 mas</td>
          <td>-1.1607</td>
          <td>-4.2585</td>
          <td>1069383729 mas</td>
          <td>57327863 mas</td>
        </tr>
        <tr>
          <td>ENNEAGRAM</td>
          <td>1 Vulpeculae</td>
          <td>
            19<sup>h</sup> 16<sup>m</sup> 13.04<sup>s</sup> = 1040595588 mas
          </td>
          <td>+21° 23′ 25.6″ = 77005544 mas</td>
          <td>2.7335</td>
          <td>0.7437</td>
          <td>1067930588 mas</td>
          <td>84442544 mas</td>
        </tr>
        <tr>
          <td>Icarus Away!</td>
          <td>23 Vulpeculae</td>
          <td>
            20<sup>h</sup> 15<sup>m</sup> 46.14<sup>s</sup> = 1093892148 mas
          </td>
          <td>+27° 48′ 51.1″ = 100131116 mas</td>
          <td>-3.1880</td>
          <td>-1.7440</td>
          <td>1062012148 mas</td>
          <td>82691116 mas</td>
        </tr>
        <tr>
          <td>Jigsaw Sudoku</td>
          <td>HD 192685</td>
          <td>
            20<sup>h</sup> 15<sup>m</sup> 15.89<sup>s</sup> = 1093738431 mas
          </td>
          <td>+25° 35′ 31.1″ = 92131054.9 mas</td>
          <td>-0.8692</td>
          <td>-0.7177</td>
          <td>1085046431 mas</td>
          <td>84954054.9 mas</td>
        </tr>
        <tr>
          <td>Oil Paintings</td>
          <td>13 Vulpeculae</td>
          <td>
            19<sup>h</sup> 53<sup>m</sup> 27.68<sup>s</sup> = 1074115436 mas
          </td>
          <td>+24° 04′ 46.3″ = 86686608 mas</td>
          <td>-2.9884</td>
          <td>-0.2920</td>
          <td>1044231436 mas</td>
          <td>83766608 mas</td>
        </tr>
        <tr>
          <td>Transylvanian Math</td>
          <td>31 Vulpeculae</td>
          <td>
            20<sup>h</sup> 52<sup>m</sup> 07.68<sup>s</sup> = 1126915253 mas{' '}
          </td>
          <td>+27° 05′ 49.0″ = 97549000 mas</td>
          <td>-3.6851</td>
          <td>-0.6459</td>
          <td>1090064253 mas</td>
          <td>91090000 mas</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The interactive component's coordinate system is (RA, dec), as RA
      increases from left to right. After we move the Vulpecula stars to their
      future positions, the component reveals that they form the shape of the
      constellation Columba and reveals a message with the clue "this is still
      just Greek to you."
    </p>
    <SheetableImage src={solved} />
    <p>
      As clued by the new information, the stars in Columba have Greek letter
      designations. Index by the position of the Greek letter in the alphabet
      into the feeder answer. Alpha Vulpecula is named Anser ("answer"), and
      Alpha Columba is named Phact. Reading the stars in approximately
      constellation order (left to right along the top, then down) gives the
      answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="table-5">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Feeder</th>
          <th>Target Star</th>
          <th>Index</th>
          <th>Extracted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Transylvanian Math</td>
          <td>COBBLESTONES</td>
          <td>δ Col</td>
          <td>4</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Jigsaw Sudoku</td>
          <td>INTERCONNECTION</td>
          <td>κ Col</td>
          <td>10</td>
          <td>E</td>
        </tr>
        <tr>
          <td>ENNEAGRAM</td>
          <td>TENNESSEE</td>
          <td>γ Col</td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>Icarus Away!</td>
          <td>BEER BOTTLE</td>
          <td>β Col</td>
          <td>2</td>
          <td>E</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>α Col</td>
          <td></td>
          <td>PHACT</td>
        </tr>
        <tr>
          <td>Oil Paintings</td>
          <td>BOSTON CELTICS</td>
          <td>ε Col</td>
          <td>5</td>
          <td>O</td>
        </tr>
        <tr>
          <td>A Terrible Morning</td>
          <td>SCISSORS</td>
          <td>η Col</td>
          <td>7</td>
          <td>R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <sup>
        <a href="#fn1" id="ref1">
          [1]
        </a>
      </sup>{' '}
      While the Vulpecula stars have their own proper motions and the Gaia
      objects their own positions, these are not used.
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(2),
      .table-2 tr:nth-child(1) td,
      .table-5 td:nth-child(3n + 2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-3 td {
        padding: 4px 10px !important;
      }
      .table-4 td {
        padding: 2px 8px !important;
        font-size: 85%;
      }
      .table-2 td,
      .table-3 td:nth-child(n + 3),
      .table-4 td:nth-child(n + 5),
      .table-5 td:nth-child(n + 3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
