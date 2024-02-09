import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'make-a-winning-hand';
const ANSWER = `GRAY WASTES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <h3>Background</h3>
    <p>
      We are playing a card game with an opponent with a deck of size 27 cards,
      each with a unique name / label. Each player starts with a (deterministic)
      hand of 4 cards, then takes turns picking cards from the table. As we
      play, we find that we lose when our hand contains certain triplets of
      cards. While playing the game, we can deduce that we are playing anti-SET
      on certain qualities of the cards.
    </p>
    <p>
      A card's 3 "qualities", each of which has 3 "kinds", are defined as
      follows.
    </p>
    <ol>
      <li>
        Is it a:
        <ol className="list-[lower-alpha]">
          <li>Person? (0)</li>
          <li>Place? (1)</li>
          <li>Thing? (2)</li>
        </ol>
      </li>
      <li>
        Is it associated with:
        <ol className="list-[lower-alpha]">
          <li>Judaism? (0)</li>
          <li>Christianity? (1)</li>
          <li>Islam? (2)</li>
        </ol>
      </li>
      <li>
        Is it:
        <ol className="list-[lower-alpha]">
          <li>Ancient? (0)</li>
          <li>Historical? (1)</li>
          <li>Modern? (2)</li>
        </ol>
      </li>
    </ol>
    <p>
      However, the order or value of these digits is not apparent to us at this
      point, only the general categories. Numbers here are for convenience. The
      cards' numberings are as follows:
    </p>
    <ol>
      <li value={0}>Raphael (0,0,0)</li>
      <li>Yohanan ben Zakkai (0,0,1)</li>
      <li>Shmuley Boteach (0,0,2)</li>
      <li>Jesus Christ (0,1,0)</li>
      <li>St. Telesphorus (0,1,1)</li>
      <li>Sviatoslav Shevchuk (0,1,2)</li>
      <li>Uzair (0,2,0)</li>
      <li>Al-Mansur (0,2,1)</li>
      <li>Ahmed el-Tayeb (0,2,2)</li>
      <li>Moriah (1,0,0)</li>
      <li>Worms Synagogue (1,0,1)</li>
      <li>Congregation Shaare Zion (1,0,2)</li>
      <li>Mount of Temptation (1,1,0)</li>
      <li>Church of the Nativity (1,1,1)</li>
      <li>Cathedral of the Assumption (1,1,2)</li>
      <li>Mecca (1,2,0)</li>
      <li>Ibrahimi Mosque (1,2,1)</li>
      <li>Süleymaniye Mosque (1,2,2)</li>
      <li>Passover (2,0,0)</li>
      <li>Karbanot (2,0,1)</li>
      <li>Still Life with Guelder Roses (2,0,2)</li>
      <li>St. Peter's Bones (2,1,0)</li>
      <li>Saint Rosalia's Bones (2,1,1)</li>
      <li>The Tongue of St. Anthony of Padua (2,1,2)</li>
      <li>Hırka-i Şerif (2,2,0)</li>
      <li>The Ardabil Carpet (2,2,1)</li>
      <li>The Crocodiles of Manghopir (2,2,2)</li>
    </ol>
    <br />
    <h3>Winning (Game 1)</h3>
    <p>
      Our opponent's starting hand is: [Mecca (15), Raphael (0), St. Telesphorus
      (4), Shmuley Boteach (2)]. Our starting hand is: [Jesus Christ (3),
      Passover (18), Sviatoslav Shevchuk (5), Yohan ben Zakkai (1)].
    </p>
    <p>
      With these starting hands, and the natural goal of winning anti-SET, we
      must aim for one of the following 5 winning hands (verified
      computationally with brute force):
    </p>
    <ul>
      <li>[1, 3, 5, 7, 10, 18, 20, 21, 23]</li>
      <li>[1, 3, 5, 7, 13, 18, 20, 24, 26]</li>
      <li>[1, 3, 5, 7, 12, 18, 19, 24, 25]</li>
      <li>[1, 3, 5, 7, 9, 10, 12, 13, 18]</li>
      <li>[1, 3, 5, 7, 9, 18, 19, 21, 22]</li>
    </ul>
    <p>
      Each of these hands has Al-Mansur (7), in addition to the starting hand.
      Therefore, we must immediately take it, or else the opponent will. After
      we do so, our opponent will always take Church of the Nativity (13) (a
      potentially non-optimal move to force the player to a particular winning
      configuration). The fifth candidate hand is impossible to reach.
    </p>
    <p>This reduces the viable winning hands to:</p>
    <ol>
      <li>[1, 3, 5, 7, 12, 18, 19, 24, 25]</li>
      <li>[1, 3, 5, 7, 10, 18, 20, 21, 23]</li>
    </ol>
    <p>
      We must play in a specific order to take contested cards first. A possible
      sequence for the first winning hand is:
    </p>
    <ul>
      <li>Al-Mansur</li>
      <li>Karbanot</li>
      <li>The Ardabil Carpet</li>
      <li>Hırka-i Şerif</li>
      <li>Mount of Temptation</li>
    </ul>
    <p>A possible sequence for the second winning hand is:</p>
    <ul>
      <li>Al-Mansur</li>
      <li>The Tongue of St. Anthony of Padua</li>
      <li>St. Peter's Bones</li>
      <li>Still Life with Guelder Roses</li>
      <li>Worms Synagogue</li>
    </ul>
    <br />
    <h3>Extraction (Game 1)</h3>
    <p>
      Upon winning the game, 5 cards are taken away from our winning hand,
      leaving 4. The 5 cards are discarded in a specific order. We also learn
      that (0,0,0) is on the back of Raphael. and that the backs of some cards
      are "vibrant" red, green, and blue. The three cards are Passover, Uzair,
      and Shmuley Boteach, though the order differs depending on which hand we
      win with. This allows us to create a ternary number from each category
      using RGB order, as red is (2,0,0), green is (0,2,0), and blue is (0,0,2).
    </p>
    <p>
      In the first winning hand (with Karbanot), we are given that Passover
      (2,0,0) maps to red, Uzair (0,2,0) maps to green, and Shmuley Boteach
      (0,0,2) maps to blue, so the triple (A,B,C) corresponds to the ternary
      number (A,B,C). Our remaining cards are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Al-Mansur</td>
          <td>0, 2, 1</td>
          <td>0, 2, 1</td>
          <td>
            021<sub>3</sub> = G
          </td>
        </tr>
        <tr>
          <td>Passover</td>
          <td>2, 0, 0</td>
          <td>2, 0, 0</td>
          <td>
            200<sub>3</sub> = R
          </td>
        </tr>
        <tr>
          <td>Yohanan ben Zakkai</td>
          <td>0, 0, 1</td>
          <td>0, 0, 1</td>
          <td>
            001<sub>3</sub> = A
          </td>
        </tr>
        <tr>
          <td>The Ardabil Carpet</td>
          <td>2, 2, 1</td>
          <td>2, 2, 1</td>
          <td>
            221<sub>3</sub> = Y
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In the second winning hand (with Worms Synagogue), we are given that
      Passover (2,0,0) maps to red, Shmuley Boteach (0,0,2) maps to green, and
      Uzair (0,2,0) maps to blue, so the triple (A,B,C) corresponds to the
      ternary number (A,C,B). Our remaining cards are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (A, C, B)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sviatoslav Shevchuk</td>
          <td>0, 1, 2</td>
          <td>0, 2, 1</td>
          <td>
            021<sub>3</sub> = G
          </td>
        </tr>
        <tr>
          <td>Passover</td>
          <td>2, 0, 0</td>
          <td>2, 0, 0</td>
          <td>
            200<sub>3</sub> = R
          </td>
        </tr>
        <tr>
          <td>Jesus Christ</td>
          <td>0, 1, 0</td>
          <td>0, 0, 1</td>
          <td>
            001<sub>3</sub> = A
          </td>
        </tr>
        <tr>
          <td>The Tongue of St. Anthony of Padua</td>
          <td>2, 1, 2</td>
          <td>2, 2, 1</td>
          <td>
            221<sub>3</sub> = Y
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In either scenario, we extract <Clue>GRAY</Clue>.
    </p>
    <h3>Winning (Game 2)</h3>
    <p>
      The game continues, and depending on the winning hand we chose earlier, we
      (and our opponent) receive one of two possible starting positions.
    </p>
    <p>
      Without loss of generality (see author's notes), assume that we took the
      first winning hand. Our opponent's starting hand is [Cathedral of the
      Assumption (14), Church of the Nativity (13), Congregation Shaare Zion
      (11), Shmuley Boteach (2)]. Our starting hand is [Ibrahimi Mosque (16),
      Mecca (15), Moriah (9), Worms Synagogue (10)].
    </p>
    <p>
      From this starting position, we have the following viable winning hands:
    </p>
    <ul>
      <li>[1, 4, 6, 8, 9, 10, 15, 16, 18]</li>
      <li>[6, 9, 10, 15, 16, 18, 20, 22, 25]</li>
    </ul>
    <p>A possible sequence for the first winning hand is:</p>
    <ul>
      <li>Passover</li>
      <li>St. Telesphorus</li>
      <li>Ahmed el-Tayeb</li>
      <li>Yohanan ben Zakkai</li>
      <li>Uzair</li>
    </ul>
    <p>A possible sequence for the second winning hand is:</p>
    <ul>
      <li>Passover</li>
      <li>Saint Rosalia's Bones</li>
      <li>The Ardabil Carpet</li>
      <li>Uzair</li>
      <li>Still Life with Guelder Roses</li>
    </ul>
    <br />
    <h3>Extraction (Game 2)</h3>
    <p>
      Similar to the end of Round 1, 6 cards are taken away, leaving us with 3
      cards, and we're told a different "origin", as well as a different set of
      cards for vibrant red, green, and blue.
    </p>
    <p>
      In the first winning hand (with St. Telesphorus), we are given that
      Hırka-i Şerif (2,2,0) maps to (0,0,0), and that Passover (2,0,0) maps to
      red, The Crocodiles of Manghopir (2,2,2) maps to green, and Uzair (0,2,0)
      maps to blue. Therefore, the triple (A,B,C) corresponds to the ternary
      number (2-B,C,2-A). Our remaining cards are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (2-B, C, 2-A)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yohanan ben Zakkai</td>
          <td>0, 0, 1</td>
          <td>2, 1, 2</td>
          <td>
            212<sub>3</sub> = W
          </td>
        </tr>
        <tr>
          <td>Mecca</td>
          <td>1, 2, 0</td>
          <td>0, 0, 1</td>
          <td>
            001<sub>3</sub> = A
          </td>
        </tr>
        <tr>
          <td>Moriah</td>
          <td>1, 0, 0</td>
          <td>2, 0, 1</td>
          <td>
            201<sub>3</sub> = S
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In the second winning hand (with Saint Rosalia's Bones), we are given that
      Raphael maps to (0,0,0), and that Uzair (0,2,0) maps to red, Shmuley
      Boteach (0,0,2) maps to green, and Passover (2,0,0) maps to blue, so the
      triple (A,B,C) corresponds to the ternary number (B,C,A). Our remaining
      cards are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (B, C, A)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Ardabil Carpet</td>
          <td>2, 2, 1</td>
          <td>2, 1, 2</td>
          <td>
            212<sub>3</sub> = W
          </td>
        </tr>
        <tr>
          <td>Moriah</td>
          <td>1, 0, 0</td>
          <td>0, 0, 1</td>
          <td>
            001<sub>3</sub> = A
          </td>
        </tr>
        <tr>
          <td>Mecca</td>
          <td>1, 2, 0</td>
          <td>2, 0, 1</td>
          <td>
            201<sub>3</sub> = S
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In either scenario, we extract <Clue>WAS</Clue>.
    </p>
    <h3>Winning (Game 3)</h3>
    <p>
      If we played the first winning hand, the opponent's starting hand is
      [Al-Mansur (7), Cathedral of the Assumption (14), Moriah (9)]. Our
      starting hand is [Saint Rosalia's Bones (22), Still Life with Guelder
      Roses (20), Yohanan ben Zakkai (1)]. The only winning hand is [1, 11, 15,
      17, 20, 22, 25, 26]. We can reach this hand by playing:
    </p>
    <ul>
      <li>The Crocodiles of Manghopir</li>
      <li>Mecca</li>
      <li>The Ardabil Carpet</li>
      <li>Congregation Shaare Zion</li>
      <li>Süleymaniye Mosque</li>
    </ul>
    <p>
      If we played the second winning hand, the opponent's starting hand is
      [Ahmed el-Tayeb (8), St. Peter's Bones (21), Yohanan ben Zakkai (1)]. Our
      starting hand is [Raphael (0), Shmuley Boteach (2), The Crocodiles of
      Manghopir (26)]. The only winning hand is [0, 2, 9, 11, 15, 17, 25, 26],
      which we can reach by choosing:
    </p>
    <ul>
      <li>Moriah</li>
      <li>Mecca</li>
      <li>The Ardabil Carpet</li>
      <li>Congregation Shaare Zion</li>
      <li>Süleymaniye Mosque</li>
    </ul>
    <br />
    <h3>Extraction (Game 3)</h3>
    <p>
      In the first winning hand (with Cathedral of the Assumption), we are given
      that Hırka-i Şerif (2,2,0) maps to (0,0,0), and that Passover (2,0,0) maps
      to red, The Crocodiles of Manghopir (2,2,2) maps to green, and Uzair
      (0,2,0) maps to blue. Therefore, the triple (A,B,C) corresponds to the
      ternary number (2-B,C,2-A). The last cards left on the table are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (2-B, C, 2-A)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raphael</td>
          <td>0, 0, 0</td>
          <td>2, 0, 2</td>
          <td>
            202<sub>3</sub> = T
          </td>
        </tr>
        <tr>
          <td>Al-Mansur</td>
          <td>0, 2, 1</td>
          <td>0, 1, 2</td>
          <td>
            012<sub>3</sub> = E
          </td>
        </tr>
        <tr>
          <td>Moriah</td>
          <td>1, 0, 0</td>
          <td>2, 0, 1</td>
          <td>
            201<sub>3</sub> = S
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In the second winning hand (with Moriah), we are given that Uzair (0,2,0)
      maps to (0,0,0) and that Raphael (0,0,0) maps to red, Hırka-i Şerif
      (2,2,0) maps to green, and Ahmed el-Tayeb (0, 2, 2) maps to blue.
      Therefore, the triple (A,B,C) corresponds to the ternary number (2-B,A,C).
      The last cards left on the table are:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Card</th>
          <th>
            Quality Triple
            <br />
            (A, B, C)
          </th>
          <th>
            Mapped Triple
            <br />
            (2-B, A, C)
          </th>
          <th>
            Ternary
            <br />
            Extract
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shmuley Boteach</td>
          <td>0, 0, 2</td>
          <td>2, 0, 2</td>
          <td>
            202<sub>3</sub> = T
          </td>
        </tr>
        <tr>
          <td>Süleymaniye Mosque</td>
          <td>1, 2, 2</td>
          <td>0, 1, 2</td>
          <td>
            012<sub>3</sub> = E
          </td>
        </tr>
        <tr>
          <td>Yohanan ben Zakkai</td>
          <td>0, 0, 1</td>
          <td>2, 0, 1</td>
          <td>
            201<sub>3</sub> = S
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Putting the extracted letters from each round together yields the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        <b>Why can we pick a hand WLOG for Round 1?</b>
      </p>
      <p>
        Imagine that the card qualities make up a 3x3x3 cube. The two possible
        winning hands in the first round (2 subsets of this cube) can be
        transformed into each other by rotation. Therefore, any continuations
        can be transformed from one solution to the other, and we perform a
        remapping of the corners of the cube depending on which solution solvers
        reach.
      </p>
      <p>If you picked the one not in this solution, skill issue.</p>
      <p>
        <b>Why is the bot so hard to beat?</b>
      </p>
      <p>
        The bot performs a full minimax search in the given starting hand. It
        then plays to try to reach the fastest winning configuration if it
        exists, or the slowest losing one if it does not. Thankfully, the human
        player has a reachable winning line from each starting hand.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .table-1 td:nth-child(4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-1 th:nth-child(n + 2),
      .table-1 td:nth-child(n + 2) {
        text-align: center !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
