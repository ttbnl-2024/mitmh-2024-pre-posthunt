import cx from 'classnames';
import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useEventWebSocket } from 'utils/fetch';
import { useLocalStorage } from 'utils/storage';
import { useSessionUuid } from 'utils/uuid';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';
import WebsocketNotice from 'components/websocket_notice';

import cross from 'assets/puzzles/junky-logic/cross.png';
import tick from 'assets/puzzles/junky-logic/tick.png';

const SLUG = 'junky-logic';
const ROWS = 12;
const COLS = 15;

const GRID = [
  'GIPFRHNQSEJLDSV',
  'LAMVAUCIOTEBROS',
  'CZMIGWUTBREYAOF',
  'KNRKIXJADSCOEUM',
  'DOICTAESRFLXNGL',
  'CPGROLOXDMRTENY',
  'LTAEOZASZGRMUCF',
  'RLKZBVUYNAFOACE',
  'ITPKOYQRSANEBEO',
  'JSAKEDQULNQYRFI',
  'LGWPSEUOIZAENOC',
  'ELRGBNSVXMTCDUW',
];

type InputType = 'L/R buttons + CTRL' | 'One button' | '';
const MOUSE: InputType = 'L/R buttons + CTRL';
const TOUCH: InputType = 'One button';
type InputMode = 'Auto' | 'Shading' | 'Marking';

interface BoardState {
  shading: string;
  marking: string;
}

interface JunkyLogicState {
  boardState: BoardState;
  inputType: InputType;
  inputMode: InputMode;
}

interface JunkyLogicResponse {
  shading: string;
  error?: string;
  answer?: string;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const uuid = useSessionUuid();

  const shadingStorage = useLocalStorage<string>(
    `${SLUG}/shading`,
    '0'.repeat(ROWS * COLS)
  );
  const markingStorage = useLocalStorage<string>(
    `${SLUG}/marking`,
    '0'.repeat(ROWS * COLS)
  );
  const inputTypeStorage = useLocalStorage<InputType>(`${SLUG}/inputType`, '');
  const inputModeStorage = useLocalStorage<InputMode>(
    `${SLUG}/inputMode`,
    'Auto'
  );

  const [shading, setShading] = useState<string>('0'.repeat(ROWS * COLS));
  const [marking, setMarking] = useState<string>('0'.repeat(ROWS * COLS));
  const [answer, setAnswer] = useState<string>('0'.repeat(ROWS * COLS));
  const [inputType, setInputType] = useState<InputType>('');
  const [inputMode, setInputMode] = useState<InputMode>('Auto');

  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      const resp = data as JunkyLogicResponse;
      if (!resp.answer) {
        return;
      }
      // If we somehow managed to double-send, wait until we get the
      // response for our current grid
      if (resp.shading != shading.replaceAll('2', '0')) {
        return;
      }
      setAnswer(resp.answer);
    },
    key: SLUG,
    options: {
      uuid: uuid,
      slug: SLUG,
    },
  });

  useEffect(() => {
    setShading(shadingStorage.get());
    setMarking(markingStorage.get());
    setInputMode(inputModeStorage.get());
    sendJsonMessage({
      shading: shadingStorage.get().replaceAll('2', '0'),
    });

    let storedInputType = inputTypeStorage.get();
    if (!storedInputType) {
      storedInputType =
        'ontouchstart' in window || navigator.maxTouchPoints > 0
          ? TOUCH
          : MOUSE;
      inputTypeStorage.set(storedInputType);
    }
    setInputType(storedInputType);
  }, []);

  const onTableCellClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
    let cellIdx = Number.parseInt(
      e.currentTarget.getAttribute('data-cell-idx') || '0',
      10
    );
    e.preventDefault();

    let mode = inputMode;
    if (inputMode === 'Auto') {
      mode = e.ctrlKey ? 'Marking' : 'Shading';
    }

    if (mode === 'Shading') {
      let currShade = Number.parseInt(shading.at(cellIdx) || '0', 10);
      if (inputType === MOUSE) {
        if (currShade == 1) currShade = 0; // shaded -> unshaded
        else currShade = 1; // unshaded, highlight -> shaded
      } else {
        currShade = (currShade + 1) % 3; // shaded -> highlight -> unshaded
      }
      let newShading =
        shading.substring(0, cellIdx) +
        currShade +
        shading.substring(cellIdx + 1);
      setShading(newShading);
      shadingStorage.set(newShading);
      sendJsonMessage({
        shading: newShading.replaceAll('2', '0'),
      });
    } else if (mode == 'Marking') {
      let currMark = Number.parseInt(marking.at(cellIdx) || '0', 10);
      if (inputType === MOUSE) {
        if (currMark == 1) currMark = 0; // red -> none
        else currMark = 1; // green, none -> red
      } else {
        currMark = (currMark + 1) % 3; // none -> red -> green
      }
      let newMarking =
        marking.substring(0, cellIdx) +
        currMark +
        marking.substring(cellIdx + 1);
      setMarking(newMarking);
      markingStorage.set(newMarking);
    }
  };

  const onTableCellContext: MouseEventHandler<HTMLTableCellElement> = (e) => {
    let cellIdx = Number.parseInt(
      e.currentTarget.getAttribute('data-cell-idx') || '0',
      10
    );
    e.preventDefault();

    let mode = inputMode;
    if (inputMode === 'Auto') {
      mode = e.ctrlKey ? 'Marking' : 'Shading';
    }

    if (mode === 'Shading') {
      let currShade = Number.parseInt(shading.at(cellIdx) || '0', 10);
      if (inputType === MOUSE) {
        if (currShade == 2) currShade = 0; // highlighted -> unshaded
        else currShade = 2; // unshaded, shaded -> highlighted
      } // Don't process contexts for touch input
      let newShading =
        shading.substring(0, cellIdx) +
        currShade +
        shading.substring(cellIdx + 1);
      setShading(newShading);
      shadingStorage.set(newShading);
      sendJsonMessage({
        shading: newShading.replaceAll('2', '0'),
      });
    } else if (mode == 'Marking') {
      let currMark = Number.parseInt(marking.at(cellIdx) || '0', 10);
      if (inputType === MOUSE) {
        if (currMark == 2) currMark = 0; // green -> none
        else currMark = 2; // red, none -> green
      }
      let newMarking =
        marking.substring(0, cellIdx) +
        currMark +
        marking.substring(cellIdx + 1);
      setMarking(newMarking);
      markingStorage.set(newMarking);
    }
  };

  const preventDoubleClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  };

  let trs: React.JSX.Element[] = [];

  for (let i = 0; i < ROWS; i++) {
    let noCopyTds: React.JSX.Element[] = [];
    for (let j = 0; j < COLS; j++) {
      const cell = i * COLS + j;

      noCopyTds.push(
        <td
          key={cell}
          onClick={onTableCellClick}
          onContextMenu={onTableCellContext}
          onMouseDown={preventDoubleClick}
          data-cell-idx={cell}
          className={cx({
            'bg-white': shading.at(cell) == '0',
            'bg-[#999]': shading.at(cell) == '1',
            'bg-[#ff0]': shading.at(cell) == '2',
            wrong: answer.at(cell) == '0',
            correct: answer.at(cell) == '1',
          })}
        >
          <div
            className={cx({
              'border-[3px] border-dashed': marking.at(cell) != '0',
              'border-red-500': marking.at(cell) == '1',
              'border-green-400': marking.at(cell) == '2',
            })}
          >
            {GRID[i][j]}
          </div>
          <style jsx>{`
            td {
              padding: 1px !important;
              height: min(40px, ${75 / ROWS}vw);
              width: min(40px, ${75 / ROWS}vw);
              font-family: var(--mono-font);
              text-align: center;
              cursor: pointer;
              background-size: cover;
              background-clip: padding-box;
            }
            td > div {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              background-size: 100% 100%;
            }
            .wrong {
              background-image: url(${cross});
            }
            .correct {
              background-image: url(${tick});
            }
          `}</style>
        </td>
      );
    }
    trs.push(<tr key={i}>{noCopyTds}</tr>);
  }

  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <FlavorText>It seems each row has an error.</FlavorText>
        <WebsocketNotice readyState={readyState} />
        <InfoIcon>
          Highlighted (yellow) cells are equivalent to unshaded (white) cells.
          Markings (red and green borders) also do not have any effect.
        </InfoIcon>
        <div className="mx-auto w-fit border-2 border-black p-2 select-none">
          <div className="w-fit flex">
            <span className="whitespace-nowrap inline-block mr-2">
              Input Type |
            </span>
            <div className="inline-block">
              <span
                className={cx(
                  'cursor-pointer',
                  'py-0.5',
                  'px-1',
                  'whitespace-nowrap',
                  'inline-block',
                  'mr-3',
                  {
                    'selected bg-neutral-200': inputType === MOUSE,
                  }
                )}
                onClick={(_) => {
                  setInputType(MOUSE);
                  inputTypeStorage.set(MOUSE);
                }}
              >
                {MOUSE}
              </span>
              <span
                className={cx(
                  'cursor-pointer',
                  'py-0.5',
                  'px-1',
                  'whitespace-nowrap',
                  'inline-block',
                  {
                    'selected bg-neutral-200': inputType === TOUCH,
                  }
                )}
                onClick={(_) => {
                  setInputType(TOUCH);
                  inputTypeStorage.set(TOUCH);
                }}
              >
                {TOUCH}
              </span>
            </div>
          </div>
          <div className="w-fit mt-1 flex">
            <span className="whitespace-nowrap inline-block mr-2">
              Input Mode |{' '}
            </span>
            <span
              className={cx(
                'cursor-pointer',
                'py-0.5',
                'px-1',
                'whitespace-nowrap',
                'inline-block',
                'mr-3',
                {
                  'selected bg-neutral-200': inputMode === 'Auto',
                }
              )}
              onClick={(_) => {
                setInputMode('Auto');
                inputModeStorage.set('Auto');
              }}
            >
              Auto
            </span>
            <span
              className={cx(
                'cursor-pointer',
                'py-0.5',
                'px-1',
                'whitespace-nowrap',
                'inline-block',
                'mr-3',
                {
                  'selected bg-neutral-200': inputMode === 'Shading',
                }
              )}
              onClick={(_) => {
                setInputMode('Shading');
                inputModeStorage.set('Shading');
              }}
            >
              Shading
            </span>
            <span
              className={cx(
                'cursor-pointer',
                'py-0.5',
                'px-1',
                'whitespace-nowrap',
                'inline-block',
                {
                  'selected bg-neutral-200': inputMode === 'Marking',
                }
              )}
              onClick={(_) => {
                setInputMode('Marking');
                inputModeStorage.set('Marking');
              }}
            >
              Marking
            </span>
          </div>
          <style jsx>{`
            .selected {
              font-weight: bold;
              color: var(--primary);
            }
          `}</style>
        </div>
        <details className="my-4">
          <summary>Controls</summary>
          <ul>
            <li>
              <b>L/R buttons + CTRL</b>: Left and right click cells to toggle
              between unshaded, shaded and highlighted. CTRL-left and right
              click to mark cells with red or green borders. Input mode
              restricts which one is active.
            </li>
            <li>
              <b>One button</b>: "Auto" and "Shading" input modes are tap/click
              change cell shading. "Marking" input mode is tap/click to change
              cell border.
            </li>
          </ul>
        </details>
        <Table>
          <tbody>{trs}</tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
