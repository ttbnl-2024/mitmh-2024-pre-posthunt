import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'colorful-connections';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <ul className="list-none pl-0 space-y-3 sm:space-y-0">
          <li>Small dents (5)</li>
          <li>Mixed into, as per the recipe (5)</li>
          <li>Sailors may swab them (5)</li>
          <li>Cartoon spun off from "Beavis and Butt-head" (5)</li>
          <li>AWK predecessor (3)</li>
          <li>The way up to one's flat, perhaps (4)</li>
          <li>
            "Let thy grace now, like a ___ /
            Bind my wand'ring heart to thee" (6)
          </li>
          <li>The path to the dark side (4)</li>
          <li>Underwater, as when a dam breaks (7)</li>
          <li>Selene, to some (4)</li>
          <li>Watson's co-nobelist (5)</li>
          <li>Breton, say (4)</li>
          <li>Accessory for a snowman (5)</li>
          <li>Loot or booty (4)</li>
          <li>Punt, for example (4)</li>
          <li>Straw's packaging (4)</li>
          <li>It might indicate an idea (4)</li>
          <li>Young chicken's cry (5)</li>
          <li>Spinks or Trotsky (4)</li>
          <li>Get in on a Kickstarter, for instance (4)</li>
          <li>It can be ordered by the yard (4)</li>
          <li>South Pacific explorer (4)</li>
          <li>Iggles' stadium, with "The" (4)</li>
          <li>___ Rose (heroine in Grimm's fairy tales) (5)</li>
          <li>A dozen dozens (5)</li>
          <li>Dora-to-Diego greeting (4)</li>
          <li>Stare open-mouthed (at) (4)</li>
          <li>Rubberneck (4)</li>
          <li>All-male, as an event (4)</li>
          <li>Pass with flying colors (3)</li>
          <li>Decline in influence (4)</li>
          <li>Aircraft which are possibly hostile (6)</li>
          <li>Type of package (4)</li>
          <li>Film set in the Andes (5)</li>
          <li>Prolific western novelist Grey (4)</li>
          <li>Valens hit La ___ (5)</li>
          <li>Francis or Kevin (5)</li>
          <li>Apprehension or terror (5)</li>
          <li>Impressive achievement (4)</li>
          <li>Half brother of Hercules (4)</li>
          <li>Stud requirement (4)</li>
        </ul>
        <br />
        <Table>
          <style jsx>{`
            td {
              width: 30px;
              height: 30px;
            }
          `}</style>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
