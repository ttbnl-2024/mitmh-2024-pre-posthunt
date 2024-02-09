import cx from 'classnames';
import React, {
  FC,
  FormEvent,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import useDynamicEncrypted from 'utils/encrypted';
import { addDecryptionKeys, clientFetch, useEventWebSocket } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import { Countdown } from 'components/countdown';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import WebsocketNotice from 'components/websocket_notice';

import image0 from 'assets/puzzles/temporary-name/0.png';

const SLUG = 'temporary-name';

interface TempNamePrivateData {
  part2?: boolean;
  secondsToWait?: number;
  correctAnswers?: string[];
}

const TITLES: [string, string][] = [
  ['Bizarre-o-Land', 'bizarre'],
  ['Peferdefedofor!', 'perferdefedofor'],
  ['Cousteau', 'cousteau'],
  ['Seriously tangled and randomly ticklish', 'seriously'],
  ["I, also, can't get none of it", 'iAlso'],
  ['Prem or Tem?', 'prem'],
  ['(Lambda) Beta Testing', 'lambdaBeta'],
  ['Home of the Head Honcho on Earth', 'honcho'],
  ['Follow the red... stapler', 'stapler'],
];

const ANSWERS = [
  '',
  'AFTERBIRTH',
  'BAZAAR',
  'HEARTH',
  'OFFICE SPACE',
  'OUST',
  'SATISFACTION',
  'START',
  'TABLE SETTING',
  'WHO CAME IN 4TH',
];

function getCountdown(secondsToWait: number, onFinish: () => void) {
  return (
    <Countdown
      seconds={secondsToWait}
      countdownFinishCallback={onFinish}
      showHours
    />
  );
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  const privateData: TempNamePrivateData = puzzleData.private;
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState<boolean>(!!process.env.useWorker);
  const [part2Unlocked, setPart2Unlocked] = useState<boolean>(
    privateData.part2 || false
  );
  const [message, setMessage] = useState<string>('');
  const [timeoutError, setTimeoutError] = useState<any>('');
  const [secondsToWait, setSecondsToWait] = useState<number>(
    privateData?.secondsToWait || 0
  );
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(
    privateData?.correctAnswers || []
  );

  useEffect(() => {
    if (secondsToWait > 0) {
      const timer = getCountdown(
        secondsToWait,
        // reset on finish
        () => {
          setSecondsToWait(0);
        }
      );
      const error = (
        <>
          <span>Your next guess will be available in:</span>{' '}
          <strong>{timer}</strong>
        </>
      );
      setTimeoutError(error);
    } else {
      setTimeoutError('');
    }
  }, [secondsToWait]);

  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      const resp = data as TempNamePrivateData;
      if (resp.secondsToWait) {
        setSecondsToWait(resp.secondsToWait);
      }
      if (resp.part2) {
        // addDecryptionKeys(resp);
        setPart2Unlocked(resp.part2);
      }
      if (resp.correctAnswers) {
        setCorrectAnswers(correctAnswers);
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
      DjangoFormResponse<
        {},
        { part2?: boolean; secondsToWait?: number; correctAnswers?: string[] }
      >
    >(router, `/puzzle/${SLUG}/guess`, {
      method: 'POST',
      body: formData,
    });

    if (response?.form_errors) {
      setMessage('Error!');
    }
    if (response.data?.part2) {
      setPart2Unlocked(true);
      setSecondsToWait(0);
      setMessage('Correct! Refresh the page to fix copy-to-clipboard.');
      setCorrectAnswers(response.data?.correctAnswers || []);
    } else {
      setMessage('Incorrect!');
      setSecondsToWait(response.data?.secondsToWait || 0);
    }
    setLoading(false);
  };

  let ExtractTable = useDynamicEncrypted<{}>(
    `puzzles/${SLUG}/temporary-name_table`,
    { enabled: part2Unlocked }
  );

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The underworld is where puzzles go when they die. What caused this
          puzzle's untimely death?
        </FlavorText>
        <WebsocketNotice readyState={readyState} />
        <SheetableImage
          alt={`There is a board with the words "Puzzle writing workshop" across the top.
On the left side of the board there is a wheel with ten segments and a sign with the words "Out of order" hanging on top of it.
The segments on the wheel are labeled as such going clockwise: "Acrostic", "Anagrams", "Antonyms", "Container", "Cryptic", "Homophones", "ID Movies", "Obscure Languages", and "Song Lyrics". The last segment is cut off, and starts "Syn".
On the right side of the board there is a section called "To do:" and a section called "Answers:".
The "To do:" section says "Pick an answer from the board and spin the wheel for inspiration. Go write a puzzle!"
The "Answers:" section has nine boxes layed somewhat haphazardly in the section. The boxes in reading order are "Bazaar", "Hearth", "Who came in 4th", "Satisfaction", "Afterbirth", "Start", "Table Setting", "Oust", and "Office Space"`}
          src={image0}
          title=""
          className="mx-auto"
        />
        <InfoIcon>
          Submitting an incorrect answer here will cause a timeout. The timeout
          will be at least a minute long.
        </InfoIcon>
        <form onSubmit={formSubmitHandler}>
          <Table>
            <thead>
              <tr>
                <th>Puzzle Name</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {TITLES.map(([title, formName], idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <label className="text-right" htmlFor={formName}>
                        {title}
                      </label>
                    </td>
                    <td>
                      {correctAnswers.length > 0 && (
                        <span className={cx(HIDDEN_CLASS, 'font-mono')}>
                          {correctAnswers[idx]}
                        </span>
                      )}
                      <select
                        name={formName}
                        className={cx(
                          NO_COPY_CLASS,
                          'font-mono px-2 py-1 mx-1'
                        )}
                        disabled={part2Unlocked}
                        defaultValue={
                          correctAnswers.length > 0
                            ? correctAnswers[idx]
                            : undefined
                        }
                      >
                        {ANSWERS.map((answer, idx) => (
                          <option value={answer} key={idx}>
                            {answer}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {correctAnswers.length == 0 && (
            <div className={cx(HIDDEN_CLASS)}>
              <span>The options in the dropdown are:</span>
              <ul>
                {ANSWERS.map((answer, idx) => (
                  <li key={idx} className="font-mono">
                    {answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className={cx(
                'mt-2 !bg-neutral-300 !text-black border-none rounded-xl p-2',
                NO_COPY_CLASS
              )}
              disabled={part2Unlocked || secondsToWait > 0 || isLoading}
            />
            {message && (
              <>
                <br />
                <p>{message}</p>
              </>
            )}
            {timeoutError && <p className="error">{timeoutError}</p>}
          </div>
        </form>
        {part2Unlocked && (
          <>
            <hr className="my-4" />
            <ExtractTable />
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
