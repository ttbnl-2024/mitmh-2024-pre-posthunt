import { FC } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';

const SLUG = 'crossword';
const ANSWER = `ADONIS, BARGING, BEAMER, BENZOYL, BRACKET, CRONE`;
const E = Colors.C3;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This is the solution to the crossword:</p>
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
        ['B','R','A','C','K','E','T',  X,  X,'N','A','N','G','Y','I',],
        ['Y','E','S','H','I','V','A',  X,  X,'E','G','O','I','S','M',],
        ['E','T','H','A','N','O','L',  X,'C','A','T','E','R','E','R',],
        [  X,  X,  X,  X,'T','E','K','W','A','R',  X,'L','O','R','A',],
        ['A','P','C',  X,  X,  X,'E','E','L','E','R',  X,'S','A','N',],
        ['P','E','R','O','X','I','D','E','F','R','O','M',  X,  X,  X,],
        ['N','A','A','N',  X,'R','T','S',  X,  X,'L','O','R','D','E',],
        ['E','R','N','E','S','T','O',  X,'T','W','O','T','E','R','M',],
        ['A','T','E','A','T',  X,  X,'S','H','Y',  X,'I','B','I','D',],
        [  X,  X,  X,'R','E','A','C','T','I','O','N','F','I','V','E',],
        ['A','S','A',  X,'P','U','S','A','N',  X,  X,  X,'D','E','N',],
        ['L','U','S','H',  X,'D','I','C','K','E','R',  X,  X,  X,  X,],
        ['V','E','T','O','E','R','S',  X,'B','L','O','A','T','E','D',],
        ['A','D','A','N','D','E',  X,  X,'I','M','I','T','A','T','E',],
        ['H','E','R','E','S','Y',  X,  X,'G','O','L','F','B','A','G',],
      ]}
    />

    <p>
      If we overlay the Akari solution with the crossword's solution, the
      letters with bulbs spell out{' '}
      <Monospace>THE MORTAL CONSORT OF APHRODITE</Monospace>. This is{' '}
      <Answerize>ADONIS</Answerize>.
    </p>

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
        ['B','R','A','C','K','E','T',  X,  X,'N','A','N','G','Y','I'],
        ['Y','E','S','H','I','V','A',  X,  X,'E','G','O','I','S','M'],
        ['E','T','H','A','N','O','L',  X,'C','A','T','E','R','E','R'],
        [  X,  X,  X,  X,'T','E','K','W','A','R',  X,'L','O','R','A'],
        ['A','P','C',  X,  X,  X,'E','E','L','E','R',  X,'S','A','N'],
        ['P','E','R','O','X','I','D','E','F','R','O','M',  X,  X,  X],
        ['N','A','A','N',  X,'R','T','S',  X,  X,'L','O','R','D','E'],
        ['E','R','N','E','S','T','O',  X,'T','W','O','T','E','R','M'],
        ['A','T','E','A','T',  X,  X,'S','H','Y',  X,'I','B','I','D'],
        [  X,  X,  X,'R','E','A','C','T','I','O','N','F','I','V','E'],
        ['A','S','A',  X,'P','U','S','A','N',  X,  X,  X,'D','E','N'],
        ['L','U','S','H',  X,'D','I','C','K','E','R',  X,  X,  X,  X],
        ['V','E','T','O','E','R','S',  X,'B','L','O','A','T','E','D'],
        ['A','D','A','N','D','E',  X,  X,'I','M','I','T','A','T','E'],
        ['H','E','R','E','S','Y',  X,  X,'G','O','L','F','B','A','G'],
      ]}
      // prettier-ignore
      shading={[
        [_,_,_,_,_,_,E,_,_,_,_,_,_,_,_],
        [_,_,_,E,_,_,_,_,_,E,_,_,_,_,E],
        [_,_,_,_,_,E,_,_,_,_,_,_,E,_,_],
        [_,_,_,_,E,_,_,_,E,_,_,E,_,_,_],
        [_,_,E,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,E,_,_,_,_,_,_,_,_,_,_,_],
        [E,_,_,_,_,_,_,E,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,E,_,_,_,_,_,_,E,_],
        [_,E,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,E,_,E,_,_,_],
        [_,_,E,_,E,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,E,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,E,_,_,_,_,E,_,_,_,_],
        [_,_,_,_,E,_,_,_,E,_,_,E,_,_,_],
        [_,E,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
      ]}
    />
    <p>
      Part of the string of leftover letters in the Word Search says{' '}
      <Monospace>OVERLAY ON CROSSWORD AND LOOK THROUGH QS</Monospace>. There are
      6 <Monospace>Q</Monospace>s in the Word Search grid, including the one in
      this message. They overlay on crossword solution letters that spell{' '}
      <Answerize>BEAMER</Answerize>.
    </p>
    <p>
      The answers to 27 and 44 across (labeled “clue”) spell{' '}
      <Monospace>PEROXIDE FROM REACTION FIVE</Monospace>. In the Chemistry
      puzzle this reaction contains <Monospace>BENZOYL PEROXIDE</Monospace>, so
      the answer is <Answerize>BENZOYL</Answerize>.
    </p>
    <p>
      A message extracted from the Matchmaker puzzle says{' '}
      <Monospace>ONE ACROSS ANSWER</Monospace>. The only one across answer in
      this round is in this Crossword, where it is{' '}
      <Answerize>BRACKET</Answerize>.
    </p>
    <p>
      Clue 39 down is "a useful command." The answer,{' '}
      <Monospace>THINK BIG</Monospace>, is a command we can use in the
      bridge-crossing puzzle (south) in the Text Adventure. Once solved, we can
      use this command on Ada to receive the answer{' '}
      <Answerize>BARGING</Answerize>.
    </p>
    <p>
      The clue for 8 across, "Burman rice noodles" is the only phrase in the
      puzzle with enumeration (6 4 7) to fit on the Blanks, where the numbered
      blanks extract the answer <Answerize>CRONE</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
