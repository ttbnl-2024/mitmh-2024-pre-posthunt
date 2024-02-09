import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/circus-circus/0.png';
import image1 from 'assets/puzzles/circus-circus/1.png';
import image2 from 'assets/puzzles/circus-circus/2.png';
import image3 from 'assets/puzzles/circus-circus/3.png';
import image4 from 'assets/puzzles/circus-circus/4.png';
import image5 from 'assets/puzzles/circus-circus/5.png';

const SLUG = 'circus-circus';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Mystery Hunt is like a circus. For example,</FlavorText>
        <div className="class-0">
          <a
            className={cx('class-1', NO_COPY_CLASS)}
            href="https://devjoe.appspot.com/huntindex/index/keywords.html"
          ></a>
          <SheetableImage alt="" src={image0} title="" />
        </div>
        <div className="class-0">
          <SheetableImage alt="" src={image1} title="" />
        </div>
        <div className="class-0">
          <SheetableImage alt="" src={image2} title="" />
        </div>
        <div className="class-0">
          <SheetableImage alt="" src={image3} title="" />
        </div>
        <div className="class-0">
          <SheetableImage alt="" src={image4} title="" />
        </div>
        <div className="class-0">
          <SheetableImage alt="" src={image5} title="" />
        </div>
      </div>

      <style jsx global>{`
        .class-0 {
          position: relative;
          width: fit-content;
        }

        .class-1 {
          position: absolute;
          left: 45.221%;
          top: 93.316%;
          width: 15.993%;
          height: 4.113%;
          transform: translate(-50%, 0);
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
