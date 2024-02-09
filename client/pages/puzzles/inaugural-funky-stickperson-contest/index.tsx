import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import VideoEmbed from 'components/video_embed';

const SLUG = 'inaugural-funky-stickperson-contest';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>2023 World Cup, Event B Finals (all locations) </FlavorText>
        <InfoIcon>
          The following videos do not have audio. All videos can be found in{' '}
          <a href="https://www.youtube.com/playlist?list=PLuyS5d25Y7vQYoKe4FjVBwE5KI-ziZLqc">
            this playlist
          </a>
          .
        </InfoIcon>
        <div className="space-y-4">
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/cMEHGk-755g" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/3GbODvuIgRk" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/WJywQC5sWt4" />
          </div>
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/Mk4YCQNHgzw" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/mb1GxDBKZ7U" />
          </div>
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/vSnBt6USGFM" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/UDqN-YLG_V0" />
          </div>
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/BTKggVYYyTU" />
          </div>
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/TTQ7y_kbtNE" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/yEeRgNvGnZU" />
          </div>
          <hr className="border-black" />
          <div className="flex flex-wrap justify-center space-x-2 [&>div]:my-2">
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/89RXi2yf5W0" />
            <VideoEmbed src="https://www.youtube-nocookie.com/embed/09Utx-kdO80" />
          </div>
          <hr className="border-black" />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
