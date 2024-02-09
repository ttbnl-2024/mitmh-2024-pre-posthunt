import cx from 'classnames';
import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  pageTitle?: string;
  suppressPageTitle?: boolean;
  removeMargin?: boolean;
  subline?: string;
  id?: string;
  className?: string;
}

/** A generic title component for BIG TEXT. */
const Title = ({
  title,
  pageTitle,
  suppressPageTitle,
  removeMargin,
  subline,
  id,
  className,
}: Props) => {
  const shownTitle = pageTitle || title;
  return (
    <>
      {!suppressPageTitle && (
        <Head>
          <title>{shownTitle}</title>
        </Head>
      )}
      <h1
        id={id}
        className={cx('text-center px-4', className, {
          small: title.length >= 20,
          'm-0': removeMargin,
        })}
      >
        {title}
      </h1>
      {subline && (
        <div className="subline font-title text-center">{subline}</div>
      )}

      <style jsx>{`
        h1.small {
          font-size: 10vh;
          line-height: 10vh;
        }

        .subline {
          color: var(--secondary);
          font-size: 24px;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 40px !important;
            line-height: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default Title;
