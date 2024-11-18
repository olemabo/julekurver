import { lightTheme } from "@/constants/displayTheme";
import "./lagHjertekurvSection.css";
import JulekurvStep from "./lagHjertekurvStep";
import Button from "@/components/shared/ui/button/button";

export default function LagHjertekurvSection() {
  const julekurvSteps = [
    {
      imageSrc: "/images/pages/frontpage/lage_julekurv_materialer.svg",
      description:
        "Dette trenger du. For å sette i gang med å lage hjertekurver trenger du ikke mye utstyr utover det som du allerede har i huset. Du trenger glanspapir, blyant, viskelær, papirsaks, binders, passer og lim til å feste hanken.",
      height: 225,
    },
    {
      imageSrc: "/images/pages/frontpage/lage_julekurv_mal.svg",
      description:
        "Nå trenger du bare å finne og lage en mal som skal brukes for å lage julekurven. Se i julekurvkartoteket på siden her for inspirasjon. Malen kan lages i papp og kan gjenbrukes.",
      height: 210,
    },
    {
      imageSrc: "/images/pages/frontpage/lage_julekurv_kurv.svg",
      description:
        "Siste steg er å flette selve kurven. Se siden hvordan flette kurv for mer info og se ellers på vanskelighetsgraden for de ulike kurvene og start med noe som er passende for deg. Så blir det strålende!",
      height: 210,
    },
  ];

  return (
    <>
      <div className="lag-hjertekurv-section-container">
        {julekurvSteps.map((step, index) => (
          <JulekurvStep
            key={index}
            imageUrl={step.imageSrc}
            description={step.description}
            height={step.height}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          theme={lightTheme}
          label="Hvordan lage kurver"
          href="/no/hvordan-lage-kurver"
        />
      </div>
    </>
  );
}
