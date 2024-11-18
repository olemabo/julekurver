import { darkTheme, DisplayTheme } from "@/constants/displayTheme";
import React from "react";
import "./heading.css";

type HeadingLevel = "h1" | "h2" | "h3";

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
