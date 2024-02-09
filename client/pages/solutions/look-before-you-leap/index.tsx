import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { Borders, Colors } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'look-before-you-leap';
const ANSWER = `LOG SEMIRING`;

let C9 = Colors.C9;
let C4 = Colors.C4;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The first thing we encounter when solving this puzzle is a list of eight
      pairs of letter strings. The letter strings look relatively sensible, and
      in particular the bigrams and trigrams are largely consistent with English
      and/or Indo-European languages, but there are places where it looks like
      there might be letters missing. (Astute solvers may be able to correctly
      infer that these letter strings look plausibly like Latin with letters
      missing.) The flavortext is consistent with this hypothesis.
    </p>
    <p>
      Wildcard-searching for the letter strings to account for the possibility
      of missing letters, using a sufficiently large wordlist (a word list which
      contains all Wikipedia article headings will work) will eventually enable
      us to identify that the restored words form an alphabetical list of the
      scientific names of eight species of frogs and toads:{' '}
    </p>
    <ul>
      <li>Arthroleptis tuberosus</li>
      <li>Brachycephalus albolineatus</li>
      <li>Discoglossus montalentii</li>
      <li>Mertensophryne loveridgei</li>
      <li>Paratelmatobius poecilogaster</li>
      <li>Pseudhymenochirus merlini</li>
      <li>Silverstoneia gutturalis</li>
      <li>Sphaenorhynchus pauloalvini</li>
    </ul>
    <p>Each of these scientific names has had precisely ten letters removed:</p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>ARTLTSTERU</Monospace>
          </td>
          <td>Arthroleptis tuberosus</td>
        </tr>
        <tr>
          <td>
            <Monospace>BACUSALBLU</Monospace>
          </td>
          <td>Brachycephalus albolineatus</td>
        </tr>
        <tr>
          <td>
            <Monospace>SCGUOLETII</Monospace>
          </td>
          <td>Discoglossus montalentii</td>
        </tr>
        <tr>
          <td>
            <Monospace>TNSOPHLOIG</Monospace>
          </td>
          <td>Mertensophryne loveridgei</td>
        </tr>
        <tr>
          <td>
            <Monospace>ATLISOIGTR</Monospace>
          </td>
          <td>Paratelmatobius poecilogaster</td>
        </tr>
        <tr>
          <td>
            <Monospace>PHYMECSMEI</Monospace>
          </td>
          <td>Pseudhymenochirus merlini</td>
        </tr>
        <tr>
          <td>
            <Monospace>VESNEGTALI</Monospace>
          </td>
          <td>Silverstoneia gutturalis</td>
        </tr>
        <tr>
          <td>
            <Monospace>SARNCSAUAV</Monospace>
          </td>
          <td>Sphaenorhynchus pauloalvini</td>
        </tr>
      </tbody>
    </Table>
    <p>
      There are ten cells in each row of the grid. Correctly matching the
      strings of ten letters with rows of the grid, and placing the first
      removed letter in the cell with the number 1, the second removed letter in
      the cell with the number 2 (i.e., a permutation), and so results in
      verifiable words and phrases being formed:
    </p>
    <Crossword
      // prettier-ignore
      data={[
        [3,7,2,4,8,1,9,6,10,5],
        [7,4,6,5,3,9,1,8,10,2],
        [6,3,1,2,7,10,9,5,4,8],
        [5,6,7,8,10,9,3,1,4,2],
        [8,6,1,5,9,3,7,10,2,4],
        [5,1,8,4,6,2,9,10,3,7],
        [5,8,1,2,3,7,9,4,10,6],
        [8,10,5,3,6,1,4,9,7,2],
      ]}
      borders={Array(8)
        .fill(null)
        .map((_, i) =>
          Array(10)
            .fill(null)
            .map((_) => (i == 4 ? Borders.T : ''))
        )}
      // prettier-ignore
      fill={[
        ["L","I","T","I","G","A","T","O","R","S"],
        ["E","U","L","O","G","I","S","T","I","C"],
        ["S","T","A","R","T","U","R","T","L","E"],
        ["P","H","L","O","G","I","S","T","O","N"],
        ["U","S","S","C","A","R","A","V","A","N"],
        ["E","V","A","N","G","E","L","I","S","T"],
        ["E","M","P","H","Y","S","E","M","I","C"],
        ["B","U","S","C","A","B","U","L","L","A"],
      ]}
      tableClass="my-4"
    />
    <p>
      Observing the grid filled in this way carefully, we may notice that{' '}
      <Monospace>LOG</Monospace> appears twice in the upper half of the grid,
      that <Monospace>VAN</Monospace> appears twice in the lower half of the
      grid, and eventually that there are other notable things in both grids
      (things you might find in a river in the upper half, and automobiles in
      the lower half):
    </p>
    <Crossword
      // prettier-ignore
      data={Array(8).fill(Array(10).fill(''))}
      borders={Array(8)
        .fill(null)
        .map((_, i) =>
          Array(10)
            .fill(null)
            .map((_) => (i == 4 ? Borders.T : ''))
        )}
      // prettier-ignore
      fill={[
        ["L","I","T","I","G","A","T","O","R","S"],
        ["E","U","L","O","G","I","S","T","I","C"],
        ["S","T","A","R","T","U","R","T","L","E"],
        ["P","H","L","O","G","I","S","T","O","N"],
        ["U","S","S","C","A","R","A","V","A","N"],
        ["E","V","A","N","G","E","L","I","S","T"],
        ["E","M","P","H","Y","S","E","M","I","C"],
        ["B","U","S","C","A","B","U","L","L","A"],
      ]}
      // prettier-ignore
      shading={[
        ['','','','',C9,C9,C9,C9,C9,''],
        ['','',C9,C9,C9,'','','','',''],
        ['','','','',C9,C9,C9,C9,C9,C9],
        ['','',C9,C9,C9,'','','','',''],
        ['','','',C9,C9,C9,'',C9,C9,C9],
        ['',C9,C9,C9,'','','','','',''],
        ['','','','','',C9,C9,C9,C9,''],
        [C9,C9,C9,C9,C9,C9,'','','',''],
      ]}
      tableClass="my-4"
    />
    <p>
      With a list of frogs and toads, a road with vehicles in the lower half of
      the grid, and a river with logs, a turtle, and a gator in the upper half
      of the grid, we will eventually realize that this grid is a game of
      Frogger.
    </p>
    <p>
      Starting from the bottom of the screen, the shortest path from the bottom
      center (where the Frogger frog usually spawns) to the top of the screen
      (where the frog is safe) is this one:
    </p>
    <Crossword
      // prettier-ignore
      data={Array(8).fill(Array(10).fill(''))}
      borders={Array(8)
        .fill(null)
        .map((_, i) =>
          Array(10)
            .fill(null)
            .map((_) => (i == 4 ? Borders.T : ''))
        )}
      // prettier-ignore
      fill={[
        ["L","I","T","I","G","A","T","O","R","S"],
        ["E","U","L","O","G","I","S","T","I","C"],
        ["S","T","A","R","T","U","R","T","L","E"],
        ["P","H","L","O","G","I","S","T","O","N"],
        ["U","S","S","C","A","R","A","V","A","N"],
        ["E","V","A","N","G","E","L","I","S","T"],
        ["E","M","P","H","Y","S","E","M","I","C"],
        ["B","U","S","C","A","B","U","L","L","A"],
      ]}
      // prettier-ignore
      shading={[
        ['','','','',C4,C9,C9,C9,C9,''],
        ['','',C9,C9,C4,'','','','',''],
        ['','','','',C4,C9,C9,C9,C9,C9],
        ['','',C4,C4,C4,'','','','',''],
        [C4,C4,C4,C9,C9,C9,'',C9,C9,C9],
        [C4,C9,C9,C9,C4,C4,C4,C4,C4,C4],
        [C4,C4,C4,C4,C4,C9,C9,C9,C9,C4],
        [C9,C9,C9,C9,C9,C9,C4,C4,C4,C4],
      ]}
      tableClass="my-4"
    />
    <p>
      Below the grid is a set of six questions asking us what we see on our
      journey. The answers to these questions are:
    </p>
    <ul>
      <li>
        a <Monospace>LOG</Monospace>
      </li>
      <li>
        a <Monospace>SEMI</Monospace>
      </li>
      <li>
        an <Monospace>R</Monospace>
      </li>
      <li>
        an <Monospace>I</Monospace>
      </li>
      <li>
        an <Monospace>N</Monospace>
      </li>
      <li>
        a <Monospace>G</Monospace>
      </li>
    </ul>
    <p>
      The answer to this puzzle is <Answerize>LOG SEMIRING</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        This puzzle was originally proposed as a meta, without the front half of
        the puzzle, and then converted to a feeder puzzle at the editors'
        request. The availability of an answer with both a{' '}
        <Monospace>LOG</Monospace> and a <Monospace>SEMI</Monospace> in it in
        another meta was a happy accident.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
