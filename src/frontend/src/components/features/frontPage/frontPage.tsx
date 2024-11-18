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
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";

export default function FrontPage() {
  return (
    <PageWrapper
      withBottomMargin={false}
      className="default-page-container frontpage"
    >
      <FullWidthWrapper color={bgColorThemeRed}>
        <AboutKurverSection />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ContentHeader title="Se våre kurver" theme={darkTheme} />
        <ViewHjertekurvSection />
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeGreen}>
        <ContentHeader title="Lag en julekurv" theme={lightTheme} />
        <LagJulekurvSection />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ContentHeader title="Bli inspirert" theme={darkTheme} />
        <InspirationSection />
      </FullWidthWrapper>
      <FullWidthWrapper color={bgColorThemeRed}>
        <ContactUsSection />
      </FullWidthWrapper>
    </PageWrapper>
  );
}
