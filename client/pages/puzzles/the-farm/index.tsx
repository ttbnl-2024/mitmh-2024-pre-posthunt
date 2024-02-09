import { MathJax, MathJaxContext } from 'better-react-mathjax';
import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import CtCMath from 'components/copy_math';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/the-farm/0.png';
import image1 from 'assets/puzzles/the-farm/1.png';
import image2 from 'assets/puzzles/the-farm/2.png';
import image3 from 'assets/puzzles/the-farm/3.png';
import image4 from 'assets/puzzles/the-farm/4.png';
import image5 from 'assets/puzzles/the-farm/5.png';
import image6 from 'assets/puzzles/the-farm/6.png';
import image7 from 'assets/puzzles/the-farm/7.png';
import image8 from 'assets/puzzles/the-farm/8.png';
import image9 from 'assets/puzzles/the-farm/9.png';
import image10 from 'assets/puzzles/the-farm/10.png';
import image11 from 'assets/puzzles/the-farm/11.png';
import image12 from 'assets/puzzles/the-farm/12.png';
import image13 from 'assets/puzzles/the-farm/13.png';
import image14 from 'assets/puzzles/the-farm/14.png';
import image15 from 'assets/puzzles/the-farm/15.png';
import image16 from 'assets/puzzles/the-farm/16.png';
import image17 from 'assets/puzzles/the-farm/17.png';
import image18 from 'assets/puzzles/the-farm/18.png';
import image19 from 'assets/puzzles/the-farm/19.png';

const SLUG = 'the-farm';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <MathJaxContext>
        <MathJax>
          <div ref={ref}>
            <FlavorText>
              This farmer has a variety of fruits in different plots of the
              farm, but they only grow in certain climates. To minimize
              additional work, this farmer has hired a mathematician to compute
              the temperature across the farm, who has produced a single
              formula.
            </FlavorText>
            <InfoIcon className={cx(NO_COPY_CLASS)}>
              Equation is available in LaTeX and program form in
              copy-to-clipboard. On narrow screens, equation may scroll
              horizontally.
            </InfoIcon>

            <CtCMath
              display
              // prettier-ignore
              math="\begin{align}&- \frac{1024}
              {35433788233417105} x^{19} y^{15} + \frac{4}
              {47780358022439} x^{18} y^{14} + \frac{1}
              {2494324098776} x^{17} y^{14} \\ &+ \frac{1}
              {1678376078400} x^{15} y^{15} - \frac{27}
              {6190012945424} x^{18} y^{11} + \frac{43}
              {2307400377728} x^{17} y^{12} \\ &+ \frac{153}
              {1966631437960} x^{18} y^{10} + \frac{45}
              {5708938153984} x^{14} y^{14} + \frac{11}
              {1054803446784} x^{13} y^{15} \\ &- \frac{369}
              {7995272925184} x^{16} y^{11} - \frac{1079}
              {15777484685312} x^{14} y^{13} + \frac{115}
              {10558842658816} x^{13} y^{14} \\ &- \frac{61}
              {545666563072} x^{12} y^{15} - \frac{28973}
              {4946708660224} x^{12} y^{11} + \frac{4963}
              {2890227253248} x^{11} y^{12} \\ &+ \frac{7}
              {2021065220} x^{17} y^5 - \frac{267}
              {25875640768} x^{16} y^5 - \frac{9831}
              {487625064448} x^9 y^{12} + \frac{64}
              {908309937} x^{17} y^3 \\ &+ \frac{83}
              {672106568} x^{16} y^4 - \frac{117657}
              {1130950033408} x^{10} y^{10} - \frac{12}
              {100775387} x^{16} y^3 - \frac{107729}
              {4009607168} x^{12} y^5 \\ &- \frac{334963}
              {20689715200} x^{10} y^7 - \frac{66651}
              {29118955520} x^7 y^{10} - \frac{42089}
              {2019715072} x^5 y^{12} - \frac{707723}
              {4137269248} x^{12} y^4 \\ &- \frac{503603}
              {1230503936} x^5 y^8 - \frac{334481}
              {201187328} x^3 y^{10} + \frac{3867031}
              {417071104} x^5 y^7 - \frac{1893663}
              {52625408} x^4 y^7 \\ &+ \frac{4633939}
              {127586304} x^2 y^9 + \frac{40159}
              {1333792} x y^{10} + \frac{982337}
              {6307840} x^5 y^5 + \frac{120591}
              {502016} x y^9 - \frac{396681}
              {4941824} x^5 y^4 \\ &- \frac{198079}
              {78576} x y^7 - \frac{8676}
              {30139} y^7 - \frac{47754}
              {9313} x^5 y - \frac{372064}
              {30319} x y^4 + \frac{16384}
              {224695} x^3 + \frac{262144}
              {599187} x^2 \\ &+ \frac{31064064}
              {1139497} x y - \frac{4194304}
              {4575605} x
              \end{align}"
            />
            <p className={cx(HIDDEN_CLASS)}>
              - (1024 / 35433788233417105) * x**19 * y**15 + (4 /
              47780358022439) * x**18 * y**14 + (1 / 2494324098776) * x**17 *
              y**14 + (1 / 1678376078400) * x**15 * y**15 - (27 / 6190012945424)
              * x**18 * y**11 + (43 / 2307400377728) * x**17 * y**12 + (153 /
              1966631437960) * x**18 * y**10 + (45 / 5708938153984) * x**14 *
              y**14 + (11 / 1054803446784) * x**13 * y**15 - (369 /
              7995272925184) * x**16 * y**11 - (1079 / 15777484685312) * x**14 *
              y**13 + (115 / 10558842658816) * x**13 * y**14 - (61 /
              545666563072) * x**12 * y**15 - (28973 / 4946708660224) * x**12 *
              y**11 + (4963 / 2890227253248) * x**11 * y**12 + (7 / 2021065220)
              * x**17 * y**5 - (267 / 25875640768) * x**16 * y**5 - (9831 /
              487625064448) * x**9 * y**12 + (64 / 908309937) * x**17 * y**3 +
              (83 / 672106568) * x**16 * y**4 - (117657 / 1130950033408) * x**10
              * y**10 - (12 / 100775387) * x**16 * y**3 - (107729 / 4009607168)
              * x**12 * y**5 - (334963 / 20689715200) * x**10 * y**7 - (66651 /
              29118955520) * x**7 * y**10 - (42089 / 2019715072) * x**5 * y**12
              - (707723 / 4137269248) * x**12 * y**4 - (503603 / 1230503936) *
              x**5 * y**8 - (334481 / 201187328) * x**3 * y**10 + (3867031 /
              417071104) * x**5 * y**7 - (1893663 / 52625408) * x**4 * y**7 +
              (4633939 / 127586304) * x**2 * y**9 + (40159 / 1333792) * x *
              y**10 + (982337 / 6307840) * x**5 * y**5 + (120591 / 502016) * x *
              y**9 - (396681 / 4941824) * x**5 * y**4 - (198079 / 78576) * x *
              y**7 - (8676 / 30139) * y**7 - (47754 / 9313) * x**5 * y - (372064
              / 30319) * x * y**4 + (16384 / 224695) * x**3 + (262144 / 599187)
              * x**2 + (31064064 / 1139497) * x * y - (4194304 / 4575605) * x
            </p>
            <div className="flex flex-wrap justify-center">
              <SheetableImage
                alt=""
                src={image0}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image1}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image2}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image3}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image4}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image5}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image6}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image7}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image8}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image9}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image10}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image11}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image12}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image13}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image14}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image15}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image16}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image17}
                title=""
                className="max-w-sm"
              />
              <SheetableImage
                alt=""
                src={image18}
                title=""
                className="max-w-sm"
              />
            </div>
            <SheetableImage alt="" src={image19} title="" className="mx-auto" />
          </div>
        </MathJax>
      </MathJaxContext>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
