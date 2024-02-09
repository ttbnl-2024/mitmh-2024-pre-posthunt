import React, { useRef } from 'react';

import useDynamicEncrypted from 'utils/encrypted';

import Puzzle, { PuzzleData, getPuzzleProps } from 'components/puzzle';

import Custom404 from 'pages/404';

interface HydraData {
  type: 'infinity-book' | '5050-matchups' | 'reflections';
  data: number | string | string[];
  number: number;
}

// TODO: figure out how to override websocket

const PuzzlePage = ({ puzzleData }) => {
  if (puzzleData?.error) {
    return <Custom404 />;
  }

  const data = puzzleData.private as HydraData;
  const ref = useRef<HTMLDivElement>(null);

  const FF = useDynamicEncrypted<{ questions: string[] }>(
    'puzzles/hydra-gen/5050',
    {
      enabled: data.type == '5050-matchups',
    }
  );
  const InfinityBook = useDynamicEncrypted<{ target: number }>(
    'puzzles/hydra-gen/infinity-book',
    {
      enabled: data.type == 'infinity-book',
    }
  );
  const Reflections = useDynamicEncrypted<{ imgUrl: string }>(
    'puzzles/hydra-gen/reflections',
    {
      enabled: data.type == 'reflections',
    }
  );

  return (
    <Puzzle
      puzzleData={puzzleData}
      solutionLinkOverride={`/solutions/hydra-head/${data.number}`}
      copyData={data.type == '5050-matchups' ? { ref } : undefined}
      smallTitle={data.type == 'reflections'}
    >
      <div ref={ref}>
        {data.type == '5050-matchups' && (
          <FF questions={data.data as string[]} />
        )}
        {data.type == 'reflections' && (
          <Reflections imgUrl={data.data as string} />
        )}
        {data.type == 'infinity-book' && (
          <InfinityBook target={data.data as number} />
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

// This handles redirects internally
export const getServerSideProps = async (context) => {
  const { res, params } = context;
  const { headNum } = params || {};

  const slug = `hydra-head-${headNum}`;
  return await getPuzzleProps(slug)(context);
};
