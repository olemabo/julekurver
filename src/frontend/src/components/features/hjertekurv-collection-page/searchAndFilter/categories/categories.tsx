import { Hjertekurv } from "@/types/hjertekurv";

import { Category } from "@/types/category";
import styles from "./categories.module.css";

type CategoryFilterToggleProps = {
  hjertekurver: Hjertekurv[];
  selectedCategories: number[];
  handleCategoryToggle: (categoryId: number) => void;
};

export default function CategoryFilterToggle({
  hjertekurver,
  selectedCategories,
  handleCategoryToggle,
}: CategoryFilterToggleProps) {
  const uniqueCategories = Array.from(
    hjertekurver
      .flatMap((hjertekurv) => hjertekurv.categories || [])
      .reduce((map, category) => {
        map.set(category.id, category);
        return map;
      }, new Map<number, Category>())
      .values(),
  );

  const handleCategoryToggleKeyDown = (categoryId: number, key: string) => {
    if (key === "Enter" || key === " ") {
      handleCategoryToggle(categoryId);
    }
  };

  return (
    <div className={styles.filterButtons}>
      {uniqueCategories.map((category) => (
        <label htmlFor={`toggleButton-${category.id}`} key={category.id}>
          <input
            tabIndex={-1}
            className={styles.input}
            id={`toggleButton-${category.id}`}
            type="checkbox"
          />
          <span
            className={`${styles.filterButton} ${selectedCategories.includes(category.id) ? styles.active : ""}`}
            onClick={() => handleCategoryToggle(category.id)}
            onKeyDown={(e) => handleCategoryToggleKeyDown(category.id, e.key)}
            tabIndex={0}
          >
            {category.name}
          </span>
        </label>
      ))}
    </div>
  );
}
