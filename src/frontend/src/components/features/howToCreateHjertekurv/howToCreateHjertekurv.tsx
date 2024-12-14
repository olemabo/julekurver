import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

import ClipHjertekurvSection from "./clipHjertekurvSection";
import FletteHjertekurvSection from "./fletteHjertekurvSection";
import WhatYouNeedSection from "./whatYouNeedSection";
import NavigateToH2 from "@/components/shared/ui/navigateToId/navigateToH2";
import { HjertekurvMalSection } from "./hjertekurvMalSection";

const breadCrumbs = [
  { linkText: "Forside", href: "/" },
  { linkText: "Hvordan lage kurver", href: "/hvordan-lage-kurver" },
];

export const whatYouNeedHeadingId = "what-you-need-heading-id";
export const hjertekurvMalHeadingId = "hjertekurv-mal-heading-id";
export const clipHjertekurvHeadingId = "clip-hjertekurv-heading-id";
export const fletteHjertekurvHeadingId = "flette-hjertekurv-heading-id";

export type HeadingIdProps = {
  headingId: string;
};

export default function HowToCreateHjertekurv() {
  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading headingLevel="h1">Hvordan lage kurver</Heading>
      <Paragraph>
        Å lage hjertekurver krever noen få enkle materialer og følger en
        relativt fast prosess. Du trenger papir i ønskede farger, en mal for å
        sikre riktig form, og saks til klipping. Deretter flettes delene sammen
        for å skape den ferdige kurven. Følg stegene nedenfor for en oversikt
        over hvordan du lager en hjertekurv.
      </Paragraph>
      <NavigateToH2 />
      <WhatYouNeedSection headingId={whatYouNeedHeadingId} />
      <HjertekurvMalSection headingId={hjertekurvMalHeadingId} />
      <ClipHjertekurvSection headingId={clipHjertekurvHeadingId} />
      <FletteHjertekurvSection headingId={fletteHjertekurvHeadingId} />
    </PageWrapper>
  );
}
