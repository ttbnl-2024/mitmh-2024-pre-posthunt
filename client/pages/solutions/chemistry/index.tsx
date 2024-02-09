import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/chemistry/0.png';

const SLUG = 'chemistry';
const ANSWER = `IDEAL, TWAIN, BENZOYL, OXALATE, CARBONYL, WATER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The reactions in this puzzle should be familiar to students of chemistry,
      or they can be researched by looking up the given chemicals.
    </p>
    <h3>Reactions</h3>
    <p>See full reactions below.</p>
    <ol>
      <li>
        This is{' '}
        <a href="https://en.wikipedia.org/wiki/Glucose">photosynthesis</a>. The
        missing 6-carbon sugar that fits on the blanks is{' '}
        <Monospace>GLUCO(S)E</Monospace>.
      </li>
      <li>
        Searching for azides and alkynes brings up the{' '}
        <a href="https://en.wikipedia.org/wiki/Azide-alkyne_Huisgen_cycloaddition">
          Huisgen cycloaddition
        </a>
        . The copper-catalyzed version of this reaction makes exclusively
        1,2,3-triazoles with the two substituent groups attached at positions 1
        and 4. The answer is <Monospace>(T)RIAZOLE</Monospace>.
      </li>
      <li>
        The reactant is{' '}
        <a href="https://en.wikipedia.org/wiki/Sodium_formate">
          sodium formate
        </a>
        . One of its well known properties is that it decomposes with heat to
        produce <Monospace>SODIUM OXALAT(E)</Monospace> and hydrogen.
      </li>
      <li>
        The{' '}
        <a href="https://en.wikipedia.org/wiki/Grignard_reaction">reaction</a>{' '}
        to convert a ketone into a tertiary alcohol occurs by reacting it with a{' '}
        <Monospace>GRIGN(A)RD REAGENT</Monospace> such as methylmagnesium
        chloride.
      </li>
      <li>
        Benzoyl chloride is reacted with hydrogen peroxide industrially to{' '}
        <a href="https://en.wikipedia.org/wiki/Benzoyl_peroxide">
          make <Monospace>BENZOY(L) PEROXIDE</Monospace>.
        </a>
      </li>
      <li>
        A carboxylic acid reacts with an alcohol in the presence of an acid
        catalyst via the{' '}
        <a href="https://en.wikipedia.org/wiki/Fischer%E2%80%93Speier_esterification">
          Fischer esterification
        </a>{' '}
        to form an ester, specifically, a{' '}
        <Monospace>CARBOXYLIC E(S)TER</Monospace> (distinguishing it from
        certain other classes of esters which cannot be formed in this way).
      </li>
      <li>
        Chloroacetic acid reacts to form an ether. This is the{' '}
        <a href="https://en.wikipedia.org/wiki/Williamson_ether_synthesis">
          Williamson ether synthesis
        </a>
        , in which an alkoxide reacts with an organohalide. To start with a
        molecule with a one-word name, we want{' '}
        <Monospace>SALI(C)YLALDEHYDE</Monospace>; the alkoxide is formed by
        deprotonation of the hydroxy group.
      </li>
      <li>
        The presence of metallic sodium (not the ion) and liquid ammonia here
        indicates this is the{' '}
        <a href="https://en.wikipedia.org/wiki/Birch_reduction">
          Birch reduction
        </a>
        . It reduces arenes to 1,4-cyclohexadienes, without removing the other
        double bonds. So the reactant is the same molecule with a benzene ring
        instead of the ring with two double bonds, that is, methyl phenyl ether,
        commonly called <Monospace>ANISOL(E)</Monospace>.
      </li>
      <li>
        AlCl<sub>3</sub> is used in{' '}
        <a href="https://en.wikipedia.org/wiki/Friedel%E2%80%93Crafts_reaction">
          Friedel-Crafts reactions
        </a>
        . The presence of acetyl chloride indicates this is a Friedel-Crafts
        acylation, producing <Monospace>ACETO(P)HENONE</Monospace>.
      </li>
      <li>
        Here a ketone is added at a CH<sub>2</sub> group, displacing the two
        hydrogen atoms and the oxygen from the ketone. The reaction is called an{' '}
        <a href="https://en.wikipedia.org/wiki/Aldol_condensation">
          aldol condensation
        </a>
        , but what's important is that the only thing left is H<sub>2</sub>O, or{' '}
        <Monospace>WA(T)ER</Monospace>.
      </li>
      <li>
        The presence of potassium osmate as a catalyst stands out here. This is
        used for{' '}
        <a href="https://en.wikipedia.org/wiki/Sharpless_asymmetric_dihydroxylation">
          dihydroxylation of alkenes
        </a>
        . Potassium ferricyanide is used to oxidize the osmate ion into OsO
        <sub>4</sub>, which forms an intermediate osmate ester with the alkene
        before separating to leave the vicinal diol. Since we don't have a
        specific diol here, the answer is <Monospace>ALK(E)NE</Monospace>.
      </li>
      <li>
        The{' '}
        <a href="https://en.wikipedia.org/wiki/Buchwald%E2%80%93Hartwig_amination">
          Buchwald-Hartwig amination
        </a>{' '}
        uses a palladium catalyst to create aryl amines by joining amines and
        aryl halides. The presence of HBr as a product indicates we have an{' '}
        <Monospace>A(R)YL BROMIDE</Monospace>.
      </li>
    </ol>

    <h3>Extraction</h3>
    <p>
      The marked letters in the names of the missing chemical species spell{' '}
      <Monospace>STEAL SCEPTER</Monospace>. We wonder what scepter until we
      encounter one in the Text Adventure. Using this command to take the
      scepter from the MU puzzle (up), we then use it in the Einstein puzzle
      (east) to break the river-crossing puzzle (west). Solving the
      river-crossing puzzle results in an encounter with Mark Twain, and an
      instruction to submit <Answerize>TWAIN</Answerize> as an answer.
    </p>
    <p>
      In the Blanks puzzle we encounter blanks enumerated{' '}
      <Monospace>(6 4 7)</Monospace>. The phrase{' '}
      <Monospace>MEDUSA STIR VESSELS</Monospace> from the flavor text of this
      puzzle is the only part that fits on those blanks. The extraction there
      provides the answer <Monospace>IDEAL</Monospace>.
    </p>
    <p>
      The other puzzles have extracted messages referring to features of this
      puzzle.
    </p>
    <ul>
      <li>
        The Crossword points out the{' '}
        <Monospace>PEROXIDE FROM REACTION FIVE</Monospace> which is{' '}
        <Answerize>BENZOYL</Answerize>.
      </li>
      <li>
        The Akari asks for{' '}
        <Monospace>THE MISSING PRODUCT IN REACTION TEN</Monospace> which is{' '}
        <Answerize>WATER</Answerize>.
      </li>
      <li>
        The Word Search says{' '}
        <Monospace>REACTION THREE MAKES SODIUM THIS</Monospace> which is{' '}
        <Answerize>OXALATE</Answerize>.
      </li>
      <li>
        The Matchmaker asks for{' '}
        <Monospace>WHAT PRODUCTS IN SIX AND NINE HAVE IN COMMON</Monospace>.
        Reaction 6 makes an ester and reaction 9 makes a ketone, but what those
        have in common is the <Answerize>CARBONYL</Answerize> group.
      </li>
    </ul>
    <h2>Appendix</h2>
    <p>Reactions with the missing species added:</p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
