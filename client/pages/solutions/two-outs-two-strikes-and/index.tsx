import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'two-outs-two-strikes-and';
const ANSWER = `DISTICHAL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see some sentence fragments, some bolded. We start assembling the
      sentences and notice one curious thing&mdash;they are all made up of 3
      fragments that have all been "snipped" at the Os. In fact, each sentence
      contained 2 Os initially that have been cut and removed, and each is
      cluing a male animal. This, combined with the title referring to the
      worst-case baseball scenario saying "two outs, two strikes, and no balls",
      leads us to the fact that this puzzle is about terms for various castrated
      male animals.
    </p>
    <p>
      After we assemble the sentences we also notice that they uniquely begin in
      letters A&ndash;K of the alphabet, which provides an ordering. We find the
      referenced male animal for each clue and the corresponding castrated
      animal term. We note which sentence fragment was bolded and index that
      number into the castrated animal term to extract the instructional phrase{' '}
      <Clue>GIVE US TWO BALLS</Clue>. We perform the task to receive the final
      answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Clue</th>
          <th>Male animal</th>
          <th>Bolded fragment</th>
          <th>Castrated animal</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>Alley-prowling frenemy of animated Jerry</td>
          <td rowSpan={2}>TOM</td>
          <td>1</td>
          <td>GIB</td>
          <td>G</td>
        </tr>
        <tr>
          <td>2</td>
          <td>GIB</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Beast that was Harry Potter's Patronus</td>
          <td>STAG</td>
          <td>3</td>
          <td>HAVIER</td>
          <td>V</td>
        </tr>
        <tr>
          <td rowSpan={2}>
            Comes after "Vitruvian" in the name of a Da Vinci drawing
          </td>
          <td rowSpan={2}>MAN</td>
          <td>1</td>
          <td>EUNUCH</td>
          <td>E</td>
        </tr>
        <tr>
          <td>2</td>
          <td>EUNUCH</td>
          <td>U</td>
        </tr>
        <tr>
          <td rowSpan={2}>
            Daring Western riders try lasting eight seconds astride this bucking
            bovine
          </td>
          <td rowSpan={2}>BULL (in ranching)</td>
          <td>1</td>
          <td>STEER</td>
          <td>S</td>
        </tr>
        <tr>
          <td>2</td>
          <td>STEER</td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            Ewe's mate with a head (and name) that adorned Iron Age battering
            implements
          </td>
          <td>RAM</td>
          <td>1</td>
          <td>WETHER</td>
          <td>W</td>
        </tr>
        <tr>
          <td>
            Father's next purchase "if that billy goat won't pull" (plus a cart)
          </td>
          <td>BULL (as draft animal)</td>
          <td>1</td>
          <td>OX</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Grunter with a head that may end up on your deli sandwich</td>
          <td>BOAR</td>
          <td>1</td>
          <td>BARROW</td>
          <td>B</td>
        </tr>
        <tr>
          <td>He awakens Old MacDonald at dawn</td>
          <td>ROOSTER</td>
          <td>2</td>
          <td>CAPON</td>
          <td>A</td>
        </tr>
        <tr>
          <td>
            In the TV/film industry, Bugs and Roger, as well as a dollar
            nickname
          </td>
          <td>BUCK</td>
          <td>1</td>
          <td>LAPIN</td>
          <td>L</td>
        </tr>
        <tr>
          <td>
            Just eight of them sired the entire Lipizzaner breed for which
            Vienna is famed
          </td>
          <td>STALLION</td>
          <td>3</td>
          <td>GELDING</td>
          <td>L</td>
        </tr>
        <tr>
          <td>Kurwenal's vocal part in Wagner's "Tristan und Isolde"</td>
          <td>BARITONE</td>
          <td>3</td>
          <td>CASTRATO</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .solution-table td {
        text-align: center;
      }
      .solution-table td:last-child,
      .solution-table td:nth-last-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
