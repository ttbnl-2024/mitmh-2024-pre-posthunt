import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/presenting-capitol-records-tour/0.png';
import image1 from 'assets/solutions/presenting-capitol-records-tour/1.png';
import image2 from 'assets/solutions/presenting-capitol-records-tour/2.png';
import image3 from 'assets/solutions/presenting-capitol-records-tour/3.png';
import image4 from 'assets/solutions/presenting-capitol-records-tour/4.png';
import image5 from 'assets/solutions/presenting-capitol-records-tour/5.png';
import image6 from 'assets/solutions/presenting-capitol-records-tour/6.png';
import image7 from 'assets/solutions/presenting-capitol-records-tour/7.png';
import image8 from 'assets/solutions/presenting-capitol-records-tour/8.png';
import image9 from 'assets/solutions/presenting-capitol-records-tour/9.png';
import image10 from 'assets/solutions/presenting-capitol-records-tour/10.png';
import image11 from 'assets/solutions/presenting-capitol-records-tour/11.png';

const SLUG = 'presenting-capitol-records-tour';
const ANSWER = `MOUNT HOLYOKE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle consists of a video and its transcription. The first few
      seconds of the video are given to a spinning record on which we read: "The
      music is not a puzzle. The music is not any part of a puzzle."
    </p>
    <p>
      Once the record has finished spinning, the video zooms into MIT, where we
      read some italicized (therefore, flavor) text in a box:
    </p>
    <p className="mx-8">
      <b>CAPITOL RECORDS</b>{' '}
      <i>is pleased to announce a VIP tour of our finest facilities.</i>
    </p>
    <p className="mx-8">
      <i>
        Our prize-winning guides are all native to the countries you will visit.
        Check them out at the Capitol Records Facility in your own city or town.
        Then, book with confidence.
      </i>
    </p>
    <p className="mx-8">
      <i>
        At CAPITOL, we believe our work offers the greatest benefit to
        humankind.
      </i>
    </p>
    <p>
      Clueful phrases here include <i>"prize winning guides,"</i> suggesting
      some kind of award,{' '}
      <i>"check them out at the CRF in your own city or town,"</i> suggesting
      libraries/books, <i>"book with confidence,"</i> giving the word book, and{' '}
      <i>"the greatest benefit to humankind,"</i> which is the phrase from
      Alfred Nobel's will setting up the prizes to be given in his name.
    </p>
    <p>
      We are then whisked off on a 12-stop tour. At each site we see a slide
      with a few words from our "guide," along with a logo which contains words
      or letters. We take a small stop (freeze frame) to look at this and then
      we are off to the next country.
    </p>
    <p>
      The words and letters on the logos, when translated, turn out to be the
      words "Capitol Records Facility" (or just "Capitol Records") or the
      initials CRF (or CR). The graphics, the fonts, and the layout of each logo
      are the same as that country's National Library, and the words spoken by
      our guide are spoken in the language of that country. We have, in fact,
      flown to the exact location of 12 National Libraries. (An icon near the
      entrance to each library shows a person reading an open book, in case we
      needed any more confirming evidence.)
    </p>
    <p>
      One letter in each logo is colored differently from the way it is colored
      in the actual logo of that National Library. We note its position in the
      text.
    </p>
    <ol>
      <li>
        Algeria, 10
        <SheetableImage
          alt=""
          src={image0}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Columbia, 7
        <SheetableImage
          alt=""
          src={image1}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Austria, 13
        <SheetableImage
          alt=""
          src={image2}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Spain, 8
        <SheetableImage
          alt=""
          src={image3}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        USA, 2
        <SheetableImage
          alt=""
          src={image4}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Chile, 5
        <SheetableImage
          alt=""
          src={image5}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Italy, 12
        <SheetableImage
          alt=""
          src={image6}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        France, 12
        <SheetableImage
          alt=""
          src={image7}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Poland, 9
        <SheetableImage
          alt=""
          src={image8}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Russia, 4
        <SheetableImage
          alt=""
          src={image9}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Peru, 1
        <SheetableImage
          alt=""
          src={image10}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
      <li>
        Ireland, 14
        <SheetableImage
          alt=""
          src={image11}
          title=""
          className="w-full md:max-w-[300px] mb-4"
        />
      </li>
    </ol>
    <p>The video ends with the following message:</p>
    <p className="mx-8">
      <b>CAPITOL RECORDS</b>{' '}
      <i>thanks you for your participation in this VIP Tour.</i>
    </p>
    <p className="mx-8">
      <i>
        We understand that your guides asked to be addressed by their last names
        during the tour to keep order. However, if after the tour you wish to
        write them a letter, please use their <b>full names</b>
      </i>
      <i>. Thank you.</i>
    </p>
    <p>
      Translating our guides' statements, we find that each contains 2 book
      titles, each pair by a Nobel Laureate in Literature. Said laureate is not
      from the guide's country, however: they are from a different country on
      the tour, providing a cycle order. The laureates themselves are our
      guides, and are given in alphabetical order by last name.
    </p>
    <Table className="country-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Guide</th>
          <th>Book 1</th>
          <th>Book 2</th>
          <th>Books By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Algeria</td>
          <td>Albert Camus</td>
          <td>The Piano Teacher</td>
          <td>Wonderful, Wonderful Times // The Excluded</td>
          <td>Elfriede Jelinek</td>
        </tr>
        <tr>
          <td>Columbia</td>
          <td>Gabriel García Márquez</td>
          <td>A Full Moon in March</td>
          <td>The Second Coming</td>
          <td>William Butler Yeats</td>
        </tr>
        <tr>
          <td>Austria</td>
          <td>Elfriede Jelinek</td>
          <td>No Exit</td>
          <td>Nausea</td>
          <td>Jean-Paul Sartre</td>
        </tr>
        <tr>
          <td>Spain</td>
          <td>Juan Ramón Jiménez</td>
          <td>Strange Pilgrims</td>
          <td>No One Writes to the Colonel</td>
          <td>Gabriel García Márquez</td>
        </tr>
        <tr>
          <td>USA</td>
          <td>Toni Morrison</td>
          <td>The Stranger</td>
          <td>The Fall</td>
          <td>Albert Camus</td>
        </tr>
        <tr>
          <td>Chile</td>
          <td>Pablo Neruda</td>
          <td>The Russian Question</td>
          <td>We Never Make Mistakes</td>
          <td>Aleksandr Solzhenitsyn</td>
        </tr>
        <tr>
          <td>Italy</td>
          <td>Luigi Pirandello</td>
          <td>The Way to Paradise</td>
          <td>Death in the Andes</td>
          <td>Mario Vargas Llosa</td>
        </tr>
        <tr>
          <td>France</td>
          <td>Jean-Paul Sartre</td>
          <td>Wicked City</td>
          <td>Shadows on the Hudson</td>
          <td>Isaac Bashevis Singer</td>
        </tr>
        <tr>
          <td>Poland</td>
          <td>Isaac Bashevis Singer</td>
          <td>Green Leaves</td>
          <td>Distant Gardens</td>
          <td>Juan Ramón Jiménez</td>
        </tr>
        <tr>
          <td>USSR</td>
          <td>Aleksandr Solzhenitsyn</td>
          <td>Six Characters in Search of an Author</td>
          <td>The Rules of the Game</td>
          <td>Luigi Pirandello</td>
        </tr>
        <tr>
          <td>Peru</td>
          <td>Mario Vargas Llosa</td>
          <td>Beloved</td>
          <td>Home</td>
          <td>Toni Morrison</td>
        </tr>
        <tr>
          <td>Ireland</td>
          <td>William Butler Yeats</td>
          <td>The Book of Questions</td>
          <td>Twenty Love Poems and a Song of Despair</td>
          <td>Pablo Neruda</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We reorder by a cycle, starting with Mario Vargas Llosa's quote ("We begin
      here"), and ending with Luigi Pirandello ("In the end"). We use the
      position of the miscolored letter as an index into the full name of the
      guide:
    </p>
    <Table className="final-table">
      <thead>
        <tr>
          <th>Guide</th>
          <th>Books By</th>
          <th>Position</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MARIO VARGAS LLOSA</td>
          <td>TONI MORRISON</td>
          <td>1</td>
          <td>M</td>
        </tr>
        <tr>
          <td>TONI MORRISON</td>
          <td>ALBERT CAMUS</td>
          <td>2</td>
          <td>O</td>
        </tr>
        <tr>
          <td>ALBERT CAMUS</td>
          <td>ELFRIEDE JELINEK</td>
          <td>10</td>
          <td>U</td>
        </tr>
        <tr>
          <td>ELFRIEDE JELINEK</td>
          <td>JEAN-PAUL SARTRE</td>
          <td>13</td>
          <td>N</td>
        </tr>
        <tr>
          <td>JEAN-PAUL SARTRE</td>
          <td>ISAAC BASHEVIS SINGER</td>
          <td>12</td>
          <td>T</td>
        </tr>
        <tr>
          <td>ISAAC BASHEVIS SINGER</td>
          <td>JUAN RAMÓN JIMÉNEZ</td>
          <td>9</td>
          <td>H</td>
        </tr>
        <tr>
          <td>JUAN RAMÓN JIMÉNEZ</td>
          <td>GABRIEL GARCÍA MÁRQUEZ</td>
          <td>8</td>
          <td>O</td>
        </tr>
        <tr>
          <td>GABRIEL GARCÍA MÁRQUEZ</td>
          <td>WILLIAM BUTLER YEATS</td>
          <td>7</td>
          <td>L</td>
        </tr>
        <tr>
          <td>WILLIAM BUTLER YEATS</td>
          <td>PABLO NERUDA</td>
          <td>14</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>PABLO NERUDA</td>
          <td>ALEKSANDR SOLZHENITSYN</td>
          <td>5</td>
          <td>O</td>
        </tr>
        <tr>
          <td>ALEKSANDR SOLZHENITSYN</td>
          <td>LUIGI PIRANDELLO</td>
          <td>4</td>
          <td>K</td>
        </tr>
        <tr>
          <td>LUIGI PIRANDELLO</td>
          <td>MARIO VARGAS LLOSA</td>
          <td>12</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is{' '}
      <b>
        <Monospace>MOUNT HOLYOKE</Monospace>
      </b>
      .
    </p>
    <style jsx global>{`
      .country-table td:nth-child(3),
      .country-table td:nth-child(4) {
        font-style: italic;
      }
      .final-table td:nth-child(n + 3) {
        text-align: center;
      }
      .final-table td:nth-child(3n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
