import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import { ReactComponent as Image0 } from 'assets/solutions/reverse/0.svg';
import { ReactComponent as Image1 } from 'assets/solutions/reverse/1.svg';
import { ReactComponent as Image2 } from 'assets/solutions/reverse/2.svg';
import { ReactComponent as Image3 } from 'assets/solutions/reverse/3.svg';
import { ReactComponent as Image4 } from 'assets/solutions/reverse/4.svg';
import { ReactComponent as Image5 } from 'assets/solutions/reverse/5.svg';
import { ReactComponent as Image6 } from 'assets/solutions/reverse/6.svg';
import { ReactComponent as Image7 } from 'assets/solutions/reverse/7.svg';
import { ReactComponent as Image8 } from 'assets/solutions/reverse/8.svg';
import { ReactComponent as Image9 } from 'assets/solutions/reverse/9.svg';
import { ReactComponent as Image10 } from 'assets/solutions/reverse/10.svg';
import { ReactComponent as Image11 } from 'assets/solutions/reverse/11.svg';

const SLUG = 'reverse';
const ANSWER = `GRAY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The answers to the clues are shown below. We notice that they are all
      shades of black or white. In fact, it's black, then white, then black
      again, etc.
    </p>
    <Table className="answers-table">
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Root confection</td>
          <td>LICORICE</td>
        </tr>
        <tr>
          <td>Elite tower stuff?</td>
          <td>IVORY</td>
        </tr>
        <tr>
          <td>Street goo</td>
          <td>ASPHALT</td>
        </tr>
        <tr>
          <td>Runaways dinosaur</td>
          <td>OLDLACE</td>
        </tr>
        <tr>
          <td>Pencil "lead"</td>
          <td>GRAPHITE</td>
        </tr>
        <tr>
          <td>Chick's housing</td>
          <td>EGGSHELL</td>
        </tr>
        <tr>
          <td>Barbecue lumps</td>
          <td>CHARCOAL</td>
        </tr>
        <tr>
          <td>Necklace bead</td>
          <td>PEARL</td>
        </tr>
        <tr>
          <td>Coldplay song</td>
          <td>MIDNIGHT</td>
        </tr>
        <tr>
          <td>Aphid product</td>
          <td>HONEYDEW</td>
        </tr>
        <tr>
          <td>Marblewood</td>
          <td>EBONY</td>
        </tr>
        <tr>
          <td>TV static</td>
          <td>SNOW</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The field of letters looks like a Reversi board. It also contains all of
      these words in the form of a word search. However, the black/white
      coloring seems incomplete or completely haphazard, and many letters do not
      have a white/black piece on them at all.
    </p>
    <p>
      The letters left over from the word search spell out "
      <Clue>PUT YOUR PIECES INTO PLACES AROUND A POSITION OF SIGNIFICANCE</Clue>
      ", suggesting that we need to make a sequence of specific moves.
    </p>
    <p>
      The title, as well as the black/white alternating colors, suggest that we
      should make moves by placing pieces in accordance with Reversi rules
      (indeed the black player starts in Reversi). We find that there is always
      a unique placement such that the next word in the list becomes colored
      completely in black or white as appropriate.
    </p>
    <p>
      The letters where we placed all the stones spell out the phrase{' '}
      <Clue>SOLUTION </Clue>
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <Image0 className="sm:w-1/2 inline-block border-box p-4" />
      <Image1 className="sm:w-1/2 inline-block border-box p-4" />
      <Image2 className="sm:w-1/2 inline-block border-box p-4" />
      <Image3 className="sm:w-1/2 inline-block border-box p-4" />
      <Image4 className="sm:w-1/2 inline-block border-box p-4" />
      <Image5 className="sm:w-1/2 inline-block border-box p-4" />
      <Image6 className="sm:w-1/2 inline-block border-box p-4" />
      <Image7 className="sm:w-1/2 inline-block border-box p-4" />
      <Image8 className="sm:w-1/2 inline-block border-box p-4" />
      <Image9 className="sm:w-1/2 inline-block border-box p-4" />
      <Image10 className="sm:w-1/2 inline-block border-box p-4" />
      <Image11 className="sm:w-1/2 inline-block border-box p-4" />
    </p>
    <style jsx global>{`
      .answers-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
