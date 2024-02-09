import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'inside-scoop';
const ANSWER = `SHOULDER INSIGNIA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) =>(
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The clues can be paired up so that in each pair an
      item of food or drink is removed and replaced with
      a single letter:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Name shared by three English kings</td>
          <td>Area where margarita salt is placed</td>
          <td>RIchard</td>
          <td>RIM</td>
          <td className="text-center">M</td>
        </tr>
        <tr>
          <td>Word game invented by Alfred Butts</td>
          <td>Black, in heraldry</td>
          <td>ScrabBLE</td>
          <td>SABLE</td>
          <td className="text-center">A</td>
        </tr>
        <tr>
          <td>Repository for historical documents</td>
          <td>Container sought by Indiana Jones</td>
          <td>ARchives</td>
          <td>ARK</td>
          <td className="text-center">K</td>
        </tr>
        <tr>
          <td>Electromagnetic-field force carrier</td>
          <td>David Cameron and Captain Hook alma mater</td>
          <td>phoTON</td>
          <td>ETON</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>Removed, as from a magazine</td>
          <td>Extended to the max, like a rope</td>
          <td>ToreoUT</td>
          <td>TAUT</td>
          <td className="text-center">A</td>
        </tr>
        <tr>
          <td>Lifts the curtain</td>
          <td>Fielders in Cincinnati</td>
          <td>REveal(S)</td>
          <td>RED(S)</td>
          <td className="text-center">D</td>
        </tr>
        <tr>
          <td>Wrestled (with)</td>
          <td>Graph-paper pattern</td>
          <td>GRappleD</td>
          <td>GRID</td>
          <td className="text-center">I</td>
        </tr>
        <tr>
          <td>Opiate found in Tylenol 3</td>
          <td>Home to Île de la Grande Jatte</td>
          <td>codEINE</td>
          <td>SEINE</td>
          <td className="text-center">S</td>
        </tr>
        <tr>
          <td>Oscar nominee Jimmy or Kristen, e.g.</td>
          <td>"Isn't It Romantic?" lyricist</td>
          <td>stewART</td>
          <td>HART</td>
          <td className="text-center">H</td>
        </tr>
        <tr>
          <td>Sustenance</td>
          <td>Jemima and Bee, for two</td>
          <td>AlimeNTS</td>
          <td>AUNTS</td>
          <td className="text-center">U</td>
        </tr>
        <tr>
          <td>Dante's guide through Paradise</td>
          <td>Kerouac, Burroughs, and other poets</td>
          <td>BEATrice</td>
          <td>BEATS</td>
          <td className="text-center">S</td>
        </tr>
        <tr>
          <td>___ sale (event where secondhand goods may be purchased)</td>
          <td>Likeness in a mirror</td>
          <td>rumMAGE</td>
          <td>IMAGE</td>
          <td className="text-center">I</td>
        </tr>
        <tr>
          <td>Formal public announcement</td>
          <td>Movement to a downward orientation, as a palm</td>
          <td>PROclamATION</td>
          <td>PRONATION</td>
          <td className="text-center">N</td>
        </tr>
        <tr>
          <td>Toyota truck that shares its name with a Seattle neighbor</td>
          <td>NBC : "Today" :: ABC : ___</td>
          <td>tacoMA</td>
          <td>GMA</td>
          <td className="text-center">G</td>
        </tr>
        <tr>
          <td>Battle famously won by William Henry Harrison</td>
          <td>On ___ (walking quietly)</td>
          <td>TIPpecanOE</td>
          <td>TIPTOE</td>
          <td className="text-center">T</td>
        </tr>
        <tr>
          <td>Scale awkwardly</td>
          <td>Pop-chart-topping legend with a Best Actress Oscar</td>
          <td>ClambER</td>
          <td>CHER</td>
          <td className="text-center">H</td>
        </tr>
        <tr>
          <td>Circumvent</td>
          <td>"Quitting" or "solving", e.g., linguistically</td>
          <td>GEtaroUND</td>
          <td>GERUND</td>
          <td className="text-center">R</td>
        </tr>
        <tr>
          <td>Kitchen sieve</td>
          <td>Role for Asa Butterfield</td>
          <td>colaNDER</td>
          <td>ENDER</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>V=IR</td>
          <td>
            Song on Nirvana's "MTV Unplugged" <i>in New York</i> not
            included in the episode
          </td>
          <td>OHMslaw</td>
          <td>OHME</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>Rehab aim</td>
          <td>Tainted by burnt-coal residue</td>
          <td>SObrieTY</td>
          <td>SOOTY</td>
          <td className="text-center">O</td>
        </tr>
        <tr>
          <td>Bacteria genus best known for causing food poisoning</td>
          <td>
            Ultimate word in Frank Loesser musical title
            "The Most Happy ___"
          </td>
          <td>salmonELLA</td>
          <td>FELLA</td>
          <td className="text-center">F</td>
        </tr>
        <tr>
          <td>National animal of Scotland</td>
          <td>Volt or mile, e.g.</td>
          <td>UNIcorn</td>
          <td>UNIT</td>
          <td className="text-center">T</td>
        </tr>
        <tr>
          <td>Caught fish, in a simple way</td>
          <td>"Wood" or "tool" follower</td>
          <td>SpearED</td>
          <td>SHED</td>
          <td className="text-center">H</td>
        </tr>
        <tr>
          <td>"The End of ___" (Vitale book)</td>
          <td>X Games Ski Big Air equipment</td>
          <td>POLicing</td>
          <td>POLE</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>Fowl feathers</td>
          <td>Yodaesque, like wisdom</td>
          <td>plumAGE</td>
          <td>SAGE</td>
          <td className="text-center">S</td>
        </tr>
        <tr>
          <td>Permanent-marker brand</td>
          <td>Zoom action ___ Screen</td>
          <td>SHARpie</td>
          <td>SHARE</td>
          <td className="text-center">E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      In each pair, the clue for the shorter answer begins
      with a unique letter. Ordering these from A to Z and
      looking at the letters replacing food gives the phrase{' '}
      <Monospace>
        MAKE A DISH USING THREE OF THESE
      </Monospace>
      . Doing so will result in solvers being rewarded with
      the answer <Answerize>{ANSWER}</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
