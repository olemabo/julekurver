"use client";

import { DisplayTheme } from "@/constants/displayTheme";
import "./button.scss";

type ButtonProps = {
  label: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  theme?: DisplayTheme;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  label,
  href,
  onClick,
  target,
  theme = "dark",
  className,
  style,
  ...rest
}: ButtonProps) {
  if (!label) {
    return null;
  }

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a
        target={target}
        href={href}
        style={style}
        className={`button link ${theme} ${className || ""}`}
        onClick={handleOnClick}
        {...rest}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={`button ${theme} ${className || ""}`}
      onClick={handleOnClick}
      type="button"
      style={style}
      {...rest}
    >
      {label}
    </button>
  );
}
