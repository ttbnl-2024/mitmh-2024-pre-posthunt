import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'blanks';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <table className="mt-6 mx-auto font-mono text-center">
          <tbody>
            <tr>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">&nbsp;</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">&nbsp;</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
              <td className="px-0.5 text-xl">_</td>
            </tr>
            <tr>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">2</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">4</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">1</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">3</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
              <td className="px-0.5 text-lg">5</td>
              <td className="px-0.5 text-lg">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
