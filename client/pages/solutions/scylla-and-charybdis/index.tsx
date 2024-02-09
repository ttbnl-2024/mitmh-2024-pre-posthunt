import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'scylla-and-charybdis';
const ANSWER = `PUT IT IN DIVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This metapuzzle uses the following puzzles:</p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>99% of Mystery Hunt Teams Cannot Solve This!</td>
          <td>
            <Monospace>MULTIPHASIC</Monospace>
          </td>
        </tr>
        <tr>
          <td>At the Late Night Picture Show</td>
          <td>
            <Monospace>OSTRACIZING</Monospace>
          </td>
        </tr>
        <tr>
          <td>Climbfinder</td>
          <td>
            <Monospace>TETHYS OCEAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Follow the Directions</td>
          <td>
            <Monospace>VENICE BEACH</Monospace>
          </td>
        </tr>
        <tr>
          <td>I Know Who I Want to Take Me Home</td>
          <td>
            <Monospace>PROGRESS BAR</Monospace>
          </td>
        </tr>
        <tr>
          <td>It's Not a Well Written Quizbowl Packet But...</td>
          <td>
            <Monospace>A CRYSTAL AGE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Long Strange Tour</td>
          <td>
            <Monospace>SOCORRO DOVE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Model Scientists</td>
          <td>
            <Monospace>PLASTIC LOVE</Monospace>
          </td>
        </tr>
        <tr>
          <td>The Hermit Crab</td>
          <td>
            <Monospace>GASOLINE CAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            This Puzzle Keeps Turning Upside Down and We Can't Figure Out Why
          </td>
          <td>
            <Monospace>CARLTON FISK</Monospace>
          </td>
        </tr>
        <tr>
          <td>Too Tired to Travel</td>
          <td>
            <Monospace>DEACTIVATES</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each answer is eleven letters and each position has, among all answers,
      one C &amp; one S:
    </p>
    <Table>
      <tbody>
        <tr>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>F</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>V</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
          <td className="text-center">
            <Monospace>U</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>Z</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>V</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>V</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            <Monospace>V</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#ffff00]">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The flavortext indicates there is space between Scylla and Charybdis.
      Thus, we want to interleave the answers within themselves, so that the C
      and S are one space apart vertically (potentially wrapping), as follows:
    </p>
    <Table className="font-mono">
      <tbody>
        <tr>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">R</td>
          <td className="text-center">Y</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">T</td>
          <td className="text-center">A</td>
          <td className="text-center">L</td>
          <td className="text-center">A</td>
          <td className="text-center">G</td>
          <td className="text-center bg-[#00ffff]">E</td>
        </tr>
        <tr>
          <td className="text-center">M</td>
          <td className="text-center bg-[#00ffff]">U</td>
          <td className="text-center">L</td>
          <td className="text-center">T</td>
          <td className="text-center">I</td>
          <td className="text-center">P</td>
          <td className="text-center">H</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">I</td>
          <td className="text-center bg-[#ffff00]">C</td>
        </tr>
        <tr>
          <td className="text-center">O</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">T</td>
          <td className="text-center">R</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">I</td>
          <td className="text-center">Z</td>
          <td className="text-center bg-[#00ffff]">I</td>
          <td className="text-center">N</td>
          <td className="text-center">G</td>
        </tr>
        <tr>
          <td className="text-center">G</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">O</td>
          <td className="text-center">L</td>
          <td className="text-center bg-[#00ffff]">I</td>
          <td className="text-center">N</td>
          <td className="text-center">E</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">A</td>
          <td className="text-center">N</td>
        </tr>
        <tr>
          <td className="text-center">T</td>
          <td className="text-center">E</td>
          <td className="text-center bg-[#00ffff]">T</td>
          <td className="text-center">H</td>
          <td className="text-center">Y</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">O</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">E</td>
          <td className="text-center">A</td>
          <td className="text-center">N</td>
        </tr>
        <tr>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">O</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">O</td>
          <td className="text-center">R</td>
          <td className="text-center">R</td>
          <td className="text-center">O</td>
          <td className="text-center bg-[#00ffff]">D</td>
          <td className="text-center">O</td>
          <td className="text-center">V</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td className="text-center bg-[#00ffff]">P</td>
          <td className="text-center">R</td>
          <td className="text-center">O</td>
          <td className="text-center">G</td>
          <td className="text-center">R</td>
          <td className="text-center">E</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">B</td>
          <td className="text-center">A</td>
          <td className="text-center">R</td>
        </tr>
        <tr>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">A</td>
          <td className="text-center">R</td>
          <td className="text-center">L</td>
          <td className="text-center">T</td>
          <td className="text-center">O</td>
          <td className="text-center bg-[#00ffff]">N</td>
          <td className="text-center">F</td>
          <td className="text-center">I</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">K</td>
        </tr>
        <tr>
          <td className="text-center">P</td>
          <td className="text-center">L</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">S</td>
          <td className="text-center">T</td>
          <td className="text-center">I</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">L</td>
          <td className="text-center">O</td>
          <td className="text-center bg-[#00ffff]">V</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td className="text-center">V</td>
          <td className="text-center">E</td>
          <td className="text-center">N</td>
          <td className="text-center bg-[#00ffff]">I</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">E</td>
          <td className="text-center">B</td>
          <td className="text-center">E</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center">H</td>
        </tr>
        <tr>
          <td className="text-center">D</td>
          <td className="text-center">E</td>
          <td className="text-center">A</td>
          <td className="text-center bg-[#ffff00]">C</td>
          <td className="text-center bg-[#00ffff]">T</td>
          <td className="text-center">I</td>
          <td className="text-center">V</td>
          <td className="text-center">A</td>
          <td className="text-center">T</td>
          <td className="text-center">E</td>
          <td className="text-center bg-[#ffff00]">S</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking the letters between Scylla and Charybdis from left to right tells
      us the best way to avoid them with our car is to{' '}
      <Answerize>PUT IT IN DIVE</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
