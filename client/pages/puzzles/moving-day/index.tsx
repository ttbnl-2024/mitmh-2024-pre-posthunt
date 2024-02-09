import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/moving-day/0.png';
import image1 from 'assets/puzzles/moving-day/1.png';
import image2 from 'assets/puzzles/moving-day/2.png';
import image3 from 'assets/puzzles/moving-day/3.png';
import image4 from 'assets/puzzles/moving-day/4.png';

const SLUG = 'moving-day';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Moving from one city to another can make a big difference, especially
          when you know you'll be missed by millions at the gates.
        </FlavorText>

        <InfoIcon className={NO_COPY_CLASS}>
          Hover over each place and each set of question marks for color
          information.
        </InfoIcon>
        <p className={HIDDEN_CLASS}>See puzzle page for colors.</p>
        <ul className="pl-4 sm:pl-10">
          <li className="my-2">
            <span
              className="p-1 bg-[#61abfa] text-[#800000]"
              title="background color of this section is hex #61abfa and the font color is hex #800000"
            >
              Grand Rapids, Michigan
            </span>{' '}
            ↘{' '}
            <span
              className="p-1 bg-[#00385d] text-[#e50022]"
              title="background color of this section is hex #00385d and the font color is hex #e50022"
            >
              ???
            </span>
          </li>
          <li className="my-2">
            <span
              className="p-1 bg-[#007a33] text-[#c69214]"
              title="background color of this section is hex #007a33 and the font color is hex #c69214"
            >
              Minnesota
            </span>{' '}
            ↓{' '}
            <span
              className="p-1 bg-[#8f8f8c] text-[#006847]"
              title="background color of this section is hex #8f8f8c and the font color is hex #006847"
            >
              ???
            </span>
          </li>
          <li className="my-2">
            <span
              className="p-1 bg-[#002a60] text-[#cd1041]"
              title="background color of this section is hex #002a60 and the font color is hex #cd1041"
            >
              New Jersey
            </span>{' '}
            →{' '}
            <span
              className="p-1 bg-[#000000] text-[#ffffff]"
              title="background color of this section is hex #000000 and the font color is hex #ffffff"
            >
              ???
            </span>
          </li>
          <li className="my-2">
            <span
              className="p-1 bg-[#800080] text-[#FFFF00]"
              title="background color of this section is hex #800080 and the font color is hex #FFFF00"
            >
              New Orleans, Louisiana
            </span>{' '}
            ↖{' '}
            <span
              className="p-1 bg-[#002b5c] text-[#f9a01b]"
              title="background color of this section is hex #002b5c and the font color is hex #f9a01b"
            >
              ???
            </span>
          </li>
          <li className="my-2">
            <span
              className="p-1 bg-[#008000] text-[#FFFF00]"
              title="background color of this section is hex #008000 and the font color is hex #FFFF00"
            >
              San Diego, California
            </span>{' '}
            →{' '}
            <span
              className="p-1 bg-[#000000] text-[#ce1141]"
              title="background color of this section is hex #000000 and the font color is hex #ce1141"
            >
              ???
            </span>
          </li>
        </ul>

        <hr className="my-4" />

        <div className="space-y-2">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1688649062903!6m8!1m7!1sFoZL62xypTYTz1434uSWsw!2m2!1d30.52326463407767!2d-96.69597490323959!3f287.97!4f-4.230000000000004!5f0.7820865974627469"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={cx(NO_COPY_CLASS, 'w-full', 'h-full')}
            ></iframe>
            <div className={HIDDEN_CLASS}>
              <Link href="https://goo.gl/maps/EnBh8BeKygyswgc7A">
                View in Google Maps
              </Link>
            </div>
          </div>
          <div>
            {' '}
            <div className="w-full md:w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1688649265895!6m8!1m7!1sx1Z1wWQGpFWWMZFKH845BA!2m2!1d38.51340984475833!2d-82.71879574598456!3f30.59!4f3.3700000000000045!5f0.7820865974627469"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={cx(NO_COPY_CLASS, 'w-full', 'h-full')}
              ></iframe>
              <div className={HIDDEN_CLASS}>
                <Link href="https://goo.gl/maps/Qy7acXWqqrLrJBmf9">
                  View in Google Maps
                </Link>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1689781052478!6m8!1m7!1sUHG_B_CXZTSuG0pJDLPffQ!2m2!1d37.40514158752809!2d-79.14456185243714!3f335.74510065380355!4f-21.723217453978464!5f0.7820865974627469"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={cx(NO_COPY_CLASS, 'w-full', 'h-full')}
              ></iframe>
              <div className={HIDDEN_CLASS}>
                <Link href="https://goo.gl/maps/i2fxma2hxQUx8Lnv9">
                  View in Google Maps
                </Link>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1688649077629!6m8!1m7!1sYYpBgKp4vfCJIz1O19sV0A!2m2!1d40.35387212359532!2d-79.8716041084443!3f176!4f-1.0600000000000023!5f0.7820865974627469"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={cx(NO_COPY_CLASS, 'w-full', 'h-full')}
              ></iframe>
              <div className={HIDDEN_CLASS}>
                <Link href="https://goo.gl/maps/b5z5RDSHDp7RtLY3A">
                  View in Google Maps
                </Link>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1688649176966!6m8!1m7!1s6No7qqXG6UaAY8i23tI1Qg!2m2!1d30.73198493806956!2d-88.10827916822188!3f47.25!4f-5.829999999999998!5f0.7820865974627469"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={cx(NO_COPY_CLASS, 'w-full', 'h-full')}
              ></iframe>
              <div className={HIDDEN_CLASS}>
                <Link href="https://goo.gl/maps/hgEXubas1AgDC6LC7">
                  View in Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="max-w-lg space-y-4 mx-auto">
          <SheetableImage alt="" src={image4} title="" className="mx-auto" />
          <SheetableImage alt="" src={image3} title="" className="mx-auto" />
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
          <SheetableImage alt="" src={image2} title="" className="mx-auto" />
          <SheetableImage alt="" src={image1} title="" className="mx-auto" />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
