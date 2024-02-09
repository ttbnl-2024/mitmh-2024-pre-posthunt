import { data } from 'autoprefixer';
import Head from 'next/head';
import React, { FC } from 'react';

import AutoResizer from 'components/autoresizer';
import PuzzleList from 'components/puzzles_list';
import PuzzleMap, {
  RoundProps,
  getPuzzlesMapProps,
} from 'components/puzzles_map';
import Section from 'components/section';

import Custom404 from 'pages/404';

const SLUG = 'everglades';

interface HydraData {
  sneks?: [{ iconSize: number; position: [number, number]; iconURL: string }];
}

const Everglades: FC<RoundProps & { roundSlug: string }> = ({
  puzzles,
  rounds,
  roundSlug,
}) => {
  if (!puzzles || !rounds?.[roundSlug]) {
    return <Custom404 />;
  }

  const roundData = rounds[roundSlug];
  const privateData = roundData.private as HydraData;

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

        <Section className="puzzles-map pt-0 min-h-[50vh]">
          <AutoResizer
            className="select-none"
            autoresize={roundData.autoresize}
          >
            {(width, height, ref) => (
              <>
                <img
                  key={roundData.slug}
                  alt=""
                  className="w-full roundart"
                  src={roundData.roundart}
                  draggable={false}
                />
                {privateData.sneks &&
                  privateData.sneks.map(
                    ({ iconSize, position, iconURL }, idx) => {
                      const [x, y] = position;
                      return (
                        <img
                          key={idx}
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${iconSize || 15}%`,
                            transform: 'translate(-50%, 0)',
                            position: 'absolute',
                          }}
                          src={iconURL}
                          draggable={false}
                        />
                      );
                    }
                  )}
              </>
            )}
          </AutoResizer>
        </Section>
        <PuzzleList puzzles={puzzles} rounds={rounds} />
      </div>

      <style jsx global>{`
        section.puzzles-map {
          max-width: 1400px;
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

export default Everglades;
export const getServerSideProps = async (context) => {
  return await getPuzzlesMapProps(SLUG, true /* redirect */)(context);
};
