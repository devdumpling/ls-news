import "ui/styles";
import type { AppProps } from "next/app";
import { Container } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container theme="light">
      <Component {...pageProps} />
    </Container>
  );
}
