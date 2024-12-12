import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";

export function getHjertekurverPageTexts() {
  const { dictionary } = use(LanguageContext);

  const difficultyFlettingText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "difficultyFletting",
  ]);

  const difficultyKlippingText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "difficultyKlipping",
  ]);

  const addedText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "added",
  ]);

  return { difficultyFlettingText, difficultyKlippingText, addedText };
}

export function formatDate(createdAt: Date) {
  const parsedToDate = new Date(createdAt);

  const formattedDate =
    `${parsedToDate.getDate()}`.padStart(2, "0") +
    `.${(parsedToDate.getMonth() + 1).toString().padStart(2, "0")}` +
    `.${parsedToDate.getFullYear()}`;

  return formattedDate;
}
