import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/0.png';
import image1 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/1.png';
import image2 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/2.png';
import image3 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/3.png';
import image4 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/4.png';
import image5 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/5.png';
import image6 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/6.png';
import image7 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/7.png';
import image8 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/8.png';
import image9 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/9.png';
import image10 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/10.png';
import image11 from 'assets/puzzles/99-percent-of-mystery-hunt-teams-cannot-solve-this/11.png';

const SLUG = '99-percent-of-mystery-hunt-teams-cannot-solve-this';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>Some of the math is wrong, IMO.</FlavorText>
        <div className="space-y-2">
          <SheetableImage className="mx-auto" alt="" src={image0} title="" />
          <SheetableImage className="mx-auto" alt="" src={image1} title="" />
          <SheetableImage className="mx-auto" alt="" src={image2} title="" />
          <SheetableImage className="mx-auto" alt="" src={image3} title="" />
          <SheetableImage className="mx-auto" alt="" src={image4} title="" />
          <SheetableImage className="mx-auto" alt="" src={image5} title="" />
          <SheetableImage className="mx-auto" alt="" src={image6} title="" />
          <SheetableImage className="mx-auto" alt="" src={image7} title="" />
          <SheetableImage className="mx-auto" alt="" src={image8} title="" />
          <SheetableImage className="mx-auto" alt="" src={image9} title="" />
          <SheetableImage className="mx-auto" alt="" src={image10} title="" />
          <SheetableImage className="mx-auto" alt="" src={image11} title="" />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
