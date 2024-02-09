import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';

import pdf from 'assets/solutions/retro-chess-puzzle/puzzle15soln.pdf';

const SLUG = 'retro-chess-puzzle';
const ANSWER = `LOSING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      <a href={pdf}>Direct PDF link.</a>
    </p>
    <iframe src={pdf + '#zoom=Fit'} className="w-full">
      <style jsx>{`
        iframe {
          /* Why can't this be a tailwind class? No clue. */
          aspect-ratio: 8.5/11;
        }
      `}</style>
    </iframe>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
