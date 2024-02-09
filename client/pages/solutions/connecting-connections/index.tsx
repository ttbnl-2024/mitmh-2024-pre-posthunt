import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'connecting-connections';
const ANSWER = `AMERICA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are given 16 Connections puzzles which reveal their categories as they
      are solved. For each puzzle, there is a word that fits all 4 categories,
      but does not appear in the puzzle.
    </p>
    <p>
      For example, the first grid solves to categories "SHAKESPEARE CHARACTERS",
      "RHYMES WITH FELLOW", "BOARD GAMES ON 8X8 GRIDS", and "WORDS CONTAINING
      EXCLAMATIONS". The word OTHELLO fits into all 4 of these categories.
    </p>

    <p>We then use these 16 words to solve a meta Connections puzzle:</p>

    <Table>
      <tbody>
        <tr>
          <td>OTHELLO</td>
          <td>STAR</td>
          <td>FACE</td>
          <td>TRAIN</td>
        </tr>
        <tr>
          <td>MEDIUM</td>
          <td>GENESIS</td>
          <td>TRUMPET</td>
          <td>NEMO</td>
        </tr>
        <tr>
          <td>KANGAROO</td>
          <td>CREAM</td>
          <td>POLE</td>
          <td>TWILIGHT</td>
        </tr>
        <tr>
          <td>CRUNCH</td>
          <td>QUEEN</td>
          <td>HOOK</td>
          <td>WIND</td>
        </tr>
      </tbody>
    </Table>

    <p>This puzzle has the following categories:</p>
    <ul>
      <li>
        WORDS THAT START AND END WITH SAME LETTER (OTHELLO, MEDIUM, TRUMPET,
        TWILIGHT)
      </li>
      <li>NORTH ____ (STAR, FACE, POLE, WIND)</li>
      <li>BANDS (TRAIN, GENESIS, CREAM, QUEEN)</li>
      <li>CAPTAINS (NEMO, KANGAROO, CRUNCH, HOOK)</li>
    </ul>
    <p>
      The word that fits all 4 of these categories is{' '}
      <Answerize>AMERICA</Answerize>.
    </p>

    <Appendix>
      <Table>
        <tbody>
          <tr>
            <td>SHAKESPEARE CHARACTERS</td>
            <td>JULIET</td>
            <td>ROSENCRANTZ</td>
            <td>HAMLET</td>
            <td>LEAR</td>
            <td rowSpan={4}>OTHELLO</td>
          </tr>
          <tr>
            <td>WORDS CONTAINING EXCLAMATIONS</td>
            <td>CHECKERS</td>
            <td>GOSHAWK</td>
            <td>DARNED</td>
            <td>CRUDITÉS</td>
          </tr>
          <tr>
            <td>RHYMES WITH FELLOW</td>
            <td>JELL-O</td>
            <td>YELLOW</td>
            <td>CELLO</td>
            <td>MARSHMALLOW</td>
          </tr>
          <tr>
            <td>BOARD GAMES ON 8x8 GRIDS</td>
            <td>CHESS</td>
            <td>TORRES</td>
            <td>JOGGLE</td>
            <td>TERRACE</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ASTRONOMY OBJECTS</td>
            <td>PLANET</td>
            <td>GALAXY</td>
            <td>COMET</td>
            <td>METEOR</td>
            <td rowSpan={4}>STAR</td>
          </tr>
          <tr>
            <td>LORDS</td>
            <td>DARK</td>
            <td>FARQUAAD</td>
            <td>FIRE</td>
            <td>FAUNTLEROY</td>
          </tr>
          <tr>
            <td>SHAPES</td>
            <td>HEART</td>
            <td>HEXAGON</td>
            <td>CIRCLE</td>
            <td>TRIANGLE</td>
          </tr>
          <tr>
            <td>WORDS WHEN "K" IS ADDED TO THE END</td>
            <td>CHIC</td>
            <td>DEBAR</td>
            <td>FLAN</td>
            <td>THIN</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ONE LETTER OFF "RACE"</td>
            <td>RICE</td>
            <td>RATE</td>
            <td>PACE</td>
            <td>RACK</td>
            <td rowSpan={4}>FACE</td>
          </tr>
          <tr>
            <td>___OFF</td>
            <td>TURN</td>
            <td>DROP</td>
            <td>KICK</td>
            <td>TAKE</td>
          </tr>
          <tr>
            <td>WORDS CONTAINING ONLY NOTES</td>
            <td>BABE</td>
            <td>DACE</td>
            <td>CAGE</td>
            <td>DEAD</td>
          </tr>
          <tr>
            <td>ENDS WITH AN LGBT+ TERM</td>
            <td>ALIBI</td>
            <td>MARGAY</td>
            <td>JAPAN</td>
            <td>TARO</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CS:GO MAPS</td>
            <td>NUKE</td>
            <td>VERTIGO</td>
            <td>MIRAGE</td>
            <td>INFERNO</td>
            <td rowSpan={4}>TRAIN</td>
          </tr>
          <tr>
            <td>VEHICLES</td>
            <td>TRUCK</td>
            <td>MOTORCYCLE</td>
            <td>CAR</td>
            <td>BUS</td>
          </tr>
          <tr>
            <td>SYNONYMS FOR FOCUS</td>
            <td>AIM</td>
            <td>POINT</td>
            <td>CAST</td>
            <td>DIRECT</td>
          </tr>
          <tr>
            <td>5-LETTER PARTIAL ANAGRAMS OF PAINTER</td>
            <td>APTER</td>
            <td>PRINT</td>
            <td>TAPIR</td>
            <td>IRATE</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>SYNONYMS FOR AVERAGE</td>
            <td>ORDINARY</td>
            <td>MODERATE</td>
            <td>MIDDLE</td>
            <td>STANDARD</td>
            <td rowSpan={4}>MEDIUM</td>
          </tr>
          <tr>
            <td>SIZES</td>
            <td>SMALL</td>
            <td>VENTI</td>
            <td>PETIT</td>
            <td>TALL</td>
          </tr>
          <tr>
            <td>TOWN OF SALEM ROLES</td>
            <td>DOCTOR</td>
            <td>SPY</td>
            <td>JANITOR</td>
            <td>SURVIVOR</td>
          </tr>
          <tr>
            <td>SPIRITUAL PROFESSIONS</td>
            <td>PSYCHIC</td>
            <td>FORTUNE TELLER</td>
            <td>HYPNOTIST</td>
            <td>CLAIRVOYANT</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ENDS WITH ENDEARING FAMILY TERM</td>
            <td>STIGMA</td>
            <td>HASBRO</td>
            <td>SHERPA</td>
            <td>AGENDA</td>
            <td rowSpan={4}>GENESIS</td>
          </tr>
          <tr>
            <td>OLD TESTAMENT BOOKS</td>
            <td>EXODUS</td>
            <td>PROVERBS</td>
            <td>RUTH</td>
            <td>JOSHUA</td>
          </tr>
          <tr>
            <td>SYNONYMS FOR BEGINNING</td>
            <td>START</td>
            <td>ORIGIN</td>
            <td>COMMENCEMENT</td>
            <td>EMERGENCE</td>
          </tr>
          <tr>
            <td>HYUNDAI CARS</td>
            <td>SONATA</td>
            <td>SANTA FE</td>
            <td>IONIQ</td>
            <td>TUCSON</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>WORDS CONTAINING GLUTEI MAXIMI</td>
            <td>ASSIMILATE</td>
            <td>BELLYBUTTON</td>
            <td>BUNSEN BURNER</td>
            <td>FOREARM</td>
            <td rowSpan={4}>TRUMPET</td>
          </tr>
          <tr>
            <td>INSTRUMENTS</td>
            <td>PIANO</td>
            <td>VIOLIN</td>
            <td>FLUTE</td>
            <td>FRENCH HORN</td>
          </tr>
          <tr>
            <td>ANIMAL NOISES</td>
            <td>MEOW</td>
            <td>HISS</td>
            <td>BUGLE</td>
            <td>WHEEK</td>
          </tr>
          <tr>
            <td>VINES</td>
            <td>ALLEGHENY</td>
            <td>LIPSTICK</td>
            <td>SNAKE</td>
            <td>SILVER DOLLAR</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>DISNEY TITULAR CHARACTERS</td>
            <td>SNOW WHITE</td>
            <td>RALPH</td>
            <td>BAMBI</td>
            <td>BOLT</td>
            <td rowSpan={4}>NEMO</td>
          </tr>
          <tr>
            <td>PSEUDONYMS</td>
            <td>GEORGE ELIOT</td>
            <td>JOHN DOE</td>
            <td>MCLOVIN</td>
            <td>AVICII</td>
          </tr>
          <tr>
            <td>WORDS WHEN SPELLED BACKWARDS</td>
            <td>KNITS</td>
            <td>SPACER</td>
            <td>DOOM</td>
            <td>REWARD</td>
          </tr>
          <tr>
            <td>CAPCOM ARCADE GAMES</td>
            <td>BLACK TIGER</td>
            <td>STREET FIGHTER II</td>
            <td>GHOSTS N' GOBLINS</td>
            <td>STRIDER</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>MARSUPIALS</td>
            <td>WALLABY</td>
            <td>QUOKKA</td>
            <td>TASMANIAN DEVIL</td>
            <td>WOMBAT</td>
            <td rowSpan={4}>KANGAROO</td>
          </tr>
          <tr>
            <td>_____ COURT</td>
            <td>TENNIS</td>
            <td>JUVENILE</td>
            <td>DIVORCE</td>
            <td>FOOD</td>
          </tr>
          <tr>
            <td>ENEMIES OF SPIDERMAN</td>
            <td>KINGPIN</td>
            <td>MORBIUS</td>
            <td>VENOM</td>
            <td>MYSTERIO</td>
          </tr>
          <tr>
            <td>CHESS DEFENSES</td>
            <td>BOGO-INDIAN</td>
            <td>DUTCH</td>
            <td>SICILIAN</td>
            <td>GRUNFELD</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>SYNONYMS FOR PUNCH</td>
            <td>DECK</td>
            <td>CLOBBER</td>
            <td>STRIKE</td>
            <td>BEAT</td>
            <td rowSpan={4}>CREAM</td>
          </tr>
          <tr>
            <td>COFFEE ADD-INS</td>
            <td>MILK</td>
            <td>SUGAR</td>
            <td>SWEET'N LOW</td>
            <td>SPLENDA</td>
          </tr>
          <tr>
            <td>SHADES OF WHITE</td>
            <td>IVORY</td>
            <td>VANILLA</td>
            <td>BEIGE</td>
            <td>EGGSHELL</td>
          </tr>
          <tr>
            <td>CALIFORNIA FOUNDED FOOD CHAINS</td>
            <td>PEETS</td>
            <td>IN-N-OUT</td>
            <td>TACO BELL</td>
            <td>BASKIN-ROBBINS</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CYLINDRICAL OBJECTS</td>
            <td>CANDLE</td>
            <td>PIPE</td>
            <td>CAN</td>
            <td>ROD</td>
            <td rowSpan={4}>POLE</td>
          </tr>
          <tr>
            <td>BOUNDARY</td>
            <td>EXTREMITY</td>
            <td>LIMIT</td>
            <td>EDGE</td>
            <td>SIDE</td>
          </tr>
          <tr>
            <td>NATIONALITIES</td>
            <td>DANE</td>
            <td>FINN</td>
            <td>SWISS</td>
            <td>MALTESE</td>
          </tr>
          <tr>
            <td>____ POSITION</td>
            <td>LOTUS</td>
            <td>FETAL</td>
            <td>MISSIONARY</td>
            <td>LITHOTOMY</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>VAMPIRE MOVIES</td>
            <td>DRACULA</td>
            <td>RENFIELD</td>
            <td>BIT</td>
            <td>THIRST</td>
            <td rowSpan={4}>TWILIGHT</td>
          </tr>
          <tr>
            <td>TIMES OF DAY</td>
            <td>DAWN</td>
            <td>DUSK</td>
            <td>NOON</td>
            <td>MIDNIGHT</td>
          </tr>
          <tr>
            <td>FIRST WORDS OF LEGEND OF ZELDA GAMES</td>
            <td>OCARINA</td>
            <td>SKYWARD</td>
            <td>BREATH</td>
            <td>TEARS</td>
          </tr>
          <tr>
            <td>____ ZONE</td>
            <td>TORRID</td>
            <td>TIME</td>
            <td>ADVENTURE</td>
            <td>FRIEND</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ONOMATOPOEIA</td>
            <td>BANG</td>
            <td>WHAM</td>
            <td>OW</td>
            <td>POW</td>
            <td rowSpan={4}>CRUNCH</td>
          </tr>
          <tr>
            <td>CANDY BARS</td>
            <td>KIT KAT</td>
            <td>TWIX</td>
            <td>SNICKERS</td>
            <td>MILKY WAY</td>
          </tr>
          <tr>
            <td>_____ FITNESS</td>
            <td>PLANET</td>
            <td>ANYTIME</td>
            <td>LA</td>
            <td>SNAP</td>
          </tr>
          <tr>
            <td>WORDS CONTAINING RUNNING TERMS</td>
            <td>BETROTHAL</td>
            <td>MISPRINT</td>
            <td>SLAPDASH</td>
            <td>TRACE</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>ROYAL TITLES</td>
            <td>PRINCE</td>
            <td>COUNTESS</td>
            <td>BARONESS</td>
            <td>VISCOUNT</td>
            <td rowSpan={4}>QUEEN</td>
          </tr>
          <tr>
            <td>CARD NUMBERS</td>
            <td>ACE</td>
            <td>FOUR</td>
            <td>TEN</td>
            <td>JACK</td>
          </tr>
          <tr>
            <td>TRIPLE VOWELS</td>
            <td>BEAUTY</td>
            <td>ANXIOUS</td>
            <td>SQUEAL</td>
            <td>GOOEY</td>
          </tr>
          <tr>
            <td>DRAG _____</td>
            <td>RACE</td>
            <td>KING</td>
            <td>SHOW</td>
            <td>BIKE</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>PARTS OF A STORY</td>
            <td>CLIMAX</td>
            <td>RESOLUTION</td>
            <td>CONFLICT</td>
            <td>EXPOSITION</td>
            <td rowSpan={4}>HOOK</td>
          </tr>
          <tr>
            <td>HOCKEY VERBS</td>
            <td>CHECK</td>
            <td>BOARD</td>
            <td>ICE</td>
            <td>SLASH</td>
          </tr>
          <tr>
            <td>BLUES TRAVELER SONGS</td>
            <td>RUN-AROUND</td>
            <td>BUT ANYWAY</td>
            <td>THE MOUNTAINS WIN AGAIN</td>
            <td>CAROLINA BLUES</td>
          </tr>
          <tr>
            <td>FIRST WORDS OF TRIPLETS</td>
            <td>SHAKE</td>
            <td>READY</td>
            <td>SNAP</td>
            <td>STOP</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>HETERONYMS</td>
            <td>BASS</td>
            <td>DESERT</td>
            <td>LEAD</td>
            <td>INTERN</td>
            <td rowSpan={4}>WIND</td>
          </tr>
          <tr>
            <td>WOOD _____</td>
            <td>HEN</td>
            <td>WORK</td>
            <td>PILE</td>
            <td>SHED</td>
          </tr>
          <tr>
            <td>SYNONYMS FOR BREEZE</td>
            <td>GUST</td>
            <td>GALE</td>
            <td>DRAFT</td>
            <td>CURRENT</td>
          </tr>
          <tr>
            <td>CONTAINS "IN"</td>
            <td>FINGER</td>
            <td>CASINO</td>
            <td>GRAIN</td>
            <td>COFFIN</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>

    <p>
      <a href="https://docs.google.com/spreadsheets/d/1vvudr_pLogzMVxzB8kqnm4ieYGOkejJ9dzR3D9gCmhg/edit#gid=1424719603">
        https://docs.google.com/spreadsheets/d/1vvudr_pLogzMVxzB8kqnm4ieYGOkejJ9dzR3D9gCmhg/edit#gid=1424719603
      </a>
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
