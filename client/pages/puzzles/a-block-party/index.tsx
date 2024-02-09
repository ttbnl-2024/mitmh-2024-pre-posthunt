import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'a-block-party';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Halloween always hits me like a brick! Every year I'm visited by a
          series of small costumed figures.
        </FlavorText>
        <p>
          It's getting dark and the street lights just turned on. The stream of
          trick-or-treaters is on the way and the first group is pretty large.
          The guy in the front has a full-on ape suit and is carrying a banana.
          Then there's a couple of kids walking together, clearly coming from
          the same place. One has a dark red suit with flowers, with some armor
          and a helmet and the other kid is pretty chubby and isn't wearing much
          except a strange loin piece. It's entirely too cold for that! Next, a
          kid in overalls, with a big bushy beard and a woolen cap, carrying a
          fishing rod and a fish. The next kid has a bat and a cap and a
          Clutchers uniform. Finally, a costume that I'm used to seeing. Some
          people use gauze or white cloths, but I swear this kid just used
          toilet paper!
        </p>
        <p>
          The next group has four kids. The first one is kind of fancy. He has a
          big hat with a feather and a blue top with a fleur-de-lis on it. The
          next guy is dressed in furs; he has a silver helmet with two horns and
          is carrying a battle axe! This next kid is clearly creative with his
          DIY costume. He's covered his clothes with splotches of paint and is
          carrying a palette and a paintbrush. And the last kid in a white
          uniform with a dark blue scarf and an anchor on his cap… Is that a
          telescope in his hand?
        </p>
        <p>
          With the last group gone, I see a new trio approaching. The first one
          is dressed in a cap and gown - probably reusing his older sibling's
          set. I just hope the diploma he is carrying isn't real. The other two
          clearly tried to outdo each other. One has a gold Roman helmet with
          sword and shield, and the other has a bright red outfit and a very
          tall hat.
        </p>
        <p>
          Things were quiet for a bit, but then a relatively large group showed
          up. As I opened my door, the first one started giving a long speech
          thanking her parents and my neighbors and... the producers? I thought
          that was very strange, but it was nothing compared to the next two!
          The next guy was very polite until he turned to look the other
          direction and he started acting like a monster with green makeup and
          everything! And speaking of monsters - the next costume was a very
          convincing one-eyed giant! After that frightening ordeal, the next
          person in line served me a very fancy bottle of seltzer water, then
          asked me to place some candy on his silver tray. There was a fifth
          person in line too, but he was too chicken to approach my door.
        </p>
        <p>
          After that, one single person showed up at my front door. The way he
          was dressed, it looked like he had taken a wrong turn on the
          Appalachian Trail. I asked if he was lost, but he showed me his map
          and compass and assured me that he was where he meant to be and
          demanded some candy.
        </p>
        <p>
          The next group that arrived at my porch was just two guys, but they
          were the scariest group by far! Look, I know there's not any reason
          why the first one should have scared me as much as he did, but I've
          read <i>It</i> and he just made me uncomfortable all the way up until
          the point where he made a balloon dog right in front of me. But the
          other guy was dressed as my biggest fear! I like Peter Parker just
          fine, but this guy was a whole different type of spider man!
        </p>
        <p>
          It's getting late, but there's still one last group on their way down
          the sidewalk. Halloween costumes don't have to be rocket science, but
          the first girl in line wanted it to be anyway. The next guy is
          straight out of the '80s with those pink pants - I just hope he doesn't
          try to play that instrument he's carrying. Next up are two girls who
          are peas in a pod in their head-to-toe costumes - one of them
          literally so. The next girl clearly didn't put too much effort in - I
          think she's trick-or-treating in her actual pajamas. The last two guys
          in the group clearly planned together since they're both carrying
          shields - I like the one with the raven on it the best.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
