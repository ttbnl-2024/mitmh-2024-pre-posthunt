import { NamedPage } from './core';
import { Dispatch, FC, SetStateAction } from 'react';

interface HeaderProps {
  numSolved: number;
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
  showAllLevelsBtn?: boolean;
  showTopScreenBtn?: boolean;
}

const Header: FC<HeaderProps> = ({
  numSolved,
  setActivePage,
  showAllLevelsBtn = false,
  showTopScreenBtn = true,
}) => {
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="enn-little">SUCCESSES: {numSolved}✔</div>
        <div className="flex flex-wrap flex-row gap-2.5">
          {showAllLevelsBtn && (
            <button
              className="enn-little block mr-12"
              onClick={(_) => setActivePage('ALLLEVELS')}
            >
              ALLLEVELS
            </button>
          )}
          {showTopScreenBtn && (
            <button
              className="enn-little block"
              onClick={(_) => setActivePage('GAMETITLE')}
            >
              TOPSCREEN
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
