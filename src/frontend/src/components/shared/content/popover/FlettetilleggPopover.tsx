"use client";

import Image from "next/image";
import Popover from "../../ui/popover/popover";
import { useFlettetilleggTexts } from "./useTexts";

const FlettetilleggPopover = () => {
  const { fletteTilleggText, fletteTilleggAltText, fletteTilleggTitle } =
    useFlettetilleggTexts();

  return (
    <Popover
      title="Flettetillegg"
      content={
        <>
          {fletteTilleggText}
          <Image
            src="/images/pages/frontpage/flettetillegg.svg"
            alt={fletteTilleggAltText}
            width={270}
            height={60}
          />
        </>
      }
    >
      {fletteTilleggTitle}
    </Popover>
  );
};

export default FlettetilleggPopover;
