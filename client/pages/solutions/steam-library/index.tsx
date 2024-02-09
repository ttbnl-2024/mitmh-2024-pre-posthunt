import { FC } from 'react';
import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from 'react-a11y-footnotes';
import 'react-a11y-footnotes/dist/styles.css';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'steam-library';
const ANSWER = `JAWBONE`;
const E = Colors.C3;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <FootnotesProvider>
      <p>
        This is a meta-matching set, where we are given feeder answers to a set
        of metas, and must match the feeders to their corresponding minimetas.
        The last minimeta (The Binding of Isaac: Repentance) is separate from
        the rest, and is our metameta.
      </p>
      <h3>Baba Is You</h3>
      <p>
        As clued by the title “Baba Is You” and the word “rereading” in the
        flavortext, we find answers with a BABA letter pattern where replacing
        the repeated bigrams with a single letter yields a new word. For
        example, in the flavortext, “rereading” can have “rere” changed to “f”
        to make “fading” (meaning “disappearing”). These new words each match
        one of the definitions. Reading the new letters in the given order
        yields the answer <Monospace>UNREMEMBERED</Monospace>.
      </p>
      <Table id="baba" className="my-4">
        <thead>
          <tr>
            <th>Definition</th>
            <th>Answer</th>
            <th>Replaced</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contest</td>
            <td>
              <Monospace>ARGININE</Monospace>
            </td>
            <td>
              <Monospace>ARG(U)E</Monospace>
            </td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>
              <Monospace>STOWAWAY</Monospace>
            </td>
            <td>
              <Monospace>STO(N)Y</Monospace>
            </td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>Bird</td>
            <td>
              <Monospace>CANADA DAY</Monospace>
            </td>
            <td>
              <Monospace>CANA(R)Y</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>Flame</td>
            <td>
              <Monospace>CUCUMBER</Monospace>
            </td>
            <td>
              <Monospace>(E)MBER</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Donation</td>
            <td>
              <Monospace>ALLELES</Monospace>
            </td>
            <td>
              <Monospace>AL(M)S</Monospace>
            </td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>Kirby enemy</td>
            <td>
              <Monospace>DINING OUT</Monospace>
            </td>
            <td>
              <Monospace>D(E)GOUT</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Haze</td>
            <td>
              <Monospace>DADAIST</Monospace>
            </td>
            <td>
              <Monospace>(M)IST</Monospace>
            </td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>Cry</td>
            <td>
              <Monospace>SOUP UP</Monospace>
            </td>
            <td>
              <Monospace>SO(B)</Monospace>
            </td>
            <td>
              <Monospace>B</Monospace>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>
              <Monospace>CHORISIS</Monospace>
            </td>
            <td>
              <Monospace>CHOR(E)</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Mature</td>
            <td>
              <Monospace>GO TO TOWN</Monospace>
            </td>
            <td>
              <Monospace>G(R)OWN</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>Stray</td>
            <td>
              <Monospace>SUSURRANT</Monospace>
            </td>
            <td>
              <Monospace>(E)RRANT</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Forgive</td>
            <td>
              <Monospace>PARTITION</Monospace>
            </td>
            <td>
              <Monospace>PAR(D)ON</Monospace>
            </td>
            <td>
              <Monospace>D</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Dave the Diver</h3>
      <p>
        As in the game, we are catching fish. Our answers can be concatenated to
        make fish in the center. The flavortext “what are your nets lined with?”
        clues us to read the edges of this concatenation. Sorting by the length
        of the caught fish yields the answer <Monospace>FISH STICK!</Monospace>.
        (The <Monospace>!</Monospace> is significant here, as we will see in the
        meta.)
      </p>
      <Table id="dave" className="my-4">
        <thead>
          <tr>
            <th>Answer 1</th>
            <th>Answer 2</th>
            <th>Fish</th>
            <th>Edges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>FASTAPI</Monospace>
            </td>
            <td>
              <Monospace>KENSEI</Monospace>
            </td>
            <td>
              <Monospace>PIKE</Monospace>
            </td>
            <td>
              <Monospace>FI</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>SUBSTR</Monospace>
            </td>
            <td>
              <Monospace>OUTLANDISH</Monospace>
            </td>
            <td>
              <Monospace>TROUT</Monospace>
            </td>
            <td>
              <Monospace>SH</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>SUPPOSAL</Monospace>
            </td>
            <td>
              <Monospace>MONTSERRAT</Monospace>
            </td>
            <td>
              <Monospace>SALMON</Monospace>
            </td>
            <td>
              <Monospace>ST</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>INCHCAPE</Monospace>
            </td>
            <td>
              <Monospace>LINEAR LOGIC</Monospace>
            </td>
            <td>
              <Monospace>CAPELIN</Monospace>
            </td>
            <td>
              <Monospace>IC</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>KOENIGSMACKER</Monospace>
            </td>
            <td>
              <Monospace>EL-CREEPO!</Monospace>
            </td>
            <td>
              <Monospace>MACKEREL</Monospace>
            </td>
            <td>
              <Monospace>K!</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Fallout: New Vegas</h3>
      <p>
        This minimeta is about various skill checks that occur in the game. Each
        check requires a specific amount in a skill, all of which are divisible
        by 10. Additionally, each of this meta's answers can make a common
        phrase with the skill name. Indexing into the answer by the required
        amount divided by 10, and using the given order yields the answer{' '}
        <Monospace>CAESAREAN</Monospace>.
      </p>
      <Table id="fallout" className="my-4">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Skill</th>
            <th>Required</th>
            <th>Answer</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smuggle better weapons into the interrogation room</td>
            <td>Sneak</td>
            <td>50</td>
            <td>
              <Monospace>ATTACK</Monospace>
            </td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>Trade with Alexander</td>
            <td>Guns</td>
            <td>40</td>
            <td>
              <Monospace>ASSAULT</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>Fix Trudy's radio</td>
            <td>Repair</td>
            <td>20</td>
            <td>
              <Monospace>BEYOND</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Tell Pete that a half-ton isn't enough</td>
            <td>Explosives</td>
            <td>40</td>
            <td>
              <Monospace>PLASTIC</Monospace>
            </td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>Ask Lucius to teach you</td>
            <td>Unarmed</td>
            <td>50</td>
            <td>
              <Monospace>COMBAT</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>Learn how Keith is cheating at Caravan</td>
            <td>Speech</td>
            <td>60</td>
            <td>
              <Monospace>PATTERN</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>Repair the network connection in the east pump station</td>
            <td>Science</td>
            <td>50</td>
            <td>
              <Monospace>ROCKET</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Learn about Hydra symptoms</td>
            <td>Medicine</td>
            <td>50</td>
            <td>
              <Monospace>HERBAL</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>Help improve Siri's work</td>
            <td>Survival</td>
            <td>20</td>
            <td>
              <Monospace>INSTINCT</Monospace>
            </td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Portal</h3>
      <p>
        Here, we use the fact that the game's logo replaces the letter “O” with
        a portal. When an answer reaches the letter “O”, it continues at a
        different “O” in the criss-cross. As a constraint, O's only occur at the
        start and end of grid entries, and (as clued by the flavortext) each
        answer has exactly 2 O's. Reading the highlighted squares from top to
        bottom yields the answer <Monospace>QUEEN BEE</Monospace>.
      </p>
      <p>
        <b>Answers:</b>
      </p>
      <ul>
        <li>
          <Monospace>FEDERAL BUREAU OF INVESTIGATION</Monospace>
        </li>
        <li>
          <Monospace>NEW KIDS ON THE BLOCK</Monospace>
        </li>
        <li>
          <Monospace>QUANTUM OF SOLACE</Monospace>
        </li>
        <li>
          <Monospace>ROMANTIC COMEDIES</Monospace>
        </li>
        <li>
          <Monospace>SWORN TO SECRECY</Monospace>
        </li>
        <li>
          <Monospace>TRUTH OR CONSEQUENCES</Monospace>
        </li>
        <li>
          <Monospace>WALKED ON TIPTOE</Monospace>
        </li>
        <li>
          <Monospace>WENT FOR BROKE</Monospace>
        </li>
      </ul>
      <Crossword
        // prettier-ignore
        data={[
        [X,X,_,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
        [X,X,_,X,X,X,X,_,_,_,_,_,_,_,_,_,_,_],
        [_,X,_,X,_,X,X,_,X,X,X,_,X,X,X,X,X,X],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,X,X,X,X],
        [_,X,_,X,_,X,X,_,X,X,X,_,X,_,_,X,X,X],
        [_,X,_,X,_,X,X,_,_,_,_,_,_,_,_,_,X,X],
        [_,X,_,_,_,X,X,X,X,X,X,_,X,_,_,_,X,X],
        [_,X,X,_,X,X,X,_,X,X,X,_,X,X,X,X,X,X],
        [_,X,X,_,X,X,X,_,X,X,X,_,X,X,X,X,X,X],
        [_,_,_,_,_,_,X,_,X,_,X,X,X,X,X,X,X,X],
        [_,X,X,_,X,_,X,_,X,_,X,X,X,X,X,_,_,X],
        [_,X,X,_,_,_,_,_,_,_,_,X,X,X,X,_,X,X],
        [_,X,X,X,X,_,X,X,X,_,X,X,X,X,X,_,X,X],
        [_,X,X,X,X,_,X,X,_,_,_,_,_,_,_,_,X,X],
        [_,X,X,X,X,_,X,X,X,_,X,X,X,X,X,X,X,X],
        [_,X,X,X,X,_,X,X,X,_,_,_,_,_,_,_,_,X],
      ]}
        // prettier-ignore
        shading={[
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
        [_,_,_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_],
      ]}
        // prettier-ignore
        fill={[
        [' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ','M',' ',' ',' ',' ','O','N','S','E','Q','U','E','N','C','E','S'],
        ['O',' ','E',' ','O',' ',' ','R',' ',' ',' ','U',' ',' ',' ',' ',' ',' '],
        ['F','E','D','E','R','A','L','B','U','R','E','A','U','O',' ',' ',' ',' '],
        ['I',' ','I',' ','N',' ',' ','R',' ',' ',' ','N',' ','R','O',' ',' ',' '],
        ['N',' ','E',' ','T',' ',' ','O','M','A','N','T','I','C','C','O',' ',' '],
        ['V',' ','S','W','O',' ',' ',' ',' ',' ',' ','U',' ','O','K','E',' ',' '],
        ['E',' ',' ','E',' ',' ',' ','O',' ',' ',' ','M',' ',' ',' ',' ',' ',' '],
        ['S',' ',' ','N',' ',' ',' ','L',' ',' ',' ','O',' ',' ',' ',' ',' ',' '],
        ['T','R','U','T','H','O',' ','A',' ','W',' ',' ',' ',' ',' ',' ',' ',' '],
        ['I',' ',' ','F',' ','N',' ','C',' ','A',' ',' ',' ',' ',' ','O','N',' '],
        ['G',' ',' ','O','N','T','H','E','B','L','O',' ',' ',' ',' ','F',' ',' '],
        ['A',' ',' ',' ',' ','I',' ',' ',' ','K',' ',' ',' ',' ',' ','S',' ',' '],
        ['T',' ',' ',' ',' ','P',' ',' ','N','E','W','K','I','D','S','O',' ',' '],
        ['I',' ',' ',' ',' ','T',' ',' ',' ','D',' ',' ',' ',' ',' ',' ',' ',' '],
        ['O',' ',' ',' ',' ','O',' ',' ',' ','O','S','E','C','R','E','C','Y',' '],
      ]}
        cellClass="font-mono [&>div]:pb-2"
        tableClass="my-4"
      />
      <h3>Stardew Valley</h3>
      <p>
        This minimeta is about the gifting mechanic in Stardew Valley. Each
        villager has a “loved” gift where an answer is a specific kind or brand
        of that gift. Ordering by the villagers’ birthdays and indexing into the
        answer by the number of hearts yields the answer{' '}
        <Monospace>PRESENT</Monospace>.
      </p>
      <Table id="stardew" className="my-4">
        <thead>
          <tr>
            <th>Villager</th>
            <th>Birthday</th>
            <th>Loved Gift</th>
            <th>Answer</th>
            <th>Hearts</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lewis</td>
            <td>Spring 07</td>
            <td>Hot pepper</td>
            <td>
              <Monospace>JALAPENO</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>P</Monospace>
            </td>
          </tr>
          <tr>
            <td>Pam</td>
            <td>Spring 18</td>
            <td>Pale ale</td>
            <td>
              <Monospace>SIERRA NEVADA</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>Maru</td>
            <td>Summer 10</td>
            <td>Battery pack</td>
            <td>
              <Monospace>ENERGIZER</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>Summer 17</td>
            <td>Pizza</td>
            <td>
              <Monospace>DEEP DISH</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>Penny</td>
            <td>Fall 2</td>
            <td>Melon</td>
            <td>
              <Monospace>HONEYDEW</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Elliott</td>
            <td>Fall 5</td>
            <td>Lobster</td>
            <td>
              <Monospace>MAINE</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>Leah</td>
            <td>Winter 23</td>
            <td>Goat cheese</td>
            <td>
              <Monospace>FETA</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Terraria</h3>
      <p>
        This minimeta is about the base accessory components in the Ankh Charm,
        each of which protects against a particular debuff in Terraria. The
        shown Terraria enemies each inflict one of these debuffs, as well as
        (rarely) drop an accessory that grants immunity to (only) their debuff.
        These accessories share first letters and enumerations with the answers,
        as well as exactly one other letter in the same position
        (“eigenletter”). Reading these letters in the enemy order yields the
        answer <Monospace>MINERS LAMP</Monospace>.
      </p>
      <Table id="terraria" className="my-4">
        <thead>
          <tr>
            <th>Enemy</th>
            <th>Accessory</th>
            <th>Answer</th>
            <th>Eigenletter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Armored Skeleton</td>
            <td>
              <Monospace>ARMOR POLISH</Monospace>
            </td>
            <td>
              <Monospace>AHMAD PEJMAN</Monospace>
            </td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>Medusa</td>
            <td>
              <Monospace>POCKET MIRROR</Monospace>
            </td>
            <td>
              <Monospace>PIYUSH MISHRA</Monospace>
            </td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>Crimslime</td>
            <td>
              <Monospace>BLINDFOLD</Monospace>
            </td>
            <td>
              <Monospace>BANNERMAN</Monospace>
            </td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>Hornet</td>
            <td>
              <Monospace>BEZOAR</Monospace>
            </td>
            <td>
              <Monospace>BEETLE</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>Crimson Axe</td>
            <td>
              <Monospace>NAZAR</Monospace>
            </td>
            <td>
              <Monospace>NEVER</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>Werewolf</td>
            <td>
              <Monospace>ADHESIVE BANDAGE</Monospace>
            </td>
            <td>
              <Monospace>ASSISTED BRAKING</Monospace>
            </td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>Wraith</td>
            <td>
              <Monospace>FAST CLOCK</Monospace>
            </td>
            <td>
              <Monospace>FREE CLIMB</Monospace>
            </td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>Clown</td>
            <td>
              <Monospace>TRIFOLD MAP</Monospace>
            </td>
            <td>
              <Monospace>TWELFTH MAN</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>Floaty Gross</td>
            <td>
              <Monospace>VITAMINS</Monospace>
            </td>
            <td>
              <Monospace>VOLUMNIA</Monospace>
            </td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>Green Jellyfish</td>
            <td>
              <Monospace>MEGAPHONE</Monospace>
            </td>
            <td>
              <Monospace>MISSPELLS</Monospace>
            </td>
            <td>
              <Monospace>P</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>The Binding of Isaac: Repentance</h3>
      <p>This is the metameta, and uses the answers from the 6 minimetas:</p>
      <ul>
        <li>
          <Monospace>CAESAREAN</Monospace>
        </li>
        <li>
          <Monospace>FISH STICK!</Monospace>
        </li>
        <li>
          <Monospace>MINING LAMP</Monospace>
        </li>
        <li>
          <Monospace>PRESENT</Monospace>
        </li>
        <li>
          <Monospace>QUEEN BEE</Monospace>
        </li>
        <li>
          <Monospace>UNREMEMBERED</Monospace>
        </li>
      </ul>
      <p>
        Each of these answers can uniquely be associated with a Binding of
        Isaac: Repentance item. We are also directed to look at the{' '}
        <a href="https://bindingofisaacrebirth.fandom.com/wiki/Collection_Page_(Repentance)">
          Collection Pages (for Repentance)
        </a>
        , where we find that each clued item appears on a unique page from 1 to 6.
        Using the pages as an ordering, we place our clued item in the shaded
        upper-left corner of the corresponding grid, apply the offsets to obtain
        2 other items, and index into all 3. Reading the extracted letters in
        page order and grid order, we get the cluephrase{' '}
        <Monospace>PAGE FIVE R FOUR C FOUR</Monospace>. The item at this
        location is the{' '}
        <b>
          <Monospace>JAW BONE</Monospace>
        </b>
        , which is our final answer.
      </p>
      <Table id="binding" className="my-4">
        <thead>
          <tr>
            <th>Answer</th>
            <th>Item</th>
            <th>Index</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>MINING LAMP</Monospace>
            </td>
            <td>
              <Monospace>SPELUNKER HAT</Monospace>
            </td>
            <td>
              <Monospace>2</Monospace>
            </td>
            <td>
              <Monospace>P</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>SUPER BANDAGE</Monospace>
            </td>
            <td>
              <Monospace>7</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>THE GAMEKID</Monospace>
            </td>
            <td>
              <Monospace>4</Monospace>
            </td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>UNREMEMBERED</Monospace>
            </td>
            <td>
              <Monospace>FORGET ME NOW</Monospace>
            </td>
            <td>
              <Monospace>5</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>FOREVER ALONE</Monospace>
            </td>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>INFESTATION</Monospace>
            </td>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>QUEEN BEE</Monospace>
            </td>
            <td>
              <Monospace>HIVE MIND</Monospace>
            </td>
            <td>
              <Monospace>3</Monospace>
            </td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>THERES OPTIONS</Monospace>
            </td>
            <td>
              <Monospace>3</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>ROTTEN BABY</Monospace>
            </td>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>FISH STICK!</Monospace>
            </td>
            <td>
              <Monospace>FINGER!</Monospace>
              <Ref
                description="Fish sticks are called 'fish fingers' in British English."
                id="finger"
              ></Ref>
            </td>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>DEPRESSION</Monospace>
            </td>
            <td>
              <Monospace>9</Monospace>
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>HUSHY</Monospace>
            </td>
            <td>
              <Monospace>2</Monospace>
            </td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>PRESENT</Monospace>
            </td>
            <td>
              <Monospace>MYSTERY GIFT</Monospace>
            </td>
            <td>
              <Monospace>6</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>SACRIFICIAL ALTAR</Monospace>
            </td>
            <td>
              <Monospace>3</Monospace>
            </td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>FORTUNE COOKIE</Monospace>
            </td>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>CAESAREAN</Monospace>
            </td>
            <td>
              <Monospace>C SECTION</Monospace>
            </td>
            <td>
              <Monospace>7</Monospace>
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>MONTEZUMAS REVENGE</Monospace>
            </td>
            <td>
              <Monospace>7</Monospace>
            </td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Monospace>LIL PORTAL</Monospace>
            </td>
            <td>
              <Monospace>6</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <Attributions>
        <ul>
          <li>
            Stardew Valley sprites from{' '}
            <a href="https://www.spriters-resource.com/">
              The Spriters Resource
            </a>
            .
          </li>
          <li>
            Terraria sprites from the{' '}
            <a href="https://terraria.fandom.com">Terraria Fandom wiki</a>.
          </li>
        </ul>
      </Attributions>
      <Footnotes />
    </FootnotesProvider>
    <style jsx global>{`
      #baba td:nth-child(4),
      #dave td:nth-child(4),
      #fallout td:nth-child(3),
      #fallout td:nth-child(5),
      #stardew td:nth-child(5),
      #stardew td:nth-child(6),
      #terraria td:nth-child(4),
      #binding td:nth-child(3),
      #binding td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
