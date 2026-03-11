"use client";

import { useEffect, useState } from "react";

import styles from "./navigate-to-h2.module.css";

export default function NavigateToH2() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const h2Elements = Array.from(
      document.querySelectorAll("main h2"),
    ) as HTMLHeadingElement[];
    setHeadings(h2Elements);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navigateToH2Container}>
      <ol>
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(heading.id);
              }}
            >
              {heading.textContent}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
