import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Wordsearch from 'components/wordsearch';

const SLUG = 'word-search';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>All words to find are at least 5 letters long.</p>

        <Wordsearch
          // prettier-ignore
          data={[
            ["Q","M","R","E","D","N","A","D","I","T","S","E","H","E","B"],
            ["D","U","A","B","I","R","I","B","N","U","O","N","A","E","G"],
            ["R","T","E","L","A","C","O","U","S","M","O","O","R","P","N"],
            ["I","E","N","T","E","U","A","G","P","B","R","Y","E","A","I"],
            ["C","I","H","D","Z","D","Q","T","I","L","L","A","I","O","R"],
            ["N","U","T","Y","N","A","H","S","C","E","R","R","E","E","A"],
            ["P","Q","S","A","D","M","L","H","E","N","N","C","A","A","U"],
            ["K","U","R","H","E","R","E","S","D","I","S","S","O","N","Q"],
            ["D","T","F","I","E","E","A","U","M","N","H","T","I","H","S"],
            ["S","I","Y","F","S","R","D","N","S","I","G","S","O","G","V"],
            ["P","E","S","E","I","E","R","P","T","U","N","L","U","A","N"],
            ["L","Y","P","X","W","N","E","A","N","Q","I","S","N","L","D"],
            ["I","L","I","O","O","E","O","N","K","T","T","H","I","R","P"],
            ["N","L","T","O","T","U","E","G","E","P","I","R","T","D","H"],
            ["E","S","Q","S","S","R","E","T","T","I","B","R","I","D","E"],
          ]}
          tableClass="mx-auto my-4"
        ></Wordsearch>

        <ul>
          <li>An order or urgent prompting</li>
          <li>Several gems are varieties of this mineral</li>
          <li>Intended to cause hurt feelings</li>
          <li>Having deep-seated resentment</li>
          <li>A member of a wedding party</li>
          <li>A photographer might ask you to say this</li>
          <li>Wax item used for drawing</li>
          <li>Minute scales of skin on hair, or one's temper</li>
          <li>Cause fear or apprehension</li>
          <li>Played games of chance</li>
          <li>Panacea</li>
          <li>A navy rank</li>
          <li>He may supervise ordnance</li>
          <li>Common emergency fixture</li>
          <li>A position of power or trust</li>
          <li>Stuffed animal</li>
          <li>Black-and-white seabird with a partially orange bill</li>
          <li>Brightly colored bird of Guatemala</li>
          <li>Making little noise</li>
          <li>Medication used to treat malaria</li>
          <li>Entangle</li>
          <li>Like some rum</li>
          <li>Approximation to a function using pieces of other functions</li>
          <li>A young pigeon</li>
          <li>Bringing to a right angle</li>
          <li>Excessively high, as prices</li>
          <li>Packed securely</li>
          <li>Large bookstore in New York City</li>
          <li>Unsteady from drunkenness</li>
          <li>Stomach to be eaten</li>
          <li>Turn end over end</li>
          <li>Show someone to a seat</li>
        </ul>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
