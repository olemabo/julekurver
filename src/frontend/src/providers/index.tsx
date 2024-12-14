"use client";

import React, { createContext, useContext } from "react";
import { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export type LangParams = Promise<{ lang: Locale }>;

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
  lang: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ lang, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
