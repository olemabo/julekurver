import React from "react";
import "./fullWidthWrapper.css";

export const bgColorThemeDefault = "default";
export const bgColorThemeGreen = "green";
export const bgColorThemeRed = "red";

export type FullWidthWrapperColor =
  | typeof bgColorThemeDefault
  | typeof bgColorThemeGreen
  | typeof bgColorThemeRed;

type ContentHeaderProps = {
  color?: FullWidthWrapperColor;
  children: React.ReactNode;
};

export default function FullWidthWrapper({
  color,
  children,
}: ContentHeaderProps) {
  return (
    <div
      className={`full-width-wrapper-container ${color ?? bgColorThemeDefault}`}
    >
      {children}
    </div>
  );
}
