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

import image0 from 'assets/puzzles/the-other-scottish-play/0.png';
import image1 from 'assets/puzzles/the-other-scottish-play/1.png';

const SLUG = 'the-other-scottish-play';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Wandering the New York City streets, you find yourself trapped,
          outside of time. Find the characters through the loops and uncover
          their hidden secrets to learn how to finally get some rest.
        </FlavorText>
        <p>
          <SheetableImage
            className="mx-auto w-full md:w-[80%]"
            alt="The entrance to a building with a brick facade and a seven-pointed star on the double-sided door.

A plaque with the iconographic image of a pineapple can be found to the right of the door."
            src={image0}
            title="The entrance to a building with a brick facade and a seven-pointed star on the double-sided door.

            A plaque with the iconographic image of a pineapple can be found to the right of the door."
          />
        </p>
        <p>
          You stumble across the entrance to a building, with symbols carved
          above the double-sided door. Upon approaching the door, a stranger
          wearing a Venetian mask guides you in with a word of caution:
        </p>
        <p>
          "Through your travels with us tonight, you will encounter a number of
          different characters. Learn what you can from them - and remember,
          fortune favours the bold. Don't just watch, look and see what you
          might find to take with you. But be mindful of your time here: things
          may begin to break down, the longer you stay."
        </p>
        <p>
          <b>FIRST LOOP</b>
        </p>
        <p>
          Starting off your adventure, a masked man guides you to an
          old-fashioned elevator — after a brief ride, the doors swing open and
          he signals you to leave…the long night has begun.
        </p>
        <p className="mono-text">
          You see SOMEONE resting in a chair. They are older, stately in garb.
          Soon, a younger man enters the room. He removes his top hat and coat,
          and sets his umbrella down by the fireplace.
        </p>
        <p className="mono-text">
          Ever so carefully, the younger man drags over a basin of water and a
          mirror, and drapes a towel around his older companion. After the man
          lathers up their face, he begins to shave them, ever so carefully.
          Intimately, even. The blade hovers over their jugular. Both pause, in
          a moment that seems to stretch forever.
        </p>
        <p>
          Leaving quickly, you wander around the halls until you come across
          your next encounter.
        </p>
        <p className="mono-text">
          SOMEONE approaches you, and offers a simple entreaty: "Come".
        </p>
        <p className="mono-text">
          You follow them into a small room. They reach under the bed, and hand
          you a sword before anointing your forehead. They seem confused. They
          reclaim their sword, and encourage you to open a drawer. Inside, there
          is a paper boat. Looking more closely, it looks like you can make out
          the edges of a handwritten letter.
        </p>
        <p className="mono-text">"Don't forget me," they whisper.</p>
        <p>
          Exiting the room, you feel as though something has changed…it's almost
          like you've gone back in time — but you haven't forgotten them.
        </p>
        <p>
          <b>SECOND LOOP</b>
        </p>
        <p>
          Escape feels impossible, as you enter a second loop — you feel as
          though you'll have to look even harder for clues, now.
        </p>
        <p className="mono-text">
          As you wander, you notice that SOMEONE has removed a door from its
          frame, and is dancing around the hallways with it. What a curious
          sight.
        </p>
        <p className="mono-text">
          Soon, a woman joins them in dance, making for quite the curious trio:
          two seeming strangers, and a door. You hurry away, hoping to find a
          shortcut. Cardio training would have been advisable, if you knew the
          night would see you moving this much.
        </p>
        <p>Persevering on, you find yourself encountering a familiar face.</p>
        <p className="mono-text">
          You notice SOMEONE drunkenly stumbling through the room, tearing off
          black curtains that were obscuring the many clocks. Finally, growing
          tired, they stumble to bed and fall asleep. They seem familiar.
        </p>
        <p className="mono-text">
          A man enters the room, and hesitantly approaches the bed. Are they
          asleep? The man grabs a pillow, and smothers it over their face.
          Finally, they move — struggling at first, before succumbing to
          suffocation. Was this defeat heralded by the many signs and portents
          that came before?
        </p>
        <p>
          Now more than a little rattled after witnessing a murder, you hurry
          on.
        </p>
        <p className="mono-text">
          You make your way into a hotel lobby. It feels old, the faces of the
          clock etched with the weight of years. SOMEONE stands behind the
          counter. A man who looks like a hotel employee approaches, and
          lovingly dabs a shiny balm under their eyes, before they take the
          stage. Hauntingly, they begin to sing a song. It sounds so familiar,
          but you can't quite place it.
        </p>
        <p className="mono-text">
          "I had the feeling that something was missing… I don't know what, but
          when it was over I said to myself: is that all there is to a circus?"
        </p>
        <p className="mono-text">
          Such a sad song. Once the song is over they guide the hotel employee
          over to a bank of telephone booths, and share a dance while crying.
          The employee hands over a tissue, and they dab their balmy eyes,
          before handing it to you.
        </p>
        <p className="mono-text">"Last night, I dreamt about you."</p>
        <p>
          Overcome with emotion, you dab your eyes with the discarded tissue,
          before moving on.
        </p>
        <p className="mono-text">
          The scent of moss and herbs guides your path — hunting down its
          source, you methodically face cardinal directions before finding the
          source of the smells: an apothecary. SOMEONE is crouched down in the
          corner, covered in blood.
        </p>
        <p className="mono-text">
          Wordlessly, they approach, and hand you a wet rag. Ever so gently, you
          wash her back, attempting to remove the blood. There's so much blood.
          It doesn't seem like you've done much, but after taking back the rag,
          they kiss your neck, by way of thanks.
        </p>
        <p>
          Moving on, you find yourself at a sizable gathering of characters —
          while this doesn't feel like an end to your adventures, it does feel
          like an end, of sorts.
        </p>
        <p className="mono-text">
          You enter a banquet hall, and see many of the faces you've encountered
          throughout the night, with SOMEONE sitting at the end of the table,
          covered in blood. A sumptuous buffet is laid out on the table. The
          catering bill must be astronomical.
        </p>
        <p className="mono-text">
          They raise their glass to offer a toast… but they aren't the only one.
          The other guests harangue them, before two men help them onto a chair.
          A noose descends from the rafters, and they accept it around their
          neck without struggle. The end approaches.
        </p>
        <p>
          Once more, you feel yourself pulled out of time, reset to an earlier
          state — how many times will this go on?
        </p>
        <p>
          <b>THE THIRD LOOP</b>
        </p>
        <p>
          Returning to consciousness, you feel the strain of the loops
          unraveling the clues laid out — this may be the hardest loop yet, to
          get your bearings.
        </p>
        <p className="mono-text">
          Clawing your way through a dense forest, you find yourself in front of
          a hut. As you pass by, SOMEONE beckons you to enter and offers a
          drink. Nestled intimately in the hut, they spoonfeed you a dark brew
          and tell you a darker tale of a decaying world where everyone is dead.
        </p>
        <p className="mono-text">
          Drawing a line on your palm, they tell you, "it'll have blood they
          say, blood will have blood." Your stay here has ended, and they bid
          you to leave this place.
        </p>
        <p>
          Exiting the forest you continue to explore, sensing that you've almost
          found everything you need.
        </p>
        <p className="mono-text">
          This time, you find yourself alone in a detective agency. Entering the
          space, you spot SOMEONE rushing into the room with a suitcase and a
          wad of cash. A series of photos draws their attention, and they look
          closer. Crime scene photos are strewn across a corkboard. Ultimately,
          they pull out a pen and paper, and draft a note that you begin to
          read.
        </p>
        <p className="mono-text">"Plant this seed and it will show..."</p>
        <p>
          Before you can finish reading the note, the third and final loop has
          ended. Sadly, you haven't escaped yet. You find yourself back in front
          of a now familiar set of double doors, with the sinking suspicion that
          it will be quite some time until you'll be allowed to sleep.
        </p>
        <p>
          You spotted a few objects through your travels so far…if only there
          was one more you could use to get out of this loop.
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="mx-auto w-full md:w-[80%]"
          />
        </p>
        <p>
          <i>
            Starting off your adventure, a masked man guides you to an
            old-fashioned elevator — after a brief ride, the doors swing open
            and he signals you to leave…the long night has begun, anew.
          </i>
        </p>
      </div>

      <style jsx global>{`
        .mono-text {
          margin-left: 2em;
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
