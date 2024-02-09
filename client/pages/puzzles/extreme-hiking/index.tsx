import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/extreme-hiking/0.png';

const SLUG = 'extreme-hiking';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You like to spend weekends puttering around in your woodworking shop,
          but your new significant other enjoys hiking and birdwatching. You
          joined them for a hike one day but you were exhausted by the end
          because they wouldn't stick to the trails. Although you both saw some
          things that interested you along the way, you're not certain if you're
          a good match for this kind of hiker. After reviewing your map and the
          notes you made, you have an idea who to consult about whether this
          relationship has a shot.
        </FlavorText>
        <p className="px-10">
          This was a really nice area for a walk, but I'm pretty sure we got off
          on the wrong foot by not starting in the right place. We didn't have a
          compass or a GPS, so my estimates of the directions and elevation
          changes are approximate. I know we entered from the west, and headed
          south and uphill and then southeast and slightly downhill to the red
          pin on the map where we had our first sighting: a{' '}
          <i>Stephanoaetus coronatus</i>.
        </p>
        <p className="px-10">
          We chased it off-trail pretty far to the southeast and at least 70
          feet down in elevation before we lost it. We got back on course and
          hiked southwest for a short while, finally crossing a little bridge
          and ending up at our southernmost point on the day, where we saw a{' '}
          <i>Bonasa umbellus</i>.
        </p>
        <p className="px-10">
          We then went off-trail again to follow it, going northwest and up in
          elevation a bit more than 30 feet before picking up a trail again and
          heading almost due east and up about 20 feet in elevation, where we
          saw a <i>Buteo buteo</i>.
        </p>
        <p className="px-10">
          We bushwhacked a short distance after it, slightly north of due east
          to another section of the trail. We took that trail back to the
          southwest and downhill a little over 30 feet in elevation, where we
          caught a glimpse of a <i>Diomedea exulans</i>.
        </p>
        <p className="px-10">
          We chased it to the southwest, crossing a part of the trail that
          looked familiar, before losing it and finally meeting the trail again
          in a different spot. At that point we headed north and then a little
          northwest ending up not too far from a spot we had already been. But
          we didn't see a single bird.
        </p>
        <p className="px-10">
          Hoping for better luck on a different section of trail, we headed way
          back to the north and a little west up near where we had started our
          hike. We picked up the trail and headed slightly southwest and around
          20 feet down in elevation before coming upon a{' '}
          <i>Centrocercus urophasianus</i>.
        </p>
        <p className="px-10">
          We lost sight of it, but not before bushwhacking mostly south downhill
          and then back uphill a little bit again ending up back near the red
          pin. We sheepishly noticed there was a trail right there, so we took
          it a short distance back to the north and a little east, going down a
          little hill and back up a bit again before being met with a{' '}
          <i>Hamirostra melanosternon</i>.
        </p>
        <p className="px-10">
          We lost sight of it while walking off-trail to the southeast around a
          pond. We picked up the trail, circling back around the other side to
          the northwest and were rewarded by spotting an{' '}
          <i>Aquila chrysaetos</i>.
        </p>
        <p className="px-10">
          We followed it, cutting across the trail just a little south of due
          east and maybe 25 feet up in elevation before getting back on course
          and heading a little east of due north and around 60 feet up in
          elevation. I was ready for a break and I know most people would've
          stopped here, but we were excited at the sight of a{' '}
          <i>Haliaeetus leucocephalus</i> so we kept going.
        </p>
        <p className="px-10">
          We headed off-trail to the south and a little bit west about 80 feet
          downhill to a new section of trail that we took heading a little north
          of due west where we spotted the incredibly rare{' '}
          <i>Gymnogyps californianus</i> across a small pond. How exciting!
        </p>
        <p className="px-10">
          We turned northeast and bushwhacked across a bunch of trails,
          eventually choosing one way up near where we had just been a little
          while ago! We took it for 495 yards going mostly southward, but a
          little west, and at least 100 feet back down in elevation without
          seeing any birds.
        </p>
        <p className="px-10">
          We hoped for better luck somewhere else, so we headed northwest,
          eventually encountering a new part of the trail that started almost
          due west of the blue pin on the map (where we would finally call it
          quits at the end of the day). We followed the path to the southeast,
          with a little up and down but not much overall change in elevation,
          where we saw a <i>Butastur indicus</i>.
        </p>
        <p className="px-10">
          We moseyed off trail just a little to the east and picked up another
          trail going northward and a little west and up around 60 feet in
          elevation where we made a double sighting: 2 <i>Buteo oreophilus</i>!
        </p>
        <p className="px-10 py-16 border border-black rounded-[100%]">
          <span className={cx(HIDDEN_CLASS)}>
            [paragraph circled in puzzle]{' '}
          </span>
          We knew we had missed a section of trail back to the south, so we
          headed that way and found it slightly southwest of the blue pin on the
          map. We followed it to the northwest and about 20 feet up in elevation
          before spotting something tiny we couldn't identify. I'm putting a
          circle around this one so we'll remember to look it up.
        </p>
        <p className="px-10 py-16 border border-black rounded-[100%]">
          <span className={cx(HIDDEN_CLASS)}>
            [paragraph circled in puzzle]{' '}
          </span>
          We knew there were more trails up to the north and a bit east of where
          we were, so we made our way there and picked up a trail which went 460
          yards roughly southeast, where we saw something else we couldn't name.
        </p>
        <p className="px-10">
          We realized that just slightly to the north and a little east was the
          trailhead where most people begin their hikes here! We took that trail
          to the northwest, ending up a little over 20 feet up in elevation but
          saw no birds.
        </p>
        <p className="px-10">
          There was a part of the trail off to the southwest that we had not yet
          explored, but it was tucked in between some spots where we'd already
          been. We made our way there crossing a bunch of different trails and
          getting within sight of the ponds we'd already explored. Then we
          followed the trail mostly eastward, and a little south, where we saw
          an <i>Ictinaetus malaiensis</i>.
        </p>
        <p className="px-10 py-20 border border-black rounded-[100%]">
          <span className={cx(HIDDEN_CLASS)}>
            [paragraph circled in puzzle]{' '}
          </span>
          It took quite a bit of criss-crossing where we'd already been, but we
          were determined to finish up the last part of the trails we had
          missed. We tiredly bushwhacked way back uphill to the north and a
          little west before picking up the trail which started out a little
          west of due south and then went back to the southeast to the blue pin
          on the map. I know we were worn out by then, and we couldn't identify
          what we saw.
        </p>
        <hr className="my-6" />
        <p>
          <b>Map:</b>
        </p>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
