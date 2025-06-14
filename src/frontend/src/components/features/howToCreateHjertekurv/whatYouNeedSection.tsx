"use client";

import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import { useWhatYouNeedSection } from "./useTexts";
import { HeadingIdProps } from "./constants";

export default function WhatYouNeedSection({ headingId }: HeadingIdProps) {
  const { title, ingress, whatYouNeedList } = useWhatYouNeedSection();

  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        {title}
      </Heading>
      <Paragraph>{ingress}</Paragraph>
      <ul className="custom-ul">
        {whatYouNeedList?.map((element, index) => (
          <li key={`what-you-need-list-${index}`}>{element}</li>
        ))}
      </ul>
    </>
  );
}
