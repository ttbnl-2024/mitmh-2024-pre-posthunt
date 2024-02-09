import { FC } from 'react';

interface AnswerParams {
  setAlmostAnswerResponse: { set: (v: string) => void };
}

const P7Answer: FC<AnswerParams> = ({ setAlmostAnswerResponse }) => {
  setAlmostAnswerResponse.set(
    "Hmmm… this answer doesn't seem quite right! I'm trying to remember… this one had something to do with Agatha Christie?"
  );
  return (
    <>
      <span>UMRDRE?</span>
    </>
  );
};

export default P7Answer;
