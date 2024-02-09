import cx from 'classnames';
import React, { ComponentType, FC, Fragment, useRef } from 'react';

import useDynamicEncrypted from 'utils/encrypted';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'three-really-good-boys';

interface ThreeReallyGoodBoysData {
  solvedSlugs: string[];
}

const FEEDERS: [string, string][] = [
  [
    'Annual International Fictionary Night',
    'annual-international-fictionary-night',
  ],
  ['Boosted', 'boosted'],
  ['Corporate Change', 'corporate-change'],
  ['Deep Conspiracy', 'deep-conspiracy'],
  ['Extreme Hiking', 'extreme-hiking'],
  ['Family Tree', 'family-tree'],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const data = puzzleData.private as ThreeReallyGoodBoysData;
  const ref = useRef<HTMLDivElement>(null);

  const encd: ComponentType<{}>[] = [];

  for (const [_, slug] of FEEDERS) {
    encd.push(
      useDynamicEncrypted<{}>(`puzzles/${SLUG}/${SLUG}_${slug[0]}`, {
        enabled: data.solvedSlugs.includes(slug),
      })
    );
  }

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You're at the Underworld dog show, but someone important is missing.
          Maybe the scores can tell you how to find them!
        </FlavorText>

        <h3>Scores</h3>
        <Table>
          <thead>
            <tr>
              <th>Judge 1</th>
              <th>Judge 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">5</td>
            </tr>
            <tr>
              <td className="text-center">8</td>
              <td className="text-center">1</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">9</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">4</td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td className="text-center">7</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">3</td>
            </tr>
          </tbody>
        </Table>
        {data.solvedSlugs.length > 0 && (
          <>
            <hr className="my-6" />
            {data.solvedSlugs.length == 1 ? (
              <>
                <InfoIcon className={cx(NO_COPY_CLASS)}>
                  Click on the image below to open it in a new window. An image
                  description is available in copy-to-clipboard.
                </InfoIcon>
                <p className={cx(HIDDEN_CLASS)}>
                  This is a diagram with 26 black dots equispaced in a circular
                  pattern, forming a regular 26-gon. In the following
                  description, we assume the dots are numbered 1 through 26
                  going clockwise, with 1 at the "top". There are pawprints
                  connecting some of these dots to others (including, sometimes,
                  themselves). The term x leads to y means there is a
                  unidirectional path from the dot numbered x to the dot
                  numbered y.
                </p>
              </>
            ) : (
              <>
                <InfoIcon className={cx(NO_COPY_CLASS)}>
                  Click on the images below to open them in a new window. Image
                  descriptions available in copy-to-clipboard.
                </InfoIcon>
                <p className={cx(HIDDEN_CLASS)}>
                  These are diagrams with 26 black dots equispaced in a circular
                  pattern, forming a regular 26-gon. In the following
                  description, we assume the dots are numbered 1 through 26
                  going clockwise, with 1 at the "top". There are pawprints
                  connecting some of these dots to others (including, sometimes,
                  themselves). The term x leads to y means there is a
                  unidirectional path from the dot numbered x to the dot
                  numbered y.
                </p>
              </>
            )}

            <div className="space-y-6 my-4">
              {FEEDERS.map(([title, slug], idx) => {
                if (!data.solvedSlugs.includes(slug)) return null;

                return (
                  <div key={idx}>
                    <h3>{title}</h3>
                    {React.createElement(encd[idx], {})}
                    <br className={cx(HIDDEN_CLASS)} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
