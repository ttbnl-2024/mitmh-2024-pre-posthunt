import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import { Link } from 'components/link';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'this-space-intentionally-left-well-you-know';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <InfoIcon>
          The puzzle is entirely contained in this{' '}
          <Link href="https://docs.google.com/document/d/1LSselRibvKAZZi5cZaui1JQCxwVA2tqgORIatcw9wM0/edit">
            Google doc
          </Link>
          . This page (on the hunt website) contains no puzzle content.
        </InfoIcon>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
