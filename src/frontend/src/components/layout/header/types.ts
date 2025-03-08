export const MenuType = {
  Language: "language",
  Search: "search",
  ClosedMenu: "closedMenu",
} as const;

Object.freeze(MenuType);

export default MenuType;

export type LanguageSearchType = (typeof MenuType)[keyof typeof MenuType];

export const languageButtonId = "language-button";
export const searchButtonId = "language-button";
export const hamburgerButtonId = "hamburger-button";
export const searchDropdownMenuId = "search-dropdown-menu";
export const languageDropdownMenuId = "langauge-dropdown-menu";
export const openMobileDropdownMenuId = "openmenu-dropdown-menu";
