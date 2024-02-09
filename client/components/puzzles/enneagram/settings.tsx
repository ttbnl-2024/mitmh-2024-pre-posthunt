import { Dispatch, FC, SetStateAction } from 'react';

import { NamedPage } from 'components/puzzles/enneagram/core';

interface SettingsPageProps {
  numSolved: number;
  reset: () => void;
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
}

const SettingsPage: FC<SettingsPageProps> = ({
  numSolved,
  reset,
  setActivePage,
}) => {
  return (
    <>
      <div className="text-center">SUCCESSES: {numSolved}✔</div>
      <button className="enn-menubut" onClick={reset}>
        STARTOVER
      </button>
      <button
        className="enn-menubut"
        onClick={(_) => setActivePage('GAMETITLE')}
      >
        TOPSCREEN
      </button>
    </>
  );
};

export default SettingsPage;
