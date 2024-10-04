import './search.css';

type SearchProps = {
  title?: string;
};

export function Search({ 
  title 
}: SearchProps) {
  return <input className="jds-search" type="search" />;
}
