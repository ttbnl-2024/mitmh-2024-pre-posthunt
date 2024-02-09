import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'erudite-game';
const ANSWER = `RYSA WALKER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We start by examining the flavor and we see reference to an "encyclopedia"
      and where we're using "missing links". This suggests Wikipedia.
    </p>
    <p>
      We see in the puzzle that each student is starting with a book, and the
      puzzle's first section is made up of nine topics. There are the starting
      points for chains of links to the other titles in the middle section. As
      the top and middle are alphabetized, but the bottom is not, we can assume
      ordering is given by the section at the bottom.
    </p>
    <p>
      Looking at a few Wikipedia pages for these topics, we see that some can go
      from one to another by links, but we get more than 9 strands/chains
      because there are missing links. Either manually or by use of Wikipedia's
      or third party tools, we can find the connections through these missing
      links. Additionally we note that "Game" in the title is a reference to the
      several Wikipedia race games that try to find the shortest path from one
      topic to another (even though we're not racing here, but instead finding
      paths matching the given titles).
    </p>
    <p>
      Other things we notice is that we are making chains of length five and
      that all the starting words at the top are 5 letters. The first letters of
      our word list share significant overlap with our starting words. This is
      reinforced by{' '}
      <Clue>
        Epo<b>xy</b>
      </Clue>{' '}
      and{' '}
      <Clue>
        <b>X</b>alapa
      </Clue>
      ,{' '}
      <Clue>
        <b>Y</b>ucatan
      </Clue>
      .
    </p>
    <p>
      The first letter of each word in the chain forms the first word in the
      chain, reinforcing that we're forming chains of length 5. However, we're
      missing one title per chain, which is always somewhere in the middle,
      never at an end.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Start</th>
          <th></th>
          <th></th>
          <th></th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Anime</td>
          <td className="bg-[#ffe599]">Neon Genesis Evangelion</td>
          <td>Introjection</td>
          <td>Mourning</td>
          <td>Ethiopia</td>
        </tr>
        <tr>
          <td>Canal</td>
          <td>Agriculture</td>
          <td className="bg-[#ffe599]">Natufian culture</td>
          <td>Almond</td>
          <td>Levi</td>
        </tr>
        <tr>
          <td>Epoxy</td>
          <td>Polymer</td>
          <td className="bg-[#ffe599]">Olmecs</td>
          <td>Xalapa</td>
          <td>Yucatán</td>
        </tr>
        <tr>
          <td>Faith</td>
          <td>Atheism</td>
          <td>Iceland</td>
          <td className="bg-[#ffe599]">Tundra</td>
          <td>Habitat conservation</td>
        </tr>
        <tr>
          <td>Omega</td>
          <td className="bg-[#ffe599]">Molecular evolution</td>
          <td>Escherichia coli</td>
          <td>Germany</td>
          <td>Art Deco</td>
        </tr>
        <tr>
          <td>Orbit</td>
          <td>Rocket</td>
          <td>Bernoulli's principle</td>
          <td className="bg-[#ffe599]">Isentropic process</td>
          <td>Turbine</td>
        </tr>
        <tr>
          <td>Radio</td>
          <td>Azerbaijan</td>
          <td>Decorative arts</td>
          <td className="bg-[#ffe599]">Industrial design</td>
          <td>Oscar Mayer</td>
        </tr>
        <tr>
          <td>Robot</td>
          <td>Open-source software</td>
          <td className="bg-[#ffe599]">Brian Behlendorf</td>
          <td>O'Reilly Media</td>
          <td>Tarsier</td>
        </tr>
        <tr>
          <td>Tiber</td>
          <td className="bg-[#ffe599]">Iberian language</td>
          <td>Béziers</td>
          <td>Edinburgh Airport</td>
          <td>Royal Mail</td>
        </tr>
      </tbody>
    </Table>
    <p>
      For example, the chain starting with <Clue>Epoxy</Clue> is continued with{' '}
      <Clue>Polymer</Clue>, (missing link starting with <Clue>O</Clue>), then{' '}
      <Clue>Xalapa</Clue>, and <Clue>Yucatán</Clue>. Even though there may be
      multiple ways to connect a chain across a missing link, there is only one
      way using a page that starts with the missing letter from the starting
      page title. Finally, we organize these missing links according to the
      order of the clues at the bottom. The missing link matches are:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Clue</th>
          <th>Start</th>
          <th>Missing</th>
          <th>Chain Position</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Prehistoric</td>
          <td>
            <u>C</u>ANAL
          </td>
          <td>NATUFIAN CULTURE</td>
          <td>3</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Person</td>
          <td>
            <u>R</u>OBOT
          </td>
          <td>BRIAN BEHLENDORF</td>
          <td>3</td>
          <td>I</td>
        </tr>
        <tr>
          <td>People</td>
          <td>
            <u>E</u>POXY
          </td>
          <td>OLMECS</td>
          <td>3</td>
          <td>M</td>
        </tr>
        <tr>
          <td>Series</td>
          <td>
            <u>A</u>NIME
          </td>
          <td>NEON GENESIS EVANGELION</td>
          <td>2</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Mediterranean</td>
          <td>
            <u>T</u>IBER
          </td>
          <td>IBERIAN LANGUAGE</td>
          <td>2</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Biological</td>
          <td>
            <u>O</u>MEGA
          </td>
          <td>MOLECULAR EVOLUTION</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Profession</td>
          <td>
            <u>R</u>ADIO
          </td>
          <td>INDUSTRIAL DESIGN</td>
          <td>4</td>
          <td>U</td>
        </tr>
        <tr>
          <td>Reversible</td>
          <td>
            <u>O</u>RBIT
          </td>
          <td>ISENTROPIC PROCESS</td>
          <td>4</td>
          <td>N</td>
        </tr>
        <tr>
          <td>Biome</td>
          <td>
            <u>F</u>AITH
          </td>
          <td>TUNDRA</td>
          <td>4</td>
          <td>D</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The first letters of the starts of the chains read <Clue>CREATOR OF</Clue>
      , and indexing into the missing words using their chain position reads{' '}
      <Clue>TIMEBOUND</Clue>. The author of the book Timebound is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        This was originally meant for the Hydra round, where we needed hundreds
        of procedurally generated puzzles but this is still pretty fun as a
        standalone. We tried to follow a few rules here:
      </p>
      <ul>
        <li>No special pages</li>
        <li>
          No "list of" or "category" or otherwise special pages (come on, this
          is just cheating)
        </li>
        <li>
          No citations (some citations will link to the publication's Wikipedia
          page!)
        </li>
      </ul>
      <p>
        Even allowing the second two bullet points, the chain construction is
        still unique.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .table-1 td,
      .table-2 td:nth-child(2),
      .table-2 td:nth-child(3),
      .table-2 td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
      .table-2 td:nth-child(n + 4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
