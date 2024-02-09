import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'how-to-quadruple-your-money-in-hollywood';
const ANSWER = `TENFOLD`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are presented with a series of movie pitches by a Hollywood pitchman to
      a potential financial backer. The backer pledges a certain amount of money
      and the studio greenlights the release for one of two years.
    </p>
    <p>
      All the movies purportedly star George Clooney, so the first step is to
      match the movie descriptions to George Clooney movies. We easily find
      these are:
    </p>
    <Table className="movies-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batman &amp; Robin</td>
          <td>1997</td>
        </tr>
        <tr>
          <td>The Men Who Stare at Goats</td>
          <td>2009</td>
        </tr>
        <tr>
          <td>Sand and Sorrow</td>
          <td>2007</td>
        </tr>
        <tr>
          <td>Ocean's Twelve</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>Up in the Air</td>
          <td>2009</td>
        </tr>
        <tr>
          <td>Grizzly II: Revenge</td>
          <td>1983</td>
        </tr>
        <tr>
          <td>Hail, Caesar!</td>
          <td>2016</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Interestingly, one of the studio's listed years for "release" is always
      the year the film was actually released. But what about the other years?
      And what about the rest of the flavor text?
    </p>
    <p>
      The title and flavor text clearly indicates something to do with coins:
      "Big Money," "make a mint," "change." Moreover, the text "George to be the
      face," along with "Studio HeadQuarters" later in the puzzle, clues that US
      quarters are involved. The text "financial backing" is also used in
      conjunction with the text about George on the face, implying the backs of
      the quarters are important.
    </p>
    <p>
      The second set of years all occur when U.S. quarters were "released" with
      different pictures on the reverse side (first the 50 states, then US
      territories, then "America the Beautiful" national parks or other
      landmarks in each state). Further examination reveals that for each year
      listed, there is a quarter that has a picture on the reverse that
      corresponds somehow with the title of the George Clooney movie in
      question:
    </p>
    <Table className="quarters-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Quarter Release</th>
          <th>Quarter Element</th>
          <th>Quarter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batman &amp; Robin</td>
          <td>1997</td>
          <td>2020</td>
          <td>Bat</td>
          <td>National Park of American Samoa</td>
        </tr>
        <tr>
          <td>The Men Who Stare at Goats</td>
          <td>2009</td>
          <td>2011</td>
          <td>Goat</td>
          <td>Glacier National Park</td>
        </tr>
        <tr>
          <td>Sand and Sorrow</td>
          <td>2007</td>
          <td>2014</td>
          <td>Sand</td>
          <td>Great Sand Dunes National Park</td>
        </tr>
        <tr>
          <td>Ocean's Twelve</td>
          <td>2004</td>
          <td>2019</td>
          <td>Ocean</td>
          <td>War in the Pacific National Historic Park</td>
        </tr>
        <tr>
          <td>Up in the Air</td>
          <td>2009</td>
          <td>2001</td>
          <td>"In the air"</td>
          <td>North Carolina</td>
        </tr>
        <tr>
          <td>Grizzly II: Revenge</td>
          <td>1983</td>
          <td>2008</td>
          <td>Grizzly</td>
          <td>Alaska</td>
        </tr>
        <tr>
          <td>Hail, Caesar!</td>
          <td>2016</td>
          <td>1999</td>
          <td>Caesar</td>
          <td>Delaware</td>
        </tr>
      </tbody>
    </Table>
    <p>
      (There are no other quarters from those years that could logically connect
      with any salient words in the movie titles in question)
    </p>
    <p>
      Once we have the quarters identified, we need to extract. We notice that
      the Hollywood mogul has committed different amounts of money (in millions)
      to the various Clooney films. By taking the appropriate letter from the
      name of the quarter (as shown on the top of the reverse of the quarter
      itself), we get the thematically-appropriate answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Quarter Release</th>
          <th>Quarter</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batman &amp; Robin</td>
          <td>1997</td>
          <td>2020</td>
          <td>
            <Monospace>NATIONAL PARK OF AMERICAN SAMOA</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>The Men Who Stare at Goats</td>
          <td>2009</td>
          <td>2011</td>
          <td>
            <Monospace>GLACIER NATIONAL PARK</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Sand and Sorrow</td>
          <td>2007</td>
          <td>2014</td>
          <td>
            <Monospace>GREAT SAND DUNES NATIONAL PARK</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ocean's Twelve</td>
          <td>2004</td>
          <td>2019</td>
          <td>
            <Monospace>WAR IN THE PACIFIC NATIONAL HISTORIC PARK</Monospace>
          </td>
          <td>13</td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>Up in the Air</td>
          <td>2009</td>
          <td>2001</td>
          <td>
            <Monospace>NORTH CAROLINA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Grizzly II: Revenge</td>
          <td>1983</td>
          <td>2008</td>
          <td>
            <Monospace>ALASKA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Hail, Caesar!</td>
          <td>2016</td>
          <td>1999</td>
          <td>
            <Monospace>DELAWARE</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .movies-table th:nth-child(2),
      .movies-table td:nth-child(2),
      .quarters-table td:nth-child(2),
      .quarters-table th:nth-child(3),
      .quarters-table td:nth-child(3),
      .solution-table th:nth-child(3n + 2),
      .solution-table td:nth-child(3n + 2),
      .solution-table th:nth-child(3n + 3),
      .solution-table td:nth-child(3n + 3) {
        text-align: center;
      }
      .solution-table td:nth-child(2n + 4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
