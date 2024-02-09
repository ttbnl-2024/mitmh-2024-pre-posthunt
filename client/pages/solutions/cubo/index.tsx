import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'cubo';
const ANSWER = `TAFEL EQUATION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The 3×3×3 grid is a crossword puzzle in which every <s>square</s>{' '}
      <i>cubelet</i> receives two letters, giving 6 letters per entry which are
      made up of two three-letter words (or abbreviations). For example, 1A is
      entered as <Monospace>MA / SC / AL</Monospace>.
    </p>
    <p>
      Several of the clues are reasonably guessable or googlable. Once some
      clues have been filled in, we find out through googling that the
      two-letter codes we've been filling into the cube are in fact the official
      abbreviations of the 27{' '}
      <a href="https://en.wikipedia.org/wiki/Federative_units_of_Brazil">
        Federative units of Brazil
      </a>
      . That allows us to fill in the rest of the cube.
    </p>
    <p>Individual clue answers are as follows:</p>
    <Table id="clues">
      <tbody>
        <tr>
          <td>
            <b>Across</b>
          </td>
          <td>1</td>
          <td>Female progenitors; food energy unit (abbr.)</td>
          <td>
            <Monospace>MAS; CAL</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>4</td>
          <td>Best; preceding our calendar (abbr.)</td>
          <td>
            <Monospace>TOP; BCE</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>9</td>
          <td>Golf score; students not about to graduate (abbr.)</td>
          <td>
            <Monospace>PAR; JRS</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>10</td>
          <td>
            Film studio (abbr.); Tic-___-toe
          </td>
          <td>
            <Monospace>MGM; TAC</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>11</td>
          <td>German soccer body (abbr.); software "glue" (abbr.)</td>
          <td>
            <Monospace>DFB; API</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>14</td>
          <td>Before (prefix); texting (abbr.)</td>
          <td>
            <Monospace>PRE; SMS</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>15</td>
          <td>Body of water; atlas page</td>
          <td>
            <Monospace>SEA; MAP</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>Down</b>
          </td>
          <td>1</td>
          <td>Yoga surface; defenceman Bobby</td>
          <td>
            <Monospace>MAT; ORR</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>2</td>
          <td>Collaboratively-written foundation; dude</td>
          <td>
            <Monospace>SCP; BRO</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>3</td>
          <td>Intoxicating substance (abbr.); in particular (abbr.)</td>
          <td>
            <Monospace>ALC; ESP</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>7</td>
          <td>
            US Republicans (abbr.); "One man, one engine" manufacturer (abbr.)
          </td>
          <td>
            <Monospace>GOP; AMG</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>8</td>
          <td>Each; pouch</td>
          <td>
            <Monospace>PER; SAC</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>12</td>
          <td>Sweetheart; science podcaster Harris</td>
          <td>
            <Monospace>BAE; SAM</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>13</td>
          <td>Uninhabited island east of Ellesmere; plant goo</td>
          <td>
            <Monospace>PIM; SAP</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>Toward</b>
          </td>
          <td>2</td>
          <td>Display preserver (file ext.); US league</td>
          <td>
            <Monospace>SCR; NBA</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>3</td>
          <td>Mountain peak; prefix meaning "over"</td>
          <td>
            <Monospace>ALP; EPI</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>5</td>
          <td>Fixed storage (abbr.); Scottish topper</td>
          <td>
            <Monospace>ROM; TAM</Monospace>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>6</td>
          <td>Resort; maximum</td>
          <td>
            <Monospace>SPA; CAP</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Now we simply replace the 2-letter codes with the full names of the
      regions and use the indicated numbers (in order from top to bottom) to
      index into them:
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Code</th>
          <th>Region name</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>RO</Monospace>
          </td>
          <td>
            <Monospace>RONDONIA</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ES</Monospace>
          </td>
          <td>
            <Monospace>ESPIRITOSANTO</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>GO</Monospace>
          </td>
          <td>
            <Monospace>GOIAS</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RJ</Monospace>
          </td>
          <td>
            <Monospace>RIODEJANEIRO</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>J</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PE</Monospace>
          </td>
          <td>
            <Monospace>PERNAMBUCO</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SP</Monospace>
          </td>
          <td>
            <Monospace>SAOPAULO</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SE</Monospace>
          </td>
          <td>
            <Monospace>SERGIPE</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PI</Monospace>
          </td>
          <td>
            <Monospace>PIAUI</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MG</Monospace>
          </td>
          <td>
            <Monospace>MINASGERAIS</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AC</Monospace>
          </td>
          <td>
            <Monospace>ACRE</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AL</Monospace>
          </td>
          <td>
            <Monospace>ALAGOAS</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CE</Monospace>
          </td>
          <td>
            <Monospace>CEARA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SC</Monospace>
          </td>
          <td>
            <Monospace>SANTACATARINA</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MT</Monospace>
          </td>
          <td>
            <Monospace>MATOGROSSO</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PR</Monospace>
          </td>
          <td>
            <Monospace>PARANA</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AM</Monospace>
          </td>
          <td>
            <Monospace>AMAZONAS</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TO</Monospace>
          </td>
          <td>
            <Monospace>TOCANTINS</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BA</Monospace>
          </td>
          <td>
            <Monospace>BAHIA</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RN</Monospace>
          </td>
          <td>
            <Monospace>RIOGRANDEDONORTE</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MA</Monospace>
          </td>
          <td>
            <Monospace>MARANHAO</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DF</Monospace>
          </td>
          <td>
            <Monospace>DISTRITOFEDERAL</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RR</Monospace>
          </td>
          <td>
            <Monospace>RORAIMA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PA</Monospace>
          </td>
          <td>
            <Monospace>PARA</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AP</Monospace>
          </td>
          <td>
            <Monospace>AMAPA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MS</Monospace>
          </td>
          <td>
            <Monospace>MATOGROSSODOSUL</Monospace>
          </td>
          <td>14</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>RS</Monospace>
          </td>
          <td>
            <Monospace>RIOGRANDEDOSUL</Monospace>
          </td>
          <td>14</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PB</Monospace>
          </td>
          <td>
            <Monospace>PARAIBA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The cluephrase <Monospace>IT'S JULIUS ELECTROCHEM FORMULA</Monospace>{' '}
      appears. We are looking for a formula named after a guy named Julius that
      deals with electrochemistry. A search engine of our preference will
      perhaps find a couple Wikipedia articles, but only one of them will
      mention a Julius, namely:{' '}
      <b>
        <Monospace>TAFEL EQUATION</Monospace>
      </b>
      .
    </p>
    <AuthorsNotes>
      <p>
        It all started when I randomly came across a list of the Brazilian
        federative units and noticed that there are 27 of them (3 cubed). I
        wanted to make a 3D puzzle based on that. However, for a long time I
        figured making it a 3D crossword was impossible because you couldn't
        form enough 6-letter words out of the state abbreviations. I ran an
        algorithm on this and although I was surprised at the number of viable
        6-letter words that came out (such as <Monospace>PASCAL</Monospace>, or{' '}
        <Monospace>BARNES</Monospace> as in "Barnes &amp; Noble"), it was
        still not enough to make a crossword in which every cubelet is clued (or
        every but one: you could conceivably leave one cubelet unclued because
        once the solver realizes the bigrams are a well-defined set, they can
        fill in the missing one).
      </p>
      <p>
        So the real breakthrough was to realize that I can break it up into
        pairs of 3-letter words. This got me a lot further towards a viable
        crossword. I still tried to include as many 6-letter words as possible
        but ended up with only one "real" word (<Monospace>PASCAL</Monospace>)
        and two "fantasy" words clued weirdly (<Monospace>PRE-SMS</Monospace>:
        "before the advent of texting", and <Monospace>SEA MAP</Monospace>:
        "chart of water routes"). The hunt construction team (rightly) deemed this
        inelegant and we decided to redo the fill aiming exclusively for
        3-letter words only.
      </p>
      <p>
        The JavaScript code that animates the cube does not use any web
        technologies for 3D graphics. It does all of the calculations
        (projecting 3D points onto a camera) by hand. I wrote that code a long
        time ago just for the fun of it and decided to reuse it here.
      </p>
      <p>
        (Tech team's note: I am scared and confused, send help. Code was lightly
        modified to fit it into React.)
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      #clues td:nth-child(1),
      #clues td:nth-child(2),
      #extraction td:nth-child(1),
      #extraction td:nth-child(3),
      #extraction td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
