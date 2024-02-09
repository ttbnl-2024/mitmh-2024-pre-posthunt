import { FC } from 'react';

import SheetableImage from 'components/sheetable_image';

import imageA from 'assets/puzzles/appease-the-minotaur/4.png';
import imageB from 'assets/puzzles/appease-the-minotaur/5.png';

const AppeaseMinotaur1: FC<{}> = () => {
  return (
    <>
      <SheetableImage src={imageA} className="mx-auto" />
      <SheetableImage src={imageB} className="mx-auto" />
    </>
  );
};

export default AppeaseMinotaur1;
