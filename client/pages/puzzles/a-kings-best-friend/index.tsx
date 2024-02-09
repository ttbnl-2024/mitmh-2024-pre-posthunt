import { MathJax, MathJaxContext } from 'better-react-mathjax';
import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import CtCMath from 'components/copy_math';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import image0 from 'assets/puzzles/a-kings-best-friend/0.png';

const SLUG = 'a-kings-best-friend';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <SheetableImage
          alt="title"
          src={image0}
          title=""
          className="w-full md:w-[500px] mx-auto my-8"
        />
        <FlavorText>
          For what is a queen, but a free-range Cerberus with 8 heads?
        </FlavorText>
        <InfoIcon>
          Chessboards are available in copy-to-clipboard. Some text formatting
          may not be preserved due to technical limitations; any differences are
          not part of the puzzle.
        </InfoIcon>
        <h3>Free Example (Nuzzling)</h3>
        <br />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Mate in 1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_ → Cc2Cb2</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          <span className={cx(NO_COPY_CLASS, 'w-[420px] inline-block')}>
            Mate in 1
          </span>
          <span className={cx(NO_COPY_CLASS, 'inline-block')}>
            <Monospace>_ → Cc2Cb2</Monospace>
          </span>
          <br />
          (White to move?{' '}
          <Monospace>
            <span className="text-gray-400">1.</span>C
            <span className="text-gray-400">x</span>
            c2
            <span className="text-gray-400">#</span>
          </Monospace>
          &nbsp;&nbsp;Black to move?{' '}
          <Monospace>
            <span className="text-gray-400">1…</span>C
            <span className="text-gray-400">x</span>
            b2
            <span className="text-gray-400">#</span>
          </Monospace>
          )
        </p>
        <hr className="my-4" />
        <h3>Fun Exercises (Nipping)</h3>
        <br />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 8: Mate in 2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_k1/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          <span className={cx(NO_COPY_CLASS, 'w-[420px] inline-block')}>
            Rank 8: Mate in 2
          </span>
          <span className={cx(NO_COPY_CLASS, 'inline-block')}>
            <Monospace>_k1/</Monospace>
          </span>
          <br />
          <span className="w-[420px] inline-block">&nbsp;</span>
          <span className="inline-block italic">
            The black king near the corner says:
            <br />
            "Don't mind me! I'm not part of the exercise,
            <br />
            but here for the Final Exam, Now!"
            <br />
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 7: Mate in 2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 7: Mate in 2</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 6: Mate in 2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 6: Mate in 2</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 5: Mate in 2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 5: Mate in 2</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 4: Mate in 2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 4: Mate in 2</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 3: Mate in 3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 3: Mate in 3</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 2: Mate in 3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_/</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">Rank 2: Mate in 3</span>
          <span className="inline-block">
            <Monospace>_/</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <Table className="chessboard" isFull={false}>
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
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Rank 1: Black to move and draw</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Monospace>_</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className={cx(NO_COPY_CLASS)}>
          <span className="w-[420px] inline-block">
            Rank 1: Black to move and draw
          </span>
          <span className="inline-block">
            <Monospace>_</Monospace>
          </span>
        </p>
        <hr className="my-4" />
        <h3>Final Exam, Now</h3>
        <p>White to move and mate in 7</p>
        <p>
          <Monospace>
            1._x__+ …<br />
            12345678…
          </Monospace>
        </p>
        <MathJaxContext>
          <MathJax>
            <Table className="table-1">
              <tbody>
                <tr>
                  <td>4</td>
                  <td>
                    <CtCMath math="|x - y|" />
                  </td>
                  <td></td>
                  <td>18</td>
                  <td>BFL</td>
                  <td></td>
                  <td>40</td>
                  <td>AIJ</td>
                  <td></td>
                  <td>62</td>
                  <td>J</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>AKM</td>
                  <td></td>
                  <td>22</td>
                  <td>BEF</td>
                  <td></td>
                  <td>44</td>
                  <td>F</td>
                  <td></td>
                  <td>65</td>
                  <td>K</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <CtCMath math="x + y" />
                  </td>
                  <td></td>
                  <td>26</td>
                  <td>B</td>
                  <td></td>
                  <td>48</td>
                  <td>G</td>
                  <td></td>
                  <td>67</td>
                  <td>L</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>EIL</td>
                  <td></td>
                  <td>29</td>
                  <td>C</td>
                  <td></td>
                  <td>50</td>
                  <td>H</td>
                  <td></td>
                  <td>70</td>
                  <td>BDI</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>CDH</td>
                  <td></td>
                  <td>31</td>
                  <td>D</td>
                  <td></td>
                  <td>52</td>
                  <td>CGJ</td>
                  <td></td>
                  <td>74</td>
                  <td>M</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>A</td>
                  <td></td>
                  <td>35</td>
                  <td>FHM</td>
                  <td></td>
                  <td>56</td>
                  <td>I</td>
                  <td></td>
                  <td>77</td>
                  <td>EGK</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>GHI</td>
                  <td></td>
                  <td>38</td>
                  <td>E</td>
                  <td></td>
                  <td>59</td>
                  <td>CDM</td>
                  <td></td>
                  <td>79</td>
                  <td>ADK</td>
                </tr>
              </tbody>
            </Table>
          </MathJax>
        </MathJaxContext>
      </div>

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
          text-align: center;
        }
        .chessboard tr:nth-child(-2n + 7) td:nth-child(2n + 3),
        .chessboard tr:nth-child(-2n + 8) td:nth-child(2n + 2) {
          min-width: 48px;
          min-height: 48px;
          width: 48px;
          height: 48px;
          background-color: #d9d9d9;
        }

        @media (max-width: 550px) {
          .chessboard tr:nth-child(-n + 8) td:nth-child(n + 2) {
            font-size: 150%;
            min-width: 36px;
            min-height: 36px;
            width: 36px;
            height: 36px;
          }
        }

        .table-1 td:nth-child(3n) {
          border: none;
        }

        .table-1 td:nth-child(3n + 2) {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
