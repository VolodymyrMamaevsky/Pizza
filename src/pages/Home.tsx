import React from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import NotFound from "./NotFound";
import {
  filterSelector,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import {
  fetchPizzas,
  FetchPizzasArguments,
  pizzaDataSelector,
} from "../redux/slices/pizzasSlice";
import { sortList } from "../utils/constants";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const { items, status } = useSelector(pizzaDataSelector);
  const { sortProp, categoryId, currentPage, searchValue } =
    useSelector(filterSelector);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const onCLickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sortProp.sort.replace("-", "");
    const order = sortProp.sort[0] === `-` ? `desc` : `asc`;
    const search = searchValue ? `&search=${searchValue}` : ``;

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      })
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProp: sortProp.sort,
        categoryId,
        currentPage,
      });
      navigate(`/?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortProp, searchValue, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as FetchPizzasArguments;
      const sort = sortList.find((obj) => obj.sort === params.sortBy);
      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: params.currentPage,
          sortProp: sort || sortList[0],
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortProp, searchValue, currentPage]);

  const pizzas = items.map((pizza: any) => (
    <PizzaBlock {...pizza} key={uuidv4()} />
  ));

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
      {status === "error" ? (
        <NotFound />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
