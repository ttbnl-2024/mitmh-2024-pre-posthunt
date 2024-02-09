import Head from 'next/head';
import React, { FC } from 'react';

import InfoIcon from 'components/info_icon';
import { PuzzleData } from 'components/puzzle_image';
import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';
import Section from 'components/section';

import Custom404 from 'pages/404';

const SLUG = 'the-hole-in-the-ceiling-of-hades';

interface HeraData {
  artGroups: {
    roundart: string;
    slugs: string[];
  }[];
  teamInfo: Record<string, string>;
}

const Round: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const data = rounds[roundSlug].private as HeraData;

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
      const puzzle = allPuzzles[slug];
      if (data.teamInfo[slug]) {
        puzzle.extra = `Discoverer: ${data.teamInfo[slug]}`;
      }
      puzzles.push(allPuzzles[slug]);
    }
    groupedPuzzles[`${i}`] = puzzles;
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
        {/* TODO: somehow render team name in here... extra data kludge? */}
        <div className="space-y-4">
          {data.artGroups.map(({ roundart, slugs }, idx) => {
            // This will almost certainly bite me in the ass later
            const artData = JSON.parse(JSON.stringify(rounds[roundSlug]));
            artData.roundart = roundart;
            return (
              groupedPuzzles[idx].length > 0 && (
                <div key={idx}>
                  <PuzzleMap
                    roundData={artData}
                    puzzles={{ _: groupedPuzzles[idx] }}
                  />
                </div>
              )
            );
          })}
        </div>
        <Section
          style={{
            maxWidth: `min(95%,1e3px)`,
            borderTopLeftRadius: `0.375em`,
            borderTopRightRadius: `0.375em`,
          }}
          className="bg-white"
        >
          <InfoIcon>
            These constellations have been discovered by intrepid Meeting of
            Interplanetary Theorists attendees. Their names and art are not part
            of a puzzle.
          </InfoIcon>
        </Section>
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <style global jsx>{`
        section.puzzles-map {
          max-width: 700px;
          padding: 0;
          width: 100%;
          min-height: 0;
        }

        .puzzle-list {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          margin-top: 0 !important;
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
