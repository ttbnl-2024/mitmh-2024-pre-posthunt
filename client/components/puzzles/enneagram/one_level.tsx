import cx from 'classnames';
import { Dispatch, FC, SetStateAction, useRef } from 'react';

import { Gram } from 'components/puzzles/enneagram/core';

interface OneLevelProps {
  gram: Gram;
  signature: string;
  solved: number[];
  prev?: Gram;
  next?: Gram;
  guessHandler: any;
  setActiveProblem: Dispatch<SetStateAction<number>>;
}

const OneLevel: FC<OneLevelProps> = ({
  gram,
  signature,
  solved,
  guessHandler,
  prev,
  next,
  setActiveProblem,
}) => {
  const formRef = useRef(null);
  return (
    <>
      <style jsx>{`
        input {
          margin: 10px auto 0;
          display: block;
          text-align: center;
          background-color: #77aa77;
          border-radius: clamp(5px, 1.2vw, 10px);
          border: solid #113311;
          border-width: clamp(5px, 1.2vw, 10px);
          width: clamp(300px, 100%, 560px);
          text-transform: uppercase;
        }

        input:focus {
          outline: none;
        }

        .enn-comp {
          background-color: #cccc77;
          border: solid #555511;
          border-width: clamp(5px, 1.2vw, 10px);
          color: #555511;
        }
      `}</style>
      <div className="mt-[70px] text-center">{gram.gram}</div>
      {/* TODO: input on submit and on defocus. Construct form, mail in! */}
      <form ref={formRef} onSubmit={guessHandler}>
        <input
          type="text"
          name="guess"
          autoComplete="off"
          autoFocus
          className={cx({ 'enn-comp': gram.solved })}
        />
        <input type="hidden" name="gramNum" value={gram.num} />
        <input type="hidden" name="signature" value={signature} />
        <input type="hidden" name="solved" value={solved.join(',')} />
      </form>

      <div className="mt-[266px] text-center">
        <button
          className={cx('enn-little relative top-1/2 translate-y-[-50%]', {
            'enn-greyed': prev === undefined,
          })}
          onClick={(_) => {
            if (prev) setActiveProblem(prev.num);
          }}
        >
          ←<span className="hidden sm:inline"> PRECEDING</span>
        </button>
        <span className="mx-16">{gram.num}</span>
        <button
          className={cx('enn-little relative top-1/2 translate-y-[-50%]', {
            'enn-greyed': next === undefined,
          })}
          onClick={(_) => {
            if (next) setActiveProblem(next.num);
          }}
        >
          <span className="hidden sm:inline">FOLLOWING </span>→
        </button>
      </div>
    </>
  );
};

export default OneLevel;
