import React, { FC, useContext, useMemo } from 'react';

import { serverFetch } from 'utils/fetch';

import { PuzzleData } from 'components/puzzle_image';
import PuzzleTable from 'components/puzzle_table';
import { RoundData, RoundProps } from 'components/puzzles_map';
import Section from 'components/section';

import Custom404 from 'pages/404';

const CAPSTONE_SLUG = 'road-trip-redux';

const PuzzlesList: FC<RoundProps> = ({ puzzles, rounds }) => {
  return (
    <Section className="puzzle-list rounded-md space-y-6">
      {Object.entries(puzzles).map(([roundSlug, puzzlesInRound]) => (
        <PuzzleTable
          key={roundSlug}
          roundSlug={roundSlug}
          roundData={rounds[roundSlug]}
          puzzles={roundSlug === CAPSTONE_SLUG ? [] : [puzzlesInRound]}
        />
      ))}

      <style global jsx>{`
        section.puzzle-list {
          max-width: min(95%, 1000px);
          margin-bottom: 40px;
          background-color: white;
        }
        section + .puzzle-list {
          margin-top: 40px;
          padding-top: 0.5rem;
        }
      `}</style>
    </Section>
  );
};

export default PuzzlesList;
export const getPuzzlesListProps = async (context) => {
  let props: RoundProps;
  if (process.env.isStatic) {
    try {
      props = require('assets/json_responses/puzzles.json');
    } catch {
      props = {} as RoundProps;
    }
  } else {
    props = await serverFetch<RoundProps>(context, '/puzzles');
  }
  return {
    props,
  };
};
