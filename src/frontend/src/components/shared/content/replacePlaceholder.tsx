import React, { ReactNode, Fragment } from "react";

interface ReplacePlaceholderProps {
  text: string;
  placeholder: string;
  component: ReactNode;
}

export function ReplacePlaceholder({
  text,
  placeholder,
  component,
}: ReplacePlaceholderProps) {
  return (
    <>
      {text.split(placeholder).map((part, index) => (
        <Fragment key={index}>
          {part}
          {index === 0 && component}
        </Fragment>
      ))}
    </>
  );
}
