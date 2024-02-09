import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'hydra';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You slowly slosh your way through the alligator-infested swamps of
          Florida, wondering what sort of mythical peril you will find here when
          SNAP! SNAP! A couple sets of giant scaly jaws attempt to separate your
          head from your body. A couple quick slashes from your vine-clearing
          machete deliver you from the immediate danger, severing those jaws
          from their scaly bodies. Uh... make that their scaly <u>body</u>.
        </FlavorText>
        <FlavorText>
          As you pause to catch your breath, you see two additional long necks
          starting to grow out of each stump that your slicing and dicing had
          just created, with beady eyes and additional malevolent jaws starting
          to form at the ends of those necks...
        </FlavorText>
        <FlavorText>
          Uh-oh... you're going to need a strategy to deal with this, and
          pronto...
        </FlavorText>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
