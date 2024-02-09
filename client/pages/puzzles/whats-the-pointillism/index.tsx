import cx from 'classnames';
import React, { FC, useRef } from 'react';

import ColorVisualizerImage from 'components/color_visualizer_image';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/whats-the-pointillism/0.png';
import image1 from 'assets/puzzles/whats-the-pointillism/1.png';
import image2 from 'assets/puzzles/whats-the-pointillism/2.png';
import image3 from 'assets/puzzles/whats-the-pointillism/3.png';

const SLUG = 'whats-the-pointillism';

const alt0 =
  'A 5x6 grid of colored blocks on a white background \n \
Row 1: Red Yellow Green Yellow Red \n \
Row 2: Magenta Cyan Yellow Cyan Magenta \n \
Row 3: Blue White Yellow White Blue \n \
Row 4: Blue Cyan Green Cyan Blue \n \
Row 5: Blue White Yellow White Blue \n \
Row 6: Cyan Magenta Red Magenta Cyan \n \
\n \
In the bottom right corner, a venn diagram with three circles is filled in black at the center, with a minus sign next to it';

const alt1 =
  'Cyan person: "This takes away from real art. Why is it even here?" \n \
Magenta person: "My kid could do better with his watercolor set." \n \
Yellow person: "What a waste of perfectly good paint."';

const alt2 =
  'A 5x6 grid of colored blocks on a black background \n \
Row 1: Magenta Cyan Cyan Cyan Red \n \
Row 2: White Black Black Black White \n \
Row 3: White Black Black Black White \n \
Row 4: White Magenta Magenta Magenta Yellow \n \
Row 5: White Black Black Blue Yellow \n \
Row 6: Magenta Green Green Green Magenta \n \
\n \
In the bottom right corner, a venn diagram with three circles is filled in white at the center, with a plus sign next to it';

const alt3 =
  'Red person: "This adds nothing to the exhibit." \n \
Green person: "I have doodles on my phone that are better than this." \n \
Blue person: "Y’know what would improve this piece? Turning the lights off."';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Two pieces of art hang next to each other in an art gallery. As you
          stare at the works trying to find meaning in them, you hear complaints
          from other gallery attendees. Taking into account each critic's
          perspective, who are these paintings for?
        </FlavorText>
        <ColorVisualizerImage
          alt=""
          src={image0}
          title={alt0}
          className={cx(NO_COPY_CLASS, 'mx-auto')}
        />
        <br />
        <SheetableImage
          alt={alt0}
          src={image0}
          className={cx(HIDDEN_CLASS)}
          title=""
        />
        <ColorVisualizerImage
          alt=""
          src={image1}
          title={alt1}
          className={cx(NO_COPY_CLASS, 'mx-auto')}
          hideIcon={true}
        />
        <SheetableImage
          alt={alt1}
          src={image1}
          className={cx(HIDDEN_CLASS)}
          title=""
        />
        <hr className="my-6" />
        <ColorVisualizerImage
          alt=""
          src={image2}
          title={alt2}
          className={cx(NO_COPY_CLASS, 'mx-auto')}
          hideIcon={true}
        />
        <br />
        <SheetableImage
          alt={alt2}
          src={image2}
          className={cx(HIDDEN_CLASS)}
          title=""
        />
        <ColorVisualizerImage
          alt=""
          src={image3}
          title={alt3}
          className={cx(NO_COPY_CLASS, 'mx-auto')}
          hideIcon={true}
        />
        <SheetableImage
          alt={alt3}
          src={image3}
          className={cx(HIDDEN_CLASS)}
          title=""
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
