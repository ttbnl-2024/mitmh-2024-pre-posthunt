import React, { FC, useRef } from 'react';

import { Colors } from 'components/crossword';
import Grid from 'components/grid';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/why-the-romans-never-invented-logic-puzzles/0.png';
import image1 from 'assets/puzzles/why-the-romans-never-invented-logic-puzzles/1.png';
import image2 from 'assets/puzzles/why-the-romans-never-invented-logic-puzzles/2.png';
import image3 from 'assets/puzzles/why-the-romans-never-invented-logic-puzzles/3.png';

const SLUG = 'why-the-romans-never-invented-logic-puzzles';

const firstGridData = ['NAOSFT', 'AOAAGC', 'XTYL=O', '1EORE>', '3OTI9B'].map(
  (row) => row.split('')
);

const firstGridShade = ['x_x_x_', '___x_x', '_x____', '__xx_x', 'x___x_'].map(
  (row) => row.split('').map((cell) => (cell === 'x' ? Colors.C9 : ''))
);

const secondGridData = [
  'RQRYELIEDETZPM',
  'AOLNAT63UEBRA7',
  'LKISME4DTE"XI8',
  'IJGG5A5ALNEDRK',
  'TYHMIMUFLEACN3',
  'KCIR4EMOEJSRTJ',
  '=JI"TIC&R6ORSE',
  'UG"DI"TH6OCTFA',
  'EBNAMTR2NE0YJT',
  '3NNNE=6INCTARR',
  '5472VDDRGAEMJA',
  'SRTTIRPP"GSFTN',
  'I"MCOELWPSNULO',
  'A3NO&RESN2O9VL',
].map((row) => row.split(''));

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="w-[265px] inline-block"
          />
          <Grid
            data={firstGridData}
            shading={firstGridShade}
            className="first-grid"
          />
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="w-[265px] inline-block"
          />
          <SheetableImage
            alt=""
            src={image2}
            title=""
            className="w-[265px] inline-block"
          />
        </div>

        <br />

        <InfoIcon>
          <a href="https://swaroopg92.github.io/penpa-edit/?m=solve&amp;p=7Vffb9s2EH73XzHwmQ8iqR+U3rpu2UuXrUuGYhCMQEncxogTdbK9FgrSv733Q5TDE/syoMAeBtsE79Px+N0d70zdd/fHodemwK/zOtMGPmXm6Wc8yPALn8vtYbdpftCvjoe7foCJ1r+dnen33W6/WbWT1nrVKqO0svAzav1lvPjSKqXNevU0/tE8jVdNu37W45+nqT9NL5onGM9pNM2TMqXJVNMqr3S+BnulyVHM81n2KNdZkK1FufQnoETAmjIAjgyC2SCTBTvvkJMFsBtkMmCyeUHBBsC/SSZKdqZUkMFylr1BuQr6VVaTC2GDqqhI3wXZF5F97xzJZSDgSzJoAA8AUXbBRQ/hQDlYqHnHmWHNFm19AsiFIojTeiASAH4+69dE2dhAqa7J52paYDNOQz2LFEOfT/oAEKP5OeckmLPZ5GE1AzUxnhwEkfjAKpbNFNIg8pkJKbbGxXThMLD9OhiEYxKtgCVRhKzNaQcXHLR8CKYIW+vpcXjqMrIfrLuMrQdtZ4jPTMfxIQ5H0DrOT9jbcXbCibSupAMyB9P5mLzz8YkFgNjN6zm9IZs255qCMchEZ45uzsmc6eY5Rw9iNgEV+RNqDuT4NBSWF8wKBUczlIQt+DyFeJWWHAS3J7mieIQitxWHlysIGsVf0CggGk1rteKGprQFReJpBIa+SAzNSwxjIjGkJTGMtcTQmxdcDGIYEqmHURAYnSuJJfwoEn4UCT+oOQkuRWLfUviBehR2sZZSK9ZSwxJra+Qn1lKWxVpDucxiRZOJ6BNoRBgYTMTf0IGVmlC7C0YGemZCU/BkUDhOoDwlDCbCYeQ5IZCSI8lTK5KaqfQYyo9cXonkkiZlQ2hairzQhN6Z0KQGsdBMBMSmIg/9L2GTmtpCMxE66HcJUNYxgyIgDKY2SpWepT9uqVkiKI6NLRNBtlWKp0/0AutTG9UJ312GNsVylyXOp1vmCDrjGV2kLI2XcMPSo6PxJxozGgsa35DOzzS+o/E1jTmNJelUeEdbrdqcb4nf+sBd8v+n/+2ncEeH67ja97ur/XF4391sVEO3eE3Y4/HhejNE0K7vP+62j7He9sNjP2ySjxDc3H5I6V/3w62w/qnb7SJg//exG+LFN9vhZhdDh2Ebyd0w9J8i5KE73EXAdXeAd5j93fZjbGnzeIgJHLqYYnffid0eTj4/r9RnRb/WwTtQje86dTO+1eMvePE5vQ3p8S287PzajOf4rsPvRVh8dJWEJgQVSFOXwfwdKSD6mq0YRM/xakQ3Ibj4tC+bwPh7046XWuE2P9JanKqH/h/gyTRQvukfrsGTVr2IBT/ZH2/7++OkSw3kFbO9kGzhuZvYTlMmizNJFuboA5LlHF69+Q506/UzZyH7F++ZfIn8Tg3z81Rp/ZAsNoAT9QZosq4mfFFagC+KCDdc1hGgiVICVFYTQMuCAnBRU4B9o6zQqqwsZCWLC7da1Bdu9bLEoGXR7Cs=">
            Penpa link for the following puzzle.
          </a>
        </InfoIcon>

        <SheetableImage alt="" src={image3} title="" className="w-full" />
        <br />
        <Grid data={secondGridData} className="second-grid" />
      </div>

      <style jsx global>{`
        .first-grid table,
        .second-grid table {
          margin-left: auto;
          margin-right: auto;
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
        .first-grid td,
        .second-grid td {
          height: 30px !important;
          width: 30px !important;
          font-size: 100%;
        }
        @media (min-width: 768px) {
          .first-grid td,
          .second-grid td {
            height: 40px !important;
            width: 40px !important;
            font-size: 150%;
          }
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
