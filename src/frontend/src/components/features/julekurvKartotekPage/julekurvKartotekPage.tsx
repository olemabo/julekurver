import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import "./julekurvKartotekCard.css";
import { Search } from "@/components/shared/ui/search/search";
import { Julekurv } from "@/app/[lang]/julekurver/[julekurv]/page";
import JulekurvKartotekCard from "./julekurvKartotekCard";

export type JulekurvKartotekPageProps = {
  julekurver?: Julekurv[];
};

export function JulekurvKartotekPage({
  julekurver,
}: JulekurvKartotekPageProps) {
  if (!julekurver || julekurver.length < 1) {
    return null;
  }

  console.log(julekurver, "julekurver");

  return (
    <>
      <div className="standard-page">
        <Breadcrumb
          linkItems={[
            { linkText: "Forside", href: "/" },
            { linkText: "Julekurver", href: "/julekurver" },
          ]}
        />
        <div>
          <h1>{"Julekurver"}</h1>
          <div>
            Søk blant alle våre julekurver ved hjelp av søkefunksjonaliteten
            vår.
          </div>
          {/* <div dangerouslySetInnerHTML={{__html: julekurvPage.about}} /> */}
          <div>
            <Search />
            <div className="julekurv-kartotek-section">
              {julekurver.map((julekurv, index) => (
                <JulekurvKartotekCard
                  key={julekurv.name || index}
                  julekurv={julekurv}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JulekurvKartotekPage;
