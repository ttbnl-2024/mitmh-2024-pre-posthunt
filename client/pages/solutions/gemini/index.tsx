import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'gemini';
const ANSWER = `DON'T POLLUX IT UP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is the metapuzzle for the Twin Cities / Gemini round, and uses the
      following 7 feeders.
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <a href="/puzzles/colorful-connections">Colorful Connections</a>
          </td>
          <td>
            <Clue>EASER</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/inaugural-funky-stickperson-contest">
              Inaugural Funky Stickperson Context
            </a>
          </td>
          <td>
            <Clue>SENDER</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/opposites-attract">Opposites Attract</a>
          </td>
          <td>
            <Clue>FEEING</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/retro-chess-puzzle">Retro Chess Puzzle</a>
          </td>
          <td>
            <Clue>LOSING</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/divine-intervention">Divine Intervention</a>
          </td>
          <td>
            <Clue>AFFIED</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/triangles">Triangles</a>
          </td>
          <td>
            <Clue>DISCS</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/puzzles/shifting-times">Shifting Times</a>
          </td>
          <td>
            <Clue>SEED</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In this meta, we are presented with a list of ratings from each of the
      twins. If we count the total number of stars given in each row, we find
      that the count given matches the lengths of the feeder answers. It turns
      out that each answer can be transformed into two different English words,
      by splitting them into two parts, and inserting one of two different
      letters, with the ratings being used as enumerations for the part before
      the inserted letter, and the part after the inserted letter.
    </p>
    <p>
      For example, the first set of ratings is 3 and 3. This applies to the
      answer <Clue>FEEING</Clue>, turning it into{' '}
      <Clue>
        FEE<b>(D)</b>ING
      </Clue>{' '}
      or{' '}
      <Clue>
        FEE<b>(L)</b>ING
      </Clue>
      , with 3 letters before the new letter, and 3 after. <Clue>D</Clue> and{' '}
      <Clue>L</Clue> are the only two letters that can go in this space. We
      cannot use this 3 3 split for <Clue>SENDER</Clue>, as there are no valid
      English words matching the pattern{' '}
      <Clue>
        "SEN<b>?</b>DER"
      </Clue>
      .
    </p>
    <p>The full list of transformations is as follows:</p>
    <ul>
      <li>
        <Clue>
          FEE<b>(D/L)</b>ING
        </Clue>
      </li>
      <li>
        <Clue>
          LO<b>(O/U)</b>SING
        </Clue>
      </li>
      <li>
        <Clue>
          AFFI<b>(N/X)</b>ED
        </Clue>
      </li>
      <li>
        <Clue>
          EAS<b>(T/I)</b>ER
        </Clue>
      </li>
      <li>
        <Clue>
          S<b>(P/T)</b>EED
        </Clue>
      </li>
      <li>
        <Clue>
          DISC<b>(O/U)</b>S
        </Clue>
      </li>
      <li>
        <Clue>
          S<b>(L/P)</b>ENDER
        </Clue>
      </li>
    </ul>

    <p>
      Attempting to create the final answer by using the two letters from the
      first feeder, then the two letters from the second and so on fails to
      produce a valid answer. Instead, we must take one letter from each answer,
      in order, and then later take the second letter from each answer. Which
      letter of each answer comes first and which comes later is not specified,
      but there's only one sensible phrase we can get:{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        This meta was inspired by the puzzle{' '}
        <a href="https://puzzles.mit.edu/2015/puzzle/fill_in_the_blanks/">
          Fill In The Blanks
        </a>{' '}
        from 2015.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
