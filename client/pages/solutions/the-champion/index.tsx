import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-champion';
const ANSWER = `DIVINE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We note that this puzzle is about Magic: The Gathering, given that the
      title is "The Champion", the epithet of an iconic MtG character whose main
      story arc is on the Greek/Roman inspired plane, named Theros. Other clues
      include the section headers, "power", "toughness", "color", which are all
      attributes of MtG cards. We may also notice that there are some iconic MtG
      cards named, like "Swords to Plowshares", "Pacifism" and "Gods Willing"
      (also from Theros).
    </p>
    <p>
      Next, we will notice that the actual story told in this poem (which has
      been jumbled up) matches the story of the Iliad, with most books getting 1
      line. The biggest clues here are:
    </p>
    <ol>
      <li>The flavortext that calls out a "homeric epic".</li>
      <li>
        The line that starts "Sing:", which is the exact beginning of the Iliad.
      </li>
      <li>
        The lines talk about "the Champion" dying, but getting written into myth
        in exchange.
      </li>
      <li>
        A "pal" and how this "pal" intervenes, and eventually causes the
        Champion to fight.
      </li>
    </ol>
    <p>
      Looking up the Iliad in conjunction with "the Champion" will turn up the
      Theriad, the MtG in universe version of the Iliad. There are 16 cards with
      flavortext that refer to the Theriad - a quick{' '}
      <a href="https://scryfall.com/search?q=%28game%3Apaper%29+flavor%3Atheriad&amp;unique=cards&amp;as=grid&amp;order=name">
        Scryfall search
      </a>{' '}
      will turn them up.
    </p>
    <p>Therefore, we can realize:</p>
    <ol>
      <li>
        Although the sections are in order, lines in each section are out of
        order, and need to be reordered. We may ask ourselves what the starting
        order was.
      </li>
      <li>
        We realize the headers indicate the starting order, and that the first
        section has exact matches - there are pieces of the flavortext of the
        Theriad in each line in the first section.
      </li>
      <li>
        The further sections are power/toughness/color/card name, which can all
        be found exactly in the line except for card name, which has "oxen"
        instead of "ox".
      </li>
      <li>
        There are 16 lines in the first section, and the number of lines halves
        each time. Therefore we are constructing a bracket, and these creatures
        (except for Banishing Light, whose line tells us was banished) all
        fight. Banishing Light's opponent gets a bye.
      </li>
      <li>
        Some of these combats are inconclusive - either they bounce and neither
        dies, or both die. A closer reading of these lines will help us realize
        that there are additional MtG cards hiding in these lines. All cards are
        either combat tricks or removal spells, because there are too many MtG
        cards to look for otherwise.
      </li>
      <li>
        Some of these section headers (all of them except for card name and
        flavortext) are ambiguous. This is intentional, because these middle
        sections are just for confirmation that they have the right card winning
        the combat. To be additionally helpful, we break ties by the correct
        order in the solution. That is, if two creatures have power 3, the one
        that is listed first is the one whose line happens earlier in the Iliad.
      </li>
      <li>
        Now we have reordered based on the events of the Iliad and have a
        mapping from a line to a card, and turn our attention to the second
        piece of flavortext and the bracket.
      </li>
      <li>
        The bracket indexes into the flavortext of each card in the Theriad, as
        clued by "what's in the cards"
      </li>
      <li>
        This reveals the cluephrase,{' '}
        <Clue>ANSWER COSMOGONY CARD DENY THE BLANK.</Clue>
      </li>
      <li>
        Looking up the "cosmogony" as it relates to MtG flavortext, we find the
        card, "Deny the Divine", making <Answerize>{ANSWER}</Answerize> our
        answer.
      </li>
    </ol>
    <br />
    <Appendix>
      <h3>Filled Brackets</h3>
      <br />
      <Table
        className="table-fixed w-full text-right text-[85%]"
        noBorder={true}
      >
        <tbody>
          <tr>
            <td className="border-b border-black px-2 w-[20%]">
              Swordwise Centaur
              <br />
              (win by combat)
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Swordwise Centaur
              <br />
              (win, damage prevented by Boon of Safety)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="border-r border-b border-black px-2">
              Triton Shorethief
              <br />
              (loss by combat)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Swordwise Centaur
              <br />
              (loss)
            </td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="border-b border-black px-2">
              Pensive Minotaur
              <br />
              (win by combat)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Pensive Minotaur
              <br />
              (loss)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Bronze Sable
              <br />
              (loss by combat)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Felhide Minotaur
              <br />
              (loss, Hero's Downfall cast on self)
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Felhide Minotaur
              <br />
              (win)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Felhide Minotaur
              <br />
              (win, 5/6 from Crash the Ramparts)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Rotted Hulk
              <br />
              (loss, Pacifism cast on self)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Felhide Minotaur
              <br />
              (win, deathtouch and indestructible from Offer Immortality)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Traveling Philosopher
              <br />
              (loss by combat)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Silent Artisan
              <br />
              (loss, 3/5)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Silent Artisan
              <br />
              (win by combat)
            </td>
            <td></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">Yoked Ox</td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Cyclops of One-Eyed Pass
              <br />
              (loss)
            </td>
            <td></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Nessian Courser
              <br />
              (loss, 3/3)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Nessian Courser
              <br />
              (win, Gods Willing cast on self)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Yoked Ox
              <br />
              (win)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Borderland Minotaur
              <br />
              (loss, 5/2)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Yoked Ox
              <br />
              (win, 3/7 from Indomitable Might)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Yoked Ox
              <br />
              (win, is 4/8 due to Larger Than Life)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Yoked Ox
              <br />
              (win)
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Pheres-Band Centaurs
              <br />
              (bye)
            </td>
            <td></td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-b border-black px-2">
              Pheres-Band Centaurs
              <br />
              (loss, 3/7)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Disenchant
              <br />
              (loss)
            </td>
            <td className="border-r border-black"></td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Orekos Swiftclaw
              <br />
              (loss, Swords to Plowshares cast on self)
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-b border-black px-2">
              Orekos Swiftclaw
              <br />
              (win)
            </td>
            <td className="border-r border-black"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-black"></td>
            <td className="border-r border-b border-black px-2">
              Orekos Swiftclaw
              <br />
              (win, 7/5 from Invigorate)
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="border-r border-b border-black px-2">
              Great Hart
              <br />
              (loss, Lay Down Arms cast on self)
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Extraction from Flavortext</h3>
      <Table className="extract-table">
        <thead>
          <tr>
            <th>Card</th>
            <th>Flavortext</th>
            <th>Number from Bracket</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>
              <b>Entering... A Flavorful Starting Lineup</b>
            </td>
          </tr>
          <tr>
            <td>Swordwise Centaur</td>
            <td>
              The girl who would become the Ch<b>A</b>mpion of the Sun hacked
              furiously at the practice dummy. At last she stopped, breathing
              heavily, and looked up at her instructor. "So much anger," said
              the centaur. "I will teach you the ways of war, child. But first
              you must make peace with yourself."
            </td>
            <td>27</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Triton Shorethief</td>
            <td>
              At su<b>N</b>rise, the Champion and her companions awoke to find
              their supplies gone and Brygus, their sentry, dead. Carefully
              arranged piles of ornamental shells gave a clear warning: go no
              further.
            </td>
            <td>5</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Pensive Minotaur</td>
            <td>
              The Champion and her companion<b>S</b> marched through the night,
              but the battle was over before they arrived. In the middle of the
              carnage sat a solitary minotaur, lost in what seemed to the
              Champion to be thought.
            </td>
            <td>27</td>
            <td>S</td>
          </tr>
          <tr>
            <td>Bronze Sable</td>
            <td>
              The Champion stood alone bet<b>W</b>een the horde of the Returned
              and the shrine to Karametra, cutting down scores among hundreds.
              She would have been overcome if not for the aid of the temple
              guardians whom Karametra awakened.
            </td>
            <td>25</td>
            <td>W</td>
          </tr>
          <tr>
            <td>Felhide Minotaur</td>
            <td>
              With sp<b>E</b>ar held high, the Champion came to meet Thyrogog of
              the Ashlands, who wore the old king's skin as a cloak and fed on
              the flesh of innocents. The foul minotaur raised the great axe
              called Goremaster and charged.
            </td>
            <td>7</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Rotted Hulk</td>
            <td>
              The hulk rose f<b>R</b>om the sea and loomed over the Champion.
              Pinned beneath the twisting, rotted planks of wood was the body of
              Kaliaros, the helmsman of her former crew, and beside him the
              captain, Photine.
            </td>
            <td>13</td>
            <td>R</td>
          </tr>
          <tr>
            <td>Traveling Philosopher</td>
            <td>
              The <b>C</b>hampion and the philosopher Olexa returned from the
              opposing camp at dusk. Behind them, the enemy raised sail and
              departed, breaking the siege. When asked what the two had done,
              the Champion replied, "We spoke to them."
            </td>
            <td>4</td>
            <td>C</td>
          </tr>
          <tr>
            <td>Silent Artisan</td>
            <td>
              On the fourth day they passed through a forest of immense stacked
              stones. Althemone, youngest of the companions, called these
              pillars the work of a god, but the Champion knew better. She
              quickened her pace.
            </td>
            <td>1</td>
            <td>O</td>
          </tr>
          <tr>
            <td>Cyclops of One-Eyed Pass</td>
            <td>
              The Champion armed her<b>S</b>elf to face the cyclops, heedless of
              her companions' despair. "How will you defeat it with only one
              spear?" asked young Althemone. The Champion raised her weapon. "It
              has but one eye."
            </td>
            <td>20</td>
            <td>S</td>
          </tr>
          <tr>
            <td>Nessian Courser</td>
            <td>
              Khestes the Ada<b>M</b>ant, the Champion's closest ally among the
              centaurs, took one stone to his shoulder and another to his flank.
              He held his stride and his aim, and let fly the arrow that killed
              the giant Grinthax.
            </td>
            <td>14</td>
            <td>M</td>
          </tr>
          <tr>
            <td>Borderland Minotaur</td>
            <td>
              "Y<b>O</b>u have led us to triumph over the forces of Mogis!" said
              Brygus the Brave, clapping the Champion on the back. The Champion
              wiped the sweat and blood from her brow. "I count eight graves,"
              she said. "Too many to call this a victory."
            </td>
            <td>2</td>
            <td>O</td>
          </tr>
          <tr>
            <td>Yoked Ox</td>
            <td>
              It was in fields of <b>G</b>rain, not fields of battle, that the
              Champion learned to bear the yoke of duty to the gods. She worked
              the land long before she was called on to defend it.
            </td>
            <td>16</td>
            <td>G</td>
          </tr>
          <tr>
            <td>Pheres-Band Centaurs</td>
            <td>
              P<b>O</b>ets speak of your unrivaled speed," the Champion said to
              the assembled centaurs, "but it is plain to see that your true
              strength lies in your unwavering loyalty to one another.
            </td>
            <td>2</td>
            <td>O</td>
          </tr>
          <tr>
            <td>Disenchant</td>
            <td>
              The Champio<b>N</b> reached for a stone, and Heliod placed the sun
              into her hand.
            </td>
            <td>11</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Orekos Swiftclaw</td>
            <td>
              After the Battle of Pharagax Bridge, the Champion spent man
              <b>Y</b> months among the leonin of Oreskos. She found that they
              were quick to take offense, not because they were thin-skinned,
              but because they were always eager for a fight.
            </td>
            <td>50</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>Great Hart</td>
            <td>
              The great hart stood like a statue, its hide painted gold by the
              dawn. The <b>C</b>hampion laid down her weapons and stepped
              forward within an arm's length of the beast. The hart, sacred to
              Heliod and bathed in the god's own light, bowed to the Champion,
              marking her as the Chosen of the Sun God.
            </td>
            <td>59</td>
            <td>C</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <b>Match: Power</b>
            </td>
          </tr>
          <tr>
            <td>Swordwise Centaur</td>
            <td>
              The girl who would become the Ch<b>A</b>mpion of the Sun hacked
              furiously at the practice dummy. At last she stopped, breathing
              heavily, and looked up at her instructor. "So much anger," said
              the centaur. "I will teach you the ways of war, child. But first
              you must make peace with yourself."
            </td>
            <td>27</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Pensive Minotaur</td>
            <td>
              The Champion and he<b>R</b> companions marched through the night,
              but the battle was over before they arrived. In the middle of the
              carnage sat a solitary minotaur, lost in what seemed to the
              Champion to be thought.
            </td>
            <td>17</td>
            <td>R</td>
          </tr>
          <tr>
            <td>Felhide Minotaur</td>
            <td>
              With spear hel<b>D </b>high, the Champion came to meet Thyrogog of
              the Ashlands, who wore the old king's skin as a cloak and fed on
              the flesh of innocents. The foul minotaur raised the great axe
              called Goremaster and charged.
            </td>
            <td>13</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Silent Artisan</td>
            <td>
              On the fourth <b>D</b>ay they passed through a forest of immense
              stacked stones. Althemone, youngest of the companions, called
              these pillars the work of a god, but the Champion knew better. She
              quickened her pace.
            </td>
            <td>12</td>
            <td>D</td>
          </tr>
          <tr>
            <td>Nessian Courser</td>
            <td>
              Kh<b>E</b>stes the Adamant, the Champion's closest ally among the
              centaurs, took one stone to his shoulder and another to his flank.
              He held his stride and his aim, and let fly the arrow that killed
              the giant Grinthax.
            </td>
            <td>3</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Yoked Ox</td>
            <td>
              It was i<b>N</b> fields of grain, not fields of battle, that the
              Champion learned to bear the yoke of duty to the gods. She worked
              the land long before she was called on to defend it.
            </td>
            <td>7</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Pheres-Band Centaurs</td>
            <td>
              Poets speak of <b>Y</b>our unrivaled speed," the Champion said to
              the assembled centaurs, "but it is plain to see that your true
              strength lies in your unwavering loyalty to one another.
            </td>
            <td>13</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>Orekos Swiftclaw</td>
            <td>
              Af<b>T</b>er the Battle of Pharagax Bridge, the Champion spent
              many months among the leonin of Oreskos. She found that they were
              quick to take offense, not because they were thin-skinned, but
              because they were always eager for a fight.
            </td>
            <td>3</td>
            <td>T</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <b>Match: Color</b>
            </td>
          </tr>
          <tr>
            <td>Swordwise Centaur</td>
            <td>
              T<b>H</b>e girl who would become the Champion of the Sun hacked
              furiously at the practice dummy. At last she stopped, breathing
              heavily, and looked up at her instructor. "So much anger," said
              the centaur. "I will teach you the ways of war, child. But first
              you must make peace with yourself."
            </td>
            <td>2</td>
            <td>H</td>
          </tr>
          <tr>
            <td>Felhide Minotaur</td>
            <td>
              With sp<b>E</b>ar held high, the Champion came to meet Thyrogog of
              the Ashlands, who wore the old king's skin as a cloak and fed on
              the flesh of innocents. The foul minotaur raised the great axe
              called Goremaster and charged.
            </td>
            <td>7</td>
            <td>E</td>
          </tr>
          <tr>
            <td>Yoked Ox</td>
            <td>
              It was in fields of grain, not fields of <b>B</b>attle, that the
              Champion learned to bear the yoke of duty to the gods. She worked
              the land long before she was called on to defend it.
            </td>
            <td>32</td>
            <td>B</td>
          </tr>
          <tr>
            <td>Orekos Swiftclaw</td>
            <td>
              After the Batt<b>L</b>e of Pharagax Bridge, the Champion spent
              many months among the leonin of Oreskos. She found that they were
              quick to take offense, not because they were thin-skinned, but
              because they were always eager for a fight.
            </td>
            <td>13</td>
            <td>L</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <b>Match: Toughness</b>
            </td>
          </tr>
          <tr>
            <td>Felhide Minotaur</td>
            <td>
              With spe<b>A</b>r held high, the Champion came to meet Thyrogog of
              the Ashlands, who wore the old king's skin as a cloak and fed on
              the flesh of innocents. The foul minotaur raised the great axe
              called Goremaster and charged.
            </td>
            <td>8</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Yoked Ox</td>
            <td>
              It was i<b>N</b> fields of grain, not fields of battle, that the
              Champion learned to bear the yoke of duty to the gods. She worked
              the land long before she was called on to defend it.
            </td>
            <td>7</td>
            <td>N</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <b>Match: Name</b>
            </td>
          </tr>
          <tr>
            <td>Yoked Ox</td>
            <td>
              It was in fields of grain, not fields of battle, that the Champion
              learned to bear the yo<b>K</b>e of duty to the gods. She worked
              the land long before she was called on to defend it.
            </td>
            <td>71</td>
            <td>K</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>

    <style jsx global>{`
      .extract-table td:nth-child(2) {
        font-size: 85%;
      }
      .extract-table td:nth-child(2) b {
        color: red;
      }
      .extract-table td:nth-child(n + 3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
