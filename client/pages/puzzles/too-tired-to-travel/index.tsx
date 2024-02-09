import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image4 from 'assets/puzzles/too-tired-to-travel/4.png';
import image15 from 'assets/puzzles/too-tired-to-travel/15.png';
import image24 from 'assets/puzzles/too-tired-to-travel/24.png';
import image44 from 'assets/puzzles/too-tired-to-travel/44.png';
import image46 from 'assets/puzzles/too-tired-to-travel/46.png';
import image49 from 'assets/puzzles/too-tired-to-travel/49.png';
import image58 from 'assets/puzzles/too-tired-to-travel/58.png';
import image59 from 'assets/puzzles/too-tired-to-travel/59.png';
import image73 from 'assets/puzzles/too-tired-to-travel/73.png';
import image91 from 'assets/puzzles/too-tired-to-travel/91.png';
import image117 from 'assets/puzzles/too-tired-to-travel/117.png';
import image123 from 'assets/puzzles/too-tired-to-travel/123.png';
import image138 from 'assets/puzzles/too-tired-to-travel/138.png';
import image159 from 'assets/puzzles/too-tired-to-travel/159.png';
import image174 from 'assets/puzzles/too-tired-to-travel/174.png';
import image179 from 'assets/puzzles/too-tired-to-travel/179.png';
import image180 from 'assets/puzzles/too-tired-to-travel/180.png';
import image184 from 'assets/puzzles/too-tired-to-travel/184.png';
import image187 from 'assets/puzzles/too-tired-to-travel/187.png';
import image189 from 'assets/puzzles/too-tired-to-travel/189.png';
import image194 from 'assets/puzzles/too-tired-to-travel/194.png';

const SLUG = 'too-tired-to-travel';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          When it comes to a sustainable way forward, there is only one brand
          you trust.
        </FlavorText>

        <style jsx>{`
          div.group {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-left: -1rem;
          }
          div.tires {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
          }
        `}</style>

        <div className="space-y-4">
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image15}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image24}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image24}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image24}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image24}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image24}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image44}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image49}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image44}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image49}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image49}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image49}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image117}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image117}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image73}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image44}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image91}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image184}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image184}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image58}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image117}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image117}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image123}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image4}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image138}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image159}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image174}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image179}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image180}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image59}
                title=""
              />
            </div>
          </div>
          <hr />
          <div className="group [&_img]:my-1">
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image184}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image187}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image189}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image49}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image194}
                title=""
              />
            </div>
            <div className="tires space-x-1">
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
              <SheetableImage
                className="h-[80px]"
                alt=""
                src={image46}
                title=""
              />
            </div>
          </div>
          <hr />
        </div>

        <p>
          <b>
            <i>Directions</i>
          </b>
        </p>
        <ol className="pl-5 sm:pl-10 space-y-2">
          <li>
            Go to the red stone museum. As you leave, take the road traveling
            north along the river bank just until you pass a small park with a
            weird sculpture. Refuel.
          </li>
          <li>
            Rest a bit at the famous ruined temple. Then head south andtake the
            numbered highway going southwest. When the road ends, exit to the
            right. Go through the roundabout and just a bit more. Refuel.
          </li>
          <li>
            Enroll at the public university with a school of medicine and
            dentistry. From here, take the numbered road just south going
            eastward. Switch to the road with the next consecutive number, this
            time going north. Take the last exit crossing the canal and go
            parallel to the highway. Take a right after passing the bus stop E
            (there should be a recording studio on your left as you turn). Go
            until you reach the river. Refuel.
          </li>
          <li>
            Enjoy the botanical garden for a bit. Then take the road going west
            and cross the bridge. Then follow the tunnel to cross another bridge
            and continue until the old town is behind you. At the five-way
            roundabout, go south along the major road. Exit after the cemetery
            and continue going southeast. As the road turns, continue northeast
            just past the small park. Refuel.
          </li>
          <li>
            Now visit the largest park. When done, take the exit closest to the
            amusement park and travel northeast on the numbered road. Go east at
            the roundabout and then a left following the big square. Go
            straight, pass a bus depot and take a right after passing a
            government building. There will be a museum and then a hospital to
            your left. Follow the road until it ends, then take a left and an
            immediate right. Go through another roundabout and go for about
            three blocks and take a right just before the playground. Go for
            about a block and a half. Refuel.
          </li>
          <li>
            ~take a short break here~ When rested, go to the national museum.
            After, drive west along the park and take the first left on the
            numbered road. Go past the garden with the pretty bridge. Go two
            more blocks. Refuel.
          </li>
          <li>
            Start from the museum with three ships. Take the only numbered road
            going east. Continue past the art museum and the fortress. Get off
            the numbered road right before the underwater passand turn left -
            you've got no choice, really. Take the first left and an immediate
            right. There is a historic building just ahead on the left as you
            turn. Again take the first left, and this time the second right. Go
            two blocks, passing a collection of mini bottles, and then a final
            left. Refuel.
          </li>
          <li>
            Travel down along the river starting at the landmark art museum. As
            you pass the second island, take a left at the boulevard named after
            a monarch. Go around the plaza and head east. Turn right (there will
            be a video game store on your left). Take a right on the first major
            four-way intersection and take the first left to go south. Go a
            couple of blocks. Refuel.
          </li>
          <li>
            After visiting the compact, really old cathedral, take the road
            going east. Take a left at the first 4-way intersection and you are
            almost there. Refuel.
          </li>
          <li>
            Rest at the park while admiring the bridge, then exit it using the
            numbered road going east. You don't need to go far - take a right
            just before Chelsea Inn and go a bit further. Refuel.
          </li>
          <li>
            Start at the largest palace. Leave the park at the exit closest to
            the museum of modern art and go south along the park. Take a left at
            the first large two-way road. Go for about a block and a half. This
            is your final refuel - you're done!
          </li>
        </ol>
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
