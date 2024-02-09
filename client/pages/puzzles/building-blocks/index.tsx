import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/building-blocks/0.png';
import image0Svg from 'assets/puzzles/building-blocks/0.svg';
import image1 from 'assets/puzzles/building-blocks/1.png';
import image1Svg from 'assets/puzzles/building-blocks/1.svg';
import image2 from 'assets/puzzles/building-blocks/2.png';
import image2Svg from 'assets/puzzles/building-blocks/2.svg';
import image3 from 'assets/puzzles/building-blocks/3.png';
import image3Svg from 'assets/puzzles/building-blocks/3.svg';
import image4 from 'assets/puzzles/building-blocks/4.png';
import image4Svg from 'assets/puzzles/building-blocks/4.svg';
import image5 from 'assets/puzzles/building-blocks/5.png';
import image5Svg from 'assets/puzzles/building-blocks/5.svg';
import image6 from 'assets/puzzles/building-blocks/6.png';
import image6Svg from 'assets/puzzles/building-blocks/6.svg';
import image7 from 'assets/puzzles/building-blocks/7.png';
import image7Svg from 'assets/puzzles/building-blocks/7.svg';

const SLUG = 'building-blocks';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Sometimes a multi-faceted approach is needed to assemble blocks into
          one final figure.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Descriptions of all the images are available in copy-to-sheet.
        </InfoIcon>
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image0Svg} title="" />
          <br />
          <SheetableImage alt="" src={image1Svg} title="" />
          <br />
          <SheetableImage alt="" src={image2Svg} title="" />
          <br />
          <SheetableImage alt="" src={image3Svg} title="" />
          <br />
          <SheetableImage alt="" src={image4Svg} title="" />
          <br />
          <SheetableImage alt="" src={image5Svg} title="" />
          <br />
          <SheetableImage alt="" src={image6Svg} title="" />
          <br />
          <SheetableImage alt="" src={image7Svg} title="" />
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          <SheetableImage alt="" src={image0} title="" />
          <br />
          <SheetableImage alt="" src={image1} title="" />
          <br />
          <SheetableImage alt="" src={image2} title="" />
          <br />
          <SheetableImage alt="" src={image3} title="" />
          <br />
          <SheetableImage alt="" src={image4} title="" />
          <br />
          <SheetableImage alt="" src={image5} title="" />
          <br />
          <SheetableImage alt="" src={image6} title="" />
          <br />
          <SheetableImage alt="" src={image7} title="" />
        </p>
        <Table className={cx(HIDDEN_CLASS)}>
          <thead>
            <tr>
              <th>Word</th>
              <th>Top edge</th>
              <th>Right edge</th>
              <th>Bottom edge</th>
              <th>Left edge</th>
              <th>Arrow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AWAY</td>
              <td>last three letters form a word</td>
              <td>9 letters long</td>
              <td>only contains straight line letters</td>
              <td>ends in a Y</td>
              <td></td>
            </tr>
            <tr>
              <td>BRITISH</td>
              <td>has three vowels</td>
              <td>starts with D</td>
              <td>8 letters long</td>
              <td>starts with D</td>
              <td></td>
            </tr>
            <tr>
              <td>BUSINESS</td>
              <td>ends in an H</td>
              <td>contains three copies of a letter</td>
              <td>contains a classical element</td>
              <td>contains a classical element</td>
              <td></td>
            </tr>
            <tr>
              <td>CANVASES</td>
              <td>can be subdivided into two words</td>
              <td>starts with E</td>
              <td>3 letters long</td>
              <td>8 letters long</td>
              <td>numbered arrow 9 points at bottom edge</td>
            </tr>
            <tr>
              <td>CHEERS</td>
              <td>contains two Rs</td>
              <td>contains two Rs</td>
              <td>5 letters long</td>
              <td>contains two Rs</td>
              <td>numbered arrow 8 points at bottom edge</td>
            </tr>
            <tr>
              <td>COMMENCE</td>
              <td>is a word after deleting the second letter</td>
              <td>contains two Rs</td>
              <td>is a word after deleting the second letter</td>
              <td>contains an O</td>
              <td></td>
            </tr>
            <tr>
              <td>COVER</td>
              <td>contains a U</td>
              <td>3 letters long</td>
              <td>contains two Es</td>
              <td>starts and ends with the same letter</td>
              <td></td>
            </tr>
            <tr>
              <td>DATA</td>
              <td>contains two Rs</td>
              <td>6 letters long</td>
              <td>ends in an H</td>
              <td>ends in an H</td>
              <td>green arrow pointing at lower left corner</td>
            </tr>
            <tr>
              <td>DEFEATED</td>
              <td>is a word after deleting the last letter</td>
              <td>is a word after deleting the last letter</td>
              <td>contains two Rs</td>
              <td>last three letters form a word</td>
              <td></td>
            </tr>
            <tr>
              <td>DEVIATION</td>
              <td>normally capitalized</td>
              <td>4 letters long</td>
              <td>contains two As</td>
              <td>contains two As</td>
              <td>numbered arrow 6 points at bottom edge</td>
            </tr>
            <tr>
              <td>DISH</td>
              <td>contains two Is</td>
              <td>contains a V</td>
              <td>6 letters long</td>
              <td>contains two Is</td>
              <td>numbered arrow 4 points at bottom edge</td>
            </tr>
            <tr>
              <td>ECLAIR</td>
              <td>contains two As</td>
              <td>contains two Is</td>
              <td>has three vowels</td>
              <td>starts and ends with the same letter</td>
              <td>numbered arrow 3 points at right edge</td>
            </tr>
            <tr>
              <td>ELEVATOR</td>
              <td>contains two Is</td>
              <td>is a word after deleting the second letter</td>
              <td>contains a V</td>
              <td>starts with S</td>
              <td></td>
            </tr>
            <tr>
              <td>EMPLOYEE</td>
              <td>contains three copies of a letter</td>
              <td>8 letters long</td>
              <td>only contains straight line letters</td>
              <td>starts with E</td>
              <td></td>
            </tr>
            <tr>
              <td>ENTER</td>
              <td>is a verb</td>
              <td>contains a double letter</td>
              <td>contains a double letter</td>
              <td>contains a double letter</td>
              <td></td>
            </tr>
            <tr>
              <td>EXACTLY</td>
              <td>contains a double letter</td>
              <td>contains a P</td>
              <td>contains two As</td>
              <td>contains two Es</td>
              <td></td>
            </tr>
            <tr>
              <td>FEATHERS</td>
              <td>7 letters long</td>
              <td>contains an X</td>
              <td>starts with C</td>
              <td>starts with E</td>
              <td></td>
            </tr>
            <tr>
              <td>FILLING</td>
              <td>ends in a Y</td>
              <td>8 letters long</td>
              <td>ends in an R</td>
              <td>ends in a Y</td>
              <td></td>
            </tr>
            <tr>
              <td>FIREPLACE</td>
              <td>first four letters are a word when reversed</td>
              <td>is or contains a unit</td>
              <td>4 letters long</td>
              <td>5 letters long</td>
              <td>numbered arrow 5 points at bottom edge</td>
            </tr>
            <tr>
              <td>FLAT</td>
              <td>last three letters form a word</td>
              <td>is or contains a unit</td>
              <td>8 letters long</td>
              <td>is or contains an animal</td>
              <td></td>
            </tr>
            <tr>
              <td>GARDEN</td>
              <td>contains three copies of a letter</td>
              <td>starts with R</td>
              <td>starts with R</td>
              <td>4 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>GET</td>
              <td>is or contains an animal</td>
              <td>contains 2 Es</td>
              <td>normally capitalized</td>
              <td>ends in a Y</td>
              <td></td>
            </tr>
            <tr>
              <td>GOOSE</td>
              <td>only contains straight line letters</td>
              <td>contains an O</td>
              <td>contains an O</td>
              <td>last four letters form a word</td>
              <td></td>
            </tr>
            <tr>
              <td>HIGHLY</td>
              <td>is a word after changing the first letter to S</td>
              <td>is a word after changing the first letter to S</td>
              <td>6 letters long</td>
              <td>can be subdivided into two words</td>
              <td></td>
            </tr>
            <tr>
              <td>HUEY</td>
              <td>first four letters are a word when reversed</td>
              <td>is a word after a letter is added to the beginning</td>
              <td>contains a V</td>
              <td>8 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>IMPAIRMENT</td>
              <td>can be subdivided into two words</td>
              <td>8 letters long</td>
              <td>6 letters long</td>
              <td>can be subdivided into two words</td>
              <td></td>
            </tr>
            <tr>
              <td>ITEM</td>
              <td>is or contains a unit</td>
              <td>contains a G</td>
              <td>ends in a Y</td>
              <td>contains a V</td>
              <td>numbered arrow 2 points at bottom edge</td>
            </tr>
            <tr>
              <td>KINGFISH</td>
              <td>is a word after deleting both the first and last letters</td>
              <td>ends in a D</td>
              <td>is a word after deleting both the first and last letters</td>
              <td>7 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>LANDMARK</td>
              <td>last three letters form a word</td>
              <td>contains an I</td>
              <td>is or contains an animal</td>
              <td>last three letters form a word</td>
              <td></td>
            </tr>
            <tr>
              <td>LE CARRÉ</td>
              <td>6 letters long</td>
              <td>7 letters long</td>
              <td>3 letters long</td>
              <td>contains a T</td>
              <td></td>
            </tr>
            <tr>
              <td>MAILMAN</td>
              <td>4-letter substring is a word</td>
              <td>last four letters form a word</td>
              <td>8 letters long</td>
              <td>normally capitalized</td>
              <td></td>
            </tr>
            <tr>
              <td>MAKE</td>
              <td>is a word after a letter is added to the beginning</td>
              <td>ends in a double letter</td>
              <td>7 letters long</td>
              <td>contains a V</td>
              <td></td>
            </tr>
            <tr>
              <td>NEWTON</td>
              <td>starts with D</td>
              <td>8 letters long</td>
              <td>6 letters long</td>
              <td>contains an I</td>
              <td></td>
            </tr>
            <tr>
              <td>NOT</td>
              <td>contains an R</td>
              <td>only contains straight line letters</td>
              <td>8 letters long</td>
              <td>has two syllables</td>
              <td></td>
            </tr>
            <tr>
              <td>PLYMOUTH</td>
              <td>7 letters long</td>
              <td>ends in a double letter</td>
              <td>ends in a double letter</td>
              <td>contains an M</td>
              <td></td>
            </tr>
            <tr>
              <td>PRISON</td>
              <td>ends in a T</td>
              <td>ends in a R</td>
              <td>ends in a T</td>
              <td>contains a T</td>
              <td></td>
            </tr>
            <tr>
              <td>QUARTERBACK</td>
              <td>is a word after changing a letter to R</td>
              <td>can be subdivided into two words</td>
              <td>8 letters long</td>
              <td>is a word after changing a letter to R</td>
              <td></td>
            </tr>
            <tr>
              <td>REGARD</td>
              <td>can be subdivided into two words</td>
              <td>ends in an H</td>
              <td>ends in an L</td>
              <td>contains two As</td>
              <td></td>
            </tr>
            <tr>
              <td>RESERVATIONS</td>
              <td>ends in a D</td>
              <td>5 letters long</td>
              <td>ends in a D</td>
              <td>contains a G</td>
              <td>numbered arrow 7 points at right edge</td>
            </tr>
            <tr>
              <td>ROD</td>
              <td>last four letters form a word</td>
              <td>starts with C</td>
              <td>is a word after deleting the second letter</td>
              <td>6 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>SOUVENIR</td>
              <td>is a word after changing a letter to R</td>
              <td>contains an H</td>
              <td>6 letters long</td>
              <td>is a word after changing a letter to R</td>
              <td>numbered arrow 1 points at bottom edge</td>
            </tr>
            <tr>
              <td>SPY</td>
              <td>4-letter substring is a word</td>
              <td>7 letters long</td>
              <td>4-letter substring is a word</td>
              <td>contains a V</td>
              <td></td>
            </tr>
            <tr>
              <td>SQUIRREL</td>
              <td>is a word after a letter is added to the beginning</td>
              <td>contains a G</td>
              <td>contains a G</td>
              <td>starts with C</td>
              <td></td>
            </tr>
            <tr>
              <td>SURGERY</td>
              <td>contains a T</td>
              <td>contains two Es</td>
              <td>contains 2 Es</td>
              <td>8 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>TREE</td>
              <td>last three letters form a word</td>
              <td>last three letters form a word</td>
              <td>4 letters long</td>
              <td>3 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>TROPICAL</td>
              <td>contains two As</td>
              <td>contains a classical element</td>
              <td>contains a double letter</td>
              <td>contains a double letter</td>
              <td></td>
            </tr>
            <tr>
              <td>VISUAL</td>
              <td>normally capitalized</td>
              <td>4 letters long</td>
              <td>contains a G</td>
              <td>4 letters long</td>
              <td></td>
            </tr>
            <tr>
              <td>WITHOUT</td>
              <td>4 letters long</td>
              <td>is a word after changing a letter to O</td>
              <td>has three syllables</td>
              <td>is a word after changing the first letter to S</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder={true} className="table1">
          <thead>
            <tr>
              <th>A</th>
              <th colSpan={4}>&rarr;</th>
              <th>Z</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[2em]">*1,</td>
              <td className="w-[2em]">*_,</td>
              <td className="w-[2em]">_*,</td>
              <td className="w-[2em]">*_,</td>
              <td className="w-[2em]">*_,</td>
              <td className="w-[2em]">_*</td>
            </tr>
            <tr>
              <td>*5,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_</td>
            </tr>
            <tr>
              <td>5*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>_*,</td>
              <td>*4,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>_*,</td>
              <td>_*,</td>
              <td>1*,</td>
              <td>_*,</td>
              <td>*_</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>*2,</td>
              <td>_*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>_*,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>*3,</td>
              <td>*_,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*4,</td>
              <td>_*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>_*,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>*5,</td>
              <td>_*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>_*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>_*,</td>
              <td>1*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>_*,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>2*,</td>
              <td>*_</td>
            </tr>
            <tr>
              <td>_*,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>3*,</td>
              <td>*_</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>_*,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>3*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>*_,</td>
              <td>4*,</td>
              <td>_*</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>*2</td>
            </tr>
            <tr>
              <td>*_,</td>
              <td>_*,</td>
              <td>*_,</td>
              <td>_*,</td>
              <td>_*,</td>
              <td>5*</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        .table1 th {
          text-align: center !important;
        }
        .table1 td {
          width: 40px;
          text-align: center;
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
        .example {
          color: var(--dark);
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
