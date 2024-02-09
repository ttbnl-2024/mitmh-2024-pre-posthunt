import Head from 'next/head';
import React, { FC } from 'react';

import { PuzzleData } from 'components/puzzle_image';
import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';

import Custom404 from 'pages/404';

const SLUG = 'nashville';

interface NashvilleData {
  artGroups: {
    roundart: string;
    slugs: string[];
  }[];
  allPuzzles: string[];
}

const Round: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const data = rounds[roundSlug].private as NashvilleData;

  const allPuzzles = Object.fromEntries(
    Object.values(puzzles)
      .flat()
      .map((pd) => [pd.slug, pd])
  );
  const groupedPuzzles: Record<string, PuzzleData[]> = {};
  for (let i = 0; i < data.artGroups.length; i++) {
    const group = data.artGroups[i];
    const puzzles: PuzzleData[] = [];
    for (const slug of group.slugs) {
      puzzles.push(allPuzzles[slug]);
    }
    groupedPuzzles[`${i}`] = puzzles;
  }

  const sortedPuzzles = data.allPuzzles.map((slug) => allPuzzles[slug]);

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
        <div className="space-y-2">
          {data.artGroups.map(({ roundart, slugs }, idx) => {
            // This will almost certainly bite me in the ass later
            const artData = JSON.parse(JSON.stringify(rounds[roundSlug]));
            artData.roundart = roundart;
            return (
              <div key={idx}>
                <PuzzleMap
                  roundData={artData}
                  puzzles={{ _: groupedPuzzles[idx] }}
                />
              </div>
            );
          })}
        </div>
        <PuzzleList puzzles={{ nashville: sortedPuzzles }} rounds={rounds} />
      </div>
      <style global jsx>{`
        section.puzzles-map {
          max-width: 600px;
          padding: 0;
          width: 100%;
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

        section.puzzle-list {
          margin-top: 40px;
          padding-top: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Round;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
