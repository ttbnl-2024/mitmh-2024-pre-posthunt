import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'youre-the-only-one';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <div className="space-y-4 sm:space-y-2">
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only carpet I'd astonish!"
            </p>
            <IndexedBlank label={[7]} idxs={[1]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only carpet I'd astonish!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only nabla I put on my body!"
            </p>
            <IndexedBlank label={[8]} idxs={[7]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only nabla I put on my body!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only phone contact I'd be in debt to!"
            </p>
            <IndexedBlank label={[8]} idxs={[2]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only phone contact I'd be in debt to!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only married woman I urinate (on)!"
            </p>
            <IndexedBlank label={[11]} idxs={[1]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only married woman I urinate (on)!"
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="space-y-4 sm:space-y-2">
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only angry pet I traumatize!"
            </p>
            <IndexedBlank label={[10]} idxs={[7]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only angry pet I traumatize!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only current events I acquire!"
            </p>
            <IndexedBlank label={[3, 7]} idxs={[6]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only current events I acquire!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only bacterium I strike with my leg!"
            </p>
            <IndexedBlank label={[7]} idxs={[4]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only bacterium I strike with my leg!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only thorn I administer an amount of medicine to!"
            </p>
            <IndexedBlank label={[8]} idxs={[7]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only thorn I administer an amount of medicine to!"
            </p>
          </div>
          <div className="flex justify-center sm:gap-3 items-center text-center sm:text-start flex-col sm:flex-row">
            <p className={cx(HIDDEN_CLASS)}>
              "... You're the only group of wolves I'm totally obsessed with!"
            </p>
            <IndexedBlank label={[8]} idxs={[5]} tableClass="flex flex-wrap items-center justify-center gap-x-3" />
            <p className={cx('flex-initial m-0 my-auto', NO_COPY_CLASS)}>
              "... You're the only group of wolves I'm totally obsessed with!"
            </p>
          </div>
        </div>
        <br />
        <br />
        <IndexedBlank label={[6]} />
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
