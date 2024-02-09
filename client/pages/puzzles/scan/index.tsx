import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

const SLUG = 'scan';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <div className="border border-black example-container">
          <SheetableImage
            draggable={false}
            className={cx(NO_COPY_CLASS, 'w-[2cm] absolute select-none')}
            src={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M 6 0 h4L0 10v-4z" fill="hsl(0, 70%, 60%)" /><text font-size="2" text-anchor="middle" font-weight="bold" transform="translate(4.5, 4.5) rotate(-45) scale(.9, 1)">EXAMPLE</text></svg>`}
          />
          <div className="flex flex-col md:flex-row mt-5 content-center justify-center">
            <div
              className={cx(
                NO_COPY_CLASS,
                'whitespace-pre font-mono mx-3 text-center'
              )}
            >
              {`
            111111100000101111111
            100000100011001000001
            101110101000101011101
            101110101011101011101
            101110100111001011101
            100000100011001000001
            111111101010101111111
            000000000001000000000
            000110110100100001100
            111011000111100010011
            100000110001011101111
            101111001100111110110
            100110111100001011101
            000000001101110000111
            111111101001111011100
            100000100110001011110
            101110101111011011111
            101110101000001010000
            101110100111010010111
            100000100111111001111
            111111100110010111101`
                .trim()
                .replace(/^ +\n?/gm, '')}
            </div>
            <p className={cx(HIDDEN_CLASS, 'font-mono')}>
              '111111100000101111111
              <br />
              '100000100011001000001
              <br />
              '101110101000101011101
              <br />
              '101110101011101011101
              <br />
              '101110100111001011101
              <br />
              '100000100011001000001
              <br />
              '111111101010101111111
              <br />
              '000000000001000000000
              <br />
              '000110110100100001100
              <br />
              '111011000111100010011
              <br />
              '100000110001011101111
              <br />
              '101111001100111110110
              <br />
              '100110111100001011101
              <br />
              '000000001101110000111
              <br />
              '111111101001111011100
              <br />
              '100000100110001011110
              <br />
              '101110101111011011111
              <br />
              '101110101000001010000
              <br />
              '101110100111010010111
              <br />
              '100000100111111001111
              <br />
              '111111100110010111101
              <br />
            </p>
            <div className="self-center text-2xl text-center">×</div>
            <div
              className={cx(
                NO_COPY_CLASS,
                'whitespace-pre font-mono mx-3 text-center'
              )}
            >
              {`
              111111101100001111111
              100000100001101000001
              101110100100001011101
              101110101001101011101
              101110101110101011101
              100000101101001000001
              111111101010101111111
              000000001001100000000
              100010111011011111001
              001010010000111101111
              010001100111001010010
              010111001001110110000
              111100100111011100101
              000000001010111101011
              111111101100010010010
              100000100100110000010
              101110101111001000100
              101110100100101101011
              101110100010000010100
              100000100000010100000
              111111101100011110101`
                .trim()
                .replace(/^ +\n?/gm, '')}
            </div>
            <p className={cx(HIDDEN_CLASS, 'font-mono')}>
              '111111101100001111111
              <br />
              '100000100001101000001
              <br />
              '101110100100001011101
              <br />
              '101110101001101011101
              <br />
              '101110101110101011101
              <br />
              '100000101101001000001
              <br />
              '111111101010101111111
              <br />
              '000000001001100000000
              <br />
              '100010111011011111001
              <br />
              '001010010000111101111
              <br />
              '010001100111001010010
              <br />
              '010111001001110110000
              <br />
              '111100100111011100101
              <br />
              '000000001010111101011
              <br />
              '111111101100010010010
              <br />
              '100000100100110000010
              <br />
              '101110101111001000100
              <br />
              '101110100100101101011
              <br />
              '101110100010000010100
              <br />
              '100000100000010100000
              <br />
              '111111101100011110101
              <br />
            </p>
          </div>
          <p className="text-6xl text-center">
            <span className={cx(HIDDEN_CLASS)}>'</span>=
          </p>
          <p className="break-words mx-4">
            12345676665443568023664308776779242653097978136876864329416030754422298212476260006549319431424429806802441981631447865571527677252198956410804385930242801339249172591991074605532986001603435985436131959685247038724095318421748143039576950641089402019396940469117669011391740329561166350061500776027169487099246834611457354893252421634726014007522711545854239543122023422298807988577955455998172504011316140929735762078659848032184471420195826968522343187877636005260911327980442607354051612888261234769578305503436026731076125634103437729150899816381908507400085260828101113628285326074657704594592638883142189448940869993874187538763018453674874392907818821143073742764662732882963492846389866537832170984492188551297422329937938730855297487858143163053427796371684687555255644560448480469189856325060119218100798691968584540103256482333213344755344331211243109886634545353331201
          </p>
        </div>
        <hr className="my-6" />
        <table className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td className="bg-black">&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p className="break-words mx-4">
          12345676777654669024555430887889143864289200136889097561625241844754620444586268124581630531510339735722847060730777196402765407475507303430523205058522998463957770523570371913661899445694855423637435787343505710856006828507894143727476615991533267316373208158561626506919117712937474306248363009275681066759498660214140808130073089511719116968581200863979339810084766718485182074672318977156726516958474307435158707122380770804584028652498474090112193675813338077663838307549682658440583346915319121432202273975120741520404189177221356221842974318409424771888059125270472608118240586530229636298513061721722926659474047367249232764867442253083808761561582884278939312220806202921369747971062509811701386863524575510286465692626920731888311670953767161968751742510154650834732209903015692514759396646556533801108291008970955622352583223111000011130990755779766775444323222222220011
        </p>
        <p className="break-words mx-4">
          12345676666654679024564320888134443742098990479887853243969244745433443878697038128582553639445365019112653282983768907571888510463619175442155327060532115123918295455212670406635804382268186932376883936447255764071067004278935490294989490274321315637935839677502002333655987824652630596332841035705684501615640576273908267104943789344953008288335815960514294475852737958255554055569107934488690309823068848196751518828807946576624718348599814828816829046921425854091129827262528115204126052944500410112831040985029394470866389794378314512633848654904203372444818100118164899912149083415049145553689530984782609553909858323438188207929610047257471870168435345118258397991563473571189509982123283313337881019201346246430423172646193621651204760010015175206104080064943372887281845459345006127176866742642545822030186078979784742547654675675642442642300107867745463533221211110100101
        </p>
        <p className="break-words mx-4">
          12345676788776890244665542110222476086420422469211408882848263946766832545674157817481331410332241826771536871751574567269826596441215874302399576016612717248340892813101609853640856186697363079684766107362868996919782417530463752348760818044500568974055878214460232879969745880893954451786088025266936711256831017017923930687420041696019317479054732609223468067654887645445713242853783233758487611554048356146741234416291680136622655648962808266052606162583322799252720072666951644573467699926511042581862177620259770974046225605734264397120029193090801262580116334801548117639493943235256375036993581519246004376788494330088611477144620882262842495647493580597813224577820263765500352623544539863317709518947925655793767771171933403903856098650334649826472335579722878496219299347702496194225980081072115260204740264614201097011818979486948666865754442422018968564624341322021001
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
