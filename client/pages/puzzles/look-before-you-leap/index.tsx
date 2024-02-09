import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Borders } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'look-before-you-leap';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          ...lest something be there - or gone - when you land.
        </FlavorText>
        <p>
          Taxonomy:
          <ul className="list-none pl-0">
            <li>hroepi uboss</li>
            <li>rchyephal oineats</li>
            <li>Diolosss mntan</li>
            <li>Mereryne verdei</li>
            <li>Praematobu pecloase</li>
            <li>seudnohiru rlin</li>
            <li>Silrtoia uturs</li>
            <li>phenohyhu plolini</li>
          </ul>
        </p>
        <Crossword
          // prettier-ignore
          data={[
            [3,7,2,4,8,1,9,6,10,5],
            [7,4,6,5,3,9,1,8,10,2],
            [6,3,1,2,7,10,9,5,4,8],
            [5,6,7,8,10,9,3,1,4,2],
            [8,6,1,5,9,3,7,10,2,4],
            [5,1,8,4,6,2,9,10,3,7],
            [5,8,1,2,3,7,9,4,10,6],
            [8,10,5,3,6,1,4,9,7,2],
          ]}
          borders={Array(8)
            .fill(null)
            .map((_, i) =>
              Array(10)
                .fill(null)
                .map((_) => (i == 4 ? Borders.T : ''))
            )}
          tableClass="my-4"
        />
        <ul className="list-none pl-0 space-y-3 sm:space-y-0">
          <li>
            On the 26th step of your journey, what do you see immediately behind
            you?
          </li>
          <li>
            On the 10th step of your journey, what do you see immediately to
            your left?
          </li>
          <li>
            On the 24th step of your journey, where is it unsafe to step next?
          </li>
          <li>On the 7th step of your journey, where is the next safe step?</li>
          <li>
            On the 6th step of your journey, where is it unsafe to step next?
          </li>
          <li>
            On the 25th step of your journey, where is the next safe step?
          </li>
        </ul>
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
