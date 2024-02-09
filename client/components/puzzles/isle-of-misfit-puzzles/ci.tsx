import cx from 'classnames';
import React from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import SheetableImage from 'components/sheetable_image';

import ci_png from 'assets/puzzles/isle-of-misfit-puzzles/ci.png';

const ci = (
  <div className="pt-4">
    <SheetableImage src={ci_png} width="100%" className="mx-auto" />
    <h1 className={cx(HIDDEN_CLASS)}>Cr🚫🚫🚫🚫gra🚫 I🚫land</h1>
    <i className={cx(HIDDEN_CLASS)}>
      On this island, using more than ten of anything is strictly prohibited.
    </i>
  </div>
);

export default ci;
