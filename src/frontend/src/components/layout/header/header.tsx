"use client";

import { useEffect, useRef, useState } from "react";
import Hamburger from "./hamburger/hamburger";
import LinkListSection from "./link-list-section";
import LocaleSwitcher from "./dropdown/local-switcher";
import MenuType, {
  hamburgerButtonId,
  languageButtonId,
  languageDropdownMenuId,
  LanguageSearchType,
  openMobileDropdownMenuId,
  searchButtonId,
  searchDropdownMenuId,
} from "./types";
import SearchBox from "./dropdown/search-box";
import DropdownWrapper from "./dropdown/dropdown-wrapper";
import Logo from "./logo/logo";
import styles from "./header.module.css";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import SearchButton from "./search-button/search-button";

type HeaderProps = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
} & LocaleProps;

export default function Header({ dictionary, lang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<LanguageSearchType>(
    MenuType.ClosedMenu,
  );

  const searchFieldRef = useRef<HTMLInputElement>(null);

  const closeAllMenus = () => {
    setActiveMenu(MenuType.ClosedMenu);
    setIsMobileMenuOpen(false);
  };

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
      <header className={styles.headerContainer}>
        <nav className={`container ${styles.navContainer}`}>
          <Logo onClick={closeAllMenus} logoText={dictionary.logoText} />
          <div className={styles.linkItemsContainer}>
            <div
              id={openMobileDropdownMenuId}
              className={`${styles.linkContainer} ${isMobileMenuOpen ? styles.openMobileFormat : ""}`}
            >
              <LinkListSection
                onClick={closeAllMenus}
                dictionary={dictionary}
                lang={lang}
              />
            </div>
            <ul className={styles.icons}>
              <li>
                <SearchButton
                  handleOnClick={() =>
                    toggleSearchLanguageMenu(MenuType.Search)
                  }
                  isActive={activeMenu === MenuType.Search}
                />
                {/* <LanguageButton ... />*/}
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
        <SearchBox
          searchFieldRef={searchFieldRef}
          handleSearch={closeAllMenus}
        />
      </DropdownWrapper>
      <DropdownWrapper isActive={isActiveLanguage} id={languageDropdownMenuId}>
        <LocaleSwitcher />
      </DropdownWrapper>
    </div>
  );
}
