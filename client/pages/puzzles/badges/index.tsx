import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VirtualPuzzle from 'components/virtual_puzzle';

const SLUG = 'badges';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <InfoIcon>
          This puzzle requires on-campus presence, even after the virtual
          version unlocks.
        </InfoIcon>

        <VirtualPuzzle
          module="puzzles/badges/badges_virtual"
          unlockTime={puzzleData.private?.unlockTime}
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
