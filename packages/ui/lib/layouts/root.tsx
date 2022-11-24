import { style } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontSize: "100%",
  verticalAlign: "baseline",
  boxSizing: "border-box",
});

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
