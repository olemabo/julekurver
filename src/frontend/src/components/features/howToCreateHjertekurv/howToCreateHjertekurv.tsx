import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import HowToSection from "@/components/shared/howTo/howTo";
import ClipHjertekurvSection from "./clipHjertekurvSection";
import FletteHjertekurvSection from "./fletteHjertekurvSection";
import WhatYouNeedSection from "./whatYouNeedSection";
import NavigateToH2 from "@/components/shared/ui/navigateToId/navigateToH2";
import { HjertekurvMalSection } from "./hjertekurvMalSection";

export type HeadingIdProps = {
  headingId: string;
};

export default function HowToCreateHjertekurv() {
  const whatYouNeedHeadingId = "what-you-need-heading-id";
  const hjertekurvMalHeadingId = "hjertekurv-mal-heading-id";
  const clipHjertekurvHeadingId = "clip-hjertekurv-heading-id";
  const fletteHjertekurvHeadingId = "flette-hjertekurv-heading-id";

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb
        linkItems={[
          { linkText: "Forside", href: "/" },
          { linkText: "Hvordan lage kurver", href: "/hvordan-lage-kurv" },
        ]}
      />
      <Heading headingLevel="h1">Hvordan lage kurver</Heading>
      <Paragraph>
        For å komme igang med å lage hjertekurver, trenger du ikke mye utstyr
        utover det som du allerede har i huset.
      </Paragraph>
      <NavigateToH2 />
      <WhatYouNeedSection headingId={whatYouNeedHeadingId} />
      <HjertekurvMalSection headingId={hjertekurvMalHeadingId} />
      <ClipHjertekurvSection headingId={clipHjertekurvHeadingId} />
      <FletteHjertekurvSection headingId={fletteHjertekurvHeadingId} />
    </PageWrapper>
  );
}
