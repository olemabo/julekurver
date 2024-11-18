import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { Category } from "./useCategories";

import "./categories.css";

type CategoryFilterToggleProps = {
  hjertekurver: Hjertekurv[];
  selectedCategories: number[];
  handleCategoryToggle: (categoryId: number) => void;
};
function CategoryFilterToggle({
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

  return (
    <div className="filter-buttons">
      {uniqueCategories.map((category) => (
        <label htmlFor={`toggleButton-${category.id}`} key={category.id}>
          <input id={`toggleButton-${category.id}`} type="checkbox" />
          <span
            className={`filter-button ${selectedCategories.includes(category.id) ? "active" : ""}`}
            onClick={() => handleCategoryToggle(category.id)}
          >
            {category.name}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CategoryFilterToggle;
