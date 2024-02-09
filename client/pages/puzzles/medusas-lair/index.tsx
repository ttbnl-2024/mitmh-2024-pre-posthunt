import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Crossword, { _ } from 'components/crossword';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/medusas-lair/0.png';
import image1 from 'assets/puzzles/medusas-lair/1.png';

const SLUG = 'medusas-lair';

const q = '?';
const gridData = [
  [_, q, q, q, _, _, q, q, q, '4', q, q, '6'],
  [_, q, q, _, '5', q, q, '1'],
  [_, q, q, _, '8', q, q, q, q, '10', q, q],
  [_, q, _, q, _, q, '11', q, _, q, q, '3', q, q, '9'],
  [q, _, q, q, q, '7', q, _, _, 2, q],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <SheetableImage
          alt="puzzle title image"
          src={image0}
          className="w-full md:w-[500px] mx-auto my-8"
        />
        <InfoIcon>
          <a href="https://docs.google.com/spreadsheets/d/1ubigXJqAYjJMiKV3YpBnD4cb-w9BsH55Ufecw8Ehqt8/edit#gid=817883901">
            A Google Sheet
          </a>{' '}
          is provided for your convenience.
        </InfoIcon>
        <p>
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="w-full md:w-[500px] mx-auto"
          />
        </p>
        <p>
          Perseus peered five times into Medusa's lair, each time recording what
          he saw:
        </p>
        <Crossword data={gridData} />
      </div>

      <style jsx global>{`
        .blank-table td {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          text-align: center;
        }
        .crossword {
          outline: none !important;
        }
        .crossword td:nth-child(1) {
          border-left: 3px solid black !important;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
