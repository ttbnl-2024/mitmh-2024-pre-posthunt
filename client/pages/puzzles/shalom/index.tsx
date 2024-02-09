import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0_png from 'assets/puzzles/shalom/0.png';
import image0_svg from 'assets/puzzles/shalom/0.svg';
import image1_png from 'assets/puzzles/shalom/1.png';
import image1_svg from 'assets/puzzles/shalom/1.svg';
import image2_png from 'assets/puzzles/shalom/2.png';
import image2_svg from 'assets/puzzles/shalom/2.svg';
import image3_png from 'assets/puzzles/shalom/3.png';
import image3_svg from 'assets/puzzles/shalom/3.svg';
import image4_png from 'assets/puzzles/shalom/4.png';
import image4_svg from 'assets/puzzles/shalom/4.svg';

const SLUG = 'shalom';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <p className={cx(NO_COPY_CLASS)}>
          <img src={image0_svg} className={cx('w-full md:w-2/3 mx-auto')}></img>
          <br />
          <img src={image1_svg} className={cx('w-full md:w-2/3 mx-auto')}></img>
          <br />
          <img src={image2_svg} className={cx('w-full md:w-2/3 mx-auto')}></img>
          <br />
          <img src={image3_svg} className={cx('w-full md:w-2/3 mx-auto')}></img>
          <br />
          <img src={image4_svg} className={cx('w-full md:w-2/3 mx-auto')}></img>
          <br />
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          <p>
            Each image consists of a six-pointed star with clues on the six
            points. Each set starts with the clue on the top point, and
            continues clockwise.
          </p>
          <p>
            <SheetableImage src={image0_png} />
            <br />
            <b>Image 1</b>
            <br />
            The Beast's mate
            <br />
            Study of plants
            <br />
            NYC Park by the library
            <br />
            Alnwick or Conwy
            <br />
            No pins left to spare?
            <br />
            What you might do to Elmo?
          </p>
          <p>
            <SheetableImage src={image1_png} />
            <br />
            <b>Image 2</b>
            <br />
            Number on a periodic table
            <br />
            Agree
            <br />
            Put to use, as an army
            <br />
            Page spread
            <br />
            Not IRL
            <br />
            Cajun music in LA?
          </p>
          <p>
            <SheetableImage src={image2_png} />
            <br />
            <b>Image 3</b>
            <br />
            On all sides of
            <br />
            Plastic doll
            <br />
            Ensemble in a show
            <br />
            Contaminated
            <br />
            1, 106, or 18690
            <br />
            Approve, as a treaty
          </p>
          <p>
            <SheetableImage src={image3_png} />
            <br />
            <b>Image 4</b>
            <br />
            Kimberly, on Broadway
            <br />
            Alter or coins
            <br />
            Film
            <br />
            Stingy
            <br />
            Gizmo
            <br />
            Erotic or like saunas
          </p>
          <p>
            <SheetableImage src={image4_png} />
            <br />
            <b>Image 5</b>
            <br />
            "Star Trek" ensign Pavel
            <br />
            Breathe out
            <br />
            Accumulate
            <br />
            Arrogance
            <br />
            Shine
            <br />
            Hitchcock movie that was showered with praise?
          </p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
