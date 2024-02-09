import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'the-shala-of-thermopylae';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          In this dry sauna, Yogi Ezekiel puts on some oddly familiar spiritual
          music and sets to connecting everyone with their inner selves.
          Hypnotized, your mind is powerless as your body assumes the Sirsa
          Padasana…
        </FlavorText>
        <FlavorText>
          You gotta pull yourself together, man! How might you break from this
          out-of-corpus experience and blow this hippie joint?
        </FlavorText>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
