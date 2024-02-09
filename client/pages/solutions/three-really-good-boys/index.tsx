import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Link from 'components/link';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/puzzles/three-really-good-boys/0.png';
import image1 from 'assets/puzzles/three-really-good-boys/1.png';
import image2 from 'assets/puzzles/three-really-good-boys/2.png';
import image3 from 'assets/puzzles/three-really-good-boys/3.png';
import image4 from 'assets/puzzles/three-really-good-boys/4.png';
import image5 from 'assets/puzzles/three-really-good-boys/5.png';
import image6 from 'assets/solutions/three-really-good-boys/6.png';

const SLUG = 'three-really-good-boys';
const ANSWER = `GO BAR HOPPING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This meta uses the following answers:</p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Feeder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Annual International Fictionary Night</td>
          <td>
            <Monospace>PJ MASKS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Boosted</td>
          <td>
            <Monospace>THE CABALLEROS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Corporate Change</td>
          <td>
            <Monospace>CHEMICAL X</Monospace>
          </td>
        </tr>
        <tr>
          <td>Deep Conspiracy</td>
          <td>
            <Monospace>DAVE SEVILLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Extreme Hiking</td>
          <td>
            <Monospace>PROFESSOR OAK</Monospace>
          </td>
        </tr>
        <tr>
          <td>Family Tree</td>
          <td>
            <Monospace>WARRIORS THREE</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Additionally, solving a feeder puzzle reveals an image (click to open in a
      new tab):
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Annual International Fictionary Night</td>
          <td>
            <Link href={image0}>
              <SheetableImage alt="" src={image0} title="" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Boosted</td>
          <td>
            <Link href={image1}>
              <SheetableImage alt="" src={image1} title="" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Corporate Change</td>
          <td>
            <Link href={image2}>
              <SheetableImage alt="" src={image2} title="" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Deep Conspiracy</td>
          <td>
            <Link href={image3}>
              <SheetableImage alt="" src={image3} title="" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Extreme Hiking</td>
          <td>
            <Link href={image4}>
              <SheetableImage alt="" src={image4} title="" />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Family Tree</td>
          <td>
            <Link href={image5}>
              <SheetableImage alt="" src={image5} title="" />
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each answer clues a group of 3 characters. Each dot around the images
      stands for a unique letter, which is the same across all images. The paw
      paths show 2 sequences of letters per image, for 2 of the characters in
      their group of 3. We can solve this as a logic puzzle to determine which
      nodes correspond to which letters. Ordering by puzzle title (A–F),
      indexing into the missing character's name based on the judge's scores,
      reading Judge 1's letters and Judge 2's letters tells us that to find the
      missing person, we need to <Answerize>{`${ANSWER}`}</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Answer</th>
          <th>Characters</th>
          <th>Missing</th>
          <th>Judge 1</th>
          <th>Judge 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>PJ MASKS</Monospace>
          </td>
          <td>Owlette, Catboy</td>
          <td>
            <Monospace>GEKKO</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>THE CABALLEROS</Monospace>
          </td>
          <td>Jose, Donald</td>
          <td>
            <Monospace>PANCHITO</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CHEMICAL X</Monospace>
          </td>
          <td>Blossom, Bubbles</td>
          <td>
            <Monospace>BUTTERCUP</Monospace>
          </td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DAVE SEVILLE</Monospace>
          </td>
          <td>Theodore, Simon</td>
          <td>
            <Monospace>ALVIN</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PROFESSOR OAK</Monospace>
          </td>
          <td>Squirtle, Bulbasaur</td>
          <td>
            <Monospace>CHARMANDER</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>WARRIORS THREE</Monospace>
          </td>
          <td>Volstagg, Fandral</td>
          <td>
            <Monospace>HOGUN</Monospace>
          </td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>The letters around the circle are:</p>

    <SheetableImage alt="" src={image6} title="" className="mx-auto max-w-md" />
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
