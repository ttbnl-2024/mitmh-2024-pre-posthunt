import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P1Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember…?"
  );
  return (
    <>
      <span>?ACMPSU</span>
    </>
  );
};

export default P1Answer;
