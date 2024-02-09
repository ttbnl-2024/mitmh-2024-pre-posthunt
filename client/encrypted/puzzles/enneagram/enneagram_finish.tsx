import { Dispatch, FC, SetStateAction } from 'react';

import { NamedPage } from 'components/puzzles/enneagram/core';
import Header from 'components/puzzles/enneagram/header';

interface FinishPageProps {
  numSolved: number;
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
}

const FinishPage: FC<FinishPageProps> = ({ numSolved, setActivePage }) => {
  return (
    <>
      <Header
        numSolved={numSolved}
        setActivePage={setActivePage}
        showTopScreenBtn={false}
      />
      <div className="text-center enn-medium">
        <br />
        <div>NICESOLVE</div>
        <div>OURTHANKS</div>
        <div>WONDERFUL</div>
        <div>SOLIDGOLD</div>
        <div>EXQUISITE</div>
        <div>EXCELLENT</div>
        <div>OHFINEJOB</div>
        <div>CELEBRATE</div>
        <div>THRILLING</div>
        <br />
      </div>
      <button
        className="enn-menubut"
        onClick={(_) => setActivePage('LEARNMORE')}
      >
        SEECREDIT
      </button>
    </>
  );
};

export default FinishPage;
