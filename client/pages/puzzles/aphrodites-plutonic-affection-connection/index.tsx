import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/aphrodites-plutonic-affection-connection/aphrodite_final_copy.png';

const SLUG = 'aphrodites-plutonic-affection-connection';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Aphrodite has selected an initial cast of iconic characters for the
          first season of Affection Connection, ready to unleash some
          interference of mythic proportions. Unfortunately, user testing shows
          that viewers want each couple to have to face something a bit more
          personal.
          <br />
          <br />
          Helping Aphrodite round out the season is a tall order, but with your
          help, Affection Connection could hit the height of the ratings!
        </FlavorText>
        <InfoIcon>Image text is available in copy-to-clipboard.</InfoIcon>
        <SheetableImage src={image0} />
        <div className={cx(HIDDEN_CLASS)}>
          <p>
            <b>
              <u>Planned Episodes</u>
            </b>
          </p>
          <p>
            Sawamura Eijun and Aotsuki Wakana
            <br />
            Hotness Rating: 60.7°
          </p>
          <p>
            Nezumi and Shion
            <br />
            Hotness Rating: 60.3°
          </p>
          <p>
            Meliodas and Elizabeth Liones
            <br />
            Hotness Rating: 62.9°
          </p>
          <p>
            Hime Yarizakura and Akina Hiizumi
            <br />
            Hotness Rating: 59.1°
          </p>
          <p>
            Saitama and Genos
            <br />
            Hotness Rating: 60.5°
          </p>
          <p>
            Portgas D Ace and Trafalgar D Water Law
            <br />
            Hotness Rating: 58.9°
          </p>
          <p>
            Seigen Amawaka and Yukari Otomi
            <br />
            Hotness Rating: 63.7°
          </p>
          <p>
            Yusei Fudo and Akiza Izinski
            <br />
            Hotness Rating: 64.2°
          </p>
          <p>
            Loid Forger and Yor Briar
            <br />
            Hotness Rating: 55.2°
          </p>
          <p>
            Nana Komatsu and Takumi Ichinose
            <br />
            Hotness Rating: 58.9°
          </p>
          <p>
            Ermes Costello and Weather Report
            <br />
            Hotness Rating: 48.7°
          </p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
