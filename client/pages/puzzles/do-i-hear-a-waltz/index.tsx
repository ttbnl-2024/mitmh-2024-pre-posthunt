import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import audio0 from 'assets/puzzles/do-i-hear-a-waltz/0.mp3';
import audio1 from 'assets/puzzles/do-i-hear-a-waltz/1.mp3';
import audio2 from 'assets/puzzles/do-i-hear-a-waltz/2.mp3';
import audio3 from 'assets/puzzles/do-i-hear-a-waltz/3.mp3';
import audio4 from 'assets/puzzles/do-i-hear-a-waltz/4.mp3';
import audio5 from 'assets/puzzles/do-i-hear-a-waltz/5.mp3';
import audio6 from 'assets/puzzles/do-i-hear-a-waltz/6.mp3';
import audio7 from 'assets/puzzles/do-i-hear-a-waltz/7.mp3';
import audio8 from 'assets/puzzles/do-i-hear-a-waltz/8.mp3';
import audio9 from 'assets/puzzles/do-i-hear-a-waltz/9.mp3';
import audio10 from 'assets/puzzles/do-i-hear-a-waltz/10.mp3';

const SLUG = 'do-i-hear-a-waltz';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>When were these written?</FlavorText>

        <div className="space-y-2">
          <AudioLink src={audio0} />
          <AudioLink src={audio1} />
          <AudioLink src={audio2} />
          <AudioLink src={audio3} />
          <AudioLink src={audio4} />
          <AudioLink src={audio5} />
          <AudioLink src={audio6} />
          <AudioLink src={audio7} />
          <AudioLink src={audio8} />
          <AudioLink src={audio9} />
          <AudioLink src={audio10} />
        </div>

        <hr className="my-4" />

        <ul className="list-none pl-0 space-y-3 sm:space-y-0">
          <li>Cat's sound? Cat's sound, for some reason (7)</li>
          <li>"Day on the weekend is (yuck!) low grade" ...happy? (9)</li>
          <li>Develop my spinning wheel on two-person trip? (9)</li>
          <li>Guess is not reinterpreted over good ideas (11)</li>
          <li>Lead’s dialogue is front page news! (9)</li>
          <li>Non-waterproof coating for tent is significant (10)</li>
          <li>Primary accounts describe beheaded noble lots and lots (9)</li>
          <li>Soft, quick utterance is entirely timely, to start with (5)</li>
          <li>Strange devotee with a quirk taking a test contrarily in Alabama (11)</li>
          <li>"Threads", say, travel OK! (7)</li>
          <li>Trying to obtain information hiding in ending (9)</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
