"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "@/components/shared/ui/search/search";
import Hamburger from "./hamburger";
import "./header.scss";
import LinkListSection from "./linkListSection";
import Logo from "./Logo";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const toggleSearchDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();

    setIsSearchOpen(!isSearchOpen);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isSearchOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value) {
      const query = inputRef.current.value.trim();
      router.push(`/no/search?query=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    }
  };

  const toggleMobileDropdown = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <div>
      <header className="header-container">
        <nav className="container nav-container">
          <Logo onClick={closeMenus} />
          <div className="link-items-container">
            <div
              className={`link-container ${isMobileMenuOpen ? "open-mobile-format" : ""}`}
            >
              <LinkListSection onClick={closeMenus} />
            </div>
            <ul className="icons">
              <li>
                <button
                  onClick={toggleSearchDropdown}
                  className={`search-button ${isSearchOpen ? "active" : ""}`}
                  ref={buttonRef}
                  aria-label="Klikk for å gjøre søk på nettsiden"
                  title="Søkeknapp"
                >
                  <div className="search-icon active"></div>
                </button>
              </li>
              <Hamburger
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileDropdown}
              />
            </ul>
          </div>
        </nav>
      </header>

      <div
        className={`dropdown-search ${isSearchOpen ? "open" : ""}`}
        ref={dropdownRef}
      >
        <div className="search-content">
          <Search
            ref={inputRef}
            placeholder="Legg inn søkeord..."
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
