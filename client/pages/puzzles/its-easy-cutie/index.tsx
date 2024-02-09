import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'its-easy-cutie';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none pl-0">
          <li>Woo (5)</li>
          <li>Louse egg (3)</li>
          <li>Tiny (6)</li>
          <li>Soothing ointment (4)</li>
          <li>Cap (3)</li>
          <li>In all (5)</li>
          <li>Fire or rear (3)</li>
          <li>Stick one's bottom lip out (4)</li>
          <li>Thick or stupid (5)</li>
          <li>Interlock or the fabric of a net (4)</li>
          <li>Weed whacker (6)</li>
          <li>Regarded (3)</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
