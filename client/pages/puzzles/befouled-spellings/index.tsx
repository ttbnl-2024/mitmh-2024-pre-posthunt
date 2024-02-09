import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'befouled-spellings';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Our contestants are all so smart we had to make our dictionary a
          little bigger. Unfortunately, only the winners ever go down in
          official spelling bee history.
        </FlavorText>
        <h3>05-2018</h3>
        <ul>
          <li>Symbol of life</li>
          <li>Mix of blue and green light</li>
          <li>Per</li>
          <li>Palindromic boat</li>
          <li>Winning word</li>
        </ul>
        <h3>04-2019</h3>
        <ul>
          <li>Major artery</li>
          <li>Two-dimensional</li>
          <li>Like some milk</li>
          <li>Tirade</li>
          <li>Winning word</li>
        </ul>
        <h3>10-2019</h3>
        <ul>
          <li>Winning word</li>
          <li>"For" or "while" follower</li>
          <li>Scheme</li>
          <li>Doggie</li>
          <li>
            <i>Team Fortress 2</i> class or <i>Genshin Impact</i> element
          </li>
        </ul>
        <h3>06-2020</h3>
        <ul>
          <li>5th prime</li>
          <li>Extraneous info</li>
          <li>___ club: choir group</li>
          <li>Winning word</li>
          <li>___ and void</li>
        </ul>
        <h3>08-2021</h3>
        <ul>
          <li>Top-rate</li>
          <li>Issue forth</li>
          <li>Real-time</li>
          <li>Winning word</li>
          <li>___-frutti</li>
        </ul>
        <h3>12-2021</h3>
        <ul>
          <li>Sharp tooth</li>
          <li>Hang on, as lint</li>
          <li>Winning word</li>
          <li>Brief look</li>
          <li>Younger relative</li>
        </ul>
        <h3>02-2022</h3>
        <ul>
          <li>It maps to an amino acid</li>
          <li>Winning word</li>
          <li>FPS whose 30th anniversary was on 12-10-2023</li>
          <li>___ the gap</li>
          <li>Japanese noodles</li>
        </ul>
        <h3>09-2022</h3>
        <ul>
          <li>Hold firmly</li>
          <li>Put six feet under</li>
          <li>Hum</li>
          <li>Winning word</li>
          <li>Step on a ladder</li>
        </ul>
        <h3>05-2023</h3>
        <ul>
          <li>Winning word</li>
          <li>Where to hear a sermon</li>
          <li>1969 Best Musical nominee</li>
          <li>Tropical roof covering</li>
          <li>___ or Dare</li>
        </ul>
        <h3>08-2023</h3>
        <ul>
          <li>Winning word</li>
          <li>One of 206 in the human body</li>
          <li>One of 39 in the Old Testament</li>
          <li>Eucalyptus eater</li>
          <li>Noble gas</li>
        </ul>
        <hr className="my-4" />
        <p>
          <i>
            Make sure to spell them correctly this time, unlike the runner-ups
            (and one 3rd place finisher).
          </i>
        </p>
        <p>
          <span style={{ color: '#f1c232' }}>⬢</span> Coagulate; Final degree;
          Run
        </p>
        <p>(3) (3) (4) (4) (2) (3) (2) (1) (4) (6)</p>
        <p>(1.1.'1 4-3)</p>
      </div>

      <style jsx global>{`
        h3 {
          margin-top: 0.5em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
