import cx from 'classnames';
import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'take-two';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <InfoIcon>
          The puzzle can be found in this{' '}
          <a href="https://docs.google.com/spreadsheets/d/1WujENEC_A7eHL4L8PO993wHV-d9IrjT-cT777g2BXk8/edit#gid=0">
            Google sheet
          </a>
          . The following are links to identical copies in case of load issues:{' '}
          <a href="https://docs.google.com/spreadsheets/d/1Afst3TPIWLQff0OIt7RBuu1idh5b4Pq7RcCsq_PR5X8/edit#gid=0">
            Copy 2
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1EGDvIdzRq56TSuvXcIbObPPJ-plJGfYWno38VTpPAXo/edit#gid=0">
            Copy 3
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1WujENEC_A7eHL4L8PO993wHV-d9IrjT-cT777g2BXk8/edit#gid=0">
            Copy 4
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1htRiUKdfNCQQ4_2_cRker0aOdTzTI2rkKto1KwJLhtc/edit#gid=0">
            Copy 5
          </a>
          . This page (on the hunt website) contains no puzzle content.
        </InfoIcon>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
