import { getValuesByKeys } from "@/localization/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";

export function useContactSectionTexts() {
  const { dictionary } = use(LanguageContext);

  const heading = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "heading",
  ]);
  const paragraph = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "paragraph",
  ]);
  const thankYouMessage = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "thankYouMessage",
  ]);
  const textareaLabel = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "textareaLabel",
  ]);
  const textareaPlaceholder = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "textareaPlaceholder",
  ]);
  const errorMessage = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "errorMessage",
  ]);
  const buttonLabel = getValuesByKeys(dictionary, [
    "pages",
    "contactSection",
    "buttonLabel",
  ]);

  return {
    heading,
    paragraph,
    thankYouMessage,
    textareaLabel,
    textareaPlaceholder,
    errorMessage,
    buttonLabel,
  };
}
