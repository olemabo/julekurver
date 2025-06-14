import { getValuesByKeys } from "@/localization/dictionaries";
import { LanguageContext } from "@/providers";
import { use, useContext } from "react";

export function useKurvMalTexts() {
  const { dictionary } = use(LanguageContext);

  const downloadMalButtonText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "downloadMalButton",
  ]);

  const malTitle = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "malTitle",
  ]);

  const twoMalsDescription = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "twoMalsDescription",
  ]);

  const descriptionIntro = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "description",
    "intro",
  ]);

  const descriptionMethods = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "description",
    "methods",
  ]);

  const descriptionLinkText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "kurvMal",
    "description",
    "linkText",
  ]);

  return {
    downloadMalButtonText,
    malTitle,
    twoMalsDescription,
    description: {
      intro: descriptionIntro,
      methods: descriptionMethods,
      linkText: descriptionLinkText,
    },
  };
}

export function useHvordanLageKurverTexts() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "hvordanLageKurver",
    "title",
  ]);
  const introText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "hvordanLageKurver",
    "intro",
    "text",
  ]);
  const linkText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "hvordanLageKurver",
    "intro",
    "linkText",
  ]);

  const steps = getValuesByKeys<Array<{ number: number; description: string }>>(
    dictionary,
    ["pages", "hjertekurvPage", "hvordanLageKurver", "steps"],
    [],
  );

  return {
    title,
    intro: {
      text: introText,
      linkText: linkText,
    },
    steps,
  };
}

export function useLignendeKurverTexts() {
  const { dictionary } = useContext(LanguageContext);

  const lignendeKurverTitle = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "lignendeKurver",
    "title",
  ]);

  return {
    lignendeKurverTitle,
  };
}
