import cx from 'classnames';
import React, { FC, useRef } from 'react';

import useDynamicEncrypted from 'utils/encrypted';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'marathon-block-pushing-game';

interface BlockPushingPrivate {
  sokoban?: boolean;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);

  const data = puzzleData.private as BlockPushingPrivate;

  const Sokoban = useDynamicEncrypted<{}>(
    `puzzles/${SLUG}/marathon-block-pushing-game_sokoban`,
    { enabled: !!data.sokoban }
  );

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          <a href="https://www.puzzlescript.net/play.html?p=00ccdd45f162b8d053b7f5fb52c6050b">
            https://www.puzzlescript.net/play.html?p=00ccdd45f162b8d053b7f5fb52c6050b
          </a>
        </p>
        {!!data.sokoban && (
          <>
            <hr className="my-4" />
            <Sokoban />
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
