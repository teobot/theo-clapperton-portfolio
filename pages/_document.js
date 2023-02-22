import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV !== "development" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-CJBYKZ71HQ"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          		window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CJBYKZ71HQ');
            `}
            </Script>
          </>
        )}
        <meta
          key="desc"
          name="description"
          content="Theo Clapperton's portfolio website."
        />
        <meta property="og:title" content="Theo Clapperton | Portfolio" />
        <meta
          property="og:description"
          content="Theo Clapperton's portfolio website."
        />
        <link
          key="hack-font"
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
