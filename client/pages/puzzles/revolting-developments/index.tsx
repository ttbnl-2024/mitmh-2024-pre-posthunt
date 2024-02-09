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

import image0 from 'assets/puzzles/revolting-developments/0.png';
import image1 from 'assets/puzzles/revolting-developments/1.png';
import image2 from 'assets/puzzles/revolting-developments/2.png';
import image3 from 'assets/puzzles/revolting-developments/3.png';
import image4 from 'assets/puzzles/revolting-developments/4.png';
import image5 from 'assets/puzzles/revolting-developments/5.png';
import image6 from 'assets/puzzles/revolting-developments/6.png';
import image7 from 'assets/puzzles/revolting-developments/7.png';
import image8 from 'assets/puzzles/revolting-developments/8.png';
import image9 from 'assets/puzzles/revolting-developments/9.png';
import image10 from 'assets/puzzles/revolting-developments/10.png';

const SLUG = 'revolting-developments';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          These revolutionaries are always singing songs with sesquipedalian
          lyrics that offset their historical significance.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <p>
          <SheetableImage
            alt='Headline: "AOL Instant Messenger Service discontinued"'
            src={image0}
            title='Headline: "AOL Instant Messenger Service discontinued"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "AOL Instant Messenger Service discontinued"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Marconi Receives First Transatlantic Radio Signal"'
            src={image1}
            title='Headline: "Marconi Receives First Transatlantic Radio Signal"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Marconi Receives First Transatlantic Radio Signal"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Mississippi Joins Union as 20th State'
            src={image2}
            title='Headline: "Mississippi Joins Union as 20th State"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Mississippi Joins Union as 20th State"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Rosa Parks Refuses to Relinquish Bus Seat, Is Arrested"'
            src={image3}
            title='Headline: "Rosa Parks Refuses to Relinquish Bus Seat, Is Arrested"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Rosa Parks Refuses to Relinquish Bus Seat, Is Arrested"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Beatles Fans Observe 10 Minutes of Silence For John Lennon"'
            src={image4}
            title='Headline: "Beatles Fans Observe 10 Minutes of Silence For John Lennon"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Beatles Fans Observe 10 Minutes of Silence For John
            Lennon"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Apollo 17 Lands on Lunar Surface"'
            src={image5}
            title='Headline: "Apollo 17 Lands on Lunar Surface"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Apollo 17 Lands on Lunar Surface"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Enron Files For Chapter 11 Bankruptcy'
            src={image6}
            title='Headline: "Enron Files For Chapter 11 Bankruptcy"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Enron Files For Chapter 11 Bankruptcy"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "World Leaders Attend Funeral of Václav Havel"'
            src={image7}
            title='Headline: "World Leaders Attend Funeral of Václav Havel"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "World Leaders Attend Funeral of Václav Havel"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "FDA Issues Emergency Use Authorization for Pfizer&apos;s Messenger RNA COVID Vaccine"'
            src={image8}
            title='Headline: "FDA Issues Emergency Use Authorization for Pfizer&apos;s Messenger RNA COVID Vaccine"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "FDA Issues Emergency Use Authorization for Pfizer's
            Messenger RNA COVID Vaccine"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "J.P.M. Prentice Discovers Nova Herculis; Star Soon to Be Visible to Naked Eye"'
            src={image9}
            title='Headline: "J.P.M. Prentice Discovers Nova Herculis; Star Soon to Be Visible to Naked Eye"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "J.P.M. Prentice Discovers Nova Herculis; Star Soon to Be
            Visible to Naked Eye"
          </span>
        </p>
        <p>
          <SheetableImage
            alt='Headline: "Gas Leak In Bhopal, India Poisons Thousands"'
            src={image10}
            title='Headline: "Gas Leak In Bhopal, India Poisons Thousands"'
          />
          <span className={cx(HIDDEN_CLASS)}>
            Headline: "Gas Leak In Bhopal, India Poisons Thousands"
          </span>
        </p>
        <hr />
        <ul>
          <li>A decorative parapet, e.g., of an outdoor terrace</li>
          <li>
            In a way that shows casual and cheerful indifference to deciduous
            trees
          </li>
          <li>Make a skidded gap in and break through</li>
          <li>A long sequence of joined columns, surrounding an area</li>
          <li>
            A large aircraft filled with gas, driven by engines, and belonging
            to you and me
          </li>
          <li>
            A widow with property from her extremely virtuous husband, now in
            heaven
          </li>
          <li>Myself at the point of death</li>
          <li>Speaking or acting in an entirely, completely evasive way</li>
          <li>
            A platform projecting into water, where ships are loaded during the
            rising and falling of the sea
          </li>
          <li>
            A common Algonquin-derived name for purchasing woods used for
            snowshoes
          </li>
          <li>
            The highest part of a horse's back as it gallops across a large
            natural stream of flowing water
          </li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
