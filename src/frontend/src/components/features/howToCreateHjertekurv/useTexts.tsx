import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";

export function useHowToCreateHjertekurvIntro() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ingress",
  ]);

  const breadcrumbFrontPage = getValuesByKeys(dictionary, [
    "breadcrumb",
    "frontpage",
  ]);
  const breadcrumbHowToCreateHjertekurvPage = getValuesByKeys(dictionary, [
    "breadcrumb",
    "howToCreateHjertekurvPage",
  ]);

  return {
    title,
    ingress,
    breadcrumbs: {
      frontpage: breadcrumbFrontPage,
      howToCreateHjertekurvPage: breadcrumbHowToCreateHjertekurvPage,
    },
  };
}

export function useWhatYouNeedSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "WhatYouNeedSection",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "WhatYouNeedSection",
    "ingress",
  ]);
  const whatYouNeedList = getValuesByKeys<Array<string>>(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "WhatYouNeedSection",
    "whatYouNeedList",
  ]);

  return {
    title,
    ingress,
    whatYouNeedList,
  };
}

export function useHjertekurvMalSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "title",
  ]);

  const ingress1 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress1",
  ]);
  const ingress1LinkText = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress1LinkText",
  ]);

  const ingress2 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress2",
  ]);
  const ingress2LinkText = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress2LinkText",
  ]);

  const ingress3 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress3",
  ]);
  const ingress3LinkText = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "ingress3LinkText",
  ]);

  const paragraph2 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "paragraph2",
  ]);
  const paragraph3 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "paragraph3",
  ]);
  const paragraph3_2 = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "HjertekurvMalSection",
    "paragraph3_2",
  ]);

  return {
    title,
    ingress1: {
      text: ingress1,
      linkText: ingress1LinkText,
    },
    ingress2: {
      text: ingress2,
      linkText: ingress2LinkText,
    },
    ingress3: {
      text: ingress3,
      linkText: ingress3LinkText,
    },
    paragraph2,
    paragraph3,
    paragraph3_2,
  };
}

export function useClipHjertekurvSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ClipHjertekurvSection",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ClipHjertekurvSection",
    "ingress",
  ]);
  const steps = getValuesByKeys<
    Array<{
      number: number;
      altText: string;
      illustrationSrc: string;
      description: string;
    }>
  >(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ClipHjertekurvSection",
    "steps",
  ]);

  const step3ListIntro = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ClipHjertekurvSection",
    "step3ListIntro",
  ]);
  const step3ListSteps = getValuesByKeys<Array<string>>(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "ClipHjertekurvSection",
    "step3ListSteps",
  ]);

  return {
    title,
    ingress,
    steps,
    step3ListIntro,
    step3ListSteps,
  };
}

export function useFletteHjertekurvSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "ingress",
  ]);
  const steps = getValuesByKeys<
    Array<{
      number: number;
      altText: string;
      illustrationSrc: string;
      description: string;
    }>
  >(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "steps",
  ]);

  const step1PopoverContent = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "step1",
    "popoverContent",
  ]);
  const step1PopoverText = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "step1",
    "popoverText",
  ]);
  const step1popoverTitle = getValuesByKeys(dictionary, [
    "pages",
    "howToCreateHjertekurvPage",
    "fletteHjertekurvSection",
    "step1",
    "popoverTitle",
  ]);

  return {
    title,
    ingress,
    steps,
    step1Popover: {
      content: step1PopoverContent,
      text: step1PopoverText,
      title: step1popoverTitle,
    },
  };
}

export function useHowToMalToPaper() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "ingress",
  ]);

  const breadcrumbFrontPage = getValuesByKeys(dictionary, [
    "breadcrumb",
    "frontpage",
  ]);
  const breadcrumbHowToCreateHjertekurvPage = getValuesByKeys(dictionary, [
    "breadcrumb",
    "howToCreateHjertekurvPage",
  ]);
  const breadcrumbHowToMalToPaper = getValuesByKeys(dictionary, [
    "breadcrumb",
    "howToMalToPaper",
  ]);

  return {
    title,
    ingress,
    breadcrumb: {
      frontpage: breadcrumbFrontPage,
      howToCreateHjertekurvPage: breadcrumbHowToCreateHjertekurvPage,
      howToMalToPaper: breadcrumbHowToMalToPaper,
    },
  };
}

export function useHowToMalTilMatpapirSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "howToMalTilMatpapirSection",
    "title",
  ]);
  const ingress = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "howToMalTilMatpapirSection",
    "ingress",
  ]);
  const steps = getValuesByKeys<
    Array<{ altText: string; description: string }>
  >(dictionary, [
    "pages",
    "howToMalToPaper",
    "howToMalTilMatpapirSection",
    "steps",
  ]);
  const step5LinkText = getValuesByKeys(dictionary, [
    "pages",
    "howToMalToPaper",
    "howToMalTilMatpapirSection",
    "step5LinkText",
  ]);

  return {
    title,
    ingress,
    steps,
    step5LinkText,
  };
}
