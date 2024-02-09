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

const SLUG = 'line-please';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          <b>AND NOW… A New Prologue for <i>Romeo &amp; Juliet</i>!</b>
        </p>
        <p>(amidst constant interruptions from the gallery)</p>
        <div className="ml-3 sm:ml-12 space-y-3 sm:space-y-0">
          <div className="ml-3 mb-3 space-y-0" style={{ float: 'right' }}>
            Alc.
            <br />
            Ant.
            <br />
            Bea.
            <br />
            Cap.
            <br />
            Con.
            <br />
            Cor.
            <br />
            Fal.
            <br />
            Fes.
            <br />
            Gui.
            <br />
            Hal
            <br />
            Ham.
            <br />
            Jul.
            <br />
            K. Hen.
            <br />
            K. Ric.
            <br />
            Leo.
            <br />
            Mac.
            <br />
            Ros.
            <br />
            Soo.
            <br />
            Tri.
          </div>
          <ul className="list-none pl-0 space-y-3 sm:space-y-0">
            <li>So, there's two fams, OGs—Himself is here</li>
            <li>To judge and punish both—with dead-ass props.</li>
            <li>(Verona was their house, before I died</li>
            <li>I was despised by every living man,</li>
            <li>My brother and his happy little band</li>
            <li>"The Few," he called them then, back in the day.)</li>
            <li>New bloods fought (but TBH flow'rs can't fight</li>
            <li>An early frost. They just, like, die.) The rest</li>
            <li>Is silence over who dissed Pops's Pops.</li>
            <li>And bros in pow'r—their hungry faces lean—</li>
            <li>From cloak and dagger bagmen swole and grey,</li>
            <li>For Vanity they looked the other way.</li>
            <li>Out of these rival gangs, many could end</li>
            <li>Their hook-up with a gallows, who ruled the city,</li>
            <li>Two teens made plans that led them both to grief,</li>
            <li>Which be so proud, made their 'rents low-key stoop,</li>
            <li>Instructed by their sorrow: "Yo, do quickly</li>
            <li>What y'all has gotta do so well: to die."</li>
            <li>The parents went all extra, sitting round</li>
            <li>And mourning Kings now decades underground,</li>
            <li>Until they took a patient, gentle step</li>
            <li>Towards love, rest, weariness, like, on the pity,</li>
            <li>And walked it back: "This weird friend zone we share</li>
            <li>In bed is misery, so, be aware,</li>
            <li>That by mid-March our old feud's done. No lie."</li>
            <li>The story of this double suicide,</li>
            <li>And parents' rage, should make you kneel and pray:</li>
            <li>Thank God you backed off this town you despise.</li>
            <li>The world elsewhere's continuing to grow.</li>
            <li>Which only beastly men (or manly beasts,</li>
            <li>Y'know, right?) stopped when their own shorties died.</li>
            <li>The next two hours we'll drop you all we know</li>
            <li>At which time, with none left to protest, hearts</li>
            <li>Of stone, and even stonier in parts,</li>
            <li>I swear it. Turn your cell phones off and hear</li>
            <li>That lovers' tale you slept through Freshman year.</li>
          </ul>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
