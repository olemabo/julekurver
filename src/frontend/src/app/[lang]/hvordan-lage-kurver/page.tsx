import HowToCreateHjertekurv from "@/components/features/howToCreateHjertekurv/howToCreateHjertekurv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lær å lage hjertekurver | Steg-for-steg veiledning og maler",
  description:
    "Flett dine egne hjertekurver med vår enkle steg-for-steg veiledning. Last ned gratis maler, se bilder og finn tips for å lage vakre julekurver",
};

export default async function Page() {
  return <HowToCreateHjertekurv />;
}
