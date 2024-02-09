import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'itineratum-de-urbes-universum';
const ANSWER = `OUT OF MANY ONE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We start by noticing "Googlus Translatus" in the flavor, so we head to
      Google Translate to plug in the puzzle title, "Itineratum de Urbes
      Universum" (which translates roughly to, "Listing of Universe Cities").
    </p>
    <p>
      The flavor text, "QUIS CURSUS LATINE EGET? HABEMUS GOOGLUS TRANSLATUS!"
      translates to "Who needs a Latin class? We have Google Translate!"
      indicating that translation&mdash;and likely poor translation, because Google
      Translate is notoriously terrible at translating Latin&mdash;will be necessary
      to solve.{' '}
    </p>
    <p>
      Following a section of Latin phrases and a box containing a Latin (or
      apparently Latin) word list, is a section titled simply, "Comes," which
      translates to "Count" (as in, the nobleman), featuring a series of 13
      images of a seal (the marine mammal) speaking in a word balloon (which are
      mostly round but with a few other shapes thrown in), additional Latin
      words/phrases.
    </p>
    <h3>Step 1: The Names</h3>
    <p>
      We notice that "Universe Cities" is a homophone of "Universities." Thus,
      we intuit that the phrases are the (mistranslated) names of (often
      homophones of) several U.S. universities:
    </p>
    <Table>
      <thead>
        <tr>
          <th>University Name (actual)</th>
          <th>Mistranslated Name</th>
          <th>Latin Version of Mistranslation</th>
          <th>English Version of Mistranslation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>WAKE FOREST</td>
          <td>Wake Forest</td>
          <td>Ante Funus Hiberniae Silva Urbes Universum</td>
          <td>Before the Irish funeral Woods universe city</td>
        </tr>
        <tr>
          <td>MIT</td>
          <td>Mitt</td>
          <td>Chirotheca ad Removendum Calidum Ollam ex Furnus</td>
          <td>Glove to remove pots from the oven</td>
        </tr>
        <tr>
          <td>BROWN</td>
          <td>Brown</td>
          <td>Colorus Lutum Urbes Universum</td>
          <td>Color of mud universe city</td>
        </tr>
        <tr>
          <td>COLGATE</td>
          <td>Colgate</td>
          <td>Dentifricium Urbes Universum</td>
          <td>Toothpaste universe city</td>
        </tr>
        <tr>
          <td>PRINCETON</td>
          <td>Prince Ton</td>
          <td>Filius Rex Duo Milia Libras Urbes Universum</td>
          <td>King's son 2,000 pounds universe city</td>
        </tr>
        <tr>
          <td>HIGH POINT</td>
          <td>High Point</td>
          <td>Impulsu Medicamentorum Cuspis Urbes Universum</td>
          <td>High on drugs Tip universe city</td>
        </tr>
        <tr>
          <td>EMORY</td>
          <td>Emery</td>
          <td>Laesura Pulveris Quod Facit Lenis Unguibus Urbes Universum</td>
          <td>
            Abrasive powder that makes the fingernails smooth universe city
          </td>
        </tr>
        <tr>
          <td>TUFTS</td>
          <td>Tufts</td>
          <td>Parva Iuba Capillorum Urbes Universum</td>
          <td>Small manes of hair universe city</td>
        </tr>
        <tr>
          <td>IONA</td>
          <td>I Own A</td>
          <td>Possiedo Urb Universum</td>
          <td>I own a universe city</td>
        </tr>
        <tr>
          <td>DUKE</td>
          <td>Duke</td>
          <td>Pugnando Pugnus Urbes Universum</td>
          <td>Fighting fist universe city</td>
        </tr>
        <tr>
          <td>DE PAUL</td>
          <td>Deep Awl</td>
          <td>Subula Profundi Urbes Universum</td>
          <td>Deep awl universe city</td>
        </tr>
        <tr>
          <td>FORDHAM</td>
          <td>Ford Ham</td>
          <td>Transire Flumen de Fumabat Porcus Urbes Universum</td>
          <td>Cross the river of smoked pig universe city</td>
        </tr>
        <tr>
          <td>TULANE</td>
          <td>Two-Lane</td>
          <td>
            Via Maior Quam Angiportum, et Minor Quam Alta Via Urbes Universum
          </td>
          <td>
            Road that is larger than an alley and smaller than a highway
            universe city
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      [Note: Because Google Translate&mdash;along with most other translation
      tools&mdash;is INCREDIBLY bad at translating Latin, both grammatically and
      dictorally, in some cases, I made the conscious choice to go with an
      incorrect Latin phrasing because it's a puzzle about mistranslation.
      Apologies to any Latin speakers in the audience! I owe you some
      Alka-Seltzer.]
    </p>
    <p>
      Before moving on, we note that the Latin mistranslations of the
      universities are in alphabetical order.
    </p>
    <h3>Step 2a: The Seals</h3>
    <p>
      Continuing the theme of bad homophonic translation, the (maritime) seals
      on the images represent the universities' seals (i.e., their official
      crests). We discover that, in all cases, the depicted word balloon is
      shaped identically (or as close to identically as possible) to the
      university's official seal. However, beyond basic shape, all details have
      been removed.
    </p>
    <p>
      We can intuit from the order of the non-round seals that these, too,
      appear in alphabetical order by university. By comparing the (university)
      seals to the spoken text, we deduce that the Latin word or phrase spoken
      by each seal is a bad translation of an item that appears at least once on
      the actual seal of its university:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Seal Says...</th>
          <th>University</th>
          <th>Actual Item Being Mistranslated</th>
          <th>Translation of What Seal Says</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Filius</td>
          <td>BROWN</td>
          <td>Sun</td>
          <td>Son</td>
        </tr>
        <tr>
          <td>Verba in Lingua Vulgari</td>
          <td>COLGATE</td>
          <td>Latin words</td>
          <td>Words in the Language of the Common People</td>
        </tr>
        <tr>
          <td>Magus de Rex Arturus</td>
          <td>DE PAUL</td>
          <td>Merlons (the sticky-up parts in a crenellated castle rampart)</td>
          <td>The Wizard of King Arthur</td>
        </tr>
        <tr>
          <td>Cum una persona est venerium cupium a duobus hominibus</td>
          <td>DUKE</td>
          <td>Triangle</td>
          <td>When one person is romantically desired by two other people</td>
        </tr>
        <tr>
          <td>Corna</td>
          <td>EMORY</td>
          <td>Horns (musical)</td>
          <td>(Animal) horns</td>
        </tr>
        <tr>
          <td>Ungua</td>
          <td>FORDHAM</td>
          <td>Nails (hardware)</td>
          <td>(Finger)nails</td>
        </tr>
        <tr>
          <td>Asteriscii</td>
          <td>HIGH POINT</td>
          <td>Six-pronged stars</td>
          <td>Asterisks</td>
        </tr>
        <tr>
          <td>Pigmenta</td>
          <td>IONA</td>
          <td>Colors</td>
          <td>Pigments</td>
        </tr>
        <tr>
          <td>Venereum Cupium a Praeteratis</td>
          <td>MIT</td>
          <td>Flame</td>
          <td>Former Romantic Desire from Long Ago</td>
        </tr>
        <tr>
          <td>Verba Dicunta&mdash;non Canunta&mdash;in Dramate Musico</td>
          <td>PRINCETON</td>
          <td>Book</td>
          <td>Spoken Words in a Musical Play</td>
        </tr>
        <tr>
          <td>Quid Taurus Ruber tibi dat</td>
          <td>TUFTS</td>
          <td>(Metaphorical) Wings</td>
          <td>What Red Bull gives you</td>
        </tr>
        <tr>
          <td>Gluteus Maximus Revelare</td>
          <td>TULANE</td>
          <td>Moons</td>
          <td>To reveal one's butt</td>
        </tr>
        <tr>
          <td>Ultimae viae ferreae in monopolium</td>
          <td>WAKE FOREST</td>
          <td>Short lines</td>
          <td>The last of the railroads in Monopoly</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The section header of the seals, "Comes," is a mistranslation of "count"
      (i.e., to enumerate, which in Latin is actually "Enumari"). So we proceed
      to count the number of these items on the (actual) university seals, and
      then extract from the university names.
    </p>
    <Table className="step2a-table">
      <thead>
        <tr>
          <th>University</th>
          <th>Actual Item Being Mistranslated</th>
          <th>Translation of What Seal Says</th>
          <th>Number of Times Said Item Appears on Seal</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BROWN</td>
          <td>Sun</td>
          <td>Son</td>
          <td>1</td>
          <td>B</td>
        </tr>
        <tr>
          <td>COLGATE</td>
          <td>Latin words</td>
          <td>Words in the Language of the Common People</td>
          <td>3</td>
          <td>L</td>
        </tr>
        <tr>
          <td>DE PAUL</td>
          <td>Merlons (the sticky-up parts in a crenellated castle rampart)</td>
          <td>The Wizard of King Arthur (Merlin)</td>
          <td>5</td>
          <td>U</td>
        </tr>
        <tr>
          <td>DUKE</td>
          <td>Triangle</td>
          <td>
            When one person is romantically desired by two other people (love
            triangle)
          </td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>EMORY</td>
          <td>Horns (musical)</td>
          <td>(animal) horns</td>
          <td>1</td>
          <td>E</td>
        </tr>
        <tr>
          <td>FORDHAM</td>
          <td>Nails (hardware)</td>
          <td>(Finger)nails</td>
          <td>3</td>
          <td>R</td>
        </tr>
        <tr>
          <td>HIGH POINT</td>
          <td>Six-pronged stars</td>
          <td>Asterisks</td>
          <td>2</td>
          <td>I</td>
        </tr>
        <tr>
          <td>IONA</td>
          <td>Colors</td>
          <td>Pigments</td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>MIT</td>
          <td>Flame</td>
          <td>Former Romantic Desire from Long Ago (Flame)</td>
          <td>1</td>
          <td>M</td>
        </tr>
        <tr>
          <td>PRINCETON</td>
          <td>Book</td>
          <td>Spoken Words in a Musical Play</td>
          <td>1</td>
          <td>P</td>
        </tr>
        <tr>
          <td>TUFTS</td>
          <td>(Bird) Wings</td>
          <td>What Red Bull gives you. (Wings)</td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>TULANE</td>
          <td>Moons</td>
          <td>To reveal one's butt</td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>WAKE FOREST</td>
          <td>Short lines</td>
          <td>The last of the railroads in Monopoly</td>
          <td>9</td>
          <td>S</td>
        </tr>
      </tbody>
    </Table>
    <p>Actual seals can be found at the following links:</p>
    <ul>
      <li>
        <a href="https://www.launidadlatina.org/wp-content/uploads/2013/10/Emory.png">
          EMORY
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Princeton_University#/media/File:Princeton_seal.svg">
          PRINCETON
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Colgate_University#/media/File:Colgate_University_Seal_2018.svg">
          COLGATE
        </a>
      </li>
      <li>
        <a href="https://www.masterplaques.com/product/the-tulane-university-of-louisiana-emblem/">
          TULANE
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Fordham_University#/media/File:Fordham_University_seal.svg">
          FORDHAM
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/High_Point_University#/media/File:High_Point_University_seal.png">
          HIGH POINT
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Brown_University#/media/File:Brown_University_coat_of_arms.svg">
          BROWN
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Duke_University#/media/File:Duke_University_seal.svg">
          DUKE
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Wake_Forest_University#/media/File:Wake_Forest_University_seal.svg">
          WAKE FOREST
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Tufts_University#/media/File:Tufts_official_seal.svg">
          TUFTS
        </a>
      </li>
      <li>
        <a href="https://www.iona.edu/sites/default/files/styles/scale/public/2022-07/ancillary-images/IONA_Logo_Seal.jpg?itok=b4oZvrOg">
          IONA
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/DePaul_University#/media/File:DePaul_U_Seal.svg">
          DE PAUL
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology#/media/File:MIT_Seal.svg">
          MIT
        </a>
      </li>
    </ul>
    <br />
    <h3>Step 2b: The Mottoes</h3>
    <p>
      That extraction gave us gibberish, so we turn to the words in the boxes,
      which are <i>mostly</i> Latin words, but some appear to be ersatz.
      Luckily, in researching the universities and (especially) their seals, we
      recognize that some of the words appear as parts of the mottoes on the
      seals themselves. These are:
    </p>
    <Table>
      <thead>
        <tr>
          <th>University</th>
          <th>
            Words from Word List that Appear on the Actual University Seals
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EMORY</td>
          <td>Prudentis, Possidebit, Scientiam</td>
        </tr>
        <tr>
          <td>PRINCETON</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>COLGATE</td>
          <td>
            Deo, Veritati (Word List has Veritatii, but should still be
            recognizable)
          </td>
        </tr>
        <tr>
          <td>TULANE</td>
          <td>Non Sibi, Sed</td>
        </tr>
        <tr>
          <td>FORDHAM</td>
          <td>Sapientia (WL: Sapiventia), et, Doctrina</td>
        </tr>
        <tr>
          <td>HIGH POINT</td>
          <td>Numine</td>
        </tr>
        <tr>
          <td>BROWN</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>DUKE</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>WAKE FOREST</td>
          <td>Humanitate</td>
        </tr>
        <tr>
          <td>TUFTS</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>IONA</td>
          <td>Bonum Certamen</td>
        </tr>
        <tr>
          <td>DE PAUL</td>
          <td>Viam, Monstrabo, Tibi (WL: Tibii)</td>
        </tr>
        <tr>
          <td>MIT</td>
          <td>Mens et</td>
        </tr>
      </tbody>
    </Table>
    <p>
      By looking up the university mottoes that don't appear on the seals, we
      can reconstruct the mottoes, including the words with extra letters (we
      will likely end up at{' '}
      <a href="https://en.wikipedia.org/wiki/List_of_university_and_college_mottos">
        this page
      </a>
      ):
    </p>
    <Table>
      <thead>
        <tr>
          <th>University</th>
          <th>Words from Word List that Appear on the Seal</th>
          <th>Altered, Reconstructed Motto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EMORY</td>
          <td>Prudentis, Possidebit, Scientiam</td>
          <td>Cori Prudentis Possidebit Scientiam</td>
        </tr>
        <tr>
          <td>PRINCETON</td>
          <td>N/A</td>
          <td>Dei Subi Numine Vigeti</td>
        </tr>
        <tr>
          <td>COLGATE</td>
          <td>
            Deo, Veritati (word list has Veritatii, but should still be
            recognizable)
          </td>
          <td>Deo Iaci Veritatii</td>
        </tr>
        <tr>
          <td>TULANE</td>
          <td>Non Sibi, Sed</td>
          <td>Non Sibi, Sed Sivuis</td>
        </tr>
        <tr>
          <td>FORDHAM</td>
          <td>Sapientia (WL: Sapiventia), et, Doctrina</td>
          <td>Sapiventia et Doctrina</td>
        </tr>
        <tr>
          <td>HIGH POINT</td>
          <td>Numine</td>
          <td>Nil Sinevi Numine</td>
        </tr>
        <tr>
          <td>BROWN</td>
          <td>N/A</td>
          <td>In Deo Speviriamus</td>
        </tr>
        <tr>
          <td>DUKE</td>
          <td>N/A</td>
          <td>Vieiriuditio et Religio</td>
        </tr>
        <tr>
          <td>WAKE FOREST</td>
          <td>Humanitate</td>
          <td>Proix Humanitate</td>
        </tr>
        <tr>
          <td>TUFTS</td>
          <td>N/A</td>
          <td>Pax et Luxx</td>
        </tr>
        <tr>
          <td>IONA</td>
          <td>Bonum Certamen</td>
          <td>Certaxi Bonum Certamen</td>
        </tr>
        <tr>
          <td>DE PAUL</td>
          <td>Viam, Monstrabo, Tibi (WL: Tibii)</td>
          <td>Viam Sapixientiae Monstrabo Tibii</td>
        </tr>
        <tr>
          <td>MIT</td>
          <td>Mens et</td>
          <td>Mens et Maxiniusi</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once the mottoes are reconstructed, we notice that the extra letters in
      some of the words are all I's, V's, or X's, showing us that a series of
      Roman numerals (1&ndash;13) have been inserted into the mottoes. These provide
      the correct ordering:
    </p>
    <Table className="step2b-table">
      <thead>
        <tr>
          <th>Ordering</th>
          <th>Motto with Added Roman Numerals</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Cor<b>i</b> Prudentis Possidebit Scientiam
          </td>
          <td>EMORY</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Dei Sub<b>i</b> Numine Viget<b>i</b>
          </td>
          <td>PRINCETON</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Deo <b>I</b>ac<b>i</b> Veritati<b>i</b>
          </td>
          <td>COLGATE</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Non Sibi, Sed S<b>iv</b>uis
          </td>
          <td>TULANE</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            Sapi<b>v</b>entia et Doctrina
          </td>
          <td>FORDHAM</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            Nil Sine<b>vi</b> Numine
          </td>
          <td>HIGH POINT</td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            In Deo Spe<b>vi</b>r<b>i</b>amus
          </td>
          <td>BROWN</td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <b>Vi</b>e<b>i</b>r<b>i</b>uditio et Religio
          </td>
          <td>DUKE</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            Pro<b>ix</b> Humanitate
          </td>
          <td>WAKE FOREST</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            Pax et Lux<b>x</b>
          </td>
          <td>TUFTS</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            Certa<b>xi</b> Bonum Certamen
          </td>
          <td>IONA</td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            Viam Sapi<b>xi</b>entiae Monstrabo Tibi<b>i</b>
          </td>
          <td>DE PAUL</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            Mens et Ma<b>xi</b>n<b>i</b>us<b>i</b>
          </td>
          <td>MIT</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Step 3: Extraction</h3>
    <p>
      When the universities' actual names are placed in the order given by the
      Roman numerals hidden in the mottoes, and letters corresponding to the
      number of items in their seals are extracted, they end up yielding the
      answer <Clue>E PLURIBUS UNUM</Clue>:
    </p>
    <Table className="step3-table">
      <thead>
        <tr>
          <th>University</th>
          <th>Actual Item Being Mistranslated</th>
          <th>Translation of What Seal Says</th>
          <th>Number of Times Said Item Appears on Seal</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>EMORY</td>
          <td>Horns (musical)</td>
          <td>(animal) horns</td>
          <td>1</td>
          <td>E</td>
        </tr>
        <tr>
          <td>PRINCETON</td>
          <td>Book</td>
          <td>Spoken Words in a Musical Play</td>
          <td>1</td>
          <td>P</td>
        </tr>
        <tr>
          <td>COLGATE</td>
          <td>Latin words</td>
          <td>Words in the Language of the Common People</td>
          <td>3</td>
          <td>L</td>
        </tr>
        <tr>
          <td>TULANE</td>
          <td>Moons</td>
          <td>To reveal one's butt</td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>FORDHAM</td>
          <td>Nails (hardware)</td>
          <td>(Finger)nails</td>
          <td>3</td>
          <td>R</td>
        </tr>
        <tr>
          <td>HIGH POINT</td>
          <td>Six-pronged stars</td>
          <td>Asterisks</td>
          <td>2</td>
          <td>I</td>
        </tr>
        <tr>
          <td>BROWN</td>
          <td>Sun</td>
          <td>Son</td>
          <td>1</td>
          <td>B</td>
        </tr>
        <tr>
          <td>DUKE</td>
          <td>Triangle</td>
          <td>
            When one person is romantically desired by two other people (love
            triangle)
          </td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>WAKE FOREST</td>
          <td>Short lines</td>
          <td>The last of the railroads in Monopoly</td>
          <td>9</td>
          <td>S</td>
        </tr>
        <tr>
          <td>TUFTS</td>
          <td>(Bird) Wings</td>
          <td>What Red Bull gives you. (Wings)</td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>IONA</td>
          <td>Colors</td>
          <td>Pigments</td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>DE PAUL</td>
          <td>Merlons (the sticky-up parts in a crenellated castle rampart)</td>
          <td>The Wizard of King Arthur (Merlin)</td>
          <td>5</td>
          <td>U</td>
        </tr>
        <tr>
          <td>MIT</td>
          <td>Flame</td>
          <td>Former Romantic Desire from Long Ago (Flame)</td>
          <td>1</td>
          <td>M</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Step 4: The Surprise Twist!</h3>
    <p>However, we are surprised to discover that this answer is incorrect!</p>
    <p>
      After debating whether to contact HQ to ask if the answer entry is working
      correctly, we remember that no English appears in the entire puzzle, and
      that it's all about translating from Latin, so the answer is probably no
      different. The actual answer is the English translation of E Pluribus
      Unum, or:
    </p>
    <p>
      <Answerize>{ANSWER}</Answerize>.
    </p>

    <style jsx global>{`
      .step2a-table td:nth-child(4n + 1),
      .step2b-table td:nth-child(2),
      .step3-table td:nth-child(4n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .step2a-table th:nth-child(5),
      .step2a-table td:nth-child(n + 4),
      .step2b-table td:nth-child(1),
      .step3-table th:nth-child(5),
      .step3-table td:nth-child(n + 4) {
        text-align: center;
      }
      .step2b-table b {
        text-decoration: underline;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
