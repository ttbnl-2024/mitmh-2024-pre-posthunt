import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'welcome-to-the-festival';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Good day to thee! Welcome to our village! We have gathered a most
          wondrous assortment of attractions from far and wide for your
          merriment and entertainment. Join us on a path through history.
        </FlavorText>
        <p>
          Starting at the Waterwheel head towards the Crown Stage. After tipping
          the jugglers retrace your steps halfway and make a left. Lift a pint
          at the Pirate's Pub then head over to the Living Fountain. Back to the
          Pirate for another round, then on to the Dancing Bear.
        </p>
        <p>
          Beginning at Capt'ns pub, head up across Maypole Lane to the Royal
          Marquee. Next it's back across the Lane to the Sea Hag Stage. After
          the show lets out head back across the Lane one last time to dance
          around the Maypole.
        </p>
        <p>
          Meet just North of the English Garden. Head Southeast to the Polish
          Pub Stage and on to Polonia. After a tasty snack head North to the
          Roman Basilica. Next it's up through the Lady Rose Pavilion. Turn left
          at the mead hall and grab a coffee at Nyte's.
        </p>
        <p>
          Starting above the Woodlands, head around the outer path, towards the
          Mermaid Grotto. Continue on past the Harbor. Turn left and loop around
          the Celtic Corner. Continue up the path past the Maypole, then make a
          left to return to the mermaids.
        </p>
        <p>
          Starting at the Crown Stage, head Northeast to the giant rocking
          horse. From there go down past the Como Cottage to the Children's
          Realm. Next head North to the Folkstone Well Stage to see the band.
          After the show head back across the Upson Downs to meet your love in
          the Romance Garden. Finally, return to where you started.
        </p>
        <p>
          Start at the Pig n' Whistle and head toward the Town Square Public
          House. From there head West along the Guild Hall Row. Stop and quench
          your thirst halfway up the row and cut across to the Castle Keep
          Stage. After the show, reverse back and have another drink before
          continuing West to the Tuscany Tavern. After raising a mug in the name
          of the queen, head north along the highroad to Lady Ettie's Me Playce.
        </p>
        <p>
          Try your luck climbing up the Jacob's Ladder. After you dust yourself
          off head up to The Drunk Monk Pub to raise a mug to King Henry. Thirst
          quenched, head across the way to catch a ride on a camel. Then it's
          off to lunch at the Camelot Food Court.
        </p>
        <p>
          Set off from Poet's Crossing, heading down the lane to the Upson
          Downs. Retrace your steps halfway, then head Northwest along the path
          to the Aleing Knight. Next head Northeast and jump the river to the
          Reveler's Stage. After that it's back to the Knight for another round
          before heading over to pay for your sins at St. Peter's Chapel.
        </p>
        <p>
          Catch a show at the TreeTop Stage, then head up past the Hounds of
          East Fairhaven to the Merriment Stage. If you've heard the jesters'
          jokes before, head back down to the Pirate's Assault Catapult. After
          the nautical shenanigans head back up to the Vegetable Justice booth
          to work off some aggression.
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
