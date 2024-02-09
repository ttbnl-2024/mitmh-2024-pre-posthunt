import Head from 'next/head';
import React from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, { getPuzzlesMapProps } from 'components/puzzles_map';

import Custom404 from 'pages/404';

const SLUG = 'texas';

interface TexasData {
  extraImage: string;
}

const Texas = ({ puzzles, rounds, roundSlug }) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const data = rounds[roundSlug].private as TexasData;

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
        <PuzzleMap
          roundData={rounds[roundSlug]}
          puzzles={puzzles}
          extraImages={[data.extraImage]}
        />
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <style global jsx>{`
        section.puzzles-map {
          max-width: 1000px;
          padding: 0;
          width: 100%;
        }

        div.glow-translate-target {
          // -4.76% undoes the padding from the glow
          transform: translate(0, -4.76%);
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

        .canvas {
          margin: 0 auto;
          overflow: hidden;
        }

        .puzzle-image-label > h4.puzzle-image-title,
        .puzzle-image-label > h5 {
          {/* background-color: rgb(48, 48, 48); */}
          {/* color: white; */}
        }

        .extra-image {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default Texas;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
