import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VirtualPuzzle from 'components/virtual_puzzle';

const SLUG = 'we-are-the-champions';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <VirtualPuzzle
          module={`puzzles/${SLUG}/${SLUG}_virtual`}
          unlockTime={puzzleData.private?.unlockTime}
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
