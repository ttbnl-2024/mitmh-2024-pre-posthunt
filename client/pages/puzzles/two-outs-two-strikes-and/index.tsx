import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'two-outs-two-strikes-and';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none text-center pl-0 space-y-2 sm:space-y-0">
          <li>
            <b>alley-pr</b>
          </li>
          <li>at w</li>
          <li>beast that was Harry P</li>
          <li>
            <b>c</b>
          </li>
          <li>cal part in Wagner's "Tristan und Is</li>
          <li>
            <b>daring Western riders try lasting eight sec</b>
          </li>
          <li>
            <b>ewe's mate with a head (and name) that ad</b>
          </li>
          <li>f a Da Vinci drawing</li>
          <li>f animated Jerry</li>
          <li>f them sired the entire Lipizzaner breed f</li>
          <li>
            <b>father's next purchase "if that billy g</b>
          </li>
          <li>ger, as well as a d</li>
          <li>
            <b>grunter with a head that may end up</b>
          </li>
          <li>he awakens</li>
          <li>
            <b>in the TV/film industry, Bugs and R</b>
          </li>
          <li>just eight</li>
          <li>Kurwenal's v</li>
          <li>
            <b>ld MacD</b>
          </li>
          <li>
            <b>lde"</b>
          </li>
          <li>llar nickname</li>
          <li>
            <b>mes after "Vitruvian" in the name</b>
          </li>
          <li>n Age battering implements</li>
          <li>n y</li>
          <li>nald at dawn</li>
          <li>
            <b>nds astride this bucking b</b>
          </li>
          <li>n't pull" (plus a cart)</li>
          <li>
            <b>nus</b>
          </li>
          <li>
            <b>r which Vienna is famed</b>
          </li>
          <li>rned Ir</li>
          <li>tter's Patr</li>
          <li>ur deli sandwich</li>
          <li>vine</li>
          <li>
            <b>wling frenemy</b>
          </li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
