import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';

const SLUG = 'blanks';
const ANSWER = `ADORN, CHLOE, CRONE, IDEAL, SCORE, WANDS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We are presented with solely a set of numbered blanks:</p>
    <table className="mt-6 mx-auto font-mono text-center">
      <tbody>
        <tr>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">&nbsp;</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">&nbsp;</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
          <td className="px-0.5 text-xl">_</td>
        </tr>
        <tr>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">2</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">4</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">1</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">3</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
          <td className="px-0.5 text-lg">5</td>
          <td className="px-0.5 text-lg">&nbsp;</td>
        </tr>
      </tbody>
    </table>

    <p>
      Initially, it appears as though there is nothing to do here. While solving
      the other puzzles in the round, we extract phrases referring to other
      puzzles in the round. This suggests to us to look for the phrases to put
      on the blanks in the other puzzles. There should be one reasonable phrase
      for the blanks in each puzzle, as follows:
    </p>
    <ul>
      <li>
        After solving the MU puzzle (up) in the Text Adventure, we are given a
        message that includes <Monospace>COAXED DOWN ANYWISE</Monospace>. This
        goes on the blanks and extracts <Answerize>WANDS</Answerize>.
      </li>
      <li>
        One of the clues in the Crossword puzzle will be{' '}
        <Monospace>BURMAN RICE NOODLES</Monospace>, which goes on the blanks to
        extract <Answerize>CRONE</Answerize>.
      </li>
      <li>
        Part of the leftover letters in the Word Search will spell the phrase{' '}
        <Monospace>MIDAIR BOAR LOOPING</Monospace>, which apart from suggesting
        that pigs fly, means nothing and doesn't relate to the other puzzles,
        but it fits on the blanks to extract <Answerize>ADORN</Answerize>.
      </li>
      <li>
        One of the messages we can extract from the Matchmaker spells{' '}
        <Monospace>ENHALO NICE PLUMBER</Monospace>. But there's no such
        character to be found; this also goes on the blanks to extract{' '}
        <Answerize>CHLOE</Answerize>.
      </li>
      <li>
        The flavor text of the Chemistry puzzle will say we were able to have{' '}
        <Monospace>MEDUSA STIR VESSELS</Monospace>. This puzzle doesn't have a
        lot of text, apart from the chemicals involved, and the extraction does
        something else. This phrase goes on the blanks to extract{' '}
        <Answerize>IDEAL</Answerize>.
      </li>
      <li>
        The Akari (a puzzle also called Light Up) again does not have text, and
        its extracted text does something else, but the flavor text suggests we
        are lighting up the grid to <Monospace>ANCHOR LOST HOMBRES</Monospace>.
        This phrase goes on the blanks to extract <Answerize>SCORE</Answerize>.
      </li>
    </ul>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
