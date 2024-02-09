import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'halloween-tv-guide';
const ANSWER = `RETAIL SALES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We recognize that each of the descriptions is referencing a television
      show, made to sound particularly frightening. Counting the placements of
      the "scary" word in each clue gives a hint:{' '}
      <Monospace>OCT THIRTY ONE AS BASE TEN</Monospace>, which prompts us to
      recognize that a theme of the puzzle is the well-known riddle: "Why do
      programmers mix up Halloween and Christmas," which can be answered
      "Because OCT 31 = DEC 25." Researching holiday episodes of each of these
      shows (one was for Hanukkah rather than Christmas) leads to the
      realization that all of them had episodes inspired by the Dickens classic,
      <i>A Christmas Carol</i>.
    </p>
    <Table id="table-1">
      <thead>
        <tr>
          <th>Scary Word</th>
          <th>Placement</th>
          <th>Letter</th>
          <th>Show Referenced</th>
          <th>Episode Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>nightmarish</td>
          <td>15</td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>THE SIX MILLION DOLLAR MAN</Monospace>
          </td>
          <td>1976</td>
        </tr>
        <tr>
          <td>chilling</td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>I WAS A SIXTH GRADE ALIEN!</Monospace>
          </td>
          <td>2000</td>
        </tr>
        <tr>
          <td>tenebrous</td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>MY LITTLE PONY: FRIENDSHIP IS MAGIC</Monospace>
          </td>
          <td>2016</td>
        </tr>
        <tr>
          <td>terrifying</td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>BEWITCHED</Monospace>
          </td>
          <td>1967</td>
        </tr>
        <tr>
          <td>heart-stopping</td>
          <td>8</td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>DORA THE EXPLORER</Monospace>
          </td>
          <td>2009</td>
        </tr>
        <tr>
          <td>creepy</td>
          <td>9</td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>AQUA TEEN HUNGER FORCE</Monospace>
          </td>
          <td>2002</td>
        </tr>
        <tr>
          <td>nerve-wracking</td>
          <td>18</td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>FAMILY TIES</Monospace>
          </td>
          <td>1983</td>
        </tr>
        <tr>
          <td>spooky</td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>WKRP</Monospace>
          </td>
          <td>1980</td>
        </tr>
        <tr>
          <td>ghastly</td>
          <td>25</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
          <td>
            <Monospace>AMERICAN DAD</Monospace>
          </td>
          <td>2006</td>
        </tr>
        <tr>
          <td>spine-chilling</td>
          <td>15</td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>LITTLE HOUSE ON THE PRAIRIE</Monospace>
          </td>
          <td>1975</td>
        </tr>
        <tr>
          <td>ghoulish</td>
          <td>14</td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>A DIFFERENT WORLD</Monospace>
          </td>
          <td>1989</td>
        </tr>
        <tr>
          <td>eerie</td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>THE SIMPSONS</Monospace>
          </td>
          <td>2003</td>
        </tr>
        <tr>
          <td>horrifying</td>
          <td>2</td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>THE ODD COUPLE</Monospace>
          </td>
          <td>1970</td>
        </tr>
        <tr>
          <td>frightening</td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>MARTIN</Monospace>
          </td>
          <td>1996</td>
        </tr>
        <tr>
          <td>hair-raising</td>
          <td>19</td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>STAR TREK: THE NEXT GENERATION</Monospace>
          </td>
          <td>1991</td>
        </tr>
        <tr>
          <td>sinister</td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>DOCTOR WHO</Monospace>
          </td>
          <td>2010</td>
        </tr>
        <tr>
          <td>macabre</td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>NORTHERN EXPOSURE</Monospace>
          </td>
          <td>1994</td>
        </tr>
        <tr>
          <td>scary</td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>
              THE HIGH FRUCTOSE ADVENTURES OF ANNOYING ORANGE</Monospace>
          </td>
          <td>2012</td>
        </tr>
        <tr>
          <td>blood-curdling</td>
          <td>14</td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>FAMILY GUY</Monospace>
          </td>
          <td>2017</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Identifying the TV shows and ordering them by the years of the specific
      <i>Christmas Carol</i> episodes, then indexing into the show's name by the
      "channel number" given (which must be converted from octal) results in the
      message: <Monospace>T LEHRER GENIUS DOT COM</Monospace>.
    </p>
    <Table id="table-2">
      <thead>
        <tr>
          <th>Year of Episode</th>
          <th>Show</th>
          <th>Channel (OCT)</th>
          <th>Channel (DEC)</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1967</td>
          <td>
            <Monospace>BEWITCHED</Monospace>
          </td>
          <td>5</td>
          <td>5</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1970</td>
          <td>
            <Monospace>THE ODD COUPLE</Monospace>
          </td>
          <td>13</td>
          <td>11</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>1975</td>
          <td>
            <Monospace>LITTLE HOUSE ON THE PRAIRIE</Monospace>
          </td>
          <td>27</td>
          <td>23</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1976</td>
          <td>
            <Monospace>THE SIX MILLION DOLLAR MAN</Monospace>
          </td>
          <td>2</td>
          <td>2</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>1980</td>
          <td>
            <Monospace>WKRP</Monospace>
          </td>
          <td>3</td>
          <td>3</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>1983</td>
          <td>
            <Monospace>FAMILY TIES</Monospace>
          </td>
          <td>11</td>
          <td>9</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1989</td>
          <td>
            <Monospace>A DIFFERENT WORLD</Monospace>
          </td>
          <td>15</td>
          <td>13</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>1991</td>
          <td>
            <Monospace>STAR TREK: THE NEXT GENERATION</Monospace>
          </td>
          <td>20</td>
          <td>16</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>1994</td>
          <td>
            <Monospace>NORTHERN EXPOSURE</Monospace>
          </td>
          <td>20</td>
          <td>16</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>1996</td>
          <td>
            <Monospace>MARTIN</Monospace>
          </td>
          <td>6</td>
          <td>6</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>2000</td>
          <td>
            <Monospace>I WAS A SIXTH GRADE ALIEN!</Monospace>
          </td>
          <td>1</td>
          <td>1</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>2002</td>
          <td>
            <Monospace>AQUA TEEN HUNGER FORCE</Monospace>
          </td>
          <td>3</td>
          <td>3</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>2003</td>
          <td>
            <Monospace>THE SIMPSONS</Monospace>
          </td>
          <td>4</td>
          <td>4</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>2006</td>
          <td>
            <Monospace>AMERICAN DAD</Monospace>
          </td>
          <td>11</td>
          <td>9</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>2009</td>
          <td>
            <Monospace>DORA THE EXPLORER</Monospace>
          </td>
          <td>2</td>
          <td>2</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>2010</td>
          <td>
            <Monospace>DOCTOR WHO</Monospace>
          </td>
          <td>4</td>
          <td>4</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>2012</td>
          <td>
            <Monospace>
              THE HIGH FRUCTOSE ADVENTURES OF ANNOYING ORANGE
            </Monospace>
          </td>
          <td>13</td>
          <td>11</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>2016</td>
          <td>
            <Monospace>MY LITTLE PONY: FRIENDSHIP IS MAGIC</Monospace>
          </td>
          <td>12</td>
          <td>10</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>2017</td>
          <td>
            <Monospace>FAMILY GUY</Monospace>
          </td>
          <td>3</td>
          <td>3</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We then look up the lyrics to Tom Lehrer's <i>A Christmas Carol</i> on
      genius.com, and find the line and word given by the program time (also
      converted from octal). The first letters of those words give an acrostic:{' '}
      <Monospace>ANSWER IS </Monospace>
      <Answerize>RETAIL SALES</Answerize>, which is in theme with the content of
      Lehrer's song.
    </p>
    <Table id="table-3">
      <thead>
        <tr>
          <th>Program Time</th>
          <th>Line Number (OCT)</th>
          <th>Line Number (DEC)</th>
          <th>Word Number (OCT and DEC)</th>
          <th>Word from Song</th>
          <th>Acrostic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:05</td>
          <td>10</td>
          <td>8</td>
          <td>5</td>
          <td>
            <Monospace>AGAIN</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>22:01</td>
          <td>22</td>
          <td>18</td>
          <td>1</td>
          <td>
            <Monospace>NOR</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>16:02</td>
          <td>16</td>
          <td>14</td>
          <td>2</td>
          <td>
            <Monospace>SOME</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>04:07</td>
          <td>4</td>
          <td>4</td>
          <td>7</td>
          <td>
            <Monospace>WHEN</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>15:04</td>
          <td>15</td>
          <td>13</td>
          <td>4</td>
          <td>
            <Monospace>EXPENSE</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>13:04</td>
          <td>13</td>
          <td>11</td>
          <td>4</td>
          <td>
            <Monospace>ROB</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>20:04</td>
          <td>20</td>
          <td>16</td>
          <td>4</td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>25:05</td>
          <td>25</td>
          <td>21</td>
          <td>5</td>
          <td>
            <Monospace>SINGS</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>27:02</td>
          <td>27</td>
          <td>23</td>
          <td>2</td>
          <td>
            <Monospace>REST</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>23:04</td>
          <td>23</td>
          <td>19</td>
          <td>4</td>
          <td>
            <Monospace>ENDEAR</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>05:03</td>
          <td>5</td>
          <td>5</td>
          <td>3</td>
          <td>
            <Monospace>TURKEYS</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>12:06</td>
          <td>12</td>
          <td>10</td>
          <td>6</td>
          <td>
            <Monospace>ADORE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>21:07</td>
          <td>21</td>
          <td>17</td>
          <td>7</td>
          <td>
            <Monospace>IS</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>15:05</td>
          <td>15</td>
          <td>13</td>
          <td>5</td>
          <td>
            <Monospace>LL</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>11:07</td>
          <td>11</td>
          <td>9</td>
          <td>7</td>
          <td>
            <Monospace>SORE</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>26:01</td>
          <td>26</td>
          <td>22</td>
          <td>1</td>
          <td>
            <Monospace>ADVERTISING</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>33:02</td>
          <td>33</td>
          <td>27</td>
          <td>2</td>
          <td>
            <Monospace>LET</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>07:01</td>
          <td>7</td>
          <td>7</td>
          <td>1</td>
          <td>
            <Monospace>EVEN</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>35:06</td>
          <td>35</td>
          <td>29</td>
          <td>6</td>
          <td>
            <Monospace>SKY</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      #table-1 td:nth-child(2),
      #table-1 td:nth-child(3),
      #table-1 th:nth-child(5),
      #table-1 td:nth-child(5),
      #table-2 th:nth-child(1),
      #table-2 td:nth-child(1),
      #table-2 th:nth-child(3),
      #table-2 td:nth-child(3),
      #table-2 th:nth-child(4),
      #table-2 td:nth-child(4),
      #table-2 td:nth-child(5),
      #table-3 th:nth-child(1),
      #table-3 td:nth-child(1),
      #table-3 th:nth-child(2),
      #table-3 td:nth-child(2),
      #table-3 th:nth-child(3),
      #table-3 td:nth-child(3),
      #table-3 th:nth-child(4),
      #table-3 td:nth-child(4),
      #table-3 td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
