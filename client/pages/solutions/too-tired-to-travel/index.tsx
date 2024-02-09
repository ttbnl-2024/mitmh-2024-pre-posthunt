import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image34 from 'assets/puzzles/too-tired-to-travel/4.png';
import image30 from 'assets/puzzles/too-tired-to-travel/15.png';
import image38 from 'assets/puzzles/too-tired-to-travel/24.png';
import image0 from 'assets/puzzles/too-tired-to-travel/44.png';
import image10 from 'assets/puzzles/too-tired-to-travel/46.png';
import image6 from 'assets/puzzles/too-tired-to-travel/49.png';
import image4 from 'assets/puzzles/too-tired-to-travel/58.png';
import image2 from 'assets/puzzles/too-tired-to-travel/59.png';
import image32 from 'assets/puzzles/too-tired-to-travel/73.png';
import image28 from 'assets/puzzles/too-tired-to-travel/91.png';
import image26 from 'assets/puzzles/too-tired-to-travel/117.png';
import image22 from 'assets/puzzles/too-tired-to-travel/123.png';
import image24 from 'assets/puzzles/too-tired-to-travel/138.png';
import image14 from 'assets/puzzles/too-tired-to-travel/159.png';
import image20 from 'assets/puzzles/too-tired-to-travel/174.png';
import image36 from 'assets/puzzles/too-tired-to-travel/179.png';
import image12 from 'assets/puzzles/too-tired-to-travel/180.png';
import image16 from 'assets/puzzles/too-tired-to-travel/184.png';
import image40 from 'assets/puzzles/too-tired-to-travel/187.png';
import image8 from 'assets/puzzles/too-tired-to-travel/189.png';
import image18 from 'assets/puzzles/too-tired-to-travel/194.png';
import image1 from 'assets/solutions/too-tired-to-travel/1.png';
import image3 from 'assets/solutions/too-tired-to-travel/3.png';
import image5 from 'assets/solutions/too-tired-to-travel/5.png';
import image7 from 'assets/solutions/too-tired-to-travel/7.png';
import image9 from 'assets/solutions/too-tired-to-travel/9.png';
import image11 from 'assets/solutions/too-tired-to-travel/11.png';
import image13 from 'assets/solutions/too-tired-to-travel/13.png';
import image15 from 'assets/solutions/too-tired-to-travel/15.png';
import image17 from 'assets/solutions/too-tired-to-travel/17.png';
import image19 from 'assets/solutions/too-tired-to-travel/19.png';
import image21 from 'assets/solutions/too-tired-to-travel/21.png';
import image23 from 'assets/solutions/too-tired-to-travel/23.png';
import image25 from 'assets/solutions/too-tired-to-travel/25.png';
import image27 from 'assets/solutions/too-tired-to-travel/27.png';
import image29 from 'assets/solutions/too-tired-to-travel/29.png';
import image31 from 'assets/solutions/too-tired-to-travel/31.png';
import image33 from 'assets/solutions/too-tired-to-travel/33.png';
import image35 from 'assets/solutions/too-tired-to-travel/35.png';
import image37 from 'assets/solutions/too-tired-to-travel/37.png';
import image39 from 'assets/solutions/too-tired-to-travel/39.png';
import image41 from 'assets/solutions/too-tired-to-travel/41.png';

const SLUG = 'too-tired-to-travel';
const ANSWER = `DEACTIVATES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see rows of tire treads followed by a list of pretty vague directions.
      First we notice that the tires appear in groups of several identical ones,
      which suggests possible indexing. We realize we need to identify the tire
      names. The flavor hints at a particular brand, but which one? Looking
      closely at (or googling parts of) the flavor text, we realize that there
      is a famous tire company with a slogan "A Better Way Forward"&mdash;Michelin
      tires. Indeed, all pictured tire treads are Michelin brand tires. We can
      then go to the company's website at{' '}
      <a href="https://www.michelinman.com/auto/browse-tires/all-tires">
        https://www.michelinman.com/auto/browse-tires/all-tires
      </a>{' '}
      and browse their tires to identify them. While there are over 50 Michelin
      tire types, this puzzle only uses about 20. Table 3, below, lists all
      Michelin tire types used in this puzzle. Indexing the number of times each
      tire tread appears into the tire name gives names of cities around the
      world. Table 1 lists the cities, in order.
    </p>
    <p>
      The next step involves looking at the directions. They are vague, so it is
      not immediately obvious which city they apply to. Some googling and trial
      and error lets us realize that they start at some relatively famous
      landmark in the cities clued by the tire treads in alphabetical order. We
      can then follow each set of directions, which lead us to a general
      location in the city, but what specific places are we looking for? This is
      clued by the word "sustainable" in the flavor, the acrostic{' '}
      <Monospace>GREEN~STARS</Monospace> in the directions and by the reminder
      to "refuel" at the end of each stop.{' '}
    </p>
    <p>
      In 2021, Michelin Guide started giving out a special distinction called a
      sustainability award (the "Green Star") to sustainable restaurants (
      <a href="https://guide.michelin.com/us/en/article/features/what-is-a-michelin-green-star">
        https://guide.michelin.com/us/en/article/features/what-is-a-michelin-green-star
      </a>
      ).
    </p>
    <p>
      We now realize that the directions lead us to unique locations of
      restaurants with these Michelin Green Stars in the clued cities. The
      restaurants for each given city can be looked up at the Michelin Guide{' '}
      <a href="https://guide.michelin.com/us/en/restaurants">
        https://guide.michelin.com/us/en/restaurants
      </a>{' '}
      (and filtered by the Green Star). Table 2 lists the restaurants and
      starting points in each city, in the order given by the tire treads.
      Taking the first letters of the restaurants gives the answer{' '}
      <Answerize>DEACTIVATES</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        All cities except Porvoo, Finland, have more than one restaurant with a
        Green Star, so you must use the directions to determine which one you
        need. Table 4 provides a detailed step by step of each set of
        directions.
      </p>
    </AuthorsNotes>
    <Appendix>
      <h3>Table 1: Clued Cities</h3>
      <Table className="table-1 my-2">
        <thead>
          <tr>
            <th>Order</th>
            <th>Indexed City Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Athens</td>
            <td>Greece</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Madrid</td>
            <td>Spain</td>
          </tr>
          <tr>
            <td>3</td>
            <td>San Francisco</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nara</td>
            <td>Japan</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Paris</td>
            <td>France</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Antwerp</td>
            <td>Belgium</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Porvoo</td>
            <td>Finland</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Seoul</td>
            <td>Korea</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Lyon</td>
            <td>France</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Oslo</td>
            <td>Norway</td>
          </tr>
          <tr>
            <td>11</td>
            <td>London</td>
            <td>UK</td>
          </tr>
        </tbody>
      </Table>
      <h3>Table 2: Green Star Restaurants and Starting Locations</h3>
      <Table className="table-2 my-2">
        <thead>
          <tr>
            <th>Order</th>
            <th>City Name</th>
            <th>Starting Location</th>
            <th>Restaurant Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Athens</td>
            <td>Parthenon</td>
            <td>Delta</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Madrid</td>
            <td>Casa de Campo</td>
            <td>El Invernadero</td>
          </tr>
          <tr>
            <td>3</td>
            <td>San Francisco</td>
            <td>Golden Gate Bridge</td>
            <td>Atelier Crenn</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nara</td>
            <td>Nara national museum</td>
            <td>Chugokusai Naramachi Kuko</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Paris</td>
            <td>Louvre museum</td>
            <td>Table - Bruno Verjus</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Antwerp</td>
            <td>MAS Museum aan de Stroom</td>
            <td>Instroom</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Porvoo</td>
            <td>Porvoo Cathedral</td>
            <td>VAR</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Seoul</td>
            <td>Gyeongbokgung Palace</td>
            <td>A flower blossoms...</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Lyon</td>
            <td>Lyon botanical garden</td>
            <td>Tetedoie</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Oslo</td>
            <td>Viking ship museum</td>
            <td>Einer</td>
          </tr>
          <tr>
            <td>11</td>
            <td>London</td>
            <td>Queen Mary University of London</td>
            <td>Silo</td>
          </tr>
        </tbody>
      </Table>
      <h3>Table 3: Michelin Tires</h3>
      <Table className="table-3 my-2" isFixed>
        <thead>
          <tr>
            <th className="w-[100px]">Tire tread image</th>
            <th className="w-[150px]">Full tire view</th>
            <th className="break-words">Link to Michelin site</th>
            <th>Michelin tire name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SheetableImage alt="" src={image0} title="" />
            </td>
            <td>
              <SheetableImage
                alt="agiliscrossclimate1q"
                src={image1}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-agilis-crossclimate">
                https://www.michelinman.com/auto/tires/michelin-agilis-crossclimate
              </a>
            </td>
            <td>Agilis Crossclimate</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image2} title="" />
            </td>
            <td>
              <SheetableImage alt="cc2" src={image3} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-crossclimate2">
                https://www.michelinman.com/auto/tires/michelin-crossclimate2
              </a>
            </td>
            <td>Crossclimate 2</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image4} title="" />
            </td>
            <td>
              <SheetableImage
                alt="4w 181 3528706008092 tire michelin defender ltx m slash s 275 slash 55 r20 113t nl a main 1 30"
                src={image5}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-defender-ltx-m-s">
                https://www.michelinman.com/auto/tires/michelin-defender-ltx-m-s
              </a>
            </td>
            <td>Defender LTX M/S</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image6} title="" />
            </td>
            <td>
              <SheetableImage alt="defender th1q" src={image7} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-defender-t-plus-h">
                https://www.michelinman.com/auto/tires/michelin-defender-t-plus-h
              </a>
            </td>
            <td>Defender T+H</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image8} title="" />
            </td>
            <td>
              <SheetableImage alt="eg1q" src={image9} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-energy-saver">
                https://www.michelinman.com/auto/tires/michelin-energy-saver
              </a>
            </td>
            <td>Energy Saver</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image10} title="" />
            </td>
            <td>
              <SheetableImage alt="eg as1q" src={image11} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-energy-saver-a-s">
                https://www.michelinman.com/auto/tires/michelin-energy-saver-a-s
              </a>
            </td>
            <td>Energy Saver All Season</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image12} title="" />
            </td>
            <td>
              <SheetableImage alt="tire latitude tour" src={image13} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-latitude-tour">
                https://www.michelinman.com/auto/tires/michelin-latitude-tour
              </a>
            </td>
            <td>Latitude Tour</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image14} title="" />
            </td>
            <td>
              <SheetableImage alt="lt trhp1q" src={image15} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-latitude-tour-hp">
                https://www.michelinman.com/auto/tires/michelin-latitude-tour-hp
              </a>
            </td>
            <td>Latitude Tour HP</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image16} title="" />
            </td>
            <td>
              <SheetableImage alt="ltx at21q" src={image17} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-ltx-a-t2">
                https://www.michelinman.com/auto/tires/michelin-ltx-a-t2
              </a>
            </td>
            <td>LTX A/T2</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image18} title="" />
            </td>
            <td>
              <SheetableImage
                alt="4w 323 3528708173156 tire michelin pilot alpin 5 235 slash 45 r18 98v xl a main 1 30"
                src={image19}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-pilot-alpin-5">
                https://www.michelinman.com/auto/tires/michelin-pilot-alpin-5
              </a>
            </td>
            <td>Pilot Alpin 5</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image20} title="" />
            </td>
            <td>
              <SheetableImage
                alt="4w 240 3528706263095 tire michelin pilot sport 4 s 255 slash 35 zr19 96y xl a main 1 30"
                src={image21}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-pilot-sport-4-s">
                https://www.michelinman.com/auto/tires/michelin-pilot-sport-4-s
              </a>
            </td>
            <td>Pilot Sport 4S</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image22} title="" />
            </td>
            <td>
              <SheetableImage
                alt="4w 363 3528709347266 tire michelin pilot sport a slash s 4 245 slash 40 zr18 97y xl a main 1 30"
                src={image23}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-pilot-sport-all-season-4">
                https://www.michelinman.com/auto/tires/michelin-pilot-sport-all-season-4
              </a>
            </td>
            <td>Pilot Sport All Season 4</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image24} title="" />
            </td>
            <td>
              <SheetableImage alt="plt as3p1q" src={image25} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-pilot-sport-a-s-3-plus">
                https://www.michelinman.com/auto/tires/michelin-pilot-sport-a-s-3-plus
              </a>
            </td>
            <td>Pilot Sport A/S3+</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image26} title="" />
            </td>
            <td>
              <SheetableImage
                alt="4w 104 3528701306940 tire michelin premier ltx 245 slash 50 r20 102v nl a main 1 30"
                src={image27}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-premier-ltx">
                https://www.michelinman.com/auto/tires/michelin-premier-ltx
              </a>
            </td>
            <td>Premier LTX</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image28} title="" />
            </td>
            <td>
              <SheetableImage alt="tire primacy as" src={image29} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-primacy-all-season">
                https://www.michelinman.com/auto/tires/michelin-primacy-all-season
              </a>
            </td>
            <td>Primacy All Season</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image30} title="" />
            </td>
            <td>
              <SheetableImage alt="pmc hp1q" src={image31} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-primacy-hp">
                https://www.michelinman.com/auto/tires/michelin-primacy-hp
              </a>
            </td>
            <td>Primacy HP</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image32} title="" />
            </td>
            <td>
              <SheetableImage alt="tire primacy ltx" src={image33} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-primacy-ltx">
                https://www.michelinman.com/auto/tires/michelin-primacy-ltx
              </a>
            </td>
            <td>Primacy LTX</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image34} title="" />
            </td>
            <td>
              <SheetableImage alt="tire primacy xc" src={image35} title="" />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-primacy-xc">
                https://www.michelinman.com/auto/tires/michelin-primacy-xc
              </a>
            </td>
            <td>Primacy XC</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image36} title="" />
            </td>
            <td>
              <SheetableImage
                alt="Low quality preview for "
                src={image37}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-x-ice-snow">
                https://www.michelinman.com/auto/tires/michelin-x-ice-snow
              </a>
            </td>
            <td>X Ice Snow</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image38} title="" />
            </td>
            <td>
              <SheetableImage
                alt="Low quality preview for "
                src={image39}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-x-lt-a-s">
                https://www.michelinman.com/auto/tires/michelin-x-lt-a-s
              </a>
            </td>
            <td>XLT A/S</td>
          </tr>
          <tr>
            <td>
              <SheetableImage alt="" src={image40} title="" />
            </td>
            <td>
              <SheetableImage
                alt="xtouraslashs2 225 slash 65 r17 0 nl a main 1 30"
                src={image41}
                title=""
              />
            </td>
            <td>
              <a href="https://www.michelinman.com/auto/tires/michelin-x-tour-a-s-2">
                https://www.michelinman.com/auto/tires/michelin-x-tour-a-s-2
              </a>
            </td>
            <td>XTour A/S2</td>
          </tr>
        </tbody>
      </Table>
      <h3>Table 4: Explanations of the Directions</h3>
      <Table className="my-2">
        <thead>
          <tr>
            <th>City</th>
            <th>Directions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Antwerp</td>
            <td>
              We start at Museum aan de Stroom known for its striking red
              sandstone facade. We go north on Rijnkaai along the river bank
              until we pass Droogdokken park with an interesting statue.
              Instroom restaurant is just on the right.
            </td>
          </tr>
          <tr>
            <td>Athens</td>
            <td>
              We start at the Parthenon and take Highway 91 going southwest.
              When it ends, we exit to the right and Delta restaurant is just to
              the right, in the Stavros Niarchos park.
            </td>
          </tr>
          <tr>
            <td>London</td>
            <td>
              We start at the Queen Mary University of London. We take highway
              A11 going east and switch to A12 going north. We exit the highway
              at Monier Rd and follow Wansbeck Rd north. We take a right at
              Rothbury (there is a pirate.com recording studio on the left). We
              follow the road until the Lee river. Silo is on our left.
            </td>
          </tr>
          <tr>
            <td>Lyon</td>
            <td>
              We start at the Lyon Botanical Garden and take Boulevard des
              Belges and Rue Duquesne. We cross the first bridge; continue on
              Tun de la Croix Rousse, then cross the second bridge to pass Old
              Lyon (Vieux Lyon). Take Rue du Sergent Michel Berthet south,
              exiting after the Loyasse cemetery. Following rue de Trion, we
              reach Tetedoie on the left.
            </td>
          </tr>
          <tr>
            <td>Madrid</td>
            <td>
              Starting at Casa de Campo, we go northeast at A-5. We go left at
              Plaza de Espana at c. de la Princessa, pass the Moncloa bus
              station, and take a right at the UCM government pavillion. We
              follow av. de los Reyes Catolicos and take a left and an immediate
              right on av de la Reina Victoria. We then take a right on c/de
              Ponzano and El Invernadero is on the right.
            </td>
          </tr>
          <tr>
            <td>Nara</td>
            <td>
              We start at the Nara national museum and take a left on 169. We
              pass the garden of the former Daijyo-in temple. Two blocks later,
              Chugokusai is on our right.
            </td>
          </tr>
          <tr>
            <td>Oslo</td>
            <td>
              Starting at the Viking Ship Museum, we take road E18 and go east.
              We go past the museum of modern art and Akershus fortress and turn
              left and immediately right onto Skippergata street. We then take a
              left onto Rådhusgata, and a right at the 2nd cross street onto
              Kirkegata. We turn left at the 2nd cross street onto Prinsens
              gate. Einer is on the left.
            </td>
          </tr>
          <tr>
            <td>Paris</td>
            <td>
              We start at the Louvre and go along the Seine on Quai Francois
              Mitterand. We pass the first island (Ile de la Cite) and as we
              pass the second (Ile Saint-Louis) we take a left at the Boulevard
              Henry IV. We go around the Bastille at head east at rue de la
              Roquette and then southeast at rue du Faubourg Saint-Antoine. The
              Micromania game store is on our left. We then take a right at av.
              Ledru Rollin and head south at rue de Prague. Table restaurant is
              on the right.
            </td>
          </tr>
          <tr>
            <td>Porvoo</td>
            <td>
              Starting at Porvoo Cathedral, we take Kulmakuja street going east.
              We take a left at Papinkatu street and VAR is about half a block
              away on the right.
            </td>
          </tr>
          <tr>
            <td>San Francisco</td>
            <td>
              Starting at the Presidio (where we can nicely see the Golden Gate
              Bridge), we take route 101 east. We take a right at Fillmore St.,
              and Atelier Crenn is on the right.
            </td>
          </tr>
          <tr>
            <td>Seoul</td>
            <td>
              We start at Gyeongbokgung Palace, the largest of the five palaces
              in Seoul. We exit the park on the east next to MMCA and go south
              along Samcheong-ro. We take a left on Yulgok-ro, and A flower
              blossoms on the rice is on the right.
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <Attributions>
      <p>
        All tire treads were cropped from images presented at the Michelin tire
        website <a href="http://www.michelinman.com">www.michelinman.com</a>.
      </p>
    </Attributions>
    <style jsx>{`
      .table-1 td:nth-child(1),
      .table-2 td:nth-child(1) {
        text-align: center;
      }

      .table-3 td {
        word-wrap: break-word;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
