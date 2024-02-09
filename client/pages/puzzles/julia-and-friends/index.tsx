import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/julia-and-friends/0.png';
import image1 from 'assets/puzzles/julia-and-friends/1.png';
import image2 from 'assets/puzzles/julia-and-friends/2.png';
import image3 from 'assets/puzzles/julia-and-friends/3.png';
import image4 from 'assets/puzzles/julia-and-friends/4.png';
import image5 from 'assets/puzzles/julia-and-friends/5.png';
import image6 from 'assets/puzzles/julia-and-friends/6.png';
import image7 from 'assets/puzzles/julia-and-friends/7.png';
import image8 from 'assets/puzzles/julia-and-friends/8.png';
import image9 from 'assets/puzzles/julia-and-friends/9.png';
import image10 from 'assets/puzzles/julia-and-friends/10.png';
import image11 from 'assets/puzzles/julia-and-friends/11.png';
import image12 from 'assets/puzzles/julia-and-friends/12.png';
import image13 from 'assets/puzzles/julia-and-friends/13.png';
import image14 from 'assets/puzzles/julia-and-friends/14.png';
import image15 from 'assets/puzzles/julia-and-friends/15.png';
import image16 from 'assets/puzzles/julia-and-friends/16.png';
import image17 from 'assets/puzzles/julia-and-friends/17.png';
import image18 from 'assets/puzzles/julia-and-friends/18.png';
import image19 from 'assets/puzzles/julia-and-friends/19.png';
import image20 from 'assets/puzzles/julia-and-friends/20.png';
import image21 from 'assets/puzzles/julia-and-friends/21.png';
import image22 from 'assets/puzzles/julia-and-friends/22.png';
import image23 from 'assets/puzzles/julia-and-friends/23.png';
import image24 from 'assets/puzzles/julia-and-friends/24.png';
import image25 from 'assets/puzzles/julia-and-friends/25.png';
import image26 from 'assets/puzzles/julia-and-friends/26.png';

const SLUG = 'julia-and-friends';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>This production has been manipulated!</FlavorText>
        <div className="flex flex-wrap space-x-2 justify-center">
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image0} title="" />
              Mileages
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image1} title="" />
              Untorn coconut
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image2} title="" />
              Raving guess
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image3} title="" />
              Bright shnook
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image4} title="" />
              Amends when
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image5} title="" />
              Retool incomes
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image6} title="" />
              Rotten smells
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image7} title="" />
              Meteor fighter
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image8} title="" />
              Unslung earmuffs
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image9} title="" />
              Argue aired
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image10} title="" />
              Rough orchestra
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image11} title="" />
              Never
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image12} title="" />
              Cooties
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image13} title="" />
              Walled lane
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image14} title="" />
              Panda writer
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image15} title="" />
              Goons
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image16} title="" />
              Started
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image17} title="" />
              Aortas
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image18} title="" />
              Misuse yams
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image19} title="" />
              Fessed winch
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image20} title="" />
              Idly cleaned
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image21} title="" />
              Fervor
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image22} title="" />
              Muteness
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image23} title="" />
              Eureka
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image24} title="" />
              Bingo
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image25} title="" />
              Brit
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage alt="" src={image26} title="" />
              Flopped peer
            </p>
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
