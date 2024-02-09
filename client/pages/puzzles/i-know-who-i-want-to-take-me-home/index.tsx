import cx from 'classnames';
import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'i-know-who-i-want-to-take-me-home';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>The video has an English transcript in YouTube.</InfoIcon>
        <VideoEmbed src="https://www.youtube.com/embed/L_4ALK-E6sU" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
