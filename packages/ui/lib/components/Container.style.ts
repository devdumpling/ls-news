import { style } from "@vanilla-extract/css";
import { lightThemeClass, darkThemeClass } from "../theme";

export const container = (theme: string) =>
  style([
    theme === "light" ? lightThemeClass : darkThemeClass,
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
