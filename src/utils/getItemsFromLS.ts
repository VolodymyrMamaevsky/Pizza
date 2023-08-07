import { countTotalPrice } from "./countTotalPrice";
export const getItemsFromLS = () => {
  const data = localStorage.getItem("cartItems");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = countTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
