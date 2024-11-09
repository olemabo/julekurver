import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Locale } from "./dictionaries";

import "../globals.css";

export const metadata: Metadata = {
  title: "Hjertekurv.no",
  description: "Generated by create next app",
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
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
