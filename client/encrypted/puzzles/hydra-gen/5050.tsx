import { FC } from 'react';

import FlavorText from 'components/flavor_text';

const FiftyFifty: FC<{ questions: string[] }> = ({ questions }) => {
  return (
    <>
      <FlavorText>
        Shoot! You didn't think choosing a weapon to battle this thing would be
        this complicated.
      </FlavorText>
      <ul>
        {questions.map((question, idx) => (
          <li key={idx}>{question}</li>
        ))}
      </ul>
    </>
  );
};

export default FiftyFifty;
