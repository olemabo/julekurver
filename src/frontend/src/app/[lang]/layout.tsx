import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import {
  alegreya,
  alegreyaHeader,
  alegreyaSansLight,
  alegreyaSansMedium,
} from "./fonts";
import { Locale } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  const title = dictionary.layout.seo.title;
  const description = dictionary.layout.seo.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      url: buildAppRoute({ route: "https://hjertekurver.no" }),
    },
    twitter: {
      title: title,
      description: description,
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${alegreya.variable} ${alegreyaSansLight.variable} ${alegreyaHeader.variable} ${alegreyaSansMedium.variable}`}
    >
      <body>
        <Header dictionary={dictionary.header} lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
