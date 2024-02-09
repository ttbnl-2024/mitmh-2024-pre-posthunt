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

import image0 from 'assets/puzzles/what-is-the-moon-made-of/0.png';
import image1 from 'assets/puzzles/what-is-the-moon-made-of/1.png';
import belPaese from 'assets/puzzles/what-is-the-moon-made-of/bel-paese.jpg';
import caerphilly from 'assets/puzzles/what-is-the-moon-made-of/caerphilly.jpg';
import cheshire from 'assets/puzzles/what-is-the-moon-made-of/cheshire.jpg';
import danishBlue from 'assets/puzzles/what-is-the-moon-made-of/danish-blue.jpg';
import dorsetBlueVinney from 'assets/puzzles/what-is-the-moon-made-of/dorset-blue-vinney.jpg';
import doubleGloucester from 'assets/puzzles/what-is-the-moon-made-of/double-gloucester.jpg';
import emmental from 'assets/puzzles/what-is-the-moon-made-of/emmental.jpg';
import norwegianJarlsberg from 'assets/puzzles/what-is-the-moon-made-of/jarlsberg.jpg';
import lancashire from 'assets/puzzles/what-is-the-moon-made-of/lancashire.jpg';
import pontLEveque from 'assets/puzzles/what-is-the-moon-made-of/pont-l-eveque.jpg';
import portSalut from 'assets/puzzles/what-is-the-moon-made-of/port-salut.jpg';
import redLeicester from 'assets/puzzles/what-is-the-moon-made-of/red-leicester.jpg';
import redWindsor from 'assets/puzzles/what-is-the-moon-made-of/red-windsor.jpg';
import whiteStilton from 'assets/puzzles/what-is-the-moon-made-of/white-stilton.jpg';

const SLUG = 'what-is-the-moon-made-of';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Wow! This cheese store has replenished their supplies! They usually
          have only empty shelves and bouzouki music.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click each small image for a larger image.
        </InfoIcon>
        {/* Laid out using https://zaneray.com/responsive-image-map/ */}
        <div className="relative select-none">
          <a
            href={dorsetBlueVinney}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '10.89%',
              top: '24.47%',
              width: '9.89%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={dorsetBlueVinney} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '20.89%',
              top: '24.71%',
              width: '9.89%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={pontLEveque}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '31%',
              top: '24.71%',
              width: '9.67%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={pontLEveque} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={norwegianJarlsberg}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '41%',
              top: '24.94%',
              width: '9.78%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={norwegianJarlsberg} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={dorsetBlueVinney}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '51%',
              top: '24.94%',
              width: '9.67%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={dorsetBlueVinney} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={emmental}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '60.89%',
              top: '24.71%',
              width: '9.67%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={emmental} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '70.67%',
              top: '24.94%',
              width: '9.78%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '80.67%',
              top: '24.94%',
              width: '9.78%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '11%',
              top: '50.35%',
              width: '9.67%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={danishBlue}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '20.78%',
              top: '50.35%',
              width: '9.67%',
              height: '16.24%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={danishBlue} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '30.56%',
              top: '50.12%',
              width: '9.67%',
              height: '16%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={whiteStilton}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '40.67%',
              top: '50.12%',
              width: '9.22%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={whiteStilton} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={portSalut}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '50.33%',
              top: '50.12%',
              width: '9.89%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={portSalut} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={emmental}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '60.44%',
              top: '50.35%',
              width: '9.67%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={emmental} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '70.33%',
              top: '50.12%',
              width: '9.78%',
              height: '16%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '80.33%',
              top: '50.12%',
              width: '9.67%',
              height: '15.76%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '20.78%',
              top: '75.06%',
              width: '9.67%',
              height: '15.29%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={doubleGloucester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '30.56%',
              top: '75.06%',
              width: '9.67%',
              height: '15.53%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={doubleGloucester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '40.33%',
              top: '74.82%',
              width: '9.78%',
              height: '16%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={doubleGloucester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '50.11%',
              top: '75.06%',
              width: '9.56%',
              height: '15.29%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={doubleGloucester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={lancashire}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '59.89%',
              top: '74.82%',
              width: '9.67%',
              height: '16%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={lancashire} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '69.89%',
              top: '75.06%',
              width: '9.67%',
              height: '15.29%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className={cx(NO_COPY_CLASS)}
          />
        </div>
        <br className={cx(HIDDEN_CLASS)} />
        <div className="relative select-none">
          <a
            href={pontLEveque}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '19.67%',
              top: '19.15%',
              width: '9.56%',
              height: '17.16%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={pontLEveque} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={norwegianJarlsberg}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '29.56%',
              top: '19.4%',
              width: '9.67%',
              height: '16.92%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={norwegianJarlsberg} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={doubleGloucester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '39.33%',
              top: '19.65%',
              width: '9.67%',
              height: '16.42%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={doubleGloucester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={cheshire}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '49.11%',
              top: '19.65%',
              width: '9.67%',
              height: '16.42%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={cheshire} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={dorsetBlueVinney}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '59%',
              top: '19.9%',
              width: '9.67%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={dorsetBlueVinney} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '68.89%',
              top: '20.15%',
              width: '9.78%',
              height: '15.92%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={caerphilly}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '9.78%',
              top: '46.77%',
              width: '9.56%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={caerphilly} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={emmental}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '19.67%',
              top: '46.77%',
              width: '9.67%',
              height: '16.67%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={emmental} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '29.44%',
              top: '46.77%',
              width: '9.67%',
              height: '16.42%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={whiteStilton}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '39.33%',
              top: '46.77%',
              width: '9.22%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={whiteStilton} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={belPaese}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '49.11%',
              top: '46.77%',
              width: '9.56%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={belPaese} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '58.89%',
              top: '46.77%',
              width: '9.67%',
              height: '16.42%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={doubleGloucester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '69%',
              top: '46.77%',
              width: '9.67%',
              height: '16.42%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={doubleGloucester} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '78.78%',
              top: '47.01%',
              width: '9.78%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={whiteStilton}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '29.56%',
              top: '72.39%',
              width: '9.67%',
              height: '15.92%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={whiteStilton} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redWindsor}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '39.44%',
              top: '72.39%',
              width: '9.78%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redWindsor} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={belPaese}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '49.33%',
              top: '72.39%',
              width: '9.56%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={belPaese} />
          </a>
          <br className={cx(HIDDEN_CLASS)} />
          <a
            href={redLeicester}
            className="opacity-0"
            style={{
              position: 'absolute',
              left: '59.22%',
              top: '72.39%',
              width: '9.67%',
              height: '16.17%',
              zIndex: '2',
            }}
          >
            <SheetableImage src={redLeicester} />
          </a>
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className={cx(NO_COPY_CLASS)}
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
