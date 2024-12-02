import { DisplayTheme } from "@/constants/displayTheme";
import Heading from "@/components/shared/ui/heading/heading";
import "./contentHeader.scss";

type ContentHeaderProps = {
  title: string;
  theme: DisplayTheme;
};

export default function ContentHeader({ title, theme }: ContentHeaderProps) {
  return (
    <div className={`content-header ${theme}`}>
      <Heading theme={theme} headingLevel="h2">
        {title}
      </Heading>
    </div>
  );
}
