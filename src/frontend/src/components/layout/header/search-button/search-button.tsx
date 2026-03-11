import { searchButtonId } from "../types";
import styles from "./search-button.module.css";

type SearchButtonProps = {
  handleOnClick: () => void;
  isActive: boolean;
};

export default function SearchButton({
  handleOnClick,
  isActive,
}: SearchButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className={`${styles.searchButton} ${isActive ? styles.active : ""}`}
      id={searchButtonId}
      aria-label="Klikk for å gjøre søk på nettsiden"
      title="Søkeknapp"
    >
      <div className={`${styles.searchIcon} ${styles.active}`}></div>
    </button>
  );
}
