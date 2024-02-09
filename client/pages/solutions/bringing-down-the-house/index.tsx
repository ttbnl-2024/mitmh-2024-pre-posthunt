import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'bringing-down-the-house';
const ANSWER = `NOTE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      As hinted by the title and flavortext, this puzzle is about MIT's
      blackjack team. In each sentence, we can find a code word that represents
      a specific number in Blackjack. Googling "MIT blackjack code words" or
      "MIT code words 21", or "MIT code words casino" or something along those
      lines will turn up this list.
    </p>
    <Table className="codewords-table">
      <tbody>
        <tr>
          <td>1</td>
          <td>Tree&mdash;because it looks like a one</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Switch&mdash;because of the two options (on or off)</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Stool&mdash;because it has three legs</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Car&mdash;because it has four tires</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Glove&mdash;because it has five fingers</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Gun&mdash;because it holds six bullets</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Craps&mdash;because of the lucky seven throw</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Pool&mdash;because of the eight ball</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Cat&mdash;because they supposedly have nine lives</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Bowling&mdash;because it has 10 pins</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Football&mdash;because a team has eleven players</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Eggs&mdash;because they are sold by the dozen</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Witch&mdash;because it is an unlucky number</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Ring&mdash;because it can be made of 14-carat gold</td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            Paycheck&mdash;because most people are paid on the 15th of the
            month
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>Sweet&mdash;because of the "sweet" 16th birthday</td>
        </tr>
        <tr>
          <td>17</td>
          <td>
            Magazine&mdash;because of the teen magazine called <i>Seventeen</i>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>Voting Booth&mdash;because you can vote at 18 years old</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We take the number the code words represent and subtract the value of the
      cards in front of the speaker. We know to subtract because of the word
      "different". We then index this into the code word.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th colSpan={3}>Cards</th>
          <th>Card value</th>
          <th>Code word</th>
          <th>Number of code word</th>
          <th>Difference (Index)</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>K of Spades</td>
          <td>7 of Hearts</td>
          <td></td>
          <td>17</td>
          <td>Paycheck</td>
          <td>15</td>
          <td>2</td>
          <td>A</td>
        </tr>
        <tr>
          <td>K of Diamonds</td>
          <td>7 of Clubs</td>
          <td></td>
          <td>17</td>
          <td>Ring</td>
          <td>14</td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>Q of Spades</td>
          <td>2 of Hearts</td>
          <td></td>
          <td>12</td>
          <td>Craps</td>
          <td>7</td>
          <td>5</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Q of Diamonds</td>
          <td>8 of Clubs</td>
          <td></td>
          <td>18</td>
          <td>Sweet</td>
          <td>16</td>
          <td>2</td>
          <td>W</td>
        </tr>
        <tr>
          <td>J of Spades</td>
          <td>5 of Hearts</td>
          <td>J of Diamonds</td>
          <td>25</td>
          <td>Magazine</td>
          <td>17</td>
          <td>8</td>
          <td>E</td>
        </tr>
        <tr>
          <td>4 of Clubs</td>
          <td>3 of Spades</td>
          <td></td>
          <td>7</td>
          <td>Car</td>
          <td>4</td>
          <td>3</td>
          <td>R</td>
        </tr>
        <tr>
          <td>9 of Hearts</td>
          <td></td>
          <td></td>
          <td>9</td>
          <td>Gun</td>
          <td>6</td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>10 of Diamonds</td>
          <td>Q of Clubs</td>
          <td></td>
          <td>20</td>
          <td>Voting Booth</td>
          <td>18</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>10 of Spades</td>
          <td>6 of Hearts</td>
          <td></td>
          <td>16</td>
          <td>Witch</td>
          <td>13</td>
          <td>3</td>
          <td>T</td>
        </tr>
        <tr>
          <td>5 of Diamonds</td>
          <td></td>
          <td></td>
          <td>5</td>
          <td>Tree</td>
          <td>1</td>
          <td>4</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Finally, we get <Clue>ANSWER </Clue>
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .codewords-table td:nth-child(1) {
        text-align: center;
        font-weight: bold;
      }
      .solution-table th,
      .solution-table td {
        text-align: center !important;
      }
      .solution-table td:nth-last-child(1),
      .solution-table td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
