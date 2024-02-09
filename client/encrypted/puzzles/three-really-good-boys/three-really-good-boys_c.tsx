import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/2.png';

const TrgbC: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`1 leads to itself, 11 and 20.
4 leads to 18 and 25.
10 leads to 18.
11 leads to 4 and 10.
18 leads to 4 and itself.
20 leads to 1.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>1 leads to itself, 11 and 20.</li>
        <li>4 leads to 18 and 25.</li>
        <li>10 leads to 18.</li>
        <li>11 leads to 4 and 10.</li>
        <li>18 leads to 4 and itself.</li>
        <li>20 leads to 1.</li>
      </ul>
    </>
  );
};

export default TrgbC;
