import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { Category } from "../../useCategories";

import "./categories.scss";

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

  const handleCategoryToggleKeyDown = (categoryId: number, key: string) => {
    if (key === "Enter" || key === " ") {
      handleCategoryToggle(categoryId);
    }
  };

  return (
    <div className="filter-buttons">
      {uniqueCategories.map((category) => (
        <label htmlFor={`toggleButton-${category.id}`} key={category.id}>
          <input
            tabIndex={-1}
            id={`toggleButton-${category.id}`}
            type="checkbox"
          />
          <span
            className={`filter-button ${selectedCategories.includes(category.id) ? "active" : ""}`}
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

export default CategoryFilterToggle;
