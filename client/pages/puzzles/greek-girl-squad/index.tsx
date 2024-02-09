import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'greek-girl-squad';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          The linked video has English captions and a transcript. To view the
          entire transcript at once, click "...more" in the description below
          the video, then "Show transcript." That transcript can be copy-pasted.
        </InfoIcon>
        <VideoEmbed src="https://www.youtube-nocookie.com/embed/26GXkiE0pRc" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
