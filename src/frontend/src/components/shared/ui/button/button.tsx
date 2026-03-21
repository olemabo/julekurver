"use client";

import { DisplayTheme } from "@/constants/display-theme";
import styles from "./button.module.css";

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
        className={[styles.button, styles.link, styles[theme], className]
          .filter(Boolean)
          .join(" ")}
        onClick={handleOnClick}
        {...rest}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={[styles.button, styles[theme], className]
        .filter(Boolean)
        .join(" ")}
      onClick={handleOnClick}
      type="button"
      style={style}
      {...rest}
    >
      {label}
    </button>
  );
}
