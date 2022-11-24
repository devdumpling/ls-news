import { createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
  },
  font: {
    heading: null,
    body: null,
  },
});
