import cx from 'classnames';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import React from 'react';

import { Gram, Grams, NamedPage } from 'components/puzzles/enneagram/core';

interface LevelButtonProps {
  num: number;
  unlocked: boolean;
  solved?: boolean;
  unlockAt?: number;
  unlockAnimTime?: number;
  setActivePage?: Dispatch<SetStateAction<NamedPage>>;
  setActiveProblem?: Dispatch<SetStateAction<number>>;
  setNewLevelRows?: Dispatch<SetStateAction<number[]>>;
}

const LevelButton: FC<LevelButtonProps> = ({
  num,
  unlocked,
  solved = false,
  unlockAt = 0,
  unlockAnimTime,
  setActivePage = (_) => {},
  setActiveProblem = (_) => {},
  setNewLevelRows = (_) => {},
}) => {
  const [showNewlyUnlocked, setShowNewlyUnlocked] = useState<boolean>(false);

  useEffect(() => {
    if (unlockAnimTime === undefined) {
      setShowNewlyUnlocked(false);
      return;
    }
    let timeout = setTimeout(() => setShowNewlyUnlocked(true), unlockAnimTime);
    return () => clearTimeout(timeout);
  }, [unlockAnimTime]);

  if (unlockAnimTime !== undefined) {
    useEffect(() => {});
  }

  let onClick = () => {
    if (unlocked) {
      setActivePage('AQUESTION');
      setActiveProblem(num);
      setNewLevelRows([]);
    }
  };

  return (
    <>
      <style jsx>{`
        button {
          margin-top: clamp(40px, 4vw, 50px);
          margin-left: clamp(1px, 0.8vw, 10px);
          flex: 0 1 auto;
          height: auto;
          width: 150px;
          border-radius: clamp(1px, 0.8vw, 10px);
          border-width: clamp(1px, 0.8vw, 10px);
          aspect-ratio: 1/1;
        }

        .enn-comp {
          background-color: #cccc77;
          border: solid #555511;
          border-width: clamp(1px, 0.8vw, 10px);
          color: #555511;
        }
      `}</style>
      <button onClick={onClick} className={cx({ 'enn-comp': solved })}>
        {/* Strictly this should be organized better... but. time. */}
        {!unlocked && <div className="enn-tiny">OPENSWITH {unlockAt}✔</div>}
        {showNewlyUnlocked && (
          <div className="enn-somewhattiny relative inset-x-0 top-">
            AVAILABLE!
          </div>
        )}
        {unlocked && !showNewlyUnlocked && (
          <div className="enn-somewhattiny">&nbsp;</div>
        )}
        <div className="enn-medium">{num}</div>
        <div className={cx('enn-tiny', { invisible: !solved })}>COMPLETED</div>
      </button>
    </>
  );
};

interface LockedLevelRowProps {
  firstNum: number;
  numGrams: number;
  opacity: number;
  unlockAt: number;
}

const LockedLevelRow: FC<LockedLevelRowProps> = ({
  firstNum,
  numGrams,
  opacity,
  unlockAt,
}) => {
  let gramNodes: React.JSX.Element[] = [];
  for (let i = 0; i < numGrams; i++) {
    let num = i + firstNum;
    gramNodes.push(
      <LevelButton num={num} unlocked={false} unlockAt={unlockAt} key={i} />
    );
  }
  return (
    <>
      <style jsx>
        {`
          .levelrow {
            opacity: ${opacity}%;
          }
        `}
      </style>
      <div
        className={`whitespace-nowrap max-w-full flex justify-center opacity-[.${opacity}] levelrow`}
      >
        {gramNodes}
      </div>
    </>
  );
};

interface OpenLevelRowProps {
  rowGrams: Gram[];
  unlockAnimTimeStart?: number;
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
  setActiveProblem: Dispatch<SetStateAction<number>>;
  setNewLevelRows: Dispatch<SetStateAction<number[]>>;
}

const LevelRow: FC<OpenLevelRowProps> = ({
  rowGrams,
  unlockAnimTimeStart,
  setActivePage,
  setActiveProblem,
  setNewLevelRows,
}) => {
  let gramNodes: React.JSX.Element[] = [];

  let key = 0;
  for (let gram of rowGrams) {
    gramNodes.push(
      <LevelButton
        num={gram.num}
        setActivePage={setActivePage}
        setActiveProblem={setActiveProblem}
        setNewLevelRows={setNewLevelRows}
        unlocked={true}
        solved={gram.solved}
        key={key}
        unlockAnimTime={unlockAnimTimeStart}
      />
    );
    key += 1;
    if (unlockAnimTimeStart !== undefined) {
      unlockAnimTimeStart += 100;
    }
  }

  return (
    <>
      <div className="whitespace-nowrap max-w-full flex justify-center">
        {gramNodes}
      </div>
    </>
  );
};

interface AllLevelsPageProps {
  grams: Grams;
  newLevelRows: number[];
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
  setActiveProblem: Dispatch<SetStateAction<number>>;
  setNewLevelRows: Dispatch<SetStateAction<number[]>>;
}

const AllLevelsPage: FC<AllLevelsPageProps> = ({
  grams,
  newLevelRows,
  setActivePage,
  setActiveProblem,
  setNewLevelRows,
}) => {
  let rows: React.JSX.Element[] = [];

  let gramNum = 1;
  let opacity = 100 - 32;
  let unlockAnimTime = 0;
  for (const unlockThreshStr in grams) {
    let unlockThresh = parseInt(unlockThreshStr, 10);
    let g = grams[unlockThreshStr];

    if (typeof g === 'number') {
      rows.push(
        <LockedLevelRow
          firstNum={gramNum}
          numGrams={g}
          unlockAt={unlockThresh}
          opacity={opacity}
          key={gramNum}
        />
      );
      opacity -= 32;
      gramNum += g;
    } else {
      rows.push(
        <LevelRow
          unlockAnimTimeStart={
            newLevelRows.includes(unlockThresh) ? unlockAnimTime : undefined
          }
          rowGrams={g}
          setActivePage={setActivePage}
          setActiveProblem={setActiveProblem}
          setNewLevelRows={setNewLevelRows}
          key={gramNum}
        />
      );
      if (newLevelRows.includes(unlockThresh)) {
        unlockAnimTime += 100 * g.length;
      }
      gramNum += g.length;
    }
  }

  return (
    <>
      <div className="flex flex-col">{rows}</div>
    </>
  );
};

export default AllLevelsPage;
