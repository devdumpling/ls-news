import { globalStyle } from "@vanilla-extract/css";

export const globals = globalStyle("html, body", {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontSize: "100%",
  verticalAlign: "baseline",
  boxSizing: "border-box",
});
