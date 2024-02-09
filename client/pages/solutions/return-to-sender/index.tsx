import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'return-to-sender';
const ANSWER = `CREATION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      When we look up the cities and states for each of the orders, we notice
      that each of the returned plants is a state flower corresponding to the
      location of a different customer. Putting the customers in order such that
      a chain forms from the customer who received the plant to the customer who
      actually ordered it reveals a message in the first letters of the customer
      names: <Monospace>USDA PLANT ZONE</Monospace>.
    </p>
    <Table id="flowers">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Zip</th>
          <th>City, State</th>
          <th>Plant Received</th>
          <th>Plant Ordered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Upton</td>
          <td>83201</td>
          <td>POCATELLO, ID</td>
          <td>CARNATION</td>
          <td>SYRINGA</td>
        </tr>
        <tr>
          <td>Smith</td>
          <td>45406</td>
          <td>DAYTON, OH</td>
          <td>LADY'S SLIPPER</td>
          <td>CARNATION</td>
        </tr>
        <tr>
          <td>Dixon</td>
          <td>56653</td>
          <td>LITTLEFORK, MN</td>
          <td>POPPY</td>
          <td>LADY'S SLIPPER</td>
        </tr>
        <tr>
          <td>Abbot</td>
          <td>93309</td>
          <td>BAKERSFIELD, CA</td>
          <td>AZALEA</td>
          <td>POPPY</td>
        </tr>
        <tr>
          <td>Patel</td>
          <td>30248</td>
          <td>LOCUST GROVE, GA</td>
          <td>IRIS</td>
          <td>AZALEA</td>
        </tr>
        <tr>
          <td>Lewis</td>
          <td>37771</td>
          <td>LENOIR CITY, TN</td>
          <td>PASQUE FLOWER</td>
          <td>IRIS</td>
        </tr>
        <tr>
          <td>Abrams</td>
          <td>57501</td>
          <td>PIERRE, SD</td>
          <td>WHITE PINE CONE</td>
          <td>PASQUE FLOWER</td>
        </tr>
        <tr>
          <td>Nunez</td>
          <td>04694</td>
          <td>BAILEYVILLE, ME</td>
          <td>FORGET-ME-NOT</td>
          <td>WHITE PINE CONE</td>
        </tr>
        <tr>
          <td>Thomas</td>
          <td>99708</td>
          <td>FAIRBANKS, AK</td>
          <td>SUNFLOWER</td>
          <td>FORGET-ME-NOT</td>
        </tr>
        <tr>
          <td>Zimmerman</td>
          <td>66506</td>
          <td>MANHATTAN, KS</td>
          <td>TICKSEED</td>
          <td>SUNFLOWER</td>
        </tr>
        <tr>
          <td>Olsen</td>
          <td>33028</td>
          <td>PEMBROKE PINES, FL</td>
          <td>BLUEBONNET</td>
          <td>TICKSEED</td>
        </tr>
        <tr>
          <td>Ng</td>
          <td>76006</td>
          <td>ARLINGTON, TX</td>
          <td>VIOLET</td>
          <td>BLUEBONNET</td>
        </tr>
        <tr>
          <td>Elliot</td>
          <td>53406</td>
          <td>RACINE, WI</td>
          <td>SYRINGA</td>
          <td>VIOLET</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Looking up the plant zones by ZIP code on{' '}
      <a href="https://planthardiness.ars.usda.gov/">
        https://planthardiness.ars.usda.gov/
      </a>{' '}
      and indexing by the zone number into the city reveals the answer:{' '}
      <Monospace>ENTER </Monospace>
      <Answerize>CREATION</Answerize>.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>City</th>
          <th>Plant Zone</th>
          <th>Extraction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>POCATELLO, ID</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DAYTON, OH</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LITTLEFORK, MN</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BAKERSFIELD, CA</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LOCUST GROVE, GA</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LENOIR CITY, TN</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PIERRE, SD</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BAILEYVILLE, ME</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FAIRBANKS, AK</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MANHATTAN, KS</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PEMBROKE PINES, FL</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ARLINGTON, TX</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RACINE, WI</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      #flowers th:nth-child(2),
      #flowers td:nth-child(2),
      #extraction th:nth-child(2),
      #extraction td:nth-child(2),
      #extraction td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
