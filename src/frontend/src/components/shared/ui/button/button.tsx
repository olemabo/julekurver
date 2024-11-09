"use client";

import { DisplayTheme } from "@/constants/displayTheme";
import "./button.css";

type ButtonProps = {
  label: string;
  href?: string;
  target?: string;
  OnClick?: () => void;
  theme?: DisplayTheme;
};

export default function Button({
  label,
  href,
  OnClick,
  target,
  theme = "dark",
}: ButtonProps) {
  if (!label) {
    return null;
  }

  const handleOnCLick = () => {
    if (OnClick) {
      OnClick();
    }
  };

  if (href) {
    return (
      <a
        target={target}
        type="button"
        href={href}
        className={`button link ${theme}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button className={`button ${theme}`} onClick={handleOnCLick} type="button">
      {label}
    </button>
  );
}
