import cx from 'classnames';
import React, {
  FC, //useContext,
  //useEffect,
  useRef, //useRouter,
  useState,
} from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import ci from 'components/puzzles/isle-of-misfit-puzzles/ci';
import colorful from 'components/puzzles/isle-of-misfit-puzzles/colorful';
import esm from 'components/puzzles/isle-of-misfit-puzzles/esm';
import kallax from 'components/puzzles/isle-of-misfit-puzzles/kallax';
import kitchen from 'components/puzzles/isle-of-misfit-puzzles/kitchen';
import misfittoys from 'components/puzzles/isle-of-misfit-puzzles/misfittoys';
import SheetableImage from 'components/sheetable_image';

import canyon_image from 'assets/puzzles/isle-of-misfit-puzzles/canyon.png';
import gentle_image from 'assets/puzzles/isle-of-misfit-puzzles/gentle.png';
//import WebsocketNotice from 'components/websocket_notice';
import islands_image from 'assets/puzzles/isle-of-misfit-puzzles/islands.png';
import tale_image from 'assets/puzzles/isle-of-misfit-puzzles/tale.png';
import tim_image from 'assets/puzzles/isle-of-misfit-puzzles/tim.png';

const SLUG = 'isle-of-misfit-puzzles';
// const router = useRouter();

// useEffect(() => {
//   if (secondsToWait > 0) {
//     const timer = getCountdown(
//       secondsToWait,
//       // reset on finish
//       () => {
//         setSecondsToWait(0);
//       }
//     );
//     const error = (
//       <>
//         <span>Your next guess will be available in:</span>{' '}
//         <strong>{timer}</strong>
//       </>
//     );
//     setTimeoutError(error);
//   } else {
//     setTimeoutError('');
//   }
// }, [secondsToWait]);

// const { sendJsonMessage, readyState } = useEventWebSocket({
//   onJson: ({ data }) => {
//     const resp = data as TempNamePrivateData;
//     if (resp.secondsToWait) {
//       setSecondsToWait(resp.secondsToWait);
//     }
//     if (resp.part2) {
//       // addDecryptionKeys(resp);
//       setPart2Unlocked(resp.part2);
//     }
//     if (resp.correctAnswers) {
//       setCorrectAnswers(correctAnswers);
//     }
//   },
//   key: SLUG,
//   options: {
//     slug: SLUG,
//   },
// });

// const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
//   if (!loggedIn) {
//     return;
//   }

//   setLoading(true);
//   setMessage('Loading...');
//   const formData = new FormData(e.currentTarget);
//   e.preventDefault();

//   const response = await clientFetch<
//     DjangoFormResponse<
//       {},
//       { part2?: boolean; secondsToWait?: number; correctAnswers?: string[] }
//     >
//   >(router, `/puzzle/${SLUG}/guess`, {
//     method: 'POST',
//     body: formData,
//   });

//   if (response?.form_errors) {
//     setMessage('Error!');
//   }
//   if (response.data?.part2) {
//     setPart2Unlocked(true);
//     setSecondsToWait(0);
//     setMessage('Correct! Refresh the page to fix copy-to-clipboard.');
//     setCorrectAnswers(response.data?.correctAnswers || []);
//   } else {
//     setMessage('Incorrect!');
//     setSecondsToWait(response.data?.secondsToWait || 0);
//   }
//   setLoading(false);
// };

// let ExtractTable = useDynamicEncrypted<{}>(
//   `puzzles/${SLUG}/temporary-name_table`,
//   { enabled: part2Unlocked }
// );

const targets = [
  [39.25, 5.56, esm], // row 1 island 2  316x26
  [80.78, 17.95, misfittoys], // row 2 island 2 642x84
  [
    65.47,
    31.62,
    <div>
      <h2 className="text-center">Canyon</h2>
      <SheetableImage src={canyon_image} className="mx-auto" />
    </div>,
  ], // row 3 island 1 514x148
  [56.56, 43.01, kallax], // row 4 island 1 442x206
  [13.36, 56.69, kitchen], // row 5 island 2 105x270
  [
    73.37,
    56.69,
    <div>
      <h2 className="text-center">Tale</h2>
      <SheetableImage src={tale_image} className="mx-auto" />
    </div>,
  ], // row 5 island 3 576x269
  [
    28.53,
    70.58,
    <div>
      <h2 className="text-center">Tim</h2>
      <SheetableImage src={tim_image} className="mx-auto" />
    </div>,
  ], // row 6 island 2 224x335
  [
    47.89,
    70.58,
    <div>
      <h2 className="text-center">Gentle</h2>
      <SheetableImage src={gentle_image} className="mx-auto" />
    </div>,
  ], // row 6 island 3 376x335
  [2.54, 83.61, ci], // row 7 island 1 20x396
  [81.01, 83.61, colorful], // row 7 island 3  636x395
];

// Island Image is 785 x 468
// Mini island is 60x60

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const [activeIsland, setActiveIsland] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const miniPuzzle = useRef<HTMLDivElement>(null);

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText className={activeIsland >= 0 ? NO_COPY_CLASS : ''}>
          This puzzle population growth causes us to expand. How much space do
          we need anyways?
        </FlavorText>
        <p>
          Each island puzzle will provide a number and some words. Not all
          clickable islands are puzzles.
        </p>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Red outlines indicate clickable islands, and have no meaning
          otherwise.
        </InfoIcon>

        <InfoIcon>
          You can check answers to island puzzles in the main answer checker.
          Each island's number can also be checked by putting the numeral at the
          end of an alphabetical list of the island's answers. For example, an
          island with the answers RED and HERRING, and the number 2 would be
          checked as HERRING RED 2.
        </InfoIcon>

        <div className="island-map">
          {targets.map((target, i) => (
            <div
              key={`target-${i}`}
              className={cx(
                'mini-island',
                NO_COPY_CLASS,
                'border',
                'border-red-400'
              )}
              style={{
                left: `${target[0]}%`,
                top: `${target[1]}%`,
              }}
              onClick={() => {
                setActiveIsland(i);
                if (ref.current?.attributes.getNamedItem('data-copyjacked')) {
                  ref.current?.attributes.removeNamedItem('data-copyjacked');
                }
                setTimeout(function () {
                  miniPuzzle.current?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }}
            ></div>
          ))}
          <p>
            <SheetableImage
              alt="Islands"
              src={islands_image}
              className={cx({
                [`${NO_COPY_CLASS}`]: activeIsland >= 0,
              })}
            />
          </p>
        </div>

        <div className={cx({ [`${HIDDEN_CLASS}`]: activeIsland < 0 })}>
          <hr className={cx(NO_COPY_CLASS)} />
          <div ref={miniPuzzle} id="island-content" key={activeIsland}>
            {targets[activeIsland] && targets[activeIsland][2]}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .island-map {
          position: relative;
          width: fit-content;
        }

        .mini-island {
          position: absolute;
          width: 7.64%; // 60px / 785px
          height: 12.82%; // 60px / 468px
          cursor: pointer;
        }
      `}</style>
    </Puzzle>
  );
};
export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
