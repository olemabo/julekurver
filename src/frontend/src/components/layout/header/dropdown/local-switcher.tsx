"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, LOCALES } from "@/config/i18n";
import styles from "./local-switcher.module.css";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className={styles.dropdownContent}>
      <p>Locale switcher:</p>
      <ul>
        {LOCALES.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathname(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
