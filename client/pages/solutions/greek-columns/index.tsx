import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/greek-columns/0.png';

const SLUG = 'greek-columns';
const ANSWER = `AESTHETIC`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We notice that the blue bars are 5 letters tall and stand for the letters{' '}
      <Monospace>GREEK</Monospace>. The clues are answered as follows:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BREAKFAST</td>
          <td>
            <Monospace>GREEK YOGURT</Monospace>
          </td>
        </tr>
        <tr>
          <td>LUNCH</td>
          <td>
            <Monospace>GREEK SALAD</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            IS THIS EXHIBITION PART OF THE LONG RUN? <b>YES</b>. (Song on Eagles
            album <i>The Long Run</i>)
          </td>
          <td>
            <Monospace>THE GREEKS DON'T WANT NO FREAKS</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            WILL THE VALENTINES DAY "PAL JOEY" SING-ALONG INCLUDE THE
            TRADITIONAL QUESTION? <b>YES</b>. (line in "My Funny Valentine")
          </td>
          <td>
            <Monospace>IS YOUR FIGURE LESS THAN GREEK</Monospace>
          </td>
        </tr>
        <tr>
          <td>ARTHUR CONAN DOYLE STORY</td>
          <td>
            <Monospace>THE ADVENTURE OF THE GREEK INTERPRETER</Monospace>
          </td>
        </tr>
        <tr>
          <td>CYMBELINE (IV, 2)</td>
          <td>
            <Monospace>ALL CURSES </Monospace>
            <Monospace>MADDED</Monospace>
            <Monospace> HECUBA GAVE THE GREEKS</Monospace>
          </td>
        </tr>
        <tr>
          <td>DELISA MULKEY POEM</td>
          <td>
            <Monospace>FIRST CRUSH SIXTH PERIOD GREEK MYTHOLOGY</Monospace>
          </td>
        </tr>
        <tr>
          <td>EMMA LAZARUS POEM (FIRST LINE)</td>
          <td>
            <Monospace>NOT LIKE THE BRAZEN GIANT OF GREEK FAME</Monospace>
          </td>
        </tr>
        <tr>
          <td>FORM OF CHRISTIANITY</td>
          <td>
            <Monospace>GREEK ORTHODOX</Monospace>
          </td>
        </tr>
        <tr>
          <td>WARNING! NO HORSEPLAY!</td>
          <td>
            <Monospace>BEWARE OF GREEKS BEARING GIFTS</Monospace>
          </td>
        </tr>
        <tr>
          <td>COMEDY FILM</td>
          <td>
            <Monospace>MY BIG FAT GREEK WEDDING</Monospace>
          </td>
        </tr>
        <tr>
          <td>PRESTIGIOUS SPOKEN LANGUAGE (on the top floor)</td>
          <td>
            <Monospace>ATTIC GREEK</Monospace>
          </td>
        </tr>
        <tr>
          <td>WRITTEN SYMBOLS</td>
          <td>
            <Monospace>GREEK ALPHABET</Monospace>
          </td>
        </tr>
        <tr>
          <td>(YOU KNOW, FRANKLY, I DON'T UNDERSTAND A WORD OF IT)</td>
          <td>
            <Monospace>ITS ALL GREEK TO ME</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Then, we shift around the columns so that the answers are left to right
      alphabetical order, and the <Monospace>GREEK</Monospace>s are aligned.
      Reading the letters in the yellow squares from left to right, top to
      bottom yields{' '}
      <Monospace>ARRAYED CHEAT SITE AN IDEA OF BEAUTY NINE</Monospace>. This is
      a cryptic clue to anagram <Monospace>CHEAT SITE</Monospace> to something
      meaning "an idea of beauty", the answer <Answerize>AESTHETIC</Answerize>.
    </p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image0} title="" />
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
