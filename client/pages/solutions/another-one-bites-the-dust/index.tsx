import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'another-one-bites-the-dust';
const ANSWER = `BENEDICT XVI`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a resignation letter written by a church usher after
      an animal-friendly service. The usher details 16 bulleted anecdotes that
      occurred during the service.
    </p>
    <p>Each anecdote contains similar salient elements:</p>
    <ul>
      <li>
        A description of what was going on in the service when the incident
        occurred
      </li>
      <li>A type of animal, with additional clueful-sounding descriptions</li>
      <li>A specific number of the type of animal</li>
      <li>A nonsensical phrase that was uttered by the animal's owner</li>
    </ul>
    <p>
      The first thing we note is the unusual last names in the letter: a
      Monsignior Lau-Kozlowskii, a Father Kellwasser, and the Head Usher,
      Hangenberg. Googling these (separately or together) lets us know that
      these are all names of <b>mass extinction events</b>.
    </p>
    <p>
      Clued into extinctions, by googling these animal clues (in particular, the
      one about the pigeon riding the bus may clue us to notorious extinct
      animal <b>passenger pigeon</b>), we can figure out that these are all
      extinct animals, and pull the letter based on the numbers given:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Key clues</th>
          <th>Extinct animal</th>
          <th>Index</th>
          <th>Letter pulled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shaken not stirred + springbok</td>
          <td>Bond's Springbok</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>massive + cloak + zebra</td>
          <td>Giant Cape Zebra</td>
          <td>6</td>
          <td>C</td>
        </tr>
        <tr>
          <td>melancholy + cylindrical proboscis + bat</td>
          <td>Gloomy Tube-nosed Bat</td>
          <td>6</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>cleft palate + sucker</td>
          <td>Harelip Sucker</td>
          <td>4</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Gyrating midsection + bream</td>
          <td>Hula Bream</td>
          <td>1</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Pretending to be something else for nefarious means + hutia</td>
          <td>Imposter Hutia</td>
          <td>6</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Europe + Danny Boy + elk</td>
          <td>Irish Elk</td>
          <td>3</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Investor Nelson Peltz + Pilaf + rat</td>
          <td>Nelson's Rice Rat</td>
          <td>1</td>
          <td>N</td>
        </tr>
        <tr>
          <td>Arctic + trotter that's "pickled" + bandicoot</td>
          <td>Northern Pig-Footed Bandicoot</td>
          <td>1</td>
          <td>N</td>
        </tr>
        <tr>
          <td>no tan + Daytona shore by ocean + mouse</td>
          <td>Pallid Beach Mouse</td>
          <td>5</td>
          <td>I</td>
        </tr>
        <tr>
          <td>bus rider + pigeons</td>
          <td>Passenger Pigeon</td>
          <td>6</td>
          <td>N</td>
        </tr>
        <tr>
          <td>(horse) tack + on shell + Port Louis + big + tortoise</td>
          <td>Saddle-Backed Mauritius Giant Tortoise</td>
          <td>11</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Wearing glasses + cormorant</td>
          <td>Spectacled Cormorant</td>
          <td>2</td>
          <td>P</td>
        </tr>
        <tr>
          <td>Washington State + in jeans with wallet/keys/phone + gopher</td>
          <td>Tacoma Pocket Gopher</td>
          <td>1</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Dripping Springs + wolf</td>
          <td>Texas Wolf</td>
          <td>3</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Wearing knit sweaters + rhinoceros</td>
          <td>Woolly Rhinoceros</td>
          <td>8</td>
          <td>H</td>
        </tr>
      </tbody>
    </Table>
    <p>
      That doesn't make sense, but since the animals are listed in alphabetical
      order, we can assume there's a reordering needed. Because we're at a
      Catholic MASS, we can guess that the MASS part of "mass extinctions" means
      we need to put the mass in order:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th className="text-center">Letter</th>
          <th>Animal</th>
          <th>Description of service</th>
          <th>Mass Section</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E</td>
          <td>Harelip Sucker</td>
          <td>Father Kellwasser first stepped up to the microphone</td>
          <td>Introductory Rite</td>
        </tr>
        <tr>
          <td>X</td>
          <td>Texas Wolf</td>
          <td>Sang "eleison" three times, almost in a row</td>
          <td>Kyrie Eleison</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Hula Bream</td>
          <td>Father Kellwasser was reading from Job 17:1</td>
          <td>First (Old Testament) Reading</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>Gloomy Tube-nosed Bat</td>
          <td>The cantor was on the last line of the Responsorial Psalm</td>
          <td>Responsorial Psalm</td>
        </tr>
        <tr>
          <td>P</td>
          <td>Imperial Gibbon</td>
          <td>Father Kellwasser was reading Revelation 6:8</td>
          <td>Second (New Testament) Reading</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Woolly Rhinoceros</td>
          <td>Father Kellwasser was reading the story of Lazarus.</td>
          <td>Gospel Reading</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Saddle-Backed Mauritius Giant Tortoise</td>
          <td>
            Father Kellwasser was giving his take on what the scripture means
            for us
          </td>
          <td>Homily</td>
        </tr>
        <tr>
          <td>N</td>
          <td>Passenger Pigeon</td>
          <td>"I look forward to the resurrection of the dead"</td>
          <td>Nicine Creed</td>
        </tr>
        <tr>
          <td>T</td>
          <td>Imposter Hutia</td>
          <td>The offertory plate came around</td>
          <td>Presentation of the Gifts/Offertory Hymn</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Pallid Beach Mouse</td>
          <td>Sang "Holy" three times in a row</td>
          <td>Holy, Holy, Holy</td>
        </tr>
        <tr>
          <td>N</td>
          <td>Nelson's Rice Rat</td>
          <td>Father Kellwasser said, "The Mystery of Faith"</td>
          <td>Preface to Memorial Acclamation</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Giant Cape Zebra</td>
          <td>Speaking of daily bread, trespasses</td>
          <td>The Lord's Prayer</td>
        </tr>
        <tr>
          <td>T</td>
          <td>Tacoma Pocket Gopher</td>
          <td>Everyone shook hands</td>
          <td>Sign of Peace</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Irish Elk</td>
          <td>Father Kellwasser broke the giant wafer in half</td>
          <td>Breaking of the Bread</td>
        </tr>
        <tr>
          <td>O</td>
          <td>Bond's Springbok</td>
          <td>Front of the line for wine</td>
          <td>Communion</td>
        </tr>
        <tr>
          <td>N</td>
          <td>Northern Pig-Footed Bandicoot</td>
          <td>Announcement about the church bazaar</td>
          <td>Announcements</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This yields the message <Clue>EXHYPHENTINCTION</Clue> or, when combined
      with the enumeration
    </p>
    <p>
      <Clue>(2) [ (6) ] (5) (3)</Clue>
    </p>
    <p>from the flavor text,</p>
    <p>
      <Clue>EX [HYPHEN] TINCT ION</Clue>
    </p>
    <p>
      {' '}
      or <Clue>Ex-tinct ion</Clue>. The answer checker accepts this phrase as a
      partial answer, along with a "Keep going!" message.
    </p>
    <p>
      To what could this refer? We turn to the remaining unused items, the
      nonsense phrases and the dollar amounts. The flavor text of the numbers
      indicates that "charges" are important, so it seems likely this refers to
      the ions. If we look up the numbers in the context of ions, we find that
      these numbers are the molar <b>masses</b> of common ions. And, in fact,
      these ions have been anagrammed along with a light color – or "tinct" – to
      form the phrases in question (Nutrimatic hates ions and seldom displays
      them as results; Internet Anagram Server is more forgiving, but often
      includes them far down a list of much more plausible variables)
    </p>
    <p>So, we need to extract the tinct from the ions:</p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Mass Section</th>
          <th>Color</th>
          <th>Ion</th>
          <th>Molar Mass</th>
          <th>Anagram</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Introductory Rite</td>
          <td>LILAC</td>
          <td>AMMONIUM</td>
          <td>18.04</td>
          <td>A LOCAL MINIMUM</td>
        </tr>
        <tr>
          <td>Kyrie Eleison</td>
          <td>CREAM</td>
          <td>CARBONATE</td>
          <td>60.01</td>
          <td>CABARET ROMANCE</td>
        </tr>
        <tr>
          <td>First (Old Testament) Reading</td>
          <td>CHARTREUSE</td>
          <td>SULFATE</td>
          <td>96.06</td>
          <td>A TREASURE CHESTFUL</td>
        </tr>
        <tr>
          <td>Responsorial Psalm</td>
          <td>TAN</td>
          <td>ARSENITE</td>
          <td>122.92</td>
          <td>TEEN ARTISAN</td>
        </tr>
        <tr>
          <td>Second (New Testament) Reading</td>
          <td>HELIOTROPE</td>
          <td>OXALATE</td>
          <td>88.02</td>
          <td>TAXI EATER LOOPHOLE</td>
        </tr>
        <tr>
          <td>Gospel Reading</td>
          <td>CORNFLOWER</td>
          <td>BARIUM</td>
          <td>137.33</td>
          <td>CALMER BURROW INFO</td>
        </tr>
        <tr>
          <td>Homily</td>
          <td>PERIWINKLE</td>
          <td>SODIUM</td>
          <td>22.99</td>
          <td>IMPIOUS ELK WINDER</td>
        </tr>
        <tr>
          <td>Nicine Creed</td>
          <td>PUCE</td>
          <td>BROMIDE</td>
          <td>79.90</td>
          <td>MEDIOCRE PUB</td>
        </tr>
        <tr>
          <td>Presentation of the Gifts/Offertory Hymn</td>
          <td>STRAW</td>
          <td>FERROUS</td>
          <td>55.85</td>
          <td>WASTER'S FUROR</td>
        </tr>
        <tr>
          <td>Holy, Holy, Holy</td>
          <td>LEMON</td>
          <td>CHROMATE</td>
          <td>115.99</td>
          <td>MENTAL MOOCHER</td>
        </tr>
        <tr>
          <td>Preface to Memorial Acclamation</td>
          <td>LAVENDER</td>
          <td>NITRATE</td>
          <td>62.01</td>
          <td>REINVENTED ALTAR</td>
        </tr>
        <tr>
          <td>The Lord's Prayer</td>
          <td>MAUVE</td>
          <td>CHLORIDE</td>
          <td>35.45</td>
          <td>VEHICULAR DEMO</td>
        </tr>
        <tr>
          <td>Sign of Peace</td>
          <td>PISTACHIO</td>
          <td>ALUMINUM</td>
          <td>26.98</td>
          <td>INCAUTIOUS LIMP HAM</td>
        </tr>
        <tr>
          <td>Breaking of the Bread</td>
          <td>PINK</td>
          <td>CITRATE</td>
          <td>189.10</td>
          <td>PATIENT RICK</td>
        </tr>
        <tr>
          <td>Communion</td>
          <td>EGGSHELL</td>
          <td>STANNOUS</td>
          <td>118.71</td>
          <td>GNASH GENTLE SOULS</td>
        </tr>
        <tr>
          <td>Announcements</td>
          <td>MINT</td>
          <td>SILICATE</td>
          <td>76.08</td>
          <td>SLAIN TITMICE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Now what? Well, as mentioned, the ions each have a charge (positive +1 to
      +3 or negative -1 to -3). We can index said charge into the colors (from
      the front of the word for a positive charge or the end of the word for a
      negative charge) to get letters:
    </p>
    <Table className="table-4">
      <thead>
        <tr>
          <th className="text-center">Letter pulled</th>
          <th>Color</th>
          <th>Ion</th>
          <th>Charge</th>
          <th>Molar Mass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">L</td>
          <td>LILAC</td>
          <td>AMMONIUM</td>
          <td>+1</td>
          <td>18.04</td>
        </tr>
        <tr>
          <td className="text-center">A</td>
          <td>CREAM</td>
          <td>CARBONATE</td>
          <td>-2</td>
          <td>60.01</td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>CHARTREUSE</td>
          <td>SULFATE</td>
          <td>-2</td>
          <td>96.06</td>
        </tr>
        <tr>
          <td className="text-center">T</td>
          <td>TAN</td>
          <td>ARSENITE</td>
          <td>-3</td>
          <td>122.92</td>
        </tr>
        <tr>
          <td className="text-center">P</td>
          <td>HELIOTROPE</td>
          <td>OXALATE</td>
          <td>-2</td>
          <td>88.02</td>
        </tr>
        <tr>
          <td className="text-center">O</td>
          <td>CORNFLOWER</td>
          <td>BARIUM</td>
          <td>+2</td>
          <td>137.33</td>
        </tr>
        <tr>
          <td className="text-center">P</td>
          <td>PERIWINKLE</td>
          <td>SODIUM</td>
          <td>+1</td>
          <td>22.99</td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>PUCE</td>
          <td>BROMIDE</td>
          <td>-1</td>
          <td>79.90</td>
        </tr>
        <tr>
          <td className="text-center">T</td>
          <td>STRAW</td>
          <td>FERROUS</td>
          <td>+2</td>
          <td>55.85</td>
        </tr>
        <tr>
          <td className="text-center">O</td>
          <td>LEMON</td>
          <td>CHROMATE</td>
          <td>-2</td>
          <td>115.99</td>
        </tr>
        <tr>
          <td className="text-center">R</td>
          <td>LAVENDER</td>
          <td>NITRATE</td>
          <td>-1</td>
          <td>62.01</td>
        </tr>
        <tr>
          <td className="text-center">E</td>
          <td>MAUVE</td>
          <td>CHLORIDE</td>
          <td>-1</td>
          <td>35.45</td>
        </tr>
        <tr>
          <td className="text-center">S</td>
          <td>PISTACHIO</td>
          <td>ALUMINUM</td>
          <td>+3</td>
          <td>26.98</td>
        </tr>
        <tr>
          <td className="text-center">I</td>
          <td>PINK</td>
          <td>CITRATE</td>
          <td>-3</td>
          <td>189.10</td>
        </tr>
        <tr>
          <td className="text-center">G</td>
          <td>EGGSHELL</td>
          <td>STANNOUS</td>
          <td>+2</td>
          <td>118.71</td>
        </tr>
        <tr>
          <td className="text-center">N</td>
          <td>MINT</td>
          <td>SILICATE</td>
          <td>-2</td>
          <td>76.08</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This yields the clue phrase <Clue>LAST POPE TO RESIGN</Clue>.
    </p>
    <p>
      The last pope to resign was <Answerize>{ANSWER}</Answerize>, which is our
      answer. (Other submissions that yield nudges to the right format include{' '}
      <Clue>POPE BENEDICT</Clue>, <Clue>BENEDICT16</Clue>,{' '}
      <Clue>BENEDICTTHESIXTEENTH</Clue>, and <Clue>BENEDICT</Clue>).
    </p>
    <p>Sources:</p>
    <ul>
      <li>
        Mass:{' '}
        <a href="https://catholic-resources.org/ChurchDocs/Mass-RM3.htm">
          https://catholic-resources.org/ChurchDocs/Mass-RM3.htm
        </a>{' '}
        and{' '}
        <a href="https://bostoncatholic.org/the-catholic-mass-structure">
          https://bostoncatholic.org/the-catholic-mass-structure
        </a>
      </li>
      <li>
        Extinct animals:{' '}
        <a href="https://en.wikipedia.org/wiki/Lists_of_extinct_species#Animals">
          https://en.wikipedia.org/wiki/Lists_of_extinct_species#Animals
        </a>
      </li>
      <li>
        Mass extinction events:{' '}
        <a href="https://en.wikipedia.org/wiki/Extinction_event">
          https://en.wikipedia.org/wiki/Extinction_event
        </a>
      </li>
      <li>Molar mass: Google</li>
      <li>
        Ionic charges: handy reference at{' '}
        <a href="https://www.gpb.org/sites/default/files/2020-05/series_toolkit_unit_5_ionic_charges_chart_cations_and_anions.pdf">
          https://www.gpb.org/sites/default/files/2020-05/series_toolkit_unit_5_ionic_charges_chart_cations_and_anions.pdf
        </a>
      </li>
    </ul>
    <style jsx global>{`
      .table-1 td:nth-child(n + 3),
      .table-1 th:nth-child(n + 3),
      .table-2 td:nth-child(1),
      .table-3 td:nth-child(4),
      .table-3 th:nth-child(4),
      .table-4 td:nth-child(n + 4),
      .table-4 td:nth-child(1) {
        text-align: center !important;
      }
      .table-1 td:nth-child(4),
      .table-2 td:nth-child(1),
      .table-3 td:nth-child(3n + 2),
      .table-3 td:nth-child(3),
      .table-4 td:nth-child(1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
