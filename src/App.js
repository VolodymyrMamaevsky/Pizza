import React from "react";

import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6454c0bbf803f34576304938.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => {
              return (
                <PizzaBlock {...pizza} key={`${pizza.name}_${pizza.id}`} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
