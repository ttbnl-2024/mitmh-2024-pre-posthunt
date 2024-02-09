import cryptoAES from 'crypto-js/aes';
import cryptoHex from 'crypto-js/enc-hex';
import cryptoUtf8 from 'crypto-js/enc-utf8';
import nextCookies from 'next-cookies';
import App, { AppContext, AppProps } from 'next/app';
import getConfig from 'next/config';
import Error from 'next/error';
import { DM_Mono, Merriweather, Quicksand } from 'next/font/google';
import Head from 'next/head';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Modal from 'react-modal';

import { initBuildManifestProxy } from 'utils/buildManifestProxy';
import { dragPatch } from 'utils/dragpatch';
import { addDecryptionKeys, clientFetch, serverFetch } from 'utils/fetch';
import * as ga from 'utils/google_analytics';
import { useRouter } from 'utils/router';
import { useSessionUuid } from 'utils/uuid';
import { createWorker } from 'utils/worker';

import HuntInfoContext, { EMPTY_HUNT_INFO, HuntInfo } from 'components/context';
import HuntNotifications from 'components/hunt_notifications';
import Layout from 'components/layout';

import Error404 from 'pages/404';

import 'styles/globals.css';

const {
  publicRuntimeConfig: { ASSET_PREFIX },
} = getConfig();

type Props = AppProps & {
  huntInfo: HuntInfo;
  cookies?: Record<string, string>;
};

const dm_mono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
});
export const merriweather = Merriweather({
  weight: ['400', '700'],
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
  if (process.env.isStatic) {
    try {
      huntInfo = require('assets/json_responses/hunt_info.json');
    } catch {
      huntInfo = EMPTY_HUNT_INFO;
    }
  }

  // Set global on client to allow decrypting.
  // We want this to happen at the start of first render to ensure it's
  // available before other scripts can run.
  if (typeof window !== 'undefined') {
    (window as unknown as any).CryptoJS = {
      AES: cryptoAES,
      enc: { Hex: cryptoHex, Utf8: cryptoUtf8 },
    };
  }

  // Add decryption keys if available and remove from pageProps
  pageProps = addDecryptionKeys(pageProps);
  // Default to 200 if no statusCode is explicitly given
  const {
    puzzleData,
    act,
    roundSlug,
    theme = 'hunt',
    statusCode = 200,
    bare = false,
  } = pageProps;

  const router = useRouter();
  const uuid = useSessionUuid();

  // note huntInfo here is the { huntInfo, userInfo } object.
  const huntIsOver = new Date() > new Date(huntInfo.huntInfo.endTime);

  useEffect(() => {
    // Set app element for accessibility reasons.
    Modal.setAppElement('body');
    // Apply a monkeypatch to support drag events in Firefox
    dragPatch();
  }, []);

  useEffect(() => {
    initBuildManifestProxy();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => ga.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const basePath = router.asPath.split('#')[0]; // grab the path before hash

  const createdWorker = useRef(false);
  if (process.env.useWorker && !createdWorker.current) {
    if (!bare) createWorker();
    createdWorker.current = true;
  }

  const huntAct = act ?? puzzleData?.round?.act ?? 1;
  const augmentedHuntInfo: HuntInfo = {
    ...huntInfo,
    uuid,
    // If on a round/puzzle page, override the theme with the round slug.
    round: {
      theme,
      slug: roundSlug ?? puzzleData?.round?.slug,
      act: huntAct,
    },
  };

  const origin = `https://${process.env.domainName}`;

  let content;
  if (bare) {
    content = (
      <HuntInfoContext.Provider value={augmentedHuntInfo}>
        <Component {...pageProps} />
      </HuntInfoContext.Provider>
    );
  } else {
    // Wrap all components in context so that hunt info is accessible anywhere.
    content = (
      <HuntInfoContext.Provider value={augmentedHuntInfo}>
        <Layout>
          {statusCode === 404 ? (
            <Error404 />
          ) : statusCode >= 500 ? (
            <Error statusCode={statusCode} />
          ) : (
            <>
              {/* DISABLED TO REDUCE WEBSOCKET LOAD */}
              {/* <HuntNotifications /> */}

              <Component {...pageProps} />
            </>
          )}
        </Layout>
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
          content="The 2024 Mystery Hunt hosted by TTBNL"
        />
        <meta
          key="og-image"
          property="og:image"
          content={
            /* This image needs to point to an absolute url */
            new URL(`${ASSET_PREFIX ?? ''}/banner.png`, origin).href
          }
        />
        <meta property="og:url" content={origin} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:alt"
          content="The 2024 Mystery Hunt hosted by TTBNL"
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
          --title-font: ${merriweather.style.fontFamily};
          --serif-font: ${merriweather.style.fontFamily};
          --sc-font: ${merriweather.style.fontFamily};
          --mono-font: ${dm_mono.style.fontFamily};
        }
      `}</style>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  let huntInfo: HuntInfo;
  let domain: string = '';

  const { pageProps, ...appProps } = await App.getInitialProps(appContext);

  let { statusCode = 200 } = pageProps;

  if (pageProps?.bare || statusCode >= 500) {
    // Next.js tries to statically generate a 500 page during production build.
    // (This is a bug that was recently fixed in Next.js for 404 but not 500.)
    // TODO: Determine implications and decide whether we need to bypass
    // another way or build a custom _error.tsx component with getInitialProps.
    huntInfo = EMPTY_HUNT_INFO;
  } else if (typeof window === 'undefined') {
    if (process.env.isStatic) {
      // TODO: figure out what to do with the domain in the static case
      try {
        huntInfo = require('assets/json_responses/hunt_info.json');
      } catch {
        huntInfo = EMPTY_HUNT_INFO;
      }
    } else {
      huntInfo = await serverFetch<HuntInfo>(appContext.ctx, '/hunt_info', {
        method: 'GET',
      });
    }
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

  // Pass the cookies to the app.
  const cookies = nextCookies(appContext.ctx);

  return {
    cookies,
    huntInfo,
    pageProps,
    ...appProps,
  };
};
