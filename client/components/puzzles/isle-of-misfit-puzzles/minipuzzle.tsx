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

export interface MiniPuzzleData {
  name: string;
  numAnswers: number;
  answers: string[];
}

export interface MiniPuzzleDataProps {
  miniPuzzleData: MiniPuzzleData;
}

const MiniPuzzlePage: FC<MiniPuzzleDataProps> = ({ miniPuzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
      <h1>Kallax Island</h1>
      <FlavorText>
        Oh no! I have obtained new games and there's no space for me to fit them
        onto my Kallax, or is there?
      </FlavorText>
      <Table>
        <tbody>
          <tr>
            <td className="text-center">Avalon: Big Box</td>
            <td className="text-center bg-[#d9d9d9]">Ark Nova</td>
            <td className="text-center">Kingdom Death: Monster</td>
            <td className="text-center bg-[#d9d9d9]">Dune</td>
            <td className="text-center">Anachrony</td>
          </tr>
          <tr>
            <td className="text-center">Maracaibo</td>
            <td className="text-center bg-[#d9d9d9]">Istanbul</td>
            <td className="text-center">Near and Far</td>
            <td className="text-center bg-[#d9d9d9]">Food Chain Magnate</td>
            <td className="text-center">Gloomhaven</td>
          </tr>
          <tr>
            <td className="text-center">The Resistance</td>
            <td className="text-center bg-[#d9d9d9]">Star Wars: Rebellion</td>
            <td className="text-center">Stone Age</td>
            <td className="text-center bg-[#d9d9d9]">Spirit Island</td>
            <td className="text-center">Inis</td>
          </tr>
          <tr>
            <td className="text-center">Castles of Burgundy</td>
            <td className="text-center bg-[#d9d9d9]">Insider</td>
            <td className="text-center">Everdell</td>
            <td className="text-center bg-[#d9d9d9]">Arkham Horror</td>
            <td className="text-center">Nidavellir</td>
          </tr>
          <tr>
            <td className="text-center">Pax Pamir</td>
            <td className="text-center bg-[#d9d9d9]">Lords of Waterdeep</td>
            <td className="text-center">Lisboa</td>
            <td className="text-center bg-[#d9d9d9]">Terraforming Mars</td>
            <td className="text-center">Ra</td>
          </tr>
          <tr>
            <td className="text-center">Terra Mystica</td>
            <td className="text-center bg-[#d9d9d9]">Werewolf</td>
            <td className="text-center">Nemo's War</td>
            <td className="text-center bg-[#d9d9d9]">Viticulture</td>
            <td className="text-center">Through the Ages</td>
          </tr>
          <tr>
            <td className="text-center">Eclipse</td>
            <td className="text-center bg-[#d9d9d9]">El Grande</td>
            <td className="text-center">Love Letter</td>
            <td className="text-center bg-[#d9d9d9]">Android: Netrunner</td>
            <td className="text-center">Eldritch Horror</td>
          </tr>
          <tr>
            <td className="text-center">Isle of Sky</td>
            <td className="text-center bg-[#d9d9d9]">Keyflower</td>
            <td className="text-center">Sagrada</td>
            <td className="text-center bg-[#d9d9d9]">Lost Ruins of Arnak</td>
            <td className="text-center">Le Havre</td>
          </tr>
          <tr>
            <td className="text-center">Suburbia</td>
            <td className="text-center bg-[#d9d9d9]">Root</td>
            <td className="text-center text-center">Two Rooms and a Boom</td>
            <td className="text-center bg-[#d9d9d9]">On Mars</td>
            <td className="text-center">Robinson Crusoe</td>
          </tr>
          <tr>
            <td className="text-center">Concordia</td>
            <td className="text-center bg-[#d9d9d9]">A Feast for Odin</td>
            <td className="text-center">Mage Knight</td>
            <td className="text-center bg-[#d9d9d9]">Puerto Rico</td>
            <td className="text-center">Evolution</td>
          </tr>
          <tr>
            <td className="text-center">Earth</td>
            <td className="text-center bg-[#d9d9d9]">Indonesia</td>
            <td className="text-center">Splendor</td>
            <td className="text-center bg-[#d9d9d9]">Scape Goat</td>
            <td className="text-center">Obsession</td>
          </tr>
          <tr>
            <td className="text-center">Tichu</td>
            <td className="text-center bg-[#d9d9d9]">Sleeping Gods</td>
            <td className="text-center">Underwater Cities</td>
            <td className="text-center bg-[#d9d9d9]">Werewords</td>
            <td className="text-center">Orléans</td>
          </tr>
          <tr>
            <td className="text-center">Pandemic Legacy</td>
            <td className="text-center bg-[#d9d9d9]">Agricola</td>
            <td className="text-center">Azul</td>
            <td className="text-center bg-[#d9d9d9]">Kingdom Builder</td>
            <td className="text-center">Blood on the Clocktower</td>
          </tr>
          <tr>
            <td className="text-center">Raiders of the North Sea</td>
            <td className="text-center bg-[#d9d9d9]">Marvel Champions</td>
            <td className="text-center">Kingdomino</td>
            <td className="text-center bg-[#d9d9d9]">Nemesis</td>
            <td className="text-center">Coup</td>
          </tr>
          <tr>
            <td className="text-center">Yedo</td>
            <td className="text-center bg-[#d9d9d9]">Twilight Struggle</td>
            <td className="text-center">Race for the Galaxy</td>
            <td className="text-center bg-[#d9d9d9]">Notre Dame</td>
            <td className="text-center">Twilight Imperium</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <SheetableImage alt="" src={kallax1} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax2} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax3} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax4} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax5} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax6} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax7} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax8} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax9} title="" />
      </p>
      <p>
        <SheetableImage alt="" src={kallax10} title="" />
      </p>
    </div>
  );
};

export default MiniPuzzlePage;
