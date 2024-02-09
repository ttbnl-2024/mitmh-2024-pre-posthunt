import cx from 'classnames';
import { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/chemistry/0.png';
import image1 from 'assets/puzzles/chemistry/1.png';
import image2 from 'assets/puzzles/chemistry/2.png';
import image3 from 'assets/puzzles/chemistry/3.png';
import image4 from 'assets/puzzles/chemistry/4.png';
import image5 from 'assets/puzzles/chemistry/5.png';
import image6 from 'assets/puzzles/chemistry/6.png';
import image7 from 'assets/puzzles/chemistry/7.png';
import image8 from 'assets/puzzles/chemistry/8.png';
import image9 from 'assets/puzzles/chemistry/9.png';
import image10 from 'assets/puzzles/chemistry/10.png';
import image11 from 'assets/puzzles/chemistry/11.png';

const SLUG = 'chemistry';
// prettier-ignore
const ENUMS = [
  [[7],     [6]],
  [[8],     [1]],
  [[6, 7],  [13]],
  [[8, 7],  [6]],
  [[7, 8],  [7]],
  [[10, 5], [12]],
  [[15],    [5]],
  [[7],     [7]],
  [[12],    [6]],
  [[5],     [3]],
  [[6],     [4]],
  [[4, 7],  [2]],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You let Medusa stir vessels for you so you could work on these
          reactions. What are the missing elements?
        </FlavorText>
        <ol className="space-y-5 pl-4">
          <li>
            <SheetableImage
              alt=""
              src={image0}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image1}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image2}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image3}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image4}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image5}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image6}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image7}
              title=""
              className="align-middle inline px-2 max-w-[60%]"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image8}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image9}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image10}
              title=""
              className="align-middle inline px-2"
            />
          </li>
          <li>
            <SheetableImage
              alt=""
              src={image11}
              title=""
              className="align-middle inline px-2"
            />
          </li>
        </ol>
        <br className={cx(HIDDEN_CLASS)} />
        {ENUMS.map(([blanks, idxs], key) => {
          return <IndexedBlank label={blanks} idxs={idxs} key={key} />;
        })}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
