import cx from 'classnames';
import React, { FC, Fragment, useRef } from 'react';

import useDynamicEncrypted from 'utils/encrypted';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/appease-the-minotaur/0.png';
import image1 from 'assets/puzzles/appease-the-minotaur/1.png';

const SLUG = 'appease-the-minotaur';

interface MinotaurData {
  numSolved: number;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const data = puzzleData.private as MinotaurData;
  const ref = useRef<HTMLDivElement>(null);

  let images: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    if (i < data.numSolved) {
      let MazeTile = useDynamicEncrypted<{}>(`puzzles/${SLUG}/${SLUG}_${i}`, {
        enabled: i < data.numSolved,
      });
      images.push(React.createElement(MazeTile, { key: i }));
    } else {
      images.push(
        <Fragment key={i}>
          <SheetableImage alt="" src={image1} title="" />
          <SheetableImage alt="" src={image1} title="" />
        </Fragment>
      );
    }
  }

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          If he really wants to make the grade, Theseus will need to escape the
          labyrinth and find an appropriate bribe that will convince the
          Minotaur that he's gotten his just deserts and his true beef is with
          someone else.
        </FlavorText>
        <InfoIcon>Click on the maze to open it in a new tab.</InfoIcon>
        <Link href={image0} target="_blank">
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </Link>
        <div className="grid grid-cols-2 items-center gap-y-4 my-6">
          {images}
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
