import React from "react";
import Image from "next/image";
import Popover from "../../ui/popover/popover";

const FlettetilleggPopover = () => {
  return (
    <Popover
      title="Flettetillegg"
      content={
        <>
          Flettetillegget er den lille ekstra lengden du klipper opp strimelene
          i, for å ta høyde for at flettingen vil ta litt ekstra av strimelene.
          Alle maler som er laget er laget basert på et kvadrat. Det vil si at
          du får nøyaktig lik bredde og høyde på fletteområdet. Hvis man klipper
          det slik vil man fort støte på et problem mot slutten av flettingen,
          da selve flettingene også vil kreve litt ekstra papir når strimlene
          går opp og ned. Dette flettetillegg må du legge til selv når du
          klipper. For en kurv med få strimlere kan du legge til lite, 1-4 mm,
          men for en kurv med mange strimler må du legge til mer.
          <Image
            src="/images/pages/frontpage/flettetillegg.svg"
            alt="Illustrasjon av flettetillegg"
            width={270}
            height={60}
          />
        </>
      }
    >
      flettetillegget
    </Popover>
  );
};

export default FlettetilleggPopover;
