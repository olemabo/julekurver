import { darkTheme, DisplayTheme } from "@/constants/display-theme";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./heading.module.css";

export const HeadingLevel = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
} as const;

export type HeadingLevel = (typeof HeadingLevel)[keyof typeof HeadingLevel];

type HeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  level: HeadingLevel;
  withMargins?: boolean;
  theme?: DisplayTheme;
};

export default function Heading({
  level,
  withMargins = true,
  theme = darkTheme,
  children,
  ...rest
}: HeadingProps) {
  const Tag = level;
  const hideMargins = !withMargins;

  return (
    <Tag
      {...rest}
      className={[
        styles.heading,
        styles[theme],
        hideMargins ? styles.hideMargins : undefined,
        rest.className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
