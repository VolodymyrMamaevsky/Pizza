import { useState } from "react";

const categories = ["All", "Meat", "Veg", "Grill", "Hot"];

function Categories() {
  const [activeItems, setActiveItems] = useState(0);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
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
