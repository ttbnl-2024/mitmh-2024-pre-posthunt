import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import Wordsearch from 'components/wordsearch';

const SLUG = 'corporate-change';

const wordsearchData = [
  ['O', 'E', 'F', 'N', 'E', 'R', 'G', 'N', 'O', 'S', 'X', 'X', 'F', 'E'],
  ['X', 'C', 'L', 'O', 'C', 'K', 'O', 'U', 'A', 'N', 'W', 'S', 'X', 'T'],
  ['A', 'X', 'I', 'T', 'F', 'F', 'X', 'R', 'M', 'E', 'O', 'A', 'R', 'W'],
  ['T', 'D', 'V', 'O', 'X', 'O', 'E', 'F', 'E', 'E', 'T', 'M', 'O', 'X'],
  ['T', 'O', 'E', 'K', 'H', 'U', 'S', 'O', 'R', 'H', 'H', 'N', 'L', 'B'],
  ['I', 'B', 'F', 'I', 'O', 'R', 'E', 'N', 'I', 'S', 'R', 'E', 'Y', 'U'],
  ['C', 'A', 'I', 'L', 'O', 'T', 'T', 'E', 'C', 'X', 'E', 'F', 'A', 'M'],
  ['U', 'H', 'V', 'L', 'D', 'W', 'L', 'L', 'A', 'U', 'R', 'I', 'T', 'P'],
  ['S', 'C', 'E', 'A', 'O', 'O', 'A', 'X', 'N', 'R', 'E', 'A', 'I', 'S'],
  ['X', 'I', 'O', 'X', 'U', 'F', 'M', 'O', 'X', 'T', 'O', 'V', 'B', 'O'],
  ['N', 'F', 'R', 'E', 'E', 'R', 'A', 'N', 'G', 'E', 'X', 'E', 'V', 'X'],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          It's all been downhill ever since the corporate takeover.
        </FlavorText>
        <Wordsearch data={wordsearchData} tableClass="wordsearch" />
        <br />
        <ul className="enumerations">
          <li>(4 5 7)</li>
          <li>(7 5)</li>
          <li>
            <span className={cx(HIDDEN_CLASS)}>'</span>(7)
          </li>
          <li>(6 5)</li>
          <li>(8 5)</li>
          <li>(7 6)</li>
          <li>(7 5)</li>
          <li>
            <span className={cx(HIDDEN_CLASS)}>'</span>(10)
          </li>
          <li>(3 4)</li>
          <li>(6 5)</li>
          <li>(2 4 1 11)</li>
          <li>(5 4)</li>
          <li>(4 4)</li>
          <li>(6 5)</li>
          <li>(6 3)</li>
        </ul>
      </div>

      <style jsx global>{`
        .wordsearch {
          margin-left: auto;
          margin-right: auto;
        }
        .enumerations {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
