import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'mercury';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Mercury appears to be hard at work orchestrating the movements of the
          planets, while ignoring you. You wonder whether perhaps you missed
          something important in what you have done so far which you will need
          to get his attention. An assistant comes up and hurriedly explains
          that Mercury isn't really ignoring you, he just thinks you're talking
          to somebody else. You see, you need to…
        </FlavorText>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
