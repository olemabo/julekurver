import Button from "@/components/shared/ui/button/button";
import "./lagHjertekurvSection.css";
import JulekurvStep from "./lagHjertekurvStep";
import { lightTheme } from "@/constants/displayTheme";

export default function LagHjertekurvSection() {
  const julekurvSteps = [
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_materialer.svg",
      description:
        "Finn papir i favorittfargene dine. Velg klassiske julefarger som rødt og hvitt, eller prøv noe nytt med mønstre og glitter.",
      height: 225,
      number: 1,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_mal.svg",
      description:
        "Last ned en mal, eller tegn din egen. Klipp forsiktig for å få jevne kanter og et symmetrisk design.",
      height: 210,
      number: 2,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_kurv.svg",
      description:
        "Start flettingen ved å føre stripene inn i hverandre. Jobb sakte for å få et jevnt og stramt mønster.",
      height: 210,
      number: 3,
    },
  ];

  return (
    <>
      <div className="lag-hjertekurv-section-container">
        {julekurvSteps.map((step, index) => (
          <JulekurvStep
            key={index}
            number={step.number}
            imageUrl={step.imageSrc}
            svgSize={60}
            description={step.description}
            height={step.height}
          />
        ))}
      </div>
      <div className="button-container">
        <Button
          theme={lightTheme}
          label="Lær å lage kurv"
          href="/no/hvordan-lage-kurver"
        />
      </div>
    </>
  );
}
