import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { Colors } from 'components/crossword';
import Grid from 'components/grid';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/the-hermit-crab/0.png';
import image1 from 'assets/solutions/the-hermit-crab/1.png';

const SLUG = 'the-hermit-crab';
const ANSWER = `GASOLINE CAN`;

const blue = Colors.TheHermitCrabBlue;
const yellow = Colors.TheHermitCrabYellow;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <h2>Overall Structure</h2>
    <p>
      Hermit crabs are animals that wander around, finding shells and living in
      them. Most hermit crabs repurpose many shells over the course of their
      lives. Our hermit crab does this too, stumbling into Mystery Hunt events
      and living in puzzle hunt shells.
    </p>
    <p>
      Each of the hermit crab's adventures references a past Mystery Hunt, and
      points to a specific meta from that hunt that uses a shell. The crab
      repurposes the shell by bringing new answers and using the shell in a new
      way.
    </p>
    <h2>1 The Caucus Race</h2>
    <p>
      The floating mouth references Wonderland's Cheshire Cat, and the bird tree
      references the{' '}
      <a href="https://puzzles.mit.edu/2014/round/caucus_race/story.html">
        Caucus Race
      </a>{' '}
      meta. As suggested by the shell&mdash;and frankly, I'm shocked this
      isn't how the original meta worked&mdash;everything the crab brought
      forms half of an "X or Y" phrase. We also fill in the 7-digit numbers as
      indicated.
    </p>

    <Table className="caucus-race-table">
      <tbody>
        <tr>
          <td>+</td>
          <td></td>
          <td></td>
          <td></td>
          <td>-</td>
        </tr>
        <tr>
          <td>0</td>
          <td>W[I]TH</td>
          <td>or</td>
          <td>[W]ITHOUT</td>
          <td>9</td>
        </tr>
        <tr>
          <td>3</td>
          <td>[M]ANUAL</td>
          <td>or</td>
          <td>A[U]TOMATIC</td>
          <td>0</td>
        </tr>
        <tr>
          <td>8</td>
          <td>DOUB[L]E</td>
          <td>or</td>
          <td>NOT[H]ING</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>[D]EAD</td>
          <td>or</td>
          <td>ALIV[E]</td>
          <td>4</td>
        </tr>
        <tr>
          <td>4</td>
          <td>OPE[N]</td>
          <td>or</td>
          <td>CL[O]SED</td>
          <td>1</td>
        </tr>
        <tr>
          <td>7</td>
          <td>[H]EADS</td>
          <td>or</td>
          <td>T[A]ILS</td>
          <td>9</td>
        </tr>
        <tr>
          <td>8</td>
          <td>KI[L]L</td>
          <td>or</td>
          <td>BE KIL[L]ED</td>
          <td>4</td>
        </tr>
      </tbody>
    </Table>

    <p>
      (The shell helpfully includes (+) and (-) indicators to disambiguate HEADS
      OR TAILS from TAILS OR HEADS.)
    </p>
    <p>
      To finally extract, use the + and - digits to Caesar shift the highlighted
      letters. The result, in reading order, is <Clue>INPUTBEARNORTH</Clue>. The
      answer is <Clue>BEAR NORTH</Clue>.
    </p>
    <h2>2 The Cafe</h2>
    <p>
      The crab lived in the Museum of Interesting Things, specifically{' '}
      <a href="https://puzzles.mit.edu/2023/interestingthings.museum/puzzles/the-cafe">
        the Cafe
      </a>
      . The crab doesn't care about the room's layout, only the foods. It turns
      out each of the crab's belongings can change a letter to relate to one of
      the foods.
    </p>
    <Table className="cafe-table">
      <thead>
        <tr>
          <th>Food (puzzle order)</th>
          <th>Related word</th>
          <th>Crab's luggage</th>
          <th>Food letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Donuts</td>
          <td>TORUS</td>
          <td>HORUS</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Ice cream</td>
          <td>SORBET</td>
          <td>SOX BET</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Pancakes</td>
          <td>WAFFLE</td>
          <td>WIFFLE</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Juice</td>
          <td>DRINK</td>
          <td>BRINK</td>
          <td>D</td>
        </tr>
        <tr>
          <td>Sandwich</td>
          <td>DELI</td>
          <td>DALI</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Chicken</td>
          <td>BONELESS</td>
          <td>CONELESS</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Noodles</td>
          <td>RAMEN</td>
          <td>RUMEN</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Bread</td>
          <td>GRAIN</td>
          <td>GRAIL</td>
          <td>N</td>
        </tr>
        <tr>
          <td>Salad</td>
          <td>ROCKET</td>
          <td>ROCHET</td>
          <td>K</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Clue>TRADE BANK</Clue>.
    </p>
    <h2>3 The Horror Hunt</h2>
    <p>
      This references the 2001 Horror Hunt, which was the 21st year of Mystery
      Hunt. The only meta with a shell that year was{' '}
      <a href="https://puzzles.mit.edu/2001/phase2/13/index.html">
        This Puzzle Needs No Title
      </a>
      . To solve it, we start at the <Clue>X</Clue> (for{' '}
      <Clue>BURIED PIRATE TREASURE</Clue>). The crab's other belongings each
      start with a compass direction and contain no other <Clue>NEWS</Clue>
      letters. We follow the directions one at a time, going a distance equal to
      the number of letters in the belonging.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      The path spells out the answer, <Clue>BOAT DOCKS</Clue>.
    </p>
    <h2>4 The Time Bandits</h2>
    <p>
      This references the 2004 Time Bandits hunt (23 years after the first
      Mystery Hunt), specifically this meta:{' '}
      <a href="http://puzzles.mit.edu/2004/pirates/3VS/">
        The Commodore's Final Voyage
      </a>
      . Treat the stone table as a Masyu. White pearls are given, and black
      pearls are Os in answers.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      The "hidden black gems" are cells that would be valid black pearls, but
      where those pearls aren't given. Together, they spell the answer{' '}
      <Clue>LAST FERRY</Clue>.
    </p>
    <h2>5 Password Update</h2>
    <p>
      This references the 2013 hunt, which lasted a day longer than expected.
      Specifically, we're looking at the{' '}
      <a href="http://puzzles.mit.edu/2013/coinheist.com/sneakers/password_update/index.html">
        computer hacker meta
      </a>
      . That meta has 55 groups of 5 letters, matching the crab's 55 things.
      Each of the crab's descriptions identifies a subset of the corresponding 5
      letters. By replacing an unmatched letter with 0 and a matched letter with
      1, we can binary extract a letter.
    </p>
    <Table className="computer-hacker-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>5 letters</th>
          <th>Binary letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NON-FIBONACCI</td>
          <td>
            HBMU
            <u>N</u>
          </td>
          <td>A</td>
        </tr>
        <tr>
          <td>FEMININE ARTICLE</td>
          <td>
            A<u>UNA</u>M
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>CONSONANCE</td>
          <td>
            <u>H</u>
            AE
            <u>HD</u>
          </td>
          <td>S</td>
        </tr>
        <tr>
          <td>IN A MAJOR</td>
          <td>
            HCF
            <u>ED</u>
          </td>
          <td>C</td>
        </tr>
        <tr>
          <td>UNIQUE</td>
          <td>
            K<u>U</u>
            GKG
          </td>
          <td>H</td>
        </tr>
        <tr>
          <td>POKEMON GAMES</td>
          <td>
            <u>Y</u>A<u>X</u>
            AA
          </td>
          <td>T</td>
        </tr>
        <tr>
          <td>CHESS PIECE</td>
          <td>
            J<u>N</u>
            MSH
          </td>
          <td>H</td>
        </tr>
        <tr>
          <td>IN DEPTH</td>
          <td>
            M<u>HTPD</u>
          </td>
          <td>O</td>
        </tr>
        <tr>
          <td>IN FAVOUR</td>
          <td>
            K<u>FVU</u>B
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>PERFECT SQUARES</td>
          <td>
            V<u>D</u>
            BQ
            <u>Y</u>
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>HEXADECIMAL</td>
          <td>
            VGRR
            <u>C</u>
          </td>
          <td>A</td>
        </tr>
        <tr>
          <td>PRIME</td>
          <td>
            F<u>QWG</u>J
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>(43 more omitted)</td>
          <td>(43 more omitted)</td>
          <td>
            YEPTHATSTHEANSWERTOMYP
            <br />
            UZZLEHOPEYOUENJOYEDIT
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Clue>CHTHONIAN</Clue>.
    </p>
    <h2>6 Hell</h2>
    <p>
      This refers to the 2007 Hell Hunt, and specifically the meta featuring an{' '}
      <a href="https://puzzles.mit.edu/2007/videos/meta10.mp4">
        evil interview
      </a>
      . Like the original meta, this hinges on the reporters' channel numbers
      and radio station names. For each radio name, such as <Clue>K[RUQ]</Clue>,
      we find a matching piece of luggage such as <Clue>PER[RUQ]UIER</Clue>.
      Order by channel number:
    </p>
    <Table className="hell-table">
      <thead>
        <tr>
          <th>Channel number</th>
          <th>Radio</th>
          <th>Hellish thing</th>
          <th>Extract (see below)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>K ISS</td>
          <td>GNEISS</td>
          <td>G</td>
        </tr>
        <tr>
          <td>5</td>
          <td>W ECO</td>
          <td>FUECOCO</td>
          <td>O</td>
        </tr>
        <tr>
          <td>6</td>
          <td>W EGO</td>
          <td>OREGON U</td>
          <td>U</td>
        </tr>
        <tr>
          <td>7</td>
          <td>K RUQ</td>
          <td>PERRUQUIER</td>
          <td>P</td>
        </tr>
        <tr>
          <td>8</td>
          <td>K ENY</td>
          <td>RENYI</td>
          <td>R</td>
        </tr>
        <tr>
          <td>9</td>
          <td>K SOS</td>
          <td>ISOSCELES</td>
          <td>I</td>
        </tr>
        <tr>
          <td>10</td>
          <td>W REP</td>
          <td>REPLAYTV</td>
          <td>V</td>
        </tr>
        <tr>
          <td>11</td>
          <td>K RSR</td>
          <td>ENGINEERS RING</td>
          <td>E</td>
        </tr>
        <tr>
          <td>12</td>
          <td>W KOL</td>
          <td>KOLLER</td>
          <td>R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      To extract, look at the leftover letters K and W. In radio, K and W mean
      the west and east half of the USA. (Yes, "W" is the one that means
      "east.") So, extract the westernmost/easternmost letter. The answer is{' '}
      <Clue>GO UPRIVER</Clue>.
    </p>
    <h2>7 The Battery Pack</h2>
    <p>
      This references the Bookspace hunt's{' '}
      <a href="https://puzzles.mit.edu/2022/puzzle/battery-pack/">
        Plot Device meta
      </a>
      . We can drop the crab's luggage into the grid, dropquote-style, to spell:
    </p>

    <Grid
      shading={[
        ['', '', '', ''],
        ['', Colors.C7, Colors.C7, ''],
        ['', '', '', ''],
        ['', Colors.C7, Colors.C7, ''],
        ['', '', '', ''],
        ['', Colors.C7, Colors.C7, ''],
        ['', '', '', ''],
      ]}
      data={[
        ['T', 'H', 'E', 'S'],
        ['O', '', '', 'L'],
        ['U', 'T', 'I', 'O'],
        ['N', '', '', 'I'],
        ['S', 'A', 'F', 'T'],
        ['E', '', '', 'R'],
        ['L', 'I', 'F', 'E'],
      ]}
      className="plot-device-grid"
    />

    <p>
      The solution is <Clue>AFTERLIFE</Clue>.
    </p>
    <h2>8 ⊥IW's Athletics Field</h2>
    <p>
      <b>Solution. </b>This references the alternate dimension school of the
      2021 hunt. And specifically, the{' '}
      <a href="https://puzzles.mit.edu/2021/puzzle/athletics/">
        Athletics field meta
      </a>
      . Fit the words into the grid crossword-style to spell:
    </p>
    <Grid
      data={[
        ['T', 'O', 'S', 'S', 'A'],
        ['C', 'O', 'I', 'N', 'L'],
        ['B', 'P', 'L', 'O', 'T'],
        ['Y', 'A', 'K', 'K', 'O'],
        ['S', 'K', 'Y', 'E', 'S'],
      ]}
      className="athletics-grid"
    />
    <p>
      The answer is <Clue>TOSS A COIN</Clue>.
    </p>
    <h2>9 Craps Man</h2>
    <p>
      <b>Solution. </b>This references the 2011 Mega Man round, and specifically
      this meta:{' '}
      <a href="https://puzzles.mit.edu/2011/puzzles/mega_man/craps.html">
        Craps Man
      </a>
      . Ignoring our missing opponent, we have five dice rolls: 4, 9, 11, 2, and
      8. Now we play Monopoly, extracting using the shared letters between the
      spaces we visit and the crab's luggage. We have to order the dice rolls so
      that everything works out. In particular, we need to land on Community
      Chest after the second roll in order to GO TO JAIL.
    </p>
    <Table className="craps-table">
      <thead>
        <tr>
          <th>Roll</th>
          <th>Space</th>
          <th>Luggage</th>
          <th>Shared letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8</td>
          <td>
            V<u>E</u>RMONT <u>A</u>VENUE
          </td>
          <td>
            S<u>E</u>VERAL <u>A</u>LBUMS
          </td>
          <td>EA</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            COMMUNITY CHE<u>ST</u>
          </td>
          <td>
            DELICIOUS FEA<u>ST</u>
          </td>
          <td>ST</td>
        </tr>
        <tr>
          <td colSpan={4}>
            Special event: draw the Community Chest card GO TO JAIL
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            ELECTRIC <u>CO</u>MPANY
          </td>
          <td>
            TROMBONE <u>CO</u>NCERT
          </td>
          <td>CO</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            ST J<u>A</u>ME<u>S</u> PLACE
          </td>
          <td>
            DJ B<u>A</u>ND<u>S</u>' MUSIC
          </td>
          <td>AS</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            VEN<u>T</u>NOR AVENUE
          </td>
          <td>
            BRI<u>T</u>ISH COMEDY
          </td>
          <td>T</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Clue>EAST COAST</Clue>.
    </p>
    <h2>10 The Cubs Scout</h2>
    <p>
      <b>Solution.</b> This references the amusement park hunt; specifically the
      Safari Adventure area; even more specifically the{' '}
      <a href="https://puzzles.mit.edu/2020/puzzle/cubs_scout/">Cubs Scout</a>{' '}
      meta. To solve the minimeta, we reinterpret the diamond as a safety
      diamond, whose sections warn about fire, health hazards, explosives, and
      "special" (e.g., reacts badly with water) in that order. Each object in the
      crab's luggage belongs in one section of the diamond, and the shell shows
      which letter to extract. For example, "???*" means to extract the last
      letter of whichever word has length 4.
    </p>
    <Table className="cubs-scout-table">
      <thead>
        <tr>
          <th>Luggage</th>
          <th>Danger</th>
          <th>Notes</th>
          <th>Shell</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SAMSUNG NOTE SEVENS</td>
          <td>fire</td>
          <td></td>
          <td>????*?</td>
          <td>N</td>
        </tr>
        <tr>
          <td>SHAKEN SODA</td>
          <td>instability</td>
          <td>could detonate at any time</td>
          <td>???*</td>
          <td>A</td>
        </tr>
        <tr>
          <td>ROGUE MOGWAI</td>
          <td>special</td>
          <td>reacts badly with water</td>
          <td>???*?</td>
          <td>U</td>
        </tr>
        <tr>
          <td>DROPS OF ICE-NINE</td>
          <td>special</td>
          <td>reacts VERY badly with water</td>
          <td>???*?</td>
          <td>P</td>
        </tr>
        <tr>
          <td>MEDUSA HEAD</td>
          <td>health</td>
          <td></td>
          <td>??*?</td>
          <td>A</td>
        </tr>
        <tr>
          <td>DEATH NOTE</td>
          <td>health</td>
          <td></td>
          <td>??*?</td>
          <td>T</td>
        </tr>
        <tr>
          <td>PIHA KAETTA</td>
          <td>health</td>
          <td></td>
          <td>??*?</td>
          <td>H</td>
        </tr>
        <tr>
          <td>KANTONIAN FORM VULPIX</td>
          <td>fire</td>
          <td></td>
          <td>????*?</td>
          <td>I</td>
        </tr>
        <tr>
          <td>NOVA BOMBS</td>
          <td>instability</td>
          <td></td>
          <td>???*</td>
          <td>A</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Clue>NAUPATHIA</Clue>. This is trickier than usual because
      nutrimatic doesn't know this word.
    </p>
    <h2>11 ⊥IW's Random Hall</h2>
    <p>
      <b>Solution. </b>This also references the alternate dimension school of
      the 2021 hunt. Following the directions from the Athletics Field, we find
      the{' '}
      <a href="https://puzzles.mit.edu/2021/puzzle/random-hall/">Random Hall</a>{' '}
      meta. The solution is very straightforward: take each number, "round to
      the nearest" integer, and index into the crab's belongings in order.
      Unfortunately, if we're unlucky, we'll see different numbers than the crab
      did and our indexing won't work. Some of the numbers are forced to be in a
      certain range, forced to be 1, or incredibly unlikely to be any number
      other than 1, which helps in assembling an effective nutrimatic query.
    </p>
    <Table className="random-hall-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Luggage</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            1 (forced<a href="#random-hall-footnote-1">[1]</a>)
          </td>
          <td>SHOES</td>
          <td>S</td>
        </tr>
        <tr>
          <td>3</td>
          <td>OBOE</td>
          <td>O</td>
        </tr>
        <tr>
          <td>
            4 (forced 4-7<a href="#random-hall-footnote-2">[2]</a>)
          </td>
          <td>PAIL</td>
          <td>L</td>
        </tr>
        <tr>
          <td>4</td>
          <td>TOFU</td>
          <td>U</td>
        </tr>
        <tr>
          <td>
            3 (forced 2-4<a href="#random-hall-footnote-2">[2]</a>)
          </td>
          <td>POT</td>
          <td>T</td>
        </tr>
        <tr>
          <td>3</td>
          <td>DRILL</td>
          <td>I</td>
        </tr>
        <tr>
          <td>3</td>
          <td>BOOTS</td>
          <td>O</td>
        </tr>
        <tr>
          <td>4</td>
          <td>BEANS</td>
          <td>N</td>
        </tr>
        <tr>
          <td>2</td>
          <td>SEEDS</td>
          <td>E</td>
        </tr>
        <tr>
          <td>6</td>
          <td>HORSESHOES</td>
          <td>S</td>
        </tr>
        <tr>
          <td>
            2 (forced 2-4<a href="#random-hall-footnote-2">[2]</a>)
          </td>
          <td>PC</td>
          <td>C</td>
        </tr>
        <tr>
          <td>1 (forced*)</td>
          <td>OVEN</td>
          <td>O</td>
        </tr>
        <tr>
          <td>
            4 (forced 4-7<a href="#random-hall-footnote-2">[2]</a>)
          </td>
          <td>PEAR</td>
          <td>R</td>
        </tr>
        <tr>
          <td>4</td>
          <td>DESSERTS</td>
          <td>T</td>
        </tr>
        <tr>
          <td>
            1 (forced-ish<a href="#random-hall-footnote-3">[3]</a>)
          </td>
          <td>IRON</td>
          <td>I</td>
        </tr>
        <tr>
          <td>9</td>
          <td>SOUPSPOONS</td>
          <td>N</td>
        </tr>
        <tr>
          <td>1</td>
          <td>GRILL</td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>
    <p id="random-hall-footnote-1">
      [1] Because the number is drawn from a Beta distribution, and so is in the
      range [0,1].
    </p>
    <p id="random-hall-footnote-2">
      [2] Because the number is drawn from a uniform distribution with this
      range.
    </p>
    <p id="random-hall-footnote-3">
      [3] This number is drawn from an exponential distribution with lambda=6.
      Though it can technically be any number, it is much likelier to take on
      small values, so solvers might replace <Clue>[iron]</Clue> in the query
      below with just <Clue>i</Clue> or <Clue>[ir]</Clue>.
    </p>
    <p>
      Known information about random numbers is enough to assemble the
      nutrimatic query
      <br />
      <Clue>
        s[oboe]l[tofu][ot][drill][boots][beans][seeds][horseshoes]cor[desserts][iron][soupspoons][grill]
      </Clue>
      <br />
      which gives <Clue>SOLUTION ESCORTING</Clue> as the only plausible option.
      The solution is <Clue>ESCORTING</Clue>.
    </p>
    <h2>Finish</h2>
    <p>
      We have 11 answers: <Clue>BEAR NORTH</Clue>, <Clue>TRADE BANK</Clue>,{' '}
      <Clue>BOAT DOCKS</Clue>, <Clue>LAST FERRY</Clue>, <Clue>CHTHONIAN</Clue>,{' '}
      <Clue>GO UPRIVER</Clue>, <Clue>AFTERLIFE</Clue>, <Clue>TOSS A COIN</Clue>,{' '}
      <Clue>EAST COAST</Clue>, <Clue>NAUPATHIA</Clue>, and{' '}
      <Clue>ESCORTING</Clue>. So what next?
    </p>
    <p>
      The crab is looking for a new home, and this year's hunt will provide one.
      Together, our answers semantically reference the Charon meta earlier in
      this hunt. (Coincidentally, that meta answer is very appropriate to
      attract someone looking for a new home.) There are also two hints to use
      the other bank of the river (<Clue>TRADE BANK</Clue>,{' '}
      <Clue>EAST COAST</Clue>), and two hints to read in the opposite direction
      (<Clue>BEAR NORTH</Clue>, <Clue>GO UPRIVER</Clue>.)
    </p>
    <Grid
      shading={[
        ['', '', blue, blue, yellow, '', '', '', ''],
        ['', '', '', blue, blue, blue, yellow, '', ''],
        ['', '', '', '', blue, blue, yellow, '', ''],
        ['', '', '', blue, blue, yellow, '', '', ''],
        ['', '', '', blue, blue, yellow, '', '', ''],
        ['', '', '', blue, blue, yellow, '', '', ''],
        ['', '', '', blue, blue, yellow, '', '', ''],
        ['', '', '', '', blue, blue, yellow, '', ''],
        ['', '', '', '', '', blue, blue, yellow, ''],
        ['', '', '', '', '', '', blue, blue, yellow],
        ['', '', '', '', '', '', blue, blue, yellow],
      ]}
      data={[
        ['B', 'E', 'A', 'R', 'N', 'O', 'R', 'T', 'H'],
        ['T', 'R', 'A', 'D', 'E', 'B', 'A', 'N', 'K'],
        ['B', 'O', 'A', 'T', 'D', 'O', 'C', 'K', 'S'],
        ['L', 'A', 'S', 'T', 'F', 'E', 'R', 'R', 'Y'],
        ['C', 'H', 'T', 'H', 'O', 'N', 'I', 'A', 'N'],
        ['G', 'O', 'U', 'P', 'R', 'I', 'V', 'E', 'R'],
        ['A', 'F', 'T', 'E', 'R', 'L', 'I', 'F', 'E'],
        ['T', 'O', 'S', 'S', 'A', 'C', 'O', 'I', 'N'],
        ['E', 'A', 'S', 'T', 'C', 'O', 'A', 'S', 'T'],
        ['N', 'A', 'U', 'P', 'A', 'T', 'H', 'I', 'A'],
        ['E', 'S', 'C', 'O', 'R', 'T', 'I', 'N', 'G'],
      ]}
      className="final-grid"
    />

    <p>
      The final answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        Craig Kasper had the initial brilliant idea for both the meta shell
        execution, and the Hermit Crab flavor.
      </p>
      <p>
        I tried to make the puzzle feel real to the story of the Hermit Crab, as
        opposed to a lifeless list. Hunt puzzles tend to introduce themselves as
        dry data, and for good reason: any extraneous text could be a
        distraction or red herring. But I love puzzles that live in a core
        "mythology," so that the solution makes sense in the context of the
        puzzle's world.
      </p>
      <p>
        (To pull off a good mythology puzzle, should we include <i>so much</i>{' '}
        flavortext that solvers are forced to analyze overarching themes, rather
        than search for key words?)
      </p>
      <p>
        I hope the Hermit Crab continues to find new homes&mdash;in other words, if
        you're running Mystery Hunt, don't write only pure metas.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .caucus-race-table td:nth-child(2n),
      .cafe-table td:nth-child(n + 2),
      .computer-hacker-table td:nth-child(n + 2),
      .hell-table td:nth-child(n + 2),
      .craps-table td:nth-child(n + 2),
      .cubs-scout-table td:nth-child(1),
      .cubs-scout-table td:nth-child(n + 4),
      .random-hall-table td:nth-child(n + 2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .cafe-table th:nth-child(4),
      .cafe-table td:nth-child(4),
      .computer-hacker-table th:nth-child(n + 1),
      .computer-hacker-table td:nth-child(n + 1),
      .hell-table th:nth-child(1),
      .hell-table td:nth-child(1),
      .hell-table th:nth-child(2n + 1),
      .hell-table td:nth-child(2n + 1),
      .craps-table td:nth-child(3n + 1),
      .craps-table th:nth-child(3n + 1) {
        text-align: center;
      }
      .craps-table td[colSpan] {
        text-align: start;
      }
      .cubs-scout-table td:nth-child(n + 4) {
        white-space: nowrap;
      }
      .plot-device-grid table {
        border: 3px solid black;
      }
      .plot-device-grid table,
      .athletics-grid table,
      .final-grid table {
        margin-left: auto;
        margin-right: auto;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .athletics-grid tr:nth-child(1) td {
        border-top: 3px solid black !important;
      }
      .athletics-grid tr:nth-child(1) td:nth-child(1),
      .athletics-grid tr:nth-child(2) td:nth-child(1) {
        border-left: 3px solid black !important;
      }
      .athletics-grid tr:nth-child(1) td:nth-child(5),
      .athletics-grid tr:nth-child(2) td:nth-child(4) {
        border-right: 3px solid black !important;
      }
      .athletics-grid tr:nth-child(1) td:nth-child(5),
      .athletics-grid tr:nth-child(2) td:nth-child(-n + 4) {
        border-bottom: 3px solid black !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
