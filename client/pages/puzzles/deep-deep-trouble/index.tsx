import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/deep-deep-trouble/0.png';
import image1 from 'assets/puzzles/deep-deep-trouble/1.png';
import image2 from 'assets/puzzles/deep-deep-trouble/2.png';
import image3 from 'assets/puzzles/deep-deep-trouble/3.png';
import image4 from 'assets/puzzles/deep-deep-trouble/4.png';
import image5 from 'assets/puzzles/deep-deep-trouble/5.png';
import image6 from 'assets/puzzles/deep-deep-trouble/6.png';
import image7 from 'assets/puzzles/deep-deep-trouble/7.png';

const SLUG = 'deep-deep-trouble';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Maybe I wouldn't get into so much trouble if I got a hobby? (Besides
          reading webcomics and watching cartoons, I mean)
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <p>
          <SheetableImage alt="" src={image0} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image1} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image2} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image3} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image4} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image5} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image6} title="" />
        </p>
        <p>
          <SheetableImage alt="" src={image7} title="" />
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          <Table>
            <tbody>
              <tr>
                <td>My lame ass-excuses Excuse nothing</td>
              </tr>
              <tr>
                <td>Replying in Poetic verse is wrong</td>
              </tr>
              <tr>
                <td>Hot-wiring car Ignitions during sports is unpatriotic</td>
              </tr>
              <tr>
                <td>I won't Switch and Skate simultaneously</td>
              </tr>
              <tr>
                <td>It is wrong to mess with minds Of future doctors</td>
              </tr>
              <tr>
                <td>I won't surprise preoccupied police Detectives anymore</td>
              </tr>
              <tr>
                <td>I won't shame electric car Enthusiasts with Hummers</td>
              </tr>
              <tr>
                <td>There's nothing Sexy about cucumbers or eggplants</td>
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
