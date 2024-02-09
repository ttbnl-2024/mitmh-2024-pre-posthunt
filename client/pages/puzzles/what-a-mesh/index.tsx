import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'what-a-mesh';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none pl-0 space-y-3 sm:space-y-0">
          <li>Caribbean musical style practiced by diamond miners</li>
          <li>Controversial Nobel Prize winner known as mischief-maker</li>
          <li>Fiery object found in the sea</li>
          <li>Greek female spirit of game collection</li>
          <li>Half-brother found in a maze</li>
          <li>Hero of Norse myth about Scotland</li>
          <li>Jötunn father of Pearl</li>
          <li>Mammal described by ancient Californians</li>
          <li>Material farmers use to construct the zodiac</li>
          <li>Moulin Rouge singer thought to kidnap children</li>
          <li>Pacifist animal featured in Penny Lane</li>
          <li>Person who might be known for their friendliness and kindness</li>
          <li>Politician best known as a strong advocate for flood survival</li>
          <li>Primeval goddess of Super Mario</li>
          <li>Shapeshifting creature stylized with punctuation</li>
          <li>Sky god that might be big and bad</li>
          <li>Sometimes parasitic, it might be a warning</li>
          <li>Start of reverse side of '30s children's classic</li>
          <li>Well-known fluke</li>
          <li>White companion of Atilla the Hun</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
