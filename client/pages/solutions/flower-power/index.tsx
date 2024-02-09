import { Tab } from '@headlessui/react';
import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/flower-power/0.png';
import image1 from 'assets/solutions/flower-power/1.png';

const SLUG = 'flower-power';
const ANSWER = `RIVER BASIN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is a "crushed petals" puzzle, which is a combination of a "crushword"
      (up to 3 letters per grid cell) and a petal puzzle. A prior example is{' '}
      <a href="https://puzzles.mit.edu/2016/puzzle/crushed_petals/">
        Crushed Petals (MITMH 2016)
      </a>
      .
    </p>
    <p>
      First, we solve the twin "crushed petals" puzzle. The grid fill is as
      follows:
    </p>
    <h3>Grid 1</h3>
    <h4 className="mb-2">Clockwise</h4>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Light, and also sound</td>
          <td>W/A/V/E/S</td>
        </tr>
        <tr>
          <td>Without the desired results</td>
          <td>V/A/IN/LY</td>
        </tr>
        <tr>
          <td>Negroni ingredient</td>
          <td>C/AM/PA/R/I</td>
        </tr>
        <tr>
          <td>Long-time Ford model</td>
          <td>EX/P/LO/R/ER</td>
        </tr>
        <tr>
          <td>Get things straightened out</td>
          <td>A/L/I/G/N</td>
        </tr>
        <tr>
          <td>
            Certain introduction, to the winners of the 2021 Mystery Hunt?
          </td>
          <td>MA/DAM/, I'/M A/DAM</td>
        </tr>
        <tr>
          <td>Actors Joan and Tim</td>
          <td>AL/L/E/N/S</td>
        </tr>
        <tr>
          <td>They lack direction</td>
          <td>SCA/L/A/R/S</td>
        </tr>
        <tr>
          <td>Brewing additive made from corn syrup</td>
          <td>PO/R/TE/R/INE</td>
        </tr>
        <tr>
          <td>
            Ballet whose title character goes mad and dies by the end of the
            first act
          </td>
          <td>G/IS/E/L/LE</td>
        </tr>
        <tr>
          <td>Persisted in doing</td>
          <td>KE/P/T/ A/T</td>
        </tr>
        <tr>
          <td>
            Possible enjoyer of falafel and hummus, geographically speaking
          </td>
          <td>DAM/AS/C/EN/E</td>
        </tr>
        <tr>
          <td>Soup prepared with egg whites</td>
          <td>CO/NS/OM/M/E</td>
        </tr>
        <tr>
          <td>Edible typically encased in paraffin</td>
          <td>E/DAM/CHE/E/SE</td>
        </tr>
        <tr>
          <td>Site for a derby</td>
          <td>HA/TS/T/A/ND</td>
        </tr>
        <tr>
          <td>Unlucky occurrence</td>
          <td>MI/S/C/HA/NCE</td>
        </tr>
        <tr>
          <td>Bobby's bopper</td>
          <td>TRU/N/CH/E/ON</td>
        </tr>
        <tr>
          <td>Indulge in moderation, say</td>
          <td>E/AT/ L/ES/S</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="my-2">Counterclockwise:</h4>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pointer for time management</td>
          <td>W/AT/CH/ HA/ND</td>
        </tr>
        <tr>
          <td>Ratio measuring reactivity</td>
          <td>V/A/L/E/NCE</td>
        </tr>
        <tr>
          <td>Bridle part</td>
          <td>C/A/V/ES/ON</td>
        </tr>
        <tr>
          <td>Quizzes, possibly</td>
          <td>EX/AM/IN/E/S</td>
        </tr>
        <tr>
          <td>Disgusts</td>
          <td>A/P/PA/L/S</td>
        </tr>
        <tr>
          <td>Justine, to Michael's Alex P.</td>
          <td>MA/L/LO/RY</td>
        </tr>
        <tr>
          <td>14th-century author on the zoology of the Quran</td>
          <td>AL/DAM/I/R/I</td>
        </tr>
        <tr>
          <td>Dutch historian who wrote a thesaurus of time</td>
          <td>SCA/L/I/G/ER</td>
        </tr>
        <tr>
          <td>Punter, for one</td>
          <td>PO/L/E/MA/N</td>
        </tr>
        <tr>
          <td>Corsica/Malibu counterpart until 2005</td>
          <td>G/R/A/N/D AM</td>
        </tr>
        <tr>
          <td>Rumps</td>
          <td>KE/IS/TE/R/S</td>
        </tr>
        <tr>
          <td>Certain pedals</td>
          <td>DAM/P/E/R/S</td>
        </tr>
        <tr>
          <td>The Jersey Shore, for one</td>
          <td>CO/AS/T/L/INE</td>
        </tr>
        <tr>
          <td>Craft simulated dragon skin, perhaps</td>
          <td>E/NS/C/A/LE</td>
        </tr>
        <tr>
          <td>Could squeeze it in</td>
          <td>HA/D A M/OM/EN/T</td>
        </tr>
        <tr>
          <td>
            Programming language implementation often used for rapid prototyping
          </td>
          <td>MI/T S/CHE/M/E</td>
        </tr>
        <tr>
          <td>One with signing authority, typically</td>
          <td>TRU/S/T/E/E</td>
        </tr>
        <tr>
          <td>Use an etui, say</td>
          <td>E/N/CA/SE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <h3>Grid 2</h3>
    <h4 className="mb-2">Clockwise</h4>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Present</td>
          <td>ON/S/I/T/E</td>
        </tr>
        <tr>
          <td>People with deep musical knowledge?</td>
          <td>BAS/S/IS/T/S</td>
        </tr>
        <tr>
          <td>Not at all edgy?</td>
          <td>TOR/O/I/D/AL</td>
        </tr>
        <tr>
          <td>Driver, on a film set</td>
          <td>M/IN/N/I/E</td>
        </tr>
        <tr>
          <td>Website involved in Mandy Rose's release from the WWE</td>
          <td>F/A/N/TI/ME</td>
        </tr>
        <tr>
          <td>Capital on the Mekong</td>
          <td>VI/EN/T/I/ANE</td>
        </tr>
        <tr>
          <td>Oppositionally, to Caesar</td>
          <td>PER/ CO/NT/R/A</td>
        </tr>
        <tr>
          <td>Questionable method?</td>
          <td>S/O/C/RAT/IC</td>
        </tr>
        <tr>
          <td>Never</td>
          <td>NO/T/ O/N/CE</td>
        </tr>
        <tr>
          <td>Adds additional overtones?</td>
          <td>HAR/M/O/NI/ZES</td>
        </tr>
        <tr>
          <td>Mentally discombobulated</td>
          <td>IN A/ T/I/Z/ZY</td>
        </tr>
        <tr>
          <td>Software engineering supervisor, e.g.</td>
          <td>TEC/H/NO/CRA/T</td>
        </tr>
        <tr>
          <td>Word referring to specific things</td>
          <td>T/H/E/S/E</td>
        </tr>
        <tr>
          <td>Bartleby, notably</td>
          <td>SC/RIV/E/N/ER</td>
        </tr>
        <tr>
          <td>Hamm role of note</td>
          <td>D/R/A/P/ER</td>
        </tr>
        <tr>
          <td>They're delineated with dots</td>
          <td>D/OM/A/IN/S</td>
        </tr>
        <tr>
          <td>Abundantly provided</td>
          <td>R/EP/L/ET/E</td>
        </tr>
        <tr>
          <td>Decline a dividend, say</td>
          <td>R/E/IN/V/EST</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="my-2">Counterclockwise:</h4>
    <Table>
      <thead>
        <tr>
          <th>CLUE</th>
          <th>ENTRY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bon mot, often</td>
          <td>ON/E/L/IN/ER</td>
        </tr>
        <tr>
          <td>Places to snuggle one's baby</td>
          <td>BAS/S/IN/ET/S</td>
        </tr>
        <tr>
          <td>Doing the twist?</td>
          <td>TOR/S/I/V/E</td>
        </tr>
        <tr>
          <td>Most saturated, perhaps</td>
          <td>M/O/IS/T/EST</td>
        </tr>
        <tr>
          <td>Bounded</td>
          <td>F/IN/I/T/E</td>
        </tr>
        <tr>
          <td>Provisions</td>
          <td>VI/A/N/D/S</td>
        </tr>
        <tr>
          <td>Evergreen, so to speak</td>
          <td>PER/EN/N/IAL</td>
        </tr>
        <tr>
          <td>Teammate drafted 4 years after Ogugua</td>
          <td>S/CO/T/TI/E</td>
        </tr>
        <tr>
          <td>Whence the sundial's shadow is shortest</td>
          <td>NO/O/NT/I/ME</td>
        </tr>
        <tr>
          <td>American poet who went by his two animal-related names</td>
          <td>HAR/T/ C/R/ANE</td>
        </tr>
        <tr>
          <td>One might desire her affections</td>
          <td>INA/M/O/RAT/A</td>
        </tr>
        <tr>
          <td>Like plates with jagged edges?</td>
          <td>TEC/T/O/N/IC</td>
        </tr>
        <tr>
          <td>Place you're likely to break through</td>
          <td>T/H/I/N I/CE</td>
        </tr>
        <tr>
          <td>Honkers</td>
          <td>SC/H/NO/Z/ZES</td>
        </tr>
        <tr>
          <td>Thoroughly irritate</td>
          <td>D/RIV/E /CRA/ZY</td>
        </tr>
        <tr>
          <td>Bedeck'd, as at Ye Olde Tailor Shoppe</td>
          <td>D/R/E/S/T</td>
        </tr>
        <tr>
          <td>Paris-born guitarist specializing in Gypsy Jazz</td>
          <td>R/OM/A/N/E</td>
        </tr>
        <tr>
          <td>Follow a decorator's recommendation, maybe</td>
          <td>R/EP/A/P/ER</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      Looking at the completed grids, we notice that the first grid contains
      four cells which contain the same three letters:{' '}
      <Monospace>DAM</Monospace>. The puzzle's title is a pun on hydroelectric
      dams providing power from flowing water, or "flower power". However,
      overlaying the grids and selecting the <Monospace>DAM</Monospace> squares
      in the provided orientation yields nothing helpful (
      <Monospace>CO A TEC RIV</Monospace>).
    </p>
    <p>
      Taking another look at the clues and answers, we notice that in the first
      grid, 5 Clockwise is "Get things straightened out," or{' '}
      <Monospace>ALIGN</Monospace>, and in the second grid, 13 Clockwise is
      "Word referring to specific things," or <Monospace>THESE</Monospace>.
      These clues are phrased in a way in which they can naturally be combined.
      Their answers combine to <Monospace>ALIGN THESE</Monospace> (or{' '}
      <Monospace>THESE ALIGN</Monospace>&mdash;either reading works). Rotating
      the grids so that <Monospace>ALIGN</Monospace> and{' '}
      <Monospace>THESE</Monospace> are aligned, then reading off the{' '}
      <Monospace>DAM</Monospace> squares in the second grid yields this puzzle's
      answer of <Answerize>RIVER BASIN</Answerize> (which is likely where we
      want a dam to be sited).
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
