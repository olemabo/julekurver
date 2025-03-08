"use client";

import React from "react";
import Popover from "../../ui/popover/popover";
import Link from "next/link";
import { useSymmetriskMotivTexts } from "./useTexts";

const SymmetriskMotivPopover = () => {
  const {
    title,
    intro,
    link1Text,
    link1Href,
    mid,
    link2Text,
    link2Href,
    outro,
  } = useSymmetriskMotivTexts();

  return (
    <Popover
      title={title}
      content={
        <>
          {intro} <Link href={link1Href}>{link1Text}</Link> {mid}{" "}
          <Link href={link2Href}>{link2Text}</Link> {outro}
        </>
      }
    >
      {title?.toLowerCase()}
    </Popover>
  );
};

export default SymmetriskMotivPopover;
