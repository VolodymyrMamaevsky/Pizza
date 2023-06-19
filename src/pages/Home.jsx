import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

function Home() {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "Popular (up)",
    sort: "rating",
  });

  const category = categoryId > 0 ? `category=${categoryId}` : ``;
  const sortBy = sortType.sort.replace("-", "");
  const order = sortType.sort[0] === `-` ? `desc` : `asc`;
  const search = searchValue ? `&search=${searchValue}` : ``;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6454c0bbf803f34576304938.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((pizza) => <PizzaBlock {...pizza} key={uuidv4()} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={uuidv4()} />
  ));

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
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
}

export default Home;
