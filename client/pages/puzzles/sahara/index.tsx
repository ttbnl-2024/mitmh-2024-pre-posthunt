import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'sahara';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You recently had a strange day on the job as an American Roulette
          croupier. From where you were standing, it looked like the wheel sent
          a message to the players that they should be trying to beat something
          else.
        </FlavorText>
        <p>Here's what you remember:</p>
        <p>
          When you opened for the day, a group of 6 players arrived, each
          wearing a different graphic tee. One player's shirt sported a big
          cornucopia on the front. Another featured an elaborate chambered
          nautilus, and a third was emblazoned with a smiley face. One shirt
          displayed a racecar, another promoted a well-known payment processing
          service, and yet another featured a photo of Lady Gaga and Beyoncé
          together.
        </p>
        <p>
          Each player bought in with $100 for one hundred chips worth $1 and
          proceeded to place between five and twelve different single $1
          straight bets on the same exact numbers for each spin of the wheel.
          They all had very specific reasons behind the numbers they chose. With
          each spin of the wheel at least one player was a winner, but none of
          their numbers was a winner more than once.
        </p>
        <p>
          After a while they abruptly all cashed out and left the table. The
          player with blue chips received $181. The players with green and
          orange chips both received $118. The player with gray chips received
          $97. The player with purple chips received $64. The player with yellow
          chips only received $52.
        </p>
        <p>
          For the player betting purple chips, their numbers that won were each
          either half or double one of their other winning numbers.
        </p>
        <p>
          Only one number selected by three or more different players was a
          winner.
        </p>
        <p>
          No player bet on 0 or 00, and only one number within 5 spots
          counterclockwise of the 00 was a winner.
        </p>
        <p>
          The highest number chosen by the person betting yellow chips did win.
        </p>
        <p>
          For the player betting orange chips, their lowest winning number was a
          factor of each of their other winning numbers.
        </p>
        <p>
          When numbers had sequential digits in any order, all but one were
          winners.
        </p>
        <p>
          Exactly one of the winning numbers chosen by the player betting green
          chips fell on black.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
