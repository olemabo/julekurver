const STANDARD_PAGE_TYPES = {
  CONTACT_PAGE: "contact",
} as const;

Object.freeze(STANDARD_PAGE_TYPES);

export default STANDARD_PAGE_TYPES;

export type StandardPageTypes =
  (typeof STANDARD_PAGE_TYPES)[keyof typeof STANDARD_PAGE_TYPES];
