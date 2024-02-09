import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'transformations';
const ANSWER = `TRIER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      Each of the strings is a clue that has had some transformation applied to
      it, usually 2 or 3 operations involving replacing one letter with another.{' '}
      The transformation is applied to each word in the clue separately, then
      spaces are removed. The ungarbled version of each clue is a sentence (not
      a clue as is common in this type of puzzle) that is part of one of five
      Greek legends, corresponding with the 6 pictures. Each legend involves a
      person/people getting turned into an animal or plant (generally from an
      encounter with the gods), represented by the 6 pictures.
    </p>
    <p>
      Separate out the ungarbled sentences by legend and for each legend order
      the sentences according to the myth. For each myth, starting with the
      person(s) who was transformed and applying the associated transformations
      in order yields a sequence of reasonably common words, ending with the
      image representing what the person(s) was turned into. These words go in
      the blanks for each chain.
    </p>
    <p>
      Indexing into the words in each chain and reading chains left to right (in
      logical order for each chain) gives{' '}
      <Monospace>TARETRY MAER TAT COMREED AGAITT ATHNA</Monospace>.
    </p>
    <p>
      This is the garbled clue{' '}
      <Monospace>TAPESTRY MAKER THAT COMPETED AGAINST ATHENA</Monospace>, with
      the transformations "S→T, P→R, delete 3rd-to-last letter". The answer to
      this clue is <Monospace>ARACHNE</Monospace>. Applying this transformation
      to <Monospace>ARACHNE</Monospace> doesn't work, but first transforming{' '}
      <Monospace>ARACHNE</Monospace> to <Monospace>SPIDER</Monospace> like she
      was transformed in the myth, then transforming{' '}
      <Monospace>SPIDER</Monospace>, gives the final answer{' '}
      <Answerize>TRIER</Answerize>.
    </p>
    <Appendix>
      <style jsx global>{`
        td:first-child {
          overflow-wrap: break-word;
          max-width: 140px;
        }

        td:nth-child(5),
        td:nth-child(6) {
          text-align: center;
        }
      `}</style>
      <p>
        <Monospace>PIRATES</Monospace> to <Monospace>DOLPHINS</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>PIRATES</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>AEHASUSEAAAEDISGUISAOTAEBAOINCOGNITANOASHIASTRAVEL</td>
            <td>HE USES A DISGUISE TO BE INCOGNITO ON HIS TRAVELS</td>
            <td>Move last letter to start, prepend A</td>
            <td>
              <Monospace>ASPIRATE</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>SEAFRSEIZHESEMINGLYAFLUENMANFORRANSOMANDAKEHIMABORD</td>
            <td>
              SEAFARERS SEIZE THE SEEMINGLY AFFLUENT MAN FOR RANSOM AND TAKE HIM
              ABOARD
            </td>
            <td>
              Drop T, drop all but the first copy of every repeated letter
            </td>
            <td>
              <Monospace>ASPIRE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>RPOSCNTONUECMONGMYSTREOUSLYNTUEDBTHDOSNTSCEPE</td>
            <td>
              ROPES CONTINUE COMING MYSTERIOUSLY UNTIED BUT HE DOESNT ESCAPE
            </td>
            <td>Replace 2nd vowel with first, delete first vowel</td>
            <td>
              <Monospace>SPARE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              TLINGCEPTAIINGIKNOREINGTLINGOHDITINGARINGSITINGSEIINGARYWAING
            </td>
            <td>THE CAPTAIN IGNORES THE ODDITY AND SETS SAIL ANYWAY</td>
            <td>Shift second letter by +4, replace last letter with ING</td>
            <td>
              <Monospace>STARING</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>VYINEGROWRPYIDLYNDTHEWYINDFYILTOMOVETHEHYIP</td>
            <td>VINES GROW RAPIDLY AND THE WIND FAILS TO MOVE THE SHIP</td>
            <td>Delete S, delete A, add Y before I</td>
            <td>
              <Monospace>TRYING</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>HDRNSIDOAFROCIOUSBASDADPRSUESDEM</td>
            <td>HE TURNS INTO A FEROCIOUS BEAST AND PURSUES THEM</td>
            <td>Delete second letter, T→D</td>
            <td>
              <Monospace>DYING</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              NSWVEROLPHFRIGHTENSDTHEOLPHJUMPTOGETAWAOLPHFROM THEPANSEMONSUM
            </td>
            <td>
              NOW VERY FRIGHTENED THEY JUMP TO GET AWAY FROM THE PANDEMONIUM
            </td>
            <td>Y→OLPH, letter after N→S</td>
            <td>
              <Monospace>DOLPHINS</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p>
        <Monospace>MINTHE</Monospace> to <Monospace>MINT</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>MINTHE</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              DUGHTERLIVESAINHERMORSREGIAONDFLLSAINLOVEAWITHAOVERLORDAOFLD
            </td>
            <td>
              THE DAUGHTER LIVES IN HER MOTHERS REGION AND FALLS IN LOVE WITH
              THE OVERLORD OF THE LAND
            </td>
            <td>
              Remove articles (THE, AN, A), insert A before prepositions (IN,
              ON, WITH, OVER)
            </td>
            <td>
              <Monospace>MAIN</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              HECUREMRARISECURENATOHRECUREWMONACUREFATRECURESTELANIGCUREHRECUREWAYACURETOCUREHSICUREDMOANICURE
            </td>
            <td>
              HE MARRIES ANOTHER WOMAN AFTER STEALING HER AWAY TO HIS DOMAIN
            </td>
            <td>
              Shift vowels one spot later (or consonants one earlier) in the
              word, append CURE
            </td>
            <td>
              <Monospace>MANICURE</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              OHETJILTOEDLOOTERSOYTSOHETISMORTEBEATUTIOULONDTHEWOLTLRETTORNTOOERT
            </td>
            <td>
              THE JILTED LOVER SAYS SHE IS MORE BEAUTIFUL AND HE WILL RETURN TO
              HER
            </td>
            <td>3rd-to-last letter → O, insert T after 3rd letter</td>
            <td>
              <Monospace>MANTICORE</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              TMOTOFTWIFEINTERPRETTDECLIRITISIDISTISTINSULTINDFLITTHERINTTEIRTWITHERFEET
            </td>
            <td>
              THE MOTHER OF THE WIFE INTERPRETS THE DECLARATION AS A DISTASTEFUL
              INSULT AND FLATTENS HER INTO THE EARTH WITH HER FEET
            </td>
            <td>Delete everything after last T, A→I</td>
            <td>
              <Monospace>MINT</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p>
        <Monospace>CALLISTO</Monospace> to <Monospace>BEAR</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>CALLISTO</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>THAPRINBESABOMMITATABEINAFOREVEABHASTA</td>
            <td>THE PRINCESS COMMITS TO BEING FOREVER CHASTE</td>
            <td>C→B, last letter→A</td>
            <td>
              <Monospace>BALLISTA</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              DISGUISEDHESLTWITHTHEDEVOTTANDWHENHERSISTERHTEVENTUATLEARNSOFITSHEISEXPET
            </td>
            <td>
              DISGUISED HE SLEEPS WITH THE DEVOTEE AND WHEN HER SISTERHOOD
              EVENTUALLY LEARNS OF IT SHE IS EXPELLED
            </td>
            <td>
              If there's a double letter, replace it and everything following
              with T
            </td>
            <td>
              <Monospace>BAT</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              SEHEGEIVESBEIRRHREOAENIENFANRWEHOGEROWSUEPREOAELMOSRKEILLHEER
            </td>
            <td>
              SHE GIVES BIRTH TO AN INFANT WHO GROWS UP TO ALMOST KILL HER
            </td>
            <td>T→R, add E as 2nd letter</td>
            <td>
              <Monospace>BEAR</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p>
        <Monospace>CYGNUS</Monospace> to <Monospace>SWAN</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>CYGNUS / CYCNUS</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              TOVERIFOHIRPAREPTAGEHEJORRPEOSFARAWROTOAGRRPDPARACEIPTHREART
            </td>
            <td>
              TO VERIFY HIS PARENTAGE HE JOURNEYS FAR AWAY TO A GRAND PALACE IN
              THE EAST
            </td>
            <td>Y→O, N→P, 3rd letter→R</td>
            <td>
              <Monospace>CORPUS</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>HEASKBIIFHEMOUBIDBORBIOWHISFATBIERSEXMBIPTIONALVEHBIMLE</td>
            <td>HE ASKS IF HE COULD BORROW HIS FATHERS EXCEPTIONAL VEHICLE</td>
            <td>C→M, 4th letter→BI</td>
            <td>
              <Monospace>MORBIUS</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>TGOOVERCOGFDEENTHEDRVEESTGESPEGAELCHAGOETAGDLOGESCONGROL</td>
            <td>
              TOO OVERCONFIDENT HE DRIVES THE SPECIAL CHARIOT AND LOSES CONTROL
            </td>
            <td>Middle letter (if odd length) → G, I→E and move right one</td>
            <td>
              <Monospace>MORGUES</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>EERAKSEIRYSETRUCTIONOPNEHRATH</td>
            <td>HE WREAKS FIERY DESTRUCTION UPON THE EARTH</td>
            <td>Drop first letter, (previously) 3rd letter moves to start</td>
            <td>
              <Monospace>ROGUES</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              NINTHILSEKIRTSMIHNISNACMIHOTTEMMNLPSDRAWOTEHTDNNORNIDNALNIAREVIR
            </td>
            <td>
              LIGHTNING STRIKES HIM CAUSING HIM TO PLUMMET TOWARDS THE GROUND
              LANDING IN A RIVER
            </td>
            <td>Reverse, delete G, U→N</td>
            <td>
              <Monospace>SENOR</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>HEMAUNDSTHELASSAFHISFALLEDLAVENBYTHEBADKAFANIVEN</td>
            <td>
              HE MOURNS THE LOSS OF HIS FALLEN LOVER BY THE BANK OF A RIVER
            </td>
            <td>N→D, O→A, R→N</td>
            <td>
              <Monospace>SEDAN</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>D</Monospace>
            </td>
          </tr>
          <tr>
            <td>FOKHILDOOTIONTHXYTADPIMYONHIFANWASLUAGHILSUYFRING</td>
            <td>
              FOR HIS DEVOTION THEY TAKE PITY ON HIM AND ASSUAGE HIS SUFFERING
            </td>
            <td>Shift 3rd letter by -7, delete E</td>
            <td>
              <Monospace>SWAN</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p>
        <Monospace>NARCISSUS</Monospace> to <Monospace>FLOWER</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>NARCISSUS</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>AGEXCEEDONBEAUTONMAGSHEDESONTURGSDOWGHERAFFECTON</td>
            <td>
              AN EXCEEDINGLY BEAUTIFUL MAN SHE DESIRES TURNS DOWN HER AFFECTION
            </td>
            <td>N→G, replace everything after I (inclusive) with ON</td>
            <td>
              <Monospace>GARCON</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>RHEBULSESGIMAEFOLEFLADUALLYOININGZWAYELOMCESPAIL</td>
            <td>SHE CURSES HIM BEFORE GRADUALLY PINING AWAY FROM DESPAIR</td>
            <td>Shift 1st letter by -1, R→L</td>
            <td>
              <Monospace>FALCON</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>THMNUSAVENGEFKLULBEINONGDECIDIJESTOPUNINOSHHMNIM</td>
            <td>THUS A VENGEFUL BEING DECIDES TO PUNISH HIM</td>
            <td>
              After 3rd to last letter, insert 3rd-to-last letter Caesar shifted
              by +5 and then by +6
            </td>
            <td>
              <Monospace>FALCHION</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              INRLIATIONHEGIVESHIMADGETOCOOLOTTATATRESHDLESSPOOLOTWATERTHECOLOROTSAPRETOTAKEARESTETROMATANGHUNT
            </td>
            <td>
              IN RETALIATION HE GIVES HIM A NUDGE TO COOL OFF AT A FRESH MUDLESS
              POOL OF WATER THE COLOR OF SAPPHIRE TO TAKE A RESPITE FROM A
              TAXING HUNT
            </td>
            <td>F→T, delete greek letters (eta, nu, mu, phi, pi, xi)</td>
            <td>
              <Monospace>TALON</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>HEPRWMPTYFOSINWVEWITHTHEBEOUTYWFWHOTHEISWWKINGOT</td>
            <td>
              HE PROMPTLY FALLS IN LOVE WITH THE BEAUTY OF WHAT HE IS LOOKING AT
            </td>
            <td>O→W, A → O, delete L</td>
            <td>
              <Monospace>TOWN</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>UERABLEFLOOBFLAIERIFLHEPIERESAWAYFROMHEARFLACHE</td>
            <td>UNABLE TO OBTAIN IT HE PINES AWAY FROM HEARTACHE</td>
            <td>T→FL, N→ER</td>
            <td>
              <Monospace>FLOWER</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p>
        <Monospace>DAPHNE</Monospace> to <Monospace>LAUREL</Monospace>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Garbled</th>
            <th>Decrypted</th>
            <th>Transformation</th>
            <th>Transformed</th>
            <th>Index</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Monospace>DAPHNE</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              LUETOTOKIGFUATHISARCHERYTROWESSHEOFFELSALIFFERETARCHERWHOLECILESTOTLOTHISTAYBACK
            </td>
            <td>
              DUE TO POKING FUN AT HIS ARCHERY PROWESS HE OFFENDS A DIFFERENT
              ARCHER WHO DECIDES TO PLOT HIS PAYBACK
            </td>
            <td>D→L, P→T, delete N</td>
            <td>
              <Monospace>LATHE</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>BERBHOOTSFBWOBBEOPLERBITHUBISFBOWJBNDQBRROWSF</td>
            <td>HE SHOOTS TWO PEOPLE WITH HIS BOW AND ARROWS</td>
            <td>First letter → B, append last letter shifted by 13</td>
            <td>
              <Monospace>BATHER</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>H</Monospace>
            </td>
          </tr>
          <tr>
            <td>WHNLETNEMNNFENLSSTRNNGLYINFANNATEDSNEDNNSNNT</td>
            <td>WHILE THE MAN FEELS STRONGLY INFATUATED SHE DOES NOT</td>
            <td>Middle letter(s)→N</td>
            <td>
              <Monospace>BANNER</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>HEPULSUESTHETALGETOFHISDESILESARDEVERTUALLYFIRDSHEL</td>
            <td>
              HE PURSUES THE TARGET OF HIS DESIRES AND EVENTUALLY FINDS HER
            </td>
            <td>R→L, N→R</td>
            <td>
              <Monospace>BARREL</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>NHENEEYINAULYSUACHESREREHESUPEALSOORERRATHERROREUUISTANCE</td>
            <td>
              WHEN HE FINALLY REACHES HER SHE APPEALS TO HER FATHER FOR
              ASSISTANCE
            </td>
            <td>
              All but last copy of duplicate letter → U, replace first letter
              with copy of last
            </td>
            <td>
              <Monospace>LAUREL</Monospace>
            </td>
            <td>-</td>
            <td>
              <Monospace>-</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
