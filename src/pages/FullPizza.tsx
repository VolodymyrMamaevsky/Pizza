import axios from "axios";
import React from "react";

import { useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6454c0bbf803f34576304938.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Cannot get pizza");
      }
    }

    fetchPizza();
    // eslint-disable-next-line
  }, []);

  if (!pizza) {
    return <>loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}$</h4>
    </div>
  );
};

export default FullPizza;
