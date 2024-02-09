import cx from 'classnames';
import Head from 'next/head';
import { FC, Fragment } from 'react';

import { serverFetch } from 'utils/fetch';

import { LinkIfStatic } from 'components/link';
import { RoundData } from 'components/puzzles_map';

import capstoneHover from 'assets/overworld/capstone_glow.png';
import capstonePin from 'assets/overworld/capstone_noglow.png';
import solvedHover from 'assets/overworld/green_glow.png';
import solvedPin from 'assets/overworld/green_noglow.png';
import kraken from 'assets/overworld/kraken.png';
import { ReactComponent as PinClip } from 'assets/overworld/pin_clip.svg';
import unsolvedHover from 'assets/overworld/red_glow.png';
import unsolvedPin from 'assets/overworld/red_noglow.png';
import specialHover from 'assets/overworld/yellow_glow.png';
import specialPin from 'assets/overworld/yellow_noglow.png';

interface RoundProps {
  bg?: string;
  rounds: (RoundData & { done: boolean; bgColor: string })[];
  ratio?: number; // Aspect ratio for bg image
  capstone?: {
    slug: string;
    name: string;
  };
}

interface RoundImageProps {
  url: string;
  name: string;
  position?: [number, number];
  iconSrc?: string;
  imageWidth: number;
  zIndex?: number;
  type: 'done' | 'not-done' | 'capstone' | 'special';
  bgColor: string;
  hoverText?: string;
  noClip?: boolean;
}

const OverworldRoundPin: FC<RoundImageProps> = ({
  url,
  name,
  position,
  iconSrc,
  imageWidth,
  zIndex = 0,
  type,
  bgColor,
  hoverText,
  noClip = false,
}) => {
  const posLeft = position?.[0] ?? 0;
  const posTop = position?.[1] ?? 0;
  const pinType =
    type == 'done'
      ? solvedPin
      : type == 'not-done'
      ? unsolvedPin
      : type == 'capstone'
      ? capstonePin
      : specialPin; // used for underworld
  const hoverPin =
    type == 'done'
      ? solvedHover
      : type == 'not-done'
      ? unsolvedHover
      : type == 'capstone'
      ? capstoneHover
      : specialHover; // used for underworld

  return (
    <div
      className="absolute round-img z-1 pointer-events-none"
      style={{
        left: `${posLeft}%`,
        top: `${posTop}%`,
        width: `${imageWidth || 15}%`,
        zIndex: `${zIndex}`,
        transform: 'translate(-50%, 0%)',
      }}
    >
      <style jsx>{`
        img,
        .round-wordmark,
        .round-title {
          transition:
            transform 0.2s ease-in-out,
            opacity 0.25s ease-in-out;
        }

        .round-wordmark,
        .round-title {
          transform: translate(-50%, 0%);
          left: 50%;
        }

        .wrapper:hover img,
        .wrapper:active img {
          transform: scale(1.075);
        }

        .round-wordmark {
          bottom: 85%;
        }

        .round-link {
          clip-path: url('#mapPinClip');
        }

        .round-icon-hover,
        .round-wordmark,
        .round-title {
          opacity: 0;
        }

        :is(.wrapper:hover, .wrapper:active)
          :is(.round-icon-hover, .round-wordmark, .round-title) {
          opacity: 1;
        }
      `}</style>
      <div className="wrapper">
        <LinkIfStatic
          href={url}
          style={noClip ? {} : { clipPath: `url("#mapPinClip")` }}
          className="absolute round-link pointer-events-auto w-full"
        >
          {/* Just in here to make the link size right... */}
          <img className="opacity-0" alt={name} src={pinType} />
        </LinkIfStatic>
        {/* Just in here to make the div size right... */}
        <img className="round-icon absolute" alt={name} src={pinType} />
        <img className="round-icon-hover absolute" alt={name} src={hoverPin} />
        {iconSrc && (
          <div
            className="round-wordmark absolute rounded-xl w-[200%] p-[7%]"
            style={{
              backgroundColor: `${bgColor}`,
            }}
          >
            <img className="max-w-[90%] mx-auto" alt={name} src={iconSrc} />
          </div>
        )}
        {hoverText && (
          <h4
            className={cx(
              'round-title absolute p-1 sm:p-2 min-w-fit',
              'text-center font-bold rounded-lg'
            )}
            style={{
              backgroundColor: `${bgColor}`,
            }}
          >
            {hoverText}
          </h4>
        )}
        {/* Just here for div sizing */}
        <img className="opacity-0" alt={name} src={pinType} />
      </div>
    </div>
  );
};

const OverworldMap: React.FC<RoundProps> = ({
  bg = '',
  ratio = 0.8,
  rounds,
  capstone,
}) => {
  return (
    <div className="flex flex-row items-start map-container h-[100vh]">
      <div className="w-0">
        <PinClip />
      </div>
      <div className={cx('w-full', { 'bg-map': !!bg })}>
        <img src={bg} draggable={false} alt="" className="w-full" />
        {rounds.map((round) => {
          if (capstone && round.slug === capstone.slug) {
            return (
              <OverworldRoundPin
                url={round.url}
                name={capstone.name}
                position={[round.position!.x, round.position!.y]}
                imageWidth={round.position!.w ?? 15}
                type="capstone"
                bgColor="#ffffff"
                hoverText={capstone.name}
                zIndex={round.position?.z ?? 0}
                noClip={true}
                key={round.slug}
              />
            );
          } else {
            return (
              <Fragment key={round.slug}>
                {
                  <OverworldRoundPin
                    url={round.url}
                    name={round.name}
                    iconSrc={round.wordmark}
                    position={
                      round.position
                        ? [round.position.x, round.position.y]
                        : undefined
                    }
                    imageWidth={round.position?.w ?? 15}
                    type={round.done ? 'done' : 'not-done'}
                    bgColor={round.bgColor}
                    zIndex={round.position?.z ?? 0}
                  />
                }
              </Fragment>
            );
          }
        })}
        <OverworldRoundPin
          url="/"
          name="Underworld"
          position={[22.708, 21.325]}
          imageWidth={8.867}
          type="special"
          bgColor="#edceb5"
          hoverText="Underworld"
          zIndex={7}
        />
        <OverworldRoundPin
          url="/oracle"
          name="Oracle of Philadelphia"
          position={[74.292, 34.1]}
          imageWidth={8.867}
          type="special"
          bgColor="#ffffff"
          hoverText="Oracle of Philadelphia"
          zIndex={2}
        />
        <style jsx global>{`
          :root {
            background: rgb(27, 30, 38);
            background-image: none;
          }
          :global(body),
          :global(#__next) {
            --primary: rgb(8, 9, 13);
            --link: var(--primary);
            background: rgb(27, 30, 38);
            background-image: none !important;
          }
          :global(.map-container) {
            padding-top: calc(40px + 6vw);
          }
          .bg-map {
            position: relative;
            max-width: 100%;
          }
        `}</style>
      </div>
    </div>
  );
};

const OverworldPage: React.FC<RoundProps> = ({ rounds, ...props }) => {
  return (
    <>
      <Head>
        <title>The Overworld</title>
        <link
          key="favicon"
          rel="shortcut icon"
          href={kraken}
          type="image/vnd.microsoft.icon"
        />
      </Head>
      <OverworldMap rounds={rounds} {...props} />
    </>
  );
};

export default OverworldPage;
export const getServerSideProps = async (context) => {
  const props = await serverFetch<RoundProps>(context, '/overworld_rounds');
  return { props };
};
