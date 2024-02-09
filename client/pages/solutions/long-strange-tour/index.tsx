import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'long-strange-tour';
const ANSWER = `SOCORRO DOVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We find 14 audio files that can be clicked in the grid. These audio files
      correspond to jams in the middle of songs from the Dead &amp; Company 2023
      "Final Tour". Songs are in alphabetical order by number and at most one
      song is used from any tour stop.
    </p>
    <Table>
      <style jsx>{`
        td:first-child {
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th>Number</th>
          <th>Song</th>
          <th>Date</th>
          <th>Tour stop</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Brown-Eyed Women</td>
          <td>June 9</td>
          <td>Chicago night 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cold Rain and Snow</td>
          <td>July 3</td>
          <td>Boulder night 3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cumberland Blues</td>
          <td>May 23</td>
          <td>Phoenix</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dark Star</td>
          <td>June 24</td>
          <td> Boston night 1</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Dear Prudence</td>
          <td>June 3</td>
          <td>Bristow</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Friend of the Devil</td>
          <td>May 28</td>
          <td> Atlanta</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Going Down the Road Feeling Bad</td>
          <td>June 7</td>
          <td>Maryland Heights</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Help on the Way</td>
          <td>May 20</td>
          <td>Inglewood night 2</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Iko Iko</td>
          <td>June 27</td>
          <td>Noblesville</td>
        </tr>
        <tr>
          <td>10</td>
          <td>New Speedway Boogie</td>
          <td>June 1</td>
          <td>Raleigh</td>
        </tr>
        <tr>
          <td>11</td>
          <td>St. Stephen</td>
          <td>July 8</td>
          <td>George night 2</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Terrapin Station</td>
          <td>June 17</td>
          <td>Saratoga Springs 1</td>
        </tr>
        <tr>
          <td>13</td>
          <td>The Wheel</td>
          <td>June 13</td>
          <td>Cincinnati</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Truckin'</td>
          <td>June 5</td>
          <td>Burgettstown</td>
        </tr>
      </tbody>
    </Table>

    <p>
      We can find all of these songs on{' '}
      <a href="https://relisten.net/">relisten.net</a>, as clued by the
      flavortext:
    </p>
    <Table>
      <style jsx>{`
        td:first-child {
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th>Number</th>
          <th>relisten.net link</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/09/07-brown-eyed-womenflac?source=931346">
              Brown-Eyed Women
            </a>
          </td>
          <td>4:47 - 5:47</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/07/03/deadco2023-07-03t04flac?source=957345">
              Cold Rain and Snow
            </a>
          </td>
          <td>3:45 - 4:45</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/05/23?source=913028">
              Cumberland Blues
            </a>
          </td>
          <td>5:38 - 6:38</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/24?source=986549">
              Dark Star
            </a>
          </td>
          <td>9:00 - 10:00</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/03/deadco2023-06-03t06flac?source=937776">
              Dear Prudence
            </a>
          </td>
          <td>7:00 - 8:00</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/05/28/deadco2023-05-28t04flac?source=917327">
              Friend of the Devil
            </a>
          </td>
          <td>7:33 - 8:33</td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/07?source=930268">
              Going Down the Road Feeling Bad
            </a>
          </td>
          <td>4:55 - 5:55</td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/05/20/help-on-the-way?source=909844">
              Help on the Way
            </a>
          </td>
          <td>1:45 - 2:45</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/27?source=951908">
              Iko Iko
            </a>
          </td>
          <td>2:52 - 3:52</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/01?source=922631">
              New Speedway Boogie
            </a>
          </td>
          <td>7:36 - 8:36</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/07/08/20230708s02t04-saint-stephenflac?source=994436">
              St. Stephen
            </a>
          </td>
          <td>5:13 - 6:13</td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/17?source=939960">
              Terrapin Station
            </a>
          </td>
          <td>4:53 - 5:53</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/13?source=936716">
              The Wheel
            </a>
          </td>
          <td>3:35 - 4:35</td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            <a href="https://relisten.net/dead-and-co/2023/06/05?source=930267">
              Truckin'
            </a>
          </td>
          <td>4:03 - 5:03</td>
        </tr>
      </tbody>
    </Table>
    <p>
      While there are limited lyrics, the sections are each a minute long to
      help identify the song. The manner in which each jam played will help
      distinguish it from other times the band played it over the 14 concerts
      used in the song (any particular song won't be played more than 4&ndash;5 times;
      Dear Prudence was only played once all tour). Along with unique music for
      each concert, the band had souvenir posters available at each stop. The
      posters in these concerts were all 18" wide by 24" high. We can find the
      ones used for these shows, using{' '}
      <a href="https://posterdrops.com/">posterdrops.com</a> as clued by the
      flavortext:
    </p>
    <Table>
      <style jsx>{`
        td:first-child {
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>posterdrops.com link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>June 9</td>
          <td>
            <a href="https://posterdrops.com/art/48631?album=main">Chicago 1</a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>July 3</td>
          <td>
            <a href="https://posterdrops.com/art/49499?album=main">Boulder 3</a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>May 23</td>
          <td>
            <a href="https://posterdrops.com/art/47796?album=main">Phoenix</a>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>June 24</td>
          <td>
            <a href="https://posterdrops.com/art/48989?album=main">Boston 1</a>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>June 3</td>
          <td>
            <a href="https://posterdrops.com/art/48147?album=main">Bristow</a>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>May 28</td>
          <td>
            <a href="https://posterdrops.com/art/47881?album=main">Atlanta</a>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>June 7</td>
          <td>
            <a href="https://posterdrops.com/art/48314?album=main">
              Maryland Heights
            </a>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>May 20</td>
          <td>
            <a href="https://posterdrops.com/art/47592?album=main">
              Inglewood 2
            </a>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>June 27</td>
          <td>
            <a href="https://posterdrops.com/art/49206?album=main">
              Noblesville
            </a>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>June 1</td>
          <td>
            <a href="https://posterdrops.com/art/48067?album=main">Raleigh</a>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>July 8</td>
          <td>
            <a href="https://posterdrops.com/art/49518?album=main">George 2</a>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>June 17</td>
          <td>
            <a href="https://posterdrops.com/art/48834?album=main">
              Saratoga Springs 1
            </a>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>June 13</td>
          <td>
            <a href="https://posterdrops.com/art/48656?album=main">
              Cincinnati
            </a>
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>June 5</td>
          <td>
            <a href="https://posterdrops.com/art/48235?album=main">
              Burgettstown
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Note that some of the pics in those links have false borders around the
      posters; we use the actual 18"x24" version an attendee would buy. (Some
      have ink right to the border, some don't.) If we superimpose any poster
      above the image in the puzzle and look where the number corresponding to
      the song from that concert is clicked, it will land on a letter in that
      poster. Placing them in the order of the poster snippets given in the
      puzzle, we get the message <Clue>ROT BY SETLIST FM</Clue>.
    </p>
    <p>
      <a href="https://setlist.fm">setlist.fm</a> has an archive of the setlists
      played at thousands of concerts, including all Dead &amp; Company shows.
      Looking at the particular song played in each concert clip, we get a
      setlist number to rotate the concert poster letter by. Placing these new
      letters in the order of the concert tour (that is, the order in which
      these songs were played over the several months long strange tour), we get
      the message <Clue>ITS SOCORRO DOVE</Clue>.
    </p>
    <p>
      The answer is <Answerize>{ANSWER}</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
