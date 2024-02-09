import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import pdf from 'assets/puzzles/retro-chess-puzzle/puzzle15.pdf';
import png from 'assets/puzzles/retro-chess-puzzle/puzzle15_instructions.png';

const SLUG = 'retro-chess-puzzle';

interface ChessboardProps {
  title: string;
  data: string[][];
}

const _ = '';

const Chessboard: FC<ChessboardProps> = ({ title, data }) => {
  let rows: React.JSX.Element[] = [];
  for (let i = 0; i < data.length; i++) {
    let tds: React.JSX.Element[] = [<td className="border-none">{8 - i}</td>];
    for (let j = 0; j < data[i].length; j++) {
      let cell = data[i][j];
      tds.push(
        <td
          className={cx({
            'text-[#f00]': cell && cell.toUpperCase() == cell,
            'text-[#00f]': cell && cell.toLowerCase() == cell,
            'bg-gray-300': (i + j) % 2 == 1,
          })}
        >
          {data[i][j]}
        </td>
      );
    }
    rows.push(<tr>{tds}</tr>);
  }
  rows.push(
    <tr>
      {[
        <td />,
        ...Array.from({ length: data[0].length }, (_, c: number) => (
          <td>{String.fromCharCode(c + 97)}</td>
        )),
      ]}
    </tr>
  );
  return (
    <>
      <p>{title}</p>
      <table>
        <tbody>{rows}</tbody>
        <style>{`
        td {
          /* firefox is dumb af */
          background-clip: padding-box;
          height: min(30px, ${80 / data[0].length}vw);
          width: min(30px, ${80 / data[0].length}vw);
          position: relative;
          text-align: center;
        }
      `}</style>
      </table>
    </>
  );
};

let boards = [
  {
    title: 'Rm. 435: "Masters"',
    // prettier-ignore
    data: [
      ['T','e','R',  _,  _,  _,  _,'T'],
      ['S','S','S','S',  _,  _,'S',  _],
      [  _,  _,  _,  _,  _,  _,  _,  _],
      [  _,  _,  _,  _,'S',  _,'S',  _],
      [  _,'A',  _,'R',  _,  _,  _,'S'],
      ['s',  _,'s',  _,  _,'E',  _,'s'],
      [  _,'s',  _,'s','s','s','s','a'],
      [  _,  _,  _,'M',  _,'r','m','t'],
    ],
  },
  {
    title: 'Rm. 444: “Thieves”',
    // prettier-ignore
    data: [
      [  _,  _,'e',  _,'i',  _,'v',  _],
      ['h',  _,  _,  _,  _,'h','h',  _],
      ['V',  _,  _,'T',  _,  _,'h',  _],
      [  _,'s','h','t','h',  _,  _,  _],
      [  _,'h',  _,  _,  _,'s','H',  _],
      [  _,  _,'h','I',  _,  _,'H',  _],
      ['H','H',  _,'H','H','H',  _,'V'],
      ['T',  _,'S',  _,'t',  _,'E',  _],
    ],
  },
  {
    title: 'Rm. 436: “Chairs”',
    // prettier-ignore
    data: [
      ['S',  _,  _,  _,  _,  _,'r','s'],
      ['I','i','I',  _,'I','i','C','i'],
      [  _,'h',  _,  _,  _,  _,  _,  _],
      [  _,  _,  _,'i',  _,  _,  _,  _],
      [  _,  _,  _,'i',  _,  _,  _,  _],
      [  _,  _,  _,  _,  _,  _,'I',  _],
      ['I','i','I',  _,'I','i','I','i'],
      ['C','A',  _,  _,  _,  _,'h',  _],
    ],
  },
  {
    title: 'Rm. 764: “Flacks”',
    // prettier-ignore
    data: [
      [  _,'C',  _,'A','K',  _,'C','S'],
      ['F','F',  _,  _,  _,'F','F','F'],
      [  _,  _,  _,  _,  _,  _,  _,  _],
      [  _,  _,  _,  _,  _,  _,  _,  _],
      ['L',  _,  _,  _,  _,  _,  _,  _],
      ['f',  _,'k','f',  _,  _,  _,  _],
      ['f',  _,  _,'f','f','f','f','f'],
      ['L',  _,'S','A','a','l',  _,'s'],
    ],
  },
  {
    title: 'Rm. 755: “Doctors”',
    // prettier-ignore
    data: [
      [  _,  _,'D',  _,  _,'o','d',  _],
      [  _,'o','t','t',  _,'t','t','t'],
      ['t','t','R',  _,'t',  _,'c',  _],
      [  _,  _,  _,  _,  _,  _,  _,  _],
      [  _,  _,  _,  _,  _,  _,  _,  _],
      [  _,'C','c','r',  _,  _,'T',  _],
      ['T','T','T','T','T','T','O','T'],
      ['R',  _,'S','O','s',  _,  _,  _],
    ],
  },
  {
    title: 'Rm. 748: “Jewelers”',
    // prettier-ignore
    data: [
    [  _,  _,  _,'e',  _,'s','W',  _],
    [  _,  _,  _,  _,'L','R','L','R'],
    [  _,  _,'J',  _,  _,  _,'R',  _],
    [  _,'S',  _,'l',  _,  _,  _,  _],
    [  _,  _,  _,  _,  _,  _,  _,'w'],
    ['j',  _,  _,'E',  _,'S','R',  _],
    [  _,  _,  _,  _,'L','R','L','R'],
    [  _,'E',  _,  _,  _,  _,  _,  _],
    ],
  },
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle
      puzzleData={puzzleData}
      copyData={{ ref, config: { preserveStyles: true } }}
    >
      <div ref={ref}>
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a>{' '}
          <span className={cx(NO_COPY_CLASS)}>
            Text and boards available in copy-to-clipboard.
          </span>
        </InfoIcon>
        <iframe src={pdf + '#zoom=Fit'} className={cx(NO_COPY_CLASS, 'w-full')}>
          <style jsx>{`
            iframe {
              /* Why can't this be a tailwind class? No clue. */
              aspect-ratio: 8.5/11;
            }
          `}</style>
        </iframe>
        <div className={cx(HIDDEN_CLASS)}>
          <p>
            <i>A puzzle comes knocking at the door.</i>
          </p>
          <p>
            <i>
              Detective: "I've got a case for you! We were called to a hotel
              with rooms full of masked parties, and the suspects scattered
              across the rooms. But can this possibly be legal?!"
            </i>
          </p>
          <p>
            <i>You see six pictures.</i>
          </p>
          {boards.map((props) => (
            <Chessboard {...props} />
          ))}

          <p>
            <i>
              D: "As my guys entered the rooms, they yelled 'Nobody move!' But
              the suspects had already all managed to move and blend in. If only
              we could turn back the clock and see where they had moved from!"
            </i>
          </p>
          <p>
            <i>You: "I bet the rank and file would like the extra action."</i>
          </p>
          <p>
            <i>
              D: "Oh! We also found some kind of note in canvassing the rooms."
            </i>
          </p>
          <p>
            <i>You see a strip of paper.</i>
          </p>
          <SheetableImage src={png} />
          <p>
            <i>
              You: "Indeed, I can follow it to the letter for each picture. I'll
              get you the (4)(1)(1)!"
            </i>
          </p>
          <p>
            Note: consider any move where a king and a rook both move as a king
            move.
          </p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
