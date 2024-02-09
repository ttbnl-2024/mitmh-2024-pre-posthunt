import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'family-tree';
const ANSWER = `WARRIORS THREE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each of the names in the puzzle has been encoded using "Soundex," (clued
      by genealogy, and "sound ex…" in the flavortext), which is a way of
      encoding words or names that sound similar to each other. It can be used
      to look up names in the records of the{' '}
      <a href="https://www.archives.gov/research/census/soundex">
        United States Census
      </a>
      , so it is of interest to genealogists. We can decode the system with
      Nutrimatic or by using a tool like the one found in Wolfram Alpha, which
      has a{' '}
      <a href="https://www.wolframalpha.com/input?i=Soundex+Wolfram">
        soundex tool
      </a>
      .
    </p>
    <p>
      The flavortext referring to "royal" along with the head of the family
      having passed away clues Queen Elizabeth II. The phrase including "dogged
      determination" indicates that the names are drawn from the extended family
      tree of Queen Elizabeth II's corgis.
    </p>
    <p>
      In the first column of the puzzle, the corgis are given in alphabetical
      order by Soundex code. These 15 corgis represent a direct line of
      generations from the queen's first corgi (Susan) to her last (Willow),
      providing an ordering. When we have identified the other related dog given
      in the description by using its relationship and Soundex code, we can then
      extract the relevant two letters. Several family trees for Queen Elizabeth
      II's corgis can be found{' '}
      <a href="https://www.bbc.com/news/uk-61606972">online</a>.
    </p>
    <Table className="mt-4">
      <thead>
        <tr>
          <th>Direct Line Corgi</th>
          <th>Soundex</th>
          <th>Clue</th>
          <th>Clued Corgi</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Susan</td>
          <td>S250</td>
          <td>Fourth great-grandparent of J400 (1, 2)</td>
          <td>
            <Monospace>JOLLY</Monospace>
          </td>
          <td>
            <Monospace>JO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Honey</td>
          <td>H500</td>
          <td>Third great-grandparent of G630 (4, 5)</td>
          <td>
            <Monospace>GEORDIE</Monospace>
          </td>
          <td>
            <Monospace>RD</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bee</td>
          <td>B000</td>
          <td>Fifth great-grandparent of R526 (2, 3)</td>
          <td>
            <Monospace>RANGER</Monospace>
          </td>
          <td>
            <Monospace>AN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Heather</td>
          <td>H360</td>
          <td>Fourth great-grandparent of A140 (2, 3)</td>
          <td>
            <Monospace>APOLLO</Monospace>
          </td>
          <td>
            <Monospace>PO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Foxy</td>
          <td>F200</td>
          <td>Fifth great-grandparent of F460 (3, 2)</td>
          <td>
            <Monospace>FLORA</Monospace>
          </td>
          <td>
            <Monospace>OL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Brush</td>
          <td>B620</td>
          <td>First cousin to P242 (6, 7)</td>
          <td>
            <Monospace>PICKLES</Monospace>
          </td>
          <td>
            <Monospace>ES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Geordie</td>
          <td>G630</td>
          <td>Sixth great-grandparent of L620 (4, 5)</td>
          <td>
            <Monospace>LARCH</Monospace>
          </td>
          <td>
            <Monospace>CH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Smoky</td>
          <td>S520</td>
          <td>Fourth great-grandparent of M635 (2, 1)</td>
          <td>
            <Monospace>MARTIN</Monospace>
          </td>
          <td>
            <Monospace>AM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spark</td>
          <td>S162</td>
          <td>Second cousin twice removed of P533 (1, 6)</td>
          <td>
            <Monospace>PUNDIT</Monospace>
          </td>
          <td>
            <Monospace>PT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dash</td>
          <td>D200</td>
          <td>Second cousin once removed of F140 (5, 2)</td>
          <td>
            <Monospace>FABLE</Monospace>
          </td>
          <td>
            <Monospace>EA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rush</td>
          <td>R200</td>
          <td>Second great-grandparent of J255 (4, 2)</td>
          <td>
            <Monospace>JASMINE</Monospace>
          </td>
          <td>
            <Monospace>MA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Windsor Quiz</td>
          <td>W532 Q200</td>
          <td>Grandnibling of D553 (6, 7)</td>
          <td>
            <Monospace>DIAMOND</Monospace>
          </td>
          <td>
            <Monospace>ND</Monospace>
          </td>
        </tr>
        <tr>
          <td>Emma</td>
          <td>E500</td>
          <td>Fourth great-grandnibling of W532 L400 S122 (3, 14)</td>
          <td>
            <Monospace>WINDSOR LOYAL SUBJECT</Monospace>
          </td>
          <td>
            <Monospace>NU</Monospace>
          </td>
        </tr>
        <tr>
          <td>Linnet</td>
          <td>L530</td>
          <td>Parent of B651 (4, 5)</td>
          <td>
            <Monospace>BRAMBLE</Monospace>
          </td>
          <td>
            <Monospace>MB</Monospace>
          </td>
        </tr>
        <tr>
          <td>Willow</td>
          <td>W400</td>
          <td>First cousin seven times removed of P160 (4, 5)</td>
          <td>
            <Monospace>PIPER</Monospace>
          </td>
          <td>
            <Monospace>ER</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      After sorting and indexing, we can read the cluephrase{' '}
      <Monospace>JORDAN POOLE'S CHAMP TEAM AND NUMBER</Monospace>. This clues
      the answer <Answerize>WARRIORS THREE</Answerize>.
    </p>
    <style jsx>{`
      td:nth-child(2),
      td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
