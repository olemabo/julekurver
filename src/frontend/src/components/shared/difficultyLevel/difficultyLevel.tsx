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
  HalfScissor,
  HalfHeart,
  IconSize,
} from "./icons";

export const ICON_TYPE_SCISSOR = "scissor";
export const ICON_TYPE_HEART = "heart";
export const ICON_TYPE_STAR = "star";

type IconType =
  | typeof ICON_TYPE_SCISSOR
  | typeof ICON_TYPE_HEART
  | typeof ICON_TYPE_STAR;

type DifficultyLevelProps = {
  rating?: number;
  type?: IconType;
  iconSize?: IconSize;
  hideEmpty?: boolean;
};

export default function DifficultyLevel({
  rating = 0,
  type = ICON_TYPE_STAR,
  iconSize = "medium",
  hideEmpty = false,
}: DifficultyLevelProps) {
  if (!rating || rating === 0) {
    return null;
  }

  const totalIcons = 5;
  const icons = [];

  const fullIcons = Math.floor(rating / 2);
  const hasHalfIcon = rating % 2 !== 0;
  const emptyIcons = totalIcons - fullIcons - (hasHalfIcon ? 1 : 0);

  const getFullIcon = () => {
    if (type === ICON_TYPE_HEART) return <FullHeart size={iconSize} />;
    if (type === ICON_TYPE_SCISSOR) return <FullScissor size={iconSize} />;
    if (type === ICON_TYPE_STAR) return <FullStar size={iconSize} />;
    return <FullHeart size={iconSize} />;
  };

  const getEmptyIcon = () => {
    if (type === ICON_TYPE_HEART) return <EmptyHeart size={iconSize} />;
    if (type === ICON_TYPE_SCISSOR) return <EmptyScissor size={iconSize} />;
    if (type === ICON_TYPE_STAR) return <EmptyStar size={iconSize} />;
    return <EmptyStar size={iconSize} />;
  };

  const getHalfIcon = () => {
    if (type === ICON_TYPE_STAR) return <HalfStar size={iconSize} />;
    if (type === ICON_TYPE_HEART) return <HalfHeart size={iconSize} />;
    if (type === ICON_TYPE_SCISSOR) return <HalfScissor size={iconSize} />;
    return <HalfHeart size={iconSize} />;
  };

  for (let i = 0; i < fullIcons; i++) {
    icons.push(
      <React.Fragment key={`full-${i}`}>{getFullIcon()}</React.Fragment>,
    );
  }

  if (hasHalfIcon) {
    icons.push(<React.Fragment key="half">{getHalfIcon()}</React.Fragment>);
  }

  if (!hideEmpty) {
    for (let i = 0; i < emptyIcons; i++) {
      icons.push(
        <React.Fragment key={`empty-${i}`}>{getEmptyIcon()}</React.Fragment>,
      );
    }
  }

  return <div style={{ display: "flex", columnGap: "5px" }}>{icons}</div>;
}
