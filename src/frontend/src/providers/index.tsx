"use client";

import React, { createContext, useContext } from "react";
import { Dictionary } from "@/localization/dictionaries";
import { LanguageCode } from "@/constants/languages";

export type Locale = { lang: LanguageCode };
export type LangParams = Promise<Locale>;

export type LanguageContextType = {
  dictionary: Dictionary | undefined;
  lang: string;
};

export const LanguageContext = createContext<LanguageContextType>({
  dictionary: undefined,
  lang: "",
});

export default function LanguageProvider({
  children,
  lang,
  dictionary,
}: {
  lang: LanguageCode;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext value={{ lang, dictionary }}>{children}</LanguageContext>
  );
}

export function useTranslation(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
