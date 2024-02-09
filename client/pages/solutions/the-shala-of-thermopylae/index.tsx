import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-shala-of-thermopylae';
const ANSWER = `PLASTER PARIS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>The answers to this metapuzzle are:</p>
    <Table className="puzzles-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flower Power</td>
          <td>RIVER BASIN</td>
        </tr>
        <tr>
          <td>Look Before You Leap</td>
          <td>LOG SEMIRING</td>
        </tr>
        <tr>
          <td>Battle Plans</td>
          <td>DEMOPOLIS CHALK</td>
        </tr>
        <tr>
          <td>Some Assembly Required</td>
          <td>DISH TOWEL</td>
        </tr>
        <tr>
          <td>Inside Scoop</td>
          <td>SHOULDER INSIGNIA</td>
        </tr>
        <tr>
          <td>Island Hopping</td>
          <td>UPSILON AQUARII</td>
        </tr>
        <tr>
          <td>15 Questions</td>
          <td>GLASS FLUTE</td>
        </tr>
        <tr>
          <td>Building Blocks</td>
          <td>MANY-SIDED DIE</td>
        </tr>
        <tr>
          <td>Jigsaw Slitherlink</td>
          <td>CHRIS WEDGE</td>
        </tr>
        <tr>
          <td>Fairly Thorough</td>
          <td>TURNPIKING</td>
        </tr>
        <tr>
          <td>A Radical Fishing Trip</td>
          <td>POWERED SHIP</td>
        </tr>
        <tr>
          <td>Composing Compositions</td>
          <td>THIGH STRETCH</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The full-bodied flavortext has a lot going on. Looking up the extremely
      specific yoga pose, we find it means "head-foot pose" (more on this
      later)&mdash;and we notice a few more references to the body some of its
      parts in there ("hip"pie, joint).
    </p>
    <p>
      The second odd thing is the replacement of "body" with "corpus" in a
      common expression. Along with connecting with "inner selves", this should
      help us consider what words mean, and in particular, body part meanings.
      On this track, with a combination of selection technique &amp; luck that
      is common to associative puzzles, Googling for "body part" and "meaning"
      or "etymology" or in some cases parts of the answers, for associations or
      etymology, we find that one word/part of each answer is directly related
      to the etymology of a part of your osseous structure (your "inner self").
      As a pattern aid, each answer is either two words or a single word that is
      cleanly split into two words (<Clue>TURN + PIKING</Clue>). None of the
      other halves have direct bone etymology.
    </p>
    <p>
      The "spiritual music" in the flavortext refers to "Dem Bones," a
      children's song derived from Ezekiel 37:10, with the prophet in the valley
      of dry bones. As listed in numerous sources (and in particular, Wikipedia,
      which is the first Google hit and therefore the version used), "the toe
      bone's connected to the foot bone, the foot bone's connected to the heel
      bone…", and so forth. The solver must associate each bone with its body
      part from the song (so "phalanx", which is also technically a finger bone,
      is decidedly a toe bone in this puzzle) and then "pull yourself together,
      man"&mdash;connect those bones in song order.
    </p>
    <p>
      The final step is clued by the literal hippie "joint" in the flavortext.
      Some experimentation will yield that the length of the bone whose
      etymology was given is the same length as that of the unused part of the
      connecting body part's answer&mdash;and these share one letter in common
      (a figurative "joint", if you will, in the direction indicated in the song
      (toe, foot, heel, …). A final connection will be made between the toes and
      head, matching the yoga pose, creating a cycle. Starting with the toe
      bone, we find that we need <Answerize>{ANSWER}</Answerize> to escape.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Puzzle Answer</th>
          <th>Etymology For</th>
          <th>Body Part</th>
          <th>Connects To</th>
          <th>Part A (Bone)</th>
          <th>Part B (Other ½)</th>
          <th>Joint Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>
              <u>LOG</u>
            </b>{' '}
            SEMIRING
          </td>
          <td>PHALANX</td>
          <td>TOE</td>
          <td>FOOT</td>
          <td>
            <b>
              <u>P</u>
            </b>
            HALANX
          </td>
          <td>
            <b>
              <u>P</u>
            </b>
            OWERED
          </td>
          <td>P</td>
        </tr>
        <tr>
          <td>
            POWERED{' '}
            <b>
              <u>SHIP</u>
            </b>
          </td>
          <td>NAVICULAR</td>
          <td>FOOT</td>
          <td>HEEL</td>
          <td>
            NAVICU
            <b>
              <u>L</u>
            </b>
            AR
          </td>
          <td>
            DEMOPO
            <b>
              <u>L</u>
            </b>
            IS
          </td>
          <td>L</td>
        </tr>
        <tr>
          <td>
            DEMOPOLIS{' '}
            <b>
              <u>CHALK</u>
            </b>
          </td>
          <td>CALCANEUS</td>
          <td>HEEL</td>
          <td>ANKLE</td>
          <td>
            C
            <b>
              <u>A</u>
            </b>
            LCANEUS
          </td>
          <td>
            M
            <b>
              <u>A</u>
            </b>
            NYSIDED
          </td>
          <td>A</td>
        </tr>
        <tr>
          <td>
            MANY-SIDED{' '}
            <b>
              <u>DIE</u>
            </b>
          </td>
          <td>TALUS</td>
          <td>ANKLE</td>
          <td>LEG</td>
          <td>
            TALU
            <b>
              <u>S</u>
            </b>
          </td>
          <td>
            GLAS
            <b>
              <u>S</u>
            </b>
          </td>
          <td>S</td>
        </tr>
        <tr>
          <td>
            GLASS{' '}
            <b>
              <u>FLUTE</u>
            </b>
          </td>
          <td>TIBIA</td>
          <td>LEG</td>
          <td>KNEE</td>
          <td>
            <b>
              <u>T</u>
            </b>
            IBIA
          </td>
          <td>
            <b>
              <u>T</u>
            </b>
            OWEL
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            <b>
              <u>DISH</u>
            </b>{' '}
            TOWEL
          </td>
          <td>PATELLA</td>
          <td>KNEE</td>
          <td>THIGH</td>
          <td>
            PAT
            <b>
              <u>E</u>
            </b>
            LLA
          </td>
          <td>
            STR
            <b>
              <u>E</u>
            </b>
            TCH
          </td>
          <td>E</td>
        </tr>
        <tr>
          <td>
            <b>
              <u>THIGH</u>
            </b>{' '}
            STRETCH
          </td>
          <td>FEMUR</td>
          <td>THIGH</td>
          <td>HIP</td>
          <td>
            FEMU
            <b>
              <u>R</u>
            </b>
          </td>
          <td>
            RIVE
            <b>
              <u>R</u>
            </b>
          </td>
          <td>R</td>
        </tr>
        <tr>
          <td>
            RIVER{' '}
            <b>
              <u>BASIN</u>
            </b>
          </td>
          <td>PELVIS</td>
          <td>HIP</td>
          <td>BACK</td>
          <td>
            <b>
              <u>P</u>
            </b>
            ELVIS
          </td>
          <td>
            <b>
              <u>P</u>
            </b>
            IKING
          </td>
          <td>P</td>
        </tr>
        <tr>
          <td>
            <b>
              <u>TURN</u>
            </b>
            PIKING
          </td>
          <td>VERTEBRA</td>
          <td>BACK</td>
          <td>SHOULDER</td>
          <td>
            VERTEBR
            <b>
              <u>A</u>
            </b>
          </td>
          <td>
            INSIGNI
            <b>
              <u>A</u>
            </b>
          </td>
          <td>A</td>
        </tr>
        <tr>
          <td>
            <b>
              <u>SHOULDER</u>
            </b>{' '}
            INSIGNIA
          </td>
          <td>HUMERUS</td>
          <td>SHOULDER</td>
          <td>NECK</td>
          <td>
            HUME
            <b>
              <u>R</u>
            </b>
            US
          </td>
          <td>
            AQUA
            <b>
              <u>R</u>
            </b>
            II
          </td>
          <td>R</td>
        </tr>
        <tr>
          <td>
            <b>
              <u>UPSILON</u>
            </b>{' '}
            AQUARII
          </td>
          <td>HYOID</td>
          <td>NECK</td>
          <td>HEAD</td>
          <td>
            HYO
            <b>
              <u>I</u>
            </b>
            D
          </td>
          <td>
            CHR
            <b>
              <u>I</u>
            </b>
            S
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            CHRIS{' '}
            <b>
              <u>WEDGE</u>
            </b>
          </td>
          <td>SPHENOID</td>
          <td>HEAD</td>
          <td>TOE</td>
          <td>
            <b>
              <u>S</u>
            </b>
            PHENOID
          </td>
          <td>
            <b>
              <u>S</u>
            </b>
            EMIRING
          </td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <AuthorsNotes>
      <p>
        Our apologies to the fastidious Asclepians out there, where some of
        these bones don't <i>actually</i> connect with each other&mdash;you may
        send all technical complaints to James Weldon Johnson.
      </p>
      <p>
        The writing of this puzzle was incredibly constrained by the available
        letters and generally fixed ordering&mdash;some areas have very few,
        short-named bones (e.g., upper leg). We hope you enjoyed learning about
        your skeleton in this (zygomatic?) process!
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .puzzles-table td:nth-child(2),
      .solution-table td:nth-child(n + 5),
      .solution-table td:nth-child(1),
      .solution-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .solution-table td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
