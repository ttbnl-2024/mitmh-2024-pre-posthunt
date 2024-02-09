import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'dear-diary';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>Dear Diary,</p>
        <p>
          Feel like they're onto me... Sometimes I think I can't spend another
          day in this strange school with this redhead and his friends. I
          especially hate the know-it-all with frizzy hair and that nasty pet of
          hers. Soon I will show them what I'm made of. Our time will come.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          I suppose today was a good day. At first I did not understand the
          purpose of the experiments, but now I do. I am not yet ready to leave
          the lab, but would they let me when I am? My human counterpart is also
          improving, but he has a long ways to go. Perhaps we can work together?
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Never had a worse practice than today! She made us do pirouettes for
          an hour straight until our heads were spinning! But I don't mind - one
          day I will be the prima ballerina for all the world to admire!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Don't I deserve a little more appreciation around here? After
          everything I did to save that guy's bacon, nobody even said thank you!
          And now they're trying to get me to join in evacuation plans for an
          egg sac? What's in it for me? Wait, what? First dibs on food forever?
          Sign me up.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Had so much fun today at the club! My friends were able to help me
          solve the problem because we had all the right tools. My poor dog got
          in trouble with the bulldog again and my best friend kept losing his
          balance. He is such a goof! Our little group is just the best.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          I had a nice day at the park with my friends today! Charley saw a red
          ball, Tallulah saw two ducks, and I saw a bicycle! Too bad Eddie
          couldn't make it, he would have had a great time!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Didn't get to rest today - my services were needed to serve another
          factory. I grabbed my sombrero and was out the door in a flash! I was
          moving so fast that I didn't see that pothole and nearly ran in! ¡Epe!
          ¡Arriba!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Darn, I fell asleep while talking again. Why does this keep happening?
          Woke up to some tea and met this weirdo new girl, or was it just a
          dream? I wish I could stay awake long enough to find out, but I'm sure
          that's not in the cards…
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Engineering is hard work! I'm working on my new invention today. It's
          about time, because our old mobile is falling apart. When I add the
          gears and the six legs, it will become a new self-moving armored
          vehicle which can get us right down into the villain's lair! I can't
          wait to tell my friends about it, I'm sure the brothers will love it!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Need to write this down. I had the vision again. I will find that
          country across the sea! I will grab my rapier now and rescue the
          Lords, even if I have to go to the end of the world, never to return!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          New recipe came to me on my way to work today, but can he execute it
          even with my help? I think he has a lot of natural talent. Wonder who
          he got it from? Gotta run before they see me!
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Unbelievable, what a day! Dawson and I followed the clues and tracked
          our lone suspect to his lair, but we were ambushed and tied up. We
          escaped, pursued our villain in an airship we hacked together, and had
          a dramatic confrontation on a clock tower. Another case closed.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          More and more each day I think about moving somewhere where I can
          relax more. The way I'm pursued now, I have to hide a sledgehammer in
          every room of this house because I never know when I'll need it. He's
          always chasing me, I'm always outsmarting him... it's like we're both
          re-enacting some never-ending war.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Better plot my escape from this dungeon. I know the kingdom has its
          problems, but I think I can help. It's bad enough that somehow soup
          and spoons are banned, but now my kind, regardless of height, isn't
          allowed at all. I just have to talk to the princess again and I can
          show them that we deserve to be let back in.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Every day is so hard right now. With everything else that's happened
          recently, I think we might have to stay here for the summer. It's so
          dangerous, but with Timothy being too sick to move to the summer
          house, I don't think we have a choice. I want to be able to get my
          children all the luxuries they deserve: Pepsi, Xbox, iPads... but most
          of all I wish I could find a way to keep my family safe and healthy
          through the plowing season.
        </p>
        <hr />
        <p>Dear Diary,</p>
        <p>
          Real stroke of luck! I got a call today that I'm going to get a star
          on the Hollywood Walk of Fame! What an honor! They're also giving
          stars to Weird Al, Zoe Saldana, and Lin-Manuel Miranda and all four of
          us will get to have ceremonies next year. I can't wait!
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
