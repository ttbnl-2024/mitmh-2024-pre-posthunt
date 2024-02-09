import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'island-hopping';

const _: '' = '';
// prettier-ignore
const gridFill = [
  [ _, _, 4, _,11, _, _, 7, _, _, _,18, _, _, _, _, 2, _, _, _, _, _, _, _, 8, _, _, 3, _, _],
  [ _, _, _, _, _, _, _, _, _, _, 4, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _],
  [ 2, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _,15, _,12, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [14, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, 6, _, _, _, _, _, _, 1, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 2, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, 3, _, _, _, _, _,10, _, _, _, _, _, _, 2],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, 3, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,13, _, _, _, _, _, 3, _, _, _, _, _, _],
  [ 1, _, _, 4, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 2, _, _, _, _, _, _, _, _, _, 3],
  [ _, _, _, _, _, 3, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, 3, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 5, _, _, _, 1, _, _, _],
  [ _, _,14, _, _, _, _, _, _, _, _, _, _, _, 9, _, _, _, _, _, _, _, _, _, _, _, _, 3, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, _, 7, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,12, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _,16, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [ _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, _, 2, _, _, _, _, 1],
  [ _, _, _, _, _, _, _, _, _, _, _, _, 3, _, 8, _, _, _, _, 2, _, _, _, _, _, _, _, _, _, _],
  [ 4, _, _,16, _, _, _, _, _, _, _, _, _, _, _, _,12, _, _, _, _, 1, _, 5, _, _, _, _, _, 1],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You'll probably need to map the islands before you start
          criss-crossing them.
        </FlavorText>
        <InfoIcon>
          <p>
            For your convenience, we have provided interactive solving links for
            the puzzle grid:{' '}
            <a href="https://puzz.link/p?nurikabe/30/20/h4gbh7i-12j2m8h3r4u1i2zufgczger1h6l1zr2t1j3kal2zzj1m3zjdk3l1h4u2o3k3zq3t5i1keq9r3zk3g7zczj-10zz3g2j1r3g8j2p4h-10rcj1g5k1">
              puzz.link
            </a>{' '}
            / <a href="http://tinyurl.com/ypyp7nmq">Penpa+</a>
          </p>
        </InfoIcon>

        <Grid data={gridFill} className="nurikabe overflow-x-auto" />
        <br />
        <ul>
          <li>AGE LIMIT (42)</li>
          <li>ALL DRESSED (6, 10)</li>
          <li>BIG TO-DO (4, 30)</li>
          <li>CHEESE CURLS (14, 15, 16, 24)</li>
          <li>COMMON SENSE (3, 14, 16, 30, 32)</li>
          <li>DETERIORATE (6, 13, 36)</li>
          <li>DICK AND JANE (18, 54)</li>
          <li>EAGLE EYE (6, 48)</li>
          <li>ENVENOM (4, 7, 11)</li>
          <li>EQUAL PAY (18, 32)</li>
          <li>FRENCH ONION SOUP (3, 3, 5, 24, 30)</li>
          <li>HOT POCKETS (2, 8, 10)</li>
          <li>I GUESS SO (1, 14, 64)</li>
          <li>IDEALISTIC (11, 12, 28, 30)</li>
          <li>IMBECILE (4, 28, 28)</li>
          <li>IN CAMERA (3, 14, 16, 32)</li>
          <li>JAILHOUSE ROCK (12, 18, 27)</li>
          <li>LEAP OUT AT (2, 6)</li>
          <li>MACK THE KNIFE (6, 9, 24, 28)</li>
          <li>MARRAKESH EXPRESS (12, 16, 28, 48)</li>
          <li>MID-STREAM (4, 12, 18)</li>
          <li>MINOR PLANET (22)</li>
          <li>NO MEANS NO (21, 45)</li>
          <li>OPEN LANES (16)</li>
          <li>PERIODIC TABLE (3, 12, 26, 36)</li>
          <li>PILLOWCASE (3, 12, 16)</li>
          <li>PLYMOUTH ROCK (3, 26, 30)</li>
          <li>SAID NO TO (27, 45)</li>
          <li>SAMANTHA (11, 21)</li>
          <li>SELL LIKE HOTCAKES (3, 6, 6, 7, 8, 10)</li>
          <li>SHOE STORE (12, 52)</li>
        </ul>
        <p>(Ignore spaces and punctuation)</p>
      </div>

      <style jsx global>{`
        .nurikabe table {
          border: 2px solid black;
          margin-left: auto;
          margin-right: auto;
        }
        .nurikabe td {
          font-size: 90%;
          height: 24px !important;
          width: 24px !important;
          min-width: 16px;
          padding: 0;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
