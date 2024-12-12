"use client";

import FullWidthWrapper, {
  bgColorThemeGreen,
  bgColorThemeRed,
} from "@/components/shared/fullwidthWrapper/fullwidthWrapper";
import ContentHeader from "./contentHeader/contentHeader";
import LagJulekurvSection from "./lagHjertekurvSection/lagHjertekurvSection";
import { darkTheme, lightTheme } from "@/constants/displayTheme";
import AboutKurverSection from "./aboutKurverSection/aboutKurverSection";
import ViewHjertekurvSection from "./viewHjertekurvSection/viewHjertekurvSection";
import InspirationSection from "./inspirationSection/inspirationSection";
import ContactUsSection from "./contactUsSection/contactUsSection";
import { useFrontPageTitles } from "./utils";

export default function FrontPage() {
  const { getInspiredTitle, createHjertekurvTitle, seeOurKurver } =
    useFrontPageTitles();

  return (
    <div className="default-page-container frontpage">
      <FullWidthWrapper color={bgColorThemeRed}>
        <AboutKurverSection />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ContentHeader title={seeOurKurver} theme={darkTheme} />
        <ViewHjertekurvSection />
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeGreen}>
        <ContentHeader title={createHjertekurvTitle} theme={lightTheme} />
        <LagJulekurvSection />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <div style={{ height: "48px" }}></div>
        <div style={{ height: "48px" }}></div>
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeRed}>
        <ContactUsSection />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ContentHeader title={getInspiredTitle} theme={darkTheme} />
        <InspirationSection />
      </FullWidthWrapper>
    </div>
  );
}
