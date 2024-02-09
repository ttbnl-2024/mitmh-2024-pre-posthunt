import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'duet';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          Hermes still feels disconnected from the other gods and their planets.
          Fortunately, Freddie Mercury and Hermes/Mercury have written a duet to
          tell you what might cheer him up.
        </FlavorText>
        <InfoIcon>The video has an English transcript in YouTube.</InfoIcon>
        <VideoEmbed src="https://youtube.com/embed/H6tPC8lNdTs" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
