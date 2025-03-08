"use client";

import Popover from "@/components/shared/ui/popover/popover";
import { useDifficultyPopoverTexts } from "./useTexts";

export function DifficultyPopover() {
  const { title, description, factors, difficulty } =
    useDifficultyPopoverTexts();

  return (
    <Popover
      title={title}
      content={
        <>
          {description}
          <ul className="custom-ul">
            {factors.map((factor, index) => (
              <li key={index}>
                <b>{factor.title}</b> {factor.details}
              </li>
            ))}
          </ul>
        </>
      }
    >
      {difficulty}
    </Popover>
  );
}

export default DifficultyPopover;
