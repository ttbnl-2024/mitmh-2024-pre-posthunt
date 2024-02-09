import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'composing-compositions';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          All the bands at this year's "Remix Rumble" music festival were
          perfect, with nothing out of tune or out of place! Each roster had one
          character that frequently stood out though.
        </FlavorText>
        <p>
          <b>8-bit Goo</b>
          <br />
          This quartet had a lot of equipment. The multi-talented headliner
          brought the beatdown and the beat drop. The backup was seen sporting
          an extra saxophone and a spare VIP tag. The last act that was smaller
          than this one was five acts ago.
        </p>
        <p>
          <b>EDMosh</b>
          <br />
          This 5-member band was headlined by the Warden himself! The band also
          had a member that played in an earlier act and two later acts, and who
          headlined in one of those later acts. Played after the first band with
          a bunch of fans but before the second one.
        </p>
        <p>
          <b>Glitterbomb</b>
          <br />
          Our most explosive solo act! Played in another band two acts from now.
        </p>
        <p>
          <b>Groovy Anarchy</b>
          <br />
          Two punk members from the opening act showed up again for this
          5-member band, and one of them is headlining this time. One of them
          played again three acts later, while another played again 5 acts
          later.
        </p>
        <p>
          <b>Ill-Beatdown</b>
          <br />
          6-member country punk band, no headliner. The punk members were the
          same as in the previous act, and this was the second time they played
          together.
        </p>
        <p>
          <b>Mischance</b>
          <br />
          This trio was headlined by a real bigshot. Our sixth act for the
          night.
        </p>
        <p>
          <b>No Friends</b>
          <br />
          For our opening band, we had the cheapest punk emo act money can buy!
          Each member cost no more than $3. No headliner.
        </p>
        <p>
          <b>Sleepy Time</b>
          <br />
          7-member troupe with plenty of groupies. No headliner. Nobody played
          that was also in any of the previous acts.
        </p>
        <p>
          <b>Stealing Hearts</b>
          <br />
          This 8-member band certainly stole my heart! They are the cheapest
          group worthy of the name that didn't have any legendary performers. No
          headliner.
        </p>
        <p>
          <b>Swamp Thing</b>
          <br />
          Our closing band had 5 members. Only one of the members hadn't
          performed earlier in the night. The headliner was looking particularly
          gluttonous.
        </p>
        <p>
          <b>The Boss</b>
          <br />
          7-member band, but not a single member charged over $3 for their
          cover. Headlined by eponymous member. Played just after our largest
          band. Two of the members showed up five acts ago, and only two of the
          members showed up in any later act.
        </p>
        <p>
          <b>Undertaker</b>
          <br />
          6-member band, and the headliner went berserk! He was cruising for a
          bruising.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
