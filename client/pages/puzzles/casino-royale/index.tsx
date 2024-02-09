import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import pdf from 'assets/puzzles/casino-royale/CasinoRoyale.pdf';

const SLUG = 'casino-royale';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    // this puzzle has no need for copy button
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          Never forget where you're from, no matter how fast you get where
          you're going.
        </FlavorText>
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a>
        </InfoIcon>
        <iframe src={pdf + '#zoom=Fit'} className={cx(NO_COPY_CLASS, 'w-full')}>
          <style jsx>{`
            iframe {
              /* Why can't this be a tailwind class? No clue. */
              aspect-ratio: 8.5/11;
            }
          `}</style>
        </iframe>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
