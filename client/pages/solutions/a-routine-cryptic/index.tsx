import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { Colors, X } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'a-routine-cryptic';
const ANSWER = `AB TEST`;

const _: '' = '';

const crosswordGrid = [
  [1, 2, _, 3, _, 4, _, 5, _, 6, _, 7, X, 8, _, 9, _, 10, _, 11, X],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [12, _, _, _, _, _, _, _, _, _, X, 13, _, _, _, _, X, 14, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [15, _, _, _, _, _, _, _, _, _, X, 16, _, _, _, _, _, _, _, _, _],
  [X, _, X, X, X, _, X, _, X, X, X, _, X, _, X, _, X, _, X, _, X],
  [17, _, _, 18, _, X, 19, _, _, 20, _, _, _, _, X, 21, _, _, _, _, _],
  [X, X, X, _, X, X, X, _, X, _, X, _, X, _, X, X, X, _, X, _, X],
  [22, 23, _, _, _, 24, X, 25, _, _, _, _, _, _, _, 26, _, _, _, _, _],
  [X, _, X, _, X, _, X, X, X, _, X, X, X, _, X, _, X, X, X, _, X],
  [27, _, _, _, X, 28, _, 29, _, _, _, 30, _, _, _, _, X, 31, _, _, _],
  [X, _, X, X, X, _, X, _, X, X, X, _, X, X, X, _, X, _, X, _, X],
  [32, _, _, 33, _, _, _, _, _, 34, _, _, _, 35, X, 36, _, _, _, _, _],
  [X, _, X, _, X, X, X, _, X, _, X, _, X, _, X, X, X, _, X, X, X],
  [37, _, _, _, _, 38, X, 39, _, _, _, _, _, _, _, X, 40, _, _, 41, _],
  [X, _, X, _, X, _, X, _, X, _, X, X, X, _, X, 42, X, X, X, _, X],
  [43, _, _, _, _, _, _, _, _, _, X, 44, _, _, _, _, _, 45, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [46, _, _, _, X, 47, _, _, _, _, X, 48, _, _, _, _, _, _, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [X, 49, _, _, _, _, _, _, X, 50, _, _, _, _, _, _, _, _, _, _, _],
];

// prettier-ignore
const crosswordFill = [
  ['A','D','V','A','N','T','A','G','E','O','U','S',  _,'E','N','C','H','A','N','T',  _],
  [  _,'U',  _,'M',  _,'H',  _,'A',  _,'S',  _,'A',  _,'T',  _,'R',  _,'V',  _,'H',  _],
  ['R','E','M','O','T','E','A','R','E','A',  _,'S','C','H','M','O',  _,'E','D','E','N'],
  [  _,'C',  _,'N',  _,'L',  _,'I',  _,'G',  _,'S',  _,'E',  _,'Q',  _,'M',  _,'F',  _],
  ['S','A','Y','G','O','O','D','B','Y','E',  _,'A','L','L','B','U','T','A','F','E','W'],
  [  _,'R',  _,  _,  _,'O',  _,'A',  _,  _,  _,'F',  _,'M',  _,'E',  _,'R',  _,'D',  _],
  ['R','E','R','U','N',  _,'A','L','A','C','A','R','T','E',  _,'T','R','I','V','E','T'],
  [  _,  _,  _,'T',  _,  _,  _,'D',  _,'O',  _,'A',  _,'R',  _,  _,  _,'A',  _,'R',  _],
  ['A','S','K','I','N','G',  _,'I','N','V','E','S','T','M','E','N','T','S','C','A','M'],
  [  _,'N',  _,'L',  _,'Y',  _,  _,  _,'E',  _,  _,  _,'A',  _,'O',  _,  _,  _,'T',  _],
  ['O','O','Z','E',  _,'O','V','E','R','R','I','P','E','N','E','D',  _,'S','P','I','N'],
  [  _,'W',  _,  _,  _,'Z',  _,'L',  _,  _,  _,'R',  _,  _,  _,'U',  _,'T',  _,'O',  _],
  ['A','S','I','A','N','A','M','E','R','I','C','A','N','S',  _,'H','A','R','D','N','O'],
  [  _,'H',  _,'D',  _,  _,  _,'C',  _,'M',  _,'W',  _,'Y',  _,  _,  _,'I',  _,  _,  _],
  ['V','O','O','D','O','O',  _,'T','O','P','O','N','Y','M','S',  _,'O','A','T','H','S'],
  [  _,'V',  _,'R',  _,'N',  _,'R',  _,'O',  _,  _,  _,'M',  _,'H',  _,  _,  _,'A',  _],
  ['M','E','H','E','A','R','T','I','E','S',  _,'T','H','E','W','A','R','P','A','T','H'],
  [  _,'L',  _,'S',  _,'A',  _,'C',  _,'T',  _,'I',  _,'T',  _,'T',  _,'E',  _,'E',  _],
  ['L','I','P','S',  _,'M','A','C','A','O',  _,'T','A','R','O','T','C','A','R','D','S'],
  [  _,'N',  _,'E',  _,'P',  _,'A',  _,'R',  _,'H',  _,'I',  _,'E',  _,'R',  _,'O',  _],
  [  _,'G','R','E','A','S','E','R',  _,'S','WE','E','T','C','A','R','O','L','I','N','E'],
];

const { C8 } = Colors;
const crosswordShade = [
  [_, _, _, _, _, _, _, _, _, _, C8, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, C8, _, C8, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, C8, _, _, _, C8, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, C8, _, _, _, _, _, C8, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, C8, _, _, _, _, _, _, _, C8, _, _, _, _, _, _],
  [_, _, _, _, _, C8, _, _, _, _, _, _, _, _, _, C8, _, _, _, _, _],
  [_, _, _, _, C8, _, _, _, _, _, _, _, _, _, _, _, C8, _, _, _, _],
  [_, _, _, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _, _, _],
  [_, _, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _, _],
  [_, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _],
  [C8, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, C8],
  [_, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _],
  [_, _, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _, _],
  [_, _, _, C8, _, _, _, _, _, _, _, _, _, _, _, _, _, C8, _, _, _],
  [_, _, _, _, C8, _, _, _, _, _, _, _, _, _, _, _, C8, _, _, _, _],
  [_, _, _, _, _, C8, _, _, _, _, _, _, _, _, _, C8, _, _, _, _, _],
  [_, _, _, _, _, _, C8, _, _, _, _, _, _, _, C8, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, C8, _, _, _, _, _, C8, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, C8, _, _, _, C8, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, C8, _, C8, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, C8, _, _, _, _, _, _, _, _, _, _],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      As the title indicates, the provided clues are cryptic clues, and as we
      attempt to solve them, we realize that the wordplay in each clue contains
      an extraneous letter. The answers to the clues follow below. Extraneous
      letters in the wordplay are bracketed and bolded <b>[like this]</b>
      <i>.</i>
    </p>
    <Table noBorder={true} className="clues-table">
      <thead>
        <tr>
          <th>Across</th>
          <th className="text-right">Down</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            1. Helpful of us: ending in Saw V burying worker
            <br />
            <Clue>
              AD(V)(ANT)AGE + O<b>[F]</b> + US
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            2. Ruthlessly accrued ultimate fortune with adequate attention
            <br />
            <Clue>
              <b>[C]</b>DUECAR* + E
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            8. Unbroken chain that holds interest, perhaps
            <br />
            <Clue>
              unbrokEN CHA<b>[I]</b>N That (hidden)
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            3. In the middle, pastel pink on running back, sans hats
            <br />
            <Clue>
              A<b>[L]</b>MON + G
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            12. Sports official: "More drinking tea? Firstly, it's isolated"
            <br />
            <Clue>
              RE<b>[F]</b> + MO(TEA)RE + A
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            4. Head out, hole out
            <br />
            <Clue>
              THE LOO<b>[U]</b>*
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            13. Witticism after school from fool
            <br />
            <Clue>
              SCH + MO<b>[T]</b>
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            5. Italian leader's era, viewed in retrospect? Filthy one
            <br />
            <Clue>
              <b>[E]</b>GA← + RIBALD + I
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            14. Paradise is ecstasy? Say it ain't so...
            <br />
            <Clue>
              E + DEN<b>[Y]</b>
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            6. Goose on a mound nibbled off green from mulberry
            <br />
            <Clue>
              gO<b>[S]</b>SAGE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            15. As with yoga, body positioning initially emphasized, in part
            <br />
            <Clue>
              <b>[A]</b>S + AY&#x200B;GOODBY* + E
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            7. Laurel's against a jerk turning up with monks
            <br />
            <Clue>
              <b>[V]</b>S + A + SSA← + FRAS
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            16. Most of us, failing at island nation's overthrow, collecting
            legal tips
            <br />
            <Clue>
              (A(L+L)BU<b>[C]</b> + TA + F + EW) &larr;
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            8. Musical star Nero, taking helm, retreats on both fronts; designer
            Giorgio heading off
            <br />
            <Clue>
              pET(HELM)Er + aRMAN<b>[I]</b>
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            17. Right midfielder with slip at United Nations gets do-over?
            <br />
            <Clue>
              R + ER<b>[R]</b> + UN
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            9. Right Inside Grouch at equator, traveling for game with wickets
            <br />
            <Clue>
              C + ROQUET<b>[A]</b>*
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            19. Mining giant holding a short course: "One Way To Order"
            <br />
            <Clue>
              AL(A)C<b>[O]</b>A + RTE
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            10. A miscellany's got hold of thing without yours truly's divine
            petitions
            <br />
            <Clue>
              A V(i<b>[T]</b>EM)ARIA'S
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            21. Try hard to, at first, stand
            <br />
            <Clue>
              <b>[S]</b>TRIVE + T
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            11. "Gene's structure stealthily taking shape"&mdash;ER head,
            interjecting, with me operating
            <br />
            <Clue>
              THE&#x200B;F(EDERA<b>[H]</b>*)T + I + ON
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            22. Wanting for payment, group of performers accepts hide
            <br />
            <Clue>
              <b>[S]</b>A(SKIN)G
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            18. Helpful of us: initially looking up top people
            <br />
            <Clue>
              Us + <b>[E]</b>TILE ←
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            25. "Wrong robes/gear?" It's a swindle
            <br />
            <Clue>
              <b>[S]</b>IN + VESTMENTS + CAM
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            20. Report on one side of conversation
            <br />
            <Clue>
              CO<b>[N]</b>VERsation
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            27. Zero dividing zero in error to come out slowly
            <br />
            <Clue>
              O(O)ZE<b>[R]</b>*
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            23. Tell about "present day" as lowly dwelling's winter activity
            <br />
            <Clue>
              S(NOW + <b>[A]</b>S + HOVEL)ING
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            28. Got mushy, perhaps, began to take turn at Rhode Island
            <br />
            <Clue>
              O(VE<b>[E]</b>R + RI)PENED
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            24. Fellow with small amount of top-grade Japanese food...
            <br />
            <Clue>
              G<b>[U]</b>Y + OZ + A
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            31. Spanish business magazine's skewed take
            <br />
            <Clue>
              SP + IN<b>[C]</b>
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            26. ... enjoyed /got into Japanese theater, obviously
            <br />
            <Clue>
              NO(DU<b>[G]</b>)H
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            32. While I mention racketeering law, having an answer
                for certain immigrants
            <br />
            <Clue>
              (AS + I + (A) NAME + RIC<b>[O]</b>) + ANS
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            29. Choose wealthy California Republican's Tesla, say
            <br />
            <Clue>
              ELECT + RIC<b>[H]</b> + CA + R
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            36. Firm refusing Honda's transportation over railroad
            <br />
            <Clue>
              HA(R<b>[R]</b>)D NO
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            30. Originally published rant about left wing&mdash;one that's
            shrimpy?
            <br />
            <Clue>
              P+RA(W)N<b>[T]</b>
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            37. Hex from primary villain, with move to castle protecting idiot
            <br />
            <Clue>
              V + O(<b>[D]</b>ODO)O
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            31. Shy singer has sample of grooves
            <br />
            <Clue>
              S(TR<b>[Y]</b>)IA
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            39. Paris and London? Reconsidering my options
            <br />
            <Clue>
              TOPONYMS<b>[I]</b>*
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            33. Spot clothing for a woman&mdash;formerly the person living here
            <br />
            <Clue>
              AD + DRESS + <b>[N]</b>EE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            40. Has not minced words in affirmation
            <br />
            <Clue>
              OATHS<b>[N]</b>*
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            34. Chief Inspector Morse about to suggest concluding early to
            frauds
            <br />
            <Clue>
              I + M(POS<b>[I]</b>T)ORSe
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            43. "Equipment knots up"&mdash;early tepid response of one's
            rum-loving crew
            <br />
            <Clue>
              MEH + <b>[G]</b>EAR + TIES
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            35. On reflection, the same shortened word with the same meaning,
            with host regarding debatable merit
            <br />
            <Clue>
              SY<b>[N]</b> + M(METRI*)C
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            44. Figurative way to attack left tackle: warm up, accommodating
            twist&mdash;ah!
            <br />
            <Clue>
              T + HE(WARP)AT + <b>[A]</b>H
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            38. Certain entries with enthusiastic "open arms"
            <br />
            <Clue>
              ON-RAMPS<b>[E]</b>*
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            46. Fifty tears&mdash;they're on your face
            <br />
            <Clue>
              L + <b>[R]</b>IPS
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            41. Really disliked that junction's redirection
            <br />
            <Clue>
              <b>[T]</b>HAT + EDON &larr;
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            47. Chinese leader shepherds piece of legislation in Chinese region
            <br />
            <Clue>
              M(AC<b>[T]</b>)AO
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            42. Stovepipe maker with friendly greeting and unexpected treat
            <br />
            <Clue>
              H<b>[I]</b> + ATTER*
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            48. Deck with "Death"&mdash;it holds "The Doctor"&mdash;has "The
            Thespian" inverted in the middle
            <br />
            <Clue>
              TA(ROTCA &larr;)RD<b>[I]</b>S
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            44. Offering's "half-time" with you when at church
            <br />
            <Clue>
              TIme + THE<b>[E]</b>
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            49. Almost double down on following garage's head mechanic
            <br />
            <Clue>
              G + REAS<b>[S]</b>ERt
            </Clue>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            45. Poker loss is result of irritant over time
            <br />
            <Clue>
              <b>[S]</b>PEAR + L
            </Clue>
          </td>
        </tr>
        <tr>
          <td>
            50. Certain transit route, changing red to white, and catching
            orange: It's often heard at Fenway
            <br />
            <Clue>
              S<b>[T]</b>&#x7B;R&rarr;W&#x7D;EET&#x200B;CAR(O)LINE
            </Clue>
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      As we place the answers in the grid, we note that one cell in 50A needs to
      take two letters: W and E. The completed grid is below.
    </p>
    <Crossword data={crosswordGrid} fill={crosswordFill} />
    <p>
      Reading the extra letters from the Across clues in clue order reveals the
      message <Clue>FIFTY ACROSS'S RECORDING ARTIST</Clue>. The artist who wrote
      and first recorded "Sweet Caroline" was Neil Diamond. Given that, and that
      50 Across's clue references Fenway Park, it seems likely that baseball
      and/or baseball diamonds will be relevant to this puzzle.
    </p>
    <p>
      Reading the extra letters from the Down clues in clue order reveals the
      message <Clue>CLUES VIA THE NAUGHTY NINETIES</Clue>. The Naughty Nineties
      is the Abbott and Costello movie best known for including a filmed version
      of their "Who's on First" routine, which is also baseball-themed,
      confirming our notion that baseball and/or baseball diamonds will be
      relevant.
    </p>
    <p>
      If we were to map a baseball diamond as diamonds are typically seen in
      print (that is, as approximately seen from behind home plate), the SW
      square would be approximately at home plate and the base paths would be
      diagonals… and there would be no black squares in the grid blocking any of
      the base paths.
    </p>
    <p>
      Further to this, if we trace a path from home to first base to second base
      to third base to home, we will spell the following, as shown in the grid
      below:
    </p>
    <ul>
      <li>
        <Clue>WHAT</Clue>
      </li>
      <li>
        <Clue>WHO</Clue>
      </li>
      <li>
        <Clue>I DON'T CARE</Clue>
      </li>
      <li>
        <Clue>BECAUSE</Clue>
      </li>
      <li>
        <Clue>I DON'T KNOW</Clue>
      </li>
      <li>
        <Clue>I DON'T CARE</Clue>
      </li>
    </ul>
    <br />
    <Crossword
      data={crosswordGrid}
      fill={crosswordFill}
      shading={crosswordShade}
    />
    <p>
      Each of these has an associated baseball position in the "Who's on First"
      routine. Their positions are:
    </p>
    <ul>
      <li>Second base</li>
      <li>First base</li>
      <li>Shortstop</li>
      <li>Center field</li>
      <li>Third base</li>
      <li>Shortstop</li>
    </ul>
    <p>
      Each of these positions can be treated as a cryptic indicator (as hinted
      at by similar uses of player position names in soccer, American football,
      and 43-man Squamish): first, second and third base are the first, second,
      and third letters of <Clue>BASE</Clue>, center field is the the center
      letter of <Clue>FIELD</Clue>, and shortstop is the letter where the word{' '}
      <Clue>SHORT</Clue> stops. Applying these indicators in order of basepath
      appearance spells the answer <Answerize>{ANSWER}</Answerize>.
    </p>

    <style jsx global>{`
      .clues-table td:nth-child(2) {
        text-align: right;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
