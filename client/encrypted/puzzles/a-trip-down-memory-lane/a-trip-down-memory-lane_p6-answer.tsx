import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P6Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember… this one had something to do with interior design?"
  );
  return (
    <>
      <span>IWNDWO?</span>
    </>
  );
};

export default P6Answer;
