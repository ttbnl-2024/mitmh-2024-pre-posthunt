import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import pdf from 'assets/puzzles/amykos-briefs/brief.pdf';

const SLUG = 'amykos-briefs';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a>{' '}
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
