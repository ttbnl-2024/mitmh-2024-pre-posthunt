import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/asphodel/0.png';
import flowers from 'assets/puzzles/asphodel/asphodel_flowers.png';

const SLUG = 'asphodel';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    // Purposefully not having copyData because the Google sheet is better.
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>
          You spot the ferrymaster to the deceased rowing a spirit down the
          river. She sails past you, looking wistfully at a white expanse full
          of blooming flowers…
        </FlavorText>
        <div className={cx(NO_COPY_CLASS)}>
          <InfoIcon>
            For a Google sheet for copying and filling out, use any one of the
            following five links:{' '}
            <a href="https://docs.google.com/spreadsheets/d/1C9AMKcvuUzg73DrVor3cWCAFdzJfwEjXQhh5U4El8nw/edit">
              1
            </a>
            ,{' '}
            <a href="https://docs.google.com/spreadsheets/d/1RxpaQu6rhr3j_JerCHKxTPW4VsU3Zlur0ivjGHeH2Bg/edit">
              2
            </a>
            ,{' '}
            <a href="https://docs.google.com/spreadsheets/d/1eDrXgMOStzXmhFhKedwAsZN152nGDMECdeByPZ2ebG4/edit">
              3
            </a>
            ,{' '}
            <a href="https://docs.google.com/spreadsheets/d/1ePy7leZzHTq-ai61rqx4Wy6DScyahOMiTJAMnzz_m3o/edit">
              4
            </a>
            ,{' '}
            <a href="https://docs.google.com/spreadsheets/d/1wiUfW3v431APXecpzA-py81hN493iG4dk_VB6V0ukvw/edit">
              5
            </a>
            . The sheets are identical, and solely for spreading out load.
          </InfoIcon>
          <InfoIcon className={cx(NO_COPY_CLASS)}>
            Click on the image below to open it in a new window.
          </InfoIcon>
        </div>

        <p>
          <a href={image0} target="_blank">
            <SheetableImage
              alt="Top: A bridge under a dark sky, reflected in a pool of red water.

Bottom: A grid full of flowers."
              src={image0}
              title=""
            />
          </a>
        </p>
        <InfoIcon>Click to view larger image in a new tab.</InfoIcon>
        <a href={flowers} target="_blank">
          <SheetableImage src={flowers} />
        </a>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
