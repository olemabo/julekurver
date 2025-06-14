import { getValuesByKeys } from "@/localization/dictionaries";
import { LanguageContext } from "@/providers";
import { useContext } from "react";

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
