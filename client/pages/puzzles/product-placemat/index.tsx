import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/product-placemat/0.png';
import image1 from 'assets/puzzles/product-placemat/1.png';
import image2 from 'assets/puzzles/product-placemat/2.png';
import image3 from 'assets/puzzles/product-placemat/3.png';
import image4 from 'assets/puzzles/product-placemat/4.png';
import image5 from 'assets/puzzles/product-placemat/5.png';
import image6 from 'assets/puzzles/product-placemat/6.png';
import image7 from 'assets/puzzles/product-placemat/7.png';
import image8 from 'assets/puzzles/product-placemat/8.png';
import image9 from 'assets/puzzles/product-placemat/9.png';
import image10 from 'assets/puzzles/product-placemat/10.png';
import image11 from 'assets/puzzles/product-placemat/11.png';
import image12 from 'assets/puzzles/product-placemat/12.png';
import image13 from 'assets/puzzles/product-placemat/13.png';

const SLUG = 'product-placemat';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          This tasting menu was flagged for being too refined. Well, you think,
          "at least none of these pairings will end up on my plate!"
        </FlavorText>
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image2}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image3}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image4}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image5}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image6}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image7}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image8}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image9}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image10}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image11}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <SheetableImage
            alt=""
            src={image12}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
          <SheetableImage
            alt=""
            src={image13}
            title=""
            className="max-h-[200px] m-4 inline-block"
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
