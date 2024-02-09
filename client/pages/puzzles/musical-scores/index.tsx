import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

import audio1 from 'assets/puzzles/musical-scores/1.mp3';
import audio2 from 'assets/puzzles/musical-scores/2.mp3';
import audio3 from 'assets/puzzles/musical-scores/3.mp3';
import audio4 from 'assets/puzzles/musical-scores/4.mp3';
import audio5 from 'assets/puzzles/musical-scores/5.mp3';
import audio6 from 'assets/puzzles/musical-scores/6.mp3';
import audio7 from 'assets/puzzles/musical-scores/7.mp3';
import audio8 from 'assets/puzzles/musical-scores/8.mp3';

const SLUG = 'musical-scores';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You've been trying to cozy up to him but you don't have anything in
          common. You're hoping that learning about this weird competition he's
          into will give you something you can share to get you both on a first
          name basis.{' '}
        </FlavorText>
        <InfoIcon>
          You may need to scroll right to see the full bracket.
        </InfoIcon>
        <Table noBorder={true} className="brackets-table">
          <tbody>
            <tr>
              <td className="">1996</td>
              <td className="">
                <a className={cx(HIDDEN_CLASS)} href={audio1}>
                  Audio 1
                </a>
              </td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio1}
                >
                  <a href={audio1}>Audio 1</a>
                </audio>
              </td>
              <td className="border-b">2</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">1995</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-b">2</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">2005</td>
              <td className="border-r">
                <a className={cx(HIDDEN_CLASS)} href={audio2}>
                  Audio 2
                </a>
              </td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio2}
                >
                  <a href={audio2}>Audio 2</a>
                </audio>
              </td>
              <td className="border-r border-b">4</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">2007</td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-b">2</td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">1986</td>
              <td className="">
                <a className={cx(HIDDEN_CLASS)} href={audio3}>
                  Audio 3
                </a>
              </td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio3}
                >
                  <a href={audio3}>Audio 3</a>
                </audio>
              </td>
              <td className="border-b">1</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">1993</td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-r border-b">6</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">2019</td>
              <td className="border-r">
                <a className={cx(HIDDEN_CLASS)} href={audio4}>
                  Audio 4
                </a>
              </td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio4}
                >
                  <a href={audio4}>Audio 4</a>
                </audio>
              </td>
              <td className="border-r border-b">3</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r">&nbsp;</td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
            </tr>
            <tr>
              <td className="">2005</td>
              <td className="">
                <a className={cx(HIDDEN_CLASS)} href={audio5}>
                  Audio 5
                </a>
              </td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio5}
                >
                  <a href={audio5}>Audio 5</a>
                </audio>
              </td>
              <td className="border-b">12</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">1993</td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-b">14</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">2010</td>
              <td className="border-r">
                <a className={cx(HIDDEN_CLASS)} href={audio6}>
                  Audio 6
                </a>
              </td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio6}
                >
                  <a href={audio6}>Audio 6</a>
                </audio>
              </td>
              <td className="border-r border-b">17</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">2005</td>
              <td className="border-r"></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-r border-b">10</td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">July, 1986</td>
              <td className="">
                <a className={cx(HIDDEN_CLASS)} href={audio7}>
                  Audio 7
                </a>
              </td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio7}
                >
                  <a href={audio7}>Audio 7</a>
                </audio>
              </td>
              <td className="border-b">3</td>
              <td className=""></td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="">2007</td>
              <td className="border-r"></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className="border-r"></td>
              <td className="border-b">
                <div className="w-[140px] h-[30px] border-black border"></div>
              </td>
              <td className="border-r border-b">10</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="">2003</td>
              <td className="border-r">
                <a className={cx(HIDDEN_CLASS)} href={audio8}>
                  Audio 8
                </a>
              </td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="border-b">
                <audio
                  className="w-[200px] h-[30px]"
                  controls
                  controlsList="nodownload noplaybackrate"
                  src={audio8}
                >
                  <a href={audio8}>Audio 8</a>
                </audio>
              </td>
              <td className="border-r border-b">11</td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
              <td className=""></td>
            </tr>
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        .brackets-table td {
          border-color: black;
          padding-left: 0.5em;
          padding-right: 0.5em;
          padding-bottom: 0.25em;
        }
        .brackets-table audio::-webkit-media-controls-current-time-display,
        .brackets-table audio::-webkit-media-controls-time-remaining-display {
          display: none !important;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
