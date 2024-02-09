import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'monsters';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Align everything three by three by three, like a good Paladin from a
          forgotten realm would.
        </FlavorText>
        <ul>
          <li>A missing part, as in a manuscript</li>
          <li>Christmas carol</li>
          <li>Cloistered woman</li>
          <li>Eggy holiday drink</li>
          <li>Fib</li>
          <li>Flavoring for some gin</li>
          <li>Four plus five</li>
          <li>Gear tooth</li>
          <li>Like a bug in a rug</li>
          <li>Like the ranger who wore a black domino mask</li>
          <li>Location for events</li>
          <li>Making an unreturnable serve</li>
          <li>Miler Sebastian</li>
          <li>Opposite of day</li>
          <li>Opposite of pro</li>
          <li>Section of a cut tree trunk</li>
          <li>Sheltered side of a hill (Scottish)</li>
          <li>Signal to speak one's part</li>
          <li>Sister's daughter</li>
          <li>Slipperier, in winter, perhaps</li>
          <li>Something taboo</li>
          <li>Stogie</li>
          <li>The dryer screen collects it</li>
          <li>The moon personified</li>
          <li>This is one</li>
          <li>Type of nut that secures a wheel</li>
          <li>Visible radiation</li>
        </ul>
        <p>
          Filth Imp, Kobold, Mummy, Pixie, Argos, Octon, Mud Slaad, Buraq,
          Moon-horse
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
