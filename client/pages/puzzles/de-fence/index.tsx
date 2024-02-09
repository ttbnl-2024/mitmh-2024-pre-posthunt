import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/de-fence/0.png';

const SLUG = 'de-fence';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Show some character around here.</FlavorText>
        <Table>
          <tbody>
            <tr>
              <td>5 4</td>
              <td rowSpan={10}>
                <SheetableImage alt="" src={image0} title="" />
              </td>
              <td>7 5</td>
            </tr>
            <tr>
              <td>9 8</td>
              <td>6 11</td>
            </tr>
            <tr>
              <td>3 6</td>
              <td>4 6</td>
            </tr>
            <tr>
              <td>6 9</td>
              <td>3 6</td>
            </tr>
            <tr>
              <td>5 8</td>
              <td>11 5</td>
            </tr>
            <tr>
              <td>5 7</td>
              <td>4 3</td>
            </tr>
            <tr>
              <td>3 4‑3</td>
              <td>4 3‑3</td>
            </tr>
            <tr>
              <td>6 7</td>
              <td>4 8</td>
            </tr>
            <tr>
              <td>4 8</td>
              <td>8 4</td>
            </tr>
            <tr>
              <td>3 7</td>
              <td>7 5</td>
            </tr>
          </tbody>
        </Table>
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
