import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'follow-the-directions';
const ANSWER = `VENICE BEACH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We recognize the format of these three word groups as being location
      identifiers in the What3Words system. When we look up those squares at{' '}
      <a href="https://what3words.com/">https://what3words.com/</a> and travel
      in the direction indicated, somewhere within the first 26 squares we spot
      a what3words address that takes the form of a clue pointing to an element
      on the periodic table (either the element's name itself, its abbreviation,
      or its atomic number).
    </p>
    <p>
      Thus, we then realize that each set gives us two directions and two
      elements on the periodic table. Converting the number of spaces traveled
      in each case to a letter A1Z26, we reveal the message{' '}
      <Monospace>FIND PAIR INTERSECTION</Monospace>. Traveling a straight path
      in the direction indicated from each element results in intersection at a
      third element. When strung together the list of elements at the
      intersections reads <Monospace>AT BUSY REFERS FLUTE</Monospace>, which is
      the answer to the flavortext question, "Where will you find yourself?"
      When we look at the what3words site, we learn that busy.refers.flute is
      located at <Answerize>VENICE BEACH</Answerize>.
    </p>
    <Appendix>
      <Table>
        <thead>
          <tr>
            <th>Starting W3W Box</th>
            <th>Direction</th>
            <th>Resulting W3W Box</th>
            <th># Grid Steps</th>
            <th>A1Z26</th>
            <th>Element Clued</th>
            <th>Element at Inter-section</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>beaker.data.segments</td>
            <td>West</td>
            <td>gold.plus.nitrogen</td>
            <td>6</td>
            <td>
              <Monospace>F</Monospace>
            </td>
            <td>Ra</td>
            <td rowSpan={2}>
              <Monospace>AT</Monospace>
            </td>
          </tr>
          <tr>
            <td>voter.quenches.debunk</td>
            <td>South</td>
            <td>between.oxygen.neon</td>
            <td>9</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>F</td>
          </tr>
          <tr>
            <td>flickers.crib.epidemics</td>
            <td>West</td>
            <td>extra.bright.tint</td>
            <td>14</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Ne</td>
            <td rowSpan={2}>
              <Monospace>B</Monospace>
            </td>
          </tr>
          <tr>
            <td>persuader.popcorn.crinkles</td>
            <td>North</td>
            <td>take.fluorine.squared</td>
            <td>4</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>Tl</td>
          </tr>
          <tr>
            <td>bumped.restricting.weaves</td>
            <td>East</td>
            <td>phosphorus.times.carbon</td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Th</td>
            <td rowSpan={2}>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>pleaded.revised.worth</td>
            <td>South</td>
            <td>mercury.minus.calcium</td>
            <td>1</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>Nd</td>
          </tr>
          <tr>
            <td>contend.transparency.lightweight</td>
            <td>West</td>
            <td>salt.without.sodium</td>
            <td>3</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>Cl</td>
            <td rowSpan={2}>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>radiates.piles.corded</td>
            <td>North</td>
            <td>named.after.moon</td>
            <td>8</td>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>Se</td>
          </tr>
          <tr>
            <td>disputed.alphabetical.airfield</td>
            <td>West</td>
            <td>precedes.better.blues</td>
            <td>16</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>Mo</td>
            <td rowSpan={2}>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>chauffeured.dialects.jumbles</td>
            <td>South</td>
            <td>palm.crescent.flag</td>
            <td>1</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>Sc</td>
          </tr>
          <tr>
            <td>surveyor.sneaky.wrangle</td>
            <td>West</td>
            <td>medallion.before.silver</td>
            <td>9</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>Au</td>
            <td rowSpan={2}>
              <Monospace>RE</Monospace>
            </td>
          </tr>
          <tr>
            <td>obstruction.drives.strumming</td>
            <td>South</td>
            <td>baseballs.twins.state</td>
            <td>18</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>Mn</td>
          </tr>
          <tr>
            <td>cattle.rank.cook</td>
            <td>East</td>
            <td>piano.middle.note</td>
            <td>9</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>C</td>
            <td rowSpan={2}>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>foil.charcoal.pardon</td>
            <td>North</td>
            <td>tags.user.name</td>
            <td>14</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>At</td>
          </tr>
          <tr>
            <td>succumbed.panting.heavenly</td>
            <td>East</td>
            <td>basketballs.pelicans.state</td>
            <td>20</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>La</td>
            <td rowSpan={2}>
              <Monospace>ER</Monospace>
            </td>
          </tr>
          <tr>
            <td>coaxed.personal.snaps</td>
            <td>North</td>
            <td>platinum.plus.titanium</td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Fm</td>
          </tr>
          <tr>
            <td>hoedown.lambs.spacemen</td>
            <td>East</td>
            <td>metric.measurement.system</td>
            <td>18</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>Si</td>
            <td rowSpan={2}>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>preach.curiosity.flows</td>
            <td>South</td>
            <td>scuba.diver.requirement</td>
            <td>19</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>O</td>
          </tr>
          <tr>
            <td>pearls.cylinder.metabolism</td>
            <td>East</td>
            <td>sound.measurement.unit</td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Db</td>
            <td rowSpan={2}>
              <Monospace>FL</Monospace>
            </td>
          </tr>
          <tr>
            <td>senior.paints.return</td>
            <td>South</td>
            <td>cats.spicy.roof</td>
            <td>3</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>Sn</td>
          </tr>
          <tr>
            <td>enjoy.rang.remember</td>
            <td>West</td>
            <td>either.radio.dial</td>
            <td>20</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>Am/Fm</td>
            <td rowSpan={2}>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>custom.vipers.unfairness</td>
            <td>South</td>
            <td>tripled.calcium.number</td>
            <td>9</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>Nd</td>
          </tr>
          <tr>
            <td>pine.nullify.authors</td>
            <td>East</td>
            <td>obsolete.recording.medium</td>
            <td>15</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>Cd</td>
            <td rowSpan={2}>
              <Monospace>TE</Monospace>
            </td>
          </tr>
          <tr>
            <td>fact.menu.civil</td>
            <td>South</td>
            <td>waters.middle.atom</td>
            <td>14</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>O</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      th:nth-child(4),
      td:nth-child(4),
      td:nth-child(5),
      th:nth-child(6),
      td:nth-child(6),
      th:nth-child(7),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
