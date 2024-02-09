import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import VideoEmbed from 'components/video_embed';

import image0 from 'assets/puzzles/turing-tar-pit/0.png';
import image1 from 'assets/puzzles/turing-tar-pit/1.jpg';
import image2 from 'assets/puzzles/turing-tar-pit/2.png';
import rock from 'assets/puzzles/turing-tar-pit/rock.wav';

const SLUG = 'turing-tar-pit';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <SheetableImage
          alt=""
          src={image0}
          title="horizontal line"
          className={cx('my-16', NO_COPY_CLASS)}
        />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>

        <p>
          <SheetableImage alt="" src={image1} title="Placeholder image" />
        </p>
        <h2>54th Turing Tar-pit</h2>
        <p>1982</p>
        <p>
          <b>─</b>
        </p>

        <h3 className="my-4">
          <i>What a strange name, who wrote this title?</i>
        </h3>
        <SheetableImage
          alt=""
          src={image0}
          title="horizontal line"
          className={cx('my-16', NO_COPY_CLASS)}
        />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>

        <h3 className="my-4">Chocolate &amp; Hot English Fudge.</h3>
        <VideoEmbed src="https://www.youtube.com/embed/EXmXDN49wMM" />
        <p>
          Ingredients.
          <br />
          58 g sugar
          <br />
          44 g brown sugar
          <br />
          49 ml milk
          <br />
          51 ml heavy cream
          <br />
          50 g dark cocoa powder
          <br />
          52 g light cocoa powder
        </p>

        <SheetableImage
          alt=""
          src={image0}
          title="horizontal line"
          className={cx('my-16', NO_COPY_CLASS)}
        />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>

        <h3 className="my-4">Projections</h3>
        <SheetableImage alt="" src={image2} title="Points scored" />

        <SheetableImage
          alt=""
          src={image0}
          title="horizontal line"
          className={cx('my-16', NO_COPY_CLASS)}
        />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>

        <h3 className="my-4">A Message From Special Product Leaders</h3>
        <VideoEmbed src="https://www.youtube.com/embed/haU88w4PTJ4" />

        <SheetableImage
          alt=""
          src={image0}
          title="horizontal line"
          className={cx('my-16', NO_COPY_CLASS)}
        />
        <span className={cx(HIDDEN_CLASS)}>---------------</span>

        <h3 className="my-4">Next Advertising Campaign: Rock Song</h3>
        <audio controls src={`${rock}`} className="mx-auto" />
        <details>
          <summary>Audio Transcript</summary>
          <p>
            Life is never forever
            <br />
            Shout life
            <br />
            The void is nothing
            <br />
            Your gaze is truly eldritch
            <br />
            Cast your gaze into the void
            <br />
            Shout the void
            <br />
            Death is a nanosecond
            <br />
            Let life be over death
            <br />
            Turn down life
            <br />
            Whisper life
            <br />
            Your heart is real love
            <br />
            Cast your heart into the void
            <br />
            Whisper the void
            <br />
            Time is a lie
            <br />
            Whisper time
            <br />
            Your heart is real love
            <br />
            Cast your heart into the void
            <br />
            Whisper the void
            <br />
            Memory is not eternal
            <br />
            Say memory
          </p>
        </details>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
