import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/we-are-the-champions/0.png';
import image1 from 'assets/solutions/we-are-the-champions/1.png';

const SLUG = 'we-are-the-champions';
const ANSWER = `BRADLEY WIGGINS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We receive 5 laser cut rings. They are concentric and can fit inside each
      other:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      We can rotate the rings to create a combination of, from innermost to
      outermost rings:
    </p>
    <ul>
      <li>Olympic Games year (innermost)</li>
      <li>Bronze medal count</li>
      <li>Silver medal count</li>
      <li>Gold medal count</li>
      <li>Score / point / time for a medal (outermost)</li>
    </ul>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      There are 3 kinds of medals, and the IOC codes for each country are 3
      letters. We take the specific medal won for the given statistic as an
      index, with Gold = 1; Silver = 2; Bronze = 3. Indexing into the country's
      IOC code and reading clockwise starting from 139 (Belgium) in the outer
      ring gives the answer <Answerize>BRADLEY WIGGINS</Answerize>.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Year (Inner)</th>
          <th>Bronzes</th>
          <th>Silvers</th>
          <th>Golds</th>
          <th>Score (Outer)</th>
          <th>Country</th>
          <th>IOC Code</th>
          <th>Sport</th>
          <th>Medal (Index)</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1920</td>
          <td>11</td>
          <td>11</td>
          <td>14</td>
          <td>139</td>
          <td>BELGIUM</td>
          <td>BEL</td>
          <td>Archery, Moving Bird, 33m</td>
          <td>Gold (1)</td>
          <td>B</td>
        </tr>
        <tr>
          <td>1996</td>
          <td>16</td>
          <td>21</td>
          <td>26</td>
          <td>692.34</td>
          <td>RUSSIA</td>
          <td>RUS</td>
          <td>Diving</td>
          <td>Gold (1)</td>
          <td>R</td>
        </tr>
        <tr>
          <td>1994</td>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>3-2</td>
          <td>CANADA</td>
          <td>CAN</td>
          <td>Ice Hockey</td>
          <td>Silver (2)</td>
          <td>A</td>
        </tr>
        <tr>
          <td>2022</td>
          <td>4</td>
          <td>5</td>
          <td>8</td>
          <td>4:08.46</td>
          <td>NETHERLANDS</td>
          <td>NED</td>
          <td>Skeleton</td>
          <td>Bronze (3)</td>
          <td>D</td>
        </tr>
        <tr>
          <td>1980</td>
          <td>15</td>
          <td>14</td>
          <td>3</td>
          <td>4:48.17</td>
          <td>POLAND</td>
          <td>POL</td>
          <td>Swimming (400 m)</td>
          <td>Bronze (3)</td>
          <td>L</td>
        </tr>
        <tr>
          <td>1992</td>
          <td>2</td>
          <td>7</td>
          <td>13</td>
          <td>2-1</td>
          <td>SPAIN</td>
          <td>ESP</td>
          <td>Field Hockey</td>
          <td>Gold (1)</td>
          <td>E</td>
        </tr>
        <tr>
          <td>1984</td>
          <td>7</td>
          <td>4</td>
          <td>7</td>
          <td>5-5</td>
          <td>YUGOSLAVIA</td>
          <td>YUG</td>
          <td>Water Polo</td>
          <td>Gold (1)</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>2016</td>
          <td>3</td>
          <td>6</td>
          <td>2</td>
          <td>2-1</td>
          <td>SWEDEN</td>
          <td>SWE</td>
          <td>Soccer</td>
          <td>Silver (2)</td>
          <td>W</td>
        </tr>
        <tr>
          <td>2002</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td>974</td>
          <td>FINLAND</td>
          <td>FIN</td>
          <td>Ski Jumping, Large Hill</td>
          <td>Silver (2)</td>
          <td>I</td>
        </tr>
        <tr>
          <td>1972</td>
          <td>23</td>
          <td>23</td>
          <td>20</td>
          <td>7:17.25</td>
          <td>EASTERN GERMANY</td>
          <td>GDR</td>
          <td>Rowing</td>
          <td>Gold (1)</td>
          <td>G</td>
        </tr>
        <tr>
          <td>1964</td>
          <td>2</td>
          <td>12</td>
          <td>4</td>
          <td>2:01.1</td>
          <td>GREAT BRITAIN</td>
          <td>GBR</td>
          <td>Athletics, 800m</td>
          <td>Gold (1)</td>
          <td>G</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>5</td>
          <td>2</td>
          <td>3</td>
          <td>1:39.22</td>
          <td>ITALY</td>
          <td>ITA</td>
          <td>Alpine Skiing</td>
          <td>Gold (1)</td>
          <td>I</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>17</td>
          <td>14</td>
          <td>27</td>
          <td>21-17, 23-21</td>
          <td>JAPAN</td>
          <td>JPN</td>
          <td>Badminton</td>
          <td>Bronze (3)</td>
          <td>N</td>
        </tr>
        <tr>
          <td>1912</td>
          <td>19</td>
          <td>19</td>
          <td>25</td>
          <td>3.36</td>
          <td>UNITED STATES</td>
          <td>USA</td>
          <td>Long Jump</td>
          <td>Silver (2)</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .solution-table th:nth-child(-n + 5),
      .solution-table td:nth-child(-n + 5),
      .solution-table th:nth-child(3n + 1)
      .solution-table td:nth-child(3n + 1) {
        text-align: center;
      }
      .solution-table td:nth-child(3n + 7) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
