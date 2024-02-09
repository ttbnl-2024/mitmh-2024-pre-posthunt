import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/the-laboratory/0.png';
import image1 from 'assets/puzzles/the-laboratory/1.png';
import image2 from 'assets/puzzles/the-laboratory/2.png';
import image3 from 'assets/puzzles/the-laboratory/3.png';
import image4 from 'assets/puzzles/the-laboratory/4.png';
import image5 from 'assets/puzzles/the-laboratory/5.png';
import image6 from 'assets/puzzles/the-laboratory/6.png';
import image7 from 'assets/puzzles/the-laboratory/7.png';
import image8 from 'assets/puzzles/the-laboratory/8.png';
import image9 from 'assets/puzzles/the-laboratory/9.png';
import image10 from 'assets/puzzles/the-laboratory/10.png';
import image11 from 'assets/puzzles/the-laboratory/11.png';
import image12 from 'assets/puzzles/the-laboratory/12.png';
import image13 from 'assets/puzzles/the-laboratory/13.png';
import image14 from 'assets/puzzles/the-laboratory/14.png';
import image15 from 'assets/puzzles/the-laboratory/15.png';
import image16 from 'assets/puzzles/the-laboratory/16.png';
import image17 from 'assets/puzzles/the-laboratory/17.png';
import image18 from 'assets/puzzles/the-laboratory/18.png';

const SLUG = 'the-laboratory';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          On your tour of Europe, you look in each direction and finally face
          Paris.
        </FlavorText>
        <Table>
          <tbody>
            <tr>
              <td>Greenwich's rival has 135 markers dedicated to him</td>
            </tr>
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
              <td>Father of modern histology composed ABC hit</td>
            </tr>
            <tr>
              <td>Military engineer has a broken board</td>
            </tr>
            <tr>
              <td>Watchmaker with an awkward beer gut</td>
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
                Contributed to modern thermodynamics by exploding a cryoplane
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image7} title="" />
              </td>
            </tr>
            <tr>
              <td>
                President of the French Academy of Sciences who developed
                logarithmic tables
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image8} title="" />
              </td>
            </tr>
            <tr>
              <td>
                Geochemist who contributed to mining ore and porcelain
                manufacturing
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
              <td>His simple device demonstrated the Earth's rotation</td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image11} title="" />
              </td>
            </tr>
            <tr>
              <td>Ordained father of modern crystallography</td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image12} title="" />
              </td>
            </tr>
            <tr>
              <td>
                He predicted the position of Neptune from a twisted river reel
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage alt="" src={image13} title="" />
              </td>
            </tr>
            <tr>
              <td>This chemist is drunk - Lopez, eu</td>
            </tr>
            <tr>
              <td>
                Railroad engineer famous for each time he put on a lattice
              </td>
            </tr>
            <tr>
              <td>Small French locomotive engineer</td>
            </tr>
            <tr>
              <td>Geometrical mechanics inventor</td>
            </tr>
            <tr>
              <td>
                French fish with a probability distribution named after him
              </td>
            </tr>
            <tr>
              <td>
                A moon crater is named after him, and, according to some, so is
                the ideal gas constant{' '}
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
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        td > img {
          margin: auto;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
