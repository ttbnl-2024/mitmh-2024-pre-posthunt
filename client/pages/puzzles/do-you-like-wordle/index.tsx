import cx from 'classnames';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { DjangoFormErrors, DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';

const SLUG = 'do-you-like-wordle';
const MAX_GUESSES = 6;
const MAX_WORD_LENGTH = 5;
const NUM_GAMES = 30;

interface WordleInitialResponse {
  encWords: string;
  signature: string;
}

interface WordleGuessResponse {
  topBar: string;
  gameStates: string;
}

const BLANK = ' ';
const ERROR = 'R';
const DONE = '!';

interface WordleErrors {
  guesses?: string;
  encWords?: string;
  signature?: string;
}

const EMPTYGAME_ARR = new Array(MAX_GUESSES * MAX_WORD_LENGTH).fill(' ');
const EMPTYBAR_STR = new Array(NUM_GAMES).fill(' ').join('');
const EMPTYSTATES_STR = new Array(NUM_GAMES * MAX_GUESSES * MAX_WORD_LENGTH)
  .fill(' ')
  .join('');

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  const [encWords, setEncWords] = useState<string>('');
  const [signature, setSignature] = useState<string>('');

  const [topBar, setTopBar] = useState<string>(EMPTYBAR_STR);
  const [gameStates, setGameStates] = useState<string>(
    new Array(900).fill('!').join('')
  );

  const [guesses, setGuesses] = useState<string[]>(EMPTYGAME_ARR);
  const [currentKey, setCurrentKey] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [guessError, setGuessError] = useState('None Yet');
  const [debugMode, setDebugMode] = useState(false);

  const DoNewGame = async () => {
    if (!loggedIn) {
      return;
    }

    const response = await clientFetch<WordleInitialResponse>(
      router,
      `/puzzle/${SLUG}/newgame`,
      { method: 'GET' }
    );

    if (response) {
      setEncWords(response.encWords);
      setSignature(response.signature);
    }

    setTopBar(EMPTYBAR_STR);
    setGameStates(EMPTYSTATES_STR);
    setGuesses(EMPTYGAME_ARR);
    setCurrentKey(0);
    setCurrentWord(0);
    setGuessError('None Yet');
    setSubmitting(false);
  };

  const submitGuess = async () => {
    if (!loggedIn) {
      return;
    }
    setSubmitting(true);

    // const guessFormJSX = (
    //   <form>
    //     <input name="encWords" type="hidden" value={encWords} />
    //     <input name="signature" type="hidden" value={signature} />
    //     <input name="guesses" type="hidden" value={guesses.join('')} />
    //   </form>
    // );
    const formData = new FormData();
    formData.append('encWords', encWords);
    formData.append('signature', signature);
    formData.append('guesses', guesses.join(''));

    const response = await clientFetch<
      DjangoFormResponse<DjangoFormErrors<WordleErrors>, WordleGuessResponse>
    >(router, `/puzzle/${SLUG}/makeguess`, {
      method: 'POST',
      body: formData,
    });

    if (response.data) {
      setTopBar(response.data.topBar);
      setGameStates(response.data.gameStates);
      if (!response.data.gameStates.includes(ERROR)) {
        setCurrentWord(currentWord + 1);
        setCurrentKey(0);
      }
    } else {
      if (response.form_errors) {
        let errStr = '';

        if (response.form_errors.encWords) {
          errStr += `[encWords: ${response.form_errors.encWords}] `;
        }
        if (response.form_errors.guesses) {
          errStr += `[guesses: ${response.form_errors.guesses}] `;
        }
        if (response.form_errors.signature) {
          errStr += `[signature: ${response.form_errors.signature}] `;
        }
        if (response.form_errors.__all__) {
          errStr += `[${response.form_errors.__all__}] `;
        }

        setGuessError(errStr);
      }
    }
    setSubmitting(false);
    return;
  };

  function cellState(start: number, gridNumber: number) {
    return gameStates[gridNumber * 30 + start];
  }

  function cellColor(start: number, gridNumber: number) {
    switch (cellState(start, gridNumber)) {
      case BLANK:
        return 'bg-white';
      case ERROR:
        return 'bg-red-500';
      case DONE:
        return 'bg-gray-500';
      case 'Y':
        return 'bg-yellow-500';
      case 'G':
        return 'bg-green-500';
    }
  }
  function WordleLine(guesses: string[], start: number, gridNumber: number) {
    return (
      <tr key={'G' + gridNumber + 'L' + start}>
        {[...Array(5)].map((_, i) => (
          <td
            key={'G' + gridNumber + 'C' + start + i}
            className={cx(
              'p-1 w-10 h-10 font-mono text-center border-2',
              cellColor(start + i, gridNumber)
            )}
          >
            {cellState(start + i, gridNumber) === DONE
              ? ' '
              : guesses[start + i]}
          </td>
        ))}
      </tr>
    );
  }

  const gridRefs = [...Array(NUM_GAMES)].map((_, i) =>
    useRef<HTMLDivElement>(null)
  );

  function WordleGrid(index: number, guesses: string[]) {
    return (
      <div
        className="block bg-gray-200 border border-gray-200 p-1 rounded-lg w-52 mt-4 mr-2"
        key={'g' + index}
        ref={gridRefs[index]}
      >
        <h5 className="text-center">{index + 1}</h5>
        <table className="align-middle bg-white">
          <tbody>
            {[...Array(6)].map((_, i) => WordleLine(guesses, i * 5, index))}
          </tbody>
        </table>
      </div>
    );
  }

  function DebugCard(val: string) {
    return (
      <div
        className={
          debugMode
            ? 'block bg-gray-200 border border-gray-200 p-1 rounded-lg w-52 mt-4 mr-2'
            : 'hidden'
        }
      >
        {val}
      </div>
    );
  }

  // let header: React.JSX.Element[] = [];
  // for (let i = 1; i <= 30; i++) {
  //   header.push(
  //     <td className="border-2 font-mono text-center p-3" key={'h' + i}>
  //       {i}
  //     </td>
  //   );
  // }

  function Backspace() {
    if (currentKey > 0) {
      const newGuesses = [...guesses];
      newGuesses[currentWord * 5 + currentKey - 1] = BLANK;
      setGuesses(newGuesses);
      setGameStates(gameStates.replace(/R/g, BLANK));
      setTopBar(topBar.replace(/R/g, BLANK));
      setCurrentKey(currentKey - 1);
    }
  }
  function Key(key: string) {
    if (currentKey < 5 && currentWord < 6) {
      setGuesses((guesses) => {
        const newGuesses = [...guesses];
        newGuesses[currentWord * 5 + currentKey] = key;
        return newGuesses;
      });
      setCurrentKey(currentKey + 1);
    }
  }

  useEffect(() => {
    if (currentKey == 5) submitGuess();
  }, [currentKey]);

  let grids: React.JSX.Element[] = [];
  for (let i = 0; i < 30; i++) {
    grids.push(WordleGrid(i, guesses));
  }

  const keyDownHandler = (e: KeyboardEvent) => {
    if (submitting) return;

    if (document.activeElement instanceof HTMLInputElement) return;
    // console.log(e.key);
    if (e.key === 'Escape') {
      // setDebugMode(!debugMode);
      return;
    }

    if (e.key === 'Backspace') {
      Backspace();
    } else {
      const uk = e.key.toUpperCase();
      if (uk.match(/^[A-Z]$/)) {
        Key(uk);
      } else {
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  });

  function topCellColor(idx: number) {
    switch (topBar[idx]) {
      case ERROR:
        return 'bg-red-500';
      case 'G':
        return 'bg-green-500';
      case 'B':
        return 'bg-indigo-500';
    }
    return 'bg-white';
  }

  return (
    <Puzzle
      puzzleData={puzzleData}
      smallTitle={true}
      maxWidth={true}
      maxWidthPx={2000}
    >
      <div ref={ref}>
        {/* <FlavorText>
        </FlavorText> */}
        {DebugCard('currentKey=[' + currentKey + ']')}
        {DebugCard('currentWord=[' + currentWord + ']')}
        {DebugCard('encWords=[' + encWords + ']')}
        {DebugCard('signature=[' + signature + ']')}
        {DebugCard(
          'gLen = [' + guesses.length + '] guesses=[' + guesses.join('') + ']'
        )}
        {DebugCard('tBlen=[' + topBar.length + '] topBar=[' + topBar + ']')}
        {DebugCard(
          'gSlen=[' + gameStates.length + '] gameStates=[' + gameStates + ']'
        )}
        {DebugCard('submitting=' + submitting)}
        {DebugCard('guessError=' + guessError)}
        <InfoIcon>
          <p>
            Press New Game to start and to try again. Backspace works. This
            puzzle is not optimized for mobile and does require a keyboard.
          </p>
        </InfoIcon>
        <div
          id="header"
          className="sticky top-10 bg-[#593a23] flex items-center justify-center flex-wrap w-full pt-2 pb-2 border-4 rounded-md"
        >
          <div
            className="w-32 h-10 border-2 flex justify-center items-center mr-2 ml-2 rounded-lg bg-orange-500 text-white cursor-pointer"
            onClick={DoNewGame}
          >
            New Game
          </div>
          {[...Array(30)].map((_, i) => (
            <div
              key={'H' + i}
              className={
                'w-10 h-10 border-2 flex justify-center items-center m-1 rounded-md cursor-pointer ' +
                topCellColor(i)
              }
              onClick={() => {
                setTimeout(function () {
                  gridRefs[i].current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 50);
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">{grids}</div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;
export const getServerSideProps = getPuzzleProps(SLUG);
