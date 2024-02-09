import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'rated-g';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p className="text-center">
          THE FOLLOWING <b>PUZZLE</b> HAS BEEN APPROVED FOR
          <br />
          <b>ALL AUDIENCES</b>
          <br />
          BY THE MYSTERY PUZZLE ASSOCIATION OF AMERICA
        </p>
        <ul className="list-none pl-0 text-center">
          <li>13207 (3)</li>
          <li>5312 (2)</li>
          <li>5797 (1)</li>
          <li>20989 (2)</li>
          <li>5630 (3)</li>
          <li>21204 (3)</li>
          <li>28596 (1)</li>
          <li>19556 (2)</li>
          <li>31597 (2)</li>
          <li>32454 (1)</li>
          <li>289 (1)</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
