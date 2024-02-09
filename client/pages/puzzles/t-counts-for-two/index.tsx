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

import image0 from 'assets/puzzles/t-counts-for-two/0.png';
import image1 from 'assets/puzzles/t-counts-for-two/1.png';
import image2 from 'assets/puzzles/t-counts-for-two/2.png';
import image3 from 'assets/puzzles/t-counts-for-two/3.png';
import image4 from 'assets/puzzles/t-counts-for-two/4.png';
import image5 from 'assets/puzzles/t-counts-for-two/5.png';
import image6 from 'assets/puzzles/t-counts-for-two/6.png';
import image7 from 'assets/puzzles/t-counts-for-two/7.png';
import image8 from 'assets/puzzles/t-counts-for-two/8.png';
import image9 from 'assets/puzzles/t-counts-for-two/9.png';
import image10 from 'assets/puzzles/t-counts-for-two/10.png';
import image11 from 'assets/puzzles/t-counts-for-two/11.png';

const SLUG = 't-counts-for-two';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className={cx(HIDDEN_CLASS)}>232311121</p>
            <p>
              <SheetableImage alt="" src={image0} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>41211121</p>
            <p>
              <SheetableImage alt="" src={image1} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>1121231122</p>
            <p>
              <SheetableImage alt="" src={image2} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>1121114</p>
            <p>
              <SheetableImage alt="" src={image3} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>41113111</p>
            <p>
              <SheetableImage alt="" src={image4} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>1111142</p>
            <p>
              <SheetableImage alt="" src={image5} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>12131131</p>
            <p>
              <SheetableImage alt="" src={image6} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>21111416</p>
            <p>
              <SheetableImage alt="" src={image7} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>212121</p>
            <p>
              <SheetableImage alt="" src={image8} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>1211214</p>
            <p>
              <SheetableImage alt="" src={image9} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>11121165111</p>
            <p>
              <SheetableImage alt="" src={image10} title="" />
            </p>
          </div>
          <div>
            <p className={cx(HIDDEN_CLASS)}>1131811</p>
            <p>
              <SheetableImage alt="" src={image11} title="" />
            </p>
          </div>
        </div>
        <ul className="list-none text-center pl-0 space-y-2 sm:space-y-0">
          <li>2 34 22 14 18 10 32</li>
          <li>4 14 9 38 2 14 20 8 17 16 35</li>
          <li>4 17 12 3 14 28 30 4 33</li>
          <li>6 11 20 10 13 16 7 6 16 5</li>
          <li>6 15 20 12 31 11 7 11 29 </li>
          <li>9 2 17 14 9 8 17 16 4 18 2 16 9 2 17 7 4 17 3 11 </li>
          <li>10 10 4 18 23 11 11 13 9 17</li>
          <li>11 13 20 1 17 9 11 1 11 5 1 14 11</li>
          <li>17 4 17 24 36 2 12 8 10 8</li>
          <li>19 1 7 19 10 8 8 14 31 9</li>
          <li>19 41 23 14 29 30 17 30</li>
          <li>23 14 15 16 14 34 10 3 12 6 14</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
