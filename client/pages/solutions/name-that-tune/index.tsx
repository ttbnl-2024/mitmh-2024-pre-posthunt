import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/name-that-tune/0.png';

const SLUG = 'name-that-tune';
const ANSWER = `THEME`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The music notes used for the cryptogram are 25 notes from (low bass) E2 up
      to (high treble) A5. Letters are assigned in order of pitch, as in the
      following image:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      Solving the cryptogram for each block of notes yields a series of
      crossword clues. Each of these clues can be answered with the "name" of a
      numbered symphony, many of which can be found on this page:{' '}
      <a href="https://en.wikipedia.org/wiki/List_of_symphonies_with_names">
        https://en.wikipedia.org/wiki/List_of_symphonies_with_names
      </a>
      . We index the symphony number into the composer's last name to get the
      cluephrase <Monospace>SUBMIT THEME</Monospace>, for the answer{' '}
      <b>
        <Monospace>THEME</Monospace>
      </b>
      .
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Composer</th>
          <th>Index</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>SEASON FOR BLOOMS</Monospace>
          </td>
          <td>
            <Monospace>SPRING</Monospace>
          </td>
          <td>
            <Monospace>SCHUMANN</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>INDIAN OR ARCTIC</Monospace>
          </td>
          <td>
            <Monospace>OCEAN</Monospace>
          </td>
          <td>
            <Monospace>RUBENSTEIN</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>WEEPING PROPHET</Monospace>
          </td>
          <td>
            <Monospace>JEREMIAH</Monospace>
          </td>
          <td>
            <Monospace>BERNSTEIN</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HAPPY LIKE BYGONE DAYS</Monospace>
          </td>
          <td>
            <Monospace>HALCYON</Monospace>
          </td>
          <td>
            <Monospace>MENOTTI</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>KIDNEY OR LUNG</Monospace>
          </td>
          <td>
            <Monospace>ORGAN</Monospace>
          </td>
          <td>
            <Monospace>SAINT-SAENS</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HEIGHTS OF FLIGHTS</Monospace>
          </td>
          <td>
            <Monospace>ALTITUDES</Monospace>
          </td>
          <td>
            <Monospace>MARTINON</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>NOT COMPLETE</Monospace>
          </td>
          <td>
            <Monospace>UNFINISHED</Monospace>
          </td>
          <td>
            <Monospace>SCHUBERT</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RUB UNTIL SHINY</Monospace>
          </td>
          <td>
            <Monospace>POLISH</Monospace>
          </td>
          <td>
            <Monospace>TCHAIKOVSKY</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>START OF PROTESTANTISM</Monospace>
          </td>
          <td>
            <Monospace>REFORMATION</Monospace>
          </td>
          <td>
            <Monospace>MENDELSSOHN</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HUYGENS MOON</Monospace>
          </td>
          <td>
            <Monospace>TITAN</Monospace>
          </td>
          <td>
            <Monospace>MAHLER</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>VERY BRAVE LIKE HERCULES</Monospace>
          </td>
          <td>
            <Monospace>HEROIC</Monospace>
          </td>
          <td>
            <Monospace>BEETHOVEN</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(4),
      td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
