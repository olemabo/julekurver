import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";

export default function WhatYouNeedSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Dette trenger du
      </Heading>
      <Paragraph>
        For å komme i gang med å lage hjertekurver trenger du bare noen få enkle
        materialer, som du sannsynligvis allerede har hjemme. Dette er hva du
        trenger:
      </Paragraph>
      <ul className="custom-ul">
        <li>Glanspapir (evt annent ønsket papir)</li>
        <li>Saks</li>
        <li>Limstift (til å lime på hanken)</li>
        <li>Matpapir/papp/blåpapir</li>
      </ul>
    </>
  );
}
