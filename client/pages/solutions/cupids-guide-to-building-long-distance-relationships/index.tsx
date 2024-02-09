import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/0.png';
import image1 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/1.png';
import image2 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/2.png';
import image3 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/3.png';
import image4 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/4.png';
import image5 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/5.png';
import image6 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/6.png';
import image7 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/7.png';
import image8 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/8.png';
import image9 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/9.png';
import image10 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/10.png';
import image11 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/11.png';
import image12 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/12.png';
import image13 from 'assets/solutions/cupids-guide-to-building-long-distance-relationships/13.png';

const SLUG = 'cupids-guide-to-building-long-distance-relationships';
const ANSWER = `ITEM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      In this puzzle we see photos of an usual assortment of objects, with no
      obvious relationships between them. We also note that each picture is
      associated with a pair of Cupid arrows, with one pointing up or down, and
      the other pointing left or right. Each arrow is associated with a pair of
      decimal numbers that have four decimal places of precision, with their
      placement relative to the arrows suggesting starting points and end
      points. However, some of the digits from the starting points are missing,
      suggesting we need to find them. These decimal numbers may serve as a
      break-in point for considering that we need to find a real-world location
      associated with each object that we will be able to offset from.
    </p>
    <p>
      Alternately, if we focus our attention on the photos, we might further
      examine those which contain the most text. Of the five images with text,
      the two which have the most are the bookshelf, and the "HOOD'S" glass
      bottle. Boston natives may be reminded of the giant Hood Milk Bottle near
      the children's museum, but if we are not a Boston native, we may learn
      about this landmark while searching for more information about Hood's
      brand milk. Additionally, searching for several titles from the bookshelf
      in conjunction may lead us to information about the Kansas City Community
      Bookshelf. Having discovered one or both of these giant{' '}
      <a href="https://en.wikipedia.org/wiki/Novelty_architecture">
        novelty architecture
      </a>{' '}
      buildings, we can continue our search for giant buildings shaped like the
      other objects, matching each photo to a giant, real-world counterpart
      building. As a check on having identified the right building, the
      buildings are listed in order from east to west.
    </p>
    <p>
      Next we find the latitude and longitude where the cupid arrows would
      intersect on each of the real-world versions of the novelty building. To
      assist with defining a precise location, the 3rd and 4th decimal places of
      these numbers are listed. We then offset these values by the decimal
      numbers shown, moving north, south, east, or west, based on the position
      of the number above, below, to the right, or to the left, respectively.
      After performing each offset, we end up at a new building, which also has
      an unusual appearance. When viewing each building from one or more
      directions, it can be interpreted as a letter.
    </p>
    <p>
      At the bottom of the puzzle is a set of 17 blanks, with 13 unhighlighted,
      and 4 highlighted. Since there are 13 pictures in the puzzle, this hints
      that each picture will correspond to one of the first 13 blanks, and we
      will need to produce the last 4. The buildings can be interpreted as
      letters in the following manner:
    </p>
    <Table className="text-center">
      <tbody>
        <tr>
          <td>
            <Monospace>L</Monospace>
            <SheetableImage
              alt="Tour de Lille, a large glass building resembling an L"
              src={image0}
              title=""
            />
          </td>
          <td>
            <Monospace>O</Monospace>
            <SheetableImage
              alt="Museum of the Future, a metal toroidal structure with Arabic symbols on it, which resembles an O"
              src={image1}
              title=""
            />
          </td>
          <td>
            <Monospace>V</Monospace>
            <SheetableImage
              alt="V Tower, a skyscraper which consists of two towers leaning away from one another, resembling a V"
              src={image2}
              title=""
            />
          </td>
          <td>
            <Monospace>E</Monospace>
            <SheetableImage
              alt="nhow Amsterdam RAI hotel, a building consisting of three triangular sections stacked on top of one another.  From the side the building somewhat resembles an E"
              src={image3}
              title=""
            />
          </td>
          <td>
            <Monospace>R</Monospace>
            <SheetableImage
              alt={`Seoul City Hall, A glass building with a glass window "bubble" that which resembles an R`}
              src={image4}
              title=""
            />
          </td>
          <td>
            <Monospace>S</Monospace>
            <SheetableImage
              alt="The Mega Tower, a glass skyscraper which has gentle curves resembles an S"
              src={image5}
              title=""
            />
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>M</Monospace>
            <SheetableImage
              alt={`The Elephant Building, composed of three vertical towers and a fourth "tower" laid across the top of all three. The building has "eyes" and "tusks", and resembles an M`}
              src={image6}
              title=""
              height="85"
            />
          </td>
          <td>
            <Monospace>A</Monospace>
            <SheetableImage
              alt="The Eiffel Tower, which resembles an A"
              src={image7}
              title=""
            />
          </td>
          <td>
            <Monospace>Y</Monospace>
            <SheetableImage
              alt="Roihuvuori water tower, a yellowish Y-shaped structure"
              src={image8}
              title=""
            />
          </td>
          <td></td>
          <td>
            <Monospace>B</Monospace>
            <SheetableImage
              alt="Aachen Bismarck Tower, A stone tower with a crown on top built in the shape of the letter B"
              src={image9}
              title=""
            />
          </td>
          <td>
            <Monospace>E</Monospace>
            <SheetableImage
              alt="Alto El Golf, a glass office building with three rectangular sections that protrude, causing the building to somewhat resemble an E"
              src={image10}
              title=""
            />
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
            <SheetableImage
              alt="Aomori Prefecture Center, a triangular structure which has a smaller triangle at the top of a different color, somwhat resembling an A"
              src={image11}
              title=""
            />
          </td>
          <td>
            <Monospace>N</Monospace>
            <SheetableImage
              alt="55 Shuman Boulevard, a cubical office-building, in which the profile of each side has a v-shaped notch causing each side to resemble an N"
              src={image12}
              title=""
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taken together, the buildings spell the phrase{' '}
      <Monospace>LOVERS MAY "BE AN </Monospace>
      <Monospace>____</Monospace>
      <Monospace>"</Monospace>, to which the answer is{' '}
      <b>
        <Monospace>ITEM</Monospace>
      </b>
      .
    </p>
    <Appendix>
      <p>
        The links in this table show each building on Google Maps Streetview.
      </p>
      <Table id="extraction">
        <thead>
          <tr>
            <th>Novelty Architecture</th>
            <th>Latitude and Longitude</th>
            <th>Offset</th>
            <th>Letter-shaped Building</th>
            <th>Latitude and Longitude</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@-35.1985,138.548412,3a,40.8y,46.43h,105.25t/data=!3m8!1e1!3m6!1sAF1QipPZ21rj6YtvX4tGV34vXEv2WYCkuTXtE8b9oeg5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPZ21rj6YtvX4tGV34vXEv2WYCkuTXtE8b9oeg5%3Dw203-h100-k-no-pi-0-ya13.388462-ro-0-fo100!7i7680!8i3840?entry=ttu">
                The d'Arenberg Cube
              </a>
              <br />
              McLaren Vale, Australia
            </td>
            <td>
              <Monospace>-35.1966, 138.5514</Monospace>
            </td>
            <td>
              <Monospace>85.8354, -135.4753</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@50.6399186,3.0729029,3a,56.5y,350.81h,88.58t/data=!3m8!1e1!3m6!1sAF1QipO7DkepK4-TM9rPXrraiDc6EYVyL0pNo3yr1PQW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO7DkepK4-TM9rPXrraiDc6EYVyL0pNo3yr1PQW%3Dw203-h100-k-no-pi0-ya86.9363-ro0-fo100!7i8192!8i4096?entry=ttu">
                Tour de Lille
              </a>
              <br />
              Lille, France
            </td>
            <td>
              <Monospace>50.6388, 3.0761</Monospace>
            </td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@37.53649,127.621743,3a,75y,249.17h,108.24t/data=!3m8!1e1!3m6!1sAF1QipO7DoatU-CXRn5aCt24VFyeTZs7qG59Oq8ZC8x4!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO7DoatU-CXRn5aCt24VFyeTZs7qG59Oq8ZC8x4%3Dw203-h100-k-no-pi-0-ya264.83002-ro0-fo100!7i8704!8i4352?entry=ttu">
                Dreamy Camera Cafe
              </a>
              <br />
              Yangpyeong, South Korea
            </td>
            <td>
              <Monospace>37.5367, 127.6214</Monospace>
            </td>
            <td>
              <Monospace>-12.3177, -72.3397</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@25.2185434,55.2825832,3a,75y,303.45h,108.53t/data=!3m8!1e1!3m6!1sAF1QipPCybCgZw44NFGFppxxEEQAS0xX4C-O-hbRezNN!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPCybCgZw44NFGFppxxEEQAS0xX4C-O-hbRezNN%3Dw203-h100-k-no-pi-0-ya173.25444-ro0-fo100!7i8704!8i4352?entry=ttu">
                Museum of the Future
              </a>
              <br />
              Dubai, UAE
            </td>
            <td>
              <Monospace>25.2190, 55.2817</Monospace>
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@37.5191431,127.0231986,3a,90y,225.06h,105.89t/data=!3m6!1e1!3m4!1si5ZjKUmt4j5z7Hrcf-OrVQ!2e0!7i13312!8i6656?entry=ttu">
                Simone Handbag Museum
              </a>
              <br />
              Seoul, South Korea
            </td>
            <td>
              <Monospace>37.5190, 127.0230</Monospace>
            </td>
            <td>
              <Monospace>12.5301, -112.5870</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@50.0503228,14.4349469,3a,75y,147.44h,102.82t/data=!3m8!1e1!3m6!1sAF1QipMkEF0SqpRrIovOPqZ4Wja80dX0F2rET0HPw2Ib!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMkEF0SqpRrIovOPqZ4Wja80dX0F2rET0HPw2Ib%3Dw203-h100-k-no-pi0-ya1.6863849-ro-0-fo100!7i8500!8i4250?entry=ttu">
                V Tower
              </a>
              <br />
              Prague, Czech Republic
            </td>
            <td>
              <Monospace>50.0491, 14.4360</Monospace>
            </td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@23.3777943,120.1483765,3a,38.1y,93.5h,101.98t/data=!3m8!1e1!3m6!1sAF1QipPKNRsjpAG2GzKSq82gq_oEi2ZiXvglpg7dptjE!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPKNRsjpAG2GzKSq82gq_oEi2ZiXvglpg7dptjE%3Dw203-h100-k-no-pi0-ya15.354008-ro-0-fo100!7i10240!8i5120?entry=ttu">
                High-Heeled Shoes Church
              </a>
              <br />
              Budai Township, Taiwan
            </td>
            <td>
              <Monospace>23.3778, 120.1488</Monospace>
            </td>
            <td>
              <Monospace>28.9606, -115.2579</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@52.3377724,4.8870379,3a,66.5y,73.63h,91.12t/data=!3m6!1e1!3m4!1srU0YeorKA-nHfPSbT0wLOw!2e0!7i16384!8i8192?entry=ttu">
                nhow Amsterdam RAI hotel
              </a>
              <br />
              Amsterdam, Netherlands
            </td>
            <td>
              <Monospace>52.3384, 4.8909</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@25.2360561,55.3004481,3a,90y,202.1h,130.91t/data=!3m8!1e1!3m6!1sAF1QipMoQVTjU8KFVI-4gWEIL_27XSy0YcmyTxCFe8Jx!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMoQVTjU8KFVI-4gWEIL_27XSy0YcmyTxCFe8Jx%3Dw203-h100-k-no-pi-0-ya203.014-ro-0-fo100!7i8704!8i4352?entry=ttu">
                Dubai Frame
              </a>
              <br />
              Dubai, UAE
            </td>
            <td>
              <Monospace>25.2355, 55.3004</Monospace>
            </td>
            <td>
              <Monospace>12.3312, 71.6773</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@37.5668883,126.9770429,3a,75y,104.17h,95.73t/data=!3m6!1e1!3m4!1slp3toVZ1b_n_kFABwLHuwA!2e0!7i13312!8i6656?entry=ttu">
                Seoul City Hall
              </a>
              <br />
              Seoul, South Korea
            </td>
            <td>
              <Monospace>37.5667, 126.9777</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@40.360211,49.8346898,3a,83y,21.2h,114.54t/data=!3m8!1e1!3m6!1sAF1QipMYc9AJKlBi9JWd_8VlyqEOz8_fKhi7OUGcqyY!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMYc9AJKlBi9JWd_8VlyqEOz8_fKhi7OUGcqyY%3Dw203-h100-k-no-pi0-ya302.85242-ro-0-fo100!7i9216!8i4190?entry=ttu">
                Azerbaijan Carpet Museum
              </a>
              <br />
              Baku, Azerbaijan
            </td>
            <td>
              <Monospace>40.3598, 49.8356</Monospace>
            </td>
            <td>
              <Monospace>-25.7768, 71.2199</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@14.5843935,121.0558166,3a,75y,191.55h,121.29t/data=!3m7!1e1!3m5!1sS2giVu5rfWG01mFOZBZS2Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DS2giVu5rfWG01mFOZBZS2Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D167.49179%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">
                The Mega Tower
              </a>
              <br />
              Manila, Philippines
            </td>
            <td>
              <Monospace>14.5830, 121.0555</Monospace>
            </td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@42.352011,-71.0504282,3a,47.3y,161.43h,107.59t/data=!3m8!1e1!3m6!1sAF1QipPDfNS57iCkDxS3qSFxAcRO70kWAmTk_P-IRS2d!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPDfNS57iCkDxS3qSFxAcRO70kWAmTk_P-IRS2d%3Dw203-h100-k-no-pi-0-ya183.7107-ro-0-fo100!7i4608!8i2304?entry=ttu">
                Hood Milk Bottle
              </a>
              <br />
              Boston, MA, US
            </td>
            <td>
              <Monospace>42.3517, -71.0502</Monospace>
            </td>
            <td>
              <Monospace>-28.5263, 171.6186</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@13.823976,100.5692288,3a,75y,335.94h,106.13t/data=!3m6!1e1!3m4!1shTxi-D2j8GMhVbVvvUqvAA!2e0!7i16384!8i8192?entry=ttu">
                Elephant Building
              </a>
              <br />
              Bangkok, Thailand
            </td>
            <td>
              <Monospace>13.8254, 100.5684</Monospace>
            </td>
            <td>
              <Monospace>M</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@26.0521013,-80.2087667,3a,90y,322.13h,88.72t/data=!3m8!1e1!3m6!1sAF1QipMF_ZZ7dCIPtx_QEG06hRjOwAyzTtPA2cPtZ4fm!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMF_ZZ7dCIPtx_QEG06hRjOwAyzTtPA2cPtZ4fm%3Dw203-h100-k-no-pi0-ya74.25338-ro0-fo100!7i8192!8i4096?entry=ttu">
                Hard Rock Hotel
              </a>
              <br />
              Hollywood, FL, US
            </td>
            <td>
              <Monospace>26.0524, -80.2097</Monospace>
            </td>
            <td>
              <Monospace>22.8058, 82.5043</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@48.8563735,2.2973944,3a,75y,317.58h,111.91t/data=!3m8!1e1!3m6!1sAF1QipNEvT0Di45sr_SFDFR1Y_mHWnpiYIZMiiEHzCB5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEvT0Di45sr_SFDFR1Y_mHWnpiYIZMiiEHzCB5%3Dw203-h100-k-no-pi-0-ya40.818333-ro-0-fo100!7i8704!8i4352?entry=ttu">
                Eiffel Tower
              </a>
              <br />
              Paris, France
            </td>
            <td>
              <Monospace>48.8583, 2.2946</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@40.0630107,-82.346405,3a,90y,3.6h,112.03t/data=!3m8!1e1!3m6!1sAF1QipPhsCSBR4t8JDXE5kNeogrzQ6si58jGZBzovV2K!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPhsCSBR4t8JDXE5kNeogrzQ6si58jGZBzovV2K%3Dw203-h100-k-no-pi-0-ya88.16641-ro-0-fo100!7i11264!8i5632?entry=ttu">
                Longaberger Co. Former HQ
              </a>
              <br />
              Newark, OH, US
            </td>
            <td>
              <Monospace>40.0638, -82.3468</Monospace>
            </td>
            <td>
              <Monospace>20.1337, 107.3962</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@60.1953664,25.0472021,3a,36.6y,27.76h,100.13t/data=!3m9!1e1!3m7!1sQbtl1gmZd2z306c6SbYcSw!2e0!7i16384!8i8192!9m2!1b1!2i19?entry=ttu">
                Roihuvuori Water Tower
              </a>
              <br />
              Helsinki, Finland
            </td>
            <td>
              <Monospace>60.1976, 25.0494</Monospace>
            </td>
            <td>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@39.1021681,-94.5849056,3a,52.9y,48.74h,108.69t/data=!3m8!1e1!3m6!1sAF1QipO055bq1QfBdTdbioPYp7ZvVmG3wRVA-_oT6SIK!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO055bq1QfBdTdbioPYp7ZvVmG3wRVA-_oT6SIK%3Dw203-h100-k-no-pi0-ya332.86667-ro-0-fo100!7i8704!8i4352?entry=ttu">
                Community Bookshelf
              </a>
              <br />
              Kansas City, MO, US
            </td>
            <td>
              <Monospace>39.1024, -94.5848</Monospace>
            </td>
            <td>
              <Monospace>11.6443, 100.6912</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@50.7465665,6.1063382,3a,90y,130.66h,126.24t/data=!3m8!1e1!3m6!1sAF1QipN8SdCPPIItw74nBOmVBdyewim_cRMM9oyhrumA!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN8SdCPPIItw74nBOmVBdyewim_cRMM9oyhrumA%3Dw203-h100-k-no-pi0-ya327.0731-ro-0-fo100!7i8704!8i4352?entry=ttu">
                Aachen Bismarck Tower
              </a>
              <br />
              Aachen, Germany
            </td>
            <td>
              <Monospace>50.7467, 6.1064</Monospace>
            </td>
            <td>
              <Monospace>B</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@29.7817748,-95.9013261,3a,15y,240.2h,88.68t/data=!3m6!1e1!3m4!1sllLYnYM48jqotP-pKsEP_w!2e0!7i16384!8i8192?entry=ttu">
                Igloo Cooler Security Hut
              </a>
              <br />
              Katy, TX, US
            </td>
            <td>
              <Monospace>29.7813, -95.9023</Monospace>
            </td>
            <td>
              <Monospace>-63.1914, 25.3005</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@-33.4092053,-70.6019696,3a,64.2y,167.14h,105.35t/data=!3m6!1e1!3m4!1sglRdSpZc9GtpW7gAwvuw7Q!2e0!7i16384!8i8192?entry=ttu">
                Alto el Golf
              </a>
              <br />
              Las Condes, Chile
            </td>
            <td>
              <Monospace>-33.4101, -70.6018</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@19.4777242,-99.2790624,3a,90y,157.09h,93.37t/data=!3m7!1e1!3m5!1sAF1QipP1RT0htBAIEks5CE_T6geXE64MjbVnP9_R0Us9!2e10!3e12!7i10240!8i5120?entry=ttu">
                Nautilus Shell
              </a>
              <br />
              Naucalpan de Juárez, Mexico
            </td>
            <td>
              <Monospace>19.4775, -99.2791</Monospace>
            </td>
            <td>
              <Monospace>21.3524, 240.0202</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@40.8305429,140.7412805,3a,90y,199.41h,101.9t/data=!3m8!1e1!3m6!1sAF1QipME-_DEJgoD0D5UU3_1hCJOMX8B1lxTDt_lMMGP!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipME-_DEJgoD0D5UU3_1hCJOMX8B1lxTDt_lMMGP%3Dw203-h100-k-no-pi-0-ya350.2535-ro-0-fo100!7i14000!8i7000?entry=ttu">
                Aomori Prefecture Center
              </a>
              <br />
              Aomori, Japan
            </td>
            <td>
              <Monospace>40.8299, 140.7411</Monospace>
            </td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.google.com/maps/@33.9952694,-118.4769946,3a,75y,38.37h,100.64t/data=!3m7!1e1!3m5!1sTgAf07p94G7rt8nYWyovzA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DTgAf07p94G7rt8nYWyovzA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D55.33884%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">
                Giant Binoculars
              </a>
              <br />
              Venice, CA, US
            </td>
            <td>
              <Monospace>33.9954, -118.4769</Monospace>
            </td>
            <td>
              <Monospace>7.8097, 30.3327</Monospace>
            </td>
            <td>
              <a href="https://www.google.com/maps/@41.8047254,-88.143681,3a,75y,311.28h,105.82t/data=!3m7!1e1!3m5!1sNPXD8bLU68kG-0iSO_neFA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DNPXD8bLU68kG-0iSO_neFA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D18.734451%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">
                55 Shuman Boulevard
              </a>
              <br />
              Naperville, IL, US
            </td>
            <td>
              <Monospace>41.8051, -88.1442</Monospace>
            </td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <AuthorsNotes>
      <p>
        I conceived of the kernel of this puzzle when my parents came to visit
        and my mom brought food in a Longaberger basket. Having lived most of my
        life in Ohio, I was already familiar with the former Longaberger
        headquarter building. I thought the relationship between the real-world
        object and novelty architecture based on it could make a good basis for
        a puzzle. Since the puzzle was already using building shapes, having
        building shapes be the basis for the extraction seemed a natural choice.
        I knew{' '}
        <a href="https://www.dailymail.co.uk/news/article-2812814/Avenue-Z-Designer-scours-Google-Maps-satellite-images-New-York-buildings-spell-alphabet.html">
          building footprints
        </a>{' '}
        could have been an option to allow extracting any letter, but I was
        excited to see if there were enough options to write the puzzle when
        viewing buildings from the side instead.
      </p>
      <p>
        There are four buildings in the Columbus skyline for which I've often
        thought that if they were mirrored, and you squinted, they would look a
        little like they spell out the top of "OHIO". This may have been in the
        back of my mind somewhere when coming up with the puzzle's extraction.
      </p>
      <p>
        <SheetableImage
          alt={`A flipped image of the Columbus skyline in which four skyscrapers roughly resemble the word "OHIO".`}
          src={image13}
          title=""
        />
      </p>
    </AuthorsNotes>
    <Attributions>
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
            <td>Rubik's Revenge</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original work</td>
            <td>Author: Jim Hays</td>
          </tr>
          <tr>
            <td>Rollei camera</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Rollei#/media/File:Rolleiflex_camera.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:Juhanson">
                Juhanson
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>White handbag</td>
            <td>Fair Use</td>
            <td>
              <a href="https://us.shein.com/Women-Satchels-p-15169250-cat-2155.html">
                Shein product image
              </a>
            </td>
            <td>
              Author: <a href="https://us.shein.com/">Shein</a>
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Glass high heel</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/40083085@N02/16936171941/">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/people/40083085@N02">
                TSTS Sheng on Flickr
              </a>{' '}
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Gold picture frame</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://www.rawpixel.com/image/9087698/cassetta-frame">
                Rawpixel
              </a>
            </td>
            <td>
              Source: <a href="https://www.rawpixel.com/">Rawpixel</a>{' '}
              Modifications: none
            </td>
          </tr>
          <tr>
            <td>Rolled carpet</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original work</td>
            <td>Author: Jim Hays</td>
          </tr>
          <tr>
            <td>Glass Hood milk bottle</td>
            <td>Fair Use</td>
            <td>
              <a href="https://i.ebayimg.com/images/g/g~cAAOSw5PpkDj82/s-l1600.jpg">
                eBay product image
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.ebay.ca/str/forgottoncarolinatreasures">
                forgottoncarolinatreasures
              </a>{' '}
              on Ebay
              <br />
              Modifications: added to a collage
            </td>
          </tr>
          <tr>
            <td>Guitar</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/larry-ziffle/7543589392/">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://flickr.com/photos/larry-ziffle/">Larry Ziffle</a>{' '}
              on Flickr
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>Longaberger medium market basket</td>
            <td>Fair Use</td>
            <td>
              <a href="https://www.ebay.com/itm/285142071496">
                eBay product image
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.ebay.com/str/mollymarysimon">
                mollymarysimon
              </a>{' '}
              on eBay
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Bookshelf</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original work</td>
            <td>Author: Jim Hays</td>
          </tr>
          <tr>
            <td>Playmate Igloo cooler</td>
            <td>Fair Use</td>
            <td>
              <a href="https://static.grainger.com/rp/s/is/image/Grainger/1HUG6_AS01">
                Grainger product photo
              </a>
            </td>
            <td>
              Author: <a href="https://www.grainger.com/">Grainger</a>
              <br />
              Modifications: none
            </td>
          </tr>
          <tr>
            <td>Idaho potato</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/30478819@N08/48844841452">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/people/30478819@N08/">
                Marco Verch Professional Photographer
              </a>
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Binoculars</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">
                CC BY-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/51764518@N02/37806713606/">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/photos/51764518@N02/">
                Joe Haupt
              </a>
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Tour de Lille</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">
                CC BY-NC-SA 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/harry_nl/51424129373">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/photos/harry_nl/">harry_nl</a> on
              Flickr
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Museum of the Future</td>
            <td>
              <a href="https://www.pexels.com/license/">Pexels License</a>
            </td>
            <td>
              <a href="https://www.pexels.com/photo/the-museum-of-the-future-in-dubai-7199828/">
                Pexels
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.pexels.com/@jdgromov/">Denys Gromov</a> on
              Pexels
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>V Tower</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Pankr%C3%A1c_V_Tower_pano.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:VitVit">
                VitVit
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>nhow Amsterdam RAI hotel</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://nl.wikipedia.org/wiki/Nhow_Amsterdam_RAI#/media/Bestand:Nhow_Amsterdam_RAI.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:DFK2021">
                DFK2021
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Seoul City Hall</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-nc/2.0/">
                CC BY-NC 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/46990836@N03/8320678956">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/photos/46990836@N03/">
                longzijun
              </a>{' '}
              on Flickr
              <br />
              Modifications: modified
            </td>
          </tr>
          <tr>
            <td>The Mega Tower</td>
            <td>Fair Use</td>
            <td>
              <a href="https://www.google.com/maps/@14.5843935,121.0558166,3a,75y,191.55h,121.29t/data=!3m7!1e1!3m5!1sS2giVu5rfWG01mFOZBZS2Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DS2giVu5rfWG01mFOZBZS2Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D167.49179%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">
                Google Streetview
              </a>
            </td>
            <td>
              Author: <a href="https://www.google.com/">Google</a>
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Elephant Building</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-nc/2.0/">
                CC BY-NC 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/eltpics/24389778559">
                Flickr
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://www.flickr.com/photos/eltpics/">eltpics</a> on
              Flickr
            </td>
          </tr>
          <tr>
            <td>Eiffel Tower</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Eiffel_tower_from_trocadero.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:NonOmnisMoriar">
                NonOmnisMoriar
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Roihuvuori water tower</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">
                CC BY-SA 3.0
              </a>
            </td>
            <td>
              <a href="https://en.m.wikipedia.org/wiki/File:Roihuvuori_water_tower_-_Helsinki_Finland.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://fi.wikipedia.org/wiki/K%C3%A4ytt%C3%A4j%C3%A4:O-VMikkel%C3%A4">
                Käyttäjä:O-VMikkelä
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Aachen Bismarck Tower</td>
            <td>Public Domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Bismarckturm_Aachen.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author: Photographer unknown
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Alto el Golf</td>
            <td>Fair Use</td>
            <td>
              <a href="https://www.google.com/maps/@-33.4092053,-70.6019696,3a,64.2y,167.14h,105.35t/data=!3m6!1e1!3m4!1sglRdSpZc9GtpW7gAwvuw7Q!2e0!7i16384!8i8192?entry=ttu">
                Google Streetview
              </a>
            </td>
            <td>
              Author: <a href="https://www.google.com/">Google</a>
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>Aomori Prefecture Center</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                CC BY-SA 4.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Aomori_Tourist_Information_Center_seen_from_the_ASPAM_Street_20200621-cropped.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              Author:{' '}
              <a href="https://commons.wikimedia.org/wiki/User:%E6%8E%AC%E8%8C%B6">
                掬茶
              </a>{' '}
              on Wikimedia
              <br />
              Modifications: cropped
            </td>
          </tr>
          <tr>
            <td>55 Shuman Boulevard</td>
            <td>Fair Use</td>
            <td>
              <a href="https://www.loopnet.com/Listing/55-Shuman-Blvd-Naperville-IL/4084473/?slsrpurl=https%3a%2f%2fwww.loopnet.com%2fsearch%2fcommercial-real-estate%2fnaperville-il-60563%2ffor-lease%2f%3fsk%3d9e108b48ec183d8bdf0c77233661b241%26rldp%3d1%26e%3dv">
                Loopnet
              </a>
            </td>
            <td>
              Source: <a href="https://www.loopnet.com/">Loopnet</a>
              <br />
              Modifications: video screen capture
            </td>
          </tr>
          <tr>
            <td>Columbus Skyline</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original work</td>
            <td>Author: Jim Hays</td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      #extraction td:nth-child(2),
      #extraction td:nth-child(3),
      #extraction td:nth-child(5),
      #extraction td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
