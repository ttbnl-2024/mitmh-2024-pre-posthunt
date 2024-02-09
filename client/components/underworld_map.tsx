import cx from 'classnames';
import React, { Fragment } from 'react';

import { LinkIfStatic } from 'components/link';
import PuzzleImage, { PuzzleData } from 'components/puzzle_image';
import { RoundData } from 'components/puzzles_map';
import ShadowImage from 'components/shadow_image';

interface Props {
  bg?: string;
  ratio?: number;
  rounds: RoundData[];
  herculeaseImage: string;
  oracleImage: string;
}

interface RoundImageProps {
  url: string;
  name: string;
  position?: [number, number];
  textAbove?: boolean;
  iconSrc: string;
  imageWidth: number;
  zIndex?: number;
}

const UnderworldRoundImage: React.FC<RoundImageProps> = ({
  url,
  name,
  position,
  iconSrc,
  imageWidth,
  zIndex = 0,
  textAbove = false,
}) => {
  const posLeft = position?.[0] ?? 0;
  const posTop = position?.[1] ?? 0;
  return (
    <div
      className="absolute round-img z-1"
      style={{
        left: `${posLeft}%`,
        top: `${posTop}%`,
        width: `${imageWidth || 15}%`,
        zIndex,
        transform: 'translate(-50%, 0%)',
      }}
    >
      <style jsx>{`
        .round-title {
          font-size: max(10px, min(18px, 2vw)) !important;
          line-height: max(10px, min(18px, 2vw)) !important;
          border-radius: 8px;
          margin: 0.75rem auto;
          max-width: 360px;
          min-width: 100px;
        }

        @media (max-width: 800px) {
          .round-title {
            min-width: fit-content;
          }
        }

        img {
          transition: transform 0.2s ease;
        }

        .wrapper:hover img,
        .wrapper:active img {
          transform: scale(1.075);
        }

        .round-title {
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          top: 0;
          left: 0;
        }

        .wrapper:hover .round-title,
        .wrapper:active .round-title {
          opacity: 1;
        }
      `}</style>
      <LinkIfStatic href={url} className="no-underline">
        <div className="wrapper">
          <img className="round-icon" alt={name} src={iconSrc} />
          <h4
            className="round-title p-1 sm:p-2 min-w-fit text-center bg-[#edceb5] font-bold"
            style={{
              ...(textAbove
                ? {
                    position: 'absolute',
                    transform: 'translate(50%, 0)',
                  }
                : {}),
            }}
          >
            {name}
          </h4>
        </div>
      </LinkIfStatic>
    </div>
  );
};

const UnderworldMap: React.FC<Props> = ({
  bg = '',
  ratio = 0.8,
  rounds,
  oracleImage,
  herculeaseImage,
}) => {
  return (
    <div className="md:pt-10">
      <div className={cx('mx-auto', { 'bg-map': !!bg })}>
        <img src={bg} draggable={false} alt="" className="w-full" />
        {rounds.map((round) => (
          <Fragment key={round.slug}>
            {round.wordmark && (
              <UnderworldRoundImage
                url={round.url}
                name={round.name}
                iconSrc={round.wordmark}
                position={
                  round.position
                    ? [round.position.x, round.position.y]
                    : undefined
                }
                imageWidth={round.position?.w ?? 15}
              />
            )}
          </Fragment>
        ))}
        <UnderworldRoundImage
          url="/oracle"
          name="Oracle of Delphi"
          iconSrc={oracleImage}
          position={[18.975, 51.617]}
          imageWidth={20.525}
        />
        <UnderworldRoundImage
          url="/puzzles/herc-u-lease"
          name="Herc-U-Lease"
          iconSrc={herculeaseImage}
          position={[84.763, 75.55]}
          imageWidth={30.45}
          textAbove
        />
        <style jsx>{`
          :global(:root) {
            background-color: rgb(85, 56, 42) !important;
          }
          .bg-map {
            overflow: hidden;
            position: relative;
            max-width: 1200px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default UnderworldMap;
