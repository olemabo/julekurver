import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";

export function useFlettetilleggTexts() {
  const { dictionary } = use(LanguageContext);

  const fletteTilleggText = getValuesByKeys(dictionary, [
    "popover",
    "flettetillegg",
    "content",
  ]);

  const fletteTilleggAltText = getValuesByKeys(dictionary, [
    "popover",
    "flettetillegg",
    "altText",
  ]);

  const fletteTilleggTitle = getValuesByKeys(dictionary, [
    "popover",
    "flettetillegg",
    "title",
  ]);

  return {
    fletteTilleggText,
    fletteTilleggAltText,
    fletteTilleggTitle,
  };
}

export function useSymmetriskMotivTexts() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "title",
  ]);

  const intro = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "intro",
  ]);

  const link1Text = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "link1Text",
  ]);

  const link1Href = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "link1Href",
  ]);

  const mid = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "mid",
  ]);

  const link2Text = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "link2Text",
  ]);

  const link2Href = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "link2Href",
  ]);

  const outro = getValuesByKeys(dictionary, [
    "popover",
    "symmetriskMotiv",
    "outro",
  ]);

  return {
    title,
    intro,
    link1Text,
    link1Href,
    mid,
    link2Text,
    link2Href,
    outro,
  };
}
