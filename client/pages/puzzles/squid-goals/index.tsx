import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'squid-goals';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Yours truly is definitely enough of an individualist to defy the
          five-word conventional wisdom.
        </FlavorText>
        <ul>
          <li>Certain hunters beheaded turncoats (7) </li>
          <li>Roker's pursuing internet search for tigers (7)</li>
          <li>Monster killed in action by Jeopardy's Jennings (6) </li>
          <li>Special considerations involving birds (7) </li>
          <li>Kings and queens with Saudi currency... (6) </li>
          <li>... that is invested into residences for fathers (6) </li>
          <li>Breed (almost) of certain sheep (4) </li>
          <li>
            Soldier careless with mystery at the far end of the Milky Way, for
            one (6){' '}
          </li>
          <li>Catholic leaders and liars heretically pursuing one (9)</li>
          <li>
            <i>Cats</i> gets bad review at multiple levels (8){' '}
          </li>
          <li>Downpours engulfing five black birds (6) </li>
          <li>Isn't reconfiguring animal traps (4) </li>
          <li>Docks shelter anxious toad from some carnivorous animals (9)</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
