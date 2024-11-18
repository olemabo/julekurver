import Image from "next/image";

export type IconSize = "small" | "medium" | "big";

type IconProps = {
  size?: IconSize;
};

const sizeMap = {
  small: 15,
  medium: 26,
  big: 30,
};

export const FullStar = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty_stars/full.svg"
      alt="Full star"
      width={dimension}
      height={dimension}
    />
  );
};

export const HalfStar = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty_stars/half.svg"
      alt="Half star"
      width={dimension}
      height={dimension}
    />
  );
};

export const EmptyStar = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty_stars/empty.svg"
      alt="Empty star"
      width={dimension}
      height={dimension}
    />
  );
};

export const FullHeart = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/heart/full.svg"
      alt="Full heart"
      width={dimension}
      height={dimension}
    />
  );
};

export const HalfHeart = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/heart/half.svg"
      alt="Half heart"
      width={dimension}
      height={dimension}
    />
  );
};

export const EmptyHeart = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/heart/empty.svg"
      alt="Empty heart"
      width={dimension}
      height={dimension}
    />
  );
};

export const FullScissor = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/scissor/full.svg"
      alt="Full scissor"
      width={dimension}
      height={dimension}
    />
  );
};

export const HalfScissor = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/scissor/half.svg"
      alt="Half scissor"
      width={dimension}
      height={dimension}
    />
  );
};

export const EmptyScissor = ({ size = "medium" }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <Image
      src="/images/icons/difficulty/scissor/empty.svg"
      alt="Empty scissor"
      width={dimension}
      height={dimension}
    />
  );
};
