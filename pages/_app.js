import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Theo Clapperton | Portfolio</title>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
