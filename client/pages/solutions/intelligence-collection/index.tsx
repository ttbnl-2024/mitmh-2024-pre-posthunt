import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'intelligence-collection';
const ANSWER = `TUITION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      From the art and layout of 5x5 grids, we recognize the cards as being from
      the game <i>Codenames</i>. If we do not already know the rules to{' '}
      <i>Codenames</i>, we can look them up on a site like{' '}
      <a href="https://boardgamegeek.com/filepage/119841/codenames-rulebook-english">
        BoardGameGeek
      </a>
      .
    </p>
    <p>
      From the rules of <i>Codenames</i>, we learn that each card in a grid of
      25 cards is divided into one of four secret categories: The first
      cluegiver's team (9 cards), the second cluegiver's team (8 cards),
      bystanders (7 cards), and the assassin (1 card). One cluegiver's team is
      Red and the other cluegiver's team is Blue, but it varies with each game
      whether Red or Blue is first. Consequently, it also varies whether Red or
      Blue is the team with 1 extra card.
    </p>
    <p>
      Looking for patterns in the cards, we begin to notice commonalities
      between some of the words. These commonalities allow us to identify single
      words that can act as <i>Codenames</i>-style clues to sets of words for
      either the first or second cluegiver's cards. These clues use combinations
      of synonyms, portions of two-word phrases, related words in the same
      category, or other kinds of connections that would make good, legal{' '}
      <i>Codenames</i> clues. To make it easier to identify the sets, we may
      also notice that the cards associated with each clue word are presented in
      alphabetical order from left to right and top to bottom.
    </p>
    <Table id="clues">
      <thead>
        <tr>
          <th>Set</th>
          <th>Clues and related cards</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>1</b>
          </td>
          <td>
            <b>KISS (9):</b> BAND, BLOW, CHEF, DIRT, FRENCH, RADIO, SEAL,
            SIMPLE, STEAL
            <br />
            <b>AMTRAK (8):</b> CARDINAL, CASCADES, EAGLE, FLYER, METEOR,
            PASSENGER, TRAIN, WOLVERINE
          </td>
        </tr>
        <tr>
          <td>
            <b>2</b>
          </td>
          <td>
            <b>EMERGENCY (9):</b> BRAKE, CARE, EXIT, LANDING, NUMBER, PLAN,
            POWER, ROOM, STATE
            <br />
            <b>DORY (8):</b> ANIMATED, KEEP, MEMORY, REGAL, SQUISHY, SYDNEY,
            TANG, WHALE
          </td>
        </tr>
        <tr>
          <td>
            <b>3</b>
          </td>
          <td>
            <b>YOUTUBE (9):</b> AWARDS, HANDLE, HISTORY, KIDS, PLATFORM,
            PREMIUM, REWIND, STREAMING, STUDIO
            <br />
            <b>ELECTRIC (8):</b> CHAIR, FENCE, GENERAL, GUITAR, LAMP, MOTOR,
            SHEEP, SHOCK
          </td>
        </tr>
        <tr>
          <td>
            <b>4</b>
          </td>
          <td>
            <b>BULL (9):</b> DOG, DOZE, FROG, HORN, MARKET, NOSE, PEN, PIT, RIDE
            <br />
            <b>FEELING (8):</b> BORED, CROSS, CUTE, DIZZY, GUT, LUCKY, SHY,
            WORDS
          </td>
        </tr>
        <tr>
          <td>
            <b>5</b>
          </td>
          <td>
            <b>OCEAN (9):</b> DROP, FLOOR, FRONT, POND, SALT, SPRAY, VIEW,
            VOYAGE, ZONE
            <br />
            <b>QUEEN (8):</b> DAIRY, DRAG, DRAMA, FAIRY, MATTRESS, MERCURY,
            PROM, PROMOTE
          </td>
        </tr>
        <tr>
          <td>
            <b>6</b>
          </td>
          <td>
            <b>APPLE (9):</b> BIG, BOTTOM, CRAB, EMPIRE, GALA, JACK, JOBS, PINE,
            SAUCE
            <br />
            <b>RAY (8):</b> CHARLES, DEATH, GUN, HOPE, LIGHT, STING, STRAIGHT,
            TRACE{' '}
          </td>
        </tr>
        <tr>
          <td>
            <b>7</b>
          </td>
          <td>
            <b>ROYAL (9):</b> DECREE, FAMILY, GUARD, ICING, MAIL, NAVY, PRINCE,
            RUMBLE, SOCIETY
            <br />
            <b>SCARE (8):</b> ALARM, CROW, FRIGHTEN, HALLOWEEN, JUMP, QUOTES,
            STIFF, TACTIC
          </td>
        </tr>
        <tr>
          <td>
            <b>8</b>
          </td>
          <td>
            <b>DEEP (9):</b> ANKLE, DISH, END, FREEZE, FRY, PROFOUND, SKIN,
            SPACE, SINK
            <br />
            <b>WEDDING (8):</b> CAKE, FEAST, GREEK, MARCH, PRESENT, RING,
            SHOTGUN, SINGER
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      After we identify these clue words, we notice that the first
      letters of the words for the first player's clues, when read in the order
      given, spell out <Monospace>KEYBOARD</Monospace> (KISS, EMERGENCY,
      YOUTUBE, BULL, OCEAN, APPLE, ROYAL, DEEP). The first letters for the
      second player's clues are <Monospace>ADEFQRSW</Monospace> (AMTRAK, DORY,
      ELECTRIC, FEELING, QUEEN, RAY, SCARE, WEDDING). These are 8 adjacent
      letters on a keyboard, arranged in alphabetical order. Using the hint
      KEYBOARD, we rearrange the boards in a 2×4 grid according to a keyboard
      layout (first line: QWER, second line: ASDF).
    </p>
    <p>
      The bystanders and assassins are still unused (and still mixed together,
      as we haven't sorted out which are which yet). Having rearranged the
      boards, reading off the first letters of the unused words spells out a
      message, with a few interspersed letters that don't seem to fit. These
      interspersed letters are the assassin cards (one per board). We can
      confirm that these are the assassins, as searching a few of them together
      reveals that they are all subtitles of Assassin's Creed games (SYNDICATE,
      ORIGINS, ODYSSEY, REVELATIONS, BROTHERHOOD, UNITY, MIRAGE, ROGUE.). These
      form the <i>death</i> half of the <i>life and death games</i> hinted at in
      the flavor text. The message from the bystanders' first letters, once
      parsed, reads:
    </p>
    <p>
      <Monospace>
        INDEX INTO EVERY ASSASSIN BY THEIR COLUMN NUMBER WITHIN THEIR GRID
      </Monospace>
    </p>
    <p>When we follow these instructions, we get the following result:</p>
    <Table id="assassins">
      <thead>
        <tr>
          <th>Assassin</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>BROTHERHOOD</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ROGUE</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ODYSSEY</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>UNITY</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SYNDICATE</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MIRAGE</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ORIGINS</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>REVELATIONS</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The result, "<Monospace>REDISGOL</Monospace>
      ", when parsed, says "Red Is GoL". Here, "GoL" is an abbreviation for
      Conway's Game of Life (the <i>life</i> half of the{' '}
      <i>life and death games</i> hinted at in the flavor text). Looking back at
      the first and second player's clue words, one clue in each grid can be
      connected to the word "Red" via a <i>Codenames</i>-style clue, and the
      other can be connected to the word "Blue", consistent with{' '}
      <i>Codenames</i> team colors. These connections are:
    </p>
    <p>
      <b>Red:</b> KISS, EMERGENCY, YOUTUBE, BULL, QUEEN, APPLE, SCARE, WEDDING
    </p>
    <p>
      <b>Blue:</b> AMTRAK, DORY, ELECTRIC, FEELING, OCEAN, RAY, ROYAL, DEEP
    </p>
    <p>
      If we interpret all the cards from the Red team as the alive squares in
      Conway's game of life, and run the game forward one iteration, the grid
      spells out the answer:{' '}
      <b>
        <Monospace>TUITION</Monospace>
      </b>
      .
    </p>
    <h3>Full Grid</h3>
    <div className="overflow-x-auto max-w-full">
      <table className="my-1 text-[0.55rem] w-[1000px] border-4 border-black bordered text-center break-words mx-auto">
        <tbody>
          <tr>
            <td className="!px-px !py-1">IGLOO</td>
            <td className="!px-px !py-1 bg-blue-300">DROP</td>
            <td className="!px-px !py-1 bg-red-300">DAIRY</td>
            <td className="!px-px !py-1 bg-red-300">DRAG</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">FLOOR</td>
            <td className="!px-px !py-1 bg-red-300">CAKE</td>
            <td className="!px-px !py-1 bg-blue-300">ANKLE</td>
            <td className="!px-px !py-1 bg-red-300">FEAST</td>
            <td className="!px-px !py-1 bg-red-300">GREEK</td>
            <td className="!px-px !py-1 !border-r-4">NICKEL</td>
            <td className="!px-px !py-1 bg-red-300">AWARDS</td>
            <td className="!px-px !py-1 bg-red-300">HANDLE</td>
            <td className="!px-px !py-1">DOZEN</td>
            <td className="!px-px !py-1 bg-blue-300">CHAIR</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">FENCE</td>
            <td className="!px-px !py-1 bg-blue-300">CHARLES</td>
            <td className="!px-px !py-1">ELF</td>
            <td className="!px-px !py-1 bg-gray-300">UNITY</td>
            <td className="!px-px !py-1">XYLO­PHONE</td>
            <td className="!px-px !py-1 bg-blue-300">DEATH</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-red-300">DRAMA</td>
            <td className="!px-px !py-1 bg-red-300">FAIRY</td>
            <td className="!px-px !py-1 bg-blue-300">FRONT</td>
            <td className="!px-px !py-1 bg-blue-300">POND</td>
            <td className="!px-px !py-1 !border-r-4">IGUANA</td>
            <td className="!px-px !py-1 bg-red-300">MARCH</td>
            <td className="!px-px !py-1">NORTH</td>
            <td className="!px-px !py-1 bg-blue-300">DISH</td>
            <td className="!px-px !py-1">TEMPO</td>
            <td className="!px-px !py-1 !border-r-4">OPPO­NENT</td>
            <td className="!px-px !py-1 bg-blue-300">GENERAL</td>
            <td className="!px-px !py-1 bg-gray-300">ODYSSEY</td>
            <td className="!px-px !py-1 bg-blue-300">GUITAR</td>
            <td className="!px-px !py-1 bg-red-300">HISTORY</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">KIDS</td>
            <td className="!px-px !py-1 bg-red-300">BIG</td>
            <td className="!px-px !py-1 bg-blue-300">GUN</td>
            <td className="!px-px !py-1 bg-blue-300">HOPE</td>
            <td className="!px-px !py-1">EVIDENCE</td>
            <td className="!px-px !py-1">VACUUM</td>
          </tr>
          <tr>
            <td className="!px-px !py-1">ENGINE</td>
            <td className="!px-px !py-1 bg-gray-300">BROTHER­HOOD</td>
            <td className="!px-px !py-1">RAG</td>
            <td className="!px-px !py-1 bg-blue-300">SALT</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">SPRAY</td>
            <td className="!px-px !py-1 bg-blue-300">END</td>
            <td className="!px-px !py-1">YOGA</td>
            <td className="!px-px !py-1">ATHLETE</td>
            <td className="!px-px !py-1 bg-blue-300">FREEZE</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">PRESENT</td>
            <td className="!px-px !py-1 bg-blue-300">LAMP</td>
            <td className="!px-px !py-1">SHADOW</td>
            <td className="!px-px !py-1 bg-blue-300">MOTOR</td>
            <td className="!px-px !py-1">SPELL</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">PLATFORM</td>
            <td className="!px-px !py-1 bg-red-300">BOTTOM</td>
            <td className="!px-px !py-1 bg-red-300">CRAB</td>
            <td className="!px-px !py-1 bg-red-300">EMPIRE</td>
            <td className="!px-px !py-1">AUDIENCE</td>
            <td className="!px-px !py-1 bg-blue-300">LIGHT</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-red-300">MATTRESS</td>
            <td className="!px-px !py-1 bg-red-300">MERCURY</td>
            <td className="!px-px !py-1">SALOON</td>
            <td className="!px-px !py-1">SOIL</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">VIEW</td>
            <td className="!px-px !py-1 bg-blue-300">FRY</td>
            <td className="!px-px !py-1 bg-red-300">RING</td>
            <td className="!px-px !py-1 bg-blue-300">PRO­FOUND</td>
            <td className="!px-px !py-1 bg-red-300">SHOTGUN</td>
            <td className="!px-px !py-1 bg-gray-300 !border-r-4">ROGUE</td>
            <td className="!px-px !py-1 bg-red-300">PREMIUM</td>
            <td className="!px-px !py-1 bg-blue-300">SHEEP</td>
            <td className="!px-px !py-1 bg-red-300">REWIND</td>
            <td className="!px-px !py-1">INFINITY</td>
            <td className="!px-px !py-1 !border-r-4">NEWS­PAPER</td>
            <td className="!px-px !py-1 bg-red-300">GALA</td>
            <td className="!px-px !py-1">BODY</td>
            <td className="!px-px !py-1 bg-red-300">JACK</td>
            <td className="!px-px !py-1 bg-blue-300">STING</td>
            <td className="!px-px !py-1 bg-red-300">JOBS</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">VOYAGE</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">PROM</td>
            <td className="!px-px !py-1 !border-b-4">YARD</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">PROMOTE</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4 !border-b-4">
              ZONE
            </td>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">SIX</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">SINGER</td>
            <td className="!px-px !py-1 !border-b-4">TAG</td>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">SKIN</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4 !border-b-4">
              SPACE
            </td>
            <td className="!px-px !py-1 !border-b-4">HOTEL</td>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">SHOCK</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">STREAM­ING</td>
            <td className="!px-px !py-1 !border-b-4">EVER­GREEN</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4 !border-b-4">
              STUDIO
            </td>
            <td className="!px-px !py-1 !border-b-4">IVORY</td>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">STRAIGHT</td>
            <td className="!px-px !py-1 bg-blue-300 !border-b-4">TRACE</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">PINE</td>
            <td className="!px-px !py-1 bg-red-300 !border-b-4">SAUCE</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-red-300">BAND</td>
            <td className="!px-px !py-1 bg-blue-300">CARDINAL</td>
            <td className="!px-px !py-1 bg-blue-300">CASCADES</td>
            <td className="!px-px !py-1 bg-red-300">BLOW</td>
            <td className="!px-px !py-1 !border-r-4">ROOKIE</td>
            <td className="!px-px !py-1 bg-blue-300">DECREE</td>
            <td className="!px-px !py-1">COM­POUND</td>
            <td className="!px-px !py-1">OLYMPICS</td>
            <td className="!px-px !py-1 bg-blue-300">FAMILY</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">GUARD</td>
            <td className="!px-px !py-1 bg-blue-300">ANIMATED</td>
            <td className="!px-px !py-1 bg-blue-300">KEEP</td>
            <td className="!px-px !py-1">LENGTH</td>
            <td className="!px-px !py-1">UNIVERSE</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">MEMORY</td>
            <td className="!px-px !py-1 bg-red-300">DOG</td>
            <td className="!px-px !py-1">MATHE­MATICS</td>
            <td className="!px-px !py-1 bg-red-300">DOZE</td>
            <td className="!px-px !py-1">NEEDLE</td>
            <td className="!px-px !py-1">NIGHT</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-gray-300">SYNDI­CATE</td>
            <td className="!px-px !py-1">UMBRELLA</td>
            <td className="!px-px !py-1 bg-blue-300">EAGLE</td>
            <td className="!px-px !py-1 bg-red-300">CHEF</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">FLYER</td>
            <td className="!px-px !py-1 bg-red-300">ALARM</td>
            <td className="!px-px !py-1 bg-red-300">CROW</td>
            <td className="!px-px !py-1 bg-red-300">FRIGHTEN</td>
            <td className="!px-px !py-1">MARBLE</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">ICING</td>
            <td className="!px-px !py-1 bg-red-300">BRAKE</td>
            <td className="!px-px !py-1 bg-red-300">CARE</td>
            <td className="!px-px !py-1 bg-blue-300">REGAL</td>
            <td className="!px-px !py-1">BRIDGE</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">EXIT</td>
            <td className="!px-px !py-1 bg-red-300">FROG</td>
            <td className="!px-px !py-1">EXPLO­SION</td>
            <td className="!px-px !py-1 bg-red-300">HORN</td>
            <td className="!px-px !py-1 bg-red-300">MARKET</td>
            <td className="!px-px !py-1 bg-blue-300">BORED</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-blue-300">METEOR</td>
            <td className="!px-px !py-1 bg-red-300">DIRT</td>
            <td className="!px-px !py-1 bg-red-300">FRENCH</td>
            <td className="!px-px !py-1">ROOT</td>
            <td className="!px-px !py-1 !border-r-4">WASHER</td>
            <td className="!px-px !py-1 bg-blue-300">MAIL</td>
            <td className="!px-px !py-1 bg-red-300">HALLO­WEEN</td>
            <td className="!px-px !py-1 bg-red-300">JUMP</td>
            <td className="!px-px !py-1 bg-red-300">QUOTES</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">STIFF</td>
            <td className="!px-px !py-1 bg-red-300">LANDING</td>
            <td className="!px-px !py-1 bg-red-300">NUMBER</td>
            <td className="!px-px !py-1 bg-red-300">PLAN</td>
            <td className="!px-px !py-1 bg-red-300">POWER</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">SQUISHY</td>
            <td className="!px-px !py-1 bg-blue-300">CROSS</td>
            <td className="!px-px !py-1 bg-blue-300">CUTE</td>
            <td className="!px-px !py-1 bg-red-300">NOSE</td>
            <td className="!px-px !py-1 bg-red-300">PEN</td>
            <td className="!px-px !py-1 bg-gray-300">REVELA­TIONS</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-blue-300">PASSEN­GER</td>
            <td className="!px-px !py-1 bg-red-300">RADIO</td>
            <td className="!px-px !py-1">ISLAND</td>
            <td className="!px-px !py-1 bg-red-300">SEAL</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">SIMPLE</td>
            <td className="!px-px !py-1 bg-red-300">TACTIC</td>
            <td className="!px-px !py-1">TILE</td>
            <td className="!px-px !py-1 bg-blue-300">NAVY</td>
            <td className="!px-px !py-1 bg-blue-300">PRINCE</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">RUMBLE</td>
            <td className="!px-px !py-1 bg-gray-300">ORIGINS</td>
            <td className="!px-px !py-1">HORSE</td>
            <td className="!px-px !py-1">INSECT</td>
            <td className="!px-px !py-1 bg-red-300">ROOM</td>
            <td className="!px-px !py-1 bg-red-300 !border-r-4">STATE</td>
            <td className="!px-px !py-1 bg-red-300">PIT</td>
            <td className="!px-px !py-1 bg-red-300">RIDE</td>
            <td className="!px-px !py-1 bg-blue-300">DIZZY</td>
            <td className="!px-px !py-1 bg-blue-300">GUT</td>
            <td className="!px-px !py-1">NUCLEUS</td>
          </tr>
          <tr>
            <td className="!px-px !py-1 bg-red-300">STEAL</td>
            <td className="!px-px !py-1">TABLE</td>
            <td className="!px-px !py-1">HOOK</td>
            <td className="!px-px !py-1 bg-blue-300">TRAIN</td>
            <td className="!px-px !py-1 bg-blue-300 !border-r-4">WOLVERINE</td>
            <td className="!px-px !py-1">EAST</td>
            <td className="!px-px !py-1">IRON</td>
            <td className="!px-px !py-1">ROLL</td>
            <td className="!px-px !py-1 bg-blue-300">SOCIETY</td>
            <td className="!px-px !py-1 bg-gray-300 !border-r-4">MIRAGE</td>
            <td className="!px-px !py-1 bg-blue-300">SYDNEY</td>
            <td className="!px-px !py-1 bg-blue-300">TANG</td>
            <td className="!px-px !py-1">GRASS</td>
            <td className="!px-px !py-1 bg-blue-300">WHALE</td>
            <td className="!px-px !py-1 !border-r-4">ROCK</td>
            <td className="!px-px !py-1 bg-blue-300">LUCKY</td>
            <td className="!px-px !py-1 bg-blue-300">SHY</td>
            <td className="!px-px !py-1 bg-blue-300">WORDS</td>
            <td className="!px-px !py-1">IRIS</td>
            <td className="!px-px !py-1">DOLL</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 className="mt-2">Red Cells</h3>
    <div className="overflow-x-auto max-w-full">
      <table className="my-1 w-[600px] border-4 border-black bordered text-center break-words mx-auto">
        <tbody>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-b-4"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 className="mt-2">Red cells after one Game of Life iteration</h3>
    <p className="mt-0">(emphasis added to cells in the answer)</p>
    <div className="overflow-x-auto max-w-full">
      <table className="my-1 w-[600px] border-4 border-black bordered text-center break-words mx-auto">
        <tbody>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-b-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-b-4"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-600"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
          <tr>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300 !border-r-4"></td>
            <td className="w-[30px] h-[30px] !p-0 bg-red-300"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
            <td className="w-[30px] h-[30px] !p-0"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Appendix>
      <h3 className="mb-1">Card connections to clues</h3>
      <Table id="appendix-1">
        <thead>
          <tr>
            <th>Set</th>
            <th>Clue (number of cards)</th>
            <th>Connections</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>1</b>
            </td>
            <td>KISS (9)</td>
            <td>
              The rock <b>BAND</b> KISS, <b>BLOW</b> a kiss, <b>CHEF</b>'s kiss,
              kiss the <b>DIRT</b>, <b>FRENCH</b> kiss, KISS <b>RADIO</b>{' '}
              station, <b>SEAL</b> with a kiss, Keep It <b>SIMPLE</b> Stupid
              (K.I.S.S.), <b>STEAL</b> a kiss
            </td>
          </tr>
          <tr>
            <td>
              <b>1</b>
            </td>
            <td>AMTRAK (8)</td>
            <td>
              Amtrak's <b>CARDINAL</b> line, Amtrak <b>CASCADES</b> line,
              Amtrak's Texas <b>EAGLE</b> line, Amtrak's (various) <b>FLYER</b>{' '}
              lines, Amtrak's Silver <b>METEOR</b> line, Amtrak <b>PASSENGER</b>{' '}
              rail, Amtrak <b>TRAIN</b>s, Amtrak's <b>WOLVERINE</b> train
            </td>
          </tr>
          <tr>
            <td>
              <b>2</b>
            </td>
            <td>EMERGENCY (9)</td>
            <td>
              Emergency <b>BRAKE</b>, emergency <b>CARE</b>, emergency{' '}
              <b>EXIT</b>, emergency <b>LANDING</b>, emergency <b>NUMBER</b>,
              emergency <b>PLAN</b>, emergency <b>POWER</b>, emergency{' '}
              <b>ROOM</b>, <b>STATE</b> of emergency
            </td>
          </tr>
          <tr>
            <td>
              <b>2</b>
            </td>
            <td>DORY (8)</td>
            <td>
              Dory is an <b>ANIMATED</b> fish, “Just <b>KEEP</b> swimming” -
              Dory, Dory has <b>MEMORY</b> loss, Dory is a <b>REGAL</b> tang, “I
              shall call him <b>SQUISHY</b>” - Dory, Dory is traveling to{' '}
              <b>SYDNEY</b>, Dory is a Regal <b>TANG</b>, Dory speaks{' '}
              <b>WHALE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>3</b>
            </td>
            <td>YOUTUBE (9)</td>
            <td>
              YouTube <b>AWARDS</b>, YouTube <b>HANDLE</b>, YouTube{' '}
              <b>HISTORY</b>, YouTube <b>KIDS</b>, YouTube is a <b>PLATFORM</b>,
              YouTube <b>PREMIUM</b>, YouTube <b>REWIND</b>, <b>STREAMING</b> on
              YouTube, YouTube <b>STUDIO</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>3</b>
            </td>
            <td>ELECTRIC (8)</td>
            <td>
              Electric <b>CHAIR</b>, electric <b>FENCE</b>, <b>GENERAL</b>{' '}
              Electric, electric <b>GUITAR</b>, electric <b>LAMP</b>, electric{' '}
              <b>MOTOR</b>, <i>Do Androids Dream of Electric </i>
              <i>
                <b>SHEEP</b>
              </i>
              <i>?</i>, electric <b>SHOCK</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>4</b>
            </td>
            <td>BULL (9)</td>
            <td>
              Bull<b>DOG</b>, bull<b>DOZE</b>, bull<b>FROG</b>, bull<b>HORN</b>,
              bull <b>MARKET</b>, bull<b>NOSE</b>, bull<b>PEN</b>, <b>PIT</b>
              bull, <b>RIDE</b> a bull
            </td>
          </tr>
          <tr>
            <td>
              <b>4</b>
            </td>
            <td>FEELING (8)</td>
            <td>
              Feeling <b>BORED</b>, feeling <b>CROSS</b>, feeling <b>CUTE</b>,
              feeling <b>DIZZY</b>, <b>GUT</b> feeling, feeling <b>LUCKY</b>,
              feeling <b>SHY</b>, feeling <b>WORDS</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>5</b>
            </td>
            <td>OCEAN (9)</td>
            <td>
              <b>DROP</b> in the ocean, ocean <b>FLOOR</b>, ocean-<b>FRONT</b>,
              across the <b>POND</b> (ocean), ocean <b>SALT</b>, Ocean{' '}
              <b>SPRAY</b>, ocean <b>VIEW</b>, ocean <b>VOYAGE</b>, ocean{' '}
              <b>ZONE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>5</b>
            </td>
            <td>QUEEN (8)</td>
            <td>
              <b>DAIRY</b> queen, <b>DRAG</b> queen, <b>DRAMA</b> queen,{' '}
              <b>FAIRY</b> queen, queen-size <b>MATTRESS</b>, Freddie{' '}
              <b>MERCURY</b> of Queen, <b>PROM</b> queen, <b>PROMOTE</b> to a
              queen (chess)
            </td>
          </tr>
          <tr>
            <td>
              <b>6</b>
            </td>
            <td>APPLE (9)</td>
            <td>
              The <b>BIG</b> Apple, "Apple <b>BOTTOM</b> Jeans", <b>CRAB</b>apple, <b>EMPIRE</b> variety of apple,{' '}
              <b>GALA</b> variety of apple, apple<b>JACK</b>, Steve <b>JOBS</b>{' '}
              (Apple founder), <b>PINE</b>apple, apple<b>SAUCE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>6</b>
            </td>
            <td>RAY (8)</td>
            <td>
              Ray <b>CHARLES</b>, <b>DEATH</b> ray, ray <b>GUN</b>, ray of{' '}
              <b>HOPE</b>, ray of <b>LIGHT</b>, <b>STING</b>ray, rays are{' '}
              <b>STRAIGHT</b>, ray<b>TRACE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>7</b>
            </td>
            <td>ROYAL (9)</td>
            <td>
              Royal <b>DECREE</b>, royal <b>FAMILY</b>, royal <b>GUARD</b>,
              royal <b>ICING</b>, Royal <b>MAIL</b>, royal <b>NAVY</b>,{' '}
              <b>PRINCE</b> is a royal, Royal <b>RUMBLE</b>, royal{' '}
              <b>SOCIETY</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>7</b>
            </td>
            <td>SCARE (8)</td>
            <td>
              <b>ALARM</b> (synonym for scare), scare<b>CROW</b>,{' '}
              <b>FRIGHTEN</b> (synonym for scare), scare someone on{' '}
              <b>HALLOWEEN</b>, <b>JUMP</b>
              scare, scare <b>QUOTES</b>, scare <b>STIFF</b>, scare{' '}
              <b>TACTIC</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>8</b>
            </td>
            <td>DEEP (9)</td>
            <td>
              <b>ANKLE</b>-deep, deep <b>DISH</b> pizza, deep <b>END</b>, deep{' '}
              <b>FREEZE</b>, deep <b>FRY</b>, <b>PROFOUND</b> (synonym of deep),
              deep <b>SIX</b> (discard), <b>SKIN</b>-deep, deep <b>SPACE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>8</b>
            </td>
            <td>WEDDING (8)</td>
            <td>
              Wedding <b>CAKE</b>, wedding <b>FEAST</b>, <i>My Big Fat </i>
              <i>
                <b>GREEK</b>
              </i>
              <i> Wedding</i>, <i>The Wedding </i>
              <i>
                <b>MARCH</b>
              </i>
              , wedding <b>PRESENT</b>, wedding <b>RING</b>, <b>SHOTGUN</b>{' '}
              wedding, <i>The Wedding </i>
              <i>
                <b>SINGER</b>
              </i>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3 className="mt-2 mb-1">Clue connections to Red or Blue</h3>
      <Table id="appendix-2">
        <thead>
          <tr>
            <th>Team</th>
            <th>Connections</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Red</td>
            <td>
              <ul>
                <li>
                  <b>KISS</b> (prototypical color)
                </li>
                <li>
                  <b>EMERGENCY</b> signs are red
                </li>
                <li>
                  <b>YOUTUBE</b> (YouTube's logo and branding are red, and{' '}
                  <i>YouTube Premium</i> was previously known as{' '}
                  <i>YouTube Red</i>)
                </li>
                <li>
                  Red <b>BULL</b> (drink)
                </li>
                <li>
                  The Red <b>QUEEN</b> (from <i>Through the Looking-Glass</i>)
                </li>
                <li>
                  Red <b>APPLE</b> (prototypical color)
                </li>
                <li>
                  The Red <b>SCARE</b> (fear of communism)
                </li>
                <li>
                  The Red <b>WEDDING</b> (<i>Game of Thrones</i>)
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Blue</td>
            <td>
              <ul>
                <li>
                  <b>AMTRAK</b> (color of Amtrak's logo)
                </li>
                <li>
                  <b>DORY</b> (blue fish)
                </li>
                <li>
                  <b>ELECTRIC</b> blue (color)
                </li>
                <li>
                  <b>FEELING</b> blue (emotions)
                </li>
                <li>
                  Blue <b>OCEAN</b> (prototypical color)
                </li>
                <li>
                  Blu-<b>RAY</b> (pronounced “blue-ray”, type of DVD)
                </li>
                <li>
                  <b>ROYAL</b> blue (color)
                </li>
                <li>
                  <b>DEEP</b> Blue (chess computer)
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      #clues td:nth-child(1),
      #assassins td:nth-child(2),
      #assassins td:nth-child(3),
      #appendix-1 td:nth-child(1),
      #appendix-2 td:nth-child(1) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
