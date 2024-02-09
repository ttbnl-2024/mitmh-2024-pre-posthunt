import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'erudite-game';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Nine students are trying to collectively create an encyclopedia. They
          each start with a title and attempt to connect to the others. Will
          they succeed, despite some missing links?
        </FlavorText>
        <ul>
          <li>Anime</li>
          <li>Canal</li>
          <li>Epoxy</li>
          <li>Faith</li>
          <li>Omega</li>
          <li>Orbit</li>
          <li>Radio</li>
          <li>Robot</li>
          <li>Tiber</li>
        </ul>
        <br />
        <ul>
          <li>Agriculture</li>
          <li>Almond</li>
          <li>Art Deco</li>
          <li>Atheism</li>
          <li>Azerbaijan</li>
          <li>Bernoulli's principle</li>
          <li>Béziers</li>
          <li>Decorative arts</li>
          <li>Edinburgh Airport</li>
          <li>Escherichia coli</li>
          <li>Ethiopia</li>
          <li>Germany</li>
          <li>Habitat conservation</li>
          <li>Iceland</li>
          <li>Introjection</li>
          <li>Levi</li>
          <li>Mourning</li>
          <li>O'Reilly Media</li>
          <li>Open-source software</li>
          <li>Oscar Mayer</li>
          <li>Polymer</li>
          <li>Rocket</li>
          <li>Royal Mail</li>
          <li>Tarsier</li>
          <li>Turbine</li>
          <li>Xalapa</li>
          <li>Yucatán</li>
        </ul>
        <hr className={cx('my-4', NO_COPY_CLASS)} />
        <p className={cx(HIDDEN_CLASS)}>------------------</p>
        <ul>
          <li>Prehistoric</li>
          <li>Person</li>
          <li>People</li>
          <li>Series</li>
          <li>Mediterranean</li>
          <li>Biological</li>
          <li>Profession</li>
          <li>Reversible</li>
          <li>Biome</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
