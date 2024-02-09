import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'oil-prices';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Oil prices have periodically been high! Can you rig it so the prices
          are reduced?
        </FlavorText>
        <Table className="table-2">
          <thead>
            <tr>
              <th>Production Method</th>
              <th>Price</th>
              <th>What's on Sale?</th>
              <th>Number?</th>
              <th>Final Price?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Copper Wire in Silver Nitrate</td>
              <td className="text-center">$52</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td>Lithium Ion Battery Discharging</td>
              <td className="text-center">$33</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td>Hydrogen Gas Preparation</td>
              <td className="text-center">$2</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td>Copper Sulfate Zinc</td>
              <td className="text-center">$34</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td>Thermite Combustion</td>
              <td className="text-center">$28</td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <style jsx global>{`
        .table-1 td:nth-child(n + 2),
        .table-2 td:nth-child(2) {
          text-align: center;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
