"use server";

import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { getDictionary, getValuesByKeys } from "./dictionaries";
import LanguageProvider, { LangParams } from "@/providers";
import {
  alegreya,
  alegreyaHeader,
  alegreyaSansLight,
  alegreyaSansMedium,
} from "./fonts";
import "../globals.css";
import { BASE_URL } from "@/constants/urls";

export async function generateMetadata({
  params,
}: {
  params: LangParams;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const title = getValuesByKeys(dictionary, ["layout", "seo", "title"]);
  const description = getValuesByKeys(dictionary, [
    "layout",
    "seo",
    "description",
  ]);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: BASE_URL,
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${alegreya.variable} ${alegreyaSansLight.variable} ${alegreyaHeader.variable} ${alegreyaSansMedium.variable}`}
    >
      <body>
        <LanguageProvider lang={lang} dictionary={dictionary}>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
