"use client";

import { useState, useEffect } from "react";
import { hamburgerButtonId } from "../types";
import styles from "./hamburger.module.css";

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
      className={`${styles.hamburgerContainer} ${isHamburgerOpen ? styles.active : ""}`}
      onClick={toggleHamburger}
      id={hamburgerButtonId}
      aria-label="Toggle menu"
    >
      <ul>
        <li className={styles.hamburger} />
        <li className={styles.hamburger} />
        <li className={styles.hamburger} />
      </ul>
    </li>
  );
}
