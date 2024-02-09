import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'casino-royale';
const ANSWER = `DISTILLER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      In the Wikipedia page for{' '}
      <a href="https://en.wikipedia.org/wiki/Blue_ribbon">blue ribbon</a>, we
      find that the term comes from the{' '}
      <a href="https://en.wikipedia.org/wiki/Blue_Riband">Blue Riband</a>, a
      title given to the ship holding the record for fastest crossing of the
      Atlantic Ocean.
    </p>
    <p>
      Each of the blue ribbons marks a geographic location, past or present,
      that was the namesake of a ship which earned the Blue Riband. Larger
      ribbons correspond to larger geographic locations, such as the huge one
      representing the entire Pacific Ocean, and a railroad icon is given for
      the one which represents an actual railroad.
    </p>
    <p>
      The ribbons appear in four different shades of blue. We group the ribbons
      by shades, ordering the shades from light to dark, and within each shade
      sorting by the order in which the ships earned the Blue Riband. Then we
      index the number from the ribbon into the name of the ship to produce a
      clue phrase:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Ship/Location</th>
          <th>Index</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Clue>PERSIA</Clue> [Iran]
          </td>
          <td>5</td>
          <td>
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>CITY OF BERLIN</Clue>
          </td>
          <td>12</td>
          <td>
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ALASKA</Clue>
          </td>
          <td>4</td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>LUCANIA</Clue> [Roman province in southern Italy, southeast of
            Campania]
          </td>
          <td>2</td>
          <td>
            <Clue>U</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>DEUTSCHLAND</Clue> [Germany]
          </td>
          <td>8</td>
          <td>
            <Clue>L</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>MAURETANIA</Clue> [Roman province along the north coast of
            Africa]
          </td>
          <td>6</td>
          <td>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>
            <Clue>PACIFIC</Clue> [Ocean]
          </td>
          <td>1</td>
          <td>
            <Clue>P</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>BALTIC</Clue> [Sea]
          </td>
          <td>3</td>
          <td>
            <Clue>L</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>UMBRIA</Clue> [region of central Italy]
          </td>
          <td>1</td>
          <td>
            <Clue>U</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>LUSITANIA</Clue> [Roman province, now part of Spain and
            Portugal]
          </td>
          <td>3</td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>
            <Clue>CAMBRIA</Clue> [Wales]
          </td>
          <td>4</td>
          <td>
            <Clue>B</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>SCOTIA</Clue> [Scotland]
          </td>
          <td>3</td>
          <td>
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ADRIATIC</Clue> [Sea]
          </td>
          <td>5</td>
          <td>
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ETRURIA</Clue> [Historical Italian region around what is now
            Tuscany]
          </td>
          <td>2</td>
          <td>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>
            <Clue>GREAT WESTERN</Clue> [British railway from London to Bristol]
          </td>
          <td>9</td>
          <td>
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>COLUMBIA</Clue> [Originally meaning United States, but placed
            on a city within the US of the same name]
          </td>
          <td>4</td>
          <td>
            <Clue>U</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>CITY OF PARIS</Clue>
          </td>
          <td>9</td>
          <td>
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>CAMPANIA</Clue> [region of southern Italy]
          </td>
          <td>6</td>
          <td>
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>BREMEN</Clue>
          </td>
          <td>5</td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>NORMANDIE</Clue> [Normandy]
          </td>
          <td>3</td>
          <td>
            <Clue>R</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Note: Oregon and Asia are not used in the puzzle construction, nor are
      ships which either have no obvious geographic origin (<i>Kaiser Wilhelm der
      Grosse</i>) or which would be ambiguous (America / United States).
    </p>
    <p>
      This results in the clue phrase <Clue>INSULT PLUS BOAT TURNER</Clue>, or{' '}
      <Clue>DIS + TILLER</Clue> to make <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(2),
      td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
