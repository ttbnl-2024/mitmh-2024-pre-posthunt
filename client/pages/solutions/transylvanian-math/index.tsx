import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'transylvanian-math';
const ANSWER = `COBBLESTONES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are presented with a long list of numbers. The title (Transylvanian
      Math), as well as "counting" and "record" in the flavor text lead us to
      the Sesame Street album <i>The Count Counts.</i> The flavor text
      mentioning "seven sevens of years" also clues the fact that the{' '}
      <i>The Count Counts</i> album was released in 1975, 49 years before 2024.{' '}
      <i>The Count Counts</i> is an album in the style of an FM radio "Top 40"
      countdown, and all 24 of the songs heavily feature numbers.
    </p>
    <p>
      The list of numbers can be separated into 24 lines of numbers, with each
      line representing all of the numbers sung in one of the 24 songs on the
      album, though most of the lines have 1 or 2 additional numbers included.
    </p>
    <p>
      For each line, we can take the additional numbers and index them into the
      song title. The first group is the numbers 1 2 3 1 2 3 1 3 4 2 1 2 3 4 26
      1 2 <b>4</b> 3 4 2478693 1 2 3, corresponding to the numbers in the song{' '}
      <i>Beep</i>. One of the 4s (bolded for emphasis) is an extra number, not
      sung in the song. Indexing the number 4 into the song title{' '}
      <Monospace>BEEP</Monospace> gives a <Monospace>P</Monospace>.
    </p>
    <p>
      Doing this for every song gives the clue phrase{' '}
      <Monospace>POSITIONS THAT HAVE ADDED NUMBERS.</Monospace>
    </p>
    <p>
      This intermediate solution phrase indicates to us that we then need to
      take the positions of each added number, for each song. In the above
      example for the song <i>Beep</i>, the extra 4 is the 18th number listed.
      Using A1Z26, we can extract an R for this song. Following that procedure
      for each of the added numbers, we get the clue phrase{' '}
      <Monospace>ROCKS MAKING UP OLD STREETS TWELVE.</Monospace>
    </p>
    <p>
      This yields the puzzle's answer, <Answerize>COBBLESTONES</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        I am old enough that I first listened to this album on an actual record
        player (at my grandparents' house) and the message "turn the record to
        the other side" actually had real meaning :-). Given how many numbers
        are in each song, I thought it might make for a fun puzzle. In designing
        the puzzle, we also considered having a list of letters and emojis, but
        the consensus was that it would be fun to just have a long list of
        numbers which could seem overwhelming before you start to put order to
        the puzzle.
      </p>
    </AuthorsNotes>
    <Appendix>
      <h3>Songs</h3>
      <Table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Album #</th>
            <th>Song title</th>
            <th>Extra #s</th>
            <th>Idx Extra</th>
            <th>Extra # Pos.</th>
            <th>Idx Extra Pos.</th>
            <th>Original #'s</th>
            <th>W/ Extra #'s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>18</td>
            <td>
              <Monospace>BEEP</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>18</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>1 2 3 1 2 3 1 3 4 2 1 2 3 4 26 1 2 3 4 2478693 1 2 3</td>
            <td>
              1 2 3 1 2 3 1 3 4 2 1 2 3 4 26 1 2 <b>4</b> 3 4 2478693 1 2 3
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>21</td>
            <td>
              <Monospace>THE "3" SONG</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>15</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>1 2 3 3 3 3 1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1 2 3</td>
            <td>
              1 2 3 3 3 3 1 2 3 1 2 3 1 2 <b>6</b> 3 1 2 3 1 2 3 1 2 3
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>7</td>
            <td>
              <Monospace>THE COUNT'S WEATHER REPORT</Monospace>
            </td>
            <td>9</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>72 11 46 8 28 60 12 15000 15000</td>
            <td>
              72 11 <b>9</b> 46 8 28 60 12 15000 15000
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>
              <Monospace>THE "15" COMMERCIAL</Monospace>
            </td>
            <td>13, 1</td>
            <td>
              <Monospace>IT</Monospace>
            </td>
            <td>11, 19</td>
            <td>
              <Monospace>KS</Monospace>
            </td>
            <td>
              10 15 5 10 14 16 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 10 11 12 13
              14 15 15 1 5
            </td>
            <td>
              10 15 5 10 14 16 1 2 3 4 <b>13</b> 5 6 7 8 9 10 11 <b>1</b> 12 13
              14 15 10 11 12 13 14 15 15 1 5
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>22</td>
            <td>
              <Monospace>SUBTRACTION BLUES</Monospace>
            </td>
            <td>9</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>13</td>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>4 1 4 1 3 3 1 3 1 2 2 1 2 1 1 1 1 1 1</td>
            <td>
              4 1 4 1 3 3 1 3 1 2 2 1 <b>9</b> 2 1 1 1 1 1 1
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>14</td>
            <td>
              <Monospace>COUNTING IS WONDERFUL</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>1 1 2 2 3 3</td>
            <td>
              <b>2</b> 1 1 2 2 3 3
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>19</td>
            <td>
              <Monospace>FOUR BIG LIONS</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>K</Monospace>
            </td>
            <td>4 1 2 3 4 1 2 3 4 4 1 2 3 4 4 1 2 3 4</td>
            <td>
              4 1 2 3 4 1 2 3 4 4 <b>11</b> 1 2 3 4 4 1 2 3 4
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>16</td>
            <td>
              <Monospace>NUMBERS IN THE NEWS</Monospace>
            </td>
            <td>7, 10</td>
            <td>
              <Monospace>ST</Monospace>
            </td>
            <td>9, 14</td>
            <td>
              <Monospace>IN</Monospace>
            </td>
            <td>3 3 1 4 10 3 10 5 3 9 2 16 27 6 1 3 2</td>
            <td>
              3 3 1 4 10 3 10 5 <b>7</b> 3 9 2 16 <b>10</b> 27 6 1 3 2
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>12</td>
            <td>
              <Monospace>THE ALLIGATOR KING</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>1 2 3 4 5 6 7 7 7 7 7 7 7 7 7 7 7</td>
            <td>
              1 2 3 4 5 6 <b>2</b> 7 7 7 7 7 7 7 7 7 7 7
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>20</td>
            <td>
              <Monospace>I JUST ADORE "4"</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>21</td>
            <td>
              <Monospace>U</Monospace>
            </td>
            <td>4 4 5 3 4 4 4 4 4 4 4 1 2 3 4 4 4 5 3 4 4 4 4 4 4 4 1 2 3</td>
            <td>
              4 4 5 3 4 4 4 4 4 4 4 1 2 3 4 4 4 5 3 4 <b>6</b> 4 4 4 4 4 4 1 2 3
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>6</td>
            <td>
              <Monospace>TEN TURTLES</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>
              1 2 3 4 5 6 7 8 9 10 10 10 10 10 1 2 3 4 5 6 7 8 9 10 10 1 10 10
              10 10 10 10 10
            </td>
            <td>
              1 2 3 4 5 6 7 8 9 10 10 10 10 10 1 <b>4</b> 2 3 4 5 6 7 8 9 10 10
              1 10 10 10 10 10 10 10
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>23</td>
            <td>
              <Monospace>DOLLHOUSE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>15</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>
              1 2 2 1 2 2 2 2 2 1 2 2 1 2 2 2 2 2 2 2 2 1 2 1 2 2 1 2 2 2 2
            </td>
            <td>
              1 2 2 1 2 2 2 2 2 1 2 2 1 2 <b>5</b> 2 2 2 2 2 2 2 1 2 1 2 2 1 2 2
              2 2
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>9</td>
            <td>
              <Monospace>NUMERICAL CORRESPONDENCE</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>12</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>1 2 3 2 3 3 1 4 4 5 5 5 4 3 2 1</td>
            <td>
              1 2 3 2 3 3 1 4 4 5 5 <b>8</b> 5 4 3 2 1
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>4</td>
            <td>
              <Monospace>IT'S A LOVELY ELEVEN MORNING</Monospace>
            </td>
            <td>7, 11</td>
            <td>
              <Monospace>VE</Monospace>
            </td>
            <td>4, 19</td>
            <td>
              <Monospace>DS</Monospace>
            </td>
            <td>11 11 11 11 11 11 11 11 11 1 2 3 4 5 6 7 8 9 10 11 11 11</td>
            <td>
              11 11 11 <b>7</b> 11 11 11 11 11 11 1 2 3 4 5 6 7 8 <b>11</b> 9 10
              11 11 11
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>11</td>
            <td>
              <Monospace>IT'S BEEN A LONG, LONG TIME</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>
              1 2 3 1 2 2 1 1 1 1 2 2 1 1000000 1 2 3 1 2 2 1 3 4 4 2 8 4 1
            </td>
            <td>
              1 2 3 1 2 2 1 1 1 1 2 2 1 1000000 1 2 3 1 2 <b>8</b> 2 1 3 4 4 2 8
              4 1
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>2</td>
            <td>
              <Monospace>LADYBUG'S PICNIC</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>18</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>
              1 2 3 4 5 6 7 8 9 10 11 12 1 2 3 4 5 6 7 8 9 10 11 12 12 12 12 1 2
              3 4 5 6 7 8 9 10 11 12 12 12
            </td>
            <td>
              1 2 3 4 5 6 7 8 9 10 11 12 1 2 3 4 5 <b>3</b> 6 7 8 9 10 11 12 12
              12 12 1 2 3 4 5 6 7 8 9 10 11 12 12 12
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>1</td>
            <td>
              <Monospace>INTRODUCTION</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>1 1 1 1 2 2 3 3 4</td>
            <td>
              1 1 1 1 <b>6</b> 2 2 3 3 4
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>3</td>
            <td>
              <Monospace>COUNTING IS WONDERFUL</Monospace>
            </td>
            <td>15, 14</td>
            <td>
              <Monospace>ED</Monospace>
            </td>
            <td>5, 20</td>
            <td>
              <Monospace>ET</Monospace>
            </td>
            <td>
              1 2 3 4 1 2 3 4 5 1 2 3 4 5 6 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 1 2 3
              4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 1 2 3 4 5 1 2 3 1 2 3 4 5 6
              7 8 9 1 2 3 4 5 6
            </td>
            <td>
              1 2 3 4 <b>15</b> 1 2 3 4 5 1 2 3 4 5 6 1 2 3 <b>14</b> 4 5 6 7 8
              9 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 1 2 3 4
              5 1 2 3 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>24</td>
            <td>
              <Monospace>THE SONG OF THE COUNT</Monospace>
            </td>
            <td>16, 15</td>
            <td>
              <Monospace>NU</Monospace>
            </td>
            <td>19, 20</td>
            <td>
              <Monospace>ST</Monospace>
            </td>
            <td>
              1 2 3 4 1 2 3 4 1 2 3 4 1 2 1 2 3 4 1 2 3 4 1 2 1 2 3 4 1 2 3 4 1
              2 3 4 1 2 1 2 3 4 1 2 3 4 1 2
            </td>
            <td>
              1 2 3 4 1 2 3 4 1 2 3 4 1 2 1 2 3 4 <b>16 15</b> 1 2 3 4 1 2 1 2 3
              4 1 2 3 4 1 2 3 4 1 2 1 2 3 4 1 2 3 4 1 2
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>10</td>
            <td>
              <Monospace>CANDY MAN</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>23</td>
            <td>
              <Monospace>W</Monospace>
            </td>
            <td>1 2 3 4 5 6 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 3 4 5 6 7 8 8</td>
            <td>
              1 2 3 4 5 6 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 <b>6</b> 2 3 4 5 6 7 8
              8
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>8</td>
            <td>
              <Monospace>MARTIAN BEAUTY</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>B</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>
              1 2 3 4 5 6 7 8 9 9 9 1 2 3 4 5 6 7 8 9 9 9 9 1 1 2 3 4 5 6 7 8 9
              9
            </td>
            <td>
              1 2 3 4 <b>8</b> 5 6 7 8 9 9 9 1 2 3 4 5 6 7 8 9 9 9 9 1 1 2 3 4 5
              6 7 8 9 9
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>13</td>
            <td>
              <Monospace>COUNT IT HIGHER</Monospace>
            </td>
            <td>12, 13</td>
            <td>
              <Monospace>ER</Monospace>
            </td>
            <td>12, 22</td>
            <td>
              <Monospace>LV</Monospace>
            </td>
            <td>
              1 2 3 3 1 2 3 4 5 5 1 2 3 4 5 6 7 8 9 10 10 1 1 2 3 4 5 6 7 8 9 10
            </td>
            <td>
              1 2 3 3 1 2 3 4 5 5 1 <b>12</b> 2 3 4 5 6 7 8 9 10 <b>13</b> 10 1
              1 2 3 4 5 6 7 8 9 10
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>15</td>
            <td>
              <Monospace>COUNTRY SIX</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>6 1 2 3 4 5 6 6 6 6 6 6 6 6 1 2 3 4 5 6 6 6 1 2 3 4 5 6</td>
            <td>
              6 1 2 3 <b>8</b> 4 5 6 6 6 6 6 6 6 6 1 2 3 4 5 6 6 6 1 2 3 4 5 6
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>17</td>
            <td>
              <Monospace>1-2-3-4-5!</Monospace>
            </td>
            <td></td>
            <td>(none)</td>
            <td></td>
            <td></td>
            <td>
              1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3
              4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5
            </td>
            <td>
              1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3
              4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Potential Sources of Confusion</h3>
      <p>A few notes on possible errata / potential sources of confusion:</p>
      <ul>
        <li>
          Probably the biggest question I had was what to do with the extra text
          / numbers in between the songs. The album is set up as a "Top 12"
          countdown hosted by Count von Count, and so there is additional
          talking (including numbers) in between each song. We talked about it
          both ways but eventually decided that this text was not canonically
          part of any song (although some YouTube playlists do include it with
          either the song before or after it), so we did not include them in the
          puzzle.
        </li>
        <li>
          In the song "I Just Adore Four", there are a few cases where I counted
          it as "for" rather than the number "four". "For" is of course not a
          number, though the final word of the song could be read either way (I
          chose to count it as "For")
        </li>
        <li>
          When adding numbers at the beginning or end of a song, it would be
          ambiguous which song it went to. I avoided adding a number at the end,
          but I did have to add one number at the beginning of a song (because a
          number at position 1 is the only way to get an 'A'), but I left that
          as an exercise for solvers
        </li>
        <li>
          Some of the song titles include the numbers ("The '3' Song") while
          others spell out the numeral ("It's a Lovely Eleven Morning"). I
          included them as written on the official album art, and indexed into
          either the number digits or the numeral, depending.
        </li>
        <li>
          1-2-3-4-5 was not given an extra number, since there was no way to
          index into the puzzle title to get a letter, since the song title is
          all numerals.{' '}
        </li>
        <li>
          There are 2 songs called "Counting Is Wonderful" (one is listed as
          "Counting Is Wonderful Reprise" in some sources). Although it sounds
          similar to many of the other "between songs" text and is only 19
          seconds, it is given its own song name on the album cover.
        </li>
      </ul>
      <h3>YouTube Clips</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=gBHD2tUJ7JQ">
            https://www.youtube.com/watch?v=gBHD2tUJ7JQ
          </a>{' '}
          — the entire album, apparently ripped from a cassette
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=OLAK5uy_kKmMn-t9j06uLxkRaAU2Ftl-4QLck5qKI">
            https://www.youtube.com/playlist?list=OLAK5uy_kKmMn-t9j06uLxkRaAU2Ftl-4QLck5qKI
          </a>{' '}
          — Playlist Vol 1 from the official Sesame Street account
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=OLAK5uy_nDqgmf7DYZkP-PV6OdTkbf4TXNJRJEYnE">
            https://www.youtube.com/playlist?list=OLAK5uy_nDqgmf7DYZkP-PV6OdTkbf4TXNJRJEYnE
          </a>{' '}
          — Playlist Vol 2 from the official Sesame Street account
        </li>
      </ul>
    </Appendix>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(2),
      td:nth-child(4),
      td:nth-child(5),
      td:nth-child(6),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
