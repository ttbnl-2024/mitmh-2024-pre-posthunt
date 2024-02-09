import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'cards';
const ANSWER = `FORMATION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each diagram depicts a particular game that uses cards, given in
      alphabetical order.
    </p>
    <ul>
      <li>
        <Monospace>CANASTA</Monospace>: Players have hands of various sizes, and
        meld sets of the same rank, 2s and jokers being wild, and meld red
        threes separately.
      </li>
      <li>
        <Monospace>CODENAMES</Monospace>: This game is played with its own
        special cards, which are tan with a white box containing the word, are
        covered with a blue or red card when the guessers guess them, and the
        square card is a key showing how the colors map, and only visible to two
        players (though that aspect couldn't be conveyed in the puzzle&mdash;we
        thought it was more important to show this card clearly).
      </li>
      <li>
        <Monospace>CRIBBAGE</Monospace>: Cribbage uses a pegboard for scoring
        which has a long, multi-colored scoring track like the one shown. When
        two players play, each is dealt six cards, and discards two of them face
        down to form the crib in the middle of the table.
      </li>
      <li>
        <Monospace>DUPLICATE BRIDGE</Monospace>: Players have the same number of
        cards in their hands, except dummy's hand is face up on the table and
        split up by suit. Players keep the cards they played on previous tricks
        in front of them face down, turned to indicate which side won the trick.
      </li>
      <li>
        <Monospace>FIFTY-TWO CARD PICKUP</Monospace>: If you have never played
        this "game" you should ask someone who has and they'll be happy to show
        you. It consists of riffling the deck up into the air and letting the
        cards fall as they may.
      </li>
      <li>
        <Monospace>GO FISH</Monospace>: Players have hands of varying sizes.
        When (usually after asking another player for matching cards) they have
        managed to collect a set of four, they play them face up in front of
        them. The unused cards are spread around to form a "pool" in the center
        instead of being stacked as a deck.
      </li>
      <li>
        <Monospace>MAGIC: THE GATHERING</Monospace>: Each player starts with 7
        cards in hand and a deck on the table using special brown-backed cards.
      </li>
      <li>
        <Monospace>TEXAS HOLD 'EM</Monospace>: Each player is dealt two cards
        face down, and community cards are turned face up in the middle - the
        first three, called the flop, at once, as shown in the puzzle.
      </li>
      <li>
        <Monospace>THREE CARD MONTE</Monospace>: This "game" is a street hustle,
        often played on top of a cardboard box or other makeshift table. The
        hustler shows the mark one of the cards, commonly the queen of hearts,
        and then shuffles the cards about face down and challenges the mark to
        find the shown card. This con is typically played with cards that are
        slightly curved (raised in the middle when face down).
      </li>
    </ul>
    <p>The card games fit on the blanks, and extract the following letters:</p>
    <Table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>GO </Monospace>
            <b>
              <Monospace>F</Monospace>
            </b>
            <Monospace>ISH</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>THREE CARD M</Monospace>
            <b>
              <Monospace>O</Monospace>
            </b>
            <Monospace>NTE</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DUPLICATE B</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>IDGE</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TEXAS HOLD 'E</Monospace>
            <b>
              <Monospace>M</Monospace>
            </b>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CAN</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>STA</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FIFTY-</Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>WO CARD PICKUP</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CR</Monospace>
            <b>
              <Monospace>I</Monospace>
            </b>
            <Monospace>BBAGE</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>C</Monospace>
            <b>
              <Monospace>O</Monospace>
            </b>
            <Monospace>DENAMES</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MAGIC: THE GATHERI</Monospace>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Answerize>FORMATION</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(2) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
