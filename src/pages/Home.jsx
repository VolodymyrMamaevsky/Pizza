import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Popular(DESC)",
    sort: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6454c0bbf803f34576304938.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&sortBy=${sortType.sort.replace("-", "")}&order=${
        sortType.sort[0] === `-` ? `asc` : `desc`
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort sortType={sortType} onClickType={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={uuidv4()} />)
          : items.map((pizza) => <PizzaBlock {...pizza} key={uuidv4()} />)}
      </div>
    </div>
  );
}

export default Home;
