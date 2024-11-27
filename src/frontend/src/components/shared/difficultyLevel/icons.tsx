import Image from "next/image";
import DisplayHjertekurvSvgWithColors from "../images/displayHjertekurvSvgWithColors";

export type IconSize = "small" | "medium" | "big";

type IconProps = {
  size?: IconSize;
  color?: string;
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

export const FullHeart = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/heart/full.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/heart_darkred/full.svg"
          alt="Full heart"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};

export const HalfHeart = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/heart/half.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/heart_darkred/half.svg"
          alt="Half heart"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};

export const EmptyHeart = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/heart/empty.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/heart_darkred/empty.svg"
          alt="Half heart"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};

export const FullScissor = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/scissor/full.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/scissor_darkred/full.svg"
          alt="Full scissor"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};

export const HalfScissor = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/scissor/half.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/scissor_darkred/half.svg"
          alt="Half scissor"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};

export const EmptyScissor = ({ size = "medium", color }: IconProps) => {
  const dimension = sizeMap[size];
  return (
    <>
      {color ? (
        <DisplayHjertekurvSvgWithColors
          imageUrl={"/images/icons/difficulty/scissor/empty.svg"}
          fillColor1={color}
          fillColor2={"white"}
          imageSize={{
            height: dimension.toString() + "px",
            width: dimension.toString() + "px",
          }}
        />
      ) : (
        <Image
          src="/images/icons/difficulty/scissor_darkred/empty.svg"
          alt="Empty scissor"
          width={dimension}
          height={dimension}
        />
      )}
    </>
  );
};
