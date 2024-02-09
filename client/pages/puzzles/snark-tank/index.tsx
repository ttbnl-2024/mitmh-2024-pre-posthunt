import cx from 'classnames';
import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'snark-tank';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <InfoIcon>
        While the YouTube video has in-video captions, it also has real
        captions, which can be copy-pasted from YouTube. Any differences between
        these are not part of the puzzle.
      </InfoIcon>
      <VideoEmbed src="https://www.youtube.com/embed/XD597WUKZ8U" />
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
