import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/planet-hollywood/0.png';
import image1 from 'assets/puzzles/planet-hollywood/1.png';
import image2 from 'assets/puzzles/planet-hollywood/2.png';
import image3 from 'assets/puzzles/planet-hollywood/3.png';
import image4 from 'assets/puzzles/planet-hollywood/4.png';
import image5 from 'assets/puzzles/planet-hollywood/5.png';
import image6 from 'assets/puzzles/planet-hollywood/6.png';
import image7 from 'assets/puzzles/planet-hollywood/7.png';
import image8 from 'assets/puzzles/planet-hollywood/8.png';
import image9 from 'assets/puzzles/planet-hollywood/9.png';
import image10 from 'assets/puzzles/planet-hollywood/10.png';
import image11 from 'assets/puzzles/planet-hollywood/11.png';
import image12 from 'assets/puzzles/planet-hollywood/12.png';
import image13 from 'assets/puzzles/planet-hollywood/13.png';
import image14 from 'assets/puzzles/planet-hollywood/14.png';
import image15 from 'assets/puzzles/planet-hollywood/15.png';
import image16 from 'assets/puzzles/planet-hollywood/16.png';
import image17 from 'assets/puzzles/planet-hollywood/17.png';
import image18 from 'assets/puzzles/planet-hollywood/18.png';
import image19 from 'assets/puzzles/planet-hollywood/19.png';
import image20 from 'assets/puzzles/planet-hollywood/20.png';
import image21 from 'assets/puzzles/planet-hollywood/21.png';

const SLUG = 'planet-hollywood';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} data-skip-table-breaks={true}>
      <div ref={ref}>
        <FlavorText>
          I just found these. I'm not sure where they came from.
        </FlavorText>
        <Table isFull className="mx-auto">
          <tbody>
            <tr>
              <td>
                <SheetableImage alt="" src={image0} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image1} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image2} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image3} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image4} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image5} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image6} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image7} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image8} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image9} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image10} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image11} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image12} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image13} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image14} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image15} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image16} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image17} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image18} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image19} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image20} title="" />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image21} title="" />
              </td>
            </tr>
          </tbody>
        </Table>
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
