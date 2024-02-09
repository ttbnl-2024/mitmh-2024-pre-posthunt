import cx from 'classnames';
import { EB_Garamond } from 'next/font/google';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import seal0 from 'assets/puzzles/itineratum-de-urbes-universum/seal-0.png';
import seal1 from 'assets/puzzles/itineratum-de-urbes-universum/seal-1.png';
import seal2 from 'assets/puzzles/itineratum-de-urbes-universum/seal-2.png';
import seal3 from 'assets/puzzles/itineratum-de-urbes-universum/seal-3.png';
import seal4 from 'assets/puzzles/itineratum-de-urbes-universum/seal-4.png';
import seal5 from 'assets/puzzles/itineratum-de-urbes-universum/seal-5.png';
import seal6 from 'assets/puzzles/itineratum-de-urbes-universum/seal-6.png';
import seal7 from 'assets/puzzles/itineratum-de-urbes-universum/seal-7.png';
import seal8 from 'assets/puzzles/itineratum-de-urbes-universum/seal-8.png';
import seal9 from 'assets/puzzles/itineratum-de-urbes-universum/seal-9.png';
import seal10 from 'assets/puzzles/itineratum-de-urbes-universum/seal-10.png';
import seal11 from 'assets/puzzles/itineratum-de-urbes-universum/seal-11.png';
import seal12 from 'assets/puzzles/itineratum-de-urbes-universum/seal-12.png';

const seals = [
  [seal0, 'FILIUS'],
  [seal1, 'VERBA IN LINGUA VULGARI'],
  [seal2, 'MAGUS DE REX ARTURUS'],
  [seal3, 'CUM UNA PERSONA EST VENERIUM CUPIUM A DUOBUS HOMINIBUS'],
  [seal4, 'CORNA'],
  [seal5, 'UNGUA'],
  [seal6, 'ASTERISCII'],
  [seal7, 'PIGMENTA'],
  [seal8, 'VENEREUM CUPIUM A PRAETERATIS'],
  [seal9, 'VERBA DICUNTA - NON CANUNTA - IN DRAMATE MUSICO'],
  [seal10, 'QUID TAURUS RUBER TIBI DAT'],
  [seal11, 'GLUTEUS MAXIMUS REVELARE'],
  [seal12, 'ULTIMAE VIAE FERREAE IN MONOPOLIUM'],
];

const SLUG = 'itineratum-de-urbes-universum';

const ebGaramond = EB_Garamond({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref} className="serif">
        <FlavorText>
          QUIS CURSUS LATINE EGET? HABEMUS GOOGLUS TRANSLATUS!
        </FlavorText>
        <ul className="list-none p-4 -indent-4">
          <li>Ante Funus Hiberniae Silva Urbes Universum</li>
          <li>Chirotheca ad Removendum Calidum Ollam ex Furnus</li>
          <li>Colorus Lutum Urbes Universum</li>
          <li>Dentifricium Urbes Universum</li>
          <li>Filius Rex Duo Milia Libras Urbes Universum</li>
          <li>Impulsu Medicamentorum Cuspis Urbes Universum</li>
          <li>Laesura Pulveris Quod Facit Lenis Unguibus Urbes Universum</li>
          <li>Parva Iuba Capillorum Urbes Universum</li>
          <li>Possiedo Urb Universum</li>
          <li>Pugnando Pugnus Urbes Universum</li>
          <li>Subula Profundi Urbes Universum</li>
          <li>Transire Flumen de Fumabat Porcus Urbes Universum</li>
          <li>
            Via Maior Quam Angiportum, et Minor Quam Alta Via Urbes Universum
          </li>
        </ul>

        <p className={cx('boxed', NO_COPY_CLASS)}>
          BONUM CERTAMEN CERTAXI CORI DEI DEO DEO DOCTRINA ET ET ET ET
          HUMANITATE IACI IN LUXX MAXINIUSI MENS MONSTRABO NIL NON NUMINE NUMINE
          PAX POSSIDEBIT PROIX PRUDENTIS RELIGIO SAPIVENTIA SAPIXIENTIAE
          SCIENTIAM SED SIBI SINEVI SIVUIS SPEVIRIAMUS SUBI TIBII VERITATII VIAM
          VIEIRIUDITIO VIGETI
        </p>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>BONUM</td>
              <td>CERTAMEN</td>
              <td>CERTAXI</td>
              <td>CORI</td>
              <td>DEI</td>
              <td>DEO</td>
              <td>DEO</td>
            </tr>
            <tr>
              <td>DOCTRINA</td>
              <td>ET</td>
              <td>ET</td>
              <td>ET</td>
              <td>ET</td>
              <td>HUMANITATE</td>
              <td>IACI</td>
            </tr>
            <tr>
              <td>IN</td>
              <td>LUXX</td>
              <td>MAXINIUSI</td>
              <td>MENS</td>
              <td>MONSTRABO</td>
              <td>NIL</td>
              <td>NON</td>
            </tr>
            <tr>
              <td>NUMINE</td>
              <td>NUMINE</td>
              <td>PAX</td>
              <td>POSSIDEBIT</td>
              <td>PROIX</td>
              <td>PRUDENTIS</td>
              <td>RELIGIO</td>
            </tr>
            <tr>
              <td>SAPIVENTIA</td>
              <td>SAPIXIENTIAE</td>
              <td>SCIENTIAM</td>
              <td>SED</td>
              <td>SIBI</td>
              <td>SINEVI</td>
              <td>SIVUIS</td>
            </tr>
            <tr>
              <td>SPEVIRIAMUS</td>
              <td>SUBI</td>
              <td>TIBII</td>
              <td>VERITATII</td>
              <td>VIAM</td>
              <td>VIEIRIUDITIO</td>
              <td>VIGETI</td>
            </tr>
          </tbody>
        </Table>

        <h2 className="text-center">
          <u>COMES</u>
        </h2>
        <p className={cx(HIDDEN_CLASS)}>
          See images for the shapes of the speech bubbles.
        </p>
        <div className="mx-auto w-full md:w-[450px]">
          {seals.map((seal, i) => (
            <span key={`seal-${i}`}>
              <SheetableImage
                key={`seal-${i}-image`}
                className="my-4"
                src={seal[0]}
                alt={`A seal with a speech bubble, saying "${seal[1]}". See image for the shape of the speech bubble.`}
              />
              <span key={`seal-${i}-desc`} className={cx(HIDDEN_CLASS)}>
                A seal with a speech bubble, saying {seal[1]}.
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .serif {
          font-family: ${ebGaramond.style.fontFamily}, serif;
          font-size: 13pt;
        }
        .boxed {
          border: 3px solid black;
          padding: 1em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
