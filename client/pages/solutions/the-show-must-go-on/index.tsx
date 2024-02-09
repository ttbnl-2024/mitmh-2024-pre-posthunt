import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-show-must-go-on';
const ANSWER = `ELVIS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see 5 audio clips, where each clip is a specific length. They are sped
      up too fast to understand, but slowing them down gives 5 quotes:
    </p>
    <ol>
      <li>
        In this manner, Mr Speaker, the government has acted as if this were a
        diseased estate. It's not sufficiently elasticated... The government is
        suffering from a complete lack of apathy in the case.
      </li>
      <li>
        It's a riddle. Two guys destroyed your bike with a crowbar and a bat.
        One of them wasn't me.
      </li>
      <li>Better to reign in hell than to serve in heaven.</li>
      <li>Only you can prevent forest fires.</li>
      <li>
        What is the meaning of life? That your soul may outlive your remains in
        something sacred and should escape decay.
      </li>
    </ol>
    <p>
      Each quote is said by a specific person or character, in alphabetical
      order. Googling these, we realize that Nic Cage has played a role with the
      same name as each one of these characters. We can index into the movie
      name by the clip length in seconds, and reorder by movie release year:
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Clip</th>
          <th>Character</th>
          <th>Movie</th>
          <th>Year</th>
          <th>Clip Length</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>Smokey</td>
          <td>RUMBLE FISH</td>
          <td>1983</td>
          <td>6</td>
          <td>E</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yuri Orlov</td>
          <td>LORD OF WAR</td>
          <td>2005</td>
          <td>1</td>
          <td>L</td>
        </tr>
        <tr>
          <td>3</td>
          <td>John Milton</td>
          <td>DRIVE ANGRY</td>
          <td>2011</td>
          <td>4</td>
          <td>V</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Frank Walsh</td>
          <td>PRIMAL</td>
          <td>2019</td>
          <td>3</td>
          <td>I</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Janitor</td>
          <td>WILLY'S WONDERLAND</td>
          <td>2021</td>
          <td>6</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .solution-table td:nth-child(1),
      .solution-table td:nth-child(4),
      .solution-table td:nth-child(5),
      .solution-table td:nth-child(6) {
        text-align: center;
      }
      .solution-table td:nth-child(3n) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
