import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'temporary-name';
const ANSWER = `RUSTY NAIL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see a sign for a "Puzzle writing workshop," with instructions to "spin
      the wheel for inspiration", along with a list of answers. We're given a
      list of puzzle titles, and find that we can apply a mechanic from the
      wheel to a title to produce one of the answers:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle name</th>
          <th>Mechanic</th>
          <th>Answer</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bizarre-o-Land</td>
          <td>Homophone</td>
          <td>
            <Monospace>BAZAAR</Monospace>
          </td>
          <td>"Bizarre" homophone</td>
        </tr>
        <tr>
          <td>Peferdefedofor!</td>
          <td>Obscure Languages</td>
          <td>
            <Monospace>WHO CAME IN 4TH</Monospace>
          </td>
          <td>
            "perdedor" in{' '}
            <a href="https://en.wikipedia.org/wiki/Jeringonza">Jeringonza</a>
          </td>
        </tr>
        <tr>
          <td>Cousteau</td>
          <td>Contain</td>
          <td>
            <Monospace>OUST</Monospace>
          </td>
          <td>cOUSTeau</td>
        </tr>
        <tr>
          <td>Seriously tangled and randomly ticklish</td>
          <td>Acrostic</td>
          <td>
            <Monospace>START</Monospace>
          </td>
          <td>First letters</td>
        </tr>
        <tr>
          <td>I, also, can't get none of it</td>
          <td>Song Lyrics</td>
          <td>
            <Monospace>SATISFACTION</Monospace>
          </td>
          <td>"(I Can't Get No) Satisfaction" (by The Rolling Stones)</td>
        </tr>
        <tr>
          <td>Prem or Tem?</td>
          <td>Antonym</td>
          <td>
            <Monospace>AFTERBIRTH</Monospace>
          </td>
          <td>"pre" to "post"; "mortem" to "birth"</td>
        </tr>
        <tr>
          <td>(Lambda) Beta Testing</td>
          <td>Anagram</td>
          <td>
            <Monospace>TABLE SETTING</Monospace>
          </td>
          <td>"Lambda" is L; anagram "L Beta Testing"</td>
        </tr>
        <tr>
          <td>Home of the Head Honcho on Earth</td>
          <td>Cryptic</td>
          <td>
            <Monospace>HEARTH</Monospace>
          </td>
          <td>H_ + EARTH, def. "Home"</td>
        </tr>
        <tr>
          <td>Follow the red... stapler</td>
          <td>ID Movies</td>
          <td>
            <Monospace>OFFICE SPACE</Monospace>
          </td>
          <td>The red stapler is a movie reference to <i>Office Space</i></td>
        </tr>
      </tbody>
    </Table>
    <p>
      When we submit a correct set of answers, we receive the second part of the
      puzzle:
    </p>
    <p>
      <i>
        Congrats! You solved the puzzles in this round! You can now give the
        placeholder meta a try.
      </i>
    </p>
    <p>
      (If we're wrong, we get a timeout of X minutes, where X is the number of
      wrong or blank answers.)
    </p>
    <p>
      Here, we use the leftover mechanism from the wheel: Synonym. As clued by
      "placeholder meta", all the feeder answers are synonyms of words that
      contain PLACE, and match the given enumeration:
    </p>
    <Table>
      <style jsx>
        {`
          td:first-child {
            font-size: 0.75rem; /* 12px */
            line-height: 1rem; /* 16px */
            white-space: pre;
          }
          td:nth-child(2) {
            white-space: pre;
          }
        `}
      </style>
      <thead>
        <tr>
          <th>Puzzle name</th>
          <th>Answer</th>
          <th colSpan={19} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bizarre-o-Land</td>
          <td>
            <Monospace>BAZAAR</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>K</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Peferdefedofor!</td>
          <td>
            <Monospace>WHO CAME IN 4TH</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>U</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Cousteau</td>
          <td>
            <Monospace>OUST</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>D</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>S</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Seriously tangled and randomly ticklish</td>
          <td>
            <Monospace>START</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>H</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>I, also, can't get none of it</td>
          <td>
            <Monospace>SATISFACTION</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>Y</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Prem or Tem?</td>
          <td>
            <Monospace>AFTERBIRTH</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>N</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>(Lambda) Beta Testing</td>
          <td>
            <Monospace>TABLE SETTING</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>You Beheaded Monique</td>
          <td>
            <Monospace>UNIQUE</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>F</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>I</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Follow the red... stapler</td>
          <td>
            <Monospace>OFFICE SPACE</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">
            <Monospace>W</Monospace>
          </td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
          <td className="text-center">
            <Monospace>K</Monospace>
          </td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
          <td className="text-center bg-[#b6d7a8]">
            <Monospace>L</Monospace>
          </td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading down the highlighted squares, we find that this puzzle was killed
      by a <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        I really wanted this one to be an actual meta for our
        prehunt&mdash;considering we're the team who procrastinates by definition, a
        placeholder meta was very much a part of our DNA, but alas, we ran out
        of time to write prehunt.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
