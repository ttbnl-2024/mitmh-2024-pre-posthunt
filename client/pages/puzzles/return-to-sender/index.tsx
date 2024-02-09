import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'return-to-sender';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          These plant shipments all went to the wrong cities and were returned
          by the customers. Can you sort out what was supposed to happen?
        </FlavorText>
        <Table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Zip Code</th>
              <th>Item Returned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nunez</td>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>04694
              </td>
              <td>FORGET-ME-NOT</td>
            </tr>
            <tr>
              <td>Patel</td>
              <td>30248</td>
              <td>IRIS</td>
            </tr>
            <tr>
              <td>Olsen</td>
              <td>33028</td>
              <td>BLUEBONNET</td>
            </tr>
            <tr>
              <td>Lewis</td>
              <td>37771</td>
              <td>PASQUE FLOWER</td>
            </tr>
            <tr>
              <td>Smith</td>
              <td>45406</td>
              <td>LADY'S SLIPPER</td>
            </tr>
            <tr>
              <td>Elliot</td>
              <td>53406</td>
              <td>SYRINGA</td>
            </tr>
            <tr>
              <td>Dixon</td>
              <td>56653</td>
              <td>POPPY</td>
            </tr>
            <tr>
              <td>Abrams</td>
              <td>57501</td>
              <td>WHITE PINE CONE</td>
            </tr>
            <tr>
              <td>Zimmerman</td>
              <td>66506</td>
              <td>TICKSEED</td>
            </tr>
            <tr>
              <td>Ng</td>
              <td>76006</td>
              <td>VIOLET</td>
            </tr>
            <tr>
              <td>Upton</td>
              <td>83201</td>
              <td>CARNATION</td>
            </tr>
            <tr>
              <td>Abbot</td>
              <td>93309</td>
              <td>AZALEA</td>
            </tr>
            <tr>
              <td>Thomas</td>
              <td>99708</td>
              <td>SUNFLOWER</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <style jsx>{`
        td:nth-child(2) {
          text-align: center;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
