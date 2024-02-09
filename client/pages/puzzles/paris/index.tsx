import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import wav from 'assets/puzzles/paris/paris.wav';

const SLUG = 'paris';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          We heard this on the wireless a long time ago, it was the first of
          many strange broadcasts we've received. There were other songs too but
          we only listened for about an hour or so before we had to move on.
        </FlavorText>
        <InfoIcon>Warning: the audio file may be loud or jarring.</InfoIcon>
        <AudioLink src={wav} className="mx-auto" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
