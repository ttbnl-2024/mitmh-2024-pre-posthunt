import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';

const SLUG = 'squid-goals';
const ANSWER = `PERFORM A CHEER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This puzzle is a list of cryptic clues, flavored with the text "Yours
      truly is definitely enough of an individualist to defy the five-word
      conventional wisdom." The conventional wisdom in this case is that
      "There's no I in 'Team'".
    </p>
    <p>
      Each cryptic clue has an answer which is a major league sports team's name
      (sans the city). The wordplay for each clue, however, has an I replacing
      one of the other letters in a team name which does not contain an I.
    </p>
    <p>The clue answers are as follows:</p>
    <ul>
      <li>
        <Monospace>tRAITORS → RAPTORS (P)</Monospace>
      </li>
      <li>
        <Monospace>BING + ALS → BENGALS (E)</Monospace>
      </li>
      <li>
        <Monospace>KIA + KEN → KRAKEN (R)</Monospace>
      </li>
      <li>
        <Monospace>IALCONS (hidden) → FALCONS (F)</Monospace>
      </li>
      <li>
        <Monospace>RIYALS (double definition) → ROYALS (O)</Monospace>
      </li>
      <li>
        <Monospace>PAD(IE)S → PADRES (R)</Monospace>
      </li>
      <li>
        <Monospace>RAISe → RAMS (M)</Monospace>
      </li>
      <li>
        <Monospace>GI+LAX+mysterY → GALAXY (A)</Monospace>
      </li>
      <li>
        <Monospace>I+ARDINALS (AND LIARS anag.) → CARDINALS (C)</Monospace>
      </li>
      <li>
        <Monospace>PAN + TIERS → PANTHERS (H)</Monospace>
      </li>
      <li>
        <Monospace>RA(V)INS → RAVENS (E)</Monospace>
      </li>
      <li>
        <Monospace>NITS (ISN'T anag.) → NETS (E)</Monospace>
      </li>
      <li>
        <Monospace>PIE(DATO)RS (TOAD anag.) → PREDATORS (R)</Monospace>
      </li>
    </ul>
    <p>
      The replaced letters spell <Answerize>PERFORM A CHEER</Answerize>. Once we
      submit this action to HQ, we receive the final puzzle answer.
    </p>
    <AuthorsNotes>
      <p>
        The puzzle title, "Squid Goals", also puts an I in Team when it changes
        SQUAD to SQUID.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
