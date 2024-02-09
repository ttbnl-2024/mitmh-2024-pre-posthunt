import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'relay-event';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <p>
          <b>Sala de Puerto Rico (Stratton Student Center) </b>
          <br />
          Saturday Jan 13th, starting at 10:15AM
          <br />
          <br />
          Send 1&ndash;2 of your more competitive team members, who consider
          themselves nimble in body and mind.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
