"use client";

import { default as NextLink } from "next/link";
import styles from "./link.module.css";
import { MouseEventHandler, ReactNode } from "react";
import { buildAppRoute, BuildAppRouteObject, AllRoutes } from "@/utils/routes";

type LinkHref<T extends AllRoutes = AllRoutes> =
  | string
  | BuildAppRouteObject<T>;

type LinkProps<T extends AllRoutes = AllRoutes> = {
  href: LinkHref<T>;
  target?: "_blank" | "";
  className?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  children?: ReactNode;
  style?: React.CSSProperties;
  hash?: string;
};

export function Link<T extends AllRoutes = AllRoutes>({
  href,
  target,
  className,
  icon,
  onClick,
  children,
  style,
  hash,
}: LinkProps<T>) {
  let finalHref: string;
  if (typeof href === "string") {
    finalHref = href;
  } else {
    finalHref = buildAppRoute(href);
  }
  if (hash) {
    finalHref += `#${hash}`;
  }
  return (
    <NextLink
      target={target}
      href={finalHref}
      className={[styles.jdsLink, className].filter(Boolean).join(" ")}
      onClick={onClick}
      style={style}
    >
      {icon && <span className={styles.iconContainer}>{icon}</span>}
      {children}
    </NextLink>
  );
}

export default Link;
