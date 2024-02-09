import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'science-event';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <p>
          <b>Lobdell Dining Hall (Stratton Student Center)</b>
          <br />
          Saturday Jan 13th, starting at 2PM
          <br />
          <br />
          Send 1 team member who has good manual dexterity and is good with
          colors, for a science experiment (participants must be 18+ and will be
          required to sign a liability waiver).
        </p>
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
