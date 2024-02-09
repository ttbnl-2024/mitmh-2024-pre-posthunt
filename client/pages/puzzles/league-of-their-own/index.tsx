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

import image0 from 'assets/puzzles/league-of-their-own/0.png';
import image1 from 'assets/puzzles/league-of-their-own/1.png';
import image2 from 'assets/puzzles/league-of-their-own/2.png';
import image3 from 'assets/puzzles/league-of-their-own/3.png';
import image4 from 'assets/puzzles/league-of-their-own/4.png';
import image5 from 'assets/puzzles/league-of-their-own/5.png';
import image6 from 'assets/puzzles/league-of-their-own/6.png';
import image7 from 'assets/puzzles/league-of-their-own/7.png';
import image8 from 'assets/puzzles/league-of-their-own/8.png';
import image9 from 'assets/puzzles/league-of-their-own/9.png';
import image10 from 'assets/puzzles/league-of-their-own/10.png';
import image11 from 'assets/puzzles/league-of-their-own/11.png';
import image12 from 'assets/puzzles/league-of-their-own/12.png';
import image13 from 'assets/puzzles/league-of-their-own/13.png';
import image14 from 'assets/puzzles/league-of-their-own/14.png';
import image15 from 'assets/puzzles/league-of-their-own/15.png';
import image16 from 'assets/puzzles/league-of-their-own/16.png';
import image17 from 'assets/puzzles/league-of-their-own/17.png';
import image18 from 'assets/puzzles/league-of-their-own/18.png';
import image19 from 'assets/puzzles/league-of-their-own/19.png';
import image20 from 'assets/puzzles/league-of-their-own/20.png';
import image21 from 'assets/puzzles/league-of-their-own/21.png';
import image22 from 'assets/puzzles/league-of-their-own/22.png';
import image23 from 'assets/puzzles/league-of-their-own/23.png';

const SLUG = 'league-of-their-own';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          NOTE: While solving this puzzle, you may encounter some material that
          could be considered to have a light R rating.
        </InfoIcon>
        <FlavorText>
          I shouldn't laugh, but this just seems impractical.
        </FlavorText>
        <p>
          Time for the league draft! These promising young basketball players
          are eager to make a name for themselves.
        </p>
        <Table>
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image0}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image1}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image2}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image3}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image4}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image5}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image6}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image7}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image8}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image9}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image10}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image11}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image12}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image13}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image14}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image15}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image16}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image17}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image18}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image19}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image20}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image21}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image22}
                  title=""
                  className="mx-auto"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image23}
                  title=""
                  className="mx-auto"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Now that each of our four teams has six players, let the games begin!
          Every competitor will play a one-on-one game on behalf of their team.
          As these scores show, the players were always perfectly matched.
        </p>
        <p>
          Murmurs 7<br />
          Volcanoes 3
        </p>
        <p>
          Cats 4<br />
          Questions 1
        </p>
        <p>
          Cats 5<br />
          Murmurs 1
        </p>
        <p>
          Cats 8<br />
          Volcanoes 3
        </p>
        <p>
          Murmurs 5<br />
          Questions 4
        </p>
        <p>
          Volcanoes 4<br />
          Cats 2
        </p>
        <p>
          Questions 11
          <br />
          Murmurs 9
        </p>
        <p>
          Murmurs 8<br />
          Volcanoes 6
        </p>
        <p>
          Cats 6<br />
          Questions 4
        </p>
        <p>
          Questions 17
          <br />
          Volcanoes 2
        </p>
        <p>
          Cats 16
          <br />
          Murmurs 14
        </p>
        <p>
          Volcanoes 15
          <br />
          Questions 4
        </p>
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
