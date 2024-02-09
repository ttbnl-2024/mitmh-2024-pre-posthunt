import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'reverse';

const fill = [
  ['P', 'U', 'T', 'T', 'L', 'A', 'H', 'P', 'S', 'A', 'Y'],
  ['O', 'U', 'R', 'W', 'E', 'D', 'Y', 'E', 'N', 'O', 'H'],
  ['P', 'I', 'E', 'C', 'E', 'S', 'C', 'I', 'O', 'N', 'T'],
  ['O', 'P', 'I', 'L', 'A', 'I', 'C', 'L', 'W', 'E', 'G'],
  ['S', 'A', 'R', 'V', 'R', 'O', 'D', 'U', 'N', 'D', 'R'],
  ['A', 'P', 'O', 'O', 'O', 'L', 'R', 'A', 'E', 'P', 'A'],
  ['S', 'I', 'C', 'H', 'A', 'R', 'C', 'O', 'A', 'L', 'P'],
  ['T', 'I', 'I', 'C', 'O', 'N', 'Y', 'O', 'F', 'S', 'H'],
  ['L', 'L', 'E', 'H', 'S', 'G', 'G', 'E', 'I', 'G', 'I'],
  ['N', 'I', 'F', 'M', 'I', 'D', 'N', 'I', 'G', 'H', 'T'],
  ['I', 'C', 'A', 'N', 'C', 'E', 'Y', 'N', 'O', 'B', 'E'],
];

// background color, text color
const k = ['#000000', '#ffffff'];
const w = ['#ffffff', '#000000'];
const g = ['#008f63', '#000000'];
const shade = [
  [k, g, w, k, g, w, w, w, w, k, g],
  [g, g, g, k, k, k, k, k, k, k, w],
  [w, g, g, w, g, k, k, w, w, g, g],
  [g, w, w, g, w, k, k, k, w, w, w],
  [g, w, w, w, k, k, k, g, g, g, w],
  [w, k, k, k, k, w, w, k, k, w, w],
  [g, g, k, k, k, k, w, g, w, k, w],
  [w, k, k, w, g, w, w, g, w, w, k],
  [w, w, w, w, w, w, w, w, k, g, k],
  [k, g, k, k, k, k, k, k, w, w, k],
  [g, k, g, w, w, w, w, k, k, k, k],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => {
              return (
                <tr key={`row-${row}`}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((col) => {
                    return (
                      <td
                        style={{ backgroundColor: shade[row][col][0] }}
                        key={`cell-${row}-${col}`}
                      >
                        <span
                          style={{ color: shade[row][col][1] }}
                          key={`cell-${row}-${col}-span`}
                        >
                          {fill[row][col]}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="sm:flex">
          <svg
            className="w-full sm:w-[70%] mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-.1 -.1 11.2 11.2"
            fontSize=".7"
            textAnchor="middle"
            stroke="black"
            strokeWidth=".05"
          >
            <path d="M0 0H11V11H0z" fill="#008F63" stroke="none" />
            <path fill="#00F4AA" stroke="none" d="" />
            <path d="M0 0H11V11H0z" fill="none" />
            <path
              d="M1 0V11M2 0V11M3 0V11M4 0V11M5 0V11M6 0V11M7 0V11M8 0V11M9 0V11M10 0V11M0 1H11M0 2H11M0 3H11M0 4H11M0 5H11M0 6H11M0 7H11M0 8H11M0 9H11M0 10H11"
              fill="none"
              strokeWidth=".02"
            />
            <g fill="#FAE83C"></g>
            <g fill="#ddd" stroke="white">
              <circle cx="2.5" cy="0.5" r=".4" />
              <circle cx="5.5" cy="0.5" r=".4" />
              <circle cx="6.5" cy="0.5" r=".4" />
              <circle cx="7.5" cy="0.5" r=".4" />
              <circle cx="8.5" cy="0.5" r=".4" />
              <circle cx="10.5" cy="1.5" r=".4" />
              <circle cx="0.5" cy="2.5" r=".4" />
              <circle cx="3.5" cy="2.5" r=".4" />
              <circle cx="7.5" cy="2.5" r=".4" />
              <circle cx="8.5" cy="2.5" r=".4" />
              <circle cx="1.5" cy="3.5" r=".4" />
              <circle cx="2.5" cy="3.5" r=".4" />
              <circle cx="4.5" cy="3.5" r=".4" />
              <circle cx="8.5" cy="3.5" r=".4" />
              <circle cx="9.5" cy="3.5" r=".4" />
              <circle cx="10.5" cy="3.5" r=".4" />
              <circle cx="1.5" cy="4.5" r=".4" />
              <circle cx="2.5" cy="4.5" r=".4" />
              <circle cx="3.5" cy="4.5" r=".4" />
              <circle cx="10.5" cy="4.5" r=".4" />
              <circle cx="0.5" cy="5.5" r=".4" />
              <circle cx="5.5" cy="5.5" r=".4" />
              <circle cx="6.5" cy="5.5" r=".4" />
              <circle cx="9.5" cy="5.5" r=".4" />
              <circle cx="10.5" cy="5.5" r=".4" />
              <circle cx="6.5" cy="6.5" r=".4" />
              <circle cx="8.5" cy="6.5" r=".4" />
              <circle cx="10.5" cy="6.5" r=".4" />
              <circle cx="0.5" cy="7.5" r=".4" />
              <circle cx="3.5" cy="7.5" r=".4" />
              <circle cx="5.5" cy="7.5" r=".4" />
              <circle cx="6.5" cy="7.5" r=".4" />
              <circle cx="8.5" cy="7.5" r=".4" />
              <circle cx="9.5" cy="7.5" r=".4" />
              <circle cx="0.5" cy="8.5" r=".4" />
              <circle cx="1.5" cy="8.5" r=".4" />
              <circle cx="2.5" cy="8.5" r=".4" />
              <circle cx="3.5" cy="8.5" r=".4" />
              <circle cx="4.5" cy="8.5" r=".4" />
              <circle cx="5.5" cy="8.5" r=".4" />
              <circle cx="6.5" cy="8.5" r=".4" />
              <circle cx="7.5" cy="8.5" r=".4" />
              <circle cx="8.5" cy="9.5" r=".4" />
              <circle cx="9.5" cy="9.5" r=".4" />
              <circle cx="3.5" cy="10.5" r=".4" />
              <circle cx="4.5" cy="10.5" r=".4" />
              <circle cx="5.5" cy="10.5" r=".4" />
              <circle cx="6.5" cy="10.5" r=".4" />
            </g>
            <g fill="#444">
              <circle cx="0.5" cy="0.5" r=".4" />
              <circle cx="3.5" cy="0.5" r=".4" />
              <circle cx="9.5" cy="0.5" r=".4" />
              <circle cx="3.5" cy="1.5" r=".4" />
              <circle cx="4.5" cy="1.5" r=".4" />
              <circle cx="5.5" cy="1.5" r=".4" />
              <circle cx="6.5" cy="1.5" r=".4" />
              <circle cx="7.5" cy="1.5" r=".4" />
              <circle cx="8.5" cy="1.5" r=".4" />
              <circle cx="9.5" cy="1.5" r=".4" />
              <circle cx="5.5" cy="2.5" r=".4" />
              <circle cx="6.5" cy="2.5" r=".4" />
              <circle cx="5.5" cy="3.5" r=".4" />
              <circle cx="6.5" cy="3.5" r=".4" />
              <circle cx="7.5" cy="3.5" r=".4" />
              <circle cx="4.5" cy="4.5" r=".4" />
              <circle cx="5.5" cy="4.5" r=".4" />
              <circle cx="6.5" cy="4.5" r=".4" />
              <circle cx="1.5" cy="5.5" r=".4" />
              <circle cx="2.5" cy="5.5" r=".4" />
              <circle cx="3.5" cy="5.5" r=".4" />
              <circle cx="4.5" cy="5.5" r=".4" />
              <circle cx="7.5" cy="5.5" r=".4" />
              <circle cx="8.5" cy="5.5" r=".4" />
              <circle cx="2.5" cy="6.5" r=".4" />
              <circle cx="3.5" cy="6.5" r=".4" />
              <circle cx="4.5" cy="6.5" r=".4" />
              <circle cx="5.5" cy="6.5" r=".4" />
              <circle cx="9.5" cy="6.5" r=".4" />
              <circle cx="1.5" cy="7.5" r=".4" />
              <circle cx="2.5" cy="7.5" r=".4" />
              <circle cx="10.5" cy="7.5" r=".4" />
              <circle cx="8.5" cy="8.5" r=".4" />
              <circle cx="10.5" cy="8.5" r=".4" />
              <circle cx="0.5" cy="9.5" r=".4" />
              <circle cx="2.5" cy="9.5" r=".4" />
              <circle cx="3.5" cy="9.5" r=".4" />
              <circle cx="4.5" cy="9.5" r=".4" />
              <circle cx="5.5" cy="9.5" r=".4" />
              <circle cx="6.5" cy="9.5" r=".4" />
              <circle cx="7.5" cy="9.5" r=".4" />
              <circle cx="10.5" cy="9.5" r=".4" />
              <circle cx="1.5" cy="10.5" r=".4" />
              <circle cx="7.5" cy="10.5" r=".4" />
              <circle cx="8.5" cy="10.5" r=".4" />
              <circle cx="9.5" cy="10.5" r=".4" />
              <circle cx="10.5" cy="10.5" r=".4" />
            </g>
            <g stroke="none">
              <text x="0.5" y="0.75" fill="white">
                P
              </text>
              <text x="1.5" y="0.75" fill="black">
                U
              </text>
              <text x="2.5" y="0.75" fill="black">
                T
              </text>
              <text x="3.5" y="0.75" fill="white">
                T
              </text>
              <text x="4.5" y="0.75" fill="black">
                L
              </text>
              <text x="5.5" y="0.75" fill="black">
                A
              </text>
              <text x="6.5" y="0.75" fill="black">
                H
              </text>
              <text x="7.5" y="0.75" fill="black">
                P
              </text>
              <text x="8.5" y="0.75" fill="black">
                S
              </text>
              <text x="9.5" y="0.75" fill="white">
                A
              </text>
              <text x="10.5" y="0.75" fill="black">
                Y
              </text>
              <text x="0.5" y="1.75" fill="black">
                O
              </text>
              <text x="1.5" y="1.75" fill="black">
                U
              </text>
              <text x="2.5" y="1.75" fill="black">
                R
              </text>
              <text x="3.5" y="1.75" fill="white">
                W
              </text>
              <text x="4.5" y="1.75" fill="white">
                E
              </text>
              <text x="5.5" y="1.75" fill="white">
                D
              </text>
              <text x="6.5" y="1.75" fill="white">
                Y
              </text>
              <text x="7.5" y="1.75" fill="white">
                E
              </text>
              <text x="8.5" y="1.75" fill="white">
                N
              </text>
              <text x="9.5" y="1.75" fill="white">
                O
              </text>
              <text x="10.5" y="1.75" fill="black">
                H
              </text>
              <text x="0.5" y="2.75" fill="black">
                P
              </text>
              <text x="1.5" y="2.75" fill="black">
                I
              </text>
              <text x="2.5" y="2.75" fill="black">
                E
              </text>
              <text x="3.5" y="2.75" fill="black">
                C
              </text>
              <text x="4.5" y="2.75" fill="black">
                E
              </text>
              <text x="5.5" y="2.75" fill="white">
                S
              </text>
              <text x="6.5" y="2.75" fill="white">
                C
              </text>
              <text x="7.5" y="2.75" fill="black">
                I
              </text>
              <text x="8.5" y="2.75" fill="black">
                O
              </text>
              <text x="9.5" y="2.75" fill="black">
                N
              </text>
              <text x="10.5" y="2.75" fill="black">
                T
              </text>
              <text x="0.5" y="3.75" fill="black">
                O
              </text>
              <text x="1.5" y="3.75" fill="black">
                P
              </text>
              <text x="2.5" y="3.75" fill="black">
                I
              </text>
              <text x="3.5" y="3.75" fill="black">
                L
              </text>
              <text x="4.5" y="3.75" fill="black">
                A
              </text>
              <text x="5.5" y="3.75" fill="white">
                I
              </text>
              <text x="6.5" y="3.75" fill="white">
                C
              </text>
              <text x="7.5" y="3.75" fill="white">
                L
              </text>
              <text x="8.5" y="3.75" fill="black">
                W
              </text>
              <text x="9.5" y="3.75" fill="black">
                E
              </text>
              <text x="10.5" y="3.75" fill="black">
                G
              </text>
              <text x="0.5" y="4.75" fill="black">
                S
              </text>
              <text x="1.5" y="4.75" fill="black">
                A
              </text>
              <text x="2.5" y="4.75" fill="black">
                R
              </text>
              <text x="3.5" y="4.75" fill="black">
                V
              </text>
              <text x="4.5" y="4.75" fill="white">
                R
              </text>
              <text x="5.5" y="4.75" fill="white">
                O
              </text>
              <text x="6.5" y="4.75" fill="white">
                D
              </text>
              <text x="7.5" y="4.75" fill="black">
                U
              </text>
              <text x="8.5" y="4.75" fill="black">
                N
              </text>
              <text x="9.5" y="4.75" fill="black">
                D
              </text>
              <text x="10.5" y="4.75" fill="black">
                R
              </text>
              <text x="0.5" y="5.75" fill="black">
                A
              </text>
              <text x="1.5" y="5.75" fill="white">
                P
              </text>
              <text x="2.5" y="5.75" fill="white">
                O
              </text>
              <text x="3.5" y="5.75" fill="white">
                O
              </text>
              <text x="4.5" y="5.75" fill="white">
                O
              </text>
              <text x="5.5" y="5.75" fill="black">
                L
              </text>
              <text x="6.5" y="5.75" fill="black">
                R
              </text>
              <text x="7.5" y="5.75" fill="white">
                A
              </text>
              <text x="8.5" y="5.75" fill="white">
                E
              </text>
              <text x="9.5" y="5.75" fill="black">
                P
              </text>
              <text x="10.5" y="5.75" fill="black">
                A
              </text>
              <text x="0.5" y="6.75" fill="black">
                S
              </text>
              <text x="1.5" y="6.75" fill="black">
                I
              </text>
              <text x="2.5" y="6.75" fill="white">
                C
              </text>
              <text x="3.5" y="6.75" fill="white">
                H
              </text>
              <text x="4.5" y="6.75" fill="white">
                A
              </text>
              <text x="5.5" y="6.75" fill="white">
                R
              </text>
              <text x="6.5" y="6.75" fill="black">
                C
              </text>
              <text x="7.5" y="6.75" fill="black">
                O
              </text>
              <text x="8.5" y="6.75" fill="black">
                A
              </text>
              <text x="9.5" y="6.75" fill="white">
                L
              </text>
              <text x="10.5" y="6.75" fill="black">
                P
              </text>
              <text x="0.5" y="7.75" fill="black">
                T
              </text>
              <text x="1.5" y="7.75" fill="white">
                I
              </text>
              <text x="2.5" y="7.75" fill="white">
                I
              </text>
              <text x="3.5" y="7.75" fill="black">
                C
              </text>
              <text x="4.5" y="7.75" fill="black">
                O
              </text>
              <text x="5.5" y="7.75" fill="black">
                N
              </text>
              <text x="6.5" y="7.75" fill="black">
                Y
              </text>
              <text x="7.5" y="7.75" fill="black">
                O
              </text>
              <text x="8.5" y="7.75" fill="black">
                F
              </text>
              <text x="9.5" y="7.75" fill="black">
                S
              </text>
              <text x="10.5" y="7.75" fill="white">
                H
              </text>
              <text x="0.5" y="8.75" fill="black">
                L
              </text>
              <text x="1.5" y="8.75" fill="black">
                L
              </text>
              <text x="2.5" y="8.75" fill="black">
                E
              </text>
              <text x="3.5" y="8.75" fill="black">
                H
              </text>
              <text x="4.5" y="8.75" fill="black">
                S
              </text>
              <text x="5.5" y="8.75" fill="black">
                G
              </text>
              <text x="6.5" y="8.75" fill="black">
                G
              </text>
              <text x="7.5" y="8.75" fill="black">
                E
              </text>
              <text x="8.5" y="8.75" fill="white">
                I
              </text>
              <text x="9.5" y="8.75" fill="black">
                G
              </text>
              <text x="10.5" y="8.75" fill="white">
                I
              </text>
              <text x="0.5" y="9.75" fill="white">
                N
              </text>
              <text x="1.5" y="9.75" fill="black">
                I
              </text>
              <text x="2.5" y="9.75" fill="white">
                F
              </text>
              <text x="3.5" y="9.75" fill="white">
                M
              </text>
              <text x="4.5" y="9.75" fill="white">
                I
              </text>
              <text x="5.5" y="9.75" fill="white">
                D
              </text>
              <text x="6.5" y="9.75" fill="white">
                N
              </text>
              <text x="7.5" y="9.75" fill="white">
                I
              </text>
              <text x="8.5" y="9.75" fill="black">
                G
              </text>
              <text x="9.5" y="9.75" fill="black">
                H
              </text>
              <text x="10.5" y="9.75" fill="white">
                T
              </text>
              <text x="0.5" y="10.75" fill="black">
                I
              </text>
              <text x="1.5" y="10.75" fill="white">
                C
              </text>
              <text x="2.5" y="10.75" fill="black">
                A
              </text>
              <text x="3.5" y="10.75" fill="black">
                N
              </text>
              <text x="4.5" y="10.75" fill="black">
                C
              </text>
              <text x="5.5" y="10.75" fill="black">
                E
              </text>
              <text x="6.5" y="10.75" fill="black">
                Y
              </text>
              <text x="7.5" y="10.75" fill="white">
                N
              </text>
              <text x="8.5" y="10.75" fill="white">
                O
              </text>
              <text x="9.5" y="10.75" fill="white">
                B
              </text>
              <text x="10.5" y="10.75" fill="white">
                E
              </text>
            </g>
          </svg>
          <ul className="w-full sm:w-[30%]">
            <li>Root confection</li>
            <li>Elite tower stuff?</li>
            <li>Street goo</li>
            <li>Runaways dinosaur</li>
            <li>Pencil "lead"</li>
            <li>Chick's housing</li>
            <li>Barbecue lumps</li>
            <li>Necklace bead</li>
            <li>Coldplay song</li>
            <li>Aphid product</li>
            <li>Marblewood</li>
            <li>TV static</li>
          </ul>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
