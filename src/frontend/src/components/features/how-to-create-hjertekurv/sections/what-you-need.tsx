import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "../constants";
import { getDictionary } from "@/localization/get-dictionary";

export default async function WhatYouNeedSection({
  headingId,
  lang,
}: HeadingIdProps) {
  const { title, ingress, whatYouNeedList } = (await getDictionary(lang)).pages
    .howToCreateHjertekurvPage.WhatYouNeedSection;

  return (
    <>
      <Heading id={headingId} level="h2">
        {title}
      </Heading>
      <Paragraph>{ingress}</Paragraph>
      <ul className="custom-ul">
        {whatYouNeedList?.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </>
  );
}
