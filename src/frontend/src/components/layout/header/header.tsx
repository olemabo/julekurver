"use client";

import Image from "next/image";
import { default as NextLink } from "next/link";
import { useEffect, useRef, useState } from "react";

// import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { useRouter } from "next/navigation";
import Search from "@/components/shared/ui/search/search";
// import Link from "@/components/shared/ui/link/link";
import Hamburger from "./hamburger";

import "./header.css";

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

    // Event listener to close the dropdown when clicking outside
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

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
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

  console.log(isSearchOpen, "isSearchOpen");

  return (
    <div>
      <header>
        <nav
          style={{ position: "relative", zIndex: 90, display: "flex" }}
          className="container"
        >
          <NextLink className="logo" href="/" onClick={closeMenus}>
            <Image
              src="/images/logo/logo_black-cropped.svg"
              alt="Webpage logo"
              width={32}
              height={32}
            />
            Hjertekurver
          </NextLink>
          <div className="link-items-container">
            <div
              className={`link-container ${isMobileMenuOpen ? "open-mobile-format" : ""}`}
            >
              <ul>
                <li>
                  <NextLink onClick={closeMenus} href="/no/hjertekurver">
                    Hjertekurver
                  </NextLink>
                </li>
                <li>
                  <NextLink onClick={closeMenus} href="/no/om-siden">
                    Om siden
                  </NextLink>
                </li>
                <li>
                  <NextLink onClick={closeMenus} href="/no/kontakt-oss">
                    Kontakt oss
                  </NextLink>
                </li>
              </ul>
            </div>
            <ul className="icons">
              <li>
                <button
                  onClick={toggleSearchDropdown}
                  className={`search-button center-position ${isSearchOpen ? "active" : ""}`}
                  ref={buttonRef}
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
        {/* <div className="hjertekurver-link-section">
          <Paragraph>
            Ønsker du å søke blant julekurver, se søkesiden:{" "}
            <Link
              linkTitle="julekurver"
              className="link"
              href="/no/julekurver"
            />
          </Paragraph>
        </div> */}
      </div>
    </div>
  );
}
