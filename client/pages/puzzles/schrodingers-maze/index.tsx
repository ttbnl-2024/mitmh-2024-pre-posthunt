import cx from 'classnames';
import React, {
  FC,
  FormEvent,
  MouseEventHandler,
  useContext,
  useRef,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = 'schrodingers-maze';

interface MazeProps {
  maze: string;
}

const getEmoji = (c: string) => {
  if (c == 'G') return <InlineTwemoji emoji="🏁" />;
  if (c == 'Y') return <InlineTwemoji emoji="🙂" />;
  if (c == 'S') return <InlineTwemoji emoji="🌊" />;
  if (c == 'W') return <InlineTwemoji emoji="🟫" />;
  return null;
};

const Maze: FC<MazeProps> = ({ maze }) => {
  let chunks = maze.match(/.{5}/g);
  let rows: React.JSX.Element[] = [];
  if (!chunks) return null;
  for (const row of chunks) {
    let tds: React.JSX.Element[] = [];
    for (const cell of row) {
      tds.push(
        <td key={tds.length}>
          {getEmoji(cell)}
          <style jsx>{`
            td {
              padding: 1px !important;
              width: 40px;
              height: 40px;
              min-width: 40px;
              min-height: 40px;
              font-family: var(--mono-font);
              text-align: center;
            }
          `}</style>
        </td>
      );
    }
    rows.push(<tr key={rows.length}>{tds}</tr>);
  }
  return (
    <Table>
      <tbody>{rows}</tbody>
    </Table>
  );
};

interface SecretMazeProps {
  maze: string;
  water: number;
  brown: number;
  status: SingleResponse;
}
const SecretMaze: FC<SecretMazeProps> = ({ maze, water, brown, status }) => {
  return (
    <div className="flex flex-row justify-start items-center">
      <div>
        <Maze maze={maze} />
        <p className="text-center mt-1 mb-0">
          <InlineTwemoji emoji="🌊" />x{water}, <InlineTwemoji emoji="🟫" />x
          {brown}
        </p>
      </div>
      {status.message && (
        <p
          className={cx(
            { 'text-green-500 font-bold': status.correct },
            'ml-3',
            'pb-7'
          )}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

interface SingleResponse {
  correct: boolean;
  message: string;
}

interface SchrodingerErrors {
  maze?: string;
  word?: string;
}

interface SchrodingerResponse {
  selfResult: string;
  wordsResult: SingleResponse[];
  mazesResult: SingleResponse[];
}

const START: SchrodingerResponse = {
  selfResult: '',
  wordsResult: new Array(9).fill({ correct: false, message: '' }),
  mazesResult: new Array(9).fill({ correct: false, message: '' }),
};

const ROWS = 5;
const COLS = 5;
const BLANKS = ['9', '13', '8', '10', '8', '6', '5', '5', '7'];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  const [activeIcon, setActiveIcon] = useState<string>('.');
  const [mazeStr, setMazeStr] = useState<string>('.........................');
  const [response, setResponse] = useState<SchrodingerResponse>(START);
  const [formError, setFormError] = useState<string>('');

  const onIconSelectClick: MouseEventHandler<HTMLDivElement> = (e) => {
    let cellData = e.currentTarget.getAttribute('data-cell-icon') || '.';
    setActiveIcon(cellData);
  };

  const onTableCellClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
    let cellIdx = Number.parseInt(
      e.currentTarget.getAttribute('data-cell-idx') || '0',
      10
    );
    let newMaze =
      mazeStr.substring(0, cellIdx) +
      activeIcon +
      mazeStr.substring(cellIdx + 1);
    setMazeStr(newMaze);
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!loggedIn) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<SchrodingerErrors, SchrodingerResponse>
    >(router, `/puzzle/${SLUG}/guess`, {
      method: 'POST',
      body: formData,
    });

    if (!response.data) {
      setFormError(
        [response.form_errors?.maze, response.form_errors?.word]
          .filter((x) => x)
          .join('; ')
      );
    } else {
      setResponse(response.data);
      setFormError('');
    }

    return;
  };

  let trs: React.JSX.Element[] = [];
  for (let i = 0; i < ROWS; i++) {
    let tds: React.JSX.Element[] = [];
    for (let j = 0; j < COLS; j++) {
      const cell = i * COLS + j;
      tds.push(
        <td key={cell} onClick={onTableCellClick} data-cell-idx={cell}>
          {getEmoji(mazeStr[cell])}
          <style jsx>{`
            td {
              padding: 1px !important;
              width: 40px;
              height: 40px;
              min-width: 40px;
              min-height: 40px;
              font-family: var(--mono-font);
              text-align: center;
              cursor: pointer;
            }
          `}</style>
        </td>
      );
    }
    trs.push(<tr key={i}>{tds}</tr>);
  }

  return (
    <Puzzle puzzleData={puzzleData} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Among all the possibilities, find the earliest time to reach the goal.
        </FlavorText>
        <div className="flex flex-row justify-center">
          <Table className="align-middle py-14">
            <tbody>{trs}</tbody>
          </Table>
          <div className={cx('selector h-full ml-12', NO_COPY_CLASS)}>
            <p>Selector</p>
            <style jsx global>{`
              .selector-cell {
                border: 1px solid black;
                width: 40px;
                height: 40px;
                display: table;
                text-align: center;
                margin: 5px;
                cursor: pointer;
              }
              .selector-cell > span:not(.copy-only) {
                display: table-cell;
                vertical-align: middle;
              }
            `}</style>
            <div
              className={cx(
                { 'bg-[#ff0]': activeIcon == '.' },
                'selector-cell'
              )}
              data-cell-icon="."
              onClick={onIconSelectClick}
            ></div>
            <div
              className={cx(
                { 'bg-[#ff0]': activeIcon == 'Y' },
                'selector-cell'
              )}
              data-cell-icon="Y"
              onClick={onIconSelectClick}
            >
              <InlineTwemoji emoji="🙂" />
            </div>
            <div
              className={cx(
                { 'bg-[#ff0]': activeIcon == 'W' },
                'selector-cell'
              )}
              data-cell-icon="W"
              onClick={onIconSelectClick}
            >
              <InlineTwemoji emoji="🟫" />
            </div>
            <div
              className={cx(
                { 'bg-[#ff0]': activeIcon == 'S' },
                'selector-cell'
              )}
              data-cell-icon="S"
              onClick={onIconSelectClick}
            >
              <InlineTwemoji emoji="🌊" />
            </div>
            <div
              className={cx(
                { 'bg-[#ff0]': activeIcon == 'G' },
                'selector-cell'
              )}
              data-cell-icon="G"
              onClick={onIconSelectClick}
            >
              <InlineTwemoji emoji="🏁" />
            </div>
          </div>
        </div>
        <span className={cx(HIDDEN_CLASS)}>
          See puzzle for interactive component.
        </span>
        <form
          className={cx('flex items-center justify-center')}
          onSubmit={onFormSubmit}
        >
          <input
            name="maze"
            type="text"
            className={cx(HIDDEN_CLASS, NO_COPY_CLASS)}
            readOnly
            value={mazeStr}
          />
          <label>
            Input:{' '}
            <input
              name="word"
              type="text"
              required
              className="px-0.5 max-w-[195px] "
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className={cx(
              'ml-2 !bg-neutral-300 !text-black border-none rounded-xl py-1 px-2',
              NO_COPY_CLASS
            )}
          />
        </form>
        {formError && (
          <p className="text-center text-red-500 mt-2">{formError}</p>
        )}
        {response.selfResult && (
          <p className="text-center mt-2">{response.selfResult}</p>
        )}
        <hr className="my-4" />

        <div className="max-h-[50vh] overflow-auto">
          <div className="space-y-3">
            {BLANKS.map((label, idx) => {
              let status = response.wordsResult[idx];

              return (
                <div className="flex flex-row justify-start" key={idx}>
                  <div className="min-w-[215px] flex items-center">
                    <IndexedBlank
                      tableClass="flex flex-row items-center gap-x-3"
                      label={label}
                    />
                  </div>
                  <span
                    className={cx(
                      { 'text-green-500 font-bold': status.correct },
                      'ml-3'
                    )}
                  >
                    {status.message}
                  </span>
                </div>
              );
            })}
          </div>

          <hr className="my-4" />
          <div className="space-y-4">
            <SecretMaze
              maze="...............G........Y"
              water={3}
              brown={1}
              status={response.mazesResult[0]}
            />
            <SecretMaze
              maze=".......Y..G.............."
              water={5}
              brown={1}
              status={response.mazesResult[1]}
            />
            <SecretMaze
              maze=".....Y............G......"
              water={3}
              brown={2}
              status={response.mazesResult[2]}
            />
            <SecretMaze
              maze=".G...........Y..........."
              water={1}
              brown={9}
              status={response.mazesResult[3]}
            />
            <SecretMaze
              maze="...........Y.G..........."
              water={4}
              brown={0}
              status={response.mazesResult[4]}
            />
            <SecretMaze
              maze=".....G............Y......"
              water={13}
              brown={0}
              status={response.mazesResult[5]}
            />
            <SecretMaze
              maze="........Y...........G...."
              water={5}
              brown={2}
              status={response.mazesResult[6]}
            />
            <SecretMaze
              maze="...Y............G........"
              water={3}
              brown={3}
              status={response.mazesResult[7]}
            />
            <SecretMaze
              maze="Y......................G."
              water={2}
              brown={0}
              status={response.mazesResult[8]}
            />
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
