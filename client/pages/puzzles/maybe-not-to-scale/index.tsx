import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { NO_COPY_CLASS } from 'components/copy';
import Crossword from 'components/crossword';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/maybe-not-to-scale/0.png';
import image1 from 'assets/puzzles/maybe-not-to-scale/1.png';
import image2 from 'assets/puzzles/maybe-not-to-scale/2.png';
import image3 from 'assets/puzzles/maybe-not-to-scale/3.png';
import image4 from 'assets/puzzles/maybe-not-to-scale/4.png';
import image5 from 'assets/puzzles/maybe-not-to-scale/5.png';
import image6 from 'assets/puzzles/maybe-not-to-scale/6.png';
import image7 from 'assets/puzzles/maybe-not-to-scale/7.png';
import image8 from 'assets/puzzles/maybe-not-to-scale/8.png';
import image9 from 'assets/puzzles/maybe-not-to-scale/9.png';
import image10 from 'assets/puzzles/maybe-not-to-scale/10.png';
import image11 from 'assets/puzzles/maybe-not-to-scale/11.png';
import image12 from 'assets/puzzles/maybe-not-to-scale/12.png';
import image13 from 'assets/puzzles/maybe-not-to-scale/13.png';
import image14 from 'assets/puzzles/maybe-not-to-scale/14.png';
import image15 from 'assets/puzzles/maybe-not-to-scale/15.png';
import image16 from 'assets/puzzles/maybe-not-to-scale/16.png';
import image17 from 'assets/puzzles/maybe-not-to-scale/17.png';
import image18 from 'assets/puzzles/maybe-not-to-scale/18.png';
import image19 from 'assets/puzzles/maybe-not-to-scale/19.png';
import image20 from 'assets/puzzles/maybe-not-to-scale/20.png';
import image21 from 'assets/puzzles/maybe-not-to-scale/21.png';
import image22 from 'assets/puzzles/maybe-not-to-scale/22.png';
import image23 from 'assets/puzzles/maybe-not-to-scale/23.png';
import image24 from 'assets/puzzles/maybe-not-to-scale/24.png';
import image0HRes from 'assets/puzzles/maybe-not-to-scale/highres/0.png';
import image1HRes from 'assets/puzzles/maybe-not-to-scale/highres/1.png';
import image2HRes from 'assets/puzzles/maybe-not-to-scale/highres/2.png';
import image3HRes from 'assets/puzzles/maybe-not-to-scale/highres/3.png';
import image4HRes from 'assets/puzzles/maybe-not-to-scale/highres/4.png';
import image5HRes from 'assets/puzzles/maybe-not-to-scale/highres/5.png';
import image6HRes from 'assets/puzzles/maybe-not-to-scale/highres/6.png';
import image7HRes from 'assets/puzzles/maybe-not-to-scale/highres/7.png';
import image8HRes from 'assets/puzzles/maybe-not-to-scale/highres/8.png';
import image9HRes from 'assets/puzzles/maybe-not-to-scale/highres/9.png';
import image10HRes from 'assets/puzzles/maybe-not-to-scale/highres/10.png';
import image11HRes from 'assets/puzzles/maybe-not-to-scale/highres/11.png';
import image12HRes from 'assets/puzzles/maybe-not-to-scale/highres/12.png';
import image13HRes from 'assets/puzzles/maybe-not-to-scale/highres/13.png';
import image14HRes from 'assets/puzzles/maybe-not-to-scale/highres/14.png';
import image15HRes from 'assets/puzzles/maybe-not-to-scale/highres/15.png';
import image16HRes from 'assets/puzzles/maybe-not-to-scale/highres/16.png';
import image17HRes from 'assets/puzzles/maybe-not-to-scale/highres/17.png';
import image18HRes from 'assets/puzzles/maybe-not-to-scale/highres/18.png';
import image19HRes from 'assets/puzzles/maybe-not-to-scale/highres/19.png';
import image20HRes from 'assets/puzzles/maybe-not-to-scale/highres/20.png';
import image21HRes from 'assets/puzzles/maybe-not-to-scale/highres/21.png';
import image22HRes from 'assets/puzzles/maybe-not-to-scale/highres/22.png';
import image23HRes from 'assets/puzzles/maybe-not-to-scale/highres/23.png';
import image24HRes from 'assets/puzzles/maybe-not-to-scale/highres/24.png';
import highresZip from 'assets/puzzles/maybe-not-to-scale/highres/highres.zip';

const SLUG = 'maybe-not-to-scale';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Have you heard? These sketches are really pushing the boundaries of
          art, but something else seems to have gotten jumbled into each set.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click each image to open a high-resolution version in a new window, or
          click <a href={highresZip}>here</a> to download all the
          high-resolution images in a zip file.
        </InfoIcon>
        <div className="text-center mb-8">
          <h3>THE FAR-REACHING SET</h3>
          <ul className="list-none pl-0">
            <li className="list-none pl-0">
              <a target="_blank" href={image0HRes}>
                <SheetableImage
                  alt=""
                  src={image0}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image1HRes}>
                <SheetableImage
                  alt=""
                  src={image1}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image2HRes}>
                <SheetableImage
                  alt=""
                  src={image2}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image3HRes}>
                <SheetableImage
                  alt=""
                  src={image3}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image4HRes}>
                <SheetableImage
                  alt=""
                  src={image4}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
          </ul>
          <br />
          <h3>THE FEDERAL SET</h3>
          <ul className="list-none pl-0">
            <li>
              <a target="_blank" href={image5HRes}>
                <SheetableImage
                  alt=""
                  src={image5}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image6HRes}>
                <SheetableImage
                  alt=""
                  src={image6}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image7HRes}>
                <SheetableImage
                  alt=""
                  src={image7}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image8HRes}>
                <SheetableImage
                  alt=""
                  src={image8}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image9HRes}>
                <SheetableImage
                  alt=""
                  src={image9}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
          </ul>
          <br />
          <h3>THE ISOLATED SET</h3>
          <ul className="list-none pl-0">
            <li>
              <a target="_blank" href={image10HRes}>
                <SheetableImage
                  alt=""
                  src={image10}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image11HRes}>
                <SheetableImage
                  alt=""
                  src={image11}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image12HRes}>
                <SheetableImage
                  alt=""
                  src={image12}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image13HRes}>
                <SheetableImage
                  alt=""
                  src={image13}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image14HRes}>
                <SheetableImage
                  alt=""
                  src={image14}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
          </ul>
          <br />
          <h3>THE NOBLE SET</h3>
          <ul className="list-none pl-0">
            <li>
              <a target="_blank" href={image15HRes}>
                <SheetableImage
                  alt=""
                  src={image15}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image16HRes}>
                <SheetableImage
                  alt=""
                  src={image16}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image17HRes}>
                <SheetableImage
                  alt=""
                  src={image17}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image18HRes}>
                <SheetableImage
                  alt=""
                  src={image18}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image19HRes}>
                <SheetableImage
                  alt=""
                  src={image19}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
          </ul>
          <br />
          <h3>THE SUBMERGED SET</h3>
          <ul className="list-none pl-0">
            <li>
              <a target="_blank" href={image20HRes}>
                <SheetableImage
                  alt=""
                  src={image20}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image21HRes}>
                <SheetableImage
                  alt=""
                  src={image21}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image22HRes}>
                <SheetableImage
                  alt=""
                  src={image22}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image23HRes}>
                <SheetableImage
                  alt=""
                  src={image23}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href={image24HRes}>
                <SheetableImage
                  alt=""
                  src={image24}
                  title=""
                  className="inline-block w-[300px] my-2"
                />
              </a>
            </li>
          </ul>
          <h3>THE ??? SET</h3>
          <ul className="list-none pl-0">
            <li>The third letter is 9</li>
            <li>The fourth letter is 1</li>
            <li>The sixth letter is 4</li>
          </ul>
          <br />
          <h3>THE ??? SET</h3>
          <ul className="list-none pl-0">
            <li>The fourth letter is 3</li>
            <li>The sixth letter is 6</li>
          </ul>
          <br />
          <h3>THE ??? SET</h3>
          <ul className="list-none pl-0">
            <li>The first letter is 8</li>
            <li>The fifth letter is 2</li>
          </ul>
          <br />
          <h3>THE ??? SET</h3>
          <ul className="list-none pl-0">
            <li>The third letter is 12</li>
            <li>The fourth letter is 5</li>
          </ul>
          <br />
          <h3>THE ??? SET</h3>
          <ul className="list-none pl-0">
            <li>The fourth letter is 11</li>
            <li>The fifth letter is 7</li>
            <li>The eighth letter is 10</li>
          </ul>
        </div>
        <Crossword data={[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]} />
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
