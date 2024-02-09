import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import Crossword, { Borders, X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import flagDE from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-de.png';
import flagNM from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-nm.png';
import flagTN from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-tn.png';

const SLUG = 'crossed-fingers-memo-puzzle';

const { L, T, TL } = Borders;

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword
          tableClass="border-[3px] border-solid border-black border-collapse"
          data={[
            [X, X, 1, 2, 3, 4, 5, 6],
            [7, 8, _, _, 9, _, 10, _],
            [11, _, X, X, 12, 13, 14, 15],
            [X, X, X, 16, 17, _, 18, _],
            [X, 19, 20, _, 21, 22, _, X],
            [X, 23, _, X, 24, _, 25, 26],
            [X, 27, 28, 29, _, 30, _, _],
            [X, 31, _, _, 32, _, X, X],
          ]}
          borders={[
            [_, _, _, _, _, L, _, _],
            [_, _, _, _, L, _, L, _],
            [_, _, _, _, _, T, TL, T],
            [_, _, _, _, T, _, L, _],
            [_, _, _, _, L, T, _, _],
            [_, _, _, T, T, _, TL, _],
            [_, T, T, L, _, TL, _, _],
            [_, _, _, _, L, _, _, _],
          ]}
        />
        <br />
        <div className="table-container">
          <table className="top-table">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="😀" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏦" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="❤️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="♯" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⚽" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🌞" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🌪️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎶" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏙️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏡" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏹" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐂" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐈" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐓" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐔" />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐜" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐱" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐶" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👜" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💔" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💬" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📖" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📞" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📦" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📺" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔼" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🕐" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🕳️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🗝️" />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚤" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛶" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟥" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟦" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤳" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤼" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🥍" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🥫" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦞" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦮" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦵" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🫛" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🫣" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="table-container">
          <table className="clue-table" id="t1">
            <tbody>
              <tr className={cx(NO_COPY_CLASS)}>
                <td colSpan={13}>
                  <InlineTwemoji copyImage={true} emoji="➡️" />{' '}
                  <InlineTwemoji copyImage={true} emoji="🔎" />
                </td>
              </tr>
              <tr className={cx(HIDDEN_CLASS)}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔎" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">1</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👩🏽‍⚕️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👀" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤒" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛌" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🍩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🖥️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🩻" />
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">4</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎥" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏦" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨🏻" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔫" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🗑️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔥" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚨" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚓" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚧" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⌛" />
                </td>
              </tr>
              <tr>
                <td className="clue-number">7</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎥" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛸" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🌎" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👦" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚲" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👽" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💬" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">9</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👀" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⏩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤏" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⏳" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⏩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💍" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤵" />
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">10</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨‍❤️‍👨" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤦‍♂️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔇" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤦‍♂️" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">11</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎒" />
                </td>
                <td></td>
                <td></td>
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
                <td className="clue-number">12</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💻" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏷️" />
                </td>
                <td></td>
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
                <td className="clue-number">14</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐟" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦀" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔗" />
                </td>
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
                <td className="clue-number">16</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎓" />
                </td>
                <td className="text-center">
                  <span>
                    <img
                      draggable={false}
                      className="emoji inline-block"
                      src={flagDE}
                    />
                  </span>
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏈" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⛹️" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={3} className="clue-number">
                  18
                </td>
                <td rowSpan={3} className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛥️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⛽" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⛵" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🍃" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦶" />
                </td>
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
                <td className="clue-number">19</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🙍" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👀" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="‼️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨🏽‍⚖️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🙍" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💬" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="‼️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">21</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🧑🏿‍🎤" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💬" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤬" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🫵" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">23</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📿" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🧰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📂" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🩰" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💃" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎼" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">24</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨‍👩‍👧‍👧" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👨‍👩‍👧‍👧" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🙏" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎁" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🏅" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🦸" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">25</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛠️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🧍🏼" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📸" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🪞" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">27</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🚽" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛟" />
                </td>
                <td></td>
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
                <td className="clue-number">29</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤏" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="✍️" />
                </td>
                <td className="text-center">
                  <span>
                    <img
                      draggable={false}
                      className="emoji inline-block"
                      src={flagTN}
                    />
                  </span>
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📉" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="📈" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🛂" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">30</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎩" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🧐" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤵🏿" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👸" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="👠" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💄" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🪭" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">31</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🐕" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🤔" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💭" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="⚠️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="😡" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">32</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💂" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🔫" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="💯" />
                </td>
                <td className="text-center">
                  <InlineTwemoji copyImage={true} emoji="🎯" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="table-container">
          <table className="clue-table" id="t2">
            <tbody>
              <tr className={cx(NO_COPY_CLASS)}>
                <td colSpan={13}>
                  <InlineTwemoji copyImage={true} emoji="⬇️" />{' '}
                  <InlineTwemoji copyImage={true} emoji="🔎" />
                </td>
              </tr>
              <tr className={cx(HIDDEN_CLASS)}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔎" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">1</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="😡" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="😆" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="😠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📣" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🗯️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👎" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👎" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💃" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🕺🏾" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🤹" />
                </td>
              </tr>
              <tr>
                <td className="clue-number">2</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🤠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💸" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👯‍♀️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🛏" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📍" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">3</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🚢" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧑‍🦲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⚓" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👅" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🍴" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="➡️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💪" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💪" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">4</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👦" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👧" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❤️‍🔥" />
                </td>
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
                <td className="clue-number">5</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🌄" />
                </td>
                <td></td>
                <td></td>
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
                <td rowSpan={2} className="clue-number">
                  6
                </td>
                <td rowSpan={2} className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎮" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧑‍🔧" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🪠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦘" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🐢" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🐚" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💨" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎮" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧑‍🔧" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🪠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦘" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟩" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🍄" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">7</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧑🏿‍🏫" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔌" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📱" />
                </td>
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
                <td className="clue-number">8</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🚰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="➕" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🍵" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">13</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="♀️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦚" />
                </td>
                <td></td>
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
                <td className="clue-number">14</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <span>
                    <img
                      draggable={false}
                      className="emoji inline-block"
                      src={flagNM}
                    />
                  </span>
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">15</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🚢" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🪤" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🌊" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⌛" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⛓️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="☝️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🍣" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">16</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="😠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🗯️" />
                </td>
                <td></td>
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
                <td className="clue-number">17</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎥" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🌊" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🥼" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧪" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦈" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="😱" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
              </tr>
              <tr>
                <td className="clue-number">19</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💸" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎵" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🍎" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📱" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">20</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏛️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🙋" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🪑" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⏭️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👩‍⚖️" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={3} className="clue-number">
                  22
                </td>
                <td rowSpan={3} className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🚫" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏘️" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td>
                  <InlineTwemoji copyImage={true} emoji="🚫" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏡" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏪" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏫" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td>
                  <InlineTwemoji copyImage={true} emoji="✅" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏢" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏬" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏢" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">24</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎼" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🅱️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="♭" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👂" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={3} className="clue-number">
                  25
                </td>
                <td rowSpan={3} className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👄" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="♫" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👕" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📴" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🫵" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔙" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="merged">
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💲" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="❓" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">26</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🥐" />
                </td>
                <td></td>
                <td></td>
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
                <td className="clue-number">27</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎪" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🧒" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🏊🏾" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟣" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔴" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🔵" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🦠" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🟠" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">28</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🤥" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💬" />
                </td>
                <td></td>
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
                <td className="clue-number">29</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📰" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="📅" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🕔" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="👀" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="🎬" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="clue-number">30</td>
                <td className="clue-direction">
                  <InlineTwemoji copyImage={true} emoji="⬇️" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="💪" />
                </td>
                <td>
                  <InlineTwemoji copyImage={true} emoji="⤵️" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <style jsx>
          {`
            .table-container {
              overflow-x: auto;
              max-width: 100%;
            }
            .top-table {
              margin: 0 auto;
              min-width: 600px;
            }
            .top-table tr:not(:first-child) td {
              border: 1px solid black;
              border-collapse: collapse;
            }
            .top-table td {
              font-size: 1.875rem;
              line-height: 2.25rem;
              padding: 4px 6px 7px 6px;
            }

            .clue-table {
              border-collapse: collapse;
              margin: 0 auto;
              min-width: 485px;
            }
            .clue-table tr:not(.merged) td {
              border-top: 1px solid black;
            }
            .clue-table :is(tr:nth-child(1), tr:nth-child(2)) td:first-child {
              border-left: 1px solid black;
            }
            .clue-table td.clue-number {
              text-align: right;
              padding: 5px 3px 5px 5px;
              border-left: 1px solid black;
            }
            .clue-table td.clue-direction {
              text-align: right;
              padding: 5px 10px 5px 0px;
              border-right: 1px solid black;
            }
            .clue-table td {
              vertical-align: middle;
            }
            .clue-table td:not(.clue-number, .clue-direction) {
              font-size: 1.875rem;
              line-height: 2.25rem;
              padding: 4px 3px 7px 3px;
              text-align: center;
            }
            .clue-table td:last-child {
              border-right: 1px solid black;
            }
            .clue-table tr:last-child td {
              border-bottom: 1px solid black;
            }
          `}
        </style>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
