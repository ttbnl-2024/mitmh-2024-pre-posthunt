import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'befouled-spellings';
const ANSWER = `JAMES E SCRIPPS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>This puzzle involves a double meaning of "spelling bee":</p>
    <ol>
      <li>
        NYT's Spelling Bee game, clued by the gold hexagon and the use of
        exactly seven different letters in each set of clue answers.
      </li>
      <li>The Scripps National Spelling Bee, indicated by the flavortext.</li>
    </ol>
    <p>
      Each set of clues leads to an existing NYT Spelling Bee game that ran in
      the indicated month/year.{' '}
      <a href="https://www.sbsolver.com">https://www.sbsolver.com</a> has a
      searchable full archive of the games, which helps in confirmation from
      partial information. It turns out there is exactly one Scripps National
      Spelling Bee winning word that can be formed in each game. The
      flavortext's "we had to make our dictionary a little bigger" tells us to
      disregard whether or not the winning word was excluded from the canonical
      wordlist.
    </p>
    <p>
      All the clue answers follow, with the NYT Spelling Bee dates and letters,
      and Scripps National Spelling Bee winning words labeled by year.
    </p>
    <h3>
      05-15-2018: <u>A</u>CEHKNY
    </h3>
    <ul>
      <li>ANKH: Symbol of life</li>
      <li>CYAN: Mix of blue and green light</li>
      <li>EACH: Per</li>
      <li>KAYAK: Palindromic boat</li>
      <li>KNACK: Winning word [1928]</li>
    </ul>
    <h3>
      04-15-2019: <u>T</u>AFLNOR
    </h3>
    <ul>
      <li>AORTA: Major artery</li>
      <li>FLAT: Two-dimensional</li>
      <li>NONFAT: Like some milk</li>
      <li>RANT: Tirade</li>
      <li>RATOON: Winning word [1966]</li>
    </ul>
    <h3>
      10-02-2019: <u>P</u>CHLORY
    </h3>
    <ul>
      <li>CHLOROPHYLL: Winning word [1947]</li>
      <li>LOOP: "For" or "while" follower</li>
      <li>PLOY: Scheme</li>
      <li>POOCH: Doggie</li>
      <li>
        PYRO: <i>Team Fortress 2</i> class or <i>Genshin Impact</i> element
      </li>
    </ul>
    <h3>
      06-07-2020: <u>L</u>EFGNUV
    </h3>
    <ul>
      <li>ELEVEN: 5th prime</li>
      <li>FLUFF: Extraneous info</li>
      <li>
        GLEE: ___ club: choir group
      </li>
      <li>LUGE: Winning word [1984]</li>
      <li>
        NULL: ___ and void
      </li>
    </ul>
    <h3>
      08-12-2021: <u>I</u>ELMTUV
    </h3>
    <ul>
      <li>ELITE: Top-rate</li>
      <li>EMIT: Issue forth</li>
      <li>LIVE: Real-time</li>
      <li>MILIEU: Winning word [1985]</li>
      <li>
        TUTTI: ___-frutti
      </li>
    </ul>
    <h3>
      12-16-2021: <u>C</u>AEGILN
    </h3>
    <ul>
      <li>CANINE: Sharp tooth</li>
      <li>CLING: Hang on, as lint</li>
      <li>ELEGIACAL: Winning word [1988]</li>
      <li>GLANCE: Brief look</li>
      <li>NIECE: Younger relative</li>
    </ul>
    <h3>
      02-25-2022: <u>D</u>CIMNOU
    </h3>
    <ul>
      <li>CODON: It maps to an amino acid</li>
      <li>CONDOMINIUM: Winning word [1956]</li>
      <li>DOOM: FPS whose 30th anniversary was on 12-10-2023</li>
      <li>
        MIND: ___ the gap
      </li>
      <li>UDON: Japanese noodles</li>
    </ul>
    <h3>
      09-03-2022: <u>R</u>GIMNPU
    </h3>
    <ul>
      <li>GRIP: Hold firmly</li>
      <li>INURN: Put six feet under</li>
      <li>MURMUR: Hum</li>
      <li>PURIM: Winning word [1983]</li>
      <li>RUNG: Step on a ladder</li>
    </ul>
    <h3>
      05-20-2023: <u>H</u>ACIRTU
    </h3>
    <ul>
      <li>CHIHUAHUA: Winning word [1967]</li>
      <li>CHURCH: Where to hear a sermon</li>
      <li>HAIR: 1969 Best Musical nominee</li>
      <li>THATCH: Tropical roof covering</li>
      <li>
        TRUTH: ___ or Dare
      </li>
    </ul>
    <h3>
      08-10-2023: <u>O</u>ABEKLN
    </h3>
    <ul>
      <li>ABALONE: Winning word [1968]</li>
      <li>BONE: One of 206 in the human body</li>
      <li>BOOK: One of 39 in the Old Testament</li>
      <li>KOALA: Eucalyptus eater</li>
      <li>NEON: Noble gas</li>
    </ul>
    <p>
      The clues labeled with the gold hexagon solve to <Clue>CLOT</Clue>,{' '}
      <Clue>PHD</Clue>, <Clue>AIR</Clue>. These provide a sorting to the center
      letters in the NYT Spelling Bee puzzles. Once sorted, we identify the word
      misspelled by the runner-up from each Scripps Spelling Bee, then index
      using the parenthetical digits (for 1928, the runner-up had the same word
      as the winning word, <Clue>KNACK</Clue>, so use the 3rd place finisher's{' '}
      <Clue>BACILLUS</Clue>).
    </p>
    <Table className="final-table">
      <thead>
        <tr>
          <th>NYT Bee Letters</th>
          <th>Winning Word</th>
          <th>Year</th>
          <th>Runner-up Word</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <u>C</u>
            AEGILN
          </td>
          <td>ELEGIACAL</td>
          <td>1988</td>
          <td>STERTOROUS</td>
          <td>3</td>
          <td>E</td>
        </tr>
        <tr>
          <td>
            <u>L</u>
            EFGNUV
          </td>
          <td>LUGE</td>
          <td>1984</td>
          <td>TOWHEE</td>
          <td>3</td>
          <td>W</td>
        </tr>
        <tr>
          <td>
            <u>O</u>
            ABEKLN
          </td>
          <td>ABALONE</td>
          <td>1968</td>
          <td>MYOSIN</td>
          <td>4</td>
          <td>S</td>
        </tr>
        <tr>
          <td>
            <u>T</u>
            AFLNOR
          </td>
          <td>RATOON</td>
          <td>1966</td>
          <td>SACHEM</td>
          <td>4</td>
          <td>H</td>
        </tr>
        <tr>
          <td>
            <u>P</u>
            CHLORY
          </td>
          <td>CHLOROPHYLL</td>
          <td>1947</td>
          <td>MAGGOTY</td>
          <td>2</td>
          <td>A</td>
        </tr>
        <tr>
          <td>
            <u>H</u>
            ACIRTU
          </td>
          <td>CHIHUAHUA</td>
          <td>1967</td>
          <td>MILLINE</td>
          <td>3</td>
          <td>L</td>
        </tr>
        <tr>
          <td>
            <u>D</u>
            CIMNOU
          </td>
          <td>CONDOMINIUM</td>
          <td>1956</td>
          <td>AFFLATUS</td>
          <td>2</td>
          <td>F</td>
        </tr>
        <tr>
          <td>
            <u>A</u>
            CEHKNY
          </td>
          <td>KNACK*</td>
          <td>1928</td>
          <td>BACILLUS*</td>
          <td>1</td>
          <td>B</td>
        </tr>
        <tr>
          <td>
            <u>I</u>
            ELMTUV
          </td>
          <td>MILIEU</td>
          <td>1985</td>
          <td>FARRAGO</td>
          <td>4</td>
          <td>R</td>
        </tr>
        <tr>
          <td>
            <u>R</u>
            GIMNPU
          </td>
          <td>PURIM</td>
          <td>1983</td>
          <td>RATATOUILLE</td>
          <td>6</td>
          <td>O</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Using the provided enumeration, the extracted letters are a clue phrase:{' '}
      <Clue>E.W.'S HALF-BRO</Clue>. E.W. refers to E.W. Scripps, the namesake of
      the company hosting the Scripps National Spelling Bee. His half-brother is
      the answer, <Answerize>{ANSWER}</Answerize>. (Guesses of{' '}
      <Clue>JAMES SCRIPPS</Clue> and <Clue>JAMES EDMUND SCRIPPS</Clue> will tell
      us to use the middle initial.)
    </p>
    <style jsx global>{`
      h3 u,
      .final-table u {
        background-color: #f1c232;
      }
      .final-table td:nth-child(1),
      .final-table td:nth-child(4),
      .final-table td:nth-child(6) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .final-table td:nth-child(n + 5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
