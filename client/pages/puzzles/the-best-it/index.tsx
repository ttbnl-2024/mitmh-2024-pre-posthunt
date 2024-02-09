import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'the-best-it';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Because not everyone can go to the best institute of technology!
        </FlavorText>
        Residence with a color in the name (6, 3)
        <IndexedBlank showEnum={false} label="4 5" tableClass="mt-0 mb-4" />
        Name of our beaver mascot (1, 4)
        <IndexedBlank showEnum={false} label="3" tableClass="mt-0 mb-4" />
        Name of our president (9, 3)
        <IndexedBlank showEnum={false} label="9" tableClass="mt-0 mb-4" />
        The coast we're located on (1, 1)
        <IndexedBlank showEnum={false} label="4" tableClass="mt-0 mb-4" />
        Winning NASA Big Ideas 2022 Project (3, 7)
        <IndexedBlank showEnum={false} label="5" tableClass="mt-0 mb-4" />
        Name of our sports teams (9, 6)
        <IndexedBlank showEnum={false} label="9" tableClass="mt-0 mb-4" />
        Famous quantum-physics Nobel Laureate (3, 12)
        <IndexedBlank showEnum={false} label="7 7" tableClass="mt-0 mb-4" />
        Most convenient dining facility open after midnight (6, 2)
        <IndexedBlank showEnum={false} label="6 4" tableClass="mt-0 mb-4" />
        Large party open to the entire campus (11, 5)
        <IndexedBlank showEnum={false} label="5 4 3 4" tableClass="mt-0 mb-4" />
        The thing that gets dropped during a house's tradition (5, 6)
        <IndexedBlank showEnum={false} label="5" tableClass="mt-0 mb-4" />
        Secondary school color (technically a shade) (3, 4)
        <IndexedBlank showEnum={false} label="6 4" tableClass="mt-0 mb-4" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
