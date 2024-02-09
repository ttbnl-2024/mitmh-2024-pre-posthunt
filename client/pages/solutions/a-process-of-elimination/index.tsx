import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Link from 'components/link';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import Wordsearch from 'components/wordsearch';

const SLUG = 'a-process-of-elimination';
const ANSWER = `TURNKEY SYSTEM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      When we first look at this puzzle, we are presented with a 12x12 square
      grid, with 3 letters in each cell. We are also given a list of 38 clues.
    </p>
    <p>
      Many of the clues are somewhat nonsensical and/or can be answered
      ambiguously. Eventually, we can determine that 24 of the clues have
      13-letter answers that can be found in the grid either across or down,
      with one letter missing. Additionally, each clue answer contains one of
      the words from the{' '}
      <Link href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet#Tables_2">
        1947 International Civil Aviation Organization (ICAO) alphabet
      </Link>
      . The 1947 ICAO alphabet was a precursor to the current NATO alphabet and
      is also known as the "Able Baker" alphabet, after the words for A and B
      (clued by the flavor text with Able capitalized).
    </p>

    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Missing letter</th>
          <th>Able Baker letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Minnesota senator fabricates</td>
          <td>
            <Monospace>KLOBU</Monospace>
            <u>
              <Monospace>CHA(R) LIE</Monospace>
            </u>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>What Buddhists may do</td>
          <td>
            <Monospace>REC</Monospace>
            <u>
              <Monospace>IT(E) M</Monospace>
            </u>
            <Monospace>ANTRAS</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Help with a status update</td>
          <td>
            <Monospace>(A)SSIS</Monospace>
            <u>
              <Monospace>T A RE</Monospace>
            </u>
            <Monospace>PORT</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Japanese musical instrument</td>
          <td>
            <Monospace>TOK</Monospace>
            <u>
              <Monospace>YO KE</Monospace>
            </u>
            <Monospace>YBOAR(D)</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            It's white, blue and red, with a mostly blue coat of arms at the top
          </td>
          <td>
            <Monospace>S(</Monospace>
            <u>
              <Monospace>L)OVE</Monospace>
            </u>
            <Monospace>NIAS FLAG</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cyborg CEO</td>
          <td>
            <Monospace>R</Monospace>
            <u>
              <Monospace>OBO E</Monospace>
            </u>
            <Monospace>X(E)CUTIVE</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Things with 8 protons and 8 electrons</td>
          <td>
            <Monospace>A(T)OMS O</Monospace>
            <u>
              <Monospace>F OX</Monospace>
            </u>
            <Monospace>YGEN</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>Distortion, overdrive or reverb</td>
          <td>
            <Monospace>GUI</Monospace>
            <u>
              <Monospace>(T)AR E</Monospace>
            </u>
            <Monospace>FFECTS</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Unplanned Japanese flower arrangement</td>
          <td>
            <Monospace>RANDO</Monospace>
            <u>
              <Monospace>M IK(E)</Monospace>
            </u>
            <Monospace>BANA</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jet factory worker's commute, maybe?</td>
          <td>
            <Monospace>D(R)IVE T</Monospace>
            <u>
              <Monospace>O BOE</Monospace>
            </u>
            <Monospace>ING</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Namesake of a Los Angeles theater</td>
          <td>
            <Monospace>JOH</Monospace>
            <u>
              <Monospace>N AN</Monospace>
            </u>
            <Monospace>(S)ON FORD</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Stroll through a Scottish city</td>
          <td>
            <Monospace>(W)AL</Monospace>
            <u>
              <Monospace>K IN G</Monospace>
            </u>
            <Monospace>LASGOW</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>Some Kermit/Miss Piggy fanfics (not that *ahem* we'd know)</td>
          <td>
            <Monospace>MUP</Monospace>
            <u>
              <Monospace>PET ER</Monospace>
            </u>
            <Monospace>OT(I)CA</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>The Snake River, for one</td>
          <td>
            <Monospace>IDA</Monospace>
            <u>
              <Monospace>HO W</Monospace>
            </u>
            <Monospace>A(T)ERWAY</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Fremantle Conspiracy actor</td>
          <td>
            <Monospace>ANT(H)ON</Monospace>
            <u>
              <Monospace>Y OKE</Monospace>
            </u>
            <Monospace>EFE</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>How you would describe paintings from a Soviet realist artist</td>
          <td>
            <Monospace>BY BOR(I)</Monospace>
            <u>
              <Monospace>S UGAR</Monospace>
            </u>
            <Monospace>OV</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Something you might find in a cemetery</td>
          <td>
            <Monospace>GRA(N)</Monospace>
            <u>
              <Monospace>ITE M</Monospace>
            </u>
            <Monospace>ARKER</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Singe Joe from Connecticut</td>
          <td>
            <u>
              <Monospace>CHAR LIE</Monospace>
            </u>
            <Monospace>BERM(A)N</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Top-notch long distance race</td>
          <td>
            <Monospace>EL</Monospace>
            <u>
              <Monospace>ITE M</Monospace>
            </u>
            <Monospace>ARATHO(N)</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Inquires of sch. official in Athens</td>
          <td>
            <Monospace>A(S)K</Monospace>
            <u>
              <Monospace>S UGA R</Monospace>
            </u>
            <Monospace>EGENT</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Someone who rates Kris Kringles</td>
          <td>
            <Monospace>SANTA REVIE(W)ER</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>An old-school flower</td>
          <td>
            <Monospace>R(E)T</Monospace>
            <u>
              <Monospace>RO GER</Monospace>
            </u>
            <Monospace>ANIUM</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Conflicts in South Africa</td>
          <td>
            <Monospace>ANGL</Monospace>
            <u>
              <Monospace>O BOE</Monospace>
            </u>
            <Monospace>R WA(R)S</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Return address, ZIP code, postage, etc.</td>
          <td>
            <Monospace>ENVELO</Monospace>
            <u>
              <Monospace>PE TER</Monospace>
            </u>
            <Monospace>M(S)</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we don't notice the ICAO letters, the missing letters spell{' '}
      <Monospace>FIND LETTERS WITHIN ANSWERS</Monospace>, cluing the fact that
      we will need those ICAO letters later on in the puzzle.
    </p>
    <p>At this point, we are left with 144 letters in a 12x12 grid:</p>

    <div className="overflow-x-auto">
      <Wordsearch
        tableClass="mx-auto"
        cellClass="border border-black p-1"
        data={[
          ['A', 'I', 'R', 'A', 'D', 'E', 'E', 'U', 'Z', 'D', 'H', 'S'],
          ['E', 'M', 'P', 'R', 'S', 'S', 'E', 'K', 'K', 'A', 'E', 'H'],
          ['L', 'O', 'R', 'A', 'G', 'O', 'A', 'C', 'R', 'E', 'H', 'U'],
          ['B', 'I', 'P', 'D', 'F', 'O', 'P', 'S', 'S', 'A', 'C', 'R'],
          ['I', 'O', 'P', 'H', 'R', 'T', 'A', 'E', 'P', 'M', 'S', 'U'],
          ['E', 'O', 'Y', 'D', 'R', 'S', 'H', 'R', 'V', 'E', 'E', 'P'],
          ['E', 'I', 'S', 'C', 'E', 'O', 'S', 'S', 'V', 'B', 'E', 'I'],
          ['N', 'O', 'W', 'A', 'N', 'S', 'A', 'D', 'J', 'E', 'H', 'T'],
          ['S', 'T', 'T', 'B', 'S', 'S', 'C', 'O', 'T', 'R', 'R', 'U'],
          ['A', 'I', 'O', 'H', 'O', 'P', 'E', 'I', 'T', 'A', 'N', 'O'],
          ['G', 'I', 'R', 'A', 'O', 'T', 'A', 'I', 'I', 'C', 'N', 'O'],
          ['M', 'T', 'V', 'A', 'C', 'E', 'H', 'K', 'T', 'E', 'L', 'N'],
        ]}
      />
    </div>

    <p>
      The flavor text talking about going deeper into the matrix helps us know
      that we need to take the matrix to the next level. We can then arrange
      these 144 letters in a variety of ways, but if we continue the trigram
      pattern, we will have 48 trigrams (144 / 3). Noting we have 14 clues
      remaining, this clues making the new grid either 6x8 or 8x6, again with 3
      letters per cell. We can notice that taking the letters in reading order
      allows us to make groups of 3 letters with each cell having its 3 letters
      in alphabetical order.
    </p>

    <div className="overflow-x-auto">
      <Wordsearch
        tableClass="mx-auto"
        cellClass="border border-black p-1"
        data={[
          ['AIR', 'ADE', 'EUZ', 'DHS', 'EMP', 'RSS'],
          ['EKK', 'AEH', 'LOR', 'AGO', 'ACR', 'EHU'],
          ['BIP', 'DFO', 'PSS', 'ACR', 'IOP', 'HRT'],
          ['AEP', 'MSU', 'EOY', 'DRS', 'HRV', 'EEP'],
          ['EIS', 'CEO', 'SSV', 'BEI', 'NOW', 'ANS'],
          ['ADJ', 'EHT', 'STT', 'BSS', 'COT', 'RRU'],
          ['AIO', 'HOP', 'EIT', 'ANO', 'GIR', 'AOT'],
          ['AII', 'CNO', 'MTV', 'ACE', 'HKT', 'ELN'],
        ]}
      />
    </div>

    <p>
      There are two ways we can arrange this grid (6x8 or 8x6), but only this
      way yields answers to the clues in the next section.
    </p>
    <p>
      We can then repeat the clue process with the 14 remaining clues. There are
      six 9-letter answers and eight 7-letter answers to the remaining clues. Each
      answer can again be found in the grid. 7-letter answers are found across
      and 9-letter answers are found down, with one letter per cell, once again
      having one letter from the answer missing.
    </p>
    <p>
      This time, the missing letters spell{' '}
      <Monospace>FIND SANDWICHES</Monospace>. We notice that each of the 14
      answers in this part of the puzzle have a "sandwich" letter, with the same
      letter surrounding a different letter (e.g.,{' '}
      <Monospace>DEDuction</Monospace>, <Monospace>horSEShoe</Monospace> or{' '}
      <Monospace>wIKIpedia</Monospace>).
    </p>

    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Missing letter</th>
          <th>Sandwiched letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Denies</td>
          <td>
            <Monospace>RE(F)USES</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Pakistan city</td>
          <td>
            <Monospace>KARACH(I)</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Movie snack</td>
          <td>
            <Monospace>POPCOR(N)</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Earn or merit</td>
          <td>
            <Monospace>(D)ESERVE</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Meeting</td>
          <td>
            <Monospace>SES(S)ION</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Australian airline</td>
          <td>
            <Monospace>JETST(A)R</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>View</td>
          <td>
            <Monospace>OPINIO(N)</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Prescribe</td>
          <td>
            <Monospace>(D)ICTATE</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Online reference work</td>
          <td>
            <Monospace>(W)IKIPEDIA</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>Piece of logic</td>
          <td>
            <Monospace>DEDUCT(I)ON</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Biosphere</td>
          <td>
            <Monospace>E(C)OSYSTEM</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>College football stadium nickname, with The</td>
          <td>
            <Monospace>HORSES(H)OE</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Taxes, e.g.</td>
          <td>
            <Monospace>PAP(E)RWORK</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Band practice</td>
          <td>
            <Monospace>REHEAR(S)AL</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>We now have 48 letters remaining:</p>

    <div className="overflow-x-auto">
      <Wordsearch
        tableClass="mx-auto"
        cellClass="border border-black p-1"
        data={[
          ['A', 'A', 'Z', 'D', 'M', 'S'],
          ['E', 'H', 'L', 'G', 'R', 'U'],
          ['B', 'F', 'S', 'A', 'I', 'T'],
          ['A', 'M', 'O', 'D', 'H', 'P'],
          ['I', 'O', 'V', 'B', 'N', 'S'],
          ['A', 'H', 'S', 'B', 'C', 'U'],
          ['A', 'H', 'T', 'A', 'G', 'T'],
          ['I', 'O', 'V', 'C', 'H', 'N'],
        ]}
      />
    </div>

    <p>
      Using these 48 letters we can make another grid with 3 letters per cell.
      Once again, the trigrams we create are internally alphabetical as a check.
    </p>

    <p>
      But we no longer have any provided clues! However the extra letters from
      the 2 previous rounds (hidden ICAO letters from Round 1 and sandwiched
      letters from Round 2) have not yet been used. Spelled out in reading order
      and using both the letters from Round 1 and Round 2, they give:{' '}
    </p>

    <p className="break-words">
      <Monospace>CITYLOFTMONKPHYSICISTROPEROSESNAKEYEAH</Monospace>
    </p>

    <p>
      Or, separating on word breaks, we get the following eight clues (in
      alphabetical order by clue):
    </p>
    <ul>
      <li>City</li>
      <li>Loft</li>
      <li>Monk</li>
      <li>Physicist</li>
      <li>Rope</li>
      <li>Rose</li>
      <li>Snake</li>
      <li>Yeah</li>
    </ul>

    <p>With 8 clues, we want to make a 4x4 grid:</p>

    <div className="overflow-x-auto">
      <Wordsearch
        tableClass="mx-auto"
        cellClass="border border-black p-1"
        data={[
          ['AAZ', 'DMS', 'EHL', 'GRU'],
          ['BFS', 'AIT', 'AMO', 'DHP'],
          ['IOV', 'BNS', 'AHS', 'BCU'],
          ['AHT', 'AGT', 'IOV', 'CHN'],
        ]}
      />
    </div>

    <p>
      Again, the answers to these 8 clues are all 5 letters long, and can be
      found reading either across or down in the grid. This time, we also find
      that the missing letter is a doubled letter.
    </p>

    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Snake</td>
          <td>
            <Monospace>AD(D)ER</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rose</td>
          <td>
            <Monospace>STO(O)D</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Physicist</td>
          <td>
            <Monospace>ISA(A)C</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Loft</td>
          <td>
            <Monospace>AT(T)IC</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Monk</td>
          <td>
            <Monospace>AB(B)OT</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>City</td>
          <td>
            <Monospace>SANA(A)</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rope</td>
          <td>
            <Monospace>LAS(S)O</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Yeah</td>
          <td>
            <Monospace>UH(H)UH</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      When the letters in the answers are removed, we're left with a 4x4 grid
      with one letter each:
    </p>

    <div className="overflow-x-auto">
      <Wordsearch
        tableClass="mx-auto"
        cellClass="border border-black p-1"
        data={[
          ['Z', 'M', 'H', 'G'],
          ['F', 'I', 'M', 'P'],
          ['V', 'B', 'H', 'B'],
          ['H', 'G', 'V', 'N'],
        ]}
      />
    </div>

    <p>
      The missing / doubled letters spell <Monospace>DO ATBASH</Monospace>.
      Applying the{' '}
      <Link href="https://en.wikipedia.org/wiki/Atbash">Atbash cipher</Link> to
      the 16 remaining letters (<Monospace>ZMHGFIMPVBHBHGVN</Monospace>) yields{' '}
      <Monospace>ANSTURNKEYSYSTEM</Monospace>, providing the puzzle's answer:{' '}
      <Answerize>TURNKEY SYSTEM</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        This puzzle was inspired by the <i>Quote Square</i> puzzles that are a
        staple in the introductory section of the monthly P&amp;A magazines. In
        those puzzles, you're also presented with a series of clues and a
        rectangular grid with 3 letters per cell. You use one letter in each
        cell for each of the down and across clues, leaving you with one letter
        in each cell, which usually spells out a quote.
      </p>
      <p>
        I (Dan) had the idea&mdash;what if you did a quote square, but then used the
        letters that remained to make ANOTHER quote square. Plus, I am a sucker
        for puzzles where the answer is literally staring at you the whole time.
        After tinkering around with different sizes, I came up with a 12x12
        grid, which would then go to a 6x8 and 4x4 grid.
      </p>
      <p>
        We tested a few different mechanisms for encoding / hiding different
        letters. Originally for the first round, we had used the NATO letters,
        but for reasons that are not that interesting, we had to switch to use a
        different word alphabet, settling on the 1947 ICAO alphabet.
      </p>
    </AuthorsNotes>
    <Appendix>
      <p>During the first stage, there is one possible ambiguity.</p>
      <ul>
        <li>
          <Monospace>ANGLO BOER WARS</Monospace> has a possible ambiguity in the
          2nd to last cell, which could be either an <Monospace>A</Monospace> or{' '}
          <Monospace>R</Monospace> (with the other one missing). This is
          resolved and checked by the across answer,{' '}
          <Monospace>JOHN ANSON FORD</Monospace>, which requires the{' '}
          <Monospace>R</Monospace> in that cell.
        </li>
      </ul>
    </Appendix>
    <style jsx>{`
      th:nth-child(3),
      td:nth-child(3),
      th:nth-child(4),
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
