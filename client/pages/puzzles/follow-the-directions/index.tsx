import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'follow-the-directions';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Where will you end up? Watch out for unexpected elements along the
          way.
        </FlavorText>
        <div className="space-y-2">
          <div>
            <p>
              West of beaker.data.segments
              <br />
              South of voter.quenches.debunk
            </p>
          </div>
          <div>
            <p>
              West of flickers.crib.epidemics
              <br />
              North of persuader.popcorn.crinkles
            </p>
          </div>
          <div>
            <p>
              East of bumped.restricting.weaves
              <br />
              South of pleaded.revised.worth
            </p>
          </div>
          <div>
            <p>
              West of contend.transparency.lightweight
              <br />
              North of radiates.piles.corded
            </p>
          </div>
          <div>
            <p>
              West of disputed.alphabetical.airfield
              <br />
              South of chauffeured.dialects.jumbles
            </p>
          </div>
          <div>
            <p>
              West of surveyor.sneaky.wrangle
              <br />
              South of obstruction.drives.strumming
            </p>
          </div>
          <div>
            <p>
              East of cattle.rank.cook
              <br />
              North of foil.charcoal.pardon
            </p>
          </div>
          <div>
            <p>
              East of succumbed.panting.heavenly
              <br />
              North of coaxed.personal.snaps
            </p>
          </div>
          <div>
            <p>
              East of hoedown.lambs.spacemen
              <br />
              South of preach.curiosity.flows
            </p>
          </div>
          <div>
            <p>
              East of pearls.cylinder.metabolism
              <br />
              South of senior.paints.return
            </p>
          </div>
          <div>
            <p>
              West of enjoy.rang.remember
              <br />
              South of custom.vipers.unfairness
            </p>
          </div>
          <div>
            <p>
              East of pine.nullify.authors
              <br />
              South of fact.menu.civil
            </p>
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
