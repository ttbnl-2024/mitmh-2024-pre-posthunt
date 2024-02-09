import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'boosted';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Or should that be... booted?</FlavorText>
        <Table noBorder>
          <style jsx>{`
            td:nth-child(2) {
              padding-left: 3rem;
            }
          `}</style>
          <tbody>
            <tr>
              <td>Tolerate</td>
              <td>Ethical</td>
            </tr>
            <tr>
              <td>Fisher</td>
              <td>Pleasant</td>
            </tr>
            <tr>
              <td>Aping</td>
              <td>Stop</td>
            </tr>
            <tr>
              <td>Criminal</td>
              <td>Parlor</td>
            </tr>
            <tr>
              <td>Watches</td>
              <td>Achy</td>
            </tr>
            <tr>
              <td>Hangout</td>
              <td>Prepare</td>
            </tr>
            <tr>
              <td>Tone</td>
              <td>Search</td>
            </tr>
            <tr>
              <td>Human</td>
              <td>Assistant</td>
            </tr>
            <tr>
              <td>Specialty</td>
              <td>Decaying</td>
            </tr>
            <tr>
              <td>Squeal</td>
              <td>Contamination</td>
            </tr>
            <tr>
              <td>Serene</td>
              <td>Rage</td>
            </tr>
            <tr>
              <td>Uprising</td>
              <td>Dealing</td>
            </tr>
            <tr>
              <td>Spinning</td>
              <td>Whichever</td>
            </tr>
            <tr>
              <td>Coral</td>
              <td>Affirmative</td>
            </tr>
            <tr>
              <td>Tally</td>
              <td>Development</td>
            </tr>
            <tr>
              <td>Run</td>
              <td>Sign</td>
            </tr>
            <tr>
              <td>Eccentric</td>
              <td>Publish</td>
            </tr>
          </tbody>
        </Table>
        <IndexedBlank label={[3, 10]} />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
