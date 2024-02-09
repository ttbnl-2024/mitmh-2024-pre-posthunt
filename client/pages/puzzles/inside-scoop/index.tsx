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

const SLUG = 'inside-scoop';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <ul className="list-none pl-0">
          <li>Area where margarita salt is placed</li>
          <li>
            Bacteria genus best known for causing food poisoning
          </li>
          <li>Battle famously won by William Henry Harrison</li>
          <li>Black, in heraldry</li>
          <li>Caught fish, in a simple way</li>
          <li>Circumvent</li>
          <li>Container sought by Indiana Jones</li>
          <li>Dante's guide through Paradise</li>
          <li>David Cameron and Captain Hook alma mater</li>
          <li>Electromagnetic-field force carrier</li>
          <li>Extended to the max, like a rope</li>
          <li>Fielders in Cincinnati</li>
          <li>Formal public announcement</li>
          <li>Fowl feathers</li>
          <li>Graph-paper pattern</li>
          <li>Home to Île de la Grande Jatte</li>
          <li>"Isn’t It Romantic?" lyricist</li>
          <li>Jemima and Bee, for two</li>
          <li>Kerouac, Burroughs, and other poets</li>
          <li>Kitchen sieve</li>
          <li>Lifts the curtain</li>
          <li>Likeness in a mirror</li>
          <li>Movement to a downward orientation, as a palm</li>
          <li>Name shared by three English kings</li>
          <li>National animal of Scotland</li>
          <li>NBC : "Today" :: ABC : ___</li>
          <li>On ___ (walking quietly)</li>
          <li>Opiate found in Tylenol 3</li>
          <li>Oscar nominee Jimmy or Kristen, e.g.</li>
          <li>Permanent-marker brand</li>
          <li>
            Pop-chart-topping legend with a Best Actress Oscar
          </li>
          <li>"Quitting" or "solving", e.g., linguistically</li>
          <li>Rehab aim</li>
          <li>Removed, as from a magazine</li>
          <li>Repository for historical documents</li>
          <li>Role for Asa Butterfield</li>
          <li>
            ___ sale (event where secondhand goods may be
            purchased)
          </li>
          <li>Scale awkwardly</li>
          <li>
            Song on Nirvana's "MTV Unplugged" in New York not
            included in the episode
          </li>
          <li>Sustenance</li>
          <li>Tainted by burnt-coal residue</li>
          <li>"The End of ___" (Vitale book)</li>
          <li>
            Toyota truck that shares its name with a Seattle
            neighbor
          </li>
          <li>
            Ultimate word in Frank Loesser musical title "The
            Most Happy ___"
          </li>
          <li>V=IR</li>
          <li>Volt or mile, e.g.</li>
          <li>"Wood" or "tool" follower</li>
          <li>Word game invented by Alfred Butts</li>
          <li>Wrestled (with)</li>
          <li>X Games Ski Big Air equipment</li>
          <li>Yodaesque, like wisdom</li>
          <li>Zoom action ___ Screen</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
