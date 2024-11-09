"use client";

import { useState } from "react";
import "./hamburger.css";

type HamburgerProps = {
  onClick: (isOpen: boolean) => void;
};

export default function Hamburger({ onClick }: HamburgerProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    const newState = !isHamburgerOpen;
    setIsHamburgerOpen(newState);
    onClick(newState);
  };

  return (
    <button
      className={`hamburger-container ${isHamburgerOpen ? "active" : ""}`}
      onClick={toggleHamburger}
      aria-label="Toggle menu"
      aria-expanded={isHamburgerOpen ? "true" : "false"}
    >
      <ul>
        <li className="hamburger"></li>
        <li className="hamburger"></li>
        <li className="hamburger"></li>
      </ul>
    </button>
  );
}
