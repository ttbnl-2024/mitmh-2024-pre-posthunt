import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'green-logic';
const ANSWER = `AEROGEN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We can tackle this puzzle in stages.</p>
    <p>
      These clues just set up the ground rules for how emissions standards work
      in the puzzle. (There are emissions standards in real life that do
      something similar, but with less variability among standards and not being
      limited to integers.)
    </p>
    <ul>
      <li>
        Nobody really agrees how bad these gases are for the environment, so
        there are five different standards regarding emissions of the gases.
        Each company is regulated by a different one of the five standards.
      </li>
      <li>
        Each company's total emissions score is calculated as the sum, over all
        five gases, of the emitted amount of that gas times the rating for that
        gas.
      </li>
    </ul>
    <p>These clues help us figure out the mapping of companies to standards:</p>
    <ul>
      <li>
        Each company's name has at least two different letters in common with
        the name of the standard that governs it.
        <ul>
          <li>
            This means All Chem is not regulated by GREEN or OZONE, Electribe is
            not regulated by GASES or OZONE, Fuel Plus is not regulated by GREEN
            or OZONE, Heat Co is not regulated by GREEN, and Pharm Us is not
            regulated by CLEAN, GREEN, or OZONE. This clue alone tells us
            Electribe is regulated by GREEN and Heat Co by OZONE.
          </li>
        </ul>
      </li>

      <li>
        CLEAN and GASES regulate two companies with the same number of letters
        in their names.
        <ul>
          <li>
            Since only All Chem, Fuel Plus, and Pharm Us are left, the two
            companies must be All Chem and Pharm Us. But we previously learned
            Pharm Us isn't regulated by CLEAN, so it must be regulated by GASES,
            and All Chem by CLEAN. By process of elimination, Fuel Plus is
            regulated by SCORE.
          </li>
        </ul>
      </li>
    </ul>

    <p>
      These clues are nowhere near adequate to help us figure out the ratings of
      all the gases in all the standards, nor do the rest of the clues provide
      this:
    </p>
    <ul>
      <li>
        Each standard rates each of the five gases using an integer factor from
        1 to 26.
      </li>
      <li>
        Each company emitted an integer number of units of each gas from 1 to
        26.
      </li>
      <li>
        Energon is the only gas with five different ratings in the five
        different standards.
      </li>
      <li>
        A total of three different gases are rated as 5 by at least one
        standard, and every standard rates at least one gas at 5.
      </li>
      <li>Kryptonite has the least average rating across all the standards.</li>
      <li>
        Aether is rated 19 in the SCORE standard, the greatest rating it gets in
        any of the standards.
      </li>
    </ul>
    <p>
      But, along with the A to Z comment in the flavor text, they suggest that
      the five letters of each standard name translate via A=1, ..., Z=26 into
      the ratings for the five gases, and that we should read off the grid of
      gases emitted by each company as letters. With that understanding, we can
      fill in everything for the standards.
    </p>
    <p>
      These clues help us match all the total emissions scores with companies:
    </p>
    <ul>
      <li>
        The total emissions scores were 202, 304, 520, 627, and 771 in some
        order.
      </li>
      <li>
        Heat Co was able to keep its emissions of the gas with the greatest
        rating in its standard down to a single unit, but had double-digit
        emissions of every other gas.
        <ul>
          <li>
            Heat Co's score is 26 for Energon, and at least 10*(15+15+14+5) for
            the other gases, making its total emissions score at least 516. But
            since there is no way to raise that minimum by just 4 (it can only
            increase in increments of 5, 14, or 15), its score couldn't be 520.
          </li>
        </ul>
      </li>

      <li>
        No company had a digit in its total emissions score matching the number
        of letters in its name.
        <ul>
          <li>So Heat Co's score couldn't be 627, and must have been 771.</li>
          <li>All Chem and Pharm Us didn't score 627 either.</li>
        </ul>
      </li>

      <li>
        Electribe didn't have the least total emissions score, but it emitted
        the least total amount of the five gases, just 27 units, less than half
        of that in the two gases with the greatest ratings in Electribe's
        standard.
        <ul>
          <li>
            Those two gases with the greatest ratings are Energon with 18 and
            Tachyon with 14. The other three have 7, 5, and 5. The greatest
            possible total emissions score it could have under this restriction
            is 12*18 + 1*14 + 12*7 + 1*5 + 1*5 = 324. But since it didn't have
            the least total emissions score, it must have had the second least,
            304.
          </li>
          <li>
            The only company left whose score could have been 627 is Fuel Plus.
          </li>
        </ul>
      </li>

      <li>
        All Chem had a greater total emissions score than Pharm Us.
        <ul>
          <li>
            By process of elimination, All Chem scored 520 and Pharm Us 202.
          </li>
        </ul>
      </li>
    </ul>

    <p>
      These clues help us figure out each company's emissions of individual
      gases:
    </p>
    <ul>
      <li>
        Heat Co was able to keep its emissions of the gas with the greatest
        rating in its standard down to a single unit, but had double-digit
        emissions of every other gas.
        <ul>
          <li>
            As noted from this clue earlier, its score was 516 plus increments
            of 5, 14, and 15. Since we now know its score was 771, the
            additional units of gas contributed 255 to its score. So it must
            have had 0, 5, 10, or 15 of those increments of 14, corresponding to
            total emissions of 10, 15, 20, or 25 units of Kryptonite.
          </li>
        </ul>
      </li>

      <li>
        All Chem was the only company to emit more than 19 units of a single
        gas.
        <ul>
          <li>So Heat Co emitted 10 or 15 units of Kryptonite.</li>
        </ul>
      </li>

      <li>
        Fuel Plus was the only company to emit the same number of units of any
        gas as there are letters in the gas's name.
        <ul>
          <li>
            So Heat Co could not have emitted 10 units of Kryptonite, and must
            have emitted 15.
          </li>
        </ul>
      </li>

      <li>
        Tachyon emissions accounted for 70 times as much of All Chem's total
        emissions score as did Aether emissions.
        <ul>
          <li>
            Aether is rated at 3 for All Chem, and Tachyon at 14, so for each
            unit of Aether emitted, contributing 3 to its score, it must have
            emitted 15 units of Tachyon, contributing 210. But no company
            emitted more than 26 units of any gas, so it must have emitted 1
            unit of Aether and 15 Tachyon.
          </li>
        </ul>
      </li>

      <li>
        Electribe didn't have the least total emissions score, but it emitted
        the least total amount of the five gases, just 27 units, less than half
        of that in the two gases with the greatest ratings in Electribe's
        standard.
        <ul>
          <li>
            If it emitted only 11 units of the top two gases, it could have had
            a total emissions score of no more than 10*18 + 1*14 + 14*7 + 1*5 +
            1*5 = 302. If it emitted 12 units of the top two combined, it would
            have an odd total score. So it emitted 13 units of Energon and
            Tachyon combined, and 14 total of the others.
          </li>
        </ul>
      </li>

      <li>
        All Chem emitted as much Tachyon as it did Aether and Kryptonite
        combined. Electribe emitted as much Energon as it emitted Flubber and
        Kryptonite combined. Heat Co emitted as much Kryptonite as it did
        Energon and Tachyon combined.
        <ul>
          <li>
            We already know All Chem emitted 1 Aether and 15 Tachyon, so it must
            have emitted 14 Kryptonite. These gases contribute 1*3 + 14*1 +
            15*14 = 227 of its 520, leaving 293. Energon is rated 12 and Flubber
            5 for them, so possible emissions of these gases (subject to the
            constraints that it emitted more than 19 units of some gas but not
            more than 26 of any) are 14 Energon + 25 Flubber and 24 Energon and
            1 Flubber.
          </li>
          <li>
            Combined with the previous work on Electribe, we can write its
            emissions as N Energon, 13-N Tachyon, N Flubber and Kryptonite
            combined (which are both rated 5 in its standard), and 14-N Aether,
            and write an equation: (14-N)*7 + N*18 + N*5 + (13-N)*14 = 280+2N =
            304. So N=12 and Electribe emitted 2 Aether, 12 Energon, 12 total
            Flubber and Kryptonite, and 1 Tachyon.
          </li>
          <li>
            We already know Heat Co emitted 1 Energon and 15 Kryptonite, so it
            emitted 14 Tachyon. These three gases account for 1*26 + 15*14 +
            14*5 = 306 of its total emissions score of 771. Aether and Flubber
            are both rated at 15 in its standard, so the other 465 from its
            score represents 31 total units of these gases emitted. Since it
            didn't emit more than 19 of any one gas, it emitted at least 12 of
            each.
          </li>
        </ul>
      </li>

      <li>
        The only company which emitted only 1 unit each of two different gases
        was Fuel Plus.
        <ul>
          <li>
            This invalidates the second All Chem solution where it emitted 1
            Aether and 1 Flubber, so it emitted 14 Energon and 25 Flubber.
          </li>
        </ul>
      </li>

      <li>
        Fuel Plus emitted twice as much Flubber as it emitted Tachyon.
        <ul>
          <li>
            If Tachyon was one of the gases it emitted 1 unit of, then it
            emitted 2 Flubber, and these gases account for 35 in the total
            emissions score. If the other 1 is Aether or Kryptonite, then the
            most it could score from it and the other two gases is
            (19+3)*19+18*1 = 436, nowhere near enough to reach 627, so this case
            can't be.
          </li>
          <li>
            If Tachyon and Energon are the 1s, there's still 2 Flubber, and
            these three gases account for 38. It could have emitted up to 19
            each of Aether (scoring 19 each) and Kryptonite (scoring 18 each).
            But since the remaining 589 score is 19*31, this case can only work
            if it emitted 19 units of Kryptonite scoring 18 each and 13 units of
            Aether scoring 19 each.
          </li>
          <li>
            Otherwise, the two 1s are among Aether, Energon, and Kryptonite.
          </li>
        </ul>
      </li>

      <li>
        Fuel Plus was the only company to emit the same number of units of any
        gas as there are letters in the gas's name.
        <ul>
          <li>This invalidates the 1 Tachyon, 1 Energon solution above.</li>
          <li>
            If Aether and Kryptonite are the 1s, then these accounted for 37 of
            the total emissions score, and the other gases accounted for less
            than (3+15+5)*19 = 437, not enough.
          </li>
          <li>
            So Fuel Plus emitted 1 unit of Energon, and 1 of either Aether or
            Kryptonite.
          </li>
          <li>
            If the other of Aether or Kryptonite is the one it emitted as many
            units of as the letters in the gas's name, then these gases and
            Energon accounted for at most 18*10 + 19*1 + 3*1 = 202. It could
            have emitted up to 18 units of Flubber and 9 of Tachyon to meet the
            "twice as much" clue, which gives another 15*18 + 5*9 = 315, not
            enough.
          </li>
          <li>
            It emitted an even amount of Flubber, so it must have emitted 7
            units of Tachyon and 14 of Flubber to meet these two clues. This
            makes 15*14 + 5*7 + 3 = 248 toward the emissions score from Flubber,
            Tachyon, and Energon.
          </li>
          <li>
            If it emitted 1 Aether, then Aether and Kryptonite can only make up
            19*1 + 18*19 = 361, which combined with the 248 makes only 609.
          </li>
          <li>
            So Fuel Plus emitted 19 Aether, 1 Energon, 14 Flubber, 1 Kryptonite,
            and 7 Tachyon to just reach 627.
          </li>
        </ul>
      </li>

      <li>
        For each gas, there was at least one company that emitted only one unit
        of the gas.
        <ul>
          <li>
            We know Fuel Plus emitted 1 of Energon and Kryptonite (and was the
            only one to emit 1 of more than one gas), All Chem emitted 1 Aether,
            Electribe 1 Tachyon, and Heat Co 1 Energon. This leaves Pharm Us as
            the only one who could have emitted 1 Flubber, so it did.
          </li>
        </ul>
      </li>

      <li>
        Pharm Us emitted as much Energon as it did of the other four gases
        combined, and it emitted just as much Aether as it did Tachyon.
        <ul>
          <li>
            Suppose Pharm Us emitted 7 units each of Aether and Tachyon. Then
            those gases contribute 7*7+19*7 = 182 to its total emissions score.
            There's also a score of 19 for one unit of Flubber emitted, and no
            matter what else we choose, the total exceeds its score of 202. So
            it must have emitted less Aether and Tachyon.
          </li>
          <li>
            Suppose it emitted 6 Aether and 6 Tachyon. Now those gases
            contribute only 156, 1 unit of Flubber adds 19, the minimum 2 units
            of Kryptonite adds 10, and 6+6+1+2 = 15 Energon from this clue,
            adding another 15 to the score. This makes 200, but if we add just
            one unit of Kryptonite, the score is too large. So this also doesn't
            work.
          </li>
          <li>
            Suppose instead it emitted only 4 Aether and 4 Tachyon. Then those
            gases contribute 104, 1 unit of Flubber adds 19, and the maximum 19
            Energon adds 19. By this clue, these numbers allow 10 units of
            Kryptonite emissions, which contribute 50. This is only 192, not
            enough.
          </li>
          <li>
            So Pharm Us must have emitted exactly 5 units each of Aether and
            Tachyon. These and the 1 unit of Flubber account for 149 of the
            total emissions score, and to make it come out to 202 while obeying
            the clue about Energon, we need 7 units of Kryptonite and 18
            Energon.
          </li>
        </ul>
      </li>

      <li>
        Two companies emitted the same amount of Kryptonite.
        <ul>
          <li>
            From earlier work we know All Chem emitted 14 Kryptonite, Fuel Plus
            emitted 1, Heat Co 15, Pharm Us 7, and Electribe emitted 12 total of
            Flubber and Kryptonite. Since Electribe emitted 1 Tachyon and
            another clue tells us they didn't emit only 1 unit of another gas,
            the repeated amount couldn't be 1, so it must be 7. Electribe
            emitted 7 Kryptonite and 5 Flubber.
          </li>
        </ul>
      </li>

      <li>
        One company emitted exactly as much Aether as two other companies did
        combined. The same company emitted exactly as much Flubber as two other
        companies did combined (not necessarily the same two companies).
        <ul>
          <li>
            Now we've determined all the emissions amounts except for allocating
            31 units of gas emitted by Heat Co between Aether and Flubber, with
            a minimum of 12 and maximum of 19 of each gas. The other Aether
            emission amounts are 1, 2, 5, and 19, so the only way to satisfy the
            Aether part of this clue is if the 19 (emitted by Fuel Plus) is the
            sum of 1+18, 2+17, or 5+14, the larger amount in each case being
            emitted by Heat Co.
          </li>
          <li>
            Fuel Plus emitted 14 units of Flubber, and the other companies'
            emissions are 1, 5, and 25. The only way to make the sum required
            for this clue to work is 1+13, with Heat Co emitting 13 units of
            Flubber. So Heat Co emitted 18 units of Aether.
          </li>
        </ul>
      </li>
    </ul>

    <p>And finally we have filled in the whole grid:</p>
    <Table className="puzzle-table">
      <tbody>
        <tr>
          <td></td>
          <td>CLEAN</td>
          <td>GASES</td>
          <td>GREEN</td>
          <td>OZONE</td>
          <td>SCORE</td>
          <td>Aether</td>
          <td>Energon</td>
          <td>Flubber</td>
          <td>Kryptonite</td>
          <td>Tachyon</td>
          <td>Total Score</td>
        </tr>
        <tr>
          <td>All Chem</td>
          <td>O</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>1</td>
          <td>14</td>
          <td>25</td>
          <td>14</td>
          <td>15</td>
          <td>520</td>
        </tr>
        <tr>
          <td>Electribe</td>
          <td>X</td>
          <td>X</td>
          <td>O</td>
          <td>X</td>
          <td>X</td>
          <td>2</td>
          <td>12</td>
          <td>5</td>
          <td>7</td>
          <td>1</td>
          <td>304</td>
        </tr>
        <tr>
          <td>Fuel Plus</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>O</td>
          <td>19</td>
          <td>1</td>
          <td>14</td>
          <td>1</td>
          <td>7</td>
          <td>627</td>
        </tr>
        <tr>
          <td>Heat Co</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>O</td>
          <td>X</td>
          <td>18</td>
          <td>1</td>
          <td>13</td>
          <td>15</td>
          <td>14</td>
          <td>771</td>
        </tr>
        <tr>
          <td>Pharm Us</td>
          <td>X</td>
          <td>O</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>5</td>
          <td>18</td>
          <td>1</td>
          <td>7</td>
          <td>5</td>
          <td>202</td>
        </tr>
        <tr>
          <td>Aether</td>
          <td>3</td>
          <td>7</td>
          <td>7</td>
          <td>15</td>
          <td>19</td>
        </tr>
        <tr>
          <td>Energon</td>
          <td>12</td>
          <td>1</td>
          <td>18</td>
          <td>26</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Flubber</td>
          <td>5</td>
          <td>19</td>
          <td>5</td>
          <td>15</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Kryptonite</td>
          <td>1</td>
          <td>5</td>
          <td>5</td>
          <td>14</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Tachyon</td>
          <td>14</td>
          <td>19</td>
          <td>14</td>
          <td>5</td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Then the numbers in the company-vs.-gas grid (1, 14, 25, ...) translate
      into letters spelling <Clue>ANY NOBLE GAS ANAGRAM ONE RAGE</Clue>. Those
      last seven letters have few anagrams; if we have trouble finding the
      correct answer, onelook.com (suggested by "take just one look" in the
      flavor text) can help. One of those anagrams, <Clue>AEROGEN</Clue>, is
      defined as "any noble gas." <Answerize>{ANSWER}</Answerize> is the answer.
    </p>
    <style jsx global>{`
      .puzzle-table td {
        padding: 8px !important;
        text-align: center;
      }
      .puzzle-table tr:nth-child(1) td {
        writing-mode: vertical-lr;
        text-align: right;
        font-weight: bold;
      }
      .puzzle-table td:nth-child(1) {
        font-weight: bold;
      }
      .puzzle-table tr:nth-child(1) td:nth-child(1) {
        border-left: none;
        border-top: none;
      }
      .puzzle-table tr:nth-child(1) td:nth-child(n + 2) {
        border-top: 3px solid black;
      }
      .puzzle-table tr:nth-child(5n + 1) td {
        border-bottom: 3px solid black;
      }
      .puzzle-table td:nth-child(11n + 1) {
        border-left: 3px solid black;
        border-right: 3px solid black;
      }
      .puzzle-table td:nth-child(6) {
        border-right: 3px solid black;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
