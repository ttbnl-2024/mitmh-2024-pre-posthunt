import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/0.png';

const TrgbA: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`1 leads to 4.
2 leads to 14.
4 leads to 21 and 22.
9 leads to 2.
10 leads to 14.
11 leads to 10.
14 leads to 1, 10, and itself.
21 leads to 11.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>1 leads to 4.</li>
        <li>2 leads to 14.</li>
        <li>4 leads to 21 and 22.</li>
        <li>9 leads to 2.</li>
        <li>10 leads to 14.</li>
        <li>11 leads to 10.</li>
        <li>14 leads to 1, 10, and itself.</li>
        <li>21 leads to 11.</li>
      </ul>
    </>
  );
};

export default TrgbA;
