import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'green-logic';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          If you take just one look at these fictional companies' gas emissions
          you'll see they cover fictional gases from A to Z - as do the
          standards rating those emissions.
        </FlavorText>
        <ol className="pl-7 sm:pl-10 space-y-2">
          <li>
            A total of three different gases are rated as 5 by at least one
            standard, and every standard rates at least one gas at 5.
          </li>
          <li>
            Aether is rated 19 in the SCORE standard, the greatest rating it
            gets in any of the standards.
          </li>
          <li>
            All Chem emitted as much Tachyon as it did Aether and Kryptonite
            combined. Electribe emitted as much Energon as it emitted Flubber
            and Kryptonite combined. Heat Co emitted as much Kryptonite as it
            did Energon and Tachyon combined.
          </li>
          <li>All Chem had a greater total emissions score than Pharm Us.</li>
          <li>
            All Chem was the only company to emit more than 19 units of a single
            gas.
          </li>
          <li>
            CLEAN and GASES regulate two companies with the same number of
            letters in their names.
          </li>
          <li>
            Each company emitted an integer number of units of each gas from 1
            to 26.
          </li>
          <li>
            Each company's name has at least two different letters in common
            with the name of the standard that governs it.
          </li>
          <li>
            Each company's total emissions score is calculated as the sum, over
            all five gases, of the emitted amount of that gas times the rating
            for that gas.
          </li>
          <li>
            Each standard rates each of the five gases using an integer factor
            from 1 to 26.
          </li>
          <li>
            Electribe didn't have the least total emissions score, but it
            emitted the least total amount of the five gases, just 27 units,
            less than half of that in the two gases with the greatest ratings in
            Electribe's standard.
          </li>
          <li>
            Energon is the only gas with five different ratings in the five
            different standards.
          </li>
          <li>
            For each gas, there was at least one company that emitted only one
            unit of the gas.
          </li>
          <li>
            Fuel Plus emitted twice as much Flubber as it emitted Tachyon.
          </li>
          <li>
            Fuel Plus was the only company to emit the same number of units of
            any gas as there are letters in the gas's name.
          </li>
          <li>
            Heat Co was able to keep its emissions of the gas with the greatest
            rating in its standard down to a single unit, but had double-digit
            emissions of every other gas.
          </li>
          <li>
            Kryptonite has the least average rating across all the standards.
          </li>
          <li>
            No company had a digit in its total emissions score matching the
            number of letters in its name.
          </li>
          <li>
            Nobody really agrees how bad these gases are for the environment, so
            there are five different standards regarding emissions of the gases.
            Each company is regulated by a different one of the five standards.
          </li>
          <li>
            One company emitted exactly as much Aether as two other companies
            did combined. The same company emitted exactly as much Flubber as
            two other companies did combined (not necessarily the same two
            companies).
          </li>
          <li>
            Pharm Us emitted as much Energon as it did of the other four gases
            combined, and it emitted just as much Aether as it did Tachyon.
          </li>
          <li>
            Tachyon emissions accounted for 70 times as much of All Chem's total
            emissions score as did Aether emissions.
          </li>
          <li>
            The only company which emitted only 1 unit each of two different
            gases was Fuel Plus.
          </li>
          <li>
            The total emissions scores were 202, 304, 520, 627, and 771 in some
            order.
          </li>
          <li>Two companies emitted the same amount of Kryptonite.</li>
        </ol>
        <br />
        <Table className="puzzle-table">
          <tbody>
            <tr>
              <td></td>
              <td>CLEAN</td>
              <td>GASES</td>
              <td>GREEN</td>
              <td>OZONE</td>
              <td>SCORE</td>
              <td>Aether</td>
              <td>Energon</td>
              <td>Flubber</td>
              <td>Kryptonite</td>
              <td>Tachyon</td>
              <td>Total Score</td>
            </tr>
            <tr>
              <td>All Chem</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Electribe</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Fuel Plus</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Heat Co</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Pharm Us</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Aether</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Energon</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Flubber</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Kryptonite</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tachyon</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <style jsx global>{`
        .puzzle-table td {
          padding: 8px !important;
        }
        .puzzle-table tr:nth-child(1) td {
          writing-mode: vertical-lr;
          text-align: right;
          font-weight: bold;
        }
        .puzzle-table td:nth-child(1) {
          font-weight: bold;
        }
        .puzzle-table tr:nth-child(1) td:nth-child(1) {
          border-left: none;
          border-top: none;
        }
        .puzzle-table tr:nth-child(1) td:nth-child(n + 2) {
          border-top: 3px solid black;
        }
        .puzzle-table tr:nth-child(5n + 1) td {
          border-bottom: 3px solid black;
        }
        .puzzle-table td:nth-child(11n + 1) {
          border-left: 3px solid black;
          border-right: 3px solid black;
        }
        .puzzle-table td:nth-child(6) {
          border-right: 3px solid black;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
