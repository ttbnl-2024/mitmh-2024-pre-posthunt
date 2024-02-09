import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/cedar-gardens/0.png';
import image1 from 'assets/puzzles/cedar-gardens/1.png';
import image2 from 'assets/puzzles/cedar-gardens/2.png';
import image3 from 'assets/puzzles/cedar-gardens/3.png';
import image4 from 'assets/puzzles/cedar-gardens/4.png';
import image5 from 'assets/puzzles/cedar-gardens/5.png';
import image6 from 'assets/puzzles/cedar-gardens/6.png';
import image7 from 'assets/puzzles/cedar-gardens/7.png';
import image8 from 'assets/puzzles/cedar-gardens/8.png';
import image9 from 'assets/puzzles/cedar-gardens/9.png';
import image10 from 'assets/puzzles/cedar-gardens/10.png';
import image11 from 'assets/puzzles/cedar-gardens/trees.png';

const SLUG = 'cedar-gardens';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Tree farming has its ups and downs, but this farmer's tree farm is in
          a pretty good state. Visitors always have fun watching as trees grow
          taller and taller - well, at least as long as they're tall enough to
          appreciate it.
        </FlavorText>
        <InfoIcon>Click on each image to open it in a new window.</InfoIcon>
        <p className={cx(NO_COPY_CLASS, 'text-center')}>
          <a href={image0} target="_blank">
            <SheetableImage
              alt=""
              src={image0}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image1} target="_blank">
            <SheetableImage
              alt=""
              src={image1}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image2} target="_blank">
            <SheetableImage
              alt=""
              src={image2}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image3} target="_blank">
            <SheetableImage
              alt=""
              src={image3}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image4} target="_blank">
            <SheetableImage
              alt=""
              src={image4}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image5} target="_blank">
            <SheetableImage
              alt=""
              src={image5}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image6} target="_blank">
            <SheetableImage
              alt=""
              src={image6}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image7} target="_blank">
            <SheetableImage
              alt=""
              src={image7}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image8} target="_blank">
            <SheetableImage
              alt=""
              src={image8}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image9} target="_blank">
            <SheetableImage
              alt=""
              src={image9}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
          <a href={image10} target="_blank">
            <SheetableImage
              alt=""
              src={image10}
              title=""
              className="w-[300px] my-4 inline-block"
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS, 'text-center')}>
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image2}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image3}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image4}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image5}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image6}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image7}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image8}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image9}
            title=""
            className="w-[300px] my-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image10}
            title=""
            className="w-[300px] my-4 inline-block"
          />
        </p>
        <p>
          <a href={image11} target="_blank">
            <SheetableImage alt="" src={image11} title="" className="mx-auto" />
          </a>
        </p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
