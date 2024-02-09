import cx from 'classnames';
import React, { FC, useRef } from 'react';

import ColorVisualizerImage from 'components/color_visualizer_image';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/a-rift-in-hades/0.png';

const SLUG = 'a-rift-in-hades';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You can see the entirety of the underworld from Hell, Michigan. Since
          you left, the normally peaceful residents of Hades have divided into
          seven factions, each controlling a diagonal swath running entirely
          around the doughnut, with each faction fighting every other one at a
          shared border. If only they could sit down together, have a turnover,
          and find common ground. What's going on now and how did Pluto keep the
          peace?
        </FlavorText>
        <ColorVisualizerImage
          alt="A 7-colored donut. In clockwise order from the top: indigo, cyan, green, yellow, orange, red, purple."
          src={image0}
          title=""
          className={cx(NO_COPY_CLASS, 'mx-auto')}
        />
        <SheetableImage
          alt="A 7-colored donut. In clockwise order from the top: indigo, cyan, green, yellow, orange, red, purple."
          src={image0}
          title=""
          className={cx(HIDDEN_CLASS)}
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
