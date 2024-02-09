import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/opposites-attract/0.png';
import image1 from 'assets/solutions/opposites-attract/1.png';
import image2 from 'assets/solutions/opposites-attract/2.png';
import image3 from 'assets/solutions/opposites-attract/3.png';
import image4 from 'assets/solutions/opposites-attract/4.png';
import image5 from 'assets/solutions/opposites-attract/5.png';

const SLUG = 'opposites-attract';
const ANSWER = `FEEING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The answer to each clue goes into one of the pieces at the bottom, each of
      which represents a (mostly U-shaped) magnet - we need to identify which
      answer goes into each piece of equal length. The letters in the shaded
      regions at the beginning and end of each piece each form a word, and
      pieces must be arranged such that the gray word from one piece lines up
      end-to-end with the gray word from another piece having an opposite
      meaning. For example, <Monospace>HERE</Monospace> misplaced against{' '}
      <Monospace>ABSENT</Monospace>. The numbered pieces (which get the answers
      of the correspondingly numbered clues) don't rotate, but all the other
      pieces do (but don't get reflected).
    </p>
    <p>
      Note that except for the numbered pieces at the top, pieces are in
      alphabetical order by answer. Once properly placed, each numbered piece is
      part of a separate shape, which form letters in the orientation of the
      numbered pieces, and spell out in the order of the numbers the answer{' '}
      <Answerize>FEEING</Answerize>.
    </p>
    <Appendix>
      <p>
        The answers to each clue and correct piece arrangements are shown below:
      </p>
      <ol>
        <li>Hecatolite, as it's commonly known: MOONSTONE</li>
        <li>Courtroom address: YOUR HONOR</li>
        <li>Major American Revolutionary War battle site: BUNKER HILL</li>
        <li>Voice of a certain Shinigami, in 2017: WILLEM DAFOE</li>
        <li>
          Where Saturday is the hardest day of the week: NEW YORK TIMES
          CROSSWORD
        </li>
        <li>(e), often: NONE OF THE ABOVE</li>
      </ol>
      <ul className="mt-4">
        <li>Black market items: CONTRABAND</li>
        <li>"Butt crack", anatomically: GLUTEAL CLEFT</li>
        <li>California city named after Frank E. Brown: MORENO VALLEY</li>
        <li>
          Cascade caused by a high-energy decay in physics: PARTICLE SHOWER
        </li>
        <li>
          Common advice given to college freshmen to help alleviate empty nest
          syndrome: CALL YOUR MOTHER
        </li>
        <li>Entirely lacking illumination: PITCH BLACK</li>
        <li>Famous American screwball comedy: HIS GIRL FRIDAY</li>
        <li>
          Famous WW1 anti-war novel banned by Nazi Germany: ALL QUIET ON THE
          WESTERN FRONT
        </li>
        <li>Fieri's flavorful forte: GASTRONOMY</li>
        <li>Follows a well-thought-out strategy: PLAYS ONES CARDS RIGHT</li>
        <li>
          Football-themed term for someone criticizing choices with the benefit
          of hindsight: MONDAY MORNING QUARTERBACK
        </li>
        <li>HAHAHA-HAHAHAHAHA cartoon mad scientist from the '90s: MANDARK</li>
        <li>Having nothing to one's name: PENNILESS</li>
        <li>
          Increase rapidly, like the population of an r-selected species: GROW
          EXPONENTIALLY
        </li>
        <li>It takes a little over 8 minutes to reach us: SUNLIGHT</li>
        <li>Large-scale agricultural producer: FACTORY FARM</li>
        <li>Means of transportation in BioShock: BATHYSPHERE</li>
        <li>"Oh come on, you've got to be kidding me": FOR CRYING OUT LOUD</li>
        <li>
          Overarching set of regulations within which court cases are decided:
          LEGAL FRAMEWORK
        </li>
        <li>Piece that creates friction to stop a wheel: BRAKE BLOCK</li>
        <li>Pitbull: MISTER WORLDWIDE</li>
        <li>
          Single by The Who, or "I'm not so gullible this time!": WONT GET
          FOOLED AGAIN
        </li>
        <li>
          Speeding up the decline of, in an idiom believed to come from the
          logging industry: PUTTING THE SKIDS UNDER
        </li>
        <li>Stop believing something is true: LOSE ONES FAITH IN</li>
        <li>Tough ___ (female survivor of many hardships): OLD BROAD</li>
        <li>
          Unique code used for registering a copy of a computer program:
          SOFTWARE KEY
        </li>
        <li>Votes sent through the postal system, often: ABSENTEE BALLOTS</li>
        <li>Wasn't good enough, as in a golf tournament: MISSED THE CUT</li>
      </ul>
      <h2>Appendix</h2>
      <p>
        Clue chains given in counter-clockwise direction, starting from the
        numbered clue. Opposite pairs are highlighted.
      </p>
      <ol>
        <li>
          MOONSTONE (cw), SUNLIGHT, MANDARK (cw), PARTICLE SHOWER, BATHYSPHERE,
          ABSENTEE BALLOTS
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image0}
            title=""
          />
        </li>
        <li>
          YOUR HONOR, CONTRABAND (cw), FOR CRYING OUT LOUD, SOFTWARE KEY, BRAKE
          BLOCK (cw), GASTRONOMY
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image1}
            title=""
          />
        </li>
        <li>
          BUNKER HILL (cw), FACTORY FARM, LEGAL FRAMEWORK, PLAYS ONES CARDS
          RIGHT, GLUTEAL CLEFT (cw), PITCH BLACK (cw)
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image2}
            title=""
          />
        </li>
        <li>
          WILLEM DAFOE, GROW EXPONENTIALLY (cw), MISSED THE CUT (cw), MISTER
          WORLDWIDE, LOSE ONES FAITH IN (cw), WONT GET FOOLED AGAIN (cw)
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image3}
            title=""
          />
        </li>
        <li>
          NEW YORK TIMES CROSSWORD, PENNILESS, MORENO VALLEY, OLD BROAD (cw)
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image4}
            title=""
          />
        </li>
        <li>
          NONE OF THE ABOVE (cw), ALL QUIET ON THE WESTERN FRONT, MONDAY
          MORNING QUARTERBACK (cw), HIS GIRL FRIDAY (cw), CALL YOUR MOTHER
          (cw), PUTTING THE SKIDS UNDER
          <SheetableImage
            className="mx-auto py-4"
            alt=""
            src={image5}
            title=""
          />
        </li>
      </ol>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
