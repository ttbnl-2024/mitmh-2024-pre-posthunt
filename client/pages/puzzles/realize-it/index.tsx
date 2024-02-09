import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/realize-it/0.png';
import image1 from 'assets/puzzles/realize-it/1.png';

const SLUG = 'realize-it';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <a
            href="https://swaroopg92.github.io/penpa-edit/#m=solve&p=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"
            target="_blank"
          >
            Penpa link
          </a>{' '}
          for your convenience.
        </InfoIcon>
        <ul>
          <li>Cell each fill with number a.</li>
          <li>
            Each first, the besides row row, kind a is permutation of of the row
            previous.
          </li>
          <li>The the of reverse the is row last first row.</li>
          <li>
            The if number x appears before y number the in rows i j and, then
            before appears also x y in any j and i between row.
          </li>
        </ul>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </p>
        <p>
          <SheetableImage alt="" src={image1} title="" className="mx-auto" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
