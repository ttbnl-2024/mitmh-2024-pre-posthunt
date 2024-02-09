import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/pumpkins/0.png';

const SLUG = 'pumpkins';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          <SheetableImage alt="" src={image0} title="" />
        </p>
        <div className="text-center text-3xl">
          <IndexedBlank label="4" showEnum={false} />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
