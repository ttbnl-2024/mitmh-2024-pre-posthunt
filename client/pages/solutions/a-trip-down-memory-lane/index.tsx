import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import Crossword, { Colors, X } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-trip-down-memory-lane/0.png';

const SLUG = 'a-trip-down-memory-lane';
const ANSWER = `ROTARY SAWBLADE`;

const _: '' = '';

// prettier-ignore
const crosswordGrid = [
  [1,  _,  2,  _,  3,  _,  4,  _,  5,  X,  6,  _,  7,  _,  8 ],
  [_,  X,  _,  X,  _,  X,  _,  X,  9,  _,  _,  X,  _,  X,  _ ],
  [10, _,  _,  _,  _,  _,  _,  11, _,  X,  12, _,  _,  _,  _ ],
  [_,  X,  _,  X,  _,  X,  X,  13, _,  _,  _,  X,  _,  X,  _ ],
  [14, _,  _,  X,  15, _,  16, _,  _,  X,  17, _,  _,  _,  _ ],
  [X,  X,  _,  X,  _,  X,  18, _,  _,  X,  X,  X,  _,  X,  _ ],
  [19, 20, _,  21, _,  22, _,  X,  23, 24, 25, 26, _,  27, X ],
  [X,  _,  X,  28, _,  _,  X,  X,  X,  29, _,  _,  X,  _,  X ],
  [X,  30, 31, _,  _,  _,  32, X,  33, _,  _,  _,  34, _,  _ ],
  [35, X,  _,  X,  X,  X,  36, 37, _,  X,  _,  X,  _,  X,  X ],
  [38, _,  _,  _,  39, X,  40, _,  _,  _,  _,  X,  41, _,  42],
  [_,  X,  _,  X,  43, _,  _,  _,  X,  X,  _,  X,  _,  X,  _ ],
  [44, _,  _,  _,  _,  X,  45, _,  46, _,  _,  _,  _,  _,  _ ],
  [_,  X,  _,  X,  47, _,  _,  X,  _,  X,  _,  X,  _,  X,  _ ],
  [48, _,  _,  _,  _,  X,  49, _,  _,  _,  _,  _,  _,  _,  _ ],
];

// prettier-ignore
const crosswordFill = [
  ['M','I','C','R','O','S','O','F','T',  _,'S','U','I','T','S'],
  ['U',  _,'H',  _,'N',  _,'U',  _,'A','S','H',  _,'L',  _,'Y'],
  ['S','M','A','L','L','S','T','E','P',  _,'A','T','L','A','S'],
  ['I',  _,'N',  _,'Y',  _,  _,'G','R','I','D',  _,'E',  _,'T'],
  ['C','O','G',  _,'C','A','R','G','O',  _,'E','A','G','L','E'],
  [  _,  _,'E',  _,'H',  _,'I','S','O',  _,  _,  _,'A',  _,'M'],
  ['F','A','S','C','I','S','M',  _,'T','U','D','E','L','A',  _],
  [  _,'F',  _,'A','L','E',  _,  _,  _,'N','O','R',  _,'N',  _],
  [  _,'L','O','N','D','O','N',  _,'T','O','W','A','R','D','S'],
  ['B',  _,'B',  _,  _,  _,'I','C','E',  _,'N',  _,'E',  _,  _],
  ['A','S','S','E','T',  _,'C','A','N','A','L',  _,'M','E','L'],
  ['L',  _,'E',  _,'O','V','E','R',  _,  _,'O',  _,'A',  _,'O'],
  ['T','H','R','O','W',  _,'O','P','E','R','A','T','I','N','G'],
  ['I',  _,'V',  _,'E','O','N',  _,'N',  _,'D',  _,'N',  _,'A'],
  ['C','L','E','A','R',  _,'E','L','D','E','S','T','S','O','N'],
];

const { C4: g, C1: r, C2: o, C11: m, C3: y, C5: c } = Colors;
// prettier-ignore
const crosswordShade = [
  [  g,  g,  g,  g,  g,  g,  g,  g,  g,  _,  o,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  o,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  o,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  o,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  o,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  m],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  _,  _,  _,  _,  _,  _,  _,  _,  y,  y,  y,  y,  y,  y,  y],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  r,  r,  r,  r,  r,  _,  c,  c,  c,  c,  c,  c,  c,  c,  c],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
  [  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Upon opening this mini-meta, we discover that we must venture down the
      enigmatic memory lane, and complete tasks for Mnemosyne's forgetful
      friends to help them recover their forgotten things, which just so happen
      to be the answer submission boxes for each puzzle.
    </p>
    <p>
      We will open to a page that looks somewhat similar to the puzzle page from
      2019's{' '}
      <a href="https://puzzles.mit.edu/2019/puzzle/fish_puzzles.html">
        ...FISH Puzzles
      </a>
      . There are a total of 7 "fish" images spanning down the page, each one
      having a 'fishy' looking quotation attributed. Furthermore, there are 7
      mini-puzzles further down the page, reminiscent of the fish puzzles from
      previous hunts.
    </p>
    <p>
      We should quickly be able to identify that each photo represents a
      character from fiction, who at some point during their canon, had amnesia
      or memory related problems. Logically, the first step after that would be
      to identify how to solve each of the minipuzzles. We shall soon discover
      that solving each sub-puzzle gives an instruction, instead of a solution
      for the puzzle. These instructions should be identified as methods for
      locating the missing answer submission boxes. After we follow the
      instruction, each puzzle answer is now revealed on the page, however the
      order of the letters in each solution appear jumbled. The solution to each
      sub puzzle can be found below.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
          <th>Instruction For Finding Answer Checker</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>North East</td>
          <td>?ACMPSU</td>
          <td>CHECK THE DROPPED PIN LOCATION</td>
        </tr>
        <tr>
          <td>Mind Games</td>
          <td>?ADY</td>
          <td>RECORD AN ORIGINAL SONG</td>
        </tr>
        <tr>
          <td>Flying High</td>
          <td>?SPROTS</td>
          <td>PUT ENERGY INTO RED BULL ADVERT</td>
        </tr>
        <tr>
          <td>Red Letter</td>
          <td>?IPCEE</td>
          <td>VISIT HQ DRESSED AS PRIEST</td>
        </tr>
        <tr>
          <td>Radio Silence</td>
          <td>?APITNET</td>
          <td>FIX CAVITY SAMS BROKEN HEART</td>
        </tr>
        <tr>
          <td>Tunnel Vision</td>
          <td>IWNDWO?</td>
          <td>THROW SHADE TOWARDS MICROSOFT OPERATING SYSTEM</td>
        </tr>
        <tr>
          <td>Grid Locked</td>
          <td>UMRDRE?</td>
          <td>STAGE A CRIME SCENE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      A more in-depth explanation of these instructions are given with each
      puzzle explanation. Coming back to the idea that this entire puzzle
      mirrors …FISH Puzzles, the title of this puzzle is A Trip Down Memory
      Lane, and the puzzle involves the Greek goddess Mnemosyne, it should
      immediately stick out that one such puzzle from 2019 (and the 2015 hunt)
      was called Memory Lane. The premise of this puzzle was that solvers were
      given a list of mnemonics, with one of the words in each mnemonic
      incorrectly identifying an item in its corresponding list. The incorrect
      words provided a solution. In a similar fashion, the "Can You Remember…?"
      statements above each mini-puzzle can be identified as a mnemonic, with
      one word incorrectly attributed.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Mnemonic</th>
          <th>Group</th>
          <th>Item Ordering</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Big Brown Rabbits Often <b>Reverse</b> Great Big Vocal Groans When
            Gingerly Slapped
          </td>
          <td>Resistor color codes</td>
          <td>BBROYGBVGW</td>
        </tr>
        <tr>
          <td>
            Mary's Virgin Explanation <b>Pairs</b> Joseph Suspecting Upstairs
            Neighbours
          </td>
          <td>Planets from the sun.</td>
          <td>MVEMJSUN</td>
        </tr>
        <tr>
          <td>
            Some Lovers <b>Starting</b> Positions That They Couldn't Handle
          </td>
          <td>Bones of the wrist</td>
          <td>SLTPTTCH</td>
        </tr>
        <tr>
          <td>
            How I Need A Drink, Alcoholic Of Course, After The <b>Consonant</b>
             Lectures Involving Quantum Mechanics
          </td>
          <td>Digits of Pi</td>
          <td>3.14159265358979</td>
        </tr>
        <tr>
          <td>
            King Henry Died <b>From</b> Drinking Chocolate Milk
          </td>
          <td>SI prefixes</td>
          <td>KHDBDCM</td>
        </tr>
        <tr>
          <td>
            Every <b>Vowel</b> Does Good Before Evil
          </td>
          <td>Guitar Strings</td>
          <td>EADGBE</td>
        </tr>
        <tr>
          <td>
            Some Old Hippie<b> Left</b> Another Hippie Tripping On Acid
          </td>
          <td>Trigonometric functions</td>
          <td>Sin=O/H, Cos=A/H, Tan=O/A</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The current order is actually a "Red Herring" hinted at by the secret
      message spelled out by the "fishy" puzzle titles. Each quotation spoken by
      Mnemosyne's friends can be identified as the flavourtext for one of the
      puzzles. Rearranging the puzzles by the flavour text ordering and pairing
      Mnemosyne with her friends (pairing the mnemonics with each character)
      spells the message
    </p>
    <p>
      <Clue>STARTING FROM LEFT REVERSE VOWEL CONSONANT PAIRS</Clue>.
    </p>

    <p>
      In the context of the puzzle, it should be obvious that this phrase
      provides an instruction as to a method of unjumbling the minipuzzle
      answers (vowel/consonant pairs of course referring to bigrams comprised of
      both a vowel and a consonant). For example:
    </p>
    <p>
      <Clue>UMRDRE? → UM / RD / RE ? → MU / RD / ER ? → MURDER?</Clue>
    </p>

    <p>
      Applying this instruction to each anagrammed mini-puzzle answer provides
      the following more reasonable looking answers, which seem to be
      intrinsically linked to the content of their corresponding puzzle and/or
      the method for locating the missing answer checkers.
    </p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Puzzle Title</th>
          <th>Puzzle Answer</th>
          <th>Submission Instruction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>North East</td>
          <td>?CAMPUS</td>
          <td>CHECK THE DROPPED PIN LOCATION</td>
        </tr>
        <tr>
          <td>Mind Games</td>
          <td>?DAY</td>
          <td>RECORD AN ORIGINAL SONG</td>
        </tr>
        <tr>
          <td>Flying High</td>
          <td>?SPORTS</td>
          <td>PUT ENERGY INTO RED BULL ADVERT</td>
        </tr>
        <tr>
          <td>Red Letter</td>
          <td>?PIECE</td>
          <td>VISIT HQ DRESSED AS PRIEST</td>
        </tr>
        <tr>
          <td>Radio Silence</td>
          <td>?PATIENT</td>
          <td>FIX CAVITY SAMS BROKEN HEART</td>
        </tr>
        <tr>
          <td>Tunnel Vision</td>
          <td>WINDOW?</td>
          <td>THROW SHADE TOWARDS MICROSOFT OPERATING SYSTEM</td>
        </tr>
        <tr>
          <td>Grid Locked</td>
          <td>MURDER?</td>
          <td>STAGE A CRIME SCENE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Successfully completing what is, in some cases, a slightly ambiguous
      (because we love creativity) task pertaining to the location of a missing
      answer checker updates the UI on the puzzle page so that an answer checker
      now becomes avaliable for that puzzle. Attempting to submit the obtained
      answers in the answer checker provides a message indicating that the
      answers we have are somehow incomplete. At this point, we should realise
      that the question mark contained in each partial answer indicates the
      location of a "forgotten" or missing half of a more complete answer. All
      of the previously obtained information, including the sub-puzzle content,
      the flavour text, and the method of answer submission, provides clues
      towards the forgotten part of each compound word or phrase, and thus the
      full solution to each puzzle. Correctly submitting these answers updates
      the page so that each one appears next to the appropriately related
      amnesia character.{' '}
    </p>
    <Table className="table-4">
      <thead>
        <tr>
          <th>Partial Answer</th>
          <th>Answer Checker Message</th>
          <th>Completed Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>?CAMPUS</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…?
          </td>
          <td>HIPPOCAMPUS</td>
        </tr>
        <tr>
          <td>?DAY</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with a Thirsty Merc song?
          </td>
          <td>SOMEDAY</td>
        </tr>
        <tr>
          <td>?SPORTS</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with racing?
          </td>
          <td>MOTORSPORTS</td>
        </tr>
        <tr>
          <td>?PIECE</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with a church?
          </td>
          <td>ALTARPIECE</td>
        </tr>
        <tr>
          <td>?PATIENT</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with a hospital?
          </td>
          <td>OUTPATIENT</td>
        </tr>
        <tr>
          <td>WINDOW?</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with interior design?
          </td>
          <td>WINDOW BLINDS</td>
        </tr>
        <tr>
          <td>MURDER?</td>
          <td>
            Hmmm… this answer doesn't seem quite right! I'm trying to remember…
            this one had something to do with Agatha Christie?
          </td>
          <td>MURDER MYSTERY</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Finally, after all (or most) of the sub-puzzles are solved, with the
      complete answers determined, we should realise that it was not a
      coincidence each of Mnemosyne's friends has paired up with an answer of
      the same length as their name.{' '}
    </p>
    <Table className="table-5">
      <thead>
        <tr>
          <th>Mnemosyne's Friends</th>
          <th>Completed Answers</th>
          <th>Paired Letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JASON BOURNE</td>
          <td>MOTORSPORTS</td>
          <td>OR</td>
        </tr>
        <tr>
          <td>CONRAD HART</td>
          <td>OUTPATIENT</td>
          <td>AT</td>
        </tr>
        <tr>
          <td>LEONARD SHELBY</td>
          <td>MURDER MYSTERY</td>
          <td>RY</td>
        </tr>
        <tr>
          <td>BUCKY BARNES</td>
          <td>HIPPOCAMPUS</td>
          <td>AS</td>
        </tr>
        <tr>
          <td>WALTER BISHOP</td>
          <td>WINDOW BLINDS</td>
          <td>WB</td>
        </tr>
        <tr>
          <td>ALEX MERCER</td>
          <td>ALTARPIECE</td>
          <td>AL</td>
        </tr>
        <tr>
          <td>JANE DOE</td>
          <td>SOMEDAY</td>
          <td>ED</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Overlapping the character names with the sub-puzzle answers reveals two
      letters that are common to each. Taking these letters, and performing the
      same word transformation step used on each partial sub-puzzle answer, will
      reveal the final puzzle answer,
    </p>
    <p>
      <Clue>
        OR / AT / RY / AS / WB / AL / ED → RO / TA / RY / SA / WB/ LA / DE
      </Clue>
    </p>
    <p>
      which is the identity of the missing mystery hunting tool, (no it wasn't
      the answer submission boxes, it was actually) Minotaur's{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>An in-depth solution to each mini-puzzle is given in the Appendix.</p>
    <Appendix>
      <h3>NORTH EAST</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          ?ACMPSU → ? AC / MP / SU → ? CA / MP / US → <b>?CAMPUS</b>
        </Clue>
      </p>
      <p>
        This puzzle is a template which can be overlayed with a map of the MIT
        campus, as clued by the flavour text. A reference distance and
        orientation is provided to help with scaling. You will notice that if
        you align the black circle with the MIT Dome, each letter overlays a
        single building.{' '}
      </p>
      <p>
        <SheetableImage alt="" src={image0} title="" />
      </p>
      <p>
        Taking the letters consecutively (where possible), by building number of
        existing buildings, from 1 to 37 yields the puzzle answer/ puzzle answer
        checker location.
      </p>
      <p>
        <Clue>CHECK THE DROPPED PIN LOCATION</Clue>
      </p>
      <p>
        The dropped pin appropriately points to a tree outside of the entrance
        to the Department of Learning and Memory. After solving this puzzle, a
        team member will have to proceed to the location to find an answer
        checker hidden as a QR code.
      </p>
      <h3>MIND GAMES</h3>
      <p>
        Provided answer:{' '}
        <Clue>
          ?ADY → ? AD / Y → ? DA / Y → <b>?DAY</b>
        </Clue>
      </p>
      <p>
        Each question in the "mind games" quiz is an IQ test style question that
        doesn't require any general knowledge to solve (thus making it an ideal
        puzzle for people with amnesia).{' '}
      </p>
      <Table className="app-table-1">
        <thead>
          <tr>
            <th>IQ Test Question Solution</th>
            <th>Missing Number</th>
            <th>Missing Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Backwards, the grid reads "find the missing letter."</td>
            <td className="text-center">18</td>
            <td className="text-center">R</td>
          </tr>
          <tr>
            <td>Backwards, the grid reads "find the missing letter."</td>
            <td className="text-center">5</td>
            <td className="text-center">E</td>
          </tr>
          <tr>
            <td>Each subsequent row is an enunciation of the previous row.</td>
            <td className="text-center">3</td>
            <td className="text-center">C</td>
          </tr>
          <tr>
            <td>Triangular numbers.</td>
            <td className="text-center">15</td>
            <td className="text-center">O</td>
          </tr>
          <tr>
            <td>A list of letters with curved lines in the alpahabet.</td>
            <td className="text-center">18</td>
            <td className="text-center">R</td>
          </tr>
          <tr>
            <td>The grid is an analogue clock face.</td>
            <td className="text-center">4</td>
            <td className="text-center">D</td>
          </tr>
          <tr>
            <td>The first letters of the first seven months of the year.</td>
            <td className="text-center">1</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>Each number is the sum of its year's digits.</td>
            <td className="text-center">14</td>
            <td className="text-center">N</td>
          </tr>
          <tr>
            <td>The first letters of the numbers counting up from zero.</td>
            <td className="text-center">15</td>
            <td className="text-center">O</td>
          </tr>
          <tr>
            <td>The last letters of the first nine months.</td>
            <td className="text-center">18</td>
            <td className="text-center">R</td>
          </tr>
          <tr>
            <td>
              Each number represents the number of numbers in each circle.
            </td>
            <td className="text-center">9</td>
            <td className="text-center">I</td>
          </tr>
          <tr>
            <td>The text reads LIGHTSHADE.</td>
            <td className="text-center">7</td>
            <td className="text-center">G</td>
          </tr>
          <tr>
            <td>
              The numbers represent the number of letters in each shape name.
            </td>
            <td className="text-center">9</td>
            <td className="text-center">I</td>
          </tr>
          <tr>
            <td>The sequence counts up in twos.</td>
            <td className="text-center">14</td>
            <td className="text-center">N</td>
          </tr>
          <tr>
            <td>Alphabet letters comprised of only straight lines.</td>
            <td className="text-center">1</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td>
              Each number can be multiplied with the previous numbers position.
            </td>
            <td className="text-center">12</td>
            <td className="text-center">L</td>
          </tr>
          <tr>
            <td>The first letters of the days of the week.</td>
            <td className="text-center">19</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td>All alphabet letters with vertical mirror symmetry.</td>
            <td className="text-center">15</td>
            <td className="text-center">O</td>
          </tr>
          <tr>
            <td>The letter N is the solution to this riddle.</td>
            <td className="text-center">14</td>
            <td className="text-center">N</td>
          </tr>
          <tr>
            <td>
              ThirD gets BronzE, SeconD gets SilveR, so naturally FirsT gets
              GolD.
            </td>
            <td className="text-center">7</td>
            <td className="text-center">G</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Find the missing letters/numbers for each question in order (using A1Z26
        on the numbers) to obtain the instruction.
      </p>
      <Clue>RECORD AN ORIGINAL SONG</Clue>
      <p>
        To find this puzzle answer checker, you are required to write, record,
        and send us your own original song.
      </p>
      <h3>FLYING HIGH</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          ?SPROTS → ? SP / RO / TS → ? SP / OR / TS → <b>?SPORTS</b>
        </Clue>
      </p>
      <p>
        For this puzzle, we are presented with a grid filled with sports-related
        emojis. Each row also has a year provided next to it. The grid can be
        filled in with the names of sports films released in the years
        indicated. The emojis provide a clue to the sport featured in each film.
        Extracting the letters at the positions filled by each emoji spells out
        a message directing us how to find the next answer submission box.
      </p>
      <Table className="app-table-2">
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Sport</th>
            <th>Year</th>
            <th>Film Title</th>
            <th>Extraction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">💪</td>
            <td>Body Building</td>
            <td className="text-center">1977</td>
            <td>PUMPING IRON</td>
            <td className="text-center">PU</td>
          </tr>
          <tr>
            <td className="text-center">🏀</td>
            <td>Basketball</td>
            <td className="text-center">2020</td>
            <td>THE WAY BACK</td>
            <td className="text-center">TE</td>
          </tr>
          <tr>
            <td className="text-center">🧗‍♂️</td>
            <td>Rockclimbing</td>
            <td className="text-center">1993</td>
            <td>CLIFFHANGER</td>
            <td className="text-center">NE</td>
          </tr>
          <tr>
            <td className="text-center">🛷</td>
            <td>Bobsledding</td>
            <td className="text-center">1993</td>
            <td>COOL RUNNINGS</td>
            <td className="text-center">RG</td>
          </tr>
          <tr>
            <td className="text-center">🥊</td>
            <td>Boxing</td>
            <td className="text-center">1982</td>
            <td>ROCKY III</td>
            <td className="text-center">YI</td>
          </tr>
          <tr>
            <td className="text-center">🏄‍♂️</td>
            <td>Surfing</td>
            <td className="text-center">1991</td>
            <td>POINT BREAK</td>
            <td className="text-center">NT</td>
          </tr>
          <tr>
            <td className="text-center">🎱</td>
            <td>Pool</td>
            <td className="text-center">1986</td>
            <td>THE COLOR OF MONEY</td>
            <td className="text-center">OR</td>
          </tr>
          <tr>
            <td className="text-center">🏈</td>
            <td>American Football</td>
            <td className="text-center">2009</td>
            <td>THE BLIND SIDE</td>
            <td className="text-center">ED</td>
          </tr>
          <tr>
            <td className="text-center">⚾</td>
            <td>Baseball</td>
            <td className="text-center">1988</td>
            <td>BULL DURHAM</td>
            <td className="text-center">BU</td>
          </tr>
          <tr>
            <td className="text-center">🏇</td>
            <td>Horse Racing</td>
            <td className="text-center">2019</td>
            <td>RIDE LIKE A GIRL</td>
            <td className="text-center">LL</td>
          </tr>
          <tr>
            <td className="text-center">🏍</td>
            <td>Motorcycle sport</td>
            <td className="text-center">1971</td>
            <td>ON ANY SUNDAY</td>
            <td className="text-center">AD</td>
          </tr>
          <tr>
            <td className="text-center">🏎</td>
            <td>Car Racing</td>
            <td className="text-center">2019</td>
            <td>FORD V FERRARI</td>
            <td className="text-center">VE</td>
          </tr>
          <tr>
            <td className="text-center">🏃‍♂️</td>
            <td>Running</td>
            <td className="text-center">1981</td>
            <td>CHARIOTS OF FIRE</td>
            <td className="text-center">RT</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Clue>PUT ENERGY INTO RED BULL ADVERT</Clue>
      </p>
      <p>
        You will be able to locate a submission box for this puzzle by creating
        and sending us your own advertisement for Red Bull.
      </p>
      <h3>RED LETTER</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          ?IPCEE → ? IP / CE / E → ? PI / EC / E → <b>?PIECE</b>
        </Clue>
      </p>
      <p>
        Disguised as a puzzle about chemistry, this mini-puzzle is actually a
        book cipher that can be decoded using the KJV standard bible. Each
        sequence denotes the book (represented by a chemical symbol), chapter,
        the verse and the word in that verse. Take the first letter from each
        word to get the answer/ answer checker location for this puzzle.
      </p>
      <Table className="app-table-3">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Book</th>
            <th>Chapter</th>
            <th>Verse</th>
            <th>Word</th>
            <th>Enumeration</th>
            <th>First Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">Ps</td>
            <td>Psalms</td>
            <td className="text-center">23</td>
            <td className="text-center">4</td>
            <td className="text-center">7</td>
            <td>Valley</td>
            <td className="text-center">V</td>
          </tr>
          <tr>
            <td className="text-center">Mk</td>
            <td>Mark</td>
            <td className="text-center">3</td>
            <td className="text-center">8</td>
            <td className="text-center">6</td>
            <td>Idumaea</td>
            <td className="text-center">I</td>
          </tr>
          <tr>
            <td className="text-center">Ro</td>
            <td>Romans</td>
            <td className="text-center">6</td>
            <td className="text-center">19</td>
            <td className="text-center">22</td>
            <td>Servants</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td className="text-center">Jg</td>
            <td>Judges</td>
            <td className="text-center">21</td>
            <td className="text-center">3</td>
            <td className="text-center">7</td>
            <td>Israel</td>
            <td className="text-center">I</td>
          </tr>
          <tr>
            <td className="text-center">Ge</td>
            <td>Genesis</td>
            <td className="text-center">32</td>
            <td className="text-center">15</td>
            <td className="text-center">10</td>
            <td>Ten</td>
            <td className="text-center">T</td>
          </tr>
          <tr>
            <td className="text-center">I</td>
            <td>Isaiah</td>
            <td className="text-center">7</td>
            <td className="text-center">8</td>
            <td className="text-center">3</td>
            <td>Head</td>
            <td className="text-center">H</td>
          </tr>
          <tr>
            <td className="text-center">Ac</td>
            <td>Acts</td>
            <td className="text-center">28</td>
            <td className="text-center">7</td>
            <td className="text-center">4</td>
            <td>Quarters</td>
            <td className="text-center">Q</td>
          </tr>
          <tr>
            <td className="text-center">K 1+</td>
            <td>1 Kings</td>
            <td className="text-center">18</td>
            <td className="text-center">25</td>
            <td className="text-center">16</td>
            <td>Dress</td>
            <td className="text-center">D</td>
          </tr>
          <tr>
            <td className="text-center">Ac</td>
            <td>Acts</td>
            <td className="text-center">22</td>
            <td className="text-center">27</td>
            <td className="text-center">15</td>
            <td>Roman</td>
            <td className="text-center">R</td>
          </tr>
          <tr>
            <td className="text-center">Re</td>
            <td>Revelation</td>
            <td className="text-center">21</td>
            <td className="text-center">6</td>
            <td className="text-center">18</td>
            <td>End</td>
            <td className="text-center">E</td>
          </tr>
          <tr>
            <td className="text-center">Mt</td>
            <td>Matthew</td>
            <td className="text-center">13</td>
            <td className="text-center">56</td>
            <td className="text-center">3</td>
            <td>Sisters</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td className="text-center">K 1+</td>
            <td>1 Kings</td>
            <td className="text-center">1</td>
            <td className="text-center">51</td>
            <td className="text-center">5</td>
            <td>Solomon</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td className="text-center">Le</td>
            <td>Leviticus</td>
            <td className="text-center">18</td>
            <td className="text-center">3</td>
            <td className="text-center">8</td>
            <td>Egypt</td>
            <td className="text-center">E</td>
          </tr>
          <tr>
            <td className="text-center">Lu</td>
            <td>Luke</td>
            <td className="text-center">11</td>
            <td className="text-center">14</td>
            <td className="text-center">7</td>
            <td>Devil</td>
            <td className="text-center">D</td>
          </tr>
          <tr>
            <td className="text-center">Ps</td>
            <td>Psalms</td>
            <td className="text-center">105</td>
            <td className="text-center">15</td>
            <td className="text-center">5</td>
            <td>Anointed</td>
            <td className="text-center">A</td>
          </tr>
          <tr>
            <td className="text-center">Pr</td>
            <td>Proverbs</td>
            <td className="text-center">23</td>
            <td className="text-center">32</td>
            <td className="text-center">8</td>
            <td>Serpent</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td className="text-center">Sa 2+</td>
            <td>2 Samuel</td>
            <td className="text-center">15</td>
            <td className="text-center">27</td>
            <td className="text-center">8</td>
            <td>Priest</td>
            <td className="text-center">P</td>
          </tr>
          <tr>
            <td className="text-center">Jb</td>
            <td>Job</td>
            <td className="text-center">4</td>
            <td className="text-center">10</td>
            <td className="text-center">2</td>
            <td>Roaring</td>
            <td className="text-center">R</td>
          </tr>
          <tr>
            <td className="text-center">Jb</td>
            <td>Job</td>
            <td className="text-center">16</td>
            <td className="text-center">17</td>
            <td className="text-center">4</td>
            <td>Injustice</td>
            <td className="text-center">I</td>
          </tr>
          <tr>
            <td className="text-center">Js</td>
            <td>Joshua</td>
            <td className="text-center">4</td>
            <td className="text-center">19</td>
            <td className="text-center">23</td>
            <td>East</td>
            <td className="text-center">E</td>
          </tr>
          <tr>
            <td className="text-center">Pr</td>
            <td>Proverbs</td>
            <td className="text-center">21</td>
            <td className="text-center">3</td>
            <td className="text-center">13</td>
            <td>Sacrifice</td>
            <td className="text-center">S</td>
          </tr>
          <tr>
            <td className="text-center">Tt</td>
            <td>Titus</td>
            <td className="text-center">1</td>
            <td className="text-center">14</td>
            <td className="text-center">15</td>
            <td>Truth</td>
            <td className="text-center">T</td>
          </tr>
        </tbody>
      </Table>
      <p>This sub-puzzle answer reads as</p>
      <p>
        <Clue>VISIT HQ DRESSED AS PRIEST</Clue>
      </p>
      <p>
        You are required to book an in-person appointment with TTBNL, and get a
        'priest' to find this puzzle's answer submission box, located at Hunt
        HQ.
      </p>
      <h3>RADIO SILENCE</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          ?APITNET → ? AP / IT / NE / T → ? PA / TI / EN / T → <b>?PATIENT</b>
        </Clue>
      </p>
      <p>
        As hinted at by the title and flavour, each word or phrase in the audio
        recording references a word from the NATO phonetic alphabet used in
        radio communications. Taking each associated letter in order gives 24
        letters that have been encoded using the Playfair cipher. The last part
        of the message reads <b>THE CODE IS THE KEY</b>. Appropriately, the key
        to deciphering this text is the word NATO.
      </p>
      <b>THIS TABLE IS BROKEN</b>
      <Table>
        <tbody>
          <tr>
            <td className="text-center">Airline</td>
            <td className="text-center">Peruvian Capital</td>
            <td className="text-center">Winner</td>
            <td className="text-center">Reflection</td>
            <td className="text-center">Month</td>
            <td className="text-center">Alcoholic Beverage</td>
            <td className="text-center">Unit of Measure</td>
            <td className="text-center">Beginning</td>
            <td className="text-center">Prestigious Award</td>
            <td className="text-center">American</td>
            <td className="text-center">Congratulatory Remark</td>
            <td className="text-center">Country</td>
            <td className="text-center">Unvarying</td>
          </tr>
          <tr>
            <td className="text-center">Prestigious Award</td>
            <td className="text-center">Mountain Range</td>
            <td className="text-center">Latin Dance</td>
            <td className="text-center">Male Lover</td>
            <td className="text-center">Unit of Measure</td>
            <td className="text-center">Silent Actor</td>
            <td className="text-center">Father</td>
            <td className="text-center">Airline</td>
            <td className="text-center">Latin Dance</td>
            <td className="text-center">Medical Procedure</td>
            <td className="text-center">Reflection</td>
            <td className="text-center">Latin Dance</td>
            <td className="text-center">Accommodation</td>
          </tr>
          <tr>
            <td className="text-center">Reflection</td>
            <td className="text-center">Silent Actor</td>
            <td className="text-center">Prestigious Award</td>
            <td className="text-center">Airline</td>
            <td className="text-center">Reflection</td>
            <td className="text-center">Country</td>
            <td className="text-center">Mountain Range</td>
            <td className="text-center">Latin Dance</td>
            <td className="text-center">Accommodation</td>
            <td className="text-center">Reflection</td>
            <td className="text-center">Unit of Measure</td>
            <td className="text-center">Reflection</td>
            <td className="text-center">American</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr>
            <td className="text-center">India</td>
            <td className="text-center">Victor</td>
            <td className="text-center">Sierra</td>
            <td className="text-center">Bravo</td>
            <td className="text-center">Echo</td>
            <td className="text-center">Alfa</td>
            <td className="text-center">Foxtrot</td>
            <td className="text-center">Alfa</td>
            <td className="text-center">Yankee</td>
            <td className="text-center">Sierra</td>
            <td className="text-center">Kilo</td>
            <td className="text-center">Echo</td>
            <td className="text-center">Charlie</td>
          </tr>
          <tr>
            <td className="text-center">Tango</td>
            <td className="text-center">Mike</td>
            <td className="text-center">Oscar</td>
            <td className="text-center">Hotel</td>
            <td className="text-center">Tango</td>
            <td className="text-center">X-Ray</td>
            <td className="text-center">India</td>
            <td className="text-center">Alfa</td>
            <td className="text-center">Romeo</td>
            <td className="text-center">November</td>
            <td className="text-center">Romeo</td>
            <td className="text-center">Tango</td>
            <td className="text-center">Hotel</td>
          </tr>
          <tr>
            <td className="text-center">Echo</td>
            <td className="text-center">Charlie</td>
            <td className="text-center">Oscar</td>
            <td className="text-center">Delta</td>
            <td className="text-center">Echo</td>
            <td className="text-center">India</td>
            <td className="text-center">Sierra</td>
            <td className="text-center">Tango</td>
            <td className="text-center">Hotel</td>
            <td className="text-center">Echo</td>
            <td className="text-center">Kilo</td>
            <td className="text-center">Echo</td>
            <td className="text-center">Yankee</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>DLVENW KAOYBI UOSTRK CPDTXE / THE CODE IS THE KEY</b>
      </p>
      <p>
        Using the convention that I/J is the same letter, the deciphered message
        reads
      </p>
      <p>
        <Clue>FIX CAVITY SAMS BROKEN HEART</Clue>
      </p>
      <p>
        Once completed, the teams will have to play a game of Operation, and
        remove the heart from Cavity Sam. To complete this puzzle, one might
        suggest you need to just be patient.
      </p>
      <h3>TUNNEL VISION</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          IWNDWO? → IW / ND / WO ? → WI / ND / OW ? → <b>WINDOW?</b>
        </Clue>
      </p>
      <p>
        This puzzle was intended to be a joke about how most people have "tunnel
        vision" when it comes to purchasing tech related products. Either you
        are a Windows user, a Mac OS user, or a Linux professional. It is
        nothing more than a standard crossword puzzle, however some of the clues
        have been "forgotten" and replaced by numbers. Completing the grid will
        allow us to make educated guesses as to the forgotten words. Taking
        these missing words in order of the clues spells out the instruction
        indicating how to find this puzzles answer submission box.
      </p>
      <Crossword
        data={crosswordGrid}
        fill={crosswordFill}
        shading={crosswordShade}
      />
      <p>
        <Clue>THROW SHADE TOWARDS MICROSOFT OPERATING SYSTEM</Clue>
      </p>
      <p>
        You are required to record and send TTBNL a short video or audio clip of
        a team member explaining why Linux or Mac OS is better than Windows.
      </p>
      <h3>GRID LOCK</h3>
      <p>
        Provided Answer:{' '}
        <Clue>
          UMRDRE? → UM / RD / RE ? → MU / RD / ER ? → <b>MURDER?</b>
        </Clue>
      </p>
      <p>
        Solve the killer sudoku puzzle as per normal, and then use a Caesar
        shift on each letter as indicated by the value in that square. We should
        notice that the cages of the letter grid don't align with the cages of
        the sudoku. By 'twisting' (See what we did there!) or turning the grid
        along the center horizontal axis, the squares now align, and a readable
        message appears. Colours have been used in this solution to denote the
        cages for clarity.
      </p>
      <Table className="app-table-5">
        <tbody>
          <tr>
            <td className="bg-[#ffff00]">2</td>
            <td className="bg-[#00ff00]">3</td>
            <td className="bg-[#00ff00]">1</td>
            <td className="bg-[#00ffff]">4</td>
          </tr>
          <tr>
            <td className="bg-[#ffff00]">1</td>
            <td className="bg-[#ff00ff]">4</td>
            <td className="bg-[#ffff00]">2</td>
            <td className="bg-[#00ffff]">3</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">4</td>
            <td className="bg-[#ff00ff]">2</td>
            <td className="bg-[#ffff00]">3</td>
            <td className="bg-[#00ff00]">1</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">3</td>
            <td className="bg-[#00ffff]">1</td>
            <td className="bg-[#00ff00]">4</td>
            <td className="bg-[#00ff00]">2</td>
          </tr>
        </tbody>
      </Table>
      <Table className="app-table-5">
        <tbody>
          <tr>
            <td className="bg-[#00ffff]">F</td>
            <td className="bg-[#00ffff]">F</td>
            <td className="bg-[#00ff00]">R</td>
            <td className="bg-[#00ff00]">G</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">M</td>
            <td className="bg-[#ff00ff]">O</td>
            <td className="bg-[#ffff00]">H</td>
            <td className="bg-[#00ff00]">T</td>
          </tr>
          <tr>
            <td className="bg-[#ffff00]">F</td>
            <td className="bg-[#ff00ff]">E</td>
            <td className="bg-[#ffff00]">E</td>
            <td className="bg-[#00ffff]">U</td>
          </tr>
          <tr>
            <td className="bg-[#ffff00]">U</td>
            <td className="bg-[#00ff00]">W</td>
            <td className="bg-[#00ff00]">B</td>
            <td className="bg-[#00ffff]">K</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table className="app-table-5">
        <tbody>
          <tr>
            <td className="bg-[#ffff00]">U</td>
            <td className="bg-[#00ff00]">W</td>
            <td className="bg-[#00ff00]">B</td>
            <td className="bg-[#00ffff]">K</td>
          </tr>
          <tr>
            <td className="bg-[#ffff00]">F</td>
            <td className="bg-[#ff00ff]">E</td>
            <td className="bg-[#ffff00]">E</td>
            <td className="bg-[#00ffff]">U</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">M</td>
            <td className="bg-[#ff00ff]">O</td>
            <td className="bg-[#ffff00]">H</td>
            <td className="bg-[#00ff00]">T</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">F</td>
            <td className="bg-[#00ffff]">F</td>
            <td className="bg-[#00ff00]">R</td>
            <td className="bg-[#00ff00]">G</td>
          </tr>
        </tbody>
      </Table>
      <Table className="app-table-5">
        <tbody>
          <tr>
            <td className="bg-[#ffff00]">S</td>
            <td className="bg-[#00ff00]">T</td>
            <td className="bg-[#00ff00]">A</td>
            <td className="bg-[#00ffff]">G</td>
          </tr>
          <tr>
            <td className="bg-[#ffff00]">E</td>
            <td className="bg-[#ff00ff]">A</td>
            <td className="bg-[#ffff00]">C</td>
            <td className="bg-[#00ffff]">R</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">I</td>
            <td className="bg-[#ff00ff]">M</td>
            <td className="bg-[#ffff00]">E</td>
            <td className="bg-[#00ff00]">S</td>
          </tr>
          <tr>
            <td className="bg-[#00ffff]">C</td>
            <td className="bg-[#00ffff]">E</td>
            <td className="bg-[#00ff00]">N</td>
            <td className="bg-[#00ff00]">E</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Clue>STAGE A CRIME SCENE</Clue>
      </p>
      <p>
        This puzzle's answer submission box can be found by getting the solving
        team to create a fake a crime scene and sending us 'evidence'. Take a
        few photos or a short video and send TTBNL an email. Photos or videos of
        real crime scenes were not accepted.
      </p>
    </Appendix>
    <AuthorsNotes>
      <p>
        Full credit goes to Preston Phillips for the original concept. This
        puzzle was originally destined to be a meta for an entire hidden round,
        where solvers would be given the puzzles and answers straight away while
        the answer checkers would be absent, however the editors decided to axe
        it due to its convoluted/experimental nature and time constraints. I
        wasn't overly fond of this decision and decided to adopt it and
        repurpose it into a mini-meta/feeder puzzle. While a few key elements
        were ultimately changed, the essence of what this puzzle tried to
        accomplish remained intact.
      </p>
      <p>
        I would also like to thank The Dan Miller for his assistance with the
        MIT layout mini-puzzle.
      </p>
      <p>
        For the mini-puzzle titled Flying High, I really wanted the instruction
        to read GIVE A RED BULL WINGS for the sake of introducing more ambiguity
        and creativity, however I couldn't get the extraction to work.
      </p>
      <p>
        Finally, yes, I did include a reference to a criminally underrated
        Australian alternative rock group (Thirsty Merc). I absolutely love
        their music and anyone who is still reading this solution page right to
        the very bottom and hasn't yet moved on to reading something more
        exciting should definitely go and check them out.
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>Jason Bourne/Matt Damon&mdash;fair use</p>
      <p>
        Conrad B. Hart&mdash;public domain/free download from
        https://www.peakpx.com/en/hd-wallpaper-desktop-asanp/download/1920x1080
      </p>
      <p>Leonard Shelby in <i>Memento</i>&mdash;fair use</p>
      <p>Sebastian Stan/Bucky Barnes in <i>The Winter Soldier</i>&mdash;fair use</p>
      <p>Walter Bishop in <i>Fringe</i>&mdash;fair use</p>
      <p>
        Alex Mercer&mdash;appears on Amino wiki
        https://aminoapps.com/c/prototype-amino/page/item/alex-mercer/Q4o0_MmuYIlePkqo5Q73w58m8qV5nQKR6P
      </p>
      <p>Jane Doe/Emily Rohm in <i>Ride the Cyclone</i>&mdash;fair use</p>
    </Attributions>
    <style jsx global>{`
      .table-1 td:nth-child(2),
      .table-3 td:nth-child(2),
      .table-4 td:nth-child(2n + 1),
      .table-5 td:nth-child(n + 2),
      .app-table-1 td:nth-child(3),
      .app-table-2 td:nth-child(n + 4),
      .app-table-3 td:nth-child(7) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        white-space: nowrap;
      }
      .table-5 td:nth-child(3),
      .app-table-1 td:nth-child(n + 2),
      .app-table-1 th:nth-child(n + 2),
      .app-table-2 td:nth-child(5),
      .app-table-3 td:nth-child(2n + 1),
      .app-table-3 td:nth-child(4) {
        text-align: center;
      }
      .app-table-5 td {
        width: 30px !important;
        height: 30px !important;
        padding: 2px !important;
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
