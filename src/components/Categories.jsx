import React from "react";

import { categories } from "../utils/constants";

function Categories() {
  const [activeItems, setActiveItems] = React.useState(0);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={`${category}_${index}`}
              onClick={() => setActiveItems(index)}
              className={activeItems === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
