import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/the-other-scottish-play/0.png';

const SLUG = 'the-other-scottish-play';
const ANSWER = `BASOTHO`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The Other Scottish Play transforms a night at the long-running immersive
      theater show <i>Sleep No More</i> into a puzzle, using the show's looping
      structure and character interactions to guide players through the night.
    </p>
    <p>
      The first hint that this puzzle is about <i>Sleep No More</i> is in the
      puzzle's title itself - The Other Scottish Play references theater fans'
      superstitious habit of referring to MacBeth as "The Scottish Play", and{' '}
      <i>Sleep No More</i> is an immersive retelling of MacBeth, set in the
      fictional town of Gallow Green in Scotland.
    </p>
    <p>
      Other indications also nudge us in that direction: ranging from the
      double-sided door and pineapple logo that replicates the entrance to the
      McKittrick Hotel, descriptions of iconic scenes from the play in the
      puzzle itself, quotes from some of the scenes… and an acrostic made up of
      the transition sentences that spells out{' '}
      <Monospace>SLEEP NO MORE</Monospace>.
    </p>
    <p>
      The first phase of the puzzle involves identifying which{' '}
      <i>Sleep No More</i> characters were depicted during each scene, mirroring{' '}
      <i>Sleep No More</i>'s own three loop structure that follows the events of
      a single night through three repeated cycles.
    </p>
    <Table className="scene-table">
      <thead>
        <tr>
          <th>Scene</th>
          <th>Character</th>
          <th>Loop</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shaving scene in the study</td>
          <td>
            <Monospace>DUNCAN</Monospace>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>Handed a sword in the bedroom</td>
          <td>
            <Monospace>BANQUO</Monospace>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>Dancing with a door in the mezzanine</td>
          <td>
            <Monospace>MACDUFF</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>Smothered with a pillow in the bedroom</td>
          <td>
            <Monospace>DUNCAN</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>Tearful dancing in the hotel lobby</td>
          <td>
            <Monospace>BOY WITCH</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>Washing off blood in the apothecary</td>
          <td>
            <Monospace>BALD WITCH</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hung by a noose in the ballroom</td>
          <td>
            <Monospace>MACBETH</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>Teatime and palm reading in the hut</td>
          <td>
            <Monospace>MATRON</Monospace>
          </td>
          <td>3</td>
        </tr>
        <tr>
          <td>Chance meeting in the detective agency</td>
          <td>
            <Monospace>AGNES</Monospace>
          </td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Above the door to the building a series of nine images appear, along with
      dotted enumerations to indicate the lengths of the respective words. Each
      of these symbols represent "trinkets" that <i>Sleep No More </i>attendees
      are handed or can obtain over the course of the evening by engaging in
      "one-on-ones". And each item is hidden in one of the scenes, using
      increasingly obscuring methods with every loop.
    </p>
    <Table className="object-table">
      <thead>
        <tr>
          <th>Scene</th>
          <th>Object</th>
          <th>Loop</th>
          <th>Method</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shaving scene in the study</td>
          <td>
            <Monospace>UMBRELLA</Monospace>
          </td>
          <td>1</td>
          <td>Plain Text</td>
        </tr>
        <tr>
          <td>Handed a sword in the bedroom</td>
          <td>
            <Monospace>PAPER BOAT</Monospace>
          </td>
          <td>1</td>
          <td>Plain Text</td>
        </tr>
        <tr>
          <td>Dancing with a door in the mezzanine</td>
          <td>
            short<Monospace>CUT CARD</Monospace>io
          </td>
          <td>2</td>
          <td>Sequential Letters</td>
        </tr>
        <tr>
          <td>Smothered with a pillow in the bedroom</td>
          <td>
            de<Monospace>FEAT HER</Monospace>alded
          </td>
          <td>2</td>
          <td>Sequential Letters</td>
        </tr>
        <tr>
          <td>Tearful dancing in the hotel lobby</td>
          <td>
            c<Monospace>LOCK ET</Monospace>ched
          </td>
          <td>2</td>
          <td>Sequential Letters</td>
        </tr>
        <tr>
          <td>Washing off blood in the apothecary</td>
          <td>
            f<Monospace>ACE CARD</Monospace>inal
          </td>
          <td>2</td>
          <td>Sequential Letters</td>
        </tr>
        <tr>
          <td>Hung by a noose in the ballroom</td>
          <td>
            t<Monospace>HE CATERING</Monospace>
          </td>
          <td>2</td>
          <td>Sequential Letters</td>
        </tr>
        <tr>
          <td>Teatime and palm reading in the hut</td>
          <td>
            <Monospace>CANDY</Monospace>
          </td>
          <td>3</td>
          <td>Acrostic Sentences</td>
        </tr>
        <tr>
          <td>Chance meeting in the detective agency</td>
          <td>
            <Monospace>TEACUP</Monospace>
          </td>
          <td>3</td>
          <td>Acrostic Sentences</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Indexing into the character name by the loop they appear in, and sorting
      the scenes by their ordering on the door gives the final instruction:{' '}
      <Monospace>DON A BAUTA</Monospace>.
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto w-full md:w-[80%]"
      />
    </p>
    <Table className="extraction-table">
      <thead>
        <tr>
          <th>
            <i>Sleep No More</i> Trinket
          </th>
          <th>Scene</th>
          <th>Character</th>
          <th>Loop</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>UMBRELLA</Monospace>
          </td>
          <td>Shaving scene in the study</td>
          <td>
            <Monospace>DUNCAN</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LOCKET</Monospace>
          </td>
          <td>Tearful dancing in the hotel lobby</td>
          <td>
            <Monospace>BOY WITCH</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TEACUP</Monospace>
          </td>
          <td>Chance meeting in the detective agency</td>
          <td>
            <Monospace>AGNES</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ACE CARD</Monospace>
          </td>
          <td>Washing off blood in the apothecary</td>
          <td>
            <Monospace>BALD WITCH</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PAPER BOAT</Monospace>
          </td>
          <td>Handed a sword in the bedroom</td>
          <td>
            <Monospace>BANQUO</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CUT CARD</Monospace>
          </td>
          <td>Dancing with a door in the mezzanine</td>
          <td>
            <Monospace>MACDUFF</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FEATHER</Monospace>
          </td>
          <td>Smothered with a pillow in the bedroom</td>
          <td>
            <Monospace>DUNCAN</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CANDY</Monospace>
          </td>
          <td>Teatime and palm reading in the hut</td>
          <td>
            <Monospace>MATRON</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HECATE RING</Monospace>
          </td>
          <td>Hung by a noose in the ballroom</td>
          <td>
            <Monospace>MACBETH</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      "Don A Bauta" makes sense as the final instruction, since an iconic
      element of <i>Sleep No More</i> involves participants putting on a
      Venetian mask known as a "bauta" to enter the experience.
    </p>
    <p>
      Teams that follow that instruction and go to headquarters while wearing a
      mask would receive an envelope with a <i>Sleep No More</i> card (used as
      entrance ticket into the looping experience), as well as a card with the
      final answer: <Answerize>{ANSWER}</Answerize>. Remote teams or teams that
      submit a picture would receive a picture of the card with the answer, next
      to a<i>Sleep No More</i> card.
    </p>
    <AuthorsNotes>
      <p>
        Through the years, various <i>Sleep No More</i> communities have done an
        incredible job of documenting the experience. This puzzle particularly
        benefited from{' '}
        <a href="https://beyondthelines2016.wordpress.com/2016/01/02/snm/">
          Beyond the Lines' documentation of character loops
        </a>
        , and the r/SleepNoMore subreddit's{' '}
        <a href="https://www.reddit.com/r/sleepnomore/comments/f4mbo4/sleep_no_more_breakdown_google_sheet">
          Google Sheet mapping out character interactions over time
        </a>
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .scene-table td:nth-child(2),
      .extraction-table td:nth-child(2n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .scene-table td:nth-child(3),
      .object-table td:nth-child(3),
      .extraction-table td:nth-child(n + 4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
