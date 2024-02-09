import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image1 from 'assets/puzzles/mosaic/1.jpg';
import image2 from 'assets/puzzles/mosaic/2.jpg';
import image3 from 'assets/puzzles/mosaic/3.jpg';
import image4 from 'assets/puzzles/mosaic/4.jpg';
import image5 from 'assets/puzzles/mosaic/5.jpg';
import image6 from 'assets/puzzles/mosaic/6.jpg';
import image7 from 'assets/puzzles/mosaic/7.jpg';
import image8 from 'assets/puzzles/mosaic/8.jpg';
import image9 from 'assets/puzzles/mosaic/9.jpg';
import image10 from 'assets/puzzles/mosaic/10.jpg';
import image11 from 'assets/puzzles/mosaic/11.jpg';
import image12 from 'assets/puzzles/mosaic/12.jpg';
import image13 from 'assets/puzzles/mosaic/13.jpg';
import image14 from 'assets/puzzles/mosaic/14.jpg';
import image15 from 'assets/puzzles/mosaic/15.jpg';
import image16 from 'assets/puzzles/mosaic/16.jpg';
import image17 from 'assets/puzzles/mosaic/17.jpg';
import image18 from 'assets/puzzles/mosaic/18.jpg';
import image19 from 'assets/puzzles/mosaic/19.jpg';
import image20 from 'assets/puzzles/mosaic/20.jpg';
import image21 from 'assets/puzzles/mosaic/21.jpg';
import image22 from 'assets/puzzles/mosaic/22.jpg';
import image23 from 'assets/puzzles/mosaic/23.jpg';
import image24 from 'assets/puzzles/mosaic/24.jpg';
import image25 from 'assets/puzzles/mosaic/25.jpg';
import image26 from 'assets/puzzles/mosaic/26.jpg';
import image27 from 'assets/puzzles/mosaic/27.jpg';
import image28 from 'assets/puzzles/mosaic/28.jpg';
import image29 from 'assets/puzzles/mosaic/29.jpg';
import image30 from 'assets/puzzles/mosaic/30.jpg';
import image31 from 'assets/puzzles/mosaic/31.jpg';
import image32 from 'assets/puzzles/mosaic/32.jpg';
import image33 from 'assets/puzzles/mosaic/33.jpg';
import image34 from 'assets/puzzles/mosaic/34.jpg';
import image35 from 'assets/puzzles/mosaic/35.jpg';
import image36 from 'assets/puzzles/mosaic/36.jpg';
import image37 from 'assets/puzzles/mosaic/37.jpg';
import image38 from 'assets/puzzles/mosaic/38.jpg';
import image39 from 'assets/puzzles/mosaic/39.jpg';
import image40 from 'assets/puzzles/mosaic/40.jpg';
import image41 from 'assets/puzzles/mosaic/41.jpg';
import image42 from 'assets/puzzles/mosaic/42.jpg';
import image43 from 'assets/puzzles/mosaic/43.jpg';
import image44 from 'assets/puzzles/mosaic/44.jpg';
import image45 from 'assets/puzzles/mosaic/45.jpg';
import image46 from 'assets/puzzles/mosaic/46.jpg';
import image47 from 'assets/puzzles/mosaic/47.jpg';
import image48 from 'assets/puzzles/mosaic/48.jpg';
import image49 from 'assets/puzzles/mosaic/49.jpg';
import image50 from 'assets/puzzles/mosaic/50.jpg';
import image51 from 'assets/puzzles/mosaic/51.jpg';
import image52 from 'assets/puzzles/mosaic/52.jpg';
import image53 from 'assets/puzzles/mosaic/53.jpg';
import image54 from 'assets/puzzles/mosaic/54.jpg';
import image55 from 'assets/puzzles/mosaic/55.jpg';
import image56 from 'assets/puzzles/mosaic/56.jpg';

// prettier-ignore
const images = [
  [image1 ,  image2 ,  image3 ,  image4 ,  image5 ,  image6 ,  image7 ],
  [image8 ,  image9 ,  image10,  image11,  image12,  image13,  image14],
  [image15,  image16,  image17,  image18,  image19,  image20,  image21],
  [image22,  image23,  image24,  image25,  image26,  image27,  image28],
  [image29,  image30,  image31,  image32,  image33,  image34,  image35],
  [image36,  image37,  image38,  image39,  image40,  image41,  image42],
  [image43,  image44,  image45,  image46,  image47,  image48,  image49],
  [image50,  image51,  image52,  image53,  image54,  image55,  image56],
];

const SLUG = 'mosaic';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click any image to open it in a new window.
        </InfoIcon>
        <Table className={cx(NO_COPY_CLASS, 'grid-of-images')}>
          <tbody>
            {images.map((row, r) => (
              <tr key={`row-${r}`}>
                {row.map((image, c) => (
                  <td key={`cell-${r}-${c}`} className="relative">
                    <span
                      className="absolute top-[0px] left-[0px] bg-[#00000080] text-white text-[80%]"
                    >
                      &nbsp;{`${r * 7 + c + 1}`}&nbsp;
                    </span>
                    <a target="_blank" href={image}>
                      <SheetableImage
                        alt={`image ${r * 7 + c + 1}`}
                        src={image}
                        title=""
                      />
                    </a>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            {images.map((row, r) => (
              <tr key={`row-${r}`}>
                {row.map((image, c) => (
                  <td key={`cell-${r}-${c}`} className="relative">
                    <SheetableImage
                      alt={`image ${r * 7 + c + 1}`}
                      src={image}
                      title=""
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            {images.map((row, r) => (
              <tr key={`hidden-row-${r}`}>
                {row.map((image, c) => (
                  <td key={`hidden-cell-${r}-${c}`}>{`${r * 7 + c + 1}`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        .grid-of-images td {
          padding: 0 !important;
          border: 2px solid black;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
