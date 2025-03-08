"use client";

import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";
import ContentHeader from "./contentHeader/contentHeader";
import { darkTheme } from "@/constants/displayTheme";

export function useAboutKurverSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "aboutKurverSection",
    "title",
  ]);

  const imageAltText = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "aboutKurverSection",
    "imageAltText",
  ]);

  const paragraph1 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "aboutKurverSection",
    "paragraph1",
  ]);

  const paragraph2 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "aboutKurverSection",
    "paragraph2",
  ]);

  const learnMoreAboutUsButtonLabel = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "aboutKurverSection",
    "learnMoreAboutUsButtonLabel",
  ]);

  return {
    title,
    paragraph1,
    paragraph2,
    learnMoreAboutUsButtonLabel,
    imageAltText,
  };
}

export function useViewHjertekurvSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "viewHjertekurvSection",
    "title",
  ]);

  const paragraph1 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "viewHjertekurvSection",
    "paragraph1",
  ]);

  const paragraph2 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "viewHjertekurvSection",
    "paragraph2",
  ]);

  const listItems = getValuesByKeys<Array<string>>(dictionary, [
    "pages",
    "frontpage",
    "viewHjertekurvSection",
    "listItems",
  ]);

  const buttonLabel = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "viewHjertekurvSection",
    "buttonLabel",
  ]);

  return {
    title,
    paragraph1,
    paragraph2,
    listItems,
    buttonLabel,
  };
}

export function useLagHjertekurvSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "lagHjertekurvSection",
    "title",
  ]);

  const step1 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "lagHjertekurvSection",
    "step1",
  ]);

  const step2 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "lagHjertekurvSection",
    "step2",
  ]);

  const step3 = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "lagHjertekurvSection",
    "step3",
  ]);

  const buttonLabel = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "lagHjertekurvSection",
    "buttonLabel",
  ]);

  return {
    title,
    step1,
    step2,
    step3,
    buttonLabel,
  };
}

export function useContactUsSection() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "title",
  ]);

  const introParagraph = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "introParagraph",
  ]);

  const introLinkText = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "introLinkText",
  ]);

  const feedbackPrompt = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "feedbackPrompt",
  ]);

  const thankYouMessage = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "thankYouMessage",
  ]);

  const textareaLabel = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "textareaLabel",
  ]);

  const textareaPlaceholder = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "textareaPlaceholder",
  ]);

  const errorMessage = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "errorMessage",
  ]);

  const buttonLabel = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "buttonLabel",
  ]);

  const imageAltText = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "contactUsSection",
    "imageAltText",
  ]);

  return {
    title,
    introParagraph,
    introLinkText,
    thankYouMessage,
    feedbackPrompt,
    textareaLabel,
    textareaPlaceholder,
    errorMessage,
    buttonLabel,
    imageAltText,
  };
}

export function InspirationTitle() {
  const { dictionary } = use(LanguageContext);

  const title = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "inspirationSection",
    "title",
  ]);

  return <ContentHeader title={title} theme={darkTheme} />;
}
