"use client";

import { default as NextLink } from "next/link";
import "./link.scss";

export type TargetType = "_blank" | "";

type LinkProps = {
  linkTitle?: string;
  href: string;
  target?: TargetType;
  className?: string;
  icon?: React.ReactNode;
};

export function Link({ linkTitle, href, target, className, icon }: LinkProps) {
  return (
    <NextLink target={target} href={href} className={`jds-link ${className}`}>
      {icon && <span className="icon-container">{icon}</span>}
      {linkTitle && linkTitle}
    </NextLink>
  );
}

export default Link;
