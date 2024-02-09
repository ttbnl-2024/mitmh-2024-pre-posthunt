import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'poetic-justice';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText className="text-center">
          Something about these lines is not stoic.
          <br />
          Help us make these verses more heroic!
        </FlavorText>
        <p className="text-center">
          A forceful statement of something that is true
          <br />
          A guess about events you'll later view
          <br />
          A place an actor might be told to go
          <br />
          Amendment or law when still unapproved
          <br />
          Anoint skin in these oil transmission routes
          <br />
          Condition of longing; wanting life improved
          <br />
          Dropping too much food into stomach's pit
          <br />
          Interventions between two warring tribes
          <br />
          Like a bird that is naked and can not fly
          <br />
          Products for those who are sick (doctor prescribes)
          <br />
          Servers who supervise their other givers
          <br />
          Some non-wealth forfeitures. Could be anti-suits
          <br />
          The tops or sources of streams or rivers
          <br />
          The water in club soda when it's sold
          <br />
          They live in one shelter; commonly horses
          <br />
          Ties when next turn has no movement courses
          <br />
          To be scared of a nasty crowd at a show
          <br />
          To not have a parent who is a guy
          <br />
          Used fourteen decays as leads to find how old
          <br />
          Way too much dust within MacBook causes it
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
