import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'deposit-at-the-word-bank';
const ANSWER = `TIRES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We see a group of four receipts containing crossword clues. When we solve
      each receipt we will start to notice there are anagrams of words (using
      the same letter bank) found on each of the three receipts.
    </p>

    <p>First receipt solutions:</p>
    <Monospace>
      <table className="answer-table">
        <tbody>
          <tr>
            <td>ASHEN</td>
            <td>=</td>
            <td>PALE</td>
          </tr>
          <tr>
            <td>NAYS</td>
            <td>=</td>
            <td>NOES</td>
          </tr>
          <tr>
            <td>WICKED</td>
            <td>=</td>
            <td>EVIL</td>
          </tr>
          <tr>
            <td>CLIMB</td>
            <td>=</td>
            <td>ASCENT</td>
          </tr>
          <tr>
            <td>SCOWL</td>
            <td>=</td>
            <td>GLARE</td>
          </tr>
          <tr>
            <td>SEVERAL WILDEBEEST</td>
            <td>=</td>
            <td>GNUS</td>
          </tr>
          <tr>
            <td>MOLD</td>
            <td>=</td>
            <td>CAST</td>
          </tr>
          <tr>
            <td>ROLE</td>
            <td>=</td>
            <td>PART</td>
          </tr>
          <tr>
            <td>CRAFTSY</td>
            <td>=</td>
            <td>ARTSY</td>
          </tr>
          <tr>
            <td>STICKS IN THE MUD</td>
            <td>=</td>
            <td>MIRES</td>
          </tr>
          <tr>
            <td>VERILY</td>
            <td>=</td>
            <td>AMEN</td>
          </tr>
          <tr>
            <td>AIMED HIGH</td>
            <td>=</td>
            <td>ASPIRED</td>
          </tr>
          <tr>
            <td>AGO</td>
            <td>=</td>
            <td>PAST</td>
          </tr>
          <tr>
            <td>SIESTAS</td>
            <td>=</td>
            <td>NAPS</td>
          </tr>
          <tr>
            <td>KITCHEN SURFACES</td>
            <td>=</td>
            <td>COUNTERS</td>
          </tr>
          <tr>
            <td>COUNT CALORIES</td>
            <td>=</td>
            <td>DIET</td>
          </tr>
          <tr>
            <td>TROT</td>
            <td>=</td>
            <td>CANTER</td>
          </tr>
          <tr>
            <td>ARTICLE OR THING</td>
            <td>=</td>
            <td>ITEM</td>
          </tr>
          <tr>
            <td>LEMONS' PARTNERS</td>
            <td>=</td>
            <td>LIMES</td>
          </tr>
          <tr>
            <td>FARM STORAGE</td>
            <td>=</td>
            <td>SILO</td>
          </tr>
          <tr>
            <td>EARNS</td>
            <td>=</td>
            <td>NETS</td>
          </tr>
          <tr>
            <td>PENNIES</td>
            <td>=</td>
            <td>COINS</td>
          </tr>
          <tr>
            <td>DINED</td>
            <td>=</td>
            <td>ATE</td>
          </tr>
          <tr>
            <td>SMALL BITES</td>
            <td>=</td>
            <td>NIPS</td>
          </tr>
        </tbody>
      </table>
    </Monospace>
    <p>Second receipt solutions:</p>
    <Monospace>
      <table className="answer-table">
        <tbody>
          <tr>
            <td>AGOG</td>
            <td>=</td>
            <td>RAPT</td>
          </tr>
          <tr>
            <td>BIG</td>
            <td>=</td>
            <td>LARGE</td>
          </tr>
          <tr>
            <td>COSINE RECIPROCAL</td>
            <td>=</td>
            <td>SECANT</td>
          </tr>
          <tr>
            <td>DABS</td>
            <td>=</td>
            <td>PATS</td>
          </tr>
          <tr>
            <td>DIRT</td>
            <td>=</td>
            <td>SOIL</td>
          </tr>
          <tr>
            <td>FAUN</td>
            <td>=</td>
            <td>SATYR</td>
          </tr>
          <tr>
            <td>FELINES</td>
            <td>=</td>
            <td>CATS</td>
          </tr>
          <tr>
            <td>FIREARMS</td>
            <td>=</td>
            <td>GUNS</td>
          </tr>
          <tr>
            <td>GREEK LETTER</td>
            <td>=</td>
            <td>ETA</td>
          </tr>
          <tr>
            <td>HEIR</td>
            <td>=</td>
            <td>SCION</td>
          </tr>
          <tr>
            <td>HONEY SOURCE</td>
            <td>=</td>
            <td>NECTAR</td>
          </tr>
          <tr>
            <td>HORSE HAIR</td>
            <td>=</td>
            <td>MANE</td>
          </tr>
          <tr>
            <td>LOSE HOPE</td>
            <td>=</td>
            <td>DESPAIR</td>
          </tr>
          <tr>
            <td>NARRATES</td>
            <td>=</td>
            <td>RECOUNTS</td>
          </tr>
          <tr>
            <td>NEAP</td>
            <td>=</td>
            <td>TIDE</td>
          </tr>
          <tr>
            <td>ON AIR</td>
            <td>=</td>
            <td>LIVE</td>
          </tr>
          <tr>
            <td>OOZE</td>
            <td>=</td>
            <td>SLIME</td>
          </tr>
          <tr>
            <td>SCROOGE</td>
            <td>=</td>
            <td>MISER</td>
          </tr>
          <tr>
            <td>SECURITY CODES</td>
            <td>=</td>
            <td>PINS</td>
          </tr>
          <tr>
            <td>SKILLETS</td>
            <td>=</td>
            <td>PANS</td>
          </tr>
          <tr>
            <td>SNOUT</td>
            <td>=</td>
            <td>NOSE</td>
          </tr>
          <tr>
            <td>SPECK</td>
            <td>=</td>
            <td>MITE</td>
          </tr>
          <tr>
            <td>TOLL</td>
            <td>=</td>
            <td>PEAL</td>
          </tr>
          <tr>
            <td>TRANSMITTED</td>
            <td>=</td>
            <td>SENT</td>
          </tr>
        </tbody>
      </table>
    </Monospace>
    <p>Third receipt solutions:</p>
    <Monospace>
      <table className="answer-table">
        <tbody>
          <tr>
            <td>ARIAS</td>
            <td>=</td>
            <td>SOLI</td>
          </tr>
          <tr>
            <td>BREW</td>
            <td>=</td>
            <td>TEA</td>
          </tr>
          <tr>
            <td>ENTREATY</td>
            <td>=</td>
            <td>PLEA</td>
          </tr>
          <tr>
            <td>EVEN SCORE</td>
            <td>=</td>
            <td>TIED</td>
          </tr>
          <tr>
            <td>FROSTS</td>
            <td>=</td>
            <td>RIMES</td>
          </tr>
          <tr>
            <td>GRIN</td>
            <td>=</td>
            <td>SMILE</td>
          </tr>
          <tr>
            <td>HOUR</td>
            <td>=</td>
            <td>TIME</td>
          </tr>
          <tr>
            <td>JACKS' NEIGHBORS</td>
            <td>=</td>
            <td>TENS</td>
          </tr>
          <tr>
            <td>LOSE IT</td>
            <td>=</td>
            <td>SNAP</td>
          </tr>
          <tr>
            <td>NAMED HEDGEHOG</td>
            <td>=</td>
            <td>SONIC</td>
          </tr>
          <tr>
            <td>NAPPIES</td>
            <td>=</td>
            <td>DIAPERS</td>
          </tr>
          <tr>
            <td>POSITION</td>
            <td>=</td>
            <td>STANCE</td>
          </tr>
          <tr>
            <td>ROUTS</td>
            <td>=</td>
            <td>TROUNCES</td>
          </tr>
          <tr>
            <td>SHOO</td>
            <td>=</td>
            <td>SCAT</td>
          </tr>
          <tr>
            <td>SHROUD</td>
            <td>=</td>
            <td>VEIL</td>
          </tr>
          <tr>
            <td>SINGLES</td>
            <td>=</td>
            <td>ONES</td>
          </tr>
          <tr>
            <td>SNARE</td>
            <td>=</td>
            <td>TRAP</td>
          </tr>
          <tr>
            <td>STATELY</td>
            <td>=</td>
            <td>REGAL</td>
          </tr>
          <tr>
            <td>STUPOR</td>
            <td>=</td>
            <td>TRANCE</td>
          </tr>
          <tr>
            <td>TIFF</td>
            <td>=</td>
            <td>SPAT </td>
          </tr>
          <tr>
            <td>TITLE</td>
            <td>=</td>
            <td>NAME</td>
          </tr>
          <tr>
            <td>TWIRL</td>
            <td>=</td>
            <td>SPIN</td>
          </tr>
          <tr>
            <td>VOICED MELODICALLY</td>
            <td>=</td>
            <td>SUNG</td>
          </tr>
          <tr>
            <td>WANDER</td>
            <td>=</td>
            <td>STRAY</td>
          </tr>
        </tbody>
      </table>
    </Monospace>
    <p>
      The fourth receipt is blank, suggesting that we look for a fourth anagram
      for each word. Taking the order from the first receipt, we will find the
      following fourth words:
    </p>
    <Monospace>
      <table className="answer-table">
        <tbody>
          <tr>
            <td>PALE, PEAL, PLEA</td>
            <td>=</td>
            <td>LEAP</td>
          </tr>
          <tr>
            <td>NOES, NOSE, ONES</td>
            <td>=</td>
            <td>EONS</td>
          </tr>
          <tr>
            <td>EVIL, LIVE, VEIL</td>
            <td>=</td>
            <td>VILE</td>
          </tr>
          <tr>
            <td>ASCENT, SECANT, STANCE</td>
            <td>=</td>
            <td>ENACTS</td>
          </tr>
          <tr>
            <td>GLARE, LARGE, REGAL</td>
            <td>=</td>
            <td>LAGER</td>
          </tr>
          <tr>
            <td>GNUS, GUNS, SUNG</td>
            <td>=</td>
            <td>SNUG</td>
          </tr>
          <tr>
            <td>CAST, CATS, SCAT</td>
            <td>=</td>
            <td>ACTS </td>
          </tr>
          <tr>
            <td>PART, RAPT, TRAP</td>
            <td>=</td>
            <td>TARP</td>
          </tr>
          <tr>
            <td>ARTSY, SATYR, STRAY</td>
            <td>=</td>
            <td>TRAYS</td>
          </tr>
          <tr>
            <td>MIRES, MISER, RIMES</td>
            <td>=</td>
            <td>EMIRS</td>
          </tr>
          <tr>
            <td>AMEN, MANE, NAME</td>
            <td>=</td>
            <td>MEAN</td>
          </tr>
          <tr>
            <td>ASPIRED, DESPAIR, DIAPERS</td>
            <td>=</td>
            <td>PRAISED</td>
          </tr>
          <tr>
            <td>PAST, PATS, SPAT</td>
            <td>=</td>
            <td>TAPS</td>
          </tr>
          <tr>
            <td>NAPS, PANS, SNAP</td>
            <td>=</td>
            <td>SPAN</td>
          </tr>
          <tr>
            <td>COUNTERS, RECOUNTS, TROUNCES</td>
            <td>=</td>
            <td>CONSTRUE</td>
          </tr>
          <tr>
            <td>DIET, TIDE, TIED</td>
            <td>=</td>
            <td>EDIT</td>
          </tr>
          <tr>
            <td>CANTER, NECTAR, TRANCE</td>
            <td>=</td>
            <td>RECANT</td>
          </tr>
          <tr>
            <td>ITEM, MITE, TIME</td>
            <td>=</td>
            <td>EMIT</td>
          </tr>
          <tr>
            <td>LIMES, SLIME, SMILE</td>
            <td>=</td>
            <td>MILES</td>
          </tr>
          <tr>
            <td>SILO, SOIL, SOLI</td>
            <td>=</td>
            <td>OILS</td>
          </tr>
          <tr>
            <td>NETS, SENT, TENS</td>
            <td>=</td>
            <td>NEST</td>
          </tr>
          <tr>
            <td>COINS, SCION, SONIC</td>
            <td>=</td>
            <td>ICONS</td>
          </tr>
          <tr>
            <td>ATE, ETA, TEA</td>
            <td>=</td>
            <td>EAT</td>
          </tr>
          <tr>
            <td>NIPS, PINS, SPIN</td>
            <td>=</td>
            <td>SNIP</td>
          </tr>
        </tbody>
      </table>
    </Monospace>
    <p>
      The first letters of these new words spell{' '}
      <Clue>LEVELS, ATTEMPTS, CEREMONIES</Clue>, which clue three new words,{' '}
      <Clue>TIERS, TRIES, RITES</Clue>. The fourth word for this set is{' '}
      <Answerize>{ANSWER}</Answerize>, which is our answer.
    </p>
    <style jsx global>{`
      .answer-table {
        margin-left: auto;
        margin-right: auto;
      }
      .answer-table tr td:nth-child(1) {
        text-align: right;
      }
      .answer-table tr td:nth-child(2) {
        padding: 0px 10px;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
