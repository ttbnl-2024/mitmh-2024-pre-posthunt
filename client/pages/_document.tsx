import Document, { Head, Html, Main, NextScript } from 'next/document';

import * as ga from 'utils/google_analytics';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga.GOOGLE_ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);};
            gtag('js', new Date());

            gtag('config', '${ga.GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
            `.replace(/\s+/g, ' '),
          }}
        />
        <meta name="format-detection" content="telephone=no"/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
