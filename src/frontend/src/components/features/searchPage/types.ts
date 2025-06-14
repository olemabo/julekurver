export enum PageType {
  StandardPage = "standardPage",
  Hjertekurv = "hjertekurvPage",
}

export interface SearchHits {
  url: string;
  title: string;
  description: string;
  type: PageType;
  imageUrl?: string;
}
