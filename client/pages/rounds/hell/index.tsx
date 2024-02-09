import Head from 'next/head';
import React, { FC } from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';

import Custom404 from 'pages/404';

const SLUG = 'hell';

interface HellData {
  imageUrls: Record<string, { [name: string]: string }>;
}

const Hell: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const data = rounds[roundSlug].private as HellData;

  for (const puzzle of puzzles[roundSlug]) {
    if (data.imageUrls[puzzle.slug]) {
      puzzle.iconURLs = data.imageUrls[puzzle.slug];
    }
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

      <style jsx global>{`
        section.puzzles-map {
          max-width: 1000px;
          padding: 0;
        }

        .puzzle-image-label {
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          top: 0%;
          left: 0%;
        }

        .wrapper:hover .puzzle-image-label,
        .wrapper:active .puzzle-image-label {
          opacity: 1;
        }

        .canvas {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Hell;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
