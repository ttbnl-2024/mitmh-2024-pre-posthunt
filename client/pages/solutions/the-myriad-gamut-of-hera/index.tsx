import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-myriad-gamut-of-hera';
const ANSWER = `POLYGRAMY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The answers to this meta are as follows:</p>
    <Monospace>
      <Table>
        <tbody>
          <tr>
            <td>AEROGEN</td>
            <td>AIR</td>
            <td>AMERICA</td>
            <td>AMNIOTES</td>
            <td>ATUM</td>
          </tr>
          <tr>
            <td>AUGUR</td>
            <td>AUTHOR</td>
            <td>BEGINNING</td>
            <td>CALCULUS</td>
            <td>CREATION</td>
          </tr>
          <tr>
            <td>DACTYLIC</td>
            <td>DENSITY</td>
            <td>DIGIT</td>
            <td>DIONEO</td>
            <td>DIVINE</td>
          </tr>
          <tr>
            <td>EIDOLON</td>
            <td>ETHER</td>
            <td>ETHICAL</td>
            <td>FORMATION</td>
            <td>FRICTION</td>
          </tr>
          <tr>
            <td>GRAY</td>
            <td>HELIUM</td>
            <td>ITEM</td>
            <td>MERCIA</td>
            <td>MERIT</td>
          </tr>
          <tr>
            <td>METRIC</td>
            <td>MIRA</td>
            <td>MODICUM</td>
            <td>MORAL</td>
            <td>NAMES</td>
          </tr>
          <tr>
            <td>NOMINATES</td>
            <td>NOTE</td>
            <td>OREGON</td>
            <td>PINKY</td>
            <td>PREDICT</td>
          </tr>
          <tr>
            <td>PRODUCT</td>
            <td>PYKNIC</td>
            <td>RAY</td>
            <td>REST</td>
            <td>SAMIAN</td>
          </tr>
          <tr>
            <td>SCALE</td>
            <td>SICILY</td>
            <td>STONE</td>
            <td>STOP</td>
            <td>STRIFE</td>
          </tr>
          <tr>
            <td>THAUM</td>
            <td>THEME</td>
            <td>TIRES</td>
            <td>TORAH</td>
            <td>YESMAN</td>
          </tr>
        </tbody>
      </Table>
    </Monospace>
    <p>
      The puzzle is modeled heavily in the style of the previous Mystery Hunt
      puzzles{' '}
      <a href="https://puzzles.mit.edu/2010/puzzles/1752/the_prodigious_riddle_of_juno/">
        The Prodigious Riddle of Juno
      </a>{' '}
      and{' '}
      <a href="https://puzzles.mit.edu/2016/puzzle/the_pernicious_revenge_of_juno/">
        The Pernicious Revenge of Juno
      </a>
      .
    </p>
    <p>
      This puzzle follows a similar conceit—the answers can be linked into ten
      chains, each five links long, using five types of transformations. The
      transformations are clued by the five clues in the middle, each one
      pointing from one of Zeus's many paramours to the bolded word in the clue:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Link</th>
          <th>Given Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="transaddition">
            transaddition (anagram and add a letter)
          </td>
          <td>CALLISTO → SAILCLOTH</td>
        </tr>
        <tr>
          <td className="synonym">synonym</td>
          <td>
            NEMESIS
            <sup>
              <a id="ftnt_ref1" href="#ftnt1">
                [1]
              </a>
            </sup>
             → ARCHENEMY
          </td>
        </tr>
        <tr>
          <td className="consonantcy">
            consonantcy (same consonants; Y is a vowel)
          </td>
          <td>SEMELE → SMILE</td>
        </tr>
        <tr>
          <td className="root-change">
            Greek root to Latin root (see also:{' '}
            <a href="https://puzzles.mit.edu/2021/puzzle/clusters/">Clusters</a>
            )
          </td>
          <td>
            METIS (Greek, <u>skill</u>) → ARTISAN (Latin <i>ars</i>,{' '}
            <u>skill</u>)
          </td>
        </tr>
        <tr>
          <td className="set-membership">set membership</td>
          <td>EUROPA → ITALIA</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The transformations used in each chain are given below the puzzle body in
      alphabetical order, determined by the first letter of the consort used to
      clue it.
    </p>
    <p>
      The puzzle is themed after Hera, Juno's Greek equivalent, and as such the
      puzzle's extraction mechanic (associating each number with a letter
      through a long chain of clues) has also been Grecized. The head of each
      chain can be associated with a word that starts with a Greek numeral
      prefix (mono-, di-... ennea-, deca-). The tail is a word that directly
      clues a letter of the Greek alphabet. (This is also clued by the title;
      myria- is the Greek prefix for ten thousand, and the word gamut is
      directly derived from the Greek letter gamma.) Ordering by the numeral
      prefix, the letters spell <i>Πολυγραμια</i>; anglicized, this would be{' '}
      <Answerize>{ANSWER}</Answerize>, the answer to this puzzle.
    </p>
    <Table className="explanation-table">
      <thead>
        <tr>
          <th>Word</th>
          <th>Explanation</th>
          <th>Word</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>monochrome</td>
          <td></td>
          <td>dilemma</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>GRAY</Clue>
          </td>
          <td>monochrome typically manifests as grayscale</td>
          <td>
            <Clue>ETHICAL</Clue>
          </td>
          <td>phrase</td>
        </tr>
        <tr>
          <td>
            <Clue>AUGUR</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>MORAL</Clue>
          </td>
          <td className="synonym">synonym</td>
        </tr>
        <tr>
          <td>
            <Clue>DIVINE</Clue>
          </td>
          <td className="synonym">synonym</td>
          <td>
            <Clue>THEME</Clue>
          </td>
          <td className="synonym">
            synonym (as in the message of a narrative)
          </td>
        </tr>
        <tr>
          <td>
            <Clue>PREDICT</Clue>
          </td>
          <td className="synonym">
            synonym
            <sup>
              <a id="ftnt_ref2" href="#ftnt2">
                [2]
              </a>
            </sup>
          </td>
          <td>
            <Clue>THAUM</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
        </tr>
        <tr>
          <td>
            <Clue>PRODUCT</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>MIRA</Clue>
          </td>
          <td className="root-change">
            root change (<i>θαῦμα</i> (marvel) to <i>mirus</i> (marvel))
          </td>
        </tr>
        <tr>
          <td>Π</td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Multiplication#Product_of_a_sequence">
              Capital pi notation for the product of a sequence
            </a>
          </td>
          <td>ο</td>
          <td>
            The Bayer designation of the star{' '}
            <a href="https://en.wikipedia.org/wiki/Mira">Mira</a> is Omicron
            Ceti
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>Trinacria</td>
          <td></td>
          <td>tetrapod</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>SICILY</Clue>
          </td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Sicily#Name">
              An old name for the island
            </a>
          </td>
          <td>
            <Clue>AMNIOTES</Clue>
          </td>
          <td>
            half of the clade{' '}
            <a href="https://en.wikipedia.org/wiki/Tetrapod">Tetrapoda</a>
            {' '}(the other half being amphibians)
          </td>
        </tr>
        <tr>
          <td>
            <Clue>SCALE</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>NOMINATES</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>NOTE</Clue>
          </td>
          <td className="set-membership">set membership (yes, it's iffy)</td>
          <td>
            <Clue>NAMES</Clue>
          </td>
          <td className="synonym">synonym</td>
        </tr>
        <tr>
          <td>
            <Clue>STONE</Clue>
          </td>
          <td className="transaddition">transaddition</td>
          <td>
            <Clue>YES-MAN</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>CALCULUS</Clue>
          </td>
          <td className="synonym">
            <a href="https://en.wikipedia.org/wiki/Calculus_(medicine)">
              synonym
            </a>
          </td>
          <td>
            <Clue>SAMIAN</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
        </tr>
        <tr>
          <td>λ</td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Lambda_calculus">
              lambda calculus
            </a>
          </td>
          <td>υ</td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Upsilon#Symbolism">
              Often called "the Samian letter"
            </a>
            {' '}in association with Pythagoras
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>Pentateuch</td>
          <td></td>
          <td>hexameter</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>TORAH</Clue>
          </td>
          <td>
            Both used in reference to the first five books in the Hebrew Bible
          </td>
          <td>
            <Clue>DACTYLIC</Clue>
          </td>
          <td>
            While this could go with any prefix,{' '}
            <a href="https://en.wikipedia.org/wiki/Dactylic_hexameter">
              hexameter
            </a>
            {' '}is the most well-known, as the meter of epic poetry
          </td>
        </tr>
        <tr>
          <td>
            <Clue>AUTHOR</Clue>
          </td>
          <td className="transaddition">transaddition</td>
          <td>
            <Clue>DIGIT</Clue>
          </td>
          <td className="root-change">
            root change (<i>δάκτυλος</i> (finger) to <i>digitus </i>(finger))
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ETHER</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>PINKY</Clue>
          </td>
          <td className="set-membership">set membership</td>
        </tr>
        <tr>
          <td>
            <Clue>AIR</Clue>
          </td>
          <td className="synonym">
            <a href="https://en.wiktionary.org/wiki/ether#Noun">synonym</a>
            {' '}(poetic)
          </td>
          <td>
            <Clue>PYKNIC</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>RAY</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>DENSITY</Clue>
          </td>
          <td className="root-change">
            root change (<i>πυκνός</i> (dense) to…well, <i>densus</i>)
          </td>
        </tr>
        <tr>
          <td>γ</td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Gamma_ray">gamma rays</a>
          </td>
          <td>ρ</td>
          <td>
            the conventional symbol for{' '}
            <a href="https://en.wikipedia.org/wiki/Density">density</a>
          </td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>Heptarchy</td>
          <td></td>
          <td>octagon</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>MERCIA</Clue>
          </td>
          <td>
            <a href="https://en.wikipedia.org/wiki/Mercia">
              One of the kingdoms traditionally mentioned as part of the
              Heptarchy
            </a>
          </td>
          <td>
            <Clue>STOP</Clue>
          </td>
          <td>
            the conventional (American){' '}
            <a href="https://en.wikipedia.org/wiki/Stop_sign">stop sign</a> is
            octagonal
          </td>
        </tr>
        <tr>
          <td>
            <Clue>AMERICA</Clue>
          </td>
          <td className="transaddition">transaddition (also a consonantcy)</td>
          <td>
            <Clue>REST</Clue>
          </td>
          <td className="synonym">synonym (in the noun sense)</td>
        </tr>
        <tr>
          <td>
            <Clue>OREGON</Clue>
          </td>
          <td className="set-membership">set membership</td>
          <td>
            <Clue>TIRES</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>AEROGEN</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>STRIFE</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>HELIUM</Clue>
          </td>
          <td className="set-membership">
            <a href="https://en.wikipedia.org/wiki/Noble_gas">set membership</a>
            {' '}(aerogens are another term for noble gases)
          </td>
          <td>
            <Clue>FRICTION</Clue>
          </td>
          <td className="synonym">synonym (in the conventional sense)</td>
        </tr>
        <tr>
          <td>α</td>
          <td>alpha particles are helium nuclei</td>
          <td>μ</td>
          <td>conventional symbol for the coefficient of friction</td>
        </tr>
        <tr style={{ borderTop: '3px solid black' }}>
          <td>Ennead</td>
          <td></td>
          <td>
            <i>Decameron</i>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Clue>ATUM</Clue>
          </td>
          <td>
            One of the nine members of{' '}
            <a href="https://en.wikipedia.org/wiki/Ennead">
              the (Heliopolitan) Ennead
            </a>
          </td>
          <td>
            <Clue>DIONEO</Clue>
          </td>
          <td>
            One of the storytellers in{' '}
            <a href="https://en.wikipedia.org/wiki/The_Decameron">
              The Decameron
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Clue>ITEM</Clue>
          </td>
          <td className="consonantcy">consonantcy</td>
          <td>
            <Clue>EIDOLON</Clue>
          </td>
          <td className="transaddition">transaddition</td>
        </tr>
        <tr>
          <td>
            <Clue>MERIT</Clue>
          </td>
          <td className="transaddition">transaddition</td>
          <td>
            <Clue>FORMATION</Clue>
          </td>
          <td className="root-change">
            root change (<i>εἶδος</i> (shape) to <i>forma </i>(shape))
          </td>
        </tr>
        <tr>
          <td>
            <Clue>METRIC</Clue>
          </td>
          <td className="transaddition">transaddition</td>
          <td>
            <Clue>CREATION</Clue>
          </td>
          <td className="synonym">synonym</td>
        </tr>
        <tr>
          <td>
            <Clue>MODICUM</Clue>
          </td>
          <td className="root-change">
            root change (<i>μέτρον</i> (measure) to <i>modus </i>(measure))
          </td>
          <td>
            <Clue>BEGINNING</Clue>
          </td>
          <td className="synonym">synonym</td>
        </tr>
        <tr>
          <td>ι</td>
          <td>
            <a href="https://en.wiktionary.org/wiki/iota">synonym</a>
          </td>
          <td>α</td>
          <td>the first letter</td>
        </tr>
      </tbody>
    </Table>
    <div>
      <p>
        <a id="ftnt1" href="#ftnt_ref1">
          [1]
        </a>{' '}
        There are only so many that lend themselves to good synonyms and sets.
        Nemesis gets occasionally pointed to as the mother of Helen of Troy.
      </p>
    </div>
    <div>
      <p>
        <a id="ftnt2" href="#ftnt_ref2">
          [2]
        </a>{' '}
        I tried not to synonym triangle where possible, but here and elsewhere
        it felt unavoidable.
      </p>
    </div>

    <style jsx global>{`
      .consonantcy {
        background-color: #93c47d;
      }
      .transaddition {
        background-color: #f6b26b;
      }
      .root-change {
        background-color: #b4a7d6;
      }
      .synonym {
        background-color: #6d9eeb;
      }
      .set-membership {
        background-color: #cccccc;
      }
      .synonym a,
      .set-membership a,
      .root-change a {
        color: black !important;
      }
      .explanation-table td:nth-child(2),
      .explanation-table th:nth-child(2) {
        border-right: 3px solid black;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
