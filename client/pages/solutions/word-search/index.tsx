import { FC } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';

import image0 from 'assets/solutions/word-search/0.png';
import image1 from 'assets/solutions/word-search/1.png';
import image2 from 'assets/solutions/word-search/2.png';
import image3 from 'assets/solutions/word-search/3.png';

const SLUG = 'word-search';
const ANSWER = `ADORN, BEAMER, CRAWLY, DANDER, OXALATE, STOWED`;
const E = Colors.C3;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We find solutions to the clues in the grid in the usual word search
      fashion. The clue answers are:
    </p>
    <ul>
      <li>
        <Monospace>BEHEST</Monospace>
      </li>
      <li>
        <Monospace>BERYL</Monospace>
      </li>
      <li>
        <Monospace>BITING</Monospace>
      </li>
      <li>
        <Monospace>BITTER</Monospace>
      </li>
      <li>
        <Monospace>BRIDE</Monospace>
      </li>
      <li>
        <Monospace>CHEESE</Monospace>
      </li>
      <li>
        <Monospace>CRAYON</Monospace>
      </li>
      <li>
        <Monospace>DANDER</Monospace>
      </li>
      <li>
        <Monospace>DAUNT</Monospace>
      </li>
      <li>
        <Monospace>DICED</Monospace>
      </li>
      <li>
        <Monospace>ELIXIR</Monospace>
      </li>
      <li>
        <Monospace>ENSIGN</Monospace>
      </li>
      <li>
        <Monospace>GUNNER</Monospace>
      </li>
      <li>
        <Monospace>HYDRANT</Monospace>
      </li>
      <li>
        <Monospace>INSIDE</Monospace>
      </li>
      <li>
        <Monospace>PLUSHIE</Monospace>
      </li>
      <li>
        <Monospace>PUFFIN</Monospace>
      </li>
      <li>
        <Monospace>QUETZAL</Monospace>
      </li>
      <li>
        <Monospace>QUIET</Monospace>
      </li>
      <li>
        <Monospace>QUININE</Monospace>
      </li>
      <li>
        <Monospace>SNARL</Monospace>
      </li>
      <li>
        <Monospace>SPICED</Monospace>
      </li>
      <li>
        <Monospace>SPLINE</Monospace>
      </li>
      <li>
        <Monospace>SQUAB</Monospace>
      </li>
      <li>
        <Monospace>SQUARING</Monospace>
      </li>
      <li>
        <Monospace>STEEP</Monospace>
      </li>
      <li>
        <Monospace>STOWED</Monospace>
      </li>
      <li>
        <Monospace>STRAND</Monospace>
      </li>
      <li>
        <Monospace>TIPSY</Monospace>
      </li>
      <li>
        <Monospace>TRIPE</Monospace>
      </li>
      <li>
        <Monospace>TUMBLE</Monospace>
      </li>
      <li>
        <Monospace>USHER</Monospace>
      </li>
    </ul>
    <p>The words circled in the grid:</p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      The Matchmaker includes a clue message{' '}
      <Monospace>BACKWARD AT TOP LEFT</Monospace>. The only word like that is{' '}
      <Answerize>DANDER</Answerize>.
    </p>
    <p>
      Solving the Einstein puzzle (east) in the Text Adventure instructs us to
      look "one space east of the elixir". The answer one space to the right of{' '}
      <Monospace>ELIXIR</Monospace> in the grid is <Answerize>STOWED</Answerize>
      .
    </p>
    <p>
      When we overlay the lights from the Akari solution on this grid, it spells{' '}
      <Monospace>A BUG CREEPY HYPHEN THIS SIX LETTERS</Monospace>. This clues{' '}
      <Answerize>CRAWLY</Answerize>.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>We can also look at the letters not used in the word search solution:</p>
    <p>
      <SheetableImage alt="" src={image2} title="" className="mx-auto" />
    </p>
    <p>They spell three messages:</p>
    <p>
      <Monospace>MIDAIR BOAR LOOPING</Monospace> is a nonsense message about
      flying pigs, but it fits on the blanks in Blanks and extracts the answer{' '}
      <Answerize>ADORN</Answerize>.
    </p>
    <p>
      <Monospace>REACTION THREE MAKES SODIUM THIS</Monospace> refers to the
      Chemistry puzzle. That reaction makes sodium oxalate, so{' '}
      <Answerize>OXALATE</Answerize> is the answer.
    </p>
    <p>
      <Monospace>OVERLAY AND LOOK THROUGH QS</Monospace> works with the
      Crossword. First find the Qs in the word search (including the one in this
      message):
    </p>

    <p>
      <SheetableImage alt="" src={image3} title="" className="mx-auto" />
    </p>
    <p>Then check the same locations in the crossword:</p>
    <Crossword
      // prettier-ignore
      data={[
        [1,   2,  3,  4,  5,  6,  7,  X,  X,  8,  9, 10, 11, 12, 13],
        [14,  _,  _,  _,  _,  _,  _,  X,  X, 15,  _,  _,  _,  _,  _],
        [16,  _,  _,  _,  _,  _,  _,  X, 17,  _,  _,  _,  _,  _,  _],
        [ X,  X,  X,  X, 18,  _,  _, 19,  _,  _,  X, 20,  _,  _,  _],
        [21, 22, 23,  X,  X,  X, 24,  _,  _,  _, 25,  X, 26,  _,  _],
        [27,  _,  _, 28,  _, 29,  _,  _,  _,  _,  _, 30,  X,  X,  X],
        [31,  _,  _,  _,  X, 32,  _,  _,  X,  X, 33,  _, 34, 35, 36],
        [37,  _,  _,  _, 38,  _,  _,  X, 39, 40,  _,  _,  _,  _,  _],
        [41,  _,  _,  _,  _,  X,  X, 42,  _,  _,  X, 43,  _,  _,  _],
        [ X,  X,  X, 44,  _, 45, 46,  _,  _,  _,  _,  _,  _,  _,  _],
        [47, 48, 49,  X, 50,  _,  _,  _,  _,  X,  X,  X, 51,  _,  _],
        [52,  _,  _, 53,  X, 54,  _,  _,  _, 55, 56,  X,  X,  X,  X],
        [57,  _,  _,  _, 58,  _,  _,  X, 59,  _,  _, 60, 61, 62, 63],
        [64,  _,  _,  _,  _,  _,  X,  X, 65,  _,  _,  _,  _,  _,  _],
        [66,  _,  _,  _,  _,  _,  X,  X, 67,  _,  _,  _,  _,  _,  _],
      ]}
      // prettier-ignore
      fill={[
        ['B','R','A','C','K','E','T',  _,  _,'N','A','N','G','Y','I',],
        ['Y','E','S','H','I','V','A',  _,  _,'E','G','O','I','S','M',],
        ['E','T','H','A','N','O','L',  _,'C','A','T','E','R','E','R',],
        [  _,  _,  _,  _,'T','E','K','W','A','R',  _,'L','O','R','A',],
        ['A','P','C',  _,  _,  _,'E','E','L','E','R',  _,'S','A','N',],
        ['P','E','R','O','X','I','D','E','F','R','O','M',  _,  _,  _,],
        ['N','A','A','N',  _,'R','T','S',  _,  _,'L','O','R','D','E',],
        ['E','R','N','E','S','T','O',  _,'T','W','O','T','E','R','M',],
        ['A','T','E','A','T',  _,  _,'S','H','Y',  _,'I','B','I','D',],
        [  _,  _,  _,'R','E','A','C','T','I','O','N','F','I','V','E',],
        ['A','S','A',  _,'P','U','S','A','N',  _,  _,  _,'D','E','N',],
        ['L','U','S','H',  _,'D','I','C','K','E','R',  _,  _,  _,  _,],
        ['V','E','T','O','E','R','S',  _,'B','L','O','A','T','E','D',],
        ['A','D','A','N','D','E',  _,  _,'I','M','I','T','A','T','E',],
        ['H','E','R','E','S','Y',  _,  _,'G','O','L','F','B','A','G',],
      ]}
      shading={[
        [E, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, E, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, E, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, E],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, E, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, E, _, _, _, _, _, _, _, _, _, _, _, _],
      ]}
    />
    <p>
      The letters they hit spell <Answerize>BEAMER</Answerize>, the answer.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
