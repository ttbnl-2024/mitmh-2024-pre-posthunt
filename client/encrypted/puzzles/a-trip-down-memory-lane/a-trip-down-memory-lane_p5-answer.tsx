import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P5Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember… this one had something to do with a hospital?"
  );
  return (
    <>
      <span>?APITNET</span>
    </>
  );
};

export default P5Answer;
