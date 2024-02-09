import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/spacing-out/0.png';

const SLUG = 'spacing-out';
const ANSWER = `ENSIGN VORIK`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      First we solve the crossword clues, noticing the answers in each group are
      alphabetical and most are short, which suggests they must be combined
      somehow. Eventually we realize that they can be reordered to spell actors
      who have been a part of the <i>Star Trek</i> franchise (clued by the title).
      The actors are arranged alphabetically by character name.
    </p>
    <div className="space-y-4">
      <Table>
        <tbody>
          <tr>
            <td>Lair</td>
            <td>
              <Monospace>DEN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Fidget spinner, e.g.</td>
            <td>
              <Monospace>FAD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Torii</td>
            <td>
              <Monospace>GATES</Monospace>
            </td>
          </tr>
          <tr>
            <td>Cabaret host, for short</td>
            <td>
              <Monospace>MC</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>GATES MCFADDEN</Monospace>
              <br />
              <Monospace>(Beverly Crusher)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Freudian concept</td>
            <td>
              <Monospace>ID</Monospace>
            </td>
          </tr>
          <tr>
            <td>Face card</td>
            <td>
              <Monospace>JACK</Monospace>
            </td>
          </tr>
          <tr>
            <td>As</td>
            <td>
              <Monospace>QUA</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>JACK QUAID</Monospace>
              <br />
              <Monospace>(Brad Boimler)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Harbor</td>
            <td>
              <Monospace>MARINA</Monospace>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <Monospace>SIR</Monospace>
            </td>
          </tr>
          <tr>
            <td>Start of "the season"?</td>
            <td>
              <Monospace>TIS</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>MARINA SIRTIS</Monospace>
              <br />
              <Monospace>(Deanna Troi)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Nabokov novel</td>
            <td>
              <Monospace>ADA</Monospace>
            </td>
          </tr>
          <tr>
            <td>Exists</td>
            <td>
              <Monospace>IS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Damage</td>
            <td>
              <Monospace>MAR</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>ADA MARIS</Monospace>
              <br />
              <Monospace>(Erika Hernandez)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Dapper one</td>
            <td>
              <Monospace>DAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Jacket material</td>
            <td>
              <Monospace>JEAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Immature sarcastic retort!</td>
            <td>
              <Monospace>NOT</Monospace>
            </td>
          </tr>
          <tr>
            <td>52nd element</td>
            <td>
              <Monospace>TE</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>DAN JEANNOTTE</Monospace>
              <br />
              <Monospace>(George Samuel Kirk Jr.)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Reza play</td>
            <td>
              <Monospace>ART</Monospace>
            </td>
          </tr>
          <tr>
            <td>Auto</td>
            <td>
              <Monospace>CAR</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sgt's superior officer</td>
            <td>
              <Monospace>LT</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>CARL TART</Monospace>
              <br />
              <Monospace>(Kayshon)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Grandmother, familiarly</td>
            <td>
              <Monospace>NANA</Monospace>
            </td>
          </tr>
          <tr>
            <td>Tourist, often</td>
            <td>
              <Monospace>VISITOR</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>NANA VISITOR</Monospace>
              <br />
              <Monospace>(Kira Nerys)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Mil. rank</td>
            <td>
              <Monospace>COL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Thousand</td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>___ culpa</td>
            <td>
              <Monospace>MEA</Monospace>
            </td>
          </tr>
          <tr>
            <td>Persian flute</td>
            <td>
              <Monospace>NEY</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>COLM MEANEY</Monospace>
              <br />
              <Monospace>(Miles O'Brien)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Scooby follower?</td>
            <td>
              <Monospace>DOO</Monospace>
            </td>
          </tr>
          <tr>
            <td>99th element</td>
            <td>
              <Monospace>ES</Monospace>
            </td>
          </tr>
          <tr>
            <td>Solo adventurer?</td>
            <td>
              <Monospace>HAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Blockage</td>
            <td>
              <Monospace>JAM</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>JAMES DOOHAN</Monospace>
              <br />
              <Monospace>(Montgomery Scott)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>Egyptian God</td>
            <td>
              <Monospace>BES</Monospace>
            </td>
          </tr>
          <tr>
            <td>Face or fort beginning?</td>
            <td>
              <Monospace>EF</Monospace>
            </td>
          </tr>
          <tr>
            <td>Hades</td>
            <td>
              <Monospace>HELL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Karaoke accessory</td>
            <td>
              <Monospace>MIC</Monospace>
            </td>
          </tr>
          <tr>
            <td>Either</td>
            <td>
              <Monospace>OR</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>MICHELLE FORBES</Monospace>
              <br />
              <Monospace>(Ro Laren)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="!border-x-0 text-xs"> </td>
            <td className="!border-x-0"></td>
          </tr>
          <tr>
            <td>College HS class</td>
            <td>
              <Monospace>AP</Monospace>
            </td>
          </tr>
          <tr>
            <td>German self?</td>
            <td>
              <Monospace>ICH</Monospace>
            </td>
          </tr>
          <tr>
            <td>Kent's lover</td>
            <td>
              <Monospace>LANE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Fortify</td>
            <td>
              <Monospace>MAN</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>LANEI CHAPMAN</Monospace>
              <br />
              <Monospace>(Sariel Rager)</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <p>
      Using the flavor text, we realize that these actors have all crossed over
      to various series in the franchise, including animated ones ("sometimes
      only in 2D!"). We can match each character to a number in the diagram,
      assuming that each circle represents a different show.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Dot</th>
          <th>Actor</th>
          <th>Character</th>
          <th>Series</th>
          <th>Num. Series</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Monospace>ADA MARIS</Monospace>
          </td>
          <td>
            <Monospace>ERIKA HERNANDEZ</Monospace>
          </td>
          <td>STE</td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <Monospace>MARINA SIRTIS</Monospace>
          </td>
          <td>
            <Monospace>DEANNA TROI</Monospace>
          </td>
          <td>TNG, STV, STE, LD, STPi</td>
          <td>5</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <Monospace>LANEI CHAPMAN</Monospace>
          </td>
          <td>
            <Monospace>SARIEL RAGER</Monospace>
          </td>
          <td>TNG</td>
          <td>1</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <Monospace>NANA VISITOR</Monospace>
          </td>
          <td>
            <Monospace>KIRA NERYS</Monospace>
          </td>
          <td>DS9, LD</td>
          <td>2</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <Monospace>DAN JEANNOTTE</Monospace>
          </td>
          <td>
            <Monospace>GEORGE SAMUEL KIRK JR.</Monospace>
          </td>
          <td>SNW</td>
          <td>1</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <Monospace>JAMES DOOHAN</Monospace>
          </td>
          <td>
            <Monospace>MONTGOMERY SCOTT</Monospace>
          </td>
          <td>TOS, STA, TNG</td>
          <td>3</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <Monospace>GATES MCFADDEN</Monospace>
          </td>
          <td>
            <Monospace>BEVERLY CRUSHER</Monospace>
          </td>
          <td>STG, STPr, STPi</td>
          <td>3</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <Monospace>MICHELLE FORBES</Monospace>
          </td>
          <td>
            <Monospace>RO LAREN</Monospace>
          </td>
          <td>TNG, STPi</td>
          <td>2</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <Monospace>JACK QUAID</Monospace>
          </td>
          <td>
            <Monospace>BRAD BOIMLER</Monospace>
          </td>
          <td>LD, SNW</td>
          <td>2</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <Monospace>COLM MEANEY</Monospace>
          </td>
          <td>
            <Monospace>MILES O'BRIEN</Monospace>
          </td>
          <td>TNG, DS9</td>
          <td>2</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <Monospace>CARL TART</Monospace>
          </td>
          <td>
            <Monospace>KAYSHON</Monospace>
          </td>
          <td>LD</td>
          <td>1</td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      When we index into the actors' character names with the amount of series
      they have appeared in, we get the puzzle's answer:{' '}
      <Answerize>ENSIGN VORIK</Answerize>.
    </p>
    <h2>Appendix</h2>
    <p>Star Trek series:</p>
    <ul>
      <li>TOS = Star Trek: The Original Series</li>
      <li>STA = Star Trek: The Animated Series</li>
      <li>TNG = Star Trek: The Next Generation</li>
      <li>DS9 = Star Trek: Deep Space Nine</li>
      <li>STV = Star Trek: Voyager</li>
      <li>STE = Star Trek: Enterprise</li>
      <li>STD = Star Trek: Discovery</li>
      <li>STPi = Star Trek: Picard</li>
      <li>SNW = Star Trek: Strange New Worlds</li>
      <li>LD = Star Trek: Lower Decks</li>
      <li>STPr = Star Trek: Prodigy</li>
    </ul>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <style jsx global>{`
      #extraction td:nth-child(1),
      #extraction td:nth-child(5),
      #extraction td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
