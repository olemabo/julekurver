import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HowToMalTilMatpapirSection from "./howMalTilMatpapir";

const breadCrumbs = [
  { linkText: "Forside", href: "/" },
  { linkText: "Hvordan lage kurver", href: "/hvordan-lage-kurver" },
  { linkText: "Mal til papir", href: "/mal-til-papir" },
];

export default function HowToMalToPaper() {
  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading headingLevel="h1">Hvordan få mal på papir</Heading>
      <Paragraph>
        For å lage en nøyaktig hjertekurv er det viktig å overføre malen korrekt
        til papiret du skal bruke. Det finnes flere metoder for å gjøre dette,
        og her fokuserer vi på en enkel og effektiv teknikk ved bruk av
        matpapir. Denne metoden gjør det lett å overføre malen på en presis
        måte, slik at du kan begynne å klippe og flette uten problemer.
      </Paragraph>
      <HowToMalTilMatpapirSection />
    </PageWrapper>
  );
}
