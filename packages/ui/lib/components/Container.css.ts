import { style } from "@vanilla-extract/css";

export const container = style([
  {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    minHeight: "100vh",
    width: "100%",
    maxWidth: "1024px",
    margin: "0 auto",
  },
]);
