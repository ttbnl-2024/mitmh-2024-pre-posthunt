import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'peak-tv';
const ANSWER = `STONE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>First, we identify the actors and the shows the pictures are from:</p>
    <ul className="list-none p-6 -indent-4">
      <li>50 Cent (<i>Power</i>)</li>
      <li>Bella Shepard (<i>Wolf Pack</i>)</li>
      <li>Catherine Curtin (<i>Orange Is the New Black</i>)</li>
      <li>Cathy Ang (<i>And Just Like That</i>)</li>
      <li>Dylan Smith (<i>The Lord of the Rings: The Rings of Power</i>)</li>
      <li>Edmund Donovan (<i>Hightown</i>)</li>
      <li>Eric Jacobson (<i>Muppets Mayhem</i>)</li>
      <li>Inji Jeong (<i>Pachinko</i>)</li>
      <li>Jackie Chung (<i>The Summer I Turned Pretty</i>)</li>
      <li>Josh Segarra (<i>The Other Two</i>)</li>
      <li>Katelyn Nacon (<i>The Walking Dead</i>)</li>
      <li>Kathryn Hahn (<i>Wanda/Vision</i>)</li>
      <li>Martin Short (<i>Only Murders in the Building</i>)</li>
      <li>Mikhail Keize (<i>First Wives Club</i>)</li>
      <li>Nestor Carbonell (<i>The Morning Show</i>)</li>
      <li>Noah Schnapp (<i>Stranger Things</i>)</li>
      <li>Raven Goodwin (<i>Being Mary Jane</i>)</li>
      <li>Sacha Dhawan (<i>The Great</i>)</li>
      <li>Shannon DeVideo (<i>Lucky Hank</i>)</li>
      <li>Simon Helberg (<i>Poker Face</i>)</li>
      <li>Simone Joy Jones (<i>Bel-Air</i>)</li>
      <li>Tawny Newsome (<i>Star Trek: Lower Decks</i>)</li>
    </ul>
    <p>
      Next, we identify the streaming platforms from their cropped logos at the
      bottom, and notice that the TV shows above primarily air on these
      services&mdash;specifically, 2 shows per service. When we match the actors by the main
      streaming service of their given TV show in the order at the bottom, we
      see that their character names (clued by the flavortext) start with the
      same letter:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Actor 1</th>
          <th>Actor 2</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apple TV+</td>
          <td>
            Yangjin
            <br />
            Inji Jeong
            <br />
            <i>Pachinko</i>
          </td>
          <td>
            Yanko Flores
            <br />
            Nestor Carbonell
            <br />
            <i>The Morning Show</i>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>AMC+</td>
          <td>
            Enid
            <br />
            Katelyn Nacon
            <br />
            <i>The Walking Dead</i>
          </td>
          <td>
            Emma
            <br />
            Shannon DeVideo
            <br />
            <i>Lucky Hank</i>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Max</td>
          <td>
            Lily Goldenblatt
            <br />
            Cathy Ang
            <br />
            <i>And Just Like That</i>
          </td>
          <td>
            Lance Arroyo
            <br />
            Josh Segarra
            <br />
            <i>The Other Two</i>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Prime Video</td>
          <td>
            Laurel
            <br />
            Jackie Chung
            <br />
            <i>The Summer I Turned Pretty</i>
          </td>
          <td>
            Largo Brandyfoot
            <br />
            Dylan Smith
            <br />
            <i>The Lord of the Rings: The Rings of Power</i>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Hulu</td>
          <td>
            Orlo
            <br />
            Sacha Dhawan
            <br />
            <i>The Great</i>
          </td>
          <td>
            Oliver Putnam
            <br />
            Martin Short
            <br />
            <i>Only Murders in the Building</i>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Netflix</td>
          <td>
            Will Byers
            <br />
            Noah Schnapp
            <br />
            <i>Stranger Things</i>
          </td>
          <td>
            Wanda Bell
            <br />
            Catherine Curtin
            <br />
            <i>Orange Is the New Black</i>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Paramount+</td>
          <td>
            Beckett Mariner
            <br />
            Tawny Newsome
            <br />
            <i>Star Trek: Lower Decks</i>
          </td>
          <td>
            Blake Navarro
            <br />
            Bella Shepard
            <br />
            <i>Wolf Pack</i>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Peacock</td>
          <td>
            Luca
            <br />
            Simon Helberg
            <br />
            <i>Poker Face</i>
          </td>
          <td>
            Lisa
            <br />
            Simone Joy Jones
            <br />
            <i>Bel-Air</i>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Disney+</td>
          <td>
            Agatha Harkness
            <br />
            Kathryn Hahn
            <br />
            <i>Wanda/Vision</i>
          </td>
          <td>
            Animal
            <br />
            Eric Jacobson
            <br />
            <i>Muppets Mayhem</i>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>BET+</td>
          <td>
            Nigel
            <br />
            Mikhail Keize
            <br />
            <i>First Wives Club</i>
          </td>
          <td>
            Niecy Patterson
            <br />
            Raven Goodwin
            <br />
            <i>Being Mary Jane</i>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Starz</td>
          <td>
            Kanan Stark
            <br />
            50 Cent
            <br />
            <i>Power</i>
          </td>
          <td>
            Kizzle
            <br />
            Edmund Donovan
            <br />
            <i>Hightown</i>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading these letters in order gives us the cluephrase:{' '}
      <Monospace>YELLOW BLANK</Monospace>.
    </p>
    <p>
      The photo in parentheses at the bottom of the character Number Five from
      <i>Battlestar Galactica</i> indicates a final answer enumeration of 5. We
      complete the clue phrase for the TV show <Monospace>YELLOWSTONE</Monospace>
      , and call in the answer <Answerize>STONE</Answerize>.
    </p>
    <Attributions>
      <p>All images of TV shows and actors by fair use.</p>
    </Attributions>
    <style jsx global>{`
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
