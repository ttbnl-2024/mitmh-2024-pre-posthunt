import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/jigsaw-slitherlink/0.png';
import image1 from 'assets/puzzles/jigsaw-slitherlink/1.png';
import image2 from 'assets/puzzles/jigsaw-slitherlink/2.png';
import image3 from 'assets/puzzles/jigsaw-slitherlink/3.png';
import image4 from 'assets/puzzles/jigsaw-slitherlink/4.png';
import image5 from 'assets/puzzles/jigsaw-slitherlink/5.png';
import image6 from 'assets/puzzles/jigsaw-slitherlink/6.png';
import image7 from 'assets/puzzles/jigsaw-slitherlink/7.png';
import image8 from 'assets/puzzles/jigsaw-slitherlink/8.png';
import image9 from 'assets/puzzles/jigsaw-slitherlink/9.png';
import image10 from 'assets/puzzles/jigsaw-slitherlink/10.png';
import image11 from 'assets/puzzles/jigsaw-slitherlink/11.png';
import image12 from 'assets/puzzles/jigsaw-slitherlink/12.png';
import image13 from 'assets/puzzles/jigsaw-slitherlink/13.png';
import image14 from 'assets/puzzles/jigsaw-slitherlink/14.png';
import image15 from 'assets/puzzles/jigsaw-slitherlink/15.png';
import image16 from 'assets/puzzles/jigsaw-slitherlink/16.png';
import image17 from 'assets/puzzles/jigsaw-slitherlink/17.png';
import image18 from 'assets/puzzles/jigsaw-slitherlink/18.png';
import image19 from 'assets/puzzles/jigsaw-slitherlink/19.png';
import image20 from 'assets/puzzles/jigsaw-slitherlink/20.png';
import image21 from 'assets/puzzles/jigsaw-slitherlink/21.png';
import image22 from 'assets/puzzles/jigsaw-slitherlink/22.png';
import image23 from 'assets/puzzles/jigsaw-slitherlink/23.png';
import image24 from 'assets/puzzles/jigsaw-slitherlink/24.png';
import image25 from 'assets/puzzles/jigsaw-slitherlink/25.png';
import image26 from 'assets/puzzles/jigsaw-slitherlink/26.png';
import image27 from 'assets/puzzles/jigsaw-slitherlink/27.png';
import image28 from 'assets/puzzles/jigsaw-slitherlink/28.png';
import image29 from 'assets/puzzles/jigsaw-slitherlink/29.png';
import image30 from 'assets/puzzles/jigsaw-slitherlink/30.png';
import image31 from 'assets/puzzles/jigsaw-slitherlink/31.png';
import image32 from 'assets/puzzles/jigsaw-slitherlink/32.png';
import image33 from 'assets/puzzles/jigsaw-slitherlink/33.png';
import image34 from 'assets/puzzles/jigsaw-slitherlink/34.png';
import image35 from 'assets/puzzles/jigsaw-slitherlink/35.png';
import image36 from 'assets/puzzles/jigsaw-slitherlink/36.png';
import image37 from 'assets/puzzles/jigsaw-slitherlink/37.png';
import image38 from 'assets/puzzles/jigsaw-slitherlink/38.png';
import image39 from 'assets/puzzles/jigsaw-slitherlink/39.png';
import image40 from 'assets/puzzles/jigsaw-slitherlink/40.png';
import image41 from 'assets/puzzles/jigsaw-slitherlink/41.png';
import image42 from 'assets/puzzles/jigsaw-slitherlink/42.png';
import image43 from 'assets/puzzles/jigsaw-slitherlink/43.png';
import image44 from 'assets/puzzles/jigsaw-slitherlink/44.png';
import image45 from 'assets/puzzles/jigsaw-slitherlink/45.png';
import image46 from 'assets/puzzles/jigsaw-slitherlink/46.png';
import image47 from 'assets/puzzles/jigsaw-slitherlink/47.png';
import image48 from 'assets/puzzles/jigsaw-slitherlink/48.png';
import image49 from 'assets/puzzles/jigsaw-slitherlink/49.png';
import image50 from 'assets/puzzles/jigsaw-slitherlink/50.png';
import image51 from 'assets/puzzles/jigsaw-slitherlink/51.png';
import image52 from 'assets/puzzles/jigsaw-slitherlink/52.png';
import image53 from 'assets/puzzles/jigsaw-slitherlink/53.png';
import image54 from 'assets/puzzles/jigsaw-slitherlink/54.png';
import image55 from 'assets/puzzles/jigsaw-slitherlink/55.png';
import image56 from 'assets/puzzles/jigsaw-slitherlink/56.png';
import image57 from 'assets/puzzles/jigsaw-slitherlink/57.png';
import image58 from 'assets/puzzles/jigsaw-slitherlink/58.png';
import image59 from 'assets/puzzles/jigsaw-slitherlink/59.png';
import image60 from 'assets/puzzles/jigsaw-slitherlink/60.png';
import image61 from 'assets/puzzles/jigsaw-slitherlink/61.png';
import image62 from 'assets/puzzles/jigsaw-slitherlink/62.png';
import image63 from 'assets/puzzles/jigsaw-slitherlink/63.png';
import image64 from 'assets/puzzles/jigsaw-slitherlink/64.png';
import image65 from 'assets/puzzles/jigsaw-slitherlink/65.png';
import image66 from 'assets/puzzles/jigsaw-slitherlink/66.png';
import image67 from 'assets/puzzles/jigsaw-slitherlink/67.png';
import image68 from 'assets/puzzles/jigsaw-slitherlink/68.png';
import image69 from 'assets/puzzles/jigsaw-slitherlink/69.png';
import image70 from 'assets/puzzles/jigsaw-slitherlink/70.png';
import image71 from 'assets/puzzles/jigsaw-slitherlink/71.png';
import image72 from 'assets/puzzles/jigsaw-slitherlink/72.png';
import image73 from 'assets/puzzles/jigsaw-slitherlink/73.png';
import image74 from 'assets/puzzles/jigsaw-slitherlink/74.png';
import image75 from 'assets/puzzles/jigsaw-slitherlink/75.png';
import image76 from 'assets/puzzles/jigsaw-slitherlink/76.png';
import image77 from 'assets/puzzles/jigsaw-slitherlink/77.png';
import image78 from 'assets/puzzles/jigsaw-slitherlink/78.png';
import image79 from 'assets/puzzles/jigsaw-slitherlink/79.png';
import image80 from 'assets/puzzles/jigsaw-slitherlink/80.png';
import image81 from 'assets/puzzles/jigsaw-slitherlink/81.png';
import image82 from 'assets/puzzles/jigsaw-slitherlink/82.png';
import image83 from 'assets/puzzles/jigsaw-slitherlink/83.png';
import image84 from 'assets/puzzles/jigsaw-slitherlink/84.png';
import image85 from 'assets/puzzles/jigsaw-slitherlink/85.png';
import image86 from 'assets/puzzles/jigsaw-slitherlink/86.png';
import image87 from 'assets/puzzles/jigsaw-slitherlink/87.png';
import image88 from 'assets/puzzles/jigsaw-slitherlink/88.png';
import image89 from 'assets/puzzles/jigsaw-slitherlink/89.png';
import image90 from 'assets/puzzles/jigsaw-slitherlink/90.png';
import image91 from 'assets/puzzles/jigsaw-slitherlink/91.png';
import image92 from 'assets/puzzles/jigsaw-slitherlink/92.png';
import image93 from 'assets/puzzles/jigsaw-slitherlink/93.png';
import image94 from 'assets/puzzles/jigsaw-slitherlink/94.png';
import image95 from 'assets/puzzles/jigsaw-slitherlink/95.png';
import image96 from 'assets/puzzles/jigsaw-slitherlink/96.png';
import image97 from 'assets/puzzles/jigsaw-slitherlink/97.png';
import image98 from 'assets/puzzles/jigsaw-slitherlink/98.png';
import image99 from 'assets/puzzles/jigsaw-slitherlink/99.png';
import image100 from 'assets/puzzles/jigsaw-slitherlink/100.png';
import image101 from 'assets/puzzles/jigsaw-slitherlink/101.png';
import image102 from 'assets/puzzles/jigsaw-slitherlink/102.png';
import image103 from 'assets/puzzles/jigsaw-slitherlink/103.png';
import image104 from 'assets/puzzles/jigsaw-slitherlink/104.png';
import image105 from 'assets/puzzles/jigsaw-slitherlink/105.png';
import image106 from 'assets/puzzles/jigsaw-slitherlink/106.png';
import image107 from 'assets/puzzles/jigsaw-slitherlink/107.png';
import image108 from 'assets/puzzles/jigsaw-slitherlink/108.png';
import image109 from 'assets/puzzles/jigsaw-slitherlink/109.png';
import image110 from 'assets/puzzles/jigsaw-slitherlink/110.png';
import image111 from 'assets/puzzles/jigsaw-slitherlink/111.png';
import image112 from 'assets/puzzles/jigsaw-slitherlink/112.png';
import image113 from 'assets/puzzles/jigsaw-slitherlink/113.png';
import image114 from 'assets/puzzles/jigsaw-slitherlink/114.png';
import image115 from 'assets/puzzles/jigsaw-slitherlink/115.png';
import image116 from 'assets/puzzles/jigsaw-slitherlink/116.png';
import image117 from 'assets/puzzles/jigsaw-slitherlink/117.png';
import image118 from 'assets/puzzles/jigsaw-slitherlink/118.png';
import image119 from 'assets/puzzles/jigsaw-slitherlink/119.png';
import image120 from 'assets/puzzles/jigsaw-slitherlink/120.png';
import image121 from 'assets/puzzles/jigsaw-slitherlink/121.png';
import image122 from 'assets/puzzles/jigsaw-slitherlink/122.png';
import image123 from 'assets/puzzles/jigsaw-slitherlink/123.png';
import image124 from 'assets/puzzles/jigsaw-slitherlink/124.png';
import image125 from 'assets/puzzles/jigsaw-slitherlink/125.png';
import image126 from 'assets/puzzles/jigsaw-slitherlink/126.png';
import image127 from 'assets/puzzles/jigsaw-slitherlink/127.png';
import image128 from 'assets/puzzles/jigsaw-slitherlink/128.png';
import image129 from 'assets/puzzles/jigsaw-slitherlink/129.png';
import image130 from 'assets/puzzles/jigsaw-slitherlink/130.png';
import image131 from 'assets/puzzles/jigsaw-slitherlink/131.png';
import image132 from 'assets/puzzles/jigsaw-slitherlink/132.png';
import image133 from 'assets/puzzles/jigsaw-slitherlink/133.png';
import image134 from 'assets/puzzles/jigsaw-slitherlink/134.png';
import image135 from 'assets/puzzles/jigsaw-slitherlink/135.png';
import image136 from 'assets/puzzles/jigsaw-slitherlink/136.png';
import image137 from 'assets/puzzles/jigsaw-slitherlink/137.png';
import image138 from 'assets/puzzles/jigsaw-slitherlink/138.png';
import image139 from 'assets/puzzles/jigsaw-slitherlink/139.png';
import image140 from 'assets/puzzles/jigsaw-slitherlink/140.png';
import zipFile from 'assets/puzzles/jigsaw-slitherlink/jigsaw-slitherlink.zip';

const SLUG = 'jigsaw-slitherlink';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <p>
          <SheetableImage alt="jigsaw slitherlink grid" src={image0} title="" />
        </p>
        <h3 className="text-center font-mono">X.XX</h3>
        <InfoIcon>
          Click <a href={zipFile}>here</a> to download a zip file containing all
          the full-size pieces. No pieces are rotated.
        </InfoIcon>
        <div className="flex flex-wrap justify-center">
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image1}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image2}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image3}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image4}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image5}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image6}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image7}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image8}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image9}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image10}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image11}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image12}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image13}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image14}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image15}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image16}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image17}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image18}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image19}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image20}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image21}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image22}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image23}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image24}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image25}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image26}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image27}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image28}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image29}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image30}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image31}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image32}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image33}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image34}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image35}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image36}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image37}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image38}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image39}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image40}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image41}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image42}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image43}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image44}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image45}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image46}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image47}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image48}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image49}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image50}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image51}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image52}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image53}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image54}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image55}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image56}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image57}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image58}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image59}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image60}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image61}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image62}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image63}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image64}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image65}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image66}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image67}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image68}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image69}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image70}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image71}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image72}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image73}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image74}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image75}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image76}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image77}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image78}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image79}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image80}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image81}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image82}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image83}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image84}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image85}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image86}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image87}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image88}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image89}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image90}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image91}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image92}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image93}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image94}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image95}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image96}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image97}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image98}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image99}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image100}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image101}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image102}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image103}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image104}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image105}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image106}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image107}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image108}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image109}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image110}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image111}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image112}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image113}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image114}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image115}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image116}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image117}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image118}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image119}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image120}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image121}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image122}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image123}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image124}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image125}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image126}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image127}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image128}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image129}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image130}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image131}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image132}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image133}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image134}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image135}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image136}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image137}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image138}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image139}
            title=""
          />
          <SheetableImage
            className="object-contain max-w-[20%]"
            alt="jigsaw slitherlink piece"
            src={image140}
            title=""
          />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
