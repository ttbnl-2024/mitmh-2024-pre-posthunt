import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import Crossword, { Colors, X } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'fren-amis';
const ANSWER = `OGATA SHUMA`;

const _: '' = '';

const crosswordData = [
  [1, 2, 3, 4, X, 5, 6, 7, 8, 9, X, 10, 11, 12, 13],
  [14, _, _, _, X, 15, _, _, _, _, X, 16, _, _, _],
  [17, _, _, _, X, 18, _, _, _, _, 19, _, _, _, _],
  [20, _, _, _, 21, _, X, 22, _, _, _, X, 23, _, _],
  [X, X, X, 24, _, _, X, X, X, 25, _, 26, _, _, _],
  [27, 28, 29, _, _, _, 30, 31, 32, _, _, _, X, X, X],
  [33, _, _, X, X, 34, _, _, _, X, 35, _, 36, 37, 38],
  [39, _, _, 40, X, 41, _, _, _, 42, X, 43, _, _, _],
  [44, _, _, _, 45, X, 46, _, _, _, X, X, 47, _, _],
  [X, X, X, 48, _, 49, _, _, _, _, 50, 51, _, _, _],
  [52, 53, 54, _, _, _, X, X, X, 55, _, _, X, X, X],
  [56, _, _, X, 57, _, 58, 59, X, 60, _, _, 61, 62, 63],
  [64, _, _, 65, _, _, _, _, 66, _, X, 67, _, _, _],
  [68, _, _, _, X, 69, _, _, _, _, X, 70, _, _, _],
  [71, _, _, _, X, 72, _, _, _, _, X, 73, _, _, _],
];

const crosswordFill = [
  ['C', 'H', 'I', 'N', _, 'E', 'M', 'P', 'T', 'A', _, 'A', 'K', 'S', 'E'],
  ['R', 'Å', 'B', 'E', _, 'R', 'A', 'I', 'O', 'S', _, 'T', 'R', 'O', 'R'],
  ['U', 'L', 'I', 'G', _, 'T', 'O', 'G', 'L', 'I', 'A', 'M', 'O', 'C', 'I'],
  ['D', 'A', 'T', 'O', 'E', 'R', _, 'G', 'L', 'A', 'S', _, 'N', 'I', 'P'],
  [_, _, _, 'T', 'R', 'A', _, _, _, 'N', 'I', 'S', 'K', 'I', 'E'],
  ['F', 'R', 'E', 'I', 'Z', 'U', 'L', 'A', 'S', 'S', 'E', 'N', _, _, _],
  ['R', 'U', 'R', _, _, 'M', 'O', 'L', 'E', _, 'N', 'A', 'H', 'K', 'A'],
  ['E', 'N', 'A', 'D', _, 'T', 'R', 'U', 'E', 'S', _, 'P', 'I', 'E', 'R'],
  ['M', 'A', 'T', 'E', 'Z', _, 'D', 'N', 'I', 'A', _, _, 'S', 'D', 'I'],
  [_, _, _, 'M', 'A', 'R', 'I', 'O', 'N', 'N', 'E', 'T', 'T', 'E', 'S'],
  ['M', 'O', 'L', 'I', 'R', 'I', _, _, _, 'O', 'K', 'A', _, _, _],
  ['E', 'C', 'O', _, 'B', 'E', 'B', 'O', _, 'M', 'A', 'R', 'T', 'W', 'A'],
  ['S', 'A', 'L', 'A', 'I', 'S', 'E', 'S', 'S', 'A', _, 'D', 'O', 'E', 'M'],
  ['S', 'L', 'O', 'T', _, 'C', 'L', 'A', 'U', 'S', _, 'I', 'L', 'I', 'A'],
  ['A', 'I', 'S', 'É', _, 'A', 'L', 'T', 'R', 'I', _, 'F', 'O', 'R', 'T'],
];

const { C5, C8 } = Colors;
const crosswordShade = [
  [C8, C5, C8, C8, _, _, _, _, _, _, _, _, _, _, C5],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, C8],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, C8],
  [_, _, _, _, _, _, _, C5, C8, C8, C8, _, _, _, C8],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, C8],
  [_, C5, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, C8, _, _, _, C8, C5, C8, C8, _, _, _, _, _, _],
  [_, C8, _, _, _, _, _, _, _, _, _, C8, C8, C8, C5],
  [_, C8, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, C5, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, C8, _, C8, _, _, _, _, _, _],
  [C8, C8, C5, C8, _, _, C8, _, C8, _, _, _, _, _, _],
  [_, _, _, _, _, _, C8, _, C5, _, _, C8, C5, C8, C8],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      These are cryptic crossword clues in 11 languages. The first step is to
      solve each of the clues. All of the answers will fit into the given grid.
      As clued by the flavortext, we must modify 10 clues to remove the
      disguises of "double agents"&mdash;these are false friends between that
      language and English.
    </p>
    <p>
      For example, clue 22A currently reads "Autour du pièce de monnaie, garçons
      sans cœurs le sonnent à la fin." To solve, it should instead read "Autour
      du <b>coin</b>, garçons sans cœurs le sonnent à la fin." The French word
      "coin" was replaced by "pièce de monnaie", which is French for the English
      word "coin".
    </p>
    <p>The answers and explanations are below.</p>
    <h3 className="my-4">Across</h3>
    <Table className="across-table">
      <thead>
        <tr>
          <th></th>
          <th>Word</th>
          <th>Language</th>
          <th>English</th>
          <th>Clue and modification</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CHIN</td>
          <td>English</td>
          <td></td>
          <td>Feature of endless country</td>
          <td>CHIN(A)</td>
        </tr>
        <tr>
          <td>5</td>
          <td>EMPTA</td>
          <td>Latin</td>
          <td>purchased (f)</td>
          <td>Mercabilis invasi, aliquantus sero coepi, in fine sex perdidi</td>
          <td>(T)EMPTA(VI)</td>
        </tr>
        <tr>
          <td>10</td>
          <td>AKSE</td>
          <td>Danish</td>
          <td>axis</td>
          <td>Noget for roterende okse fik en ny begyndelse</td>
          <td>OKSE &rarr; AKSE</td>
        </tr>
        <tr>
          <td>14</td>
          <td>RÅBE</td>
          <td>Danish</td>
          <td>cry out</td>
          <td>En populær ting at gøre i Ekkodalen er åbent i centrum</td>
          <td>container RÅBE</td>
        </tr>
        <tr>
          <td>15</td>
          <td>RAIOS</td>
          <td>Portuguese</td>
          <td>(light) rays</td>
          <td>
            Coloque meia soberana e meio chifre, por exemplo, juntos para criar
            feixes de luz
          </td>
          <td>RAI(NHA) + OS(SO)</td>
        </tr>
        <tr>
          <td>16</td>
          <td>TROR</td>
          <td>Swedish</td>
          <td>believe</td>
          <td>Tänker två röster omfamnar rolighet, till en början</td>
          <td>initials TROR</td>
        </tr>
        <tr>
          <td>17</td>
          <td>ULIG</td>
          <td>Danish</td>
          <td>different</td>
          <td>Hjerteløs, ulykkelig og anderledes</td>
          <td>UL(YKKEL)IG</td>
        </tr>
        <tr>
          <td>18</td>
          <td>TOGLIAMOCI</td>
          <td>Italian</td>
          <td>Let's leave!</td>
          <td>Confusione mitologica? Andiamo</td>
          <td>(MITOLOGICA)* = TOGLIAMOCI</td>
        </tr>
        <tr>
          <td>20</td>
          <td>DATOER</td>
          <td>Danish</td>
          <td>dates</td>
          <td>Når et par dukker op, bliver de sat på en kalender</td>
          <td>DA + TO + ER</td>
        </tr>
        <tr>
          <td>22</td>
          <td>GLAS</td>
          <td>French</td>
          <td>funeral bell</td>
          <td>
            Autour du <u>pièce de monnaie</u>, garçons sans cœurs le sonnent à
            la fin
            <br />
            <Clue>COIN &rarr; PIECE DE MONNAIE</Clue>
          </td>
          <td>G(L)AS</td>
        </tr>
        <tr>
          <td>23</td>
          <td>NIP</td>
          <td>Swedish</td>
          <td></td>
          <td>Esportlag påbörjar nytt intressant projekt</td>
          <td>init. NIP</td>
        </tr>
        <tr>
          <td>24</td>
          <td>TRÄ</td>
          <td>Swedish</td>
          <td>wood</td>
          <td>Vedartad plats att bygga ett hus?</td>
          <td>double def. TRÄ</td>
        </tr>
        <tr>
          <td>25</td>
          <td>NISKIE</td>
          <td>Polish</td>
          <td>low</td>
          <td>Nie taki wysoki, skinie w zamieszaniu</td>
          <td>(SKINIE)* = NISKIE</td>
        </tr>
        <tr>
          <td>27</td>
          <td>FREIZULASSEN</td>
          <td>German</td>
          <td>to release</td>
          <td>Luzifers Nase achtlos zu befreien</td>
          <td>(LUZIFERSNASE)* = FREIZULASSEN</td>
        </tr>
        <tr>
          <td>33</td>
          <td>RUR</td>
          <td>Polish</td>
          <td>pipes</td>
          <td>Różne ujścia rzek tworzą wiele okrągłych dróg dla wody</td>
          <td>init. RUR</td>
        </tr>
        <tr>
          <td>34</td>
          <td>MOLE</td>
          <td>Portuguese</td>
          <td>soft</td>
          <td>Molho com chocolate e pimentas é fácil de moldar</td>
          <td>double def. MOLE</td>
        </tr>
        <tr>
          <td>35</td>
          <td>NAHKA</td>
          <td>Finnish</td>
          <td>leather</td>
          <td>Nahkiaisia ilman sisäpuolia!</td>
          <td>NAHK[IAISI]A</td>
        </tr>
        <tr>
          <td>39</td>
          <td>ENAD</td>
          <td>Swedish</td>
          <td>oath</td>
          <td>Onormal ande slog ihop</td>
          <td>(ANDE)* = ENAD</td>
        </tr>
        <tr>
          <td>41</td>
          <td>TRUES</td>
          <td>English</td>
          <td></td>
          <td>Aligns, interprets, takes out, takes in</td>
          <td>CONSTRUES - CONS</td>
        </tr>
        <tr>
          <td>43</td>
          <td>PIER</td>
          <td>German</td>
          <td>pier</td>
          <td>
            Seebrücke ist leise, jetzt wo Bar in z.B. Bayrisch <u>Die Hölle</u>{' '}
            weg ist
            <br />
            <Clue>HELL &rarr; DIE HÖLLE</Clue>
          </td>
          <td>(B&rarr;P)IER</td>
        </tr>
        <tr>
          <td>44</td>
          <td>MATEZ</td>
          <td>French</td>
          <td>bring to heel</td>
          <td>Cassez Eugène et Zoé après un revêtement non brillant</td>
          <td>MAT + EZ</td>
        </tr>
        <tr>
          <td>46</td>
          <td>DNIA</td>
          <td>Polish</td>
          <td>gen. daytime</td>
          <td>
            Spadnie w zamieszanie, gdy <u>ciasta</u> wyjdzie bez czegoś w środku
            pewnego okresu
            <br />
            <Clue>PIES &rarr; CIASTA</Clue>
          </td>
          <td>(SPADNIE - [PIES - I])*</td>
        </tr>
        <tr>
          <td>47</td>
          <td>SDI</td>
          <td>English</td>
          <td></td>
          <td>Star Wars initially is different inside</td>
          <td>container SDI</td>
        </tr>
        <tr>
          <td>48</td>
          <td>MARIONNETTES</td>
          <td>French</td>
          <td>marionnettes</td>
          <td>N'est on mitera produire des poupées</td>
          <td>(NESTONMITERA)* = MARIONNETTES</td>
        </tr>
        <tr>
          <td>52</td>
          <td>MOLIRI</td>
          <td>Latin</td>
          <td>to plan</td>
          <td>
            Ad cogitandum omnis recte primo infiltrare mille quinquaginta duo
          </td>
          <td>OR inside MLII</td>
        </tr>
        <tr>
          <td>55</td>
          <td>OKA</td>
          <td>Polish</td>
          <td>of the eye</td>
          <td>W środku i bokami pływają w rosole</td>
          <td>container OKA</td>
        </tr>
        <tr>
          <td>56</td>
          <td>ECO</td>
          <td>Spanish</td>
          <td>echo</td>
          <td>Tercio periódicamente es repetitivo</td>
          <td>alternating TERCIO &rarr; ECO</td>
        </tr>
        <tr>
          <td>57</td>
          <td>BEBO</td>
          <td>Portuguese</td>
          <td>drunk (colloquial)</td>
          <td>Atobá-pardo perdeu metade superior, estava embriagado</td>
          <td>[MUM]BEBO</td>
        </tr>
        <tr>
          <td>60</td>
          <td>MARTWA</td>
          <td>Polish</td>
          <td>dead (female, singular)</td>
          <td>Owoc i kwiat na obrazie pulsu nie ma</td>
          <td>double def. MARTWA</td>
        </tr>
        <tr>
          <td>64</td>
          <td>SALAISESSA</td>
          <td>Finnish</td>
          <td>in secret</td>
          <td>
            Puoli ulkomaisessa ensin menee <u>valitettavasti</u> hämmentyneenä
            ja piilossa
            <br />
            <Clue>ALAS &rarr; VALITETTAVASTI</Clue>
          </td>
          <td>(ALAS)*ISESSA &rarr; SALAISESSA</td>
        </tr>
        <tr>
          <td>67</td>
          <td>DOEM</td>
          <td>Portuguese</td>
          <td>they (pl) are hurting</td>
          <td>
            Demo de alguma forma pode ser verdadeira se eles estiverem com{' '}
            <u>agarramento</u>
            <br />
            <Clue>GRIPE &rarr; AGARRAMENTO</Clue>
          </td>
          <td>(DEMO)* = DOEM</td>
        </tr>
        <tr>
          <td>68</td>
          <td>SLOT</td>
          <td>Danish</td>
          <td>castle</td>
          <td>
            Borg assimileret slangehoved, centrale ingredienser i blod og
            elefanthale
          </td>
          <td>S + LO + T</td>
        </tr>
        <tr>
          <td>69</td>
          <td>CLAUS</td>
          <td>German</td>
          <td>name</td>
          <td>Schauspieler Maximilian Lucas: irre</td>
          <td>(LUCAS)* &rarr; CLAUS</td>
        </tr>
        <tr>
          <td>70</td>
          <td>ILIA</td>
          <td>Latin</td>
          <td>anatomical</td>
          <td>Viscera? Romuli uxor dimidium amisit</td>
          <td>[HERS]ILIA</td>
        </tr>
        <tr>
          <td>71</td>
          <td>AISÉ</td>
          <td>French</td>
          <td>easy</td>
          <td>Seulement les deux tiers cuits? C'est facile</td>
          <td>[BR]AISÉ</td>
        </tr>
        <tr>
          <td>72</td>
          <td>ALTRI</td>
          <td>Italian</td>
          <td>other(s)</td>
          <td>
            Orti plachi <u>maschio</u> perso pochi diversi
            <br />
            <Clue>MALE &rarr; MASCHIO</Clue>
          </td>
          <td>(ORTIPLACHI - POCHI)* = ALTRI</td>
        </tr>
        <tr>
          <td>73</td>
          <td>FORT</td>
          <td>French</td>
          <td>strong</td>
          <td>
            Grand métal trouvé dans les capitales de France et de Thaïlande
          </td>
          <td>F(OR)T</td>
        </tr>
      </tbody>
    </Table>

    <h3 className="my-4">Down</h3>
    <Table className="down-table">
      <thead>
        <tr>
          <th></th>
          <th>Word</th>
          <th>Language</th>
          <th>English</th>
          <th>Clue and modification</th>
          <th>Rationale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CRUD</td>
          <td>English</td>
          <td></td>
          <td>Mostly vulgar filth</td>
          <td>CRUD[E]</td>
        </tr>
        <tr>
          <td>2</td>
          <td>HÅLA</td>
          <td>Swedish</td>
          <td>deep hole</td>
          <td>Kvarhålla Karl och Viktor och lämna en grotta</td>
          <td>KVÄRHÅLLA - KARL - V</td>
        </tr>
        <tr>
          <td>3</td>
          <td>IBIT</td>
          <td>Latin</td>
          <td>i will go</td>
          <td>
            Abire <u>summa</u> quando avis vadens mutat caudam
            <br />
            <Clue>SUM &rarr; SUMMA</Clue>
          </td>
          <td>IBI(S&rarr;T)</td>
        </tr>
        <tr>
          <td>4</td>
          <td>NEGOTI</td>
          <td>Latin</td>
          <td>business (gen.)</td>
          <td>
            Flagito gentem quae retrocessit tegumen amisitque commerciorum
          </td>
          <td>rev ITOGEN</td>
        </tr>
        <tr>
          <td>5</td>
          <td>ERTRÄUMT</td>
          <td>German</td>
          <td>he dreams</td>
          <td>
            Er stellt sich vor, dass Siegfried und Norbert in zerstörten
            Ratstürmen zurück gelassen werden
          </td>
          <td>(RAT[S]TURME[N])* = ERTRAUMT</td>
        </tr>
        <tr>
          <td>6</td>
          <td>MAO</td>
          <td>Swedish</td>
          <td>med andra ord</td>
          <td>Jämna amsagor, så att säga</td>
          <td>MAO</td>
        </tr>
        <tr>
          <td>7</td>
          <td>PIGG</td>
          <td>Swedish</td>
          <td>woken up / alert</td>
          <td>Livlig tecknad mus</td>
          <td>PIGG (double def.)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TOLL</td>
          <td>German</td>
          <td>great, nice (coll.)</td>
          <td>
            Die Füllung eines traditionellen Weihnachtskuchens ist großartig
          </td>
          <td>(S)TOLL(EN)</td>
        </tr>
        <tr>
          <td>9</td>
          <td>ASIANS</td>
          <td>English</td>
          <td></td>
          <td>Most people like hosting (at first) Sandford Fleming</td>
          <td>A(S + IAN)S</td>
        </tr>
        <tr>
          <td>10</td>
          <td>ATM</td>
          <td>English</td>
          <td></td>
          <td>Source of dough used to begin making tamales</td>
          <td>(TAM)* = ATM</td>
        </tr>
        <tr>
          <td>11</td>
          <td>KRONK</td>
          <td>Danish</td>
          <td>character</td>
          <td>Håndlanger veksler en smule penge for et stykke kage</td>
          <td>KRON(E &rarr; K)</td>
        </tr>
        <tr>
          <td>12</td>
          <td>SOCII</td>
          <td>Latin</td>
          <td>associated</td>
          <td>Conexi externum inimicos reduxit</td>
          <td>rev. I*ICOS</td>
        </tr>
        <tr>
          <td>13</td>
          <td>ERIPE</td>
          <td>Latin</td>
          <td>(you) rescue</td>
          <td>Deripe primum signum discriminis vitare!</td>
          <td>[D]ERIPE</td>
        </tr>
        <tr>
          <td>19</td>
          <td>ASIEN</td>
          <td>French</td>
          <td>Asian</td>
          <td>Aisne coule dans un 9</td>
          <td>(AISNE)* = ASIEN</td>
        </tr>
        <tr>
          <td>21</td>
          <td>ERZ</td>
          <td>German</td>
          <td>ultra (prefix)</td>
          <td>Extremer Ersatz!</td>
          <td>ER(SAT)Z</td>
        </tr>
        <tr>
          <td>26</td>
          <td>SNAP</td>
          <td>Spanish</td>
          <td>photograph</td>
          <td>Instantánea no electrónica de hogazas en aumento</td>
          <td>(PANES - E)</td>
        </tr>
        <tr>
          <td>27</td>
          <td>FREM</td>
          <td>Danish</td>
          <td>forward</td>
          <td>
            En retning, man kan gå i fuld <u>prut</u>, hvis man har ikke tid
            senere
            <br />
            <Clue>FART &rarr; PRUT</Clue>
          </td>
          <td>FREMTID - TID</td>
        </tr>
        <tr>
          <td>28</td>
          <td>RUNA</td>
          <td>Swedish</td>
          <td>rune</td>
          <td>Motorväg bytte en bit, fick lite futhark</td>
          <td>RU(T &rarr; N)A</td>
        </tr>
        <tr>
          <td>29</td>
          <td>ERAT</td>
          <td>Latin</td>
          <td>was (3p sing)</td>
          <td>Regrediens ex mediis tartareum exstitit</td>
          <td>rev. container ERAT</td>
        </tr>
        <tr>
          <td>30</td>
          <td>LORDI</td>
          <td>Italian</td>
          <td>filthy</td>
          <td>Classica monumento si tolse quasi interamente gambali sporchi</td>
          <td>IL LOMBARDIA - AMBALI</td>
        </tr>
        <tr>
          <td>31</td>
          <td>ALUNO</td>
          <td>Portuguese</td>
          <td>student</td>
          <td>
            O queridinho da professora: cancelo perambular pelos limites de
            Natal
          </td>
          <td>(ANULO)* = ALUNO</td>
        </tr>
        <tr>
          <td>32</td>
          <td>SEEIN</td>
          <td>English</td>
          <td></td>
          <td>Usher started singing quarter note in the end</td>
          <td>S + E + E + IN</td>
        </tr>
        <tr>
          <td>36</td>
          <td>HIST</td>
          <td>English</td>
          <td></td>
          <td>Sounded angry, I hear - be silent</td>
          <td>homophone HISSED</td>
        </tr>
        <tr>
          <td>37</td>
          <td>KEDE</td>
          <td>Danish</td>
          <td>bored</td>
          <td>Dækkede alt undtagen udendørs gulv på et skib at gøre sløv</td>
          <td>DÆKKEDE - DÆK</td>
        </tr>
        <tr>
          <td>38</td>
          <td>ARIS</td>
          <td>Latin</td>
          <td>plant name</td>
          <td>Troianus princeps caput abscissum vertitque in plantam</td>
          <td>[P]ARIS</td>
        </tr>
        <tr>
          <td>40</td>
          <td>DEMI</td>
          <td>French</td>
          <td>half</td>
          <td>Chaque seconde partie de miel</td>
          <td>container DEMI</td>
        </tr>
        <tr>
          <td>42</td>
          <td>SANOMASI</td>
          <td>Finnish</td>
          <td>what you said</td>
          <td>Viestisi Simo saan käsittämättömän</td>
          <td>(SIMOSAAN)* = SANOMASI</td>
        </tr>
        <tr>
          <td>45</td>
          <td>ZARBI</td>
          <td>French</td>
          <td>bizarre (verlan)</td>
          <td>Regardez, arbitre! Ce centre est étrange</td>
          <td>container ZARBI</td>
        </tr>
        <tr>
          <td>49</td>
          <td>RIESCA</td>
          <td>Italian</td>
          <td>succeed 3rd p</td>
          <td>Consegua sciare con noncuranza</td>
          <td>(SCIARE)* = RIESCA</td>
        </tr>
        <tr>
          <td>50</td>
          <td>EKA</td>
          <td>Swedish</td>
          <td>row boat</td>
          <td>
            Jolle tog <u>prostituerad</u> på kaffe, mjölk och tårta
            <br />
            <Clue>SLUT &rarr; PROSTITUTERAD</Clue>
          </td>
          <td>E + K + A</td>
        </tr>
        <tr>
          <td>51</td>
          <td>TARDIF</td>
          <td>French</td>
          <td>late</td>
          <td>
            Arriver après l'heure convenue pour traire alternativement d'un
            château
          </td>
          <td>TAR + D'IF</td>
        </tr>
        <tr>
          <td>52</td>
          <td>MESSA</td>
          <td>Italian</td>
          <td>mass (religious)</td>
          <td>
            Sala da pranzo del monastero ha invertito direzione per le preghiere
          </td>
          <td>ME(N&rarr;S)SA</td>
        </tr>
        <tr>
          <td>53</td>
          <td>OCALI</td>
          <td>Polish</td>
          <td>(will) save</td>
          <td>O około dwa i pół centymetra i uratuje</td>
          <td>O + CAL + I</td>
        </tr>
        <tr>
          <td>54</td>
          <td>LOLOS</td>
          <td>Spanish</td>
          <td>teenagers (colloquial)</td>
          <td>Adolescentes filtran patógeno de paleontólogos</td>
          <td>PALENTÓLOGICOS - PATÓGENO = LOLOS</td>
        </tr>
        <tr>
          <td>58</td>
          <td>BELL</td>
          <td>English</td>
          <td></td>
          <td>50/50 odds beer as aperitif might start a fight</td>
          <td>BE + L/L</td>
        </tr>
        <tr>
          <td>59</td>
          <td>OSAT</td>
          <td>Finnish</td>
          <td>parts</td>
          <td>Jälkeenpäin katsottuna taso on monessa osassa</td>
          <td>rev. TASO &rarr; OSAT</td>
        </tr>
        <tr>
          <td>61</td>
          <td>TOLO</td>
          <td>Portuguese</td>
          <td>silly</td>
          <td>Insensato discípulo foi cortado ao meio</td>
          <td>[APOS]TOLO</td>
        </tr>
        <tr>
          <td>62</td>
          <td>WEIR</td>
          <td>English</td>
          <td></td>
          <td>Small dam is weirdly unfinished</td>
          <td>WEIR[DLY]</td>
        </tr>
        <tr>
          <td>63</td>
          <td>AMAT</td>
          <td>Latin</td>
          <td>loves (3rd p)</td>
          <td>Dimidium succlamat: diligat</td>
          <td>[EXCL]AMAT</td>
        </tr>
        <tr>
          <td>65</td>
          <td>ATÉ</td>
          <td>Spanish</td>
          <td>tied (preterite)</td>
          <td>Traté tomar eliminación de piel, entonce ligué</td>
          <td>[TR]ATÉ</td>
        </tr>
        <tr>
          <td>66</td>
          <td>SUR</td>
          <td>Spanish</td>
          <td>south</td>
          <td>
            Dirección desde Alberta para encontrar <u>atún</u> o primeros signos
            de sabrosas uvas rojas
            <br />
            <Clue>TUNA &rarr; ATUN</Clue>
          </td>
          <td>SUR initials</td>
        </tr>
      </tbody>
    </Table>
    <p>This produces the following grid:</p>
    <Crossword
      data={crosswordData}
      fill={crosswordFill}
      shading={crosswordShade}
    />
    <p>
      Finally, we examine the ten false friends, one between English and each
      non-English language. Each has a counterpart in the grid with one letter
      changed, highlighted above. In grid order, these are:
    </p>
    <Table className="ff-table">
      <thead>
        <tr>
          <th>Language</th>
          <th>False Friend</th>
          <th>Grid Entry</th>
          <th>Grid Letter</th>
          <th>FF Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>French</td>
          <td>COIN</td>
          <td>CHIN</td>
          <td>H</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Portuguese</td>
          <td>GRIPE</td>
          <td>ERIPE</td>
          <td>E</td>
          <td>G</td>
        </tr>
        <tr>
          <td>Finnish</td>
          <td>ALAS</td>
          <td>GLAS</td>
          <td>G</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Spanish</td>
          <td>TUNA</td>
          <td>RUNA</td>
          <td>R</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Italian</td>
          <td>MALE</td>
          <td>MOLE</td>
          <td>O</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Polish</td>
          <td>PIES</td>
          <td>PIEL</td>
          <td>R</td>
          <td>S</td>
        </tr>
        <tr>
          <td>German</td>
          <td>HELL</td>
          <td>BELL</td>
          <td>B</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Swedish</td>
          <td>SLUT</td>
          <td>SLOT</td>
          <td>O</td>
          <td>U</td>
        </tr>
        <tr>
          <td>Latin</td>
          <td>SUM</td>
          <td>SUR</td>
          <td>R</td>
          <td>M</td>
        </tr>
        <tr>
          <td>Danish</td>
          <td>FART</td>
          <td>FORT</td>
          <td>O</td>
          <td>A</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Thus, the answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .across-table td:nth-child(2),
      .down-table td:nth-child(2),
      .across-table td:nth-child(6),
      .down-table td:nth-child(6),
      .across-table td:nth-child(7),
      .down-table td:nth-child(7),
      .ff-table td:nth-child(n + 2),
      .crossword .value {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .across-table td:nth-child(1),
      .down-table td:nth-child(1),
      .ff-table td:nth-child(n + 4) {
        text-align: center;
      }
      .across-table td,
      .down-table td {
        padding: 0.5em !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
