import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'marathon';
const ANSWER = `TOE DRAG`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Together with the names of the winners and “marathon” we’re meant to
      think of “movie marathon” and the names of famous actors. Checking
      their filmographies, we see that each actor has a movie with an ordinal
      (nth) in their title: for example, Sylvester Stallone acted in{' '}
      <span className="italic">First Blood</span>.
    </p>
    <p>
      We can also group the given items into 7 groups of 7, each related to the
      other word in the movie titles. The items are given in a specific order.
      Taking the nth item from each list, we can read the first letters in order
      to get the answer{' '}
      <b>
        <Monospace>TOE DRAG</Monospace>
      </b>
      .
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Actor</th>
          <th>Movie</th>
          <th>Words</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sylvester Stallone</td>
          <td>First Blood</td>
          <td>
            <b>True</b>, Arterial, Vampire, O+, Vincent Owens, AB-, Fake
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>Jennifer Lopez</td>
          <td>Second Act</td>
          <td>
            High-wire, <b>Obedience</b>, Civil rights, Kindness, Defiance, Class, Deed
          </td>
          <td>O</td>
        </tr>
        <tr>
          <td>Benedict Cumberbatch</td>
          <td>Third Star</td>
          <td>
            North, DiCaprio, <b>Electra</b>, Asterisk, Dog, David, Throwing
          </td>
          <td>E</td>
        </tr>
        <tr>
          <td>Roy Scheider</td>
          <td>The Fourth War</td>
          <td>
            Card game, Attrition, Civil, <b>Dogs</b>, Fog, Roses, Cold
          </td>
          <td>D</td>
        </tr>
        <tr>
          <td>Milla Jovovich</td>
          <td>The Fifth Element</td>
          <td>
            Happy place, Fire, Surprise, Part, <b>Ra</b>, Earth, Al
          </td>
          <td>R</td>
        </tr>
        <tr>
          <td>Bruce Willis</td>
          <td>The Sixth Sense</td>
          <td>
            Entitlement, Common, Sight, Taste, Well-being, <b>Adventure</b>,
            Humor
          </td>
          <td>A</td>
        </tr>
        <tr>
          <td>Demi Moore</td>
          <td>The Seventh Sign</td>
          <td>
            Minus, Stop, Street, Language, Leo, Indication, <b>Greater than</b>
          </td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>

    <style jsx global>{`
      .solution-table td:nth-child(4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-align: center;
      }
      .solution-table td:nth-child(2) {
        font-style: italic;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
