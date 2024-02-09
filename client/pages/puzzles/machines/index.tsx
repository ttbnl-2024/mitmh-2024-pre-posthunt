import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'machines';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <InfoIcon>
          The puzzle is entirely contained in this{' '}
          <a href="https://docs.google.com/spreadsheets/d/1KDJAympwe_OslR4iuIbRiuDvP9PDrSK9HKR48YBx6wM/edit">
            Google Sheet
          </a>
          . Make a copy of the entire sheet for solving. This page (on the hunt
          website) contains no puzzle content.
        </InfoIcon>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
