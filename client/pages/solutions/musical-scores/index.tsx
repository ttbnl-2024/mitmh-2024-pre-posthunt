import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/musical-scores/0.png';

const SLUG = 'musical-scores';
const ANSWER = `STEPHEN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with some flavor text and a sports style bracket
      containing a series of audio files. Each audio file is a re-singing of
      half a duet from a musical. In each match up, the duet lines not sung in
      the audio file have a shared actor. For example, in the first clip, only
      the vocals of Sir Harry in "In a Little While" from the musical{' '}
      <i>Once Upon a Mattress </i>can be heard, and in the second clip, only the
      vocals of Sarah in "Marry the Man Today" from the musical{' '}
      <i>Guys and Dolls</i> can be heard. Jane Krakowski is the removed singer
      for both these songs, with the singer of the first clip originally being
      Lewis Cleale, and the singer of the second clip being Jenna Russell.{' '}
    </p>
    <p>
      For each of the 8 initial audio files, the shared musician advances
      onward. We then repeat this process in the semifinals, which gives
      another set of people who have the same duet partner, and again in the
      finals to give one last duet partner. (Some duet partners will have
      multiple songs together inside that musical. However, the actual songs
      themselves are unnecessary for extraction.)
    </p>
    <p>
      The final bracket is given below. Click to open in a new tab.
      <a href={image0} target="_blank">
        <SheetableImage alt="" src={image0} title="" className="w-[1000px]" />
      </a>
    </p>
    <p>
      Finally, we index using the scores on the non-shared musician in each duet
      team. For example, for the first clip, use the score of 2 to index into{' '}
      <Clue>LEWIS CLEALE</Clue> to get an <Clue>E</Clue>. Doing this for each
      round of the brackets and reading down, then moving to semi final, then to
      final gives the phrase <Clue>END DUETS AUTHOR</Clue>. The duets in the
      finals are from <i>Gypsy</i> and <i>Sweeney Todd:The Demon Barber of Fleet Street</i>,
      both musicals by Stephen Sondheim. The flavor text mentions wanting to get
      on a "first name basis", so the answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <br />
      <h3>Round of 8</h3>
      <br />
      <Table className="musicals-table">
        <thead>
          <tr>
            <th>Musical</th>
            <th>Song</th>
            <th>Vocal Singer</th>
            <th>Silent Duet Partner</th>
            <th>Score</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i>ONCE UPON A MATTRESS</i></td>
            <td>"IN A LITTLE WHILE"</td>
            <td>LEWIS CLEALE</td>
            <td rowSpan={2}>JANE KRAKOWSKI</td>
            <td>2</td>
            <td>E</td>
          </tr>
          <tr>
            <td><i>GUYS AND DOLLS</i></td>
            <td>"MARRY THE MAN TODAY"</td>
            <td>JENNA RUSSELL</td>
            <td>4</td>
            <td>N</td>
          </tr>
          <tr>
            <td><i>RAGS</i></td>
            <td>"RAGS"</td>
            <td>DICK LATESSA</td>
            <td rowSpan={2}>JUDY KUHN</td>
            <td>1</td>
            <td>D</td>
          </tr>
          <tr>
            <td><i>FIDDLER ON THE ROOF</i></td>
            <td>"DO YOU LOVE ME?"</td>
            <td>ANDY NYMAN</td>
            <td>3</td>
            <td>D</td>
          </tr>
          <tr>
            <td><i>DIRTY ROTTEN SCOUNDRELS</i></td>
            <td>"NOTHING IS TOO WONDERFUL TO BE TRUE"</td>
            <td>NORBERT LEO BUTZ</td>
            <td rowSpan={2}>SHERIE RENE SCOTT</td>
            <td>12</td>
            <td>U</td>
          </tr>
          <tr>
            <td><i>WOMAN ON THE VERGE OF A NERVOUS BREAKDOWN</i></td>
            <td>"LIE TO ME"</td>
            <td>BRIAN STOKES MITCHELL</td>
            <td>17</td>
            <td>E</td>
          </tr>
          <tr>
            <td><i>THE MYSTERY OF EDWIN DROOD</i></td>
            <td>"PERFECT STRANGERS"</td>
            <td>PATTI COHENOUR</td>
            <td rowSpan={2}>DONNA MURPHY</td>
            <td>3</td>
            <td>T</td>
          </tr>
          <tr>
            <td><i>WONDERFUL TOWN</i></td>
            <td>"OHIO"</td>
            <td>JENNIFER WESTFELDT</td>
            <td>11</td>
            <td>S</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Semifinals</h3>
      <br />
      <Table className="musicals-table">
        <thead>
          <tr>
            <th>Musical</th>
            <th>Song</th>
            <th>Known Singer from Previous Round</th>
            <th>Shared Duet Partner</th>
            <th>Score</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i>COMPANY</i></td>
            <td>"BARCELONA"</td>
            <td>JANE KRAKOWSKI</td>
            <td rowSpan={2}>BOYD GAINES</td>
            <td>2</td>
            <td>A</td>
          </tr>
          <tr>
            <td><i>SHE LOVES ME</i></td>
            <td>"WHERE'S MY SHOE"</td>
            <td>JUDY KUHN</td>
            <td>6</td>
            <td>U</td>
          </tr>
          <tr>
            <td><i>THE WHO'S TOMMY</i></td>
            <td>"SALLY SIMPSON'S QUESTION"</td>
            <td>SHERIE RENE SCOTT</td>
            <td rowSpan={2}>MICHAEL CERVERIS</td>
            <td>14</td>
            <td>T</td>
          </tr>
          <tr>
            <td><i>LOVEMUSIK</i></td>
            <td>(multiple songs)</td>
            <td>DONNA MURPHY</td>
            <td>10</td>
            <td>H</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Finals</h3>
      <br />
      <Table className="musicals-table">
        <thead>
          <tr>
            <th>Musical</th>
            <th>Song</th>
            <th>Known Singer from Previous Round</th>
            <th>Shared Singer</th>
            <th>Score</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i>GYPSY</i></td>
            <td>(multiple songs)</td>
            <td>BOYD GAINES</td>
            <td rowSpan={2}>PATTI LUPONE</td>
            <td>2</td>
            <td>O</td>
          </tr>
          <tr>
            <td><i>SWEENEY TODD: THE DEMON BARBER OF FLEET STREET</i></td>
            <td>(multiple songs)</td>
            <td>MICHAEL CERVERIS</td>
            <td>10</td>
            <td>R</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      .musicals-table tr:nth-child(2n + 1) td:nth-child(3n),
      .musicals-table tr:nth-child(2n) td:nth-child(2n + 3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .musicals-table tr:nth-child(2n + 1) td:nth-child(n + 5),
      .musicals-table tr:nth-child(2n) td:nth-child(n + 4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
