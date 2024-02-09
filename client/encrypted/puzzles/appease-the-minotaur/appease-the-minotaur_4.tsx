import { FC } from 'react';

import SheetableImage from 'components/sheetable_image';

import imageA from 'assets/puzzles/appease-the-minotaur/10.png';
import imageB from 'assets/puzzles/appease-the-minotaur/11.png';

const AppeaseMinotaur4: FC<{}> = () => {
  return (
    <>
      <SheetableImage src={imageA} className="mx-auto" />
      <SheetableImage src={imageB} className="mx-auto" />
    </>
  );
};

export default AppeaseMinotaur4;
