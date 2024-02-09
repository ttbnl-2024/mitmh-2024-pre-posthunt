import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'deposit-at-the-word-bank';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Your deposit at the Word Bank suddenly spat out four receipts.
          The first three receipts seem a little strange to you. The
          printer must have run out of ink on the receipt for your true
          deposit.
        </FlavorText>
        <div className={cx('flex flex-wrap space-around', NO_COPY_CLASS)}>
          <div className="w-full md:w-1/4 mb-1">
            <div className="receipts-display">
              ASHEN
              <br />
              NAYS
              <br />
              WICKED
              <br />
              CLIMB
              <br />
              SCOWL
              <br />
              SEVERAL WILDEBEEST
              <br />
              MOLD
              <br />
              ROLE
              <br />
              CRAFTSY
              <br />
              STICKS IN THE MUD
              <br />
              VERILY
              <br />
              AIMED HIGH
              <br />
              AGO
              <br />
              SIESTAS
              <br />
              KITCHEN SURFACES
              <br />
              COUNT CALORIES
              <br />
              TROT
              <br />
              ARTICLE OR THING
              <br />
              LEMONS' PARTNERS
              <br />
              FARM STORAGE
              <br />
              EARNS
              <br />
              PENNIES
              <br />
              DINED
              <br />
              SMALL BITES
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-1">
            <div className="receipts-display">
              AGOG
              <br />
              BIG
              <br />
              COSINE RECIPROCAL
              <br />
              DABS
              <br />
              DIRT
              <br />
              FAUN
              <br />
              FELINES
              <br />
              FIREARMS
              <br />
              GREEK LETTER
              <br />
              HEIR
              <br />
              HONEY SOURCE
              <br />
              HORSE HAIR
              <br />
              LOSE HOPE
              <br />
              NARRATES
              <br />
              NEAP
              <br />
              ON AIR
              <br />
              OOZE
              <br />
              SCROOGE
              <br />
              SECURITY CODES
              <br />
              SKILLETS
              <br />
              SNOUT
              <br />
              SPECK
              <br />
              TOLL
              <br />
              TRANSMITTED
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-1">
            <div className="receipts-display">
              ARIAS
              <br />
              BREW
              <br />
              ENTREATY
              <br />
              EVEN SCORE
              <br />
              FROSTS
              <br />
              GRIN
              <br />
              HOUR
              <br />
              JACKS' NEIGHBORS
              <br />
              LOSE IT
              <br />
              NAMED HEDGEHOG
              <br />
              NAPPIES
              <br />
              POSITION
              <br />
              ROUTS
              <br />
              SHOO
              <br />
              SHROUD
              <br />
              SINGLES
              <br />
              SNARE
              <br />
              STATELY
              <br />
              STUPOR
              <br />
              TIFF
              <br />
              TITLE
              <br />
              TWIRL
              <br />
              VOICED MELODICALLY
              <br />
              WANDER
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-1">
            <div className="receipts-display">
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
              <br />
              &nbsp;
            </div>
          </div>
        </div>
        {/* This table isn't shown; it is used for clipboarding */}
        <div className={cx(HIDDEN_CLASS)}>
          <table className="receipts">
            <tbody>
              <tr>
                <td>ASHEN</td>
                <td></td>
                <td>AGOG</td>
                <td></td>
                <td>ARIAS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>NAYS</td>
                <td></td>
                <td>BIG</td>
                <td></td>
                <td>BREW</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>WICKED</td>
                <td></td>
                <td>COSINE RECIPROCAL</td>
                <td></td>
                <td>ENTREATY</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>CLIMB</td>
                <td></td>
                <td>DABS</td>
                <td></td>
                <td>EVEN SCORE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SCOWL</td>
                <td></td>
                <td>DIRT</td>
                <td></td>
                <td>FROSTS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SEVERAL WILDEBEEST</td>
                <td></td>
                <td>FAUN</td>
                <td></td>
                <td>GRIN</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>MOLD</td>
                <td></td>
                <td>FELINES</td>
                <td></td>
                <td>HOUR</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ROLE</td>
                <td></td>
                <td>FIREARMS</td>
                <td></td>
                <td>JACKS’ NEIGHBORS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>CRAFTSY</td>
                <td></td>
                <td>GREEK LETTER</td>
                <td></td>
                <td>LOSE IT</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>STICKS IN THE MUD</td>
                <td></td>
                <td>HEIR</td>
                <td></td>
                <td>NAMED HEDGEHOG</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>VERILY</td>
                <td></td>
                <td>HONEY SOURCE</td>
                <td></td>
                <td>NAPPIES</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>AIMED HIGH</td>
                <td></td>
                <td>HORSE HAIR</td>
                <td></td>
                <td>POSITION</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>AGO</td>
                <td></td>
                <td>LOSE HOPE</td>
                <td></td>
                <td>ROUTS</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SIESTAS</td>
                <td></td>
                <td>NARRATES</td>
                <td></td>
                <td>SHOO</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>KITCHEN SURFACES</td>
                <td></td>
                <td>NEAP</td>
                <td></td>
                <td>SHROUD</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>COUNT CALORIES</td>
                <td></td>
                <td>ON AIR</td>
                <td></td>
                <td>SINGLES</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>TROT</td>
                <td></td>
                <td>OOZE</td>
                <td></td>
                <td>SNARE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ARTICLE OR THING</td>
                <td></td>
                <td>SCROOGE</td>
                <td></td>
                <td>STATELY</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>LEMONS' PARTNERS</td>
                <td></td>
                <td>SECURITY CODES</td>
                <td></td>
                <td>STUPOR</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>FARM STORAGE</td>
                <td></td>
                <td>SKILLETS</td>
                <td></td>
                <td>TIFF</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>EARNS</td>
                <td></td>
                <td>SNOUT</td>
                <td></td>
                <td>TITLE</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>PENNIES</td>
                <td></td>
                <td>SPECK</td>
                <td></td>
                <td>TWIRL</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>DINED</td>
                <td></td>
                <td>TOLL</td>
                <td></td>
                <td>VOICED MELODICALLY</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>SMALL BITES</td>
                <td></td>
                <td>TRANSMITTED</td>
                <td></td>
                <td>WANDER</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx global>{`
        .receipts-display {
          height: 100%;
          border: 2px solid black;
          padding: 1em;
          margin: 0.25em;
          text-align: center;
          font-size: 80%;
          line-height: 1;
          box-sizing: border-box;
        }
        .receipts-display br {
          display: block;
          content: '';
          margin-top: 0.75em;
        }
        .receipts {
          width: 100%;
        }
        .receipts td:nth-child(odd) {
          border-left: 1px solid black;
          border-right: 1px solid black;
        }
        .receipts tr:nth-child(1) td:nth-child(odd) {
          border-top: 1px solid black;
        }
        .receipts tr:nth-last-child(1) td:nth-child(odd) {
          border-bottom: 1px solid black;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
