import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/obelisks-of-sorrel-mountain/0.png';
import image1 from 'assets/puzzles/obelisks-of-sorrel-mountain/1.png';
import image2 from 'assets/puzzles/obelisks-of-sorrel-mountain/2.png';
import image3 from 'assets/puzzles/obelisks-of-sorrel-mountain/3.png';
import image4 from 'assets/puzzles/obelisks-of-sorrel-mountain/4.png';
import image5 from 'assets/puzzles/obelisks-of-sorrel-mountain/5.png';
import image6 from 'assets/puzzles/obelisks-of-sorrel-mountain/6.png';
import image7 from 'assets/puzzles/obelisks-of-sorrel-mountain/7.png';
import image8 from 'assets/puzzles/obelisks-of-sorrel-mountain/8.png';
import image9 from 'assets/puzzles/obelisks-of-sorrel-mountain/9.png';
import image10 from 'assets/puzzles/obelisks-of-sorrel-mountain/10.png';
import image11 from 'assets/puzzles/obelisks-of-sorrel-mountain/11.png';
import image12 from 'assets/puzzles/obelisks-of-sorrel-mountain/12.png';
import image13 from 'assets/puzzles/obelisks-of-sorrel-mountain/13.png';
import image14 from 'assets/puzzles/obelisks-of-sorrel-mountain/14.png';
import image15 from 'assets/puzzles/obelisks-of-sorrel-mountain/15.png';
import image16 from 'assets/puzzles/obelisks-of-sorrel-mountain/16.png';
import image17 from 'assets/puzzles/obelisks-of-sorrel-mountain/17.png';
import image18 from 'assets/puzzles/obelisks-of-sorrel-mountain/18.png';
import mapPng from 'assets/puzzles/obelisks-of-sorrel-mountain/map.png';
import mapSvg from 'assets/puzzles/obelisks-of-sorrel-mountain/map.svg';

const SLUG = 'obelisks-of-sorrel-mountain';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          You sift through a stack of board games at Aphrodite's Island and find
          yourself drawn to a slightly scuffed-up copy of{' '}
          <b>The Obelisks of Sorrel Mountain</b>.<br />
          <br />
          Inside the box, you find the components below. You vaguely remember
          reading the online reviews, and it sounded like another sub-par
          knock-off. Maybe the reviews were right, because it seems like
          something's missing here.
          <br />
          <br />
          The game doesn't seem to be playable. Luckily, it looks like a prior
          player has already blazed a trail through the tiles to Sorrel Mountain
          - if you face their efforts head-on, you might be able to retrace
          their steps and find out what grows near the mountain.
        </FlavorText>

        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <div className="flex flex-wrap space-x-2 justify-center content-center">
          <p>
            <SheetableImage
              alt="Who Holds a Beauty Pageant In the Friggin' Desert"
              src={image0}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Who Holds a Beauty Pageant In The Friggin' Desert
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Riding the Camel Is Impossible"
              src={image1}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Riding the Camel Is Impossible
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Emergency Response Evac And Leave"
              src={image2}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Emergency Response Evac And Leave
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Ugliest Excuse for a New Slogan"
              src={image3}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Ugliest Excuse for a New Slogan
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Sex Education Preferable to This Tundra"
              src={image4}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Sex Education Preferable to This Tundra
            </span>
          </p>

          <p>
            <SheetableImage
              alt="The Banquet Tables Were Not Nearly Tall Enough"
              src={image5}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              The Banquet Tables Were Not Nearly Tall Enough
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Little More Than a Cave and a Poor Excuse for a Harvest Festival"
              src={image6}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Little More Than a Cave and a Poor Excuse for a Harvest Festival
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Who Sculpts a Partridge of Sand"
              src={image7}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Who Sculpts a Partridge Of Sand
            </span>
          </p>

          <p>
            <SheetableImage
              alt="End of the World Seemed Overly Pretty"
              src={image8}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              End Of The World Seemed Overly Pretty
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Mist Obscured The Flouride Spill"
              src={image9}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Mist Obscured The Fluoride Spill
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Two Parties Ruined By Trees, Snow, Etc."
              src={image10}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Two Parties Ruined By Trees, Snow, Etc.
            </span>
          </p>

          <p>
            <SheetableImage
              alt="The Reporter Promised an X Factor"
              src={image11}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              The Reporter Promised an X Factor
            </span>
          </p>

          <p>
            <SheetableImage
              alt="There are Bugs Everywhere, Sweetums"
              src={image12}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              There are Bugs Everywhere, Sweetums
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Such a Boys' Club Unless You Want to Hike"
              src={image13}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Such a Boys' Club Unless You Want to Hike
            </span>
          </p>

          <p>
            <SheetableImage
              alt="There Was No One For Miles - Go Big or Go Home"
              src={image14}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              There Was No One for Miles - Go Big or Go Home
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Black Bears Raided the Hunting Trip"
              src={image15}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Black Bears Raided the Hunting Trip
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Caused Two Funerals Boil Some Water at Home"
              src={image16}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Caused Two Funerals Boil Some Water at Home
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Trees Block View Chop Down the Wall"
              src={image17}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Trees Block View Chop Down the Wall
            </span>
          </p>

          <p>
            <SheetableImage
              alt="Scenery is Distant Disappointing Rock Show"
              src={image18}
              title=""
            />
            <span className={cx(HIDDEN_CLASS)}>
              Scenery is Distant Disappointing Rock Show
            </span>
          </p>
        </div>

        <br className={cx(HIDDEN_CLASS)} />

        <p>
          <SheetableImage
            alt="Grid of 19 hexagonal tiles with text and markings"
            src={mapSvg}
            copySrc={mapPng}
            title=""
          />
          <span className={cx(HIDDEN_CLASS)}>
            See full-size image on puzzle page.
          </span>
        </p>

        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td colSpan={2}>Glucotrol Buddies</td>
              <td colSpan={2}>Boarding the Scarecrow Boat</td>
              <td colSpan={2}>Warehouse Raves Filled with Eurotrash</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan={2}>When Your Here Than Your Home</td>
              <td colSpan={2}>The Turf 'N Turf Special</td>
              <td colSpan={2}>It Has That Naomi Wolf Factor</td>
              <td colSpan={2}>A Sled is a Stupid Mascot</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td colSpan={2}>Chiseled Aromasphere</td>
              <td colSpan={2}>Such a Great Day for Bees</td>
              <td colSpan={2}>A Great Pyramid for Property Rights</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan={2}>Careening to Bummer-Town</td>
              <td colSpan={2}>More Likely Than Unicorns and Talking Monkeys</td>
              <td colSpan={2}>Who's Ready for TDazzle?</td>
              <td colSpan={2}>No Presidential Faces at the Grand Canyon?</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>Sassy But Powerful Dynamic</td>
              <td colSpan={2}>Jump on That Caboose</td>
              <td colSpan={2}>Boola Boola Boola!</td>
              <td colSpan={2}>Home of the Diversity Express</td>
              <td colSpan={2}>Underage Drinking is the Pits</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
