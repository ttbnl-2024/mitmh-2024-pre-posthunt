import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'transylvanian-math';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          We have been counting for SO many years it MUST be a record... Seven
          Sevens of years ah ah ah
        </FlavorText>
        <p>
          1 2 3 1 2 3 1 3 4 2 1 2 3 4 26 1 2 4 3 4 2478693 1 2 3 1 2 3 3 3 3 1 2
          3 1 2 3 1 2 6 3 1 2 3 1 2 3 1 2 3 72 11 9 46 8 28 60 12 15000 15000 10
          15 5 10 14 16 1 2 3 4 13 5 6 7 8 9 10 11 1 12 13 14 15 10 11 12 13 14
          15 15 1 5 4 1 4 1 3 3 1 3 1 2 2 1 9 2 1 1 1 1 1 1 2 1 1 2 2 3 3 4 1 2
          3 4 1 2 3 4 4 11 1 2 3 4 4 1 2 3 4 3 3 1 4 10 3 10 5 7 3 9 2 16 10 27
          6 1 3 2 1 2 3 4 5 6 2 7 7 7 7 7 7 7 7 7 7 7 4 4 5 3 4 4 4 4 4 4 4 1 2
          3 4 4 4 5 3 4 6 4 4 4 4 4 4 1 2 3 1 2 3 4 5 6 7 8 9 10 10 10 10 10 1 4
          2 3 4 5 6 7 8 9 10 10 1 10 10 10 10 10 10 10 1 2 2 1 2 2 2 2 2 1 2 2 1
          2 5 2 2 2 2 2 2 2 1 2 1 2 2 1 2 2 2 2 1 2 3 2 3 3 1 4 4 5 5 8 5 4 3 2
          1 11 11 11 7 11 11 11 11 11 11 1 2 3 4 5 6 7 8 11 9 10 11 11 11 1 2 3
          1 2 2 1 1 1 1 2 2 1 1000000 1 2 3 1 2 8 2 1 3 4 4 2 8 4 1 1 2 3 4 5 6
          7 8 9 10 11 12 1 2 3 4 5 3 6 7 8 9 10 11 12 12 12 12 1 2 3 4 5 6 7 8 9
          10 11 12 12 12 1 1 1 1 6 2 2 3 3 4 1 2 3 4 15 1 2 3 4 5 1 2 3 4 5 6 1
          2 3 14 4 5 6 7 8 9 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2
          3 4 1 2 3 4 5 1 2 3 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 1 2 3 4 1 2 3 4 1 2
          3 4 1 2 1 2 3 4 16 15 1 2 3 4 1 2 1 2 3 4 1 2 3 4 1 2 3 4 1 2 1 2 3 4
          1 2 3 4 1 2 1 2 3 4 5 6 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 6 2 3 4 5 6 7
          8 8 1 2 3 4 8 5 6 7 8 9 9 9 1 2 3 4 5 6 7 8 9 9 9 9 1 1 2 3 4 5 6 7 8
          9 9 1 2 3 3 1 2 3 4 5 5 1 12 2 3 4 5 6 7 8 9 10 13 10 1 1 2 3 4 5 6 7
          8 9 10 6 1 2 3 8 4 5 6 6 6 6 6 6 6 6 1 2 3 4 5 6 6 6 1 2 3 4 5 6 1 2 3
          4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3
          4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
