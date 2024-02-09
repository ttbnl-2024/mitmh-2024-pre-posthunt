import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/transformations/0.png';
import bear from 'assets/puzzles/transformations/bear.png';
import dolphin from 'assets/puzzles/transformations/dolphins.png';
import flower from 'assets/puzzles/transformations/flower.png';
import laurel from 'assets/puzzles/transformations/laurel.png';
import mint from 'assets/puzzles/transformations/mint.png';
import swan from 'assets/puzzles/transformations/swan.png';

const SLUG = 'transformations';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <ul className="break-words">
          <li>AEHASUSEAAAEDISGUISAOTAEBAOINCOGNITANOASHIASTRAVEL</li>
          <li>AGEXCEEDONBEAUTONMAGSHEDESONTURGSDOWGHERAFFECTON</li>
          <li>BERBHOOTSFBWOBBEOPLERBITHUBISFBOWJBNDQBRROWSF</li>
          <li>
            DISGUISEDHESLTWITHTHEDEVOTTANDWHENHERSISTERHTEVENTUATLEARNSOFITSHEISEXPET
          </li>
          <li>DUGHTERLIVESAINHERMORSREGIAONDFLLSAINLOVEAWITHAOVERLORDAOFLD</li>
          <li>EERAKSEIRYSETRUCTIONOPNEHRATH</li>
          <li>FOKHILDOOTIONTHXYTADPIMYONHIFANWASLUAGHILSUYFRING</li>
          <li>HDRNSIDOAFROCIOUSBASDADPRSUESDEM</li>
          <li>HEASKBIIFHEMOUBIDBORBIOWHISFATBIERSEXMBIPTIONALVEHBIMLE</li>
          <li>
            HECUREMRARISECURENATOHRECUREWMONACUREFATRECURESTELANIGCUREHRECUREWAYACURETOCUREHSICUREDMOANICURE
          </li>
          <li>HEMAUNDSTHELASSAFHISFALLEDLAVENBYTHEBADKAFANIVEN</li>
          <li>HEPRWMPTYFOSINWVEWITHTHEBEOUTYWFWHOTHEISWWKINGOT</li>
          <li>HEPULSUESTHETALGETOFHISDESILESARDEVERTUALLYFIRDSHEL</li>
          <li>
            INRLIATIONHEGIVESHIMADGETOCOOLOTTATATRESHDLESSPOOLOTWATERTHECOLOROTSAPRETOTAKEARESTETROMATANGHUNT
          </li>
          <li>
            LUETOTOKIGFUATHISARCHERYTROWESSHEOFFELSALIFFERETARCHERWHOLECILESTOTLOTHISTAYBACK
          </li>
          <li>NHENEEYINAULYSUACHESREREHESUPEALSOORERRATHERROREUUISTANCE</li>
          <li>
            NINTHILSEKIRTSMIHNISNACMIHOTTEMMNLPSDRAWOTEHTDNNORNIDNALNIAREVIR
          </li>
          <li>
            NSWVEROLPHFRIGHTENSDTHEOLPHJUMPTOGETAWAOLPHFROM THEPANSEMONSUM
          </li>
          <li>
            OHETJILTOEDLOOTERSOYTSOHETISMORTEBEATUTIOULONDTHEWOLTLRETTORNTOOERT
          </li>
          <li>RHEBULSESGIMAEFOLEFLADUALLYOININGZWAYELOMCESPAIL</li>
          <li>RPOSCNTONUECMONGMYSTREOUSLYNTUEDBTHDOSNTSCEPE</li>
          <li>SEAFRSEIZHESEMINGLYAFLUENMANFORRANSOMANDAKEHIMABORD</li>
          <li>SEHEGEIVESBEIRRHREOAENIENFANRWEHOGEROWSUEPREOAELMOSRKEILLHEER</li>
          <li>TGOOVERCOGFDEENTHEDRVEESTGESPEGAELCHAGOETAGDLOGESCONGROL</li>
          <li>THAPRINBESABOMMITATABEINAFOREVEABHASTA</li>
          <li>THMNUSAVENGEFKLULBEINONGDECIDIJESTOPUNINOSHHMNIM</li>
          <li>TLINGCEPTAIINGIKNOREINGTLINGOHDITINGARINGSITINGSEIINGARYWAING</li>
          <li>
            TMOTOFTWIFEINTERPRETTDECLIRITISIDISTISTINSULTINDFLITTHERINTTEIRTWITHERFEET
          </li>
          <li>TOVERIFOHIRPAREPTAGEHEJORRPEOSFARAWROTOAGRRPDPARACEIPTHREART</li>
          <li>UERABLEFLOOBFLAIERIFLHEPIERESAWAYFROMHEARFLACHE</li>
          <li>VYINEGROWRPYIDLYNDTHEWYINDFYILTOMOVETHEHYIP</li>
          <li>WHNLETNEMNNFENLSSTRNNGLYINFANNATEDSNEDNNSNNT</li>
        </ul>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image blanks are available in copy-to-clipboard.
        </InfoIcon>
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image0} title="" />
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          <IndexedBlank label="7" idxs={[5]} />
          <IndexedBlank label="8" idxs={[1]} />
          <IndexedBlank label="6" idxs={[5]} />
          <IndexedBlank label="5" idxs={[5]} />
          <IndexedBlank label="7" idxs={[2]} />
          <IndexedBlank label="6" idxs={[2]} />
          <IndexedBlank label="5" idxs={[2]} />
          <SheetableImage alt="" src={dolphin} title="" />
          <br />
          <br />
          <br />
          <br />
          <IndexedBlank label="6" idxs={[1]} />
          <IndexedBlank label="4" idxs={[2]} />
          <IndexedBlank label="8" idxs={[8]} />
          <IndexedBlank label="9" idxs={[8]} />
          <SheetableImage alt="" src={mint} title="" />
          <br />
          <br />
          <br />
          <br />
          <IndexedBlank label="8" idxs={[7]} />
          <IndexedBlank label="8" idxs={[8]} />
          <IndexedBlank label="3" idxs={[3]} />
          <SheetableImage alt="" src={bear} title="" />
          <br />
          <br />
          <br />
          <br />
          <IndexedBlank label="6" idxs={[1]} />
          <IndexedBlank label="6" idxs={[2]} />
          <IndexedBlank label="7" idxs={[1]} />
          <IndexedBlank label="7" idxs={[3]} />
          <IndexedBlank label="6" idxs={[5]} />
          <IndexedBlank label="5" idxs={[2]} />
          <IndexedBlank label="5" idxs={[3]} />
          <SheetableImage alt="" src={swan} title="" />
          <br />
          <br />
          <IndexedBlank label="9" idxs={[2]} />
          <IndexedBlank label="6" idxs={[1]} />
          <IndexedBlank label="6" idxs={[2]} />
          <IndexedBlank label="8" idxs={[6]} />
          <IndexedBlank label="5" idxs={[1]} />
          <IndexedBlank label="4" idxs={[1]} />
          <SheetableImage alt="" src={flower} title="" />
          <br />
          <br />
          <br />
          <br />
          <IndexedBlank label="6" idxs={[2]} />
          <IndexedBlank label="5" idxs={[3]} />
          <IndexedBlank label="6" idxs={[4]} />
          <IndexedBlank label="6" idxs={[3]} />
          <IndexedBlank label="6" idxs={[2]} />
          <SheetableImage alt="" src={laurel} title="" />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
