import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/1.png';

const TrgbB: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`2 leads to 11.
4 leads to 18 and 24.
7 leads to 4.
11 leads to 7.
16 leads to 4.
18 leads to 10.
24 leads to 2.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>2 leads to 11.</li>
        <li>4 leads to 18 and 24.</li>
        <li>7 leads to 4.</li>
        <li>11 leads to 7.</li>
        <li>16 leads to 4.</li>
        <li>18 leads to 10.</li>
        <li>24 leads to 2.</li>
      </ul>
    </>
  );
};

export default TrgbB;
