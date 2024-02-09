import { FC } from 'react';

import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/badges/0.png';
import image1 from 'assets/puzzles/badges/1.png';
import image2 from 'assets/puzzles/badges/2.png';
import image3 from 'assets/puzzles/badges/3.png';
import image4 from 'assets/puzzles/badges/4.png';
import image5 from 'assets/puzzles/badges/5.png';
import image6 from 'assets/puzzles/badges/6.png';
import image7 from 'assets/puzzles/badges/7.png';
import image8 from 'assets/puzzles/badges/8.png';
import image9 from 'assets/puzzles/badges/9.png';
import image10 from 'assets/puzzles/badges/10.png';
import image11 from 'assets/puzzles/badges/11.png';
import image12 from 'assets/puzzles/badges/12.png';
import image13 from 'assets/puzzles/badges/13.png';
import image14 from 'assets/puzzles/badges/14.png';
import image15 from 'assets/puzzles/badges/15.png';

const BadgesVirtual: FC = () => {
  return (
    <>
      <p>
        As part of MITMH rules, all participants are required to wear badges
        while on campus. Here are the badges that your team (would have)
        received.
      </p>
      <p>Ceres (Front)</p>
      <p>
        <SheetableImage alt="" src={image0} title="" />
      </p>
      <hr className="my-5" />
      <p>Ceres (Back)</p>
      <p>
        <SheetableImage alt="" src={image1} title="" />
      </p>
      <hr className="my-5" />
      <p>Eris (Front)</p>
      <p>
        <SheetableImage alt="" src={image2} title="" />
      </p>
      <hr className="my-5" />
      <p>Eris (Back)</p>
      <p>
        <SheetableImage alt="" src={image3} title="" />
      </p>
      <hr className="my-5" />
      <p>Gonggong (Front)</p>
      <p>
        <SheetableImage alt="" src={image4} title="" />
      </p>
      <hr className="my-5" />
      <p>Gonggong (Back)</p>
      <p>
        <SheetableImage alt="" src={image5} title="" />
      </p>
      <hr className="my-5" />
      <p>Haumea (Front)</p>
      <p>
        <SheetableImage alt="" src={image6} title="" />
      </p>
      <hr className="my-5" />
      <p>Haumea (Back)</p>
      <p>
        <SheetableImage alt="" src={image7} title="" />
      </p>
      <hr className="my-5" />
      <p>Makemake (Front)</p>
      <p>
        <SheetableImage alt="" src={image8} title="" />
      </p>
      <hr className="my-5" />
      <p>MakeMake (Back)</p>
      <p>
        <SheetableImage alt="" src={image9} title="" />
      </p>
      <hr className="my-5" />
      <p>Orcus (Front)</p>
      <p>
        <SheetableImage alt="" src={image10} title="" />
      </p>
      <p>Orcus (Back)</p>
      <p>
        <SheetableImage alt="" src={image11} title="" />
      </p>
      <hr className="my-5" />
      <p>Quaoar (Front)</p>
      <p>
        <SheetableImage alt="" src={image12} title="" />
      </p>
      <hr className="my-5" />
      <p>Quaoar (Back)</p>
      <p>
        <SheetableImage alt="" src={image13} title="" />
      </p>
      <hr className="my-5" />
      <p>Sedna (Front)</p>
      <p>
        <SheetableImage alt="" src={image14} title="" />
      </p>
      <p>Sedna (Back)</p>
      <p>
        <hr className="my-5" />
        <SheetableImage alt="" src={image15} title="" />
      </p>
    </>
  );
};

export default BadgesVirtual;
