import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'scheduling-conflicts';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Some cultural icons are upset that their mythology wasn't the one
          featured in our Mystery Hunt. They are trying to reschedule a few
          traditional holidays this year, in order to find the time to make a
          surprise appearance. If only there were more days in a week! What
          could you use to make sure they don't miss the start of their
          vacations?
        </FlavorText>
        <ul className="text-center list-none pl-0 space-y-3 sm:space-y-0">
          <li>Chaos 12 3190</li>
          <li>01.12.2024</li>
          <li>Koki 2684 Mutsuki 12</li>
          <li>21 Onwa Ede Ajana 1024</li>
          <li>Hilo Ka'elo 2024</li>
          <li>1402 Dei 22</li>
          <li>Aelius Antoninus 1888 Shemu Pachons 30</li>
          <li>30 Jumada Al-Thani 1445</li>
          <li>13 Quiahuitl Mazatl / 1 Toxcatl 12 Tecpatl</li>
          <li>12.01.2024</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
