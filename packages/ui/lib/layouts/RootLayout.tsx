import * as React from "react";
import { Container } from "../components";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Container theme="light">{children}</Container>
      </body>
    </html>
  );
};
