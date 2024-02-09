import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/arts-and-crafts/0.png';
import image1 from 'assets/puzzles/arts-and-crafts/1.png';
import image2 from 'assets/puzzles/arts-and-crafts/2.png';
import image3 from 'assets/puzzles/arts-and-crafts/3.png';
import image4 from 'assets/puzzles/arts-and-crafts/4.png';
import gridspdf from 'assets/puzzles/arts-and-crafts/grids.pdf';

const SLUG = 'arts-and-crafts';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Steve has some bits of neatly folded papers.</FlavorText>
        <InfoIcon>
          <a href={gridspdf}>Grids available as a pdf.</a>
        </InfoIcon>

        <div className="prefer-2-col gap-y-6">
          <ol className="max-w-1/2">
            <li>1 1 1 1</li>
            <li>1 1 1 1 1</li>
            <li>2∨1∧11</li>
            <li>11∧3∧1∧2∨2</li>
            <li>2∧13∧2 1 1∨2</li>
            <li>2∧13∧2 1 1∨2</li>
            <li>2∧13∧2 1 1∨2</li>
            <li>2∧10 2 1</li>
            <li>10 1 1</li>
            <li>1 1 1 1 1 1∧1∧1</li>
            <li>1 1 1 1 1∧1∧1</li>
            <li>1 1 1 1 1∧1∧1</li>
            <li>1 1 1 1 1</li>
            <li>1 1 1 1 1</li>
            <li>1 1 1 1</li>
            <li>1∧1∧1 1</li>
            <li>1∧1∧1</li>
            <li>1∧1∧1 4 4</li>
            <li>1∧1∧1 4 4</li>
            <li>1 4∧1 4∧1</li>
            <li>1 1 1</li>
            <li>1∨2∨1 1 1∨2∨1 1 1∨2∨1 1 2</li>
            <li>1∨2∨1 1 1∨2∨1 1 1∨2∨1 1 1</li>
            <li>1∨2∨1 1 1∨2∨1 1 1∨2∨1 1 1</li>
            <li>1∨2∨1 1 1∨2∨1 1 1∨2∨1 1 1</li>
            <li>1∨2∧1∧2∨2∨2∧1∧2∨2∨2∧1∧2</li>
          </ol>
          <ol className="max-w-1/2">
            <li>4 4</li>
            <li>2 4 4</li>
            <li>1 4∧2∧4 5</li>
            <li>1 4∧1 5</li>
            <li>1∧5∧1 4 1</li>
            <li>3∧5∧2∧4∨1∨4∧1∧4∧1∨1</li>
            <li>1∧5∧1 4 1</li>
            <li>1∧5∧1 5</li>
            <li>3∧5∧2∧4∨1 1∧1∧1 5</li>
            <li>1∧5∧1 1∧1∧1 5</li>
            <li>1∧5∧1 1∧1∧1 5</li>
            <li>3∧5∧2∧4∨1 1∧1∧1 1</li>
            <li>1∧4 1∧4∧1∨1</li>
            <li>1∧4 1</li>
            <li>3∧4 5</li>
            <li>4∧3 1∧1∧1 5</li>
            <li>4∧1 1∧1∧1 5</li>
            <li>1 3 1∧1∧1 5</li>
            <li>1∨1∧3∧1∧3∨1∨3 1∧1∧1 1</li>
            <li>1 3 1∧4∧1∨1</li>
            <li>4 1</li>
            <li>4 5</li>
            <li>4 1</li>
          </ol>
        </div>
        <br />
        <div className="space-y-2">
          <SheetableImage alt="" src={image0} title="" />
          <SheetableImage alt="" src={image1} title="" />
          <SheetableImage alt="" src={image2} title="" />
          <SheetableImage alt="" src={image3} title="" />
          <SheetableImage alt="" src={image4} title="" />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
