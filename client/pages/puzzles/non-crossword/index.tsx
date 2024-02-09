import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'non-crossword';
const cwData = [
  [_, _, _, _, _, _, _, _, 1, 2, _, _, _, _, _, _, _, _, _, 3],
  [_, _, '(viii)', _, 4, _, _, _, _, _, _, _, _, 5, 6, _, _, _, _, _],
  [_, 7, _, _, _, _, _, '(i)', _, _, _, _, _, _, _, '(iv)', _, _, _, _],
  [8, _, 9, _, _, _, _, _, _, _, 10, _, _, _, _, _, _, _, _, _],
  [_, 11, _, _, _, _, _, _, _, _, _, _, 12, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, 13, _, _, _, _, 14, _, 15, _, _, 16],
  [_, 17, _, _, _, '(v)', _, _, _, _, _, _, _, _, _, _, _, 18, _, _],
  [_, _, 19, _, _, _, _, _, _, _, _, _, _, _, 20, _, _, _, _, _],
  [21, _, _, _, _, _, _, _, _, _, 22, _, _, _, _, _, _, _, _, _],
  [23, _, _, _, _, 24, 25, _, _, _, _, _, _, '(vi)', _, _, 26, _, _, _],
  [_, _, _, _, _, _, 27, _, _, 28, 29, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 30, 31, _, _, 32, _],
  [33, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, 34, _, _, _, _, _, _, _, _, 35, _, _, _, '(vii)', _, _, _, _],
  [_, _, _, '(ii)', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, 36, _, _, _, _, _, 37, _, _],
  [38, _, _, _, 39, _, 40, 41, _, 42, _, _, _, _, _, 43, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, '(ix)', _, _],
  [_, _, 44, _, _, '(iii)', _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, 45, _, _, _, _, _, _, _, _, _, _, _, 46, 47, _, _, _, 48],
];

const cwFill = [
  [_, 'O', _, _, _, 'V', _, _, _, _, _, 'B', _, _, _, _, _, _, _, _],
  [_, _, _, 'H', _, 'A', _, _, _, _, 'O', _, _, _, _, _, _, 'A', _, 'O'],
  [_, _, 'A', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, 'A', _, _, 'T', _, _, _, _, 'I', _, _, _, _, _, _, _, 'T', _, _],
  [_, _, _, 'V', _, _, 'K', _, _, _, _, _, _, 'I', 'B', _, 'I', 'M', _, 'A'],
  [_, _, 'V', _, _, _, _, _, _, _, _, _, 'A', _, _, _, _, _, _, _],
  ['A', _, _, 'Z', _, _, _, _, _, 'T', _, _, _, _, _, _, _, _, _, 'A'],
  [_, 'Q', _, _, _, _, 'F', _, _, _, _, _, _, 'O', _, 'A', _, _, _, _],
  [_, _, _, _, 'B', _, _, 'I', _, _, _, _, 'O', _, _, _, _, _, _, _],
  [_, _, _, _, 'A', _, _, 'I', _, _, _, _, 'I', _, _, _, _, _, _, 'P'],
  ['I', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 'A', _, _, _],
  ['O', _, _, _, _, _, _, _, _, _, 'A', _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, 'V', _, _, 'X', 'J', _, _, _, 'O', 'P', _, _, _],
  ['A', _, _, 'K', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, 'P', _, _, _, _, _, _, _, _, _, _, _, 'O', 'Y'],
  [_, _, _, 'P', _, _, _, _, 'K', _, _, _, 'O', _, _, _, _, _, _, _],
  [_, _, _, 'A', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ['I', _, 'K', _, _, _, _, _, _, _, _, _, _, _, 'O', _, _, _, _, 'F'],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 'T', _, _, _, _, _],
  [_, 'O', _, _, 'Y', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword data={cwData} fill={cwFill} />
        <br />
        <ol>
          <li>Resides, lives (6; 5)</li>
          <li>Male hive worker (5 3; 7)</li>
          <li>US currency (7; 5)</li>
          <li>At any time (8; 6)</li>
          <li>Happiness from matrimony (6 5; 9)</li>
          <li>Founder of a 19th century anti-tech movement (*3 *4; 5)</li>
          <li>Hears out (5 2 3; 6)</li>
          <li>1.1.1.1 or 8.8.8.8 (*3 6; 7)</li>
          <li>They're written in the top-left corner (6 9; 13)</li>
          <li>PvP area in classic Runescape (10; 9)</li>
          <li>Behind-the-back score in basketball (7 4; 9)</li>
          <li>
            Ailment caused by spending too much time on a horse or bike (6 4; 8)
          </li>
          <li>Flaky pastries (8; 6)</li>
          <li>Eponym of a mathematical paradox (*7; 6)</li>
          <li>End of COVID? (8; 7)</li>
          <li>People who aren't in a hurry (8; 7)</li>
          <li>Compressed (8; 6)</li>
          <li>They may be Roman or Arabic (8; 6)</li>
          <li>
            Fruits in a famous insult that also equates the target's mother with
            a rodent (12; 10)
          </li>
          <li>Maybelline parent (*6; 3)</li>
          <li>Not evaluated (10; 8)</li>
          <li>Dojo figure (6; 5)</li>
          <li>What entropy measures (8; 7)</li>
          <li>Anarchic (7; 6)</li>
          <li>Batman villain, with "the" (*7; 6)</li>
          <li>
            Stays up too late working on puzzles but still has to be up early,
            say (11; 9)
          </li>
          <li>Completely merited (4-8; 10)</li>
          <li>House of Alfred the Great (*6; 5)</li>
          <li>The father of vaccines (*6 *6; 10)</li>
          <li>Quality of a dry wit (9; 6)</li>
          <li>Starbucks orders (9; 8)</li>
          <li>
            English city described as "an odious place" by Charles Dickens (*5;
            5)
          </li>
          <li>Made blue, emotionally (8; 8)</li>
          <li>Most schoolchildren look forwards to them (8; 6)</li>
          <li>Sibling of Helios (*6; 5)</li>
          <li>After-meal treat (7; 7)</li>
          <li>Gloomy disposition (10; 8)</li>
          <li>Abated (4 4; 7)</li>
          <li>Pantries, originally for raw meat covered in fat (7; 6)</li>
          <li>
            Word for "removes the skin of" which doesn't change meaning if the
            first two letters are removed (7; 6)
          </li>
          <li>Inebriation (11; 11)</li>
          <li>Sexts, maybe (5 5; 7)</li>
          <li>Historic Ford "E" cars (*6; 6)</li>
          <li>Instrument popularized by King Kalakaua (7; 4)</li>
          <li>Becomes depleted, as a well (4 3; 5)</li>
          <li>
            Repetitive phrase often heard before "What have we here?" (4 4 4; 7)
          </li>
          <li>Came loose, as a spool of thread (7; 6)</li>
          <li>Not humorous (7; 6)</li>
        </ol>
        <br />
        <ol style={{ listStyleType: 'lower-roman' }}>
          <li>(4-5)</li>
          <li>(11)</li>
          <li>(9)</li>
          <li>(4 6)</li>
          <li>(11)</li>
          <li>(*10)</li>
          <li>(10)</li>
          <li>(3 5)</li>
          <li>(9)</li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
