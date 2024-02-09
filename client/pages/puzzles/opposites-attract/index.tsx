import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/opposites-attract/0.png';
import image1 from 'assets/puzzles/opposites-attract/1.png';

const SLUG = 'opposites-attract';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          A copyable pre-spreadsheeted version of the squares is located{' '}
          <Link href="https://docs.google.com/spreadsheets/d/1Zs6DO8UCfNpYY25ZDKrVWUB7Btmbiqw-G_irMEI7qIk/edit#gid=0">
            here
          </Link>
          . You can duplicate sheets into an existing spreadsheet (triangle next
          to the "Opposites Attract" tab → "Copy to").
        </InfoIcon>
        <ol>
          <li>Hecatolite, as it's commonly known (9)</li>
          <li>Courtroom address (4, 5)</li>
          <li>Major American Revolutionary War battle site (6, 4)</li>
          <li>Voice of a certain Shinigami, in 2017 (6, 5)</li>
          <li>Where Saturday is the hardest day of the week (3, 4, 5, 9)</li>
          <li>(e), often (4, 2, 3, 5)</li>
        </ol>
        <br />
        <ul>
          <li>Black market items (10)</li>
          <li>"Butt crack", anatomically (7, 5)</li>
          <li>California city named after Frank E. Brown (6, 6)</li>
          <li>Cascade caused by a high-energy decay in physics (8, 6)</li>
          <li>
            Common advice given to college freshmen to help alleviate empty nest
            syndrome (4, 4, 6)
          </li>
          <li>Entirely lacking illumination (5, 5)</li>
          <li>Famous American screwball comedy (3, 4, 6)</li>
          <li>
            Famous WW1 anti-war novel banned by Nazi Germany (3, 5, 2, 3, 7, 5)
          </li>
          <li>Fieri's flavorful forte (10)</li>
          <li>Follows a well-thought-out strategy (5, 4, 5, 5)</li>
          <li>
            Football-themed term for someone criticizing choices with the
            benefit of hindsight (6, 7, 11)
          </li>
          <li>HAHAHA-HAHAHAHAHA cartoon mad scientist from the '90s (7)</li>
          <li>Having nothing to one's name (9)</li>
          <li>
            Increase rapidly, like the population of an r-selected species (4,
            13)
          </li>
          <li>It takes a little over 8 minutes to reach us (8)</li>
          <li>Large-scale agricultural producer (7, 4)</li>
          <li>Means of transportation in BioShock (11)</li>
          <li>"Oh come on, you've got to be kidding me" (3, 6, 3, 4)</li>
          <li>
            Overarching set of regulations within which court cases are decided
            (5, 9)
          </li>
          <li>Piece that creates friction to stop a wheel (5, 5)</li>
          <li>Pitbull (6, 9)</li>
          <li>
            Single by The Who, or "I'm not so gullible this time!" (4, 3, 6, 5)
          </li>
          <li>
            Speeding up the decline of, in an idiom believed to come from the
            logging industry (7, 3, 5, 5)
          </li>
          <li>Stop believing something is true (4, 4, 5, 2)</li>
          <li>Tough ___ (female survivor of many hardships) (3, 5)</li>
          <li>
            Unique code used for registering a copy of a computer program (8, 3)
          </li>
          <li>Votes sent through the postal system, often (8, 7)</li>
          <li>Wasn't good enough, as in a golf tournament (6, 3, 3)</li>
        </ul>
        <br />
        <p>
          <SheetableImage className="mx-auto" alt="" src={image0} title="" />
        </p>
        <p>
          <SheetableImage className="mx-auto" alt="" src={image1} title="" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
