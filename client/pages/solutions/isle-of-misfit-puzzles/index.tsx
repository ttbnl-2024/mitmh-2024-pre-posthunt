import cx from 'classnames';
import { FC } from 'react';
import css from 'styled-jsx/css';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/isle-of-misfit-puzzles/0.png';
import ci from 'assets/solutions/isle-of-misfit-puzzles/ci-walkthrough.svg';
import colorful1 from 'assets/solutions/isle-of-misfit-puzzles/colorful1.png';
import colorful2 from 'assets/solutions/isle-of-misfit-puzzles/colorful2.png';
import colorful3 from 'assets/solutions/isle-of-misfit-puzzles/colorful3.png';
import colorful4 from 'assets/solutions/isle-of-misfit-puzzles/colorful4.png';
import kitchen1 from 'assets/solutions/isle-of-misfit-puzzles/kitchen1.png';
import misfittoys from 'assets/solutions/isle-of-misfit-puzzles/misfittoyssolution.png';

const SLUG = 'isle-of-misfit-puzzles';
const ANSWER = `TERABYTE`;
const kleft = 'text-lg -rotate-90';

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We see a map of islands. Some of these islands have minipuzzles we can
      solve:
    </p>
    <h2 className="text-center">Colorful Island</h2>
    <p>We are presented with a nonogram. Solve the nonogram like so:</p>
    <p>
      <SheetableImage alt="" src={colorful1} title="" className="mx-auto" />
    </p>
    <p>The resulting grid now looks like:</p>
    <p>
      <SheetableImage alt="" src={colorful2} title="" className="mx-auto" />
    </p>
    <p>
      The colors in the grid are MINESWEEPER colors, which should now be
      approached as a Minesweeper to find the bomb locations.
    </p>
    <p>
      <SheetableImage alt="" src={colorful3} title="" className="mx-auto" />
    </p>
    <p>
      In order to satisfy the logic, some of the bombs must run outside of the
      border by one column and one row around the outside of the grid. Some of
      the blanks, when not filled by a bomb, will represent no color, or zero.
      This confirms some of the locations of mines along the edge.{' '}
    </p>
    <p>
      <SheetableImage alt="" src={colorful4} title="" className="mx-auto" />
    </p>
    <p>
      The bombs represent Morse Code that spells{' '}
      <b>
        <Monospace>MARGE SQUID</Monospace>
      </b>
      , along with the number 4 in the center right of the grid.
    </p>
    <hr className="pt-4 pb-4" />
    <SheetableImage alt="" src={ci} title="" className="mx-auto" />
    <p>
      We see a title with some letters missing, and flavortext stating that
      we're only allowed ten of anything. We can figure out that the title
      should say "Cryptogram Island" and thus, we form a list of 8 letters that
      are allowed to be used in our cryptogram CRGAILND.
    </p>
    <p>
      Carefully looking at the pictures on the island we see hidden letters of E
      on one LED, and V on one column of the NAVE. This gives us the last two of
      our ten allowed letters.
    </p>
    <p>
      Pondering why only one LED/NAVE is marked, and looking at the separations
      formed by the roads and rivers, we notice that there are also exactly ten
      regions.
    </p>
    <p>
      Either by identifying the remaining icons, using only the allowed letters,
      or by noticing that the indicated two regions are the right letter lengths
      to spell out the picture marked, we can assign letters to all the
      pictures. Each letter is consistently assigned to the same picture, thus
      following the rules of a cryptogram.
    </p>
    <p>Looking along both diagonals, we see the answers DANCER and LIVING.</p>
    <p>
      The three rivers spell out the roman numeral 3, which is the hidden number
      for this island.
    </p>
    <hr className="pb-4" />
    <h2 className="text-center">East Stony Mountain</h2>
    <p>
      We see three columns of words and a lava flow that's destroyed part of the
      words.
    </p>
    <p>
      The flavortext also talks about the flow being "loud". This points to word
      elisions and homophones.
    </p>
    <p>
      There are several entry points to the puzzle to confirm this. Of the given
      clues we can directly get Thy today as YOUR, Tolkien adversary as ORC, and
      potentially Drive in the Hills (capitalized) as RODEO and Chemical Company
      as DOW.
    </p>
    <p>
      Solving backwards and forwards we can solve all three columns, eventually
      noting that the enumerated answer blanks form the missing words between
      the two clued mechanisms.
    </p>
    <Table width="100%">
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td colSpan={2}>
            <b>Homophone</b>
          </td>
          <td colSpan={2}>
            <b>Add a letter</b>
          </td>
        </tr>
        <tr>
          <td>It glistens</td>
          <td>DEW</td>
          <td>DO</td>
          <td>
            DO<b className="text-red-500">W</b>
          </td>
          <td>Chemical company</td>
        </tr>
        <tr>
          <td>Barnyard animal</td>
          <td>EWE</td>
          <td>YOU</td>
          <td>
            YOU<b className="text-red-500">R</b>
          </td>
          <td>Thy today</td>
        </tr>
        <tr>
          <td>Relation</td>
          <td>AUNT</td>
          <td>ANT</td>
          <td>
            ANT<b className="text-red-500">I</b>
          </td>
          <td>Against</td>
        </tr>
        <tr>
          <td>Basic</td>
          <td>PLAIN</td>
          <td>PLANE</td>
          <td>
            PLANE<b className="text-red-500">T</b>
          </td>
          <td>Heroic Captain</td>
        </tr>
        <tr>
          <td colSpan={5}>&nbsp;</td>
        </tr>
        <tr>
          <td>It eases driving</td>
          <td>TEE</td>
          <td>TEA</td>
          <td>
            TEA<b className="text-red-500">R</b>
          </td>
          <td>Split</td>
        </tr>
        <tr>
          <td>It eases driving</td>
          <td>ROAD</td>
          <td>RODE</td>
          <td>
            RODE<b className="text-red-500">O</b>
          </td>
          <td>Drive in the Hills</td>
        </tr>
        <tr>
          <td>Propulsion tool</td>
          <td>OAR</td>
          <td>OR</td>
          <td>
            OR<b className="text-red-500">C</b>
          </td>
          <td>Tolkien adversary</td>
        </tr>
        <tr>
          <td>Elder in Arabia</td>
          <td>SHIEK</td>
          <td>CHIC</td>
          <td>
            CHIC<b className="text-red-500">K</b>
          </td>
          <td>Young animal</td>
        </tr>
        <tr>
          <td colSpan={5}>&nbsp;</td>
        </tr>
        <tr>
          <td>Young animal</td>
          <td>LAMB</td>
          <td>LAM</td>
          <td>
            LAM<b className="text-red-500">P</b>
          </td>
          <td>It's often shaded</td>
        </tr>
        <tr>
          <td>Mammalian feature</td>
          <td>FUR</td>
          <td>FIR</td>
          <td>
            FIR<b className="text-red-500">E</b>
          </td>
          <td>Element</td>
        </tr>
        <tr>
          <td>In Elysium</td>
          <td>PASSED</td>
          <td>PAST</td>
          <td>
            PAST<b className="text-red-500">E</b>
          </td>
          <td>Sticky substance</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking each of the added letters together, we get the three answers for
      this island{' '}
      <b>
        <Monospace>WRIT ROCK PEE</Monospace>
      </b>
    </p>
    <p>
      The title confirms that this is the extraction because applying both
      transformations to the title gets us:
    </p>
    <p>
      East: Right -&gt; Write -&gt; Writ
      <br />
      Stony: Rocky -&gt; Rock (apologies for the single transform here)
      <br />
      Mountain: Peak -&gt; Peek -&gt; Pee
      <br />
    </p>
    <p className="pb-4"></p>
    <hr className="pb-4" />
    <h2 className="text-center">Island of Misfit Toys</h2>
    <p>
      This island is actually a sudoku grid, presented in the circular target.
      When solved, the island will look like:
    </p>
    <p>
      <SheetableImage alt="" src={misfittoys} title="" />
    </p>
    <p>
      The pictures in the bullseye area of the target, when assembled, will
      resemble the number 2, which is the digit for this island.
    </p>
    <p>
      The names on the list, when ordered by the bullseye center of the sudoku
      and read across the diagonal will spell{' '}
      <Monospace>
        <b>PIANO IRON</b>
      </Monospace>
      , which is the solution for this island.
    </p>
    <b className="text-red-500">P</b>INKTRUCK
    <br />P<b className="text-red-500">I</b>GGYBANK
    <br />
    AS<b className="text-red-500">A</b>ILBOAT
    <br />
    MOO<b className="text-red-500">N</b>RACER
    <br />
    EMUC<b className="text-red-500">O</b>WBOY
    <br />
    NICET<b className="text-red-500">I</b>GER
    <br />
    ROCKHO<b className="text-red-500">R</b>SE
    <br />
    ADIZZYT<b className="text-red-500">O</b>P<br />
    SQUIRTGU<b className="text-red-500">N</b>
    <br />
    <p className="pb-4"></p>
    <hr className="pb-4" />
    <h2 className="text-center">Kallax Island</h2>
    <p>We're given a 5x5 grid of Kallax shelves with 3 board games in each.</p>
    <p>Below we see 10 board game covers with the titles removed.</p>
    <p>
      First, we identify the 10 board games. These end up all being 5-letter
      names in alphabetical order:
    </p>
    <p>
      <Monospace>CONAN</Monospace>
      <br />
      <Monospace>DVONN</Monospace>
      <br />
      <Monospace>GREED</Monospace>
      <br />
      <Monospace>HANSA</Monospace>
      <br />
      <Monospace>KLASK</Monospace>
      <br />
      <Monospace>PARKS</Monospace>
      <br />
      <Monospace>SKULL</Monospace>
      <br />
      <Monospace>SPICY</Monospace>
      <br />
      <Monospace>STEAM</Monospace>
      <br />
      <Monospace>TSURO</Monospace>
    </p>
    <p>
      Then we must try to find a way to 'fit' them into the Kallax. As we have a
      5x5 grid, that causes us to look into the 5 rows and 5 columns and find
      matches to the 5 letter words.
    </p>
    <p>
      We find those matches in the first letters of the games on the shelves,
      with a few exceptions, all along the main diagonal, which are 'misfit'.
    </p>
    <p>
      If we look at the first letter of the remaining games not used to spell
      out the 10 five-letter games, we get a 25 letter message:
    </p>
    <p>
      <b> MISFITLETTERSAREIMPORTANT</b>
    </p>
    <p>
      This is a clue to extract the letters from each word that doesn't fit:
    </p>
    <p>
      In the misfit cells, there are three games, two of which are notable
      deception/social deductions games where players have a hidden role. This
      is a clue to use these as good candidates for the misfit letters as
      they're "lying to us". The remaining game is not a deception game, and
      thus is used in the message extraction normally.
    </p>
    <p></p>
    <p>
      Looking at the misfit letters, we get our two answers: <b>HOURS</b> and{' '}
      <b>STAND</b>
    </p>
    <table className="border-collapse">
      <tbody className="text-xs text-center">
        <tr>
          <td></td>
          <td className="text-lg">
            <b className="text-red-500">S</b>PICY
          </td>
          <td className="text-lg">
            S<b className="text-red-500">T</b>EAM
          </td>
          <td className="text-lg">
            KL<b className="text-red-500">A</b>SK
          </td>
          <td className="text-lg">
            DVO<b className="text-red-500">N</b>N
          </td>
          <td className="text-lg">
            GREE<b className="text-red-500">D</b>
          </td>
        </tr>
        <tr>
          <td rowSpan={3} className={cx(kleft)}>
            <b className="text-red-500">H</b>ANSA
          </td>
          <td className="border-l-4 border-t-4 border-r-4 border-black h-12">
            Avalon: Big Box
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Ark Nova
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Kingdom Death: Monster
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Dune
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Anachrony</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Maracaibo</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Istanbul
          </td>
          <td className="border-r-4 border-black h-12">Near and Far</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Food Chain Magnate
          </td>
          <td className="border-r-4 border-black h-12">Gloomhaven</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            The Resistance
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Star Wars: Rebellion
          </td>
          <td className="border-r-4 border-black h-12">Stone Age</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Spirit Island
          </td>
          <td className="border-r-4 border-black h-12">Inis</td>
        </tr>
        <tr>
          <td rowSpan={3} className={cx(kleft)}>
            C<b className="text-red-500">O</b>NAN
          </td>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Castles of Burgundy
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Insider
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Everdell</td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Arkham Horror
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Nidavellir
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Pax Pamir</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Lords of Waterdeep
          </td>
          <td className="border-r-4 border-black h-12">Lisboa</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Terraforming Mars
          </td>
          <td className="border-r-4 border-black h-12">Ra</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Terra Mystica
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Werewolf
          </td>
          <td className="border-r-4 border-black h-12">Nemo's War</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Viticulture
          </td>
          <td className="border-r-4 border-black h-12">Through the Ages</td>
        </tr>
        <tr>
          <td rowSpan={3} className={cx(kleft)}>
            SK<b className="text-red-500">U</b>LL
          </td>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Eclipse
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            El Grande
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Love Letter
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Android: Netrunner
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Eldritch Horror
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Isle of Sky
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Keyflower
          </td>
          <td className="border-r-4 border-black h-12">Sagrada</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Lost Ruins of Arnak
          </td>
          <td className="border-r-4 border-black h-12">Le Havre</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Suburbia</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">Root</td>
          <td className="border-r-4 border-black h-12">
            <b className="text-red-500">#</b> Rooms and a Boom
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">On Mars</td>
          <td className="border-r-4 border-black h-12">Robinson Crusoe</td>
        </tr>
        <tr>
          <td rowSpan={3} className={cx(kleft)}>
            TSU<b className="text-red-500">R</b>O
          </td>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Concordia
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            A Feast for Odin
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Mage Knight
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Puerto Rico
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Evolution</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Earth</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Indonesia
          </td>
          <td className="border-r-4 border-black h-12">Splendor</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Scape Goat
          </td>
          <td className="border-r-4 border-black h-12">Obsession</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Tichu</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Sleeping Gods
          </td>
          <td className="border-r-4 border-black h-12">Underwater Cities</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Werewords
          </td>
          <td className="border-r-4 border-black h-12">Orléans</td>
        </tr>
        <tr>
          <td rowSpan={3} className={cx(kleft)}>
            PARK<b className="text-red-500">S</b>
          </td>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Pandemic Legacy
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Agricola
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Azul</td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Kingdom Builder
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Blood on the Clocktower
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Raiders of the North Sea
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Marvel Champions
          </td>
          <td className="border-r-4 border-black h-12">Kingdomino</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">Nemesis</td>
          <td className="border-r-4 border-black h-12">Coup</td>
        </tr>
        <tr>
          <td className="border-b-4 border-l-4 border-r-4 border-black h-12">
            Yedo
          </td>
          <td className="border-b-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Twilight Struggle
          </td>
          <td className="border-b-4 border-r-4 border-black h-12">
            Race for the Galaxy
          </td>
          <td className="border-b-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Notre Dame
          </td>
          <td className="border-b-4 border-r-4 border-black h-12">
            Twilight Imperium
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      For our hidden number we notice that in the center cell there's a board
      game with a # symbol instead of its proper name, which we lookup to find
      to be{' '}
      <i>
        <b className="text-red-500">Two</b> Rooms and a Boom
      </i>
      .
    </p>
    <p>
      {' '}
      We taken this hidden number, in the hidden role game, (2) to be our number
      for this island.
    </p>
    <hr className="pb-4" />
    <h2 className="text-center">Kitchen Island</h2>
    <p>
      The grid we see is a wordsearch, with groups of two words joining at a
      common point.
    </p>
    <p>The solved grid looks like:</p>
    <p>
      <SheetableImage alt="" src={kitchen1} title="" />
    </p>
    <p>
      The furniture items found will need to be paired up correctly, and decoded
      using semaphore. We can notice that the wordsearch grid is in the shape of
      a Cluedo board, turned to the side. When placing the furniture in their
      correct rooms on the Cluedo board in this orientation, we will find the
      correct ordering.
    </p>
    <ul>
      <li>LOUNGE: BIGSCREEN TELEVISION sw, s = A</li>
      <li>DINING ROOM: BANQUET TABLE w, n = P</li>
      <li>KITCHEN: GRANITE COUNTERTOPS w, n = P</li>
      <li>HALL: RAINCOAT CLOSET sw, ne = L</li>
      <li>
        CELLAR: DECEASED CORPSE s, ne = E (not furniture, but confirms Cluedo)
      </li>
      <li>BALLROOM: STEINWAY PIANO ne, e = W</li>
      <li>STUDY: ROLLTOP COMPUTERDESK w, nw = O</li>
      <li>LIBRARY: ENCYCLOPEDIA COLLECTION sw, e = M</li>
      <li>BILLIARD ROOM: SNOOKER CUESTICK s, ne = E</li>
      <li>CONSERVATORY: LEAFY HOUSEPLANT sw, se = N</li>
    </ul>
    <p>
      The two answer words for this grid are{' '}
      <b>
        <Monospace>APPLE </Monospace>
      </b>
      and{' '}
      <b>
        <Monospace> WOMEN.</Monospace>
      </b>{' '}
    </p>
    <p>
      The semaphore points between words in the grid spell DIGIT IS TWO, so{' '}
      <b>
        <Monospace>2</Monospace>
      </b>{' '}
      is the number for this island.
    </p>
    <hr className="pb-4" />
    <h2>Mini-meta Walkthrough</h2>
    <p>
      When we have solved all of the mini puzzles, we also have islands with
      words and numbers on them, and some blank islands.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      We can make links between islands using different SIZE words and their
      linking words from the solutions.
    </p>
    <p>
      We will discover this is a Hashi or Bridge puzzle, with the numbers we
      found being used as bridges to form the links between words.
    </p>
    <p>
      Indexing the SIZE words with the Hashi numbers connecting to that island
      will spell our final answer.
    </p>
    <ul className="pb-4">
      <li>LITTLE WOMEN (LITTLE 3 = T)</li>
      <li>LITTLE ROCK</li>
      <li>PEE WEE (WEE 3 = E)</li>
      <li>WEE HOURS</li>
      <li>GRAND CANYON (GRAND 2 = R)</li>
      <li>GRAND PIANO</li>
      <li>STAND TALL (TALL 2 = A)</li>
      <li>TALL TALE</li>
      <li>BIG APPLE (BIG 1 = B)</li>
      <li>TINY DANCER (TINY 4 = Y)</li>
      <li>TINY TIM</li>
      <li>IRON GIANT (GIANT 5 = T) </li>
      <li>GENTLE GIANT</li>
      <li>GIANT SQUID</li>
      <li>LIVING LARGE (LARGE 5 = E)</li>
      <li>WRIT LARGE</li>
      <li>LARGE MARGE</li>
    </ul>
    <Attributions>
      Island{' '}
      <a href="https://www.freepik.com/free-vector/aerial-view-tropical-forest-island-isolated_16455709.htm#query=island%20top%20view&position=25&from_view=keyword&track=ais&uuid=95f92f14-235d-4627-a54f-6e3ce52c5273%22%3EImage">
        Image by brgfx
      </a>{' '}
      on Freepik
    </Attributions>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
