import React from "react";
import "./difficultyLevel.css";
import {
  FullStar,
  HalfStar,
  EmptyStar,
  FullHeart,
  FullScissor,
  EmptyHeart,
  EmptyScissor,
} from "./icons";

type IconType = "star" | "heart" | "scissor";

type DifficultyLevelProps = {
  rating?: number;
  type?: IconType;
};

export default function DifficultyLevel({
  rating = 0,
  type = "star",
}: DifficultyLevelProps) {
  if (!rating || rating === 0) {
    return null;
  }

  const totalIcons = 5;
  const icons = [];

  const fullIcons = Math.ceil(rating / 2);
  const hasHalfIcon = rating % 2 !== 0;
  const emptyIcons = totalIcons - fullIcons - (hasHalfIcon ? 1 : 0) + 1;

  const getFullIcon = () => {
    if (type === "heart") return <FullHeart />;
    if (type === "scissor") return <FullScissor />;
    return <FullStar />;
  };

  const getEmptyIcon = () => {
    if (type === "heart") return <EmptyHeart />;
    if (type === "scissor") return <EmptyScissor />;
    return <EmptyStar />;
  };

  const getHalfIcon = () => {
    if (type === "star") return <HalfStar />;
    return null;
  };

  for (let i = 0; i < fullIcons; i++) {
    icons.push(
      <React.Fragment key={`full-${i}`}>{getFullIcon()}</React.Fragment>,
    );
  }

  if (hasHalfIcon && type === "star") {
    icons.push(<React.Fragment key="half">{getHalfIcon()}</React.Fragment>);
  }

  for (let i = 0; i < emptyIcons; i++) {
    icons.push(
      <React.Fragment key={`empty-${i}`}>{getEmptyIcon()}</React.Fragment>,
    );
  }

  return (
    <div style={{ display: "flex", columnGap: "4px", margin: "16px 0" }}>
      {icons}
    </div>
  );
}
