import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import image0 from 'assets/puzzles/a-divine-comeowdy/0.png';

const SLUG = 'a-divine-comeowdy';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          A story M. cryptically tells about his (purr) Spanish cat River, who
          (having made it past the pet gate) hops up and down from bed to bed in
          her tree searching for catnip while trying to avoid the deadly
          behaviors she encounters staged in a purrverse manner.
        </FlavorText>
        <p>
          River's first stop was a sad{' '}
          <span className="whitespace-nowrap">≽^╥⩊╥^≼</span> one as she came
          across a cat in a shabby gray coat who was lonely{' '}
          <InlineTwemoji emoji="🥀" copyImage={false} /> and, well, jelly of the
          life she once had. As the other cat howled at the moon and lamented
          how wonderful her younger days{' '}
          <InlineTwemoji emoji="🗓️" copyImage={false} /> were, River could only
          be thankful that she still had her looks and friends{' '}
          <span className="whitespace-nowrap">(•ᴗ•)♡(•ᴗ•)</span>. Time to move
          on to happier places…
        </p>
        <p>
          Still hungry for catnip, River ran into a tuxedo{' '}
          <InlineTwemoji emoji="🥼" copyImage={false} /> cat that was remarkably
          large. There was no catnip anywhere, but the bloke was sloppily eating
          a multitude of other things like lettuce{' '}
          <InlineTwemoji emoji="🥬" copyImage={false} /> or jello or lamb{' '}
          <span className="whitespace-nowrap">૮꒰ ˶• ༝ •˶꒱ა</span>. River was
          more than a bit disgusted and needed to leave.
        </p>
        <p>
          River next came across a tabby who was stealing pearls from a house{' '}
          <InlineTwemoji emoji="🏠" copyImage={false} />. River asked the cat
          for a motive and he mentioned something about his twin but River
          looked at his stash and he seemed to be acquiring things just to get
          more. River <InlineTwemoji emoji="🏞️" copyImage={false} /> wasn't too
          interested in the conversation by the time the cat asked, "Did you
          know in the summertime there was a rock band named after me?"
        </p>
        <p>
          The next cat <span className="whitespace-nowrap">•⩊•</span> River saw
          was a stunning vision in red{' '}
          <InlineTwemoji emoji="🔴" copyImage={false} />. But even more
          impressive than how River saw her seemed to be the view 🔎 she had of
          herself, as she strutted{' '}
          <InlineTwemoji emoji="🐓" copyImage={false} /> her stuff and made
          overt passes <InlineTwemoji emoji="🎫" copyImage={false} /> at all of
          the other cats around. River thought it was a good time to part{' '}
          <InlineTwemoji emoji="🤝" copyImage={false} /> before this girl sent
          some unwanted attention her way.
        </p>
        <p>
          Following that stop <InlineTwemoji emoji="🛑" copyImage={false} />{' '}
          River came across another tuxedo cat{' '}
          <span className="whitespace-nowrap">≽ܫ≼</span>, this one just a bit
          more clever than the last. Though not as clever as the cat saw
          himself, he insisted on showing River a turn (and a turn{' '}
          <InlineTwemoji emoji="🔄" copyImage={false} /> and a turn and a turn…)
          He puffed out his chest <InlineTwemoji emoji="🧰" copyImage={false} />{' '}
          and tried to show River a few tricks while pretending to still be
          chasing mice <InlineTwemoji emoji="🐭" copyImage={false} /> around.
          With a poof River made herself disappear.
        </p>
        <p>
          It was not hard to find the next cat{' '}
          <span className="whitespace-nowrap">ᓚᘏᗢ</span>, who looked like she'd
          been sitting there for days. River saw the large tabby{' '}
          <InlineTwemoji emoji="🐱" copyImage={false} /> and wasn't even sure
          she could move if she wanted to, the picture{' '}
          <InlineTwemoji emoji="🖼️" copyImage={false} /> of inactivity. River
          had heard rumors that this cat{' '}
          <span className="whitespace-nowrap">₍^ &gt;ヮ&lt;^₎</span> secretly
          managed the whole house ⾕ while all the other cats were asleep{' '}
          <InlineTwemoji emoji="💤" copyImage={false} /> but surely that
          couldn't be true from what River came upon. River asked the tabby
          where the catnip was, got a shrug for an answer{' '}
          <span className="whitespace-nowrap">( ⸝⸝´꒳`⸝⸝)</span> and moved on.
        </p>
        <p>
          The final bed River hopped onto was the scariest. This multi-colored
          striped cat was rumored to have even broken some of Newton's laws and
          intimidated River immediately. He howled at her, bared his teeth and
          claws and seemed ready to strike{' '}
          <InlineTwemoji emoji="❌" copyImage={false} />. Just as he was about
          to pounce, River spotted the catnip floating above all of the beds.
          With the precision of a sharp knife, she made a desperate leap for it,
          and…
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="mx-auto h-[700px] mt-8"
          />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
