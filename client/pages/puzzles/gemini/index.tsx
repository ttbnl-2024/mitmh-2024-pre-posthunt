import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';

const SLUG = 'gemini';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const stars = [
    [3, 3],
    [2, 4],
    [4, 2],
    [3, 2],
    [1, 3],
    [4, 1],
    [1, 5],
  ];
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You've asked the twins to rate the ideas, and they've each come up
          with a rating. There's just one more piece of advice they have as you
          prepare to convince Gemini to help...
        </FlavorText>
        <table className={cx(NO_COPY_CLASS, 'w-full')}>
          <tbody>
            {stars.map((row, r) => (
              <tr key={`star-row-${r}`}>
                <td className="text-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={`star-${r}-${i}-0`}
                      style={{ color: i < stars[r][0] ? '#f90' : '#777' }}
                      className="text-2xl min-[400px]:text-4xl md:text-5xl"
                    >
                      ★
                    </span>
                  ))}
                </td>
                <td className="text-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={`star-${r}-${i}-1`}
                      style={{ color: i < stars[r][1] ? '#f90' : '#777' }}
                      className="text-2xl min-[400px]:text-4xl md:text-5xl"
                    >
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={cx(HIDDEN_CLASS)}>
          <tbody>
            {stars.map((row, r) => (
              <tr key={`hidden-star-row-${r}`}>
                <td className="text-center">
                  {[0, 1, 2, 3, 4].map((i) => (i < row[0] ? '★' : '☆'))}
                </td>
                <td className="text-center">
                  {[0, 1, 2, 3, 4].map((i) => (i < row[1] ? '★' : '☆'))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
