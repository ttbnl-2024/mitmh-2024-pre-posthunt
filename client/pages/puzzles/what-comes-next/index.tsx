import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace } from 'components/copy';

import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'what-comes-next';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none pl-9 -indent-9">
          <li>2 → 3</li>
          <li>A → L, L, N, N, N, R, S, T, W</li>
          <li>B → E, R</li>
          <li>C → A, E, K, K</li>
          <li>D → I, J, R</li>
          <li>E → A, A, C, E, M, N, N, O, R, R, R, S, S, S, T, T, U, V</li>
          <li>F → O, T, U, U</li>
          <li>G → H</li>
          <li>H → D, E, E, E, I, O, O, T</li>
          <li>I → C, C, E, E, G, N, N, T</li>
          <li>J → A</li>
          <li>K → A, E</li>
          <li>L → E, E, M, S</li>
          <li>M → B, I, I, O</li>
          <li>N → A, A, D, D, E, E, F, H, I, P, S, T, U, W, Y</li>
          <li>O → !, F, F, N, N, R, R, T</li>
          <li>P → E, I, O</li>
          <li>R → ., 2, I, N, S, T, T, U</li>
          <li>S → ', A, A, E, E, H, M, N, O, P, S, S, U</li>
          <li>T → ', E, E, H, H, H, L, O, S, U, Y</li>
          <li>U → C, M, N, N, N, N, S</li>
          <li>V → E</li>
          <li>W → H, I</li>
          <li>Y → S</li>
          <li>. → S</li>
          <li><span className={HIDDEN_CLASS}>'</span>' → H, S</li>
        </ul>
        <br />
        <ul className="list-none pl-0">
          <li>2 words</li>
          <li>2 words</li>
          <li>3 words</li>
          <li>5 words</li>
          <li>6 words</li>
          <li>6 words</li>
          <li>7 words</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
