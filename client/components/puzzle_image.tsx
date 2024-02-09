import cx from 'classnames';
import React, { FunctionComponent, useContext } from 'react';

import HuntInfoContext from 'components/context';
import { LinkIfStatic } from 'components/link';
import ShineImage from 'components/shine_image';

export interface PuzzleData {
  name: string;
  slug: string;
  iconURLs: { [name: string]: string };
  isMeta: boolean;
  position: [number, number];
  zIndex: number;
  mainRoundPosition?: [number, number];
  iconSize: number;
  textPosition: [number, number];
  round: string;
  url?: string;
  answer?: string; // Only present if team has solved the puzzle
  ne?: number; // Used for nesting in the puzzle list
  extra?: string;
}

const getIcon = (
  puzzleData: PuzzleData,
  loggedIn: boolean,
  huntIsOver: boolean,
  showSolved: boolean
) => {
  if (huntIsOver && !loggedIn) {
    if (puzzleData.iconURLs.solved && showSolved) {
      return puzzleData.iconURLs.solved;
    } else {
      return puzzleData.iconURLs.unsolved;
    }
  }
  // Otherwise, follow default behavior.
  // We expect that the solved key only exists in the data if puzzle is solved.
  if (puzzleData.iconURLs.solved) {
    return puzzleData.iconURLs.solved;
  } else {
    return puzzleData.iconURLs.unsolved;
  }
};

const getClip = (
  puzzleData: PuzzleData,
  loggedIn: boolean,
  huntIsOver: boolean,
  showSolved: boolean
) => {
  if (huntIsOver && !loggedIn) {
    if (puzzleData.iconURLs.solved_clip && showSolved) {
      return puzzleData.iconURLs.solved_clip;
    } else {
      return puzzleData.iconURLs.unsolved_clip;
    }
  }
  // Otherwise, follow default behavior.
  // We expect that the solved key only exists in the data if puzzle is solved.
  if (puzzleData.iconURLs.solved_clip) {
    return puzzleData.iconURLs.solved_clip;
  } else {
    return puzzleData.iconURLs.unsolved_clip;
  }
};

export const PuzzleImageTitle: FunctionComponent<{
  puzzleData: PuzzleData;
}> = ({ puzzleData }) => (
  <h4
    className={cx('puzzle-image-title p-1 sm:p-2 min-w-fit', {
      'font-bold': puzzleData.isMeta,
    })}
  >
    {puzzleData?.name}

    <style jsx>{`
      .puzzle-image-title {
        font-size: max(10px, min(18px, 2vw)) !important;
        line-height: max(10px, min(18px, 2vw)) !important;
        background: white;
        border-radius: 8px;
        margin: 0 auto;
        max-width: 360px;
        min-width: 100px;
      }

      :global(.darkmode) .puzzle-image-title {
        color: rgba(255, 255, 255, 0.8);
      }

      @media (max-width: 800px) {
        .puzzle-image-title {
          min-width: fit-content;
        }
      }
    `}</style>
  </h4>
);

export const PuzzleImageAnswer = ({ puzzleData }) => (
  <>
    <h5
      className={cx(
        'answer',
        'rounded-md',
        'font-mono',
        'font-bold',
        'bg-white',
        'px-1 sm:px-2',
        'py-1',
        {
          underline: !puzzleData.answer,
        }
      )}
    >
      {puzzleData?.answer || <>&nbsp;</>}
    </h5>
    <style global jsx>{`
      .answer {
        color: var(--primary);
        font-size: max(8px, min(14px, 2vw)) !important;
        line-height: max(8px, min(14px, 2vw)) !important;
        background: white;
        border-radius: 8px;
        margin: 0 auto;
        width: fit-content;
        min-width: 100px;
        margin-top: 4px;
      }
      .overlay .answer {
        border-radius: 8px;
        font-size: calc(max(8px, min(22px, 1.3vw))) !important;
        line-height: calc(max(8px, min(22px, 1.3vw))) !important;
      }
      @media (max-width: 800px) {
        .answer {
          min-width: 10ch;
        }
      }
    `}</style>
  </>
);

export const PuzzleImageExtra = ({ puzzleData }) => (
  <>
    <h5
      className={cx('extra', 'rounded-md', 'bg-white', 'px-1 sm:px-2', 'py-1')}
    >
      {puzzleData?.extra || <>&nbsp;</>}
    </h5>
    <style global jsx>{`
      .extra {
        font-size: max(8px, min(14px, 2vw)) !important;
        line-height: max(8px, min(14px, 2vw)) !important;
        background: white;
        border-radius: 8px;
        margin: 0 auto;
        width: fit-content;
        min-width: 100px;
        margin-top: 4px;
      }
      .overlay .extra {
        border-radius: 8px;
        font-size: calc(max(8px, min(22px, 1.3vw))) !important;
        line-height: calc(max(8px, min(22px, 1.3vw))) !important;
      }
      @media (max-width: 800px) {
        .extra {
          min-width: 10ch;
        }
      }
    `}</style>
  </>
);

const PuzzleImage: FunctionComponent<{
  puzzleData: PuzzleData;
  showSolved?: boolean;
  position?: [number, number];
  textPosition?: [number | string, number | string];
  iconSrc?: string;
  imageWidth?: number;
  zIndex?: number;
  showAnswer?: boolean;
  showTitle?: boolean;
  textOverlay?: boolean;
  interactable?: boolean;
}> = ({
  puzzleData,
  showSolved = false,
  position = undefined,
  textPosition = undefined,
  iconSrc = undefined,
  imageWidth = 100,
  zIndex = undefined,
  showAnswer = true,
  showTitle = true,
  textOverlay = false,
  interactable = true,
}) => {
  const { userInfo, huntInfo } = useContext(HuntInfoContext);
  const loggedIn = !!userInfo?.teamInfo;
  const huntIsOver = huntInfo && new Date() > new Date(huntInfo.endTime);
  const posLeft = position?.[0];
  const posTop = position?.[1];
  const iconUrl =
    iconSrc ?? getIcon(puzzleData, loggedIn, huntIsOver, showSolved);
  const clipUrl = getClip(puzzleData, loggedIn, huntIsOver, showSolved);

  const InnerTitle = () => (
    <>
      <style jsx>
        {`
          div.puzzle-image-label:not(.overlay) {
            ${!!textPosition
              ? `transform: translate(${textPosition[0]}%, ${textPosition[1]}%);`
              : `transform: translate(0%, 0%);`}
          }
          div.puzzle-image-label.overlay {
            ${textOverlay && 'transform: translate(-50%, 0%);'}
            left: ${textPosition ? textPosition[0] : 50}%;
            top: ${textPosition ? textPosition[1] : 0}%;
          }
        `}
      </style>

      <div
        className={cx('puzzle-image-label', {
          'overlay abs-center pointer-events-none': textOverlay,
        })}
      >
        {showTitle && <PuzzleImageTitle puzzleData={puzzleData} />}
        {showAnswer && puzzleData?.answer != undefined && (
          <PuzzleImageAnswer puzzleData={puzzleData} />
        )}
        {puzzleData.extra && <PuzzleImageExtra puzzleData={puzzleData} />}
      </div>
    </>
  );

  const InnerImage = () => (
    <ShineImage src={iconUrl} interactable={interactable}>
      {puzzleData && !textOverlay && <InnerTitle />}
    </ShineImage>
  );

  return (
    <div
      className={cx(
        'wrapper inline-block text-center rounded-lg',
        'pointer-events-none',
        {
          overlay: textOverlay,
        }
      )}
      style={Object.assign(
        posLeft !== undefined
          ? {
              left: `${posLeft}%`,
              top: `${posTop}%`,
              width: `${imageWidth || 15}%`,
              zIndex: zIndex ?? 0,
            }
          : {}
      )}
    >
      <div className="glow-translate-target">
        {interactable ? (
          <>
            <LinkIfStatic
              href={`/puzzles/${puzzleData.slug}`}
              className={cx('block', 'pointer-events-auto', 'absolute')}
              style={!!clipUrl ? { clipPath: `url(${clipUrl})` } : {}}
            >
              {/* Force link size to be correct */}
              <img className="opacity-0" src={iconUrl} />
            </LinkIfStatic>
            {puzzleData.iconURLs.hover && (
              <img
                className="image-hover absolute"
                src={puzzleData.iconURLs.hover}
              />
            )}
            <div className="image-wrapper">
              <InnerImage />
            </div>

            {/* Force the div size to be correct */}
            <img className="opacity-0" src={iconUrl} />

            {textOverlay && <InnerTitle />}
          </>
        ) : (
          <InnerImage />
        )}
      </div>

      <style jsx>{`
        div {
          position: absolute;
        }

        div.wrapper {
          transform: translate(-50%, 0);
        }

        .image-hover {
          opacity: 0;
          transition:
            transform 0.2s ease-in-out,
            opacity 0.25s ease-in-out;
        }

        div.wrapper:hover .image-hover {
          opacity: 1;
        }

        :global(div.wrapper:hover :is(img.interact, .image-hover)) {
          transform: scale(1.05);
        }

        .wrapper :global(a:visited),
        .wrapper :global(a:active),
        .wrapper :global(a:hover),
        .wrapper :global(a:link) {
          text-decoration: none !important;
        }
      `}</style>
    </div>
  );
};

export default PuzzleImage;
