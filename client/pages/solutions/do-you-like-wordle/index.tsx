import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/do-you-like-wordle/do-you-like-wordle-sol-img1.png';

const SLUG = 'do-you-like-wordle';
const ANSWER = `GUTTURALS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Solvers are presented with 30 wordle boards they can solve simultaneously.
      However, it's impossible to win all of them, since there are only 6
      attempts in total. The only option left after using those up is to
      restart, which resets the boards with all new words, which are randomly
      generated.
    </p>
    <p>
      A line across the top of the page reads 1 to 30, which keeps track of
      which boards are solved. When a board is solved, the corresponding color
      on this board changes. The color of a solved board changes to either green
      or blue.
    </p>
    <p>
      While words get reset randomly at the start of every new game, there is an
      underlying "secret" letter that corresponds to each board that does NOT
      change when the puzzle resets. If the secret letter was used at all during
      the solve attempt of a correct board, it will make the solved board number
      turn blue. If the secret letter was NOT used, once solved, the
      corresponding board number will turn green. When the game resets, the
      secret letter doesn't change, but the coloring does reset (the default for
      unsolved boards is white).
    </p>
    <p>
      After playing several games, we may develop an understanding for what’s
      triggering the change in color to blue and try cataloging the missing
      numbers. They spell out BRING HQ X SMALL TOKEN OF TEAM'S EMOJI.
    </p>
    <p>
      Once the team brings the small gift to HQ, we offer them the real
      puzzle's answer, <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      Interpretation of the colors in the first three solved
      boards, which correspond to the extracted "B" "R" and "I".
    </p>
    <ol>
      <li>
        First board was solved, but the letter B was not used throughout its
        solution, flashing green on the dashboard at the top.
      </li>
      <li>
        Second board was solved, the letter R was used in the guessing attempts
        (regardless of whether they're in the specific board's solution),
        flashing blue on the dashboard.
      </li>
      <li>Third board was solved, using the letter I. </li>
      <li>
        Fourth board (and all others remaining) were not solved, remaining white
        regardless of whether the right letters are used or not.{' '}
        <SheetableImage alt="" src={image0} title="" />
      </li>
    </ol>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
