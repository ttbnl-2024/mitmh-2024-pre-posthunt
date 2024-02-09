import { FC } from 'react';

import SheetableImage from 'components/sheetable_image';

const Reflections: FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return <SheetableImage src={imgUrl} title="" className="mx-auto" />;
};

export default Reflections;
