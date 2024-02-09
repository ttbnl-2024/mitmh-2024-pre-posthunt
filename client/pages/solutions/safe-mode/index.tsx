import { Gothic_A1 } from 'next/font/google';
import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'safe-mode';
const ANSWER = `MERCIA`;

const gothic_a1 = Gothic_A1({ weight: '400', subsets: ['latin'] });

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each of the audio files are scales of different modes (hinted at by the
      title) with one note missing. They all start and end on C. As per the
      flavor text, each mode can only be used once, which helps clear up any
      ambiguities.{' '}
    </p>
    <Table>
      <thead>
        <tr>
          <th>Scale</th>
          <th>Notes</th>
          <th>Missing Note</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>MIXOLYDIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>(missing C) D E F G A B♭ C</td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AEOLIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>C (missing D) E♭ F G A♭ B♭ C</td>
          <td>2</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PHRYGIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>C D♭ (missing E♭) F G A♭ B♭ C</td>
          <td>3</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LOCRIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>C D♭ (missing E♭) F G♭ A♭ B♭ C</td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DORIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>C D E♭ (missing F) G A B♭ C</td>
          <td>4</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LYDIAN</Monospace>
          </td>
          <td className={gothic_a1.className}>C D E F♯ (missing G) A B C</td>
          <td>5</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We index the number of the missing note into the scale type to find the
      answer,{' '}
      <b>
        <Monospace>MERCIA</Monospace>
      </b>
      .
    </p>
    <style jsx global>{`
      td:nth-child(3),
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
