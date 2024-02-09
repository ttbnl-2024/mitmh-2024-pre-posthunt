import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/until-they-come-home/0.png';
import image1 from 'assets/puzzles/until-they-come-home/1.png';
import image2 from 'assets/puzzles/until-they-come-home/2.png';
import image3 from 'assets/puzzles/until-they-come-home/3.png';
import image4 from 'assets/puzzles/until-they-come-home/4.png';
import image5 from 'assets/puzzles/until-they-come-home/5.png';
import image6 from 'assets/puzzles/until-they-come-home/6.png';
import image7 from 'assets/puzzles/until-they-come-home/7.png';
import image8 from 'assets/puzzles/until-they-come-home/8.png';
import image9 from 'assets/puzzles/until-they-come-home/9.png';
import image10 from 'assets/puzzles/until-they-come-home/10.png';

const SLUG = 'until-they-come-home';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          More than fifteen years later, they returned looking for their
          brethren only to vanish again without a trace.
        </FlavorText>
        <InfoIcon>Click on any image to open it in a new window.</InfoIcon>
        <p className={cx(NO_COPY_CLASS)}>
          <a target="_blank" href={image0}>
            <SheetableImage alt="" src={image0} title="" />
          </a>
          <br />
          <a target="_blank" href={image1}>
            <SheetableImage alt="" src={image1} title="" />
          </a>
          <br />
          <a target="_blank" href={image2}>
            <SheetableImage alt="" src={image2} title="" />
          </a>
          <br />
          <a target="_blank" href={image3}>
            <SheetableImage alt="" src={image3} title="" />
          </a>
          <br />
          <a target="_blank" href={image4}>
            <SheetableImage alt="" src={image4} title="" />
          </a>
          <br />
          <a target="_blank" href={image5}>
            <SheetableImage alt="" src={image5} title="" />
          </a>
          <br />
          <a target="_blank" href={image6}>
            <SheetableImage alt="" src={image6} title="" />
          </a>
          <br />
          <a target="_blank" href={image7}>
            <SheetableImage alt="" src={image7} title="" />
          </a>
          <br />
          <a target="_blank" href={image8}>
            <SheetableImage alt="" src={image8} title="" />
          </a>
          <br />
          <a target="_blank" href={image9}>
            <SheetableImage alt="" src={image9} title="" />
          </a>
          <br />
          <a target="_blank" href={image10}>
            <SheetableImage alt="" src={image10} title="" />
          </a>
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          <SheetableImage alt="" src={image0} title="" />
          <SheetableImage alt="" src={image1} title="" />
          <SheetableImage alt="" src={image2} title="" />
          <SheetableImage alt="" src={image3} title="" />
          <SheetableImage alt="" src={image4} title="" />
          <SheetableImage alt="" src={image5} title="" />
          <SheetableImage alt="" src={image6} title="" />
          <SheetableImage alt="" src={image7} title="" />
          <SheetableImage alt="" src={image8} title="" />
          <SheetableImage alt="" src={image9} title="" />
          <SheetableImage alt="" src={image10} title="" />
        </div>
        <hr className="my-4" />
        <p>Distinguishing features:</p>
        <Table>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Partially obscured red square adjacent to yellow rectangle
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Black whale tail</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Box of tea</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mast with six horizontal spars in front of a moon</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Red 8 next to a red 27</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Stained glass globe</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Yellow pumpkin</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lime-colored tower</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ship with six oars</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Marilyn Monroe</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Larry Bird in a home uniform</td>
            </tr>
            <tr>
              <td>7</td>
              <td>White 6 on a black circle</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Yayoi Kusama</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Cupcake with pink frosting</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Person in blue jacket and white pants</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Red K next to a gray CANCER</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Merman holding a trident</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Dark lighthouse on land sloping up to the left</td>
            </tr>
            <tr>
              <td>12</td>
              <td>White whale tail next to a white lighthouse</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Open tube of lipstick</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Large baby head in front of a tree</td>
            </tr>
            <tr>
              <td>22</td>
              <td>House with blue and teal walls and three windows</td>
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
