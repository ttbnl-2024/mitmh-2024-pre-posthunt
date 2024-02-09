import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';

const SLUG = 'machines';
const ANSWER = `GEN Z`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each of the 6 sheets is a separate mini-puzzle, where the goal is to find
      the unique word from the wordlist that can be typed in cell A1 to make all
      of the highlighted formulas evaluate to TRUE. The first formula always
      checks that A1 is in the wordlist (the <Monospace>REGEXMATCH</Monospace>{' '}
      part of this formula forces A1 to be only letters, since otherwise the{' '}
      <Monospace>MATCH</Monospace> statement will accept question marks as
      wildcards), and the second checks that the word is a specified length. The
      remaining formulas differ from sheet to sheet; figuring out how they work
      can be done through a combination of reading the formulas, googling what
      various Sheets functions do, and experimentation.
    </p>
    <p>
      There are many ways around solving some pieces of various puzzles with
      smart guessing and checking or clever formula writing, and doing so is
      certainly in the spirit of the puzzle, but here are canonical solutions
      for each of the puzzles.
    </p>
    <h3>1. Simple formulas</h3>
    <br />
    <ul>
      <li>
        <Monospace>=ARABIC(MID(A1, 1, 1)) = 100</Monospace>
        <br />
        This is checking that the first letter of the answer equals 100 when
        interpreted as a Roman numeral: <Clue>C</Clue>
      </li>

      <li>
        <Monospace>
          =IFERROR(LET(x, MID(A1, 2, 1), CELL("address", INDEX(D4:AC4, MATCH(x,
          D4:AC4, 0))) = "$"&amp;x&amp;"$4"), FALSE)
        </Monospace>
        <br />
        This checks that the second letter is in its own column in the array of
        letters to the right. The letter O is in column O, so the second letter
        is <Clue>O</Clue>.
      </li>

      <li>
        <Monospace>
          =IFERROR(ABS(CONVERT(1, "bushel", MID(A1, 3, 1)) -35) &lt; 1, FALSE)
        </Monospace>
        <br />
        The third letter must be a valid unit of volume such that a bushel is
        roughly 35 of that unit: <Clue>L</Clue> for liters works.
      </li>

      <li>
        <Monospace>
          =IFERROR(GOOGLETRANSLATE(MID(A1, 4, 2), "en", "es")=MID(A1, 4, 1),
          FALSE)
        </Monospace>
        <br />
        The fourth letter and fifth letters, when translated from English to
        Spanish, must equal the fourth letter: <Clue>OR</Clue> &rarr; O
      </li>
    </ul>
    Combining all of these gives the answer <Clue>COLOR</Clue>.
    <br />
    <br />
    <h3>2. Word search</h3>
    <p>
      A word search is shown off to the left, with rows and columns labeled A-Z.
      Typing a 2-letter word into A1 causes the crosshair-shaped region of cells
      to evaluate to the subset of the word search going up/down/left/right from
      the row/column pair indicated by the word in A1.
    </p>
    <p>
      The formula to satisfy checks that one of the four directions spells out{' '}
      <Clue>PUZZLE</Clue>. There are two copies of the word <Clue>PUZZLE</Clue>{' '}
      in the word search, one at column I, row S, and one at column L, row Q,
      but only the former corresponds to a word, so the answer is{' '}
      <Clue>IS</Clue>.
    </p>
    <h3>3. Hidden formulas</h3>
    <p>
      There are three columns full of formulas, most of which are trivially
      satisfied; the goal is to find the important formulas that will constrain
      the final word.
    </p>
    <p>
      {' '}
      The first column is easily scrolled through to see which of the formulas
      is evaluating to FALSE instead of TRUE.
    </p>
    <p>
      {' '}
      The second column is full of formulas that reference each other in a loop
      (e.g., the formula in cell F6 is <Monospace>=F5</Monospace>, with the top
      cell equaling the bottom one). The goal is to find where the cycle begins;
      satisfying that formula will make the whole loop true. This can be done in
      a few ways; one is to delete one of the formulas and scroll down to find
      the first nonempty cell.{' '}
    </p>
    <p>
      The third column is the same, except that the loop is shuffled, so it's
      harder to find where it begins. One way to find the start of the loop is
      to call <Monospace>=LEN(FORMULATEXT(&lt;cell&gt;))</Monospace>, to see
      which formula is nontrivial. There are various things that try to make it
      harder to ctrl-f for the relevant formulas--the second and third formulas
      use different variable names, and there are many red-herring formulas off
      to the right side of the sheet which evaluate to "couldn't make it tooo
      easy to search through formulas.," but it is still possible to get around
      these.
    </p>
    <p>
      This gives the following constraints on the answer (from cells E7, E862,
      F631, and G541):
    </p>
    <ul>
      <li>
        <Monospace>=LEN(A1) = 3</Monospace>
      </li>
      <li>
        <Monospace>=MID(A1, 1, 1) = S232</Monospace>
        <br />
        The first letter equals the value in S232; in keeping with the theme of
        this puzzle, the needed information is off in a random part of the
        sheet. S232 has an O.
      </li>
      <li>
        <Monospace>
          =IFERROR(LET(x, UNICODE(MID(A1, 2, 1)) - UNICODE("A"), LET(y,
          UNICODE(MID(A1, 3, 1)) -UNICODE("A"), MOD(x*y, 25) = 2)), FALSE)
        </Monospace>
      </li>
      <li>
        <Monospace>
          =IFERROR(LET(x_harder_to_search_formulas_for, UNICODE(MID(A1, 2, 1)) -
          UNICODE("A"), LET(y_harder_to_search_formulas_for, UNICODE(MID(A1, 3,
          1)) -UNICODE("A"),
          MOD(x_harder_to_search_formulas_for*y_harder_to_search_formulas_for,
          29) = 23)), FALSE)
        </Monospace>
      </li>
    </ul>
    <p>
      {' '}
      The second and third formulas are set up so that neither one is true
      unless both the 2nd and 3rd letters of the word are correct, and both
      formulas are needed to figure out the two letters, so that the letters
      can't be determined just by guess-and-checking. This is achieved with the
      Chinese remainder theorem: each formula tells us that the remainder of x*y
      mod 25 and 29 respectively are 2 and 23, where x and y are numbers 0-25
      corresponding to the two letters (A = 0, B = 1, ... ). Solving the
      equations gives that x*y = 52 mod 725, so x*y = 52. The only possible
      factorization with numbers from 0 to 25 is 4*13, and taking the only ordering
      that gives a word gives the final answer of <Clue>ONE</Clue>.
    </p>
    <br />
    <h3>
      4. Cursed <Monospace>MATCH</Monospace> Statement
    </h3>
    <p>
      {' '}
      This puzzle is based around determining the behavior of the{' '}
      <Monospace>MATCH</Monospace> function (with the last argument omitted) on
      an unsorted list, when the function normally expects a sorted list. The
      sheet has a list of unsorted words, and a word needs to be typed in cell
      A1 such that <Monospace>INDEX</Monospace>-<Monospace>MATCH</Monospace>ing
      finds the word <Monospace>MATCH</Monospace> in the list.
    </p>
    <p>
      Through trial and error, we can figure out that the{' '}
      <Monospace>MATCH</Monospace> function is binary-searching on the list,
      which gives a list of constraints on the final word (it needs to come
      alphabetically after the 16th word on the list, before the 24th, before
      the 20th, etc.). The only 5 letter word from the wordlist that satisfies
      all of these constraints is <Clue>USING</Clue>.
    </p>
    <h3>5. Turing machine</h3>
    <p>
      This sheet is simulating a Turing machine. There is a table of how the
      Turing machine should behave with four entries missing, and the letters of
      the word typed in A1 will fill in the missing entries in the table. There
      are several binary strings of <i>n</i> 1s surrounded by 0s, along with
      whether the machine should accept or reject these strings; the machine is
      supposed to check whether the number of (consecutive) 1s is a perfect
      square. There are rough notes of what each state in the Turing machine is
      supposed to represent as an aid to understanding how the machine is
      supposed to work. The rough approach of the machine is:
    </p>
    <p>
      We will check if the number of ones is a perfect square by deleting one 1,
      then three 1s, then five 1s, etc., returning Accept if there are no 1s
      left at the end of one of these operations, and Reject if we run out of 1s
      in the middle. We do this by keeping a counter of the current number we're
      subtracting off to the right of the tape, and incrementing the counter by
      2 after each subtraction. To subtract the counter from the number, we
      slide the counter over one 1 at a time, deleting a 1 from the original
      number each time we do this. Each time we slide a 1 over, we check whether
      we slid the final 1 over and remember via the state whether we are in the
      middle of the final deletion of a subtraction. Then whenever we delete a
      1, we check whether we just deleted the final 1, and if we did delete the
      final 1, we Reject or Accept depending on whether we were in the middle of
      subtracting off the counter or just finished.
    </p>
    <p>
      There may be other ways to satisfy all of the test cases, but one way
      corresponds to the descriptions given, and this is the only valid word
      which passes all the cases: <Clue>CELL</Clue>.
    </p>
    <h3>6. Maze</h3>
    <p>
      This is a maze where the goal is to make it from the top left to the
      bottom right (while only moving down and right), and the paths are blocked
      by "doors" labeled with the letters A-Z. Including a letter in the word in
      cell A1 unblocks that letter, and cells change from # to ^ to indicate
      which squares have been reached. The word is required to be 8 letters long
      with 7 distinct letters, so only 7 of the doors can be opened. The only
      path from the start to the finish which goes through only 7 doors goes
      through the doors marked <Clue>CFINOTU</Clue>. The only 8 letter word
      using all of those letters is <Clue>FUNCTION</Clue>, which is the answer.
    </p>
    <h3>Finally...</h3>
    <p>
      Reading out the answers to all of the puzzles gives the phrase{' '}
      <Clue>COLOR IS ONE USING CELL FUNCTION</Clue>. This is cluing to use the{' '}
      <Monospace>CELL</Monospace> function: it can be used to check various
      properties of a cell; one of which is called "color", which is equal to 1
      if a cell is formatted to display negative numbers in red. Highlighting
      all of the cells in the sheets where the color value is 1 can be done with
      conditional formatting, with a rule like{' '}
      <Monospace>=CELL("color", A1) = 1</Monospace> applied to the whole sheet
      (possibly needing to be reordered to come before existing conditional
      formatting rules). Reading the highlighted cells from left to right spells
      out one word in each sheet, giving the final instruction:{' '}
      <Clue>MAKE A SPREADSHEET IN REAL LIFE</Clue>.
    </p>
    <p>
      <Clue>SPREADSHEET</Clue> is the trickiest to find, since in keeping with
      the theme of the third sheet, the letters are spread out over the whole
      sheet amidst various red herrings. One way to find the letters without
      scrolling all over the sheet is to call something like{' '}
      <Monospace>
        =FILTER(&lt;column&gt;, MAP(&lt;column&gt;, LAMBDA(x, CELL("color", x) =
        1)))
      </Monospace>{' '}
      (we need to be a bit careful to avoid circular dependencies, e.g., by
      starting &lt;column&gt; a few rows down from the top).
    </p>
    <p>
      After submitting video/photo/other evidence of having made a spreadsheet
      in real life (open to creative interpretation), we receive the final
      answer to the puzzle: <Answerize>{ANSWER}</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
