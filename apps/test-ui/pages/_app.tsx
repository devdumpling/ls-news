import "../styles/globals.css";
import "../styles/style.css"; // this works after moving the style... why isn't it just being referenced properly in the bundle?
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
