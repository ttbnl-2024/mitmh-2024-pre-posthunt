import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/fairly-thorough/0.png';

const SLUG = 'fairly-thorough';
const ANSWER = `TURNPIKING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of linked web pages indicating directions
      that can be used to travel through a series of rooms. We are also
      presented with three sets of directions and three sets of functions.
    </p>
    <p>
      Each room has a description (either a size or deserted) and a list of
      directions that can be used to go to another room. Some rooms have a
      colored sign in them (red, white, or blue).
    </p>
    <p>
      The title, overall shape, details of the network, and the set of colors of
      the signs all suggest that the network is actually a map of the major
      interstates of the US interstate system (which end in 0 or 5) with each
      room representing either a location at an intersection of interstates or a
      location at the end of the interstate. The room size indicates the rough
      population size of the metropolitan area. The directions indicate the
      named direction of the highway (whether or not that is the actual
      direction the interstate travels). The page URL numbers are in order by
      alphabetical name of the metropolitan area in order to help with
      identification. The starting location when entering the network of rooms
      corresponds with Boston.
    </p>
    <p>
      The following map shows the connections with all the interstates, and the
      colored signs in them.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      Using the three sets of directions, we can find a path that starts at one
      colored sign and then travels to each other sign of the same color where
      each travel step involves traveling on one interstate (not necessarily to
      an adjacent junction). The signs are used in red, white, blue order.
    </p>
    <p>
      Once we have identified these paths and identified the interstates, we can
      now apply the series of formulas to each path of cities where a is the
      value of the interstate by which we entered the room and b is the value of
      the interstate by which we exited the room. In the case of x, we just take
      the full name of the city.
    </p>
    <p>
      Doing this we obtain the messages{' '}
      <Monospace>WRONG BLANK AT ALBUQUERQUE</Monospace>,{' '}
      <Monospace>BOSTON ALLEY BY VIGA</Monospace>, and{' '}
      <Monospace>SEATTLE </Monospace>
      <Monospace>COUNTY</Monospace>; this clues <Monospace>TURN</Monospace>,{' '}
      <Monospace>PI</Monospace>, and <Monospace>KING</Monospace>, so the answer
      is <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th className="text-center">Dir</th>
          <th>Place name</th>
          <th className="text-center">Interstate</th>
          <th>Formula</th>
          <th className="text-center">Idx</th>
          <th className="text-center">Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">S</td>
          <td>SWEET GRASS</td>
          <td className="text-center">15</td>
          <td>FLOOR (O/7)</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>COVE FORT</td>
          <td className="text-center">70</td>
          <td>CEILING (O/I) + 2</td>
          <td className="text-center">7</td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>ST LOUIS</td>
          <td className="text-center">70</td>
          <td>CEILING (I/O) + 3</td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>INDIANAPOLIS</td>
          <td className="text-center">65</td>
          <td>CEILING (I/O)</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>MONTGOMERY</td>
          <td className="text-center">85</td>
          <td>CEILING (O/I) + 3</td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>GREENSBORO</td>
          <td className="text-center">40</td>
          <td>FLOOR ((I-O)/6)</td>
          <td className="text-center">7</td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>LITTLE ROCK</td>
          <td className="text-center">30</td>
          <td>FLOOR (I/O)</td>
          <td className="text-center">1</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>DALLAS</td>
          <td className="text-center">20</td>
          <td>CEILING (I/O)</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>SCROGGINS DRAW</td>
          <td className="text-center">10</td>
          <td>CEILING ((I+O)/4)</td>
          <td className="text-center">8</td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>JACKSONVILLE</td>
          <td className="text-center">10</td>
          <td>CEILING (I/O) + 3</td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>LOS ANGELES</td>
          <td className="text-center">15</td>
          <td>CEILING (O/I) + 2</td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>BARSTOW</td>
          <td className="text-center">40</td>
          <td>CEILING (O/I) + 2</td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr className="border-b-4 border-black">
          <td className="text-center"></td>
          <td>ALBUQUERQUE</td>
          <td className="text-center"></td>
          <td>X</td>
          <td className="text-center"></td>
          <td className="text-center">
            <Monospace>ALBUQUERQUE</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>BOSTON</td>
          <td className="text-center">95</td>
          <td>X</td>
          <td className="text-center"></td>
          <td className="text-center">
            <Monospace>BOSTON</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>MIAMI</td>
          <td className="text-center">75</td>
          <td>FLOOR ((I-O)/6)</td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>ATLANTA</td>
          <td className="text-center">20</td>
          <td>FLOOR (I/O)</td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>FLORENCE</td>
          <td className="text-center">95</td>
          <td>FLOOR (O/I) - 2</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>BALTIMORE</td>
          <td className="text-center">70</td>
          <td>CEILING ((I-O)/3)</td>
          <td className="text-center">9</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>KANSAS CITY</td>
          <td className="text-center">35</td>
          <td>FLOOR ((I+O)/10)</td>
          <td className="text-center">10</td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>ALBERT LEA</td>
          <td className="text-center">35</td>
          <td>CEILING (I/O) + 2</td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>OKLAHOMA CITY</td>
          <td className="text-center">40</td>
          <td>FLOOR ((I+O)/6)</td>
          <td className="text-center">12</td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>NASHVILLE</td>
          <td className="text-center">65</td>
          <td>CEILING (O/I) + 3</td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>MOBILE</td>
          <td className="text-center">65</td>
          <td>CEILING (I/O) + 3</td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>BIRMINGHAM</td>
          <td className="text-center">20</td>
          <td>CEILING (I/O) + 3</td>
          <td className="text-center">7</td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr className="border-b-4 border-black">
          <td className="text-center"></td>
          <td>JACKSON</td>
          <td className="text-center"></td>
          <td>FLOOR (I/10)</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>SEATTLE</td>
          <td className="text-center">5</td>
          <td>X</td>
          <td className="text-center"></td>
          <td className="text-center">
            <Monospace>SEATTLE</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>SACRAMENTO</td>
          <td className="text-center">80</td>
          <td>FLOOR (O/(5I))</td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">W</td>
          <td>TOLEDO</td>
          <td className="text-center">90</td>
          <td>CEILING (O/I)</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>BUFFALO</td>
          <td className="text-center">25</td>
          <td>FLOOR (I/O) - 1</td>
          <td className="text-center">2</td>
          <td className="text-center">
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>DENVER</td>
          <td className="text-center">70</td>
          <td>CEILING (O/I)</td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>DAYTON</td>
          <td className="text-center">75</td>
          <td>CEILING (O/I) + 2</td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>LAKE CITY</td>
          <td className="text-center"></td>
          <td>CEILING (I/10)</td>
          <td className="text-center">8</td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <Attributions>
      <p>
        Diagram from{' '}
        <a href="https://paulbogard.net/interstate-grid/">
          https://paulbogard.net/interstate-grid/
        </a>
      </p>
    </Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
