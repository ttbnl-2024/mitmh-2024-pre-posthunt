import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/climbfinder/0.png';

const SLUG = 'climbfinder';
const ANSWER = `TETHYS OCEAN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are given a fake newspaper sheet with a list of stock quotes. The
      flavor text mentions "only connect", so let's first solve an{' '}
      <i>Only Connect</i> Connecting Wall (Round 3) using the ticker symbols.
      The solution for each month is shown below:
    </p>
    <p>
      <b>May 2023</b>
    </p>
    <Table className="table-0">
      <tbody>
        <tr>
          <td>NUT</td>
          <td>SEED</td>
          <td>PIT</td>
          <td>CORE</td>
          <td>Centers of fruits</td>
        </tr>
        <tr>
          <td>BRAIN</td>
          <td>LIVER</td>
          <td>SKIN</td>
          <td>LUNG</td>
          <td>Organs</td>
        </tr>
        <tr>
          <td>CUTIE</td>
          <td>ZEBRA</td>
          <td>THAT</td>
          <td>RECAP</td>
          <td>Words that end in clothing</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <b>July 2023</b>
    </p>
    <Table className="table-0">
      <tbody>
        <tr>
          <td>LOVE</td>
          <td>DARL</td>
          <td>DEAR</td>
          <td>HUN</td>
          <td>Terms of endearment</td>
        </tr>
        <tr>
          <td>COMB</td>
          <td>CHROME</td>
          <td>HOME</td>
          <td>FOAM</td>
          <td>Rhymes with "gnome"</td>
        </tr>
        <tr>
          <td>LILY</td>
          <td>IRIS</td>
          <td>FERN</td>
          <td>ASTER</td>
          <td>Flowers</td>
        </tr>
        <tr>
          <td>MUSE</td>
          <td>FOG</td>
          <td>BAR</td>
          <td>CAB</td>
          <td>Animals minus the second letter</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <b>August/September 2023</b>
    </p>
    <Table className="table-0">
      <tbody>
        <tr>
          <td>EAGLE</td>
          <td>HAWK</td>
          <td>KITE</td>
          <td>OWL</td>
          <td>Birds of prey</td>
        </tr>
        <tr>
          <td>MEW</td>
          <td>PURR</td>
          <td>HISS</td>
          <td>GROWL</td>
          <td>Cat sounds</td>
        </tr>
        <tr>
          <td>BROTH</td>
          <td>STEW</td>
          <td>STOCK</td>
          <td>PUREE</td>
          <td>Soup-related meals</td>
        </tr>
        <tr>
          <td>RADIO</td>
          <td>SING</td>
          <td>TANGO</td>
          <td>COST</td>
          <td>Geometry abbreviations</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We should further realize that the title of this puzzle, Climbfinder, is
      also the name of a website for fans of bicycle racing. The flavor text
      contains references to cycles to confirm that this is relevant, and also
      mentions "slope", "rise" and "run". On this website, we can find graphs
      showing data for each climb within a bicycle race.
    </p>
    <p>
      Furthermore, the months match when the three biggest bicycle races of 2023
      took place: the Giro d'Italia, the Tour de France, and the Vuelta a
      España. The languages of the months match the languages of the respective
      countries hosting the tours.
    </p>
    <p>
      The next step is to look at only the stock prices for one group at a time.
      Let's look at the <i>words ending in clothing</i> group as an example.
      This information is shown in the table below, alongside the following
      information we need to add:
    </p>
    <ul>
      <li>
        The difference between each stock price and the previous, using $100 as
        the starting value as indicated by the flavor text. One stock price is
        missing and instead lists a number after an arrow (marked in orange).
        This means two of the differences cannot be calculated yet (marked in
        purple).
      </li>
      <li>
        The difference can be expressed as a "percentage" by dividing it by the
        number after the arrow.
      </li>
    </ul>
    <br />
    <Table className="table-1">
      <thead>
        <tr>
          <th className="bg-[#c9daf8]">Words ending in clothing</th>
          <th className="bg-[#fce5cd]">500</th>
          <th className="bg-[#d9ead3]">$ 100.00</th>
          <th>Difference</th>
          <th>As %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CUTIE</td>
          <td>$ 135.00</td>
          <td>35</td>
          <td>7%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>RECAP</td>
          <td>$ 215.00</td>
          <td>80</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>THAT</td>
          <td>$ 290.00</td>
          <td>75</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>ZEBRA</td>
          <td className="bg-[#fce5cd]">→ 500</td>
          <td className="bg-[#d9d2e9]">80</td>
          <td className="bg-[#d9d2e9]">16%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>CUTIE</td>
          <td>$ 440.00</td>
          <td className="bg-[#d9d2e9]">70</td>
          <td className="bg-[#d9d2e9]">14%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>THAT</td>
          <td>$ 510.00</td>
          <td>70</td>
          <td>14%</td>
        </tr>
        <tr>
          <td>7</td>
          <td>RECAP</td>
          <td>$ 585.00</td>
          <td>75</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>8</td>
          <td>RECAP</td>
          <td>$ 665.00</td>
          <td>80</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>9</td>
          <td>CUTIE</td>
          <td>$ 745.00</td>
          <td>80</td>
          <td>16%</td>
        </tr>
        <tr>
          <td>10</td>
          <td>ZEBRA</td>
          <td>$ 785.00</td>
          <td>40</td>
          <td>8%</td>
        </tr>
        <tr>
          <td>11</td>
          <td>ZEBRA</td>
          <td>$ 815.00</td>
          <td>30</td>
          <td>6%</td>
        </tr>
        <tr>
          <td>12</td>
          <td>ZEBRA</td>
          <td>$ 830.00</td>
          <td>15</td>
          <td>3%</td>
        </tr>
        <tr>
          <td>13</td>
          <td>THAT</td>
          <td>$ 885.00</td>
          <td>55</td>
          <td>11%</td>
        </tr>
        <tr>
          <td>14</td>
          <td>RECAP</td>
          <td>$ 930.00</td>
          <td>45</td>
          <td>9%</td>
        </tr>
        <tr>
          <td>15</td>
          <td>CUTIE</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16</td>
          <td>THAT</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>17</td>
          <td>RECAP</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>18</td>
          <td>CUTIE</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>19</td>
          <td>ZEBRA</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>20</td>
          <td>ZEBRA</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>21</td>
          <td>THAT</td>
          <td>TERMINATED</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can now find that the percentages match the graph for the{' '}
      <a href="https://climbfinder.com/en/climbs/monte-lussari-valbruna">
        Monte Lussari
      </a>{' '}
      climb:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      The lines at the end that say "TERMINATED" should be ignored. Some of the
      other groups also contain such lines, but they are always at the bottom.
    </p>
    <p>
      The number after the arrow turns out to be the length of each "run"&mdash;the
      interval (in meters) into which the x-axis of this graph is divided.
    </p>
    <p>
      The graph also allows us to fill in the missing numbers (marked in purple
      earlier), but that is not required for this puzzle.
    </p>
    <p>
      <a href="https://docs.google.com/spreadsheets/d/1i6SJLWEemIFvOk4zrnUOYfFM3wGH1zjH6QFsvn95RFY/edit#gid=1885686703">
        Full tables of all data and calculations can be found in this
        spreadsheet.
      </a>
    </p>
    <p>
      After we have identified all the climbs, we notice that each month
      contains climbs from the same race, allowing us to sort them by the order
      in which they occur in the race ("stage" column below). We also notice
      that the names of the climbs relate to the <i>Only Connect</i> categories
      we solved earlier, giving us verification. We index into the names of the
      climbs using the day number of the missing stock price:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Month / race</th>
          <th>Group</th>
          <th>Climb</th>
          <th>How</th>
          <th>Stage</th>
          <th>Day (Index)</th>
          <th>Ltr</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={3}>
            May 2023
            <br />
            Giro d'Italia
          </td>
          <td>Centers of fruits</td>
          <td>Gran Sasso d'Italia</td>
          <td>Sasso = Stone, found in centers of fruits</td>
          <td>7</td>
          <td>12</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Organs</td>
          <td>Croix De Coeur</td>
          <td>Coeur = Heart, an organ</td>
          <td>13</td>
          <td>7</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Words that end in clothing</td>
          <td>Monte Lussari</td>
          <td>Lus-sari. Sari is an article of clothing</td>
          <td>20</td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td rowSpan={4}>
            July 2023
            <br />
            Tour de France
          </td>
          <td>Terms of endearment</td>
          <td>Col d'Ichère</td>
          <td>Chère is a term of endearment</td>
          <td>5</td>
          <td>7</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Rhymes with "Rome"</td>
          <td>Puy de Dôme</td>
          <td>Dome rhymes</td>
          <td>9</td>
          <td>3</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>Flowers</td>
          <td>Cormet de Roselend</td>
          <td>Rose is a flower</td>
          <td>17</td>
          <td>11</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Animals minus the second letter</td>
          <td>Col de Platzerwasel</td>
          <td>Wasel = weasel minus the e</td>
          <td>20</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td rowSpan={4}>
            August / September 2023
            <br />
            Vuelta a España
          </td>
          <td>Birds of prey</td>
          <td>Pico del Buitre</td>
          <td>Buitre = vulture, a bird of prey</td>
          <td>6</td>
          <td>3</td>
          <td>C</td>
        </tr>
        <tr>
          <td>Cat sounds</td>
          <td>Xorret del Cati</td>
          <td>Means whisper of the cat</td>
          <td>8</td>
          <td>5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Soup-related meals</td>
          <td>Col d'Aubisque</td>
          <td>Bisque is a soup</td>
          <td>13</td>
          <td>5</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Geometry abbreviations</td>
          <td>Alto de l'Angliru</td>
          <td>Ang is short for angle</td>
          <td>17</td>
          <td>9</td>
          <td>N</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The extracted letters reveal the solution to the puzzle:{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .table-0 td:nth-child(5),
      .table-2 td:nth-last-child(6) {
        background-color: #fff2cc;
      }
      .table-1 th:nth-child(n + 4),
      .table-1 td:nth-child(1),
      .table-1 td:nth-child(n + 4),
      .table-2 th:nth-last-child(-n + 3),
      .table-2 td:nth-last-child(-n + 3) {
        text-align: center;
      }
      .table-2 td:nth-last-child(1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
