import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import pdf from 'assets/puzzles/name-that-tune/NameThatTune.pdf';

const SLUG = 'name-that-tune';

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
