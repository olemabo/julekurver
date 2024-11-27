import HowToSection, { POSITION_TOP } from "@/components/shared/howTo/howTo";
import LazyImage from "@/components/shared/lazyImage/LazyImage";
import "./listWithIllustration.css";

export type ListhWithIllustraionProps = {
  number: number;
  illustrationSrc: string;
  altText: string;
  children: React.ReactNode;
  useLazyImage?: boolean;
  imageSize?: { height: number; width: number };
};

export default function ListWithIllustraion({
  number,
  illustrationSrc,
  altText,
  children,
  useLazyImage = false,
  imageSize = { height: 125, width: 260 },
}: ListhWithIllustraionProps) {
  const { width: imageWidth, height: imageHeight } = imageSize;

  return (
    <li className="list-illustration-container">
      <HowToSection isDarkRed number={number} position={POSITION_TOP}>
        {children}
      </HowToSection>
      {useLazyImage ? (
        <LazyImage
          src={illustrationSrc}
          alt="Image 1"
          imageSize={imageSize}
          className="illustration-image"
        />
      ) : (
        <img
          alt={altText}
          className="illustration-image"
          height={imageHeight}
          width={imageWidth}
          src={illustrationSrc}
        />
      )}
    </li>
  );
}

export type OrderedListWithIllustrationWrapperProps = {
  children: React.ReactNode;
};

export function OrderedListWithIllustrationWrapper({
  children,
}: OrderedListWithIllustrationWrapperProps) {
  return <ol style={{ margin: "48px 0" }}>{children}</ol>;
}
