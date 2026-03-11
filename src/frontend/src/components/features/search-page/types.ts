export const PageType = {
  STANDARD: "standardPage",
  HJERTEKURV: "hjertekurvPage",
};

type PageType = (typeof PageType)[keyof typeof PageType];

export type SearchHit = {
  url: string;
  title: string;
  description: string;
  type: PageType;
  imageUrl?: string;
};
