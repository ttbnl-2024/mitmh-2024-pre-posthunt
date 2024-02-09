import cx from 'classnames';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

import { NamedPage } from 'components/puzzles/enneagram/core';

interface TitlePageProps {
  numSolved: number;
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
}

const TitlePage: FC<TitlePageProps> = ({ numSolved, setActivePage }) => {
  interface TitleButtonProps {
    targetPage?: NamedPage;
    children?: ReactNode;
  }

  const TitleButton: FC<TitleButtonProps> = ({ targetPage, children }) => {
    return (
      <>
        <button
          className={cx({ 'enn-greyed': !targetPage }, 'enn-menubut')}
          onClick={(_) => {
            if (targetPage) {
              setActivePage(targetPage);
            }
          }}
        >
          {children}
        </button>
      </>
    );
  };

  return (
    <>
      <div className="block text-center">ENNEAGRAM</div>
      <TitleButton targetPage="ALLLEVELS">STARTGAME</TitleButton>
      <TitleButton targetPage={numSolved > 0 ? 'ALLLEVELS' : undefined}>
        KEEPGOING
      </TitleButton>
      <TitleButton targetPage="SETTHINGS">SETTHINGS</TitleButton>
      <TitleButton targetPage="LEARNMORE">LEARNMORE</TitleButton>
    </>
  );
};

export default TitlePage;
