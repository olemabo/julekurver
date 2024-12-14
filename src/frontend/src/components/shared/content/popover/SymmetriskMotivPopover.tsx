import React from "react";
import Popover from "../../ui/popover/popover";
import Link from "next/link";

const SymmetriskMotivPopover = () => {
  return (
    <Popover
      title="Symmetrik motiv"
      content={
        <>
          Symmetrisk motiv betyr at du klipper ut to identiske maler som skal
          flettes sammen, slik som i{" "}
          <Link href="/no/hjertekurver/standard-kurv-3x3">9-felts-kurv</Link>{" "}
          brukt i dette eksempelet. Et eksempel på en kurv uten symmetrisk motiv
          er <Link href="/no/hjertekurver/isbjoern">isbjørn-kurven</Link>, hvor
          du må klippe ut to forskjellige maler for å få riktig design.
        </>
      }
    >
      symmetrisk motiv
    </Popover>
  );
};

export default SymmetriskMotivPopover;
