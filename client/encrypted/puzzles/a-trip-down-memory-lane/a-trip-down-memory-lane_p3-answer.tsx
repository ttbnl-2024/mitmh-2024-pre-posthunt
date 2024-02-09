import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P3Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember… this one had something to do with racing?"
  );
  return (
    <>
      <span>?SPROTS</span>
    </>
  );
};

export default P3Answer;
