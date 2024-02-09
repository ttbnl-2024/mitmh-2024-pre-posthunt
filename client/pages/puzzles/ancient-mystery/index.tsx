import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/ancient-mystery/0.png';
import image1 from 'assets/puzzles/ancient-mystery/1.png';
import image2 from 'assets/puzzles/ancient-mystery/2.png';
import image3 from 'assets/puzzles/ancient-mystery/3.png';
import image4 from 'assets/puzzles/ancient-mystery/4.png';
import image5 from 'assets/puzzles/ancient-mystery/5.png';
import image6 from 'assets/puzzles/ancient-mystery/6.png';
import image7 from 'assets/puzzles/ancient-mystery/7.png';

const SLUG = 'ancient-mystery';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          What did all the other speakers have in common that made the second
          speaker feel left out?
        </FlavorText>
        <div className="space-y-4">
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[8]} idxs={[6]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[8]} idxs={[4]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image2}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[4]} idxs={[1]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image3}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[3]} idxs={[2]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image4}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[6]} idxs={[2]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image5}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[6]} idxs={[4]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image6}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[4]} idxs={[2]} />
          <hr className={cx(NO_COPY_CLASS)} />
          <SheetableImage
            alt=""
            src={image7}
            title=""
            className="mx-auto w-full max-w-md"
          />
          <IndexedBlank label={[6]} idxs={[6]} />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
