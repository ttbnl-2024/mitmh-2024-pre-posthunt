import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Borders, X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Link from 'components/link';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import Wordsearch from 'components/wordsearch';

const SLUG = 'this-is-a-puzzle';

const ACROSS = [
  [1, "Prof's aide"],
  [3, 'Prankster'],
  [5, 'Enlightened response'],
];

const DOWN = [
  [1, 'La follower'],
  [2, 'Modern Q&A inits'],
  [4, 'Acidity scale'],
];

let L = Borders.L;

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>This is the flavortext.</FlavorText>
        <p>
          This is a crossword. The crossword (and some other examples) is taken
          from{' '}
          <Link href={'https://2020.teammatehunt.com/clipboard'}>
            Teammate 2020
          </Link>
          .
        </p>
        <Crossword
          data={[
            [1, 2, X],
            [3, _, 4],
            [X, 5, _],
          ]}
        />
        {/* TODO: I want to make this a component, but don't know the right API yet. Heading, clues, label? TBD */}
        <div className="prefer-2-col my-1">
          <div>
            <h4>Across</h4>
            <ol>
              {ACROSS.map(([num, clue]) => (
                <li value={num}>{clue}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4>Down</h4>
            <ol>
              {DOWN.map(([num, clue]) => (
                <li value={num}>{clue}</li>
              ))}
            </ol>
          </div>
        </div>
        <hr className="my-4" />
        <p>This is a word search (or generic grid of letters).</p>
        <Wordsearch
          data={['SATOR', 'AREPO', 'TENET', 'OPERA', 'ROTAS'].map((s) =>
            s.split('')
          )}
          tableClass="mx-auto"
        />
        <hr className="my-4" />
        <p className="no-copy">
          This paragraph won't get copied to clipboard via the button due to the{' '}
          <Monospace>no-copy</Monospace> class.
        </p>
        <p className="copy-only">
          This paragraph, on the other hand, only appears when copied to
          clipboard due to the <Monospace>copy-only</Monospace> class.
        </p>
        <hr className="my-4" />
        <p>This is a barred crossword.</p>
        <Crossword
          data={[
            [1, 2, 3],
            [4, _, _],
            [5, _, _],
          ]}
          borders={[
            [_, L, _],
            [_, _, _],
            [_, _, L],
          ]}
        />
        <hr className="my-4" />
        <h4>Tables</h4>
        <Table>
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
            </tr>
          </tbody>
        </Table>

        <p>
          Hex grid (flat top) -- this should be component-ized, and is only
          intended for copy-to-clipboard (not front-end).
        </p>
        <Table>
          <tbody>
            <tr>
              <td className="!border-none"></td>
              <td rowSpan={2}>Cell 1</td>
              <td className="!border-none"></td>
            </tr>
            <tr>
              <td rowSpan={2}>Cell 2</td>
              <td rowSpan={2}>Cell 3</td>
            </tr>
            <tr>
              <td rowSpan={2}>Cell 4</td>
            </tr>
            <tr>
              <td rowSpan={2}>Cell 5</td>
              <td rowSpan={2}>Cell 6</td>
            </tr>
            <tr>
              <td rowSpan={2}>Cell 7</td>
            </tr>
            <tr>
              <td className="!border-none"></td>
              <td className="!border-none"></td>
            </tr>
          </tbody>
        </Table>

        <p>Hex grid (pointy top) -- ditto.</p>
        <Table>
          <tbody>
            <tr>
              <td className="!border-none"></td>
              <td colSpan={2}>Cell 1</td>
              <td colSpan={2}>Cell 2</td>
              <td className="!border-none"></td>
            </tr>
            <tr>
              <td colSpan={2}>Cell 3</td>
              <td colSpan={2}>Cell 4</td>
              <td colSpan={2}>Cell 5</td>
            </tr>
            <tr>
              <td className="!border-none"></td>
              <td colSpan={2}>Cell 6</td>
              <td colSpan={2}>Cell 7</td>
              <td className="!border-none"></td>
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
