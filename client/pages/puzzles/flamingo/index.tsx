import cx from 'classnames';
import React, { FC, useRef } from 'react';

import ColorVisualizerImage from 'components/color_visualizer_image';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/flamingo/0.png';

const SLUG = 'flamingo';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          I initially thought the baby chick I found was a duck, but it grew up
          and now just look at those colors!
        </FlavorText>

        <div>
          <ColorVisualizerImage
            alt=""
            src={image0}
            title="An image with six connected squares, each of which contains a four-by-four grid. Some of the squares within the grid are colored various shades of gray and pink."
            className={cx(NO_COPY_CLASS, 'mx-auto')}
          />
          <SheetableImage
            alt="An image with six connected squares, each of which contains a four-by-four grid. Some of the squares within the grid are colored various shades of gray and pink."
            src={image0}
            title=""
            className={cx(HIDDEN_CLASS)}
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
