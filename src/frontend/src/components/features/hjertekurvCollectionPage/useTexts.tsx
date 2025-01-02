import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { useContext } from "react";

import {
  FullHeart,
  FullScissor,
} from "@/components/shared/difficultyLevel/icons";

export function useHjertekurvTexts() {
  const { dictionary } = useContext(LanguageContext);

  const breadcrumbHome = getValuesByKeys(dictionary, [
    "breadcrumb",
    "frontpage",
  ]);

  const breadcrumbHeartBaskets = getValuesByKeys(dictionary, [
    "breadcrumb",
    "hjertekurver",
  ]);

  const headingMain = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "heading",
  ]);

  const paragraphIntro = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "paragraph",
    "intro",
  ]);

  const paragraphOutro = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "paragraph",
    "outro",
  ]);

  const noResults = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "paragraph",
    "noResults",
  ]);
  const resultsCount = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "paragraph",
    "resultsCount",
  ]);

  const searchPlaceholder = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "search",
    "placeholder",
  ]);

  return {
    breadcrumbHome,
    breadcrumbHeartBaskets,
    headingMain,
    paragraphIntro,
    paragraphOutro,
    noResults,
    resultsCount,
    searchPlaceholder,
  };
}

export function useDifficultyPopoverTexts() {
  const { dictionary } = useContext(LanguageContext);

  const difficultyPopover = {
    title: getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "difficultyPopover",
      "title",
    ]),
    description: getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "difficultyPopover",
      "description",
    ]),
    difficulty: getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "difficultyPopover",
      "difficulty",
    ]),
    factors: [
      {
        title: getValuesByKeys(dictionary, [
          "pages",
          "hjertekurverKartotekPage",
          "difficultyPopover",
          "weaving",
        ]),
        details: (
          <>
            {getValuesByKeys(dictionary, [
              "pages",
              "hjertekurverKartotekPage",
              "difficultyPopover",
              "weavingDetails",
            ])}{" "}
            <FullHeart size={"small"} />
          </>
        ),
      },
      {
        title: getValuesByKeys(dictionary, [
          "pages",
          "hjertekurverKartotekPage",
          "difficultyPopover",
          "cutting",
        ]),
        details: (
          <>
            {getValuesByKeys(dictionary, [
              "pages",
              "hjertekurverKartotekPage",
              "difficultyPopover",
              "cuttingDetails",
            ])}{" "}
            <FullScissor size={"small"} />
          </>
        ),
      },
    ],
  };

  return difficultyPopover;
}

export function useSearchAndFilterTexts() {
  const { dictionary } = useContext(LanguageContext);

  const searchPlaceholder = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "search",
    "placeholder",
  ]);

  const resultsCount = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "search",
    "resultsCount",
  ]);

  const noResults = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurverKartotekPage",
    "search",
    "noResults",
  ]);

  return {
    searchPlaceholder,
    resultsCount,
    noResults,
  };
}

export function useFilterTexts() {
  const { dictionary } = useContext(LanguageContext);

  const getFilterText = (filterKey: string) => {
    const label = getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "filters",
      filterKey,
      "label",
    ]);
    const description = getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "filters",
      filterKey,
      "description",
    ]);
    return { label, description };
  };

  const filterTexts = {
    alphabetic: getFilterText("alphabetic"),
    recentlyCreated: getFilterText("recentlyCreated"),
    lowestDifficultyFletting: getFilterText("lowestDifficultyFletting"),
    highestDifficultyFletting: getFilterText("highestDifficultyFletting"),
    lowestDifficultyKlipping: getFilterText("lowestDifficultyKlipping"),
    highestDifficultyKlipping: getFilterText("highestDifficultyKlipping"),
    popularity: getFilterText("popularity"),
    filterButtonLabel: getValuesByKeys(dictionary, [
      "pages",
      "hjertekurverKartotekPage",
      "filters",
      "filterButtonLabel",
    ]),
  };

  return { ...filterTexts };
}
