import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'revolting-developments';
const ANSWER = `BALIO TOWERS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We initially see some newspaper headlines with strange images and a set of
      dictionary definitions. After some quick research, we notice that each of
      the historical events happened in the month of December. After thinking
      about the word "revolting" in the title and the flavor text's mention of
      songs, we realize that all of the images depict the titles of songs by The
      Decemberists, in alphabetical order.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Decemberists Song Depicted</th>
          <th>Headline Event</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Abduction of Margaret</td>
          <td>AOL Instant Messenger Service discontinued</td>
          <td>December 15, 2017</td>
        </tr>
        <tr>
          <td>Calamity Song</td>
          <td>Marconi Receives First Transatlantic Radio Signal</td>
          <td>December 12, 1901</td>
        </tr>
        <tr>
          <td>Eli, The Barrow Boy</td>
          <td>Mississippi Joins Union as 20th State</td>
          <td>December 10, 1817</td>
        </tr>
        <tr>
          <td>Grace Cathedral Hill</td>
          <td>Rosa Parks Refuses To Relinquish Bus Seat, Is Arrested</td>
          <td>December 1, 1955</td>
        </tr>
        <tr>
          <td>The Gymnast High Above the Ground</td>
          <td>Beatles Fans Observe 10 Minutes of Silence For John Lennon</td>
          <td>December 14, 1980</td>
        </tr>
        <tr>
          <td>Here I Dreamt I Was An Architect</td>
          <td>Apollo 17 Lands on Lunar Surface</td>
          <td>December 11, 1972</td>
        </tr>
        <tr>
          <td>Lake Song</td>
          <td>Enron Files For Chapter 11 Bankruptcy</td>
          <td>December 2, 2001</td>
        </tr>
        <tr>
          <td>On The Bus Mall</td>
          <td>World Leaders Attend Funeral of Václav Havel</td>
          <td>December 23, 2011</td>
        </tr>
        <tr>
          <td>Rusalka, Rusalka</td>
          <td>
            FDA Issues Emergency Use Authorization for Pfizer's Messenger RNA
            COVID Vaccine
          </td>
          <td>December 11, 2020</td>
        </tr>
        <tr>
          <td>Sixteen Military Wives</td>
          <td>
            J.P.M. Prentice Discovers Nova Herculis; Star Soon to Be Visible to
            Naked Eye
          </td>
          <td>December 13, 1934</td>
        </tr>
        <tr>
          <td>Sons and Daughters</td>
          <td>Gas Leak In Bhopal, India Poisons Thousands</td>
          <td>December 3, 1984</td>
        </tr>
      </tbody>
    </Table>
    <p>
      When trying to figure out the words by the dictionary definitions, we
      notice the definitions are mostly straightforward but also that there
      seems to be a superfluous part of each definition. The Decemberists are
      known as a hyperliterate band who like to use uncommon words in their
      lyrics. Eventually, we realize each of these words is found in the lyrics
      of one of the songs depicted in the newspapers. If we take the day in
      December that the associated historical event happened and use it as an
      offset in the lyrics from the defined word (as hinted by the flavor text),
      we get eleven new words, each of which is defined by the superfluous word
      from the dictionary definition.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Song Title</th>
          <th>Word Given By Definition</th>
          <th>Date From Headline (Offset Bolded)</th>
          <th>Lyric After Offset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eli, The Barrow Boy</td>
          <td>Tamaracks</td>
          <td>
            12/<b>10</b>/1817
          </td>
          <td>
            <Clue>
              <b>B</b>UYING
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Calamity Song</td>
          <td>Dowager</td>
          <td>
            12/<b>12</b>/1901
          </td>
          <td>
            <Clue>
              <b>A</b>NGEL
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Sixteen Military Wives</td>
          <td>Blithely</td>
          <td>
            12/<b>13</b>/1934
          </td>
          <td>
            <Clue>
              <b>L</b>EAFY
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Grace Cathedral Hill</td>
          <td>Moribund</td>
          <td>
            12/<b>1</b>/1955
          </td>
          <td>
            <Clue>
              <b>I</b>
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Here I Dreamt I Was An Architect</td>
          <td>Balustrade</td>
          <td>
            12/<b>11</b>/1972
          </td>
          <td>
            <Clue>
              <b>O</b>UTSIDE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>The Gymnast, High Above the Ground</td>
          <td>Quay</td>
          <td>
            12/<b>14</b>/1980
          </td>
          <td>
            <Clue>
              <b>T</b>IDE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Sons and Daughters</td>
          <td>Dirigible</td>
          <td>
            12/<b>3</b>/1984
          </td>
          <td>
            <Clue>
              <b>O</b>UR
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Lake Song</td>
          <td>Prevaricate</td>
          <td>
            12/<b>2</b>/2001
          </td>
          <td>
            <Clue>
              <b>W</b>HOLE
            </Clue>
          </td>
        </tr>
        <tr>
          <td>On the Bus Mall</td>
          <td>Colonnades</td>
          <td>
            12/<b>23</b>/2011
          </td>
          <td>
            <Clue>
              <b>E</b>NFOLDING
            </Clue>
          </td>
        </tr>
        <tr>
          <td>The Abduction of Margaret</td>
          <td>Withers</td>
          <td>
            12/<b>15</b>/2017
          </td>
          <td>
            <Clue>
              <b>R</b>IVER
            </Clue>
          </td>
        </tr>
        <tr>
          <td>Rusalka, Rusalka</td>
          <td>Breach</td>
          <td>
            12/<b>11</b>/2020
          </td>
          <td>
            <Clue>
              <b>S</b>LIPPED
            </Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we re-sort by the year of the associated headline events and look at
      the new words' first letters in order, we get the puzzle's answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      {' '}
      <p>
        This puzzle was originally intended to be a meta that took place at the
        Rock and Roll Hall of Fame and used Bruce Springsteen lyrics. When it
        didn't make the cut, I was very happy to have the opportunity to turn it
        into a puzzle about Decemberists songs. They're my favorite band (most
        of my wall art is posters I bought at their concerts) and they've
        provided the soundtrack to some of the best and worst times of the last
        15 years of my life. I'm sad that I couldn't make The Crane Wife lyrics
        work with this puzzle because the image I created of three construction
        cranes in veils and dresses still makes me laugh every time I look at
        it.
      </p>
    </AuthorsNotes>

    <Attributions>
      <ul>
        <li>
          Mike Morbeck, Eli Manning, Flickr, accessed November 19, 2023, &lt;
          <a href="https://www.flickr.com/photos/mikemorbeck/6722076153/">
            https://www.flickr.com/photos/mikemorbeck/6722076153/
          </a>
          &gt;
          <br />
          This file is licensed under the{' '}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            Creative Commons Attribution-Share Alike 2.0 Generic license
          </a>
          .
        </li>
        <li>
          CE Finn, Calamity Jane, Wikipedia, accessed November 19, 2023, &lt;
          <a href="https://en.m.wikipedia.org/wiki/File:Calamity_Jane_by_CE_Finn,_c1880s-crop1.jpg">
            https://en.m.wikipedia.org/wiki/File:Calamity_Jane_by_CE_Finn,_c1880s-crop1.jpg
          </a>
          &gt;
          <br />
          This work is in the public domain in the United States.
        </li>
        <li>
          Jmarme, Calamity Ganon, DeviantArt, accessed November 19, 2023, &lt;
          <a href="https://www.deviantart.com/jmarme/art/Calamity-Ganon-872811787">
            https://www.deviantart.com/jmarme/art/Calamity-Ganon-872811787
          </a>
          &gt;
          <br />
          This file is licensed under the{' '}
          <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.en">
            Creative Commons Attribution-Noncommercial-No Derivative Works 3.0
            License
          </a>
          .{' '}
        </li>
        <li>
          Chris06, Grace Cathedral, Wikipedia, accessed November 19, 2023, &lt;
          <a href="https://commons.wikimedia.org/w/index.php?curid=64643653">
            https://commons.wikimedia.org/w/index.php?curid=64643653
          </a>
          &gt; <br />
          This file is licensed under the{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
            Creative Commons Attribution-Share Alike 4.0 International license
          </a>
          .
        </li>
        <li>
          Fernando Frazão, Simone Biles Rio 2016, Agência Brasil, Wikimedia,
          accessed November 19, 2023, &lt;
          <a href="https://commons.wikimedia.org/wiki/File:Simone_Biles_Rio_2016b.jpg">
            https://commons.wikimedia.org/wiki/File:Simone_Biles_Rio_2016b.jpg
          </a>
          &gt;
          <br />
          This image is licensed under the{' '}
          <a href="https://creativecommons.org/licenses/by/3.0/br/deed.en">
            Creative Commons Attribution 3.0 Brazil License
          </a>
          .
        </li>
        <li>
          General "Ike" Eisenhower and Mrs. Mamie Eisenhower, Smithsonian
          National Museum of American History, accessed 19 November 2023, &lt;
          <a href="https://americanhistory.si.edu/collections/search/object/nmah_1814105">
            https://americanhistory.si.edu/collections/search/object/nmah_1814105
          </a>
          &gt;
          <br />
          This image is licensed under the{' '}
          <a href="https://creativecommons.org/publicdomain/zero/1.0/">
            Creative Commons Zero (CC0) license
          </a>
          .
        </li>
      </ul>
      <p>
        All images were created using Canva. Images are licensed through Canva,
        except where listed above. Individual Canva image attributions:
      </p>

      <ul>
        <li>
          "Office Interior of Panoramic CEO Office in 3D Render" by Navamin
          studio
        </li>
        <li>"Man sleeping on computer desk" by Leremy Gan Khoon Lay</li>
        <li>"Thought Bubble" by djvstock</li>
        <li>"Architect Construction Logo Design Vector" by blueberry studio</li>
        <li>"Architect designing icon" by Leremy Gan</li>
        <li>"Everglades" by Angie Julian, Getty Images</li>
        <li>"Mermaids and siren, hand drawn realistic sketch" by Gluiki</li>
        <li>"Nighttime" by n2rri, Getty Images</li>
        <li>"Margaret Thatcher" by Historical vintage vector</li>
        <li>"Ufo Aliens Illustration" by EdvanKun</li>
        <li>"Background sky" by janniwet, Getty Images</li>
        <li>"Cartoon Hills Flat Style" by artofangga</li>
        <li>"parking lot" by Markus Volk, Getty Images</li>
        <li>"Male Person Illustration" by OpenClipart-Vectors, pixabay</li>
        <li>"School Bus Icon" by FoxGrafy</li>
        <li>"Musical Key Notes" by nomadion</li>
        <li>"ground blue sky" by kohutdm, Getty Images</li>
        <li>"hot air balloon" by Tuyen CNTT</li>
        <li>"Vector Image" by gustavorezende, pixabay</li>
        <li>
          "Complicated Family Tree of Several Generations on White" by
          evegenybobrov
        </li>
        <li>"Victorian Ornamental Flourishes" by Stuart Bennett</li>
      </ul>
    </Attributions>
    <style jsx global>{`
      #extraction td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
