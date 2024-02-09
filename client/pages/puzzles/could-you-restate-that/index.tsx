import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'could-you-restate-that';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>… It's how you play the game.</FlavorText>

        <table className="puzzle-table">
          <tbody>
            <tr>
              <td>(2 5 4 3?)</td>
              <td>
                That's a shame; even unfriendly sea dogs deserve commercial
                representation.
              </td>
            </tr>
            <tr>
              <td>(4 3 3 6?)</td>
              <td>
                It did not compel us, but remedies WERE the primary issue we
                discussed.
              </td>
            </tr>
            <tr>
              <td>(3 4?)</td>
              <td>You might call it that; it's where they keep their combs.</td>
            </tr>
            <tr>
              <td>(5 5 3 5 3?)</td>
              <td>
                For several reasons, yes. She's an uptown girl, and she is way
                more interested in highbrow dad jokes.
              </td>
            </tr>
            <tr>
              <td>(6 3 4?)</td>
              <td>No, silly - Allison married Liz, not that boy.</td>
            </tr>
            <tr>
              <td>(2 2 3?)</td>
              <td>
                Well, I did suggest our being "courteous", but not like that…
              </td>
            </tr>
            <tr>
              <td>(6 4 4, 6 4 6?)</td>
              <td>Whoa! Do you really hate that Jedi's mullet that much?</td>
            </tr>
            <tr>
              <td>(7 4 5, 5 3 3?)</td>
              <td>
                Correct - despite eschewing communal weight training, they got
                their costumed housemates sick.
              </td>
            </tr>
            <tr>
              <td>(2 6 5?)</td>
              <td>
                Figuratively speaking, if the next part of the puzzle causes you
                much anguish, you might try that.
              </td>
            </tr>
            <tr>
              <td>(4 5 3?)</td>
              <td>OK, but when it's sunny, let 'er rip.</td>
            </tr>
            <tr>
              <td>(4, 5 4?)</td>
              <td>Absolutely - winter icons are no lie.</td>
            </tr>
            <tr>
              <td>(2, 7 3 6 4 4 4?)</td>
              <td>
                I hope not, son! Emanuel shouldn't attack any fried foods.
              </td>
            </tr>
            <tr>
              <td>(4 3, 5?)</td>
              <td>Well, I can't rob the Union Pacific by myself, now can I?</td>
            </tr>
            <tr>
              <td>(3, 6 4?)</td>
              <td>
                Non merci, I prefer plants that are sweet but not insanely
                spicy.
              </td>
            </tr>
            <tr>
              <td>(3 4, 5 5, 8?)</td>
              <td>
                I do; no matter which you pull, all those estheticians die.
              </td>
            </tr>
            <tr>
              <td>(4 3 6?)</td>
              <td>No, just ears, as it is said.</td>
            </tr>
            <tr>
              <td>(4 3 5: 3 3?)</td>
              <td>
                I suppose that perfume smells a bit fishy, but it's 100% herbal,
                I assure you.
              </td>
            </tr>
            <tr>
              <td>(3 4, 4?)</td>
              <td>
                You don't need an aficionado to tell you which end of that rhino
                is which.
              </td>
            </tr>
            <tr style={{ borderTop: '1px solid black' }}>
              <td>(4 3 4, 4, 3?)</td>
              <td>
                When you put it that way, it sounds like you've finally found
                what you needed!
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          AD, AGREEING, ALOE, ALONE, AND, ANY, ATOMIC, BEE, BOO, BORED, BUTCH,
          CANE, CANNOLI, CAUCUS, CHURRO, CORNY, CUR, DAVEY'S, DEAD, DELAY, DEN,
          DO, DUMPS, EEL, EQUAL, FERRET, FIERCE, FORT, FURRIES, GAS, GO, GRAY,
          HAD, HAIR, HARASS, HAS, HER, HER, HICK'S, ILL, JACK, KNEE, LEON,
          LEVER, LUKE, MA, MEN, MORE, NERD, OUI, QUAY, RAHM, REAL, REASON, RUMP,
          SANTA, SCENT, SON, SPA, SPEECH, STAB, START, SUE, TONE, WALL, WE,
          WE'VE, WILL, WORDS, YOU, ZOO
        </p>
      </div>

      <style jsx global>{`
        .puzzle-table td:nth-child(1) {
          text-align: center;
          padding: 0.5em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
