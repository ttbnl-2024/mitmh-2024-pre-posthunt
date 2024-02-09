import { FC } from 'react';

import { Colors } from 'components/crossword';
import Grid from 'components/grid';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';

import image0 from 'assets/solutions/why-the-romans-never-invented-logic-puzzles/0.png';

const SLUG = 'why-the-romans-never-invented-logic-puzzles';
const ANSWER = `RELAXANTS`;

const gridData = [
  'RQRYELIEDETZPM',
  'AOLNAT63UEBRA7',
  'LKISME4DTE"XI8',
  'IJGG5A5ALNEDRK',
  'TYHMIMUFLEACN3',
  'KCIR4EMOEJSRTJ',
  '=JI"TIC&R6ORSE',
  'UG"DI"TH6OCTFA',
  'EBNAMTR2NE0YJT',
  '3NNNE=6INCTARR',
  '5472VDDRGAEMJA',
  'SRTTIRPP"GSFTN',
  'I"MCOELWPSNULO',
  'A3NO&RESN2O9VL',
].map((row) => row.split(''));

const gridShade = [
  '__x______x__x_',
  'x__________x__',
  '___x_x____x___',
  '_xx________x__',
  '___x__xx______',
  'x____x___x___x',
  '_xxx______xx__',
  '__x______xx___',
  'x___x_______x_',
  '__x____x______',
  '_____x______x_',
  '___xx___x_____',
  '____________x_',
  '______x_x__x__',
].map((row) => row.split('').map((cell) => (cell === 'x' ? Colors.C9 : '')));

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      This is a variant logic puzzle which uses Roman numerals instead of
      digits. The example grid lets us deduce the rules, which are:
    </p>
    <ul>
      <li>
        Each row and column must be divisible into valid Roman numerals, whose
        product is given in that row or column. For example, the 72 in the
        example puzzle parses as 72 = I * VI * XII.
      </li>
      <li>
        The same number may not occur as multiple factors of the same entry.
        This is shown by the first crossed-out puzzle.
      </li>
      <li>
        Only numerals &lt; 40 are allowed (so every cell is I, V, or X, not any
        of the higher numerals like L or C). This is shown by the second
        crossed-out puzzle.
      </li>
    </ul>
    <p>
      There is a unique way to do this (though the parsing of each entry into
      contiguous factors needn't be unique). The solution is shown below:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <Grid data={gridData} shading={gridShade} className="solution-grid" />

    <p>
      Reading the squares corresponding to the Vs like in the example puzzle
      gives the clue <Clue>REPARSE "JGDMUFKEJJJI" OR "OCEMJNIDJTI" LEN 9</Clue>.
      For each of these strings, converting each letter to its A1Z26 equivalent
      in Roman numerals and concatenating yields XVIIIVXIIIXXIVIXIVXXXIX. The
      only English word that also has this property is the final answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .solution-grid table {
        margin-left: auto;
        margin-right: auto;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .solution-grid td {
        height: 30px !important;
        width: 30px !important;
        font-size: 100%;
      }
      @media (min-width: 768px) {
        .solution-grid td {
          height: 40px !important;
          width: 40px !important;
          font-size: 150%;
        }
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
