import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'julia-and-friends';
const ANSWER = `I AM GROOT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      First, we identify the celebrities in the photos, noting they are in
      alphabetical order by name.
    </p>

    <ul className="list-none">
      <li>Ben Vereen </li>
      <li>Bernadette Peters</li>
      <li>Carol Burnett</li>
      <li>Carol Channing</li>
      <li>Danny Kaye</li>
      <li>Diana Ross</li>
      <li>Elton John</li>
      <li>Ethel Merman</li>
      <li>Florence Henderson</li>
      <li>Gene Kelly</li>
      <li>Harry Belafonte</li>
      <li>Joel Grey</li>
      <li>John Denver</li>
      <li>Judy Collins</li>
      <li>Julie Andrews</li>
      <li>Kaye Ballard</li>
      <li>Lena Horne</li>
      <li>Liberace</li>
      <li>Linda Lavin</li>
      <li>Liza Minnelli</li>
      <li>Madeline Kahn</li>
      <li>Nancy Walker</li>
      <li>Paul Simon</li>
      <li>Pearl Bailey</li>
      <li>Petula Clark</li>
      <li>Rita Moreno</li>
      <li>Zero Mostel</li>
    </ul>
    <p>
      Then, we realize that the clues under each photo are not crossword clues
      but are instead anagrams of Muppets from <i>The Muppet Show</i> (clued by the
      fact these are all guest stars, which we figure out from a quick Google
      search) and <i>Sesame Street</i> (clued by the title “Julia and Friends” which
      we can figure out by googling Julia Muppet) with a changed letter.  For
      instance, <Monospace>NEVER</Monospace> anagrams to{' '}
      <Monospace>ERNIE</Monospace> from <i>Sesame Street</i> when we replace the{' '}
      <Monospace>V</Monospace> with an <Monospace>I</Monospace>.  We are
      interested in the letters that have replaced a letter in the original
      character.
    </p>
    <p>
      Next, we notice the flavortext mentions “production” to clue the fact we
      should reorder the letters by <i>The Muppet Show</i> production numbers.
      Reading the letters that replaced the original letters, we get the
      cluephrase <Monospace>VIN DIESEL FIRST GUARDIANS LINE.</Monospace>
    </p>
    <p>
      Vin Diesel said one line over and over in the first <i>Guardians of the
      Galaxy</i> movie (though he had a new line in the third one #spoileralert).
      The answer is said line,{' '}
      <b>
        <Monospace>I AM GROOT</Monospace>
      </b>
      <b>.</b>
    </p>
    <Table id="muppets">
      <thead>
        <tr>
          <th>New Letter</th>
          <th>Clue</th>
          <th>Muppet</th>
          <th>Celeb</th>
          <th>Production #</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td>Never</td>
          <td>Ernie (<i>Sesame Street</i>)</td>
          <td>Joel Grey</td>
          <td>1x03</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Brit</td>
          <td>Bert (<i>Sesame Street</i>)</td>
          <td>Rita Moreno</td>
          <td>1x05</td>
        </tr>
        <tr>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>Unslung earmuffs</td>
          <td>Mr. Snuffleupagus (<i>Sesame Street</i>)</td>
          <td>Florence Henderson</td>
          <td>1x07</td>
        </tr>
        <tr>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>Started</td>
          <td>Statler (<i>The Muppet Show</i>)</td>
          <td>Lena Horne</td>
          <td>1x11</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Mileages</td>
          <td>Sam Eagle (<i>The Muppet Show</i>)</td>
          <td>Ben Vereen</td>
          <td>1x17</td>
        </tr>
        <tr>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>Meteor fighter</td>
          <td>Kermit the Frog (both)</td>
          <td>Ethel Merman</td>
          <td>1x22</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Goons</td>
          <td>Gonzo (<i>The Muppet Show</i>)</td>
          <td>Kaye Ballard</td>
          <td>1x23</td>
        </tr>
        <tr>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>Flopped peer</td>
          <td>Floyd Pepper (<i>The Muppet Show</i>)</td>
          <td>Zero Mostel</td>
          <td>2x02</td>
        </tr>
        <tr>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>Walled lane</td>
          <td>Lew Zealand (<i>The Muppet Show</i>)</td>
          <td>Judy Collins</td>
          <td>2x05</td>
        </tr>
        <tr>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>Fervor</td>
          <td>Grover (<i>Sesame Street</i>)</td>
          <td>Nancy Walker</td>
          <td>2x06</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Idly cleaned</td>
          <td>Uncle Deadly (<i>The Muppet Show</i>)</td>
          <td>Madeline Kahn</td>
          <td>2x09</td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Untorn coconut</td>
          <td>Count von Count (<i>Sesame Street</i>)</td>
          <td>Bernadette Peters</td>
          <td>2x12</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Rotten smells</td>
          <td>Telly Monster (<i>Sesame Street</i>)</td>
          <td>Elton John</td>
          <td>2x14</td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>Panda writer</td>
          <td>Prairie Dawn (<i>Sesame Street</i>)</td>
          <td>Julie Andrews</td>
          <td>2x17</td>
        </tr>
        <tr>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>Bingo</td>
          <td>Robin (<i>The Muppet Show</i>)</td>
          <td>Petula Clark</td>
          <td>2x20</td>
        </tr>
        <tr>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>Eureka</td>
          <td>Beaker (<i>The Muppet Show</i>)</td>
          <td>Pearl Bailey</td>
          <td>3x05</td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>Aortas</td>
          <td>Rosita (<i>Sesame Street</i>)</td>
          <td>Liberace</td>
          <td>3x09</td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Rough orchestra</td>
          <td>Oscar the Grouch (<i>Sesame Street</i>)</td>
          <td>Harry Belafonte</td>
          <td>3x14</td>
        </tr>
        <tr>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>Amends when</td>
          <td>The Newsman (<i>The Muppet Show</i>)</td>
          <td>Danny Kaye</td>
          <td>3x16</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Cooties</td>
          <td>Scooter (<i>The Muppet Show</i>)</td>
          <td>John Denver</td>
          <td>4x01</td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>Misuse yams</td>
          <td>Miss Mousey (<i>The Muppet Show</i>)</td>
          <td>Linda Lavin</td>
          <td>4x06</td>
        </tr>
        <tr>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>Fessed winch</td>
          <td>Swedish Chef (<i>The Muppet Show</i>)</td>
          <td>Liza Minnelli</td>
          <td>4x14</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Bright shnook</td>
          <td>Link Hogthrob (<i>The Muppet Show</i>)</td>
          <td>Carol Channing</td>
          <td>4x23</td>
        </tr>
        <tr>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>Retool incomes</td>
          <td>Cookie Monster (<i>Sesame Street</i>)</td>
          <td>Diana Ross</td>
          <td>4x24</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Argue aired</td>
          <td>Beauregard (<i>The Muppet Show</i>)</td>
          <td>Gene Kelly</td>
          <td>5x01</td>
        </tr>
        <tr>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>Muteness</td>
          <td>Sweetums (<i>The Muppet Show</i>)</td>
          <td>Paul Simon</td>
          <td>5x11</td>
        </tr>
        <tr>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>Raving guess</td>
          <td>Marvin Suggs (<i>The Muppet Show</i>)</td>
          <td>Carol Burnett</td>
          <td>5x15</td>
        </tr>
      </tbody>
    </Table>
    <Attributions>
      <Table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Attribution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ben Vereen</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Ben_Vereen_at_TIFF_2014.jpg">
                dtstuff9 / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Bernadette Peters</td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Bernadette_Peters#/media/File:Bernadettebarks.jpg">
                Nick Step / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Carol Burnett</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Carol Channing</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Carol_Channing_colour_Allan_Warren.jpg">
                Allan Warren / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Danny Kaye</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Diana Ross</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:DRossLongleat010722_(9_of_43)_(52189231585)_(cropped).jpg">
                Raph_PH / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Elton John</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Glasto2023_(419_of_468)_(53009098414)_(cropped).jpg">
                Raph_PH / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Ethel Merman</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Florence Henderson</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Florence_Henderson_2012.jpg">
                Eva Rinaldi / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Gene Kelly</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Harry Belafonte</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Joel Grey</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Joel_Grey_2014.jpg">
                Peabody Awards / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>John Denver</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Judy Collins</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Judy_Collins_by_Bryan_Ledgard_2_(cropped).jpg">
                Bryand Ledgard / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Julie Andrews</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Julie_Andrews_Park_Hyatt,_Sydney,_Australia_2013.jpg">
                Eva Rinaldi / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Kaye Ballard</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Lena Horne</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Liberace</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Liberace_8_Allan_Warren.jpg">
                Allan Warren / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Linda Lavin</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Linda_Lavin_2014.jpg">
                Greg Hernandez / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Liza Minnelli</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:LIZA_MINELLI_1997.jpg">
                John Mathew Smith &amp; www.celebrity-photos.com / Wikimedia
                Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Madeline Kahn</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Nancy Walker</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Paul Simon</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Paul_Simon_at_the_9-30_Club_(b).jpg">
                Matthew Straubmuller (imatty35) / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Pearl Bailey</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Petula Clark</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Petula_Clark_(4980154444)_(cropped).jpg">
                Bob Bekian / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Rita Moreno</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Rita_Moreno_2014.jpg">
                DVSROSS / Wikimedia Commons
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Zero Mostel</td>
            <td>Public domain</td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      #muppets th:nth-child(1),
      #muppets td:nth-child(1),
      #muppets th:nth-child(5),
      #muppets td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
