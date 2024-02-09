import React, { FC, useRef } from 'react';

import { Colors } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Grid from 'components/grid';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'battle-plans';

const _: '' = '';

// prettier-ignore
const grid1 = [
  [   _,   _, '7',   _, '4', '2', '4',   _, '4', '5', '1',],
  [ '4',   _,   _,'OM',   _,'NA','UT','IC','AL',   _,   _,],
  [   _,   _,'TH',   _,   _,   _,   _,'WS',   _,   _,'SI',],
  [ '3','FA',   _,   _,   _,   _,'RE',   _,   _,   _,'DE',],
  [   _,   _,   _,   _,   _,'GC',   _,   _,   _,   _,'RE',],
  [ '4',   _,   _,   _,'IN',   _,'GA',   _,   _,   _,'AL',],
  [ '2',   _,   _,'AR',   _,   _,'NG',   _,   _,   _,'TI',],
  [   _,   _,'AF',   _,   _,   _,'PL',   _,   _,   _,'ME',],
  [   _,'SE',   _,   _,   _,   _,'AN',   _,   _,   _,   _,],
  [ '1',   _,   _,   _,   _,   _,'KS',   _,   _,   _,   _,],
  [ '6',   _,   _,   _,   _,   _,   _,'ST','EA','ME','RS',],
];
// prettier-ignore
const waters1: [number, number][] = [[1, 10], [3, 10], [4, 4], [8, 5], [9, 2], [10, 2]];

// prettier-ignore
const grid2 = [
  [   _, '1', '5',   _,   _, '3', '1', '4', '3',   _,   _,],
  [   _,   _,   _,   _,'ND',   _,   _,   _,   _,'AC',   _,],
  [ '0',   _,   _,'LA',   _,   _,   _,   _,   _,'CU',   _,],
  [ '7',   _,'IN',   _,'TO',   _,   _,'CR',   _,'SE',   _,],
  [   _,'MA',   _,   _,'UG',   _,   _,'EW',   _,   _,   _,],
  [   _,   _,   _,   _,'HA',   _,   _,'MA',   _,'SH',   _,],
  [ '0',   _,   _,   _,'SN',   _,   _,'TE',   _,'IP',   _,],
  [ '7',   _,'NO',   _,'AI',   _,   _,   _,   _,'PI',   _,],
  [ '0',   _,'ON',   _,'LS',   _,'PI',   _,   _,'NG',   _,],
  [ '6',   _,'TI',   _,   _,   _,   _,'RA',   _,'LA',   _,],
  [ '1',   _,'DE',   _,   _,   _,   _,   _,'CY','NE',   _,],
];
// prettier-ignore
const waters2: [number, number][] = [[1, 10], [3, 3], [9, 5]];

// prettier-ignore
const grid3 = [
  [   _,   _, '0', '6', '1', '4',   _, '1', '1', '7',   _,],
  [ '7',   _,   _,'ON',   _,   _,   _,'SE',   _,   _,   _,],
  [ '1',   _,'LM',   _,   _,   _,   _,   _,'AL',   _,   _,],
  [   _,'SA',   _,   _,'CO',   _,   _,   _,   _,'AN',   _,],
  [ '1',   _,   _,   _,   _,'NS',   _,   _,   _,   _,'ES',],
  [ '4',   _,   _,'AT',   _,   _,'TA',   _,   _,   _,   _,],
  [ '4','SO',   _,   _,'LA',   _,   _,'NT',   _,   _,   _,],
  [ '1','CK',   _,   _,   _,'NT',   _,   _,'IN',   _,   _,],
  [   _,'EY',   _,   _,   _,   _,'IC',   _,   _,'OP',   _,],
  [   _,'ES',   _,'AD','RI','AT','IC',   _,   _,   _,'LE',],
  [   _,   _,   _,   _,   _,   _,   _,   _,   _,   _,   _,],
];
// prettier-ignore
const waters3: [number, number][] = [[1, 10], [3, 7], [5, 4], [5, 8], [5, 10], [10, 9]];

const watersToShades = (waters: [number, number][]): (Colors | '')[][] => {
  const g = Colors.C9;
  // prettier-ignore
  const shades: (Colors|'')[][] = [
    [_, g, g, g, g, g, g, g, g, g, g],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
    [g, _, _, _, _, _, _, _, _, _, _],
  ];
  for (const water of waters) {
    shades[water[0]][water[1]] = Colors.C5;
  }
  return shades;
};

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Our battle plans involve partially disguising our ships under cloud
          cover.
        </FlavorText>
        <InfoIcon>
          Note: Ships will always read across (left-to-right) or down
          (top-to-bottom). Grids are available in copy-to-sheet.
        </InfoIcon>
        <div className="prefer-2-col pb-8">
          <Grid
            data={grid1}
            shading={watersToShades(waters1)}
            className="puzzle-grid"
          />
          <ul className="list-none px-0">
            <li>ABSOLUTION</li>
            <li>OVERCOAT</li>
            <li>TEMPERED</li>
            <li>CHIEFS</li>
            <li>REVERT</li>
            <li>SITARS</li>
            <li>BLEW</li>
            <li>MUCH</li>
            <li>SKIN</li>
            <li>TUFT</li>
            <li>*</li>
          </ul>
        </div>
        <div className="prefer-2-col pb-8">
          <Grid
            data={grid2}
            shading={watersToShades(waters2)}
            className="puzzle-grid"
          />
          <ul className="list-none px-0">
            <li>COMPENSATE</li>
            <li>IDEATORS</li>
            <li>PUNDITRY</li>
            <li>PICOTS</li>
            <li>POISON</li>
            <li>REJECT</li>
            <li>CRUD</li>
            <li>FONT</li>
            <li>MUTT</li>
            <li>SAGA</li>
            <li>*</li>
          </ul>
        </div>
        <div className="prefer-2-col pb-8">
          <Grid
            data={grid3}
            shading={watersToShades(waters3)}
            className="puzzle-grid"
          />
          <ul className="list-none px-0">
            <li>INTERLACED</li>
            <li>GUZZLING</li>
            <li>DEPORTER</li>
            <li>CREOLE</li>
            <li>PUZZLE</li>
            <li>SAMOAN</li>
            <li>FROM</li>
            <li>PELT</li>
            <li>RELY</li>
            <li>SIKH</li>
            <li>*</li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .puzzle-grid table {
          margin-left: auto;
          margin-right: auto;
        }
        .puzzle-grid td {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 125%;
          height: 35px !important;
          width: 35px !important;
        }
        .puzzle-grid table tr:nth-child(1) td:nth-child(1) {
          border: none;
        }
        .puzzle-grid table tr:nth-child(n + 2) td:nth-child(10n + 1) {
          border-right: 3px solid black;
        }
        // do not combine these two rules and use all border-bottom
        .puzzle-grid table tr:nth-child(11) td:nth-child(n + 2) {
          border-bottom: 3px solid black;
        }
        .puzzle-grid table tr:nth-child(2) td:nth-child(n + 2) {
          border-top: 3px solid black;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
