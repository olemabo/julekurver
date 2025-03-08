"use client";

import { useEffect, useRef, useState } from "react";
import Hamburger from "./hamburger/hamburger";
import LinkListSection from "./linkListSection";
import Logo from "./Logo";
import LocaleSwitcher from "./dropdown/localSwitcher";
import MenuType, {
  hamburgerButtonId,
  languageButtonId,
  languageDropdownMenuId,
  LanguageSearchType,
  openMobileDropdownMenuId,
  searchButtonId,
  searchDropdownMenuId,
} from "./types";
import SearchBox from "./dropdown/searchBox";
import DropdownWrapper from "./dropdown/dropdownWrapper";
import "./header.scss";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<LanguageSearchType>(
    MenuType.ClosedMenu,
  );

  const searchFieldRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      const clickedOnLanguageButton = target.closest(`#${languageButtonId}`);
      const clickedOnSearchButton = target.closest(`#${searchButtonId}`);
      const clickedOnHamburgerButton = target.closest(`#${hamburgerButtonId}`);

      const isWithinMenu = (id: string) => {
        const menu = document.getElementById(id);
        return menu && !menu.contains(target);
      };

      if (
        clickedOnLanguageButton ||
        clickedOnSearchButton ||
        clickedOnHamburgerButton
      ) {
        return;
      }

      if (
        isWithinMenu(languageDropdownMenuId) &&
        isWithinMenu(searchDropdownMenuId) &&
        isWithinMenu(openMobileDropdownMenuId)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMobileDropdown = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    setActiveMenu(MenuType.ClosedMenu);
  };

  const closeAllMenus = () => {
    setActiveMenu(MenuType.ClosedMenu);
    setIsMobileMenuOpen(false);
  };

  const toggleSearchLanguageMenu = (value: LanguageSearchType) => {
    if (
      activeMenu === value &&
      (value === MenuType.Search || value === MenuType.Language)
    ) {
      setActiveMenu(MenuType.ClosedMenu);
    } else {
      setActiveMenu(value);
      if (value === MenuType.Search) {
        searchFieldRef.current?.focus();
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isActiveSearch = activeMenu === MenuType.Search;
  const isActiveLanguage = activeMenu === MenuType.Language;

  return (
    <div>
      <header className="header-container">
        <nav className="container nav-container">
          <Logo onClick={closeAllMenus} />
          <div className="link-items-container">
            <div
              id={openMobileDropdownMenuId}
              className={`link-container ${isMobileMenuOpen ? "open-mobile-format" : ""}`}
            >
              <LinkListSection onClick={closeAllMenus} />
            </div>
            <ul className="icons">
              <li>
                <button
                  onClick={() => toggleSearchLanguageMenu(MenuType.Search)}
                  className={`search-button ${activeMenu === MenuType.Search ? "active" : ""}`}
                  id={searchButtonId}
                  aria-label="Klikk for å gjøre søk på nettsiden"
                  title="Søkeknapp"
                >
                  <div className="search-icon active"></div>
                </button>
                {/* <button
                  onClick={() => toggleSearchLanguageMenu(MenuType.Language)}
                  className={`language-button ${activeMenu === MenuType.Language ? "active" : ""}`}
                  id={languageButtonId}
                  aria-label="Klikk for å gjøre søk på nettsiden"
                  title="Søkeknapp"
                >
                  <div className="language-icon"></div>
                </button> */}
              </li>
              <Hamburger
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileDropdown}
              />
            </ul>
          </div>
        </nav>
      </header>

      <DropdownWrapper isActive={isActiveSearch} id={searchDropdownMenuId}>
        <SearchBox searchFieldRef={searchFieldRef} handleSearch={closeAllMenus} />
      </DropdownWrapper>
      <DropdownWrapper isActive={isActiveLanguage} id={languageDropdownMenuId}>
        <LocaleSwitcher />
      </DropdownWrapper>
    </div>
  );
}
