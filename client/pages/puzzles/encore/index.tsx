import React, { FC, useRef } from 'react';

import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'encore';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          For clarity, various p's have been labeled with brackets.
          <br />
          If a join is unlabelled, assume it refers to the most recent p.
        </p>
        <ul className="list-none pl-0 space-y-2">
          <li>
            R, 5 ds, p[1], 5 ds, p[2], 3 ds, p[3], 6 ds, p[4], 3 ds, p[5], 4 ds,
            p[6], 3 ds, p[7], 3 ds, p[8], 2 ds, p[9], 2 ds, cl r.
          </li>
          <li>Ch, 3 ds, join to p[1], 4 ds, p[A], 4 ds.</li>
          <li>R, 1 ds, p[B], 1 ds, p[C], 1 ds, cl r.</li>
          <li>Ch, 3 ds, p, 3 ds.</li>
          <li>R, 6 ds, cl r.</li>
          <li>Ch, 3 ds, join to p, 3 ds, join to p[B], 3 ds, p, 3 ds.</li>
          <li>R, 6 ds, cl r.</li>
          <li>
            Ch, 3 ds, join to p, 3 ds, join to p[C], 4 ds, join to p[A], 4 ds,
            join to p[1], 2 ds, join to p[2], 25 ds, join to p[2], 2 ds, join to
            p[3], 4 ds, p, 4 ds.
          </li>
          <li>R, 6 ds, cl r.</li>
          <li>Ch, 4 ds, join to p, 4 ds, join to p[3], 8 ds.</li>
          <li>R, 6 ds, cl r.</li>
          <li>Ch, 8 ds, join to p[4], 4 ds, p, 4 ds.</li>
          <li>R, 6 ds, cl r.</li>
          <li>
            Ch, 4 ds, join to p, 4 ds, join to p[4], 2 ds, join to p[5], 5 ds, p,
            3 ds.
          </li>
          <li>R, 6 ds, cl r.</li>
          <li>
            Ch, 10 ds, join to p, 6 ds, join to p[6], 1 ds, join to p[7], 25 ds,
            join to p[7], 2 ds, join to p[8], 3 ds, p[D], 3 ds, p, 5 ds.
          </li>
          <li>R, 6 ds, cl r.</li>
          <li>
            Ch, 14 ds, join to p, 3 ds, join to p[D], 3 ds, join to p[8], 2 ds,
            join to p[9], 7 ds, tighten stitches on ch so it curves slightly, p,
            17 ds, join to p, tie and cut.
          </li>
        </ul>
        <IndexedBlank label="7" showEnum={false} />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
