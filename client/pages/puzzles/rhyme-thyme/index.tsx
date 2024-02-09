import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'rhyme-thyme';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Something seems to be missing...</FlavorText>
        <div className="space-y-4">
          <ul className="list-none pl-0">
            <li>Ladder counterpart</li>
            <li>Rom-com meet</li>
            <li className={cx(NO_COPY_CLASS)}>(5)</li>
            <li className={cx(HIDDEN_CLASS)}>'(5)</li>
            <li>Fiber</li>
            <li>Stringed instrument</li>
            <li>Remote button</li>
          </ul>
          <hr />
          <ul className="list-none pl-0">
            <li>Grocery store employee</li>
            <li className={cx(NO_COPY_CLASS)}>(6)</li>
            <li className={cx(HIDDEN_CLASS)}>'(6)</li>
            <li>Mick or Bianca</li>
            <li>Badgerer</li>
            <li>Inebriated walk</li>
            <li>Confident walk</li>
          </ul>
          <hr />
          <ul className="list-none pl-0">
            <li>Concurring</li>
            <li className={cx(NO_COPY_CLASS)}>(5)</li>
            <li className={cx(HIDDEN_CLASS)}>'(5)</li>
            <li>Escaping</li>
            <li>Liberating</li>
            <li>Striking</li>
            <li>Dating</li>
          </ul>
          <hr />
          <ul className="list-none pl-0">
            <li className={cx(NO_COPY_CLASS)}>(9)</li>
            <li className={cx(HIDDEN_CLASS)}>'(9)</li>
            <li>Fantastic</li>
            <li>Increasing</li>
            <li>Bewildering</li>
            <li>Emphatic</li>
            <li>Enveloping</li>
          </ul>
          <hr />
          <ul className="list-none pl-0">
            <li>Shirt</li>
            <li>Complain</li>
            <li>Dwelling</li>
            <li>Scoundrel</li>
            <li>Mickey or Minnie</li>
            <li className={cx(NO_COPY_CLASS)}>(6)</li>
            <li className={cx(HIDDEN_CLASS)}>'(6)</li>
          </ul>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
