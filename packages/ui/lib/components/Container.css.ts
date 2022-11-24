import { style } from "@vanilla-extract/css";
import { lightThemeClass, darkThemeClass } from "../theme";

// TODO figure out how to make theming work

export const container = style([
  lightThemeClass,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  },
]);
