import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'fren-amis';

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

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <FlavorText>
        Double agents, who say the same thing to both sides to get different
        interpretations, have disguised themselves in 10 clues. Their
        disguises must be removed for these clues to parse correctly.
      </FlavorText>
      <div ref={ref}>
        <Crossword data={crosswordData} />
        <div className="prefer-2-col">
          <div className="md:w-1/2 my-4">
            <h3>Across</h3>
            <ol>
              <li value="1">Feature of endless country</li>
              <li value="5">
                Mercabilis invasi, aliquantus sero coepi, in fine sex perdidi
              </li>
              <li value="10">Noget for roterende okse fik en ny begyndelse</li>
              <li value="14">
                En populær ting at gøre i Ekkodalen er åbent i centrum
              </li>
              <li value="15">
                Coloque meia soberana e meio chifre, por exemplo, juntos para
                criar feixes de luz
              </li>
              <li value="16">
                Tänker två röster omfamnar rolighet, till en början
              </li>
              <li value="17">Hjerteløs, ulykkelig og anderledes</li>
              <li value="18">Confusione mitologica? Andiamo</li>
              <li value="20">
                Når et par dukker op, bliver de sat på en kalender
              </li>
              <li value="22">
                Autour du pièce de monnaie, garçons sans cœurs le sonnent à la
                fin
              </li>
              <li value="23">Esportlag påbörjar nytt intressant projekt</li>
              <li value="24">Vedartad plats att bygga ett hus?</li>
              <li value="25">Nie taki wysoki, skinie w zamieszaniu</li>
              <li value="27">Luzifers Nase achtlos zu befreien</li>
              <li value="33">
                Rózne ujscia rzek tworza wiele okraglych dróg dla wody
              </li>
              <li value="34">
                Molho com chocolate e pimentas é fácil de moldar
              </li>
              <li value="35">Nahkiaisia ilman sisäpuolia!</li>
              <li value="39">Onormal ande slog ihop</li>
              <li value="41">Aligns, interprets, takes out, takes in</li>
              <li value="43">
                Seebrücke ist leise, jetzt wo Bar in z.B. Bayrisch Die Hölle weg
                ist
              </li>
              <li value="44">
                Cassez Eugène et Zoé après un revêtement non brillant
              </li>
              <li value="46">
                Spadnie w zamieszanie, gdy ciasta wyjdzie bez czegos w srodku
                pewnego okresu
              </li>
              <li value="47">Star Wars initially is different inside</li>
              <li value="48">N'est on mitera produire des poupées</li>
              <li value="52">
                Ad cogitandum omnis recte primo infiltrare mille quinquaginta
                duo
              </li>
              <li value="55">W srodku i bokami plywaja w rosole</li>
              <li value="56">Tercio periódicamente es repetitivo</li>
              <li value="57">
                Atobá-pardo perdeu metade superior, estava embriagado
              </li>
              <li value="60">Owoc i kwiat na obrazie pulsu nie ma</li>
              <li value="64">
                Puoli ulkomaisessa ensin menee valitettavasti hämmentyneenä ja
                piilossa
              </li>
              <li value="67">
                Demo de alguma forma pode ser verdadeira se eles estiverem com
                agarramento
              </li>
              <li value="68">
                Borg assimileret slangehoved, centrale ingredienser i blod og
                elefanthale
              </li>
              <li value="69">Schauspieler Maximilian Lucas: irre</li>
              <li value="70">Viscera? Romuli uxor dimidium amisit</li>
              <li value="71">Seulement les deux tiers cuits? C'est facile</li>
              <li value="72">Orti plachi maschio perso pochi diversi</li>
              <li value="73">
                Grand métal trouvé dans les capitales de France et de Thaïlande
              </li>
            </ol>
          </div>
          <div className="md:w-1/2 my-4">
            <h3>Down</h3>
            <ol>
              <li value="1">Mostly vulgar filth</li>
              <li value="2">Kvarhålla Karl och Viktor och lämna en grotta</li>
              <li value="3">Abire summa quando avis vadens mutat caudam</li>
              <li value="4">
                Flagito gentem quae retrocessit tegumen amisitque commerciorum
              </li>
              <li value="5">
                Er stellt sich vor, dass Siegfried und Norbert in zerstörten
                Ratstürmen zurück gelassen werden
              </li>
              <li value="6">Jämna amsagor, så att säga</li>
              <li value="7">Livlig tecknad mus</li>
              <li value="8">
                Die Füllung eines traditionellen Weihnachtskuchens ist großartig
              </li>
              <li value="9">
                Most people like hosting (at first) Sandford Fleming
              </li>
              <li value="10">Source of dough used to begin making tamales</li>
              <li value="11">
                Håndlanger veksler en smule penge for et stykke kage
              </li>
              <li value="12">Conexi externum inimicos reduxit</li>
              <li value="13">Deripe primum signum discriminis vitare!</li>
              <li value="19">Aisne coule dans un 9</li>
              <li value="21">Extremer Ersatz!</li>
              <li value="26">
                Instantánea no electrónica de hogazas en aumento
              </li>
              <li value="27">
                En retning, man kan gå i fuld prut, hvis man har ikke tid senere
              </li>
              <li value="28">Motorväg bytte en bit, fick lite futhark</li>
              <li value="29">Regrediens ex mediis tartareum exstitit</li>
              <li value="30">
                Classica monumento si tolse quasi interamente gambali sporchi
              </li>
              <li value="31">
                O queridinho da professora: cancelo perambular pelos limites de
                Natal
              </li>
              <li value="32">Usher started singing quarter note in the end</li>
              <li value="36">Sounded angry, I hear - be silent</li>
              <li value="37">
                Dækkede alt undtagen udendørs gulv på et skib at gøre sløv
              </li>
              <li value="38">
                Troianus princeps caput abscissum vertitque in plantam
              </li>
              <li value="40">Chaque seconde partie de miel</li>
              <li value="42">Viestisi Simo saan käsittämättömän</li>
              <li value="45">Regardez, arbitre! Ce centre est étrange</li>
              <li value="49">Consegua sciare con noncuranza</li>
              <li value="50">
                Jolle tog prostituerad på kaffe, mjölk och tårta
              </li>
              <li value="51">
                Arriver après l'heure convenue pour traire alternativement d'un
                château
              </li>
              <li value="52">
                Sala da pranzo del monastero ha invertito direzione per le
                preghiere
              </li>
              <li value="53">O okolo dwa i pól centymetra i uratuje</li>
              <li value="54">Adolescentes filtran patógeno de paleontólogos</li>
              <li value="58">
                50/50 odds beer as aperitif might start a fight
              </li>
              <li value="59">Jälkeenpäin katsottuna taso on monessa osassa</li>
              <li value="61">Insensato discípulo foi cortado ao meio</li>
              <li value="62">Small dam is weirdly unfinished</li>
              <li value="63">Dimidium succlamat: diligat</li>
              <li value="65">Traté tomar eliminación de piel, entonce ligué</li>
              <li value="66">
                Dirección desde Alberta para encontrar atún o primeros signos de
                sabrosas uvas rojas
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
