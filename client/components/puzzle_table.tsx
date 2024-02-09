import HydraTable from './hydra_puzzles_table';
import cx from 'classnames';
import React, { FC, Fragment, FunctionComponent, ReactNode } from 'react';

import { LinkIfStatic } from 'components/link';
import { PuzzleData } from 'components/puzzle_image';
import { RoundData } from 'components/puzzles_map';

interface Props {
  roundSlug: string;
  roundData: RoundData;
  puzzles: PuzzleData[][];
}

export const PuzzleTitle = ({ puzzleData }) => (
  <LinkIfStatic href={puzzleData.url || `/puzzles/${puzzleData.slug}`}>
    {puzzleData.name}
  </LinkIfStatic>
);

export const NestedTitle: FC<{
  puzzleData: PuzzleData;
  ne: number;
  children?: ReactNode;
}> = ({ puzzleData, ne, children }) => {
  // Based on Galactic's nesting implementation, which is N nested divs that each have a
  // left-border + padding. This makes long titles overrun correctly.
  // This needs to be driven by a variable which we do with recursion.
  // Is this a good idea? Uhhhhhh, IDK, ask me later, how else do you do a variable number
  // of nested divs.
  if (ne !== undefined && ne > 0) {
    return (
      <div className="border-dashed border-l-2 pl-2 sm:pl-5">
        <NestedTitle puzzleData={puzzleData} ne={ne - 1} children={children} />
      </div>
    );
  } else {
    return (
      <>
        <PuzzleTitle puzzleData={puzzleData} />
        {children}
      </>
    );
  }
};

const PuzzleTable: FunctionComponent<Props> = ({
  roundSlug,
  roundData,
  puzzles,
}) => {
  const isCols = puzzles.length > 1;
  const maxPuzzles = Math.max(...puzzles.map((round) => round.length));

  const roundName = roundData?.name ?? '??????';

  return (
    <div className="w-full">
      <div className="flex items-center w-full mb-1">
        <div className="hr flex-grow min-w-3" />
        <h3 className="text-center">
          {roundData?.url ? (
            <a href={roundData.url}>{roundName}</a>
          ) : (
            // Not all rounds have a url
            roundName
          )}
        </h3>
        <div className="hr flex-grow min-w-3" />
      </div>
      <div className="round-puzzles space-y-2 sm:space-y-0">
        {puzzles.map((round, i) => (
          <React.Fragment key={i}>
            {i ? (
              <hr key={`${roundSlug}-hr-${i}`} className="separator" />
            ) : null}
            {roundSlug == 'everglades' && (
              <HydraTable roundData={roundData} puzzles={round} />
            )}
            {roundSlug != 'everglades' &&
              round.map((puzzleData, j) => (
                <div
                  key={`${puzzleData.slug}-${roundSlug}-${j}`}
                  className={cx('puzzle grid grid-cols-3 gap-4 items-center')}
                >
                  <div
                    key={`${puzzleData.slug}-${roundSlug}-inner-${j}`}
                    className={cx('name primary col-span-2 pl-4 -indent-4', {
                      'font-smallcaps font-bold': puzzleData.isMeta,
                    })}
                  >
                    {puzzleData.ne !== undefined ? (
                      <NestedTitle
                        key={`${puzzleData.slug}-${roundSlug}-title0`}
                        puzzleData={puzzleData}
                        ne={puzzleData.ne}
                      />
                    ) : (
                      <PuzzleTitle
                        key={`${puzzleData.slug}-${roundSlug}-title1`}
                        puzzleData={puzzleData}
                      />
                    )}
                  </div>
                  <pre
                    className={cx('font-mono secondary', {
                      underline: puzzleData.answer === '',
                    })}
                  >
                    {puzzleData.answer != undefined &&
                      (puzzleData.answer || <>&nbsp;</>)}
                  </pre>
                </div>
              ))}
          </React.Fragment>
        ))}
      </div>
      <style jsx>{`
        .name :global(a) {
          color: inherit;
          text-decoration: inherit;
        }

        .name :global(a:hover) {
          text-decoration: underline;
        }

        .hr {
          border-top-style: solid;
          border-top-width: 1px;
          border-top-color: var(--secondary);
        }

        hr.separator {
          border-color: var(--secondary);
          width: 50%;
        }

        h3 {
          margin-inline: 1ex;
          font-style: italic;
          font-weight: 500;
        }
        h3.prefer-nowrap {
          white-space: nowrap;
        }

        .round-puzzles {
          width: 100%;
        }

        @media (min-width: 801px) {
          .separator {
            display: none;
          }

          h3 {
            /* No need to wrap on larger devices. */
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default PuzzleTable;
