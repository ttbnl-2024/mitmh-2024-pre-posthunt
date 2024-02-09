import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/augmented-raility/0.png';
import image1 from 'assets/solutions/augmented-raility/1.png';
import image2 from 'assets/solutions/augmented-raility/2.png';
import image3 from 'assets/solutions/augmented-raility/3.png';
import image4 from 'assets/solutions/augmented-raility/4.png';
import image5 from 'assets/solutions/augmented-raility/5.png';
import image6 from 'assets/solutions/augmented-raility/6.png';
import image7 from 'assets/solutions/augmented-raility/7.png';
import image8 from 'assets/solutions/augmented-raility/8.png';
import image9 from 'assets/solutions/augmented-raility/9.png';

const SLUG = 'augmented-raility';
const ANSWER = `OVERBUDGET`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We determine which video game each screenshot belongs to, as well as which
      level / area they were taken in. The games and levels, in the order shown
      in the puzzle are as follows:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Video game</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <i>The Ultimate Doom</i>
          </td>
          <td>E1M1 (Hangar)</td>
        </tr>
        <tr>
          <td>
            <i>Pokémon Diamond</i> and <i>Pearl</i>
          </td>
          <td>Sinnoh (Overworld)</td>
        </tr>
        <tr>
          <td>
            <i>Mario Kart 64</i>
          </td>
          <td>Yoshi Valley</td>
        </tr>
        <tr>
          <td>
            <i>The Legend of Zelda: A Link to the Past</i>
          </td>
          <td>Eastern Palace</td>
        </tr>
        <tr>
          <td>
            <i>Counter-Strike 2</i>
          </td>
          <td>Dust II</td>
        </tr>
        <tr>
          <td>
            <i>Baba Is You</i>
          </td>
          <td>Overworld</td>
        </tr>
        <tr>
          <td>
            <i>Among Us</i>
          </td>
          <td>Skeld</td>
        </tr>
        <tr>
          <td>
            <i>Valorant</i>
          </td>
          <td>Split</td>
        </tr>
        <tr>
          <td>
            <i>GoldenEye 007</i>
          </td>
          <td>Streets</td>
        </tr>
        <tr>
          <td>
            <i>Hollow Knight</i>
          </td>
          <td>Fog Canyon</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We then associate each subway map with the level / area whose layout it
      describes, as well as with a real city. We can do this either by matching
      line colors and intersections between the fake maps and the real maps, or
      by using the landmarks in the background of each video game screenshot. We
      find that the subway maps are presented in alphabetical order by city.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Video Game</th>
          <th>City</th>
          <th>Landmark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <i>The Ultimate Doom</i>
          </td>
          <td>Santiago, Chile</td>
          <td>Church of Santo Domingo</td>
        </tr>
        <tr>
          <td>
            <i>Pokémon Diamond</i> and <i>Pearl</i>
          </td>
          <td>London, England</td>
          <td>Elizabeth Tower (Big Ben)</td>
        </tr>
        <tr>
          <td>
            <i>Mario Kart 64</i>
          </td>
          <td>Tokyo, Japan</td>
          <td>Hachiko statue</td>
        </tr>
        <tr>
          <td>
            <i>The Legend of Zelda: A Link to the Past</i>
          </td>
          <td>Madrid, Spain</td>
          <td>Plaza Mayor</td>
        </tr>
        <tr>
          <td>
            <i>Counter-Strike 2</i>
          </td>
          <td>Mexico City, Mexico</td>
          <td>Angel of Independence</td>
        </tr>
        <tr>
          <td>
            <i>Baba Is You</i>
          </td>
          <td>Paris, France</td>
          <td>Eiffel Tower</td>
        </tr>
        <tr>
          <td>
            <i>Among Us</i>
          </td>
          <td>Beijing, China</td>
          <td>Forbidden City</td>
        </tr>
        <tr>
          <td>
            <i>Valorant</i>
          </td>
          <td>Seoul, South Korea</td>
          <td>N Seoul Tower</td>
        </tr>
        <tr>
          <td>
            <i>GoldenEye 007</i>
          </td>
          <td>Guangzhou, China</td>
          <td>Guangzhou Circle</td>
        </tr>
        <tr>
          <td>
            <i>Hollow Knight</i>
          </td>
          <td>Melbourne, Australia</td>
          <td>Marvel Stadium</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We then find the location of each screenshot within its level, and
      determine which intersection that location is represented by on that
      game's subway map.
    </p>
    <p>
      Using the correspondence between the fake subway maps and the real subway
      maps, we find the name of that intersection in real life. To verify that
      the name is correct, we find that it matches one of the sets of blanks at
      the bottom of the page (ordered by length).
    </p>
    <p>
      Each screenshot has a number of duplicated items in it. We count those
      items, and use the results as indices into the station names to get the
      answer (using the order of the video game screenshots).
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Video Game</th>
          <th>Index item</th>
          <th>Count</th>
          <th>Station Name</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <i>The Ultimate Doom</i>
          </td>
          <td>Demon Bodies</td>
          <td>15</td>
          <td>
            <Monospace>PUENTECALYCANT</Monospace>
            <b>
              <Monospace>O</Monospace>
            </b>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Pokémon Diamond</i> and <i>Pearl</i>
          </td>
          <td>Bushes</td>
          <td>3</td>
          <td>
            <Monospace>LI</Monospace>
            <b>
              <Monospace>V</Monospace>
            </b>
            <Monospace>ERPOOLSTREET</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Mario Kart 64</i>
          </td>
          <td>Banana Peels</td>
          <td>13</td>
          <td>
            <Monospace>AOYAMAITCHŌM</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Legend of Zelda: A Link to the Past</i>
          </td>
          <td>Iron Balls</td>
          <td>2</td>
          <td>
            <Monospace>P</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>ÍNCIPEPÍO</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Counter-Strike 2</i>
          </td>
          <td>AWPs</td>
          <td>5</td>
          <td>
            <Monospace>TACU</Monospace>
            <b>
              <Monospace>B</Monospace>
            </b>
            <Monospace>AYA</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Baba Is You</i>
          </td>
          <td>Purple Flowers</td>
          <td>12</td>
          <td>
            <Monospace>CHARLESDEGA</Monospace>
            <b>
              <Monospace>U</Monospace>
            </b>
            <Monospace>LLEÉTOILE</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Among Us</i>
          </td>
          <td>Corpse</td>
          <td>1</td>
          <td>
            <b>
              <Monospace>D</Monospace>
            </b>
            <Monospace>ONGZHIMEN</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Valorant</i>
          </td>
          <td>Odins</td>
          <td>4</td>
          <td>
            <Monospace>DON</Monospace>
            <b>
              <Monospace>G</Monospace>
            </b>
            <Monospace>JAK</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>GoldenEye 007</i>
          </td>
          <td>KF7 Soviets</td>
          <td>12</td>
          <td>
            <Monospace>HAIZHUSQUAR</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Hollow Knight</i>
          </td>
          <td>Egg-shaped Bubbles</td>
          <td>10</td>
          <td>
            <Monospace>FLINDERSS</Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>REET</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This spells out the puzzle answer <Answerize>OVERBUDGET</Answerize>.
    </p>
    <Appendix>
      <Table className="my-2">
        <thead>
          <tr>
            <th>Game Level Map</th>
            <th>City Subway Map</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://doomwiki.org/wiki/MAP01:_Hangar_%28Console_Doom%29">
                <i>The Ultimate Doom</i>&mdash;E1M1
              </a>
            </td>
            <td>
              <a href="https://www.metro.cl/el-viaje/plano-de-red">
                Santiago Metro
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://game8.co/games/Pokemon-Brilliant-Diamond-Shining-Pearl/archives/343163">
                <i>Pokémon Diamond</i> and <i>Pearl</i>&mdash;Sinnoh
              </a>
            </td>
            <td>
              <a href="https://tfl.gov.uk/modes/tube/">London Underground</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ign.com/articles/2008/06/17/mario-kart-yoshi-valley-map-882214">
                <i>Mario Kart 64</i>&mdash;Yoshi Valley
              </a>
            </td>
            <td>
              <a href="https://www.tokyometro.jp/station/pdf/202006/202006_number_en.pdf">
                Tokyo Metro
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://mikesrpgcenter.com/zelda3/maps/eastpalace.html">
                <i>The Legend of Zelda: A Link to the Past</i>&mdash;Eastern
                Palace
              </a>
            </td>
            <td>
              <a href="https://www.metromadrid.es/sites/default/files/web/planos/Planoesquematico_0.pdf">
                Madrid Metro
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://counterstrike.fandom.com/wiki/Dust_II">
                <i>Counter-Strike 2</i>&mdash;Dust II
              </a>
            </td>
            <td>
              <a href="https://metro.cdmx.gob.mx/la-red/mapa-de-la-red">
                Mexico City Metro
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://static.wikia.nocookie.net/babaiswiki/images/7/73/Map.gif/revision/latest?cb=20220101110309">
                <i>Baba Is You</i>&mdash;Overworld
              </a>
            </td>
            <td>
              <a href="https://www.ratp.fr/en/plans">Paris Métro</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.deviantart.com/yoshiko-animation/art/Among-Us-Map-Skeld-Location-Guide-English-860737789">
                <i>Among Us</i>&mdash;Skeld
              </a>
            </td>
            <td>
              <a href="https://map.bjsubway.com/">Beijing Subway</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://valorant.fandom.com/wiki/Split">
                <i>Valorant</i>&mdash;Split
              </a>
            </td>
            <td>
              <a href="http://www.seoulmetro.co.kr/download/map_english.zip">
                Seoul Metropolitan Subway
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://gamefaqs.gamespot.com/n64/197462-goldeneye-007/map/5783-level-12-streets-map">
                <i>GoldenEye 007</i>&mdash;Streets
              </a>
            </td>
            <td>
              <a href="https://cs.gzmtr.com/ckfwEnglish/xlu_2020/202011/W020211101568525820347.jpg">
                Guangzhou Metro
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://hollowknight.fandom.com/wiki/Fog_Canyon?file=Fog+Canyon+Map.png">
                <i>Hollow Knight</i>&mdash;Fog Canyon
              </a>
            </td>
            <td>
              <a href="https://www.ptv.vic.gov.au/assets/PTV-default-site/Maps-and-Timetables-PDFs/Maps/Network-maps/Victorian-Train-Network-Map-May-2023-v3.pdf.pdf">
                Metro Trains Melbourne
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Annotated Maps</h3>
      <p>
        Intersections of metro lines are labeled with station names. Locations
        in the video games are labeled in parentheses. The station matching the
        screenshot from the game is highlighted in green.
      </p>

      <b>
        <i>The Ultimate Doom</i>&mdash;E1M1 (Hangar) // Santiago, Chile
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image0}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Pokémon Diamond</i> and <i>Pearl</i>&mdash;Sinnoh (Overworld) //
        London, England
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image1}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Mario Kart 64</i>&mdash;Yoshi Valley // Tokyo, Japan
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image2}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>The Legend of Zelda: A Link to the Past</i>&mdash;Eastern Palace //
        Madrid, Spain
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image3}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Counter-Strike 2</i>&mdash;Dust II // Mexico City, Mexico
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image4}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Baba Is You</i>&mdash;Overworld // Paris, France
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image5}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Among Us</i>&mdash;Skeld // Beijing, China
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image6}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Valorant</i>&mdash;Split // Seoul, South Korea
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image7}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>GoldenEye 007</i>&mdash;Streets // Guangzhou, China
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image8}
        title=""
        className="mx-auto"
      />
      <hr className="my-4" />

      <b>
        <i>Hollow Knight</i>&mdash;Fog Canyon // Melbourne, Australia
      </b>
      <SheetableImage
        alt="A complex, colorful metro diagram with the stations labeled"
        src={image9}
        title=""
        className="mx-auto"
      />
    </Appendix>
    <Attributions>
      <p>
        Maps designed using{' '}
        <a href="https://metromapmaker.com/">https://metromapmaker.com/</a>.
        Video game screenshots and items by fair use.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>License</th>
            <th>Source</th>
            <th>Attribution and Modifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Church of Santo Domingo</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Santiago#/media/File:Iglesia_de_Santo_Domingo,_Santiago,_2017-09-24.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:Carlos_yo">
                Carlos Figueroa
              </a>
              <br />
              Modifications: cropped and added to a collage
            </td>
          </tr>
          <tr>
            <td>Elizabeth Tower (Big Ben)</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </a>
            </td>
            <td>
              <a href="https://sketchfab.com/3d-models/clock-tower-big-ben-9a1c691fac774bcca4e2ba565c4c9d9b">
                Sketchfab
              </a>{' '}
            </td>
            <td>
              Author: <a href="https://sketchfab.com/noears6">ManySince910</a>{' '}
              on Sketchfab
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Hachiko statue</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0
              </a>
            </td>
            <td>
              <a href="https://sketchfab.com/3d-models/hachiko-fffee43c3cbc4b7ea20d6556a360b25f">
                Sketchfab
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://sketchfab.com/mauricesvay">Maurice Svay</a> on
              Sketchfab
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Plaza Mayor</td>
            <td>Fair Use</td>
            <td>
              <a href="https://earth.google.com/web/@40.41537639,-3.70729855,646.71987547a,216.00753107d,35y,356.41123253h,0t,0r">
                Google Earth
              </a>
            </td>
            <td>
              Source: <a href="https://earth.google.com/web/">Google Earth</a>
              <br />
              Modifications: added to collage
            </td>
          </tr>
          <tr>
            <td>Angel of Independence</td>
            <td>
              <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en">
                CC0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Angel_of_Independence#/media/File:Monument_to_Independence_(9779092355).jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/people/101561334@N08">
                Gary Todd from Xinzheng, China
              </a>
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Eiffel Tower</td>
            <td>
              <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en">
                CC0
              </a>
            </td>
            <td>Original art</td>
            <td>Author: Jim Hays</td>
          </tr>
          <tr>
            <td>Forbidden City</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Forbidden_City_panorama_from_Gate_of_Supreme_Harmony_wikivoyage_banner.jpg">
                Wikimedia
              </a>{' '}
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:Daniel_Case">
                Daniel Case
              </a>{' '}
              on Wikimedia Modifications: modified
            </td>
          </tr>
          <tr>
            <td>N Seoul Tower</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/2.0">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/N_Seoul_Tower#/media/File:N_Seoul_Tower_(22574508070).jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/people/68240136@N02">Laika ac</a>
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Guangzhou Circle</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Guangzhou_Circle#/media/File:Guangzhou_Circle_3.jpg">
                Wikpedia
              </a>
            </td>
            <td>
              Author: User Midip on Wikimedia
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Marvel Stadium</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Melbourne#/media/File:Melbourne_from_Waterfront_City,_Docklands_Pano_21.08.22.jpg">
                Wikpedia
              </a>
            </td>
            <td>
              Author: User{' '}
              <a href="https://en.wikipedia.org/wiki/User:Canley">Canley</a> on
              Wikipedia
              <br />
              Modifications: modified
            </td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      #extraction td:nth-child(3),
      #extraction td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
