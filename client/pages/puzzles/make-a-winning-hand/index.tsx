import cx from 'classnames';
import React, { FC, useRef, useState } from 'react';

import { useEventWebSocket } from 'utils/fetch';
import { useSessionUuid } from 'utils/uuid';

import { NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import WebsocketNotice from 'components/websocket_notice';

const SLUG = 'make-a-winning-hand';

interface WinningHandResponse {
  text: string;
  available_cards: string[];
  error?: number | null;
  first_time: boolean;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const uuid = useSessionUuid();

  const [cards, setCards] = useState<string[]>([]);

  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      const resp = data as WinningHandResponse;
      const outputElement = outputRef.current;
      if (outputElement == null) {
        return;
      }
      if (resp.first_time) {
        outputElement.innerText = resp.text;
      } else {
        outputElement.innerText += resp.text;
      }
      setCards(resp.available_cards);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      outputElement.scrollTop = outputElement.scrollHeight;
    },
    key: SLUG,
    options: {
      uuid,
      slug: SLUG,
    },
  });

  const send = (input: string) => {
    sendJsonMessage({ input });
    setCards([]);
  };

  const inputFieldHandler = (e: React.KeyboardEvent) => {
    const inputField = inputRef.current;
    if (inputField == null) {
      return;
    }
    if (e.key === 'Enter') {
      send(inputField.value.trim());
    }
  };

  const buttonHandler = (card: string) => (e: React.MouseEvent) => {
    const inputField = inputRef.current;
    if (inputField == null) {
      return;
    }
    inputField.value = `${card}`;
    send(inputField.value.trim());
  };

  const resetHandler = (e: React.MouseEvent) => {
    if (confirm('Reset will clear all of your progress. Are you sure?')) {
      if (outputRef.current) {
        outputRef.current.innerText = '';
      }
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setCards([]);
      send('RESET');
    }
  };

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          Your progress is local to the browser tab. Closing the tab will remove
          its progress, but will not affect other browser tabs with games in
          progress.
        </InfoIcon>
        <InfoIcon>
          If you copy-paste multiple lines in the input box, with one move on
          each line, the game will process multiple moves at once. You can paste
          up to a game's worth of moves at the same time. Any additional input
          will be ignored.
        </InfoIcon>
        <WebsocketNotice readyState={readyState} />
        <div
          ref={outputRef}
          className="output-div w-full h-[70vh] overflow-y-scroll"
        ></div>
        <div className={cx(NO_COPY_CLASS)}>
          <div className="float-left">
            <textarea
              ref={inputRef}
              onKeyDown={inputFieldHandler}
              className="m-1 px-2 py-1 text-[90%] h-[15vh] border rounded"
            />
            <br />
            <button
              onClick={resetHandler}
              className="bg-[maroon] text-white m-1 px-2 py-1 text-[90%] border-black border rounded"
            >
              Reset all progress
            </button>
          </div>
          <div className="h-[15vh] overflow-y-auto">
            {cards.map((card) => (
              <button
                className="bg-primary text-white m-1 px-2 py-1 text-[90%] border-black border rounded"
                key={`button-${card}`}
                onClick={buttonHandler(card)}
              >
                {card}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .output-div {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 10pt;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
