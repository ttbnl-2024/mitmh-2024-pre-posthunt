import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/jigsaw-sudoku/0.png';
import image1 from 'assets/puzzles/jigsaw-sudoku/1.png';
import image2 from 'assets/puzzles/jigsaw-sudoku/2.png';
import image3 from 'assets/puzzles/jigsaw-sudoku/3.png';
import image4 from 'assets/puzzles/jigsaw-sudoku/4.png';
import image5 from 'assets/puzzles/jigsaw-sudoku/5.png';
import image6 from 'assets/puzzles/jigsaw-sudoku/6.png';
import image7 from 'assets/puzzles/jigsaw-sudoku/7.png';
import image8 from 'assets/puzzles/jigsaw-sudoku/8.png';
import image9 from 'assets/puzzles/jigsaw-sudoku/9.png';
import image10 from 'assets/puzzles/jigsaw-sudoku/10.png';
import image11 from 'assets/puzzles/jigsaw-sudoku/11.png';
import image12 from 'assets/puzzles/jigsaw-sudoku/12.png';
import image13 from 'assets/puzzles/jigsaw-sudoku/13.png';
import image14 from 'assets/puzzles/jigsaw-sudoku/14.png';
import image15 from 'assets/puzzles/jigsaw-sudoku/15.png';
import image16 from 'assets/puzzles/jigsaw-sudoku/16.png';
import image17 from 'assets/puzzles/jigsaw-sudoku/17.png';
import image18 from 'assets/puzzles/jigsaw-sudoku/18.png';
import image19 from 'assets/puzzles/jigsaw-sudoku/19.png';
import image20 from 'assets/puzzles/jigsaw-sudoku/20.png';
import image21 from 'assets/puzzles/jigsaw-sudoku/21.png';
import image22 from 'assets/puzzles/jigsaw-sudoku/22.png';
import image23 from 'assets/puzzles/jigsaw-sudoku/23.png';
import image24 from 'assets/puzzles/jigsaw-sudoku/24.png';
import image25 from 'assets/puzzles/jigsaw-sudoku/25.png';
import image26 from 'assets/puzzles/jigsaw-sudoku/26.png';
import image27 from 'assets/puzzles/jigsaw-sudoku/27.png';
import image28 from 'assets/puzzles/jigsaw-sudoku/28.png';
import image29 from 'assets/puzzles/jigsaw-sudoku/29.png';
import image30 from 'assets/puzzles/jigsaw-sudoku/30.png';
import image31 from 'assets/puzzles/jigsaw-sudoku/31.png';
import image32 from 'assets/puzzles/jigsaw-sudoku/32.png';
import image33 from 'assets/puzzles/jigsaw-sudoku/33.png';
import image34 from 'assets/puzzles/jigsaw-sudoku/34.png';
import image35 from 'assets/puzzles/jigsaw-sudoku/35.png';
import image36 from 'assets/puzzles/jigsaw-sudoku/36.png';
import image37 from 'assets/puzzles/jigsaw-sudoku/37.png';
import image38 from 'assets/puzzles/jigsaw-sudoku/38.png';
import image39 from 'assets/puzzles/jigsaw-sudoku/39.png';
import image40 from 'assets/puzzles/jigsaw-sudoku/40.png';
import image41 from 'assets/puzzles/jigsaw-sudoku/41.png';
import image42 from 'assets/puzzles/jigsaw-sudoku/42.png';
import image43 from 'assets/puzzles/jigsaw-sudoku/43.png';
import image44 from 'assets/puzzles/jigsaw-sudoku/44.png';
import image45 from 'assets/puzzles/jigsaw-sudoku/45.png';
import image46 from 'assets/puzzles/jigsaw-sudoku/46.png';
import image47 from 'assets/puzzles/jigsaw-sudoku/47.png';
import image48 from 'assets/puzzles/jigsaw-sudoku/48.png';
import image49 from 'assets/puzzles/jigsaw-sudoku/49.png';
import image50 from 'assets/puzzles/jigsaw-sudoku/50.png';
import image51 from 'assets/puzzles/jigsaw-sudoku/51.png';
import image52 from 'assets/puzzles/jigsaw-sudoku/52.png';
import image53 from 'assets/puzzles/jigsaw-sudoku/53.png';
import image54 from 'assets/puzzles/jigsaw-sudoku/54.png';
import image55 from 'assets/puzzles/jigsaw-sudoku/55.png';
import image56 from 'assets/puzzles/jigsaw-sudoku/56.png';
import image57 from 'assets/puzzles/jigsaw-sudoku/57.png';
import zip from 'assets/puzzles/jigsaw-sudoku/jigsaw-sudoku-pieces.zip';

const SLUG = 'jigsaw-sudoku';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <a href={zip}>Images available as a zip.</a>
        </InfoIcon>
        <p>
          Every digit shows up at least once, but no more than twice on each of
          these pieces.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image0}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image1}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image2}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image3}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image4}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image5}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image6}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image7}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image8}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image9}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image10}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image11}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image12}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image13}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image14}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image15}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image16}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image17}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image18}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image19}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image20}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image21}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image22}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image23}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image24}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image25}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image26}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image27}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image28}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image29}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image30}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image31}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image32}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image33}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image34}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image35}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image36}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image37}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image38}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image39}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image40}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image41}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image42}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image43}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image44}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image45}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image46}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image47}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image48}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image49}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image50}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image51}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image52}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image53}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image54}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image55}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image56}
            title=""
          />
          <SheetableImage
            className="flex-none object-contain"
            alt=""
            src={image57}
            title=""
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
