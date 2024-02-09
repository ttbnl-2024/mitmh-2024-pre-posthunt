import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'family-tree';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You like helping with genealogy projects, but sorting out photos after
          the head of the family has passed away is a royal pain. Since you
          can't tell everyone apart yourself, all you have to rely on is your
          dogged determination and the information that someone has written on
          the back of each picture. After a sound examination you realize there
          are some things you weren't expecting in this family tree.
        </FlavorText>
        <Table className="mt-4">
          <tbody>
            <tr>
              <td>B000</td>
              <td>Fifth great-grandparent of R526 (2, 3)</td>
            </tr>
            <tr>
              <td>B620</td>
              <td>First cousin to P242 (6, 7)</td>
            </tr>
            <tr>
              <td>D200</td>
              <td>Second cousin once removed of F140 (5, 2)</td>
            </tr>
            <tr>
              <td>E500</td>
              <td>Fourth great-grandnibling of W532 L400 S122 (3, 14)</td>
            </tr>
            <tr>
              <td>F200</td>
              <td>Fifth great-grandparent of F460 (3, 2)</td>
            </tr>
            <tr>
              <td>G630</td>
              <td>Sixth great-grandparent of L620 (4, 5)</td>
            </tr>
            <tr>
              <td>H360</td>
              <td>Fourth great-grandparent of A140 (2, 3)</td>
            </tr>
            <tr>
              <td>H500</td>
              <td>Third great-grandparent of G630 (4, 5)</td>
            </tr>
            <tr>
              <td>L530</td>
              <td>Parent of B651 (4, 5)</td>
            </tr>
            <tr>
              <td>R200</td>
              <td>Second great-grandparent of J255 (4, 2)</td>
            </tr>
            <tr>
              <td>S162</td>
              <td>Second cousin twice removed of P533 (1, 6)</td>
            </tr>
            <tr>
              <td>S250</td>
              <td>Fourth great-grandparent of J400 (1, 2)</td>
            </tr>
            <tr>
              <td>S520</td>
              <td>Fourth great-grandparent of M635 (2, 1)</td>
            </tr>
            <tr>
              <td>W400</td>
              <td>First cousin seven times removed of P160 (4, 5)</td>
            </tr>
            <tr>
              <td>W532 Q200</td>
              <td>Grandnibling of D553 (6, 7)</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
