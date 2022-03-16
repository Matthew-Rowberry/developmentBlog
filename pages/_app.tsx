import "../styles/globals.css";
import type { AppProps } from "next/app";

function Application({ Component, pageProps }: AppProps) {
  console.log(pageProps);

  return <Component {...pageProps} />;
}

export default Application;
