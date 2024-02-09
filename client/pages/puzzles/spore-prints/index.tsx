import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/spore-prints/0.png';

const SLUG = 'spore-prints';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Making spore prints with your friend can be fun, even with some
          unwanted pests. What's the guy's name again?
        </FlavorText>
        <p>
          <SheetableImage
            alt="Spore prints"
            src={image0}
            title="Spore prints"
          />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
