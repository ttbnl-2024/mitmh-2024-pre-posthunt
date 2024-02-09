import cx from 'classnames';
import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/sahara/0.png';

const SLUG = 'sahara';
const ANSWER = `NAGARA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      On an American roulette wheel, a "straight bet" (where the bet only
      applies to a single number) pays 35 to 1. If we win on a $1 bet, we'd keep
      the $1 that we had bet and get an additional $35.
    </p>
    <p>
      The flavortext indicates that each player had a very specific reason for
      the numbers that they bet, which was referenced by their choice of graphic
      tee. These reasons relate to different types of numbers in recreational
      mathematics, which are the exact numbers the players bet on each spin:
    </p>
    <Table>
      <thead>
        <tr>
          <th>T-Shirt</th>
          <th>Number Name</th>
          <th>Numbers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cornucopia</td>
          <td>Abundant</td>
          <td>12, 18, 20, 24, 30, 36</td>
        </tr>
        <tr>
          <td>Chambered nautilus</td>
          <td>Fibonacci</td>
          <td>1, 2, 3, 5, 8, 13, 21, 34</td>
        </tr>
        <tr>
          <td>Smiley face</td>
          <td>Happy</td>
          <td>1, 7, 10, 13, 19, 23, 28, 31, 32</td>
        </tr>
        <tr>
          <td>Racecar</td>
          <td>Palindromic</td>
          <td>1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33</td>
        </tr>
        <tr>
          <td>Payment processing</td>
          <td>Square</td>
          <td>1, 4, 9, 16, 25, 36</td>
        </tr>
        <tr>
          <td>Lady Gaga and Beyoncé</td>
          <td>Telephone</td>
          <td>1, 2, 4, 10, 26</td>
        </tr>
      </tbody>
    </Table>
    <p>The equation for each player's ending money is:</p>
    <p className="text-center">
      final bankroll = 100 + 36 * (number of wins) - (number of spins) * (number
      of bets placed per spin)
    </p>
    <p>
      One method to solve this without programming is to create a table in a
      spreadsheet that calculates the final bankroll for the different numbers
      of bets by each player. Only one number of spins yields the correct final
      bankrolls as a possibility for all players: 15 spins.
    </p>
    <Table className="colors-table">
      <thead>
        <tr>
          <th>Color</th>
          <th>Blue</th>
          <th>Green</th>
          <th>Orange</th>
          <th>Gray</th>
          <th>Purple</th>
          <th>Yellow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b># of bets per spin</b>
          </td>
          <td>9</td>
          <td>6</td>
          <td>6</td>
          <td>5</td>
          <td>12</td>
          <td>8</td>
        </tr>
        <tr>
          <td>
            <b># of winning spins</b>
          </td>
          <td>6</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <b>$ at end of game</b>
          </td>
          <td>181</td>
          <td>118</td>
          <td>118</td>
          <td>97</td>
          <td>64</td>
          <td>52</td>
        </tr>
        <tr>
          <td>
            <b>Numbers</b>
          </td>
          <td>Happy</td>
          <td>Square / Abundant</td>
          <td>Square / Abundant</td>
          <td>Telephone</td>
          <td>Palindromic</td>
          <td>Fibonacci</td>
        </tr>
      </tbody>
    </Table>
    <p>
      As there are the same number of Square and Abundant numbers, we will
      disambiguate this while we resolve which numbers won. We now work through
      the logic for identifying which numbers won at some point. We label the
      given statements:
    </p>
    <ol className="list-[upper-alpha]">
      <li>
        For the player betting purple chips, their numbers that won were each
        either half or double one of their other winning numbers.
      </li>
      <li>
        Only one number selected by three or more different players was a
        winner.
      </li>
      <li>
        No player bet on 0 or 00, and only one number within 5 spots
        counterclockwise of the 00 was a winner.
      </li>
      <li>
        The highest number chosen by the person betting yellow chips did win.
      </li>
      <li>
        For the player betting orange chips, their lowest winning number was a
        factor of each of their other winning numbers.
      </li>
      <li>
        When numbers had sequential digits in any order, all but one were
        winners.
      </li>
      <li>
        Exactly one of the winning numbers chosen by the player betting green
        chips fell on black.
      </li>
    </ol>
    <p>One solution path is as follows:</p>
    <ol>
      <li>
        If the Orange player is betting Abundant numbers, then three of 12, 18,
        20, 24, 30, and 36 must be winners. The only workable group of three
        that fits the constraint in statement E would be 12, 24, and 36. But 24
        and 36 can't both be winners according to statement C (only one of these
        numbers is a winner: 1, 13, 36, 24, and 3).{' '}
      </li>
      <li>
        Therefore the Orange player is betting Square numbers and three of 1, 4,
        9, 16, 25, and 36 must be winners. The numbers that satisfy statement E
        are 4, 16, and 36. They are all winners, and 1, 3, 13, and 24 are all
        non-winners.
      </li>
      <li>
        Since we know that the Purple player is betting Palindromic numbers, we
        can test the remaining ones in turn according to constraint A. If 2
        wins, either 1 or 4 would also win, but we know 1 does not and both 2
        and 4 can't, according to statement B, so the 2 is ruled out. The only
        other palindromic numbers that could satisfy the statement are 4, 8, 11,
        22. So those are the four winning numbers. 5, 6, 7, 9, and 33 are all
        ruled out.
      </li>
      <li>
        Since 1, 7, and 13 have all been ruled out, the remaining Happy numbers
        chosen by the Blue player 10, 19, 23, 28, 31, and 32 must all be
        winners.
      </li>
      <li>
        We have identified the yellow player as betting Fibonacci numbers, so
        according to step D, that means the number 34 is a winner. Since we have
        already identified 8 as a winner, all of their other numbers can be
        marked as non-winning. This rules out 21.
      </li>
      <li>
        According to statement F, since we have ruled out 21, the other
        remaining numbers with sequential digits, in any order, we know 12, 23,
        32, and 34 must all be winners.
      </li>
      <li>
        We identified the person betting Abundant numbers as betting Green
        chips, so three of 12, 18, 20, 24, 30, and 36 are the winners. We've
        already identified 12 and 36 as winners, and know that 24 did not win
        (by statement C). Since 18 and 30 are both red numbers, the remaining
        winning number must be 20.
      </li>
    </ol>
    <p>Here is a table summarizing the results:</p>
    <Table
      className={cx(
        'roulette-table',
        '[&_td:nth-child(3)]:bg-blue-300',
        '[&_td:nth-child(4)]:bg-green-300',
        '[&_td:nth-child(5)]:bg-orange-300',
        '[&_td:nth-child(6)]:bg-yellow-200',
        '[&_td:nth-child(7)]:bg-purple-300',
        '[&_td:nth-child(8)]:bg-slate-300'
      )}
    >
      <thead>
        <tr>
          <th>Roulette Color</th>
          <th>#</th>
          <th className="bg-blue-300">B</th>
          <th className="bg-green-300">Grn</th>
          <th className="bg-orange-300">O</th>
          <th className="bg-yellow-300">Y</th>
          <th className="bg-purple-300">P</th>
          <th className="bg-slate-300">Gry</th>
          <th>Won?</th>
          <th>Statements</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>R</td>
          <td>1</td>
          <td>X</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>B</td>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A/C/E</td>
        </tr>
        <tr>
          <td>B</td>
          <td>4</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td>Y</td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>B</td>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A/C/E</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>B</td>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td>Y</td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>9</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>B</td>
          <td>10</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>Y</td>
          <td>A/C/E</td>
        </tr>
        <tr>
          <td>B</td>
          <td>11</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td>Y</td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>12</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>F</td>
        </tr>
        <tr>
          <td>B</td>
          <td>13</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td>C/E</td>
        </tr>
        <tr>
          <td>R</td>
          <td>14</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>--</td>
        </tr>
        <tr>
          <td>B</td>
          <td>15</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>--</td>
        </tr>
        <tr>
          <td>R</td>
          <td>16</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>E</td>
        </tr>
        <tr>
          <td>B</td>
          <td>17</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>--</td>
        </tr>
        <tr>
          <td>R</td>
          <td>18</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>G</td>
        </tr>
        <tr>
          <td>R</td>
          <td>19</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>D</td>
        </tr>
        <tr>
          <td>B</td>
          <td>20</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>G</td>
        </tr>
        <tr>
          <td>R</td>
          <td>21</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td>D</td>
        </tr>
        <tr>
          <td>B</td>
          <td>22</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td>Y</td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>23</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>A/F</td>
        </tr>
        <tr>
          <td>B</td>
          <td>24</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>C</td>
        </tr>
        <tr>
          <td>R</td>
          <td>25</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>E</td>
        </tr>
        <tr>
          <td>B</td>
          <td>26</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td>D</td>
        </tr>
        <tr>
          <td>R</td>
          <td>27</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>--</td>
        </tr>
        <tr>
          <td>B</td>
          <td>28</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>D</td>
        </tr>
        <tr>
          <td>B</td>
          <td>29</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>--</td>
        </tr>
        <tr>
          <td>R</td>
          <td>30</td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>G</td>
        </tr>
        <tr>
          <td>B</td>
          <td>31</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>D</td>
        </tr>
        <tr>
          <td>R</td>
          <td>32</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>A/F</td>
        </tr>
        <tr>
          <td>B</td>
          <td>33</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>A</td>
        </tr>
        <tr>
          <td>R</td>
          <td>34</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>F</td>
        </tr>
        <tr>
          <td>B</td>
          <td>35</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>unplayed</td>
        </tr>
        <tr>
          <td>R</td>
          <td>36</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td></td>
          <td></td>
          <td>Y</td>
          <td>C/E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we place a chip on each of the 15 winning numbers, then when viewed
      from the side of the table where the croupier stands (as clued by the
      flavortext), it would look like this:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      <i>
        Original image sourced from Betzaar.com via{' '}
        <a href="https://commons.wikimedia.org/wiki/File:American_roulette.svg">
          Wikimedia Commons
        </a>{' '}
        under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">
          CC BY-SA 3.0
        </a>
        {' '}.
      </i>
    </p>
    <p>
      When read as Braille, this yields the answer{' '}
      <b>
        <Monospace>NAGARA</Monospace>
      </b>
      , a kind of drum (and what the players should be trying to beat).
    </p>
    <style jsx global>{`
      .colors-table td:nth-child(n + 1) {
        text-align: center;
      }
      .roulette-table td {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
