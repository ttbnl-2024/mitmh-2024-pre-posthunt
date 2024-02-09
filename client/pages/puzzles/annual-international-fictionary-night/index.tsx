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

import image0 from 'assets/puzzles/annual-international-fictionary-night/0.png';
import image1 from 'assets/puzzles/annual-international-fictionary-night/1.png';
import image2 from 'assets/puzzles/annual-international-fictionary-night/2.png';
import image3 from 'assets/puzzles/annual-international-fictionary-night/3.png';
import image4 from 'assets/puzzles/annual-international-fictionary-night/4.png';
import image5 from 'assets/puzzles/annual-international-fictionary-night/5.png';
import image6 from 'assets/puzzles/annual-international-fictionary-night/6.png';
import image7 from 'assets/puzzles/annual-international-fictionary-night/7.png';
import image8 from 'assets/puzzles/annual-international-fictionary-night/8.png';
import image9 from 'assets/puzzles/annual-international-fictionary-night/9.png';
import image10 from 'assets/puzzles/annual-international-fictionary-night/10.png';
import image11 from 'assets/puzzles/annual-international-fictionary-night/11.png';
import image12 from 'assets/puzzles/annual-international-fictionary-night/12.png';
import image13 from 'assets/puzzles/annual-international-fictionary-night/13.png';
import image14 from 'assets/puzzles/annual-international-fictionary-night/14.png';
import image15 from 'assets/puzzles/annual-international-fictionary-night/15.png';
import image16 from 'assets/puzzles/annual-international-fictionary-night/16.png';
import image17 from 'assets/puzzles/annual-international-fictionary-night/17.png';
import image18 from 'assets/puzzles/annual-international-fictionary-night/18.png';
import image19 from 'assets/puzzles/annual-international-fictionary-night/19.png';
import image20 from 'assets/puzzles/annual-international-fictionary-night/20.png';
import image21 from 'assets/puzzles/annual-international-fictionary-night/21.png';

const SLUG = 'annual-international-fictionary-night';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  // prettier-ignore
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText className="invitation">
          You are hereby invited to our annual Fictionary night&mdash;our most
          meaning event of the year!
          <br />
          Below is a selection of past winning sessions for your reference.
          <br />
          C, M, and M-W
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <p className={cx(HIDDEN_CLASS)}>
          A card with a large question mark on the first line and the numbers 7/10 on
          the second line.
          <br />
          A card with a large question mark on the first line and the numbers
          14/16 on the second line.
          <br />
          A card that reads “Picard matching your bet (3)”.
          <br />
          A card that reads “A meteorologist’s special attack”.
          <br />
          A card with a large question mark on the first line and the numbers
          6/10 on the second line.
          <br />
          A card that reads “Scribes writing down instructions for starting the
          apocalypse (2, 7)”.
          <br />
          A card with a large question mark on the first line and the numbers
          1/10 on the second line.
          <br />
          A card that reads “A diet involving lowering your iron intake”.
          <br />
          A card that reads “Snubbing the Peach State (8, 4, 5, 3, 8)”.
          <br />
          A card with a large question mark on the first line and the numbers
          9/12 on the second line.
          <br />
          A card that reads “An animal that feeds on encyclopedias”.
          <br />
          A card that reads “60% of a brick or Toblerone”.
          <br />
          A card that reads “A state that makes breaking into your house
          possible.”
          <br />
          A card that reads “The steppe to which the Amazons banished their sons
          (2, 6)”.
          <br />
          A card that reads “Warning call at a Dairy Queen food fight (6, 7, 5)”.
          <br />
          A card with a large question mark on the first line and the numbers
          7/12 on the second line.
          <br />
          A card that reads “What’s happening to an Arctic soil layer”.
          <br />
          A card that reads “A dangerous Polaroid”.
          <br />
          A card that reads “Doing something over and over to see if you get the
          same results”.
          <br />
          A card with a large question mark on the first line and the numbers
          16/19 on the second line.
          <br />
          A card that reads “A mysterious group who says a lot of things (2)”.
        </p>
        <p className="flex flex-wrap justify-center">
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 7/10 on the second line."
            src={image1}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 14/16 on the second line."
            src={image2}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “Picard matching your bet (3)”."
            src={image3}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “A meteorologist's special attack”."
            src={image4}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 6/10 on the second line."
            src={image5}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “Scribes writing down instructions for starting the apocalypse (2, 7)”."
            src={image6}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 1/10 on the second line."
            src={image7}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “A diet involving lowering your iron intake”."
            src={image8}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “Snubbing the Peach State (8, 4, 5, 3, 8)”."
            src={image9}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 9/12 on the second line."
            src={image10}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “An animal that feeds on encyclopedias”."
            src={image11}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “60% of a brick or Toblerone”."
            src={image12}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “A state that makes breaking into your house possible”."
            src={image13}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “The steppe to which the Amazons banished their sons (2, 6)”."
            src={image14}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “Warning call at a Dairy Queen food fight (6, 7, 5)”."
            src={image15}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 7/12 on the second line."
            src={image16}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “What's happening to an Arctic soil layer”."
            src={image17}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “A dangerous Polaroid”."
            src={image18}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “Doing something over and over to see if you get the same results”."
            src={image19}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card with a large question mark on the first line and the numbers 16/19 on the second line."
            src={image20}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
          <SheetableImage
            alt="A card that reads “A mysterious group who says a lot of things (2)”."
            src={image21}
            title=""
            className={cx(
              'w-full md:w-[260px] md:h-[342px] inline-block p-0.5 border-box',
              NO_COPY_CLASS
            )}
          />
        </p>
      </div>

      <style jsx global>{`
        .invitation {
          background-image: url(${image0});
          background-size: 50%;
          background-repeat: no-repeat;
          background-position: top left;
          max-width: 500px;
          height: 250px;
          text-align: right;
          padding: 80px 20px 20px 20px;
          border: 1px solid black;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
