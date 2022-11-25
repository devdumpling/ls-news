import "ui/styles.css";
import "../styles/globals.css";
import { Container } from "ui";

// TODO - swap this out for the exported Layout in the ui package when confirmed that using .css extension on import works

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container theme="light">{children}</Container>
      </body>
    </html>
  );
}
