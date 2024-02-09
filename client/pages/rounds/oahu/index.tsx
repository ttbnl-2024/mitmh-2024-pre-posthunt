import crypto from 'crypto';
import Head from 'next/head';
import React, { FC, useRef } from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';

import Custom404 from 'pages/404';

import { ReactComponent as AphroditeClip } from 'assets/rounds/oahu/aphrodite-clip.svg';

const SLUG = 'oahu';

interface OahuData {
  sparkles: string;
}

const Round: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }
  const data = rounds[roundSlug].private as OahuData | undefined;

  const clips = new Set(['6e8cdd48b5f95b210170ccabe5b8af2b']);

  for (const puzzle of puzzles[roundSlug]) {
    const md5 = crypto.createHash('md5').update(puzzle.slug).digest('hex');
    if (clips.has(md5)) {
      puzzle.iconURLs['solved_clip'] = `#${md5}`;
      puzzle.iconURLs['unsolved_clip'] = `#${md5}`;
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
      <div className="w-0">
        <AphroditeClip />
      </div>

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
          extraImages={data ? [data.sparkles] : []}
        />
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <style global jsx>{`
        section.puzzles-map {
          max-width: 1600px;
          padding: 0;
          width: 100%;
        }

        .canvas {
          overflow: hidden;
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

        .extra-image {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default Round;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
