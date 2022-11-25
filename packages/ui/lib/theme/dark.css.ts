import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./contract.css";

export const darkThemeClass = createTheme(themeVars, {
  color: {
    primary: "#fff",
    secondary: "#333",
  },
  font: {
    heading: "monospace",
    body: "serif",
  },
});
