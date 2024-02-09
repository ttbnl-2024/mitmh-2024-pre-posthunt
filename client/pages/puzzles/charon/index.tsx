import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';

import image0 from 'assets/puzzles/charon/0.png';

const SLUG = 'charon';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const water = (
    <span>
      <img
        alt="waves"
        src={image0}
        title="waves"
        className={cx(NO_COPY_CLASS)}
      />
      <span className={cx(HIDDEN_CLASS)}>〰️</span>
    </span>
  );
  const gridData = [
    ['', '', water, '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', water, '', ''],
  ];
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Charon has taken you across the Phlegethon but seems unwilling to
          go any farther. Maybe you could find something along the banks of
          the other rivers to change their mind?
        </FlavorText>
        <Grid data={gridData} className="charon-grid"></Grid>
      </div>

      <style jsx global>{`
        .charon-grid table {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
