import HowToMalToPaper from "@/components/features/howToCreateHjertekurv/HowToMalToPaper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lær å lage hjertekurver | Hvordan få malen over til papiret",
  description:
    "Lær hvordan du kan få malen til hjertekurven/julekurven din over på papiret slik at du kan klippe den ut.",
};

export default async function Page() {
  return <HowToMalToPaper />;
}
