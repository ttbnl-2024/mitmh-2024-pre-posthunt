import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/happy-tunes/0.png';
import playlist from 'assets/puzzles/happy-tunes/1.png';

const SLUG = 'happy-tunes';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          Check out our playlist! If you ignore any background vocals, these
          songs should fill you with joy.
        </FlavorText>
        <InfoIcon>
          All of the content in this puzzle is available in{' '}
          <a href="https://docs.google.com/spreadsheets/d/1uobcSyqacRVWZJ-tTMVveJlAvAt2uriWGZ6vwDrUiDo/edit?usp=sharing">
            this Google Sheet
          </a>
          . Click on the stick figure image to open it in a new window.
        </InfoIcon>
        <p>
          <a href={image0} target="_blank">
            <SheetableImage alt="Stick figures" src={image0} title="" />
          </a>
          <br />
          <SheetableImage alt="Spotify playlist" src={playlist} title="" />
        </p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
