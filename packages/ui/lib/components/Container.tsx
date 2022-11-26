import * as React from "react";
import { container } from "./Container.css";
// import { lightThemeClass, darkThemeClass } from "../theme";

interface ContainerProps {
  theme?: "light" | "dark";
  children: React.ReactNode;
}

// todo figure out theming

export const Container = ({ theme, children }: ContainerProps) => {
  return <div className={container}>{children}</div>;
};
