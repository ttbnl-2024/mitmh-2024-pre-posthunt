import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/3.png';

const TrgbD: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`3 leads to 10.
4 leads to 7, 23, and 24.
7 leads to 4.
10 leads to 4.
14 leads to 3.
17 leads to 25.
18 leads to 17.
23 leads to 10.
25 leads to 4.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>3 leads to 10.</li>
        <li>4 leads to 7, 23, and 24.</li>
        <li>7 leads to 4.</li>
        <li>10 leads to 4.</li>
        <li>14 leads to 3.</li>
        <li>17 leads to 25.</li>
        <li>18 leads to 17.</li>
        <li>23 leads to 10.</li>
        <li>25 leads to 4.</li>
      </ul>
    </>
  );
};

export default TrgbD;
