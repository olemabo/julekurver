import FullWidthWrapper from "@/components/shared/fullwidthWrapper/fullwidthWrapper";
import ContentHeader from "./contentHeader/contentHeader";
import "./frontpage.css";
import LagJulekurvSection from "./lagJulekurvSection/lagJulekurvSection";
import Image from "next/image";

export default function FrontPage() {
  return (
    <>
      <div className="default-page-container frontpage">
        <FullWidthWrapper color="red">
          <ContentHeader title="Lidenskap til kurver" format="white" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "60px",
            }}
          >
            <div style={{ padding: "100px" }}>
              <Image
                alt="logo av flettet hjertekurv"
                height={280}
                src={"/images/pages/frontpage/frontpage_hjertekurv.svg"}
              />
            </div>
            <div style={{ maxWidth: "500px" }}>
              <p style={{ color: "white" }}>
                Vår lidenskap for fletting av hjerter har ført til opprettelsen
                av dette nettstedet, et sted hvor kjærlighet møter kreativitet.
                Vi tror på kraften av håndlagde hjerte-flettede kreasjoner for å
                uttrykke følelser og skape unike øyeblikk.
              </p>
              <p style={{ color: "white" }}>
                På julekurver.no finner du inspirasjon, veiledninger og en
                gallery med ulike hjerte-flettede mesterverk. Vi er dedikert til
                å dele gleden ved å skape disse vakre kunstverkene og ønsker å
                bygge et fellesskap av hjerte-fletteentusiaster.
              </p>
              <p style={{ color: "white" }}>
                Takk for at du er en del av vår reise. Utforsk, lær, og del dine
                egne hjerte-flettede opplevelser med oss. Sammen skaper vi et
                fellesskap som feirer kjærlighet og kreativitet gjennom kunsten
                av hjerte-fletting.
              </p>
              <p style={{ color: "white" }}>
                Har du spørsmål, forslag eller bare ønsker å si hei? Besøk vår
                Kontakt Oss side for å komme i kontakt.
              </p>
            </div>
          </div>
        </FullWidthWrapper>
        <FullWidthWrapper>
          <ContentHeader title="Se våre kurver" format="black" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "60px",
            }}
          ></div>
        </FullWidthWrapper>
        <FullWidthWrapper color="green">
          <ContentHeader title="Lag en julekurv" format="white" />
          <LagJulekurvSection />
        </FullWidthWrapper>
        <FullWidthWrapper>
          <ContentHeader title="Bli inspirert" format="black" />
        </FullWidthWrapper>
      </div>
    </>
  );
}
