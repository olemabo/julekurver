"use client";

import { useState, useEffect } from "react";
import "./hamburger.scss";

type HamburgerProps = {
  onClick: (isOpen: boolean) => void;
  isOpen?: boolean;
};

export default function Hamburger({ onClick, isOpen }: HamburgerProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsHamburgerOpen(isOpen);
    }
  }, [isOpen]);

  const toggleHamburger = () => {
    const newState = !isHamburgerOpen;
    setIsHamburgerOpen(newState);
    onClick(newState);
  };

  return (
    <li
      className={`hamburger-container ${isHamburgerOpen ? "active" : ""}`}
      onClick={toggleHamburger}
      aria-label="Toggle menu"
      aria-expanded={isHamburgerOpen ? "true" : "false"}
    >
      <ul>
        <li className="hamburger" />
        <li className="hamburger" />
        <li className="hamburger" />
      </ul>
    </li>
  );
}
