import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { getDictionary } from "../../localization/dictionaries";
import LanguageProvider, { type Locale } from "@/providers";
import {
  alegreya,
  alegreyaHeader,
  alegreyaSansLight,
  alegreyaSansMedium,
} from "./fonts";
import "../globals.css";
import { BASE_URL } from "@/constants/urls";

// export async function generateMetadata(
//   props: PageProps<"/[lang]">,
// ): Promise<Metadata> {
//   const { lang } = (await props.params) as Locale;
//   const dictionary = await getDictionary(lang);

//   const title = dictionary.layout.seo.title;
//   const description = dictionary.layout.seo.description;

//   return {
//     title: title,
//     description: description,
//     openGraph: {
//       title: title,
//       url: BASE_URL,
//     },
//     twitter: {
//       title: title,
//       description: description,
//     },
//   };
// }

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  // const { lang } = (await props.params) as Locale;
  // const dictionary = await getDictionary(lang);

  // return (
  //   <html
  //     lang={lang}
  //     className={`${alegreya.variable} ${alegreyaSansLight.variable} ${alegreyaHeader.variable} ${alegreyaSansMedium.variable}`}
  //   >
  //     <body>
  //       <LanguageProvider lang={lang} dictionary={dictionary}>
  //         <Header />
  //         <main id="main">{props.children}</main>
  //         <Footer />
  //       </LanguageProvider>
  //     </body>
  //   </html>
  // );
  return <>{props.children}</>;
}
