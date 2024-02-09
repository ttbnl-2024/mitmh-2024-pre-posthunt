import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/persephone/0.png';

const SLUG = 'persephone';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Persephone's cycle of spending the six months of spring and summer
          with the living and the six months of fall and winter with the dead
          has resulted in precisely the sort of tendril-to-limb combat that she
          hoped to avoid. While the two sides are running towards each other
          from each side of the battlefield, there could be an opportunity for
          you to scavenge something; any ideas?
        </FlavorText>
        <div className="flex items-center justify-center">
          <SheetableImage
            alt="A grid with 6 rows and 11 columns. Two arrows circle the grid counter-clockwise. Outside the grid on the left edge, EARTH reads down. On the right edge, HADES reads up."
            src={image0}
            title=""
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
