"use client";

import React from "react";
import "./paragraph.scss";
import { darkTheme, DisplayTheme } from "@/constants/displayTheme";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  theme?: DisplayTheme;
  maxWidth?: number;
}

export default function Paragraph({
  children,
  theme = darkTheme,
  className = "",
  maxWidth,
  ...rest
}: ParagraphProps) {
  return (
    <p
      style={{ maxWidth: maxWidth }}
      className={`${theme} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
