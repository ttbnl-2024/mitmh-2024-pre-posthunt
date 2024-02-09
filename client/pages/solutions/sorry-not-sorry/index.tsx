import { FC } from 'react';

import Attributions from 'components/attributions';
import Crossword, { Colors, X } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/sorry-not-sorry/0.png';

const SLUG = 'sorry-not-sorry';
const ANSWER = `HALIMEDE`;

const _: '' = '';

const boardData = [
  [1, _, 2, _, 3, _, _, _, _, _, _, _, _, _, _, 4],
  [_, X, _, X, _, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, _, X, X, X, X, X, X, 5, _, _, _, _, _, _],
  [_, X, _, X, X, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, _, X, X, X, X, X, X, X, X, X, X, X, 6, _],
  [_, X, _, X, X, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, _, X, X, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, X, X, X, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, X, X, 7, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, X, X, _, X, _],
  [8, _, X, X, X, X, X, X, X, X, X, X, X, _, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, X, X, _, X, _],
  [9, _, _, _, _, _, _, X, X, X, X, X, X, _, X, _],
  [_, X, X, X, X, X, X, X, X, X, X, 10, X, _, X, _],
  [11, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
];

// prettier-ignore
const boardFill = [
  ['F', 'I', 'S', 'H', 'A', 'R', 'E', 'S', 'U', 'F', 'F', 'E', 'R', 'I', 'N', 'G'],
  ['I', _, 'L', _, 'E', _, _, _, _, _, _, _, _, _, _, 'E'],
  ['R', _, 'A', _, _, _, _, _, _, 'H', 'A', 'I', 'R', 'N', 'E', 'T'],
  ['S', _, 'P', _, _, _, _, _, _, _, _, _, _, _, _, 'T'],
  ['T', _, 'P', _, _, _, _, _, _, _, _, _, _, _, 'A', 'H'],
  ['A', _, 'E', _, _, _, _, _, _, _, _, _, _, _, _, 'E'],
  ['N', _, 'D', _, _, _, _, _, _, _, _, _, _, _, _, 'S'],
  ['D', _, _, _, _, _, _, _, _, _, _, _, _, _, _, 'E'],
  ['F', _, _, _, _, _, _, _, _, _, _, _, _, _, _, 'C'],
  ['O', _, _, _, _, _, _, _, _, _, _, _, _, 'L', _, 'O'],
  ['R', _, _, _, _, _, _, _, _, _, _, _, _, 'O', _, 'N'],
  ['E', 'E', _, _, _, _, _, _, _, _, _, _, _, 'R', _, 'D'],
  ['M', _, _, _, _, _, _, _, _, _, _, _, _, 'E', _, 'C'],
  ['O', 'U', 'T', 'F', 'O', 'R', 'M', _, _, _, _, _, _, 'I', _, 'O'],
  ['S', _, _, _, _, _, _, _, _, _, _, 'I', _, 'N', _, 'I'],
  ['T', 'O', 'X', 'I', 'C', 'G', 'O', 'S', 'S', 'I', 'P', 'T', 'R', 'A', 'I', 'N'],
];

const { C3 } = Colors;
const boardShade = [
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, C3, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, C3, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, C3, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, C3, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, C3, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, C3, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, C3, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, C3, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The first section of the video tells us that we are forming a crossword,
      but we don't have the diagram. Each remaining section of the video
      corresponds to a YouTube Apology that specifies a quote or phrase relevant
      to the video, along with a crossword position. The answers to each video
      are in alphabetical order.
    </p>
    <Table className="answer-table">
      <thead>
        <tr>
          <th>
            Video
            <br />
            Number
          </th>
          <th>
            Crossword
            <br />
            Position
          </th>
          <th>Answer</th>
          <th>Apology Video</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>3D</td>
          <td>AE</td>
          <td>
            <a href="https://youtu.be/rSk87Rj1Q34?t=84">TmarTn</a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>6A</td>
          <td>AH</td>
          <td>
            <a href="https://www.youtube.com/watch?v=C45-1rf65PU&amp;list=PLqkz-pvmNGHOl3Kw_quVf3v9PyNH4cTJL&amp;index=32">
              Jake Paul
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>8A</td>
          <td>EE</td>
          <td>
            <a href="https://youtu.be/4E8qmF10Mts?list=PLsuhXm2zs07IwijVL8Mkm4EnPab78F7TC&amp;t=262">
              Rice Gum
            </a>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>1D</td>
          <td>FIRST AND FOREMOST</td>
          <td>
            <a href="https://youtu.be/HoLSOba3_UE?t=15">Fine Bros</a>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>1A</td>
          <td>FISH ARE SUFFERING</td>
          <td>
            <a href="https://www.youtube.com/watch?v=nFwMTG6T_PI">
              Jenna Marbles
            </a>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>4D</td>
          <td>GET THE SECOND COIN</td>
          <td>
            <a href="https://youtu.be/VIY_yqdOmtY?t=33">PBG Gameplay</a>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>5A</td>
          <td>HAIRNET</td>
          <td>
            <a href="https://www.youtube.com/watch?v=x8QeSZpr0bs&amp;t=435">
              Jaclyn Hill
            </a>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>10D</td>
          <td>IT</td>
          <td>
            <a href="https://www.youtube.com/watch?v=1eU2Da3wlXQ">Sienna Mae</a>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>7D</td>
          <td>LORE IN A</td>
          <td>
            <a href="https://www.youtube.com/watch?v=CtmtEgSADgs&amp;t=194s">
              MatPat
            </a>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>9A</td>
          <td>OUTFORM</td>
          <td>
            <a href="https://www.youtube.com/watch?v=vSwaY0EmZqs">
              Simply Kenna
            </a>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>2D</td>
          <td>SLAPPED</td>
          <td>
            <a href="https://www.youtube.com/watch?v=7XyNqHalkMw&amp;t=1s">
              Will Smith
            </a>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>11A</td>
          <td>TOXIC GOSSIP TRAIN</td>
          <td>
            <a href="https://www.youtube.com/watch?v=ceKMnyMYIMo">
              Colleen Ballinger
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Looking at the enumerations of the given words, we realize that the
      crosswords, appropriately, form a grid from the Sorry! Board game.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <Crossword data={boardData} fill={boardFill} shading={boardShade} />
    <p>
      Reading the start and home squares (highlighted) clockwise yields the
      answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Attributions>
      <p>The Sorry! board game image is used under fair use.</p>
    </Attributions>
    <style jsx global>{`
      .answer-table td:nth-child(1),
      .answer-table td:nth-child(2) {
        text-align: center;
      }
      .answer-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
