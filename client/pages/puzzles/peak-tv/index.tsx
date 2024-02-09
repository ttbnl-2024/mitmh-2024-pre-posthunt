import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/peak-tv/0.png';
import image1 from 'assets/puzzles/peak-tv/1.png';
import image2 from 'assets/puzzles/peak-tv/2.png';
import image3 from 'assets/puzzles/peak-tv/3.png';
import image4 from 'assets/puzzles/peak-tv/4.png';
import image5 from 'assets/puzzles/peak-tv/5.png';
import image6 from 'assets/puzzles/peak-tv/6.png';
import image7 from 'assets/puzzles/peak-tv/7.png';
import image8 from 'assets/puzzles/peak-tv/8.png';
import image9 from 'assets/puzzles/peak-tv/9.png';
import image10 from 'assets/puzzles/peak-tv/10.png';
import image11 from 'assets/puzzles/peak-tv/11.png';
import image12 from 'assets/puzzles/peak-tv/12.png';
import image13 from 'assets/puzzles/peak-tv/13.png';
import image14 from 'assets/puzzles/peak-tv/14.png';
import image15 from 'assets/puzzles/peak-tv/15.png';
import image16 from 'assets/puzzles/peak-tv/16.png';
import image17 from 'assets/puzzles/peak-tv/17.png';
import image18 from 'assets/puzzles/peak-tv/18.png';
import image19 from 'assets/puzzles/peak-tv/19.png';
import image20 from 'assets/puzzles/peak-tv/20.png';
import image21 from 'assets/puzzles/peak-tv/21.png';
import image22 from 'assets/puzzles/peak-tv/22.png';
import image23 from 'assets/puzzles/peak-tv/23.png';
import image24 from 'assets/puzzles/peak-tv/24.png';
import image25 from 'assets/puzzles/peak-tv/25.png';
import image26 from 'assets/puzzles/peak-tv/26.png';
import image27 from 'assets/puzzles/peak-tv/27.png';
import image28 from 'assets/puzzles/peak-tv/28.png';
import image29 from 'assets/puzzles/peak-tv/29.png';
import image30 from 'assets/puzzles/peak-tv/30.png';
import image31 from 'assets/puzzles/peak-tv/31.png';
import image32 from 'assets/puzzles/peak-tv/32.png';
import image33 from 'assets/puzzles/peak-tv/33.png';

const SLUG = 'peak-tv';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          As is characteristic today, there is just too much to watch!
        </FlavorText>
        <div className="flex flex-wrap justify-center items-center [&>img]:p-1">
          <SheetableImage alt="" src={image0} title="" />
          <SheetableImage alt="" src={image1} title="" />
          <SheetableImage alt="" src={image2} title="" />
          <SheetableImage alt="" src={image3} title="" />
          <SheetableImage alt="" src={image4} title="" />
          <SheetableImage alt="" src={image5} title="" />
          <SheetableImage alt="" src={image6} title="" />
          <SheetableImage alt="" src={image7} title="" />
          <SheetableImage alt="" src={image8} title="" />
          <SheetableImage alt="" src={image9} title="" />
          <SheetableImage alt="" src={image10} title="" />
          <SheetableImage alt="" src={image11} title="" />
          <SheetableImage alt="" src={image12} title="" />
          <SheetableImage alt="" src={image13} title="" />
          <SheetableImage alt="" src={image14} title="" />
          <SheetableImage alt="" src={image15} title="" />
          <SheetableImage alt="" src={image16} title="" />
          <SheetableImage alt="" src={image17} title="" />
          <SheetableImage alt="" src={image18} title="" />
          <SheetableImage alt="" src={image19} title="" />
          <SheetableImage alt="" src={image20} title="" />
          <SheetableImage alt="" src={image21} title="" />
        </div>
        <hr className="my-4" />
        <div className="flex flex-wrap justify-center items-center [&>img]:p-1">
          <SheetableImage alt="" src={image22} title="" />
          <SheetableImage alt="" src={image23} title="" />
          <SheetableImage alt="" src={image24} title="" />
          <SheetableImage alt="" src={image25} title="" />
          <SheetableImage alt="" src={image26} title="" />
          <SheetableImage alt="" src={image27} title="" />
          <SheetableImage alt="" src={image28} title="" />
          <SheetableImage alt="" src={image29} title="" />
          <SheetableImage alt="" src={image30} title="" />
          <SheetableImage alt="" src={image31} title="" />
          <SheetableImage alt="" src={image32} title="" />
        </div>
        <p className={cx(NO_COPY_CLASS, 'text-center mt-10')}>
          (&nbsp;
          <SheetableImage
            className="inline-block"
            alt=""
            src={image33}
            title=""
          />
          &nbsp;)
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          <br />
          <Table noBorder>
            <tbody>
              <tr>
                <td>(</td>
                <td>
                  <SheetableImage
                    className="inline-block"
                    alt=""
                    src={image33}
                    title=""
                  />
                </td>
                <td>)</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
