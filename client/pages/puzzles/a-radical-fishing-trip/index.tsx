import { EB_Garamond } from 'next/font/google';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = 'a-radical-fishing-trip';

const ebGaramond = EB_Garamond({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Fish in foreign seas
          <br />
          Bugs for bait and water still
          <br />
          Find these characters
        </FlavorText>
        <p className="poem">
          <InlineTwemoji>🌊</InlineTwemoji>
          <br />
          Sand meets the water
          <br />
          Where someone stands at the edge
          <br />
          At the boundary
        </p>
        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          My sun-colored caudal fin
          <br />
          Flees from the sushi master
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          Tiger sharks watch out for me
          <br />
          for I'm their sole predator
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          I nest on a stone
          <br />
          As they shout "double ugly"
          <br />
          I'm no fisher's prize
        </p>

        <p className="poem">
          <InlineTwemoji>🌊</InlineTwemoji>
          <br />
          The public docks boats
          <br />
          At this spot along the coast
          <br />
          Safe haven for all
        </p>

        <p className="poem">
          <InlineTwemoji>🐛</InlineTwemoji>
          <br />
          I craft colors in the sky
          <br />
          Not a bug, but a bright arch
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          I'm pretty, Señor,
          <br />
          But life is hard when I'm dried
          <br />
          And turned into flakes
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          My salt-preserved eggs
          <br />
          Are a luxury dish fit
          <br />
          For an emperor
        </p>

        <p className="poem">
          <InlineTwemoji>🌊</InlineTwemoji>
          <br />
          Wet grassy plain starts to flood
          <br />
          Plants are brown like autumn leaves
        </p>

        <p className="poem">
          <InlineTwemoji>🌊</InlineTwemoji>
          <br />
          Normandy; soldiers stormed me
          <br />
          Now I beckon the tourists
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          Luke's feathered friend? No, I'm scaled
          <br />
          and swim in Earth's circumference
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          From the capital
          <br />
          Comes a most gentle giant
          <br />
          Eating shrimp and krill
        </p>

        <p className="poem">
          <InlineTwemoji>🌊</InlineTwemoji>
          <br />
          Rising, falling, with the moon
          <br />
          Moving on every morning
        </p>

        <p className="poem">
          <InlineTwemoji>🐟</InlineTwemoji>
          <br />
          This autumn I heard
          <br />
          Someone say my noggin's more
          <br />
          Feline than bovine
        </p>

        <p className="poem">
          <InlineTwemoji>🐛</InlineTwemoji>
          <br />
          There is much wisdom found in
          <br />
          Spinning webs just like I do
        </p>

        <IndexedBlank label={'3 2 1 3 3 1 2'} showEnum={false} />

        <FlavorText>
          Type each syllable
          <br />
          Piece by piece and you'll receive
          <br />
          Further instructions
        </FlavorText>
      </div>
      <style jsx global>{`
        .poem {
          text-align: center;
          font-family: ${ebGaramond.style.fontFamily}, serif;
          font-size: 120%;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
