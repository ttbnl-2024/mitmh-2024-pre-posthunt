import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'back-to-square-one';
const ANSWER = `OREGON`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Flavortext and a bit of googling reveals that all of these phrases are
      theme titles for Sunday <i>New York Times</i> crossword puzzles. We note that the
      numbers are placed either across or down from each phrase, indicating that
      we need to find a particular word from the crossword grid. Some of the
      phrases are adjusted either "+" or "-", indicating that we need to adjust
      the date to find the correct non-Sunday puzzle we need. Looking up the
      words from each box results in words pointing to yet another puzzle,
      resulting in a word. The words for each of the boxes taken together yield
      the cluephrase{' '}
      <Monospace>EIGHT DOWN NOVEMBER FOUR TWENTY TWENTYONE</Monospace>. 8D on
      11/4/2021's crossword is our answer, <Answerize>OREGON</Answerize>.
    </p>
    <h2>Appendix</h2>
    <p>
      While paid access to <a href="http://xwordinfo.com/">Xwordinfo.com</a>{' '}
      and/or the New York Times crossword archive makes this puzzle faster, it
      can be solved using google searches and free sites like the blog{' '}
      <a href="https://rexwordpuzzle.blogspot.com/Only">
        https://rexwordpuzzle.blogspot.com/
      </a>{' '}
      Only two of the puzzles referenced here do not appear there, and their
      words "twenty" and "thousand" are easily inferred by context.
    </p>
    <Table className="appendix-1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date (Adj.)</th>
          <th>Clue Num.</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"DOWN FOR THE COUNT"</td>
          <td>12/22/19</td>
          <td>77D</td>
          <td>FOUR</td>
        </tr>
        <tr>
          <td>"PERSONS OF NOTE"</td>
          <td>9/1/13</td>
          <td>85A</td>
          <td>DOWN</td>
        </tr>
        <tr>
          <td>"NO APPOINTMENT NECESSARY"</td>
          <td>6/24/07</td>
          <td>76A</td>
          <td>MAY</td>
        </tr>
        <tr>
          <td>"BYE-LINES" +3</td>
          <td>11/10/13 +3</td>
          <td>4D</td>
          <td>THIRTY</td>
        </tr>
        <tr>
          <td>"IN PLAY"</td>
          <td>1/1/23</td>
          <td>43A</td>
          <td>TWO</td>
        </tr>
        <tr>
          <td>"TERMINAL CONNECTIONS"</td>
          <td>10/16/22</td>
          <td>62D</td>
          <td>THOUSAND</td>
        </tr>
        <tr>
          <td>"CHEERS FOR UNCLE SAM" -3</td>
          <td>12/2/01 -3</td>
          <td>33A</td>
          <td>TWENTY</td>
        </tr>
        <tr>
          <td>"INFRACTIONS"</td>
          <td>4/29/12</td>
          <td>26A</td>
          <td>THREE</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"COLLISION COURSES"</td>
          <td>11/13/22</td>
          <td>47A</td>
          <td>ONE</td>
        </tr>
        <tr>
          <td>"FOR MOTHER"</td>
          <td>5/11/14</td>
          <td>36A</td>
          <td>OH</td>
        </tr>
        <tr>
          <td>"PLUSES AND MINUSES"</td>
          <td>4/22/18</td>
          <td>35D</td>
          <td>SIX</td>
        </tr>
        <tr>
          <td>"UNEMPLOYMENT LINES"</td>
          <td>1/27/19</td>
          <td>13D</td>
          <td>ACROSS</td>
        </tr>
        <tr>
          <td>"THE FOOTBALL FAN" +3</td>
          <td>2/7/10 +3</td>
          <td>12D</td>
          <td>JUNE</td>
        </tr>
        <tr>
          <td>"WINTER FIGURE" -1</td>
          <td>12/30/07 -1</td>
          <td>53A</td>
          <td>EIGHTEENTH</td>
        </tr>
        <tr>
          <td>"FORWARD THINKING" +4</td>
          <td>3/2/08 +4</td>
          <td>46D</td>
          <td>TWENTY</td>
        </tr>
        <tr>
          <td>"HOW'S TRICKS?" -4</td>
          <td>8/25/19 -4</td>
          <td>58A</td>
          <td>SEVENTEEN</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"GETTING IN SHAPE"</td>
          <td>10/16/11</td>
          <td>80A</td>
          <td>EIGHTEEN</td>
        </tr>
        <tr>
          <td>"SOFT OPTIONS"</td>
          <td>4/3/22</td>
          <td>19A</td>
          <td>ACROSS</td>
        </tr>
        <tr>
          <td>"TRAPPED MOISTURE"</td>
          <td>5/8/16</td>
          <td>10D</td>
          <td>JULY</td>
        </tr>
        <tr>
          <td>"BUZZ CUT" -3</td>
          <td>5/26/19 -3</td>
          <td>59A</td>
          <td>FOURTEEN</td>
        </tr>
        <tr>
          <td>"IF THE CLUE FITS ..."</td>
          <td>4/9/23</td>
          <td>23D</td>
          <td>TWO</td>
        </tr>
        <tr>
          <td>"GO UP IN SMOKE"</td>
          <td>9/5/21</td>
          <td>93D</td>
          <td>THOUSAND</td>
        </tr>
        <tr>
          <td>"BARISTA TRAINING DAY" +1</td>
          <td>4/12/20 +1</td>
          <td>5D</td>
          <td>SIXTEEN</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"FOUR-LETTER WORDS" +1</td>
          <td>11/29/15 +1</td>
          <td>44D</td>
          <td>SIXTEEN</td>
        </tr>
        <tr>
          <td>"SET YOUR MIND AT EASE"</td>
          <td>10/21/07</td>
          <td>96A</td>
          <td>DOWN</td>
        </tr>
        <tr>
          <td>"YOU'RE TELLING ME!"</td>
          <td>10/4/20</td>
          <td>23A</td>
          <td>OCTOBER</td>
        </tr>
        <tr>
          <td>"THIS N' THAT"</td>
          <td>2/1/15</td>
          <td>47D</td>
          <td>SEVEN</td>
        </tr>
        <tr>
          <td>"PARLOR TRICK"</td>
          <td>3/6/22</td>
          <td>84D</td>
          <td>TWO</td>
        </tr>
        <tr>
          <td>"GO FIGURE" +3</td>
          <td>11/27/22 +3</td>
          <td>27A</td>
          <td>THOUSAND</td>
        </tr>
        <tr>
          <td>"WHAT GOES UP MUST COME DOWN" -1</td>
          <td>5/31/20 -1</td>
          <td>13D</td>
          <td>NINETEEN</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"SIX-PACK" -1</td>
          <td>11/29/20 -1</td>
          <td>27D</td>
          <td>FORTY</td>
        </tr>
        <tr>
          <td>"GRAMMAR LESSON"</td>
          <td>1/15/17</td>
          <td>5D</td>
          <td>SIX</td>
        </tr>
        <tr>
          <td>"TWO OUT OF THREE"</td>
          <td>11/25/07</td>
          <td>82D</td>
          <td>DOWN</td>
        </tr>
        <tr>
          <td>"TWO-BY-TWO" +1</td>
          <td>5/8/22 +1</td>
          <td>48D</td>
          <td>MARCH</td>
        </tr>
        <tr>
          <td>"CORE O' NATIONS"</td>
          <td>2/19/12</td>
          <td>44A</td>
          <td>SIXTH</td>
        </tr>
        <tr>
          <td>"WORDS OF INTRODUCTION"</td>
          <td>4/28/19</td>
          <td>84A</td>
          <td>TWO</td>
        </tr>
        <tr>
          <td>"CATCH PHRASE" +3</td>
          <td>8/15/04 +3</td>
          <td>51A</td>
          <td>THOUSAND</td>
        </tr>
        <tr>
          <td>"PARONOMASIA"</td>
          <td>2/11/18</td>
          <td>45A</td>
          <td>EIGHT</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>"LETTER RECYCLING"</td>
          <td>2/25/18</td>
          <td>3D</td>
          <td>FORTY</td>
        </tr>
        <tr>
          <td>"COMMON CORE"</td>
          <td>10/17/21</td>
          <td>83D</td>
          <td>ACROSS</td>
        </tr>
        <tr>
          <td>"'TWAS PUZZLING"</td>
          <td>9/28/08</td>
          <td>75A</td>
          <td>AUGUST</td>
        </tr>
        <tr>
          <td>"A WHIFF OF COLOGNE"</td>
          <td>2/3/13</td>
          <td>37A</td>
          <td>TENTH</td>
        </tr>
        <tr>
          <td>"PUT A LID IN IT"</td>
          <td>8/26/12</td>
          <td>92A</td>
          <td>TWO</td>
        </tr>
        <tr>
          <td>"GOSSIP SESSION" -4</td>
          <td>12/4/22 -4</td>
          <td>27A</td>
          <td>THOUSAND</td>
        </tr>
        <tr>
          <td>"SOME THEME'S MISSING" +2</td>
          <td>12/18/22 +2</td>
          <td>48D</td>
          <td>TWELVE</td>
        </tr>
      </tbody>
    </Table>
    <Table className="mt-4">
      <thead>
        <tr>
          <th>Phrase</th>
          <th>Clue, Date</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>
              FOUR DOWN MAY THIRTY TWO THOUSAND TWENTY THREE
            </Monospace>
          </td>
          <td>4D, 5/30/2023</td>
          <td>
            <Monospace>EIGHT</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>
              ONE OH SIX ACROSS JUNE EIGHTEENTH TWENTY SEVENTEEN
            </Monospace>
          </td>
          <td>106A, 6/18/2017</td>
          <td>
            <Monospace>DOWN</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>
              EIGHTEEN ACROSS JULY FOURTEEN TWO THOUSAND SIXTEEN
            </Monospace>
          </td>
          <td>18A, 7/14/2016</td>
          <td>
            <Monospace>NOVEMBER</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>
              SIXTEEN DOWN OCTOBER SEVEN TWO THOUSAND NINETEEN
            </Monospace>
          </td>
          <td>16D, 10/7/2019</td>
          <td>
            <Monospace>FOUR</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FORTY SIX DOWN MARCH SIXTH TWO THOUSAND EIGHT</Monospace>
          </td>
          <td>46D, 3/6/2008</td>
          <td>
            <Monospace>TWENTY</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FORTY ACROSS AUGUST TENTH TWO THOUSAND TWELVE</Monospace>
          </td>
          <td>40A, 8/10/2012</td>
          <td>
            <Monospace>TWENTYONE</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
        .appendix-1 th:nth-child(3),
        .appendix-1 td:nth-child(3) {
          text-align: center;
        }
        .appendix-1 td {
          minimum-height: 29px;
        }
      `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
