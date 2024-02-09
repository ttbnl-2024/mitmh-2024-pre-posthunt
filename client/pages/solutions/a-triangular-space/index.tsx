import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-triangular-space/0.png';

const SLUG = 'a-triangular-space';
const ANSWER = `RAY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with 18 images shaped in a triangle, with 6 images per
      side. The flavor text "the sum of the squares of any two sides of any
      triangle equals twice the square on half the third side, together with
      twice the square on the median bisecting the third side" is Apollonius's
      theorem. Coupled with the title, "A Triangular Space," we can intuit that
      Space + Apollonius = NASA Apollo missions.
    </p>
    <p>
      In fact, the images correspond to the call signs of the Command Modules
      and Lunar Modules for the 9 manned Apollo missions with command and lunar
      modules (the aha moment likely occurred as we considered the images in
      light of "Apollo" and "Space," and recognized that the picture of the
      Eagle might correspond to "The Eagle Has Landed." Googling "Apollo Charlie
      Brown" or "Charlie Brown space" also works):
    </p>
    <Table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>Command Module</th>
          <th>Lunar Module</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_9">Apollo 9</a>
          </td>
          <td>Gumdrop</td>
          <td>Spider</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_10">Apollo 10</a>
          </td>
          <td>Charlie Brown</td>
          <td>Snoopy</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_11">Apollo 11</a>
          </td>
          <td>Columbia</td>
          <td>Eagle</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_12">Apollo 12</a>
          </td>
          <td>Yankee Clipper</td>
          <td>Intrepid</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_13">Apollo 13</a>
          </td>
          <td>Odyssey</td>
          <td>Aquarius</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_14">Apollo 14</a>
          </td>
          <td>Kitty Hawk</td>
          <td>Antares</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_15">Apollo 15</a>
          </td>
          <td>Endeavour</td>
          <td>Falcon</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_16">Apollo 16</a>
          </td>
          <td>Casper</td>
          <td>Orion</td>
        </tr>
        <tr>
          <td>
            <a href="https://en.wikipedia.org/wiki/Apollo_17">Apollo 17</a>
          </td>
          <td>America</td>
          <td>Challenger</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Pairing them up by drawing straight lines from the centers of the picture
      of the Command Module to the picture of the Lunar Module crosses out all
      letters except for 12: three trios in large hexagonal shapes, and single
      letters in small triangle shapes. The three trios spell{' '}
      <Clue>TRI NOT HEX</Clue> while the small triangles (each formed by three
      unique lines), contain the letters <Clue>R</Clue>, <Clue>A</Clue>, and{' '}
      <Clue>Y</Clue>, indicating that the answer is{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <Attributions>
      <ul>
        <li>
          <a href="https://www.mirror.co.uk/tv/tv-previews/what-time-endeavour-itv2-tonight-3292688">
            Endeavour
          </a>
          : ITV, fair use
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Intrepid_Museum_(49052290092).jpg">
            Intrepid
          </a>
          : Ayaj Suresh, used under{' '}
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/File:Charlie_Brown.png">
            Charlie Brown
          </a>
          : Charles M. Schulz, fair use
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Flag-map_of_the_United_States.svg">
            America
          </a>
          : Dmitry Averin, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">
            CC BY-SA 3.0
          </a>
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Orion_3008_huge.jpg">
            Orion
          </a>
          : Mouser, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">
            CC BY-SA 3.0
          </a>
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:2023_Honda_RC4_Odyssey_(cropped).jpg">
            Odyssey
          </a>
          : Q 334e, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
            CC BY-SA 4.0
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/File:Casper_(character).png">
            Casper
          </a>
          : Adrian Ropp / Harvey Comics, fair use
        </li>
        <li>
          <a href="https://www.nps.gov/wrbr/learn/december-17-2020.htm">
            Kitty Hawk
          </a>
          : National Park Service, public domain
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Bald_Eagle_Alaska_(10).jpg">
            Eagle
          </a>
          : Carl Chapman, used under{' '}
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:1939_Playball_Joe_Dimaggio_(minus_halftone).jpg">
            Yankee Clipper
          </a>
          : Play Ball cards, public domain
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Spider's_lunch_time.jpg">
            Spider
          </a>
          : RicardoMarconato, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
            CC BY-SA 4.0
          </a>
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:2019_Dodge_Challenger_SRT_Hellcat_FOS21.jpg">
            Challenger
          </a>
          : MrWalkr, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
            CC BY-SA 4.0
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/File:Columbia_Lions_logo.svg">
            Columbia
          </a>
          : Columbia University Athletics, fair use
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/File:Snoopy_Peanuts.png">
            Snoopy
          </a>
          : Charles M. Schulz, fair use
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Glowing_gumdrops.jpg">
            Gumdrop
          </a>
          : Steve, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">
            CC BY-SA 2.0
          </a>
          , cropped
        </li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Deion_Jones_2021_(cropped).jpg">
            Falcon
          </a>
          : All-Pro Reels, used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">
            CC BY-SA 2.0
          </a>
        </li>
        <li>Aquarius: own creation</li>
        <li>
          <a href="https://commons.wikimedia.org/wiki/File:Antares_overlooking_an_Auxiliary_Telescope.jpg">
            Antares
          </a>
          : ESO/B. Tafreshi, used under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/deed.en">
            CC BY 4.0
          </a>
        </li>
      </ul>
    </Attributions>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
