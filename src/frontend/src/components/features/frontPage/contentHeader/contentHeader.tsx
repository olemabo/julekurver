import "./contentHeader.css";

type ConentHeaderType = "white" | "black";

type ContentHeaderProps = {
  title: string;
  format: ConentHeaderType;
};

export default function ContentHeader({ title, format }: ContentHeaderProps) {
  return (
    <div className={`content-header ${format}`}>
      <h2>{title}</h2>
    </div>
  );
}
