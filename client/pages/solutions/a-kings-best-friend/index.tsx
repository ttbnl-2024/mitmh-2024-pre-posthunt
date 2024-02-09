import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'a-kings-best-friend';
const ANSWER = `GRAHAM CRACKER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We have a fairy Cerberus piece in these puzzles, which can move like a
      queen, but only up to 3 squares and in only 3 of 8 directions (clued by
      the repeated title).
    </p>
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className=" !bg-[#ffe599]"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffff00]"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className=" !bg-[#ffe599]"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <b>Free Example (Nuzzling)</b>
    </p>
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>▽</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>▽</td>
          <td></td>
          <td>▽</td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>▲</td>
          <td>▽</td>
          <td>▲</td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>♔</td>
          <td>▲</td>
          <td>♚</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">Mate in 1&nbsp;&nbsp;</span>
      <span className="inline-block">
        <Clue>
          <b>_ → Cc2Cb2</b>
        </Clue>
      </span>
      <br />
      (White to move?{' '}
      <Clue>
        <span className="text-gray-400">1.</span>
        <b>C</b>
        <span className="text-gray-400">x</span>
        <b>c2</b>
        <span className="text-gray-400">#</span>
      </Clue>
      &nbsp;&nbsp;Black to move?{' '}
      <Clue>
        <span className="text-gray-400">1…</span>
        <b>C</b>
        <span className="text-gray-400">x</span>
        <b>b2</b>
        <span className="text-gray-400">#</span>
      </Clue>
      )
      <br />
      This shows that we extract the piece and the destination from the move.
    </p>
    <hr className="my-4" />
    <p>
      <b>Fun Exercises (Nipping)</b>
    </p>
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td>♚</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>♔</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 8: Mate in 2&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>c5k1/</b>
        </Clue>
      </span>
      <br />
      <Clue>1…c5 2.b3 Cd7#</Clue>
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td>♔</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td>♚</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td>♖</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td>♙</td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 7: Mate in 2&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>Rc6/</b>
        </Clue>
      </span>
      <br />
      <Clue>1.Rc6+ Kb5 2.c4#</Clue>
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td>♔</td>
          <td>▲</td>
          <td></td>
          <td>♞</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>♝</td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>♚</td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♖</td>
          <td>♝</td>
        </tr>
        <tr>
          <td>1</td>
          <td>♜</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♖</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 6: Mate in 2&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>c3Kb2/</b>
        </Clue>
      </span>
      <br />
      W: <Clue>1.c3+ Ka3 2.Rxa1#</Clue>&nbsp;&nbsp;&nbsp;&nbsp;B:{' '}
      <Clue>1…Kb2+ </Clue>(with main line <Clue>2.Rxa1 Bxe4#</Clue>)
    </p>
    <hr className="my-4" />

    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>♚</td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>♗</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>♙</td>
          <td>♖</td>
          <td>♙</td>
          <td></td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>♔</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♝</td>
          <td></td>
          <td>♜</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>♗</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 5: Mate in 2&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>Rb3Bc1/</b>
        </Clue>
      </span>
      <br />
      W: <Clue>1.Rb3+ Bd2 2.Bd8#&nbsp;&nbsp;&nbsp;&nbsp;</Clue>B:{' '}
      <Clue>1…Bc1+ 2.Ka2 Ra3#</Clue>
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td>♔</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td>♚</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td>♖</td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td>♙</td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>

    <p>
      <span className="w-[420px] inline-block">
        Rank 4: Mate in 2&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>Cb6/</b>
        </Clue>
      </span>
      <br />
      <Clue>1.Cb6+ Ka5 2.Rc5#</Clue>
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td>♚</td>
          <td>♜</td>
          <td></td>
          <td></td>
          <td>♗</td>
          <td></td>
          <td>♖</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>▲</td>
          <td></td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>♔</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 3: Mate in 3&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>Bc6/</b>
        </Clue>
      </span>
      <br />
      <Clue>1.Bxc6+ Ka7 2.Cd4+ Rb6 3.Ra8#</Clue>
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td>♚</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td>♟</td>
          <td>♝</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>♔</td>
          <td></td>
          <td>♙</td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 2: Mate in 3&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>c7/</b>
        </Clue>
      </span>
      <br />
      <Clue>1.c7 </Clue>(various lines, like{' '}
      <Clue>1…Cc5 2.Cd5+ Cc6 3.c8=Q#</Clue>)
    </p>
    <hr className="my-4" />
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>♟</td>
          <td></td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>♚</td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>♝</td>
          <td></td>
          <td>♟</td>
          <td></td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td>♟</td>
          <td>♙</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td>♙</td>
          <td></td>
          <td>♗</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♘</td>
        </tr>
        <tr>
          <td>2</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>♔</td>
          <td>♙</td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td>▽</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♖</td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <span className="w-[420px] inline-block">
        Rank 1: Black to move and draw&nbsp;&nbsp;
      </span>
      <span className="inline-block">
        <Clue>
          <b>Bb6</b>
        </Clue>
      </span>
      <br />
      <Clue>1…Bb6 </Clue>(white can't stop stalemate after <Clue>2…Ca5</Clue>)
    </p>
    <hr className="my-4" />

    <p>
      <b>Final Exam, Now</b>
    </p>
    <p>
      The above solutions produce the FEN (
      <a href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">
        Forsyth-Edwards Notation - Wikipedia
      </a>
      ; this is also clued by giving the respective ranks with each exercise,
      having FEN as the acronym in each section, and the dog emoji lined up with
      the letters <i>F</i>, <i>e</i>, and <i>n</i> in the title):
    </p>
    <p>
      <b>
        <Clue>c5k1/Rc6/c3Kb2/Rb3Bc1/Cb6/Bc6/c7/Bb6</Clue>
      </b>
    </p>
    <p>This corresponds to the following position:</p>
    <Table className="chessboard">
      <tbody>
        <tr>
          <td>8</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>♚</td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>♖</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♔</td>
          <td>♝</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>♖</td>
          <td>♝</td>
          <td></td>
          <td></td>
          <td></td>
          <td>♗</td>
          <td>▲</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>▽</td>
          <td>♝</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>♗</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>▲</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>♗</td>
          <td>♝</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This is a mate in 7 with a unique line if black plays to delay the mate as
      long as possible:
    </p>
    <p>
      <b>
        <Clue>
          1.Rxa8+ Cxa8 2.Rxa8+ Cb8 3.Rxb8+ Be8 4.Rxe8+ Bf8 5.Rxf8+ Kg7 6.Bxf6+
          Kh6 7.Rh8#
        </Clue>
      </b>
    </p>
    <MathJaxContext>
      <MathJax>
        <p>
          In the table below, we see that locations with a single letter
          correspond to numbers (including all the move numbers from{' '}
          <Clue>2</Clue> to <Clue>7</Clue>) and <Clue>+</Clue>/<Clue>x</Clue>,
          which are given as representing addition (
          <CtCMath math="x + y" />) and subtraction (
          <CtCMath math="|x - y|" />
          ), respectively. Locations with three letters (given in alphabetical
          order) have an extraction letter in them (except that <Clue>
            #
          </Clue>{' '}
          is <Clue>M</Clue> for Mate), and the three letters map to two numbers
          and an operation on them, producing an enumeration (1 to 13) for the
          final answer, <Answerize>{ANSWER}</Answerize>.
        </p>
        <Table className="table-1">
          <tbody>
            <tr>
              <td>4</td>
              <td>x</td>
              <td>
                <CtCMath math="|x - y|" />
              </td>
              <td></td>
              <td>18</td>
              <td>a</td>
              <td>BFL</td>
              <td></td>
              <td>40</td>
              <td>R</td>
              <td>AIJ</td>
              <td></td>
              <td>62</td>
              <td>6</td>
              <td>J</td>
            </tr>
            <tr>
              <td>5</td>
              <td>a</td>
              <td>AKM</td>
              <td></td>
              <td>22</td>
              <td>C</td>
              <td>BEF</td>
              <td></td>
              <td>44</td>
              <td>+</td>
              <td>F</td>
              <td></td>
              <td>65</td>
              <td>x</td>
              <td>K</td>
            </tr>
            <tr>
              <td>7</td>
              <td>+</td>
              <td>
                <CtCMath math="x + y" />
              </td>
              <td></td>
              <td>26</td>
              <td>3</td>
              <td>B</td>
              <td></td>
              <td>48</td>
              <td>8</td>
              <td>G</td>
              <td></td>
              <td>67</td>
              <td>6</td>
              <td>L</td>
            </tr>
            <tr>
              <td>9</td>
              <td>C</td>
              <td>EIL</td>
              <td></td>
              <td>29</td>
              <td>x</td>
              <td>C</td>
              <td></td>
              <td>50</td>
              <td>5</td>
              <td>H</td>
              <td></td>
              <td>70</td>
              <td>K</td>
              <td>BDI</td>
            </tr>
            <tr>
              <td>11</td>
              <td>a</td>
              <td>CDH</td>
              <td></td>
              <td>31</td>
              <td>8</td>
              <td>D</td>
              <td></td>
              <td>52</td>
              <td>R</td>
              <td>CGJ</td>
              <td></td>
              <td>74</td>
              <td>7</td>
              <td>M</td>
            </tr>
            <tr>
              <td>14</td>
              <td>2</td>
              <td>A</td>
              <td></td>
              <td>35</td>
              <td>e</td>
              <td>FHM</td>
              <td></td>
              <td>56</td>
              <td>+</td>
              <td>I</td>
              <td></td>
              <td>77</td>
              <td>h</td>
              <td>EGK</td>
            </tr>
            <tr>
              <td>16</td>
              <td>a</td>
              <td>GHI</td>
              <td></td>
              <td>38</td>
              <td>4</td>
              <td>E</td>
              <td></td>
              <td>59</td>
              <td>g</td>
              <td>CDM</td>
              <td></td>
              <td>79</td>
              <td>#</td>
              <td>ADK</td>
            </tr>
          </tbody>
        </Table>
      </MathJax>
    </MathJaxContext>
    <br />
    <Table className="table-2">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            A2
            <br />
            Kx
            <br />
            M7
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            E4
            <br />
            I+
            <br />
            L6
          </td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            Cx
            <br />
            D8
            <br />
            H5
          </td>
          <td></td>
          <td></td>
          <td className="bg-[#f4cccc]">A</td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            G8
            <br />
            H5
            <br />
            I+
          </td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            B3
            <br />
            F+
            <br />
            L6
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>.</td>
          <td>R</td>
          <td>x</td>
          <td className="bg-[#b6d7a8]">a</td>
          <td>8</td>
          <td>+</td>
          <td></td>
          <td className="bg-[#b6d7a8]">C</td>
          <td>x</td>
          <td className="bg-[#b6d7a8]">a</td>
          <td>8</td>
          <td></td>
          <td className="bg-[#f4cccc]">2</td>
          <td>.</td>
          <td className="bg-[#b6d7a8]">R</td>
          <td>x</td>
          <td className="bg-[#b6d7a8]">a</td>
          <td>8</td>
          <td>+</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="table-2">
      <tbody>
        <tr>
          <td></td>
          <td className="bg-[#b6d7a8]">
            B3
            <br />
            E4
            <br />
            F+
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#f4cccc]">B</td>
          <td></td>
          <td></td>
          <td className="bg-[#ffe599]">C</td>
          <td></td>
          <td className="bg-[#f4cccc]">D</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            F+
            <br />
            H5
            <br />
            M7
          </td>
          <td></td>
          <td></td>
          <td className="bg-[#f4cccc]">E</td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            A2
            <br />
            I+
            <br />
            J6
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="bg-[#b6d7a8]">C</td>
          <td>b</td>
          <td>8</td>
          <td></td>
          <td className="bg-[#f4cccc]">3</td>
          <td>.</td>
          <td>R</td>
          <td className="bg-[#ffe599]">x</td>
          <td>b</td>
          <td className="bg-[#f4cccc]">8</td>
          <td>+</td>
          <td></td>
          <td>B</td>
          <td className="bg-[#b6d7a8]">e</td>
          <td>8</td>
          <td></td>
          <td className="bg-[#f4cccc]">4</td>
          <td>.</td>
          <td className="bg-[#b6d7a8]">R</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="table-2">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffe599]">F</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#f4cccc]">G</td>
          <td></td>
          <td className="bg-[#f4cccc]">H</td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            Cx
            <br />
            G8
            <br />
            J6
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#ffe599]">I</td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            Cx
            <br />
            D8
            <br />
            M7
          </td>
          <td></td>
        </tr>
        <tr>
          <td>x</td>
          <td>e</td>
          <td>8</td>
          <td className="bg-[#ffe599]">+</td>
          <td></td>
          <td>B</td>
          <td>f</td>
          <td className="bg-[#f4cccc]">8</td>
          <td></td>
          <td className="bg-[#f4cccc]">5</td>
          <td>.</td>
          <td className="bg-[#b6d7a8]">R</td>
          <td>x</td>
          <td>f</td>
          <td>8</td>
          <td className="bg-[#ffe599]">+</td>
          <td></td>
          <td>K</td>
          <td className="bg-[#b6d7a8]">g</td>
          <td>7</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="table-2">
      <tbody>
        <tr>
          <td></td>
          <td className="bg-[#f4cccc]">J</td>
          <td></td>
          <td></td>
          <td className="bg-[#ffe599]">K</td>
          <td></td>
          <td className="bg-[#f4cccc]">L</td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            B3
            <br />
            D8
            <br />
            I+
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-[#f4cccc]">M</td>
          <td></td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            E4
            <br />
            G8
            <br />
            Kx
          </td>
          <td></td>
          <td className="bg-[#b6d7a8]">
            A2
            <br />
            D8
            <br />
            Kx
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="bg-[#f4cccc]">6</td>
          <td>.</td>
          <td>B</td>
          <td className="bg-[#ffe599]">x</td>
          <td>f</td>
          <td className="bg-[#f4cccc]">6</td>
          <td>+</td>
          <td></td>
          <td className="bg-[#b6d7a8]">K</td>
          <td>h</td>
          <td>6</td>
          <td></td>
          <td className="bg-[#f4cccc]">7</td>
          <td>.</td>
          <td>R</td>
          <td className="bg-[#b6d7a8]">h</td>
          <td>8</td>
          <td className="bg-[#b6d7a8]">#</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="table-3">
      <tbody>
        <tr>
          <td>g</td>
          <td>(C=x, D=8, M=7)</td>
          <td>8-7</td>
          <td>1</td>
        </tr>
        <tr>
          <td>R</td>
          <td>(C=x, G=8, J=6)</td>
          <td>8-6</td>
          <td>2</td>
        </tr>
        <tr>
          <td>a</td>
          <td>(C=x, D=8, H=5)</td>
          <td>8-5</td>
          <td>3</td>
        </tr>
        <tr>
          <td>h</td>
          <td>(E=4, G=8, K=x)</td>
          <td>8-4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>a</td>
          <td>(A=2, K=x, M=7)</td>
          <td>7-2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>#</td>
          <td>(A=2, D=8, K=x)</td>
          <td>8-2</td>
          <td>6</td>
        </tr>
        <tr>
          <td>C</td>
          <td>(B=3, E=4, F=+)</td>
          <td>3+4</td>
          <td>7</td>
        </tr>
        <tr>
          <td>R</td>
          <td>(A=2, I=+, J=6)</td>
          <td>2+6</td>
          <td>8</td>
        </tr>
        <tr>
          <td>a</td>
          <td>(B=3, F=+, L=6)</td>
          <td>3+6</td>
          <td>9</td>
        </tr>
        <tr>
          <td>C</td>
          <td>(E=4, I=+, L=6)</td>
          <td>4+6</td>
          <td>10</td>
        </tr>
        <tr>
          <td>K</td>
          <td>(B=3, D=8, I=+)</td>
          <td>3+8</td>
          <td>11</td>
        </tr>
        <tr>
          <td>e</td>
          <td>(F=+, H=5, M=7)</td>
          <td>5+7</td>
          <td>12</td>
        </tr>
        <tr>
          <td>R</td>
          <td>(G=8, H=5, I=+)</td>
          <td>8+5</td>
          <td>13</td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .chessboard {
        margin-left: 0;
        margin-right: auto;
      }
      .chessboard td:nth-child(1),
      .chessboard tr:nth-child(9) td {
        border: none;
        padding: 0 0.5em;
        text-align: center !important;
        color: rgb(107 114 128);
      }
      .chessboard tr:nth-child(-n + 8) td:nth-child(8n + 1) {
        border-right: 2px solid black;
      }
      .chessboard tr:nth-child(8n + 1) td:nth-child(n + 2) {
        border-top: 2px solid black;
      }
      .chessboard tr:nth-child(-n + 8) td:nth-child(n + 2) {
        font-size: 200%;
        padding: 0;
        width: 48px;
        height: 48px;
        text-align: center;
      }

      @media (max-width: 550px) {
        .chessboard tr:nth-child(-n + 8) td:nth-child(n + 2) {
          font-size: 150%;
          min-width: 36px;
          width: 36px;
          height: 36px;
        }
      }

      .chessboard tr:nth-child(-2n + 7) td:nth-child(2n + 3),
      .chessboard tr:nth-child(-2n + 8) td:nth-child(2n + 2) {
        background-color: #d9d9d9;
      }
      .table-1 td:nth-child(4n) {
        border: none;
      }
      .table-2 td {
        padding: 2px 5px !important;
        text-align: center;
        width: 38px;
      }
      .table-1 td:nth-child(4n + 2),
      .table-2 td,
      .table-3 td:nth-child(1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
