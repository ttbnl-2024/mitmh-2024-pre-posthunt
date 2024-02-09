import cx from 'classnames';
import React, { FC, useRef, useState } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/long-strange-tour/0.png';
import audio1 from 'assets/puzzles/long-strange-tour/1.mp3';
import image1 from 'assets/puzzles/long-strange-tour/1.png';
import audio2 from 'assets/puzzles/long-strange-tour/2.mp3';
import audio3 from 'assets/puzzles/long-strange-tour/3.mp3';
import audio4 from 'assets/puzzles/long-strange-tour/4.mp3';
import audio5 from 'assets/puzzles/long-strange-tour/5.mp3';
import audio6 from 'assets/puzzles/long-strange-tour/6.mp3';
import audio7 from 'assets/puzzles/long-strange-tour/7.mp3';
import audio8 from 'assets/puzzles/long-strange-tour/8.mp3';
import audio9 from 'assets/puzzles/long-strange-tour/9.mp3';
import audio10 from 'assets/puzzles/long-strange-tour/10.mp3';
import audio11 from 'assets/puzzles/long-strange-tour/11.mp3';
import audio12 from 'assets/puzzles/long-strange-tour/12.mp3';
import audio13 from 'assets/puzzles/long-strange-tour/13.mp3';
import audio14 from 'assets/puzzles/long-strange-tour/14.mp3';
import zipFile from 'assets/puzzles/long-strange-tour/audios.zip';

const SLUG = 'long-strange-tour';
const targets = [
  [49.219, 84.766],
  [43.49, 91.71],
  [58.709, 90.799],
  [32.639, 84.462],
  [50.26, 51.649],
  [34.259, 23.741],
  [73.669, 15.755],
  [93.084, 61.849],
  [31.395, 18.316],
  [73.698, 72.483],
  [9.028, 94.575],
  [70.139, 93.012],
  [77.17, 95.182],
  [69.763, 2.17],
];

const audio = [
  '',
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio10,
  audio11,
  audio12,
  audio13,
  audio14,
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const [audioNumber, setAudioNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Really loved going on that final tour last year; I ended up with a
          souvenir at fourteen different stops (though later I found a place to
          locate the Drop of Posters I'd picked up, even if sometimes the
          borders they give don't quite match what was available at the show).
          <br />
          <br />
          There were a lot of great jams that are worth a Relisten, as I think I
          may have misremembered how the trip went.
        </FlavorText>
        <InfoIcon>Click this image to open it in a new window.</InfoIcon>
        <p>
          <a href={image0} target="_blank">
            <SheetableImage alt="" src={image0} title="" />
          </a>
        </p>
        <hr className="my-4" />
        <InfoIcon>
          Click a number to play the corresponding audio. Click{' '}
          <a href={zipFile}>here</a> to download all the audio.
        </InfoIcon>
        <div className="w-fit mx-auto my-4">
          <span className="inline-block w-[25px] mr-4">
            {audioNumber > 0 ? audioNumber : ''}
          </span>
          <audio
            controls
            autoPlay
            src={audio[audioNumber]}
            className="inline-block"
          />
        </div>

        <div className="class-0">
          {targets.map((target, i) => (
            <div
              key={`target-${i + 1}`}
              className={cx('class-1', NO_COPY_CLASS)}
              style={{
                left: `${target[0]}%`,
                top: `${target[1]}%`,
              }}
              onClick={() => setAudioNumber(i + 1)}
            ></div>
          ))}
          <SheetableImage alt="" src={image1} title="" />
        </div>
      </div>

      <style jsx global>{`
        .class-0 {
          position: relative;
          width: fit-content;
        }

        .class-1 {
          position: absolute;
          width: 4.34%; // 75px / 1702px
          height: 3.26%; // 75px / 2304px
          transform: translate(-50%, 0);
          cursor: pointer;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
