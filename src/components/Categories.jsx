import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const categories = ["All", "Meat", "Veg", "Grill", "Hot"];

function Categories() {
  const [activeItems, setActiveItems] = useState(0);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={uuidv4()}
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
