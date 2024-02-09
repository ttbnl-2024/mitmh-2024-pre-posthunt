import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'matchmaking';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>When properly matched, these people all...</FlavorText>
        <div className="flex flex-wrap justify-between gap-4">
          <ul className="list-none pl-4 -indent-4">
            <li className="font-bold">First:</li>
            <li>A MISSING AVIATRIX</li>
            <li>A TIGER PUPPET</li>
            <li>A U.S. STATE WHOSE FLOWER IS THE PEONY</li>
            <li>A "SUPER" MOTHER</li>
            <li>A "NOTORIOUS" SUPREME COURT JUSTICE</li>
          </ul>
          <ul className="list-none pl-4 -indent-4">
            <li className="font-bold">Last:</li>
            <li>A FIXATION (3)</li>
            <li>A "DUCKY" MEMPHIS HOTEL (5)</li>
            <li>A "BELTED" SCOTTISH CATTLE BREED (5)</li>
            <li>A PRESIDENT KNOWN AS "OLD HICKORY" (4)</li>
            <li>A SMALL RENTED FARM (9)</li>
          </ul>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
