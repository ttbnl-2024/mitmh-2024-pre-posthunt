import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'shalom';
const ANSWER = `TORAH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      First, we answer the clues, noticing that the answers are all 6 letters
      and are alphabetical from the top, going clockwise. When we have all 6
      clues from each star, we notice that there's a letter that is featured in
      all 6 letters, in each position (first, second, third, fourth, fifth, and
      sixth).{' '}
    </p>
    <Table>
      <thead>
        <tr>
          <th>Star</th>
          <th>Clue</th>
          <th>Answer</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={6}>1</td>
          <td>What you might do to Elmo?</td>
          <td>
            <Clue>
              <b>T</b>ICKLE
            </Clue>
          </td>
          <td rowSpan={6}>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>No pins left to spare?</td>
          <td>
            <Clue>
              S<b>T</b>RIKE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Study of plants</td>
          <td>
            <Clue>
              BO<b>T</b>ANY
            </Clue>
          </td>
        </tr>

        <tr>
          <td>Alnwick or Conwy</td>
          <td>
            <Clue>
              CAS<b>T</b>LE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>The Beast's mate</td>
          <td>
            <Clue>
              BEAU<b>T</b>Y
            </Clue>
          </td>
        </tr>
        <tr>
          <td>NYC Park by the library</td>
          <td>
            <Clue>
              BRYAN<b>T</b>
            </Clue>
          </td>
        </tr>
        <tr>
          <td rowSpan={6}>2</td>
          <td>Not IRL</td>
          <td>
            <Clue>
              <b>O</b>NLINE
            </Clue>
          </td>
          <td rowSpan={6}>
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>Agree</td>
          <td>
            <Clue>
              C<b>O</b>NCUR
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Number on a periodic table</td>
          <td>
            <Clue>
              AT<b>O</b>MIC
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Page spread</td>
          <td>
            <Clue>
              LAY<b>O</b>UT
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Put to use, as an army</td>
          <td>
            <Clue>
              DEPL<b>O</b>Y
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Cajun music in LA?</td>
          <td>
            <Clue>
              ZYDEC<b>O</b>
            </Clue>
          </td>
        </tr>

        <tr>
          <td rowSpan={6}>3</td>
          <td>Approve, as a treaty</td>
          <td>
            <Clue>
              <b>R</b>ATIFY
            </Clue>
          </td>
          <td rowSpan={6}>
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>On all sides of</td>
          <td>
            <Clue>
              A<b>R</b>OUND
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Plastic doll</td>
          <td>
            <Clue>
              BA<b>R</b>BIE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Ensemble in a show</td>
          <td>
            <Clue>
              CHO<b>R</b>US
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Contaminated</td>
          <td>
            <Clue>
              IMPU<b>R</b>E
            </Clue>
          </td>
        </tr>
        <tr>
          <td>1, 106, or 18690</td>
          <td>
            <Clue>
              NUMBE<b>R</b>
            </Clue>
          </td>
        </tr>

        <tr>
          <td rowSpan={6}>4</td>
          <td>Kimberly, on Broadway</td>
          <td>
            <Clue>
              <b>A</b>KIMBO
            </Clue>
          </td>
          <td rowSpan={6}>
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>Gizmo</td>
          <td>
            <Clue>
              G<b>A</b>DGET
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Alter or coins</td>
          <td>
            <Clue>
              CH<b>A</b>NGE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Erotic or like saunas</td>
          <td>
            <Clue>
              STE<b>A</b>MY
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Stingy</td>
          <td>
            <Clue>
              FRUG<b>A</b>L
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Film</td>
          <td>
            <Clue>
              CINEM<b>A</b>
            </Clue>
          </td>
        </tr>

        <tr>
          <td rowSpan={6}>5</td>
          <td>Arrogance</td>
          <td>
            <Clue>
              <b>H</b>UBRIS
            </Clue>
          </td>
          <td rowSpan={6}>
            <Clue>H</Clue>
          </td>
        </tr>
        <tr>
          <td>"Star Trek" ensign Pavel</td>
          <td>
            <Clue>
              C<b>H</b>EKOV
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Breathe out</td>
          <td>
            <Clue>
              EX<b>H</b>ALE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Accumulate</td>
          <td>
            <Clue>
              GAT<b>H</b>ER
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Hitchcock movie that was showered with praise?</td>
          <td>
            <Clue>
              PSYC<b>H</b>O
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Shine</td>
          <td>
            <Clue>
              POLIS<b>H</b>
            </Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We take those letters, and read them in order to get the puzzle solution:{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(1)[rowspan],
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
