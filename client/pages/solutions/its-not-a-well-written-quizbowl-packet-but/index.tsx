import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'its-not-a-well-written-quizbowl-packet-but';
const ANSWER = `A CRYSTAL AGE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      This puzzle is presented as a quizbowl packet. Each tossup question is
      about one specific subject as a whole. However, 2 lines in the tossup
      have another valid answer. For instance, although Zeus is described as the
      father of Aphrodite in the Iliad, alternate sources (e.g., Hesiod's
      <i>Theogony</i>) give Uranus instead. We should identify all figures clued.
      Each figure is in alphabetical order internally, and the Greek gods who are
      the primary subject of each tossup are also in alphabetical order in this
      packet. Enumerations for each of the three deities are given in the last
      line as the "points value". The "team composition" flags at the end of the
      packet indicate the number of figures from each mythology as a checksum
      (Chinese, Egyptian, Greece, Hindu, Irish, Japanese, Aztec and Mayan (via
      Mexico), Norse, and Hurrian).
    </p>
    <p>
      Next, we must answer linked bonus questions about the figures in question.
      Each bonus question is valid for some or all of the figures previously
      identified in the tossup question. The number of figures is indicated by
      the amount of question marks. The 7 toss-up questions are alphabetical by
      their primary Greek figure, and the 3 mythical figures within each
      individual toss-up questions are also alphabetical. This hints that we
      should alphabetize our bonus answers as well. One question mark in each
      set is bolded. Taking the point value of the bonus question as an index
      into the indicated answer and sorting gives{' '}
      <Clue>W H HUDSONS UTOPIAN NOVEL</Clue>.
      The novel in question and the answer to the puzzle is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <h3>Detailed answers</h3>
      <br />
      <Table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <b>Tossup 1 - ACHILLES</b>
            </td>
          </tr>
          <tr>
            <td>
              To prevent this hero from joining the Trojan War, he was hidden at
              Skyros where he had an affair with Deidamia and fathered
              Neoptolemus.
            </td>
            <td>ACHILLES EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              This hero who, as a child, received a prophecy that his life would
              be glorious but short, was the greatest warrior in a war where he
              tragically loses his beloved companion.
            </td>
            <td>CUCHULAINN (Irish, Tain Bo Cuailgne)</td>
          </tr>
          <tr>
            <td>
              This mostly invulnerable figure died by an arrow shot into his
              foot.
            </td>
            <td>KRISHNA (Hindu, Mahabharata)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 8</b>
              <br />
              For 6 points, what deity did this figure fight during the war?
              <b>?</b>
            </td>
            <td>
              MORRIGAN/<b>SCAMANDER</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 13</b>
              <br />
              For 1 point, this figure participated on which side of a war?
              <b>?</b>?
            </td>
            <td>
              GREEK/<b>PANDAVAS</b>/ULSTER
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 21</b>
              <br />
              For 1 point, who is this hero's fully divine parent
              <b>?</b>?
            </td>
            <td>
              <b>LUGUS</b>/THETIS
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 2 - APOLLO</b>
            </td>
          </tr>
          <tr>
            <td>
              When a musical challenge between a satyr and this god ended in a
              tie, he refused to accept the outcome and set another challenge
              to play their instruments upside down, which his opponent was
              unable to do on a wind instrument
            </td>
            <td>
              APOLLO EXCLUSIVE (The satyr is Marsyas, who lost and was flayed by
              Apollo as punishment.)
            </td>
          </tr>
          <tr>
            <td>
              One of this deity's lovers was granted a long life without eternal
              youth, dooming them to grow shrunken and withered in their old
              age.
            </td>
            <td>
              EOS (Greek. Apollo's ill-fated lover is the Sibyl of Cumae, as
              recounted in Ovid's Metamorphoses)
            </td>
          </tr>
          <tr>
            <td>
              This serpent slaying god and the brother of a moon deity was
              briefly banished to Earth after an act of murder.
            </td>
            <td>SUSANO'O (Japanese, Kojiki)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 6</b>
              <br />
              For 1 point, who is this figure's closest sister??
              <b>?</b>
            </td>
            <td>
              AMATERASU/ARTEMIS/<b>SELENE</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 12</b>
              <br />
              For 8 points, what is the name of the serpent slain by this god?
              <b>?</b>
            </td>
            <td>
              PYTHON/<b>YAMATA NO OROCHI</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 15</b>
              <br />
              For 1 point, what male figure received this god during his exile
              on earth<b>?</b>?{' '}
            </td>
            <td>
              <b>ADMETUS</b>/ASHINAZUCHI
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 3 - ATHENA</b>
            </td>
          </tr>
          <tr>
            <td>
              This goddess wanted to grant immortality to a favored member of
              the Seven Against Thebes but decided against the blessing after
              watching him eat his enemy's brains.{' '}
            </td>
            <td>ATHENA EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              This war deity who was born as a fully armored adult was the
              patron of a major city of their culture.
            </td>
            <td>HUITZILOPOCHTLI (Aztec, Codex Ramirez)</td>
          </tr>
          <tr>
            <td>
              This deity of war and wisdom who frequently carries a severed head
              is a frequent helper of mortal heroes, such as matching a
              monsterslayer to a mystical horse and giving dragonslaying tips,
              but also once showed up in disguise to a battlefield to ensure
              that a hero loses his weapon and dies.
            </td>
            <td>ODIN (Norse/Germanic, Volsung Saga)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 10</b>
              <br />
              For 3 points, what serpentine figure is part of this deity's
              armament?<b>?</b>{' '}
            </td>
            <td>
              MEDUSA/<b>XIUHCOATL</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 19</b>
              <br />
              For 3 points, what flesh-eating bird is the symbol of this deity??
              <b>?</b>
            </td>
            <td>
              EAGLE/OWL/<b>RAVEN</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 20</b>
              <br />
              For 6 points, what is the most famous temple dedicated to this
              deity that is now located within a UNESCO World Heritage site in
              their central city<b>?</b>?
            </td>
            <td>
              <b>PARTHENON</b>/TEMPLO MAYOR
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 4 - DEMETER</b>
            </td>
          </tr>
          <tr>
            <td>
              This goddess turned the Sirens into half-bird monsters because
              they were her daughter's companions but did not help search for
              her after her abduction.
            </td>
            <td>DEMETER EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              To thank a queen who offered her hospitality, this goddess
              attempted to grant her son immortality, but could not
              complete the ritual because the queen disrupted it.
            </td>
            <td>ISIS (Egyptian, Moralia)</td>
          </tr>
          <tr>
            <td>
              This goddess commanded a dangerous spirit to entangle with and
              cause the downfall of a mortal king who profaned her sanctuary.
            </td>
            <td>NUGUA (Chinese, Investiture of the Gods)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 1</b>
              <br />
              For 3 points, what spacecraft visited a dwarf planet named for
              this goddess's Roman counterpart<b>?</b>
            </td>
            <td>
              <b>DAWN</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 4</b>
              <br />
              For 2 points, who is this goddess's husband<b>?</b>?
            </td>
            <td>
              <b>FUXI</b>/OSIRIS
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 18</b>
              <br />
              For 2 points, which child is this goddess most protective of
              <b>?</b>?
            </td>
            <td>
              <b>HORUS</b>/PERSEPHONE
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 5 - HERACLES</b>
            </td>
          </tr>
          <tr>
            <td>
              This Argonaut who was capable of rowing the boat by himself left
              the journey at Mysia to search for a companion who had been
              abducted by nymphs.
            </td>
            <td>HERACLES EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              In one story, this son of Zeus rescued a princess who Poseidon
              demanded as a sacrifice due to her parent's offence.
            </td>
            <td>
              PERSEUS (Greek, various, but mainly Biblioteca and Metamorphoses.
              Heracles rescued Hesione after her father, King Laomedon of Troy,
              refused to pay Apollo and Poseidon for building the walls of
              Troy.)
            </td>
          </tr>
          <tr>
            <td>
              This paragon of heroic strength who is commonly depicted with an
              iconic blunt weapon and once crossdressed while that weapon was in
              the possession of a ruler famously killed a serpent whose venom
              eventually killed him in turn.
            </td>
            <td>THOR (Norse, Prose and Poetic Eddas)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 5</b>
              <br />
              For 3 points, what is the name of the princess who was nearly
              eaten by Cetus<b>?</b>?
            </td>
            <td>
              <b>ANDROMEDA</b>/HESIONE
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 9</b>
              <br />
              For 4 points, what is the last name of the actor who played the
              Marvel Cinematic Universe's take on this figure?<b>?</b>
            </td>
            <td>
              GOLDSTEIN/<b>HEMSWORTH</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 17</b>
              <br />
              For 4 points, this figure wrestled what personification of an
              aspect of life?<b>?</b>
            </td>
            <td>
              ELLI/<b>THANATOS</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 6 - MEDEA</b>
            </td>
          </tr>
          <tr>
            <td>
              When this figure's husband intended to marry another princess, she
              gifted poisoned clothing and killed a member of that love
              triangle.
            </td>
            <td>
              DEIANEIRA (Greek, various. Deianeira was tricked into giving
              Heracles a shirt drenched with the blood of Nessus, which became
              poisoned when Heracles killed him with arrows dipped in Hydra
              venom.)
            </td>
          </tr>
          <tr>
            <td>
              When Theseus arrived in Athens, this figure persuaded Aegeus that
              the young hero was a threat and to poison him in an attempt to
              preserve her position in court.
            </td>
            <td>MEDEA EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              To ensure the death of a ruler who had wronged a loved one, this
              figure demonstrated that they can kill, cut up, and revive a
              living creature but refused to perform the ritual again when
              requested, leaving them not revived - fulfilling their revenge.
            </td>
            <td>XBALANQUE (Mayan, Popul Vuh)</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 7</b>
              <br />
              For 2 points, the unperformed resurrection killed a lord of what
              location<b>?</b>?
            </td>
            <td>
              <b>IOLCUS</b>/XIBALBA
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 14</b>
              <br />
              For 1 point, who was the other woman in this figure's marriage?
              <b>?</b>
            </td>
            <td>
              CREUSA<b>/IOLE </b>(Note: Glauce is also cited as the name of
              Jason's intended second wife. Both are alphabetically before Iole
              so it doesn't matter.)
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 16</b>
              <br />
              For 3 points, which brother did this figure cut apart?<b>?</b>
            </td>
            <td>
              APSYRTUS/<b>HUNAHPU</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Tossup 7 - ZEUS</b>
            </td>
          </tr>
          <tr>
            <td>
              This storm god defeated his parent, who tried to eat him at his
              birth but was tricked into eating a rock and not this eventual
              chief god of his pantheon.
            </td>
            <td>TESHUB (Hurrian/Hittite, Kingship in Heaven)</td>
          </tr>
          <tr>
            <td>This figure fathered Aphrodite.</td>
            <td>
              URANUS (Greek, Theogony. Zeus as Aphrodite's father by Dione comes
              from the Iliad)
            </td>
          </tr>
          <tr>
            <td>
              For the crime of stealing fire and giving it to humanity, this god
              sentenced Prometheus to being chained to a rock and having his
              liver eaten eternally by an eagle.
            </td>
            <td>ZEUS EXCLUSIVE</td>
          </tr>
          <tr>
            <td>
              <b>Bonus 2</b>
              <br />
              For 1 point, what is the last name of the astronomer who named the
              largest moon of the planet associated with this god
              <b>?</b>?{' '}
            </td>
            <td>
              {' '}
              <b>HERSCHEL</b>/MARIUS
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 3</b>
              <br />
              For 2 points, who is this figure's mother??<b>?</b>
            </td>
            <td>
              GAEA/KUMARBI/<b>RHEA</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bonus 11</b>
              <br />
              For 5 points, who is this figure's (primary) consort?
              <b>?</b>?
            </td>
            <td>
              GAEA/<b>HEBAT</b>/HERA
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Resorted bonuses with extracted letters</h3>
      <br />
      <Table className="extract-table">
        <thead>
          <tr>
            <th>Bonus</th>
            <th>Question</th>
            <th>Indicated Answer</th>
            <th>Points (index)</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              What spacecraft visited a dwarf planet named for this goddess's
              Roman counterpart<b>?</b>
            </td>
            <td>DAWN</td>
            <td>3</td>
            <td>W</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              What is the last name of the astronomer who named the largest moon
              of the planet named for this god<b>?</b>?
            </td>
            <td>
              <b>HERSCHEL / </b>MARIUS
            </td>
            <td>1</td>
            <td>H</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Who is this figure's mother??<b>?</b>
            </td>
            <td>
              GAEA / KUMARBI / <b>RHEA</b>
            </td>
            <td>2</td>
            <td>H</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Who is this goddess's husband<b>?</b>?
            </td>
            <td>
              <b>FUXI</b> / OSIRIS
            </td>
            <td>2</td>
            <td>U</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              What is the name of the princess who was nearly eaten by Cetus
              <b>?</b>?
            </td>
            <td>
              <b>ANDROMEDA</b> / HESIONE
            </td>
            <td>3</td>
            <td>D</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              Who is this figure's closest sister??<b>?</b>
            </td>
            <td>
              AMATERASU / ARTEMIS / <b>SELENE</b>
            </td>
            <td>1</td>
            <td>S</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              The unperformed resurrection killed a lord of what location
              <b>?</b>?
            </td>
            <td>
              <b>IOLCUS</b> / XIBALBA
            </td>
            <td>2</td>
            <td>O</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              What deity did this figure fight during the war?<b>?</b>
            </td>
            <td>
              MORRIGAN / <b>SCAMANDER</b>
            </td>
            <td>6</td>
            <td>N</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Which is the last name of the actor who played the Marvel
              Cinematic Universe's take on this figure?<b>?</b>
            </td>
            <td>
              GOLDSTEIN / <b>HEMSWORTH</b>
            </td>
            <td>4</td>
            <td>S</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              What serpentine figure is part of this deity's armament?<b>?</b>
            </td>
            <td>
              MEDUSA / <b>XIUHCOATL</b>
            </td>
            <td>3</td>
            <td>U</td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Who is this figure's (primary) consort?<b>?</b>?
            </td>
            <td>
              GAEA / <b>HEBAT</b> / GAEA
            </td>
            <td>5</td>
            <td>T</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              What is the name of the serpent slain by this god?<b>?</b>
            </td>
            <td>
              PYTHON / <b>YAMATA NO OROCHI</b>
            </td>
            <td>8</td>
            <td>O</td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              This figure participated on which side of a war?<b>?</b>?
            </td>
            <td>
              GREEK / <b>PANDAVAS</b> / ULSTER
            </td>
            <td>1</td>
            <td>P</td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              Who was the other woman in this figure's marriage?<b>?</b>
            </td>
            <td>
              CREUSA / <b>IOLE</b>
            </td>
            <td>1</td>
            <td>I</td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              What male figure received this god during his exile on earth
              <b>?</b>?
            </td>
            <td>
              <b>ADMETUS</b> / ASHINAZUCHI
            </td>
            <td>1</td>
            <td>A</td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              Which brother did this figure cut apart?<b>?</b>
            </td>
            <td>
              APSYRTUS / <b>HUNAHPU</b>
            </td>
            <td>3</td>
            <td>N</td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              This figure wrestled what personification of an aspect of life?
              <b>?</b>
            </td>
            <td>
              ELLI / <b>THANATOS</b>
            </td>
            <td>4</td>
            <td>N</td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              Which child is this goddess most protective of<b>?</b>?
            </td>
            <td>
              <b>HORUS</b> / PERSEPHONE
            </td>
            <td>2</td>
            <td>O</td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              What flesh-eating bird is the symbol of this deity??<b>?</b>
            </td>
            <td>
              EAGLE / OWL / <b>RAVEN</b>
            </td>
            <td>3</td>
            <td>V</td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              What is the most famous temple dedicated to this deity that is now
              located within a UNESCO World Heritage site in their central city
              <b>?</b>?
            </td>
            <td>
              <b>PARTHENON</b> / TEMPLO MAYOR
            </td>
            <td>6</td>
            <td>E</td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              Who is this hero's fully divine parent<b>?</b>?
            </td>
            <td>
              <b>LUGUS</b> / THETIS
            </td>
            <td>1</td>
            <td>L</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <br />
    <AuthorsNotes>
      <p>
        This puzzle was directly inspired by Teammate's comment about how hard
        it is to turn a quizbowl packet into a puzzle because the giveaway line
        makes the rest of the tossup extraneous. My take on this problem is to
        write a packet where information from the last line is correct but
        incomplete due to the ambiguity of previous lines&mdash;a deliberate
        violation of good quizbowl writing practices.
      </p>
      <p>
        Unfortunately due to writing constraints, I lost all Mesopotamian
        deities including Inanna, whose journey to the Underworld was one of my
        starting points. Relying on Encyclopedia Britannica as opposed to, say,
        Godchecker or Mythopedia, allowed solvers to consult a relatively static
        authoritative source for spelling standardization, but the trade-off is
        that the EB favours more widely known cultures and figures.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .extract-table td:nth-child(1),
      .extract-table td:nth-child(4),
      .extract-table td:nth-child(5) {
        text-align: center;
      }
      .extract-table td:nth-child(3),
      .extract-table td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
