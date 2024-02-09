import React from 'react';

import PuzzleApiComment from 'components/puzzle_api_comment';
import PuzzlesList, { getPuzzlesListProps } from 'components/puzzles_list';
import { RoundProps } from 'components/puzzles_map';
import Section from 'components/section';
import Title from 'components/title';

import Custom404 from 'pages/404';

const PuzzlesPage = ({ puzzles, rounds }: RoundProps) => {
  if (!Object.keys(puzzles).length) {
    return <Custom404 />;
  }

  return (
    <div className="pt-20">
      <Title title="Puzzles" className="text-white" />
      <PuzzleApiComment />
      <div className="py-8"></div>
      <Section className="bg-white rounded-md">
        <PuzzlesList puzzles={puzzles} rounds={rounds} />
      </Section>
    </div>
  );
};

export default PuzzlesPage;
export const getServerSideProps = getPuzzlesListProps;
