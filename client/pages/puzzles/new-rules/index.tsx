import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'new-rules';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>All in all, these games are a blast to play.</FlavorText>
        <p>
          Yes, Helen did leave the four corner spaces of her pixel art blank,
          but the result was voted to have the closest resemblance to Kirby,
          giving her the win!
        </p>
        <p>
          Overnight, Jim's post of "#mit #coin #derp" received a staggering ten
          likes, making him the winner!
        </p>
        <p>
          Unloading his nine remaining vanilla popsicles into a single offer
          allowed Mike to finally propel his Lil' Stinker across the finish line
          and win the game.
        </p>
        <p>
          Taking on the role of Mila Kunis, Quentin invited an impressive
          twenty-two wedding guests, and read his vows quickly to claim victory.
        </p>
        <p>
          Unearthing her final corpse allowed Frances to win the game eight
          turns later, and she didn't even need the water slide!
        </p>
        <p>
          By spinning a four, Rachel was able to win the... oh, it turns out
          this game doesn't actually exist. Sorry about that.
        </p>
        <p>
          Escaping an attempt to unscrew a water valve when his opponent rolled
          a one was a pivotal moment for Nate as he looted multiple bodies for
          enough discounted items to win.
        </p>
        <p>
          Diane very nearly didn't find one of the superhuman's opposites, but
          successfully brainwashed the male civilizations and won the game!
        </p>
        <p>
          Radiation and the resulting growths on the three dead soldiers didn't
          deter Paul from taking over the world. Or maybe those were a raft. Or
          a wall...?
        </p>
        <p>
          Alien capture was no problem for Olivia, as she flipped three final
          pieces of moon cheese into the receptacle to win the game.
        </p>
        <p>
          Getting eaten made Karen the sole winner, as she was among the
          fourteen players who weren't the sacrifice. Time to play with the
          Pogs!
        </p>
        <p>
          Obtaining the drug-delivery slingshot early on helped Bob hide seven
          pieces of drug paraphernalia, easily giving him enough blood money to
          win.
        </p>
        <p>
          Numerous series of successful rolls helped Ivan put away enough tiles
          to fill several compartments, scoring ten points apiece to propel him
          to victory.
        </p>
        <p>
          Six fruit snacks from a well-placed Fruit Roll-Up drop sealed the
          victory for Alice.
        </p>
        <p>
          Timely multiplications and a prepended six gave Lucy a huge score, but
          the victory wasn't sealed until her opponent reached the end of the
          round the slowest.
        </p>
        <p>
          Only nine trash routes separated the top players, but Greg had just
          enough Pride dumpsters to put him over the top.
        </p>
        <p>
          Most of the time, the storm chasers last longer than four turns, but
          on this occasion, that was enough incorrect attempts to cost them both
          feet, making Tornado Master Charlie the winner.
        </p>
        <p>
          By strategically attacking, rolling quickly, and shaking well, Emily
          grafted on enough human legs to finish the game as number one!
        </p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
