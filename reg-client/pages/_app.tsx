import App, { AppProps } from 'next/app';
import getConfig from 'next/config';
import Error from 'next/error';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Modal from 'react-modal';

import { clientFetch, serverFetch } from 'utils/fetch';
import * as ga from 'utils/google_analytics';

import HuntInfoContext, { EMPTY_HUNT_INFO, HuntInfo } from 'components/context';

import Error404 from 'pages/404';

import 'styles/globals.css';

const {
  publicRuntimeConfig: { ASSET_PREFIX },
} = getConfig();

type Props = AppProps & {
  huntInfo: HuntInfo;
  cookies?: Record<string, string>;
};

const inter = Inter({
  style: ['normal'],
  subsets: ['latin'],
});

// custom app documentation: https://nextjs.org/docs/advanced-features/custom-app

// Overriding MyApp.getInitialProps will make a page fail to statically
// generate, even if it has no server-side dependencies. This is fine during
// hunt, but any custom props should later be defined inside the body of MyApp
// instead.

export default function MyApp({
  Component,
  pageProps,
  huntInfo,
  cookies = {},
}: Props) {
  // Default to 200 if no statusCode is explicitly given
  const { statusCode = 200, puzzleData, bare = false } = pageProps;

  const router = useRouter();

  useEffect(() => {
    // Set app element for accessibility reasons.
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => ga.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const origin = `https://${process.env.domainName}`;

  let content;
  if (bare) {
    content = <Component {...pageProps} />;
  } else {
    // Wrap all components in context so that hunt info is accessible anywhere.
    content = (
      <HuntInfoContext.Provider value={huntInfo}>
        {statusCode === 404 ? (
          <Error404 />
        ) : statusCode >= 500 ? (
          <Error statusCode={statusCode} />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </HuntInfoContext.Provider>
    );
  }

  let absoluteUrl = function (path: string): string {
    return new URL(`${ASSET_PREFIX ?? ''}/${path}`, origin).href;
  };

  return (
    <>
      <Head>
        <meta property="og:title" content="Mystery Hunt 2024" />
        <meta property="og:site_name" content="Mystery Hunt 2024" />
        <meta
          property="og:description"
          content="Welcome to the Meeting of Interplanetary Theorists! Register now for our opening plenary and keynote on January 12th."
        />
        /* This image needs to point to an absolute url */
        <meta
          key="og-image"
          property="og:image"
          content={absoluteUrl('banner.png')}
        />
        <meta property="og:url" content={origin} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:alt"
          content="Welcome to the Meeting of Interplanetary Theorists! Register now for our opening plenary and keynote on January 12th."
        />
        {/* Generated with https://realfavicongenerator.net */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={absoluteUrl('apple-touch-icon.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={absoluteUrl('favicon-32x32.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={absoluteUrl('favicon-16x16.png')}
        />
        <link rel="manifest" href={absoluteUrl('site.webmanifest')} />
        <link
          rel="mask-icon"
          href={absoluteUrl('safari-pinned-tab.svg')}
          color="#061f4a"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#061f4a" />
        <link
          key="favicon"
          rel="shortcut icon"
          href={absoluteUrl('favicon.ico')}
          type="image/vnd.microsoft.icon"
        />
      </Head>

      {content}

      <style global jsx>{`
        body {
          background-color: ${bare ? 'transparent' : 'inherit'};
          --reg-title-font: ${inter.style.fontFamily};
          --reg-serif-font: ${inter.style.fontFamily};
        }
      `}</style>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  let huntInfo: HuntInfo;

  const appProps = await App.getInitialProps(appContext);

  const { statusCode = 200 } = appProps.pageProps;

  if (appProps.pageProps?.bare || statusCode >= 500) {
    // Next.js tries to staticly generate a 500 page during production build.
    // (This is a bug that was recently fixed in Next.js for 404 but not 500.)
    // TODO: Determine implications and decide whether we need to bypass
    // another way or build a custom _error.tsx component with getInitialProps.
    huntInfo = EMPTY_HUNT_INFO;
  } else if (typeof window === 'undefined') {
    huntInfo = await serverFetch<HuntInfo>(appContext.ctx, '/hunt_info', {
      method: 'GET',
    });
  } else {
    huntInfo = await clientFetch<HuntInfo>(
      appContext.ctx,
      '/hunt_info',
      {
        method: 'GET',
      },
      true
    );
  }

  return { huntInfo, ...appProps };
};
