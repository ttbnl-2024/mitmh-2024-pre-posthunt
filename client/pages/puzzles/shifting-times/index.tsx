import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/shifting-times/0.png';
import image0s from 'assets/puzzles/shifting-times/0-small.png';

const SLUG = 'shifting-times';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <InfoIcon>
        Click the image to open it in a new window. Image text available in
        copy-to-clipboard.
      </InfoIcon>
      <div ref={ref}>
        <a target="_blank" href={image0}>
          <SheetableImage src={image0s} alt="" title="" />
        </a>

        <div className={cx(HIDDEN_CLASS)}>
          <p>
            <b>See puzzle for images.</b>
          </p>
          <p>(Special Puzzle Edition) Shifting Times (Friday, January 12)</p>
          <p>Jr, abe pay man a jay</p>
          <p>zest got, bored doc aids ants grid</p>
          <p>Map has a tag charm</p>
          <p>wAR Guru girl nina ib due</p>
          <p>Pay yale a yr. or Brad jab ham</p>
          <p>bRag As A IT AXed arUBA</p>
          <p>Bake racer fair why bug type</p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
