import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'the-myriad-gamut-of-hera';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Hera is more than happy to give you Pluto's sceptre, as long as you
          help her sort out what the deal is with all the letters she's found in
          Zeus's desk. She knows you can figure it out; after all, you've done
          something similar for her{' '}
          <a href="https://puzzles.mit.edu/2010/puzzles/1752/the_prodigious_riddle_of_juno/">
            twice
          </a>{' '}
          <a href="https://puzzles.mit.edu/2016/puzzle/the_pernicious_revenge_of_juno/">
            before
          </a>
          . <b>What has Zeus been up to recently?</b>
        </FlavorText>

        <ul>
          <li>
            Everyone in the whole wide world has exactly one favorite positive
            integer and exactly one favorite letter of the alphabet.
          </li>
          <li>
            Phoenician princesses carried across the Mediterranean on the back
            of a white bull will eventually land in <b>ITALIA</b>, the homeland
            of those they call Romans.
          </li>
          <li>
            Titanesses tricked into turning into insects should restore their
            form by finding a <u>skilled</u> <b>ARTISAN</b>—preferably one who
            can restore Greek bronzes using Latin marble.
          </li>
          <li>
            Priestesses who doubt the divinity of their partner should simply
            ask to see their <b>SMILE</b>—that totally won't disintegrate them
            or something.{' '}
          </li>
          <li>
            Incarnations of divine retribution face their <b>ARCHENEMY</b> by
            visiting casinos worldwide.
          </li>
          <li>
            Huntresses of Artemis who get turned into bears will have their
            pelts processed into a <b>SAILCLOTH</b>.
          </li>
          <li>
            Basileus Sylvester Michale would like to remind everyone that the
            letter Y is, was, and always will be a vowel, and no amount of
            complaining from those Francophilic sycophants in court can change
            this immutable fact. Seriously, French, the only other languages
            that use it as a consonant had it forced upon them. By you. Directly
            or indirectly. Get with the rest of the continent already.
          </li>
        </ul>
        <br />
        <table className="hera-table">
          <tbody>
            <tr>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;E&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;E&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;M&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;M&rarr;</td>
              <td></td>
              <td>&mdash;E&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;M&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;M&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;M&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;E&rarr;</td>
              <td></td>
              <td>&mdash;C&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;N&rarr;</td>
              <td></td>
              <td>&mdash;S&rarr;</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx global>{`
        .hera-table {
          margin-left: auto;
          margin-right: auto;
          border-collapse: separate;
          border-spacing: 0.5em 1em;
        }
        .hera-table td:nth-child(2n + 1) {
          border-bottom: 1px solid black;
          min-width: 2em;
        }
        .hera-table td:nth-child(2n) {
          text-align: center;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
