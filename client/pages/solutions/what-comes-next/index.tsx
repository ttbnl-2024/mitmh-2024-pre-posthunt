import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'what-comes-next';
const ANSWER = `YESMAN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The letters listed are a "maze" of sorting what is after each letter, like
      links in a letter chain. We can see R leads to 2 as one of the choices,
      and 2 leads to 3, so we can make a trigram of R23 right away. When we
      start forming bigrams and trigrams into words from the letter maze, we
      will find Jim Carrey movie titles which are consecutive on his IMDb
      starting from <Monospace>PECAN PIE</Monospace>. The title "What Comes
      Next?" is an instruction for how the puzzle works, as well as how to get
      the answer.
    </p>
    <p>The letters when chained correctly will spell:</p>
    <ul>
      <li>
        <Monospace>BRUCE ALMIGHTY</Monospace>
      </li>
      <li>
        <Monospace>PECAN PIE</Monospace>
      </li>
      <li>
        <Monospace>ETERNAL SUNSHINE OF THE SPOTLESS MIND</Monospace>
      </li>
      <li>
        <Monospace>LEMONY SNICKET'S A SERIES OF UNFORTUNATE EVENTS</Monospace>
      </li>
      <li>
        <Monospace>FUN WITH DICK AND JANE</Monospace>
      </li>
      <li>
        <Monospace>THE NUMBER 23</Monospace>
      </li>
      <li>
        <Monospace>DR. SEUSS' HORTON HEARS A WHO!</Monospace>
      </li>
    </ul>
    <p>
      Letters at the end of each letter string will not have a letter to move to
      anything next. For example, <i>Horton Hears a Who!</i>&mdash;the exclamation mark at
      the end does not have an entry in the list as ! → (some other letter).
    </p>
    <p>
      The movie Jim Carrey stars in after{' '}
      <Monospace>HORTON HEARS A WHO!</Monospace> on his IMDb actor profile is{' '}
      <b>
        <Answerize>YES MAN</Answerize>
      </b>
      , which is the answer.
    </p>
    <h2>Appendix</h2>
    <p>
      We describe one possible solve path. The letters in the front of arrows in
      this list will be found to the left of all the letters after the arrow, in
      some line of text in the puzzle.
    </p>
    <ul className="list-none pl-9 -indent-9">
      <li>2 → 3</li>
      <li>A → L, L, N, N, N, R, S, T, W</li>
      <li>B → E, R</li>
      <li>C → A, E, K, K</li>
      <li>D → I, J, R</li>
      <li>E → A, A, C, E, M, N, N, O, R, R, R, S, S, S, T, T, U, V</li>
      <li>F → O, T, U, U</li>
      <li>G → H</li>
      <li>H → D, E, E, E, I, O, O, T</li>
      <li>I → C, C, E, E, G, N, N, T</li>
      <li>J → A</li>
      <li>K → A, E</li>
      <li>L → E, E, M, S</li>
      <li>M → B, I, I, O</li>
      <li>N → A, A, D, D, E, E, F, H, I, P, S, T, U, W, Y</li>
      <li>O → !, F, F, N, N, R, R, T</li>
      <li>P → E, I, O</li>
      <li>R → ., 2, I, N, S, T, T, U</li>
      <li>S → ', A, A, E, E, H, M, N, O, P, S, S, U</li>
      <li>T → ', E, E, H, H, H, L, O, S, U, Y</li>
      <li>U → C, M, N, N, N, N, S</li>
      <li>V → E</li>
      <li>W → H, I</li>
      <li>Y → S</li>
      <li>. → S</li>
      <li>' → H, S</li>
    </ul>
    <p>
      We then create bigrams: 2 → 3 will equal 23. B → E, R will equal both BE and
      BR.
    </p>
    <p>Bigrams created per row:</p>
    <ul className="list-none pl-7 -indent-7">
      <li>23</li>
      <li>AL, AL, AN, AN, AN, AR, AS, AT, AW</li>
      <li>BE, BR</li>
      <li>CA, CE, CK, CK</li>
      <li>DI, DJ, DR</li>
      <li>
        EA, EA, EC, EE, EM, EN, EN, EO, ER, ER, ER, ES, ES, ES, ET, ET, EU,
        EV
      </li>
      <li>FO, FT, FU, FU</li>
      <li>GH</li>
      <li>HD, HE, HE, HE, HI, HO, HO, HT</li>
      <li>IC, IC, IE, IE, IG, IN, IN, IT</li>
      <li>JA</li>
      <li>KA, KE</li>
      <li>LE, LE, LM, LS</li>
      <li>MB, MI, MI, MO</li>
      <li>NA, NA, ND, ND, NE, NE, NF, NH, NI, NP, NS, NT, NU, NW, NY</li>
      <li>O!, OF, OF, ON, ON, OR, OR, OT</li>
      <li>PE, PI, PO</li>
      <li>R., R2, RI, RN, RS, RT, RT, RU</li>
      <li>S', SA, SA, SE, SE, SH, SM, SN, SO, SP, SS, SS, SU</li>
      <li>T', TE, TE, TH, TH, TH, TL, TO, TS, TU, TY</li>
      <li>UC, UM, UN, UN, UN, UN, US</li>
      <li>VE</li>
      <li>WH, WI</li>
      <li>YS</li>
      <li>.S</li>
      <li>'H, 'S</li>
    </ul>
    <p>
      As more letter combinations are discovered, we can start to create
      trigrams from some of the combinations. R leads to a 2, and 2 leads to a
      3, so R23 can be formed.
    </p>
    <p>
      Some trigrams we might find first: R23, DJA, S'H/S'S, T'H/T'S, R.S, EVE,
      CKA/CKE, IGH
    </p>
    <p>
      Some of the next trigrams found are: MBE (so the BR must begin a phrase,
      as no other letter links to B), AWH/AWI, and NWH/NWI
    </p>
    <p>
      As we discover NUMBER 23 or WHO! or DR.S, movie titles will emerge that
      confirm the other letter strings.
    </p>
    <p>
      The clues at the bottom give numbers of words to help with the final
      confirmation of movie titles.
    </p>
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
