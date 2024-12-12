"use client";

import Button from "@/components/shared/ui/button/button";
import useHjertekurver from "./useViewHjertekurvSection";

import "./viewHjertekurvSection.scss";
import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HjertekurvCarousel from "./hjertekurvCarousel";

export default function ViewHjertekurvSection() {
  const { data, error, loading } = useHjertekurver("");

  if (loading) {
    return <HjertekurvLoader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length < 3) {
    return null;
  }

  return (
    <div className="our-hearts-container">
      <div>
        <Paragraph maxWidth={400}>
          Få inspirasjon fra vår store samling av hjertekurver! Vi har samlet et
          bredt utvalg av design - alt fra klassiske julekurver til kreative og
          moderne mønstre.
        </Paragraph>
        <Paragraph maxWidth={400}>Hver kurv kommer med:</Paragraph>
        <ul className="custom-ul">
          <li>Et bilde av det ferdige resultatet</li>
          <li>Maler og veiledning for å lage din egen</li>
          <li>Informasjon om designet</li>
        </ul>
        <Button
          style={{ marginTop: "24px" }}
          label="Se alle kurver"
          href="no/hjertekurver"
        />
      </div>
      <HjertekurvCarousel useFirst displayTime={5000} kurver={data} />
    </div>
  );
}
