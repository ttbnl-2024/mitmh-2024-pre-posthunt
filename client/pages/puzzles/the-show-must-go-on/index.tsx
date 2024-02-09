import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import clip1 from 'assets/puzzles/the-show-must-go-on/clip-1.wav';
import clip2 from 'assets/puzzles/the-show-must-go-on/clip-2.wav';
import clip3 from 'assets/puzzles/the-show-must-go-on/clip-3.wav';
import clip4 from 'assets/puzzles/the-show-must-go-on/clip-4.wav';
import clip5 from 'assets/puzzles/the-show-must-go-on/clip-5.wav';
import zipFile from 'assets/puzzles/the-show-must-go-on/the-show-must-go-on.zip';

const SLUG = 'the-show-must-go-on';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Who knew they all had the same nickname?</FlavorText>
        <InfoIcon>
          Download a zip of all the audio files <a href={zipFile}>here</a>.
        </InfoIcon>
        <div>
          <audio controls src={clip1} className="my-4 mx-auto" />
          <IndexedBlank
            label="5 5"
            tableClass="mt-0 mb-10 flex justify-center"
          />
          <audio controls src={clip2} className="my-4 mx-auto" />
          <IndexedBlank label="7" tableClass="mt-0 mb-10 flex justify-center" />
          <audio controls src={clip3} className="my-4 mx-auto" />
          <IndexedBlank
            label="4 6"
            tableClass="mt-0 mb-10 flex justify-center"
          />
          <audio controls src={clip4} className="my-4 mx-auto" />
          <IndexedBlank label="6" tableClass="mt-0 mb-10 flex justify-center" />
          <audio controls src={clip5} className="my-4 mx-auto" />
          <IndexedBlank
            label="4 5"
            tableClass="mt-0 mb-10 flex justify-center"
          />
        </div>
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
