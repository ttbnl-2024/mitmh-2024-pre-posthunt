import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P4Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember… this one had something to do with a church?"
  );
  return (
    <>
      <span>?IPCEE</span>
    </>
  );
};

export default P4Answer;
