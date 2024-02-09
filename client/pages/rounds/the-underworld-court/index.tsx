import Head from 'next/head';
import React, { useRef } from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, { getPuzzlesMapProps } from 'components/puzzles_map';

import Custom404 from 'pages/404';

const SLUG = 'the-underworld-court';

const Round = ({ puzzles, rounds, roundSlug }) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  return (
    <>
      <Head>
        <title>{rounds[roundSlug].name}</title>
        {rounds[roundSlug].favicon && (
          <link
            key="favicon"
            rel="shortcut icon"
            href={rounds[roundSlug].favicon}
            type="image/vnd.microsoft.icon"
          />
        )}
      </Head>

      <div className="md:pt-10 pb-8">
        <PuzzleMap roundData={rounds[roundSlug]} puzzles={puzzles} />
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <style global jsx>{`
        section.puzzles-map {
          max-width: 1500px;
          padding: 0;
          width: 100%;
        }

        .canvas {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Round;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
