import cx from 'classnames';
import React from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import SheetableImage from 'components/sheetable_image';

import esm_svg from 'assets/puzzles/isle-of-misfit-puzzles/esm.svg';

const esm = (
  <div>
    <h2 className="text-center pt-4">East Stony Mountain</h2>
    <FlavorText>
      The lava flow that's destroying part of this volcanic island is
      surprisingly loud
    </FlavorText>
    <InfoIcon>Image text available in copy-to-clipboard.</InfoIcon>
    <SheetableImage src={esm_svg} width="90%" />
    <table className={cx(HIDDEN_CLASS)}>
      <tbody>
        <tr>
          <td>It glistens</td>
          <td>_ _</td>
          <td>Chemical company</td>
        </tr>
        <tr>
          <td>Barnyard animal</td>
          <td>_ _ _</td>
          <td>Thy today</td>
        </tr>
        <tr>
          <td>Relation</td>
          <td>_ _ _</td>
          <td>Against</td>
        </tr>
        <tr>
          <td>Basic</td>
          <td>_ _ _ _ _</td>
          <td>Heroic Captain</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>It eases driving</td>
          <td>_ _ _</td>
          <td>Split</td>
        </tr>
        <tr>
          <td>It eases driving</td>
          <td>_ _ _ _</td>
          <td>Drive in the Hills</td>
        </tr>
        <tr>
          <td>Propulsion tool</td>
          <td>_ _</td>
          <td>Tolkien adversary</td>
        </tr>
        <tr>
          <td>Elder in Arabia</td>
          <td>_ _ _ _</td>
          <td>Young animal</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Young animal</td>
          <td>_ _ _</td>
          <td>It's often shaded</td>
        </tr>
        <tr>
          <td>Mammalian feature</td>
          <td>_ _ _</td>
          <td>Element</td>
        </tr>
        <tr>
          <td>In Elysium</td>
          <td>_ _ _ _</td>
          <td>Sticky substance</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default esm;
