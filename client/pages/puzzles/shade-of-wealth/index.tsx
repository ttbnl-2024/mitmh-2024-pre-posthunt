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

const SLUG = 'shade-of-wealth';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    // no need for copy
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          Sensing an opportunity to acquire Pluto's wealth, Jason first obtained
          Pluto's record books. A page dated December 9th, 2019 featured a very
          elaborate doodle, and a strip of paper tucked inside here mentioned an
          important appointment at the Golden Fleece Casino. You'll be meeting
          him there, in Las Vegas. Can visiting the other casinos help you
          figure out what you and Jason need to do there?
        </FlavorText>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
