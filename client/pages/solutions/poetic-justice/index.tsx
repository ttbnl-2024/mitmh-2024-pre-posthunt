import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'poetic-justice';
const ANSWER = `PLUTOCRAT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The flavor text hints at heroic couplets, which are pairs of rhyming lines,
      each with ten syllables. We attempt to form heroic couplets with the given
      lines. Each line has a unique partner line that rhymes with it. This
      allows us to form the following pairs:
    </p>
    <div className="text-center">
      <p>
        A forceful statement of something that is true
        <br />A guess about events you'll later view
      </p>
      <p>
        A place an actor might be told to go
        <br />
        To be scared of a nasty crowd at a show
      </p>
      <p>
        Amendment or law when still unapproved
        <br />
        Condition of longing; wanting life improved
      </p>
      <p>
        Anoint skin in these oil transmission routes
        <br />
        Some non-wealth forfeitures. Could be anti-suits
      </p>
      <p>
        Dropping too much food into stomach's pit
        <br />
        Way too much dust within MacBook causes it
      </p>
      <p>
        Like a bird that is naked and can not fly
        <br />
        To not have a parent who is a guy
      </p>
      <p>
        Products for those who are sick (doctor prescribes)
        <br />
        Interventions between two warring tribes
      </p>
      <p>
        Servers who supervise their other givers
        <br />
        The tops or sources of streams or rivers
      </p>
      <p>
        The water in club soda when it's sold
        <br />
        Used fourteen decays as leads to find how old
      </p>
      <p>
        They live in one shelter; commonly horses
        <br />
        Ties when next turn has no movement courses
      </p>
    </div>
    <p>
      However, careful examination reveals that these are actually not heroic
      couplets. One line in the pair has ten syllables, but the other line has
      eleven (i.e., it has an extra syllable). This indicates that we are going to
      have to figure out how to remove a syllable to make the lines "more
      heroic." The question is: which syllable?
    </p>
    <p>
      Beginning to solve the clues in each line, we realize that the two words
      clued between paired lines are very similar. In fact, they are the same
      exact same words except the line with eleven syllables contains an extra
      letter. We also notice that the 10-syllable clue contains ten letters and
      the 11-syllable clue contains 11 letters, emphasizing the connection
      between letters and syllables. These extra letters are the letters A&ndash;J,
      which allows us to order the couplets.
    </p>
    <p>
      The position of the extra letter corresponds to the "extra" syllable in
      the clue. Indexing into the syllable count using the position of the extra
      letter, gives the clue phrase{' '}
      <Monospace>SOMEONE WHO LEADS A NATION WITH THEIR WEALTH</Monospace>. This
      clues the final answer <Answerize>PLUTOCRAT</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Answer</th>
          <th>Line</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>PREDIC[A]TION</Monospace>
          </td>
          <td>
            A forceful statement of <b>SOME</b>thing that is true
          </td>
          <td rowSpan={2}>
            <Monospace>SOME</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PREDICTION</Monospace>
          </td>
          <td>A guess about events you'll later view</td>
        </tr>
        <tr>
          <td>
            <Monospace>STA[B]LEMATES</Monospace>
          </td>
          <td>
            They live in <b>ONE</b> shelter; commonly horses
          </td>
          <td rowSpan={2}>
            <Monospace>ONE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>STALEMATES</Monospace>
          </td>
          <td>Ties when next turn has no movement courses</td>
        </tr>
        <tr>
          <td>
            <Monospace>MEDI[C]ATIONS</Monospace>
          </td>
          <td>
            Products for those <b>WHO</b> are sick (doctor prescribes)
          </td>
          <td rowSpan={2}>
            <Monospace>WHO</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MEDIATIONS</Monospace>
          </td>
          <td>Interventions between two warring tribes</td>
        </tr>
        <tr>
          <td>
            <Monospace>CARBON[D]ATED</Monospace>
          </td>
          <td>
            Used fourteen decays as <b>LEADS</b> to find how old
          </td>
          <td rowSpan={2}>
            <Monospace>LEADS</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CARBONATED</Monospace>
          </td>
          <td>The water in club soda when it's sold</td>
        </tr>
        <tr>
          <td>
            <Monospace>F[E]ATHERLESS</Monospace>
          </td>
          <td>
            Like <b>A</b> bird that is naked and can not fly
          </td>
          <td rowSpan={2}>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FATHERLESS</Monospace>
          </td>
          <td>To not have a parent who is a guy</td>
        </tr>
        <tr>
          <td>
            <Monospace>STAGE[F]RIGHT</Monospace>
          </td>
          <td>
            To be scared of a <b>NA</b>sty crowd at a show
          </td>
          <td rowSpan={2}>
            <Monospace>NA</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>STAGERIGHT</Monospace>
          </td>
          <td>A place an actor might be told to go</td>
        </tr>
        <tr>
          <td>
            <Monospace>UN[G]RATIFIED</Monospace>
          </td>
          <td>
            Condi<b>TION</b> of longing; wanting life improved
          </td>
          <td rowSpan={2}>
            <Monospace>TION</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>UNRATIFIED</Monospace>
          </td>
          <td>Amendment or law when still unapproved</td>
        </tr>
        <tr>
          <td>
            <Monospace>OVER[H]EATING</Monospace>
          </td>
          <td>
            Way too much dust <b>WITH</b>in MacBook causes it
          </td>
          <td rowSpan={2}>
            <Monospace>WITH</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>OVEREATING</Monospace>
          </td>
          <td>Dropping too much food into stomach's pit</td>
        </tr>
        <tr>
          <td>
            <Monospace>HEAD WA[I]TERS</Monospace>
          </td>
          <td>
            Servers who supervise <b>THEIR</b> other givers
          </td>
          <td rowSpan={2}>
            <Monospace>THEIR</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HEAD WATERS</Monospace>
          </td>
          <td>The tops or sources of streams or rivers</td>
        </tr>
        <tr>
          <td>
            <Monospace>IN[J]UNCTIONS</Monospace>
          </td>
          <td>
            Some non-<b>WEALTH</b> forfeitures. Could be anti-suits
          </td>
          <td rowSpan={2}>
            <Monospace>WEALTH</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>INUNCTIONS</Monospace>
          </td>
          <td>Anoint skin in these oil transmission routes</td>
        </tr>
      </tbody>
    </Table>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
