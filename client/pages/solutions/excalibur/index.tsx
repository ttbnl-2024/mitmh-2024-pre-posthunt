import { FC } from 'react';

import Appendix from 'components/appendix';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image1 from 'assets/solutions/excalibur/1.png';
import image2 from 'assets/solutions/excalibur/2.png';

const SLUG = 'excalibur';
const ANSWER = `AURICLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      In Excalibur, we are presented 7 lists of "stars", along with a line
      drawing for each list. In particular, we see a year at the top (here,
      1950), an image, and a list of "Stars In Order Of Appearance".
    </p>
    <p>
      The flavourtext mentions a "contractible contraption". This has "contra"
      in two consecutive words. This clues Contra, a form of American folk
      dancing. Alternatively, "Rory O'Star I" is suggestive, as "Rory O'Star" is
      the name of a Contra dance and not of an actual person, and
      cross-referencing makes other clear dances appear. Finally, the
      flavourtext shows eyes "dancing" left and right, which further clues
      Contra dance. Once finding that these are related to Contra dance, we can
      divide up all of the entries into the following form:
    </p>
    <ol>
      <li>
        <b>A Contra Dance</b>: As a substring, of each entry, possibly
        interrupted, is the name of a Contra dance. For example, "Broken Star"
        and "Star Night Goodnight" and "Hi-lo Stars" are all such names.
      </li>
      <li>
        <b>An Ordering Word</b>: Most, but not all, of the entries have an
        "ordering word", for example "Primary", "First", "Final", "Premier",
        "Second", "Immediately", or "Episode III".
      </li>
      <li>
        <b>A Repeater Word</b>: A small selection of the entries have a word
        like "Reappears", "Same", "Repeating", or "Again". This appears when a
        Contra Dance - Ordering Word pair appears twice in the list, and
        corresponds to a star being revisited (see below).
      </li>
    </ol>
    <p>For the given stars, we have the following decomposition:</p>
    <Table>
      <thead>
        <tr>
          <th>Stars In Order Of Appearance</th>
          <th>Contra Dance</th>
          <th>Ordering Word</th>
          <th>Repeater Word</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Star Surprise</td>
          <td>Star Surprise</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>Only star in the dance "Star Surprise"</td>
        </tr>
        <tr>
          <td>The Latter Lady From the Other Star</td>
          <td>The Lady From The Other Star</td>
          <td>Latter</td>
          <td>N/A</td>
          <td>Last star in the dance "The Lady From The Other Star"</td>
        </tr>
        <tr>
          <td>Second Alpha and Omega Star</td>
          <td>Alpha and Omega Star</td>
          <td>Second</td>
          <td>N/A</td>
          <td>Second star in the dance "Alpha and Omega Star"</td>
        </tr>
        <tr>
          <td>Star Wars: Episode III</td>
          <td>Star Wars</td>
          <td>Episode III</td>
          <td>N/A</td>
          <td>3rd star in the dance "Star Wars"</td>
        </tr>
        <tr>
          <td>Primary Hi-lo Stars</td>
          <td>Hi-lo Stars</td>
          <td>Primary</td>
          <td>N/A</td>
          <td>First star in the dance "Hi-lo Stars"</td>
        </tr>
        <tr>
          <td>Final, Broken, Star</td>
          <td>Broken Star</td>
          <td>Final</td>
          <td>N/A</td>
          <td>Last star in the dance "Broken Star"</td>
        </tr>
        <tr>
          <td>The First Star Gazer</td>
          <td>Star Gazer</td>
          <td>First</td>
          <td>N/A</td>
          <td>First star in the dance "Star Gazer"</td>
        </tr>
        <tr>
          <td>First Starry Night Goodnight</td>
          <td>Starry Night Goodnight</td>
          <td>First</td>
          <td>N/A</td>
          <td>First star in the dance "Starry Night Goodnight"</td>
        </tr>
        <tr>
          <td>Darling Karla's Second Star</td>
          <td>Darling Karla's Star</td>
          <td>Second</td>
          <td>N/A</td>
          <td>Second star in the dance "Darling Karla's Star"</td>
        </tr>
        <tr>
          <td>Repeating Star Surprise</td>
          <td>Star Surprise</td>
          <td>N/A</td>
          <td>Repeating</td>
          <td>
            This is the second time we've seen the only star in Star Surprise
          </td>
        </tr>
        <tr>
          <td>Rory O'Star I</td>
          <td>Rory O'Star</td>
          <td>I</td>
          <td>N/A</td>
          <td>The first star in the dance "Rory O'Star"</td>
        </tr>
        <tr>
          <td>The First Star Gazer Returns</td>
          <td>Star Gazer</td>
          <td>First</td>
          <td>Returns</td>
          <td>The second time we've seen the last star in Star Gazer</td>
        </tr>
        <tr>
          <td>Premier Starship</td>
          <td>Starship</td>
          <td>Premier</td>
          <td>N/A</td>
          <td>The first star in the dance "Starship"</td>
        </tr>
        <tr>
          <td>First Broken Star</td>
          <td>Broken Star</td>
          <td>First</td>
          <td>N/A</td>
          <td>The first star in the dance "Broken Star"</td>
        </tr>
        <tr>
          <td>Second Alpha and Omega Star Reappears</td>
          <td>Alpha and Omega Star</td>
          <td>Second</td>
          <td>Reappears</td>
          <td>
            The second time we've seen the second star in Alpha and Omega Star
          </td>
        </tr>
        <tr>
          <td>Immediately Star Crazy</td>
          <td>Star Crazy</td>
          <td>Immediately</td>
          <td>N/A</td>
          <td>The first star in the dance "Star Crazy"</td>
        </tr>
        <tr>
          <td>Jenny's Star</td>
          <td>Jenny's Star</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>The first star in the dance "Jenny's Star"</td>
        </tr>
        <tr>
          <td>First Colliding Stars</td>
          <td>Colliding Stars</td>
          <td>First</td>
          <td>N/A</td>
          <td>The first star in the dance "Colliding Stars"</td>
        </tr>
        <tr>
          <td>Under the First Stars</td>
          <td>Under The Stars</td>
          <td>First</td>
          <td>N/A</td>
          <td>The first star in the dance "Under The Stars"</td>
        </tr>
        <tr>
          <td>First Starry Night Goodnight Again</td>
          <td>Starry Night Goodnight</td>
          <td>First</td>
          <td>Again</td>
          <td>We've seen this star before.</td>
        </tr>
        <tr>
          <td>Same First Broken Star</td>
          <td>Broken Star</td>
          <td>First</td>
          <td>Same</td>
          <td>We've seen this star before.</td>
        </tr>
      </tbody>
    </Table>
    <p>
      A "Star" is a move done in Contra dance, and each dance given has at least
      one star in it, in addition to a name that generally has a connection to
      stars (for flavour purposes). Listing out all of the stars in a dance, we
      find that the number of stars is always at most that of the ordering word,
      and that dances without more than one star are missing out the ordering
      word. As a result, we can use the ordering word to find a specific star
      within the dance.
    </p>
    <p>
      Now, the flavour indicates that we should "[look] left and then right".
      Thus, we take each star, and determine its left- and right-handedness, one
      of basically only two characteristics that a star has (the other being how
      far).
    </p>
    <p>
      Now, the image defines an ordering on the stars via the arrows, with the
      red star as the first in the "Stars In Order Of Appearance", and the blue
      star as the last one. Furthermore, the second time we leave a star, we use
      the arrow with two arrowheads on it (and the first time use the one with
      one arrow head leading out). Deleting first all of the ones that
      correspond to right-handed stars draws the following picture, by
      connecting the dots in the prescribed order:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      This is a picture of a <Clue>BULL</Clue>, which fits the first enumeration
      in the image. Trying now to delete the stars that are left-handed stars
      (thus looking only at the right-handed stars) gives the following image:
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" className="mx-auto" />
    </p>
    <p>
      This is clearly an <Clue>ENVELOPE</Clue>, also fitting the enumeration.
    </p>
    <p>
      Now, doing this for other pages eventually reveals that among the images
      are <Clue>LIGHTNING BOLT</Clue>, <Clue>TRIDENT</Clue>,{' '}
      <Clue>CADUCEUS</Clue>, <Clue>HEART</Clue>, which quite clearly indicate
      (especially <Clue>CADUCEUS</Clue>) that these might all be items used by
      Greek Gods. In this framework, the <Clue>BULL</Clue> signifies Zeus and
      the <Clue>ENVELOPE</Clue> signifies Hermes, God of Messengers. Now, all of
      the Gods to which the image correspond are in the set {'{'}(Hermes,
      Aphrodite, Ares, Zeus, Cronus, Poseidon){'}'}; All of these are the Greek
      names of planets' namesakes, namely {'{'};(Mercury, Venus, Mars, Jupiter,
      Saturn, Neptune){'}'}. Along with the flavourtext "In The Sky" and "It's
      all lining up", as well as the fact that we get two planets per page, we
      can see that this has to do with planetary conjunctions.
    </p>
    <p>
      Now, we use the provided year. In 1950, there was only one conjunction
      between Jupiter and Mercury, namely on 01 Mar 1950. The flavourtext
      mentions "the day", so we take 01, which via the A1Z26 cipher corresponds
      to <Clue>A</Clue>.
    </p>
    <p>
      We can proceed with this process for all of the other images. The
      conjunction dates are:
    </p>
    <Table className="class-1">
      <thead>
        <tr>
          <th>Year</th>
          <th>Left-handed Drawing</th>
          <th>Right-handed Drawing</th>
          <th>Left-handed God</th>
          <th>Right-handed God</th>
          <th>Conjunction Date/Time</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1950</td>
          <td>Bull</td>
          <td>Envelope</td>
          <td>Zeus / Jupiter</td>
          <td>Hermes / Mercury</td>
          <td>01 Mar 1950 15:13 UTC</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Early 1960</td>
          <td>Heart</td>
          <td>Lighting Bolt</td>
          <td>Aphrodite / Venus</td>
          <td>Zeus / Jupiter</td>
          <td>21 Jan 1960 10:44 UTC</td>
          <td>U</td>
        </tr>
        <tr>
          <td>1967</td>
          <td>Tortoise</td>
          <td>Sickle</td>
          <td>Hermes / Mercury</td>
          <td>Cronus / Saturn</td>
          <td>18 Apr 1967 02:45 UTC</td>
          <td>R</td>
        </tr>
        <tr>
          <td>1982</td>
          <td>Sword</td>
          <td>Scythe</td>
          <td>Ares / Mars</td>
          <td>Cronus / Saturn</td>
          <td>09 Jul 1982 23:34 UTC</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Late 1987</td>
          <td>Apple</td>
          <td>Trident</td>
          <td>Aphrodite / Venus</td>
          <td>Poseidon / Neptune</td>
          <td>03 Dec 1987 09:31 UTC</td>
          <td>C</td>
        </tr>
        <tr>
          <td>Late 2001</td>
          <td>Eagle</td>
          <td>Caduceus</td>
          <td>Zeus / Jupiter</td>
          <td>Hermes / Mercury</td>
          <td>12 Jul 2001 22:28 UTC</td>
          <td>L</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>Rose</td>
          <td>Shield</td>
          <td>Aphrodite / Venus</td>
          <td>Ares / Mars</td>
          <td>05 Oct 2017 13:26 UTC</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      which give us the letters <Answerize>{ANSWER}</Answerize>, spelling the
      answer.
    </p>
    <Appendix>
      Detailed solution can be found{' '}
      <a href="https://docs.google.com/spreadsheets/d/1EnbiPacHbpzXFZXpfKKPIXUzS_aO2MLdspmgUTTpfnI/edit#gid=1751485347">
        here
      </a>
      .
    </Appendix>
    <style jsx global>{`
      .class-1 td:nth-child(7) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
