//import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import kallax1 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image1.png';
import kallax2 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image2.png';
import kallax3 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image3.png';
import kallax4 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image4.png';
import kallax5 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image5.png';
import kallax6 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image6.png';
import kallax7 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image7.png';
import kallax8 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image8.png';
import kallax9 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image9.png';
import kallax10 from 'assets/puzzles/isle-of-misfit-puzzles/kallax/image10.png';

const kallax = (
  <div>
    <h2 className="text-center pt-3">Kallax Island</h2>
    <FlavorText>
      Oh no! I have obtained new games and there's no space for me to fit them
      onto my Kallax, or is there?
    </FlavorText>
    <table className="border-collapse table-layout-fixed" width="100%">
      <tbody className="text-xs text-center">
        <tr>
          <td className="border-l-4 border-t-4 border-r-4 border-black h-12">
            Avalon: Big Box
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Ark Nova
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Kingdom Death: Monster
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Dune
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Anachrony</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Maracaibo</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Istanbul
          </td>
          <td className="border-r-4 border-black h-12">Near and Far</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Food Chain Magnate
          </td>
          <td className="border-r-4 border-black h-12">Gloomhaven</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            The Resistance
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Star Wars: Rebellion
          </td>
          <td className="border-r-4 border-black h-12">Stone Age</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Spirit Island
          </td>
          <td className="border-r-4 border-black h-12">Inis</td>
        </tr>
        <tr>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Castles of Burgundy
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Insider
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Everdell</td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Arkham Horror
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Nidavellir
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Pax Pamir</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Lords of Waterdeep
          </td>
          <td className="border-r-4 border-black h-12">Lisboa</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Terraforming Mars
          </td>
          <td className="border-r-4 border-black h-12">Ra</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Terra Mystica
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Werewolf
          </td>
          <td className="border-r-4 border-black h-12">Nemo's War</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Viticulture
          </td>
          <td className="border-r-4 border-black h-12">Through the Ages</td>
        </tr>
        <tr>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Eclipse
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            El Grande
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Love Letter
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Android: Netrunner
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Eldritch Horror
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Isle of Sky
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Keyflower
          </td>
          <td className="border-r-4 border-black h-12">Sagrada</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Lost Ruins of Arnak
          </td>
          <td className="border-r-4 border-black h-12">Le Havre</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Suburbia</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">Root</td>
          <td className="border-r-4 border-black h-12"># Rooms and a Boom</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">On Mars</td>
          <td className="border-r-4 border-black h-12">Robinson Crusoe</td>
        </tr>
        <tr>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Concordia
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            A Feast for Odin
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Mage Knight
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Puerto Rico
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Evolution</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Earth</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Indonesia
          </td>
          <td className="border-r-4 border-black h-12">Splendor</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Scape Goat
          </td>
          <td className="border-r-4 border-black h-12">Obsession</td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">Tichu</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Sleeping Gods
          </td>
          <td className="border-r-4 border-black h-12">Underwater Cities</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Werewords
          </td>
          <td className="border-r-4 border-black h-12">Orléans</td>
        </tr>
        <tr>
          <td className="border-t-4 border-l-4 border-r-4 border-black h-12">
            Pandemic Legacy
          </td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Agricola
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">Azul</td>
          <td className="border-t-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Kingdom Builder
          </td>
          <td className="border-t-4 border-r-4 border-black h-12">
            Blood on the Clocktower
          </td>
        </tr>
        <tr>
          <td className="border-l-4 border-r-4 border-black h-12">
            Raiders of the North Sea
          </td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">
            Marvel Champions
          </td>
          <td className="border-r-4 border-black h-12">Kingdomino</td>
          <td className="border-r-4 border-black h-12 bg-[#d9d9d9]">Nemesis</td>
          <td className="border-r-4 border-black h-12">Coup</td>
        </tr>
        <tr>
          <td className="border-b-4 border-l-4 border-r-4 border-black h-12">
            Yedo
          </td>
          <td className="border-b-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Twilight Struggle
          </td>
          <td className="border-b-4 border-r-4 border-black h-12">
            Race for the Galaxy
          </td>
          <td className="border-b-4 border-r-4 border-black h-12 bg-[#d9d9d9]">
            Notre Dame
          </td>
          <td className="border-b-4 border-r-4 border-black h-12">
            Twilight Imperium
          </td>
        </tr>
      </tbody>
    </table>
    <div className="space-y-2 py-4">
      <SheetableImage alt="" src={kallax1} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax2} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax3} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax4} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax5} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax6} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax7} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax8} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax9} title="" className="mx-auto" />
      <SheetableImage alt="" src={kallax10} title="" className="mx-auto" />
    </div>
  </div>
);

export default kallax;
