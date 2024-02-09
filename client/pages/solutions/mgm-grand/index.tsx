import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/mgm-grand/0.png';
import image1 from 'assets/solutions/mgm-grand/1.png';
import image2 from 'assets/solutions/mgm-grand/2.png';
import image3 from 'assets/solutions/mgm-grand/3.png';
import image4 from 'assets/solutions/mgm-grand/4.png';
import image5 from 'assets/solutions/mgm-grand/5.png';
import image6 from 'assets/solutions/mgm-grand/6.png';
import image7 from 'assets/solutions/mgm-grand/7.png';
import image8 from 'assets/solutions/mgm-grand/8.png';

const SLUG = 'mgm-grand';
const ANSWER = `MANDIBLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle presents a series of eight envelopes. Each of the eight
      locations featured in the recipient line on the envelopes corresponds to a
      prominent landmark in the area, listed in alphabetical order.
    </p>
    <p>
      We notice that the destination address is the focus of this puzzle since
      the stamp price is always listed in the destination country's currency,
      the stamp silhouette is a rough approximation of the landmark in question,
      and the landmarks are listed in alphabetical order by destination.
    </p>
    <Table id="locations">
      <thead>
        <tr>
          <th>Address</th>
          <th>Destination/Landmark</th>
          <th>Stamp Price</th>
          <th>Indexed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Strada General Traian Moșoiu 24, Bran 507025, Romania</td>
          <td>
            <Monospace>BRAN CASTLE</Monospace>
          </td>
          <td>10 bani (Romanian currency)</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            HXQG+V52 plaza sans luis complex, General Luna St, Intramuros,
            Manila, 1002 Metro Manila, Philippines
          </td>
          <td>
            <Monospace>CASA MANILA</Monospace>
          </td>
          <td>9 pesos (Filipino currency)</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>99, Sejong-daero, Jung-gu, Seoul, Republic of Korea</td>
          <td>
            <Monospace>DEOKSUGUNG PALACE</Monospace>
          </td>
          <td>1 won (S. Korean currency)</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>20 W 34th St., New York, NY 10001</td>
          <td>
            <Monospace>EMPIRE STATE BUILDING</Monospace>
          </td>
          <td>5 cents (US currency)</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
          <td>
            <Monospace>FLORALIS GENERICA</Monospace>
          </td>
          <td>16 pesos (Argentinian currency)</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            32QF+7X3, Lonja Pesquera, Juangriego 6309, Nueva Esparta, Venezuela
          </td>
          <td>
            <Monospace>FORTIN DE LA GALERA</Monospace>
          </td>
          <td>1 bolivar (Venezuelan currency)</td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>1 The Terrace, Fremantle WA 6160, Australia</td>
          <td>
            <Monospace>FREMANTLE PRISON</Monospace>
          </td>
          <td>13 cents (Australian currency)</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Northern Pkwy &amp; Data Cres, Johannesburg, 2159, South Africa
          </td>
          <td>
            <Monospace>GOLD REEF CITY THEME PARK</Monospace>
          </td>
          <td>1 rand (South African currency)</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      While this in itself is nonsense, mapping those letters onto the globe
      spells out a clue for the next step of the puzzle that also thematically
      confirms that there is an issue here: <Monospace>RED FLAGS</Monospace>.
    </p>
    <p>
      <SheetableImage
        alt="World map with eight locations circled in red with an orange circle in the middle. Letters next to the red circles spell out Red Flags"
        src={image0}
        title=""
      />
    </p>
    <p>
      After we submit <Monospace>RED FLAGS</Monospace> as an answer, we receive
      the encouraging message:
    </p>
    <p>
      <i>
        Great work - you've confirmed there were some red flags in these
        messages! Now, all that's left is to figure out what these letters are
        signaling.
      </i>
    </p>
    <p>
      The flavor text stresses that security <i>flagged</i> these as suspicious
      envelopes, and the text response to <Monospace>RED FLAGS</Monospace>{' '}
      reasserts that focus, while also stressing <i>signaling</i> : these
      provide nudges to treat the transit routes of the letters as semaphore,
      using the "<b>head</b>" office in Khartoum, Sudan (conveniently located in
      the middle of the eight previously identified locations) as the central
      node for the flag code.
    </p>
    <p>
      Because these envelopes were discovered at the base of the MGM Grand's
      giant bronze lion statue and we're asked to pass on a message of what the
      security team should investigate, we suspect the answer might be
      associated with a part of a lion. Sorting the letters by the postmark
      dates (with letters going out daily until the day before the MIT Mystery
      Hunt launches) spells the final answer{' '}
      <b>
        <Monospace>MANDIBLE.</Monospace>
      </b>
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Date</th>
          <th>Letter Path</th>
          <th>Semaphore</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jan 4 2024</td>
          <td>Buenos Aires / Khartoum / Manila</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "M" with flags at 3 and 7, on a clock face'
              src={image1}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 5 2024</td>
          <td>Johannesburg / Khartoum / Buenos Aires</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "A" with flags at 6 and 7, on a clock face'
              src={image2}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 6 2024</td>
          <td>Buenos Aires / Khartoum / Perth</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "N" with flags at 5 and 7, on a clock face'
              src={image3}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 7 2024</td>
          <td>Johannesburg / Khartoum / Bucharest</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "D" with flags at 6 and 12, on a clock face'
              src={image4}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 8 2024</td>
          <td>Buenos Aires / Khartoum / New York City</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "I" with flags at 7 and 11, on a clock face'
              src={image5}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 9 2024</td>
          <td>Johannesburg / Khartoum / Nueva Esparta</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "B" with flags at 6 and 9, on a clock face'
              src={image6}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 10 2024</td>
          <td>Buenos Aires / Khartoum / Seoul</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "L" with flags at 1 and 7, on a clock face'
              src={image7}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jan 11 2024</td>
          <td>Seoul / Khartoum / Johannesburg</td>
          <td>
            <SheetableImage
              alt='Semaphore flag for "E" with flags at 1 and 6, on a clock face'
              src={image8}
              title=""
              className="mx-auto"
            />
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>

    <Attributions>
      <p>
        Semaphore images from this solution document are sourced from{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Semaphore_Signals_A-Z.jpg">
          an image by Denelson83
        </a>
        , under a Creative Commons Attribution-Share Alike 3.0 Unported license
        (
        <a href="https://creativecommons.org/licenses/by/3.0/">
          CC BY-SA 3.0
        </a>
        ).
      </p>
    </Attributions>
    <style jsx global>{`
      #locations td:nth-child(4),
      #extraction td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
