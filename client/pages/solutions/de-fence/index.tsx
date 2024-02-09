import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/de-fence/0.png';
import image1 from 'assets/solutions/de-fence/1.png';
import image2 from 'assets/solutions/de-fence/2.png';
import image3 from 'assets/solutions/de-fence/3.png';
import image4 from 'assets/solutions/de-fence/4.png';
import image5 from 'assets/solutions/de-fence/5.png';
import image6 from 'assets/solutions/de-fence/6.png';
import image7 from 'assets/solutions/de-fence/7.png';
import image8 from 'assets/solutions/de-fence/8.png';
import image9 from 'assets/solutions/de-fence/9.png';
import image10 from 'assets/solutions/de-fence/10.png';

const SLUG = 'de-fence';
const ANSWER = `HONOURABLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see some numbers and a grid in the puzzle. The grid is a Border Block
      puzzle, where the dots in the grid indicate intersections of three or four
      walls. (The number of emoji is not significant.) The Border Block solution
      looks like:
    </p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image0} title="" />
    </p>
    <p>
      Emojis in the grid give us weapons and places that clue various settings
      for <b>duels</b> or <b>fights</b>: specifically, duels that are found in
      movies and TV. After some searching, we can find these movies, actors, and
      characters:
    </p>
    <Table id="emoji">
      <thead>
        <tr>
          <th>Emojis</th>
          <th>Explanation</th>
          <th>Source</th>
          <th>Characters</th>
          <th>Actors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SheetableImage alt="" src={image1} title="" />
          </td>
          <td>DAGGER AT PLAYGROUND ISLAND IN SOUTH KOREA</td>
          <td>Squid Game</td>
          <td>Seong Gi-Hun / Cho Sang-Woo</td>
          <td>Lee Jung-Jae / Park Hae-Soo</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image2} title="" />
          </td>
          <td>CRANE KICK AT AMERICAN ARENA</td>
          <td>Karate Kid</td>
          <td>Daniel LaRusso / Johnny Lawrence</td>
          <td>Ralph Macchio / William Zabka</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image3} title="" />
          </td>
          <td>
            BOXING GLOVE (SECOND FIGHT) IN A RING IN AMERICA
            (PHILADELPHIA=LIBERTY BELL)
          </td>
          <td>Rocky</td>
          <td>Rocky Balboa / Apollo Creed </td>
          <td>Sylvester Stallone / Carl Weathers</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image4} title="" />
          </td>
          <td>PISTOLS NEAR TREES IN AMERICAN DESERT (ARIZONA)</td>
          <td>Tombstone</td>
          <td>Doc Holliday / Johnny Ringo</td>
          <td>Val Kilmer / Michael Biehn</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image5} title="" />
          </td>
          <td>LIGHT SABERS IN LAVA PLANET</td>
          <td>Star Wars Episode III</td>
          <td>Obi-Wan Kenobi / Anakin Skywalker</td>
          <td>Ewan McGregor / Hayden Christensen</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image6} title="" />
          </td>
          <td>SWORDS IN A SNOWY ZEN GARDEN</td>
          <td>Kill Bill Volume I</td>
          <td>The Bride / O-Ren Ishii</td>
          <td>Uma Thurman / Lucy Liu</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image7} title="" />
          </td>
          <td>BRASS CLUB HOOK SWORDS IN CHINESE DOJO</td>
          <td>Crouching Tiger Hidden Dragon</td>
          <td>Jen Yu / Yu Shu Lien</td>
          <td>Zhang Ziyi / Michelle Yeoh</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image8} title="" />
          </td>
          <td>SWORDS IN A CASTLE BANQUET ROOM</td>
          <td>The Princess Bride</td>
          <td>Inigo Montoya / Count Rugen</td>
          <td>Mandy Patinkin / Christopher Guest</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image9} title="" />
          </td>
          <td>SWORDS NEAR A BRIDGE WITH THE SOUND OF COCONUTS</td>
          <td>Monty Python and the Holy Grail</td>
          <td>King Arthur / Black Knight</td>
          <td>Graham Chapman / John Cleese</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image10} title="" />
          </td>
          <td>WANDS IN A CASTLE CLASSROOM WITH SOUNDS OF HISSING</td>
          <td>Harry Potter and the Chamber of Secrets</td>
          <td>Harry Potter / Draco Malfoy</td>
          <td>Daniel Radcliffe / Tom Felton</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The enumerations on the left and right sides of the grid match the actors'
      names, with the winners on the left and losers on the right. The matched
      enumerations are as follows:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Left</th>
          <th>Right</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5 4: Zhang Ziyi</td>
          <td>7 5: Michael Biehn</td>
        </tr>
        <tr>
          <td>9 8: Sylvester Stallone</td>
          <td>6 11: Hayden Christensen</td>
        </tr>
        <tr>
          <td>3 6: Val Kilmer</td>
          <td>4 6: John Cleese</td>
        </tr>
        <tr>
          <td>6 9: Daniel Radcliffe</td>
          <td>3 6: Tom Felton</td>
        </tr>
        <tr>
          <td>5 8: Mandy Patinkin</td>
          <td>11 5: Christopher Guest</td>
        </tr>
        <tr>
          <td>5 7: Ralph Macchio</td>
          <td>4 3: Lucy Liu</td>
        </tr>
        <tr>
          <td>3 4-3: Lee Jung-Jae</td>
          <td>4 3-3: Park Sae-Hoo</td>
        </tr>
        <tr>
          <td>6 7: Graham Chapman</td>
          <td>4 8: Carl Weathers</td>
        </tr>
        <tr>
          <td>4 8: Ewan McGregor</td>
          <td>8 4: Michelle Yeoh</td>
        </tr>
        <tr>
          <td>3 7: Uma Thurman</td>
          <td>7 5: William Zabka</td>
        </tr>
      </tbody>
    </Table>
    <p>
      As the right column of losers is alphabetized, we reorder by their duel
      partner in the left column. Indexing into the character name of the loser
      by the number of squares in their border block region solution yields the
      answer <Answerize>HONOURABLE</Answerize>.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Left</th>
          <th>Partner</th>
          <th>Loser</th>
          <th>Area</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Zhang Ziyi</td>
          <td>Michelle Yeoh</td>
          <td>
            <Monospace>YU SHU LIEN</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Sylvester Stallone</td>
          <td>Carl Weathers</td>
          <td>
            <Monospace>APOLLO CREED</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Val Kilmer</td>
          <td>Michael Biehn</td>
          <td>
            <Monospace>JOHNNY RINGO</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Daniel Radcliffe</td>
          <td>Tom Felton</td>
          <td>
            <Monospace>DRACO MALFOY</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mandy Patinkin</td>
          <td>Christopher Guest</td>
          <td>
            <Monospace>COUNT RUGEN</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ralph Macchio</td>
          <td>William Zabka</td>
          <td>
            <Monospace>JOHNNY LAWRENCE</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lee Jung-Jae</td>
          <td>Park Sae-Hoo</td>
          <td>
            <Monospace>CHO SANG-WOO</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Graham Chapman</td>
          <td>John Cleese</td>
          <td>
            <Monospace>THE BLACK KNIGHT</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ewan McGregor</td>
          <td>Hayden Christensen</td>
          <td>
            <Monospace>ANAKIN SKYWALKER</Monospace>
          </td>
          <td>12</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Uma Thurman</td>
          <td>Lucy Liu</td>
          <td>
            <Monospace>O-REN ISHII</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      #emoji td:nth-child(1),
      #extraction td:nth-child(4),
      #extraction td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
