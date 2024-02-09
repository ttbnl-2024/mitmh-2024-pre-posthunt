import { Dispatch, FC, SetStateAction } from 'react';

import Link from 'components/link';
import { NamedPage } from 'components/puzzles/enneagram/core';

interface CreditsPageProps {
  setActivePage: Dispatch<SetStateAction<NamedPage>>;
}

const CreditsPage: FC<CreditsPageProps> = ({ setActivePage }) => {
  return (
    <>
      <div className="text-center">
        <style jsx global>
          {`
            a {
              color: revert !important;
              text-underline-offset: revert;
            }
          `}
        </style>
        <div>
          <b>CREDITFOR</b>
        </div>
        <div>GAMETTBNL</div>
        <div>IDEALANCE</div>
        <div>TESTTTBNL</div>
        <div className="enn-medium">
          <br />
        </div>
        <div>
          <b>SEQUELFOR</b>
        </div>
        <div>
          <Link
            className="enn-link"
            href="https://jacklance.github.io/octogram"
          >
            OCTOGRAMS
          </Link>
        </div>
        <div>OCTBYJACK</div>
        <div className="enn-medium">
          <br />
        </div>
        <div>
          <b>TRIBUTETO</b>
        </div>
        <div>
          <Link href="https://beautifulthorns.wixsite.com/puzzlesforprogress/post/the-puzzling-xlnc-of-jack-lance-1997-2023">
            JACKLANCE
          </Link>
        </div>
        <div className="enn-medium">
          <br />
        </div>
        <button
          className="enn-menubut"
          onClick={(_) => setActivePage('GAMETITLE')}
        >
          TOPSCREEN
        </button>
      </div>
    </>
  );
};

export default CreditsPage;
