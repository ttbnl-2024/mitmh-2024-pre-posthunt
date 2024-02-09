import cx from 'classnames';
import Head from 'next/head';
import React, {
  FunctionComponent,
  ReactFragment,
  ReactNode,
  useContext,
} from 'react';

import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import { PuzzleDataProps, RoundHeader } from 'components/puzzle';
import PuzzleTitle from 'components/puzzle_title';
import Section from 'components/section';

interface Props extends PuzzleDataProps {
  titleHtml?: React.ReactFragment;
  answer: string;
  maxWidth?: boolean;
  maxWidthPx?: number;
  authors?: ReactFragment;
  additionalCreds?: ReactFragment;
  answerClasses?: string;
  smallTitle?: boolean;
  dark?: boolean;
  children?: ReactNode;
}

/**
 * Wrapper component for all solutions, providing some common formatting.
 */
const Solution: FunctionComponent<Props> = ({
  puzzleData,
  answer,
  maxWidth = true,
  maxWidthPx = 900,
  titleHtml,
  answerClasses = '',
  smallTitle = false,
  dark = false,
  children,
}) => {
  const AnswerWrapper = answer.includes('\n') ? 'pre' : 'span';
  const roundSlug = puzzleData.round?.slug ?? '';
  const darkMode = dark;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{`${puzzleData.name} - Solution`}</title>
      </Head>

      <div className="pt-8 pb-8">
        {puzzleData.round?.header && <RoundHeader round={puzzleData.round} />}
        <div className="title flex items-center justify-center px-2">
          {titleHtml || (
            <PuzzleTitle title={puzzleData.name} small={smallTitle} />
          )}
        </div>
        <Section
          darkMode={darkMode}
          className={cx('solution', {
            maxWidth,
            'bg-white after:bg-white after:drop-shadow-md rounded-md after:rounded-md break-words':
              !darkMode,
          })}
        >
          <div className="text-center text-balance">
            {puzzleData.solutionData?.authors && (
              <h3>by {puzzleData.solutionData?.authors}</h3>
            )}
            {puzzleData.solutionData?.additionalCreds && (
              <h3>{puzzleData.solutionData?.additionalCreds}</h3>
            )}
            {answer && (
              <h3>
                Answer:{' '}
                <div>
                  <AnswerWrapper
                    className={cx('spoiler font-mono', answerClasses)}
                  >
                    {answer}
                  </AnswerWrapper>
                </div>
              </h3>
            )}
            <div className="link space-x-2">
              {answer && (
                <Link href={`/stats/${puzzleData.slug}`} passHref>
                  View Stats
                </Link>
              )}
              {
                <Link
                  href={puzzleData.url || `/puzzles/${puzzleData.slug}`}
                  passHref
                >
                  Back to Puzzle
                </Link>
              }
            </div>
          </div>

          {children}
        </Section>
      </div>

      <style jsx>{`
        :global(.solution) {
          position: relative;
          z-index: 1;
        }
        /* Set drop-shadow on :after to avoid messing with position fixed */
        :global(.solution):after {
          content: ' ';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: -1;
        }

        :global(#__next) {
          background-image: ${puzzleData.round?.background
            ? `url(${puzzleData.round.background}) !important`
            : 'inherit'};
          background-size: 30%;
        }

        :global(section.maxWidth) {
          max-width: ${maxWidthPx}px;
        }

        .title {
          flex-direction: column;
        }

        .link {
          display: flex;
          justify-content: center;
          margin: 20px 0 40px;
        }

        h2 {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

/** Common styling for an intermediate clue phrase */
export const Clue: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => <span className="font-mono">{children}</span>;

/** Common styling for the answer, in monospace. */
export const Answerize: FunctionComponent<{ children: string }> = ({
  children,
}) =>
  children.indexOf('\n') > -1 ? (
    // If there is a newline, render as a <pre> block.
    <pre className="answer max-w-fit mx-auto font-mono">{children}</pre>
  ) : (
    <strong className="answer font-mono">{children}</strong>
  );

export default Solution;
