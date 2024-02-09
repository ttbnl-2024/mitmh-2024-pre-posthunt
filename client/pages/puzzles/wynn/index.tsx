import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/wynn/0.png';
import audio from 'assets/puzzles/wynn/wynn.mp3';

const SLUG = 'wynn';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Getting a group of people to come together and sing can be quite a
          challenge, yet thousands of people already know these songs by heart.
        </FlavorText>
        <AudioLink src={audio} className="mx-auto my-4" />
        <SheetableImage
          alt='A picture of a whiteboard with the text "LAST WEEK&apos;S NOTES" written at the top. Underneath, a music staff is shown with a treble clef on the left. There are six quarter notes written on the staff. From left to right, their pitches are C5, B♭4, E4, C♯5, F4, and D5'
          src={image0}
          title=""
          className="mx-auto"
        />
        <p className="text-center text-4xl">_ _ _ _</p>
        <details>
          <summary>Audio Transcript</summary>
          <p>[The tapping of a conductor's baton is heard]</p>
          <p>
            Ok everyone, we are going to start our rehearsal. Now unfortunately,
            there's some campus-wide puzzlehunt going on this weekend so we
            won't have much time to practice. We're gonna have to get through
            this as quickly as possible, ok? Now I want everyone to sing loud
            and sing proud. Ok, let's start with the first song.
          </p>
          <p>
            [Piano music is heard along with a woodwind playing notes. One of
            the notes the woodwind plays is off key.]
          </p>
          <p>
            Hold it! I know we're getting into the spirit of this weekend's
            hunt, but that bit about the dreadful sword was a bit off. We can
            fix that next week, let's move on to the next song.
          </p>
          <p>
            [A different piano song is heard along with a woodwind playing
            notes. One of the notes the woodwind plays is off key.]
          </p>
          <p>
            Hold it! That started out good but you sorta lost it at the part
            about the pebbles. It needs some work. Let's move on to the next
            piece.
          </p>
          <p>
            [A different piano song is heard along with a woodwind playing
            notes. One of the notes the woodwind plays is off key.]
          </p>
          <p>
            Stop! Stop! Stop! You've completely botched the part about the war
            cry! That sounded awful!
          </p>
          <p>[pause]</p>
          <p>
            No we don't have time to go over it! We've still got three more
            songs to get through, let's go to the next one.
          </p>
          <p>
            [A different piano song is heard along with a woodwind playing
            notes. One of the notes the woodwind plays is off key.]
          </p>
          <p>
            Hold it! Right, so the part about being free was good, but you kinda
            lost it during the bit where it repeats itself, sorry. We've gotta
            get through these, so let's do the next one.
          </p>
          <p>
            [A different piano song is heard along with a woodwind playing
            notes. One of the notes the woodwind plays is off key.]
          </p>
          <p>
            Hold it! You nearly had it there, the part about the thunder and
            lightning was great but you botched that ending bit there. We have
            to move on. Next song, please.
          </p>
          <p>
            [A different piano song is heard along with a woodwind playing
            notes. One of the notes the woodwind plays is off key.]
          </p>
          <p>
            Hold it! You almost had it, that part about the sun and the sky was
            good but that next part was off. Also, why did you start in the
            middle of the song?
          </p>
          <p>
            [sigh] We've run out of time. We're gonna have to stop here for
            today. Please be sure to review last week's notes and I'll see you
            again next week.
          </p>
        </details>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
