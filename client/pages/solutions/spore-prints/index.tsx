import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/spore-prints/0.png';

const SLUG = 'spore-prints';
const ANSWER = `DIONEO`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see six Namystic puzzle grids. When solved, we find names of various
      edible mushrooms, with an insect name hidden inside.
    </p>
    <p>
      <SheetableImage
        alt="solved namystics"
        src={image0}
        title="solved namystics"
      />
    </p>
    <Table className="namystics">
      <thead>
        <tr>
          <th>Grid</th>
          <th>Mushroom with insect name</th>
          <th>Replaced letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Clue>CHANT(EARWIG)RELLE</Clue>
          </td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <Clue>CHICKENOFTHEWOO(ANT)S</Clue>
          </td>
          <td>
            <Clue>D</Clue>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <Clue>(FLEA)YSTER</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <Clue>LIONSMA(DRAGONFLY)E</Clue>
          </td>
          <td>
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <Clue>M(CICADA)REL</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <Clue>PORC(BEETLE)NI</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking the insects in alphabetical order, and the letters they replace,{' '}
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Clue>ANT</Clue>
          </td>
          <td>
            <Clue>D</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>BEETLE</Clue>
          </td>
          <td>
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>CICADA</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>DRAGONFLY</Clue>
          </td>
          <td>
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>EARWIG</Clue>
          </td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>FLEA</Clue>
          </td>
          <td>
            <Clue>O</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      spells our answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx>{`
      .namystics th:nth-child(3),
      .namystics td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
