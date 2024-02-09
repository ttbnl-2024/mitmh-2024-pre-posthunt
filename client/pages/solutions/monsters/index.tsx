import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'monsters';
const ANSWER = `BEHIND YOU`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The crossword clues have the following solutions:</p>
    <ul>
      <li>A missing part, as in a manuscript: LACUNA</li>
      <li>Christmas carol: NOEL</li>
      <li>Cloistered woman: NUN</li>
      <li>Eggy holiday drink: NOG</li>
      <li>Fib: LIE</li>
      <li>Flavoring for some gin: SLOE</li>
      <li>Four plus five: NINE</li>
      <li>Gear tooth: COG</li>
      <li>Like a bug in a rug: SNUG</li>
      <li>LIke the ranger who wore a black domino mask: LONE</li>
      <li>Location for events: VENUE</li>
      <li>Making an unreturnable serve: ACING</li>
      <li>Miler Sebastian: COE</li>
      <li>Opposite of day: NIGHT</li>
      <li>Opposite of pro: CON</li>
      <li>Section of a cut tree trunk: LOG</li>
      <li>Sheltered side of a hill (Scottish): SCUG</li>
      <li>Signal to speak one's part: CUE</li>
      <li>Sister's daughter: NIECE</li>
      <li>Slipperier, in winter, perhaps: ICIER</li>
      <li>Something taboo: NONO</li>
      <li>Stogie: CIGAR</li>
      <li>The dryer screen collects it: LINT</li>
      <li>The moon personified: LUNA</li>
      <li>This is one: CLUE</li>
      <li>Type of nut that secures a wheel: LUG</li>
      <li>Visible radiation: LIGHT</li>
    </ul>
    <p>
      Some of them are ambiguous, but can be figured out when we realize the
      more solid answers all contain a trigram fitting the regex{' '}
      <Monospace>[LNC][IOU][GNE]</Monospace>. The first and third letters are
      the alignments, and the middle one is one of three vowels. Some of the
      answers are only three letters long and confirm the ordering of the
      letters, and each answer contains only one vowel from among{' '}
      <Monospace>IOU</Monospace>, though some of them repeat it elsewhere.
    </p>
    <p>
      These are "aligned" as follows, sorting each alignment letter in the
      standard order used in D&amp;D (lawful, neutral, chaotic and good,
      neutral, evil) and the vowels in alphabetical order:
    </p>
    <div className="space-y-3">
      <Table id="alignment">
        <thead>
          <tr>
            <th>Vowel I</th>
            <th>G</th>
            <th>N</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>L</b>
            </td>
            <td>LIGHT</td>
            <td>LINT</td>
            <td>LIE</td>
          </tr>
          <tr>
            <td>
              <b>N</b>
            </td>
            <td>NIGHT</td>
            <td>NINE</td>
            <td>NIECE</td>
          </tr>
          <tr>
            <td>
              <b>C</b>
            </td>
            <td>CIGAR</td>
            <td>ACING</td>
            <td>ICIER</td>
          </tr>
        </tbody>
      </Table>
      <Table id="alignment">
        <thead>
          <tr>
            <th>Vowel O</th>
            <th>G</th>
            <th>N</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>L</b>
            </td>
            <td>LOG</td>
            <td>LONE</td>
            <td>SLOE</td>
          </tr>
          <tr>
            <td>
              <b>N</b>
            </td>
            <td>NOG</td>
            <td>NONO</td>
            <td>NOEL</td>
          </tr>
          <tr>
            <td>
              <b>C</b>
            </td>
            <td>COG</td>
            <td>CON</td>
            <td>COE</td>
          </tr>
        </tbody>
      </Table>
      <Table id="alignment">
        <thead>
          <tr>
            <th>Vowel U</th>
            <th>G</th>
            <th>N</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>L</b>
            </td>
            <td>LUG</td>
            <td>LUNA</td>
            <td>CLUE</td>
          </tr>
          <tr>
            <td>
              <b>N</b>
            </td>
            <td>SNUG</td>
            <td>NUN</td>
            <td>VENUE</td>
          </tr>
          <tr>
            <td>
              <b>C</b>
            </td>
            <td>SCUG*</td>
            <td>LACUNA</td>
            <td>CUE</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <p>* Sorry about this one.</p>
    <p>
      In the list of monsters, each monster has a specific{' '}
      <a href="https://forgottenrealms.fandom.com/wiki/Category:Alignment">
        alignment in Forgotten Realms
      </a>{' '}
      which is either Lawful, Neutral, or Chaotic and which is also Good,
      Neutral, or Evil. In addition, each contains only one of the three vowels
      I, O, and U. Placing them in the same order as the trigrams from the
      crossword clues, this allows each monster to encode a letter in ternary
      code:
    </p>
    <Table id="monsters">
      <thead>
        <tr>
          <th>Monster</th>
          <th>L/N/C</th>
          <th>I/O/U</th>
          <th>G/N/E</th>
          <th>Ternary</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Filth Imp</td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>002</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Kobold</td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>012</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mummy</td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>022</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Pixie</td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>100</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Argos</td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>112</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Octon</td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>011</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mud Slaad</td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>221</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>Buraq</td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>120</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Moon-horse</td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>210</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Leading to the answer <Answerize>BEHIND YOU</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        Although it uses the alignments of real D&amp;D monsters, this puzzle
        was inspired by the memes of alignment charts for various other
        disciplines such as one for crossword symmetry that I saw in 2023.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      #alignment th,
      #alignment td,
      #monsters td:nth-child(2),
      #monsters td:nth-child(3),
      #monsters td:nth-child(4),
      #monsters td:nth-child(5),
      #monsters td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
