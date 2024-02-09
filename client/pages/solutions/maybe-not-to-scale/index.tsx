import { FC } from 'react';

import Crossword from 'components/crossword';
import InfoIcon from 'components/info_icon';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/maybe-not-to-scale/0.png';
import image1 from 'assets/solutions/maybe-not-to-scale/1.png';
import image2 from 'assets/solutions/maybe-not-to-scale/2.png';
import image3 from 'assets/solutions/maybe-not-to-scale/3.png';
import image4 from 'assets/solutions/maybe-not-to-scale/4.png';
import image5 from 'assets/solutions/maybe-not-to-scale/5.png';
import image6 from 'assets/solutions/maybe-not-to-scale/6.png';
import image7 from 'assets/solutions/maybe-not-to-scale/7.png';
import image8 from 'assets/solutions/maybe-not-to-scale/8.png';
import image9 from 'assets/solutions/maybe-not-to-scale/9.png';
import image10 from 'assets/solutions/maybe-not-to-scale/10.png';
import image11 from 'assets/solutions/maybe-not-to-scale/11.png';
import image12 from 'assets/solutions/maybe-not-to-scale/12.png';
import image13 from 'assets/solutions/maybe-not-to-scale/13.png';
import image14 from 'assets/solutions/maybe-not-to-scale/14.png';
import image15 from 'assets/solutions/maybe-not-to-scale/15.png';
import image16 from 'assets/solutions/maybe-not-to-scale/16.png';
import image17 from 'assets/solutions/maybe-not-to-scale/17.png';
import image18 from 'assets/solutions/maybe-not-to-scale/18.png';
import image19 from 'assets/solutions/maybe-not-to-scale/19.png';
import image20 from 'assets/solutions/maybe-not-to-scale/20.png';
import image21 from 'assets/solutions/maybe-not-to-scale/21.png';
import image22 from 'assets/solutions/maybe-not-to-scale/22.png';
import image23 from 'assets/solutions/maybe-not-to-scale/23.png';
import image24 from 'assets/solutions/maybe-not-to-scale/24.png';
import image25 from 'assets/solutions/maybe-not-to-scale/25.png';
import image26 from 'assets/solutions/maybe-not-to-scale/26.png';
import image27 from 'assets/solutions/maybe-not-to-scale/27.png';
import image28 from 'assets/solutions/maybe-not-to-scale/28.png';
import image29 from 'assets/solutions/maybe-not-to-scale/29.png';
import image30 from 'assets/solutions/maybe-not-to-scale/30.png';
import image31 from 'assets/solutions/maybe-not-to-scale/31.png';
import image32 from 'assets/solutions/maybe-not-to-scale/32.png';
import image33 from 'assets/solutions/maybe-not-to-scale/33.png';
import image34 from 'assets/solutions/maybe-not-to-scale/34.png';
import image35 from 'assets/solutions/maybe-not-to-scale/35.png';
import image36 from 'assets/solutions/maybe-not-to-scale/36.png';
import image37 from 'assets/solutions/maybe-not-to-scale/37.png';
import image38 from 'assets/solutions/maybe-not-to-scale/38.png';
import image39 from 'assets/solutions/maybe-not-to-scale/39.png';
import image40 from 'assets/solutions/maybe-not-to-scale/40.png';
import image41 from 'assets/solutions/maybe-not-to-scale/41.png';
import image42 from 'assets/solutions/maybe-not-to-scale/42.png';
import image43 from 'assets/solutions/maybe-not-to-scale/43.png';
import image44 from 'assets/solutions/maybe-not-to-scale/44.png';
import image45 from 'assets/solutions/maybe-not-to-scale/45.png';
import image46 from 'assets/solutions/maybe-not-to-scale/46.png';
import image47 from 'assets/solutions/maybe-not-to-scale/47.png';
import image48 from 'assets/solutions/maybe-not-to-scale/48.png';
import image49 from 'assets/solutions/maybe-not-to-scale/49.png';
import image50 from 'assets/solutions/maybe-not-to-scale/50.png';
import image51 from 'assets/solutions/maybe-not-to-scale/51.png';
import image52 from 'assets/solutions/maybe-not-to-scale/52.png';
import image53 from 'assets/solutions/maybe-not-to-scale/53.png';
import image54 from 'assets/solutions/maybe-not-to-scale/54.png';
import image55 from 'assets/solutions/maybe-not-to-scale/55.png';
import image56 from 'assets/solutions/maybe-not-to-scale/56.png';
import image57 from 'assets/solutions/maybe-not-to-scale/57.png';
import image58 from 'assets/solutions/maybe-not-to-scale/58.png';
import image59 from 'assets/solutions/maybe-not-to-scale/59.png';
import image60 from 'assets/solutions/maybe-not-to-scale/60.png';
import image61 from 'assets/solutions/maybe-not-to-scale/61.png';
import image62 from 'assets/solutions/maybe-not-to-scale/62.png';
import image63 from 'assets/solutions/maybe-not-to-scale/63.png';
import image64 from 'assets/solutions/maybe-not-to-scale/64.png';
import image65 from 'assets/solutions/maybe-not-to-scale/65.png';
import image66 from 'assets/solutions/maybe-not-to-scale/66.png';
import image67 from 'assets/solutions/maybe-not-to-scale/67.png';
import image68 from 'assets/solutions/maybe-not-to-scale/68.png';
import image69 from 'assets/solutions/maybe-not-to-scale/69.png';
import image70 from 'assets/solutions/maybe-not-to-scale/70.png';
import image71 from 'assets/solutions/maybe-not-to-scale/71.png';
import image72 from 'assets/solutions/maybe-not-to-scale/72.png';
import image73 from 'assets/solutions/maybe-not-to-scale/73.png';
import image74 from 'assets/solutions/maybe-not-to-scale/74.png';
import image75 from 'assets/solutions/maybe-not-to-scale/75.png';
import image76 from 'assets/solutions/maybe-not-to-scale/76.png';
import image77 from 'assets/solutions/maybe-not-to-scale/77.png';
import image78 from 'assets/solutions/maybe-not-to-scale/78.png';
import image79 from 'assets/solutions/maybe-not-to-scale/79.png';
import image80 from 'assets/solutions/maybe-not-to-scale/80.png';
import image81 from 'assets/solutions/maybe-not-to-scale/81.png';
import image82 from 'assets/solutions/maybe-not-to-scale/82.png';
import image83 from 'assets/solutions/maybe-not-to-scale/83.png';
import image84 from 'assets/solutions/maybe-not-to-scale/84.png';
import image85 from 'assets/solutions/maybe-not-to-scale/85.png';
import image86 from 'assets/solutions/maybe-not-to-scale/86.png';
import image87 from 'assets/solutions/maybe-not-to-scale/87.png';
import image88 from 'assets/solutions/maybe-not-to-scale/88.png';
import image89 from 'assets/solutions/maybe-not-to-scale/89.png';
import image90 from 'assets/solutions/maybe-not-to-scale/90.png';
import image91 from 'assets/solutions/maybe-not-to-scale/91.png';
import image92 from 'assets/solutions/maybe-not-to-scale/92.png';
import image93 from 'assets/solutions/maybe-not-to-scale/93.png';
import image94 from 'assets/solutions/maybe-not-to-scale/94.png';
import image95 from 'assets/solutions/maybe-not-to-scale/95.png';
import image96 from 'assets/solutions/maybe-not-to-scale/96.png';
import image97 from 'assets/solutions/maybe-not-to-scale/97.png';
import image98 from 'assets/solutions/maybe-not-to-scale/98.png';
import image99 from 'assets/solutions/maybe-not-to-scale/99.png';
import image100 from 'assets/solutions/maybe-not-to-scale/100.png';
import image101 from 'assets/solutions/maybe-not-to-scale/101.png';
import image102 from 'assets/solutions/maybe-not-to-scale/102.png';
import image103 from 'assets/solutions/maybe-not-to-scale/103.png';
import image104 from 'assets/solutions/maybe-not-to-scale/104.png';
import image105 from 'assets/solutions/maybe-not-to-scale/105.png';
import image106 from 'assets/solutions/maybe-not-to-scale/106.png';
import image107 from 'assets/solutions/maybe-not-to-scale/107.png';
import image108 from 'assets/solutions/maybe-not-to-scale/108.png';
import image109 from 'assets/solutions/maybe-not-to-scale/109.png';
import image110 from 'assets/solutions/maybe-not-to-scale/110.png';
import image111 from 'assets/solutions/maybe-not-to-scale/111.png';
import image112 from 'assets/solutions/maybe-not-to-scale/112.png';
import image113 from 'assets/solutions/maybe-not-to-scale/113.png';
import image114 from 'assets/solutions/maybe-not-to-scale/114.png';
import image115 from 'assets/solutions/maybe-not-to-scale/115.png';
import image116 from 'assets/solutions/maybe-not-to-scale/116.png';
import image117 from 'assets/solutions/maybe-not-to-scale/117.png';
import image118 from 'assets/solutions/maybe-not-to-scale/118.png';
import image119 from 'assets/solutions/maybe-not-to-scale/119.png';
import image120 from 'assets/solutions/maybe-not-to-scale/120.png';
import image121 from 'assets/solutions/maybe-not-to-scale/121.png';
import image122 from 'assets/solutions/maybe-not-to-scale/122.png';
import image123 from 'assets/solutions/maybe-not-to-scale/123.png';
import image124 from 'assets/solutions/maybe-not-to-scale/124.png';
import image125 from 'assets/solutions/maybe-not-to-scale/125.png';
import image126 from 'assets/solutions/maybe-not-to-scale/126.png';
import image127 from 'assets/solutions/maybe-not-to-scale/127.png';
import image128 from 'assets/solutions/maybe-not-to-scale/128.png';
import image129 from 'assets/solutions/maybe-not-to-scale/129.png';
import image0HRes from 'assets/solutions/maybe-not-to-scale/highres/0.png';
import image1HRes from 'assets/solutions/maybe-not-to-scale/highres/1.png';
import image2HRes from 'assets/solutions/maybe-not-to-scale/highres/2.png';
import image3HRes from 'assets/solutions/maybe-not-to-scale/highres/3.png';
import image4HRes from 'assets/solutions/maybe-not-to-scale/highres/4.png';
import image5HRes from 'assets/solutions/maybe-not-to-scale/highres/5.png';
import image6HRes from 'assets/solutions/maybe-not-to-scale/highres/6.png';
import image7HRes from 'assets/solutions/maybe-not-to-scale/highres/7.png';
import image8HRes from 'assets/solutions/maybe-not-to-scale/highres/8.png';
import image9HRes from 'assets/solutions/maybe-not-to-scale/highres/9.png';
import image10HRes from 'assets/solutions/maybe-not-to-scale/highres/10.png';
import image11HRes from 'assets/solutions/maybe-not-to-scale/highres/11.png';
import image12HRes from 'assets/solutions/maybe-not-to-scale/highres/12.png';
import image13HRes from 'assets/solutions/maybe-not-to-scale/highres/13.png';
import image14HRes from 'assets/solutions/maybe-not-to-scale/highres/14.png';
import image15HRes from 'assets/solutions/maybe-not-to-scale/highres/15.png';
import image16HRes from 'assets/solutions/maybe-not-to-scale/highres/16.png';
import image17HRes from 'assets/solutions/maybe-not-to-scale/highres/17.png';
import image18HRes from 'assets/solutions/maybe-not-to-scale/highres/18.png';
import image19HRes from 'assets/solutions/maybe-not-to-scale/highres/19.png';
import image20HRes from 'assets/solutions/maybe-not-to-scale/highres/20.png';
import image21HRes from 'assets/solutions/maybe-not-to-scale/highres/21.png';
import image22HRes from 'assets/solutions/maybe-not-to-scale/highres/22.png';
import image23HRes from 'assets/solutions/maybe-not-to-scale/highres/23.png';
import image24HRes from 'assets/solutions/maybe-not-to-scale/highres/24.png';
import image25HRes from 'assets/solutions/maybe-not-to-scale/highres/25.png';
import image26HRes from 'assets/solutions/maybe-not-to-scale/highres/26.png';
import image27HRes from 'assets/solutions/maybe-not-to-scale/highres/27.png';
import image28HRes from 'assets/solutions/maybe-not-to-scale/highres/28.png';
import image29HRes from 'assets/solutions/maybe-not-to-scale/highres/29.png';
import image30HRes from 'assets/solutions/maybe-not-to-scale/highres/30.png';
import image31HRes from 'assets/solutions/maybe-not-to-scale/highres/31.png';
import image32HRes from 'assets/solutions/maybe-not-to-scale/highres/32.png';
import image33HRes from 'assets/solutions/maybe-not-to-scale/highres/33.png';
import image34HRes from 'assets/solutions/maybe-not-to-scale/highres/34.png';
import image35HRes from 'assets/solutions/maybe-not-to-scale/highres/35.png';
import image36HRes from 'assets/solutions/maybe-not-to-scale/highres/36.png';
import image37HRes from 'assets/solutions/maybe-not-to-scale/highres/37.png';
import image38HRes from 'assets/solutions/maybe-not-to-scale/highres/38.png';
import image39HRes from 'assets/solutions/maybe-not-to-scale/highres/39.png';
import image40HRes from 'assets/solutions/maybe-not-to-scale/highres/40.png';
import image41HRes from 'assets/solutions/maybe-not-to-scale/highres/41.png';
import image42HRes from 'assets/solutions/maybe-not-to-scale/highres/42.png';
import image43HRes from 'assets/solutions/maybe-not-to-scale/highres/43.png';
import image44HRes from 'assets/solutions/maybe-not-to-scale/highres/44.png';
import image45HRes from 'assets/solutions/maybe-not-to-scale/highres/45.png';
import image46HRes from 'assets/solutions/maybe-not-to-scale/highres/46.png';
import image47HRes from 'assets/solutions/maybe-not-to-scale/highres/47.png';
import image48HRes from 'assets/solutions/maybe-not-to-scale/highres/48.png';
import image49HRes from 'assets/solutions/maybe-not-to-scale/highres/49.png';
import image50HRes from 'assets/solutions/maybe-not-to-scale/highres/50.png';
import image51HRes from 'assets/solutions/maybe-not-to-scale/highres/51.png';
import image52HRes from 'assets/solutions/maybe-not-to-scale/highres/52.png';
import image53HRes from 'assets/solutions/maybe-not-to-scale/highres/53.png';
import image54HRes from 'assets/solutions/maybe-not-to-scale/highres/54.png';
import image55HRes from 'assets/solutions/maybe-not-to-scale/highres/55.png';
import image56HRes from 'assets/solutions/maybe-not-to-scale/highres/56.png';
import image57HRes from 'assets/solutions/maybe-not-to-scale/highres/57.png';
import image58HRes from 'assets/solutions/maybe-not-to-scale/highres/58.png';
import image59HRes from 'assets/solutions/maybe-not-to-scale/highres/59.png';
import image60HRes from 'assets/solutions/maybe-not-to-scale/highres/60.png';
import image61HRes from 'assets/solutions/maybe-not-to-scale/highres/61.png';
import image62HRes from 'assets/solutions/maybe-not-to-scale/highres/62.png';
import image63HRes from 'assets/solutions/maybe-not-to-scale/highres/63.png';
import image64HRes from 'assets/solutions/maybe-not-to-scale/highres/64.png';
import image65HRes from 'assets/solutions/maybe-not-to-scale/highres/65.png';
import image66HRes from 'assets/solutions/maybe-not-to-scale/highres/66.png';
import image67HRes from 'assets/solutions/maybe-not-to-scale/highres/67.png';
import image68HRes from 'assets/solutions/maybe-not-to-scale/highres/68.png';
import image69HRes from 'assets/solutions/maybe-not-to-scale/highres/69.png';
import image70HRes from 'assets/solutions/maybe-not-to-scale/highres/70.png';
import image71HRes from 'assets/solutions/maybe-not-to-scale/highres/71.png';
import image72HRes from 'assets/solutions/maybe-not-to-scale/highres/72.png';
import image73HRes from 'assets/solutions/maybe-not-to-scale/highres/73.png';
import image74HRes from 'assets/solutions/maybe-not-to-scale/highres/74.png';
import image75HRes from 'assets/solutions/maybe-not-to-scale/highres/75.png';
import image76HRes from 'assets/solutions/maybe-not-to-scale/highres/76.png';
import image77HRes from 'assets/solutions/maybe-not-to-scale/highres/77.png';
import image78HRes from 'assets/solutions/maybe-not-to-scale/highres/78.png';
import image79HRes from 'assets/solutions/maybe-not-to-scale/highres/79.png';
import image80HRes from 'assets/solutions/maybe-not-to-scale/highres/80.png';
import image81HRes from 'assets/solutions/maybe-not-to-scale/highres/81.png';
import image82HRes from 'assets/solutions/maybe-not-to-scale/highres/82.png';
import image83HRes from 'assets/solutions/maybe-not-to-scale/highres/83.png';
import image84HRes from 'assets/solutions/maybe-not-to-scale/highres/84.png';
import image85HRes from 'assets/solutions/maybe-not-to-scale/highres/85.png';
import image86HRes from 'assets/solutions/maybe-not-to-scale/highres/86.png';
import image87HRes from 'assets/solutions/maybe-not-to-scale/highres/87.png';
import image88HRes from 'assets/solutions/maybe-not-to-scale/highres/88.png';
import image89HRes from 'assets/solutions/maybe-not-to-scale/highres/89.png';
import image90HRes from 'assets/solutions/maybe-not-to-scale/highres/90.png';
import image91HRes from 'assets/solutions/maybe-not-to-scale/highres/91.png';
import image92HRes from 'assets/solutions/maybe-not-to-scale/highres/92.png';
import image93HRes from 'assets/solutions/maybe-not-to-scale/highres/93.png';
import image94HRes from 'assets/solutions/maybe-not-to-scale/highres/94.png';
import image95HRes from 'assets/solutions/maybe-not-to-scale/highres/95.png';
import image96HRes from 'assets/solutions/maybe-not-to-scale/highres/96.png';
import image97HRes from 'assets/solutions/maybe-not-to-scale/highres/97.png';
import image98HRes from 'assets/solutions/maybe-not-to-scale/highres/98.png';
import image99HRes from 'assets/solutions/maybe-not-to-scale/highres/99.png';
import image100HRes from 'assets/solutions/maybe-not-to-scale/highres/100.png';
import image101HRes from 'assets/solutions/maybe-not-to-scale/highres/101.png';
import image102HRes from 'assets/solutions/maybe-not-to-scale/highres/102.png';
import image103HRes from 'assets/solutions/maybe-not-to-scale/highres/103.png';
import image104HRes from 'assets/solutions/maybe-not-to-scale/highres/104.png';
import image105HRes from 'assets/solutions/maybe-not-to-scale/highres/105.png';
import image106HRes from 'assets/solutions/maybe-not-to-scale/highres/106.png';
import image107HRes from 'assets/solutions/maybe-not-to-scale/highres/107.png';
import image108HRes from 'assets/solutions/maybe-not-to-scale/highres/108.png';
import image109HRes from 'assets/solutions/maybe-not-to-scale/highres/109.png';
import image110HRes from 'assets/solutions/maybe-not-to-scale/highres/110.png';
import image111HRes from 'assets/solutions/maybe-not-to-scale/highres/111.png';
import image112HRes from 'assets/solutions/maybe-not-to-scale/highres/112.png';
import image113HRes from 'assets/solutions/maybe-not-to-scale/highres/113.png';
import image114HRes from 'assets/solutions/maybe-not-to-scale/highres/114.png';
import image115HRes from 'assets/solutions/maybe-not-to-scale/highres/115.png';
import image116HRes from 'assets/solutions/maybe-not-to-scale/highres/116.png';
import image117HRes from 'assets/solutions/maybe-not-to-scale/highres/117.png';
import image118HRes from 'assets/solutions/maybe-not-to-scale/highres/118.png';
import image119HRes from 'assets/solutions/maybe-not-to-scale/highres/119.png';
import image120HRes from 'assets/solutions/maybe-not-to-scale/highres/120.png';
import image121HRes from 'assets/solutions/maybe-not-to-scale/highres/121.png';
import image122HRes from 'assets/solutions/maybe-not-to-scale/highres/122.png';
import image123HRes from 'assets/solutions/maybe-not-to-scale/highres/123.png';
import image124HRes from 'assets/solutions/maybe-not-to-scale/highres/124.png';
import image125HRes from 'assets/solutions/maybe-not-to-scale/highres/125.png';
import image126HRes from 'assets/solutions/maybe-not-to-scale/highres/126.png';
import image127HRes from 'assets/solutions/maybe-not-to-scale/highres/127.png';
import image128HRes from 'assets/solutions/maybe-not-to-scale/highres/128.png';
import image129HRes from 'assets/solutions/maybe-not-to-scale/highres/129.png';

const SLUG = 'maybe-not-to-scale';
const ANSWER = `MIDDLE AFRICA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <InfoIcon>
      Click any image to open a high-resolution version in a new window.
    </InfoIcon>
    <p>
      We are presented with five groups of strange sketches and a series of
      numbers at the bottom of the page. We should start by identifying the
      images by what's depicted, such as in Set 1, there's a Turkey and a Chili
      Pepper. We may realize that these are homonyms of various countries, as
      clued by "have you heard" in the flavor text. At this point, from clues
      such as "pushing boundaries" and even the title of this puzzle, we should
      notice that the black lines in each drawing seem almost like geographical
      borders.
    </p>
    <p>
      Each drawing in a set is actually a geographical border of some sort that
      has been cut up and rearranged to look like something else that is a near
      homonym or has a similar name of <i>another</i> geographical border,
      forming a loop with each set. The borders within each set are shown in
      alphabetical order to help aid identification.
    </p>
    <p>
      The tricky thing is not all of the borders are countries! Each set is
      titled differently to give a clue as to what type of borders are actually
      being shown.
    </p>
    <div className="text-center">
      <h3>
        FAR-REACHING SET = <i>Countries of the World</i>
      </h3>
      <p>
        <a target="_blank" href={image0HRes}>
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image1HRes}>
          <SheetableImage
            alt=""
            src={image1}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image2HRes}>
          <SheetableImage
            alt=""
            src={image2}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>CHILE in the shape of a TO-GO bag</p>
      <p>
        <a target="_blank" href={image3HRes}>
          <SheetableImage
            alt=""
            src={image3}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image4HRes}>
          <SheetableImage
            alt=""
            src={image4}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image5HRes}>
          <SheetableImage
            alt=""
            src={image5}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>CUBA in the shape of a CHILI pepper</p>
      <p>
        <a target="_blank" href={image6HRes}>
          <SheetableImage
            alt=""
            src={image6}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image7HRes}>
          <SheetableImage
            alt=""
            src={image7}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image8HRes}>
          <SheetableImage
            alt=""
            src={image8}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>GUINEA in the shape of a Rubik's CUBE</p>
      <p>
        <a target="_blank" href={image9HRes}>
          <SheetableImage
            alt=""
            src={image9}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image10HRes}>
          <SheetableImage
            alt=""
            src={image10}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image11HRes}>
          <SheetableImage
            alt=""
            src={image11}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>TOGO in the shape of a TURKEY</p>
      <p>
        <a target="_blank" href={image12HRes}>
          <SheetableImage
            alt=""
            src={image12}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image13HRes}>
          <SheetableImage
            alt=""
            src={image13}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image14HRes}>
          <SheetableImage
            alt=""
            src={image14}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>TURKEY in the shape of a GUINEA pig</p>
      <h3>
        FEDERAL SET = <i>US States</i>
      </h3>
      <p>
        <a target="_blank" href={image15HRes}>
          <SheetableImage
            alt=""
            src={image15}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image16HRes}>
          <SheetableImage
            alt=""
            src={image16}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image17HRes}>
          <SheetableImage
            alt=""
            src={image17}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>MAINE in the shape of an ORGAN</p>
      <p>
        <a target="_blank" href={image18HRes}>
          <SheetableImage
            alt=""
            src={image18}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image19HRes}>
          <SheetableImage
            alt=""
            src={image19}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image20HRes}>
          <SheetableImage
            alt=""
            src={image20}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>MINNESOTA in the shape of a horse's MANE</p>
      <p>
        <a target="_blank" href={image21HRes}>
          <SheetableImage
            alt=""
            src={image21}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image22HRes}>
          <SheetableImage
            alt=""
            src={image22}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image23HRes}>
          <SheetableImage
            alt=""
            src={image23}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>MONTANA in the shape of a SODA cup</p>
      <p>
        <a target="_blank" href={image24HRes}>
          <SheetableImage
            alt=""
            src={image24}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image25HRes}>
          <SheetableImage
            alt=""
            src={image25}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image26HRes}>
          <SheetableImage
            alt=""
            src={image26}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>NEW JERSEY in the shape of a MOUNTAIN range</p>
      <p>
        <a target="_blank" href={image27HRes}>
          <SheetableImage
            alt=""
            src={image27}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image28HRes}>
          <SheetableImage
            alt=""
            src={image28}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image29HRes}>
          <SheetableImage
            alt=""
            src={image29}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>OREGON in the shape of a basketball JERSEY</p>
      <h3>
        ISOLATED SET = <i>Sovereign Island Nations/Territories</i>
      </h3>
      <p>
        <a target="_blank" href={image30HRes}>
          <SheetableImage
            alt=""
            src={image30}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image31HRes}>
          <SheetableImage
            alt=""
            src={image31}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image32HRes}>
          <SheetableImage
            alt=""
            src={image32}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>
        CHRISTMAS ISLAND in the shape of a jar of MAYO
        <br />
        (markings meant to evoke Hellmann's brand)
      </p>
      <p>
        <a target="_blank" href={image33HRes}>
          <SheetableImage
            alt=""
            src={image33}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image34HRes}>
          <SheetableImage
            alt=""
            src={image34}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image35HRes}>
          <SheetableImage
            alt=""
            src={image35}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>FAROE ISLANDS in the shape of a CHRISTMAS tree</p>
      <p>
        <a target="_blank" href={image36HRes}>
          <SheetableImage
            alt=""
            src={image36}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image37HRes}>
          <SheetableImage
            alt=""
            src={image37}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image38HRes}>
          <SheetableImage
            alt=""
            src={image38}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>ISLE OF MAN in the shape of a PHARAOH</p>
      <p>
        <a target="_blank" href={image39HRes}>
          <SheetableImage
            alt=""
            src={image39}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image40HRes}>
          <SheetableImage
            alt=""
            src={image40}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image41HRes}>
          <SheetableImage
            alt=""
            src={image41}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>MAYOTTE in the shape of a REUNION between two people</p>
      <p>
        <a target="_blank" href={image42HRes}>
          <SheetableImage
            alt=""
            src={image42}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image43HRes}>
          <SheetableImage
            alt=""
            src={image43}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image44HRes}>
          <SheetableImage
            alt=""
            src={image44}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>REUNION in the shape of a MALE symbol</p>
      <h3>
        NOBLE SET = <i>English Counties</i>
      </h3>
      <p>
        <a target="_blank" href={image45HRes}>
          <SheetableImage
            alt=""
            src={image45}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image46HRes}>
          <SheetableImage
            alt=""
            src={image46}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image47HRes}>
          <SheetableImage
            alt=""
            src={image47}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>
        CORNWALL in the shape of a bottle of WORCESTERSHIRE sauce
        <br />
        (markings meant to evoke Lea + Perrins brand)
      </p>
      <p>
        <a target="_blank" href={image48HRes}>
          <SheetableImage
            alt=""
            src={image48}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image49HRes}>
          <SheetableImage
            alt=""
            src={image49}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image50HRes}>
          <SheetableImage
            alt=""
            src={image50}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>DERBYSHIRE in the shape of a US penny with Abraham LINCOLN</p>
      <p>
        <a target="_blank" href={image51HRes}>
          <SheetableImage
            alt=""
            src={image51}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image52HRes}>
          <SheetableImage
            alt=""
            src={image52}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image53HRes}>
          <SheetableImage
            alt=""
            src={image53}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>HERTFORDSHIRE in the shape of an ear of CORN</p>
      <p>
        <a target="_blank" href={image54HRes}>
          <SheetableImage
            alt=""
            src={image54}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image55HRes}>
          <SheetableImage
            alt=""
            src={image55}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image56HRes}>
          <SheetableImage
            alt=""
            src={image56}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>LINCOLNSHIRE in the shape of a HEART</p>
      <p>
        <a target="_blank" href={image57HRes}>
          <SheetableImage
            alt=""
            src={image57}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image58HRes}>
          <SheetableImage
            alt=""
            src={image58}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image59HRes}>
          <SheetableImage
            alt=""
            src={image59}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>
        WORCESTERSHIRE in the shape of a DERBY hat
        <br />
        (worn by Alex Delarge from A Clockwork Orange)
      </p>
      <h3>
        SUBMERGED SET = <i>Lakes/Bodies of Water</i>
      </h3>
      <p>
        <a target="_blank" href={image60HRes}>
          <SheetableImage
            alt=""
            src={image60}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image61HRes}>
          <SheetableImage
            alt=""
            src={image61}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image62HRes}>
          <SheetableImage
            alt=""
            src={image62}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>
        LAKE BAIKAL in the shape of a greater than symbol equation
        <br />
        with an arrow pointing to the SUPERIOR number
      </p>
      <p>
        <a target="_blank" href={image63HRes}>
          <SheetableImage
            alt=""
            src={image63}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image64HRes}>
          <SheetableImage
            alt=""
            src={image64}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image65HRes}>
          <SheetableImage
            alt=""
            src={image65}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>LAKE ERIE in the shape of a SALT shaker</p>
      <p>
        <a target="_blank" href={image66HRes}>
          <SheetableImage
            alt=""
            src={image66}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image67HRes}>
          <SheetableImage
            alt=""
            src={image67}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image68HRes}>
          <SheetableImage
            alt=""
            src={image68}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>GREAT SALT LAKE in the shape of a BIKE</p>
      <p>
        <a target="_blank" href={image69HRes}>
          <SheetableImage
            alt=""
            src={image69}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image70HRes}>
          <SheetableImage
            alt=""
            src={image70}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image71HRes}>
          <SheetableImage
            alt=""
            src={image71}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>LAKE SUPERIOR in the shape of a REINDEER</p>
      <p>
        <a target="_blank" href={image72HRes}>
          <SheetableImage
            alt=""
            src={image72}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image73HRes}>
          <SheetableImage
            alt=""
            src={image73}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image74HRes}>
          <SheetableImage
            alt=""
            src={image74}
            title=""
            className="inline-block w-1/4"
          />
        </a>
      </p>
      <p>REINDEER LAKE in the shape of an EERIE ghost</p>
    </div>
    <p>
      We will soon realize that aside from components that have been duplicated
      in certain images, there's exactly one component in each image that is{' '}
      <i>not</i> part of that border. As it turns out, the five extraneous
      components in each set can be rearranged into a sixth border that fits in
      the same category as the rest of the set.
    </p>
    <div className="text-center">
      <h3>
        FAR-REACHING SET = <i>Countries of the World</i>
      </h3>
      <p>
        <a target="_blank" href={image75HRes}>
          <SheetableImage
            alt=""
            src={image75}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image76HRes}>
          <SheetableImage
            alt=""
            src={image76}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image77HRes}>
          <SheetableImage
            alt=""
            src={image77}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image78HRes}>
          <SheetableImage
            alt=""
            src={image78}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image79HRes}>
          <SheetableImage
            alt=""
            src={image79}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image80HRes}>
          <SheetableImage
            alt=""
            src={image80}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image81HRes}>
          <SheetableImage
            alt=""
            src={image81}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image82HRes}>
          <SheetableImage
            alt=""
            src={image82}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image83HRes}>
          <SheetableImage
            alt=""
            src={image83}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image84HRes}>
          <SheetableImage
            alt=""
            src={image84}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image85HRes}>
          <SheetableImage
            alt=""
            src={image85}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        ITALY
      </p>

      <h3>
        FEDERAL SET = <i>US States</i>
      </h3>
      <p>
        <a target="_blank" href={image86HRes}>
          <SheetableImage
            alt=""
            src={image86}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image87HRes}>
          <SheetableImage
            alt=""
            src={image87}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image88HRes}>
          <SheetableImage
            alt=""
            src={image88}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image89HRes}>
          <SheetableImage
            alt=""
            src={image89}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image90HRes}>
          <SheetableImage
            alt=""
            src={image90}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image91HRes}>
          <SheetableImage
            alt=""
            src={image91}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image92HRes}>
          <SheetableImage
            alt=""
            src={image92}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image93HRes}>
          <SheetableImage
            alt=""
            src={image93}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image94HRes}>
          <SheetableImage
            alt=""
            src={image94}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image95HRes}>
          <SheetableImage
            alt=""
            src={image95}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image96HRes}>
          <SheetableImage
            alt=""
            src={image96}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        FLORIDA
      </p>
      <h3>
        ISOLATED SET = <i>Sovereign Island Nations/Territories</i>
      </h3>
      <p>
        <a target="_blank" href={image97HRes}>
          <SheetableImage
            alt=""
            src={image97}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image98HRes}>
          <SheetableImage
            alt=""
            src={image98}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image99HRes}>
          <SheetableImage
            alt=""
            src={image99}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image100HRes}>
          <SheetableImage
            alt=""
            src={image100}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image101HRes}>
          <SheetableImage
            alt=""
            src={image101}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image102HRes}>
          <SheetableImage
            alt=""
            src={image102}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image103HRes}>
          <SheetableImage
            alt=""
            src={image103}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image104HRes}>
          <SheetableImage
            alt=""
            src={image104}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image105HRes}>
          <SheetableImage
            alt=""
            src={image105}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image106HRes}>
          <SheetableImage
            alt=""
            src={image106}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image107HRes}>
          <SheetableImage
            alt=""
            src={image107}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        BERMUDA
      </p>
      <h3>
        NOBLE SET = <i>English Counties</i>
      </h3>
      <p>
        <a target="_blank" href={image108HRes}>
          <SheetableImage
            alt=""
            src={image108}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image109HRes}>
          <SheetableImage
            alt=""
            src={image109}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image110HRes}>
          <SheetableImage
            alt=""
            src={image110}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image111HRes}>
          <SheetableImage
            alt=""
            src={image111}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image112HRes}>
          <SheetableImage
            alt=""
            src={image112}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image113HRes}>
          <SheetableImage
            alt=""
            src={image113}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image114HRes}>
          <SheetableImage
            alt=""
            src={image114}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image115HRes}>
          <SheetableImage
            alt=""
            src={image115}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image116HRes}>
          <SheetableImage
            alt=""
            src={image116}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image117HRes}>
          <SheetableImage
            alt=""
            src={image117}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image118HRes}>
          <SheetableImage
            alt=""
            src={image118}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        LANCASHIRE
      </p>
      <h3>
        SUBMERGED SET = <i>Lakes</i>
      </h3>
      <p>
        <a target="_blank" href={image119HRes}>
          <SheetableImage
            alt=""
            src={image119}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image120HRes}>
          <SheetableImage
            alt=""
            src={image120}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image121HRes}>
          <SheetableImage
            alt=""
            src={image121}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image122HRes}>
          <SheetableImage
            alt=""
            src={image122}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image123HRes}>
          <SheetableImage
            alt=""
            src={image123}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image124HRes}>
          <SheetableImage
            alt=""
            src={image124}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image125HRes}>
          <SheetableImage
            alt=""
            src={image125}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image126HRes}>
          <SheetableImage
            alt=""
            src={image126}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image127HRes}>
          <SheetableImage
            alt=""
            src={image127}
            title=""
            className="inline-block w-1/4"
          />
        </a>
        <a target="_blank" href={image128HRes}>
          <SheetableImage
            alt=""
            src={image128}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        <a target="_blank" href={image129HRes}>
          <SheetableImage
            alt=""
            src={image129}
            title=""
            className="inline-block w-1/4"
          />
          <br />
        </a>
        DEAD SEA
      </p>
    </div>
    <p>
      This is where the paragraphs at the bottom of the puzzle now come into
      play. Each sentence in a paragraph that tells us that the Nth letter is a
      certain number is actually telling us to index into a name found in each
      set and take note of those letters. But which set does each paragraph
      correspond to? We take note that the sets' names are in alphabetical order
      (<Clue>FAR-REACHING</Clue>, <Clue>FEDERAL</Clue>, <Clue>ISOLATED</Clue>,{' '}
      <Clue>NOBLE</Clue>, and <Clue>SUBMERGED</Clue>) but using that order
      wouldn't work because the first paragraph asks us to take the sixth
      letter, but the word <Clue>ITALY</Clue> has only five letters. We should
      instead take the <i>secret borders'</i> names and use <i>them</i>{' '}
      alphabetically (<Clue>BERMUDA</Clue>, <Clue>DEAD SEA</Clue>,{' '}
      <Clue>FLORIDA</Clue>, <Clue>ITALY</Clue>, <Clue>LANCASHIRE</Clue>):
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Lines per set</th>
          <th>Secret Border</th>
          <th>Index</th>
          <th>Letter</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The third letter is 9</td>
          <td>BERMUDA</td>
          <td>3</td>
          <td>R</td>
          <td>9</td>
        </tr>
        <tr>
          <td>The fourth letter is 1</td>
          <td>BERMUDA</td>
          <td>4</td>
          <td>M</td>
          <td>1</td>
        </tr>
        <tr>
          <td>The sixth letter is 4</td>
          <td>BERMUDA</td>
          <td>6</td>
          <td>D</td>
          <td>4</td>
        </tr>
        <tr>
          <td>The fourth letter is 3</td>
          <td>DEAD SEA</td>
          <td>4</td>
          <td>D</td>
          <td>3</td>
        </tr>
        <tr>
          <td>The sixth letter is 6</td>
          <td>DEAD SEA</td>
          <td>6</td>
          <td>E</td>
          <td>6</td>
        </tr>
        <tr>
          <td>The first letter is 8</td>
          <td>FLORIDA</td>
          <td>1</td>
          <td>F</td>
          <td>8</td>
        </tr>
        <tr>
          <td>The fifth letter is 2</td>
          <td>FLORIDA</td>
          <td>5</td>
          <td>I</td>
          <td>2</td>
        </tr>
        <tr>
          <td>The third letter is 12</td>
          <td>ITALY</td>
          <td>3</td>
          <td>A</td>
          <td>12</td>
        </tr>
        <tr>
          <td>The fourth letter is 5</td>
          <td>ITALY</td>
          <td>4</td>
          <td>L</td>
          <td>5</td>
        </tr>
        <tr>
          <td>The fourth letter is 11</td>
          <td>LANCASHIRE</td>
          <td>4</td>
          <td>C</td>
          <td>11</td>
        </tr>
        <tr>
          <td>The fifth letter is 7</td>
          <td>LANCASHIRE</td>
          <td>5</td>
          <td>A</td>
          <td>7</td>
        </tr>
        <tr>
          <td>The eighth letter is 10</td>
          <td>LANCASHIRE</td>
          <td>8</td>
          <td>I</td>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
    <p>This gives us a sequence of twelve letters in order:</p>
    <Crossword
      data={[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]}
      fill={[['M', 'I', 'D', 'D', 'L', 'E', 'A', 'F', 'R', 'I', 'C', 'A']]}
    />
    <p>
      So the final answer to the puzzle is <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .extract-table td:nth-child(n + 3) {
        text-align: center;
      }
      .extract-table td:nth-child(2n + 2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
