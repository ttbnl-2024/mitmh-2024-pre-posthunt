import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/spacing-out/0.png';

const SLUG = 'spacing-out';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          There's a bit of cross over here... sometimes only in 2D!
        </FlavorText>
        <div className="space-y-6">
          <ul>
            <li>Lair</li>
            <li>Fidget spinner, e.g.</li>
            <li>Torii</li>
            <li>Cabaret host, for short</li>
          </ul>
          <ul>
            <li>Freudian concept</li>
            <li>Face card</li>
            <li>As</li>
          </ul>
          <ul>
            <li>Harbor</li>
            <li>Title</li>
            <li>Start of "the season"?</li>
          </ul>
          <ul>
            <li>Nabokov novel</li>
            <li>Exists</li>
            <li>Damage</li>
          </ul>
          <ul>
            <li>Dapper one</li>
            <li>Jacket material</li>
            <li>Immature sarcastic retort!</li>
            <li>52nd element</li>
          </ul>
          <ul>
            <li>Reza play</li>
            <li>Auto</li>
            <li>Sgt's superior officer</li>
          </ul>
          <ul>
            <li>Grandmother, familiarly</li>
            <li>Tourist, often</li>
          </ul>
          <ul>
            <li>Mil. rank</li>
            <li>Thousand</li>
            <li>___ culpa</li>
            <li>Persian flute</li>
          </ul>
          <ul>
            <li>Scooby follower?</li>
            <li>99th element</li>
            <li>Solo adventurer?</li>
            <li>Blockage</li>
          </ul>
          <ul>
            <li>Egyptian God</li>
            <li>Face or fort beginning?</li>
            <li>Hades</li>
            <li>Karaoke accessory</li>
            <li>Either</li>
          </ul>
          <ul>
            <li>College HS class</li>
            <li>German self?</li>
            <li>Kent's lover</li>
            <li>Fortify</li>
          </ul>
        </div>
        <p>
          <SheetableImage alt="" src={image0} title="" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
