import cx from 'classnames';
import { Howl } from 'howler';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';
import { useLocalStorage } from 'utils/storage';

import HuntInfoContext from 'components/context';
import { NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';
import { CopyableTwemoji, InlineTwemoji } from 'components/twemoji';

import bling from 'assets/puzzles/mandalay-bay/bling.mp3';
import blur from 'assets/puzzles/mandalay-bay/blur.png';

const SLUG = 'mandalay-bay';
const INTERVAL = 275;
const CONFETTI_TIME = 2500;

interface SpinResult {
  emojis: string[];
  message: string;
}

const SlotMachine = () => {
  const router = useRouter();
  const histLocalStorage = useLocalStorage<SpinResult[]>(`${SLUG}/history`, []);

  const [emojis, setEmojis] = useState<string[]>(['❓', '❓', '❓']);
  const [isSpinning, setSpinning] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<SpinResult[]>([]);
  const confettiRef = useRef<boolean[]>(Array(10).fill(false));
  const [confetti, setConfetti] = useState<boolean[]>(Array(10).fill(false));
  const audioStream = useRef<Howl[]>([]);

  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  const confettiProps: ConfettiProps = {
    force: 0.6,
    duration: CONFETTI_TIME,
    particleCount: 80,
    width: 1000,
  };

  useEffect(() => {
    setHistory(histLocalStorage.get());
  }, []);

  useEffect(() => {
    confettiRef.current = confetti;
  }, [confetti]);

  const spin = async () => {
    if (!loggedIn) {
      return;
    }

    setSpinning(true);

    let fetchStart = Date.now();
    const response = await clientFetch<DjangoFormResponse<{}, SpinResult>>(
      router,
      `/puzzle/${SLUG}/spin`,
      {
        method: 'POST',
        body: {},
      }
    );

    if (response.data) {
      // No, I don't know why. Yes, this has to happen for twemoji to load properly
      let badIdx = response.data.emojis.indexOf('7️');
      while (badIdx != -1) {
        response.data.emojis[badIdx] = '7️⃣';
        badIdx = response.data.emojis.indexOf('7️');
      }

      setEmojis(response.data.emojis);
      setMessage(response.data.message);
      let newHistory = history.concat(response.data);
      histLocalStorage.set(newHistory);
      setHistory(newHistory);

      if (
        response.data.message.includes('win') ||
        response.data.message.toLowerCase().includes('jackpot')
      ) {
        const stream = new Howl({
          src: bling,
          html5: true,
        });
        stream.play();
        audioStream.current.push(stream);

        let toActivate = confetti.indexOf(false);
        let nextConfetti = confetti.map((b, i) =>
          i === toActivate ? true : b
        );
        setConfetti(nextConfetti);

        setTimeout(
          (idx) => {
            let nextConfetti = confettiRef.current.map((b, i) =>
              i === idx ? false : b
            );
            setConfetti(nextConfetti);
          },
          CONFETTI_TIME,
          toActivate
        );
      }
    } else {
      setEmojis(['❌', '❌', '❌']);
      setMessage('The slot machine broke -- please contact HQ.');
    }

    // Make sure our request is complete before allowing another one
    let elapsed = Date.now() - fetchStart;
    setTimeout(() => setSpinning(false), Math.max(INTERVAL - elapsed, 50));
  };

  return (
    <>
      <style jsx global>{`
        .slot-machine {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .reels {
          display: flex;
          align-items: center;
        }

        .reel-view {
          border: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
        }

        .spin-button {
          width: 95px;
          font-weight: bold;
          border: 1px solid black;
          aspect-ratio: 1;
        }

        .spin-history-table td:first-child {
          border-left: 1px solid black !important;
        }
      `}</style>

      <div className={cx('slot-machine', NO_COPY_CLASS)}>
        <div className="reels p-1 sm:p-4 bg-slate-600 rounded-md">
          <div>
            {confetti.map(
              (b, i) =>
                b && (
                  <ConfettiExplosion
                    key={`confetti-1-${i}`}
                    {...confettiProps}
                  />
                )
            )}
          </div>
          {emojis.map((emoji, i) => (
            <div className="reel-view rounded-md m-1 sm:m-2" key={`reel-${i}`}>
              <div className="reel">
                {isSpinning ? (
                  <img src={blur} />
                ) : (
                  <CopyableTwemoji
                    emoji={emoji}
                    options={{
                      className: 'reel-emoji p-1 sm:p-[11px]',
                      copyUnicodeEmoji: true,
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          <div>
            {confetti.map(
              (b, i) =>
                b && (
                  <ConfettiExplosion
                    key={`confetti-2-${i}`}
                    {...confettiProps}
                  />
                )
            )}
          </div>
          <button
            onClick={spin}
            disabled={isSpinning}
            className="spin-button ml-3 sm:ml-6 my-2 rounded-full bg-red-400 text-2xl"
          >
            SPIN
          </button>
        </div>

        <h4 className="max-w-full text-center font-bold mt-3">
          {message || '\xa0'}
        </h4>
      </div>

      <h3>Your Spin History</h3>

      <Table isFixed className="spin-history-table max-w-xl mx-auto mt-4">
        <thead>
          <tr>
            <th colSpan={3} className="w-[139px] text-center">
              Spin
            </th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {history
            .slice()
            .reverse()
            .map((h, i) => (
              <tr key={`hist-table-tr-${history.length - i}`}>
                {h.emojis.map((e, i2) => (
                  <td
                    className="text-3xl leading-8 !py-1 !sm:py-0 !px-0 !border-x-0 text-center"
                    key={`ht-e-${history.length - i}-${i2}`}
                  >
                    <InlineTwemoji emoji={e} />
                  </td>
                ))}
                <td className="max-w-[30%]">{h.message}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You see an old slot machine in the back of the casino titled "Lexiko's
          Delight". In fine print on the machine it says: "Jackpot odds:
          (27:21,925)." You sit down and get a pen and paper. You're probably
          going to be here all night.
        </FlavorText>
        <div className="mt-4" />
        <SlotMachine />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
