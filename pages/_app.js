import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
