//import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import SheetableImage from 'components/sheetable_image';

import adizzytop from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/adizzytop.webp';
import asailboat from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/asailboat.webp';
import bullseye from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/bullseye.svg';
import emucowboy from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/emucowboy.webp';
import moonracer from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/moonracer.webp';
import nicetiger from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/nicetiger.webp';
import piggybank from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/piggybank.webp';
import pinktruck from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/pinktruck.webp';
import rockhorse from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/rockhorse.webp';
import squirtgun from 'assets/puzzles/isle-of-misfit-puzzles/misfittoys/squirtgun.webp';

const adt = <SheetableImage alt="" src={adizzytop} title="" />;
const asb = <SheetableImage alt="" src={asailboat} title="" />;
const ec = <SheetableImage alt="" src={emucowboy} title="" />;
const mr = <SheetableImage alt="" src={moonracer} title="" />;
const nt = <SheetableImage alt="" src={nicetiger} title="" />;
const pb = <SheetableImage alt="" src={piggybank} title="" />;
const pt = <SheetableImage alt="" src={pinktruck} title="" />;
const rh = <SheetableImage alt="" src={rockhorse} title="" />;
const sg = <SheetableImage alt="" src={squirtgun} title="" />;

const misfittoys = (
  <div>
    <h2 className="text-center pt-3">Island of Misfit Toys</h2>
    <FlavorText>
      Santa has lost his glasses again, so he misread his list and has renamed
      these toys. He dropped them onto the only island he can see, and seems to
      have terrible aim!
    </FlavorText>
    <div className="bullseye bg-[image:var(--image-url)] bg-contain">
      <table className="border-collapsed table-layout-fixed" width="100%">
        <tbody>
          <tr>
            <td className="border-2 border-black bg-white">{mr}</td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{sg}</td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{nt}</td>
            <td className="border-2 border-black bg-white">{rh}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
          </tr>
          <tr>
            <td className="border-2 border-black bg-white">{ec}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{sg}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{nt}</td>
            <td className="border-0 border-black"></td>
          </tr>
          <tr>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{asb}</td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{adt}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{mr}</td>
          </tr>
          <tr>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{adt}</td>
            <td className="border-2 border-black bg-white">{ec}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{rh}</td>
            <td className="border-2 border-black bg-white">{nt}</td>
          </tr>
          <tr>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{rh}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{pt}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
          </tr>
          <tr>
            <td className="border-2 border-black bg-white">{nt}</td>
            <td className="border-2 border-black bg-white">{mr}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{ec}</td>
            <td className="border-2 border-black bg-white">{pb}</td>
            <td className="border-0 border-black"></td>
          </tr>
          <tr>
            <td className="border-2 border-black bg-white">{pt}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{pb}</td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{ec}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{rh}</td>
          </tr>
          <tr>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{mr}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{sg}</td>
          </tr>
          <tr>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{adt}</td>
            <td className="border-2 border-black bg-white">{sg}</td>
            <td className="border-0 border-black"></td>
            <td className="border-2 border-black bg-white">{pb}</td>
            <td className="border-0 border-black"></td>
            <td className="border-0 border-black"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <style jsx global>{`
      .bullseye {
        --image-url: url(${bullseye});
      }
    `}</style>
    <table
      className="align-middle border-separate table-layout-fixed text-center"
      width="50%"
    >
      <tbody>
        <tr>
          <td className="border-4 border-black">{adt}</td>
          <td className="align-middle pl-4">A DIZZY TOP</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{asb}</td>
          <td className="align-middle pl-4">A SAIL BOAT</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{ec}</td>
          <td className="align-middle pl-4">EMU COWBOY</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{mr}</td>
          <td className="align-middle pl-4">MOONRACER</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{nt}</td>
          <td className="align-middle pl-4">NICE TIGER</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{pb}</td>
          <td className="align-middle pl-4">PIGGY BANK</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{pt}</td>
          <td className="align-middle pl-4">PINK TRUCK</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{rh}</td>
          <td className="align-middle pl-4">ROCK HORSE</td>
        </tr>
        <tr>
          <td className="border-4 border-black">{sg}</td>
          <td className="align-middle pl-4">SQUIRT GUN</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default misfittoys;
