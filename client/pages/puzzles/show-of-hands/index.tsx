import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'show-of-hands';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none pl-0 space-y-3 sm:space-y-0">
          <li>MEGLODG, BETHCABI, AMYHOTE</li>
          <li>FUNCTIONA, MANAGEB, WORKC</li>
          <li>ELMI, OAKX, ASHC</li>
          <li>ENFORTY, ACKTHIRTY, UEENFIFTEEN (2 wds)</li>
          <li>RROTWOK, RNIPPOT, RSNIPSKILLET</li>
          <li>SCRAIN, CAENNYWEIGHT, KUNCE</li>
          <li>PULLOH, HITCHEN, HAULEM</li>
          <li>TAYANKE, UPSILOYANKE, PHDIAMONDBAC</li>
          <li>KYLES, ERICMIN, KENNYHR</li>
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
