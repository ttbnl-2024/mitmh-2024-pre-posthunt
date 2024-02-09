import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/5.png';

const TrgbB: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`2 leads to 5, 11, and 24.
4 leads to 11.
5 leads to itself.
7 leads to 23.
11 leads to 18.
12 leads to 4.
13 leads to 2.
14 leads to 2.
18 leads to 14.
23 leads to 2.
24 leads to 7.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>2 leads to 5, 11, and 24.</li>
        <li>4 leads to 11.</li>
        <li>5 leads to itself.</li>
        <li>7 leads to 23.</li>
        <li>11 leads to 18.</li>
        <li>12 leads to 4.</li>
        <li>13 leads to 2.</li>
        <li>14 leads to 2.</li>
        <li>18 leads to 14.</li>
        <li>23 leads to 2.</li>
        <li>24 leads to 7.</li>
      </ul>
    </>
  );
};

export default TrgbB;
