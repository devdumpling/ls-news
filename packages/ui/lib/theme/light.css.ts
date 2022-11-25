import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./contract.css";

export const lightThemeClass = createTheme(themeVars, {
  color: {
    primary: "#111",
    secondary: "#fafafa",
  },
  font: {
    heading: "monospace",
    body: "serif",
  },
});
