import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";

export enum HjertekurvFilterType {
  Popularity = "popularity",
  Alphabetic = "alphabetic",
  AlphabeticOtherWay = "alphabetic_otherway",
  RecentlyCreated = "recentlyCreated",
  LowestDifficultyFletting = "lowestDifficultyFletting",
  HighestDifficultyFletting = "highestDifficultyFletting",
  LowestDifficultyKlipping = "lowestDifficultyKlipping",
  HighestDifficultyKlipping = "highestDifficultyKlipping",
}

export const filterAndSortHjertekurver = (
  hjertekurver: Hjertekurv[],
  searchQuery: string,
  selectedCategories: number[],
  selectedFilter: HjertekurvFilterType | undefined,
) => {
  const filteredHjertekurver = hjertekurver.filter(
    (hjertekurv) =>
      hjertekurv.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        hjertekurv.categories?.some((cat) =>
          selectedCategories.includes(cat.id),
        )),
  );

  console.log();

  return filteredHjertekurver.sort((a, b) => {
    switch (selectedFilter) {
      case HjertekurvFilterType.Popularity:
        return b.popularity - a.popularity;

      case HjertekurvFilterType.Alphabetic:
        return a.name.localeCompare(b.name);

      case HjertekurvFilterType.AlphabeticOtherWay:
        return b.name.localeCompare(a.name);

      case HjertekurvFilterType.RecentlyCreated:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case HjertekurvFilterType.LowestDifficultyFletting:
        return a.difficultyFletting - b.difficultyFletting;

      case HjertekurvFilterType.HighestDifficultyFletting:
        return b.difficultyFletting - a.difficultyFletting;

      case HjertekurvFilterType.LowestDifficultyKlipping:
        return a.difficultyKlipping - b.difficultyKlipping;

      case HjertekurvFilterType.HighestDifficultyKlipping:
        return b.difficultyKlipping - a.difficultyKlipping;

      default:
        return 0;
    }
  });
};
