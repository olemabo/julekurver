import { darkTheme, DisplayTheme } from "@/constants/displayTheme";
import React from "react";
import "./heading.scss";

export const HeadingLevel = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
} as const;

export type HeadingLevel = (typeof HeadingLevel)[keyof typeof HeadingLevel];

type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  headingLevel: HeadingLevel;
  withMargins?: boolean;
  children: React.ReactNode;
  theme?: DisplayTheme;
};

export default function Heading({
  headingLevel,
  withMargins = true,
  theme = darkTheme,
  children,
  ...rest
}: HeadingProps) {
  const Tag = headingLevel;
  const hideMargins = !withMargins;

  return (
    <Tag
      {...rest}
      className={`heading ${hideMargins ? "hide-margins" : ""} ${theme}`}
    >
      {children}
    </Tag>
  );
}
