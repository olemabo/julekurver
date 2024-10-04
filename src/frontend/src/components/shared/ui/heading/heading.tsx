import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3';

interface HeadingProps {
  headingLevel: HeadingLevel;
  children: React.ReactNode;
}

export default function Heading({
    headingLevel,
    children
}: HeadingProps) {
  const Tag = headingLevel;

  return <Tag>{children}</Tag>;
};