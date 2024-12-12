// "use client"

// import { getDictionary, Locale } from "@/app/[lang]/dictionaries";
// import React, {createContext, useEffect, useState} from "react";

// type LanguageContextType = {
//     dictionary: Record<string, string>;
// };

// export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export default function LanguageProvider({children, lang}: { lang: Locale, children: React.ReactNode}){
//     const [dictionary, setDictionary] = useState<Record<string, string>>({});

//     useEffect(() => {
//         // Load the dictionary dynamically based on the selected language
//         getDictionary(lang)
//         .then((dict) => setDictionary(dict))
//         .catch((err) => console.error("Failed to load dictionary:", err));
//     }, [lang]);

//     return (
//     <LanguageContext value={undefined}>
//         {children}
//     </LanguageContext>
// )
// }

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
