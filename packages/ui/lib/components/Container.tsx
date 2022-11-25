import * as React from "react";
import { container } from "./Container.css";

interface ContainerProps {
  theme: "light" | "dark";
  children: React.ReactNode;
}

export const Container = ({ theme, children }: ContainerProps) => {
  return <section className={container}>{children}</section>;
};
