import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

function Home() {
  const { sortProp, categoryId } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onCLickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sortProp.sort.replace("-", "");
    const order = sortProp.sort[0] === `-` ? `desc` : `asc`;
    const search = searchValue ? `&search=${searchValue}` : ``;

    axios
      .get(
        `https://6454c0bbf803f34576304938.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortProp.sort, searchValue, currentPage]);

  const pizzas = items.map((pizza) => <PizzaBlock {...pizza} key={uuidv4()} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={uuidv4()} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onCLickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
}
export default Home;
