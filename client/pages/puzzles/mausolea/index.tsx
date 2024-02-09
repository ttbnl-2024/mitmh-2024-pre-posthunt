import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import pdf from 'assets/puzzles/mausolea/mausolea.pdf';

const SLUG = 'mausolea';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul>
          <li>Played one's part</li>
          <li>Banded stone</li>
          <li>Unit for rating chili</li>
          <li>Defensive line?</li>
          <li>Welcoming word</li>
          <li>Italian violin maker</li>
          <li>One might be heard in the underworld</li>
          <li>Subtle strain?</li>
          <li>Massless volume</li>
          <li>Gloss over</li>
          <li>Born in the purple, say</li>
          <li>Island with an immigration museum</li>
          <li>
            <b>Blow one's top, say</b>
          </li>
          <li>Half of a big name in furniture</li>
          <li>"As such..."</li>
          <li>Half of a snow globe?</li>
          <li>Impossible to take seriously</li>
          <li>Yorkshire city</li>
          <li>Subtle shade</li>
          <li>One without social welfare?</li>
          <li>Like finding a coin, in most contexts</li>
          <li>Stood for</li>
          <li>One of the first coders?</li>
          <li>Hop a-board?</li>
          <li>TV Studio sign</li>
          <li>___ monkey (primate thought to have inspired The Lorax)</li>
          <li>
            <b>Not dirt-y?</b>
          </li>
          <li>Relative of Earl Grey</li>
          <li>One of the colonies</li>
          <li>
            $2.75 for pecan in Cuba? $3 for apple in Haiti? Those are the pie
            ___ of the Caribbean
          </li>
          <li>What one might do after getting hammered</li>
          <li>Sphere</li>
          <li>Born in the purple, say</li>
          <li>"That's awful," lightly</li>
          <li>
            <b>Curiosity, for one</b>
          </li>
          <li>Polish</li>
          <li>Goes downhill</li>
          <li>Like a campfire made with wet wood</li>
          <li>Jerk</li>
          <li>Watched secretly</li>
          <li>
            <b>Hoard</b>
          </li>
          <li>Where to find the sun and moon</li>
          <li>A conductor might pick it up</li>
          <li>Leaves in the sink, perhaps</li>
          <li>
            <b>Balloon beginning</b>
          </li>
          <li>Test, in a way</li>
          <li>Hades, to Athena</li>
          <li>Chamber component</li>
          <li>Sign of summer</li>
          <li>Tapered off</li>
        </ul>
        <br />
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a>{' '}
          <span className={cx(NO_COPY_CLASS)}>
            PDF grid available in copy-to-clipboard.
          </span>
        </InfoIcon>
        <br className={cx(HIDDEN_CLASS)} />
        <table className={cx('font-mono text-center', HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>O</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>B</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>A</td>
              <td>R</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>O</td>
              <td>A</td>
              <td>O</td>
              <td>&nbsp;</td>
              <td>T</td>
              <td>A</td>
              <td>C</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>C</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>E</td>
              <td>R</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>R</td>
              <td>T</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>H</td>
              <td>P</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>P</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>D</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>I</td>
              <td>L</td>
              <td>N</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>A</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>D</td>
              <td>L</td>
              <td>E</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>N</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>T</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>N</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>O</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>O</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>N</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>A</td>
              <td>L</td>
              <td>L</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>S</td>
              <td>W</td>
              <td>&nbsp;</td>
              <td>O</td>
              <td>Q</td>
              <td>T</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>G</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>U</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>N</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>V</td>
              <td>U</td>
              <td>O</td>
              <td>&nbsp;</td>
              <td>Y</td>
              <td>H</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>M</td>
              <td>H</td>
              <td>L</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>T</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>O</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>V</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Y</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>M</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>T</td>
              <td>I</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>O</td>
              <td>T</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>M</td>
              <td>M</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>P</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>P</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>D</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>T</td>
              <td>T</td>
              <td>H</td>
              <td>&nbsp;</td>
              <td>M</td>
              <td>N</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>E</td>
              <td>I</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>O</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>D</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>K</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>K</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>R</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>C</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>O</td>
              <td>D</td>
              <td>T</td>
              <td>&nbsp;</td>
              <td>T</td>
              <td>P</td>
              <td>R</td>
              <td>&nbsp;</td>
              <td>P</td>
              <td>G</td>
              <td>R</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>H</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>E</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>I</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>D</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>S</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>L</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>U</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>T</td>
              <td>L</td>
              <td>M</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>G</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <iframe src={pdf + '#zoom=Fit'} className={cx(NO_COPY_CLASS, 'w-full')}>
          <style jsx>{`
            iframe {
              aspect-ratio: 8.5/11;
            }
          `}</style>
        </iframe>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
