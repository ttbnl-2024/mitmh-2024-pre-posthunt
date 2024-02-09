import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/toy-chest/0.png';
import image1 from 'assets/solutions/toy-chest/1.png';
import image2 from 'assets/solutions/toy-chest/2.png';
import image3 from 'assets/solutions/toy-chest/3.png';
import image4 from 'assets/solutions/toy-chest/4.png';
import image5 from 'assets/solutions/toy-chest/5.png';
import image6 from 'assets/solutions/toy-chest/6.png';
import image7 from 'assets/solutions/toy-chest/7.png';
import image8 from 'assets/solutions/toy-chest/8.png';
import image9 from 'assets/solutions/toy-chest/9.png';

const SLUG = 'toy-chest';
const ANSWER = `TEDDY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      While identifying images, we find that there are a suspiciously large
      number of cars, or animals. This clues us to look at Transformer or Beanie
      Baby sets of toys; and we find that we can divide most images into 5 sets
      of children's toy franchises. Within each set, we can pair images, and
      find 9 pairs in each set.
    </p>
    <ol>
      <li>Care Bears, and their belly badges</li>
      <li>Transformers (G1 Autobots), and the cars they transform into</li>
      <li>Smurfs, and their distinctive items or clothing</li>
      <li>Original Beanie Baby animals, and their names</li>
      <li>Bratz, and their nicknames</li>
    </ol>
    <p>Some images are not used in these pairs.</p>
    <Table className="text-xs">
      <style jsx>{`
        td {
          padding: 5px 5px !important;
        }
      `}</style>
      <tbody>
        <tr>
          <td>CHOCOLATE (D9)</td>
          <td>SPOT (D8)</td>
          <td>CHAMP (A8)</td>
          <td>HONDA CITY TURBO (B5)</td>
          <td>MARTINI PORSCHE 935 (B1)</td>
          <td>WISH (A6)</td>
          <td>FRIEND (A5)</td>
          <td>FIVE (message 1)</td>
          <td>QUEEN (E3)</td>
          <td>BUG (E2)</td>
          <td>JADE (E1)</td>
        </tr>
        <tr>
          <td>STRAW HAT (C1)</td>
          <td>TOYOTA HILUX (B3)</td>
          <td>NUMB (message 1)</td>
          <td>LEGS (D6)</td>
          <td>ER (message 1)</td>
          <td>LINKS (message 1)</td>
          <td>FELICIA (E9)</td>
          <td>SHEEP (E4)</td>
          <td>STOP (message 1)</td>
          <td>BIRTHDAY (A4)</td>
          <td>JAZZ (B1)</td>
        </tr>
        <tr>
          <td>BOTTLE (unpaired)</td>
          <td>SHOOTING STAR (A6)</td>
          <td>CHEF (C5)</td>
          <td>TROPHY (A8)</td>
          <td>RADIO (unpaired)</td>
          <td>CORVETTE C3 (B6)</td>
          <td>WHALE (D1)</td>
          <td>NISSAN VAN AMBULANCE (B7)</td>
          <td>RED ALERT (B4)</td>
          <td>BIBLE (unpaired)</td>
          <td>LIGIER JS11 (B2)</td>
        </tr>
        <tr>
          <td>HEART/ARROW TATTOO (C3)</td>
          <td>COW (unpaired)</td>
          <td>HOUND (B9)</td>
          <td>CHEER (A9)</td>
          <td>OUTLET (unpaired)</td>
          <td>OCTOPUS (unpaired)</td>
          <td>BEAR (D2)</td>
          <td>SASHA (E6)</td>
          <td>VINESSA (E4)</td>
          <td>HEFTY (C3)</td>
          <td>ELVIS (unpaired)</td>
        </tr>
        <tr>
          <td>RED HAT (C2)</td>
          <td>GLASSES (C6)</td>
          <td>ROO (extraction)</td>
          <td>STEAK (unpaired)</td>
          <td>PHOEBE (E7)</td>
          <td>TRUMPET (C7)</td>
          <td>PIG (D5)</td>
          <td>BEDTIME (A2)</td>
          <td>RATCHET (B7)</td>
          <td>YELLOW/RED GIFT BOX (C4)</td>
          <td>FERRET (unpaired)</td>
        </tr>
        <tr>
          <td>PLATYPUS (D7)</td>
          <td>TESLA (unpaired)</td>
          <td>NISSAN POLICE CAR (B8)</td>
          <td>BROWN OVERALLS (C8)</td>
          <td>KATIA (E8)</td>
          <td>JOKEY (C4)</td>
          <td>SALT (unpaired)</td>
          <td>SUGAR (E7)</td>
          <td>CHESS (unpaired)</td>
          <td>PROWL (B8)</td>
          <td>FARMER (C1)</td>
        </tr>
        <tr>
          <td>VANITY (C9)</td>
          <td>WOOD (unpaired)</td>
          <td>DOG (D8)</td>
          <td>TRACKS (B6)</td>
          <td>MITSUBISHI J59 (B9)</td>
          <td>LAMBORGHINI COUNTACH (B4)</td>
          <td>WINDMILL (unpaired)</td>
          <td>BASEBALL (unpaired)</td>
          <td>PRINCESS (E5)</td>
          <td>LOBSTER (D3)</td>
          <td>SEVE (extraction)</td>
        </tr>
        <tr>
          <td>NEVRA (E3)</td>
          <td>CUPCAKE W/ CANDLE (A4)</td>
          <td>PATTI (D7)</td>
          <td>NATURAL (C8)</td>
          <td>HARMONY (C7)</td>
          <td>GRUMPY (A7)</td>
          <td>YASMIN (E5)</td>
          <td>TURTLE (E8)</td>
          <td>BUNNY (E6)</td>
          <td>DOLPHIN (D4)</td>
          <td>PAPA (C2)</td>
        </tr>
        <tr>
          <td>KOOL KAT (E1)</td>
          <td>SHARE (A1)</td>
          <td>MIRAGE (B2)</td>
          <td>FLASH (D4)</td>
          <td>TWO YELLOW FLOWERS (A5)</td>
          <td>BRAINY (C6)</td>
          <td>TOQUE (C5)</td>
          <td>POTATO (unpaired)</td>
          <td>SKIDS (B5)</td>
          <td>HOIST (B3)</td>
          <td>SPLASH (D1)</td>
        </tr>
        <tr>
          <td>BICYCLE (unpaired)</td>
          <td>MOOSE (D9)</td>
          <td>RAINBOW (A9)</td>
          <td>FROG (D6)</td>
          <td>LT (extraction)</td>
          <td>BLUE CRESCENT MOON (A2)</td>
          <td>GECKO (E9)</td>
          <td>ORB (extraction)</td>
          <td>KUMI (E2)</td>
          <td>TWO STRAW ICE CREAM FLOAT (A1)</td>
          <td>BROWNIE (D2)</td>
        </tr>
        <tr>
          <td>DARK BLUE RAINCLOUD (A7)</td>
          <td>WHITE HOUSE (unpaired)</td>
          <td>HAND MIRROR (C9)</td>
          <td>PINCHERS (D3)</td>
          <td>FOUR LEAF CLOVER (A3)</td>
          <td>WOLF (unpaired)</td>
          <td>EXIT (unpaired)</td>
          <td>GOOD LUCK (A3)</td>
          <td>EARTH (unpaired)</td>
          <td>SQUEALER (D5)</td>
          <td>EAR (extraction)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The pairs for each of the five sets are numbered in the image above.
      Numbers are arbitrary and solely for convenience.
    </p>
    <p>
      In the first two lines of unused images, we see the message{' '}
      <Monospace>FIVE / NUMB / ER / LINKS / STOP</Monospace>, which indicates
      that there are only 5 sets of toys to find, and that we can solve each set
      of toys as a Numberlink puzzle by connecting the paired images. Each
      numberlink has a unique solution, in which a single cell is left empty.
      These unused cells correspond to unpaired images in the original grid.
      Reading in grid order, we see{' '}
      <Monospace>ROO / SEVE / LT / ORB / EAR</Monospace>, which can be parsed as
      the cluephrase <Monospace>ROOSEVELT OR BEAR</Monospace>. This yields the
      answer <Answerize>TEDDY</Answerize>.
    </p>
    <Appendix>
      <h3>Care Bears</h3>
      <Table>
        <thead>
          <tr>
            <th>Care Bear</th>
            <th>Belly Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SHARE</td>
            <td>TWO STRAW ICE CREAM FLOAT</td>
          </tr>
          <tr>
            <td>BEDTIME</td>
            <td>BLUE CRESCENT MOON</td>
          </tr>
          <tr>
            <td>GOOD LUCK</td>
            <td>FOUR LEAF CLOVER</td>
          </tr>
          <tr>
            <td>BIRTHDAY</td>
            <td>CUPCAKE W/ CANDLE</td>
          </tr>
          <tr>
            <td>FRIEND</td>
            <td>TWO YELLOW FLOWERS</td>
          </tr>
          <tr>
            <td>WISH</td>
            <td>SHOOTING STAR</td>
          </tr>
          <tr>
            <td>GRUMPY</td>
            <td>DARK BLUE RAINCLOUD</td>
          </tr>
          <tr>
            <td>CHAMP</td>
            <td>TROPHY</td>
          </tr>
          <tr>
            <td>CHEER </td>
            <td>RAINBOW</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-center">
        <a href="https://puzz.link/p?numlin/11/11/h8h65s4h6g8p9t2zl4i7l1h5n9h2i1g7i3h3i">
          https://puzz.link/p?numlin/11/11/h8h65s4h6g8p9t2zl4i7l1h5n9h2i1g7i3h3i
        </a>
      </p>
      <div className="flex flex-wrap justify-center">
        <SheetableImage className="max-w-xs" alt="" src={image0} title="" />
        <SheetableImage className="max-w-xs" alt="" src={image1} title="" />
      </div>
      <h3>Transformers</h3>
      <Table>
        <thead>
          <tr>
            <th>Transformer</th>
            <th>Car</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JAZZ</td>
            <td>MARTINI PORSCHE 935</td>
          </tr>
          <tr>
            <td>MIRAGE</td>
            <td>LIGIER JS11</td>
          </tr>
          <tr>
            <td>HOIST</td>
            <td>TOYOTA HILUX</td>
          </tr>
          <tr>
            <td>RED ALERT</td>
            <td>LAMBORGHINI COUNTACH</td>
          </tr>
          <tr>
            <td>SKIDS</td>
            <td>HONDA CITY TURBO</td>
          </tr>
          <tr>
            <td>TRACKS</td>
            <td>CORVETTE C3</td>
          </tr>
          <tr>
            <td>RATCHET</td>
            <td>NISSAN VAN AMBULANCE</td>
          </tr>
          <tr>
            <td>PROWL</td>
            <td>NISSAN POLICE CAR</td>
          </tr>
          <tr>
            <td>HOUND</td>
            <td>MITSUBISHI J59</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-center">
        <a href="https://puzz.link/p?numlin/11/11/i5am3nak6g74g2h9v7j8l8j694x2k53zi">
          https://puzz.link/p?numlin/11/11/i5am3nak6g74g2h9v7j8l8j694x2k53zi
        </a>
      </p>
      <div className="flex flex-wrap justify-center">
        <SheetableImage className="max-w-xs" alt="" src={image2} title="" />
        <SheetableImage className="max-w-xs" alt="" src={image3} title="" />
      </div>
      <h3>Smurfs</h3>
      <Table>
        <thead>
          <tr>
            <th>Smurf</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FARMER</td>
            <td>STRAW HAT</td>
          </tr>
          <tr>
            <td>PAPA</td>
            <td>RED HAT</td>
          </tr>
          <tr>
            <td>HEFTY</td>
            <td>HEART/ARROW TATTOO</td>
          </tr>
          <tr>
            <td>JOKEY</td>
            <td>YELLOW/RED GIFT BOX</td>
          </tr>
          <tr>
            <td>CHEF</td>
            <td>TOQUE</td>
          </tr>
          <tr>
            <td>BRAINY</td>
            <td>GLASSES</td>
          </tr>
          <tr>
            <td>HARMONY</td>
            <td>TRUMPET</td>
          </tr>
          <tr>
            <td>NATURAL</td>
            <td>BROWN OVERALLS</td>
          </tr>
          <tr>
            <td>VANITY</td>
            <td>HAND MIRROR</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-center">
        <a href="https://puzz.link/p?numlin/11/11/q1r5n3n3g26i7i4j8g4j19s87k2k65w9n">
          https://puzz.link/p?numlin/11/11/q1r5n3n3g26i7i4j8g4j19s87k2k65w9n
        </a>
      </p>
      <div className="flex flex-wrap justify-center">
        <SheetableImage className="max-w-xs" alt="" src={image4} title="" />
        <SheetableImage className="max-w-xs" alt="" src={image5} title="" />
      </div>
      <h3>Beanie Babies</h3>
      <Table>
        <thead>
          <tr>
            <th>Beanie Baby</th>
            <th>Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SPLASH</td>
            <td>WHALE</td>
          </tr>
          <tr>
            <td>BROWNIE</td>
            <td>BEAR</td>
          </tr>
          <tr>
            <td>PINCERS</td>
            <td>LOBSTER</td>
          </tr>
          <tr>
            <td>FLASH</td>
            <td>DOLPHIN</td>
          </tr>
          <tr>
            <td>SQUEALER</td>
            <td>PIG</td>
          </tr>
          <tr>
            <td>LEGS</td>
            <td>FROG</td>
          </tr>
          <tr>
            <td>PLATYPUS</td>
            <td>PATTI</td>
          </tr>
          <tr>
            <td>SPOT</td>
            <td>DOG </td>
          </tr>
          <tr>
            <td>CHOCOLATE</td>
            <td>MOOSE</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-center">
        <a href="https://puzz.link/p?numlin/11/11/98r6s1p2p5j7r8l3i7l4j4l1g9g6l2i3k5g">
          https://puzz.link/p?numlin/11/11/98r6s1p2p5j7r8l3i7l4j4l1g9g6l2i3k5g
        </a>
      </p>
      <div className="flex flex-wrap justify-center">
        <SheetableImage className="max-w-xs" alt="" src={image6} title="" />
        <SheetableImage className="max-w-xs" alt="" src={image7} title="" />
      </div>
      <h3>Bratz</h3>
      <Table>
        <thead>
          <tr>
            <th>Bratz</th>
            <th>Nickname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JADE</td>
            <td>KOOL KAT</td>
          </tr>
          <tr>
            <td>KUMI</td>
            <td>BUG</td>
          </tr>
          <tr>
            <td>NEVRA</td>
            <td>QUEEN</td>
          </tr>
          <tr>
            <td>VINESSA</td>
            <td>SHEEP</td>
          </tr>
          <tr>
            <td>YASMIN</td>
            <td>PRINCESS</td>
          </tr>
          <tr>
            <td>SASHA</td>
            <td>BUNNY</td>
          </tr>
          <tr>
            <td>PHOEBE</td>
            <td>SUGAR</td>
          </tr>
          <tr>
            <td>KATIA</td>
            <td>TURTLE</td>
          </tr>
          <tr>
            <td>FELICIA</td>
            <td>GECKO</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-center">
        <a href="https://puzz.link/p?numlin/11/11/n321l94zg64l7p8h7q5h3k586h1v9g2s">
          https://puzz.link/p?numlin/11/11/n321l94zg64l7p8h7q5h3k586h1v9g2s
        </a>
      </p>
      <div className="flex flex-wrap justify-center">
        <SheetableImage className="max-w-xs" alt="" src={image8} title="" />
        <SheetableImage className="max-w-xs" alt="" src={image9} title="" />
      </div>
    </Appendix>
    <Attributions>
      <Table>
        <style jsx>{`
          td {
            padding: 5px 5px !important;
          }
        `}</style>
        <tbody>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Dark_chocolate_Blanxart.jpg">
                John Loo
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Austin_Champ2010.JPG">
                Geni / GFDL CC-BY-SA
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Honda_City_Turbo_front-left_2015_Honda_Collection_Hall.jpg">
                Morio
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Porsche_935_Martini_Racing_(10711992404).jpg">
                Julien Chalendard
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Toyota_Wish_in_Hong_Kong.jpg">
                Rutger van der Maar
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Bob_Friend_1953.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Qoros_5_SUV_-_35520364714.jpg">
                Rutger van der Maar
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Queen_%E2%80%93_montagem_%E2%80%93_new.png">
                Collage by KPFC
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:1976_Volkswagen_Beetle_1600_L_(22175370642).jpg">
                Jeremy
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Jade_-_Nephrite_(2932215767).jpg">
                Stephanie Clifford
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:StrawBoater.jpg">
                Flapdragon
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Hilux-EA.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://www.youtube.com/watch?v=kXYiU_JCYtU">Fair use</a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Legs_-_ZZTop.jpg">
                Cropped / masked, fair use
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://zelda.fandom.com/wiki/File:FS_Links_Artwork.png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:FeliciaPrincezna.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Lleyn_sheep.jpg">
                Public domain
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://www.publicdomainpictures.net/en/view-image.php?image=59340&amp;picture=chocolate-birthday-cake">
                Public domain
              </a>
            </td>
            <td>Fair use</td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Empty_Wine_bottle.jpg">
                Patrick Heusser
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Leonid_Meteor_(cropped).jpg">
                Navicore
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:SouthParkChef.png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Wikipedia_gold_trophy.png">
                Nohat, Mayabengu
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Vintage_Panasonic_Two-Band_(FM-AM)_Transistor_Radio,_Model_RF-800,_9_Transistors,_Made_In_Japan,_Circa_1965_(14633774476).jpg">
                Joe Haupt
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Chevrolet_Corvette_C3_Stingray_IMG_3199.jpg">
                Alexander Migl
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Humpback_Whale_underwater_shot.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://www.nissan-global.com/EN/HERITAGE/Caravan_Ambulance_Hyper-Pack.html">
                Fair use
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg">
                NYC Wanderer (Kevin Eng)
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Jacques_Laffite_Ligier_JS11_15_2019_Silverstone_Classic_(48557917442).jpg">
                davehamster
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.pngwing.com/en/free-png-xlvam">Fair use</a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Cow_female_black_white.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Huckleberry-Hound.png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Fair_Day_Parade_2007_-10.jpg">
                Ed Uthman
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Electrical-Outlet-8830c.jpg">
                Loadmaster
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/johnwturnbull/8910458481/">
                John Turnbull
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">
                CC BY-NC-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Polar_Bear_-_Alaska_(cropped).jpg">
                Alan Wilson
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Sasha.JPG">
                Alexander Blum
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/de/deed.en">
                CC BY-SA 2.0 de
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Vinessa_Shaw_2013.png">
                Mikros Images
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </a>
            </td>
            <td>
              <a href="https://images.thdstatic.com/productImages/424d8596-add9-4e90-8ab3-1a5043185ad2/svn/hefty-garbage-bags-00e8357400ac-44_600.jpg">
                Fair use (Home Depot)
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Elvis_Presley.jpg">
                Rossano aka Bud Care
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Red_Hat_logo.svg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Reading_glasses_.jpg">
                Mk2010
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://disneyjuniorpedia.fandom.com/wiki/File:TNAOWTP_-_Roo.gif">
                Disney wiki, fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:London_broil.jpg">
                Jeremy Keith
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Friendsphoebe.jpg">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Yamaha_Trumpet_YTR-8335LA_crop.jpg">
                Yamaha Corporation
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Picture_pig.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Bedtime_reading.jpg">
                woodleywonderworks
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:GearWrench_roto-ratchet.jpg">
                Typhoon
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://www.wikihow.com/Tie-a-Gift-Wrapping-Bow#/Image:Tie-a-Gift-Wrapping-Bow-Step-5.jpg">
                Amy Guerro
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
                CC BY-NC-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://www.publicdomainpictures.net/en/free-download.php?image=ferret-in-a-ball&amp;id=23475">
                Public Domain
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Schnabeltier_1.jpg">
                Stefan Heinrich
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/de/deed.en">
                CC BY-SA 2.0 de
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Tesla_Model_X_(39912982353).jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Fairlady240ZGpolice.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://gardenpaws.fandom.com/wiki/Brown_Overalls?file=Brown_Overalls.png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://www.themoviedb.org/person/128019-katia-ricciarelli">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://jester.fandom.com/wiki/Jester_Wiki?file=Jester.gif">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://www.publicdomainpictures.net/en/view-image.php?image=204779&amp;picture=salt-in-the-hand">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:W%C3%BCrfelzucker_--_2018_--_3582.jpg">
                Dietmar Rabich
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Chess_board_opening_staunton.jpg">
                Staxringold
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Amur_%28siberian%29_tiger_prowling.jpg">
                jimw
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Farmer_in_bean_field,_Nicaragua.jpg">
                Neil Palmer (CIAT)
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Bathroom_vanity_cabinet_including_sink_and_drawers.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Firewood.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Oola_-_6_months.jpg">
                Jon Hurd
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:FloatingLadder.JPG">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Mitsubishi_1955_Jeep.JPG">
                Mitsupicture
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/tautaudu02/5056076389">
                Thomas Bersy
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">
                CC BY-NC-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Brill_windmill_April_2017.jpg">
                DeFacto
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Baseball.svg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Diana%2C_Princess_of_Wales_1997_%282%29.jpg">
                John Mathew Smith
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:KreeftbijDenOsse.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Seve_Ballesteros_2006-07-19.jpg">
                Peter
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                CC BY-SA 2.0
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://eldarya.fandom.com/wiki/File:Nevra_NE_Icon.png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Birthday_cupcake.svg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Patti_LaBelle2005.jpg">
                Public domain
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:US_Navy_080615-N-7656R-003_Navy_Band_Northwest%27s_Barbershop_Quartet_win_the_hearts_of_the_audience_with_a_John_Philip_Sousa_rendition_of.jpg">
                Public domain
              </a>
            </td>
            <td>Fair use</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Yasmin_Wijnaldum_for_Chaos,_headshot.jpg">
                Yvan Fabing
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Florida_Box_Turtle_Digon3_re-edited.jpg">
                Jonathon Zander (Digon3)
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Oryctolagus_cuniculus_Rcdo.jpg">
                JM Ligero Loarte
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01.jpg">
                Public domain
              </a>
            </td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Cat_wearing_sunglasses.jpg">
                Smirkybec
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Greyhound_stock_certificate.jpg">
                Downingsf
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Las_Vegas_(Nevada,_USA),_The_Strip_--_2012_--_6215.jpg">
                Dietmar Rabich
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Flash_(Jay_Garrick).png">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Gazania_rigens-2.jpg">
                Alvesgaspar
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/sa/3.0/">
                CC SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Human-brain.SVG">
                Hugh Guiney
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:One_chef's_hat.png">
                Omondi
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Potato_with_sprouts.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Bremsspur.jpg">
                Robert Kropf
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Electric-wire-rope-hoist.jpg">
                Aldifahri16
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Splash_made_by_a_girl_jumping_into_the_sea_in_R%C3%B6e_Sandvik,_Lysekil,_Sweden_1.jpg">
                Public domain
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:CANYON-speedmax-cf-slx-9-ltd_c1329.jpg">
                Marion Lauenstein
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Moose_983_LAB.jpg">
                Walter Ezell
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Rana_esculenta_on_Nymphaea_edit.JPG">
                Grand-duc
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-nc/3.0/">
                CC BY-NC 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:2004_Volkswagen_LT35_TDi_LWB_2.5_Front.jpg">
                Vauxford
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Tokay_gecko_@Vnm.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://memory-alpha.fandom.com/wiki/File:Orb_of_contemplation.jpg">
                Fair use
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Kumi_Koda_Con_2005.jpg">
                9084760@N04
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Lime_spider.jpg">
                Fir0002/Flagstaffotos
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-nc/3.0/">
                CC BY-NC 3.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Oreo-Brownie.jpg">
                Public domain
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:First_dark_clouds_of_October_2018.jpg">
                Chad Woodward
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:WhiteHouseSouthFacade.JPG">
                Matt Wade
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Hand_Mirror_MET_DP302779.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Earwig_description.svg">
                Bugboy52.40
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Four_Leaf_Clover_068.jpg">
                Cygnus921
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Grey_Wolf_Portrait.jpg">
                Public domain
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Exit_sign#/media/File:Japanese_Public_Information_Symbol_-_Emergency_Exit.svg">
                Public domain
              </a>
            </td>
            <td>Public domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:The_Blue_Marble_(remastered).jpg">
                Public domain
              </a>
            </td>
            <td>Fair use</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Human_right_ear_(cropped).jpg">
                Genusfotografen (Tomas Gunnarsson) / Wikimedia Sverige
              </a>
              {' '}/{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                CC BY-SA 4.0
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
