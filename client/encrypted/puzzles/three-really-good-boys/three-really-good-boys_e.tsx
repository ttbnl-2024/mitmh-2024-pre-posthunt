import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import Link from 'components/link';
import SheetableImage from 'components/sheetable_image';

import img from 'assets/puzzles/three-really-good-boys/4.png';

const TrgbB: FC<{}> = () => {
  return (
    <>
      <Link href={img} target="_blank">
        <SheetableImage
          src={img}
          className="max-w-md mx-auto"
          title={`1 leads to 2 and 20.
2 leads to 18 and 20.
11 leads to 1 and 10.
14 leads to 11.
17 leads to 23.
18 leads to 2 and 26.
20 leads to 11, 17, and 23.
23 leads to 14.
26 leads to 20.`}
        />
      </Link>
      <ul className={cx(HIDDEN_CLASS)}>
        <li>1 leads to 2 and 20.</li>
        <li>2 leads to 18 and 20.</li>
        <li>11 leads to 1 and 10.</li>
        <li>14 leads to 11.</li>
        <li>17 leads to 23.</li>
        <li>18 leads to 2 and 26.</li>
        <li>20 leads to 11, 17, and 23.</li>
        <li>23 leads to 14.</li>
        <li>26 leads to 20.</li>
      </ul>
    </>
  );
};

export default TrgbB;
