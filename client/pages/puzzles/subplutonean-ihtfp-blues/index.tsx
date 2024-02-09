import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/subplutonean-ihtfp-blues/0.png';
import image1 from 'assets/puzzles/subplutonean-ihtfp-blues/1.png';
import image2 from 'assets/puzzles/subplutonean-ihtfp-blues/2.png';
import image3 from 'assets/puzzles/subplutonean-ihtfp-blues/3.png';
import image4 from 'assets/puzzles/subplutonean-ihtfp-blues/4.png';
import image5 from 'assets/puzzles/subplutonean-ihtfp-blues/5.png';
import image6 from 'assets/puzzles/subplutonean-ihtfp-blues/6.png';
import image7 from 'assets/puzzles/subplutonean-ihtfp-blues/7.png';
import image8 from 'assets/puzzles/subplutonean-ihtfp-blues/8.png';
import image9 from 'assets/puzzles/subplutonean-ihtfp-blues/9.png';
import image10 from 'assets/puzzles/subplutonean-ihtfp-blues/10.png';
import image11 from 'assets/puzzles/subplutonean-ihtfp-blues/11.png';
import image12 from 'assets/puzzles/subplutonean-ihtfp-blues/12.png';
import image13 from 'assets/puzzles/subplutonean-ihtfp-blues/13.png';
import image14 from 'assets/puzzles/subplutonean-ihtfp-blues/14.png';
import image15 from 'assets/puzzles/subplutonean-ihtfp-blues/15.png';
import image16 from 'assets/puzzles/subplutonean-ihtfp-blues/16.png';
import image17 from 'assets/puzzles/subplutonean-ihtfp-blues/17.png';

const SLUG = 'subplutonean-ihtfp-blues';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          I don't think this collection of video stills is quite what they mean
          by "the underground music scene"...
        </FlavorText>
        <InfoIcon>This puzzle requires on-campus presence.</InfoIcon>
        <p>
          <SheetableImage
            alt="Awful War [Black dot, no dot, no dot]"
            src={image0}
            title="Awful War [Black dot, no dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Basement [Black dot, no dot, no dot]"
            src={image1}
            title="Basement [Black dot, no dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Bobby Sang [No dot, smaller red dot, no dot]"
            src={image2}
            title="Bobby Sang [No dot, smaller red dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Diabetic Acidosis [Black dot, no dot, Black dot]"
            src={image3}
            title="Diabetic Acidosis [Black dot, no dot, Black dot]"
          />
          <br />
          <SheetableImage
            alt="Fore Head [No dot, black dot, no dot]"
            src={image4}
            title="Fore Head [No dot, black dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Have This Clue! [Smaller red dot, no dot, no dot]"
            src={image5}
            title="Have This Clue! [Smaller red dot, no dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Ic'y Hots [Black dot, no dot, Black dot]"
            src={image6}
            title="Ic'y Hots [Black dot, no dot, Black dot]"
          />
          <br />
          <SheetableImage
            alt="Magician [No dot, black dot, no dot]"
            src={image7}
            title="Magician [No dot, black dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Mud Wheap [No dot, black dot, no dot]"
            src={image8}
            title="Mud Wheap [No dot, black dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Ped Pth [Black dot, Black dot, no dot]"
            src={image9}
            title="Ped Pth [Black dot, Black dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Piping Hot, Pi- cnic Ham [Black dot, black dot, black dot]"
            src={image10}
            title="Piping Hot, Pi- cnic Ham [Black dot, black dot, black dot]"
          />
          <br />
          <SheetableImage
            alt="Plungaw Magnet [No dot, no dot, no dot]"
            src={image11}
            title="Plungaw Magnet [No dot, no dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Power Couples [No dot, smaller red dot, no dot]"
            src={image12}
            title="Power Couples [No dot, smaller red dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Saint Pauls - Rectory [No dot, larger red dot, no dot]"
            src={image13}
            title="Saint Pauls - Rectory [No dot, larger red dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Tis Victory Time And Tis Hopeful [no dot, no dot, smaller red dot]"
            src={image14}
            title="Tis Victory Time And Tis Hopeful [no dot, no dot, smaller red dot]"
          />
          <br />
          <SheetableImage
            alt="Treble Clef [No dot, no dot, larger red dot]"
            src={image15}
            title="Treble Clef [No dot, no dot, larger red dot]"
          />
          <br />
          <SheetableImage
            alt="Wheeeeeee, spelled with a W, an H, and seven E's curling around [Black dot, no dot, no dot]"
            src={image16}
            title="Wheeeeeee, spelled with a W, an H, and seven E's curling around [Black dot, no dot, no dot]"
          />
          <br />
          <SheetableImage
            alt="Words Blazond [No dot, no dot, black dot]"
            src={image17}
            title="Words Blazond [No dot, no dot, black dot]"
          />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
