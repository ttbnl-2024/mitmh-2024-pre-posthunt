import crypto from 'crypto';
import Head from 'next/head';
import React, { FC } from 'react';

import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';

import Custom404 from 'pages/404';

import { ReactComponent as asphodelClip } from 'assets/rounds/rivers-of-the-dead/asphodel-clip.svg';
import { ReactComponent as dontKnowMuchClip } from 'assets/rounds/rivers-of-the-dead/dont-know-much-clip.svg';
import { ReactComponent as greekColumnsClip } from 'assets/rounds/rivers-of-the-dead/greek-columns-clip.svg';
import { ReactComponent as ivGuysClip } from 'assets/rounds/rivers-of-the-dead/iv-guys-clip.svg';
import { ReactComponent as nonCrosswordClip } from 'assets/rounds/rivers-of-the-dead/non-crossword-clip.svg';
import { ReactComponent as poeticJusticeClip } from 'assets/rounds/rivers-of-the-dead/poetic-justice-clip.svg';
import { ReactComponent as tempNameClip } from 'assets/rounds/rivers-of-the-dead/temporary-name-clip.svg';
import { ReactComponent as theLabClip } from 'assets/rounds/rivers-of-the-dead/the-laboratory-clip.svg';
import { ReactComponent as twoOutsClip } from 'assets/rounds/rivers-of-the-dead/two-outs-clip.svg';
import { ReactComponent as whyTheRomansClip } from 'assets/rounds/rivers-of-the-dead/why-the-romans-clip.svg';
import { ReactComponent as wordleClip } from 'assets/rounds/rivers-of-the-dead/wordle-clip.svg';

const SLUG = 'rivers-of-the-dead';

const SLUG_MAP = {
  '72047f43ea6bf0f960ac864a79a52341': asphodelClip,
  '13e78a7fcee65060df4e54b14e83e332': dontKnowMuchClip,
  '0c3434551a05bc5d472d081cc3a2db5a': greekColumnsClip,
  '39d1b6679a26126f36418c05e8d40fa2': ivGuysClip,
  '7f101a10ba2e3099f8f1e10b2da15b9d': nonCrosswordClip,
  '9b244a14cd2b7b6891c09152acf7e799': poeticJusticeClip,
  '1113e11125f9ae635cb2b2dde8d94f91': tempNameClip,
  '09c82ebfaa58d98c52541fb7f975c682': theLabClip,
  d1623c8d441cb42a83e6cfe86e0e1256: twoOutsClip,
  '1340563f2b137b2d47e1b6c701111601': whyTheRomansClip,
  af73137482ce1f4dc052845dc1437928: wordleClip,
};

interface RiverData {
  extraPuzzleData: Record<
    string,
    {
      hoverUrl: string;
      clipId: string;
    }
  >;
}

const Rivers: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const data = rounds[roundSlug].private as RiverData;

  const usedClips: [string, any][] = [];
  for (const puzzle of puzzles[roundSlug]) {
    const md5 = crypto.createHash('md5').update(puzzle.slug).digest('hex');
    if (SLUG_MAP[md5]) {
      puzzle.iconURLs['solved_clip'] = `#${md5}`;
      puzzle.iconURLs['unsolved_clip'] = `#${md5}`;
      puzzle.iconURLs['hover'] = data.extraPuzzleData[puzzle.slug].hoverUrl;
      usedClips.push([md5, SLUG_MAP[md5]]);
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
        <PuzzleMap roundData={rounds[roundSlug]} puzzles={puzzles} />
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>
      <div className="w-0">
        {usedClips.map(([md5, Clip]) => (
          <Clip key={md5} />
        ))}
      </div>
      <style global jsx>
        {`
          section.puzzles-map {
            max-width: 1100px;
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

          .image-hover {
            opacity: 1 !important;
          }
        `}
      </style>
    </>
  );
};

export default Rivers;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
