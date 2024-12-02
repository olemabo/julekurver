"use client";

import { useEffect, useState } from "react";

import "./navigateToH2.scss";

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
    <nav className="navigate-to-h2-container">
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
