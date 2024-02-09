import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/harrahs/0.png';
import image1 from 'assets/puzzles/harrahs/1.png';
import image2 from 'assets/puzzles/harrahs/2.png';
import image3 from 'assets/puzzles/harrahs/3.png';
import image4 from 'assets/puzzles/harrahs/4.png';
import image5 from 'assets/puzzles/harrahs/5.png';
import image6 from 'assets/puzzles/harrahs/6.png';
import image7 from 'assets/puzzles/harrahs/7.png';
import image8 from 'assets/puzzles/harrahs/8.png';
import image9 from 'assets/puzzles/harrahs/9.png';
import image10 from 'assets/puzzles/harrahs/10.png';
import image11 from 'assets/puzzles/harrahs/11.png';
import image12 from 'assets/puzzles/harrahs/12.png';
import image13 from 'assets/puzzles/harrahs/13.png';
import image14 from 'assets/puzzles/harrahs/14.png';
import image15 from 'assets/puzzles/harrahs/15.png';
import image16 from 'assets/puzzles/harrahs/16.png';
import image17 from 'assets/puzzles/harrahs/17.png';
import image18 from 'assets/puzzles/harrahs/18.png';
import image19 from 'assets/puzzles/harrahs/19.png';
import image20 from 'assets/puzzles/harrahs/20.png';
import image21 from 'assets/puzzles/harrahs/21.png';
import image22 from 'assets/puzzles/harrahs/22.png';
import image23 from 'assets/puzzles/harrahs/23.png';
import image24 from 'assets/puzzles/harrahs/24.png';
import image25 from 'assets/puzzles/harrahs/25.png';

const SLUG = 'harrahs';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>"Argh! Stop being so silly!"</FlavorText>

        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click each image to open full size.
        </InfoIcon>
        <div className="max-w-lg space-y-4 mx-auto">
          <div>
            <a href={image0}>
              <SheetableImage alt="" src={image0} title="" />
            </a>
          </div>
          <div>
            <a href={image1}>
              <SheetableImage alt="" src={image1} title="" />
            </a>
          </div>
          <div>
            <a href={image2}>
              <SheetableImage alt="" src={image2} title="" />
            </a>
          </div>
          <div>
            <a href={image3}>
              <SheetableImage alt="" src={image3} title="" />
            </a>
          </div>
          <div>
            <a href={image4}>
              <SheetableImage alt="" src={image4} title="" />
            </a>
          </div>
          <div>
            <a href={image5}>
              <SheetableImage alt="" src={image5} title="" />
            </a>
          </div>
          <div>
            <a href={image6}>
              <SheetableImage alt="" src={image6} title="" />
            </a>
          </div>
          <div>
            <a href={image7}>
              <SheetableImage alt="" src={image7} title="" />
            </a>
          </div>
          <div>
            <a href={image8}>
              <SheetableImage alt="" src={image8} title="" />
            </a>
          </div>
          <div>
            <a href={image9}>
              <SheetableImage alt="" src={image9} title="" />
            </a>
          </div>
          <div>
            <a href={image10}>
              <SheetableImage alt="" src={image10} title="" />
            </a>
          </div>
          <div>
            <a href={image11}>
              <SheetableImage alt="" src={image11} title="" />
            </a>
          </div>
          <div>
            <a href={image12}>
              <SheetableImage alt="" src={image12} title="" />
            </a>
          </div>
          <div>
            <a href={image13}>
              <SheetableImage alt="" src={image13} title="" />
            </a>
          </div>
          <div>
            <a href={image14}>
              <SheetableImage alt="" src={image14} title="" />
            </a>
          </div>
          <div>
            <a href={image15}>
              <SheetableImage alt="" src={image15} title="" />
            </a>
          </div>
          <div>
            <a href={image16}>
              <SheetableImage alt="" src={image16} title="" />
            </a>
          </div>
          <div>
            <a href={image17}>
              <SheetableImage alt="" src={image17} title="" />
            </a>
          </div>
          <div>
            <a href={image18}>
              <SheetableImage alt="" src={image18} title="" />
            </a>
          </div>
          <div>
            <a href={image19}>
              <SheetableImage alt="" src={image19} title="" />
            </a>
          </div>
          <div>
            <a href={image20}>
              <SheetableImage alt="" src={image20} title="" />
            </a>
          </div>
          <div>
            <a href={image21}>
              <SheetableImage alt="" src={image21} title="" />
            </a>
          </div>
          <div>
            <a href={image22}>
              <SheetableImage alt="" src={image22} title="" />
            </a>
          </div>
          <div>
            <a href={image23}>
              <SheetableImage alt="" src={image23} title="" />
            </a>
          </div>
          <div>
            <a href={image24}>
              <SheetableImage alt="" src={image24} title="" />
            </a>
          </div>
          <div>
            <a href={image25}>
              <SheetableImage alt="" src={image25} title="" />
            </a>
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
