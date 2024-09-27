import './search.scss';

type SearchProps = {
  title?: string;
};

export function Search({ title }: SearchProps) {
  console.log(title);
  return <input className="jds-" type="search" />;
}
