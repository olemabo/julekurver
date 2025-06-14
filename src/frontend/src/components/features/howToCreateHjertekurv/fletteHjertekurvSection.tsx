"use client";

import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import Popover from "@/components/shared/ui/popover/popover";
import FlettetilleggPopover from "@/components/shared/content/popover/FlettetilleggPopover";
import { useFletteHjertekurvSection } from "./useTexts";
import { ReplacePlaceholder } from "@/components/shared/content/replacePlaceholder";
import { HeadingIdProps } from "./constants";

export default function FletteHjertekurvSection({ headingId }: HeadingIdProps) {
  const { title, ingress, steps, step1Popover } = useFletteHjertekurvSection();

  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        {title}
      </Heading>
      <Paragraph>{ingress}</Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc={steps[0].illustrationSrc}
          altText={steps[0].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          <ReplacePlaceholder
            text={steps[0].description}
            placeholder={"{popover}"}
            component={
              <Popover
                title={step1Popover.title}
                content={<>{step1Popover.content}</>}
              >
                {step1Popover.text}
              </Popover>
            }
          />
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc={steps[1].illustrationSrc}
          altText={steps[1].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[1].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc={steps[2].illustrationSrc}
          altText={steps[2].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[2].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc={steps[3].illustrationSrc}
          altText={steps[3].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[3].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc={steps[4].illustrationSrc}
          altText={steps[4].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[4].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={6}
          useLazyImage
          illustrationSrc={steps[5].illustrationSrc}
          altText={steps[5].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[5].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={7}
          useLazyImage
          illustrationSrc={steps[6].illustrationSrc}
          altText={steps[6].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[6].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={8}
          useLazyImage
          illustrationSrc={steps[7].illustrationSrc}
          altText={steps[7].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[7].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={9}
          useLazyImage
          illustrationSrc={steps[8].illustrationSrc}
          altText={steps[8].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[8].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={10}
          useLazyImage
          illustrationSrc={steps[9].illustrationSrc}
          altText={steps[9].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          <ReplacePlaceholder
            placeholder="{popover}"
            text={steps[9].description}
            component={<FlettetilleggPopover />}
          />
        </ListWithIllustraion>

        <ListWithIllustraion
          number={11}
          useLazyImage
          illustrationSrc={steps[10].illustrationSrc}
          altText={steps[10].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[10].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={12}
          useLazyImage
          illustrationSrc={steps[11].illustrationSrc}
          altText={steps[11].altText}
          imageSize={{ width: 351, height: 300 }}
        >
          {steps[11].description}
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
