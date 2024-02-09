import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import useDynamicEncrypted from 'utils/encrypted';
import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';
import { useLocalStorage } from 'utils/storage';

import HuntInfoContext from 'components/context';
import AllLevelsPage from 'components/puzzles/enneagram/all_levels';
import {
  Gram,
  Grams,
  NamedPage,
  SIGN_0,
  getGramStartState,
} from 'components/puzzles/enneagram/core';
import CreditsPage from 'components/puzzles/enneagram/credits';
import Header from 'components/puzzles/enneagram/header';
import OneLevel from 'components/puzzles/enneagram/one_level';
import SettingsPage from 'components/puzzles/enneagram/settings';
import TitlePage from 'components/puzzles/enneagram/title_page';

const SLUG = 'enneagram';

interface NewLevelData {
  grams: Gram[];
  newVisibleUnlockAt?: number;
  newNumVisible?: number;
}

interface EnneagramResponse {
  correct: boolean;
  gramNum: number;
  solved: number[];
  signature: string;
  newLevels?: NewLevelData;
  extraCredit?: string;
}

interface GameState {
  grams: Grams;
  solved: number[];
  signature: string;
  ec?: string;
}

const Enneagram: FC = () => {
  const router = useRouter();
  const stateLocalStorage = useLocalStorage<GameState>(`${SLUG}/gamestate`, {
    grams: getGramStartState(),
    solved: [],
    signature: SIGN_0,
  });

  const [activePage, setActivePage] = useState<NamedPage>('GAMETITLE');
  const [activeProblem, setActiveProblem] = useState<number>(0);
  const [solved, setSolved] = useState<number[]>([]);
  const [signature, setSignature] = useState<string>(SIGN_0);
  const [grams, setGrams] = useState<Grams>([]);
  const [newLevelRows, setNewLevelRows] = useState<number[]>([]);

  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  let reset = () => {
    let startGrams = getGramStartState();
    setGrams(startGrams);
    setSolved([]);
    setSignature(SIGN_0);
    stateLocalStorage.set({
      grams: startGrams,
      solved: [],
      signature: SIGN_0,
    });
  };

  useEffect(() => {
    let state = stateLocalStorage.get();
    setGrams(state.grams);
    setSolved(state.solved);
    setSignature(state.signature);
  }, []);

  const guessHandler = async (e: FormEvent<HTMLFormElement>) => {
    if (!loggedIn) {
      return;
    }
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();

    const response = await clientFetch<
      DjangoFormResponse<{}, EnneagramResponse>
    >(router, `/puzzle/${SLUG}/guess`, {
      method: 'POST',
      body: formData,
    });

    // TODO: more gracefully handle errors?
    if (!response.data) {
      console.log(response.form_errors);
      return;
    }

    if (!response.data.correct) {
      return;
    }

    // ... yeah. sorry.
    let num = 0;
    for (const unlockThreshStr in grams) {
      let gs = grams[unlockThreshStr];
      if (typeof gs != 'number') {
        if (num + gs.length >= response.data.gramNum) {
          let offset = response.data.gramNum - num - 1;
          let gram = gs[offset];
          gram.solved = true;
          if (offset < gs.length - 1) {
            setActiveProblem(gs[offset + 1].num);
          } else if (response.data.gramNum == 81) {
            setActivePage('YOUWINYAY');
          } else {
            setActivePage('ALLLEVELS');
          }
          break;
        }
      } else {
        break;
      }
      num += gs.length;
    }

    if (response.data.newLevels) {
      let newLevels = response.data.newLevels;
      newLevelRows.push(response.data.solved.length);
      setNewLevelRows(newLevelRows);
      grams[response.data.solved.length] = newLevels.grams;
      if (newLevels.newNumVisible && newLevels.newVisibleUnlockAt) {
        grams[newLevels.newVisibleUnlockAt] = newLevels.newNumVisible;
      }
    }

    setGrams(grams);
    setSolved(response.data.solved);
    setSignature(response.data.signature);
    let state: GameState = {
      grams: grams,
      solved: response.data.solved,
      signature: response.data.signature,
    };

    stateLocalStorage.set(state);
  };

  let makeOneLevel = () => {
    if (activeProblem) {
      let num = 0;
      for (const unlockThreshStr in grams) {
        let gs = grams[unlockThreshStr];
        if (typeof gs != 'number') {
          if (num + gs.length >= activeProblem) {
            let offset = activeProblem - num - 1;
            return (
              <>
                <Header
                  numSolved={solved.length}
                  setActivePage={setActivePage}
                  showAllLevelsBtn
                />
                <OneLevel
                  gram={gs[offset]}
                  solved={solved}
                  signature={signature}
                  guessHandler={guessHandler}
                  prev={gs[offset - 1]}
                  next={gs[offset + 1]}
                  setActiveProblem={setActiveProblem}
                />
              </>
            );
          }
        } else {
          break;
        }
        num += gs.length;
      }
    }
    return null;
  };

  interface FinishPageProps {
    numSolved: number;
    setActivePage: Dispatch<SetStateAction<NamedPage>>;
  }
  let FinishPage = useDynamicEncrypted<FinishPageProps>(
    `puzzles/${SLUG}/enneagram_finish`,
    { enabled: solved.includes(81) }
  );

  interface EcPageProps {
    setActivePage: Dispatch<SetStateAction<NamedPage>>;
  }
  let ExtraCreditPage = useDynamicEncrypted<EcPageProps>(
    `puzzles/${SLUG}/enneagram_extracredit`,
    { enabled: solved.includes(81) }
  );

  return (
    <>
      <style jsx global>
        {`
          body {
            background-color: #aaccaa !important;
            // We want to be exactly like octogram -- it does this.
            // Which is wrong, but...
            font-family: 'Fira Mono Bold', monospace;
            font-size: clamp(50px, 16vw, 100px);
            color: #113311;
            line-height: normal;
            margin: 8px;
          }

          button {
            background-color: #77aa77;
            border: 10px solid #113311;
            border-radius: clamp(1px, 0.8vw, 10px);
            cursor: default;
            // Undo reset
            padding: 1px 4px;
          }

          button:hover {
            filter: none;
          }

          .enn-menubut {
            margin: 10px auto 0;
            margin-top: 10px;
            display: block;
            text-align: center;
          }

          .enn-greyed {
            background-color: #99cc99;
            border: 10px solid #557755;
            color: #557755;
          }

          button.enn-little {
            border-width: 3px;
            min-width:50px;
            min-height: 50px;
          }

          .enn-tiny {
            font-size: clamp(2px, 0.85vw, 15px);
          }

          .enn-somewhattiny {
            font-size: clamp(3px, 1vw, 21px);
          }

          .enn-little {
            font-size: 30px;
          }

          .enn-medium {
            font-size: clamp(10px, 5vw, 60px);
          }
        `}
      </style>
      <div>
        {activePage == 'GAMETITLE' && (
          <TitlePage numSolved={solved.length} setActivePage={setActivePage} />
        )}
        {activePage == 'ALLLEVELS' && (
          <>
            <Header numSolved={solved.length} setActivePage={setActivePage} />
            <AllLevelsPage
              grams={grams}
              newLevelRows={newLevelRows}
              setActivePage={setActivePage}
              setActiveProblem={setActiveProblem}
              setNewLevelRows={setNewLevelRows}
            />
          </>
        )}{' '}
        {activePage == 'AQUESTION' && makeOneLevel()}
        {activePage == 'SETTHINGS' && (
          <SettingsPage
            numSolved={solved.length}
            reset={reset}
            setActivePage={setActivePage}
          />
        )}
        {activePage == 'LEARNMORE' &&
          (solved.includes(81) ? (
            <ExtraCreditPage setActivePage={setActivePage} />
          ) : (
            <CreditsPage setActivePage={setActivePage} />
          ))}
        {activePage == 'YOUWINYAY' && (
          <FinishPage numSolved={solved.length} setActivePage={setActivePage} />
        )}
      </div>
    </>
  );
};

export default Enneagram;
