// next.js imports
import Head from "next/head";
import type { AppProps } from "next/app";

// local imports
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Theo Clapperton | Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
