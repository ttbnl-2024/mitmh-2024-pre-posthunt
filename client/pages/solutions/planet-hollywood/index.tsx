import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/planet-hollywood/0.png';

const SLUG = 'planet-hollywood';
const ANSWER = `PINDO`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We have a list of pictures that will make a word chain to create names of
      chain restaurants. There are five letters in the answer, and the pictures
      will create five different chains of restaurants. The pictures often
      depict two words, each of them being half of a restaurant name, with the
      endpoints of a chain only displaying one word, or one half of a restaurant
      name.
    </p>
    <p>
      The flavor text mentions, "where did these come from," indicating that we
      need to find the city that each restaurant chain was founded in. Given the
      lengths of the chains (different, but not unique lengths, shortest is
      length two), we should try graphing chains on the map. Once the cities are
      plotted and connected dot-to-dot style, the chains will spell out the
      answer, from west to east.
    </p>
    <p>In order, the pictures represent:</p>
    <Table>
      <tbody>
        <tr>
          <td>1</td>
          <td>Salt Café</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Black Nose</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cracker Roadhouse</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jack</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Ruby Barrel</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ar Cream</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Long John</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Queen Pop</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Pizza Stop</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Bear Diner</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Silver Texas</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Krispie Es</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Five Bees</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Rainforest Eyes</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Quiz Bucks</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Caesars</td>
        </tr>
        <tr>
          <td>17</td>
          <td>Grass</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Hard Guys</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Wing Hut</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Star in the Box</td>
        </tr>
        <tr>
          <td>21</td>
          <td>Little Tuesday</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Dairy</td>
        </tr>
      </tbody>
    </Table>
    <p>These pictures make the following chains:</p>
    <ul>
      <li>Jack in the Box, Starbucks, Quiznos, Black Bear Diner</li>
      <li>Pizza Hut, Wingstop, Pizza Hut</li>
      <li>Dairy Queen, Popeyes, Rainforest Cafe, Salt Grass</li>
      <li>
        Long John Silver's, Texas Roadhouse, Cracker Barrel, Ruby Tuesday, Little
        Caesars
      </li>
      <li>Arby's, Krispy Kreme, Hardee's, Five Guys, Arby's</li>
    </ul>

    <p>We then need the original location of each restaurant chain:</p>
    <Table>
      <tbody>
        <tr>
          <td>Black Bear Diner</td>
          <td>Mount Shasta, CA</td>
        </tr>
        <tr>
          <td>Quiznos</td>
          <td>Denver, CO</td>
        </tr>
        <tr>
          <td>Starbucks</td>
          <td>Seattle, WA</td>
        </tr>
        <tr>
          <td>Jack in the Box</td>
          <td>San Diego, CA</td>
        </tr>
        <tr>
          <td>Pizza Hut</td>
          <td>Wichita, KS</td>
        </tr>
        <tr>
          <td>Wingstop</td>
          <td>Garland, TX</td>
        </tr>
        <tr>
          <td>Salt Grass</td>
          <td>Houston, TX</td>
        </tr>
        <tr>
          <td>Rainforest Cafe</td>
          <td>Bloomington, MN</td>
        </tr>
        <tr>
          <td>Popeyes</td>
          <td>Arabi, LA</td>
        </tr>
        <tr>
          <td>Dairy Queen</td>
          <td>Joliet, IL</td>
        </tr>
        <tr>
          <td>Long John Silver's</td>
          <td>Lexington, KY</td>
        </tr>
        <tr>
          <td>Texas Roadhouse</td>
          <td>Clarksville, IN</td>
        </tr>
        <tr>
          <td>Cracker Barrel</td>
          <td>Lebanon, TN</td>
        </tr>
        <tr>
          <td>Ruby Tuesday</td>
          <td>Knoxville, TN</td>
        </tr>
        <tr>
          <td>Little Caesars</td>
          <td>Garden City, MI</td>
        </tr>
        <tr>
          <td>Arby's</td>
          <td>Boardman, OH</td>
        </tr>
        <tr>
          <td>Krispy Kreme</td>
          <td>Winston-Salem, NC</td>
        </tr>
        <tr>
          <td>Hardee's</td>
          <td>Greenville, NC</td>
        </tr>
        <tr>
          <td>Five Guys</td>
          <td>Arlington, VA</td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we draw out connecting lines between these cities on the United States
      map, we get the following picture. Reading west to east across the map,
      the letters spell out our answer:{' '}
      <b>
        <Monospace>PINDO</Monospace>
      </b>
      .
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <style jsx>{`
      td:nth-child(1) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
