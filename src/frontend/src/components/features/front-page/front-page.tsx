import FullWidthWrapper from "@/components/shared/full-width-wrapper/full-width-wrapper";
import LagJulekurvSection from "./sections/lag-hjertekurv/lag-hjertekurv-section";
import AboutKurverSection from "./sections/about-kurver/aboutKurverSection";
import ViewHjertekurvSection from "./sections/view-hjertekurv/viewHjertekurvSection";
import InspirationSection from "./sections/inspiration/inspiration";
import ContactUsSection from "./sections/contact-us/contact-us";
import { LocaleProps } from "@/config/i18n";

export default async function FrontPage({ lang }: LocaleProps) {
  return (
    <>
      <FullWidthWrapper color="red">
        <AboutKurverSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <ViewHjertekurvSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper color="green">
        <LagJulekurvSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <div style={{ height: "48px" }}></div>
      </FullWidthWrapper>
      <FullWidthWrapper color="red">
        <ContactUsSection lang={lang} />
      </FullWidthWrapper>
      <FullWidthWrapper>
        <InspirationSection lang={lang} />
      </FullWidthWrapper>
    </>
  );
}
