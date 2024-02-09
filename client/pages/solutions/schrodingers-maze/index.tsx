import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import image0 from 'assets/solutions/schrodingers-maze/72-soln-grid.png';

const SLUG = 'schrodingers-maze';
const ANSWER = `LIFEGUARD`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      In this interactive puzzle, we are given an editable grid and a textbox.
      Also given are 9 mystery words and 9 mystery grids, which we have to
      determine. Each grid is also given the number of waters (
      <InlineTwemoji emoji="🌊" />) and walls (<InlineTwemoji emoji="🟫" />
      ). On filling a valid grid (has exactly one player{' '}
      <InlineTwemoji emoji="🙂" />) and a word (must be an actual word), a list
      of probabilities is obtained for our grid/word, each of the 9 mystery
      words and each of the 9 mystery grids. A word is interpreted as input into
      the grid, and our word and grid is applied to each other, and to the
      mystery grids and words.
    </p>
    <p>The way a word is interpreted as moves on the grid is as follows:</p>
    <ul>
      <li>For each letter of the word (left to right):</li>
      <ul>
        <li>
          Convert the letter via{' '}
          <a href="https://en.wikipedia.org/wiki/Flag_semaphore">semaphore</a>{' '}
          into 2 directions.
        </li>
        <li>
          One of the directions is picked (with ½ probability each) and the
          player is moved in that direction.
        </li>
        <li>If the player moves…</li>
        <ul>
          <li>Into a wall or the edges of the grid, it does not move;</li>
          <li>Into water, it drowns and all later moves are ignored;</li>
          <li>
            Into a goal (<InlineTwemoji emoji="🏁" />
            ), it finishes and all later moves are ignored.
          </li>
        </ul>
      </ul>
    </ul>

    <p>
      The 3 probabilities given to the solver are ALIVE (haven't reached a goal
      or water), FINISHED (reached a goal), or DROWNED (reached a water).
    </p>
    <p>
      By trying various inputs, the solver can determine the secret words and
      grids (see the appendix for details). Furthermore, if the correct
      word/maze is inputted, the corresponding text next to the secret word/maze
      turns green. The words and grids are:
    </p>
    <ol>
      <li>
        <Monospace>BUTTERFLY</Monospace>
      </li>
      <li>
        <Monospace>FLOAT</Monospace>
      </li>
      <li>
        <Monospace>LIGHTHOUSE</Monospace>
      </li>
      <li>
        <Monospace>RESUSCITATION</Monospace>
      </li>
      <li>
        <Monospace>SEAWEED</Monospace>
      </li>
      <li>
        <Monospace>SHARK</Monospace>
      </li>
      <li>
        <Monospace>STARFISH</Monospace>
      </li>
      <li>
        <Monospace>SWIMMING</Monospace>
      </li>
      <li>
        <Monospace>TRUNKS</Monospace>
      </li>
    </ol>
    <ol className="space-y-6 mt-2">
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🟫" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
      <li>
        <Table className="maze-table mx-2">
          <tbody>
            <tr>
              <td>
                <InlineTwemoji emoji="🙂" />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🌊" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <InlineTwemoji emoji="🏁" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </li>
    </ol>
    <p>
      The words are in extraction order.{' '}
    </p>
    <Table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Finish time</th>
          <th>Indexed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>BUTTERFLY</Monospace>
          </td>
          <td className="text-center">8</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RESUSCITATION</Monospace>
          </td>
          <td className="text-center">11</td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>STARFISH</Monospace>
          </td>
          <td className="text-center">5</td>
          <td className="text-center">
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LIGHTHOUSE</Monospace>
          </td>
          <td className="text-center">10</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SWIMMING</Monospace>
          </td>
          <td className="text-center">8</td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TRUNKS</Monospace>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FLOAT</Monospace>
          </td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SHARK</Monospace>
          </td>
          <td className="text-center">4</td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SEAWEED</Monospace>
          </td>
          <td className="text-center">7</td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Index the finish time into the word to get the final answer{' '}
      <b>
        <Monospace>LIFEGUARD</Monospace>
      </b>
      .
    </p>
    <Appendix>
      <p>
        Note that you are allowed to input a maze with multiple goals (although
        the hidden mazes have only one goal). A good way to keep track and
        compute the probabilities is to compute the probabilities of each
        possible position you are at after each letter. Here is an example of
        what we mean.
      </p>
      <p>
        Suppose we input <Monospace>BUTT</Monospace> into the maze:
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🙂" />
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        We count the number of possibilities that result in the player ending in
        each cell. After the first letter B, we moved W and S, thus the number
        of possibilities on each cell is shown below (cells without a number
        have 0 possibilities):
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">1</td>
            <td className="text-center">1</td>
          </tr>
        </tbody>
      </Table>
      <p>
        We can compute the number of possibilities for the first 2 letters BU by
        making use of the previous computation:
      </p>
      <p>
        <Table className="maze-table">
          <tbody>
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <InlineTwemoji emoji="🟫" />
              </td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <InlineTwemoji emoji="🌊" />
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center">
                <InlineTwemoji emoji="🏁" />
              </td>
              <td className="text-center"></td>
              <td className="text-center">
                <InlineTwemoji emoji="🌊" />
              </td>
              <td className="text-center"></td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <InlineTwemoji emoji="🌊" />
              </td>
              <td className="text-center has-arrow">
                <span className="maze-arrow arrow-top-left">⟶</span>
                <span className="maze-arrow arrow-top-right">⟶</span>1
              </td>
              <td className="text-center has-arrow">
                <span className="maze-arrow arrow-top-left">⟶</span>
                <span className="maze-arrow arrow-top-right">⟶</span>1
              </td>
            </tr>
          </tbody>
        </Table>
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">1</td>
            <td className="text-center">1</td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">1</td>
          </tr>
        </tbody>
      </Table>
      <p>
        One of the possibilities ended in drowning, so we have accumulated a ¼
        chance of drowning. The next letter T gives
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">2</td>
            <td className="text-center">1</td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">1</td>
            <td className="text-center">1</td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </Table>
      <p>
        with an additional ⅛ chance of drowning. Finally, the last letter T
        gives
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">2</td>
            <td className="text-center">3</td>
            <td className="text-center">1</td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">2</td>
            <td className="text-center">1</td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </Table>
      <p>
        with an additional 1/16 chance of drowning. Dividing the above numbers
        by 2^4 = 16, we get a total of 7/16 chance of drowning, and the
        probabilities of where we ended up are
      </p>
      <Table className="maze-table">
        <tbody>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🟫" />
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">1/8</td>
            <td className="text-center">3/16</td>
            <td className="text-center">1/16</td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center">1/8</td>
            <td className="text-center">1/16</td>
          </tr>
          <tr>
            <td className="text-center">
              <InlineTwemoji emoji="🏁" />
            </td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center">
              <InlineTwemoji emoji="🌊" />
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </Table>
      <p>
        Knowing how to compute these probabilities manually will be extremely
        useful for making certain deductions.
      </p>
      <p>
        We now describe the steps to derive the first word{' '}
        <Monospace>BUTTERFLY</Monospace>. All other words can be derived in a
        similar way.{' '}
      </p>
      <Table>
        <thead>
          <tr>
            <th>Input maze</th>
            <th>A</th>
            <th>F</th>
            <th>D</th>
            <th>Notes</th>
            <th>Deduced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>
              Try placing the goals in various places surrounding the player.
            </td>
            <td>
              <Monospace>B????????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>½</td>
            <td>½</td>
            <td>
              Only ½ chance of surviving the 1st letter. Overall finishing with
              probability ½ means the 2nd letter can only use the directions NW,
              NE or E. Can only be U/W/Y. Most likely U.
            </td>
            <td>
              <Monospace>B????????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>½</td>
            <td>½</td>
            <td>2nd letter confirmed to be U.</td>
            <td>
              <Monospace>BU???????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>¼</td>
            <td>¾</td>
            <td>3rd letter either T/I/K.</td>
            <td>
              <Monospace>BU???????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>½ </td>
            <td>½</td>
            <td>
              After 2nd letter, already finished with probability ¼, other ¼
              probability in the middle. Overall finish probability is ½, the
              you must not die on the 3rd letter. Can only be T.
            </td>
            <td>
              <Monospace>BUT??????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>⅛</td>
            <td>⅞</td>
            <td>
              Similarly, 4th letter can only use directions NW, N or SE. Can
              only be T/V. However, we can argue that it cannot go SE. Each
              letter must use 2 different directions, and if we were to go SE,
              subsequent letters must have a 100% chance of reaching the goal.
              But that is impossible if each step we must split into 2
              directions. So can only be T.
            </td>
            <td>
              <Monospace>BUTT?????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>1/16</td>
            <td>15/16</td>
            <td>
              Next letter must use directions NE, S, SE. Similarly test with a
              different maze to eliminate SE. Next letter is E.
            </td>
            <td>
              <Monospace>BUTTE????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>3/32</td>
            <td>29/32</td>
            <td>
              After 5 letters, we are at ⅛ probability in the square beside the
              goal (and drowned otherwise). To get 3/32 probability, we cannot
              die in the next step at all (otherwise the probability would be at
              most 1/16). The next letter uses directions W, E, SW.{' '}
            </td>
            <td>
              <Monospace>BUTTE????</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>3/32</td>
            <td>29/32</td>
            <td>This confirms that the next letter is R.</td>
            <td>
              <Monospace>BUTTER???</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>3/256</td>
            <td>253/256</td>
            <td>
              Next letter must use directions E and S (if only one of them, then
              the probability of finishing is at most 1/128), so is F.
            </td>
            <td>
              <Monospace>BUTTERF??</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>1/256</td>
            <td>255/256</td>
            <td>Next letter must use SW.</td>
            <td>
              <Monospace>BUTTERF??</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🏁" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🙂" />
                    </td>
                    <td>
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td>
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td>0</td>
            <td>1/256</td>
            <td>255/256</td>
            <td>It must also use NE. So it is L.</td>
            <td>
              <Monospace>BUTTERFL?</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              The only possible word is BUTTERFLY. There is also confirmation:
              if we input BUTTERFLY, the text next to this secret word turns
              green.
            </td>
            <td>
              <Monospace>BUTTERFLY</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        For the secret mazes, it is helpful to write all the possible letters
        for each of the 8 directions:
      </p>
      <ul>
        <li>W: B, H, O, P, Q, R, S</li>
        <li>NW: C, I, O, T, U, Y</li>
        <li>N: D, J, K, P, T, V</li>
        <li>NE: E, L, Q, U, W, X</li>
        <li>E: F, J, M, R, W, Y, Z</li>
        <li>SE: G, N, S, V, X, Z</li>
        <li>S: A, B, C, D, E, F, G</li>
        <li>SW: A, H, I, K, L, M, N</li>
      </ul>
      <p>
        First, if we have already solved the hidden words, using them as the
        input word, we notice that it reaches the goal for exactly one of the
        hidden mazes. We could use this as our starting point. This puzzle is
        also fairly lenient on what it considers as a "word".
      </p>
      <h3>Maze 1</h3>
      <p>
        We note that BUTTERFLY solves this maze. We write "-" if we are certain
        that a cell is blank. We write "⋅" if it is not{' '}
        <InlineTwemoji emoji="🌊" />. Here is one possible solve path.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Input word</th>
            <th>A</th>
            <th>F</th>
            <th>D</th>
            <th>Notes</th>
            <th>Deduced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td></td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">.</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">.</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>OS</Monospace>
            </td>
            <td>1/2</td>
            <td>0</td>
            <td>1/2</td>
            <td>
              If any of the "⋅" is <InlineTwemoji emoji="🟫" />, the probability
              of drowning will be &lt;½.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>OC</Monospace>
            </td>
            <td>1/2</td>
            <td>0</td>
            <td>1/2</td>
            <td>
              It is given that there are 3 <InlineTwemoji emoji="🌊" />s and 1{' '}
              <InlineTwemoji emoji="🟫" />. So all the{' '}
              <InlineTwemoji emoji="🌊" />s are gotten.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td></td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">.</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>OT</Monospace>
            </td>
            <td>1/2</td>
            <td>0</td>
            <td>1/2</td>
            <td></td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">.</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">.</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>SLOO</Monospace>
            </td>
            <td>1/16</td>
            <td>0</td>
            <td>1/16</td>
            <td>
              Try a word that goes W-NE-W, to test the rightmost "⋅". If it were
              a <InlineTwemoji emoji="🟫" />, we would be 100% dead.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">.</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>CLEP</Monospace>
            </td>
            <td>3/4</td>
            <td>0</td>
            <td>1/4</td>
            <td>Try a word that goes NW-NE-W.</td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">.</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TOTAL</Monospace>
            </td>
            <td>3/32</td>
            <td>1/32</td>
            <td>7/8</td>
            <td>
              A generally good strategy is to pick a short path to the goal, and
              find a word using that path. If it does reach the goal, it means
              that all cells along that path must be empty. The path we picked
              here is N-NW-NW-SW-SW.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>JUDOKA</Monospace>
            </td>
            <td>11/32</td>
            <td>1/32</td>
            <td>5/8</td>
            <td>
              This word reaches the goal in 2 paths: N-NW-N-W-SW-SW and
              E-NW-N-NW-SW-SW.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>VOTED</Monospace>
            </td>
            <td>17/32</td>
            <td>0</td>
            <td>15/32</td>
            <td>
              Try the path N-NW-NW-NE-S, to test the cell on R1C4. Rather than
              manually computing the probabilities, we can use our maze input
              and compare probabilities. Since the maze only has{' '}
              <InlineTwemoji emoji="🌊" />
              x3 and <InlineTwemoji emoji="🟫" />
              x1, this is the actual grid. There is also confirmation: if we
              input this exact maze, the text next to the corresponding secret
              maze turns green.
            </td>
            <td>
              <Table className="maze-table">
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🟫" />
                    </td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InlineTwemoji emoji="🏁" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🌊" />
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">
                      <InlineTwemoji emoji="🙂" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      <br></br>
      <h3>Maze 4</h3>
      <p>
        We note that <Monospace>LIGHTHOUSE</Monospace> solves the maze, with
        1/1024 probability of finishing. Among all 2^10 = 1024 possible paths,
        only one finishes, therefore, we can deduce that it reaches the goal on
        the last (10th) letter, without discovering anything about the maze.
      </p>
      <h3>Maze 5</h3>
      <p>
        We note that <Monospace>SWIMMING</Monospace> solves the maze, with 1/256
        probability of finishing. Similar to Maze 4, we can deduce that it
        reaches the goal on the last (8th) letter.
      </p>
    </Appendix>
    <AuthorsNotes>
      The intended version of this puzzle has the words listed in alphabetical
      order. Unfortunately, the live version has the enumerations listed in the
      already correct order, but the server still responded with statistics
      corresponding to the alphabetical order. This meant that if{' '}
      <Monospace>FLOAT</Monospace> was submitted, the staticstics next to the
      (13) enumeration would turn green. This made the puzzle easier since the
      matching step is bypassed. Several teams had already solved it before the
      error was noticed. To ensure fairness, it was corrected to keep the
      enumerations as-is (in the already-sorted order), and to change ordering
      of the statistics returned by the server to match the client.
    </AuthorsNotes>
    <style global jsx>{`
      .maze-table td {
        padding: 1px !important;
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
        font-family: var(--mono-font);
        text-align: center;
      }
      .has-arrow {
        position: relative;
      }
      .maze-arrow {
        position: absolute;
      }
      .arrow-top-left {
        left: -10px;
        top: -10px;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
      .arrow-top-right {
        right: -10px;
        top: -10px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
