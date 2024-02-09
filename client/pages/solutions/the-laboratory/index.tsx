import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/puzzles/the-laboratory/0.png';
import image1 from 'assets/puzzles/the-laboratory/1.png';
import image2 from 'assets/puzzles/the-laboratory/2.png';
import image3 from 'assets/puzzles/the-laboratory/3.png';
import image4 from 'assets/puzzles/the-laboratory/4.png';
import image5 from 'assets/puzzles/the-laboratory/5.png';
import image6 from 'assets/puzzles/the-laboratory/6.png';
import image7 from 'assets/puzzles/the-laboratory/7.png';
import image8 from 'assets/puzzles/the-laboratory/8.png';
import image9 from 'assets/puzzles/the-laboratory/9.png';
import image10 from 'assets/puzzles/the-laboratory/10.png';
import image11 from 'assets/puzzles/the-laboratory/11.png';
import image12 from 'assets/puzzles/the-laboratory/12.png';
import image13 from 'assets/puzzles/the-laboratory/13.png';
import image14 from 'assets/puzzles/the-laboratory/14.png';
import image15 from 'assets/puzzles/the-laboratory/15.png';
import image16 from 'assets/puzzles/the-laboratory/16.png';
import image17 from 'assets/puzzles/the-laboratory/17.png';
import image18 from 'assets/puzzles/the-laboratory/18.png';

const SLUG = 'the-laboratory';
const ANSWER = `TELEGRAPH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are faced with a set of picture and phrase clues. There are four clue
      types: pictures of inventions, rebus, trivia, and cryptics. Each clue
      directs to a 19th-century French scientist who is one of{' '}
      <a href="https://www.toureiffel.paris/en/the-monument/eiffel-tower-and-science">
        72 scientists whose name appears on the Eiffel Tower
      </a>
      .
    </p>
    <p>
      Each clue type fits the scientists on one of the four Eiffel Tower faces.
      The names are clued in alphabetical order. Once we identify each
      scientist, we realize that their names form dots and dashes on the Tower
      faces going clockwise, with the “final” face being the Paris face. These
      make Morse code for the phrase <Monospace>SAM M INVENTED</Monospace>. Sam(uel)
      Morse, is, of course, the famous inventor of the{' '}
      <Answerize>TELEGRAPH</Answerize>, which is the answer to this puzzle.
      (Submitting <Monospace>MORSE CODE</Monospace> yields a message to look at
      his other invention.)
    </p>
    <p>The clued scientists and their face are as follows:</p>

    <Table>
      <tbody>
        <tr>
          <td>Pictures</td>
          <td>Face Trocadéro</td>
        </tr>
        <tr>
          <td>Rebus-type</td>
          <td>Face Grenelle</td>
        </tr>
        <tr>
          <td>Trivia</td>
          <td>Face Ecole Militaire</td>
        </tr>
        <tr>
          <td>Cryptic</td>
          <td>Face Paris</td>
        </tr>
      </tbody>
    </Table>

    <Table className="mt-4">
      <thead>
        <tr>
          <th>Clue</th>
          <th>Scientist</th>
          <th>Explanation</th>
          <th>Face</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Greenwich's rival has 135 markers dedicated to him</td>
          <td>
            <Monospace>ARAGO</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image0} title="" />
          </td>
          <td>
            <Monospace>BARRAL</Monospace>
          </td>
          <td>BARREL (E -&gt; A)</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image1} title="" />
          </td>
          <td>
            <Monospace>BECQUEREL</Monospace>
          </td>
          <td>Sounds like MACKEREL (MA -&gt; BE)</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image2} title="" />
          </td>
          <td>
            <Monospace>BERTHIER</Monospace>
          </td>
          <td>BERTH + PIER - P</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>Father of modern histology composed ABC hit</td>
          <td>
            <Monospace>BICHAT</Monospace>
          </td>
          <td>“Composed” clues anagram of “ABC hit”</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Military engineer has a broken board</td>
          <td>
            <Monospace>BORDA</Monospace>
          </td>
          <td>“Broken” clues anagram of “board,” which is BORDA</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Watchmaker with an awkward beer gut</td>
          <td>
            <Monospace>BREGUET</Monospace>
          </td>
          <td>“Awkward” clues anagram of beer gut, which is BREGUET</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image3} title="" />
            image of a hydraulic motor, which BRESSE invented
          </td>
          <td>
            <Monospace>BRESSE</Monospace>
          </td>
          <td></td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image4} title="" />
          </td>
          <td>
            <Monospace>CHAPTAL</Monospace>
          </td>
          <td>
            CHAPTAL was a prolific applied chemist responsible for the name of
            nitrogen, as well as various contributions to gunpowder, acids and
            sugar beets
          </td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image5} title="" />
          </td>
          <td>
            <Monospace>CHASLES</Monospace>
          </td>
          <td>CHASLES is the author of the theorem on conic pencil lines</td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image6} title="" />
          </td>
          <td>
            <Monospace>CHEVREUL</Monospace>
          </td>
          <td>
            A father of modern organic chemistry, he revolutionized soap and
            candle manufacturing and is also the author of the CHEVREUL illusion
            (on background)
          </td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>Contributed to modern thermodynamics by exploding a cryoplane</td>
          <td>
            <Monospace>CLAPEYRON</Monospace>
          </td>
          <td>“Exploding” clues anagram of “cryoplane”, which is CLAPEYRON</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image7} title="" />
          </td>
          <td>
            <Monospace>CUVIER</Monospace>
          </td>
          <td>Fossils cluing the Founding Father of Paleontology</td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            President of the French Academy of Sciences who developed
            logarithmic tables
          </td>
          <td>
            <Monospace>DE PRONY</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image8} title="" />
          </td>
          <td>
            <Monospace>DULONG</Monospace>
          </td>
          <td>This is the law of Dulong and Petit</td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            Geochemist who contributed to mining ore and porcelain manufacturing
          </td>
          <td>
            <Monospace>EBELMEN</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image9} title="" />
          </td>
          <td>
            <Monospace>FIZEAU</Monospace>
          </td>
          <td>Fizz + french water (“eau”)</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image10} title="" />
          </td>
          <td>
            <Monospace>FLACHAT</Monospace>
          </td>
          <td>
            Responsible for building the railway from Paris to St. Germain
          </td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>His simple device demonstrated the Earth's rotation</td>
          <td>
            <Monospace>FOUCAULT</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image11} title="" />
          </td>
          <td>
            <Monospace>GIFFARD</Monospace>
          </td>
          <td>Gifford (o -&gt; a)</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>Ordained father of modern crystallography</td>
          <td>
            <Monospace>HAUY</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image12} title="" />
          </td>
          <td>
            <Monospace>JOUSSELIN</Monospace>
          </td>
          <td>“Sounds like” juice + Loretta Lynn</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            He predicted the position of Neptune from a twisted river reel
          </td>
          <td>
            <Monospace>LE VERRIER</Monospace>
          </td>
          <td>“Twisted” clues anagram of “river reel,” which is LE VERRIER</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image13} title="" />
            LEGENDRE polynomials
          </td>
          <td>
            <Monospace>LEGENDRE</Monospace>
          </td>
          <td></td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>This chemist is drunk - Lopez, eu</td>
          <td>
            <Monospace>PELOUZE</Monospace>
          </td>
          <td>“Drunk” clues anagram of “Lopez eu,” which is PELOUZE</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Railroad engineer famous for each time he put on a lattice</td>
          <td>
            <Monospace>PERDONNET</Monospace>
          </td>
          <td>“each time” = PER, “put on” = DON, “lattice” = NET</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Small French locomotive engineer</td>
          <td>
            <Monospace>PETIET</Monospace>
          </td>
          <td>Small in French is petit(e)</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Geometrical mechanics inventor</td>
          <td>
            <Monospace>POINSOT</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>French fish with a probability distribution named after him</td>
          <td>
            <Monospace>POISSON</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            A moon crater is named after him, and, according to some, so is
            the ideal gas constant
          </td>
          <td>
            <Monospace>REGNAULT</Monospace>
          </td>
          <td></td>
          <td>Ecole Militaire</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image14} title="" />
          </td>
          <td>
            <Monospace>SCHNEIDER</Monospace>
          </td>
          <td>Schnauzer (AUZ -&gt; EID)</td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image15} title="" />
            SEGUIN is the inventor of the suspension bridge
          </td>
          <td>
            <Monospace>SEGUIN</Monospace>
          </td>
          <td></td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image16} title="" />
            storm o-&gt;u
          </td>
          <td>
            <Monospace>STURM</Monospace>
          </td>
          <td></td>
          <td>Grenelle</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image17} title="" />
            TRESCA designed the prototype 1 meter bar
          </td>
          <td>
            <Monospace>TRESCA</Monospace>
          </td>
          <td></td>
          <td>Trocadéro</td>
        </tr>
        <tr>
          <td>
            <SheetableImage alt="" src={image18} title="" />
            <Monospace>TRIGGER - G</Monospace>
          </td>
          <td>
            <Monospace>TRIGER</Monospace>
          </td>
          <td>X</td>
          <td>Grenelle</td>
        </tr>
      </tbody>
    </Table>

    <p>
      Arranging the clued names by face of the Eiffel Tower, we get the
      following Morse message (dot = 1 name, dash = 2 consecutive names, one
      blank separates each symbol, two or more blanks separate letters):
    </p>

    <Table id="morse-table">
      <tbody>
        <tr>
          <td colSpan={4}>
            <b>Face Trocadéro (NW)</b>
          </td>
        </tr>
        <tr>
          <td>1. Seguin (Mécanicien)</td>
          <td>X</td>
          <td rowSpan={5}>
            <Monospace>...</Monospace>
          </td>
          <td rowSpan={5}>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>2. Lalande (Astronome)</td>
          <td></td>
        </tr>
        <tr>
          <td>3. Tresca (Ingénieur et mécanicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>4. Poncelet (Géomètre)</td>
          <td></td>
        </tr>
        <tr>
          <td>5. Bresse (Mathématicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>6. Lagrange (Géomètre)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>7. Belanger (Mathématicien)</td>
        </tr>
        <tr>
          <td>8. Cuvier (Naturaliste)</td>
          <td>X</td>
          <td rowSpan={4}>
            <Monospace>.-</Monospace>
          </td>
          <td rowSpan={4}>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>9. Laplace (Astronome et mathématicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>10. Dulong (Physicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>11. Chasles (Géomètre)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>12. Lavoisier (Chimiste)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>13. Ampere (Mathématicien et physicien)</td>
        </tr>
        <tr>
          <td>14. Chevreul (Chimiste)</td>
          <td>X</td>
          <td rowSpan={5}>
            <Monospace>--</Monospace>
          </td>
          <td rowSpan={5}>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>15. Flachat (Ingénieur)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>16. Navier (Mathématicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>17. Legendre (Géomètre)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>18. Chaptal (Agronome et chimiste)</td>
          <td>X</td>
        </tr>
        <tr>
          <td colSpan={4}>
            <b>Face Grenelle (SW)</b>
          </td>
        </tr>
        <tr>
          <td>19. Jamin (Physicien)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>20. Gay-Lussac (Chimiste)</td>
        </tr>
        <tr>
          <td>21. Fizeau (Physicien)</td>
          <td>X</td>
          <td rowSpan={5}>
            <Monospace>--</Monospace>
          </td>
          <td rowSpan={5}>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>22. Schneider (Industriel)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>23. Le Chatelier (Ingénieur)</td>
          <td></td>
        </tr>
        <tr>
          <td>24. Berthier (Minéralogiste)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>25. Barral (Agronome, chimiste, physicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>26. De Dion (Ingénieur)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>27. Goüin (Ingénieur et industriel)</td>
        </tr>
        <tr>
          <td>28. Jousselin (Ingénieur)</td>
          <td>X</td>
          <td rowSpan={3}>
            <Monospace>..</Monospace>
          </td>
          <td rowSpan={3}>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>29. Broca (Chirurgien)</td>
          <td></td>
        </tr>
        <tr>
          <td>30. Becquerel (Physicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>31. Coriolis (Mathématicien)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>32. Cail (Industriel)</td>
        </tr>
        <tr>
          <td>33. Triger (Ingénieur)</td>
          <td>X</td>
          <td rowSpan={4}>
            <Monospace>- .</Monospace>
          </td>
          <td rowSpan={4}>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>34. Giffard (Ingénieur)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>35. Perrier (Géographe et mathématicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>36. Sturm (Mathématicien)</td>
        </tr>
        <tr>
          <td colSpan={4}>
            <b>Face Ecole Militaire (SE)</b>
          </td>
        </tr>
        <tr>
          <td>37. Cauchy (Mathématicien)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>38. Belgrand (Ingénieur)</td>
        </tr>
        <tr>
          <td>39. Regnault (Chimiste et physicien)</td>
          <td>X</td>
          <td rowSpan={8}>
            <Monospace>...-</Monospace>
          </td>
          <td rowSpan={8}>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>40. Fresnel (Physicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>41. De Prony (Ingénieur)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>42. Vicat (Ingénieur)</td>
          <td></td>
        </tr>
        <tr>
          <td>43. Ebelmen (Chimiste)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>44. Coulomb (Physicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>45. Poinsot (Mathématicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>46. Foucault (Physicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>47. Delaunay (Astronome)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>48. Morin (Mathématicien et physicien)</td>
        </tr>
        <tr>
          <td>49. Haüy (Minéralogiste)</td>
          <td>X</td>
          <td>
            <Monospace>.</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>50. Combes (Ingénieur et métallurgiste)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>51. Thénard (Chimiste)</td>
        </tr>
        <tr>
          <td>52. Arago (Astronome et physicien)</td>
          <td>X</td>
          <td rowSpan={5}>
            <Monospace>-.</Monospace>
          </td>
          <td rowSpan={5}>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>53. Poisson (Mathématicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>54. Monge (Géomètre)</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2}>
            <b>Face Paris (NE)</b>
          </td>
        </tr>
        <tr>
          <td>55. Petiet (Ingénieur)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>56. Daguerre (Peintre et physicien)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>57. Wurtz (Chimiste)</td>
        </tr>
        <tr>
          <td>58. Le Verrier (Astronome)</td>
          <td>X</td>
          <td rowSpan={2}>
            <Monospace>-</Monospace>
          </td>
          <td rowSpan={2}>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>59. Perdonnet (Ingénieur)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>60. Delambre (Astronome)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>61. Malus (Physicien)</td>
        </tr>
        <tr>
          <td>62. Breguet (Physicien et constructeur)</td>
          <td>X</td>
          <td>
            <Monospace>.</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>63. Polonceau (Ingénieur)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>64. Dumas (Chimiste)</td>
        </tr>
        <tr>
          <td>65. Clapeyron (Ingénieur)</td>
          <td>X</td>
          <td rowSpan={6}>
            <Monospace>-..</Monospace>
          </td>
          <td rowSpan={6}>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>66. Borda (Mathématicien)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>67. Fourier (Mathématicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>68. Bichat (Anatomiste et physiologiste)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>69. Sauvage (Mécanicien)</td>
          <td></td>
        </tr>
        <tr>
          <td>70. Pelouze (Chimiste)</td>
          <td>X</td>
        </tr>
        <tr>
          <td>71. Carnot (Mathématicien)</td>
          <td colSpan={3} rowSpan={2}></td>
        </tr>
        <tr>
          <td>72. Lamé (Géomètre)</td>
        </tr>
      </tbody>
    </Table>
    <Attributions>
      <ul>
        <li>
          Acid image is in the public domain from{' '}
          <a href="https://nara.getarchive.net/media/standardization-of-a-50-year-old-acid-solution-b728f5">
            https://nara.getarchive.net/media/standardization-of-a-50-year-old-acid-solution-b728f5
          </a>{' '}
          in the US national archives
        </li>
        <li>
          Barrel image in public domain from{' '}
          <a href="https://freesvg.org/wooden-barrel">
            https://freesvg.org/wooden-barrel
          </a>
        </li>
        <li>
          Berth image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Upper_berth_of_RW25T_555505_%2820181107191050%29.jpg">
            https://commons.wikimedia.org/wiki/File:Upper_berth_of_RW25T_555505_%2820181107191050%29.jpg
          </a>{' '}
          by user N509FZ under the Creative Commons Attribution-Share Alike 4.0
          International license
        </li>
        <li>
          Candles image is a royalty-free image from{' '}
          <a href="https://www.pickpik.com/burning-candles-cc0-flame-lights-wax-101618">
            https://www.pickpik.com/burning-candles-cc0-flame-lights-wax-101618
          </a>
        </li>
        <li>
          Ear image in public domain from{' '}
          <a href="https://publicdomainvectors.org/en/free-clipart/Gray-ear-illustration/80532.html">
            https://publicdomainvectors.org/en/free-clipart/Gray-ear-illustration/80532.html
          </a>
        </li>
        <li>
          Fizz image is in public domain at{' '}
          <a href="https://www.pxfuel.com/en/free-photo-qadyz">
            https://www.pxfuel.com/en/free-photo-qadyz
          </a>{' '}
          royalty-free use DMCA{' '}
        </li>
        <li>
          Fossil images are in the public domain at{' '}
          <a href="https://pixabay.com/photos/search/fossils/">
            https://pixabay.com/photos/search/fossils/
          </a>{' '}
          and{' '}
          <a href="https://www.wallpaperflare.com/photo-of-dinosaur-fossils-on-gray-soil-skeleton-bones-excavations-wallpaper-wvwys">
            https://www.wallpaperflare.com/photo-of-dinosaur-fossils-on-gray-soil-skeleton-bones-excavations-wallpaper-wvwys
          </a>
        </li>
        <li>
          Gunpowder image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Black_Powder-1.JPG">
            https://commons.wikimedia.org/wiki/File:Black_Powder-1.JPG
          </a>{' '}
          by user Lord Mountbatten under the Creative Commons Attribution-Share
          Alike 3.0 Unported license
        </li>
        <li>
          Hydraulic gear motor is from{' '}
          <a href="https://ndla.no/subject:1:5a5cac3f-46ff-4f4d-ba95-b256a706ec48/topic:5d631e43-f324-41ad-9cb2-16a26fc391ac/topic:a322c488-0fef-4a61-8128-cfee23b95dc4/resource:1:123159">
            https://ndla.no/subject:1:5a5cac3f-46ff-4f4d-ba95-b256a706ec48/topic:5d631e43-f324-41ad-9cb2-16a26fc391ac/topic:a322c488-0fef-4a61-8128-cfee23b95dc4/resource:1:123159
          </a>{' '}
          under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
          </a>
        </li>
        <li>
          Legendre polynomials image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Legendrepolynomials6.svg">
            https://commons.wikimedia.org/wiki/File:Legendrepolynomials6.svg
          </a>{' '}
          by user AkanoToE under the Creative Commons Attribution-Share Alike
          3.0 Unported license
        </li>
        <li>
          Liquid nitrogen image is in the public domain at{' '}
          <a href="https://www.wallpaperflare.com/search?wallpaper=liquid+nitrogen">
            https://www.wallpaperflare.com/search?wallpaper=liquid+nitrogen
          </a>
        </li>
        <li>
          Loretta Lynn image is cropped from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Loretta_Lynn.jpg">
            https://commons.wikimedia.org/wiki/File:Loretta_Lynn.jpg
          </a>{' '}
          by Scott Schram via Creative Commons Attribution 2.0 Generic license
        </li>
        <li>
          Mackerel image from{' '}
          <a href="https://www.fisheries.noaa.gov/species/atlantic-mackerel">
            https://www.fisheries.noaa.gov/species/atlantic-mackerel
          </a>{' '}
          - public domain as a work of the US government
        </li>
        <li>
          Pier image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Pacifica_Pier_CA.jpg">
            https://commons.wikimedia.org/wiki/File:Pacifica_Pier_CA.jpg
          </a>{' '}
          by user VirginiaBeach78 via Creative Commons Attribution 2.0 Generic
          License
        </li>
        <li>
          Railway tracks image is in the public domain at{' '}
          <a href="https://publicdomainvectors.org/en/free-clipart/Railroad-tracks-vector-image/30538.html">
            https://publicdomainvectors.org/en/free-clipart/Railroad-tracks-vector-image/30538.html
          </a>
        </li>
        <li>
          Schnauzer image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Miniature_Schnauzer_R_02.JPG">
            https://commons.wikimedia.org/wiki/File:Miniature_Schnauzer_R_02.JPG
          </a>{' '}
          by user Lilly M under the terms of the{' '}
          <a href="https://en.wikipedia.org/wiki/en:GNU_Free_Documentation_License">
            GNU Free Documentation License
          </a>
          , Version 1.2 or any later version published by the{' '}
          <a href="https://en.wikipedia.org/wiki/en:Free_Software_Foundation">
            Free Software Foundation
          </a>
        </li>
        <li>
          Soap image is in the public domain at{' '}
          <a href="https://www.rawpixel.com/search/soap%20bar?page=1&amp;sort=curated&amp;topic_group=_topics">
            https://www.rawpixel.com/search/soap%20bar?page=1&amp;sort=curated&amp;topic_group=_topics
          </a>{' '}
          under CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
        </li>
        <li>
          Storm image is in the public domain at{' '}
          <a href="https://pixabay.com/photos/storm-thunderstorm-super-cell-3158852/">
            https://pixabay.com/photos/storm-thunderstorm-super-cell-3158852/
          </a>
        </li>
        <li>
          Sugar beet image is in the public domain at{' '}
          <a href="https://www.rawpixel.com/image/3335615/free-photo-image-root-sugar-beets-animal">
            https://www.rawpixel.com/image/3335615/free-photo-image-root-sugar-beets-animal
          </a>{' '}
          as a free U.S. government image
        </li>
        <li>
          Suspension bridge image is in the public domain at{' '}
          <a href="https://openclipart.org/detail/316594/suspension-bridge-english">
            https://openclipart.org/detail/316594/suspension-bridge-english
          </a>{' '}
        </li>
        <li>
          Handgun (trigger) image is in the public domain at Image by{' '}
          <a href="https://www.vectorportal.com">
            https://www.vectorportal.com
          </a>
          <a href="https://vectorportal.com/vector/modern-handgun/34029">
            https://vectorportal.com/vector/modern-handgun/34029
          </a>{' '}
          under Creative Common Licenses
        </li>
        <li>
          Water image is from{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Water_drop_impact_on_a_water-surface_-_%281%29.jpg">
            https://commons.wikimedia.org/wiki/File:Water_drop_impact_on_a_water-surface_-_%281%29.jpg
          </a>{' '}
          by Jacopo Werther under the Creative Commons Attribution-Share Alike
          2.0 Generic license
        </li>
      </ul>
    </Attributions>

    <style jsx global>{`
      #morse-table td:nth-child(3) > span {
        text-align: center;
        display: block;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
