import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'marathon';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Seven teams competed in the marathon. What was the unusual running
          technique used by the winners?
        </FlavorText>
        <ul>
          <li>North</li>
          <li>Entitlement</li>
          <li>Common</li>
          <li><span className={cx(HIDDEN_CLASS)}>'</span>True</li>
          <li>Card game</li>
          <li>Minus</li>
          <li>Arterial</li>
          <li>Happy place</li>
          <li>DiCaprio</li>
          <li>Sight</li>
          <li>Attrition</li>
          <li>High-wire</li>
          <li>Stop</li>
          <li>Obedience</li>
          <li>Street</li>
          <li>Vampire</li>
          <li>Fire</li>
          <li>Language</li>
          <li>Civil rights</li>
          <li>Electra</li>
          <li>Leo</li>
          <li>Civil</li>
          <li>Kindness</li>
          <li>Dogs</li>
          <li>Indication</li>
          <li>Greater than</li>
          <li>Surprise</li>
          <li>O+</li>
          <li>Vincent Owens</li>
          <li>Part</li>
          <li>Ra</li>
          <li>Asterisk</li>
          <li>Taste</li>
          <li>Dog</li>
          <li>Well-being</li>
          <li>Fog</li>
          <li>Earth</li>
          <li>Defiance</li>
          <li>Class</li>
          <li>Roses</li>
          <li>AB-</li>
          <li>David</li>
          <li>Fake</li>
          <li>Throwing</li>
          <li>Adventure</li>
          <li>Cold</li>
          <li>Deed</li>
          <li>Al</li>
          <li>Humor</li>
        </ul>
        <br />
        <h3>Winners</h3>
        <ul>
          <li>1st Sylvester</li>
          <li>2nd Jennifer</li>
          <li>3rd Benedict</li>
          <li>4th Roy</li>
          <li>5th Milla</li>
          <li>6th Bruce</li>
          <li>7th Demi</li>
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
