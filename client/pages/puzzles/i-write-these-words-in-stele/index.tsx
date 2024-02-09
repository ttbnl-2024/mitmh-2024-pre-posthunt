import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/i-write-these-words-in-stele/0.png';

const SLUG = 'i-write-these-words-in-stele';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          You come across a large stone slab, covered in unfamiliar symbols.
          Could this be the end?
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click the image to open it in a new window.
        </InfoIcon>
        <p>
          <a href={image0} target="_blank">
            <SheetableImage
              alt="a large stone slab, covered in unfamiliar symbols"
              src={image0}
              title="a large stone slab, covered in unfamiliar symbols"
            />
          </a>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
