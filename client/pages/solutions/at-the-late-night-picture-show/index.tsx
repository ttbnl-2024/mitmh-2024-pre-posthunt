import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'at-the-late-night-picture-show';
const ANSWER = `OSTRACIZING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      First, we notice that the title is a <i>Rocky Horror Picture Show</i>{' '}
      reference. The full lyric is "at the late-night,{' '}
      <b>
        <i>double-feature</i>
      </b>{' '}
      picture show." This lets us know we are looking for two features in each
      answer.
    </p>
    <p>
      Next, we start solving the clues, noticing the first part is the first
      part of one movie and the second part is the end of another movie.
      Eventually, we notice that both movies in each paragraph were filmed the
      same year. Also, we notice that when we take the first 3 letters of the
      first movie and the last 3 letters of the second one, we get a 6-letter
      word that is clued in the final part of the description.
    </p>
    <p>
      The flavor text mentions "leftovers". This clues the fact that we take the
      index, which is a number also hidden in the paragraph somewhere, and we
      use this number to index into the letters leftover from the films.
    </p>
    <p>
      After reordering by film year (1975&ndash;2000), we spell out the clue phrase:{' '}
      <Monospace>EXCLUDING FROM SOCIETY ELEVEN</Monospace>. The 11-letter answer
      for this cluephrase is{' '}
      <b>
        <Monospace>OSTRACIZING</Monospace>
      </b>
      .
    </p>
    <Appendix>
      <p>Answers in order of the puzzle:</p>
      <Table className="max-w-full">
        <thead>
          <tr>
            <th>Year</th>
            <th>First Movie</th>
            <th>Second Movie</th>
            <th>6 Letter Word</th>
            <th>Leftover Letters</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td>1992</td>
            <td><i>Consenting Adults</i></td>
            <td><i>Scent of a Woman</i></td>
            <td>
              <Monospace>CONMAN</Monospace>
            </td>
            <td>
              <Monospace>SENTINGADULTSSCENTOFAWO</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1995</td>
            <td><i>Devil in a Blue Dress</i></td>
            <td><i>Before Sunrise</i></td>
            <td>
              <Monospace>DEVISE</Monospace>
            </td>
            <td>
              <Monospace>ILINABLUEDRESSBEFORESUNR</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1983</td>
            <td><i>Flashdance</i></td>
            <td><i>War Games</i></td>
            <td>
              <Monospace>FLAMES</Monospace>
            </td>
            <td>
              <Monospace>SHDANCEWARGA</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>1981</td>
            <td><i>For Your Eyes Only</i></td>
            <td><i>Mommie Dearest</i></td>
            <td>
              <Monospace>FOREST</Monospace>
            </td>
            <td>
              <Monospace>YOUREYESONLYMOMMIEDEAR</Monospace>
            </td>
            <td>17</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>1982</td>
            <td><i>Grease 2</i></td>
            <td><i>The King of Comedy</i></td>
            <td>
              <Monospace>GREEDY</Monospace>
            </td>
            <td>
              <Monospace>ASE2THEKINGOFCOM</Monospace>
            </td>
            <td>10</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>1991</td>
            <td><i>Hook</i></td>
            <td><i>Robin Hood Prince of Thieves</i></td>
            <td>
              <Monospace>HOOVES</Monospace>
            </td>
            <td>
              <Monospace>KROBINHOODPRINCEOFTHIE</Monospace>
            </td>
            <td>21</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>1986</td>
            <td><i>Labyrinth</i></td>
            <td><i>Little Shop of Horrors</i></td>
            <td>
              <Monospace>LABORS</Monospace>
            </td>
            <td>
              <Monospace>YRINTHLITTLESHOPOFHORR</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>1994</td>
            <td><i>Little Women</i></td>
            <td><i>Heavenly Creatures</i></td>
            <td>
              <Monospace>LITRES</Monospace>
            </td>
            <td>
              <Monospace>TLEWOMENHEAVENLYCREATU</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>1977</td>
            <td><i>MacArthur</i></td>
            <td><i>Cross of Iron</i></td>
            <td>
              <Monospace>MACRON</Monospace>
            </td>
            <td>
              <Monospace>ARTHURCROSSOFI</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>1987</td>
            <td><i>Mannequin</i></td>
            <td><i>A Nightmare on Elm Street 3: Dream Warriors</i></td>
            <td>
              <Monospace>MANORS</Monospace>
            </td>
            <td>
              <Monospace>NEQUINANIGHTMAREONELMSTREET3DREAMWARRI</Monospace>
            </td>
            <td>33</td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>1980</td>
            <td><i>Midnight Madness</i></td>
            <td><i>The Long Good Friday</i></td>
            <td>
              <Monospace>MIDDAY</Monospace>
            </td>
            <td>
              <Monospace>NIGHTMADNESSTHELONGGOODFRI</Monospace>
            </td>
            <td>23</td>
            <td>
              <Monospace>D</Monospace>
            </td>
          </tr>
          <tr>
            <td>1988</td>
            <td><i>Miracle Mile</i></td>
            <td><i>The Unbearable Lightness of Being</i></td>
            <td>
              <Monospace>MIRING</Monospace>
            </td>
            <td>
              <Monospace>ACLEMILETHEUNBEARABLELIGHTNESSOFBE</Monospace>
            </td>
            <td>30</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>1996</td>
            <td><i>Mission: Impossible</i></td>
            <td><i>Sleepers</i></td>
            <td>
              <Monospace>MISERS</Monospace>
            </td>
            <td>
              <Monospace>SIONIMPOSSIBLESLEEP</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>1989</td>
            <td><i>Parenthood</i></td>
            <td><i>Indiana Jones and the Last Crusade</i></td>
            <td>
              <Monospace>PARADE</Monospace>
            </td>
            <td>
              <Monospace>ENTHOODINDIANAJONESANDTHELASTCRUS</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>1990</td>
            <td><i>Problem Child</i></td>
            <td><i>Dances with Wolves</i></td>
            <td>
              <Monospace>PROVES</Monospace>
            </td>
            <td>
              <Monospace>BLEMCHILDDANCESWITHWOL</Monospace>
            </td>
            <td>13</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>1979</td>
            <td><i>Quadrophenia</i></td>
            <td><i>Human Experiments</i></td>
            <td>
              <Monospace>QUANTS</Monospace>
            </td>
            <td>
              <Monospace>DROPHENIAHUMANEXPERIME</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>1984</td>
            <td><i>Red Dawn</i></td>
            <td><i>Footloose</i></td>
            <td>
              <Monospace>REDOSE</Monospace>
            </td>
            <td>
              <Monospace>DAWNFOOTLO</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>2000</td>
            <td><i>Remember the Titans</i></td>
            <td><i>The Emperor's New Groove</i></td>
            <td>
              <Monospace>REMOVE</Monospace>
            </td>
            <td>
              <Monospace>EMBERTHETITANSTHEEMPERORSNEWGRO</Monospace>
            </td>
            <td>26</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>1976</td>
            <td><i>Revenge of the Cheerleaders</i></td>
            <td><i>Sex with a Smile</i></td>
            <td>
              <Monospace>REVILE</Monospace>
            </td>
            <td>
              <Monospace>ENGEOFTHECHEERLEADERSSEXWITHASM</Monospace>
            </td>
            <td>24</td>
            <td>
              <Monospace>X</Monospace>
            </td>
          </tr>
          <tr>
            <td>1999</td>
            <td><i>Runaway Bride</i></td>
            <td><i>Cruel Intentions</i></td>
            <td>
              <Monospace>RUNONS</Monospace>
            </td>
            <td>
              <Monospace>AWAYBRIDECRUELINTENTI</Monospace>
            </td>
            <td>18</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1975</td>
            <td><i>Shampoo</i></td>
            <td><i>Deep Red</i></td>
            <td>
              <Monospace>SHARED</Monospace>
            </td>
            <td>
              <Monospace>MPOODEEP</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1978</td>
            <td><i>Slave of the Cannibal God</i></td>
            <td><i>The Lord of the Rings</i></td>
            <td>
              <Monospace>SLANGS</Monospace>
            </td>
            <td>
              <Monospace>VEOFTHECANNIBALGODTHELORDOFTHERI</Monospace>
            </td>
            <td>22</td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>1985</td>
            <td><i>The Goonies</i></td>
            <td><i>Weird Science</i></td>
            <td>
              <Monospace>THENCE</Monospace>
            </td>
            <td>
              <Monospace>GOONIESWEIRDSCIE</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>1998</td>
            <td><i>There's Something About Mary</i></td>
            <td><i>Ever After: A Cinderella Story</i></td>
            <td>
              <Monospace>THEORY</Monospace>
            </td>
            <td>
              <Monospace>RESSOMETHINGABOUTMARYEVERAFTERACINDERELLAST</Monospace>
            </td>
            <td>23</td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>1993</td>
            <td><i>Three Colors: Blue</i></td>
            <td><i>The Fugitive</i></td>
            <td>
              <Monospace>THRIVE</Monospace>
            </td>
            <td>
              <Monospace>EECOLORSBLUETHEFUGIT</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>1997</td>
            <td><i>Titanic</i></td>
            <td><i>Hercules</i></td>
            <td>
              <Monospace>TITLES</Monospace>
            </td>
            <td>
              <Monospace>ANICHERCU</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Answers reordered by year of the movie:</p>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>First Movie</th>
            <th>Second Movie</th>
            <th>6 Letter Word</th>
            <th>Leftover Letters</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1975</td>
            <td><i>Shampoo</i></td>
            <td><i>Deep Red</i></td>
            <td>
              <Monospace>SHARED</Monospace>
            </td>
            <td>
              <Monospace>MPOODEEP</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1976</td>
            <td><i>Revenge of the Cheerleaders</i></td>
            <td><i>Sex with a Smile</i></td>
            <td>
              <Monospace>REVILE</Monospace>
            </td>
            <td>
              <Monospace>ENGEOFTHECHEERLEADERSSEXWITHASM</Monospace>
            </td>
            <td>24</td>
            <td>
              <Monospace>X</Monospace>
            </td>
          </tr>
          <tr>
            <td>1977</td>
            <td><i>MacArthur</i></td>
            <td><i>Cross of Iron</i></td>
            <td>
              <Monospace>MACRON</Monospace>
            </td>
            <td>
              <Monospace>ARTHURCROSSOFI</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>1978</td>
            <td><i>Slave of the Cannibal God</i></td>
            <td><i>The Lord of the Rings</i></td>
            <td>
              <Monospace>SLANGS</Monospace>
            </td>
            <td>
              <Monospace>VEOFTHECANNIBALGODTHELORDOFTHERI</Monospace>
            </td>
            <td>22</td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>1979</td>
            <td><i>Quadrophenia</i></td>
            <td><i>Human Experiments</i></td>
            <td>
              <Monospace>QUANTS</Monospace>
            </td>
            <td>
              <Monospace>DROPHENIAHUMANEXPERIME</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>1980</td>
            <td><i>Midnight Madness</i></td>
            <td><i>The Long Good Friday</i></td>
            <td>
              <Monospace>MIDDAY</Monospace>
            </td>
            <td>
              <Monospace>NIGHTMADNESSTHELONGGOODFRI</Monospace>
            </td>
            <td>23</td>
            <td>
              <Monospace>D</Monospace>
            </td>
          </tr>
          <tr>
            <td>1981</td>
            <td><i>For Your Eyes Only</i></td>
            <td><i>Mommie Dearest</i></td>
            <td>
              <Monospace>FOREST</Monospace>
            </td>
            <td>
              <Monospace>YOUREYESONLYMOMMIEDEAR</Monospace>
            </td>
            <td>17</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>1982</td>
            <td><i>Grease 2</i></td>
            <td><i>The King of Comedy</i></td>
            <td>
              <Monospace>GREEDY</Monospace>
            </td>
            <td>
              <Monospace>ASE2THEKINGOFCOM</Monospace>
            </td>
            <td>10</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>1983</td>
            <td><i>Flashdance</i></td>
            <td><i>War Games</i></td>
            <td>
              <Monospace>FLAMES</Monospace>
            </td>
            <td>
              <Monospace>SHDANCEWARGA</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>1984</td>
            <td><i>Red Dawn</i></td>
            <td><i>Footloose</i></td>
            <td>
              <Monospace>REDOSE</Monospace>
            </td>
            <td>
              <Monospace>DAWNFOOTLO</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>1985</td>
            <td><i>The Goonies</i></td>
            <td><i>Weird Science</i></td>
            <td>
              <Monospace>THENCE</Monospace>
            </td>
            <td>
              <Monospace>GOONIESWEIRDSCIE</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>1986</td>
            <td><i>Labyrinth</i></td>
            <td><i>Little Shop of Horrors</i></td>
            <td>
              <Monospace>LABORS</Monospace>
            </td>
            <td>
              <Monospace>YRINTHLITTLESHOPOFHORR</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>1987</td>
            <td><i>Mannequin</i></td>
            <td><i>A Nightmare on Elm Street 3: Dream Warriors</i></td>
            <td>
              <Monospace>MANORS</Monospace>
            </td>
            <td>
              <Monospace>NEQUINANIGHTMAREONELMSTREET3DREAMWARRI</Monospace>
            </td>
            <td>33</td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>1988</td>
            <td><i>Miracle Mile</i></td>
            <td><i>The Unbearable Lightness of Being</i></td>
            <td>
              <Monospace>MIRING</Monospace>
            </td>
            <td>
              <Monospace>ACLEMILETHEUNBEARABLELIGHTNESSOFBE</Monospace>
            </td>
            <td>30</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>1989</td>
            <td><i>Parenthood</i></td>
            <td><i>Indiana Jones and the Last Crusade</i></td>
            <td>
              <Monospace>PARADE</Monospace>
            </td>
            <td>
              <Monospace>ENTHOODINDIANAJONESANDTHELASTCRUS</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>1990</td>
            <td><i>Problem Child</i></td>
            <td><i>Dances with Wolves</i></td>
            <td>
              <Monospace>PROVES</Monospace>
            </td>
            <td>
              <Monospace>BLEMCHILDDANCESWITHWOL</Monospace>
            </td>
            <td>13</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>1991</td>
            <td><i>Hook</i></td>
            <td><i>Robin Hood Prince of Thieves</i></td>
            <td>
              <Monospace>HOOVES</Monospace>
            </td>
            <td>
              <Monospace>KROBINHOODPRINCEOFTHIE</Monospace>
            </td>
            <td>21</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>1992</td>
            <td><i>Consenting Adults</i></td>
            <td><i>Scent of a Woman</i></td>
            <td>
              <Monospace>CONMAN</Monospace>
            </td>
            <td>
              <Monospace>SENTINGADULTSSCENTOFAWO</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1993</td>
            <td><i>Three Colors: Blue</i></td>
            <td><i>The Fugitive</i></td>
            <td>
              <Monospace>THRIVE</Monospace>
            </td>
            <td>
              <Monospace>EECOLORSBLUETHEFUGIT</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>1994</td>
            <td><i>Little Women</i></td>
            <td><i>Heavenly Creatures</i></td>
            <td>
              <Monospace>LITRES</Monospace>
            </td>
            <td>
              <Monospace>TLEWOMENHEAVENLYCREATU</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>1995</td>
            <td><i>Devil in the Blue Dress</i></td>
            <td><i>Before Sunrise</i></td>
            <td>
              <Monospace>DEVISE</Monospace>
            </td>
            <td>
              <Monospace>ILINABLUEDRESSBEFORESUNR</Monospace>
            </td>
            <td>20</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1996</td>
            <td><i>Mission: Impossible</i></td>
            <td><i>Sleepers</i></td>
            <td>
              <Monospace>MISERS</Monospace>
            </td>
            <td>
              <Monospace>SIONIMPOSSIBLESLEEP</Monospace>
            </td>
            <td>16</td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>1997</td>
            <td><i>Titanic</i></td>
            <td><i>Hercules</i></td>
            <td>
              <Monospace>TITLES</Monospace>
            </td>
            <td>
              <Monospace>ANICHERCU</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>1998</td>
            <td><i>There's Something About Mary</i></td>
            <td><i>Ever After: A Cinderella Story</i></td>
            <td>
              <Monospace>THEORY</Monospace>
            </td>
            <td>
              <Monospace>RESSOMETHINGABOUTMARYEVERAFTERACINDERELLAST</Monospace>
            </td>
            <td>23</td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>1999</td>
            <td><i>Runaway Bride</i></td>
            <td><i>Cruel Intentions</i></td>
            <td>
              <Monospace>RUNONS</Monospace>
            </td>
            <td>
              <Monospace>AWAYBRIDECRUELINTENTI</Monospace>
            </td>
            <td>18</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>2000</td>
            <td><i>Remember the Titans</i></td>
            <td><i>The Emperor's New Groove</i></td>
            <td>
              <Monospace>REMOVE</Monospace>
            </td>
            <td>
              <Monospace>EMBERTHETITANSTHEEMPERORSNEWGRO</Monospace>
            </td>
            <td>26</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx>{`
      td:nth-child(1),
      td:nth-child(4),
      td:nth-child(6),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
