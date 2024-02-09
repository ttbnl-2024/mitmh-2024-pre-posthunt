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

import image0 from 'assets/puzzles/a-triangular-space/0.png';
import b1 from 'assets/puzzles/a-triangular-space/b1.png';
import b2 from 'assets/puzzles/a-triangular-space/b2.png';
import b3 from 'assets/puzzles/a-triangular-space/b3.png';
import b4 from 'assets/puzzles/a-triangular-space/b4.png';
import b5 from 'assets/puzzles/a-triangular-space/b5.png';
import b6 from 'assets/puzzles/a-triangular-space/b6.png';
import l1 from 'assets/puzzles/a-triangular-space/l1.png';
import l2 from 'assets/puzzles/a-triangular-space/l2.png';
import l3 from 'assets/puzzles/a-triangular-space/l3.png';
import l4 from 'assets/puzzles/a-triangular-space/l4.png';
import l5 from 'assets/puzzles/a-triangular-space/l5.png';
import l6 from 'assets/puzzles/a-triangular-space/l6.png';
import r1 from 'assets/puzzles/a-triangular-space/r1.png';
import r2 from 'assets/puzzles/a-triangular-space/r2.png';
import r3 from 'assets/puzzles/a-triangular-space/r3.png';
import r4 from 'assets/puzzles/a-triangular-space/r4.png';
import r5 from 'assets/puzzles/a-triangular-space/r5.png';
import r6 from 'assets/puzzles/a-triangular-space/r6.png';

const SLUG = 'a-triangular-space';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The sum of the squares of any two sides of any triangle equals twice
          the square on half the third side, together with twice the square on
          the median bisecting the third side.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click on any image along the edge to open the image in a new window.
        </InfoIcon>
        <div className="class-0">
          <a
            target="_blank"
            style={{ left: '42.2%', top: '15.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l1}
          ></a>
          <a
            target="_blank"
            style={{ left: '37.7%', top: '25.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l2}
          ></a>
          <a
            target="_blank"
            style={{ left: '33.2%', top: '35.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l3}
          ></a>
          <a
            target="_blank"
            style={{ left: '28.7%', top: '45.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l4}
          ></a>
          <a
            target="_blank"
            style={{ left: '24.2%', top: '55.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l5}
          ></a>
          <a
            target="_blank"
            style={{ left: '19.7%', top: '65.3%' }}
            className={cx('left', NO_COPY_CLASS)}
            href={l6}
          ></a>
          <a
            target="_blank"
            style={{ left: '59.5%', top: '16.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r1}
          ></a>
          <a
            target="_blank"
            style={{ left: '64.0%', top: '26.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r2}
          ></a>
          <a
            target="_blank"
            style={{ left: '68.5%', top: '36.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r3}
          ></a>
          <a
            target="_blank"
            style={{ left: '73.0%', top: '46.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r4}
          ></a>
          <a
            target="_blank"
            style={{ left: '77.5%', top: '56.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r5}
          ></a>
          <a
            target="_blank"
            style={{ left: '82.0%', top: '66.2%' }}
            className={cx('right', NO_COPY_CLASS)}
            href={r6}
          ></a>
          <a
            target="_blank"
            style={{ left: '28.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b1}
          ></a>
          <a
            target="_blank"
            style={{ left: '37.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b2}
          ></a>
          <a
            target="_blank"
            style={{ left: '46.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b3}
          ></a>
          <a
            target="_blank"
            style={{ left: '55.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b4}
          ></a>
          <a
            target="_blank"
            style={{ left: '64.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b5}
          ></a>
          <a
            target="_blank"
            style={{ left: '73.8%', top: '81.3%' }}
            className={cx('bottom', NO_COPY_CLASS)}
            href={b6}
          ></a>
          <SheetableImage alt="" src={image0} title="" />
        </div>
        <p className={cx(HIDDEN_CLASS)}>
          <a href={l1}>Left image 1</a>
          <br />
          <a href={l2}>Left image 2</a>
          <br />
          <a href={l3}>Left image 3</a>
          <br />
          <a href={l4}>Left image 4</a>
          <br />
          <a href={l5}>Left image 5</a>
          <br />
          <a href={l6}>Left image 6</a>
          <br />
          <a href={r1}>Right image 1</a>
          <br />
          <a href={r2}>Right image 2</a>
          <br />
          <a href={r3}>Right image 3</a>
          <br />
          <a href={r4}>Right image 4</a>
          <br />
          <a href={r5}>Right image 5</a>
          <br />
          <a href={r6}>Right image 6</a>
          <br />
          <a href={b1}>Bottom image 1</a>
          <br />
          <a href={b2}>Bottom image 2</a>
          <br />
          <a href={b3}>Bottom image 3</a>
          <br />
          <a href={b4}>Bottom image 4</a>
          <br />
          <a href={b5}>Bottom image 5</a>
          <br />
          <a href={b6}>Bottom image 6</a>
          <br />
        </p>
      </div>

      <style jsx>{`
        .class-0 {
          position: relative;
          width: fit-content;
        }
        .left {
          position: absolute;
          width: 15.6%;
          height: 11.5%;
          transform: translate(-50%, 0) rotate(30deg);
        }
        .right {
          position: absolute;
          width: 13.5%;
          height: 11.5%;
          transform: translate(-50%, 0) rotate(-30deg);
        }
        .bottom {
          position: absolute;
          width: 9%;
          height: 12.5%;
          transform: translate(-50%, 0);
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
