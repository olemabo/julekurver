"use server";

import FullWidthWrapper, {
  bgColorThemeGreen,
  bgColorThemeRed,
} from "@/components/shared/fullwidthWrapper/fullwidthWrapper";
import LagJulekurvSection from "./lagHjertekurvSection/lagHjertekurvSection";
import AboutKurverSection from "./aboutKurverSection/aboutKurverSection";
import ViewHjertekurvSection from "./viewHjertekurvSection/viewHjertekurvSection";
import InspirationSection from "./inspirationSection/inspirationSection";
import ContactUsSection from "./contactUsSection/contactUsSection";
import { Locale } from "@/providers";

export default async function FrontPage({ lang }: Locale) {

  return (
    <div className="default-page-container frontpage">
      <FullWidthWrapper color={bgColorThemeRed}>
        <AboutKurverSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ViewHjertekurvSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeGreen}>
        <LagJulekurvSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <div style={{ height: "48px" }}></div>
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeRed}>
        <ContactUsSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <InspirationSection />
      </FullWidthWrapper>
    </div>
  );
}
