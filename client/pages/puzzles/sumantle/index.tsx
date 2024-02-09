import cx from 'classnames';
import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch, useEventWebSocket } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import WebsocketNotice from 'components/websocket_notice';

const SLUG = 'sumantle';

interface SumantleData {
  wordsSolved: string[];
}

const ScoreBox: FC<{ idx: number; scores: number[] }> = ({ idx, scores }) => {
  return (
    <span
      className={cx('font-bold', {
        'text-red-500': scores[idx] != 1,
        'text-green-500': scores[idx] == 1,
      })}
    >
      {scores[idx] > -1 ? scores[idx] : <>&nbsp;</>}
    </span>
  );
};
const GuessBox: FC<{
  idx: number;
  words: string[];
  scores: number[];
  setWords: Dispatch<SetStateAction<string[]>>;
}> = ({ idx, words, scores, setWords }) => {
  const notUnlocked =
    idx >= 16 &&
    !(scores[(idx - 16) * 2] == 1 && scores[(idx - 16) * 2 + 1] == 1);
  const solved = scores[idx] == 1;
  return (
    <>
      <input
        className={cx('px-2 py-1 mx-1 my-1 w-[130px]', {
          'bg-neutral-300 cursor-not-allowed': notUnlocked,
          'bg-green-100': solved && idx != 30,
          'bg-green-400': solved && idx == 30,
        })}
        readOnly={solved}
        name={`guess${idx}`}
        type="text"
        value={words[idx]}
        onChange={(e) => {
          words[idx] = e.target.value;
          setWords([...words]);
        }}
        disabled={notUnlocked}
      />
    </>
  );
};

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;
  const data = puzzleData.private as SumantleData;

  const ref = useRef<HTMLDivElement>(null);

  const [scores, setScores] = useState<number[]>(
    data.wordsSolved.map((s) => (!!s ? 1 : -1))
  );
  const [currentWords, setCurrentWords] = useState<string[]>(data.wordsSolved);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      const resp = data as SumantleData;
      if (resp.wordsSolved) {
        for (let i = 0; i < resp.wordsSolved.length; i++) {
          if (!!resp.wordsSolved[i]) {
            currentWords[i] = resp.wordsSolved[i];
            scores[i] = 1;
          }
        }
        setCurrentWords([...currentWords]);
        setScores([...scores]);
      }
    },
    key: SLUG,
    options: {
      slug: SLUG,
    },
  });

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    if (!loggedIn) {
      return;
    }

    setLoading(true);
    setMessage('Loading...');
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<{}, { scores?: number[]; wordsSolved?: string[] }>
    >(router, `/puzzle/${SLUG}/guess`, {
      method: 'POST',
      body: formData,
    });

    if (response.form_errors) {
      console.log(response.form_errors);
      // @ts-ignore
      setMessage(response.form_errors.__all__[0]);
    } else {
      setMessage('');
    }
    if (response.data?.scores) {
      setScores(response.data?.scores);
    }
    if (response.data?.wordsSolved) {
      for (let i = 0; i < response.data?.wordsSolved.length; i++) {
        if (!!response.data?.wordsSolved[i]) {
          currentWords[i] = response.data?.wordsSolved[i];
        }
      }
      setCurrentWords([...currentWords]);
    }

    setLoading(false);
  };

  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <WebsocketNotice readyState={readyState} />
        <InfoIcon>
          You may need to scroll right to see the full bracket.
        </InfoIcon>
        <form onSubmit={formSubmitHandler}>
          <p>
            <input
              type="submit"
              value="Submit"
              className={cx(
                'mt-2 mr-2 !bg-neutral-300 !text-black border-none rounded-xl p-2'
              )}
              disabled={loading || scores.every((s) => s == 1)}
            />
            {!!message && <span className="text-red-500">{message}</span>}
          </p>
          <hr className="my-4" />
          <div className="overflow-auto max-w-full">
            <table className="">
              <tbody>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={0} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={0}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={16} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={16}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black text-center">
                    <ScoreBox idx={1} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={1}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={24} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={24}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={2} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={2}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black text-center">
                    <ScoreBox idx={17} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={17}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black text-center">
                    <ScoreBox idx={3} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={3}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={28} scores={scores} />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={28}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={4} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={4}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={18} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={18}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={5} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={5}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black text-center">
                    <ScoreBox idx={25} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={25}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={6} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={6}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={19} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={19}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={7} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={7}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={30} scores={scores} />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={30}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={8} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={8}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={20} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={20}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={9} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={9}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={26} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={26}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={10} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={10}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={21} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={21}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={11} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={11}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={29} scores={scores} />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={29}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={12} scores={scores} />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={12}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center">
                    <ScoreBox idx={22} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={22}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={13} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={13}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={27} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={27}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">
                    <ScoreBox idx={14} scores={scores} />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-b border-black px-2">
                    <GuessBox
                      idx={14}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td className="border-r border-black"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={23} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-black"></td>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={23}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center border-r border-black">
                    <ScoreBox idx={15} scores={scores} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="border-r border-b border-black px-2">
                    <GuessBox
                      idx={15}
                      words={currentWords}
                      scores={scores}
                      setWords={setCurrentWords}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
