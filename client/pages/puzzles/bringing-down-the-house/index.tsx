import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'bringing-down-the-house';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You see your teammates from MIT trying to pass a secret message to you
          on the casino floor, although this time the code seems to be
          different.
        </FlavorText>
        <p>
          <b>Table 1</b>
          <br />
          K of Spades
          <br />
          7 of Hearts
          <br />
          "I got a bonus in my paycheck this month!"
        </p>
        <p>
          <b>Table 2</b>
          <br />
          K of Diamonds
          <br />
          7 of Clubs
          <br />
          "Gosh darn it, where is that waitress? Is there a bell to ring or
          something?"
        </p>
        <p>
          <b>Table 3</b>
          <br />
          Q of Spades
          <br />
          2 of Hearts
          <br />
          "Wow, that craps table over there is way too rowdy."
        </p>
        <p>
          <b>Table 4</b>
          <br />
          Q of Diamonds
          <br />
          8 of Clubs
          <br />
          "Sweet! My wife told me she just won her poker tournament!"
        </p>
        <p>
          <b>Table 5</b>
          <br />
          J of Spades
          <br />
          5 of Hearts
          <br />
          J of Diamonds
          <br />
          "Huh, is that the guy from the cover of that magazine? You know the
          one I'm talking about?"
        </p>
        <p>
          <b>Table 6</b>
          <br />
          4 of Clubs
          <br />
          3 of Spades
          <br />
          "The rental car I got had its check engine light on!"
        </p>
        <p>
          <b>Table 7</b>
          <br />
          9 of Hearts
          <br />
          "On the plane to get over here, the guy ahead of me in the security
          line tried to bring his gun!"
        </p>
        <p>
          <b>Table 8</b>
          <br />
          10 of Diamonds
          <br />
          Q of Clubs
          <br />
          "My hotel room sucks! It's the size of a voting booth!"
        </p>
        <p>
          <b>Table 9</b>
          <br />
          10 of Spades
          <br />
          6 of Hearts
          <br />
          "My daughter dressed up as a witch for Halloween."
        </p>
        <p>
          <b>Table 10</b>
          <br />
          5 of Diamonds
          <br />
          "My neighbor cut down my tree without permission, and this money is
          from the settlement."
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
