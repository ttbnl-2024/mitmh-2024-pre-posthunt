import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import audio1 from 'assets/puzzles/safe-mode/MP1.mp3';
import audio2 from 'assets/puzzles/safe-mode/MP2.mp3';
import audio3 from 'assets/puzzles/safe-mode/MP3.mp3';
import audio4 from 'assets/puzzles/safe-mode/MP4.mp3';
import audio5 from 'assets/puzzles/safe-mode/MP5.mp3';
import audio6 from 'assets/puzzles/safe-mode/MP6.mp3';

const SLUG = 'safe-mode';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>To be safe, only use each once...</FlavorText>
        <div className="space-y-2">
          <AudioLink src={audio1} />
          <AudioLink src={audio2} />
          <AudioLink src={audio3} />
          <AudioLink src={audio4} />
          <AudioLink src={audio5} />
          <AudioLink src={audio6} />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
