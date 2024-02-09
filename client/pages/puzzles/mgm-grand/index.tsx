import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/mgm-grand/0.png';
import image1 from 'assets/puzzles/mgm-grand/1.png';
import image2 from 'assets/puzzles/mgm-grand/2.png';
import image3 from 'assets/puzzles/mgm-grand/3.png';
import image4 from 'assets/puzzles/mgm-grand/4.png';
import image5 from 'assets/puzzles/mgm-grand/5.png';
import image6 from 'assets/puzzles/mgm-grand/6.png';
import image7 from 'assets/puzzles/mgm-grand/7.png';

const SLUG = 'mgm-grand';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The MGM Grand discovered this bundle of letters at the base of the
          casino's iconic bronze statue. You have been tasked with investigating
          the contents. Find out if there's a secret message scattered across
          the corners of the globe, and then pass on intel to security about
          what they should investigate!
        </FlavorText>
        <div className={cx(NO_COPY_CLASS)}>
          <InfoIcon>
            Image text is available in copy-to-clipboard. Click on an image to
            view full size.
          </InfoIcon>
          <p>
            <a href={image0}>
              <SheetableImage
                alt="An envelope addressed to Romania"
                src={image0}
                title=""
              />
            </a>
          </p>
          <p>
            <a href={image1}>
              <SheetableImage
                alt="An envelope addressed to the Philippines"
                src={image1}
                title=""
              />
            </a>
          </p>
          <p>
            <a href={image4}>
              <SheetableImage
                alt="An envelope addressed to South Korea"
                src={image2}
                title=""
              />
            </a>
          </p>
          <p>
            <SheetableImage
              alt="An envelope addressed to the United States of America"
              src={image3}
              title=""
            />
          </p>
          <p>
            <a href={image4}>
              <SheetableImage
                alt="An envelope addressed to Argentina"
                src={image4}
                title=""
              />
            </a>
          </p>
          <p>
            <a href={image5}>
              <SheetableImage
                alt="An envelope addressed to Venezuela"
                src={image5}
                title=""
              />
            </a>
          </p>
          <p>
            <a href={image6}>
              <SheetableImage
                alt="An envelope addressed to Australia"
                src={image6}
                title=""
              />
            </a>
          </p>
          <p>
            <a href={image7}>
              <SheetableImage
                alt="An envelope addressed to South Africa"
                src={image7}
                title=""
              />
            </a>
          </p>
        </div>
        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>
                Northern Pkwy &amp; Data CresJohannesburg, 2159, South Africa
              </td>
              <td>Strada General Traian Moșoiu 24Bran 507025, Romania</td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 07 2024)</td>
              <td>10 BANI</td>
              <td>
                <SheetableImage src={image0} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
              <td>
                HXQG+V52 plaza sans luis complexGeneral Luna St, Intramuros,
                Manila1002 Metro Manila, Philippines
              </td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 04 2024)</td>
              <td>9 PESOS</td>
              <td>
                <SheetableImage src={image1} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
              <td>99, Sejong-daeroJung-gu, Seoul, Republic of Korea</td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 10 2024)</td>
              <td>1 WON</td>
              <td>
                <SheetableImage src={image2} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
              <td>
                20 W 34th StreetNew York, NY 10001United States of America
              </td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 08 2024)</td>
              <td>5 CENTS</td>
              <td>
                <SheetableImage src={image3} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>
                Northern Pkwy &amp; Data CresJohannesburg, 2159 South Africa
              </td>
              <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 05 2024)</td>
              <td>16 PESOS</td>
              <td>
                <SheetableImage src={image4} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>
                Northern Pkwy &amp; Data CresJohannesburg, 2159 South Africa
              </td>
              <td>
                32QF+7X3, Lonja PesqueraJuangriego 6309, Nueva Esparta,
                Venezuela
              </td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 09 2024)</td>
              <td>1 BOLIVAR</td>
              <td>
                <SheetableImage src={image5} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>Av. Pres. Figueroa Alcorta 2301C1425 CABA, Argentina</td>
              <td>1 The TerraceFremantle WA 6160, Australia</td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 06 2024)</td>
              <td>13 CENTS</td>
              <td>
                <SheetableImage src={image6} alt="" title="" />
              </td>
            </tr>
            <tr>
              <td>99, Sejong-daeroJung-gu, Seoul, Republic of Korea</td>
              <td>
                Northern Pkwy &amp; Data Cres, Johannesburg, 2159, South Africa
              </td>
              <td>KHARTOUM SUDAN HEAD OFFICE (JAN 11 2024)</td>
              <td>1 RAND</td>
              <td>
                <SheetableImage src={image7} alt="" title="" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
