import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Locale } from "./dictionaries";

import "../globals.css";

export const metadata: Metadata = {
  title:
    "hjertekurver.no - Nettside med samling av hjertekurver/julekurver, maler, inspirasjon og veiledning.",
  description:
    "Utforsk en stor samling av hjertekurver med maler, bilder og detaljerte veiledninger. Lær hvordan du lager tradisjonelle julekurver og la deg inspirere til kreativ fletting.",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  // const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
