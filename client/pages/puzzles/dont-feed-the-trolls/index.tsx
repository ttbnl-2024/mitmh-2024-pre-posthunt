import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/dont-feed-the-trolls/0.png';
import image1 from 'assets/puzzles/dont-feed-the-trolls/1.png';
import image2 from 'assets/puzzles/dont-feed-the-trolls/2.png';
import image3 from 'assets/puzzles/dont-feed-the-trolls/3.png';
import image4 from 'assets/puzzles/dont-feed-the-trolls/4.png';
import image5 from 'assets/puzzles/dont-feed-the-trolls/5.png';
import image6 from 'assets/puzzles/dont-feed-the-trolls/6.png';
import image7 from 'assets/puzzles/dont-feed-the-trolls/7.png';
import image8 from 'assets/puzzles/dont-feed-the-trolls/8.png';
import image9 from 'assets/puzzles/dont-feed-the-trolls/9.png';
import image10 from 'assets/puzzles/dont-feed-the-trolls/10.png';

const SLUG = 'dont-feed-the-trolls';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>We seem to have made some mistakes...</FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>

        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image0}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image1}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image2}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image3}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image4}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image5}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image6}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image7}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image8}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image9}
          title=""
        />
        <SheetableImage
          className="mx-auto max-w-full my-2"
          alt=""
          src={image10}
          title=""
        />
        <div className={cx(HIDDEN_CLASS)}>
          <p>See puzzle page for images.</p>
          <p>
            <i>Fasten your seatbelts, it's going to be a bumpy ride.</i>
          </p>
          <p>
            <i> —Houston Ground Control</i>
          </p>
          <p>
            <i>Play it again, Sam.</i>
          </p>
          <p>
            <i> —Miguel Rivera</i>
          </p>
          <p>
            <i>Do you feel lucky?</i>
          </p>
          <p>
            <i> —Professor Petrovsky</i>
          </p>
          <p>
            <i>If you build it, they will come.</i>
          </p>
          <p>
            <i> —Hades</i>
          </p>
          <p>
            <i>My mamma always said, "Life is like a box of chocolates."</i>
          </p>
          <p>
            <i> —Sheriff Woody</i>
          </p>
          <p>
            <i>Look. It's moving. He's alive!</i>
          </p>
          <p>
            <i> —Dr. Evil</i>
          </p>
          <p>
            <i>We're gonna need a bigger boat!</i>
          </p>
          <p>
            <i> —Ishmael</i>
          </p>
          <p>
            <i>Get your stinkin' paws off me, you damn dirty ape!</i>
          </p>
          <p>
            <i> —Tiana</i>
          </p>
          <p>
            <i>Mirror, mirror on the wall, who is the fairest one of all?</i>
          </p>
          <p>
            <i> —Ichabod Crane</i>
          </p>
          <p>
            <i>Luke, I am your father.</i>
          </p>
          <p>
            <i> —Otto Octavius</i>
          </p>
          <p>
            <i>Run, you fools!</i>
          </p>
          <p>
            <i> —Eragon</i>
          </p>
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
