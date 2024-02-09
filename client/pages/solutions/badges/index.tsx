import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/badges/0.png';
import image1 from 'assets/solutions/badges/1.png';
import image2 from 'assets/solutions/badges/2.png';
import image3 from 'assets/solutions/badges/3.png';
import image4 from 'assets/solutions/badges/4.png';
import image5 from 'assets/solutions/badges/5.png';
import image6 from 'assets/solutions/badges/6.png';
import image7 from 'assets/solutions/badges/7.png';
import image8 from 'assets/solutions/badges/8.png';
import image9 from 'assets/solutions/badges/9.png';
import image10 from 'assets/solutions/badges/10.png';

const SLUG = 'badges';
const ANSWER = `THE MASK`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      At Hunt kickoff, we're handed a bag full of team resources, including a
      stack of name badges for team members to wear while they're on campus. We
      notice that there are eight different badge designs, one each for several
      different dwarf planets. We also notice that the back of each badge has a
      description of the corresponding dwarf planet and an encoded message.
    </p>
    <p>
      The decoded messages describe an object to align the badges with, but
      where can we find those objects? If we look along the edges of our badges,
      we notice that we can line them up and form a 3x3 grid by connecting
      images along the edges of the badges. But there's something missing&mdash;it
      seems like there should be a ninth badge in the center.
    </p>
    <p>
      We notice the running team is wearing badges that look slightly different
      than ours. If we stop a running team member and ask to look at their
      badge, we see it contains an image of Pluto and the other half of all
      eight messages encoded in the same method. Copying their badge, we get the
      other half of each message.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Dwarf Planet</th>
          <th>Encoding Method</th>
          <th>Decoded Message</th>
          <th>Pluto badge message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ceres</td>
          <td>Series elements* (see table below)</td>
          <td>Align with melon</td>
          <td>outside 5-115</td>
        </tr>
        <tr>
          <td>Eris</td>
          <td>Dancing man code</td>
          <td>Place planet on gold medal</td>
          <td>just outside 10-140</td>
        </tr>
        <tr>
          <td>Gonggong</td>
          <td>Morse code</td>
          <td>Place on top firework</td>
          <td>next to 2-168J</td>
        </tr>
        <tr>
          <td>Haumea</td>
          <td>NATO alphabet symbols</td>
          <td>Set atop lei</td>
          <td>opposite 1-201</td>
        </tr>
        <tr>
          <td>Makemake</td>
          <td>Binary to ASCII</td>
          <td>Align with black gear</td>
          <td>outside 14N-112</td>
        </tr>
        <tr>
          <td>Orcus</td>
          <td>Braille</td>
          <td>Put on green light</td>
          <td>outside 4-237</td>
        </tr>
        <tr>
          <td>Quaoar</td>
          <td>Bacon cipher</td>
          <td>Line up with shield</td>
          <td>next to one - one six six E</td>
        </tr>
        <tr>
          <td>Sedna</td>
          <td>Chemical Symbols</td>
          <td>LiNe UP WITh BUOY</td>
          <td>NeAr 7-134</td>
        </tr>
      </tbody>
    </Table>
    <p>*Series elements for the Ceres badge include:</p>
    <Table>
      <thead>
        <tr>
          <th>Given</th>
          <th>Series</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>M(8)(6)TFSS</td>
          <td>Days of the week</td>
        </tr>
        <tr>
          <td>MV(11)MJSU(14)</td>
          <td>Planets</td>
        </tr>
        <tr>
          <td>JFMAMJJAS(13)(5)D</td>
          <td>Months</td>
        </tr>
        <tr>
          <td>W(1)JM(10)AJ...</td>
          <td>US Presidents</td>
        </tr>
        <tr>
          <td>(9)AANOUW(3)W…</td>
          <td>US States by admission date, backwards</td>
        </tr>
        <tr>
          <td>(3)VX(2)CDM</td>
          <td>Roman Numerals</td>
        </tr>
        <tr>
          <td>ASDF(4)HJKL(12)</td>
          <td>Center keyboard row</td>
        </tr>
        <tr>
          <td>R(1)YGB(5)V</td>
          <td>Rainbow colors</td>
        </tr>
        <tr>
          <td>(9)8276412(8)2(11)6343(10)12729</td>
          <td>First 9 cubed integers</td>
        </tr>
        <tr>
          <td>O(3)TFF(4)S(7)NT...</td>
          <td>First letters of numbers</td>
        </tr>
        <tr>
          <td>(2)DTCCSSON(6)...</td>
          <td>FIrst letters of numbers in Spanish</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <SheetableImage
        alt="The badges assembled in a 3x3 grid: Makemake, Quaoar, Gonggong, Haumea, Pluto, Ceres, Orcus, Sedna, Eris."
        src={image0}
        title=""
      />
    </p>
    <p>
      Now we have eight instructions and eight locations on MIT campus. If we go
      to each of these locations, we'll see a poster on the wall that's themed
      after the god the dwarf planet is named for. Lining up the planet image on
      the badge with the item specified by each message, the star image on the
      badge lines up with one word from the poster. The words, with their
      corresponding location from the grid above are:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>SOME</Monospace>
          </td>
          <td>
            <Monospace>BUDDIES</Monospace>
          </td>
          <td>
            <Monospace>TOP</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>HE</Monospace>
          </td>
          <td className="bg-black"></td>
          <td>
            <Monospace>MEAD</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>REMOVE</Monospace>
          </td>
          <td>
            <Monospace>CARE</Monospace>
          </td>
          <td>
            <Monospace>GYM</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      That's gibberish, unless we remember that each badge featured a phonetic
      pronunciation guide. If we read those words clockwise starting at the top
      left (as indicated by the image connections between badges) out loud, it
      sounds like "'Somebody stop me' Jim Carrey movie." The movie where Jim
      Carrey says that phrase is <Answerize>THE MASK</Answerize>, which is the
      answer to this puzzle.
    </p>
    <Appendix>
      <p>Staff pluto badges</p>
      <p>
        <SheetableImage
          alt=""
          src={image1}
          title=""
          className="mx-auto w-full max-w-lg"
        />
      </p>
      <p>
        <SheetableImage
          alt=""
          src={image2}
          title=""
          className="mx-auto w-full max-w-lg"
        />
      </p>
      <hr className="my-4" />
      <p>Ceres, outside 5-115</p>
      <p>
        <SheetableImage
          alt=""
          src={image3}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Eris, just outside 10-140</p>
      <p>
        <SheetableImage
          alt=""
          src={image4}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Gonggong, next to 2-168J</p>
      <p>
        <SheetableImage
          alt=""
          src={image5}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Haumea, opposite 1-201</p>
      <p>
        <SheetableImage
          alt=""
          src={image6}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Makemake, outside 14N-112</p>
      <p>
        <SheetableImage
          alt=""
          src={image7}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Orcus, outside 4-237</p>
      <p>
        <SheetableImage
          alt=""
          src={image8}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Quaoar, next to 1-166E</p>
      <p>
        <SheetableImage
          alt=""
          src={image9}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
      <hr className="my-4" />
      <p>Sedna, near 7-134</p>
      <p>
        <SheetableImage
          alt=""
          src={image10}
          title=""
          className="mx-auto w-full max-w-md"
        />
      </p>
    </Appendix>
    <AuthorsNotes>
      <p>
        When testing this, we had our "testsolve administrator" (person managing
        the session) act like the on-site person for a remote team. When
        testsolvers realized they were missing a badge, we asked them to pretend
        they were at hunt: "Imagine you're at Mystery Hunt. If a ninth badge
        exists, where would you look for it?". If they asked about staff badges,
        we would send them the Pluto badge. Afterwards, as they requested to
        visit various locations, we would send them the posters, noting that all
        posters are 8 ½" x 11".
      </p>
      <p>
        We anticipate a similar procedure working for postsolvers (if you have a
        friend spoil themselves&mdash;hi friend!).
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>
        Badge front background: "A Hubble Sky Full of Stars", ESA/Hubble and
        NASA,{' '}
        <a href="https://science.nasa.gov/missions/hubble/a-hubble-sky-full-of-stars/">
          https://science.nasa.gov/missions/hubble/a-hubble-sky-full-of-stars/
        </a>
      </p>
      <p>
        Badges and posters were created using Canva. Images are licensed through
        Canva, except as stated above. Individual Canva image attributions:
      </p>
      <ul>
        <li>Badge back background: "Stars in the Universe", geralt, Canva</li>
        <li>"meteor gradient icon" by Eucalyp from amethyststudio</li>
        <li>"Comet Illustration" by Acrostock</li>
        <li>
          "Lined Minimal Mountain Range" by Allan Faustino from Sketchify
          Education
        </li>
        <li>"echo sounder icon" by ixdesignlab from ixdesignlab</li>
        <li>"Tango" by Magic Design</li>
        <li>"Black Alpha Sign" by Chirawan</li>
        <li>"Oscar Statue on Black Background" by photology2000</li>
        <li>
          "Happy Father's Day Young father carrying son on his shoulder Father
          and son Vector illustration" by AQ3 from Ryan Tenbrink's Images
        </li>
        <li>"Lima bean" by Owren Studio</li>
        <li>
          "India Pop Kitsch Independence Day Flag India Shape" by Sketchify
          India
        </li>
        <li>"Buildable Abstract Character Body Star" by sparklestroke</li>
        <li>"Acid Graphic Elements Filled Complex Sparkle" by sparklestroke</li>
        <li>"Geometric Shaky Erlenmeyer Flask" by sketchify</li>
        <li>"Test Tube Icon" by eyewave</li>
        <li>"Chemistry Flask Icon" by Anthony Fever</li>
        <li>"Geometric Shaky Florence Flask" by sketchify</li>
        <li>"Planet Ceres in Watercolor Illustration" by Ljudmila Kopecka</li>
        <li>"Brown Planet Vector" by Vectortradition</li>
        <li>
          "Makemake dwarf planet Flat icon" by Chanut is industries from Rafiico
          Studio
        </li>
        <li>"Haumea dwarf-planet-flat" by Art House</li>
        <li>"Sedna dwarf-planet-flat" by Art House</li>
        <li>"Mercury planet cartoon illustration" by wanttofeel</li>
        <li>"Eris dwarf-planet-flat" by Art House</li>
        <li>"Comet Halley" by Stediaco</li>
        <li>"UFO - Spaces" by Visualist</li>
        <li>"Rocket" by Tive Studio</li>
        <li>"Satellite Flat Icon" by anjanadaksh</li>
        <li>"Cute cartoon astronaut" by Dedy Izham</li>
        <li>"Painterly Textured Semi Realistic Spiral Galaxy" by Jea Gaviña</li>
        <li>"Organic Hand Drawn Comet" by Alyssa Babasa</li>
        <li>"Rocket Spaceship Vector" by Giuseppe Ramos D</li>
        <li>"Artificial Satellite Illustration" by Dulina Jayathunga</li>
        <li>"Toucan Bird Illustration" by maahlumi</li>
        <li>"Pineapple" by Fusion Books</li>
        <li>"Hibiscus, Tropical Flower Illustration" by Victoria Sergeeva</li>
        <li>"Beautiful Hawaiian Flower" by Giuseppe Ramos V</li>
        <li>"Graduation lei" by hariaprianto</li>
        <li>"Milk Carton" by Victoria Sergeeva</li>
        <li>"Grapes" by Nataliya Yakovleva</li>
        <li>"Hand-drawn Russian Grocery Broccoli" by Sketchify Russia</li>
        <li>
          "Cartoon Russian Grocery Food Carrot Vegetable" by Sketchify Russia
        </li>
        <li>"Hand-Drawn Russian Grocery Pepper" by Sketchify Russia</li>
        <li>"Pumpkin" by Icons8</li>
        <li>"Geometric Russian Cuisine Beets" by Sketchify Russia</li>
        <li>"Fresh Watermelon Icon" by MostafaElTurkey36, pixabay</li>
        <li>"Eggplant" by Clker-Free-Vector-Images, pixabay</li>
        <li>"cheese wedge" by Twemoji</li>
        <li>"Yellow Bell Pepper Illustration" by Buravleva stock</li>
        <li>"Music Notes Icon" by djvstock</li>
        <li>
          "Cartoon Russian Grocery Food Potato Vegetable" by Sketchify Russia
        </li>
        <li>"Tomato" by Victoruler</li>
        <li>"scallion" by DAPA Images</li>
        <li>"Folk Painterly CNY Fan" by Trendify</li>
        <li>"Illustrative Lunar New Year Dragon Dance" by Anika De Jesus</li>
        <li>"Lampion Chinese Imlek Lunar" by DSAP Project</li>
        <li>"Flower Lunar New Year Illustration" by tmintcraft</li>
        <li>"Fireworks New Year Element" by Dhananach</li>
        <li>"Lunar New Year" by Shootbe</li>
        <li>"Flower Lunar Ornament" by DSAP Project</li>
        <li>"captain america" by sorembadesignz</li>
        <li>"Film Reel" by Fusion Books</li>
        <li>"Rattlesnake" by Icons8</li>
        <li>"Polar Bear" by heyrabbiticons</li>
        <li>"Illustration of ravens" by Igor Zubkov</li>
        <li>"Law Hammer Justice Business Organic Drawn" by iconsy</li>
        <li>"Blue Whale" by Yakubovich Katya</li>
        <li>"Red Buoy Lighter" by Hello Swedish</li>
        <li>"Seaweed" by Mii from Hinh anh cua jasmine</li>
        <li>"Gear Wheel Illustration" by Samuel1983, pixabay</li>
        <li>"Arm Wrestling Icon" by fractal.gr</li>
        <li>"Arm wrestling icon" by Leremy Gan Khoon Lay</li>
        <li>"Medal Award Education Block and Flat Icon" by iconsy</li>
        <li>
          "Boxing Ring, Arena for Wrestling Fighting Sport" by Vectortradition
        </li>
      </ul>
    </Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
