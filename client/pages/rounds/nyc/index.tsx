import Head from 'next/head';
import React, { useRef } from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, { getPuzzlesMapProps } from 'components/puzzles_map';

import Custom404 from 'pages/404';

const SLUG = 'nyc';

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
        <div className="wordmark flex justify-center w-full py-4">
          <img
            className="mark max-w-[15%] min-w-[300px]"
            src={rounds[roundSlug].wordmark}
          />
        </div>
        <PuzzleMap roundData={rounds[roundSlug]} puzzles={puzzles} />
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <style global jsx>{`
        .canvas {
          margin: 0 auto;
          width: fit-content;
        }
        .roundart {
          max-width: none;
          width: auto;
          height: max(450px, 45vh);
        }
        section.puzzles-map {
          padding: 0;
          width: 100%;
          max-width: 100%;
          min-height: 0;
        }
        section.puzzles-map > div {
          overflow-x: scroll;
          overflow-y: clip;
          scrollbar-color: rgb(89, 89, 89) rgb(64, 8, 9);
        }
        .puzzle-image-label {
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          top: 0;
          left: 0;
        }

        .wrapper:hover .puzzle-image-label,
        .wrapper:active .puzzle-image-label {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Round;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
