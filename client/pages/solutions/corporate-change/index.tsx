import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'corporate-change';
const ANSWER = `CHEMICAL X`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The wordsearch consists of words/phrases containing the name of a bird,
      but with the bird names replaced with the letter X. Enumerations are given
      in alphabetical order by bird name.
    </p>
    <Table className="wordsearch-table">
      <tbody>
        <tr>
          <td>O</td>
          <td>E</td>
          <td>F</td>
          <td>N</td>
          <td>E</td>
          <td>R</td>
          <td className="bg-[#ff9900]">G</td>
          <td className="bg-[#ff9900]">N</td>
          <td className="bg-[#ff9900]">O</td>
          <td className="bg-[#ff9900]">S</td>
          <td className="bg-[#ff9900]">X</td>
          <td className="bg-[#a2c4c9]">X</td>
          <td>F</td>
          <td>E</td>
        </tr>
        <tr>
          <td className="bg-[#d9ead3]">X</td>
          <td className="bg-[#d9ead3]">C</td>
          <td className="bg-[#d9ead3]">L</td>
          <td className="bg-[#d9ead3]">O</td>
          <td className="bg-[#d9ead3]">C</td>
          <td className="bg-[#d9ead3]">K</td>
          <td>O</td>
          <td>U</td>
          <td className="bg-[#a4c2f4]">A</td>
          <td className="bg-[#ffe599]">N</td>
          <td>W</td>
          <td className="bg-[#a2c4c9]">S</td>
          <td className="bg-[#d9d2e9]">X</td>
          <td>T</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">A</td>
          <td className="bg-[#ea9999]">X</td>
          <td>I</td>
          <td className="bg-[#b6d7a8]">T</td>
          <td>F</td>
          <td>F</td>
          <td className="bg-[#cccccc]">X</td>
          <td>R</td>
          <td className="bg-[#a4c2f4]">M</td>
          <td className="bg-[#ffe599]">E</td>
          <td>O</td>
          <td className="bg-[#a2c4c9]">A</td>
          <td className="bg-[#d9d2e9]">R</td>
          <td>W</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">T</td>
          <td className="bg-[#ea9999]">D</td>
          <td>V</td>
          <td className="bg-[#b6d7a8]">O</td>
          <td className="bg-[#c9daf8]">X</td>
          <td>O</td>
          <td className="bg-[#cccccc]">E</td>
          <td>F</td>
          <td className="bg-[#a4c2f4]">E</td>
          <td className="bg-[#ffe599]">E</td>
          <td>T</td>
          <td className="bg-[#a2c4c9]">M</td>
          <td className="bg-[#d9d2e9]">O</td>
          <td className="bg-[#00ffff]">X</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">T</td>
          <td className="bg-[#ea9999]">O</td>
          <td>E</td>
          <td className="bg-[#b6d7a8]">K</td>
          <td className="bg-[#c9daf8]">H</td>
          <td>U</td>
          <td className="bg-[#cccccc]">S</td>
          <td className="bg-[#e06666]">O</td>
          <td className="bg-[#a4c2f4]">R</td>
          <td className="bg-[#ffe599]">H</td>
          <td>H</td>
          <td>N</td>
          <td className="bg-[#d9d2e9]">L</td>
          <td className="bg-[#00ffff]">B</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">I</td>
          <td className="bg-[#ea9999]">B</td>
          <td>F</td>
          <td className="bg-[#b6d7a8]">I</td>
          <td className="bg-[#c9daf8]">O</td>
          <td>R</td>
          <td className="bg-[#cccccc]">E</td>
          <td className="bg-[#e06666]">N</td>
          <td className="bg-[#a4c2f4]">I</td>
          <td className="bg-[#ffe599]">S</td>
          <td>R</td>
          <td>E</td>
          <td className="bg-[#d9d2e9]">Y</td>
          <td className="bg-[#00ffff]">U</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">C</td>
          <td className="bg-[#ea9999]">A</td>
          <td>I</td>
          <td className="bg-[#b6d7a8]">L</td>
          <td className="bg-[#c9daf8]">O</td>
          <td>T</td>
          <td className="bg-[#cccccc]">T</td>
          <td className="bg-[#e06666]">E</td>
          <td className="bg-[#a4c2f4]">C</td>
          <td className="bg-[#ffe599]">X</td>
          <td>E</td>
          <td>F</td>
          <td className="bg-[#d9d2e9]">A</td>
          <td className="bg-[#00ffff]">M</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">U</td>
          <td className="bg-[#ea9999]">H</td>
          <td>V</td>
          <td className="bg-[#b6d7a8]">L</td>
          <td className="bg-[#c9daf8]">D</td>
          <td>W</td>
          <td className="bg-[#cccccc]">L</td>
          <td className="bg-[#e06666]">L</td>
          <td className="bg-[#a4c2f4]">A</td>
          <td>U</td>
          <td className="bg-[#f6b26b]">R</td>
          <td>I</td>
          <td className="bg-[#d9d2e9]">T</td>
          <td className="bg-[#00ffff]">P</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">S</td>
          <td className="bg-[#ea9999]">C</td>
          <td>E</td>
          <td className="bg-[#b6d7a8]">A</td>
          <td>O</td>
          <td>O</td>
          <td className="bg-[#cccccc]">A</td>
          <td className="bg-[#e06666]">X</td>
          <td className="bg-[#a4c2f4]">N</td>
          <td>R</td>
          <td>E</td>
          <td className="bg-[#f6b26b]">A</td>
          <td>I</td>
          <td className="bg-[#00ffff]">S</td>
        </tr>
        <tr>
          <td className="bg-[#b4a7d6]">X</td>
          <td className="bg-[#ea9999]">I</td>
          <td>O</td>
          <td className="bg-[#b6d7a8]">X</td>
          <td>U</td>
          <td>F</td>
          <td className="bg-[#cccccc]">M</td>
          <td>O</td>
          <td className="bg-[#a4c2f4]">X</td>
          <td>T</td>
          <td>O</td>
          <td>V</td>
          <td className="bg-[#f6b26b]">B</td>
          <td>O</td>
        </tr>
        <tr>
          <td>N</td>
          <td className="bg-[#ffff00]">F</td>
          <td className="bg-[#ffff00]">R</td>
          <td className="bg-[#ffff00]">E</td>
          <td className="bg-[#ffff00]">E</td>
          <td className="bg-[#ffff00]">R</td>
          <td className="bg-[#ffff00]">A</td>
          <td className="bg-[#ffff00]">N</td>
          <td className="bg-[#ffff00]">G</td>
          <td className="bg-[#ffff00]">E</td>
          <td className="bg-[#ffff00]">X</td>
          <td>E</td>
          <td>V</td>
          <td className="bg-[#f6b26b]">X</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="birds-table">
      <thead>
        <tr>
          <th>Enum</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(4 5 7)</td>
          <td className="bg-[#ffff00]">FREE RANGE CHICKEN</td>
        </tr>
        <tr>
          <td>(7 5)</td>
          <td className="bg-[#ea9999]">ICHABOD CRANE</td>
        </tr>
        <tr>
          <td>(7)</td>
          <td className="bg-[#f9cb9c]">CROWBAR</td>
        </tr>
        <tr>
          <td>(6 5)</td>
          <td className="bg-[#d9ead3]">CUCKOO CLOCK</td>
        </tr>
        <tr>
          <td>(8 5)</td>
          <td className="bg-[#a4c2f4]">AMERICAN EAGLE</td>
        </tr>
        <tr>
          <td>(7 6)</td>
          <td className="bg-[#cccccc]">MALTESE FALCON</td>
        </tr>
        <tr>
          <td>(7 5)</td>
          <td className="bg-[#b4a7d6]">ATTICUS FINCH</td>
        </tr>
        <tr>
          <td>(10)</td>
          <td className="bg-[#00ffff]">GOOSEBUMPS</td>
        </tr>
        <tr>
          <td>(3 4)</td>
          <td className="bg-[#e06666]">JAY LENO</td>
        </tr>
        <tr>
          <td>(6 5)</td>
          <td className="bg-[#ffe599]">MARTIN SHEEN</td>
        </tr>
        <tr>
          <td>(2 4 1 11)</td>
          <td className="bg-[#b6d7a8]">TO KILL A MOCKINGBIRD</td>
        </tr>
        <tr>
          <td>(5 4)</td>
          <td className="bg-[#c9daf8]">ROBIN HOOD</td>
        </tr>
        <tr>
          <td>(4 4)</td>
          <td className="bg-[#ff9900]">SWAN SONG</td>
        </tr>
        <tr>
          <td>(6 5)</td>
          <td className="bg-[#d9d2e9]">TAYLOR SWIFT</td>
        </tr>
        <tr>
          <td>(6 3)</td>
          <td className="bg-[#a2c4c9]">TOUCAN SAM</td>
        </tr>
      </tbody>
    </Table>
    <p>
      When read column-wise from left to right (clued by "downhill" in the
      flavortext), the unused letters form indices{' '}
      <Clue>
        ONE FIVE FIVE ONE FOUR FOUR TWO FOUR FOUR TWO THREE ONE FIVE FIVE TWO
      </Clue>
      . These indices are assigned to the birds / X's in the same column-wise
      order:
    </p>
    <Table className="extraction-table">
      <thead>
        <tr>
          <th>Entry</th>
          <th>Bird name</th>
          <th>Index</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CUCKOO CLOCK</td>
          <td>CUCKOO</td>
          <td>1</td>
          <td>C</td>
        </tr>
        <tr>
          <td>ATTICUS FINCH</td>
          <td>FINCH</td>
          <td>5</td>
          <td>H</td>
        </tr>
        <tr>
          <td>ICHABOD CRANE</td>
          <td>CRANE</td>
          <td>5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>TO KILL A MOCKINGBIRD</td>
          <td>MOCKINGBIRD</td>
          <td>1</td>
          <td>M</td>
        </tr>
        <tr>
          <td>ROBIN HOOD</td>
          <td>ROBIN</td>
          <td>4</td>
          <td>I</td>
        </tr>
        <tr>
          <td>MALTESE FALCON</td>
          <td>FALCON</td>
          <td>4</td>
          <td>C</td>
        </tr>
        <tr>
          <td>JAY LENO</td>
          <td>JAY</td>
          <td>2</td>
          <td>A</td>
        </tr>
        <tr>
          <td>AMERICAN EAGLE</td>
          <td>EAGLE</td>
          <td>4</td>
          <td>L</td>
        </tr>
        <tr>
          <td>MARTIN SHEEN</td>
          <td>MARTIN</td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td>SWAN SONG</td>
          <td>SWAN</td>
          <td>2</td>
          <td>W</td>
        </tr>
        <tr>
          <td>FREE RANGE CHICKEN</td>
          <td>CHICKEN</td>
          <td>3</td>
          <td>I</td>
        </tr>
        <tr>
          <td>TOUCAN SAM</td>
          <td>TOUCAN</td>
          <td>1</td>
          <td>T</td>
        </tr>
        <tr>
          <td>TAYLOR SWIFT</td>
          <td>SWIFT</td>
          <td>5</td>
          <td>T</td>
        </tr>
        <tr>
          <td>GOOSEBUMPS</td>
          <td>GOOSE</td>
          <td>5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>CROWBAR</td>
          <td>CROW</td>
          <td>2</td>
          <td>R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The extracted letters form <Clue>CHEMICAL TWITTER</Clue>, which needs one
      more corporate change: Twitter had its name changed to X, with its iconic
      bird logo also changing to an X. Once the change is made, the extract
      becomes the final answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .wordsearch-table td {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        height: 30px !important;
        width: 30px !important;
        padding: 0 !important;
        text-align: center;
      }
      .birds-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .extraction-table td:nth-child(1),
      .extraction-table td:nth-child(2),
      .extraction-table td:nth-child(4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .extraction-table td:nth-child(3),
      .extraction-table td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
