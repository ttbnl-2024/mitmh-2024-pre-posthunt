import React, { FC, useRef } from 'react';

import { useLocalStorage } from 'utils/storage';

import almost from 'assets/puzzles/a-trip-down-memory-lane/Almost.mp3';
import correct from 'assets/puzzles/a-trip-down-memory-lane/Correct.mp3';
import incorrect from 'assets/puzzles/a-trip-down-memory-lane/Incorrect.mp3';

// public domain hash function
// https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js
const cyrb53 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const almostAnswerHashes = [
  7649595747163697, 7124006369009239, 2386754540919365, 2843342669023063,
  4355195819646196, 8425310754309280, 3329966513234173,
];
const actualAnswerHashes = [
  2920460176911115, 7699661847299960, 8525366707803220, 4626965070291483,
  5947987882881449, 7090452814044634, 6505899566060525,
];

interface AnswerCheckerParams {
  puzzleNumber: number;
  almostAnswersResponseStorage: {
    get: () => string;
    set: (value: string) => void;
  }[];
  actualAnswersStorage: { get: () => string; set: (value: string) => void }[];
  updateActualAnswersRender: () => void;
}

const AnswerChecker: FC<AnswerCheckerParams> = ({
  puzzleNumber,
  almostAnswersResponseStorage,
  actualAnswersStorage,
  updateActualAnswersRender,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const volumeStorage = useLocalStorage<number>('volume');
  const checkAnswer = () => {
    const answer =
      inputRef.current?.value.toUpperCase().replace(/[^A-Z\?]/g, '') ?? '';
    let volume = volumeStorage.get();
    if (volume != null && volume != Infinity && volume != -Infinity) {
      volume = volume / 100;
      if (volume < 0) {
        volume = 0;
      } else if (volume > 1) {
        volume = 1;
      }
    } else {
      volume = 0.5;
    }
    if (cyrb53(answer) === almostAnswerHashes[puzzleNumber - 1]) {
      const audio = new Audio(almost);
      audio.volume = volume;
      audio.loop = false;
      audio
        .play()
        .then(() =>
          window.alert(almostAnswersResponseStorage[puzzleNumber - 1].get())
        );
    } else if (cyrb53(answer) === actualAnswerHashes[puzzleNumber - 1]) {
      actualAnswersStorage[puzzleNumber - 1].set(answer);
      updateActualAnswersRender();
      const audio = new Audio(correct);
      audio.volume = volume;
      audio.loop = false;
      audio.play().then(() => window.alert('Correct!'));
    } else {
      const audio = new Audio(incorrect);
      audio.volume = volume;
      audio.loop = false;
      audio.play().then(() => window.alert('Wrong answer!'));
    }
  };

  const textEnterHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  if (!actualAnswersStorage[puzzleNumber - 1].get()) {
    return (
      <>
        <input
          ref={inputRef}
          type="text"
          className="answer font-mono px-3 py-2 ml-8"
          onKeyDown={textEnterHandler}
        />
        <input
          onClick={checkAnswer}
          className="ui-button font-smallcaps font-bold py-2 px-4"
          type="submit"
          value="Submit"
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default AnswerChecker;
