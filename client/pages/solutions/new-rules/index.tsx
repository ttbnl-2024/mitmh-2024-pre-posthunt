import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'new-rules';
const ANSWER = `THAUM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of strange board game rules. Reading down
      the initials spells <Monospace>YOUTUBE DRAGON'S TOMB</Monospace>.{' '}
      <a href="https://www.youtube.com/@TheDragonsTomb">The Dragon's Tomb</a> is
      a YouTube channel in which host Jeff Kornberg explains the rules to
      various board games... except they're complete nonsense. Kornberg creates
      new, absurd rules but presents them with a straight face as though they
      were real. He also reviews every game with the sentence "All in all, this
      game is a blast to play," referenced in the flavortext.
    </p>
    <p>
      Each rule in this puzzle refers to a game Kornberg has reinvented on his
      channel. To ease the search, the rules are given in alphabetical order by
      game. Furthermore, each rule contains the name of the winning player, each
      starting with a unique letter, and exactly one number. Indexing into the
      game by that number and sorting by the players' names first letters:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Game</th>
          <th>Number</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>
            <Monospace>SPLENDOR</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>
            <Monospace>OPERATION</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>
            <Monospace>TWISTER</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Diane</td>
          <td>
            <Monospace>CODENAMES</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Emily</td>
          <td>
            <Monospace>WINGSPAN</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Frances</td>
          <td>
            <Monospace>CARCASSONNE</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Greg</td>
          <td>
            <Monospace>TICKET TO RIDE</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Helen</td>
          <td>
            <Monospace>AZUL</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ivan</td>
          <td>
            <Monospace>SMALL WORLD</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jim</td>
          <td>
            <Monospace>BANANAGRAMS</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>Karen</td>
          <td>
            <Monospace>ONE NIGHT ULTIMATE WEREWOLF</Monospace>
          </td>
          <td>14</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lucy</td>
          <td>
            <Monospace>SUSHI GO!</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mike</td>
          <td>
            <Monospace>BATTLESHIP</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Nate</td>
          <td>
            <Monospace>CLUE</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Olivia</td>
          <td>
            <Monospace>MOUSE TRAP</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Paul</td>
          <td>
            <Monospace>JENGA</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Quentin</td>
          <td>
            <Monospace>BETRAYAL AT HOUSE ON THE HILL</Monospace>
          </td>
          <td>22</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rachel</td>
          <td>
            <Monospace>CHUTES AND LADDERS</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      <Monospace>DISCWORLD MAGIC UNIT</Monospace> is a clue for{' '}
      <Answerize>THAUM</Answerize>, the puzzle's answer.
    </p>
    <style jsx global>{`
      td:nth-child(3),
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
