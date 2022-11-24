import { container } from "./Container.style";

interface ContainerProps {
  theme: "light" | "dark";
  children: React.ReactNode;
}

export const Container = ({ theme, children }: ContainerProps) => {
  return <section className={container(theme)}>{children}</section>;
};
