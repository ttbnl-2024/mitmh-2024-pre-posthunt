import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'oil-paintings';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          In a gutter along one of the park's lanes, you found a set of shredded
          oil paintings, their frames nowhere to be seen. Something seemed wrong
          with them, but you couldn't pin down exactly what…
        </FlavorText>
        <InfoIcon>
          Note: an important piece of information for this puzzle changed in the
          last few days. Please use 2023 data.
        </InfoIcon>
        <InfoIcon>This puzzle requires onsite presence.</InfoIcon>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
