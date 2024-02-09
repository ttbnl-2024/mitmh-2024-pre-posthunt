import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'job-center';

// prettier-ignore
const ENUMS: [number[] | string, number[]][] = [
  [[8, 5],       [2]],
  [[3, 2, 4],    [3]],
  ["5 5 4.",     [1]],
  [[4, 4, 7],    [5]],
  [[3, 12],      [12]],
  [[9],          [4]],
  [[5],          [3]],
  [[3, 7, 5],    [11]],
  [[4, 3, 3],    [3]],
  [[8, 3],       [4]],
  [[5, 2, 6],    [8]],
  [[13],         [10]],
  [[3, 4, 5],    [7]],
  [[10],         [9]],
  [[5, 2, 3, 4], [3]],
]

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Because you can't always be a spy or a superhero...
        </FlavorText>
        <div className="prefer-2-col gap-y-4">
          <ul className="list-none pl-0">
            <li>Steve Buscemi</li>
            <li>Robert Carlyle</li>
            <li>George Clooney</li>
            <li>Bryan Cranston</li>
            <li>Matt Damon</li>
            <li>Emilio Estevez</li>
            <li>John Goodman</li>
            <li>Tom Hanks</li>
            <li>Bob Hoskins</li>
            <li>Kevin Costner</li>
            <li>Daniel Day-Lewis</li>
            <li>Keanu Reeves</li>
            <li>Kurt Russell</li>
            <li>Sylvester Stallone</li>
            <li>Robin Williams</li>
          </ul>
          <ul className="list-none pl-0">
            <li>Boat Cleaner</li>
            <li>Butcher</li>
            <li>Car Salesman</li>
            <li>Carpenter</li>
            <li>Exterminator</li>
            <li>Farmer</li>
            <li>Fisherman</li>
            <li>Garbage Man</li>
            <li>Geologist</li>
            <li>Janitor</li>
            <li>Mechanic</li>
            <li>Plumber</li>
            <li>School Bus Driver</li>
            <li>Steelworker</li>
            <li>Truck Driver</li>
          </ul>
        </div>
        <br className={cx(HIDDEN_CLASS)} />

        {ENUMS.map(([blanks, idxs], key) => {
          return <IndexedBlank label={blanks} idxs={idxs} key={key} />;
        })}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
