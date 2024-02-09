import { FC } from 'react';

import SheetableImage from 'components/sheetable_image';

import imageA from 'assets/puzzles/appease-the-minotaur/2.png';
import imageB from 'assets/puzzles/appease-the-minotaur/3.png';

const AppeaseMinotaur0: FC<{}> = () => {
  return (
    <>
      <SheetableImage src={imageA} className="mx-auto" />
      <SheetableImage src={imageB} className="mx-auto" />
    </>
  );
};

export default AppeaseMinotaur0;
