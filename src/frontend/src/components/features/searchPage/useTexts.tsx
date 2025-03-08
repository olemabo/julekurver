import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { useContext } from "react";

export function useSearchPageContentTexts() {
  const { dictionary } = useContext(LanguageContext);

  const heading = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "heading",
  ]);
  const paragraph = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "paragraph",
  ]);
  const linkText = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "linkText",
  ]);
  const frontpageBreadcrumb = getValuesByKeys(dictionary, [
    "breadcrumb",
    "frontpage",
  ]);
  const searchPageBreadcrumb = getValuesByKeys(dictionary, [
    "breadcrumb",
    "searchPage",
  ]);

  return {
    heading,
    paragraph,
    linkText,
    searchPageBreadcrumb,
    frontpageBreadcrumb,
  };
}

export function useSearchPageResultTexts() {
  const { dictionary } = useContext(LanguageContext);

  const searchPlaceholder = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "searchPlaceholder",
  ]);
  const searchResultsText = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "searchResultsText",
  ]);
  const noResultsText = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "noResultsText",
  ]);
  const noResultsMessage = getValuesByKeys(dictionary, [
    "pages",
    "searchPage",
    "noResultsMessage",
  ]);

  return {
    searchPlaceholder,
    searchResultsText,
    noResultsText,
    noResultsMessage,
  };
}
