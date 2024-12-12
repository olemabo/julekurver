"use server";

import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { getDictionary } from "./dictionaries";
import LanguageProvider, { LangParams } from "@/providers";
import { alegreya, alegreyaHeader, alegreyaSansLight } from "./fonts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "hjertekurver.no - Nettside med samling av hjertekurver/julekurver, maler, inspirasjon og veiledning.",
    description:
      "Utforsk en stor samling av hjertekurver/julekurver med maler, bilder og detaljerte veiledninger. Lær hvordan du lager tradisjonelle julekurver og la deg inspirere til kreativ fletting.",
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
      lang="en"
      className={`${alegreya.variable} ${alegreyaSansLight.variable} ${alegreyaHeader.variable}`}
    >
      <body>
        <LanguageProvider lang={lang} dictionary={dictionary}>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
