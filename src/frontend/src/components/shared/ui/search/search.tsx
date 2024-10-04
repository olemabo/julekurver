import "./search.css";

type SearchProps = {
  title?: string;
};

export function Search({ title }: SearchProps) {
  console.log(title);
  return <input className="jds-search" type="search" />;
}
