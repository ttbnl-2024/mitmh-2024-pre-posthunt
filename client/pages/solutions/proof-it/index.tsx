import { FC } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';

const SLUG = 'proof-it';
const ANSWER = `CALCULUS`;
const E = Colors.C3;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We solve the (ungimmicked) crossword puzzle, and find the clues to help
      find the theme: the title, 9-A and 98-A. Looking for something
      mathematical, we find 4 math classes in the grid (à la a word search).
    </p>
    <p>
      The classes are highlighted in the grid below:{' '}
      <Monospace>TRIGONOMETRY</Monospace>, <Monospace>ALGEBRA</Monospace>,{' '}
      <Monospace>STATISTICS</Monospace>, and <Monospace>GEOMETRY</Monospace>.
    </p>
    <Crossword
      // prettier-ignore
      data={[
        [ X, 1, 2, 3, X, X, X, 4, 5, 6, 7, 8, X, X, 9,10,11,12],
        [13, _, _, _,14, X,15, _, _, _, _, _, X,16, _, _, _, _],
        [17, _, _, _, _, X,18, _, _, _, _, _, X,19, _, _, _, _],
        [20, _, _, X,21,22, _, X,23, _, _, X,24, _, _, _, _, _],
        [ X,25, _,26, X,27, _,28, _, X,29,30, _, _, X,31, _, _],
        [ X, X,32, _,33, _, _, _, X, X, X,34, _, _,35, X, X, X],
        [ X,36, _, _, _, X,37, _,38, X,39, _, _, X,40,41,42, X],
        [43, _, _, _, _,44, _, X,45,46, _, _, X, X,47, _, _,48],
        [49, _, _, _, _, _, X,50, _, _, _, _,51, X, X,52, _, _],
        [53, _, _, X, X,54,55, _, _, _, _, X,56,57,58, _, _, _],
        [59, _, _,60, X, X,61, _, _, _, X,62, _, _, _, _, _, _],
        [ X,63, _, _, X,64, _, _, X,65,66, _, X,67, _, _, _, X],
        [ X, X, X,68,69, _, _, X, X, X,70, _,71, _, _, _, X, X],
        [72,73,74, X,75, _, _,76, X,77, _, _, _, X,78, _,79, X],
        [80, _, _,81, _, _, X,82,83, _, X,84, _,85, X,86, _,87],
        [88, _, _, _, _, X,89, _, _, _,90, _, X,91,92, _, _, _],
        [93, _, _, _, _, X,94, _, _, _, _, _, X,95, _, _, _, _],
        [96, _, _, _, X, X,97, _, _, _, _, X, X, X,98, _, _, X],
      ]}
      // prettier-ignore
      fill={[
        [  _,'T','C','M',  _,  _,  _,'P','L','E','B','E',  _,  _,'M','A','T','H'],
        ['B','R','A','I','N',  _,'B','E','A','T','I','T',  _,'P','I','L','O','T'],
        ['P','A','R','T','A',  _,'O','R','G','A','N','S',  _,'S','L','A','N','T'],
        ['A','M','I',  _,'G','W','B',  _,'O','L','D',  _,'B','A','D','R','E','P'],
        [  _,'P','B','S',  _,'E','R','R','S',  _,'I','T','L','L',  _,'M','R','S'],
        [  _,  _,'B','I','G','T','O','E',  _,  _,  _,'R','U','M','S',  _,  _,  X],
        [  _,'R','E','L','O',  _,'S','M','H',  _,'B','Y','E',  _,'I','T','T',  X],
        ['C','O','A','L','G','A','S',  _,'E','A','R','N',  _,  _,'P','E','R','U'],
        ['R','A','N','S','O','M',  _,'O','X','T','E','A','M',  _,  _,'N','A','S'],
        ['O','M','S',  _,  _,'T','I','N','E','A','R',  _,'S','E','A','N','C','E'],
        ['W','E','E','D',  _,  _,'C','M','D','R',  _,'Y','U','P','P','I','E','S'],
        [  _,'R','A','E',  _,'F','O','E',  _,'I','R','V',  _,'P','T','S','D',  X],
        [  _,  _,  _,'L','Y','N','N',  _,  _,  _,'V','E','S','S','E','L',  _,  X],
        ['P','S','U',  _,'O','M','S','K',  _,'A','S','T','I',  _,'D','E','M',  X],
        ['L','I','N','G','U','A',  _,'N','I','N',  _,'T','A','T',  _,'S','N','L'],
        ['A','D','I','E','U',  _,'T','I','B','I','A','E',  _,'A','T','S','E','A'],
        ['T','R','O','O','P',  _,'I','F','I','T','I','S',  _,'B','O','O','M','S'],
        ['T','A','N','S',  _,  _,'C','E','S','A','R',  _,  _,  _,'O','N','E',  X],
      ]}
      // prettier-ignore
      shading={[
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,E,_,E,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,E,_,E,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,E,_,_,_,E,_,_,_,E,_,_,_,_,_,_],
        [_,_,E,_,_,_,_,_,E,_,E,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,E],
        [_,_,_,_,_,_,_,_,E,_,E,_,_,_,_,_,E,_],
        [_,_,_,_,_,_,_,E,_,_,_,E,_,_,_,E,_,_],
        [_,_,_,_,_,_,E,_,_,_,_,_,_,_,E,_,_,_],
        [_,_,_,_,_,E,_,_,_,_,_,_,_,E,_,_,_,_],
        [_,_,_,_,E,_,_,_,_,_,_,_,E,_,_,_,_,_],
        [_,_,_,E,_,_,_,_,_,_,_,E,_,_,_,_,_,_],
        [_,_,E,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_],
        [_,E,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_],
        [E,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
      ]}
    />
    <p>
      The clue for 98-A tells us the one missing from this list is the answer:{' '}
      <b>
        <Monospace>CALCULUS</Monospace>
      </b>
      .
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
