"use client";

import React from "react";
import styles from "./paragraph.module.css";
import { darkTheme, DisplayTheme } from "@/constants/display-theme";

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
  const themeClass = theme === "light" ? styles.light : styles.dark;
  return (
    <p
      style={{ maxWidth: maxWidth }}
      className={`${styles.paragraph} ${themeClass} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
