import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import { Colors } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'angry';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  let gridData = [
    ['_', '_', '_', 'E', '_', '_', 'J', 'J', 'L', '_', '_', '_'],
    ['_', '_', 'G', 'G', '_', 'J', 'O', 'O', 'E', '_', '_', '_'],
    ['E', 'M', 'E', ' ', 'R', 'A', 'H', 'S', 'E', 'H', 'J', 'E'],
    ['D', 'A', 'O', ' ', 'O', 'C', '_', 'E', 'J', 'E', 'A', 'D'],
    ['W', 'R', 'R', '_', 'B', 'K', '_', '_', ' ', 'N', 'C', ' '],
    ['_', '_', 'G', '_', 'E', '_', '_', '_', '_', 'R', 'K', '_'],
    ['_', '_', 'E', '_', 'R', '_', '_', '_', '_', 'Y', ' ', '_'],
    ['_', '_', '_', '_', 'T', '_', '_', '_', '_', '_', '_', '_'],
  ];
  const gridShading = gridData.map((row, i) =>
    row.map((cell) => (i === 2 ? Colors.C3 : cell === '_' ? Colors.C7 : ''))
  );
  gridData = gridData.map((row) =>
    row.map((cell) => (cell === '_' ? ' ' : cell))
  );
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref} style={{ textAlign: 'center' }}>
        <Grid
          // prettier-ignore
          data={gridData}
          shading={gridShading}
          className="inline-block"
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
