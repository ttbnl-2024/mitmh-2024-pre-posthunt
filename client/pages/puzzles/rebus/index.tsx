import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'rebus';

const xwGrids = [
  [
    [X, 1, 2, 3, 4],
    [X, 5, _, _, _],
    [6, _, _, _, _],
    [7, _, _, _, X],
    [8, _, _, _, X],
  ],

  [
    [X, 1, 2, 3, 4],
    [X, 5, _, _, _],
    [6, _, _, _, _],
    [7, _, _, _, X],
    [8, _, _, _, X],
  ],

  [
    [1, 2, 3, X, X],
    [4, _, _, 5, X],
    [6, _, _, _, 7],
    [X, 8, _, _, _],
    [X, X, 9, _, _],
  ],

  [
    [1, 2, 3, 4, X],
    [5, _, _, _, X],
    [6, _, _, _, 7],
    [X, 8, _, _, _],
    [X, 9, _, _, _],
  ],

  [
    [X, X, 1, 2, 3],
    [X, 4, _, _, _],
    [5, _, _, _, _],
    [6, _, _, _, X],
    [7, _, _, X, X],
  ],
  [
    [X, X, 1, 2, 3],
    [X, 4, _, _, _],
    [5, _, _, _, _],
    [6, _, _, _, X],
    [7, _, _, X, X],
  ],
];

const otherGrids = [
  [[_, _, _, 11, 6, _, _, _, _, _, _, _, _, _, _]],
  [[_, _, _, _, _, _, _, _, 4, _, _, _, 7]],
  [[_, _, _, 2, _, _, _, 8]],
  [[12, _, _, _, _, 3, _, _, _, _, _, _, _]],
  [[_, _, _, 9, _, _, _, _, _, _, _, _, _, _, _, _, _, 5]],
  [[_, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 10, _, _, _]],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <h3>Puzzle 1</h3>
        <Crossword data={xwGrids[0]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>?</li>
              <li value={5}>"Cake by the Ocean" singers</li>
              <li>Trips</li>
              <li>Telepathic child of SPY × FAMILY</li>
              <li>Opposed to, in Dundee</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>Eagle's accomplishment</li>
              <li>Great Criticism painter Wang</li>
              <li>Nishimura's board site</li>
              <li>Bee ___ ("Stayin' Alive" group)</li>
              <li value={6}>Daft Punk album (abbr.)</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[0]} />
         <hr className="my-8 break-after" />
        <h3>Puzzle 2</h3>
        <Crossword data={xwGrids[1]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>"___ Lonely" (Janet Jackson) (2 wds.)</li>
              <li value={5}>Brain "bridge"</li>
              <li>Fork-in-toaster result</li>
              <li>?</li>
              <li>Distant prefix?</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>Apple line</li>
              <li>Large number</li>
              <li>Represent as bits or DNA, say</li>
              <li>"I'm disappointed in you"</li>
              <li value={6}>Nasal mucus</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[1]} />
         <hr className="my-8 break-after" />
        <h3>Puzzle 3</h3>
        <Crossword data={xwGrids[2]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>Result of parsing source code (abbr.)</li>
              <li value={4}>Urban emissions nuisance</li>
              <li value={6}>?</li>
              <li value={8}>Summary (abbr.)</li>
              <li>Half a year's earlier time? (abbr.)</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>I'm in ___ (I don't know what to do) (2 wds.)</li>
              <li>Humorous unit of length</li>
              <li>What most people are for bumper cars (2 wds.)</li>
              <li value={5}>Wares</li>
              <li value={7}>Cloud in space</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[2]} />
         <hr className="my-8 break-after" />
        <h3>Puzzle 4</h3>
        <Crossword data={xwGrids[3]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>Instrument</li>
              <li value={5}>?</li>
              <li>Belonging to a yellow saxophone player</li>
              <li value={8}>Pago Pago, to ICAO</li>
              <li>Look wistfully</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>Elliptical</li>
              <li>Kagi alternative</li>
              <li>Chris Kyle memorial site</li>
              <li>Substitute</li>
              <li value={7}>Take to court</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[3]} />
         <hr className="my-8 break-after" />
        <h3>Puzzle 5</h3>
        <Crossword data={xwGrids[4]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>?</li>
              <li value={4}>Ancient Greek coin</li>
              <li>Unlike Spike, Rarity is ___ (2 wds.)</li>
              <li>Soccer superstar</li>
              <li>Typographer's measures</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>Iconography</li>
              <li>Speech unit, in two ways</li>
              <li>None except</li>
              <li>Willing to listen</li>
              <li>Imitate</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[4]} />
         <hr className="my-8 break-after" />
        <h3>Puzzle 6</h3>
        <Crossword data={xwGrids[5]} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-2">
            <h5>Across</h5>
            <ol>
              <li>Courageous attempt</li>
              <li value={4}>Unstressed vowel</li>
              <li>Indiscernible chatter</li>
              <li>Antivirus software</li>
              <li>___ and trade</li>
            </ol>
          </div>
          <div className="md:w-1/2 my-2">
            <h5>Down</h5>
            <ol>
              <li>Discard</li>
              <li>?</li>
              <li>Deny entry to</li>
              <li>Fiji's capital</li>
              <li>___ and cheese</li>
            </ol>
          </div>
        </div>
        <Crossword data={otherGrids[5]} />
      </div>

      <style jsx global>{`
        .prefer-2-col {
          justify-content: unset;
        }
        .crossword {
          margin-top: 1em;
          margin-bottom: 1em;
        }
        h5 {
          font-weight: bold;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
