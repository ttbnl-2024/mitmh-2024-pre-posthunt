import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import mapSmall from 'assets/puzzles/road-trip-redux/map-small.png';
import map from 'assets/puzzles/road-trip-redux/map.png';
import text from 'assets/puzzles/road-trip-redux/text.png';

const SLUG = 'road-trip-redux';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Hermes left this reminder in the glove box, and a new route through
          well trodden lands. With nothing left but the fragments you've
          gathered along the way and these road signs, what's left for you to
          do?
        </FlavorText>
        <InfoIcon>
          Click on any image to open it in a new window. Hermes' reminder is
          available in copy-to-sheet.
        </InfoIcon>
        <p>
          <a target="_blank" href={text}>
            <SheetableImage alt="Hermes' reminder" src={text} title="" />
          </a>
        </p>
        <ul className={cx(HIDDEN_CLASS)}>
          <li>TEA OLIVE hole number</li>
          <li>REX STOUT's entree price</li>
          <li>Letters in BEVERLY's flower</li>
          <li>ENCHANT: ? Across</li>
          <li>INLAWS</li>
          <li>RADIATES.PILES.CORDED steps north</li>
          <li>UTC for the AQUACULTURIST's crime: _PM</li>
          <li>BRIXEN W's problem number</li>
          <li>Assassin ORIGINS index</li>
          <li>Events throughout the weekend</li>
          <li>One less than the number of OBELISK FACES</li>
          <li>JUDY COLLINS season</li>
          <li>AD DUMPS QUAY CUR electoral votes</li>
          <li>Cut off one head and this many come back...</li>
          <li>Bandmates in NO FRIENDS</li>
          <li>AR CREAM in original picture order, with some other chains</li>
          <li>HELEN's corner spaces in Azul</li>
          <li>NANA VISITOR's Venn diagram number,</li>
        </ul>
        <p>
          <a target="_blank" href={map}>
            <SheetableImage alt="map" src={mapSmall} title="" />
          </a>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
