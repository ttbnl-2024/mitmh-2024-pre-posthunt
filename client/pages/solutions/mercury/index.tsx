import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'mercury';
const ANSWER = `CALL HIM FREDDIE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The seven individual answers for this round are:</p>
    <Table className="puzzles-table">
      <tbody>
        <tr>
          <td>Revolting Developments</td>
          <td>BALIO TOWERS</td>
        </tr>
        <tr>
          <td>Where on Earth Is Carmina Suntigre?</td>
          <td>BAHAMIAN</td>
        </tr>
        <tr>
          <td>Modern Architecture</td>
          <td>FLAMEN DIALIS</td>
        </tr>
        <tr>
          <td>Split the Difference</td>
          <td>CLAUDE BERRI</td>
        </tr>
        <tr>
          <td>Field of Clovers</td>
          <td>WAR CASTLE FOUR-PACK</td>
        </tr>
        <tr>
          <td>Sorry Not Sorry</td>
          <td>HALIMEDE</td>
        </tr>
        <tr>
          <td>Subplutonean IHTFP Blues</td>
          <td>EDOUARD ROCHE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      These can each be associated with one of the movements of Holst's{' '}
      <i>Planets</i> suite:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Answer</th>
          <th>Movement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Clue>BAHAMIAN</Clue>
          </td>
          <td>Mercury</td>
        </tr>
        <tr>
          <td>
            <Clue>BALIO TOWERS</Clue>
          </td>
          <td>Venus</td>
        </tr>
        <tr>
          <td>
            <Clue>CLAUDE BERRI</Clue>
          </td>
          <td>Uranus</td>
        </tr>
        <tr>
          <td>
            <Clue>EDOUARD ROCHE</Clue>
          </td>
          <td>Saturn</td>
        </tr>
        <tr>
          <td>
            <Clue>FLAMEN DIALIS</Clue>
          </td>
          <td>Jupiter</td>
        </tr>
        <tr>
          <td>
            <Clue>HALIMEDE</Clue>
          </td>
          <td>Neptune</td>
        </tr>
        <tr>
          <td>
            <Clue>WAR CASTLE FOUR-PACK</Clue>
          </td>
          <td>Mars</td>
        </tr>
      </tbody>
    </Table>
    <p>
      In addition, as hinted at by the flavortext, each of the individual
      puzzles contains two key words associated with these planets in Holst's
      suite:
    </p>
    <ul>
      <li>
        Mars, the Bringer of <b>War (1)</b>.
      </li>
      <li>
        Venus, the Bringer of <b>Peace (2)</b>.
      </li>
      <li>
        Mercury, the Winged <b>Messenger (3)</b>.
      </li>
      <li>
        Jupiter, the Bringer of <b>Jollity (4)</b>.
      </li>
      <li>
        Saturn, the Bringer of <b>Old Age (5)</b>.
      </li>
      <li>
        Uranus, the <b>Magician (6)</b>.
      </li>
      <li>
        Neptune, the <b>Mystic (7)</b>.
      </li>
    </ul>
    <p>
      We can find these key words in the individual puzzles. Placing those seven
      in order of the movements within the suite and using those key words to
      choose an index based on the same ordering, we get:
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Planet</th>
          <th>Answer</th>
          <th>Keyword 1</th>
          <th>Keyword 2</th>
          <th>Extraction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mars</td>
          <td>WAR CASTLE FOUR-PACK</td>
          <td>jollity (4)</td>
          <td>peace (2)</td>
          <td>CA</td>
        </tr>
        <tr>
          <td>Venus</td>
          <td>BALIO TOWERS</td>
          <td>messenger (3)</td>
          <td>messenger (3)</td>
          <td>LL</td>
        </tr>
        <tr>
          <td>Mercury</td>
          <td>BAHAMIAN</td>
          <td>messenger (3)</td>
          <td>magician (6)</td>
          <td>HI</td>
        </tr>
        <tr>
          <td>Jupiter</td>
          <td>FLAMEN DIALIS</td>
          <td>jollity (4)</td>
          <td>war (1)</td>
          <td>MF</td>
        </tr>
        <tr>
          <td>Saturn</td>
          <td>EDOUARD ROCHE</td>
          <td>magician (6)</td>
          <td>war (1)</td>
          <td>RE</td>
        </tr>
        <tr>
          <td>Uranus</td>
          <td>CLAUDE BERRI</td>
          <td>old age (5)</td>
          <td>old age (5)</td>
          <td>DD</td>
        </tr>
        <tr>
          <td>Neptune</td>
          <td>HALIMEDE</td>
          <td>jollity (4)</td>
          <td>magician (6)</td>
          <td>IE</td>
        </tr>
      </tbody>
    </Table>

    <p>
      The answer is that Mercury will only pay attention if you{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>

    <Appendix>
      <h3>Keyword Locations</h3>
      <ul>
        <li>
          Mars (Field of Clovers, <Monospace>WAR CASTLE FOUR-PACK</Monospace>):
          <ul>
            <li>peace (group 4)</li>
            <li>jollity (group 6)</li>
          </ul>
        </li>
        <li>
          Venus (Revolting Developments, <Monospace>BALIO TOWERS</Monospace>):
          <ul>
            <li>messenger (headline 1)</li>
            <li>messenger (headline 9)</li>
          </ul>
        </li>
        <li>
          Mercury (Where on Earth Is Carmina Suntigre?,{' '}
          <Monospace>BAHAMIAN</Monospace>):
          <ul>
            <li>magician (wanted poster 8)</li>
            <li>messenger (wanted poster 9)</li>
          </ul>
        </li>
        <li>
          Jupiter (Modern Architecture, <Monospace>FLAMEN DIALIS</Monospace>):
          <ul>
            <li>jollity (Louvre Pyramid, across and down 10)</li>
            <li>war (John F. Kennedy Presidential Library, first newspaper)</li>
          </ul>
        </li>
        <li>
          Saturn (Subplutonean IHTFP Blues, <Monospace>EDOUARD ROCHE</Monospace>
          ):
          <ul>
            <li>magician (picture 8)</li>
            <li>war (picture 1)</li>
          </ul>
        </li>
        <li>
          Uranus (Split the Difference, <Monospace>CLAUDE BERRIK</Monospace>):
          <ul>
            <li>old age (fragment 28)</li>
            <li>old age (fragment 106)</li>
          </ul>
        </li>
        <li>
          Neptune (Sorry Not Sorry, <Monospace>HALIMEDE</Monospace>):
          <ul>
            <li>magician (1:01)</li>
            <li>jollity (11:19)</li>
          </ul>
        </li>
      </ul>
    </Appendix>
    <style jsx global>{`
      .puzzles-table td:nth-child(2),
      .extract-table td:nth-child(3n + 2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .extract-table td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
