import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'subplutonean-ihtfp-blues';
const ANSWER = `EDOUARD ROCHE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We observe that these pictures all appear to be pictures taken in the MIT
      tunnel system. Finding these locations enables us identify not only a
      series of locations, but to arrange them in such a way that, aside from
      the last picture, each picture includes the location the next picture was
      taken from in the background of the shot.
    </p>
    <p>
      We also observe that the title of this puzzle feels familiar to us (or if
      it doesn't, perhaps that it feels like the title of something else).
      Web-searching for "Subterranean" (rather than "Subplutonean") and "Blues"
      should lead us to the song by Bob Dylan ["Subterranean Homesick Blues"
      came up in the web-search autocomplete test the author did even without
      "blues"], and if we go looking for a video for the song, it leads us to
      the video that was made for it (e.g.,{' '}
      <a href="https://www.youtube.com/watch?v=MGxjIBEZvx0">
        Bob Dylan - Subterranean Homesick Blues (Official HD Video)
      </a>
      ).
    </p>
    <p>
      Watching the video, we see a man in the foreground going through a series
      of posterboards with words on them. As the photographs we've been given
      feature persons in the foreground holding posterboards with words on them,
      we can assume there is a connection between the pictures in the puzzle and
      the video. Looking more closely, we find that we can match the words on
      the photos to words on specific posterboards in the video by a combination
      of word lengths/positions and first letters - for instance, the
      posterboard with the word <Clue>MAGICIAN</Clue> maps to the posterboard in
      the video with the word <Clue>MEDICINE</Clue>, and the posterboard with
      the words <Clue>AWFUL WAR</Clue> maps to the posterboard in the video with
      the words <Clue>ALLEY WAY</Clue>.
    </p>
    <p>
      Two of the additional mappings now give us a further clue:{' '}
      <Clue>PED PTH</Clue> maps to <Clue>PIG PEN</Clue>, and{' '}
      <Clue>WORDS BLAZOND</Clue> maps to <Clue>WRITE BRAILLE</Clue>. We now have
      a "Pedestrian Path" (MIT Tunnels) ordering and a "words blazon'd" (video
      posterboard) ordering for the photographs, and references to pigpen (a
      common cipher) and Braille. Using these orderings we can now arrange the
      stacked columns of three squares which exist on the posterboards.
    </p>
    <p>
      Arranging them in song order, and considering only the black circles gives
      the following:
    </p>
    <Table className="braille-table">
      <tbody>
        <tr>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
          <td>●</td>
          <td>●</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>●</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      This is <Clue>EDOUAR</Clue> in Braille.
    </p>
    <p>
      Arranging them in path order (given by the waypoints on the "getfit@mit
      Tunnel Walking Route", blacked out in the images), and considering only
      the larger-sized and smaller-sized red circles gives the following:
    </p>
    <Table className="pigpen-table">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>⚬</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>⚬</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>◯</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>⚬</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>◯</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>⚬</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading Pigpen with the smaller circles as A-I and the larger ones as J-R
      gives <Clue>DROCHE</Clue>.
    </p>
    <p>
      The answer to this puzzle is <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        The photo editing for this puzzle was done entirely in Microsoft Paint.
        (The font for the words is Segoe Script.)
      </p>
    </AuthorsNotes>
    <Appendix>
      <Table>
        <thead>
          <tr>
            <th>Poster-board</th>
            <th>Our version</th>
            <th>Way-point</th>
            <th>Song Order</th>
            <th>Alpha Order</th>
            <th>Top</th>
            <th>Middle</th>
            <th>Bottom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Clue>PLAIN CLOTHES</Clue>
            </td>
            <td>
              <Clue>POWER COUPLES</Clue>
            </td>
            <td>A</td>
            <td>9</td>
            <td>13</td>
            <td>n/a</td>
            <td>Pigpen Small</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>MAN WHOLE</Clue>
            </td>
            <td>
              <Clue>MUD WHEAP</Clue>
            </td>
            <td>B</td>
            <td>17</td>
            <td>9</td>
            <td>n/a</td>
            <td>Braille</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>ALLEY WAY</Clue>
            </td>
            <td>
              <Clue>AWFUL WAR</Clue>
            </td>
            <td>C</td>
            <td>4</td>
            <td>1</td>
            <td>Braille</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>IT'S HARD</Clue>
            </td>
            <td>
              <Clue>IC'Y HOTS</Clue>
            </td>
            <td>D</td>
            <td>10</td>
            <td>7</td>
            <td>Braille</td>
            <td>n/a</td>
            <td>Braille</td>
          </tr>
          <tr>
            <td>
              <Clue>DISTRICT ATTORNEY</Clue>
            </td>
            <td>
              <Clue>DIABETIC ACIDOSIS</Clue>
            </td>
            <td>E</td>
            <td>7</td>
            <td>4</td>
            <td>Braille</td>
            <td>n/a</td>
            <td>Braille</td>
          </tr>
          <tr>
            <td>
              <Clue>TRENCH COAT</Clue>
            </td>
            <td>
              <Clue>TREBLE CLEF</Clue>
            </td>
            <td>F</td>
            <td>3</td>
            <td>16</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Pigpen Large</td>
          </tr>
          <tr>
            <td>
              <Clue>WHIRLPOOL [loops around; 1:27]</Clue>
            </td>
            <td>
              <Clue>WHEEEEEEE</Clue>
            </td>
            <td>G</td>
            <td>13</td>
            <td>17</td>
            <td>Braille</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>MEDICINE</Clue>
            </td>
            <td>
              <Clue>MAGICIAN</Clue>
            </td>
            <td>H</td>
            <td>2</td>
            <td>8</td>
            <td>n/a</td>
            <td>Braille</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>SHORT PANTS - ROMANCE</Clue>
            </td>
            <td>
              <Clue>SAINT PAULS - RECTORY</Clue>
            </td>
            <td>I</td>
            <td>15</td>
            <td>14</td>
            <td>n/a</td>
            <td>Pigpen Large</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>PAWKING METAWS</Clue>
            </td>
            <td>
              <Clue>PLUNGAW MAGNET</Clue>
            </td>
            <td>J</td>
            <td>14</td>
            <td>12</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>WRITE BRAILLE</Clue>
            </td>
            <td>
              <Clue>WORDS BLAZOND</Clue>
            </td>
            <td>K</td>
            <td>11</td>
            <td>18</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Braille</td>
          </tr>
          <tr>
            <td>
              <Clue>HERE THEY COME!</Clue>
            </td>
            <td>
              <Clue>HAVE THIS CLUE!</Clue>
            </td>
            <td>L</td>
            <td>12</td>
            <td>6</td>
            <td>Pigpen Small</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>PLEASE/ HER, PL-/EASE HIM</Clue>
            </td>
            <td>
              <Clue>PIPING/ HOT, PI-/CNIC HAM</Clue>
            </td>
            <td>M</td>
            <td>16</td>
            <td>11</td>
            <td>Braille</td>
            <td>Braille</td>
            <td>Braille</td>
          </tr>
          <tr>
            <td>
              <Clue>THE VANDALS / TOOK ALL THE / HANDLES</Clue>
            </td>
            <td>
              <Clue>TIS VICTORY / TIME AND TIS / HOPEFUL</Clue>
            </td>
            <td>N</td>
            <td>18</td>
            <td>15</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Pigpen Small</td>
          </tr>
          <tr>
            <td>
              <Clue>BASEMENT (0:05)</Clue>
            </td>
            <td>
              <Clue>BASEMENT</Clue>
            </td>
            <td>O</td>
            <td>1</td>
            <td>2</td>
            <td>Braille</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>PIG PEN</Clue>
            </td>
            <td>
              <Clue>PED PTH</Clue>
            </td>
            <td>P</td>
            <td>5</td>
            <td>10</td>
            <td>Braille</td>
            <td>Braille</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>BLACK SOOT</Clue>
            </td>
            <td>
              <Clue>BOBBY SANG</Clue>
            </td>
            <td>Q</td>
            <td>6</td>
            <td>3</td>
            <td>n/a</td>
            <td>Pigpen Small</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>
              <Clue>FIRE HOSE</Clue>
            </td>
            <td>
              <Clue>FORE HEAD</Clue>
            </td>
            <td>R</td>
            <td>8</td>
            <td>5</td>
            <td>n/a</td>
            <td>Braille</td>
            <td>n/a</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      .braille-table td,
      .pigpen-table td {
        box-sizing: border-box;
        padding: 0px 0px !important;
        min-width: 26px;
        text-align: center;
      }
      .braille-table td:nth-child(3n + 1),
      .braille-table td:nth-child(3n + 2) {
        background-color: #fff2cc;
      }

      .pigpen-table td:nth-child(1) {
        border-left: 3px solid black;
      }
      .pigpen-table td:nth-child(3n) {
        border-right: 3px solid black;
      }
      .example {
        color: var(--dark);
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
