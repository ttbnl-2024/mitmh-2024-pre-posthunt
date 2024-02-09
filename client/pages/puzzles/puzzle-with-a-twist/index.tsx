import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/puzzle-with-a-twist/0.png';
import image1 from 'assets/puzzles/puzzle-with-a-twist/1.png';
import image2 from 'assets/puzzles/puzzle-with-a-twist/2.png';
import image3 from 'assets/puzzles/puzzle-with-a-twist/3.png';
import image4 from 'assets/puzzles/puzzle-with-a-twist/4.png';
import image5 from 'assets/puzzles/puzzle-with-a-twist/5.png';
import image6 from 'assets/puzzles/puzzle-with-a-twist/6.png';
import image7 from 'assets/puzzles/puzzle-with-a-twist/7.png';
import image8 from 'assets/puzzles/puzzle-with-a-twist/8.png';
import image9 from 'assets/puzzles/puzzle-with-a-twist/9.png';
import image10 from 'assets/puzzles/puzzle-with-a-twist/10.png';
import image11 from 'assets/puzzles/puzzle-with-a-twist/11.png';
import image12 from 'assets/puzzles/puzzle-with-a-twist/12.png';

const SLUG = 'puzzle-with-a-twist';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          What Mystery Hunt needs is more 'What's Wrong With This Picture?'
          puzzles.
        </FlavorText>
        <h3>Examples</h3>
        <p>
          <SheetableImage alt="" src={image0} title="" />
          <br />
          <SheetableImage alt="" src={image1} title="" />
          <br />
          <SheetableImage alt="" src={image2} title="" />
          <br />
          <SheetableImage alt="" src={image3} title="" />
          <br />
          <SheetableImage alt="" src={image4} title="" />
          <br />
          <SheetableImage alt="" src={image5} title="" />
        </p>
        <h3>Exercises</h3>
        <p>
          <SheetableImage alt="" src={image6} title="" />
          <br />
          <SheetableImage alt="" src={image7} title="" />
          <br />
          <SheetableImage alt="" src={image8} title="" />
          <br />
          <SheetableImage alt="" src={image9} title="" />
          <br />
          <SheetableImage alt="" src={image10} title="" />
          <br />
          <SheetableImage alt="" src={image11} title="" />
          <br />
          <SheetableImage alt="" src={image12} title="" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
