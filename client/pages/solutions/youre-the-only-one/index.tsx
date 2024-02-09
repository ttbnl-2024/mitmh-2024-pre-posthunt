import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'youre-the-only-one';
const ANSWER = `SAMIAN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      These are alternatives to the classic come-on "Are you from Tennessee?
      Because you're the only 10 I see!" The first 4 lines clue US states; the
      other 5 clue countries.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Extracted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"... You're the only carpet I'd astonish!"</td>
          <td>
            <Monospace>FLORIDA</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only nabla I put on my body!"</td>
          <td>
            <Monospace>DELAWARE</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only phone contact I'd be in debt to!"</td>
          <td>
            <Monospace>COLORADO</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only married woman I urinate (on)!"</td>
          <td>
            <Monospace>MISSISSIPPI</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"... You're the only angry pet I traumatize!"</td>
          <td>
            <Monospace>MADAGASCAR</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only current events I acquire!"</td>
          <td>
            <Monospace>NEW ZEALAND</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only bacterium I strike with my leg!"</td>
          <td>
            <Monospace>GERMANY</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only thorn I administer an amount of medicine to!"</td>
          <td>
            <Monospace>BARBADOS</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>"... You're the only group of wolves I'm totally obsessed with!"</td>
          <td>
            <Monospace>PAKISTAN</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      The given blanks at the bottom indicate a 6-letter answer, and{' '}
      <Monospace>FROM SAMOS</Monospace> clues the answer{' '}
      <Answerize>SAMIAN</Answerize>. Are you from Samos? Because you're the
      only... uh... say I moss.
    </p>

    <AuthorsNotes>
      <p>Are you from the Holy See? Because you're the only hole I see.</p>
    </AuthorsNotes>
    <style jsx global>{`
      td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
