import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'split-the-difference';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const gridData = [
    [126, _, 113, _, 131, _, X, 80, _, 120, _, 145, _, X, 153, _, 164, _, 118],
    [_, X, _, X, _, X, X, _, X, _, X, _, X, X, _, X, _, X, _],
    [50, _, _, _, _, _, _, _, X, _, X, 19, _, _, _, _, _, _, _],
    [_, X, _, X, _, X, X, _, X, _, X, _, X, X, _, X, _, X, _],
    [65, _, _, _, _, _, X, 184, _, _, _, _, X, 105, _, _, _, _, _],
    [_, X, _, X, _, X, X, _, X, X, X, X, X, X, X, X, _, X, X],
    [X, X, X, X, X, X, X, X, 14, 54, _, 100, X, X, 48, _, _, _, 143],
    [84, _, 191, _, 76, _, _, 37, X, _, X, 107, _, _, _, X, X, X, _],
    [_, X, _, X, _, X, X, 144, _, _, _, _, X, X, _, X, 59, X, _],
    [121, _, _, _, _, X, X, _, X, _, X, _, X, X, 183, _, _, _, _],
    [_, X, _, X, _, X, X, 203, _, _, _, _, X, X, _, X, _, X, _],
    [_, X, X, X, 140, _, _, _, X, _, X, 196, _, _, _, _, _, _, _],
    [109, _, 43, _, _, X, X, 57, _, _, _, X, X, X, X, X, X, X, X],
    [X, X, _, X, X, X, X, X, X, X, X, 137, X, X, 151, X, 163, X, 132],
    [129, _, _, _, 157, _, X, 74, _, 180, _, _, X, 32, _, _, _, _, _],
    [_, X, _, X, _, X, X, _, X, _, X, _, X, X, _, X, _, X, _],
    [102, _, _, _, _, _, _, _, X, _, X, 202, _, _, _, _, _, _, _],
    [_, X, _, X, _, X, X, _, X, _, X, _, X, X, _, X, _, X, _],
    [72, _, _, _, _, X, 146, _, _, _, _, _, X, 52, _, _, _, _, _],
  ];
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword data={gridData} />
        <br />
        <ol>
          <li>French</li>
          <li>The reverse</li>
          <li>Buck</li>
          <li>Poster</li>
          <li>Worriers might make much bigger</li>
          <li>Cracked</li>
          <li>Before a court</li>
          <li>Cemetery</li>
          <li>May be caused by one</li>
          <li>Participant</li>
          <li>Steamer or</li>
          <li>Fleetwood</li>
          <li>Relevant to a</li>
          <li>A mound</li>
          <li>In a popular Christmas carol about the birth of Jesus</li>
          <li>Except</li>
          <li>Partial to</li>
          <li>Those with class may attend</li>
          <li><i>The Conversation</i></li>
          <li>Possible result</li>
          <li>Strategic</li>
          <li>It describes the night</li>
          <li>Halitosis</li>
          <li>Fluctuation</li>
          <li>Turndown</li>
          <li>2022 thriller</li>
          <li>Mention</li>
          <li>Philbin, who died at an old age</li>
          <li>Artist</li>
          <li>Topic</li>
          <li>Be more</li>
          <li>Fail to</li>
          <li>Baseballer</li>
          <li>Solution</li>
          <li>Of May they are celebrated in Oaxaca</li>
          <li>Compared to 1492, the</li>
          <li>Bonuses</li>
          <li>Badge</li>
          <li>Set during a blizzard</li>
          <li>Out</li>
          <li>Marvel superhero Reynolds</li>
          <li>Underground</li>
          <li>Fatty</li>
          <li>Celebrity</li>
          <li>Mac album and song</li>
          <li>Medical</li>
          <li>Fish</li>
          <li>Programming</li>
          <li>Computer server</li>
          <li>NFL</li>
          <li>Argot that has no English equivalent (or does it?)</li>
          <li>French term meaning</li>
          <li>Title word in an update to</li>
          <li>Erosion's</li>
          <li>Blunt</li>
          <li>These functions</li>
          <li>Put up</li>
          <li>After a long drive</li>
          <li>Populated</li>
          <li>When</li>
          <li>Played to success after a failure in DC</li>
          <li>Not heavily</li>
          <li>Style of gates that may be fit for a</li>
          <li>Or dive</li>
          <li>On the 10th day</li>
          <li>Niblick</li>
          <li>Source of</li>
          <li>Sales</li>
          <li>Rhyming word</li>
          <li>Food</li>
          <li>Sticks?</li>
          <li>And seeing</li>
          <li>Little</li>
          <li>One who watches but is not a</li>
          <li>Using a broom in sports</li>
          <li>Type of song</li>
          <li>These are tried</li>
          <li>Events is something fans do to celebrate this</li>
          <li>Pearls</li>
          <li>Lord</li>
          <li>TV Host</li>
          <li>Boy Scout</li>
          <li>Largest bone in the</li>
          <li>Language</li>
          <li>Potential substitute for a</li>
          <li>Fold in one of these beds</li>
          <li>At a hotel</li>
          <li>In a song that also features "looptid"</li>
          <li>Seek or carry</li>
          <li>Year 2000</li>
          <li>Of sight</li>
          <li>Crawler</li>
          <li>Behind</li>
          <li>Of a professeur</li>
          <li>Arnette of the</li>
          <li>San Diego</li>
          <li>Wraps</li>
          <li>So you can sit on it</li>
          <li>Night</li>
          <li>Legs</li>
          <li>Slightly</li>
          <li>Tempo</li>
          <li>Closed doors</li>
          <li>Administrator</li>
          <li>Under</li>
          <li>Your joints may do this (especially if you're of old age)</li>
          <li>Weighing</li>
          <li>Paradoxical</li>
          <li>Student</li>
          <li>Element used in fighting</li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
