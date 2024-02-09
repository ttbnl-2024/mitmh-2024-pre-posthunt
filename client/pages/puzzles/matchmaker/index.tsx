import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

import pdf from 'assets/puzzles/matchmaker/puzzle.pdf';

const SLUG = 'matchmaker';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a>{' '}
          <span className={cx(NO_COPY_CLASS)}>
            Left and right columns available in copy-to-clipboard.
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

        <br className={cx(HIDDEN_CLASS)} />
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>"In the Year 2525" (1969)</td>
              <td>
                <Monospace>P_____ A__ D_____ (A____ H___, 1877)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Some MAD Auto Safety Devices (1967)</td>
              <td>
                <Monospace>A_____ 11 (N___, 1969)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Futility, or the Wreck of the Titan (1898)</td>
              <td>
                <Monospace>W________ (2001)</Monospace>
              </td>
            </tr>
            <tr>
              <td>RoboCop 2 (1990)</td>
              <td>
                <Monospace>M__ M______ H___ (B___ S_______, 1981)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Dick Tracy strips of 1946</td>
              <td>
                <Monospace>W________ (C______ H___, 1968)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Gulliver's Travels (1726)</td>
              <td>
                <Monospace>P________ D_____ T____ (2017)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Midnight Madness (1980)</td>
              <td>
                <Monospace>W____ T____ C_____ D________ I_ 2001</Monospace>
              </td>
            </tr>
            <tr>
              <td>The Hitchhiker's Guide to the Galaxy (1978)</td>
              <td>
                <Monospace>R__ T______ S____ (1912)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Two Girls out to Have Fun (1984)</td>
              <td>
                <Monospace>S___________ (C_. 2013)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Bart to the Future (2000)</td>
              <td>
                <Monospace>T___-T___ B_____ (1978)</Monospace>
              </td>
            </tr>
            <tr>
              <td>MAD Devices for Safer Smoking (1964)</td>
              <td>
                <Monospace>D______ I_ B_______ (2013)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Mimu Iro Iro Yume no Tabi (1983)</td>
              <td>
                <Monospace>B_____ W___ C____ D___ I_ 1989</Monospace>
              </td>
            </tr>
            <tr>
              <td>Destination Moon (1950&ndash;1952)</td>
              <td>
                <Monospace>
                  A_______ C_____ C______ (M_________, 1995)
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>Rowan and Martin's Laugh-In (1969)</td>
              <td>
                <Monospace>B____ U_____ S_____ P________ (2009)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Stranger in a Strange Land (1961)</td>
              <td>
                <Monospace>W____ W___ W__ (T__ B______-L__, 1991)</Monospace>
              </td>
            </tr>
            <tr>
              <td>When You Dish Upon a Star (1998)</td>
              <td>
                <Monospace>D_____ B___ F__ (2019)</Monospace>
              </td>
            </tr>
            <tr>
              <td>Deep Impact (1998)</td>
              <td>
                <Monospace>E-C_________ (C____, 2003)</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
