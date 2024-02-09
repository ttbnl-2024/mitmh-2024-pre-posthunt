import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Link from 'components/link';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image2 from 'assets/puzzles/appease-the-minotaur/2.png';
import image3 from 'assets/puzzles/appease-the-minotaur/3.png';
import image4 from 'assets/puzzles/appease-the-minotaur/4.png';
import image5 from 'assets/puzzles/appease-the-minotaur/5.png';
import image6 from 'assets/puzzles/appease-the-minotaur/6.png';
import image7 from 'assets/puzzles/appease-the-minotaur/7.png';
import image8 from 'assets/puzzles/appease-the-minotaur/8.png';
import image9 from 'assets/puzzles/appease-the-minotaur/9.png';
import image10 from 'assets/puzzles/appease-the-minotaur/10.png';
import image11 from 'assets/puzzles/appease-the-minotaur/11.png';
import image12 from 'assets/puzzles/appease-the-minotaur/12.png';
import image13 from 'assets/puzzles/appease-the-minotaur/13.png';
import image14 from 'assets/puzzles/appease-the-minotaur/14.png';
import image15 from 'assets/puzzles/appease-the-minotaur/15.png';
import image0 from 'assets/solutions/appease-the-minotaur/0.png';
import image1 from 'assets/solutions/appease-the-minotaur/1.png';
import solvedMaze from 'assets/solutions/appease-the-minotaur/2.png';

const SLUG = 'appease-the-minotaur';
const ANSWER = `COWPIE A LA MOOED`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This meta uses the following puzzles:</p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A Trip Down Memory Lane</td>
          <td>
            <Monospace>ROTARY SAWBLADE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Could You Restate That?</td>
          <td>
            <Monospace>GRAND OLD FLAG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Halloween TV Guide</td>
          <td>
            <Monospace>RETAIL SALES</Monospace>
          </td>
        </tr>
        <tr>
          <td>IO</td>
          <td>
            <Monospace>INTERNET PROVIDER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Itineratum de Urbes Universum</td>
          <td>
            <Monospace>OUT OF MANY ONE</Monospace>
          </td>
        </tr>
        <tr>
          <td>"Line, please."</td>
          <td>
            <Monospace>INDIVISIBLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>The Farm</td>
          <td>
            <Monospace>ANCHOVY PLANT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spoiler Alert</td>
          <td>
            <Monospace>MAKE A DECISION</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each of the first 7 solves causes Theseus to "grab an extra piece off his
      ship" and opens the next two unopened ship icons on the puzzle page, in
      the order shown below. The final solve provides no additional information.
      In order, the 14 ships provide the following images for solvers:
    </p>
    <div className="flex flex-row justify-center flex-wrap">
      <SheetableImage src={image2} />
      <SheetableImage src={image3} />
      <SheetableImage src={image4} />
      <SheetableImage src={image5} />
      <SheetableImage src={image6} />
      <SheetableImage src={image7} />
      <SheetableImage src={image8} />
      <SheetableImage src={image9} />
      <SheetableImage src={image10} />
      <SheetableImage src={image11} />
      <SheetableImage src={image12} />
      <SheetableImage src={image13} />
      <SheetableImage src={image14} />
      <SheetableImage src={image15} />
    </div>
    <p>
      With enough of these pieces, the puzzle can now be solved. We'll start
      with the maze. As given, the maze has no solution; it can immediately be
      seen that there is a dead end at top left. The 14 replacement tiles
      provide a way forward: these are snapshots of specific sections of the
      maze after 14 walls have been deleted, allowing Theseus to reach the end.
      In all but the 12th tile, the 3x3 is an exact match except for a single
      wall adjacent to the center; the 12th tile shows the 2nd tile's deleted
      wall as well. We use each of the 14 tiles once (numbered and marked in
      yellow, with deleted walls in light grey):
    </p>
    <p>
      <Link href={image0} target="_blank">
        <SheetableImage alt="" src={image0} title="" className="mx-auto" />
      </Link>
    </p>
    <p>The resulting maze is shown below:</p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      This maze can now be solved, with the following path of length 101
      (0-indexed here):
    </p>
    <p>
      <SheetableImage alt="" src={solvedMaze} title="" className="mx-auto" />
    </p>
    <p>
      We now apply the answers to this path. The eight answers correspond to
      USDA beef grades. The answers can be concatenated in ascending beef grade
      order to form a string of length 101, the same length as the maze
      solution. Taking the 14 locations where a treasure chest piece was used to
      patch the maze produces the answers: the Minotaur wants{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Beef Grade</th>
          <th>Answer</th>
          <th>Letters on Changed Squares</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Canner</td>
          <td>
            <Monospace>AN</Monospace>
            <b>
              <u>
                <Monospace>C</Monospace>
              </u>
            </b>
            <Monospace>H</Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>VY PLANT</Monospace>
          </td>
          <td className="text-center">
            <Monospace>CO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cutter</td>
          <td>
            <Monospace>ROTARY SA</Monospace>
            <b>
              <u>
                <Monospace>W</Monospace>
              </u>
            </b>
            <Monospace>BLADE</Monospace>
          </td>
          <td className="text-center">
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Utility</td>
          <td>
            <Monospace>INTERNET </Monospace>
            <b>
              <u>
                <Monospace>P</Monospace>
              </u>
            </b>
            <Monospace>ROV</Monospace>
            <b>
              <u>
                <Monospace>I</Monospace>
              </u>
            </b>
            <Monospace>DER</Monospace>
          </td>
          <td className="text-center">
            <Monospace>PI</Monospace>
          </td>
        </tr>
        <tr>
          <td>Commercial</td>
          <td>
            <Monospace>R</Monospace>
            <b>
              <u>
                <Monospace>E</Monospace>
              </u>
            </b>
            <Monospace>TAIL S</Monospace>
            <b>
              <u>
                <Monospace>A</Monospace>
              </u>
            </b>
            <Monospace>LES</Monospace>
          </td>
          <td className="text-center">
            <Monospace>EA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Standard</td>
          <td>
            <Monospace>GRAND O</Monospace>
            <b>
              <u>
                <Monospace>L</Monospace>
              </u>
            </b>
            <Monospace>D FL</Monospace>
            <b>
              <u>
                <Monospace>A</Monospace>
              </u>
            </b>
            <Monospace>G</Monospace>
          </td>
          <td className="text-center">
            <Monospace>LA</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>Select</b>
          </td>
          <td>
            <b>
              <u>
                <Monospace>M</Monospace>
              </u>
            </b>
            <Monospace>AKE A DECISI</Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>MO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Choice</td>
          <td>
            <Monospace>OUT </Monospace>
            <b>
              <u>
                <Monospace>O</Monospace>
              </u>
            </b>
            <Monospace>F MANY ON</Monospace>
            <b>
              <u>
                <Monospace>E</Monospace>
              </u>
            </b>
          </td>
          <td className="text-center">
            <Monospace>OE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Prime</td>
          <td>
            <Monospace>IN</Monospace>
            <b>
              <u>
                <Monospace>D</Monospace>
              </u>
            </b>
            <Monospace>IVISIBLE</Monospace>
          </td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
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
