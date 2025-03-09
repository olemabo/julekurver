"use client";

import { default as NextLink } from "next/link";
import "./link.scss";
import { MouseEventHandler } from "react";

export type TargetType = "_blank" | "";

type LinkProps = {
  linkTitle?: string;
  href: string;
  target?: TargetType;
  className?: string;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

export function Link({
  linkTitle,
  href,
  target,
  className,
  icon,
  onClick,
}: LinkProps) {
  return (
    <NextLink
      target={target}
      href={href}
      className={`jds-link ${className || ""}`}
      onClick={onClick}
    >
      {icon && <span className="icon-container">{icon}</span>}
      {linkTitle && linkTitle}
    </NextLink>
  );
}

export default Link;
